<template>
    <div
        ref="gridWrapRef"
        :class="dpOverlayClass"
        :style="dpOverlayStyle"
        :role="useRelative ? undefined : 'dialog'"
        :aria-label="overlayLabel"
        :tabindex="useRelative ? undefined : '0'"
        @keydown="onKeyDown"
        @click.prevent
    >
        <div
            ref="containerRef"
            :class="containerClass"
            :style="{ '--dp-overlay-height': `${containerHeight}px` }"
            role="table"
        >
            <div class="dp__selection_grid_header"><slot name="header"></slot></div>
            <template v-if="$slots.overlay">
                <slot name="overlay" />
            </template>
            <template v-else>
                <div
                    v-for="(row, i) in items"
                    :key="i"
                    class="dp__overlay_row"
                    role="row"
                    :class="{ dp__flex_row: items.length >= 3 }"
                >
                    <div
                        v-for="(col, ind) in row"
                        :key="col.value"
                        :ref="(el) => assignRef(el, col, i, ind)"
                        role="gridcell"
                        :class="cellClassName"
                        :aria-selected="col.active || undefined"
                        :aria-disabled="col.disabled || undefined"
                        tabindex="0"
                        :data-test="col.text"
                        @click.prevent="onClick(col)"
                        @keydown="checkKeyDown($event, () => onClick(col), true)"
                        @mouseover="setHoverValue(col.value)"
                    >
                        <div :class="col.className">
                            <slot v-if="$slots.item" name="item" :item="col" />
                            <template v-if="!$slots.item">{{ col.text }}</template>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <button
            v-if="$slots['button-icon']"
            v-show="!hideNavigationButtons(hideNavigation, type)"
            ref="toggleButton"
            type="button"
            :aria-label="defaultedAriaLabels?.toggleOverlay"
            :class="actionButtonClass"
            tabindex="0"
            @click="toggle"
            @keydown="onBtnKeyDown"
        >
            <slot name="button-icon" />
        </button>
    </div>
</template>

