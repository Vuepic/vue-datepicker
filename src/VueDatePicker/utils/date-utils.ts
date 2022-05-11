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

export const parseFreeInput = (value: string, pattern: string): Date | null => {
    const parsedDate = parse(value, pattern.slice(0, value.length), new Date());
    if (isValid(parsedDate) && isDate(parsedDate)) {
        return parsedDate;
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
): string => {
    if (Array.isArray(value)) {
        return `${formatFn(value[0], pattern, locale)} ${textInputSeparator ? textInputSeparator : '-'} ${
            value[1] ? formatFn(value[1], pattern, locale) : ''
        }`;
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

export const isValidTime = (date: InternalModuleValue, maxTime: ITimeValue, minTime: ITimeValue): boolean => {
    let isValid = true;
    if (!date) {
        return true;
    }
    const selectedDateTime = Array.isArray(date)
        ? [date[0] ? setTimeValue(date[0]) : null, date[1] ? setTimeValue(date[1]) : null]
        : setTimeValue(date);
    if (maxTime) {
        const maxDate = getMinMaxTime(maxTime);
        if (Array.isArray(selectedDateTime)) {
            isValid =
                (selectedDateTime[0] ? selectedDateTime[0].getTime() <= maxDate.getTime() : true) &&
                (selectedDateTime[1] ? selectedDateTime[1].getTime() <= maxDate.getTime() : true);
        } else {
            isValid = selectedDateTime.getTime() <= maxDate.getTime();
        }
    }

    if (minTime) {
        const minDate = getMinMaxTime(minTime);
        if (Array.isArray(selectedDateTime)) {
            isValid =
                (selectedDateTime[0] ? selectedDateTime[0].getTime() >= minDate.getTime() : true) &&
                (selectedDateTime[1] ? selectedDateTime[1].getTime() >= minDate.getTime() : true) &&
                isValid;
        } else {
            isValid = selectedDateTime.getTime() >= minDate.getTime() && isValid;
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

export const dateToUtc = (date: Date): string => {
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
    const aboveMax = maxDate ? isDateAfter(dateToUtc(date), dateToUtc(new Date(maxDate))) : false;
    const bellowMin = minDate ? isDateBefore(dateToUtc(date), dateToUtc(new Date(minDate))) : false;
    const inDisableArr =
        typeof disabledDates === 'function'
            ? disabledDates(date)
            : disabledDates.some((disabledDate: Date | string) =>
                  isDateEqual(dateToUtc(new Date(disabledDate)), dateToUtc(date)),
              );
    const disabledMonths = filters.months.length ? filters.months.map((month) => +month) : [];
    const inDisabledMonths = disabledMonths.includes(getMonth(date));
    const weekDayDisabled = disabledWeekDays.length ? disabledWeekDays.some((day) => +day === getDay(date)) : false;
    const notInSpecific = allowedDates.length
        ? !allowedDates.some((dateVal) => isDateEqual(dateToUtc(new Date(dateVal)), dateToUtc(date)))
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
