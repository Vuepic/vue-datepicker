import { computed } from 'vue';
import { useState } from '@/components/composables/state';

import type { ITransition } from '@/interfaces';

export const useTransitions = () => {
    const { config } = useState();
    const transitionName = computed(() => (isOpen: boolean): string => {
        if (config.value.transitions) {
            return isOpen
                ? (config.value.transitions as ITransition).open
                : (config.value.transitions as ITransition).close;
        }
        return '';
    });

    return { transitionName, showTransition: !!config.value.transitions };
};
