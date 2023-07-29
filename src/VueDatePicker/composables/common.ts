import { computed } from 'vue';

import type { Flow } from '@/interfaces';
import type { Ref } from 'vue';

export const useCommon = (hideNavigation: Ref<Flow[] | undefined>) => {
    const hideNavigationButtons = computed(() => (key: Flow) => {
        return hideNavigation.value?.includes(key);
    });

    return { hideNavigationButtons };
};
