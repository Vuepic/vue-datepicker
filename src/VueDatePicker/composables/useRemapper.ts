import { watch } from 'vue';

import { useDateUtils, useContext } from '@/composables';

export const useRemapper = (reMap?: () => void) => {
    const {
        today,
        time,
        modelValue,
        defaults: { range },
    } = useContext();

    const { setTimeModelValue } = useDateUtils();

    watch(
        range,
        (newVal, oldVal) => {
            if (newVal.enabled !== oldVal.enabled) {
                setTimeModelValue(time, modelValue.value, today, range.value.enabled);
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
