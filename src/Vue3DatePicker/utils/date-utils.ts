import parse from 'date-fns/parse';
import format from 'date-fns/format';
import isDate from 'date-fns/isDate';
import isValid from 'date-fns/isValid';
import setYear from 'date-fns/setYear';
import setMonth from 'date-fns/setMonth';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import setSeconds from 'date-fns/setSeconds';
import setMilliseconds from 'date-fns/setMilliseconds';
import getHours from 'date-fns/getHours';
import getMinutes from 'date-fns/getMinutes';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import isEqual from 'date-fns/isEqual';
import getISOWeek from 'date-fns/getISOWeek';
import addMonths from 'date-fns/addMonths';
import addDays from 'date-fns/addDays';
import addHours from 'date-fns/addHours';
import subHours from 'date-fns/subHours';
import addMinutes from 'date-fns/addMinutes';
import subMinutes from 'date-fns/subMinutes';
import subMonths from 'date-fns/subMonths';
import getDay from 'date-fns/getDay';

import { IMonthValue, ITimeValue } from '../interfaces';

/**
 * it will try to parse date based on pattern and parts of the text value
 */
export const parseFreeInput = (value: string, pattern: string): Date | null => {
    const parsedDate = parse(value, pattern.slice(0, value.length), new Date());
    if (isValid(parsedDate) && isDate(parsedDate)) {
        return parsedDate;
    }
    return null;
};

export const resetDateTime = (value: Date | string): Date => {
    // deep copy to bread inheritance
    let dateParse = new Date(JSON.parse(JSON.stringify(value)));
    dateParse = setHours(dateParse, 0);
    dateParse = setMinutes(dateParse, 0);
    dateParse = setSeconds(dateParse, 0);
    dateParse = setMilliseconds(dateParse, 0);

    return dateParse;
};

/**
 * Convert string value to date based on provided pattern
 */
export const parseDate = (date: string, pattern: string): Date => {
    return parse(date, pattern, new Date());
};

/**
 * Check if provided date(s) is valid
 */
export const isValidDate = (value: Date | Date[] | null): boolean => {
    if (Array.isArray(value)) {
        return isValid(value[0]) && (value[1] ? isValid(value[1]) : true);
    }
    return value ? isValid(value) : false;
};

/**
 * On a given date set time, or return a new date with set time
 */
export const setDateTime = (date: Date | null, hours?: number | null, minutes?: number | null): Date => {
    let dateCopy = date ? new Date(date) : new Date();
    if (hours || hours === 0) {
        dateCopy = setHours(dateCopy, hours);
    }
    if (minutes || minutes === 0) {
        dateCopy = setMinutes(dateCopy, minutes);
    }
    return dateCopy;
};

export const getNextMonthYear = (date: Date): { month: number; year: number } => {
    const newDate = addMonths(date, 1);
    return { month: getMonth(newDate), year: getYear(newDate) };
};

/**
 * On a given date set month and/or year or return new date with set month/year
 */
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

/**
 * If pattern is not specified return default
 */
export const getDefaultPattern = (
    pattern: string | null,
    is24: boolean,
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
        return is24 ? 'HH:mm' : 'hh:mm aa';
    }
    return enableTimePicker ? `MM/dd/yyyy, ${is24 ? 'HH:mm' : 'hh:mm aa'}` : 'MM/dd/yyyy';
};

/**
 * Extract time value from the date for time picker
 */
export const getTimeVal = (date?: Date): ITimeValue => {
    return { hours: getHours(date || new Date()), minutes: getMinutes(date || new Date()) };
};

/**
 * Extract month value from the date for month picker
 */
export const getMonthVal = (date: Date): IMonthValue => {
    return { month: getMonth(date), year: getYear(date) };
};

/**
 * Map internal date value to the value that will be passed to v-model external on time picker
 */
export const getTImeForExternal = (date: Date | Date[]): ITimeValue | ITimeValue[] => {
    if (Array.isArray(date)) {
        return [getTimeVal(date[0]), getTimeVal(date[1])];
    }
    return getTimeVal(date);
};

/**
 * Map internal date vale to the value that will be passed to v-model external on month picker
 */
export const getMonthForExternal = (date: Date): IMonthValue => {
    return getMonthVal(date);
};

/**
 * Format date values for the input field based on provided pattern
 */
export const formatDate = (value: Date | Date[], pattern: string): string => {
    if (Array.isArray(value)) {
        return `${format(value[0], pattern)} - ${value[1] ? format(value[1], pattern) : ''}`;
    }

    return format(value, pattern);
};

/**
 * Get month value from the provided date
 */
export const getDateMonth = (date: Date): number => {
    return getMonth(date);
};

/**
 * Get year value from the provided date
 */
export const getDateYear = (date: Date): number => {
    return getYear(date);
};

/**
 * Check if the given date is after the provided date
 */
export const isDateAfter = (date: Date | string | null, dateToCompare: Date | string | null): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isAfter(resetDateTime(date), resetDateTime(dateToCompare));
};

/**
 * Check if the given date is before the provided date
 */
export const isDateBefore = (date: Date | string | null, dateToCompare: Date | string | null): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isBefore(resetDateTime(date), resetDateTime(dateToCompare));
};

/**
 * Check if the given date is equal to the provided date
 */
export const isDateEqual = (date: Date | string | null, dateToCompare: Date | string | null): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isEqual(resetDateTime(date), resetDateTime(dateToCompare));
};

/**
 * Return the ISO week number for the given date
 */
export const getWeekNumber = (date: Date): number => {
    return getISOWeek(new Date(date));
};

/**
 * Get hours from given date, if none, will return current hours
 */
export const getDateHours = (date?: Date): number => {
    return getHours(date || new Date());
};

/**
 * Get minutes from the given date, if none, will return current minutes
 */
export const getDateMinutes = (date?: Date): number => {
    return getMinutes(date || new Date());
};

/**
 * Add n amount of days to a given date
 */
export const getAddedDays = (date: Date, days: number): Date => {
    return addDays(date, days);
};

/**
 * Add specific amount of hours to the previous hours
 */
export const addDateHours = (hours: number, toAdd: number): number => {
    return getHours(addHours(setHours(new Date(), hours), toAdd));
};

/**
 * Subtract specific amount of hours to the previous hours
 */
export const subDateHours = (hours: number, toSub: number): number => {
    return getHours(subHours(setHours(new Date(), hours), toSub));
};

/**
 * Add specific amount of minutes to the previous minutes
 */
export const addDateMinutes = (minutes: number, toAdd: number): number => {
    return getMinutes(addMinutes(setMinutes(new Date(), minutes), toAdd));
};

/**
 * Subtract specific amount of minutes to the previous minutes
 */
export const subDateMinutes = (minutes: number, toSub: number): number => {
    return getMinutes(subMinutes(setMinutes(new Date(), minutes), toSub));
};

export const getPreviousMonthYear = (month: number, year: number): { month: number; year: number } => {
    const date = subMonths(setYear(setMonth(new Date(), month), year), 1);
    return { month: getMonth(date), year: getYear(date) };
};

export const getNextYearMonth = (month: number, year: number): { month: number; year: number } => {
    const date = addMonths(setYear(setMonth(new Date(), month), year), 1);
    return { month: getMonth(date), year: getYear(date) };
};

export const getWeekDay = (date: string | Date): number => {
    return getDay(new Date(date));
};
