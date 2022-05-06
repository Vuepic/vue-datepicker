import { computed, nextTick, onMounted, ref, watch } from 'vue';
import type { UnwrapRef, Ref } from 'vue';
import {
    add,
    addDays,
    addMonths,
    differenceInCalendarDays,
    getDay,
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
    setYear,
    subMonths,
} from 'date-fns';

import type {
    CalendarRef,
    ICalendarData,
    ICalendarDay,
    IMarker,
    InternalModuleValue,
    MenuProps,
    VueEmit,
    WeekStartNum,
} from '@/interfaces';
import {
    dateToUtc,
    getNextMonthYear,
    getWeekFromDate,
    isDateAfter,
    isDateBefore,
    isDateBetween,
    isDateEqual,
    setDateMonthOrYear,
    setDateTime,
} from '@/utils/date-utils';
import { isModelValueRange, isNumberArray, isRange, isTimeArr, modelValueIsRange } from '@/utils/type-guard';
import { validateMonthYearInRange } from '@/components/composition/month-year';

export const useCalendar = (
    props: MenuProps,
    emit: VueEmit,
    updateFlow: () => void,
    calendarRefs: Ref<CalendarRef[]>,
) => {
    const today = ref<Date>(new Date());
    const hoveredDate = ref<Date | null>();
    // Calendar data per instance
    const calendars = ref<ICalendarData[]>([{ month: getMonth(new Date()), year: getYear(new Date()) }]);
    const hours = ref<number | number[]>(
        props.range ? [getHours(new Date()), getHours(new Date())] : getHours(new Date()),
    );
    const minutes = ref<number | number[]>(
        props.range ? [getMinutes(new Date()), getMinutes(new Date())] : getMinutes(new Date()),
    );
    const seconds = ref<number | number[]>(props.range ? [0, 0] : 0);

    watch(
        calendars,
        () => {
            setTimeout(() => {
                if (props.openOnTop) {
                    emit('dpOpen');
                }
            }, 0);
        },
        { deep: true },
    );

    onMounted(() => {
        mapInternalModuleValues(true);

        if (!modelValue.value) {
            if (props.startDate) {
                calendars.value[0].month = getMonth(new Date(props.startDate));
                calendars.value[0].year = getYear(new Date(props.startDate));
                if (props.multiCalendars) {
                    autoChangeMultiCalendars(0);
                }
            }
            if (props.startTime) {
                assignStartTime();
            }
        }
    });

    const month = computed(
        () =>
            (instance: number): number =>
                calendars.value[instance] ? calendars.value[instance].month : 0,
    );

    const year = computed(
        () =>
            (instance: number): number =>
                calendars.value[instance] ? calendars.value[instance].year : 0,
    );

    const setCalendarMonthYear = (instance: number, month: number, year: number): void => {
        calendars.value[instance].month = month;
        calendars.value[instance].year = year;
    };

    const setCalendarMonth = (instance: number, value: number) => (calendars.value[instance].month = value);

    const setCalendarYear = (instance: number, value: number) => (calendars.value[instance].year = value);

    const getSecondsValue = (getFirst = true): number | null => {
        if (props.enableSeconds) {
            if (Array.isArray(seconds.value)) {
                return getFirst ? seconds.value[0] : seconds.value[1];
            }
            return seconds.value;
        }
        return 0;
    };

    /**
     * If start time is provided, assign data.
     * Note: data is sanitized from the parent component with all parameters since props
     * can be provided partially
     */
    const assignStartTime = (): void => {
        if (props.startTime) {
            if (isTimeArr(props.startTime)) {
                hours.value = [+props.startTime[0].hours, +props.startTime[1].hours];
                minutes.value = [+props.startTime[0].minutes, +props.startTime[1].minutes];
                if (props.enableSeconds) {
                    seconds.value = [+props.startTime[0].seconds, +props.startTime[1].seconds];
                }
            } else {
                hours.value = +props.startTime.hours;
                minutes.value = +props.startTime.minutes;
                if (props.enableSeconds) {
                    seconds.value = +props.startTime.seconds;
                }
            }
        }
    };

    /**
     * Model binding, removes the need for watches, sync data between components
     */
    const modelValue = computed({
        get: (): InternalModuleValue => {
            return props.internalModelValue;
        },
        set: (value: InternalModuleValue): void => {
            if (!props.readonly && !props.disabled) {
                emit('update:internalModelValue', value);
            }
        },
    });

    watch(modelValue, () => mapInternalModuleValues());

    /**
     * Check if date is between max and min date, or if it is included in filters
     */
    const isDisabled = (date: Date): boolean => {
        const aboveMax = props.maxDate ? isDateAfter(dateToUtc(date), dateToUtc(new Date(props.maxDate))) : false;
        const bellowMin = props.minDate ? isDateBefore(dateToUtc(date), dateToUtc(new Date(props.minDate))) : false;
        const inDisableArr =
            typeof props.disabledDates === 'function'
                ? props.disabledDates(date)
                : props.disabledDates.some((disabledDate: Date | string) =>
                      isDateEqual(dateToUtc(new Date(disabledDate)), dateToUtc(date)),
                  );
        const disabledMonths = props.filters.months.length ? props.filters.months.map((month) => +month) : [];
        const inDisabledMonths = disabledMonths.includes(getMonth(date));
        const weekDayDisabled = props.disabledWeekDays.length
            ? props.disabledWeekDays.some((day) => +day === getDay(date))
            : false;
        const notInSpecific = props.allowedDates.length
            ? !props.allowedDates.some((dateVal) => isDateEqual(dateToUtc(new Date(dateVal)), dateToUtc(date)))
            : false;

        const dateYear = getYear(date);

        const outOfYearRange = dateYear < +props.yearRange[0] || dateYear > +props.yearRange[1];

        return (
            aboveMax ||
            bellowMin ||
            inDisableArr ||
            inDisabledMonths ||
            outOfYearRange ||
            weekDayDisabled ||
            notInSpecific
        );
    };

    /**
     * Check if some date is active, in case of range, it will have two dates
     */
    const isActiveDate = (calendarDay: ICalendarDay): boolean => {
        if (!modelValue.value) return false;
        if (props.hideOffsetDates && !calendarDay.current) return false;
        if (!props.range) {
            if (props.multiDates && Array.isArray(modelValue.value)) {
                return modelValue.value.some((dateVal) => isDateEqual(dateVal, calendarDay.value));
            }
            return isDateEqual(calendarDay.value, modelValue.value ? (modelValue.value as Date) : today.value);
        }
        return false;
    };

    /**
     * If range mode used, this will check if the calendar day is between 2 active dates
     */
    const rangeActive = (calendarDay: ICalendarDay): boolean => {
        return isDateBetween(modelValue.value as Date[], hoveredDate.value as Date, calendarDay.value);
    };

    /**
     * Extracted method to map month and year
     */
    const assignMonthAndYear = (date: Date, overrideMulti = false): void => {
        if (!props.multiCalendars || overrideMulti) {
            setCalendarMonth(0, getMonth(date));
            setCalendarYear(0, getYear(date));
        }
        if (props.multiCalendars) {
            for (let i = 1; i < props.multiCalendars; i++) {
                const prevDate = set(new Date(), { month: month.value(i - 1), year: year.value(i - 1) });
                const nextMonth = add(prevDate, { months: 1 });
                calendars.value.push({ month: getMonth(nextMonth), year: getYear(nextMonth) });
            }
        }
    };

    const handleNextMonthYear = (): void => {
        if (Array.isArray(modelValue.value) && modelValue.value.length === 2) {
            const date = new Date(modelValue.value[1] ? modelValue.value[1] : addMonths(modelValue.value[0], 1));
            const [firstMonth, firstYear] = [getMonth(modelValue.value[0]), getYear(modelValue.value[0])];
            const [secondMonth, secondYear] = [getMonth(modelValue.value[1]), getYear(modelValue.value[1])];

            if (
                (firstMonth !== secondMonth || (firstMonth === secondMonth && firstYear !== secondYear)) &&
                props.multiCalendarsSolo
            ) {
                setCalendarMonth(1, getMonth(date));
                setCalendarYear(1, getYear(date));
            }
        }
    };

    const assignMonthYearAndTime = (date: Date): void => {
        assignMonthAndYear(date);
        hours.value = getHours(date);
        minutes.value = getMinutes(date);
        seconds.value = getSeconds(date);
    };

    const multiDatesLast = (): Date | null => {
        if (Array.isArray(modelValue.value) && modelValue.value.length) {
            return modelValue.value[modelValue.value.length - 1];
        }
        return null;
    };

    /**
     * Values for times, month and year are managed separately, here we map those values from passed v-model
     */
    const mapInternalModuleValues = (fromMount = false): void => {
        if (modelValue.value) {
            if (isModelValueRange(modelValue.value)) {
                if (modelValue.value.length === 2 && !props.multiDates) {
                    assignMonthAndYear(modelValue.value[0], fromMount);
                    hours.value = [
                        getHours(modelValue.value[0]),
                        modelValue.value[1] ? getHours(modelValue.value[1]) : getHours(new Date()),
                    ];
                    minutes.value = [
                        getMinutes(modelValue.value[0]),
                        modelValue.value[1] ? getMinutes(modelValue.value[1]) : getMinutes(new Date()),
                    ];
                    seconds.value = [
                        getSeconds(modelValue.value[0]),
                        modelValue.value[1] ? getSeconds(modelValue.value[1]) : getSeconds(new Date()),
                    ];
                } else if (isModelValueRange(modelValue.value) && props.multiDates) {
                    const lastEntry = modelValue.value[modelValue.value.length - 1];
                    if (lastEntry) {
                        assignMonthYearAndTime(lastEntry);
                    }
                }
                if (props.multiCalendars && props.multiCalendarsSolo) {
                    handleNextMonthYear();
                }
            } else {
                assignMonthYearAndTime(modelValue.value);
            }
        } else {
            if (props.timePicker) {
                assignStartTime();
                if (!props.range) {
                    modelValue.value = setDateTime(
                        new Date(),
                        hours.value as number,
                        minutes.value as number,
                        getSecondsValue(),
                    );
                } else if (isNumberArray(hours.value) && isNumberArray(minutes.value)) {
                    modelValue.value = [
                        setDateTime(new Date(), hours.value[0], minutes.value[0], getSecondsValue()),
                        setDateTime(new Date(), hours.value[1], minutes.value[1], getSecondsValue(false)),
                    ];
                }
            } else if (props.monthPicker && !props.range) {
                modelValue.value = setDateMonthOrYear(new Date(), month.value(0), year.value(0));
            } else if (props.multiCalendars) {
                assignMonthAndYear(new Date());
            } else if (props.yearPicker) {
                modelValue.value = new Date();
            }
        }
    };

    /**
     * When using next calendar on auto range mode, adjust month and year for both calendars
     */
    const handleNextCalendarAutoRange = (date: string | Date) => {
        const monthValue = getMonth(new Date(date));
        const yearValue = getYear(new Date(date));
        setCalendarMonth(0, monthValue);
        setCalendarYear(0, yearValue);
        if (props.multiCalendars > 0) {
            for (let i = 1; i < props.multiCalendars; i++) {
                const next = getNextMonthYear(
                    set(new Date(date), { year: month.value(i - 1), month: year.value(i - 1) }),
                );
                setCalendarMonth(i, next.month);
                setCalendarYear(i, next.year);
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

    const checkMinMaxRange = (secondDate: Date): boolean => {
        if (Array.isArray(modelValue.value) && modelValue.value[0]) {
            const absoluteDiff = differenceInCalendarDays(secondDate, modelValue.value[0]);
            const diff = Math.abs(absoluteDiff < 0 ? absoluteDiff + 1 : absoluteDiff - 1);
            if (props.minRange && props.maxRange) return diff >= +props.minRange && diff <= +props.maxRange;
            if (props.minRange) return diff >= +props.minRange;
            if (props.maxRange) return diff <= +props.maxRange;
        }
        return true;
    };

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
        if (props.autoApply) {
            emit('autoApply');
        }
    };

    /**
     * Called when the date in the calendar is clicked
     * Do a necessary formatting and assign value to internal
     */
    const selectDate = (day: UnwrapRef<ICalendarDay>, isNext = false): void => {
        if (isDisabled(day.value)) {
            return;
        }
        if (!day.current && props.hideOffsetDates) {
            return;
        }
        if (props.weekPicker) {
            modelValue.value = getWeekFromDate(new Date(day.value), +props.weekStart as WeekStartNum);
            return autoApply();
        }
        if (!props.range && !isNumberArray(hours.value) && !isNumberArray(minutes.value)) {
            const date = setDateTime(new Date(day.value), hours.value, minutes.value, getSecondsValue());
            if (props.multiDates) {
                handleMultiDateSelect(date);
            } else {
                modelValue.value = date;
            }
            updateFlow();
            autoApply();
        } else if (isNumberArray(hours.value) && isNumberArray(minutes.value) && !props.multiDates) {
            let rangeDate = modelValue.value ? (modelValue.value as Date[]).slice() : [];
            if (rangeDate.length === 2 && !(props.fixedStart || props.fixedEnd)) {
                rangeDate = [];
            }
            if (props.autoRange) {
                if (isNext) {
                    handleNextCalendarAutoRange(day.value);
                }
                rangeDate = [new Date(day.value), addDays(new Date(day.value), +props.autoRange)];
            } else if (props.fixedStart || props.fixedEnd) {
                rangeDate = getRangeWithFixedDate(new Date(day.value));
            } else {
                if (!rangeDate[0]) {
                    rangeDate[0] = new Date(day.value);
                } else if (checkMinMaxRange(new Date(day.value))) {
                    if (isDateBefore(new Date(day.value), new Date(rangeDate[0]))) {
                        rangeDate.unshift(new Date(day.value));
                    } else {
                        rangeDate[1] = new Date(day.value);
                    }
                }
            }
            if (rangeDate[0] && !rangeDate[1]) {
                rangeDate[0] = setDateTime(rangeDate[0], hours.value[0], minutes.value[0], getSecondsValue());
            } else {
                rangeDate[0] = setDateTime(rangeDate[0], hours.value[0], minutes.value[0], getSecondsValue());
                rangeDate[1] = setDateTime(rangeDate[1], hours.value[1], minutes.value[1], getSecondsValue(false));
                updateFlow();
            }
            modelValue.value = rangeDate;
            if (rangeDate[0] && rangeDate[1] && props.autoApply) {
                emit('autoApply');
            }
        }
    };

    /**
     * Get week number if enabled
     */
    const getWeekNum = (days: UnwrapRef<ICalendarDay[]>): string | number => {
        const firstCurrentData = days.find((day) => day.current);
        if (firstCurrentData) {
            return getISOWeek(firstCurrentData.value);
        }
        return '';
    };

    /**
     * When using range picker keep track of hovered value in the calendar
     */
    const setHoverDate = (day: UnwrapRef<ICalendarDay>): void => {
        if (!day.current && props.hideOffsetDates) {
            return;
        }
        hoveredDate.value = day.value;
    };

    /**
     * Check if range ends on the given day
     */
    const isHoverRangeEnd = (day: UnwrapRef<ICalendarDay>): boolean => {
        if (props.autoRange || props.weekPicker) {
            if (hoveredDate.value) {
                if (props.hideOffsetDates && !day.current) return false;
                const rangeEnd = addDays(hoveredDate.value, +props.autoRange);
                const range = getWeekFromDate(new Date(hoveredDate.value), +props.weekStart as WeekStartNum);
                return props.weekPicker
                    ? isDateEqual(range[1], new Date(day.value))
                    : isDateEqual(rangeEnd, new Date(day.value));
            }
            return false;
        }
        return false;
    };

    /**
     * Check if date in auto range preview is in between
     */
    const isAutoRangeInBetween = (day: UnwrapRef<ICalendarDay>): boolean => {
        if (props.autoRange || props.weekPicker) {
            if (hoveredDate.value) {
                const rangeEnd = addDays(hoveredDate.value, +props.autoRange);
                if (props.hideOffsetDates && !day.current) return false;
                const range = getWeekFromDate(new Date(hoveredDate.value), +props.weekStart as WeekStartNum);
                return props.weekPicker
                    ? isDateAfter(day.value, range[0]) && isDateBefore(day.value, range[1])
                    : isDateAfter(day.value, hoveredDate.value) && isDateBefore(day.value, rangeEnd);
            }
            return false;
        }
        return false;
    };

    const isAutoRangeStart = (day: UnwrapRef<ICalendarDay>): boolean => {
        if (props.autoRange || props.weekPicker) {
            if (hoveredDate.value) {
                if (props.hideOffsetDates && !day.current) return false;
                const range = getWeekFromDate(new Date(hoveredDate.value), +props.weekStart as WeekStartNum);
                return props.weekPicker ? isDateEqual(range[0], day.value) : isDateEqual(hoveredDate.value, day.value);
            }
            return false;
        }
        return false;
    };

    const autoChangeMultiCalendars = (instance: number): void => {
        for (let i = instance - 1; i >= 0; i--) {
            const date = subMonths(set(new Date(), { month: month.value(i + 1), year: year.value(i + 1) }), 1);
            setCalendarMonthYear(i, getMonth(date), getYear(date));
        }
        for (let i = instance + 1; i <= props.multiCalendars - 1; i++) {
            const date = addMonths(set(new Date(), { month: month.value(i - 1), year: year.value(i - 1) }), 1);
            setCalendarMonthYear(i, getMonth(date), getYear(date));
        }
    };

    const getMonthValue = (instance: number): Date => {
        return setDateMonthOrYear(new Date(), month.value(instance), year.value(instance));
    };

    const updateMonthYear = (instance: number, value: number, isMonth = true): void => {
        if (isMonth) {
            setCalendarMonth(instance, value);
        } else {
            setCalendarYear(instance, value);
        }
        if (props.multiCalendars && !props.multiCalendarsSolo) {
            autoChangeMultiCalendars(instance);
        }
        if (props.monthPicker) {
            if (props.range) {
                if (isMonth) {
                    let rangeDate = modelValue.value ? (modelValue.value as Date[]).slice() : [];
                    if (rangeDate.length === 2 && rangeDate[1] !== null) {
                        rangeDate = [];
                    }
                    if (!rangeDate.length) {
                        rangeDate = [getMonthValue(instance)];
                    } else {
                        if (isDateBefore(getMonthValue(instance), rangeDate[0])) {
                            rangeDate.unshift(getMonthValue(instance));
                        } else {
                            rangeDate[1] = getMonthValue(instance);
                        }
                    }
                    modelValue.value = rangeDate;
                }
            } else {
                modelValue.value = getMonthValue(instance);
            }
        }
        updateFlow();
        emit('updateMonthYear', { instance, value, isMonth });
        triggerCalendarTransition(props.multiCalendarsSolo ? instance : undefined);
    };

    const getSetDateTime = (dateValue: Date): Date => {
        return setDateTime(dateValue, hours.value as number, minutes.value as number, getSecondsValue());
    };

    /**
     * Same logic done twice with the time update, however some checks before applying are done
     */
    const handleTimeUpdate = (dateValue: Date | Date[]): void => {
        if (
            isModelValueRange(dateValue) &&
            isModelValueRange(modelValue.value) &&
            isNumberArray(hours.value) &&
            isNumberArray(minutes.value)
        ) {
            if (dateValue[0] && modelValue.value[0]) {
                modelValue.value[0] = setDateTime(dateValue[0], hours.value[0], minutes.value[0], getSecondsValue());
            }
            if (dateValue[1] && modelValue.value[1]) {
                modelValue.value[1] = setDateTime(
                    dateValue[1],
                    hours.value[1],
                    minutes.value[1],
                    getSecondsValue(false),
                );
            }
        } else if (props.multiDates && Array.isArray(modelValue.value)) {
            modelValue.value[modelValue.value.length - 1] = getSetDateTime(dateValue as Date);
        } else if (!props.range && !isRange(dateValue)) {
            modelValue.value = getSetDateTime(dateValue);
        }
        emit('timeUpdate');
    };

    /**
     * Called on event when time value is changed
     */
    const updateTime = (value: number | number[], isHours = true, isSeconds = false) => {
        const hoursCp = isHours ? value : hours.value;
        const minutesCp = !isHours && !isSeconds ? value : minutes.value;
        const secondsCp = isSeconds ? value : seconds.value;
        if (
            props.range &&
            isRange(modelValue.value) &&
            isNumberArray(hoursCp) &&
            isNumberArray(minutesCp) &&
            isNumberArray(secondsCp)
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
        hours.value = hoursCp;
        minutes.value = minutesCp;
        seconds.value = secondsCp;
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
            handleTimeUpdate(props.range ? [new Date(), new Date()] : new Date());
        }
        updateFlow();
    };

    // When mouse leaves the menu clear the hover date data
    const clearHoverDate = (): void => {
        hoveredDate.value = null;
    };

    const checkRangeDirection = (isStart: boolean): boolean => {
        if (modelValueIsRange(modelValue.value, props.range) && modelValue.value[0] && hoveredDate.value) {
            return isStart
                ? isDateAfter(hoveredDate.value, modelValue.value[0])
                : isDateBefore(hoveredDate.value, modelValue.value[0]);
        }
        return true;
    };

    /**
     * Check when to add a proper active start/end date class on range picker
     */
    const rangeActiveStartEnd = (day: UnwrapRef<ICalendarDay>, isStart = true): boolean => {
        if ((props.range || props.weekPicker) && isRange(modelValue.value)) {
            if (props.hideOffsetDates && !day.current) return false;
            return isDateEqual(new Date(day.value), modelValue.value[isStart ? 0 : 1]);
        } else if (props.range) {
            return (
                (isDateEqual(
                    new Date(day.value),
                    modelValue.value && Array.isArray(modelValue.value)
                        ? isStart
                            ? modelValue.value[0] || null
                            : modelValue.value[1]
                        : null,
                ) &&
                    // this part will rotate start/end depending on the hover date
                    (isStart
                        ? !isDateBefore(
                              hoveredDate.value || null,
                              Array.isArray(modelValue.value) ? modelValue.value[0] : null,
                          )
                        : true)) ||
                (isDateEqual(day.value, Array.isArray(modelValue.value) ? modelValue.value[0] : null) &&
                    checkRangeDirection(isStart))
            );
        }
        return false;
    };

    const isHoverDate = (disabled: boolean, calendarDay: ICalendarDay) => {
        return (Array.isArray(props.internalModelValue) && props.internalModelValue.length) || props.weekPicker
            ? false
            : !disabled &&
                  !isActiveDate(calendarDay) &&
                  !(!calendarDay.current && props.hideOffsetDates) &&
                  (props.range ? !rangeActiveStartEnd(calendarDay) && !rangeActiveStartEnd(calendarDay, false) : true);
    };

    const isHoverDateStartEnd = (dateIsHovered: boolean, calendarDay: ICalendarDay, start?: boolean): boolean => {
        if (
            Array.isArray(props.internalModelValue) &&
            props.internalModelValue[0] &&
            props.internalModelValue.length === 1
        ) {
            if (dateIsHovered) {
                return false;
            }
            return start
                ? isDateAfter(props.internalModelValue[0], calendarDay.value)
                : isDateBefore(props.internalModelValue[0], calendarDay.value);
        }
        return false;
    };

    const monthYearSelect = (isYear = false) => {
        if (isYear && props.yearPicker) {
            modelValue.value = setYear(new Date(), calendars.value[0].year);
            if (props.autoApply) {
                emit('autoApply');
            }
        }
        if (props.autoApply && props.monthPicker) {
            nextTick().then(() => {
                if (props.range) {
                    emit('autoApply', isYear || !modelValue.value || (modelValue.value as Date[]).length === 1);
                } else {
                    emit('autoApply', isYear);
                }
            });
        }
    };

    const autoChangeMonth = (increment: number, instance: number) => {
        const initialDate = set(new Date(), { month: month.value(instance), year: year.value(instance) });
        const date = increment < 0 ? addMonths(initialDate, 1) : subMonths(initialDate, 1);
        if (
            validateMonthYearInRange(
                props.minDate,
                props.maxDate,
                getMonth(date),
                getYear(date),
                increment < 0,
                props.preventMinMaxNavigation,
            )
        ) {
            setCalendarMonthYear(instance, getMonth(date), getYear(date));
            if (props.multiCalendars && !props.multiCalendarsSolo) {
                autoChangeMultiCalendars(instance);
            }
            triggerCalendarTransition();
        }
    };

    const handleScroll = (event: WheelEvent, instance: number): void => {
        if (props.monthChangeOnScroll) {
            autoChangeMonth(props.monthChangeOnScroll !== 'inverse' ? -event.deltaY : event.deltaY, instance);
        }
    };

    const handleArrow = (arrow: 'left' | 'right', instance: number, vertical = false): void => {
        if (props.monthChangeOnArrows && props.vertical === vertical) {
            handleSwipe(arrow, instance);
        }
    };

    const handleSwipe = (direction: 'left' | 'right', instance: number): void => {
        autoChangeMonth(direction === 'right' ? -1 : 1, instance);
    };

    const getMarker = (date: UnwrapRef<ICalendarDay>): IMarker | undefined =>
        props.markers.find((marker) => isDateEqual(dateToUtc(new Date(date.value)), dateToUtc(new Date(marker.date))));

    const selectCurrentDate = (): void => {
        if (!props.range) {
            emit('update:internalModelValue', new Date());
        } else if (modelValueIsRange(modelValue.value, props.range)) {
            if (modelValue.value && modelValue.value[0]) {
                modelValue.value = isDateBefore(new Date(), modelValue.value[0])
                    ? [new Date(), modelValue.value[0]]
                    : [modelValue.value[0], new Date()];
            } else {
                modelValue.value = [new Date()];
            }
        }
        if (props.autoApply) {
            emit('selectDate');
        }
    };

    const presetDateRange = (dates: Date[] | string[]): void => {
        if (dates.length && dates.length <= 2 && props.range) {
            modelValue.value = dates.map((date) => new Date(date));
            if (props.autoApply) {
                emit('selectDate');
            }
        }
    };

    const triggerCalendarTransition = (instance?: number): void => {
        if (instance || instance === 0) {
            calendarRefs.value[instance].triggerTransition(month.value(instance), year.value(instance));
        } else {
            calendarRefs.value.forEach((refVal, i) => refVal.triggerTransition(month.value(i), year.value(i)));
        }
    };

    return {
        today,
        hours,
        minutes,
        seconds,
        month,
        year,
        monthYearSelect,
        isDisabled,
        updateTime,
        setHoverDate,
        getWeekNum,
        selectDate,
        rangeActive,
        isActiveDate,
        updateMonthYear,
        isHoverRangeEnd,
        isAutoRangeInBetween,
        isAutoRangeStart,
        clearHoverDate,
        rangeActiveStartEnd,
        handleScroll,
        getMarker,
        handleArrow,
        handleSwipe,
        selectCurrentDate,
        isHoverDate,
        isHoverDateStartEnd,
        presetDateRange,
    };
};
