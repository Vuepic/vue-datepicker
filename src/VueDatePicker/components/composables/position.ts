import { ref, toRef, watch } from 'vue';

import { OpenPosition } from '@/interfaces';
import { unrefElement } from '@/utils/util';

import type { ComponentRef, VueEmit } from '@/interfaces';
import type { AllPropsType } from '@/utils/props';

/**
 * Extracted code from the main component, used for calculating the position of the menu
 */
export const usePosition = (menuRef: ComponentRef, inputRef: ComponentRef, emit: VueEmit, props: AllPropsType) => {
    const menuPosition = ref<{ top: string; left: string; transform: string; position?: string }>({
        top: '0',
        left: '0',
        transform: 'none',
    });
    const openOnTop = ref(false);
    const centered = toRef(props, 'teleportCenter');

    watch(centered, () => {
        setMenuPosition();
    });

    // Get correct offset of an element
    const getOffset = (el: HTMLElement): { top: number; left: number } => {
        if (props.teleport) {
            const rect = el.getBoundingClientRect();
            return {
                left: rect.left + window.scrollX,
                top: rect.top + window.scrollY,
            };
        }
        return { top: 0, left: 0 };
    };

    const setPositionRight = (left: number, width: number): void => {
        menuPosition.value.left = `${left + width}px`;
        menuPosition.value.transform = `translateX(-100%)`;
    };

    const setPositionLeft = (left: number): void => {
        menuPosition.value.left = `${left}px`;
        menuPosition.value.transform = `translateX(0)`;
    };

    const setHorizontalPositioning = (left: number, width: number, initial = false): void => {
        if (props.position === OpenPosition.left) {
            setPositionLeft(left);
        }

        if (props.position === OpenPosition.right) {
            setPositionRight(left, width);
        }

        if (props.position === OpenPosition.center) {
            menuPosition.value.left = `${left + width / 2}px`;
            menuPosition.value.transform = initial ? `translate(-50%, -50%)` : `translateX(-50%)`;
        }
    };

    const getInputPositions = (inputEl: HTMLElement) => {
        const { width, height } = inputEl.getBoundingClientRect();
        const { top, left } = props.altPosition ? props.altPosition(inputEl) : getOffset(inputEl);
        return { top: +top, left: +left, width, height };
    };

    // On initial component map, set menu starting position to the middle of the input
    const setInitialPosition = () => {
        const inputEl = unrefElement(inputRef);
        if (inputEl) {
            const { top, left, width, height } = getInputPositions(inputEl);

            menuPosition.value.top = `${top + height / 2}px`;
            menuPosition.value.transform = `translateY(-50%)`;
            setHorizontalPositioning(left, width, true);
        }
    };

    const teleportCenter = () => {
        menuPosition.value.left = `50%`;
        menuPosition.value.top = `50%`;
        menuPosition.value.transform = `translate(-50%, -50%)`;
        menuPosition.value.position = `fixed`;
    };

    const customAltPosition = () => {
        const el = unrefElement(inputRef);
        const { top, left, transform } = props.altPosition(el);
        menuPosition.value = { top: `${top}px`, left: `${left}px`, transform: transform || '' };
    };

    /**
     * Main call, when input is clicked, opens the menu on the first entry
     * Recalculate param is added when the position is recalculated on scroll or resize
     */
    const setMenuPosition = (recalculate = true): void => {
        if (!props.inline) {
            if (centered.value) return teleportCenter();

            if (props.altPosition !== null) return customAltPosition();

            if (recalculate) {
                emit('recalculate-position');
            }
            return calculateMenuPosition();
        }
    };

    const setLeftRightPosition = ({
        inputEl,
        menuEl,
        left,
        width,
    }: {
        inputEl: HTMLElement;
        menuEl: HTMLElement;
        left: number;
        width: number;
    }) => {
        if (window.screen.width > 768) {
            setHorizontalPositioning(left, width);
        }

        autoLeftRight(inputEl, menuEl);
    };

    // Set menu position bellow input
    const setBottomPosition = (inputEl: HTMLElement, menuEl: HTMLElement) => {
        const { top: offset, left, height, width } = getInputPositions(inputEl);

        menuPosition.value.top = `${height + offset + +props.offset}px`;
        setLeftRightPosition({ inputEl, menuEl, left, width });

        openOnTop.value = false;
    };

    // Set menu position above the input
    const setTopPosition = (inputEl: HTMLElement, menuEl: HTMLElement) => {
        const { top: offset, left, width } = getInputPositions(inputEl);
        const { height } = menuEl.getBoundingClientRect();

        menuPosition.value.top = `${offset - height - +props.offset}px`;
        setLeftRightPosition({ inputEl, menuEl, left, width });

        openOnTop.value = true;
    };

    // Set auto left-right if the menu is out of the screen
    const autoLeftRight = (inputEl: HTMLElement, menuEl: HTMLElement) => {
        if (props.autoPosition) {
            const { left, width } = getInputPositions(inputEl);
            const { left: menuLeft, right: menuRight } = menuEl.getBoundingClientRect();
            if (menuLeft <= 0 || menuLeft <= left) return setPositionLeft(left);
            if (menuRight >= document.documentElement.clientWidth) return setPositionRight(left, width);
            return setHorizontalPositioning(left, width);
        }
    };

    // If auto-position is enabled, perform calculation to fit menu on the screen
    const setAutoPosition = (inputEl: HTMLElement, menuEl: HTMLElement) => {
        const { height: menuHeight } = menuEl.getBoundingClientRect();
        const { top: inputTop, height: inputHeight } = inputEl.getBoundingClientRect();

        const fullHeight = window.innerHeight;
        const spaceBottom = fullHeight - inputTop - inputHeight;
        const spaceTop = inputTop;

        // If there is enough space at the bottom, open at the bottom
        if (menuHeight <= spaceBottom) return setBottomPosition(inputEl, menuEl);
        // If there is not enough space at the bottom but there is on top, set position on top
        if (menuHeight > spaceBottom && menuHeight <= spaceTop) return setTopPosition(inputEl, menuEl);
        // If we pass both check, it means there is not enough space above and bellow the input
        // Position where there is more space available
        if (spaceBottom >= spaceTop) return setBottomPosition(inputEl, menuEl);
        return setTopPosition(inputEl, menuEl);
    };

    // Parent function that will perform check on which calculation function to invoke
    const calculateMenuPosition = () => {
        const inputEl = unrefElement(inputRef);
        const menuEl = unrefElement(menuRef);
        if (inputEl && menuEl) {
            if (props.autoPosition) {
                return setAutoPosition(inputEl, menuEl);
            }
            return setBottomPosition(inputEl, menuEl);
        }
    };

    const isScrollable = function (el: HTMLElement | null) {
        if (el) {
            const hasScrollableContent = el.scrollHeight > el.clientHeight;

            const overflowYStyle = window.getComputedStyle(el).overflowY;
            const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;

            return hasScrollableContent && !isOverflowHidden;
        }
        return true;
    };

    const getScrollableParent = function (el: HTMLElement | null): Window | HTMLElement {
        if (!el || el === document.body || el.nodeType === Node.DOCUMENT_FRAGMENT_NODE) return window;
        if (isScrollable(el)) return el;
        return getScrollableParent(el.parentNode as HTMLElement);
    };

    return { openOnTop, menuPosition, setMenuPosition, setInitialPosition, getScrollableParent };
};
