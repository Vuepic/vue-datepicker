import {
    addDays,
    eachDayOfInterval,
    endOfWeek,
    format,
    getHours,
    getMinutes,
    getMonth,
    getSeconds,
    getYear,
    isAfter,
    isBefore,
    isEqual,
    set,
    setHours,
    setMilliseconds,
    setSeconds,
    startOfMonth,
    startOfWeek,
    subDays,
    type Duration,
    type Day,
    setMinutes,
} from 'date-fns';
import type { MaybeDate, Numeric, TimeKey, TimeModel, TimeObj } from '@/types';

export const useDateUtils = () => {
    const isValidNum = (value: Numeric | undefined): value is string | number => {
        const num = value ?? -1;
        return +num >= 0;
    };

    const resetDateTime = (date: MaybeDate, fromStartOfMonth?: boolean): Date => {
        if (!date) return new Date();
        const dateParse = getDate(date);
        const timeReset = set(dateParse, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
        return fromStartOfMonth ? startOfMonth(timeReset) : timeReset;
    };

    const getDate = (date?: MaybeDate) => {
        return date ? new Date(date) : new Date();
    };

    const setTime = (time: Partial<{ hours: Numeric; minutes: Numeric; seconds: Numeric }>, dateToSet?: MaybeDate) => {
        let date = getDate(dateToSet);
        if (isValidNum(time.hours)) date = setHours(date, +time.hours);
        if (isValidNum(time.minutes)) date = setMinutes(date, +time.minutes);
        if (isValidNum(time.seconds)) date = setSeconds(date, +time.seconds);
        return setMilliseconds(date, 0);
    };

    const getWeekFromDate = (date: Date, weekStart: string | number): [Date, Date] => {
        const start = startOfWeek(date, { weekStartsOn: +weekStart as Day });
        const end = endOfWeek(date, { weekStartsOn: +weekStart as Day });
        return [start, end];
    };

    const isDateBefore = (date: MaybeDate, dateToCompare: MaybeDate): boolean => {
        if (!date || !dateToCompare) {
            return false;
        }
        return isBefore(resetDateTime(date), resetDateTime(dateToCompare));
    };

    const isDateEqual = (date: MaybeDate, dateToCompare: MaybeDate): boolean => {
        if (!date || !dateToCompare) {
            return false;
        }
        return isEqual(resetDateTime(date), resetDateTime(dateToCompare));
    };

    const isDateAfter = (date: MaybeDate, dateToCompare: MaybeDate): boolean => {
        if (!date || !dateToCompare) {
            return false;
        }
        return isAfter(resetDateTime(date), resetDateTime(dateToCompare));
    };

    const isDateBetween = (range: Date[], hoverDate: Date | null, dateToCheck: Date): boolean => {
        if (range?.[0] && range?.[1]) {
            return isDateAfter(dateToCheck, range[0]) && isDateBefore(dateToCheck, range[1]);
        }
        if (range?.[0] && hoverDate) {
            return (
                (isDateAfter(dateToCheck, range[0]) && isDateBefore(dateToCheck, hoverDate)) ||
                (isDateBefore(dateToCheck, range[0]) && isDateAfter(dateToCheck, hoverDate))
            );
        }
        return false;
    };

    const getDaysInBetween = (dateOne: Date, dateTwo: Date) => {
        // Check if selection is backwards
        const start = isDateAfter(dateOne, dateTwo) ? dateTwo : dateOne;
        const end = isDateAfter(dateTwo, dateOne) ? dateTwo : dateOne;
        return eachDayOfInterval({ start, end });
    };

    const getCellId = (date: Date) => {
        return `dp-${format(date, 'yyyy-MM-dd')}`;
    };

    const resetDate = (date: MaybeDate) => {
        return resetDateTime(set(getDate(date), { date: 1 }));
    };

    const getMinMonth = (year: number, minDate?: MaybeDate) => {
        if (minDate) {
            const minYear = getYear(getDate(minDate));
            if (minYear > year) return 12;
            if (minYear === year) return getMonth(getDate(minDate));
        }
    };

    const getMaxMonth = (year: number, maxDate?: MaybeDate) => {
        if (maxDate) {
            const maxYear = getYear(getDate(maxDate));
            if (maxYear < year) return -1;
            if (maxYear === year) return getMonth(getDate(maxDate));
            return undefined;
        }
        return undefined;
    };

    const getYearFromDate = (date: MaybeDate) => {
        if (date) return getYear(getDate(date));
        return undefined;
    };

    const getTimeObj = (date: Date): TimeObj => {
        return {
            hours: getHours(date),
            minutes: getMinutes(date),
            seconds: getSeconds(date),
        };
    };

    const setTimeValue = (date: Date): Date => set(getDate(), getTimeObj(date));

    const sanitizeTime = (time: TimeModel, type?: TimeKey, value?: number): Duration => {
        if (type && (value || value === 0)) {
            return Object.fromEntries(
                (['hours', 'minutes', 'seconds'] as TimeKey[]).map((timeType) => {
                    if (timeType === type) return [timeType, value];
                    return [timeType, Number.isNaN(+time[timeType]) ? undefined : +time[timeType]];
                }),
            );
        }
        return {
            hours: Number.isNaN(+time.hours) ? undefined : +time.hours,
            minutes: Number.isNaN(+time.minutes) ? undefined : +time.minutes,
            seconds: Number.isNaN(+time.seconds) ? undefined : +time.seconds,
        };
    };

    const getTimeObjFromCurrent = (
        obj: TimeModel | Record<string, string | number>,
        enableSeconds: boolean,
    ): TimeModel => {
        const date = getDate();
        const defaultTime = {
            hours: getHours(date),
            minutes: getMinutes(date),
            seconds: enableSeconds ? getSeconds(date) : 0,
        };
        return Object.assign(defaultTime, obj);
    };

    const getBeforeAndAfterInRange = (range: number, date: Date) => {
        const before = subDays(resetDateTime(date), range);
        const after = addDays(resetDateTime(date), range);
        return { before, after };
    };

    const timeGetter = (type: TimeKey, date: Date, isRange: boolean) => {
        const fn = {
            hours: getHours(date),
            minutes: getMinutes(date),
            seconds: 0,
        };

        return isRange ? [fn[type], fn[type]] : fn[type];
    };

    return {
        resetDateTime,
        getDate,
        setTime,
        getWeekFromDate,
        isDateAfter,
        isDateBefore,
        isDateBetween,
        isDateEqual,
        getDaysInBetween,
        getCellId,
        resetDate,
        getMinMonth,
        getMaxMonth,
        getYearFromDate,
        getTimeObj,
        setTimeValue,
        sanitizeTime,
        getTimeObjFromCurrent,
        getBeforeAndAfterInRange,
        timeGetter,
    };
};
