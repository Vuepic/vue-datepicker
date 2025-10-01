import { computed } from 'vue';

import { useContext } from '@/composables/useContext.ts';

export const useTransitions = () => {
    const {
        defaults: { transitions },
    } = useContext();

    const transitionName = computed(() => (isOpen: boolean): string => {
        if (!transitions.value) return '';
        return isOpen ? transitions.value.open : transitions.value.close;
    });

    const menuTransition = computed(() => (openOnTop: boolean) => {
        if (!transitions.value) return '';
        return openOnTop ? transitions.value.menuAppearTop : transitions.value.menuAppearBottom;
    });

    return { transitionName, showTransition: !!transitions.value, menuTransition };
};
