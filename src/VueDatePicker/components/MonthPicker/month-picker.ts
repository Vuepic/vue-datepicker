import { computed, onMounted, ref } from 'vue';
import { getMonth, getYear } from 'date-fns';

import { checkMinMaxValue, getMonths, groupListAndMap } from '@/utils/util';
import {
    checkHighlightMonth,
    getDate,
    getDisabledMonths,
    getMaxMonth,
    getMinMonth,
    isDateBetween,
    resetDate,
    setDateMonthOrYear,
} from '@/utils/date-utils';
import { useDefaults, useModel } from '@/composables';
import { checkRangeAutoApply, handleMultiDatesSelect, setMonthOrYearRange, setPresetDate } from '@/composables/shared';

import type { IDefaultSelect, OverlayGridItem, VueEmit } from '@/interfaces';
import type { PickerBasePropsType } from '@/props';
import { useMonthOrQuarterPicker } from '@/components/shared/month-quarter-picker';

export const useMonthPicker = (props: PickerBasePropsType, emit: VueEmit) => {
    const { defaultedMultiCalendars, defaultedAriaLabels, defaultedTransitions, defaultedConfig, defaultedHighlight } =
        useDefaults(props);

    const { modelValue, year, month: instanceMonth, calendars } = useModel(props, emit);
    const months = computed(() => getMonths(props.formatLocale, props.locale, props.monthNameFormat));
    const hoverDate = ref<Date | null>(null);

    const {
        selectYear: onYearSelect,
        groupedYears,
        showYearPicker,
        toggleYearPicker,
        handleYearSelect,
        handleYear,
        isDisabled,
    } = useMonthOrQuarterPicker({
        modelValue,
        multiCalendars: defaultedMultiCalendars,
        highlight: defaultedHighlight,
        calendars,
        year,
        month: instanceMonth,
        props,
        emit,
    });

    onMounted(() => {
        if (props.startDate) {
            if ((modelValue.value && props.focusStartDate) || !modelValue.value) {
                onYearSelect(getYear(getDate(props.startDate)), 0);
            }
        }
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
            return activeMonthYear.some((value) => value.year === calendar?.year && value.month === month);
        }
        return calendar?.year === activeMonthYear.year && month === activeMonthYear.month;
    };

    const isSameMonthYear = (month: number, instance: number, i: number) => {
        const currentModel = getModelMonthYear();

        if (Array.isArray(currentModel)) {
            const currentYear = year.value(instance);

            return currentYear === currentModel[i]?.year && month === currentModel[i]?.month;
        }
        return false;
    };

    const isMonthBetween = (month: number, instance: number) => {
        if (props.range) {
            const currentModel = getModelMonthYear();
            if (Array.isArray(modelValue.value) && Array.isArray(currentModel)) {
                const isModel = isSameMonthYear(month, instance, 0) || isSameMonthYear(month, instance, 1);
                const current = setDateMonthOrYear(resetDate(getDate()), month, year.value(instance));
                return isDateBetween(modelValue.value, hoverDate.value, current) && !isModel;
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
            const highlighted = checkHighlightMonth(defaultedHighlight.value, month.value, year.value(instance));
            return { active, disabled, isBetween, highlighted };
        });
    });

    const monthToDate = (month: number, instance: number) => {
        return setDateMonthOrYear(resetDate(getDate()), month, year.value(instance));
    };

    const selectSingleMonth = (month: number, instance: number) => {
        const date = modelValue.value ? (modelValue.value as Date) : resetDate(new Date());
        modelValue.value = setDateMonthOrYear(date, month, year.value(instance));
        emit('auto-apply');
    };

    const selectRangedMonth = (month: number, instance: number) => {
        const range = setMonthOrYearRange(modelValue, monthToDate(month, instance), emit);
        checkRangeAutoApply(range, emit, props.autoApply, props.modelAuto);
    };

    const selectMultiMonths = (month: number, instance: number) => {
        handleMultiDatesSelect(monthToDate(month, instance), modelValue, props.multiDatesLimit);
        emit('auto-apply', true);
    };

    const selectMonth = (month: number, instance: number) => {
        calendars.value[instance].month = month;
        emitMonthYearUpdate(instance, calendars.value[instance].year, month);
        if (props.multiDates) return selectMultiMonths(month, instance);
        if (props.range) return selectRangedMonth(month, instance);
        return selectSingleMonth(month, instance);
    };

    const selectYear = (year: number, instance: number) => {
        onYearSelect(year, instance);
        emitMonthYearUpdate(instance, year, null);
    };

    const emitMonthYearUpdate = (instance: number, year: number, monthVal: number | null) => {
        let month = monthVal;
        if (!month) {
            const value = getModelMonthYear();
            month = Array.isArray(value) ? value[instance].month : value.month;
        }
        emit('update-month-year', { instance, year, month });
    };

    const setHoverDate = (month: number, instance: number) => {
        hoverDate.value = monthToDate(month, instance);
    };

    const presetDate = (value: Date[] | string[] | Date | string, noTz?: boolean) => {
        setPresetDate({ value, modelValue, range: props.range, timezone: noTz ? undefined : props.timezone });
        emit('auto-apply');
    };

    return {
        groupedMonths,
        groupedYears,
        year,
        isDisabled,
        defaultedMultiCalendars,
        defaultedAriaLabels,
        defaultedTransitions,
        defaultedConfig,
        showYearPicker,
        modelValue,
        presetDate,
        setHoverDate,
        selectMonth,
        selectYear,
        toggleYearPicker,
        handleYearSelect,
        handleYear,
        getModelMonthYear,
    };
};
