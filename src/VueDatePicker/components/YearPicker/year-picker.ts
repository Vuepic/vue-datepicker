import { computed, onMounted, ref } from 'vue';
import { getYear, setYear } from 'date-fns';

import { useDefaults, useModel } from '@/composables';
import { checkMinMaxValue, getYears, groupListAndMap } from '@/utils/util';
import {
    checkHighlightYear,
    getDate,
    getMinMaxYear,
    isDateBetween,
    resetDate,
    resetDateTime,
} from '@/utils/date-utils';
import { checkRangeAutoApply, setMonthOrYearRange } from '@/composables/shared';

import type { PickerBasePropsType } from '@/props';
import type { VueEmit, IDefaultSelect } from '@/interfaces';

export const useYearPicker = (props: PickerBasePropsType, emit: VueEmit) => {
    const { modelValue } = useModel(props, emit);
    const hoverDate = ref<Date | null>(null);
    const { defaultedHighlight } = useDefaults(props);
    const focusYear = ref();

    onMounted(() => {
        if (props.startDate) {
            if ((modelValue.value && props.focusStartDate) || !modelValue.value) {
                focusYear.value = getYear(getDate(props.startDate));
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
        if (props.range) {
            if (Array.isArray(modelValue.value)) {
                return isDateBetween(modelValue.value, hoverDate.value, yearToDate(year));
            }
            return false;
        }
        return false;
    };

    const groupedYears = computed(() => {
        return groupListAndMap(getYears(props.yearRange, props.reverseYears), (year: IDefaultSelect) => {
            const active = isYearActive(year.value);
            const disabled = checkMinMaxValue(year.value, getMinMaxYear(props.minDate), getMinMaxYear(props.maxDate));
            const isBetween = isYearBetween(year.value);
            const highlighted = checkHighlightYear(defaultedHighlight.value, year.value);
            return { active, disabled, isBetween, highlighted };
        });
    });

    const yearToDate = (year: number): Date => {
        return setYear(resetDate(new Date()), year);
    };

    const selectYear = (year: number) => {
        if (props.multiDates) {
            if (!modelValue.value) {
                modelValue.value = [setYear(resetDateTime(getDate()), year)];
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
        if (props.range) {
            const range = setMonthOrYearRange(modelValue, yearToDate(year), emit);
            return checkRangeAutoApply(range, emit, props.autoApply, props.modelAuto);
        }
        modelValue.value = yearToDate(year);
        emit('auto-apply');
    };

    const setHoverValue = (value: number) => {
        hoverDate.value = setYear(resetDate(new Date()), value);
    };

    return {
        groupedYears,
        modelValue,
        focusYear,
        setHoverValue,
        selectYear,
    };
};
