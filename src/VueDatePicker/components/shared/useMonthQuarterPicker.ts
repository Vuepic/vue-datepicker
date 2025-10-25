import { computed, type EmitFn, onMounted, ref, watch } from 'vue';
import { addYears, differenceInYears, endOfYear, getMonth, getYear, set, startOfYear, subYears } from 'date-fns';

import { FlowStep } from '@/constants';
import { useContext, useDateUtils, useUtilsWithContext, useValidation } from '@/composables';

import type { OverlayGridItem, SelectItem } from '@/types';

/**
 * Both modes shared logic
 */
export const useMonthOrQuarterPicker = (emit: EmitFn<{ 'reset-flow': []; 'auto-apply': [ignoreClose?: boolean] }>) => {
    const {
        getDate,
        rootEmit,
        state,
        month,
        year,
        modelValue,
        calendars,
        rootProps,
        defaults: { multiCalendars, range, safeDates, filters, highlight },
    } = useContext();
    const { resetDate, getYearFromDate, checkHighlightYear, groupListAndMap } = useDateUtils();
    const { getYears } = useUtilsWithContext();
    const { validateMonthYear, checkMinMaxValue } = useValidation();

    const showYearPicker = ref([false]);

    const years = computed(() => getYears());

    const isDisabled = computed(() => (instance: number, next: boolean) => {
        const currentDate = set(resetDate(getDate()), {
            month: month.value(instance),
            year: year.value(instance),
        });
        const date = next ? endOfYear(currentDate) : startOfYear(currentDate);
        return validateMonthYear(date, rootProps.preventMinMaxNavigation, next);
    });

    const isSoloMultiInRange = () => {
        return Array.isArray(modelValue.value) && multiCalendars.value.solo && modelValue.value[1];
    };

    const assignMultiCalendars = () => {
        for (let i = 0; i < multiCalendars.value.count; i++) {
            if (i === 0) {
                calendars.value[i] = calendars.value[0]!;
            } else if (i === multiCalendars.value.count - 1 && isSoloMultiInRange()) {
                calendars.value[i] = {
                    month: getMonth((modelValue.value as Date[])[1]!),
                    year: getYear((modelValue.value as Date[])[1]!),
                };
            } else {
                const prevDate = set(getDate(), calendars.value[i - 1]!);
                calendars.value[i] = { month: getMonth(prevDate), year: getYear(addYears(prevDate, 1)) };
            }
        }
    };

    const updateMultiCalendars = (instance: number) => {
        if (!instance) return assignMultiCalendars();
        const date = set(getDate(), calendars.value[instance]!);
        calendars.value[0]!.year = getYear(subYears(date, multiCalendars.value.count - 1));
        return assignMultiCalendars();
    };

    const getDateToFocus = (dateOne: Date, dateTwo: Date) => {
        const diff = differenceInYears(dateTwo, dateOne);
        return range.value.showLastInRange && diff > 1 ? dateTwo : dateOne;
    };

    const getRangedValueDate = (dates: Date[]) => {
        if (rootProps.focusStartDate) return dates[0];
        if (multiCalendars.value.solo) return dates[0];
        return dates[1] ? getDateToFocus(dates[0]!, dates[1]) : dates[0];
    };

    const checkModelValue = () => {
        if (modelValue.value) {
            const firstDate = Array.isArray(modelValue.value) ? getRangedValueDate(modelValue.value) : modelValue.value;
            calendars.value[0] = { month: getMonth(firstDate!), year: getYear(firstDate!) };
        }
    };

    const assign = () => {
        checkModelValue();
        if (multiCalendars.value.count) {
            assignMultiCalendars();
        }
    };

    watch(modelValue, (newVal, oldVal) => {
        if (state.isTextInputDate) {
            if (JSON.stringify(newVal ?? {}) !== JSON.stringify(oldVal ?? {})) {
                assign();
            }
        }
    });

    onMounted(() => {
        assign();
    });

    const selectYear = (year: number, instance: number) => {
        calendars.value[instance]!.year = year;
        rootEmit('update-month-year', { instance, year, month: calendars.value[instance]!.month });
        if (multiCalendars.value.count && !multiCalendars.value.solo) {
            updateMultiCalendars(instance);
        }
    };

    const groupedYears = computed(() => (instance: number): OverlayGridItem[][] => {
        return groupListAndMap(years.value, (y: SelectItem) => {
            const active = year.value(instance) === y.value;
            const disabled =
                checkMinMaxValue(
                    y.value,
                    getYearFromDate(safeDates.value.minDate),
                    getYearFromDate(safeDates.value.maxDate),
                ) || filters.value.years?.includes(year.value(instance));
            const highlighted = checkHighlightYear(highlight.value, y.value);

            return { active, disabled, highlighted };
        });
    });

    const handleYearSelect = (year: number, instance: number) => {
        selectYear(year, instance);
        toggleYearPicker(instance);
    };

    const handleYear = (instance: number, increment = false): void => {
        if (!isDisabled.value(instance, increment)) {
            const yearToSelect = increment ? year.value(instance) + 1 : year.value(instance) - 1;
            selectYear(yearToSelect, instance);
        }
    };

    const toggleYearPicker = (instance: number, flow = false, show?: boolean): void => {
        if (!flow) {
            emit('reset-flow');
        }

        if (show === undefined) {
            showYearPicker.value[instance] = !showYearPicker.value[instance];
        } else {
            showYearPicker.value[instance] = show;
        }

        if (showYearPicker.value[instance]) {
            rootEmit('overlay-toggle', { open: true, overlay: FlowStep.year });
        } else {
            rootEmit('overlay-toggle', { open: false, overlay: FlowStep.year });
        }
    };

    return {
        isDisabled,
        groupedYears,
        showYearPicker,
        selectYear,
        toggleYearPicker,
        handleYearSelect,
        handleYear,
    };
};
