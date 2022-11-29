import { computed } from 'vue';
import { addMonths, addYears, getMonth, getYear, set, subMonths, subYears } from 'date-fns';

import { useUtils } from '@/components/composables';

import type { ExtendedProps, VueEmit } from '@/interfaces';

export const useMontYearPick = (props: { month: number; year: number } & ExtendedProps, emit: VueEmit) => {
    const { validateMonthYearInRange, validateMaxDate, validateMinDate, defaults } = useUtils(props);

    const recursiveMonthAdjust = (date: Date, increment: boolean): Date => {
        let monthDate = date;
        if (defaults.value.filters.months.includes(getMonth(monthDate))) {
            monthDate = increment ? addMonths(date, 1) : subMonths(date, 1);
            return recursiveMonthAdjust(monthDate, increment);
        }
        return monthDate;
    };

    const recursiveYearAdjust = (date: Date, increment: boolean): Date => {
        let yearDate = date;
        if (defaults.value.filters.years.includes(getYear(yearDate))) {
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

        if (defaults.value.filters.months.includes(month)) {
            date = recursiveMonthAdjust(date, isNext);
            month = getMonth(date);
            year = getYear(date);
        }

        if (defaults.value.filters.years.includes(year)) {
            date = recursiveYearAdjust(date, isNext);
            year = getYear(date);
        }
        if (validateMonthYearInRange(month, year, isNext, props.preventMinMaxNavigation)) {
            updateMonthYear(month, year);
        }
    };

    const updateMonthYear = (month: number, year: number): void => {
        emit('update-month-year', { month, year });
    };

    const isDisabled = computed(() => (next: boolean) => {
        if (!props.preventMinMaxNavigation) return false;
        if (next && !props.maxDate) return false;
        if (!next && !props.minDate) return false;
        const currentDate = set(new Date(), { month: props.month, year: props.year });
        const compareDate = next ? addMonths(currentDate, 1) : subMonths(currentDate, 1);
        const monthYear: [number, number] = [getMonth(compareDate), getYear(compareDate)];
        return next ? !validateMaxDate(...monthYear) : !validateMinDate(...monthYear);
    });

    return { handleMonthYearChange, isDisabled, updateMonthYear };
};
