<template>
    <div
        ref="gridWrapRef"
        :class="dpOverlayClass"
        :style="dpOverlayStyle"
        role="dialog"
        tabindex="0"
        @keydown.esc.prevent="handleEsc"
        @keydown.left.prevent="handleArrowKey($event)"
        @keydown.up.prevent="handleArrowKey($event)"
        @keydown.down.prevent="handleArrowKey($event)"
        @keydown.right.prevent="handleArrowKey($event)"
    >
        <div :class="containerClass" ref="containerRef" role="grid" :style="{ height: `${containerHeight}px` }">
            <div class="dp__selection_grid_header"><slot name="header"></slot></div>
            <template v-if="$slots.overlay">
                <slot name="overlay" />
            </template>
            <template v-else>
                <div
                    class="dp__overlay_row"
                    :class="{ dp__flex_row: items.length >= 3 }"
                    v-for="(row, i) in items"
                    :key="i"
                    role="row"
                >
                    <div
                        v-for="(col, ind) in row"
                        role="gridcell"
                        :class="cellClassName"
                        :key="col.value"
                        :aria-selected="col.active"
                        :aria-disabled="col.disabled || undefined"
                        :ref="(el) => assignRef(el, col, i, ind)"
                        tabindex="0"
                        :data-test="col.text"
                        @click="onClick(col)"
                        @keydown.enter.prevent="onClick(col)"
                        @keydown.space.prevent="onClick(col)"
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
            type="button"
            :aria-label="defaultedAriaLabels?.toggleOverlay"
            :class="actionButtonClass"
            tabindex="0"
            ref="toggleButton"
            @click="toggle"
            @keydown.enter="toggle"
            @keydown.tab="toggle"
        >
            <slot name="button-icon" />
        </button>
    </div>
</template>

<script lang="ts" setup>
    import { computed, nextTick, onBeforeUpdate, onMounted, onUnmounted, ref } from 'vue';

    import { checkStopPropagation, convertType, unrefElement } from '@/utils/util';
    import { useArrowNavigation, useCommon, useDefaults } from '@/composables';

    import type { Config, DynamicClass, Flow, OverlayGridItem, TextInputProp } from '@/interfaces';
    import type { PickerBasePropsType } from '@/props';

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
        nextTick().then(() => setScrollPosition());
        focusGrid();
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

    /**
     * Set scroll position in overlay based on active selection
     */
    const setScrollPosition = (): void => {
        nextTick().then(() => {
            const el = unrefElement(selectionActiveRef);
            const parent = unrefElement(gridWrapRef);
            const btn = unrefElement(toggleButton);
            const container = unrefElement(containerRef);
            const toggleBtnHeight = btn ? btn.getBoundingClientRect().height : 0;
            if (parent) {
                containerHeight.value = parent.getBoundingClientRect().height - toggleBtnHeight;
            }
            if (el && container) {
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
            if (col.active) {
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

    defineExpose({ focusGrid });
</script>
