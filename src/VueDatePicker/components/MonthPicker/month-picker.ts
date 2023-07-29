import { computed, ref } from 'vue';
import { getMonth, getYear, set } from 'date-fns';

import { checkMinMaxValue, getMonths, getYears, groupListAndMap } from '@/utils/util';
import {
    getDisabledMonths,
    getMaxMonth,
    getMinMaxYear,
    getMinMonth,
    isDateBetween,
    resetDate,
    setDateMonthOrYear,
    validateMonthYear,
} from '@/utils/date-utils';
import { useModel } from '@/composables';
import { handleMultiDatesSelect, setMonthOrYearRange } from '@/composables/shared';

import type { IDefaultSelect, OverlayGridItem, VueEmit } from '@/interfaces';
import type { PickerBasePropsType } from '@/props';

export const useMonthPicker = (props: PickerBasePropsType, emit: VueEmit) => {
    const { modelValue, year, month: instanceMonth, calendars } = useModel(props, emit);
    const months = computed(() => getMonths(props.formatLocale, props.locale, props.monthNameFormat));
    const years = computed(() => getYears(props.yearRange, props.reverseYears));
    const hoverDate = ref<Date | null>(null);

    const isDisabled = computed(() => (instance: number, next: boolean) => {
        const currentDate = set(resetDate(new Date()), {
            month: instanceMonth.value(instance),
            year: year.value(instance),
        });
        return validateMonthYear(currentDate, props.maxDate, props.minDate, props.preventMinMaxNavigation, next);
    });

    const getMonthYear = (date?: Date) => {
        if (date) {
            return { month: getMonth(date), year: getYear(date) };
        }
        return { month: null, year: null };
    };

    const getModelMonthYear = () => {
        if (modelValue.value) {
            if (Array.isArray(modelValue.value)) {
                return modelValue.value.map((val) => getMonthYear(val));
            }
            return getMonthYear(modelValue.value);
        }
        return getMonthYear();
    };

    const checkActiveMonth = (instance: number, month: number) => {
        const calendar = calendars.value[instance];
        const activeMonthYear = getModelMonthYear();
        if (Array.isArray(activeMonthYear)) {
            return activeMonthYear.some((value) => value.year === calendar.year && value.month === month);
        }
        return calendar.year === activeMonthYear.year && month === activeMonthYear.month;
    };

    const isMonthBetween = (month: number, instance: number) => {
        if (props.range) {
            if (Array.isArray(modelValue.value)) {
                const current = setDateMonthOrYear(resetDate(new Date()), month, year.value(instance));
                return isDateBetween(modelValue.value, hoverDate.value, current);
            }
            return false;
        }
        return false;
    };

    const groupedMonths = computed(() => (instance: number): OverlayGridItem[][] => {
        return groupListAndMap(months.value, (month: IDefaultSelect) => {
            const active = checkActiveMonth(instance, month.value);
            const disabled =
                checkMinMaxValue(
                    month.value,
                    getMinMonth(year.value(instance), props.minDate),
                    getMaxMonth(year.value(instance), props.maxDate),
                ) || getDisabledMonths(props.disabledDates, year.value(instance)).includes(month.value);
            const isBetween = isMonthBetween(month.value, instance);
            return { active, disabled, isBetween };
        });
    });

    const groupedYears = computed(() => (instance: number): OverlayGridItem[][] => {
        return groupListAndMap(years.value, (y: IDefaultSelect) => {
            const active = year.value(instance) === y.value;
            const disabled = checkMinMaxValue(y.value, getMinMaxYear(props.minDate), getMinMaxYear(props.maxDate));
            return { active, disabled };
        });
    });

    const monthToDate = (month: number, instance: number) => {
        return setDateMonthOrYear(resetDate(new Date()), month, year.value(instance));
    };

    const selectSingleMonth = (month: number, instance: number) => {
        const date = modelValue.value ? (modelValue.value as Date) : resetDate(new Date());
        modelValue.value = setDateMonthOrYear(date, month, year.value(instance));
    };

    const selectMonth = (month: number, instance: number) => {
        calendars.value[instance].month = month;
        if (props.multiDates)
            return handleMultiDatesSelect(monthToDate(month, instance), modelValue, props.multiDatesLimit);
        if (props.range) return setMonthOrYearRange(modelValue, monthToDate(month, instance), emit);
        return selectSingleMonth(month, instance);
    };

    const selectYear = (year: number, instance: number) => {
        calendars.value[instance].year = year;
    };

    const setHoverDate = (month: number, instance: number) => {
        hoverDate.value = monthToDate(month, instance);
    };

    /**
     * // todo needs to be in header too
     *    disabledValues: defaults.value.filters[isMonth ? 'months' : 'years'].concat(getDisabledMonths.value),
     *    const minYear = computed(() => (props.minDate ? getYear(getDate(props.minDate)) : null));
     *     const maxYear = computed(() => (props.maxDate ? getYear(getDate(props.maxDate)) : null));
     *
     *     const minMonth = computed(() => {
     *         if (props.minDate && minYear.value) {
     *             if (minYear.value > props.year) return 12;
     *             if (minYear.value === props.year) return getMonth(getDate(props.minDate));
     *         }
     *         return null;
     *     });
     *
     *     const maxMonth = computed(() => {
     *         if (props.maxDate && maxYear.value) {
     *             if (maxYear.value < props.year) return -1;
     *             if (maxYear.value === props.year) return getMonth(getDate(props.maxDate));
     *             return null;
     *         }
     *         return null;
     *     });
     */

    return {
        groupedMonths,
        groupedYears,
        year,
        isDisabled,
        setHoverDate,
        selectMonth,
        selectYear,
    };
};
