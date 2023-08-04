import { computed, ref } from 'vue';
import { getYear, setYear } from 'date-fns';

import { useModel } from '@/composables';
import { checkMinMaxValue, getYears, groupListAndMap } from '@/utils/util';
import { getMinMaxYear, isDateBetween, resetDate } from '@/utils/date-utils';
import { handleMultiDatesSelect, setMonthOrYearRange } from '@/composables/shared';

import type { PickerBasePropsType } from '@/props';
import type { VueEmit, IDefaultSelect } from '@/interfaces';

export const useYearPicker = (props: PickerBasePropsType, emit: VueEmit) => {
    const { modelValue } = useModel(props, emit);
    const hoverDate = ref<Date | null>(null);

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
            return { active, disabled, isBetween };
        });
    });

    const yearToDate = (year: number): Date => {
        return setYear(resetDate(new Date()), year);
    };

    const selectYear = (year: number) => {
        if (props.multiDates) return handleMultiDatesSelect(yearToDate(year), modelValue, props.multiDatesLimit);
        if (props.range) return setMonthOrYearRange(modelValue, yearToDate(year), emit);
        modelValue.value = yearToDate(year);
    };

    const setHoverValue = (value: number) => {
        hoverDate.value = setYear(resetDate(new Date()), value);
    };

    return {
        groupedYears,
        setHoverValue,
        selectYear,
    };
};
