import { addMonths, addYears, getMonth, getYear, set, subMonths, subYears } from 'date-fns';
import { UseMonthYearPick, VueEmit } from '../../interfaces';

export const useMontYearPick = (
    props: UseMonthYearPick,
    emit: VueEmit,
): { handleMonthYearChange(isNext: boolean): void } => {
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
        updateMonthYear(month, year);
    };

    const updateMonthYear = (month: number, year: number): void => {
        emit('update:month', month);
        emit('update:year', year);
    };

    return { handleMonthYearChange };
};
