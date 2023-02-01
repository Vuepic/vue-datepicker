import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue';
import {
    add,
    addDays,
    addMonths,
    differenceInCalendarDays,
    eachDayOfInterval,
    getHours,
    getISOWeek,
    getMinutes,
    getMonth,
    getSeconds,
    getYear,
    isAfter,
    isBefore,
    set,
    setMilliseconds,
    subMonths,
} from 'date-fns';

import { isModelValueRange, isNumberArray, isRange } from '@/utils/type-guard';
import { useUtils } from '@/components/composables/utils';
import { isDateAfter, isDateBefore, isDateEqual, getDate, setDateTime } from '@/utils/date-utils';

import type {
    ExtendedProps,
    ICalendarData,
    ICalendarDay,
    IMarker,
    InternalModuleValue,
    TimeType,
    VueEmit,
} from '@/interfaces';
import type { UnwrapRef, Ref } from 'vue';

// @SONAR_START@
export const useCalendar = (
    props: ExtendedProps,
    emit: VueEmit,
    updateFlow: () => void,
    triggerCalendarTransition: (inst?: number) => void,
    flowStep: Ref<number>,
) => {
    // @SONAR_STOP@

    const {
        getDefaultStartTime,
        isDisabled,
        sanitizeDate,
        getWeekFromDate,
        setDateMonthOrYear,
        validateMonthYearInRange,
        defaults,
    } = useUtils(props);

    // internal model value is updated from this computed property
    const modelValue = computed({
        get: (): InternalModuleValue => {
            return props.internalModelValue;
        },
        set: (value: InternalModuleValue): void => {
            if (!props.readonly && !props.disabled) {
                emit('update:internal-model-value', value);
            }
        },
    });
    const tempRange = ref<Date[]>([]);
    watch(modelValue, () => {
        if (!props.multiCalendars) {
            mapInternalModuleValues();
        }
    });

    // Calendar data per instance
    const calendars = ref<ICalendarData[]>([{ month: getMonth(getDate()), year: getYear(getDate()) }]);

    // Time values
    const time = reactive({
        hours: props.range ? [getHours(getDate()), getHours(getDate())] : getHours(getDate()),
        minutes: props.range ? [getMinutes(getDate()), getMinutes(getDate())] : getMinutes(getDate()),
        seconds: props.range ? [0, 0] : 0,
    });

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

    const isFlowLastStep = computed(() => {
        if (props.flow && props.flow.length) {
            return flowStep.value === props.flow.length;
        }
        return true;
    });

    // Any update for month or year value will go through this function
    const setCalendarMonthYear = (instance: number, month: number | null, year: number | null): void => {
        if (!calendars.value[instance]) {
            calendars.value[instance] = { month: 0, year: 0 };
        }
        calendars.value[instance].month = month === null ? calendars.value[instance]?.month : month;
        calendars.value[instance].year = year === null ? calendars.value[instance]?.year : year;
    };

    // Any time modification will go through this function
    const setTime = (property: TimeType, value: number | number[]): void => {
        time[property] = value;
    };

    onMounted(() => {
        if (!modelValue.value) {
            if (props.startDate) {
                setCalendarMonthYear(0, getMonth(getDate(props.startDate)), getYear(getDate(props.startDate)));

                if (defaults.value.multiCalendars) {
                    autoChangeMultiCalendars(0);
                }
            }
            if (defaults.value.startTime) {
                assignStartTime();
            }
        }
        mapInternalModuleValues(true);
    });

    /**
     * Values for times, month and year are managed separately, here we map those values from passed v-model
     */
    const mapInternalModuleValues = (fromMount = false): void => {
        if (modelValue.value) {
            if (Array.isArray(modelValue.value)) {
                return assignExistingModelValueArr(fromMount);
            }
            return assignSingleValue(modelValue.value);
        }
        // On initial empty picker, note: range values are not set on month and year
        if (props.timePicker) return assignTimePicker();
        if (props.monthPicker && !props.range) return assignMonthPicker();
        if (props.yearPicker && !props.range) return assignYearPicker();
        if (defaults.value.multiCalendars && fromMount && !props.startDate)
            return assignMonthAndYear(getDate(), fromMount);
    };

    // Assign month and year values per date
    const assignMonthAndYear = (date: Date, fromMount = false): void => {
        if (!defaults.value.multiCalendars || !props.multiStatic || fromMount) {
            setCalendarMonthYear(0, getMonth(date), getYear(date));
        }
        if (defaults.value.multiCalendars) {
            for (let i = 1; i < defaults.value.multiCalendars; i++) {
                const prevDate = set(getDate(), { month: month.value(i - 1), year: year.value(i - 1) });
                const nextMonth = add(prevDate, { months: 1 });
                calendars.value[i] = { month: getMonth(nextMonth), year: getYear(nextMonth) };
            }
        }
    };

    // Assign singe value
    const assignSingleValue = (date: Date): void => {
        assignMonthAndYear(date);
        setTime('hours', getHours(date));
        setTime('minutes', getMinutes(date));
        setTime('seconds', getSeconds(date));
    };

    // Assign range values
    const assignRangeValue = (dates: Date[], fromMount: boolean) => {
        assignMonthAndYear(dates[0], fromMount);
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
        if ((props.range || props.weekPicker) && !props.multiDates) {
            return assignRangeValue(dates, fromMount);
        }

        if (props.multiDates) {
            const lastEntry = dates[dates.length - 1];
            return assignSingleValue(lastEntry);
        }
    };

    // Populate values based on model value when it is an array
    const assignExistingModelValueArr = (fromMount: boolean) => {
        const dates = modelValue.value as Date[];
        assignExistingMulti(dates, fromMount);
        if (defaults.value.multiCalendars && props.multiCalendarsSolo) {
            handleNextMonthYear();
        }
    };

    // On initial empty time picker, assign value
    const assignTimePicker = () => {
        assignStartTime();
        if (!props.range) {
            modelValue.value = setDateTime(getDate(), time.hours as number, time.minutes as number, getSecondsValue());
        } else {
            const hours = time.hours as number[];
            const minutes = time.minutes as number[];
            modelValue.value = [
                setDateTime(getDate(), hours[0], minutes[0], getSecondsValue()),
                setDateTime(getDate(), hours[1], minutes[1], getSecondsValue(false)),
            ];
        }
    };

    // On initial empty month picker assign value
    const assignMonthPicker = () => {
        modelValue.value = setDateMonthOrYear(getDate(), month.value(0), year.value(0));
    };

    // On initial empty year picker, assign value
    const assignYearPicker = () => {
        modelValue.value = getDate();
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

    /**
     * If start time is provided, assign data.
     * Note: data is sanitized  parameters since prop value can be provided partially
     */
    const assignStartTime = (): void => {
        const startTime = getDefaultStartTime();
        if (startTime) {
            const isMulti = Array.isArray(startTime);
            const hours = isMulti ? [+startTime[0].hours, +startTime[1].hours] : +startTime.hours;
            const minutes = isMulti ? [+startTime[0].minutes, +startTime[1].minutes] : +startTime.minutes;
            const seconds = isMulti ? [+startTime[0].seconds, +startTime[1].seconds] : +startTime.seconds;

            setTime('hours', hours);
            setTime('minutes', minutes);
            if (props.enableSeconds) {
                setTime('seconds', seconds);
            }
        }
    };

    // Get last date in the multi dates arr
    const multiDatesLast = (): Date | null => {
        if (Array.isArray(modelValue.value) && modelValue.value.length) {
            return modelValue.value[modelValue.value.length - 1];
        }
        return null;
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
                props.multiCalendarsSolo
            ) {
                setCalendarMonthYear(1, getMonth(date), getYear(date));
            }
        }
    };

    // Add one month to a given date
    const getNextMonthYear = (date: Date): { month: number; year: number } => {
        const newDate = addMonths(date, 1);
        return { month: getMonth(newDate), year: getYear(newDate) };
    };

    /**
     * When using next calendar on auto range mode, adjust month and year for both calendars
     */
    const handleNextCalendarAutoRange = (date: string | Date) => {
        const monthValue = getMonth(getDate(date));
        const yearValue = getYear(getDate(date));
        setCalendarMonthYear(0, monthValue, yearValue);
        if (defaults.value.multiCalendars > 0) {
            for (let i = 1; i < defaults.value.multiCalendars; i++) {
                const next = getNextMonthYear(
                    set(getDate(date), { year: month.value(i - 1), month: year.value(i - 1) }),
                );
                setCalendarMonthYear(i, next.month, next.year);
            }
        }
    };

    const handleMultiDateSelect = (date: Date): void => {
        if (modelValue.value && Array.isArray(modelValue.value)) {
            if (modelValue.value.some((dateVal) => isDateEqual(date, dateVal))) {
                const value = modelValue.value.filter((dateVal) => !isDateEqual(dateVal, date));
                modelValue.value = !value.length ? null : value;
            } else {
                if (
                    (props.multiDatesLimit && +props.multiDatesLimit > modelValue.value.length) ||
                    !props.multiDatesLimit
                ) {
                    modelValue.value.push(date);
                }
            }
        } else {
            modelValue.value = [date];
        }
    };

    // Get dates between 2 dates
    const getDaysInBetween = (dateOne: Date, dateTwo: Date) => {
        // Check if selection is backwards
        const start = isDateAfter(dateOne, dateTwo) ? dateTwo : dateOne;
        const end = isDateAfter(dateTwo, dateOne) ? dateTwo : dateOne;
        return eachDayOfInterval({ start, end });
    };

    // If min or max range is set, validate given range
    const checkMinMaxRange = (secondDate: Date): boolean => {
        if (Array.isArray(modelValue.value) && modelValue.value[0]) {
            const absoluteDiff = differenceInCalendarDays(secondDate, modelValue.value[0]);
            const daysInBetween = getDaysInBetween(modelValue.value[0], secondDate);
            const disabledDates =
                daysInBetween.length === 1 ? 0 : daysInBetween.filter((date) => isDisabled(date)).length;
            const diff = Math.abs(absoluteDiff) - disabledDates;
            if (props.minRange && props.maxRange) return diff >= +props.minRange && diff <= +props.maxRange;
            if (props.minRange) return diff >= +props.minRange;
            if (props.maxRange) return diff <= +props.maxRange;
        }
        return true;
    };

    // If the range with fixed start/end is set, update range when the date is selected
    const getRangeWithFixedDate = (date: Date): Date[] => {
        if (Array.isArray(modelValue.value) && modelValue.value.length === 2) {
            if (
                props.fixedStart &&
                (isDateAfter(date, modelValue.value[0]) || isDateEqual(date, modelValue.value[0]))
            ) {
                return [modelValue.value[0], date];
            }
            if (props.fixedEnd && (isDateBefore(date, modelValue.value[1]) || isDateEqual(date, modelValue.value[1]))) {
                return [date, modelValue.value[1]];
            }
            return modelValue.value;
        }
        return [];
    };

    const autoApply = (): void => {
        if (props.autoApply && isFlowLastStep.value) {
            emit('auto-apply');
        }
    };

    const selectOnAutoApply = () => {
        if (props.autoApply) {
            emit('select-date');
        }
    };

    // Check if there are disabled dates for a given range
    const isDateRangeAllowed = (range: Date[]): boolean => {
        const datesInBetween = eachDayOfInterval({ start: range[0], end: range[1] });
        return !datesInBetween.some((date) => isDisabled(date));
    };

    // Called on selectDate when the week-picker mode is used
    const handleWeekPickerSelect = (day: ICalendarDay) => {
        modelValue.value = getWeekFromDate(getDate(day.value));
        return autoApply();
    };

    // Called on selectDate when the regular single picker is used
    const handleSingleDateSelect = (day: ICalendarDay) => {
        const date = setDateTime(getDate(day.value), time.hours as number, time.minutes as number, getSecondsValue());
        if (props.multiDates) {
            handleMultiDateSelect(date);
        } else {
            modelValue.value = date;
        }
        updateFlow();
        autoApply();
    };

    // Before range selecting, ensure that modelValue is properly set
    const presetTempRange = () => {
        tempRange.value = modelValue.value ? (modelValue.value as Date[]).slice() : [];
        if (tempRange.value.length === 2 && !(props.fixedStart || props.fixedEnd)) {
            tempRange.value = [];
        }
    };

    // Handles auto range selecting
    const handleAutoRange = (day: ICalendarDay, isNext: boolean) => {
        const autoRange = [getDate(day.value), addDays(getDate(day.value), +props.autoRange)];
        if (isDateRangeAllowed(autoRange)) {
            if (isNext) {
                handleNextCalendarAutoRange(day.value);
            }
            tempRange.value = autoRange;
        }
    };

    // Handle range with fixed start/end
    const setFixedDateRange = (day: ICalendarDay) => {
        tempRange.value = getRangeWithFixedDate(getDate(day.value));
    };

    const includesDisabled = (day: Date) => {
        if (!props.noDisabledRange) return false;
        const daysBetween = getDaysInBetween(tempRange.value[0], day);
        return daysBetween.some((date) => isDisabled(date));
    };

    // Called on selectDate when range mode is used
    const handleRangeDatesSelect = (day: ICalendarDay, isNext: boolean) => {
        presetTempRange();
        if (props.autoRange) return handleAutoRange(day, isNext);
        if (props.fixedStart || props.fixedEnd) return setFixedDateRange(day);
        if (!tempRange.value[0]) {
            tempRange.value[0] = getDate(day.value);
        } else {
            if (checkMinMaxRange(getDate(day.value)) && !includesDisabled(day.value)) {
                if (isDateBefore(getDate(day.value), getDate(tempRange.value[0]))) {
                    tempRange.value.unshift(getDate(day.value));
                } else {
                    tempRange.value[1] = getDate(day.value);
                }
            }
        }
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
            modelValue.value = tempRange.value.slice();

            if (tempRange.value[0] && tempRange.value[1] && props.autoApply) {
                emit('auto-apply');
            }
            if (tempRange.value[0] && !tempRange.value[1] && props.modelAuto && props.autoApply) {
                emit('auto-apply');
            }
        }
    };

    /**
     * Called when the date in the calendar is clicked
     * Do a necessary formatting and assign value to internal
     */
    const selectDate = (day: UnwrapRef<ICalendarDay>, isNext = false): void => {
        if (isDisabled(day.value) || (!day.current && props.hideOffsetDates)) return;

        if (props.weekPicker) return handleWeekPickerSelect(day);

        if (!props.range) return handleSingleDateSelect(day);

        if (isNumberArray(time.hours) && isNumberArray(time.minutes) && !props.multiDates) {
            handleRangeDatesSelect(day, isNext);
            postRangeSelect();
        }
    };

    // Get week number if enabled
    const getWeekNum = (days: UnwrapRef<ICalendarDay[]>): string | number => {
        const firstCurrentData = days.find((day) => day.current);
        if (firstCurrentData) {
            return getISOWeek(firstCurrentData.value);
        }
        return '';
    };

    // In multi calendar mode, when the month/year is changed, sync all calendars
    const autoChangeMultiCalendars = (instance: number): void => {
        for (let i = instance - 1; i >= 0; i--) {
            const date = subMonths(set(getDate(), { month: month.value(i + 1), year: year.value(i + 1) }), 1);
            setCalendarMonthYear(i, getMonth(date), getYear(date));
        }
        for (let i = instance + 1; i <= defaults.value.multiCalendars - 1; i++) {
            const date = addMonths(set(getDate(), { month: month.value(i - 1), year: year.value(i - 1) }), 1);
            setCalendarMonthYear(i, getMonth(date), getYear(date));
        }
    };

    // Helper function that will return a date with a set month and year for a given calendar instance
    const getMonthYearValue = (instance: number): Date => {
        return setDateMonthOrYear(getDate(), month.value(instance), year.value(instance));
    };

    // Helper function that will return a date with a set time for a given calendar instance
    const getSetDateTime = (dateValue: Date): Date => {
        return setDateTime(dateValue, time.hours as number, time.minutes as number, getSecondsValue());
    };

    // Handles selection of month/year
    const updateMonthYear = (instance: number, val: { month: number; year: number; fromNav?: boolean }): void => {
        const isValueChange = props.monthPicker
            ? month.value(instance) !== val.month || !val.fromNav
            : year.value(instance) !== val.year;

        setCalendarMonthYear(instance, val.month, val.year);

        if (defaults.value.multiCalendars && !props.multiCalendarsSolo) {
            autoChangeMultiCalendars(instance);
        }

        if (props.monthPicker || props.yearPicker) {
            if (props.range) {
                if (isValueChange) {
                    let rangeDate = modelValue.value ? (modelValue.value as Date[]).slice() : [];
                    if (rangeDate.length === 2 && rangeDate[1] !== null) {
                        rangeDate = [];
                    }
                    if (!rangeDate.length) {
                        rangeDate = [getMonthYearValue(instance)];
                    } else {
                        if (isDateBefore(getMonthYearValue(instance), rangeDate[0])) {
                            rangeDate.unshift(getMonthYearValue(instance));
                        } else {
                            rangeDate[1] = getMonthYearValue(instance);
                        }
                    }
                    modelValue.value = rangeDate;
                }
            } else {
                modelValue.value = getMonthYearValue(instance);
            }
        }
        emit('update-month-year', { instance, month: val.month, year: val.year });
        triggerCalendarTransition(props.multiCalendarsSolo ? instance : undefined);
    };

    // Post month/year select, handles auto-apply and flow step, after the selection
    const monthYearSelect = async (isYear = false): Promise<void> => {
        if (props.autoApply && (props.monthPicker || props.yearPicker)) {
            await nextTick();
            const ignoreClose = props.monthPicker ? isYear : false;
            if (props.range) {
                emit('auto-apply', ignoreClose || !modelValue.value || (modelValue.value as Date[]).length === 1);
            } else {
                emit('auto-apply', ignoreClose);
            }
        }
        updateFlow();
    };

    // Handle month change on scroll/arrow/swipe
    const autoChangeMonth = (increment: number, instance: number) => {
        const initialDate = set(getDate(), { month: month.value(instance), year: year.value(instance) });
        const date = increment < 0 ? addMonths(initialDate, 1) : subMonths(initialDate, 1);
        if (validateMonthYearInRange(getMonth(date), getYear(date), increment < 0, props.preventMinMaxNavigation)) {
            setCalendarMonthYear(instance, getMonth(date), getYear(date));
            if (defaults.value.multiCalendars && !props.multiCalendarsSolo) {
                autoChangeMultiCalendars(instance);
            }
            emit('update-month-year', { instance, month: getMonth(date), year: getYear(date) });
            triggerCalendarTransition();
        }
    };

    // Same logic done twice with the time update, however do a range checks before applying are done
    const handleTimeUpdate = (dateValue: Date | Date[]): void => {
        if (
            isModelValueRange(dateValue) &&
            isModelValueRange(modelValue.value) &&
            isNumberArray(time.hours) &&
            isNumberArray(time.minutes)
        ) {
            if (dateValue[0] && modelValue.value[0]) {
                modelValue.value[0] = setDateTime(dateValue[0], time.hours[0], time.minutes[0], getSecondsValue());
            }
            if (dateValue[1] && modelValue.value[1]) {
                modelValue.value[1] = setDateTime(dateValue[1], time.hours[1], time.minutes[1], getSecondsValue(false));
            }
        } else if (props.multiDates && Array.isArray(modelValue.value)) {
            modelValue.value[modelValue.value.length - 1] = getSetDateTime(dateValue as Date);
        } else if (!props.range && !isRange(dateValue)) {
            modelValue.value = getSetDateTime(dateValue);
        }
        emit('time-update');
    };

    // Called on event when the time value is changed
    const updateTime = (value: number | number[], isHours = true, isSeconds = false) => {
        const hoursCp = isHours ? value : time.hours;
        const minutesCp = !isHours && !isSeconds ? value : time.minutes;
        const secondsCp = isSeconds ? value : time.seconds;
        if (
            props.range &&
            isRange(modelValue.value) &&
            isNumberArray(hoursCp) &&
            isNumberArray(minutesCp) &&
            isNumberArray(secondsCp) &&
            !props.disableTimeRangeValidation
        ) {
            const setTime = (index: number) =>
                setDateTime((modelValue.value as Date[])[index], hoursCp[index], minutesCp[index], secondsCp[index]);

            const resetMilliseconds = (index: number) => setMilliseconds((modelValue.value as Date[])[index], 0);
            if (
                isDateEqual(modelValue.value[0], modelValue.value[1]) &&
                (isAfter(setTime(0), resetMilliseconds(1)) || isBefore(setTime(1), resetMilliseconds(0)))
            ) {
                return;
            }
        }
        setTime('hours', hoursCp);
        setTime('minutes', minutesCp);
        setTime('seconds', secondsCp);

        if (modelValue.value) {
            if (props.multiDates) {
                const lastEntry = multiDatesLast();
                if (lastEntry) {
                    handleTimeUpdate(lastEntry);
                }
            } else {
                handleTimeUpdate(modelValue.value);
            }
        } else if (props.timePicker) {
            handleTimeUpdate(props.range ? [getDate(), getDate()] : getDate());
        }
        updateFlow();
    };

    // Handle mouse scroll
    const handleScroll = (event: WheelEvent, instance: number): void => {
        if (props.monthChangeOnScroll) {
            autoChangeMonth(props.monthChangeOnScroll !== 'inverse' ? -event.deltaY : event.deltaY, instance);
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
    const getMarker = (date: UnwrapRef<ICalendarDay>): IMarker | undefined =>
        props.markers.find((marker) => isDateEqual(sanitizeDate(date.value), sanitizeDate(marker.date)));

    // Select current date on now button
    const selectCurrentDate = (): void => {
        if (!props.range) {
            modelValue.value = getDate();
        } else {
            if (modelValue.value && Array.isArray(modelValue.value) && modelValue.value[0]) {
                modelValue.value = isDateBefore(getDate(), modelValue.value[0])
                    ? [getDate(), modelValue.value[0]]
                    : [modelValue.value[0], getDate()];
            } else {
                modelValue.value = [getDate()];
            }
        }
        selectOnAutoApply();
    };

    // Called when the preset range is clicked
    const presetDateRange = (dates: Date[] | string[], hasSlot?: boolean): void => {
        if (hasSlot) return;
        if (dates.length && dates.length <= 2 && props.range) {
            modelValue.value = dates.map((date) => getDate(date));
            selectOnAutoApply();
        }
    };

    return {
        time,
        month,
        year,
        modelValue,
        calendars,
        monthYearSelect,
        isDisabled,
        updateTime,
        getWeekNum,
        selectDate,
        updateMonthYear,
        handleScroll,
        getMarker,
        handleArrow,
        handleSwipe,
        selectCurrentDate,
        presetDateRange,
    };
};
