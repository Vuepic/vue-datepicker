import { computed, type EmitFn, ref } from 'vue';
import {
    eachQuarterOfInterval,
    endOfQuarter,
    endOfYear,
    getMonth,
    getQuarter,
    getYear,
    isSameQuarter,
    set,
    startOfQuarter,
    startOfYear,
} from 'date-fns';

import { useContext, useDateUtils, useFormatter, useRemapper, useValidation } from '@/composables';
import { useMonthOrQuarterPicker } from '@/components/shared/useMonthQuarterPicker.ts';
import { useComponentShared } from '@/components/shared/useComponentShared.ts';
import type { BaseProps } from '@/types';

export interface QuarterPickerEmits {
    'reset-flow': [];
    'auto-apply': [ignoreClose?: boolean];
}

export const useQuarterPicker = (props: BaseProps, emit: EmitFn<QuarterPickerEmits>) => {
    const {
        rootProps,
        modelValue,
        year,
        calendars,
        defaults: { highlight, range, multiDates },
    } = useContext();

    const { isDateBetween, isDateEqual } = useDateUtils();
    const { checkRangeAutoApply, handleMultiDatesSelect, setMonthOrYearRange } = useComponentShared();
    useRemapper();
    const { isDisabled: isDateDisabled } = useValidation();
    const { formatQuarterText } = useFormatter();

    const { selectYear, groupedYears, showYearPicker, isDisabled, toggleYearPicker, handleYearSelect, handleYear } =
        useMonthOrQuarterPicker(emit);

    const hoverDate = ref();

    const isQuarterActive = computed(() => (date: Date) => {
        if (modelValue.value) {
            if (Array.isArray(modelValue.value)) {
                return modelValue.value.some((val) => isSameQuarter(date, val));
            }
            return isSameQuarter(modelValue.value, date);
        }
        return false;
    });

    const isQuarterBetween = (date: Date) => {
        if (range.value.enabled) {
            if (Array.isArray(modelValue.value)) {
                const isModel = isDateEqual(date, modelValue.value[0]) || isDateEqual(date, modelValue.value[1]);
                return isDateBetween(modelValue.value, hoverDate.value, date) && !isModel;
            }
            return false;
        }
        return false;
    };

    const matchQuarter = (value: { quarter: number; year: number }, date: Date) => {
        return value.quarter === getQuarter(date) && value.year === getYear(date);
    };

    const isHighlighted = (start: Date) => {
        return typeof highlight.value === 'function'
            ? highlight.value({ quarter: getQuarter(start), year: getYear(start) })
            : !!highlight.value.quarters.find((value) => matchQuarter(value, start));
    };

    const quarters = computed(() => (instance: number) => {
        const activeYear = set(new Date(), { year: year.value(instance) });
        return eachQuarterOfInterval({
            start: startOfYear(activeYear),
            end: endOfYear(activeYear),
        }).map((quarter) => {
            const start = startOfQuarter(quarter);
            const end = endOfQuarter(quarter);
            const disabled = isDateDisabled(quarter);
            const isBetween = isQuarterBetween(start);
            const highlighted = isHighlighted(start);
            return {
                text: formatQuarterText(start, end),
                value: start,
                active: isQuarterActive.value(start),
                highlighted,
                disabled,
                isBetween,
            };
        });
    });

    const selectMultiQuarters = (date: Date) => {
        handleMultiDatesSelect(date, multiDates.value.limit);
        emit('auto-apply', true);
    };

    const selectRangedQuarter = (date: Date) => {
        modelValue.value = setMonthOrYearRange(date);
        checkRangeAutoApply(modelValue.value, emit, rootProps.autoApply, rootProps.modelAuto);
    };

    const selectSingleQuarter = (date: Date) => {
        modelValue.value = date;
        emit('auto-apply');
    };

    const selectQuarter = (date: Date, instance: number, disabled: boolean) => {
        if (disabled) return;
        calendars.value[instance]!.month = getMonth(endOfQuarter(date));

        if (multiDates.value.enabled) return selectMultiQuarters(date);
        if (range.value.enabled) return selectRangedQuarter(date);
        return selectSingleQuarter(date);
    };

    const setHoverDate = (date: Date) => {
        hoverDate.value = date;
    };

    return {
        groupedYears,
        year,
        isDisabled,
        quarters,
        showYearPicker,
        modelValue,
        selectYear,
        toggleYearPicker,
        handleYearSelect,
        handleYear,
        setHoverDate,
        selectQuarter,
    };
};
