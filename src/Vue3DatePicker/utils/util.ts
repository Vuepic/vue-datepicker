import { FormatOptions, ICalendarDate, ICalendarDay, IDefaultSelect } from '../interfaces';

// On start of the month based on the first date and week start get the date week starts with
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

// Returns the number of weeks in a month
const getNumberOfWeeksInAMonth = (start: number, firstDate: Date, lastDate: Date): number => {
    if (start === 1) {
        return Math.ceil((firstDate.getDay() + lastDate.getDate() - 1) / 7);
    }
    return Math.ceil((firstDate.getDay() % 7) + 1 + lastDate.getDate());
};

// Get days for the calendar to be displayed in a table grouped by weeks
export const getCalendarDays = (month: number, year: number, start: number): ICalendarDate[] => {
    const weeks: ICalendarDate[] = [];
    const firstDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0);

    let firstDateInCalendar = getFirstDayOfTheFirstWeek(firstDate, start);
    const weeksInMonth = getNumberOfWeeksInAMonth(start, firstDate, lastDate);

    for (let week = 0; week < weeksInMonth; week++) {
        if (week !== 0) {
            firstDateInCalendar = getSevenDaysOffset(firstDateInCalendar);
        }
        const days = getWeekDays(firstDateInCalendar, month);
        weeks.push({ days });
    }

    return weeks;
};

export const formatSingleDate = (date: Date, formatOptions: FormatOptions): string => {
    return date.toLocaleDateString(formatOptions.locale, formatOptions.options);
};

export const formatRangeDate = (dates: Date[], formatOptions: FormatOptions): string => {
    return `${dates[0].toLocaleDateString(formatOptions.locale, formatOptions.options)} - ${dates[1].toLocaleDateString(
        formatOptions.locale,
        formatOptions.options,
    )}`;
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
