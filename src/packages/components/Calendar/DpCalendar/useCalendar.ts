import { computed, type ComputedRef, type InjectionKey, provide, type Ref, toRef } from 'vue';
import { useContext } from '@packages/composables/useContext.ts';
import { DpInstanceKey } from '@packages/components/DpInstance';
import { resetDateTime } from '@packages/utils/date.ts';
import { addMonths, addYears, getMonth, getYear, set, setMonth, setYear, subMonths, subYears } from 'date-fns';
import { getDate } from '@/utils/date-utils.ts';
import { useDefaults } from '@packages/composables/useDefaults.ts';
import { DpRootKey } from '@packages/components/DpRoot';
import type { DpCalendarProps } from '@packages/components/Calendar/DpCalendar';

export interface CalendarState {
    month: ComputedRef<number>;
    year: ComputedRef<number>;
    weekStart: Ref<number | string>;
}

export const DpCalendarKey = Symbol('DpCalendar') as InjectionKey<CalendarState>;

export const useCalendar = (props: DpCalendarProps) => {
    const { month, year, updateCalendar } = useContext(DpInstanceKey, 'DpInstance');
    const { props: injectedProps } = useContext(DpRootKey);
    const { getDefaultFilters } = useDefaults();

    const weekStart = toRef(injectedProps, 'weekStart');

    provide(DpCalendarKey, {
        month: computed(() => month.value(+props.instance)),
        year: computed(() => year.value(+props.instance)),
        weekStart,
    });

    const filters = computed(() => getDefaultFilters(injectedProps.filters));

    const nextMonth = () => {
        handleMonthYearChange(true, true);
    };
    const prevMonth = () => {
        handleMonthYearChange(false, true);
    };

    const monthDates = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((month) => {
        return resetDateTime(setMonth(new Date(), month), true);
    });

    const formatter = new Intl.DateTimeFormat(injectedProps.locale, { month: props.monthFormat });

    const months = computed(() =>
        monthDates.map((date) => {
            const month = formatter.format(date);
            return {
                label: month.charAt(0).toUpperCase() + month.substring(1),
                value: getMonth(date),
            };
        }),
    );

    const activeMonth = computed(() => months.value.find((m) => m.value === month.value(+props.instance)));
    const activeYear = computed(() => year.value(+props.instance));

    const updateMonthYear = (month: number, year: number, fromNav: boolean): void => {
        updateCalendar({ month, year, instance: +props.instance });
        // emit('update-month-year', { month, year, fromNav });
    };

    const validateMonthYearInRange = (month: number, year: number, isNext: boolean, preventNav: boolean): boolean => {
        return true;
        // let valid = false;
        // if (preventNav && (propDates.value.minDate || propDates.value.maxDate)) {
        //     if (propDates.value.minDate && propDates.value.maxDate) {
        //         valid = validateBothMinAndMax(month, year, isNext);
        //     } else if (propDates.value.minDate && validateMinDate(month, year)) {
        //         valid = true;
        //     } else if (propDates.value.maxDate && validateMaxDate(month, year)) {
        //         valid = true;
        //     }
        // } else {
        //     valid = true;
        // }
        // return valid;
    };

    const recursiveYearAdjust = (date: Date, increment: boolean): Date => {
        let yearDate = date;
        if (filters.value.years.includes(getYear(yearDate))) {
            yearDate = increment ? addYears(date, 1) : subYears(date, 1);
            return recursiveYearAdjust(yearDate, increment);
        }
        return yearDate;
    };

    const recursiveMonthAdjust = (date: Date, increment: boolean): Date => {
        let monthDate = date;
        if (filters.value.months.includes(getMonth(monthDate))) {
            monthDate = increment ? addMonths(date, 1) : subMonths(date, 1);
            return recursiveMonthAdjust(monthDate, increment);
        }
        return monthDate;
    };

    const handleMonthYearChange = (isNext: boolean, fromNav = false): void => {
        const initialDate = set(getDate(), { month: month.value(+props.instance), year: year.value(+props.instance) });

        let date = isNext ? addMonths(initialDate, 1) : subMonths(initialDate, 1);

        if (props.disableYearSelect) {
            date = setYear(date, year.value(+props.instance));
        }

        let newMonth = getMonth(date);
        let newYear = getYear(date);

        if (filters.value.months.includes(newMonth)) {
            date = recursiveMonthAdjust(date, isNext);
            newMonth = getMonth(date);
            newYear = getYear(date);
        }

        if (filters.value.years.includes(newYear)) {
            date = recursiveYearAdjust(date, isNext);
            newYear = getYear(date);
        }
        if (validateMonthYearInRange(newMonth, newYear, isNext, props.preventMinMaxNavigation)) {
            updateMonthYear(newMonth, newYear, fromNav);
        }
    };

    return {
        nextMonth,
        prevMonth,
        activeYear,
        activeMonth,
    };
};
