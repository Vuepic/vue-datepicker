import { computed, onMounted, Ref, ref, UnwrapRef, watch } from 'vue';
import { ICalendarDay, InternalModuleValue, UseCalendar, VueEmit } from '../../interfaces';
import {
    getAddedDays,
    getDateHours,
    getDateMinutes,
    getDateMonth,
    getDateYear,
    getNextMonthYear,
    getNextYearMonth,
    getPreviousMonthYear,
    getWeekDay,
    getWeekNumber,
    isDateAfter,
    isDateBefore,
    isDateEqual,
    setDateMonthOrYear,
    setDateTime,
} from '../../utils/date-utils';
import { isModelValueRange, isNumberArray, isRange, isRangeArray, isTimeArr } from '../../utils/type-guard';

interface IUseCalendar {
    isDisabled: (date: Date) => boolean;
    isActiveDate: (day: ICalendarDay) => boolean;
    rangeActive: (day: ICalendarDay) => boolean;
    selectDate: (day: UnwrapRef<ICalendarDay>, isNext?: boolean) => void;
    getWeekNum: (days: UnwrapRef<ICalendarDay[]>) => string | number;
    setHoverDate: (day: UnwrapRef<ICalendarDay>) => void;
    updateTime: (value: number | number[], isHours?: boolean) => void;
    updateMonthYear: (value: number, isMonth?: boolean, isNext?: boolean) => void;
    isHoverRangeEnd: (day: UnwrapRef<ICalendarDay>) => boolean;
    isAutoRangeInBetween: (day: UnwrapRef<ICalendarDay>) => boolean;
    isAutoRangeStart: (day: UnwrapRef<ICalendarDay>) => boolean;
    rangeActiveStartEnd: (day: UnwrapRef<ICalendarDay>, isStart?: boolean) => boolean;
    monthYearSelect: (isYear?: boolean) => void;
    clearHoverDate: () => void;
    handleScroll: (event: WheelEvent, isNext?: boolean) => void;
    today: Ref<Date>;
    month: Ref<number>;
    year: Ref<number>;
    monthNext: Ref<number>;
    yearNext: Ref<number>;
    hours: Ref<number | number[]>;
    minutes: Ref<number | number[]>;
}

