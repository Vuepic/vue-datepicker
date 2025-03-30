import { onMounted, ref } from 'vue';
import { offset, useFloating } from '@floating-ui/vue';
import { onClickOutside } from '@vueuse/core';
import { useContext } from '@packages/composables/useContext';
import { DpRootKey } from '@packages/components/DpRoot';
import type { DpMenuProps } from '@packages/components/DpMenu';

export const useDpMenu = (props: DpMenuProps) => {
    const { menuRef, triggerRef, eventBus, isMenuOpen } = useContext(DpRootKey);
    const menuDisplay = ref('none');

    const { floatingStyles, update } = useFloating(triggerRef, menuRef, {
        placement: props.floating.placement,
        middleware: [offset(props.floating.offset)],
    });

    const openMenu = () => {
        if (menuRef.value) {
            menuDisplay.value = 'block';
            isMenuOpen.value = true;
            update();
        }
    };

    const closeMenu = () => {
        if (menuRef.value) {
            menuDisplay.value = 'none';
            isMenuOpen.value = false;
        }
    };

    onMounted(() => {
        eventBus.subscribe('openMenu', openMenu);
        eventBus.subscribe('closeMenu', closeMenu);
    });

    const handleClickOutside = () => {
        closeMenu();
    };

    onClickOutside(menuRef, handleClickOutside, { ignore: [triggerRef] });

    return { menuRef, floatingStyles, menuDisplay };
};
