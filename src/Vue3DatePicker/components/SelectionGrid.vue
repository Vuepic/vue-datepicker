<template>
    <div ref="gridWrapRef" :class="dpOverlayClass" role="dialog" tabindex="0">
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
                    @mouseover="hoverValue = col.value"
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
                @click="toggle"
                @keydown.enter="toggle"
            >
                <slot name="button-icon" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, inject, onBeforeUpdate, onMounted, PropType, ref } from 'vue';
    import { setMonth, setYear } from 'date-fns';

    import { IDefaultSelect, DynamicClass } from '../interfaces';
    import { getKey, unrefElement } from '../utils/util';
    import { isDateBetween, isDateEqual } from '../utils/date-utils';

    const emit = defineEmits(['update:modelValue', 'selected', 'toggle', 'reset-flow']);

    const props = defineProps({
        items: { type: Array as PropType<IDefaultSelect[][]>, default: () => [] },
        modelValue: { type: [String, Number] as PropType<string | number>, default: null },
        multiModelValue: { type: Array as PropType<Date[]>, default: () => [] },
        disabledValues: { type: Array as PropType<number[]>, default: () => [] },
        minValue: { type: [Number, String] as PropType<number | string>, default: null },
        maxValue: { type: [Number, String] as PropType<number | string>, default: null },
        year: { type: Number as PropType<number>, default: 0 },
        skipActive: { type: Boolean as PropType<boolean>, default: false },
    });

    const scrollable = ref(false);
    const selectionActiveRef = ref(null);
    const gridWrapRef = ref(null);
    const autoApply = inject('autoApply', false);
    const textInput = inject('textInput', ref(false));
    const hoverValue = ref();

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
            if (!textInput.value) {
                elm.focus({ preventScroll: true });
            }
            scrollable.value = elm.clientHeight < elm.scrollHeight;
        }
    });

    // Dynamic class  for the overlay
    const dpOverlayClass = computed(
        (): DynamicClass => ({
            dp__overlay: true,
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
                    const disabled =
                        props.disabledValues.some((val) => val === itemVal.value) || checkMinMaxValue(itemVal.value);
                    const active = props.multiModelValue?.length
                        ? props.multiModelValue?.some((value) =>
                              isDateEqual(value, setYear(setMonth(new Date(), itemVal.value), props.year)),
                          )
                        : props.skipActive
                        ? false
                        : itemVal.value === props.modelValue;

                    return {
                        ...itemVal,
                        className: {
                            dp__overlay_cell_active: active,
                            dp__overlay_cell: !active,
                            dp__overlay_cell_disabled: disabled,
                            dp__overlay_cell_active_disabled: disabled && active,
                            dp__overlay_cell_pad: true,
                            dp__cell_in_between: props.multiModelValue?.length ? rangeActive(itemVal.value) : false,
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

    const rangeActive = (value: number): boolean => {
        return isDateBetween(
            props.multiModelValue,
            setYear(setMonth(new Date(), hoverValue.value || 0), props.year),
            setYear(setMonth(new Date(), value), props.year),
        );
    };

    const toggle = () => {
        emit('toggle');
        emit('reset-flow');
    };
</script>
