import { computed, type ComputedRef, type InjectionKey, provide, ref } from 'vue';
import { getMonth, getYear } from 'date-fns';

interface CalendarUpdateOptions {
    month: number;
    year: number;
    instance: number;
}

export interface InstanceState {
    month: ComputedRef<(instance: number) => number>;
    year: ComputedRef<(instance: number) => number>;
    updateCalendar: (value: Partial<CalendarUpdateOptions>) => void;
}

export const DpInstanceKey = Symbol('DpInstance') as InjectionKey<InstanceState>;

export const useInstance = () => {
    const calendars = ref([{ month: getMonth(new Date()), year: getYear(new Date()) }]);

    const month = computed(
        () => (instance: number) => (calendars.value[instance] ? calendars.value[instance].month : 0),
    );

    const year = computed(() => (instance: number) => (calendars.value[instance] ? calendars.value[instance].year : 0));

    const updateCalendar = (value: Partial<CalendarUpdateOptions>) => {
        if (value.instance || value.instance === 0) {
            const instanceValue = calendars.value[value.instance];
            calendars.value[value.instance] = {
                month: value.month ?? instanceValue.month,
                year: value.year ?? instanceValue.year,
            };
        }
    };

    provide(DpInstanceKey, { month, year, updateCalendar });
};
