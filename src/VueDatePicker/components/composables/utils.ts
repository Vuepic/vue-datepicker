import { computed } from 'vue';
import {
    addDays,
    endOfWeek,
    format,
    getDay,
    getHours,
    getMinutes,
    getMonth,
    getSeconds,
    getYear,
    isAfter,
    isBefore,
    isEqual,
    isValid,
    parseISO,
    set,
    setHours,
    setMilliseconds,
    setMinutes,
    setMonth,
    setSeconds,
    setYear,
    startOfWeek,
} from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

import { errors, convertType } from '@/utils/util';
import { useState } from '@/components/composables/state';

import type {
    DateTimeSetter,
    DateValue,
    Flow,
    TimeModel,
    WeekStartNum,
    InternalModuleValue,
    ICalendarDate,
    ICalendarDay,
} from '@/interfaces';

export const useUtils = () => {
    const { config } = useState();

    // Check for partial range enabled on null value as second item in the array
    const checkPartialRangeValue = (): Date => {
        if (config.value.partialRange) return null as unknown as Date;
        throw new Error(errors.prop('partial-range'));
    };

    // Execute some code depending on the range prop, if not, throw error
    const checkRangeEnabled = <T>(fn: () => T): T => {
        if (config.value.range) return fn();
        throw new Error(errors.prop('range'));
    };

    // Shared method for time format
    const getTimeFormat = (): string => {
        const seconds = config.value.enableSeconds ? ':ss' : '';
        return config.value.is24 ? `HH:mm${seconds}` : `hh:mm${seconds} aa`;
    };

    // Get default format pattern, returns user specified if defined first
    const getDefaultPattern = (): string => {
        if (config.value.format) return config.value.format as string;
        if (config.value.monthPicker) return 'MM/yyyy';
        if (config.value.timePicker) return getTimeFormat();
        if (config.value.weekPicker) return 'MM/dd/yyyy';
        if (config.value.yearPicker) return 'yyyy';
        return config.value.enableTimePicker ? `MM/dd/yyyy, ${getTimeFormat()}` : 'MM/dd/yyyy';
    };

    // Format date to a  human-readable output
    const formatDate = (value: Date | Date[]) => {
        if (typeof config.value.format === 'function') return config.value.format(value);
        const pattern = getDefaultPattern();
        const options = config.value.formatLocale ? { locale: config.value.formatLocale } : undefined;

        if (Array.isArray(value)) {
            return `${format(value[0], pattern, options)} ${
                config.value.modelAuto && !value[1] ? '' : config.value.textInputOptions.rangeSeparator || '-'
            } ${value[1] ? format(value[1], pattern, options) : ''}`;
        }

        return format(value, pattern, options);
    };

    // Converts utc date to a timezone date
    const getZonedDate = (date: Date): Date => {
        return config.value.timezone ? utcToZonedTime(date, config.value.timezone) : date;
    };

    // Convert zoned date back to utc date
    const getZonedToUtc = (date: Date): Date => {
        return config.value.timezone ? zonedTimeToUtc(date, config.value.timezone) : date;
    };

    // Instead of using everywhere new Date(), this is the central place for getting or parsing the date
    const getDate = (value?: Date | string | number) => (value ? new Date(value) : new Date());

    const hideNavigationButtons = computed(() => (key: Flow) => {
        return config.value.hideNavigation?.includes(key);
    });

    const validateDate = (date: Date) => {
        const aboveMax = config.value.maxDate
            ? isDateAfter(sanitizeDate(date), sanitizeDate(config.value.maxDate))
            : false;
        const bellowMin = config.value.minDate
            ? isDateBefore(sanitizeDate(date), sanitizeDate(config.value.minDate))
            : false;
        const inDisableArr = matchDate(date, config.value.disabledDates);
        const disabledMonths = config.value.filters.months.length
            ? config.value.filters.months.map((month) => +month)
            : [];
        const inDisabledMonths = disabledMonths.includes(getMonth(date));
        const weekDayDisabled = config.value.disabledWeekDays.length
            ? config.value.disabledWeekDays.some((day) => +day === getDay(date))
            : false;
        const notInSpecific = config.value.allowedDates.length
            ? !config.value.allowedDates.some((dateVal) => isDateEqual(sanitizeDate(dateVal), sanitizeDate(date)))
            : false;

        const dateYear = getYear(date);

        const outOfYearRange = dateYear < +config.value.yearRange[0] || dateYear > +config.value.yearRange[1];

        return !(
            aboveMax ||
            bellowMin ||
            inDisableArr ||
            inDisabledMonths ||
            outOfYearRange ||
            weekDayDisabled ||
            notInSpecific
        );
    };

    const assignDefaultTime = (obj: TimeModel): TimeModel => {
        const defaultTime = {
            hours: getHours(getDate()),
            minutes: getMinutes(getDate()),
            seconds: getSeconds(getDate()),
        };
        return Object.assign(defaultTime, obj);
    };

    const getDefaultStartTime = (): TimeModel | TimeModel[] | null => {
        if (config.value.range) {
            if (config.value.startTime && Array.isArray(config.value.startTime)) {
                return [assignDefaultTime(config.value.startTime[0]), assignDefaultTime(config.value.startTime[1])];
            }
            return null;
        }
        return config.value.startTime && !Array.isArray(config.value.startTime)
            ? assignDefaultTime(config.value.startTime)
            : null;
    };

    /**
     * Check if date is between max and min date, or if it is included in filters
     */
    const isDisabled = (date: Date): boolean => {
        return !validateDate(date);
    };

    // Reset date time
    const resetDateTime = (value: Date | string): Date => {
        let dateParse = getDate(JSON.parse(JSON.stringify(value)));
        dateParse = setHours(dateParse, 0);
        dateParse = setMinutes(dateParse, 0);
        dateParse = setSeconds(dateParse, 0);
        dateParse = setMilliseconds(dateParse, 0);

        return dateParse;
    };

    const isValidDate = (value: Date | Date[] | null): boolean => {
        if (Array.isArray(value)) {
            return isValid(value[0]) && (value[1] ? isValid(value[1]) : true);
        }
        return value ? isValid(value) : false;
    };

    const sanitizeDate = (date: Date | string): Date | string => {
        if (date instanceof Date) {
            return date;
        }
        return parseISO(date);
    };

    const getWeekFromDate = (date: Date): [Date, Date] => {
        const start = startOfWeek(date, { weekStartsOn: +config.value.weekStart as WeekStartNum });
        const end = endOfWeek(date, { weekStartsOn: +config.value.weekStart as WeekStartNum });
        return [start, end];
    };

    const setDateTime = (
        date: Date | null,
        hours?: DateTimeSetter,
        minutes?: DateTimeSetter,
        seconds?: DateTimeSetter,
    ): Date => {
        let dateCopy = date ? getDate(date) : getDate();
        if (hours || hours === 0) {
            dateCopy = setHours(dateCopy, +hours);
        }
        if (minutes || minutes === 0) {
            dateCopy = setMinutes(dateCopy, +minutes);
        }
        if (seconds || seconds === 0) {
            dateCopy = setSeconds(dateCopy, +seconds);
        }
        return setMilliseconds(dateCopy, 0);
    };

    const matchDate = (date: Date, pattern: Date[] | string[] | number[] | ((date: Date) => boolean)): boolean => {
        if (Array.isArray(pattern)) {
            return pattern.some((includedDate) => isDateEqual(sanitizeDate(getDate(includedDate)), sanitizeDate(date)));
        }
        return pattern(date);
    };

    const isDateAfter = (date: DateValue, dateToCompare: DateValue): boolean => {
        if (!date || !dateToCompare) {
            return false;
        }
        return isAfter(resetDateTime(date), resetDateTime(dateToCompare));
    };

    const isDateBefore = (date: DateValue, dateToCompare: DateValue): boolean => {
        if (!date || !dateToCompare) {
            return false;
        }
        return isBefore(resetDateTime(date), resetDateTime(dateToCompare));
    };

    const isDateEqual = (date: DateValue, dateToCompare: DateValue): boolean => {
        if (!date || !dateToCompare) {
            return false;
        }
        return isEqual(resetDateTime(date), resetDateTime(dateToCompare));
    };

    const isDateBetween = (range: Date[], hoverDate: Date, dateToCheck: Date): boolean => {
        if (range && range[0] && range[1]) {
            return isDateAfter(dateToCheck, range[0]) && isDateBefore(dateToCheck, range[1]);
        }
        if (range && range[0] && hoverDate) {
            return (
                (isDateAfter(dateToCheck, range[0]) && isDateBefore(dateToCheck, hoverDate)) ||
                (isDateBefore(dateToCheck, range[0]) && isDateAfter(dateToCheck, hoverDate))
            );
        }
        return false;
    };

    const setDateMonthOrYear = (date: DateValue, month?: number | null, year?: number | null): Date => {
        let dateCopy = date ? getDate(date) : getDate();
        if (month || month === 0) {
            dateCopy = setMonth(dateCopy, month);
        }
        if (year) {
            dateCopy = setYear(dateCopy, year);
        }
        return dateCopy;
    };

    // Returns a getDate object with a set of time from a provided date
    const setTimeValue = (date: Date): Date =>
        set(getDate(), { hours: getHours(date), minutes: getMinutes(date), seconds: getSeconds(date) });

    const getMinMaxTime = (time: TimeModel): Date => {
        return set(getDate(), {
            hours: +time.hours || 0,
            minutes: +time.minutes || 0,
            seconds: +time.seconds || 0,
        });
    };

    /**
     * Depending on the time or full date validation, validate if the selected time is valid
     * Extracted logic from isValidTime fn
     */
    const validateTime = (date: Date | null, dateToCompare: Date, compare: 'max' | 'min', full: boolean): boolean => {
        if (!date) return true;
        if (full) {
            const valid = compare === 'max' ? isBefore(date, dateToCompare) : isAfter(date, dateToCompare);
            const setOptions = { seconds: 0, milliseconds: 0 };
            return valid || isEqual(set(date, setOptions), set(dateToCompare, setOptions));
        }
        return compare === 'max'
            ? date.getTime() <= dateToCompare.getTime()
            : date.getTime() >= dateToCompare.getTime();
    };

    // Check if we need to do a time validation
    const skipTimeValidation = () => {
        return (
            !config.value.enableTimePicker ||
            config.value.monthPicker ||
            config.value.yearPicker ||
            config.value.ignoreTimeValidation
        );
    };

    // Return set time for a given date or array of dates
    const getSetTimeValue = (date: Date | Date[]) => {
        if (Array.isArray(date)) {
            return [date[0] ? setTimeValue(date[0]) : null, date[1] ? setTimeValue(date[1]) : null];
        }
        return setTimeValue(date);
    };

    // Extracted validation function that will check time based on maxTime or maxDate
    const checkTimeMax = (selectedDateTime: Date | Date[]) => {
        const max = config.value.maxTime ? getMinMaxTime(config.value.maxTime) : getDate(config.value.maxDate);
        if (Array.isArray(selectedDateTime)) {
            return (
                validateTime(selectedDateTime[0], max, 'max', !!config.value.maxDate) &&
                validateTime(selectedDateTime[1], max, 'max', !!config.value.maxDate)
            );
        }
        return validateTime(selectedDateTime, max, 'max', !!config.value.maxDate);
    };

    // Extracted validation function that will check time based on minTime or minDate
    const checkTimeMin = (selectedDateTime: Date | Date[], isValid: boolean) => {
        const min = config.value.minTime ? getMinMaxTime(config.value.minTime) : getDate(config.value.minDate);
        if (Array.isArray(selectedDateTime)) {
            return (
                validateTime(selectedDateTime[0], min, 'min', !!config.value.minDate) &&
                validateTime(selectedDateTime[1], min, 'min', !!config.value.minDate) &&
                isValid
            );
        }
        return validateTime(selectedDateTime, min, 'min', !!config.value.minDate) && isValid;
    };

    // Validate time
    const isValidTime = (date: InternalModuleValue): boolean => {
        let isValid = true;
        if (!date) return true;
        if (skipTimeValidation()) return true;

        const selectedDateTime = !config.value.minDate && !config.value.maxDate ? getSetTimeValue(date) : date;

        if (config.value.maxTime || config.value.maxDate) {
            isValid = checkTimeMax(convertType(selectedDateTime));
        }

        if (config.value.minTime || config.value.minDate) {
            isValid = checkTimeMin(convertType(selectedDateTime), isValid);
        }
        return isValid;
    };

    // Get 7 days from the provided start date, month is used to check whether the date is from the specified month or in the offset
    const getWeekDays = (startDay: Date, month: number, hideOffsetDates: boolean): ICalendarDay[] => {
        const startDate = getDate(JSON.parse(JSON.stringify(startDay)));
        const dates = [];
        for (let i = 0; i < 7; i++) {
            const next = addDays(startDate, i);
            const isNext = getMonth(next) !== month;
            dates.push({
                text: hideOffsetDates && isNext ? '' : next.getDate(),
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
        const firstDate = getDate(new Date(year, month));
        const lastDate = getDate(new Date(year, month + 1, 0));

        const firstDateInCalendar = startOfWeek(firstDate, { weekStartsOn: config.value.weekStart as WeekStartNum });

        const addDaysToWeek = (date: Date) => {
            const days = getWeekDays(date, month, config.value.hideOffsetDates);
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

        return weeks;
    };

    const getDateForCompare = (date: Date | string, month: number, year: number): [Date, Date] => {
        return [set(getDate(date), { date: 1 }), set(getDate(), { month, year, date: 1 })];
    };

    const validateMinDate = (month: number, year: number): boolean => {
        return (
            isDateBefore(...getDateForCompare(config.value.minDate, month, year)) ||
            isDateEqual(...getDateForCompare(config.value.minDate, month, year))
        );
    };

    const validateMaxDate = (month: number, year: number): boolean => {
        return (
            isDateAfter(...getDateForCompare(config.value.maxDate, month, year)) ||
            isDateEqual(...getDateForCompare(config.value.maxDate, month, year))
        );
    };

    const validateBothMinAndMax = (month: number, year: number, isNext: boolean) => {
        let valid = false;
        if (config.value.maxDate && isNext && validateMaxDate(month, year)) {
            valid = true;
        }
        if (config.value.minDate && !isNext && validateMinDate(month, year)) {
            valid = true;
        }
        return valid;
    };

    const validateMonthYearInRange = (month: number, year: number, isNext: boolean, preventNav: boolean): boolean => {
        let valid = false;
        if (preventNav) {
            if (config.value.minDate && config.value.maxDate) {
                valid = validateBothMinAndMax(month, year, isNext);
            } else if (config.value.minDate && validateMinDate(month, year)) {
                valid = true;
            } else if (config.value.maxDate && validateMaxDate(month, year)) {
                valid = true;
            }
        } else {
            valid = true;
        }
        return valid;
    };

    return {
        checkPartialRangeValue,
        checkRangeEnabled,
        getZonedDate,
        getZonedToUtc,
        getDate,
        formatDate,
        getDefaultPattern,
        validateDate,
        getDefaultStartTime,
        isDisabled,
        resetDateTime,
        isValidDate,
        sanitizeDate,
        getWeekFromDate,
        setDateTime,
        matchDate,
        isDateBetween,
        isDateAfter,
        isDateBefore,
        isDateEqual,
        setDateMonthOrYear,
        isValidTime,
        getCalendarDays,
        validateMonthYearInRange,
        validateMaxDate,
        validateMinDate,
        hideNavigationButtons,
    };
};
