import { OpenPosition } from '../../interfaces';
import { ref, Ref } from 'vue';

interface IUsePosition {
    menuPosition: Ref<{ top: string; left: string; transform: string }>;
    openOnTop: Ref<boolean>;
    setMenuPosition: (recalculate?: boolean) => void;
    recalculatePosition: () => void;
}

/**
 * Extracted code from the main component, used for calculating the position of the menu
 */
export const usePosition = (openPosition: OpenPosition, uid: string): IUsePosition => {
    const menuPosition = ref({ top: '0', left: '0', transform: 'none' });
    const openOnTop = ref(false);
    const diagonal = 18; // arrow square diagonal + 1

    /**
     * Get bounding client rect of an input field, and proper top offset
     */
    const getElClientRect = (el: HTMLElement) => {
        const bodyRect = document.body.getBoundingClientRect();
        const { left, width, height, top } = el.getBoundingClientRect();
        const offset = top - bodyRect.top;

        return { left, width, height, top, offset };
    };

    /**
     * Main call, when input is clicked, opens the menu on the first entry
     * Recalculate param is added when the menu component is mounted so that we can check the correct space
     */
    const setMenuPosition = (recalculate = true): void => {
        const el = document.getElementById(`dp__input_${uid}`);
        if (el) {
            const { left, width, height, offset } = getElClientRect(el);
            const position = { top: `${height + offset + diagonal}px`, left: '', transform: 'none' };
            if (openPosition === OpenPosition.left) {
                position.left = `${left}px`;
            }

            if (openPosition === OpenPosition.right) {
                position.left = `${left + width}px`;
                position.transform = `translateX(-100%)`;
            }

            if (openPosition === OpenPosition.center) {
                position.left = `${left + width / 2}px`;
                position.transform = `translateX(-50%)`;
            }
            menuPosition.value = position;
            if (recalculate) {
                recalculatePosition();
            }
        }
    };

    /**
     * When the menu is mounted, it calls position check again, and checks if there is a free space on top or bottom
     * of the input field to place the menu
     */
    const recalculatePosition = (): void => {
        const el = document.getElementById(`dp__input_${uid}`);
        if (el) {
            const { height: inputHeight, top, offset } = getElClientRect(el);
            const fullHeight = window.innerHeight;
            const freeSpaceBottom = fullHeight - offset - inputHeight;

            const menuEl = document.getElementById(`dp__menu_${uid}`);

            if (menuEl) {
                const { height } = menuEl.getBoundingClientRect();
                const menuHeight = height + inputHeight;
                if (menuHeight > top && menuHeight > freeSpaceBottom) {
                    if (top > freeSpaceBottom) {
                        openOnTop.value = false;
                    } else {
                        setMenuPosition(false);
                        openOnTop.value = false;
                    }
                } else {
                    if (menuHeight > freeSpaceBottom) {
                        menuPosition.value.top = `${offset - height - 1}px`;
                        openOnTop.value = true;
                    } else {
                        setMenuPosition(false);
                        openOnTop.value = false;
                    }
                }
            }
        }
    };

    return { openOnTop, menuPosition, setMenuPosition, recalculatePosition };
};
