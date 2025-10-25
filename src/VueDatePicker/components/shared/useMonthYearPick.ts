import { computed, type EmitFn } from 'vue';
import { addMonths, addYears, getMonth, getYear, set, setYear, subMonths, subYears } from 'date-fns';

import { useContext, useValidation } from '@/composables';

export const useMonthYearPick = (
    props: { month: number; year: number },
    emit: EmitFn<{ 'update-month-year': [val: { fromNav?: boolean; month: number; year: number }] }>,
) => {
    const {
        getDate,
        rootProps,
        defaults: { filters },
    } = useContext();
    const { validateMonthYearInRange, validateMonthYear } = useValidation();

    const recursiveMonthAdjust = (date: Date, increment: boolean): Date => {
        let monthDate = date;
        if (filters.value.months.includes(getMonth(monthDate))) {
            monthDate = increment ? addMonths(date, 1) : subMonths(date, 1);
            return recursiveMonthAdjust(monthDate, increment);
        }
        return monthDate;
    };

    const recursiveYearAdjust = (date: Date, increment: boolean): Date => {
        let yearDate = date;
        if (filters.value.years.includes(getYear(yearDate))) {
            yearDate = increment ? addYears(date, 1) : subYears(date, 1);
            return recursiveYearAdjust(yearDate, increment);
        }
        return yearDate;
    };

    const handleMonthYearChange = (isNext: boolean, fromNav = false): void => {
        const initialDate = set(getDate(), { month: props.month, year: props.year });
        let date = isNext ? addMonths(initialDate, 1) : subMonths(initialDate, 1);
        if (rootProps.disableYearSelect) {
            date = setYear(date, props.year);
        }

        let month = getMonth(date);
        let year = getYear(date);

        if (filters.value.months.includes(month)) {
            date = recursiveMonthAdjust(date, isNext);
            month = getMonth(date);
            year = getYear(date);
        }

        if (filters.value.years.includes(year)) {
            date = recursiveYearAdjust(date, isNext);
            year = getYear(date);
        }
        if (validateMonthYearInRange(month, year, isNext, rootProps.preventMinMaxNavigation)) {
            updateMonthYear(month, year, fromNav);
        }
    };

    const updateMonthYear = (month: number, year: number, fromNav: boolean): void => {
        emit('update-month-year', { month, year, fromNav });
    };

    const isDisabled = computed(() => (next: boolean) => {
        return validateMonthYear(
            set(getDate(), { month: props.month, year: props.year }),
            rootProps.preventMinMaxNavigation,
            next,
        );
    });

    return { handleMonthYearChange, isDisabled, updateMonthYear };
};
