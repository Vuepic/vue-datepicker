import {
    ICalendarDate,
    ICalendarDay,
    IDateFilter,
    IDefaultSelect,
    ITextInputOptions,
    MaybeElementRef,
    WeekStartNum,
} from '../interfaces';
import { getAddedDays, isDateEqual, resetDateTime } from './date-utils';
import { ComponentPublicInstance, unref } from 'vue';

/**
 * Depending on a week start get starting date of the current calendar
 */
const getFirstDayOfTheFirstWeek = (firstDate: Date, start: number): Date => {
    const startDate = new Date(JSON.parse(JSON.stringify(firstDate)));
    const monthStart = startDate.getDay();
    const startDiff = Math.abs(start - monthStart);
    if (startDiff !== 0) {
        return new Date(startDate.setDate(startDate.getDate() - startDiff));
    }
    return startDate;
};

// Get 7 days from the provided start date, month is used to check whether the date is from the specified month or in the offset
const getWeekDays = (startDay: Date, month: number, hideOffsetDates: boolean): ICalendarDay[] => {
    const startDate = new Date(JSON.parse(JSON.stringify(startDay)));
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const next = new Date(new Date(JSON.parse(JSON.stringify(startDate))).getTime());
        next.setDate(startDate.getDate() + i);
        const isNext = JSON.parse(JSON.stringify(next.getMonth())) !== month;
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
    const firstDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0);

    const firstDateInCalendar = getFirstDayOfTheFirstWeek(firstDate, start);

    const addDaysToWeek = (date: Date) => {
        const days = getWeekDays(date, month, hideOffsetDates);
        weeks.push({ days });
        if (
            !weeks[weeks.length - 1].days.some((day) => isDateEqual(resetDateTime(day.value), resetDateTime(lastDate)))
        ) {
            const nextDate = getAddedDays(date, 7);
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
    openMenuOnFocus: true,
    rangeSeparator: '-',
});

/**
 * Default filters to merge with user provided values
 */
export const getDefaultFilters = (filters: Partial<IDateFilter>): IDateFilter => {
    return Object.assign({ months: [], years: [], times: { hours: [], minutes: [] } }, filters);
};

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
