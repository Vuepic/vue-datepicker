import { computed, onMounted, ref } from 'vue';
import { addYears, getMonth, getYear, set, subYears } from 'date-fns';

import { checkMinMaxValue, getMonths, getYears, groupListAndMap } from '@/utils/util';
import {
    getDate,
    getDisabledMonths,
    getMaxMonth,
    getMinMaxYear,
    getMinMonth,
    isDateBetween,
    resetDate,
    setDateMonthOrYear,
    validateMonthYear,
} from '@/utils/date-utils';
import { useDefaults, useModel } from '@/composables';
import { checkRangeAutoApply, handleMultiDatesSelect, setMonthOrYearRange } from '@/composables/shared';

import type { IDefaultSelect, OverlayGridItem, VueEmit } from '@/interfaces';
import type { PickerBasePropsType } from '@/props';

export const useMonthPicker = (props: PickerBasePropsType, emit: VueEmit) => {
    const { defaultedMultiCalendars, defaultedAriaLabels, defaultedTransitions, defaultedConfig } = useDefaults(props);

    const { modelValue, year, month: instanceMonth, calendars } = useModel(props, emit);
    const months = computed(() => getMonths(props.formatLocale, props.locale, props.monthNameFormat));
    const years = computed(() => getYears(props.yearRange, props.reverseYears));
    const hoverDate = ref<Date | null>(null);

    const assignMultiCalendars = () => {
        for (let i = 0; i < defaultedMultiCalendars.value.count; i++) {
            if (i === 0) {
                calendars.value[i] = calendars.value[0];
            } else {
                const prevDate = set(getDate(), calendars.value[i - 1]);
                calendars.value[i] = { month: getMonth(prevDate), year: getYear(addYears(prevDate, i)) };
            }
        }
    };

    const updateMultiCalendars = (instance: number) => {
        if (!instance) return assignMultiCalendars();
        const date = set(getDate(), calendars.value[instance]);
        calendars.value[0].year = getYear(subYears(date, defaultedMultiCalendars.value.count - 1));
        return assignMultiCalendars();
    };

    const getRangedValueDate = (dates: Date[]) => {
        if (props.focusStartDate) return dates[0];
        return dates[1] ? dates[1] : dates[0];
    };

    const checkModelValue = () => {
        if (modelValue.value) {
            const firstDate = Array.isArray(modelValue.value) ? getRangedValueDate(modelValue.value) : modelValue.value;
            calendars.value[0] = { month: getMonth(firstDate), year: getYear(firstDate) };
        }
    };

    onMounted(() => {
        checkModelValue();
        if (defaultedMultiCalendars.value.count) {
            assignMultiCalendars();
        }
    });

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
        if (props.multiDates) return selectMultiMonths(month, instance);
        if (props.range) return selectRangedMonth(month, instance);
        return selectSingleMonth(month, instance);
    };

    const selectYear = (year: number, instance: number) => {
        calendars.value[instance].year = year;
        if (defaultedMultiCalendars.value.count && !defaultedMultiCalendars.value.solo) {
            updateMultiCalendars(instance);
        }
    };

    const setHoverDate = (month: number, instance: number) => {
        hoverDate.value = monthToDate(month, instance);
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
        setHoverDate,
        selectMonth,
        selectYear,
    };
};
