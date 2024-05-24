import { computed, ref } from 'vue';
import {
    eachQuarterOfInterval,
    endOfQuarter,
    endOfYear,
    format,
    getMonth,
    getQuarter,
    getYear,
    isSameQuarter,
    set,
    startOfQuarter,
    startOfYear,
} from 'date-fns';

import { useDefaults, useModel, useValidation } from '@/composables';
import { useMonthOrQuarterPicker } from '@/components/shared/month-quarter-picker';
import { checkRangeAutoApply, handleMultiDatesSelect, setMonthOrYearRange } from '@/composables/shared';

import type { PickerBasePropsType } from '@/props';
import type { VueEmit } from '@/interfaces';
import { isDateBetween, isDateEqual } from '@/utils/date-utils';

export const useQuarterPicker = (props: PickerBasePropsType, emit: VueEmit) => {
    const hoverDate = ref();
    const {
        defaultedMultiCalendars,
        defaultedConfig,
        defaultedHighlight,
        defaultedRange,
        propDates,
        defaultedFilters,
        defaultedMultiDates,
    } = useDefaults(props);
    const { modelValue, year, month, calendars } = useModel(props, emit);
    const { isDisabled: isDateDisabled } = useValidation(props);
    const { selectYear, groupedYears, showYearPicker, isDisabled, toggleYearPicker, handleYearSelect, handleYear } =
        useMonthOrQuarterPicker({
            modelValue,
            multiCalendars: defaultedMultiCalendars,
            range: defaultedRange,
            highlight: defaultedHighlight,
            calendars,
            propDates,
            month,
            year,
            filters: defaultedFilters,
            props,
            emit,
        });

    const formatQuarterText = (start: Date, end: Date) => {
        return [start, end].map((date) => format(date, 'MMMM', { locale: props.formatLocale })).join('-');
    };

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
        if (defaultedRange.value.enabled) {
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
        return typeof defaultedHighlight.value === 'function'
            ? defaultedHighlight.value({ quarter: getQuarter(start), year: getYear(start) })
            : !!defaultedHighlight.value.quarters.find((value) => matchQuarter(value, start));
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
                disabled: disabled,
                isBetween,
            };
        });
    });

    const selectMultiQuarters = (date: Date) => {
        handleMultiDatesSelect(date, modelValue, defaultedMultiDates.value.limit);
        emit('auto-apply', true);
    };

    const selectRangedQuarter = (date: Date) => {
        modelValue.value = setMonthOrYearRange(modelValue, date, emit);
        checkRangeAutoApply(modelValue.value, emit, props.autoApply, props.modelAuto);
    };

    const selectSingleQuarter = (date: Date) => {
        modelValue.value = date;
        emit('auto-apply');
    };

    const selectQuarter = (date: Date, instance: number, disabled: boolean) => {
        if (disabled) return;
        calendars.value[instance].month = getMonth(endOfQuarter(date));

        if (defaultedMultiDates.value.enabled) return selectMultiQuarters(date);
        if (defaultedRange.value.enabled) return selectRangedQuarter(date);
        return selectSingleQuarter(date);
    };

    const setHoverDate = (date: Date) => {
        hoverDate.value = date;
    };

    return {
        defaultedConfig,
        defaultedMultiCalendars,
        groupedYears,
        year,
        isDisabled,
        quarters,
        showYearPicker,
        modelValue,
        setHoverDate,
        selectYear,
        selectQuarter,
        toggleYearPicker,
        handleYearSelect,
        handleYear,
    };
};
