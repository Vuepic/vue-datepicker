import { addMonths, addYears, getMonth, getYear, set, subMonths, subYears } from 'date-fns';

import type { UseMonthYearPick, VueEmit } from '@/interfaces';
import { isDateAfter, isDateBefore, isDateEqual } from '@/utils/date-utils';

const getDateForCompare = (date: Date | string, month: number, year: number): [Date, Date] => {
    return [set(new Date(date), { date: 1 }), set(new Date(), { month, year, date: 1 })];
};

const validateMinDate = (minDate: Date | string, month: number, year: number): boolean => {
    return (
        isDateBefore(...getDateForCompare(minDate, month, year)) ||
        isDateEqual(...getDateForCompare(minDate, month, year))
    );
};

const validateMaxDate = (maxDate: Date | string, month: number, year: number): boolean => {
    return (
        isDateAfter(...getDateForCompare(maxDate, month, year)) ||
        isDateEqual(...getDateForCompare(maxDate, month, year))
    );
};

export const validateMonthYearInRange = (
    minDate: Date | string,
    maxDate: Date | string,
    month: number,
    year: number,
    isNext: boolean,
    preventNav: boolean,
): boolean => {
    let valid = false;
    if (preventNav) {
        if (minDate && maxDate) {
            if (maxDate && isNext && validateMaxDate(maxDate, month, year)) {
                valid = true;
            }
            if (minDate && !isNext && validateMinDate(minDate, month, year)) {
                valid = true;
            }
        } else if (minDate && validateMinDate(minDate, month, year)) {
            valid = true;
        } else if (maxDate && validateMaxDate(maxDate, month, year)) {
            valid = true;
        }
    } else {
        valid = true;
    }
    return valid;
};

export const useMontYearPick = (props: UseMonthYearPick, emit: VueEmit) => {
    const recursiveMonthAdjust = (date: Date, increment: boolean): Date => {
        let monthDate = date;
        if (props.filters.months.includes(getMonth(monthDate))) {
            monthDate = increment ? addMonths(date, 1) : subMonths(date, 1);
            return recursiveMonthAdjust(monthDate, increment);
        }
        return monthDate;
    };

    const recursiveYearAdjust = (date: Date, increment: boolean): Date => {
        let yearDate = date;
        if (props.filters.years.includes(getYear(yearDate))) {
            yearDate = increment ? addYears(date, 1) : subYears(date, 1);
            return recursiveYearAdjust(yearDate, increment);
        }
        return yearDate;
    };

    const handleMonthYearChange = (isNext: boolean): void => {
        const initialDate = set(new Date(), { month: props.month, year: props.year });
        let date = isNext ? addMonths(initialDate, 1) : subMonths(initialDate, 1);

        let month = getMonth(date);
        let year = getYear(date);

        if (props.filters.months.includes(month)) {
            date = recursiveMonthAdjust(date, isNext);
            month = getMonth(date);
            year = getYear(date);
        }

        if (props.filters.years.includes(year)) {
            date = recursiveYearAdjust(date, isNext);
            year = getYear(date);
        }
        if (
            validateMonthYearInRange(props.minDate, props.maxDate, month, year, isNext, props.preventMinMaxNavigation)
        ) {
            updateMonthYear(month, year);
        }
    };

    const updateMonthYear = (month: number, year: number): void => {
        emit('update:month', month);
        emit('update:year', year);
    };

    return { handleMonthYearChange };
};
