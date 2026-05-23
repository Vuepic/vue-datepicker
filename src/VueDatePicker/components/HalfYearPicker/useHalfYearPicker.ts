import { computed, type EmitFn, onMounted, ref } from 'vue';
import { getMonth, getYear, set } from 'date-fns';

import { useContext, useDateUtils, useFormatter, useRemapper, useValidation } from '@/composables';
import { useMonthOrQuarterPicker } from '@/components/shared/useMonthQuarterPicker.ts';
import { useComponentShared } from '@/components/shared/useComponentShared.ts';
import type { BaseProps } from '@/types';

export interface HalfYearPickerEmits {
    'reset-flow': [];
    'auto-apply': [ignoreClose?: boolean];
}

const getHalfYear = (date: Date): 1 | 2 => {
    return getMonth(date) < 6 ? 1 : 2;
};

const isSameHalfYear = (a: Date, b: Date): boolean => {
    return getHalfYear(a) === getHalfYear(b) && getYear(a) === getYear(b);
};

const getEndMonthOfHalf = (date: Date): number => {
    return getHalfYear(date) === 1 ? 5 : 11;
};

export const useHalfYearPicker = (props: BaseProps, emit: EmitFn<HalfYearPickerEmits>) => {
    const {
        getDate,
        modelValue,
        year,
        calendars,
        defaults: { highlight, range, multiDates },
    } = useContext();

    const { isDateBetween, isDateEqual } = useDateUtils();
    const { checkRangeAutoApply, handleMultiDatesSelect, setMonthOrYearRange } = useComponentShared();
    useRemapper();
    const { isDisabled: isDateDisabled } = useValidation();
    const { formatHalfYearText } = useFormatter();

    const {
        selectYear,
        groupedYears,
        showYearPicker,
        isDisabled,
        toggleYearPicker,
        handleYearSelect,
        handleYear,
        setStartDate,
    } = useMonthOrQuarterPicker(emit);

    const hoverDate = ref();

    onMounted(() => {
        setStartDate();
    });

    const isHalfYearActive = computed(() => (date: Date) => {
        if (modelValue.value) {
            if (Array.isArray(modelValue.value)) {
                return modelValue.value.some((val) => isSameHalfYear(date, val));
            }
            return isSameHalfYear(modelValue.value, date);
        }
        return false;
    });

    const isHalfYearBetween = (date: Date) => {
        if (range.value.enabled) {
            if (Array.isArray(modelValue.value)) {
                const isModel = isDateEqual(date, modelValue.value[0]) || isDateEqual(date, modelValue.value[1]);
                return isDateBetween(modelValue.value, hoverDate.value, date) && !isModel;
            }
            return false;
        }
        return false;
    };

    const matchHalfYear = (value: { halfYear: number; year: number }, date: Date) => {
        return value.halfYear === getHalfYear(date) && value.year === getYear(date);
    };

    const isHighlighted = (start: Date) => {
        return typeof highlight.value === 'function'
            ? highlight.value({ halfYear: getHalfYear(start), year: getYear(start) })
            : highlight.value.halfYears.some((value) => matchHalfYear(value, start));
    };

    const halfYears = computed(() => (instance: number) => {
        const activeYear = year.value(instance);
        const h1Start = set(getDate(), { year: activeYear, month: 0, date: 1 });
        const h1End = set(getDate(), { year: activeYear, month: 5, date: 30 });
        const h2Start = set(getDate(), { year: activeYear, month: 6, date: 1 });
        const h2End = set(getDate(), { year: activeYear, month: 11, date: 31 });

        return [
            { start: h1Start, end: h1End },
            { start: h2Start, end: h2End },
        ].map(({ start, end }) => {
            const disabled = isDateDisabled(start);
            const isBetween = isHalfYearBetween(start);
            const highlighted = isHighlighted(start);
            return {
                text: formatHalfYearText(start, end),
                value: start,
                active: isHalfYearActive.value(start),
                highlighted,
                disabled,
                isBetween,
            };
        });
    });

    const selectMultiHalfYears = (date: Date) => {
        handleMultiDatesSelect(date, multiDates.value.limit);
        emit('auto-apply', true);
    };

    const selectRangedHalfYear = (date: Date) => {
        modelValue.value = setMonthOrYearRange(date);
        checkRangeAutoApply(modelValue.value, emit, modelValue.value.length < 2);
    };

    const selectSingleHalfYear = (date: Date) => {
        modelValue.value = date;
        emit('auto-apply');
    };

    const selectHalfYear = (date: Date, instance: number, disabled: boolean) => {
        if (disabled) return;
        calendars.value[instance]!.month = getEndMonthOfHalf(date);

        if (multiDates.value.enabled) return selectMultiHalfYears(date);
        if (range.value.enabled) return selectRangedHalfYear(date);
        return selectSingleHalfYear(date);
    };

    const setHoverDate = (date: Date) => {
        hoverDate.value = date;
    };

    return {
        groupedYears,
        year,
        isDisabled,
        halfYears,
        showYearPicker,
        modelValue,
        selectYear,
        toggleYearPicker,
        handleYearSelect,
        handleYear,
        setHoverDate,
        selectHalfYear,
    };
};
