import {
    parse,
    isDate,
    isValid,
    setHours,
    setMinutes,
    setSeconds,
    setMilliseconds,
    isBefore,
    isEqual,
    isAfter,
} from 'date-fns';
import type { DateTimeSetter, DateValue } from '@/interfaces';

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
        for (const textVal of pattern) {
            parsedDate = parseTextToDate(value, textVal);
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

export const getDate = (value?: Date | string | number) => (value ? new Date(value) : new Date());

export const dateToUtc = (date: Date, preserve: boolean) => {
    if (preserve) {
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${date.getFullYear()}-${month}-${day}T${hours}:${minutes}:00.000Z`;
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

// Reset date time
export const resetDateTime = (value: Date | string): Date => {
    let dateParse = getDate(JSON.parse(JSON.stringify(value)));
    dateParse = setHours(dateParse, 0);
    dateParse = setMinutes(dateParse, 0);
    dateParse = setSeconds(dateParse, 0);
    dateParse = setMilliseconds(dateParse, 0);

    return dateParse;
};

export const setDateTime = (
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

export const isDateBefore = (date: DateValue, dateToCompare: DateValue): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isBefore(resetDateTime(date), resetDateTime(dateToCompare));
};

export const isDateEqual = (date: DateValue, dateToCompare: DateValue): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isEqual(resetDateTime(date), resetDateTime(dateToCompare));
};

export const isDateAfter = (date: DateValue, dateToCompare: DateValue): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isAfter(resetDateTime(date), resetDateTime(dateToCompare));
};

export const isDateBetween = (range: Date[], hoverDate: Date | null, dateToCheck: Date): boolean => {
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
