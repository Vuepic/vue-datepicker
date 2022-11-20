import { computed } from 'vue';
import { addMonths, addYears, getMonth, getYear, set, subMonths, subYears } from 'date-fns';

import { isDateAfter, isDateBefore, isDateEqual } from '@/utils/date-utils';
import { useState } from '@/components/composables/state';

import type { VueEmit } from '@/interfaces';

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

export const useMontYearPick = (props: { month: number; year: number }, emit: VueEmit) => {
    const { config } = useState();
    const recursiveMonthAdjust = (date: Date, increment: boolean): Date => {
        let monthDate = date;
        if (config.value.filters.months.includes(getMonth(monthDate))) {
            monthDate = increment ? addMonths(date, 1) : subMonths(date, 1);
            return recursiveMonthAdjust(monthDate, increment);
        }
        return monthDate;
    };

    const recursiveYearAdjust = (date: Date, increment: boolean): Date => {
        let yearDate = date;
        if (config.value.filters.years.includes(getYear(yearDate))) {
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

        if (config.value.filters.months.includes(month)) {
            date = recursiveMonthAdjust(date, isNext);
            month = getMonth(date);
            year = getYear(date);
        }

        if (config.value.filters.years.includes(year)) {
            date = recursiveYearAdjust(date, isNext);
            year = getYear(date);
        }
        if (
            validateMonthYearInRange(
                config.value.minDate,
                config.value.maxDate,
                month,
                year,
                isNext,
                config.value.preventMinMaxNavigation,
            )
        ) {
            updateMonthYear(month, year);
        }
    };

    const updateMonthYear = (month: number, year: number): void => {
        emit('update-month-year', { month, year });
    };

    const isDisabled = computed(() => (next: boolean) => {
        if (!config.value.preventMinMaxNavigation) return false;
        if (next && !config.value.maxDate) return false;
        if (!next && !config.value.minDate) return false;
        const currentDate = set(new Date(), { month: props.month, year: props.year });
        const compareDate = next ? addMonths(currentDate, 1) : subMonths(currentDate, 1);
        const monthYear: [number, number] = [getMonth(compareDate), getYear(compareDate)];
        return next
            ? !validateMaxDate(config.value.maxDate, ...monthYear)
            : !validateMinDate(config.value.minDate, ...monthYear);
    });

    return { handleMonthYearChange, isDisabled };
};