<script lang="ts" setup>
    import { computed, nextTick, onBeforeUpdate, onMounted, onUnmounted, ref, watch } from 'vue';

    import {
        checkKeyDown,
        checkStopPropagation,
        convertType,
        findFocusableEl,
        getElWithin,
        unrefElement,
    } from '@/utils/util';
    import { useArrowNavigation, useCommon, useDefaults } from '@/composables';

    import type { AriaLabels, Config, DynamicClass, Flow, OverlayGridItem, TextInputProp } from '@/interfaces';
    import type { PickerBasePropsType } from '@/props';
    import { EventKey } from '@/constants';

    const { setSelectionGrid, buildMultiLevelMatrix, setMonthPicker } = useArrowNavigation();

    const emit = defineEmits(['selected', 'toggle', 'reset-flow', 'hover-value']);

    interface Props {
        items: OverlayGridItem[][];
        type: Flow;
        isLast: boolean;
        arrowNavigation?: boolean;
        skipButtonRef?: boolean;
        headerRefs?: (HTMLElement | null)[];
        hideNavigation?: Flow[];
        escClose?: boolean;
        useRelative?: boolean;
        height?: number | string;
        textInput?: TextInputProp;
        config?: Partial<Config>;
        noOverlayFocus?: boolean;
        focusValue?: number;
        menuWrapRef?: HTMLElement | null;
        ariaLabels?: Partial<AriaLabels>;
        overlayLabel?: string;
    }

    const props = defineProps<Props>();

    const { defaultedAriaLabels, defaultedTextInput, defaultedConfig } = useDefaults(
        props as unknown as PickerBasePropsType,
    );
    const { hideNavigationButtons } = useCommon();

    const scrollable = ref(false);
    const selectionActiveRef = ref<HTMLElement | null>(null);
    const gridWrapRef = ref(null);
    const elementRefs = ref<Array<HTMLElement | null>[]>([]);
    const hoverValue = ref();
    const toggleButton = ref<HTMLElement | null>(null);
    const containerHeight = ref(0);
    const containerRef = ref<HTMLElement | null>(null);

    onBeforeUpdate(() => {
        selectionActiveRef.value = null;
    });

    /**
     * On mounted hook, set the scroll position, if any to a selected value when opening overlay
     */
    onMounted(() => {
        nextTick().then(() => setContainerHeightAndScroll());
        if (!props.noOverlayFocus) {
            focusGrid();
        }
        handleArrowNav(true);
    });

    onUnmounted(() => handleArrowNav(false));

    const handleArrowNav = (value: boolean): void => {
        if (props.arrowNavigation) {
            if (props.headerRefs?.length) {
                setMonthPicker(value);
            } else {
                setSelectionGrid(value);
            }
        }
    };

    const focusGrid = (): void => {
        const elm = unrefElement(gridWrapRef);
        if (elm) {
            if (!defaultedTextInput.value.enabled) {
                if (selectionActiveRef.value) {
                    selectionActiveRef.value?.focus({ preventScroll: true });
                } else {
                    elm.focus({ preventScroll: true });
                }
            }

            scrollable.value = elm.clientHeight < elm.scrollHeight;
        }
    };

    // Dynamic class  for the overlay
    const dpOverlayClass = computed(
        (): DynamicClass => ({
            dp__overlay: true,
            'dp--overlay-absolute': !props.useRelative,
            'dp--overlay-relative': props.useRelative,
        }),
    );

    const dpOverlayStyle = computed(() =>
        props.useRelative ? { height: `${props.height}px`, width: `${260}px` } : undefined,
    );

    const cellClassName = computed(() => ({
        dp__overlay_col: true,
    }));

    /**
     * Dynamic class for action button
     */
    const actionButtonClass = computed(
        (): DynamicClass => ({
            dp__btn: true,
            dp__button: true,
            dp__overlay_action: true,
            dp__over_action_scroll: scrollable.value,
            dp__button_bottom: props.isLast,
        }),
    );

    const containerClass = computed(() => ({
        dp__overlay_container: true,
        dp__container_flex: props.items?.length <= 6,
        dp__container_block: props.items?.length > 6,
    }));

    watch(
        () => props.items,
        () => setContainerHeightAndScroll(false),
        { deep: true },
    );

    const setContainerHeightAndScroll = (setScroll = true) => {
        nextTick().then(() => {
            const el = unrefElement(selectionActiveRef);
            const parent = unrefElement(gridWrapRef);
            const btn = unrefElement(toggleButton);
            const container = unrefElement(containerRef);
            const toggleBtnHeight = btn ? btn.getBoundingClientRect().height : 0;
            if (parent) {
                if (!parent.getBoundingClientRect().height) {
                    containerHeight.value = defaultedConfig.value.modeHeight - toggleBtnHeight;
                } else {
                    containerHeight.value = parent.getBoundingClientRect().height - toggleBtnHeight;
                }
            }
            if (el && container && setScroll) {
                container.scrollTop =
                    el.offsetTop -
                    container.offsetTop -
                    (containerHeight.value / 2 - el.getBoundingClientRect().height) -
                    toggleBtnHeight;
            }
        });
    };

    /**
     * Handle click on cell, if value is enabled (not in filters), emit value back to parent
     */
    const onClick = (val: OverlayGridItem): void => {
        if (!val.disabled) {
            emit('selected', val.value);
        }
    };

    const toggle = () => {
        emit('toggle');
        emit('reset-flow');
    };

    const handleEsc = () => {
        if (props.escClose) {
            toggle();
        }
    };

    const assignRef = (el: any, col: OverlayGridItem, rowInd: number, colInd: number): void => {
        if (el) {
            if (col.active || col.value === props.focusValue) {
                selectionActiveRef.value = el;
            }
            if (props.arrowNavigation) {
                if (Array.isArray(elementRefs.value[rowInd])) {
                    elementRefs.value[rowInd][colInd] = el;
                } else {
                    elementRefs.value[rowInd] = [el];
                }
                buildMatrix();
            }
        }
    };

    const buildMatrix = () => {
        const refs = props.headerRefs?.length
            ? [props.headerRefs].concat(elementRefs.value)
            : elementRefs.value.concat([props.skipButtonRef ? [] : [toggleButton.value]]);

        buildMultiLevelMatrix(convertType(refs), props.headerRefs?.length ? 'monthPicker' : 'selectionGrid');
    };

    const handleArrowKey = (ev: KeyboardEvent) => {
        if (props.arrowNavigation) return;
        checkStopPropagation(ev, defaultedConfig.value, true);
    };

    const setHoverValue = (val: number) => {
        hoverValue.value = val;
        emit('hover-value', val);
    };

    const onTab = () => {
        toggle();
        if (!props.isLast) {
            const actionRow = getElWithin(props.menuWrapRef ?? null, 'action-row');
            if (actionRow) {
                const focusable = findFocusableEl(actionRow);
                focusable?.focus();
            }
        }
    };

    const onKeyDown = (ev: KeyboardEvent) => {
        switch (ev.key) {
            case EventKey.esc:
                return handleEsc();
            case EventKey.arrowLeft:
                return handleArrowKey(ev);
            case EventKey.arrowRight:
                return handleArrowKey(ev);
            case EventKey.arrowUp:
                return handleArrowKey(ev);
            case EventKey.arrowDown:
                return handleArrowKey(ev);
            default:
                return;
        }
    };

    const onBtnKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === EventKey.enter) return toggle();
        if (ev.key === EventKey.tab) return onTab();
    };

    defineExpose({ focusGrid });
</script>
