import { computed, type EmitFn, nextTick, onMounted, ref } from 'vue';
import { getYear, setYear, startOfYear } from 'date-fns';

import { useContext, useDateUtils, useRemapper, useUtils, useUtilsWithContext } from '@/composables';
import { useComponentShared } from '@/components/shared/useComponentShared.ts';
import type { BaseProps } from '@/types';

export interface YearPickerEmits {
    'reset-flow': [];
    'auto-apply': [fromFlow?: boolean];
}

export const useYearPicker = (props: BaseProps, emit: EmitFn<YearPickerEmits>) => {
    const {
        rootEmit,
        isTextInputDate,
        modelValue,
        rootProps,
        defaults: { highlight, multiDates, filters, range, safeDates },
    } = useContext();
    const { getYears } = useUtilsWithContext();
    const { checkHighlightYear, groupListAndMap, checkMinMaxValue } = useUtils();
    const { getDate, isDateBetween, resetDate, resetDateTime, getYearFromDate } = useDateUtils();
    const { checkRangeAutoApply, setMonthOrYearRange } = useComponentShared();

    useRemapper(() => {
        if (isTextInputDate.value) focusYear.value = getYear(getDate(rootProps.startDate));
    });

    const hoverDate = ref<Date | null>(null);
    const focusYear = ref();

    onMounted(() => {
        if (rootProps.startDate) {
            if ((modelValue.value && rootProps.focusStartDate) || !modelValue.value) {
                focusYear.value = getYear(getDate(rootProps.startDate));
            }
        }
    });

    const isYearActive = (year: number) => {
        if (Array.isArray(modelValue.value)) {
            return modelValue.value.some((date) => getYear(date) === year);
        }
        return modelValue.value ? getYear(modelValue.value) === year : false;
    };

    const isYearBetween = (year: number) => {
        if (range.value.enabled) {
            if (Array.isArray(modelValue.value)) {
                return isDateBetween(modelValue.value, hoverDate.value, yearToDate(year));
            }
            return false;
        }
        return false;
    };

    const isYearAllowed = (year: number) => {
        if (safeDates.value.allowedDates instanceof Map) {
            return safeDates.value.allowedDates.size ? safeDates.value.allowedDates.has(`${year}`) : false;
        }
        return true;
    };

    const isYearDisabled = (year: number) => {
        if (safeDates.value.disabledDates instanceof Map) {
            return safeDates.value.disabledDates.size ? safeDates.value.disabledDates.has(`${year}`) : false;
        }
        if (typeof safeDates.value.disabledDates === 'function') {
            return safeDates.value.disabledDates(setYear(resetDateTime(startOfYear(getDate())), year));
        }
        return true;
    };

    const groupedYears = computed(() => {
        return groupListAndMap(getYears(), (year) => {
            const active = isYearActive(year.value);
            const disabled =
                checkMinMaxValue(
                    year.value,
                    getYearFromDate(safeDates.value.minDate),
                    getYearFromDate(safeDates.value.maxDate),
                ) ||
                filters.value.years.includes(year.value) ||
                !isYearAllowed(year.value) ||
                isYearDisabled(year.value);
            const isBetween = isYearBetween(year.value) && !active;
            const highlighted = checkHighlightYear(highlight.value, year.value);
            return { active, disabled, isBetween, highlighted };
        });
    });

    const yearToDate = (year: number): Date => {
        return setYear(resetDate(startOfYear(new Date())), year);
    };

    const selectYear = (year: number) => {
        rootEmit('update-month-year', { instance: 0, year, month: NaN });
        if (multiDates.value.enabled) {
            if (!modelValue.value) {
                modelValue.value = [setYear(resetDateTime(startOfYear(getDate())), year)];
            } else if (Array.isArray(modelValue.value)) {
                const years = modelValue.value?.map((date) => getYear(date));
                if (years.includes(year)) {
                    modelValue.value = modelValue.value.filter((date) => getYear(date) !== year);
                } else {
                    modelValue.value.push(setYear(resetDateTime(getDate()), year));
                }
            }
            return emit('auto-apply', true);
        }
        if (range.value.enabled) {
            modelValue.value = setMonthOrYearRange(yearToDate(year));
            nextTick().then(() => {
                checkRangeAutoApply(modelValue.value as Date[], emit, rootProps.autoApply, rootProps.modelAuto);
            });
        } else {
            modelValue.value = yearToDate(year);
            emit('auto-apply');
        }
    };

    const setHoverValue = (value: number) => {
        hoverDate.value = setYear(resetDate(new Date()), value);
    };

    return {
        groupedYears,
        focusYear,
        setHoverValue,
        selectYear,
    };
};
