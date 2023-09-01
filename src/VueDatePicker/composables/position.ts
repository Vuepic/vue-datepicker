import { h, ref, render, toRef, watch } from 'vue';
import { OpenPosition } from '@/interfaces';

import { unrefElement } from '@/utils/util';
import { MenuPlacement } from '@/constants';

import type { Component, ComponentPublicInstance, ComputedRef, Ref, Slots } from 'vue';
import type { ComponentRef, InlineOptions, VueEmit } from '@/interfaces';
import type { AllPropsType } from '@/props';

/**
 * Extracted code from the main component, used for calculating the position of the menu
 */
interface Params {
    menuRef: Ref<HTMLElement | null>;
    menuRefInner: Ref<ComponentPublicInstance | null>;
    inputRef: ComponentRef;
    pickerWrapperRef: Ref<HTMLElement | null>;
    inline: ComputedRef<InlineOptions>;
    emit: VueEmit;
    props: AllPropsType;
    slots: Slots;
}
export const usePosition = ({
    menuRef,
    menuRefInner,
    inputRef,
    pickerWrapperRef,
    inline,
    emit,
    props,
    slots,
}: Params) => {
    const menuRect = ref<DOMRect>({} as DOMRect);
    const xCorrect = ref(false);

    const menuStyle = ref<Partial<CSSStyleDeclaration>>({
        top: '0',
        left: '0',
    });
    const openOnTop = ref(false);
    const centered = toRef(props, 'teleportCenter');

    watch(centered, () => {
        menuStyle.value = JSON.parse(JSON.stringify({}));
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
        menuStyle.value.left = `${left + width - menuRect.value.width}px`;
    };

    const setPositionLeft = (left: number): void => {
        menuStyle.value.left = `${left}px`;
    };

    const setHorizontalPositioning = (left: number, width: number): void => {
        if (props.position === OpenPosition.left) {
            setPositionLeft(left);
        }

        if (props.position === OpenPosition.right) {
            setPositionRight(left, width);
        }

        if (props.position === OpenPosition.center) {
            menuStyle.value.left = `${left + width / 2 - menuRect.value.width / 2}px`;
        }
    };

    const getInputPositions = (inputEl: HTMLElement) => {
        const { width, height } = inputEl.getBoundingClientRect();
        const { top, left } = props.altPosition ? props.altPosition(inputEl) : getOffset(inputEl);
        return { top: +top, left: +left, width, height };
    };

    const teleportCenter = () => {
        menuStyle.value.left = `50%`;
        menuStyle.value.top = `50%`;
        menuStyle.value.transform = `translate(-50%, -50%)`;
        menuStyle.value.position = `fixed`;
        delete menuStyle.value.opacity;
    };

    const customAltPosition = () => {
        const el = unrefElement(inputRef);
        const { top, left, transform } = props.altPosition(el);
        menuStyle.value = { top: `${top}px`, left: `${left}px`, transform: transform ?? '' };
    };

    /**
     * Main call, when input is clicked, opens the menu on the first entry
     * Recalculate param is added when the position is recalculated on scroll or resize
     */
    const setMenuPosition = (recalculate = true): void => {
        if (!inline.value.enabled) {
            if (centered.value) return teleportCenter();

            if (props.altPosition !== null) return customAltPosition();

            if (recalculate) {
                const el = props.teleport ? menuRefInner.value?.$el : menuRef.value;

                if (el) {
                    menuRect.value = el.getBoundingClientRect();
                }
                emit('recalculate-position');
            }
            return calculateMenuPosition();
        }
    };

    const setLeftRightPosition = ({ inputEl, left, width }: { inputEl: HTMLElement; left: number; width: number }) => {
        if (window.screen.width > 768 && !xCorrect.value) {
            setHorizontalPositioning(left, width);
        }

        autoLeftRight(inputEl);
    };

    // Set menu position bellow input
    const setBottomPosition = (inputEl: HTMLElement) => {
        const { top: offset, left, height, width } = getInputPositions(inputEl);
        menuStyle.value.top = `${height + offset + +props.offset}px`;
        openOnTop.value = false;
        if (!xCorrect.value) {
            menuStyle.value.left = `${left + width / 2 - menuRect.value.width / 2}px`;
        }
        setLeftRightPosition({ inputEl, left, width });
    };

    // Set menu position above the input
    const setTopPosition = (inputEl: HTMLElement) => {
        const { top: offset, left, width } = getInputPositions(inputEl);

        menuStyle.value.top = `${offset - +props.offset - menuRect.value.height}px`;
        openOnTop.value = true;
        setLeftRightPosition({ inputEl, left, width });
    };

    // Set auto left-right if the menu is out of the screen
    const autoLeftRight = (inputEl: HTMLElement) => {
        if (props.autoPosition) {
            const { left, width } = getInputPositions(inputEl);
            const { left: menuLeft, right: menuRight } = menuRect.value;
            if (!xCorrect.value) {
                if (Math.abs(menuLeft) !== Math.abs(menuRight)) {
                    if (menuLeft <= 0) {
                        xCorrect.value = true;
                        return setPositionLeft(left);
                    }
                    if (menuRight >= document.documentElement.clientWidth) {
                        xCorrect.value = true;
                        return setPositionRight(left, width);
                    }
                }
                return setHorizontalPositioning(left, width);
            }
        }
    };

    const getMenuPlacement = (): MenuPlacement => {
        const inputEl = unrefElement(inputRef);
        if (inputEl) {
            const { height: menuHeight } = menuRect.value;
            const { top: inputTop, height: inputHeight } = inputEl.getBoundingClientRect();

            const fullHeight = window.innerHeight;
            const spaceBottom = fullHeight - inputTop - inputHeight;
            const spaceTop = inputTop;

            if (menuHeight <= spaceBottom) return MenuPlacement.bottom;
            // If there is not enough space at the bottom but there is on top, set position on top
            if (menuHeight > spaceBottom && menuHeight <= spaceTop) return MenuPlacement.top;
            // If we pass both check, it means there is not enough space above and bellow the input
            // Position where there is more space available
            if (spaceBottom >= spaceTop) return MenuPlacement.bottom;
            return MenuPlacement.top;
        }
        return MenuPlacement.bottom;
    };

    // If auto-position is enabled, perform calculation to fit menu on the screen
    const setAutoPosition = (inputEl: HTMLElement) => {
        const placement = getMenuPlacement();
        if (placement === MenuPlacement.bottom) return setBottomPosition(inputEl);
        return setTopPosition(inputEl);
    };

    // Parent function that will perform check on which calculation function to invoke
    const calculateMenuPosition = () => {
        const inputEl = unrefElement(inputRef);
        if (inputEl) {
            if (props.autoPosition) {
                return setAutoPosition(inputEl);
            }
            return setBottomPosition(inputEl);
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

    const getShadowPos = (rect?: DOMRect) => {
        if (rect) {
            switch (props.position) {
                case OpenPosition.left:
                    return { left: 0, transform: 'translateX(0)' };
                case OpenPosition.right:
                    return { left: `${rect.width}px`, transform: 'translateX(-100%)' };
                default:
                    return { left: `${rect.width / 2}px`, transform: 'translateX(-50%)' };
            }
        }
        return {};
    };

    // Renders invisible menu on open to determine the menu dimensions
    const shadowRender = (DPMenu: Component, props: AllPropsType) => {
        const container = document.createElement('div');
        const input = unrefElement(inputRef)?.getBoundingClientRect();
        container.setAttribute('id', 'dp--temp-container');
        const wrap = pickerWrapperRef.value?.clientWidth ? pickerWrapperRef.value : document.body;
        wrap.append(container);

        const renderContainer = document.getElementById('dp--temp-container') as HTMLElement;
        const pos = getShadowPos(input);

        const el = h(
            DPMenu,
            {
                ...props,
                shadow: true,
                style: { opacity: 0, position: 'absolute', ...pos },
            },
            Object.fromEntries(Object.keys(slots).map((slot) => [slot, slots[slot]])),
        );

        render(el, renderContainer);
        menuRect.value = el.el?.getBoundingClientRect();

        render(null, renderContainer);
        wrap.removeChild(renderContainer);
    };

    return {
        openOnTop,
        menuStyle,
        xCorrect,
        setMenuPosition,
        getScrollableParent,
        shadowRender,
    };
};
