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
    subMonths,
    getSeconds,
    set,
    add,
    sub,
} from 'date-fns';

import { IMonthValue, InternalModuleValue, ITimeValue } from '../interfaces';

export const sanitizeDate = (date: Date) => {
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - userTimezoneOffset);
};

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

export const parseDate = (date: string, pattern: string): Date => parse(date, pattern, new Date());

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
    return dateCopy;
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

export const getTImeForExternal = (date: Date | Date[]): ITimeValue | ITimeValue[] => {
    if (Array.isArray(date)) {
        return [getTimeVal(date[0]), getTimeVal(date[1])];
    }
    return getTimeVal(date);
};

export const formatDate = (value: Date | Date[], pattern: string): string => {
    if (Array.isArray(value)) {
        return `${format(value[0], pattern)} - ${value[1] ? format(value[1], pattern) : ''}`;
    }

    return format(value, pattern);
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

export const getPreviousMonthYear = (month: number, year: number): { month: number; year: number } => {
    const date = subMonths(setYear(setMonth(new Date(), month), year), 1);
    return { month: getMonth(date), year: getYear(date) };
};

export const getNextYearMonth = (month: number, year: number): { month: number; year: number } => {
    const date = addMonths(setYear(setMonth(new Date(), month), year), 1);
    return { month: getMonth(date), year: getYear(date) };
};

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
                (selectedDateTime[1] ? selectedDateTime[1].getTime() >= minDate.getTime() : true);
        } else {
            isValid = selectedDateTime.getTime() >= minDate.getTime();
        }
    }
    return isValid;
};
