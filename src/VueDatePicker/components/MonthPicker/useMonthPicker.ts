import { computed, type EmitFn, nextTick, onMounted, ref } from 'vue';
import { getMonth, getYear, set } from 'date-fns';

import { useContext, useDateUtils, useRemapper, useHelperFns, useUtilsWithContext, useValidation } from '@/composables';
import { useMonthOrQuarterPicker } from '@/components/shared/useMonthQuarterPicker.ts';
import { useComponentShared } from '@/components/shared/useComponentShared.ts';
import type { BaseProps, OverlayGridItem } from '@/types';

export interface MonthPickerEmits {
    'reset-flow': [];
    'auto-apply': [ignoreClose?: boolean];
    'update-flow-step': [];
    mount: [];
}

export const useMonthPicker = (props: BaseProps, emit: EmitFn<MonthPickerEmits>) => {
    const {
        getDate,
        rootEmit,
        state,
        calendars,
        year,
        modelValue,
        rootProps,
        defaults: { range, highlight, safeDates, filters, multiDates },
    } = useContext();

    useRemapper(() => {
        if (state.isTextInputDate) onYearSelect(getYear(getDate(rootProps.startDate)), 0);
    });
    const { checkMinMaxRange, checkMinMaxValue } = useValidation();
    const { isDateBetween, resetDateTime, resetDate, getMinMonth, getMaxMonth, checkHighlightMonth, groupListAndMap } =
        useDateUtils();
    const { checkRangeAutoApply, getRangeWithFixedDate, handleMultiDatesSelect, setMonthOrYearRange, setPresetDate } =
        useComponentShared();
    const { padZero } = useHelperFns();
    const { getMonths, isOutOfYearRange } = useUtilsWithContext();

    const months = computed(() => getMonths());
    const hoverDate = ref<Date | null>(null);

    const {
        selectYear: onYearSelect,
        groupedYears,
        showYearPicker,
        toggleYearPicker,
        handleYearSelect,
        handleYear,
        isDisabled,
        setStartDate,
    } = useMonthOrQuarterPicker(emit);

    onMounted(() => {
        setStartDate();
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
        if (range.value.enabled) {
            const currentModel = getModelMonthYear();
            if (Array.isArray(modelValue.value) && Array.isArray(currentModel)) {
                const isModel = isSameMonthYear(month, instance, 0) || isSameMonthYear(month, instance, 1);
                const current = set(resetDate(getDate()), { month, year: year.value(instance) });
                return isDateBetween(modelValue.value, hoverDate.value, current) && !isModel;
            }
            return false;
        }
        return false;
    };

    const groupedMonths = computed(() => (instance: number): OverlayGridItem[][] => {
        return groupListAndMap(months.value, (month) => {
            const active = checkActiveMonth(instance, month.value);
            const disabled =
                checkMinMaxValue(
                    month.value,
                    getMinMonth(year.value(instance), safeDates.value.minDate),
                    getMaxMonth(year.value(instance), safeDates.value.maxDate),
                ) ||
                isMonthDisabled(safeDates.value.disabledDates, year.value(instance), month.value) ||
                filters.value.months?.includes(month.value) ||
                !isMonthAllowed(safeDates.value.allowedDates, year.value(instance), month.value) ||
                isOutOfYearRange(year.value(instance));
            const isBetween = isMonthBetween(month.value, instance);
            const highlighted = checkHighlightMonth(highlight.value, month.value, year.value(instance));
            return { active, disabled, isBetween, highlighted };
        });
    });

    const monthToDate = (month: number, instance: number) => {
        return set(resetDate(getDate()), { month, year: year.value(instance) });
    };

    const selectSingleMonth = (month: number, instance: number) => {
        const date = modelValue.value ? (modelValue.value as Date) : resetDate(getDate());
        modelValue.value = set(date, { month, year: year.value(instance) });
        emit('auto-apply');
        emit('update-flow-step');
    };

    const selectRangedMonth = (month: number, instance: number) => {
        const date = monthToDate(month, instance);
        if (range.value.fixedEnd || range.value.fixedStart) {
            modelValue.value = getRangeWithFixedDate(date);
        } else if (!modelValue.value) {
            modelValue.value = [monthToDate(month, instance)];
        } else if (checkMinMaxRange(date, modelValue.value)) {
            modelValue.value = setMonthOrYearRange(monthToDate(month, instance));
        }
        nextTick().then(() => {
            checkRangeAutoApply(modelValue.value as Date[], emit, (modelValue.value as Date[]).length < 2);
        });
    };

    const selectMultiMonths = (month: number, instance: number) => {
        handleMultiDatesSelect(monthToDate(month, instance), multiDates.value.limit);
        emit('auto-apply', true);
    };

    const selectMonth = (month: number, instance: number) => {
        calendars.value[instance]!.month = month;
        emitMonthYearUpdate(instance, calendars.value[instance]!.year, month);
        if (multiDates.value.enabled) return selectMultiMonths(month, instance);
        if (range.value.enabled) return selectRangedMonth(month, instance);
        return selectSingleMonth(month, instance);
    };

    const selectYear = (year: number, instance: number) => {
        onYearSelect(year, instance);
        emitMonthYearUpdate(instance, year, null);
    };

    const emitMonthYearUpdate = (instance: number, year: number, monthVal: number | null) => {
        let month = monthVal;
        if (!month && month !== 0) {
            const value = getModelMonthYear();
            month = Array.isArray(value) ? value[instance]!.month : value.month;
        }
        rootEmit('update-month-year', { instance, year, month: month! });
    };

    const setHoverDate = (month: number, instance: number) => {
        hoverDate.value = monthToDate(month, instance);
    };

    const presetDate = (value: Date[] | string[] | Date | string) => {
        setPresetDate({
            value,
        });
        emit('auto-apply');
    };

    const isMonthDisabled = (
        disabledDates: Map<string, Date | null> | null | ((date: Date) => boolean),
        year: number,
        month: number,
    ) => {
        if (disabledDates instanceof Map) {
            const key = `${padZero(month + 1)}-${year}`;
            return disabledDates.size ? disabledDates.has(key) : false;
        }
        if (typeof disabledDates === 'function') {
            return disabledDates(resetDateTime(set(getDate(), { month, year }), true));
        }
        return false;
    };

    const isMonthAllowed = (
        allowedDates: Map<string, Date | null> | null | ((date: Date) => boolean),
        year: number,
        month: number,
    ) => {
        if (allowedDates instanceof Map) {
            const key = `${padZero(month + 1)}-${year}`;
            return allowedDates.size ? allowedDates.has(key) : true;
        }
        return true;
    };

    return {
        groupedMonths,
        groupedYears,
        year,
        isDisabled,
        showYearPicker,
        modelValue,
        toggleYearPicker,
        handleYearSelect,
        handleYear,
        presetDate,
        setHoverDate,
        selectMonth,
        selectYear,
        getModelMonthYear,
    };
};
