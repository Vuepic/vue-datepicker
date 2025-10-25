import { watch } from 'vue';

import { useContext, useHelperFns } from '@/composables';

export const useRemapper = (reMap?: () => void) => {
    const {
        today,
        time,
        modelValue,
        defaults: { range },
    } = useContext();
    const { setTimeModelValue } = useHelperFns();

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
