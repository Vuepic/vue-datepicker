import { watch } from 'vue';

import { useContext } from '@/composables';

export const useRemapper = (reMap?: () => void) => {
  const { modelValue } = useContext();

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
