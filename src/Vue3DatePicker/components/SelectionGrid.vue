<template>
    <div class="dp__overlay" :id="id" :class="dpOverlayClass">
        <div class="dp__overlay_container">
            <div class="dp__selection_grid_header"><slot name="header"></slot></div>
            <div class="dp__overlay_row" v-for="(row, i) in mappedItems" :key="useKey(i)">
                <div
                    class="dp__overlay_col"
                    v-for="col in row"
                    :key="col.value"
                    @click="onClick(col.value)"
                    :id="col.value === modelValue && !disabledValues.includes(col.value) ? 'selection-active' : null"
                >
                    <div :class="col.className">
                        {{ col.text }}
                    </div>
                </div>
            </div>
            <div :class="actionButtonClass" @click="$emit('toggle')" v-if="$slots['button-icon']">
                <slot name="button-icon" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, PropType, ref } from 'vue';
    import { SelectionGridProps, IDefaultSelect, DynamicClass } from '../interfaces';
    import { useScrollPosition, useKey } from '../utils/hooks';

    export default defineComponent({
        name: 'SelectionGrid',
        emits: ['update:modelValue', 'selected', 'toggle'],
        props: {
            items: { type: Array as PropType<IDefaultSelect[][]>, default: () => [] },
            modelValue: { type: [String, Number] as PropType<string | number>, default: null },
            id: { type: String as PropType<string>, default: 'dp__overlay' },
            disabledValues: { type: Array as PropType<number[]>, default: () => [] },
            minValue: { type: [Number, String] as PropType<number | string>, default: null },
            maxValue: { type: [Number, String] as PropType<number | string>, default: null },
            fixedMode: { type: Boolean as PropType<boolean>, default: true },
        },
        setup(props: SelectionGridProps, { emit }) {
            const scrollable = ref(false);

            /**
             * Handle click on cell, if value is enabled (not in filters), emit value back to parent
             */
            const onClick = (val: string | number): void => {
                if (
                    !props.disabledValues.some((value) => value === val) &&
                    (props.minValue ? +props.minValue < val : true) &&
                    (props.maxValue ? +props.maxValue > val : true)
                ) {
                    emit('update:modelValue', val);
                    emit('selected');
                }
            };

            /**
             * On mounted hook, set the scroll position, if any to a selected value when opening overlay
             */
            onMounted(() => {
                useScrollPosition(props.id, 'selection-active');
                const elm = document.getElementById(props.id);
                if (elm) {
                    scrollable.value = elm.clientHeight < elm.scrollHeight;
                }
            });

            const dpOverlayClass = computed(
                (): DynamicClass => ({
                    dp__overlay: true,
                    dp__overlay_fixed: props.fixedMode,
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
                }),
            );

            return {
                useKey,
                onClick,
                actionButtonClass,
                mappedItems,
                dpOverlayClass,
            };
        },
    });
</script>
