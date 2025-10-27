import { computed, onMounted, ref, nextTick, type EmitFn, type UnwrapRef } from 'vue';
import {
    add,
    addDays,
    addMonths,
    getHours,
    getMinutes,
    getMonth,
    getSeconds,
    getYear,
    set,
    startOfWeek,
    subMonths,
    type Day,
} from 'date-fns';

import { useDateUtils, useRemapper, useValidation, useContext, useHelperFns } from '@/composables';
import { useTimePickerUtils } from '@/components/TimePicker/useTimePickerUtils.ts';
import { useComponentShared } from '@/components/shared/useComponentShared.ts';

import { CMP, FlowStep } from '@/constants';
import type { BasePropsWithDefaults, CalendarDay, CalendarWeek, Marker, TimeInternalModel, TimeKey } from '@/types';

export interface DatePickerEmits {
    mount: [cmp: CMP];
    'update-flow-step': [];
    'reset-flow': [];
    'focus-menu': [];
    'select-date': [];
    'time-update': [];
    'auto-apply': [ignoreClose?: boolean];
}

export const useDatePicker = (
    props: BasePropsWithDefaults,
    emit: EmitFn<DatePickerEmits>,
    triggerCalendarTransition: (inst?: number) => void,
    updateFlow: () => void,
) => {
    const tempRange = ref<Date[]>([]);
    const lastScrollTime = ref(new Date());
    const clickedDate = ref<CalendarDay | undefined>();

    const {
        getDate,
        rootEmit,
        calendars,
        month,
        year,
        time,
        modelValue,
        rootProps,
        today,
        state,
        defaults: { multiCalendars, startTime, range, config, safeDates, multiDates, timeConfig, flow },
    } = useContext();
    const { validateMonthYearInRange, isDisabled, isDateRangeAllowed, checkMinMaxRange } = useValidation();
    const { updateTimeValues, getSetDateTime, assignTime, assignStartTime, validateTime, disabledTimesConfig } =
        useTimePickerUtils(updateFlow);
    const { resetDateTime, setTime, isDateBefore, isDateEqual, getDaysInBetween } = useDateUtils();
    const { checkRangeAutoApply, getRangeWithFixedDate, handleMultiDatesSelect, setPresetDate } = useComponentShared();
    const { getMapDate } = useHelperFns();
    useRemapper(() => mapInternalModuleValues(state.isTextInputDate));

    const shouldUpdateMonthView = (isAction: boolean) => {
        if (!config.value.keepViewOnOffsetClick || isAction) return true;
        return !clickedDate.value;
    };

    // Any update for month or year value will go through this function
    const setCalendarMonthYear = (
        instance: number,
        month: number | null,
        year: number | null,
        isAction: boolean = false,
    ): void => {
        if (shouldUpdateMonthView(isAction)) {
            calendars.value[instance] ??= calendars.value[instance] = { month: 0, year: 0 };
            calendars.value[instance].month = month ?? calendars.value[instance]?.month;
            calendars.value[instance].year = year ?? calendars.value[instance]?.year;
        }
    };

    const selectOnAutoApply = () => {
        if (rootProps.autoApply) {
            emit('select-date');
        }
    };

    const setStartTime = () => {
        if (startTime.value) {
            assignStartTime(startTime.value);
        }
    };

    onMounted(() => {
        if (!modelValue.value) {
            setStartDate();
            setStartTime();
        }
        mapInternalModuleValues(true);
        if (rootProps.focusStartDate && rootProps.startDate) {
            setStartDate();
        }
    });

    const isFlowLastStep = computed(() => {
        if (flow.value?.steps?.length && !flow.value?.partial) {
            return props.flowStep === flow.value.steps.length;
        }
        return true;
    });

    const autoApply = (): void => {
        if (rootProps.autoApply && isFlowLastStep.value) {
            emit('auto-apply', flow.value?.partial ? props.flowStep !== flow.value?.steps?.length : false);
        }
    };

    const mapInternalModuleValues = (fromMount = false): void => {
        if (modelValue.value) {
            if (Array.isArray(modelValue.value)) {
                tempRange.value = modelValue.value;
                return assignExistingModelValueArr(fromMount);
            }
            return assignSingleValue(modelValue.value, fromMount);
        }
        if (multiCalendars.value.count && fromMount && !rootProps.startDate)
            return assignMonthAndYear(getDate(), fromMount);
    };

    const shouldAssignMultiSolo = () => {
        if (Array.isArray(modelValue.value) && range.value.enabled) {
            return getMonth(modelValue.value[0]!) === getMonth(modelValue.value[1] ?? modelValue.value[0]!);
        }
        return false;
    };

    const getNextMonthYear = (date: Date): { month: number; year: number } => {
        const newDate = addMonths(date, 1);
        return { month: getMonth(newDate), year: getYear(newDate) };
    };

    // Assign month and year values per date
    const assignMonthAndYear = (date = getDate(), fromMount = false): void => {
        if (!multiCalendars.value.count || !multiCalendars.value.static || fromMount) {
            setCalendarMonthYear(0, getMonth(date), getYear(date));
        }
        if (
            multiCalendars.value.count &&
            (!modelValue.value || shouldAssignMultiSolo() || !multiCalendars.value.solo) &&
            (multiCalendars.value.solo ? fromMount : true)
        ) {
            for (let i = 1; i < multiCalendars.value.count; i++) {
                const prevDate = set(getDate(), { month: month.value(i - 1), year: year.value(i - 1) });
                const nextMonth = add(prevDate, { months: 1 });
                calendars.value[i] = { month: getMonth(nextMonth), year: getYear(nextMonth) };
            }
        }
    };

    // Assign singe value
    const assignSingleValue = (date: Date, fromMount: boolean): void => {
        assignMonthAndYear(date);
        assignTime('hours', getHours(date));
        assignTime('minutes', getMinutes(date));
        assignTime('seconds', getSeconds(date));
        if (multiCalendars.value.count && fromMount) {
            handleNextMonthYear();
        }
    };

    /**
     * In case of multi-calendars, check if the range can fit within the view
     * If it can, set focus index to the first date in the range, rest will be auto adjusted
     * In case of solo multi calendars, always take 0 index as reference
     */
    const getRangeFocusIndex = (dates: Date[]) => {
        if (multiCalendars.value.count) {
            if (multiCalendars.value.solo) return 0;
            const startMonth = getMonth(dates[0]!);
            const endMonth = getMonth(dates[1]!);
            const showInTheSameView = Math.abs(endMonth - startMonth) < multiCalendars.value.count;
            return showInTheSameView ? 0 : 1;
        }
        return 1;
    };
    // Assign range values
    const assignRangeValue = (dates: Date[], fromMount: boolean) => {
        if (dates[1] && range.value.showLastInRange) {
            assignMonthAndYear(dates[getRangeFocusIndex(dates)], fromMount);
        } else {
            assignMonthAndYear(dates[0], fromMount);
        }
        const getValue = (mapper: (date: Date) => number, keys: TimeKey): number[] => [
            mapper(dates[0]!),
            dates?.[1] ? mapper(dates[1]) : (time[keys]! as number[])[1]!,
        ];
        assignTime('hours', getValue(getHours, 'hours'));
        assignTime('minutes', getValue(getMinutes, 'minutes'));
        assignTime('seconds', getValue(getSeconds, 'seconds'));
    };

    // Assign range values, or in case of multiDates, set
    const assignExistingMulti = (dates: Date[], fromMount: boolean) => {
        if ((range.value.enabled || rootProps.weekPicker) && !multiDates.value.enabled) {
            return assignRangeValue(dates, fromMount);
        }

        if (multiDates.value.enabled && fromMount) {
            const lastEntry = dates[dates.length - 1];
            return assignSingleValue(lastEntry!, fromMount);
        }
    };

    const assignExistingModelValueArr = (fromMount: boolean) => {
        const dates = modelValue.value as Date[];
        assignExistingMulti(dates, fromMount);
        if (multiCalendars.value.count && multiCalendars.value.solo) {
            handleNextMonthYear();
        }
    };

    // Handle month change on scroll/arrow/swipe
    const autoChangeMonth = (increment: number, instance: number) => {
        const initialDate = set(getDate(), { month: month.value(instance), year: year.value(instance) });
        const date = increment < 0 ? addMonths(initialDate, 1) : subMonths(initialDate, 1);
        if (validateMonthYearInRange(getMonth(date), getYear(date), increment < 0, rootProps.preventMinMaxNavigation)) {
            setCalendarMonthYear(instance, getMonth(date), getYear(date));
            rootEmit('update-month-year', { instance, month: getMonth(date), year: getYear(date) });
            if (multiCalendars.value.count && !multiCalendars.value.solo) {
                autoChangeMultiCalendars(instance);
            }
            triggerCalendarTransition();
        }
    };

    // In multi calendar mode, when the month/year is changed, sync all calendars
    const autoChangeMultiCalendars = (instance: number): void => {
        for (let i = instance - 1; i >= 0; i--) {
            const date = subMonths(set(getDate(), { month: month.value(i + 1), year: year.value(i + 1) }), 1);
            setCalendarMonthYear(i, getMonth(date), getYear(date));
        }
        for (let i = instance + 1; i <= multiCalendars.value.count - 1; i++) {
            const date = addMonths(set(getDate(), { month: month.value(i - 1), year: year.value(i - 1) }), 1);
            setCalendarMonthYear(i, getMonth(date), getYear(date));
        }
    };

    /**
     * Extracted method to map month and year
     */
    const handleNextMonthYear = (): void => {
        if (Array.isArray(modelValue.value) && modelValue.value.length === 2) {
            const date = getDate(getDate(modelValue.value[1] ?? addMonths(modelValue.value[0]!, 1)));
            const [firstMonth, firstYear] = [getMonth(modelValue.value[0]!), getYear(modelValue.value[0]!)];
            const [secondMonth, secondYear] = [getMonth(modelValue.value[1]!), getYear(modelValue.value[1]!)];

            if (
                (firstMonth !== secondMonth || (firstMonth === secondMonth && firstYear !== secondYear)) &&
                multiCalendars.value.solo
            ) {
                setCalendarMonthYear(1, getMonth(date), getYear(date));
            }
        } else if (modelValue.value && !Array.isArray(modelValue.value)) {
            setCalendarMonthYear(0, getMonth(modelValue.value), getYear(modelValue.value));
            assignMonthAndYear(getDate());
        }
    };

    const setStartDate = () => {
        if (rootProps.startDate) {
            setCalendarMonthYear(0, getMonth(getDate(rootProps.startDate)), getYear(getDate(rootProps.startDate)));
            if (multiCalendars.value.count) {
                autoChangeMultiCalendars(0);
            }
        }
    };

    // Handle mouse scroll
    const handleScroll = (event: WheelEvent, instance: number): void => {
        if (config.value.monthChangeOnScroll) {
            const timeDelta: number = Date.now() - lastScrollTime.value.getTime();
            const scrollDistance = Math.abs(event.deltaY);
            let minPause: number = 500;
            if (scrollDistance > 1) minPause = 100;
            if (scrollDistance > 100) minPause = 0;
            if (timeDelta > minPause) {
                lastScrollTime.value = new Date();
                autoChangeMonth(
                    config.value.monthChangeOnScroll === 'inverse' ? event.deltaY : -event.deltaY,
                    instance,
                );
            }
        }
    };

    // Handle arrow key
    const handleArrow = (arrow: 'left' | 'right', instance: number, vertical = false): void => {
        if (config.value.monthChangeOnArrows && rootProps.vertical === vertical) {
            handleSwipe(arrow, instance);
        }
    };

    // Handle touch swipe
    const handleSwipe = (direction: 'left' | 'right', instance: number): void => {
        autoChangeMonth(direction === 'right' ? -1 : 1, instance);
    };

    // Check if the calendar day has a marker
    const getMarker = (date: UnwrapRef<CalendarDay>): Marker | undefined => {
        if (safeDates.value.markers) {
            return getMapDate(date.value, safeDates.value.markers);
        }
        return undefined;
    };

    const getSixWeeksMode = (firstWeekday: number, gapToEnd: number) => {
        switch (rootProps.sixWeeks === true ? 'append' : rootProps.sixWeeks) {
            case 'prepend':
                return [true, false];
            case 'center':
                return [firstWeekday == 0, true];
            case 'fair':
                return [firstWeekday == 0 || gapToEnd > firstWeekday, true];
            case 'append':
                return [false, false];
            default:
                return [false, false];
        }
    };

    const handleSixWeeks = (weeks: CalendarWeek[], firstDate: Date, lastDate: Date, weekStart: Day): CalendarWeek[] => {
        if (rootProps.sixWeeks && weeks.length < 6) {
            const diff = 6 - weeks.length;

            const firstWeekday = (firstDate.getDay() + 7 - weekStart) % 7;
            const lastWeekday = (lastDate.getDay() + 7 - weekStart) % 7;
            const gapToEnd = 6 - lastWeekday;
            const [requiresLeadingWeek, doesAlternate] = getSixWeeksMode(firstWeekday, gapToEnd);

            for (let i = 1; i <= diff; i++) {
                const addLeadingWeek = doesAlternate ? !!(i % 2) == requiresLeadingWeek : requiresLeadingWeek;
                if (addLeadingWeek) {
                    const first = weeks[0]!.days[0];
                    const days = getWeekDays(addDays(first!.value, -7), getMonth(firstDate));
                    weeks.unshift({ days });
                } else {
                    const lastWeek = weeks[weeks.length - 1];
                    const last = lastWeek!.days[lastWeek!.days.length - 1];
                    const days = getWeekDays(addDays(last!.value, 1), getMonth(firstDate));
                    weeks.push({ days });
                }
            }
        }
        return weeks;
    };
    // Get 7 days from the provided start date, month is used to check whether the date is from the specified month or in the offset
    const getWeekDays = (startDay: Date, month: number): CalendarDay[] => {
        const startDate = getDate(startDay);
        const dates = [];
        for (let i = 0; i < 7; i++) {
            const next = addDays(startDate, i);
            const isNext = getMonth(next) !== month;
            dates.push({
                text: rootProps.hideOffsetDates && isNext ? '' : next.getDate(),
                value: next,
                current: !isNext,
                classData: {},
            });
        }
        return dates;
    };

    // Get days for the calendar to be displayed in a table grouped by weeks
    const getCalendarDays = (month: number, year: number): CalendarWeek[] => {
        const weeks: CalendarWeek[] = [];
        const firstDate = getDate(new Date(year, month));
        const lastDate = getDate(new Date(year, month + 1, 0));

        const weekStartsOn = rootProps.weekStart as Day;

        const firstDateInCalendar = startOfWeek(firstDate, { weekStartsOn });

        const addDaysToWeek = (date: Date) => {
            const days = getWeekDays(date, month);
            weeks.push({ days });
            if (
                !weeks[weeks.length - 1]!.days.some((day) => isDateEqual(getDate(day.value), resetDateTime(lastDate)))
            ) {
                const nextDate = addDays(date, 7);
                addDaysToWeek(nextDate);
            }
        };
        addDaysToWeek(firstDateInCalendar);

        return handleSixWeeks(weeks, firstDate, lastDate, weekStartsOn);
    };

    // Called on selectDate when the regular single picker is used
    const handleSingleDateSelect = (day: CalendarDay) => {
        const date = setTime(
            { hours: time.hours as number, minutes: time.minutes as number, seconds: getSecondsValue() },
            getDate(day.value),
        );
        rootEmit('date-click', date);
        if (multiDates.value.enabled) {
            handleMultiDatesSelect(date, multiDates.value.limit);
        } else {
            modelValue.value = date;
        }
        updateFlow();
        nextTick().then(() => {
            autoApply();
        });
    };

    const includesDisabled = (day: Date) => {
        if (!range.value.noDisabledRange) return false;
        const daysBetween = getDaysInBetween(tempRange.value[0]!, day);
        return daysBetween.some((date) => isDisabled(date));
    };

    // Before range selecting, ensure that modelValue is properly set
    const presetTempRange = () => {
        tempRange.value = modelValue.value ? (modelValue.value as Date[]).slice().filter((val) => !!val) : [];
        if (tempRange.value.length === 2 && !(range.value.fixedStart || range.value.fixedEnd)) {
            tempRange.value = [];
        }
    };

    // Handles auto range selecting
    const handleAutoRange = (day: CalendarDay, isNext: boolean) => {
        const autoRange = [getDate(day.value), addDays(getDate(day.value), +(range.value.autoRange as number))];
        if (isDateRangeAllowed(autoRange)) {
            if (isNext) {
                handleNextCalendarAutoRange(day.value);
            }
            tempRange.value = autoRange;
        } else {
            rootEmit('invalid-date', day.value);
        }
    };

    /**
     * When using next calendar on auto range mode, adjust month and year for both calendars
     */
    const handleNextCalendarAutoRange = (date: string | Date) => {
        const monthValue = getMonth(getDate(date));
        const yearValue = getYear(getDate(date));
        setCalendarMonthYear(0, monthValue, yearValue);
        if (multiCalendars.value.count > 0) {
            for (let i = 1; i < multiCalendars.value.count; i++) {
                const next = getNextMonthYear(
                    set(getDate(date), { year: year.value(i - 1), month: month.value(i - 1) }),
                );
                setCalendarMonthYear(i, next.month, next.year);
            }
        }
    };

    // Handle range with fixed start/end
    const setFixedDateRange = (day: CalendarDay) => {
        if (
            includesDisabled(day.value) ||
            !checkMinMaxRange(day.value, modelValue.value, range.value.fixedStart ? 0 : 1)
        ) {
            return rootEmit('invalid-date', day.value);
        }
        tempRange.value = getRangeWithFixedDate(getDate(day.value));
    };

    // Called on selectDate when range mode is used
    const handleRangeDatesSelect = (day: CalendarDay, isNext: boolean) => {
        presetTempRange();
        if (range.value.autoRange) return handleAutoRange(day, isNext);
        if (range.value.fixedStart || range.value.fixedEnd) return setFixedDateRange(day);
        if (!tempRange.value[0]) {
            tempRange.value[0] = getDate(day.value);
            rootEmit('range-start', tempRange.value[0]);
        } else if (checkMinMaxRange(getDate(day.value), modelValue.value) && !includesDisabled(day.value)) {
            if (isDateBefore(getDate(day.value), getDate(tempRange.value[0]))) {
                tempRange.value.unshift(getDate(day.value));
                rootEmit('range-end', tempRange.value[0]);
            } else {
                tempRange.value[1] = getDate(day.value);
                rootEmit('range-end', tempRange.value[1]);
            }
        } else {
            rootEmit('invalid-date', day.value);
        }
    };

    // Check if seconds are enabled, and return proper value
    const getSecondsValue = (getFirst = true): number => {
        if (timeConfig.value.enableSeconds) {
            if (Array.isArray(time.seconds)) {
                return getFirst ? time.seconds[0]! : time.seconds[1]!;
            }
            return time.seconds;
        }
        return 0;
    };

    // Assign time to a temp range item
    const assignTimeToRangeDate = (index: number) => {
        tempRange.value[index] = setTime(
            {
                hours: (time.hours as number[])[index],
                minutes: (time.minutes as number[])[index],
                seconds: getSecondsValue(index !== 1),
            },
            tempRange.value[index],
        );
    };

    const validateRangeAfterTimeSet = () => {
        if (tempRange.value[0] && tempRange.value[1]) {
            if (+tempRange.value?.[0] > +tempRange.value?.[1]) {
                tempRange.value.reverse();
                rootEmit('range-start', tempRange.value[0]);
                rootEmit('range-end', tempRange.value[1]);
            }
        }
    };

    // After range date is select, ensure that proper times are set and assign to modelValue
    const postRangeSelect = () => {
        if (tempRange.value.length) {
            if (tempRange.value[0] && !tempRange.value[1]) {
                assignTimeToRangeDate(0);
            } else {
                assignTimeToRangeDate(0);
                assignTimeToRangeDate(1);
                updateFlow();
            }
            validateRangeAfterTimeSet();
            modelValue.value = tempRange.value.slice();

            checkRangeAutoApply(
                tempRange.value,
                emit,
                tempRange.value.length < 2 || props.flowStep !== flow.value?.steps?.length,
            );
        }
    };

    /**
     * Called when the date in the calendar is clicked
     * Do a necessary formatting and assign value to internal
     */
    const selectDate = (day: CalendarDay, isNext = false): void => {
        if (isDisabled(day.value) || (!day.current && rootProps.hideOffsetDates))
            return rootEmit('invalid-date', day.value);
        clickedDate.value = structuredClone(day);

        if (!range.value.enabled) return handleSingleDateSelect(day);

        if (Array.isArray(time.hours) && Array.isArray(time.minutes) && !multiDates.value.enabled) {
            handleRangeDatesSelect(day, isNext);
            postRangeSelect();
        }
    };

    // Handles selection of month/year
    const updateMonthYear = (instance: number, val: { month: number; year: number; fromNav?: boolean }): void => {
        setCalendarMonthYear(instance, val.month, val.year, true);

        if (multiCalendars.value.count && !multiCalendars.value.solo) {
            autoChangeMultiCalendars(instance);
        }
        rootEmit('update-month-year', { instance, month: val.month, year: val.year });
        triggerCalendarTransition(multiCalendars.value.solo ? instance : undefined);

        const flowActive = flow.value?.steps?.length ? flow.value.steps[props.flowStep] : undefined;
        if (!val.fromNav && (flowActive === FlowStep.month || flowActive === FlowStep.year)) {
            updateFlow();
        }
    };

    // Called when the preset date is clicked
    const presetDate = (value: Date[] | string[] | Date | string): void => {
        setPresetDate({
            value,
        });

        selectOnAutoApply();
        if (rootProps.multiCalendars) {
            nextTick().then(() => mapInternalModuleValues(true));
        }
    };

    // Select current date on now button
    const selectCurrentDate = (): void => {
        const date = getDate();
        if (!range.value.enabled && !multiDates.value.enabled) {
            modelValue.value = date;
        } else if (modelValue.value && Array.isArray(modelValue.value) && modelValue.value[0]) {
            if (multiDates.value.enabled) {
                modelValue.value = [...modelValue.value, date];
            } else {
                modelValue.value = isDateBefore(date, modelValue.value[0])
                    ? [date, modelValue.value[0]]
                    : [modelValue.value[0], date];
            }
        } else {
            modelValue.value = [date];
        }

        selectOnAutoApply();
    };

    const handleTimeUpdate = () => {
        if (Array.isArray(modelValue.value)) {
            if (multiDates.value.enabled) {
                const lastEntry = multiDatesLast();
                modelValue.value[modelValue.value.length - 1] = getSetDateTime(lastEntry as Date);
            } else {
                modelValue.value = modelValue.value.map((date, i) => {
                    if (date) return getSetDateTime(date, i);
                    return date;
                });
            }
        } else {
            modelValue.value = getSetDateTime(modelValue.value);
        }
        emit('time-update');
    };

    // Get last date in the multi dates arr
    const multiDatesLast = (): Date | null => {
        if (Array.isArray(modelValue.value) && modelValue.value.length) {
            return modelValue.value[modelValue.value.length - 1]!;
        }
        return null;
    };

    const updateTime = (values: TimeInternalModel) => {
        let ev = '';
        if (range.value.enabled && Array.isArray(modelValue.value)) {
            Object.keys(values).forEach((key) => {
                const rangeVal = values[key as keyof typeof values];
                if (Array.isArray(rangeVal)) {
                    if (time[key][0] !== rangeVal[0]) {
                        ev = 'range-start';
                    }
                    if (time[key][1] !== rangeVal[1]) {
                        ev = 'range-start';
                    }
                }
            });
        }
        updateTimeValues(values, handleTimeUpdate);
        if (ev) {
            rootEmit(ev as never, (modelValue.value as Date[])[ev === 'range-start' ? 0 : 1]);
        }
    };

    return {
        calendars,
        modelValue,
        month,
        year,
        time,
        disabledTimesConfig,
        today,
        validateTime,
        getCalendarDays,
        getMarker,
        handleScroll,
        handleSwipe,
        handleArrow,
        selectDate,
        updateMonthYear,
        presetDate,
        selectCurrentDate,
        updateTime,
        assignMonthAndYear,
        setStartTime,
    };
};
