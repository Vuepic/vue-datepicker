import { type ComputedRef, type InjectionKey, provide, type Ref, ref } from 'vue';
import { useContext } from '@packages/composables/useContext.ts';
import { type DpRootProps, DpRootKey } from '@packages/components/DpRoot';

export interface TriggerState {
    inputRef: Ref<HTMLElement | null>;
    inputValue: Ref<string>;
    isMenuOpen: Ref<boolean>;
    rangeEnabled: ComputedRef<boolean>;
    multiDatesEnabled: ComputedRef<boolean>;
    openMenu: () => void;
    closeMenu: () => void;
    clearValue: () => void;
    props: DpRootProps;
}

export const DpTriggerKey = Symbol('DpTriggerKey') as InjectionKey<TriggerState>;

export const useTrigger = () => {
    const {
        triggerRef,
        props,
        inputValue,
        isMenuOpen,
        rangeEnabled,
        multiDatesEnabled,
        openMenu,
        clearValue,
        closeMenu,
    } = useContext(DpRootKey);

    provide(DpTriggerKey, {
        inputRef: ref(null),
        rangeEnabled,
        multiDatesEnabled,
        inputValue,
        isMenuOpen,
        openMenu,
        closeMenu,
        clearValue,
        props,
    });

    return { triggerRef, injectedProps: props, inputValue, clearValue, openMenu };
};
