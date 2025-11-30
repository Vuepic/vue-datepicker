<template>
    <div
        ref="grid-wrap"
        :class="dpOverlayClass"
        :style="dpOverlayStyle"
        :role="useRelative ? undefined : 'dialog'"
        :aria-label="overlayLabel"
        :tabindex="useRelative ? undefined : '0'"
        @keydown="onKeyDown"
        @click.prevent
    >
        <div
            ref="overlay-container"
            :class="containerClass"
            :style="{ '--dp-overlay-height': `${containerHeight}px` }"
            role="grid"
        >
            <div class="dp__selection_grid_header"><slot name="header"></slot></div>
            <slot name="overlay">
                <div
                    v-for="(row, i) in items"
                    :key="i"
                    class="dp__overlay_row"
                    role="row"
                    :class="{ dp__flex_row: items.length >= 3 }"
                >
                    <div
                        v-for="col in row"
                        :key="col.value"
                        role="gridcell"
                        :class="cellClassName"
                        :aria-selected="col.active || undefined"
                        :aria-disabled="col.disabled || undefined"
                        :data-dp-action-element="level ?? 1"
                        :data-dp-element-active="col.active ? (level ?? 1) : undefined"
                        tabindex="0"
                        :data-test-id="col.text"
                        @click.prevent="onClick(col)"
                        @keydown="checkKeyDown($event, () => onClick(col), true)"
                        @mouseover="setHoverValue(col.value)"
                    >
                        <div :class="col.className">
                            <slot name="item" :item="col">
                                {{ col.text }}
                            </slot>
                        </div>
                    </div>
                </div>
            </slot>
        </div>
        <button
            v-if="$slots['button-icon']"
            v-show="!hideNavigationButtons(type)"
            ref="toggle-button"
            type="button"
            :aria-label="ariaLabels?.toggleOverlay"
            :class="actionButtonClass"
            tabindex="0"
            :data-dp-action-element="level ?? 1"
            @click="toggle"
            @keydown="onBtnKeyDown"
        >
            <slot name="button-icon" />
        </button>
    </div>
</template>

<script lang="ts" setup>
    import { computed, nextTick, onBeforeUpdate, onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue';
    import { unrefElement } from '@vueuse/core';

    import { useContext, useHelperFns } from '@/composables';
    import { useNavigationDisplay } from '@/components/shared/useNavigationDisplay.ts';

    import { EventKey } from '@/constants';
    import type { DynamicClass, OverlayGridItem, PickerSection } from '@/types';

    const emit = defineEmits<{
        selected: [value: number];
        toggle: [];
        'reset-flow': [];
        'hover-value': [value: number];
    }>();

    const props = defineProps<{
        items: OverlayGridItem[][];
        type: PickerSection;
        useRelative?: boolean;
        height?: number | string;
        overlayLabel?: string;
        isLast: boolean;
        level?: 0 | 1 | 2;
    }>();

    const {
        setState,
        defaults: { ariaLabels, config },
    } = useContext();
    const { hideNavigationButtons } = useNavigationDisplay();
    const { handleEventPropagation, checkKeyDown } = useHelperFns();

    const toggleButton = useTemplateRef('toggle-button');
    const containerRef = useTemplateRef('overlay-container');
    const gridWrapRef = useTemplateRef('grid-wrap');

    const scrollable = ref(false);
    const selectionActiveRef = ref<HTMLElement | null>(null);
    const hoverValue = ref();
    const containerHeight = ref(0);

    onBeforeUpdate(() => {
        selectionActiveRef.value = null;
    });

    onMounted(async () => {
        await nextTick();
        setContainerHeightAndScroll();
        setState('arrowNavigationLevel', props.level ?? 1);
    });

    onUnmounted(() => {
        setState('arrowNavigationLevel', (props.level ?? 1) - 1);
    });

    // Dynamic class  for the overlay
    const dpOverlayClass = computed(
        (): DynamicClass => ({
            dp__overlay: true,
            'dp--overlay-absolute': !props.useRelative,
            'dp--overlay-relative': props.useRelative,
        }),
    );

    const dpOverlayStyle = computed(() =>
        props.useRelative ? { height: `${props.height}px`, width: `var(--dp-menu-min-width)` } : undefined,
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
            const el = document.querySelector<HTMLElement>(`[data-dp-element-active="${props.level ?? 1}"]`);
            const parent = unrefElement(gridWrapRef);
            const btn = unrefElement(toggleButton);
            const container = unrefElement(containerRef);
            const toggleBtnHeight = btn ? btn.getBoundingClientRect().height : 0;
            if (parent) {
                if (parent.getBoundingClientRect().height) {
                    containerHeight.value = parent.getBoundingClientRect().height - toggleBtnHeight;
                } else {
                    containerHeight.value = config.value.modeHeight - toggleBtnHeight;
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

    const handleEsc = (ev: KeyboardEvent) => {
        if (config.value.escClose) {
            toggle();
            handleEventPropagation(ev, config.value);
        }
    };

    const setHoverValue = (val: number) => {
        hoverValue.value = val;
        emit('hover-value', val);
    };

    const onKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === EventKey.esc) return handleEsc(ev);
        return;
    };

    const onBtnKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === EventKey.enter) return toggle();
    };
</script>
