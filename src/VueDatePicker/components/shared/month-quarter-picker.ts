import { computed, onMounted, ref } from 'vue';
import { addYears, getMonth, getYear, set, subYears } from 'date-fns';

import { checkHighlightYear, getDate, getMinMaxYear, resetDate, validateMonthYear } from '@/utils/date-utils';
import { checkMinMaxValue, getYears, groupListAndMap } from '@/utils/util';

import type { ComputedRef, WritableComputedRef, Ref } from 'vue';
import type {
    InternalModuleValue,
    MultiCalendarsOptions,
    ICalendarData,
    IDefaultSelect,
    OverlayGridItem,
    VueEmit,
    Highlight,
    HighlightFn,
} from '@/interfaces';
import type { PickerBasePropsType } from '@/props';

interface Opts {
    multiCalendars: ComputedRef<MultiCalendarsOptions>;
    calendars: Ref<ICalendarData[]>;
    modelValue: WritableComputedRef<InternalModuleValue>;
    props: PickerBasePropsType;
    year: ComputedRef<(instance: number) => number>;
    month: ComputedRef<(instance: number) => number>;
    highlight: ComputedRef<Highlight | HighlightFn>;
    emit: VueEmit;
}

/**
 * Both modes shared logic
 */
export const useMonthOrQuarterPicker = ({
    multiCalendars,
    highlight,
    calendars,
    modelValue,
    props,
    year,
    month,
    emit,
}: Opts) => {
    const years = computed(() => getYears(props.yearRange, props.reverseYears));
    const showYearPicker = ref([false]);

    const isDisabled = computed(() => (instance: number, next: boolean) => {
        const currentDate = set(resetDate(new Date()), {
            month: month.value(instance),
            year: year.value(instance),
        });
        return validateMonthYear(currentDate, props.maxDate, props.minDate, props.preventMinMaxNavigation, next);
    });

    const assignMultiCalendars = () => {
        for (let i = 0; i < multiCalendars.value.count; i++) {
            if (i === 0) {
                calendars.value[i] = calendars.value[0];
            } else {
                const prevDate = set(getDate(), calendars.value[i - 1]);
                calendars.value[i] = { month: getMonth(prevDate), year: getYear(addYears(prevDate, 1)) };
            }
        }
    };

    const updateMultiCalendars = (instance: number) => {
        if (!instance) return assignMultiCalendars();
        const date = set(getDate(), calendars.value[instance]);
        calendars.value[0].year = getYear(subYears(date, multiCalendars.value.count - 1));
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
        if (multiCalendars.value.count) {
            assignMultiCalendars();
        }
    });

    const selectYear = (year: number, instance: number) => {
        calendars.value[instance].year = year;
        if (multiCalendars.value.count && !multiCalendars.value.solo) {
            updateMultiCalendars(instance);
        }
    };

    const groupedYears = computed(() => (instance: number): OverlayGridItem[][] => {
        return groupListAndMap(years.value, (y: IDefaultSelect) => {
            const active = year.value(instance) === y.value;
            const disabled = checkMinMaxValue(y.value, getMinMaxYear(props.minDate), getMinMaxYear(props.maxDate));
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

        if (show !== undefined) {
            showYearPicker.value[instance] = show;
        } else {
            showYearPicker.value[instance] = !showYearPicker.value[instance];
        }

        if (!showYearPicker.value) {
            emit('overlay-closed');
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
