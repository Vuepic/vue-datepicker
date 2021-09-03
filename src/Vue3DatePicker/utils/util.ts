import {
    FormatOptions,
    ICalendarDate,
    ICalendarDay,
    IDefaultSelect,
    IHoursOptions,
    IModelValueMonthPicker,
} from '../interfaces';

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

// From the giving date get the date after 7 days
const getSevenDaysOffset = (date: Date): Date => {
    const startDate = new Date(JSON.parse(JSON.stringify(date)));
    return new Date(startDate.setDate(startDate.getDate() + 7));
};

// Get 7 days from the provided start date, month is used to check whether the date is from the specified month or in the offset
const getWeekDays = (startDay: Date, month: number): ICalendarDay[] => {
    const startDate = new Date(JSON.parse(JSON.stringify(startDay)));
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const next = new Date(new Date(JSON.parse(JSON.stringify(startDate))).getTime());
        next.setDate(startDate.getDate() + i);
        dates.push({
            text: next.getDate(),
            value: next,
            current: JSON.parse(JSON.stringify(next.getMonth())) === month,
        });
    }
    return dates;
};

/**
 * Returns the number of weeks in a month, each week must have current month date in
 */
const getNumberOfWeeksInAMonth = (firstDate: Date, lastDate: Date): number => {
    return Math.ceil((firstDate.getDay() + lastDate.getDate() - 1) / 7);
};

// Get days for the calendar to be displayed in a table grouped by weeks
export const getCalendarDays = (month: number, year: number, start: number): ICalendarDate[] => {
    const weeks: ICalendarDate[] = [];
    const firstDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0);

    let firstDateInCalendar = getFirstDayOfTheFirstWeek(firstDate, start);
    const weeksInMonth = getNumberOfWeeksInAMonth(firstDate, lastDate);
    for (let week = 0; week < weeksInMonth; week++) {
        if (week !== 0) {
            firstDateInCalendar = getSevenDaysOffset(firstDateInCalendar);
        }
        const days = getWeekDays(firstDateInCalendar, month);
        weeks.push({ days });
    }

    return weeks;
};

/**
 * Different config for 24h and 12H
 */
const getHoursOptions = (is24: boolean): IHoursOptions => {
    return is24 ? { hourCycle: 'h23' } : { hour12: true };
};

/**
 * Format Date object into readable format, specified by props
 */
export const formatSingleDate = (
    date: Date,
    locale: string,
    formatOptions: FormatOptions,
    is24: boolean,
    showTime: boolean,
): string => {
    let options = formatOptions;
    if (showTime) {
        options = Object.assign(options, {
            hour: 'numeric',
            minute: 'numeric',
            hourCycle: 'h23',
            ...getHoursOptions(is24),
        });
    }
    return date.toLocaleDateString(locale, options);
};

/**
 *  Format Date range into readable format, specified by props
 */
export const formatRangeDate = (
    dates: Date[],
    locale: string,
    formatOptions: FormatOptions,
    is24: boolean,
    showTime: boolean,
    returnArr?: boolean,
): string | string[] => {
    let options = formatOptions;
    if (showTime) {
        options = Object.assign(options, { hour: 'numeric', minute: 'numeric', ...getHoursOptions(is24) });
    }
    if (returnArr) {
        return [dates[0].toLocaleDateString(locale, options), dates[1].toLocaleDateString(locale, options)];
    }
    return `${dates[0].toLocaleDateString(locale, options)} - ${dates[1].toLocaleDateString(locale, options)}`;
};

/**
 * Format value for month picker
 */
export const formatMonthValue = (monthValue: IModelValueMonthPicker): string => {
    if (monthValue && (monthValue.month || monthValue.month === 0) && monthValue.year) {
        const month = monthValue.month + 1 < 10 ? `0${monthValue.month + 1}` : monthValue.month + 1;
        return `${month}/${monthValue.year}`;
    }
    return '';
};

export const generateMinutes = (increment: number): IDefaultSelect[] => {
    const minutes = [];

    for (let i = 1; i < 60; i += increment) {
        minutes.push({ text: `${i}`, value: i });
    }
    return minutes;
};

export const generateHours = (is24: boolean): IDefaultSelect[] => {
    const hours = [];

    for (let i = 1; i <= (is24 ? 24 : 12); i++) {
        hours.push({ text: `${i}`, value: i });
    }
    return hours;
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
 * Generate month names based on locale
 */
export const getMonthNames = (locale: string): string[] => {
    const formatter = new Intl.DateTimeFormat(locale, { month: 'short', timeZone: 'UTC' });
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
        const mm = month < 10 ? `0${month}` : month;
        return new Date(`2017-${mm}-01T00:00:00+00:00`);
    });
    return months.map((date) => formatter.format(date).slice(0, 3));
};

/**
 * Since internally watched values are in 24h mode, this will get am-pm value from set hour
 */
export const hoursToAmPmHours = (index: number): number => {
    const hoursValues = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    return hoursValues[index];
};
