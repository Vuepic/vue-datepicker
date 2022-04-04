import { computed, inject } from 'vue';
import type { ComputedRef } from 'vue';

import type { ITransition } from '@/interfaces';
import { transitionsKey } from '@/utils/props';

export const useTransitions = () => {
    const transitions = inject<ComputedRef<ITransition>>(transitionsKey);

    const transitionName = computed(() => (isOpen: boolean): string => {
        if (transitions?.value) {
            return isOpen ? transitions.value.open : transitions.value.close;
        }
        return '';
    });

    return { transitionName, showTransition: !!transitions?.value };
};
