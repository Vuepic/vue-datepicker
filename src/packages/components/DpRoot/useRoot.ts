import { provide, ref, computed, type Ref, type ComputedRef, type InjectionKey } from 'vue';
import { isBool } from '@packages/utils/generic.ts';
import { EventBus, type EventMap } from '@packages/utils/EventBus.ts';
import type { DpRootEmits, DpRootProps } from '@packages/components/DpRoot';

export interface RootState {
    triggerRef: Ref<HTMLElement | null>;
    menuRef: Ref<HTMLElement | null>;
    isMenuOpen: Ref<boolean>;
    inputValue: Ref<string>;
    rangeEnabled: ComputedRef<boolean>;
    multiDatesEnabled: ComputedRef<boolean>;
    openMenu: () => void;
    closeMenu: () => void;
    clearValue: () => void;
    props: DpRootProps;
    eventBus: EventBus<EventMap>;
}

export const DpRootKey = Symbol('DpRootKey') as InjectionKey<RootState>;

export const useRoot = (props: DpRootProps, emit: DpRootEmits) => {
    const triggerRef = ref(null);
    const menuRef = ref(null);

    const inputValue = ref('');

    const eventBus = new EventBus();

    const openMenu = () => {
        eventBus.publish('openMenu');
    };

    const closeMenu = () => {
        eventBus.publish('closeMenu');
    };

    const clearValue = () => {
        inputValue.value = '';
    };

    provide(DpRootKey, {
        triggerRef,
        menuRef,
        isMenuOpen: ref(false),
        inputValue,
        rangeEnabled: computed(() => (isBool(props.range) ? props.range : true)),
        multiDatesEnabled: computed(() => (isBool(props.multiDates) ? props.multiDates : true)),
        openMenu,
        clearValue,
        closeMenu,
        props,
        eventBus,
    });

    return { openMenu, closeMenu };
};
