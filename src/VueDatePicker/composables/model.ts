import { computed, ref, reactive } from 'vue';
import { getHours, getMinutes, getMonth, getYear } from 'date-fns';

import { getDate, getZonedDate } from '@/utils/date-utils';

import type { ICalendarData, InternalModuleValue, VueEmit } from '@/interfaces';
import type { PickerBasePropsType } from '@/props';

export const useModel = (props: PickerBasePropsType, emit: VueEmit) => {
    const today = getDate(getZonedDate(new Date(), props.timezone));
    const calendars = ref<ICalendarData[]>([{ month: getMonth(today), year: getYear(today) }]);

    // Time values

    const time = reactive({
        hours: props.range ? [getHours(today), getHours(today)] : getHours(today),
        minutes: props.range ? [getMinutes(today), getMinutes(today)] : getMinutes(today),
        seconds: props.range ? [0, 0] : 0,
    });

    const modelValue = computed({
        get: (): InternalModuleValue => {
            return props.internalModelValue;
        },
        set: (value: InternalModuleValue): void => {
            if (!props.readonly && !props.disabled) {
                emit('update:internal-model-value', value);
            }
        },
    });

    const month = computed(
        () =>
            (instance: number): number =>
                calendars.value[instance] ? calendars.value[instance].month : 0,
    );

    // Get year based on the calendar instance
    const year = computed(
        () =>
            (instance: number): number =>
                calendars.value[instance] ? calendars.value[instance].year : 0,
    );

    return {
        calendars,
        time,
        modelValue,
        month,
        year,
    };
};
