import {
    parse,
    format,
    isDate,
    isValid,
    setYear,
    setMonth,
    setHours,
    setMinutes,
    setSeconds,
    setMilliseconds,
    getHours,
    getMinutes,
    getMonth,
    getYear,
    isAfter,
    isBefore,
    isEqual,
    addMonths,
    getSeconds,
    set,
    add,
    sub,
    startOfWeek,
    endOfWeek,
    getDay,
    parseISO,
} from 'date-fns';
import type { Locale } from 'date-fns';

import type {
    IDisableDates,
    IMonthValue,
    InternalModuleValue,
    ITimeValue,
    WeekStartNum,
    IDateFilter,
} from '@/interfaces';

const parseTextToDate = (value: string, pattern: string): Date | null => {
    const parsedDate = parse(value, pattern.slice(0, value.length), new Date());
    if (isValid(parsedDate) && isDate(parsedDate)) {
        return parsedDate;
    }
    return null;
};

export const parseFreeInput = (
    value: string,
    pattern: string | string[] | ((value: string) => Date | null),
): Date | null => {
    if (typeof pattern === 'string') {
        return parseTextToDate(value, pattern);
    }

    if (Array.isArray(pattern)) {
        let parsedDate = null;
        for (let i = 0; i < pattern.length; i++) {
            parsedDate = parseTextToDate(value, pattern[i]);
            if (parsedDate) {
                break;
            }
        }
        return parsedDate;
    }

    if (typeof pattern === 'function') {
        return pattern(value);
    }

    return null;
};

export const resetDateTime = (value: Date | string): Date => {
    let dateParse = new Date(JSON.parse(JSON.stringify(value)));
    dateParse = setHours(dateParse, 0);
    dateParse = setMinutes(dateParse, 0);
    dateParse = setSeconds(dateParse, 0);
    dateParse = setMilliseconds(dateParse, 0);

    return dateParse;
};

export const isValidDate = (value: Date | Date[] | null): boolean => {
    if (Array.isArray(value)) {
        return isValid(value[0]) && (value[1] ? isValid(value[1]) : true);
    }
    return value ? isValid(value) : false;
};

export const setDateTime = (
    date: Date | null,
    hours?: number | string | null,
    minutes?: number | string | null,
    seconds?: number | string | null,
): Date => {
    let dateCopy = date ? new Date(date) : new Date();
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

export const getNextMonthYear = (date: Date): { month: number; year: number } => {
    const newDate = addMonths(date, 1);
    return { month: getMonth(newDate), year: getYear(newDate) };
};

export const setDateMonthOrYear = (date: Date | null, month?: number | null, year?: number | null): Date => {
    let dateCopy = date ? new Date(date) : new Date();
    if (month || month === 0) {
        dateCopy = setMonth(dateCopy, month);
    }
    if (year) {
        dateCopy = setYear(dateCopy, year);
    }
    return dateCopy;
};

const getTimeFormat = (is24: boolean, seconds: boolean): string =>
    is24 ? `HH:mm${seconds ? ':ss' : ''}` : `hh:mm${seconds ? ':ss' : ''} aa`;

export const getDefaultPattern = (
    pattern: string | null,
    is24: boolean,
    enableSeconds: boolean,
    monthPicker: boolean,
    timePicker: boolean,
    weekPicker: boolean,
    yearPicker: boolean,
    enableTimePicker: boolean,
): string => {
    if (pattern) {
        return pattern;
    }
    if (monthPicker) {
        return 'MM/yyyy';
    }
    if (timePicker) {
        return getTimeFormat(is24, enableSeconds);
    }
    if (weekPicker) {
        return 'MM/dd/yyyy';
    }
    if (yearPicker) {
        return 'yyyy';
    }
    return enableTimePicker ? `MM/dd/yyyy, ${getTimeFormat(is24, enableSeconds)}` : 'MM/dd/yyyy';
};

export const getTimeVal = (date?: Date): ITimeValue => {
    const dateValue = date || new Date();
    return {
        hours: getHours(dateValue),
        minutes: getMinutes(dateValue),
        seconds: getSeconds(dateValue),
    };
};

export const getMonthVal = (date: Date): IMonthValue => ({ month: getMonth(date), year: getYear(date) });

export const getMonthValForExternal = (date: Date | Date[]): IMonthValue | IMonthValue[] => {
    if (Array.isArray(date)) {
        return [getMonthVal(date[0]), date[1] ? getMonthVal(date[1]) : (null as unknown as IMonthValue)];
    }
    return getMonthVal(date);
};

export const getTImeForExternal = (date: Date | Date[]): ITimeValue | ITimeValue[] => {
    if (Array.isArray(date)) {
        return [getTimeVal(date[0]), getTimeVal(date[1])];
    }
    return getTimeVal(date);
};

const formatFn = (value: Date, pattern: string, locale?: Locale | null): string => {
    if (locale) {
        return format(value, pattern, { locale });
    }
    return format(value, pattern);
};

export const formatDate = (
    value: Date | Date[],
    pattern: string,
    locale?: Locale | null,
    textInputSeparator?: string,
    modelAuto?: boolean,
): string => {
    if (Array.isArray(value)) {
        return `${formatFn(value[0], pattern, locale)} ${
            modelAuto && !value[1] ? '' : textInputSeparator ? textInputSeparator : '-'
        } ${value[1] ? formatFn(value[1], pattern, locale) : ''}`;
    }

    return formatFn(value, pattern, locale);
};

export const isDateAfter = (date: Date | string | null, dateToCompare: Date | string | null): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isAfter(resetDateTime(date), resetDateTime(dateToCompare));
};

