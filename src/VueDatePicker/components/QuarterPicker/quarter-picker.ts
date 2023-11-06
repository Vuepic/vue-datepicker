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
    const { defaultedMultiCalendars, defaultedConfig, defaultedHighlight } = useDefaults(props);
    const { modelValue, year, month, calendars } = useModel(props, emit);
    const { isDisabled: isDateDisabled } = useValidation(props);
    const { selectYear, groupedYears, showYearPicker, isDisabled, toggleYearPicker, handleYearSelect, handleYear } =
        useMonthOrQuarterPicker({
            modelValue,
            multiCalendars: defaultedMultiCalendars,
            highlight: defaultedHighlight,
            calendars,
            month,
            year,
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
        if (props.range) {
            if (Array.isArray(modelValue.value)) {
                const isModel = isDateEqual(date, modelValue.value[0]) || isDateEqual(date, modelValue.value[1]);
                return isDateBetween(modelValue.value, hoverDate.value, date) && !isModel;
            }
            return false;
        }
        return false;
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
            const highlighted =
                typeof defaultedHighlight.value === 'function'
                    ? defaultedHighlight.value({ quarter: getQuarter(start), year: getYear(start) })
                    : !!defaultedHighlight.value.quarters.find(
                          (value) => value.quarter === getQuarter(start) && value.year === getYear(start),
                      );
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
        handleMultiDatesSelect(date, modelValue, props.multiDatesLimit);
        emit('auto-apply', true);
    };

    const selectRangedQuarter = (date: Date) => {
        const range = setMonthOrYearRange(modelValue, date, emit);
        checkRangeAutoApply(range, emit, props.autoApply, props.modelAuto);
    };

    const selectSingleQuarter = (date: Date) => {
        modelValue.value = date;
        emit('auto-apply');
    };

    const selectQuarter = (date: Date, instance: number, disabled: boolean) => {
        if (disabled) return;
        calendars.value[instance].month = getMonth(endOfQuarter(date));

        if (props.multiDates) return selectMultiQuarters(date);
        if (props.range) return selectRangedQuarter(date);
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
