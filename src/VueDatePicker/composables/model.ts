import { computed, ref, reactive } from 'vue';
import { getHours, getMinutes, getMonth, getYear } from 'date-fns';

import { getDate } from '@/utils/date-utils';

import type { ICalendarData, InternalModuleValue, VueEmit } from '@/interfaces';
import type { PickerBasePropsType } from '@/props';
import { useDefaults } from '@/composables/defaults';
import { localToTz } from '@/utils/timezone';

export const useModel = (props: PickerBasePropsType, emit: VueEmit) => {
    const { defaultedRange, defaultedTz } = useDefaults(props);

    const today = getDate(localToTz(getDate(), defaultedTz.value.timezone));
    const calendars = ref<ICalendarData[]>([{ month: getMonth(today), year: getYear(today) }]);

    // Time values
    const time = reactive({
        hours: defaultedRange.value.enabled ? [getHours(today), getHours(today)] : getHours(today),
        minutes: defaultedRange.value.enabled ? [getMinutes(today), getMinutes(today)] : getMinutes(today),
        seconds: defaultedRange.value.enabled ? [0, 0] : 0,
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
        today,
    };
};