export const isDateBefore = (date: Date | string | null, dateToCompare: Date | string | null): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isBefore(resetDateTime(date), resetDateTime(dateToCompare));
};

export const isDateEqual = (date: Date | string | null, dateToCompare: Date | string | null): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isEqual(resetDateTime(date), resetDateTime(dateToCompare));
};

export const addTime = (initial: Record<string, number>, toAdd: Duration) => add(set(new Date(), initial), toAdd);

export const subTime = (initial: Record<string, number>, toSub: Duration) => sub(set(new Date(), initial), toSub);

const setTimeValue = (date: Date): Date =>
    set(new Date(), { hours: getHours(date), minutes: getMinutes(date), seconds: getSeconds(date) });

const getMinMaxTime = (time: ITimeValue): Date => {
    return set(new Date(), {
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
    return compare === 'max' ? date.getTime() <= dateToCompare.getTime() : date.getTime() >= dateToCompare.getTime();
};

export const isValidTime = (
    date: InternalModuleValue,
    maxTime: ITimeValue,
    minTime: ITimeValue,
    maxDate: Date | string,
    minDate: Date | string,
): boolean => {
    let isValid = true;
    if (!date) {
        return true;
    }
    const selectedDateTime =
        !minDate && !maxDate
            ? Array.isArray(date)
                ? [date[0] ? setTimeValue(date[0]) : null, date[1] ? setTimeValue(date[1]) : null]
                : setTimeValue(date)
            : date;
    if (maxTime || maxDate) {
        const max = maxTime ? getMinMaxTime(maxTime) : new Date(maxDate);
        if (Array.isArray(selectedDateTime)) {
            isValid =
                validateTime(selectedDateTime[0], max, 'max', !!maxDate) &&
                validateTime(selectedDateTime[1], max, 'max', !!maxDate);
        } else {
            isValid = validateTime(selectedDateTime, max, 'max', !!maxDate);
        }
    }

    if (minTime || minDate) {
        const min = minTime ? getMinMaxTime(minTime) : new Date(minDate);
        if (Array.isArray(selectedDateTime)) {
            isValid =
                validateTime(selectedDateTime[0], min, 'min', !!minDate) &&
                validateTime(selectedDateTime[1], min, 'min', !!minDate) &&
                isValid;
        } else {
            isValid = validateTime(selectedDateTime, min, 'min', !!minDate) && isValid;
        }
    }
    return isValid;
};

export const isMonthWithinRange = (
    date: Date | string,
    minDate: Date | string | null,
    maxDate: Date | string | null,
): boolean => {
    let valid = true;
    if (minDate && maxDate) {
        valid = isDateAfter(new Date(date), new Date(minDate)) && isDateBefore(new Date(date), new Date(maxDate));
    }
    if (minDate) {
        valid = isDateAfter(new Date(date), new Date(minDate));
    }
    if (maxDate) {
        valid = isDateBefore(new Date(date), new Date(maxDate));
    }

    return valid;
};

export const sanitizeDate = (date: Date | string): Date | string => {
    if (date instanceof Date) {
        return date;
    }
    return parseISO(date);
};

export const dateToUtc = (date: Date, preserve: boolean) => {
    if (preserve) {
        const tzOffset = new Date().getTimezoneOffset() * 60000;
        return new Date(date.getTime() - tzOffset).toISOString();
    }
    const utcDate = Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
    );

    return new Date(utcDate).toISOString();
};

export const isDateBetween = (range: Date[], hoverDate: Date, dateToCheck: Date): boolean => {
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

export const getWeekFromDate = (date: Date, weekStartsOn: WeekStartNum): [Date, Date] => {
    const start = startOfWeek(date, { weekStartsOn });
    const end = endOfWeek(date, { weekStartsOn });
    return [start, end];
};

export const matchDate = (date: Date, pattern: Date[] | string[] | number[] | ((date: Date) => boolean)): boolean => {
    if (Array.isArray(pattern)) {
        return pattern.some((includedDate) => isDateEqual(sanitizeDate(new Date(includedDate)), sanitizeDate(date)));
    }
    return pattern(date);
};

const validateDate = (
    date: Date,
    minDate: Date | string,
    maxDate: Date | string,
    disabledDates: Date[] | string[] | IDisableDates,
    allowedDates: Date[] | string[],
    filters: IDateFilter,
    disabledWeekDays: string[] | number[],
    yearRange: number[],
): boolean => {
    const aboveMax = maxDate ? isDateAfter(sanitizeDate(date), sanitizeDate(maxDate)) : false;
    const bellowMin = minDate ? isDateBefore(sanitizeDate(date), sanitizeDate(minDate)) : false;
    const inDisableArr = matchDate(date, disabledDates);
    const disabledMonths = filters.months.length ? filters.months.map((month) => +month) : [];
    const inDisabledMonths = disabledMonths.includes(getMonth(date));
    const weekDayDisabled = disabledWeekDays.length ? disabledWeekDays.some((day) => +day === getDay(date)) : false;
    const notInSpecific = allowedDates.length
        ? !allowedDates.some((dateVal) => isDateEqual(sanitizeDate(dateVal), sanitizeDate(date)))
        : false;

    const dateYear = getYear(date);

    const outOfYearRange = dateYear < +yearRange[0] || dateYear > +yearRange[1];

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

export const dateValidator = (
    minDate: Date | string,
    maxDate: Date | string,
    disabledDates: Date[] | string[] | IDisableDates,
    allowedDates: Date[] | string[],
    filters: IDateFilter,
    disabledWeekDays: string[] | number[],
    yearRange: number[],
) => {
    const validate = (date: Date) =>
        validateDate(date, minDate, maxDate, disabledDates, allowedDates, filters, disabledWeekDays, yearRange);

    return {
        validate,
    };
};
