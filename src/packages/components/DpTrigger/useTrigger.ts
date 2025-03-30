import { useContext } from '@packages/composables/useContext.ts';
import { DpRootKey } from '@packages/components/DpRoot';

export const useTrigger = () => {
    const { triggerRef, inputValue, openMenu, clearValue } = useContext(DpRootKey);

    return { triggerRef, inputValue, clearValue, openMenu };
};