export const useCalendar = (props: UseCalendar, emit: VueEmit): IUseCalendar => {
    const today = ref<Date>(new Date());
    const hoveredDate = ref<Date | null>();
    const month = ref<number>(getDateMonth(new Date()));
    const year = ref<number>(getDateYear(new Date()));
    const monthNext = ref<number>(getNextMonthYear(new Date()).month);
    const yearNext = ref<number>(getNextMonthYear(new Date()).year);
    const hours = ref<number | number[]>(props.range ? [getDateHours(), getDateHours()] : getDateHours());
    const minutes = ref<number | number[]>(props.range ? [getDateMinutes(), getDateMinutes()] : getDateMinutes());

    onMounted(() => {
        mapInternalModuleValues();

        if (!modelValue.value) {
            if (props.startDate) {
                month.value = getDateMonth(new Date(props.startDate));
                year.value = getDateYear(new Date(props.startDate));
                if (props.twoCalendars) {
                    monthNext.value = getNextMonthYear(new Date(props.startDate)).month;
                    yearNext.value = getNextMonthYear(new Date(props.startDate)).year;
                }
            }
            if (props.startTime) {
                assignStartTime();
            }
        }
    });

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
            } else {
                hours.value = +props.startTime.hours;
                minutes.value = +props.startTime.minutes;
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
            emit('update:internalModelValue', value);
        },
    });

    watch(modelValue, () => mapInternalModuleValues());

    /**
     * Check if date is between max and min date, or if it is included in filters
     */
    const isDisabled = (date: Date): boolean => {
        const aboveMax = props.maxDate ? isDateAfter(date, props.maxDate) : false;
        const bellowMin = props.minDate ? isDateBefore(date, props.minDate) : false;
        const inDisableArr = props.disabledDates.some((disabledDate: Date | string) => isDateEqual(disabledDate, date));
        const disabledMonths = props.filters.months.length ? props.filters.months.map((month) => +month) : [];
        const inDisabledMonths = disabledMonths.includes(getDateMonth(date));
        const weekDayDisabled = props.disabledWeekDays.length
            ? props.disabledWeekDays.some((day) => +day === getWeekDay(date))
            : false;
        const notInSpecific = props.allowedDates.length
            ? !props.allowedDates.some((dateVal) => isDateEqual(new Date(dateVal), date))
            : false;

        const dateYear = getDateYear(date);

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
            return isDateEqual(calendarDay.value, modelValue.value ? (modelValue.value as Date) : today.value);
        }
        return false;
    };

    /**
     * If range mode used, this will check if the calendar day is between 2 active dates
     */
    const rangeActive = (calendarDay: ICalendarDay): boolean => {
        if (isModelValueRange(modelValue.value) && modelValue.value[0] && modelValue.value[1]) {
            return (
                isDateAfter(calendarDay.value, modelValue.value[0]) &&
                isDateBefore(calendarDay.value, modelValue.value[1])
            );
        }
        if (isModelValueRange(modelValue.value) && modelValue.value[0] && hoveredDate.value) {
            return (
                (isDateAfter(calendarDay.value, modelValue.value[0]) &&
                    isDateBefore(calendarDay.value, hoveredDate.value)) ||
                (isDateBefore(calendarDay.value, modelValue.value[0]) &&
                    isDateAfter(calendarDay.value, hoveredDate.value))
            );
        }
        return false;
    };

    /**
     * Extracted method to map month and year
     */
    const assignMonthAndYear = (date: Date): void => {
        month.value = getDateMonth(date);
        year.value = getDateYear(date);
    };

    /**
     * Values for times, month and year are managed separately, here we map those values from passed v-model
     */
    const mapInternalModuleValues = (): void => {
        if (modelValue.value) {
            if (isModelValueRange(modelValue.value)) {
                if (modelValue.value.length === 2) {
                    assignMonthAndYear(modelValue.value[0]);
                    hours.value = [getDateHours(modelValue.value[0]), getDateHours(modelValue.value[1])];
                    minutes.value = [getDateMinutes(modelValue.value[0]), getDateMinutes(modelValue.value[1])];
                }
                if (props.twoCalendars) {
                    handleNextMonthYear();
                }
            } else {
                assignMonthAndYear(modelValue.value);
                hours.value = getDateHours(modelValue.value);
                minutes.value = getDateMinutes(modelValue.value);
            }
        } else {
            if (props.timePicker) {
                if (!props.range) {
                    modelValue.value = setDateTime(new Date(), hours.value as number, minutes.value as number);
                } else if (isNumberArray(hours.value) && isNumberArray(minutes.value)) {
                    modelValue.value = [
                        setDateTime(new Date(), hours.value[0], minutes.value[0]),
                        setDateTime(new Date(), hours.value[1], minutes.value[1]),
                    ];
                }
            } else if (props.monthPicker) {
                modelValue.value = setDateMonthOrYear(new Date(), month.value, year.value);
            }
        }
    };

    /**
     * When using next calendar on auto range mode, adjust month and year for both calendars
     */
    const handleNextCalendarAutoRange = (date: string | Date) => {
        const monthValue = getDateMonth(new Date(date));
        const yearValue = getDateYear(new Date(date));
        const next = getNextMonthYear(new Date(date));
        month.value = monthValue;
        year.value = yearValue;
        monthNext.value = next.month;
        yearNext.value = next.year;
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
        if (!props.range && !isNumberArray(hours.value) && !isNumberArray(minutes.value)) {
            modelValue.value = setDateTime(new Date(day.value), hours.value, minutes.value);
            if (props.autoApply) {
                emit('autoApply');
            }
        } else if (isNumberArray(hours.value) && isNumberArray(minutes.value)) {
            let rangeDate = modelValue.value ? (modelValue.value as Date[]).slice() : [];
            if (rangeDate.length === 2) {
                rangeDate = [];
            }
            if (props.autoRange) {
                if (isNext) {
                    handleNextCalendarAutoRange(day.value);
                }
                rangeDate = [new Date(day.value), getAddedDays(new Date(day.value), +props.autoRange)];
            } else {
                if (!rangeDate[0]) {
                    rangeDate[0] = new Date(day.value);
                } else {
                    if (isDateBefore(new Date(day.value), new Date(rangeDate[0]))) {
                        rangeDate.unshift(new Date(day.value));
                    } else {
                        rangeDate[1] = new Date(day.value);
                    }
                }
            }
            if (rangeDate[0] && !rangeDate[1]) {
                rangeDate[0] = setDateTime(rangeDate[0], hours.value[0], minutes.value[0]);
            } else {
                rangeDate[0] = setDateTime(rangeDate[0], hours.value[0], minutes.value[0]);
                rangeDate[1] = setDateTime(rangeDate[1], hours.value[1], minutes.value[1]);
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
            return getWeekNumber(firstCurrentData.value);
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
        if (props.autoRange) {
            if (hoveredDate.value) {
                if (props.hideOffsetDates && !day.current) return false;
                const rangeEnd = getAddedDays(hoveredDate.value, +props.autoRange);
                return isDateEqual(rangeEnd, new Date(day.value));
            }
            return false;
        }
        return false;
    };

    /**
     * Check if date in auto range preview is in between
     */
    const isAutoRangeInBetween = (day: UnwrapRef<ICalendarDay>): boolean => {
        if (props.autoRange) {
            if (hoveredDate.value) {
                const rangeEnd = getAddedDays(hoveredDate.value, +props.autoRange);
                if (props.hideOffsetDates && !day.current) return false;
                return isDateAfter(day.value, hoveredDate.value) && isDateBefore(day.value, rangeEnd);
            }
            return false;
        }
        return false;
    };

    const isAutoRangeStart = (day: UnwrapRef<ICalendarDay>): boolean => {
        if (props.autoRange) {
            if (hoveredDate.value) {
                if (props.hideOffsetDates && !day.current) return false;
                return isDateEqual(hoveredDate.value, day.value);
            }
            return false;
        }
        return false;
    };

    const handleNextMonthYear = (): void => {
        if (Array.isArray(modelValue.value) && modelValue.value.length === 2) {
            const date = new Date(modelValue.value[1]);
            if ((monthNext.value === month.value && yearNext.value === year.value) || !props.twoCalendarsSolo) {
                const date = getNextYearMonth(month.value, year.value);
                monthNext.value = date.month;
                yearNext.value = date.year;
            } else {
                if (getDateMonth(modelValue.value[0]) !== getDateMonth(modelValue.value[1])) {
                    monthNext.value = getDateMonth(date);
                    yearNext.value = getDateYear(date);
                }
            }
        }
    };

    const handlePreviousCalendarChange = (monthVal: number, yearVal: number): void => {
        if (!props.twoCalendarsSolo) {
            const date = getPreviousMonthYear(monthVal, yearVal);
            month.value = date.month;
            year.value = date.year;
        }
    };

    const handleNextCalendarChange = (monthVal: number, yearVal: number): void => {
        if (!props.twoCalendarsSolo) {
            const date = getNextYearMonth(monthVal, yearVal);
            monthNext.value = date.month;
            yearNext.value = date.year;
        }
    };

    const updateMonthYear = (value: number, isMonth = true, isNext = false): void => {
        if (isMonth) {
            if (isNext) {
                handlePreviousCalendarChange(value, yearNext.value);
                monthNext.value = value;
            } else {
                handleNextCalendarChange(value, year.value);
                month.value = value;
            }
        } else {
            if (isNext) {
                handlePreviousCalendarChange(monthNext.value, value);
                yearNext.value = value;
            } else {
                handleNextCalendarChange(month.value, value);
                year.value = value;
            }
        }
        if (props.monthPicker) {
            if (modelValue.value) {
                modelValue.value = setDateMonthOrYear(modelValue.value as Date, month.value, year.value);
            } else {
                modelValue.value = setDateMonthOrYear(new Date(), month.value, year.value);
            }
        }
    };

    /**
     * Same logic done twice with the time update, however some checks before applying are done
     */
    const handleTimeUpdate = (dateValue: Date | Date[]): void => {
        if (isRange(dateValue) && isNumberArray(hours.value) && isNumberArray(minutes.value)) {
            modelValue.value = [
                setDateTime(dateValue[0], hours.value[0], minutes.value[0]),
                setDateTime(dateValue[1], hours.value[1], minutes.value[1]),
            ];
        } else if (!props.range && !isRange(dateValue)) {
            modelValue.value = setDateTime(dateValue as Date, hours.value as number, minutes.value as number);
        }
        emit('timeUpdate');
    };

    /**
     * Called on event when time value is changed
     */
    const updateTime = (value: number | number[], isHours = true) => {
        if (isHours) {
            hours.value = value;
        } else {
            minutes.value = value;
        }
        if (modelValue.value) {
            handleTimeUpdate(modelValue.value);
        } else if (props.timePicker) {
            handleTimeUpdate(props.range ? [new Date(), new Date()] : new Date());
        }
    };

    // When mouse leaves the menu clear the hover date data
    const clearHoverDate = (): void => {
        hoveredDate.value = null;
    };

    const checkRangeDirection = (isStart: boolean): boolean => {
        if (isRangeArray(modelValue.value, true) && modelValue.value[0] && hoveredDate.value) {
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
        if (props.range && isRange(modelValue.value)) {
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

    const monthYearSelect = (isYear = false) => {
        if (props.autoApply && props.monthPicker) {
            emit('autoApply', isYear);
        }
    };

    const handleScroll = (event: WheelEvent, isNext = false): void => {
        if (props.monthChangeOnScroll) {
            const yearMonth: [number, number] = isNext ? [monthNext.value, yearNext.value] : [month.value, year.value];
            const dates = event.deltaY < 0 ? getNextYearMonth(...yearMonth) : getPreviousMonthYear(...yearMonth);
            updateMonthYear(dates.month, true, isNext);
        }
    };

    return {
        today,
        hours,
        month,
        year,
        monthNext,
        yearNext,
        minutes,
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
    };
};
