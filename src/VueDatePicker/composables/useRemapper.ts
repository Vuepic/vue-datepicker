import { watch } from 'vue';

import { useDateUtils, useContext } from '@/composables';

export const useRemapper = (reMap?: () => void) => {
    const {
        today,
        time,
        modelValue,
        defaults: { range },
    } = useContext();

    const { timeGetter } = useDateUtils();

    watch(
        range,
        (newVal, oldVal) => {
            if (newVal.enabled !== oldVal.enabled) {
                time.hours = timeGetter('hours', today, range.value.enabled);
                time.minutes = timeGetter('minutes', today, range.value.enabled);
                time.seconds = timeGetter('seconds', today, range.value.enabled);
            }
        },
        { deep: true },
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
};
