import { computed, ref, reactive, watch } from 'vue';
import { getHours, getMinutes, getMonth, getYear } from 'date-fns';

import { getDate } from '@/utils/date-utils';

import type { ICalendarData, InternalModuleValue, TimeType, VueEmit } from '@/interfaces';
import type { PickerBasePropsType } from '@/props';
import { useDefaults } from '@/composables/defaults';
import { localToTz } from '@/utils/timezone';

export const useModel = (props: PickerBasePropsType, emit: VueEmit, reMap?: () => void) => {
    const { defaultedRange, defaultedTz } = useDefaults(props);

    const today = getDate(localToTz(getDate(), defaultedTz.value.timezone));
    const calendars = ref<ICalendarData[]>([{ month: getMonth(today), year: getYear(today) }]);

    const timeGetter = (type: TimeType) => {
        const fn = {
            hours: getHours(today),
            minutes: getMinutes(today),
            seconds: 0,
        };

        return defaultedRange.value.enabled ? [fn[type], fn[type]] : fn[type];
    };
    // Time values
    const time = reactive({
        hours: timeGetter('hours'),
        minutes: timeGetter('minutes'),
        seconds: timeGetter('seconds'),
    });

    watch(
        defaultedRange,
        (newVal, oldVal) => {
            if (newVal.enabled !== oldVal.enabled) {
                time.hours = timeGetter('hours');
                time.minutes = timeGetter('minutes');
                time.seconds = timeGetter('seconds');
            }
        },
        { deep: true },
    );

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

    watch(
        modelValue,
        (newVal, oldVal) => {
            if (reMap) {
                if (JSON.stringify(newVal ?? {}) !== JSON.stringify(oldVal ?? {})) {
                    reMap();
                }
            }
        },
        { deep: true },
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
