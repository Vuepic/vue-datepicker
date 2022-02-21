import { ComponentPublicInstance, unref } from 'vue';
import { addDays, getMonth, startOfWeek } from 'date-fns';

import {
    ICalendarDate,
    ICalendarDay,
    IDateFilter,
    IDefaultSelect,
    IMarker,
    ITextInputOptions,
    ITransition,
    MaybeElementRef,
    WeekStartNum,
} from '../interfaces';
import { isDateEqual, resetDateTime } from './date-utils';

// Get 7 days from the provided start date, month is used to check whether the date is from the specified month or in the offset
const getWeekDays = (startDay: Date, month: number, hideOffsetDates: boolean): ICalendarDay[] => {
    const startDate = new Date(JSON.parse(JSON.stringify(startDay)));
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const next = addDays(startDate, i);
        const isNext = getMonth(next) !== month;
        dates.push({
            text: hideOffsetDates && isNext ? '' : next.getDate(),
            value: next,
            current: !isNext,
        });
    }
    return dates;
};

// Get days for the calendar to be displayed in a table grouped by weeks
export const getCalendarDays = (
    month: number,
    year: number,
    start: WeekStartNum,
    hideOffsetDates: boolean,
): ICalendarDate[] => {
    const weeks: ICalendarDate[] = [];
    const firstDate = new Date(year, month);
    const lastDate = new Date(year, month + 1, 0);

    const firstDateInCalendar = startOfWeek(firstDate, { weekStartsOn: start });

    const addDaysToWeek = (date: Date) => {
        const days = getWeekDays(date, month, hideOffsetDates);
        weeks.push({ days });
        if (
            !weeks[weeks.length - 1].days.some((day) => isDateEqual(resetDateTime(day.value), resetDateTime(lastDate)))
        ) {
            const nextDate = addDays(date, 7);
            addDaysToWeek(nextDate);
        }
    };
    addDaysToWeek(firstDateInCalendar);

    return weeks;
};

export const getArrayInArray = <T>(list: T[], increment = 3): T[][] => {
    const items = [];
    for (let i = 0; i < list.length; i += increment) {
        items.push([list[i], list[i + 1], list[i + 2]]);
    }

    return items;
};

/**
 * Generate week day names based on locale and in order specified in week start
 */
export const getDayNames = (locale: string, weekStart: number): string[] => {
    // Get list in order from sun ... sat
    const days = [1, 2, 3, 4, 5, 6, 7].map((day) => {
        return new Intl.DateTimeFormat(locale, { weekday: 'short', timeZone: 'UTC' })
            .format(new Date(`2017-01-0${day}T00:00:00+00:00`))
            .slice(0, 2);
    });

    // Get days tha are in order before specified week start
    const beforeWeekStart = days.slice(0, weekStart);
    // Get days tha are in order after specified week start
    const afterWeekStart = days.slice(weekStart + 1, days.length);

    // return them in correct order
    return [days[weekStart]].concat(...afterWeekStart).concat(...beforeWeekStart);
};

/**
 * Generate array of years for selection display
 */
export const getYears = (yearRange: number[] | string[]): IDefaultSelect[] => {
    const years: IDefaultSelect[] = [];
    for (let year = +yearRange[0]; year <= +yearRange[1]; year++) {
        years.push({ value: +year, text: `${year}` });
    }
    return years;
};

/**
 * Generate month names based on locale for selection display
 */
export const getMonths = (locale: string, format: 'long' | 'short'): IDefaultSelect[] => {
    const formatter = new Intl.DateTimeFormat(locale, { month: format, timeZone: 'UTC' });
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
        const mm = month < 10 ? `0${month}` : month;
        return new Date(`2017-${mm}-01T00:00:00+00:00`);
    });
    return months.map((date, i) => ({
        text: formatter.format(date),
        value: i,
    }));
};

/**
 * Since internally watched values are in 24h mode, this will get am-pm value from set hour
 */
export const hoursToAmPmHours = (index: number): number => {
    const hoursValues = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    return hoursValues[index];
};

/**
 * Default options to merge with user provided ones
 */
export const getDefaultTextInputOptions = (): ITextInputOptions => ({
    enterSubmit: true,
    tabSubmit: true,
    openMenu: true,
    rangeSeparator: ' - ',
});

/**
 * Default filters to merge with user provided values
 */
export const getDefaultFilters = (filters: Partial<IDateFilter>): IDateFilter =>
    Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, filters);

/**
 * For v-for loops randomize string value
 */
export const getKey = (index: number): string => {
    const len = 5;
    function makeKey(length: number): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result + index;
    }
    return makeKey(len);
};

export const unrefElement = (elRef: MaybeElementRef): HTMLElement | undefined => {
    const plain = unref(elRef);
    return (plain as ComponentPublicInstance)?.$el ?? plain;
};

export const getDefaultMarker = (marker: IMarker): IMarker => Object.assign({ type: 'dot' }, marker);

export const mergeDefaultTransitions = (conf: Partial<ITransition>): ITransition =>
    Object.assign(
        {
            open: 'dp-open',
            close: 'dp-close',
            next: 'calendar-next',
            previous: 'calendar-prev',
        },
        conf,
    );
