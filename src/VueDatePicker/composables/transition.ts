import { computed } from 'vue';

import type { Transition } from '@/interfaces';

export const useTransitions = (transitions: Transition | boolean) => {
    const transitionName = computed(() => (isOpen: boolean): string => {
        if (transitions && typeof transitions !== 'boolean') {
            return isOpen ? transitions.open : transitions.close;
        }
        return '';
    });

    return { transitionName, showTransition: !!transitions };
};
