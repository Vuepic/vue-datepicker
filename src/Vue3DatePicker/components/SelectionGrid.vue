<template>
    <div ref="gridWrapRef" :class="dpOverlayClass" role="dialog" tabindex="0" :style="overlayStyle">
        <div class="dp__overlay_container" role="grid">
            <div class="dp__selection_grid_header"><slot name="header"></slot></div>
            <div class="dp__overlay_row" v-for="(row, i) in mappedItems" :key="getKey(i)" role="row">
                <div
                    v-for="col in row"
                    role="gridcell"
                    :class="cellClassName"
                    :key="col.value"
                    :aria-selected="col.value === modelValue && !disabledValues.includes(col.value)"
                    :aria-disabled="col.className.dp__overlay_cell_disabled"
                    :ref="
                        (el) => {
                            if (col.value === modelValue && !disabledValues.includes(col.value))
                                selectionActiveRef = el;
                        }
                    "
                    tabindex="0"
                    @click="onClick(col.value)"
                    @keydown.enter="onClick(col.value)"
                >
                    <div :class="col.className">
                        <slot v-if="$slots.item" name="item" :item="col" />
                        <template v-if="!$slots.item">{{ col.text }}</template>
                    </div>
                </div>
            </div>
            <div
                v-if="$slots['button-icon']"
                role="button"
                aria-label="Toggle overlay"
                :class="actionButtonClass"
                tabindex="0"
                @click="$emit('toggle')"
                @keydown.enter="$emit('toggle')"
            >
                <slot name="button-icon" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, inject, onBeforeUpdate, onMounted, PropType, ref } from 'vue';

    import { IDefaultSelect, DynamicClass, MaybeElementRef } from '../interfaces';
    import { getKey, unrefElement } from '../utils/util';

    const emit = defineEmits(['update:modelValue', 'selected', 'toggle']);

    const props = defineProps({
        items: { type: Array as PropType<IDefaultSelect[][]>, default: () => [] },
        modelValue: { type: [String, Number] as PropType<string | number>, default: null },
        disabledValues: { type: Array as PropType<number[]>, default: () => [] },
        minValue: { type: [Number, String] as PropType<number | string>, default: null },
        maxValue: { type: [Number, String] as PropType<number | string>, default: null },
        timePickerRef: { type: Object as PropType<MaybeElementRef>, default: null },
    });

    const scrollable = ref(false);
    const selectionActiveRef = ref(null);
    const gridWrapRef = ref(null);
    const autoApply = inject('autoApply', false);

    onBeforeUpdate(() => {
        selectionActiveRef.value = null;
    });

    /**
     * On mounted hook, set the scroll position, if any to a selected value when opening overlay
     */
    onMounted(() => {
        setScrollPosition();
        const elm = unrefElement(gridWrapRef);
        if (elm) {
            elm.focus();
            scrollable.value = elm.clientHeight < elm.scrollHeight;
        }
    });

    const overlayStyle = computed(() => {
        if (props.timePickerRef) {
            const el = unrefElement(props.timePickerRef);
            if (el) {
                const { height } = el.getBoundingClientRect();
                return { bottom: `-${height}px` };
            }
        }
        return { bottom: '0px' };
    });

    // Dynamic class  for the overlay
    const dpOverlayClass = computed(
        (): DynamicClass => ({
            dp__overlay: true,
            dp__overlay_full: !props.timePickerRef,
        }),
    );

    const cellClassName = computed(() => ({
        dp__overlay_col: true,
    }));

    /**
     * Simple map for building a grid, just add dynamic classes for each cell
     */
    const mappedItems = computed(() => {
        return props.items.map((item) => {
            return item
                .filter((exists) => exists)
                .map((itemVal) => {
                    return {
                        ...itemVal,
                        className: {
                            dp__overlay_cell_active: itemVal.value === props.modelValue,
                            dp__overlay_cell: itemVal.value !== props.modelValue,
                            dp__overlay_cell_disabled:
                                props.disabledValues.some((val) => val === itemVal.value) ||
                                checkMinMaxValue(itemVal.value),
                            dp__overlay_cell_pad: true,
                        },
                    };
                });
        });
    });

    /**
     * Dynamic class for action button
     */
    const actionButtonClass = computed(
        (): DynamicClass => ({
            dp__button: true,
            dp__overlay_action: true,
            dp__over_action_scroll: scrollable.value,
            dp__button_bottom: autoApply,
        }),
    );

    /**
     * Check if value is within min-max range
     */
    const checkMinMaxValue = (value: number | string): boolean => {
        const isAboveMax = props.maxValue ? +value > +props.maxValue : false;
        const isBellowMin = props.minValue ? +value < +props.minValue : false;

        return isAboveMax || isBellowMin;
    };

    /**
     * Set scroll position in overlay based on active selection
     */
    const setScrollPosition = (): void => {
        const el = unrefElement(selectionActiveRef);
        if (el) {
            const parent = unrefElement(gridWrapRef);
            if (parent) {
                parent.scrollTop =
                    el.offsetTop -
                    parent.offsetTop -
                    (parent.getBoundingClientRect().height / 2 - el.getBoundingClientRect().height);
            }
        }
    };

    /**
     * Handle click on cell, if value is enabled (not in filters), emit value back to parent
     */
    const onClick = (val: string | number): void => {
        if (
            !props.disabledValues.some((value) => value === val) &&
            (props.minValue ? +props.minValue <= val : true) &&
            (props.maxValue ? +props.maxValue >= val : true)
        ) {
            emit('update:modelValue', val);
            emit('selected');
        }
    };
</script>
