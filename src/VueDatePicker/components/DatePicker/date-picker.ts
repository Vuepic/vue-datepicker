import { computed, onMounted, ref, nextTick } from 'vue';
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
} from 'date-fns';

import {
    getDate,
    getDaysInBetween,
    getNextMonthYear,
    isDateBefore,
    isDateEqual,
    resetDateTime,
    setDateTime,
} from '@/utils/date-utils';
import { useDefaults, useModel, useValidation } from '@/composables';
import { getMapDate, isNumNullish } from '@/utils/util';
import { isNumberArray } from '@/utils/type-guard';
import { useTimePickerUtils } from '@/components/TimePicker/time-picker-utils';
import {
    checkRangeAutoApply,
    getRangeWithFixedDate,
    handleMultiDatesSelect,
    setPresetDate,
} from '@/composables/shared';
import { FlowStep } from '@/constants';

import type { ICalendarDate, ICalendarDay, WeekStartNum, IMarker, VueEmit, TimeType } from '@/interfaces';
import type { UnwrapRef } from 'vue';
import type { PickerBasePropsType } from '@/props';
import { dateToTimezoneSafe } from '@/utils/timezone';

export const useDatePicker = (
    props: PickerBasePropsType,
    emit: VueEmit,
    triggerCalendarTransition: (inst?: number) => void,
    updateFlow: () => void,
) => {
    const tempRange = ref<Date[]>([]);
    const lastScrollTime = ref(new Date());
    const clickedDate = ref<ICalendarDay | undefined>();
    const reMap = () => mapInternalModuleValues(props.isTextInputDate);

    const { modelValue, calendars, time, today } = useModel(props, emit, reMap);
    const {
        defaultedMultiCalendars,
        defaultedStartTime,
        defaultedRange,
        defaultedConfig,
        defaultedTz,
        propDates,
        defaultedMultiDates,
    } = useDefaults(props);
    const { validateMonthYearInRange, isDisabled, isDateRangeAllowed, checkMinMaxRange } = useValidation(props);
    const { updateTimeValues, getSetDateTime, setTime, assignStartTime, validateTime, disabledTimesConfig } =
        useTimePickerUtils(props, time, modelValue, updateFlow);
    // Get month based on the calendar instance
    const month = computed(
        () =>
            (instance: number): number =>
                calendars.value[instance] ? calendars.value[instance].month : 0,
    );

    // Get year based on the calendar instance
    const year = computed(
        () =>
            (instance: number): number =>
                calendars.value[instance] ? calendars.value[instance].year : 0,
    );

    const shouldUpdateMonthView = (isAction: boolean) => {
        if (!defaultedConfig.value.keepViewOnOffsetClick || isAction) return true;
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
            if (!calendars.value[instance]) {
                calendars.value[instance] = { month: 0, year: 0 };
            }
            calendars.value[instance].month = isNumNullish(month) ? calendars.value[instance]?.month : month;
            calendars.value[instance].year = isNumNullish(year) ? calendars.value[instance]?.year : year;
        }
    };

    const selectOnAutoApply = () => {
        if (props.autoApply) {
            emit('select-date');
        }
    };

    onMounted(() => {
        if (!props.shadow) {
            if (!modelValue.value) {
                setStartDate();
                if (defaultedStartTime.value) {
                    assignStartTime(defaultedStartTime.value);
                }
            }
            mapInternalModuleValues(true);
            if (props.focusStartDate && props.startDate) {
                setStartDate();
            }
        }
    });

    const isFlowLastStep = computed(() => {
        if (props.flow?.length && !props.partialFlow) {
            return props.flowStep === props.flow.length;
        }
        return true;
    });

    const autoApply = (): void => {
        if (props.autoApply && isFlowLastStep.value) {
            emit('auto-apply', props.partialFlow ? props.flowStep !== props.flow.length : false);
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
        if (defaultedMultiCalendars.value.count && fromMount && !props.startDate)
            return assignMonthAndYear(getDate(), fromMount);
    };

    const shouldAssignMultiSolo = () => {
        if (Array.isArray(modelValue.value) && defaultedRange.value.enabled) {
            return getMonth(modelValue.value[0]) === getMonth(modelValue.value[1] ?? modelValue.value[0]);
        }
        return false;
    };

    // Assign month and year values per date
    const assignMonthAndYear = (date = new Date(), fromMount = false): void => {
        if (!defaultedMultiCalendars.value.count || !defaultedMultiCalendars.value.static || fromMount) {
            setCalendarMonthYear(0, getMonth(date), getYear(date));
        }
        if (
            defaultedMultiCalendars.value.count &&
            (!defaultedMultiCalendars.value.solo || !modelValue.value || shouldAssignMultiSolo())
        ) {
            for (let i = 1; i < defaultedMultiCalendars.value.count; i++) {
                const prevDate = set(getDate(), { month: month.value(i - 1), year: year.value(i - 1) });
                const nextMonth = add(prevDate, { months: 1 });
                calendars.value[i] = { month: getMonth(nextMonth), year: getYear(nextMonth) };
            }
        }
    };

    // Assign singe value
    const assignSingleValue = (date: Date, fromMount: boolean): void => {
        assignMonthAndYear(date);
        setTime('hours', getHours(date));
        setTime('minutes', getMinutes(date));
        setTime('seconds', getSeconds(date));
        if (defaultedMultiCalendars.value.count && fromMount) {
            handleNextMonthYear();
        }
    };

    /**
     * In case of multi-calendars, check if the range can fit within the view
     * If it can, set focus index to the first date in the range, rest will be auto adjusted
     * In case of solo multi calendars, always take 0 index as reference
     */
    const getRangeFocusIndex = (dates: Date[]) => {
        if (defaultedMultiCalendars.value.count) {
            if (defaultedMultiCalendars.value.solo) return 0;
            const startMonth = getMonth(dates[0]);
            const endMonth = getMonth(dates[1]);
            const showInTheSameView = Math.abs(endMonth - startMonth) < defaultedMultiCalendars.value.count;
            return showInTheSameView ? 0 : 1;
        }
        return 1;
    };
    // Assign range values
    const assignRangeValue = (dates: Date[], fromMount: boolean) => {
        if (dates[1] && defaultedRange.value.showLastInRange) {
            assignMonthAndYear(dates[getRangeFocusIndex(dates)], fromMount);
        } else {
            assignMonthAndYear(dates[0], fromMount);
        }
        const getValue = (mapper: (date: Date) => number, keys: TimeType): number[] => [
            mapper(dates[0]),
            dates[1] ? mapper(dates[1]) : (time[keys] as number[])[1],
        ];
        setTime('hours', getValue(getHours, 'hours'));
        setTime('minutes', getValue(getMinutes, 'minutes'));
        setTime('seconds', getValue(getSeconds, 'seconds'));
    };

    // Assign range values, or in case of multiDates, set
    const assignExistingMulti = (dates: Date[], fromMount: boolean) => {
        if ((defaultedRange.value.enabled || props.weekPicker) && !defaultedMultiDates.value.enabled) {
            return assignRangeValue(dates, fromMount);
        }

        if (defaultedMultiDates.value.enabled && fromMount) {
            const lastEntry = dates[dates.length - 1];
            return assignSingleValue(lastEntry, fromMount);
        }
    };

    const assignExistingModelValueArr = (fromMount: boolean) => {
        const dates = modelValue.value as Date[];
        assignExistingMulti(dates, fromMount);
        if (defaultedMultiCalendars.value.count && defaultedMultiCalendars.value.solo) {
            handleNextMonthYear();
        }
    };

    // Handle month change on scroll/arrow/swipe
    const autoChangeMonth = (increment: number, instance: number) => {
        const initialDate = set(getDate(), { month: month.value(instance), year: year.value(instance) });
        const date = increment < 0 ? addMonths(initialDate, 1) : subMonths(initialDate, 1);
        if (validateMonthYearInRange(getMonth(date), getYear(date), increment < 0, props.preventMinMaxNavigation)) {
            setCalendarMonthYear(instance, getMonth(date), getYear(date));
            emit('update-month-year', { instance, month: getMonth(date), year: getYear(date) });
            if (defaultedMultiCalendars.value.count && !defaultedMultiCalendars.value.solo) {
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
        for (let i = instance + 1; i <= defaultedMultiCalendars.value.count - 1; i++) {
            const date = addMonths(set(getDate(), { month: month.value(i - 1), year: year.value(i - 1) }), 1);
            setCalendarMonthYear(i, getMonth(date), getYear(date));
        }
    };

    /**
     * Extracted method to map month and year
     */
    const handleNextMonthYear = (): void => {
        if (Array.isArray(modelValue.value) && modelValue.value.length === 2) {
            const date = getDate(
                getDate(modelValue.value[1] ? modelValue.value[1] : addMonths(modelValue.value[0], 1)),
            );
            const [firstMonth, firstYear] = [getMonth(modelValue.value[0]), getYear(modelValue.value[0])];
            const [secondMonth, secondYear] = [getMonth(modelValue.value[1]), getYear(modelValue.value[1])];

            if (
                (firstMonth !== secondMonth || (firstMonth === secondMonth && firstYear !== secondYear)) &&
                defaultedMultiCalendars.value.solo
            ) {
                setCalendarMonthYear(1, getMonth(date), getYear(date));
            }
        } else if (modelValue.value && !Array.isArray(modelValue.value)) {
            setCalendarMonthYear(0, getMonth(modelValue.value), getYear(modelValue.value));
            assignMonthAndYear(getDate());
        }
    };

    const setStartDate = () => {
        if (props.startDate) {
            setCalendarMonthYear(0, getMonth(getDate(props.startDate)), getYear(getDate(props.startDate)));
            if (defaultedMultiCalendars.value.count) {
                autoChangeMultiCalendars(0);
            }
        }
    };

    // Handle mouse scroll

    const handleScroll = (event: WheelEvent, instance: number): void => {
        if (props.monthChangeOnScroll) {
            const timeDelta: number = new Date().getTime() - lastScrollTime.value.getTime();
            const scrollDistance = Math.abs(event.deltaY);
            let minPause: number = 500;
            if (scrollDistance > 1) minPause = 100;
            if (scrollDistance > 100) minPause = 0;
            if (timeDelta > minPause) {
                lastScrollTime.value = new Date();
                autoChangeMonth(props.monthChangeOnScroll !== 'inverse' ? -event.deltaY : event.deltaY, instance);
            }
        }
    };

    // Handle arrow key
    const handleArrow = (arrow: 'left' | 'right', instance: number, vertical = false): void => {
        if (props.monthChangeOnArrows && props.vertical === vertical) {
            handleSwipe(arrow, instance);
        }
    };

    // Handle touch swipe
    const handleSwipe = (direction: 'left' | 'right', instance: number): void => {
        autoChangeMonth(direction === 'right' ? -1 : 1, instance);
    };

    // Check if the calendar day has a marker
    const getMarker = (date: UnwrapRef<ICalendarDay>): IMarker | undefined => {
        if (propDates.value.markers) {
            return getMapDate(date.value, propDates.value.markers);
        }
        return undefined;
    };

    const getSixWeeksMode = (firstWeekday: number, gapToEnd: number) => {
        switch (props.sixWeeks === true ? 'append' : props.sixWeeks) {
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

    const handleSixWeeks = (
        weeks: ICalendarDate[],
        firstDate: Date,
        lastDate: Date,
        weekStart: WeekStartNum,
    ): ICalendarDate[] => {
        if (props.sixWeeks && weeks.length < 6) {
            const diff = 6 - weeks.length;

            const firstWeekday = (firstDate.getDay() + 7 - weekStart) % 7;
            const lastWeekday = (lastDate.getDay() + 7 - weekStart) % 7;
            const gapToEnd = 6 - lastWeekday;
            const [requiresLeadingWeek, doesAlternate] = getSixWeeksMode(firstWeekday, gapToEnd);

            for (let i = 1; i <= diff; i++) {
                const addLeadingWeek = doesAlternate ? !!(i % 2) == requiresLeadingWeek : requiresLeadingWeek;
                if (addLeadingWeek) {
                    const first = weeks[0].days[0];
                    const days = getWeekDays(addDays(first.value, -7), getMonth(firstDate));
                    weeks.unshift({ days });
                } else {
                    const lastWeek = weeks[weeks.length - 1];
                    const last = lastWeek.days[lastWeek.days.length - 1];
                    const days = getWeekDays(addDays(last.value, 1), getMonth(firstDate));
                    weeks.push({ days });
                }
            }
        }
        return weeks;
    };
    // Get 7 days from the provided start date, month is used to check whether the date is from the specified month or in the offset
    const getWeekDays = (startDay: Date, month: number): ICalendarDay[] => {
        const startDate = getDate(startDay);
        const dates = [];
        for (let i = 0; i < 7; i++) {
            const next = addDays(startDate, i);
            const isNext = getMonth(next) !== month;
            dates.push({
                text: props.hideOffsetDates && isNext ? '' : next.getDate(),
                value: next,
                current: !isNext,
                classData: {},
            });
        }
        return dates;
    };

    // Get days for the calendar to be displayed in a table grouped by weeks
    const getCalendarDays = (month: number, year: number): ICalendarDate[] => {
        const weeks: ICalendarDate[] = [];
        const firstDate = new Date(year, month);
        const lastDate = new Date(year, month + 1, 0);

        const weekStartsOn = props.weekStart as WeekStartNum;

        const firstDateInCalendar = startOfWeek(firstDate, { weekStartsOn });

        const addDaysToWeek = (date: Date) => {
            const days = getWeekDays(date, month);
            weeks.push({ days });
            if (
                !weeks[weeks.length - 1].days.some((day) =>
                    isDateEqual(resetDateTime(day.value), resetDateTime(lastDate)),
                )
            ) {
                const nextDate = addDays(date, 7);
                addDaysToWeek(nextDate);
            }
        };
        addDaysToWeek(firstDateInCalendar);

        return handleSixWeeks(weeks, firstDate, lastDate, weekStartsOn);
    };

    // Called on selectDate when the regular single picker is used
    const handleSingleDateSelect = (day: ICalendarDay) => {
        const date = setDateTime(getDate(day.value), time.hours as number, time.minutes as number, getSecondsValue());
        emit('date-update', date);
        if (defaultedMultiDates.value.enabled) {
            handleMultiDatesSelect(date, modelValue, defaultedMultiDates.value.limit);
        } else {
            modelValue.value = date;
        }
        updateFlow();
        nextTick().then(() => {
            autoApply();
        });
    };

    const includesDisabled = (day: Date) => {
        if (!defaultedRange.value.noDisabledRange) return false;
        const daysBetween = getDaysInBetween(tempRange.value[0], day);
        return daysBetween.some((date) => isDisabled(date));
    };

    // Before range selecting, ensure that modelValue is properly set
    const presetTempRange = () => {
        tempRange.value = modelValue.value ? (modelValue.value as Date[]).slice() : [];
        if (tempRange.value.length === 2 && !(defaultedRange.value.fixedStart || defaultedRange.value.fixedEnd)) {
            tempRange.value = [];
        }
    };

    // Handles auto range selecting
    const handleAutoRange = (day: ICalendarDay, isNext: boolean) => {
        const autoRange = [
            getDate(day.value),
            addDays(getDate(day.value), +(defaultedRange.value.autoRange as number)),
        ];
        if (isDateRangeAllowed(autoRange)) {
            if (isNext) {
                handleNextCalendarAutoRange(day.value);
            }
            tempRange.value = autoRange;
        } else {
            emit('invalid-date', day.value);
        }
    };

    /**
     * When using next calendar on auto range mode, adjust month and year for both calendars
     */
    const handleNextCalendarAutoRange = (date: string | Date) => {
        const monthValue = getMonth(getDate(date));
        const yearValue = getYear(getDate(date));
        setCalendarMonthYear(0, monthValue, yearValue);
        if (defaultedMultiCalendars.value.count > 0) {
            for (let i = 1; i < defaultedMultiCalendars.value.count; i++) {
                const next = getNextMonthYear(
                    set(getDate(date), { year: year.value(i - 1), month: month.value(i - 1) }),
                );
                setCalendarMonthYear(i, next.month, next.year);
            }
        }
    };

    // Handle range with fixed start/end
    const setFixedDateRange = (day: ICalendarDay) => {
        if (
            includesDisabled(day.value) ||
            !checkMinMaxRange(day.value, modelValue.value, defaultedRange.value.fixedStart ? 0 : 1)
        ) {
            return emit('invalid-date', day.value);
        }
        tempRange.value = getRangeWithFixedDate(getDate(day.value), modelValue, emit, defaultedRange);
    };

    // Called on selectDate when range mode is used
    const handleRangeDatesSelect = (day: ICalendarDay, isNext: boolean) => {
        presetTempRange();
        if (defaultedRange.value.autoRange) return handleAutoRange(day, isNext);
        if (defaultedRange.value.fixedStart || defaultedRange.value.fixedEnd) return setFixedDateRange(day);
        if (!tempRange.value[0]) {
            tempRange.value[0] = getDate(day.value);
            emit('range-start', tempRange.value[0]);
        } else if (checkMinMaxRange(getDate(day.value), modelValue.value) && !includesDisabled(day.value)) {
            if (isDateBefore(getDate(day.value), getDate(tempRange.value[0]))) {
                tempRange.value.unshift(getDate(day.value));
                emit('range-end', tempRange.value[0]);
            } else {
                tempRange.value[1] = getDate(day.value);
                emit('range-end', tempRange.value[1]);
            }
        } else {
            if (props.autoApply) {
                emit('auto-apply-invalid', day.value);
            }
            emit('invalid-date', day.value);
        }
    };

    // Check if seconds are enabled, and return proper value
    const getSecondsValue = (getFirst = true): number => {
        if (props.enableSeconds) {
            if (Array.isArray(time.seconds)) {
                return getFirst ? time.seconds[0] : time.seconds[1];
            }
            return time.seconds;
        }
        return 0;
    };

    // Assign time to a temp range item
    const assignTime = (index: number) => {
        tempRange.value[index] = setDateTime(
            tempRange.value[index],
            (time.hours as number[])[index],
            (time.minutes as number[])[index],
            getSecondsValue(index !== 1),
        );
    };

    const validateRangeAfterTimeSet = () => {
        if (tempRange.value[0] && tempRange.value[1]) {
            if (+tempRange.value?.[0] > +tempRange.value?.[1]) {
                tempRange.value.reverse();
                emit('range-start', tempRange.value[0]);
                emit('range-end', tempRange.value[1]);
            }
        }
    };

    // After range date is select, ensure that proper times are set and assign to modelValue
    const postRangeSelect = () => {
        if (tempRange.value.length) {
            if (tempRange.value[0] && !tempRange.value[1]) {
                assignTime(0);
            } else {
                assignTime(0);
                assignTime(1);
                updateFlow();
            }
            validateRangeAfterTimeSet();
            modelValue.value = tempRange.value.slice();

            checkRangeAutoApply(tempRange.value, emit, props.autoApply, props.modelAuto);
        }
    };

    /**
     * Called when the date in the calendar is clicked
     * Do a necessary formatting and assign value to internal
     */
    const selectDate = (day: ICalendarDay, isNext = false): void => {
        if (isDisabled(day.value) || (!day.current && props.hideOffsetDates)) return emit('invalid-date', day.value);
        clickedDate.value = JSON.parse(JSON.stringify(day));

        if (!defaultedRange.value.enabled) return handleSingleDateSelect(day);

        if (isNumberArray(time.hours) && isNumberArray(time.minutes) && !defaultedMultiDates.value.enabled) {
            handleRangeDatesSelect(day, isNext);
            postRangeSelect();
        }
    };

    // Handles selection of month/year
    const updateMonthYear = (instance: number, val: { month: number; year: number; fromNav?: boolean }): void => {
        setCalendarMonthYear(instance, val.month, val.year, true);

        if (defaultedMultiCalendars.value.count && !defaultedMultiCalendars.value.solo) {
            autoChangeMultiCalendars(instance);
        }
        emit('update-month-year', { instance, month: val.month, year: val.year });
        triggerCalendarTransition(defaultedMultiCalendars.value.solo ? instance : undefined);

        const flowActive = props.flow?.length ? props.flow[props.flowStep] : undefined;
        if (!val.fromNav && (flowActive === FlowStep.month || flowActive === FlowStep.year)) {
            updateFlow();
        }
    };

    // Called when the preset date is clicked
    const presetDate = (value: Date[] | string[] | Date | string, noTz?: boolean): void => {
        setPresetDate({
            value,
            modelValue,
            range: defaultedRange.value.enabled,
            timezone: noTz ? undefined : defaultedTz.value.timezone,
        });

        selectOnAutoApply();
        if (props.multiCalendars) {
            nextTick().then(() => mapInternalModuleValues(true));
        }
    };

    // Select current date on now button
    const selectCurrentDate = (): void => {
        const dateInTz = dateToTimezoneSafe(getDate(), defaultedTz.value);
        if (modelValue.value && Array.isArray(modelValue.value)) {
            if (defaultedRange.value.enabled) {
                const dateInTz = dateToTimezoneSafe(getDate(), defaultedTz.value);
                modelValue.value = isDateBefore(dateInTz, modelValue.value[0])
                    ? [dateInTz, modelValue.value[0]]
                    : [modelValue.value[0], dateInTz];
            } else {
                modelValue.value = [...modelValue, dateInTz];
            }
        } else {
            modelValue.value = dateInTz;
        }

        selectOnAutoApply();
    };

    const handleTimeUpdate = () => {
        if (Array.isArray(modelValue.value)) {
            if (defaultedMultiDates.value.enabled) {
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
            return modelValue.value[modelValue.value.length - 1];
        }
        return null;
    };

    const updateTime = (value: number | number[], isHours = true, isSeconds = false) => {
        updateTimeValues(value, isHours, isSeconds, handleTimeUpdate);
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
    };
};
