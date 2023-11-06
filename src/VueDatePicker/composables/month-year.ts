import { computed } from 'vue';
import { addMonths, addYears, getMonth, getYear, set, setYear, subMonths, subYears } from 'date-fns';

import { useDefaults, useValidation } from '@/composables/index';
import { validateMonthYear } from '@/utils/date-utils';

import type { VueEmit } from '@/interfaces';
import type { PickerBasePropsType } from '@/props';

export const useMonthYearPick = (props: { month: number; year: number } & PickerBasePropsType, emit: VueEmit) => {
    const { defaultedFilters } = useDefaults(props);
    const { validateMonthYearInRange } = useValidation(props);

    const recursiveMonthAdjust = (date: Date, increment: boolean): Date => {
        let monthDate = date;
        if (defaultedFilters.value.months.includes(getMonth(monthDate))) {
            monthDate = increment ? addMonths(date, 1) : subMonths(date, 1);
            return recursiveMonthAdjust(monthDate, increment);
        }
        return monthDate;
    };

    const recursiveYearAdjust = (date: Date, increment: boolean): Date => {
        let yearDate = date;
        if (defaultedFilters.value.years.includes(getYear(yearDate))) {
            yearDate = increment ? addYears(date, 1) : subYears(date, 1);
            return recursiveYearAdjust(yearDate, increment);
        }
        return yearDate;
    };

    const handleMonthYearChange = (isNext: boolean, fromNav = false): void => {
        const initialDate = set(new Date(), { month: props.month, year: props.year });
        let date = isNext ? addMonths(initialDate, 1) : subMonths(initialDate, 1);
        if (props.disableYearSelect) {
            date = setYear(date, props.year);
        }

        let month = getMonth(date);
        let year = getYear(date);

        if (defaultedFilters.value.months.includes(month)) {
            date = recursiveMonthAdjust(date, isNext);
            month = getMonth(date);
            year = getYear(date);
        }

        if (defaultedFilters.value.years.includes(year)) {
            date = recursiveYearAdjust(date, isNext);
            year = getYear(date);
        }
        if (validateMonthYearInRange(month, year, isNext, props.preventMinMaxNavigation)) {
            updateMonthYear(month, year, fromNav);
        }
    };

    const updateMonthYear = (month: number, year: number, fromNav: boolean): void => {
        emit('update-month-year', { month, year, fromNav });
    };

    const isDisabled = computed(() => (next: boolean) => {
        return validateMonthYear(
            set(new Date(), { month: props.month, year: props.year }),
            props.maxDate,
            props.minDate,
            props.preventMinMaxNavigation,
            next,
        );
    });

    return { handleMonthYearChange, isDisabled, updateMonthYear };
};
