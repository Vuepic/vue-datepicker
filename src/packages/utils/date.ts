import { getHours, getMinutes, getSeconds, isEqual, isValid, set, startOfMonth } from 'date-fns';
import type { MaybeDate, MaybeValue, Time } from '@packages/types';

export const getDate = (value?: MaybeDate) => (value ? new Date(value) : new Date());

export const assignTime = (time: Partial<Time>) => {
    const defaultTime = {
        hours: getHours(getDate()),
        minutes: getMinutes(getDate()),
        seconds: getSeconds(getDate()),
    };
    return Object.assign(defaultTime, time);
};

export const isValidDate = (value: MaybeValue<Date> | MaybeValue<Date>[]): boolean => {
    if (Array.isArray(value)) {
        return isValid(value[0]) && (value[1] ? isValid(value[1]) : true);
    }
    return value ? isValid(value) : false;
};

export const resetDateTime = (value?: MaybeDate, beginning?: boolean): Date => {
    const date = getDate(value);
    const timeReset = set(date, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    return beginning ? startOfMonth(timeReset) : timeReset;
};

export const isDateEqual = (date: MaybeDate, dateToCompare: MaybeDate): boolean => {
    if (!date || !dateToCompare) {
        return false;
    }
    return isEqual(resetDateTime(date), resetDateTime(dateToCompare));
};
