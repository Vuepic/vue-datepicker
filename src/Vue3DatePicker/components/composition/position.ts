import { ref, Ref } from 'vue';
import { OpenPosition } from '../../interfaces';
import { unrefElement } from '../../utils/util';

interface IUsePosition {
    menuPosition: Ref<{ top: string; left: string; transform: string }>;
    openOnTop: Ref<boolean>;
    setMenuPosition: (recalculate?: boolean) => void;
    recalculatePosition: () => void;
}

type ComponentRef = Ref<HTMLElement | null>;

/**
 * Extracted code from the main component, used for calculating the position of the menu
 */
export const usePosition = (
    openPosition: OpenPosition,
    altPosition: boolean,
    menuRef: ComponentRef,
    inputRef: ComponentRef,
): IUsePosition => {
    const menuPosition = ref({ top: '0', left: '0', transform: 'none' });
    const openOnTop = ref(false);
    const diagonal = 10; // arrow square diagonal + 1

    /**
     * Get correct offset of an element
     */
    const getOffset = (el: HTMLElement): { top: number; left: number } => {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY,
        };
    };

    /**
     * Use alternative position calculation, for specific cases on nested relative elements
     */
    const getOffsetAlt = (el: HTMLElement): { top: number; left: number } => {
        let x = 0;
        let y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            x += el.offsetLeft - el.scrollLeft;
            y += el.offsetTop - el.scrollTop;
            el = el.offsetParent as HTMLElement;
        }
        return { top: y, left: x };
    };

    /**
     * Main call, when input is clicked, opens the menu on the first entry
     * Recalculate param is added when the menu component is mounted so that we can check the correct space
     */
    const setMenuPosition = (recalculate = true): void => {
        const el = unrefElement(inputRef);
        if (el) {
            const { left, width, height } = el.getBoundingClientRect();
            const { top: offset } = altPosition ? getOffsetAlt(el) : getOffset(el);
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
        const el = unrefElement(inputRef);
        if (el) {
            const { height: inputHeight, top } = el.getBoundingClientRect();
            const { top: offset } = altPosition ? getOffsetAlt(el) : getOffset(el);
            const fullHeight = window.innerHeight;
            const freeSpaceBottom = fullHeight - top - inputHeight;

            const menuEl = unrefElement(menuRef);

            if (menuEl) {
                const { height } = menuEl.getBoundingClientRect();
                const menuHeight = height + inputHeight;
                if (menuHeight > top && menuHeight > freeSpaceBottom) {
                    if (top < freeSpaceBottom) {
                        setMenuPosition(false);
                        openOnTop.value = false;
                    }
                } else {
                    if (menuHeight > freeSpaceBottom) {
                        menuPosition.value.top = `${offset - height - diagonal}px`;
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
