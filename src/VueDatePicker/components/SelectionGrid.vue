<template>
    <div ref="gridWrapRef" :class="dpOverlayClass" role="dialog" tabindex="0" @keydown.esc="handleEsc">
        <div :class="containerClass" role="grid">
            <div class="dp__selection_grid_header"><slot name="header"></slot></div>
            <div class="dp__overlay_row" v-for="(row, i) in mappedItems" :key="getKey(i)" role="row">
                <div
                    v-for="(col, ind) in row"
                    role="gridcell"
                    :class="cellClassName"
                    :key="col.value"
                    :aria-selected="col.value === modelValue && !disabledValues.includes(col.value)"
                    :aria-disabled="col.className.dp__overlay_cell_disabled"
                    :ref="(el) => assignRef(el, col, i, ind)"
                    tabindex="0"
                    @click="onClick(col.value)"
                    @keydown.enter="onClick(col.value)"
                    @keydown.space="onClick(col.value)"
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
                v-show="!hideNavigation(type)"
                role="button"
                :aria-label="ariaLabels.toggleOverlay"
                :class="actionButtonClass"
                tabindex="0"
                ref="toggleButton"
                @click="toggle"
                @keydown.enter="toggle"
            >
                <slot name="button-icon" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, inject, nextTick, onBeforeUpdate, onMounted, onUnmounted, ref } from 'vue';
    import type { PropType, ComputedRef, Ref } from 'vue';
    import { setMonth, setYear } from 'date-fns';

    import type { IDefaultSelect, DynamicClass, AreaLabels } from '@/interfaces';

    import { getKey, unrefElement } from '@/utils/util';
    import { isDateBetween, isDateEqual } from '@/utils/date-utils';
    import { ariaLabelsKey, arrowNavigationKey, autoApplyKey, hideNavigationKey, textInputKey } from '@/utils/props';
    import { useArrowNavigation } from '@/components/composition/arrow-navigate';
    import { Flow } from '@/interfaces';

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
        headerRefs: { type: Array as PropType<HTMLElement[]>, default: () => [] },
        skipButtonRef: { type: Boolean as PropType<boolean>, default: false },
        monthPicker: { type: Boolean as PropType<boolean>, default: false },
        yearPicker: { type: Boolean as PropType<boolean>, default: false },
        escClose: { type: Boolean as PropType<boolean>, default: true },
        type: { type: String as PropType<Flow>, default: null },
    });

    const scrollable = ref(false);
    const selectionActiveRef = ref<HTMLElement | null>(null);
    const gridWrapRef = ref(null);
    const elementRefs = ref<HTMLElement[][]>([]);
    const autoApply = inject(autoApplyKey, false);
    const textInput = inject(textInputKey, ref(false));
    const ariaLabels = inject<ComputedRef<AreaLabels>>(ariaLabelsKey);
    const arrowNavigation = inject<Ref<boolean>>(arrowNavigationKey);
    const hoverValue = ref();
    const toggleButton = ref<HTMLElement | null>();
    const hideNavigation = inject(hideNavigationKey);

    const { setSelectionGrid, buildMultiLevelMatrix, setMonthPicker } = useArrowNavigation();

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
        if (arrowNavigation?.value) {
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
            if (!textInput.value) {
                elm.focus({ preventScroll: true });
            }
            scrollable.value = elm.clientHeight < elm.scrollHeight;
        }
    };

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
                              isDateEqual(
                                  value,
                                  setYear(
                                      props.monthPicker ? setMonth(new Date(), itemVal.value) : new Date(),
                                      props.monthPicker ? props.year : itemVal.value,
                                  ),
                              ),
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

    const containerClass = computed(() => ({
        dp__overlay_container: true,
        dp__container_flex: props.items?.length <= 6,
        dp__container_block: props.items?.length > 6,
    }));

    /**
     * Check if value is within min-max range
     */
    const checkMinMaxValue = (value: number | string): boolean => {
        const hasMax = props.maxValue || props.maxValue === 0;
        const hasMin = props.minValue || props.minValue === 0;
        if (!hasMax && !hasMin) return false;

        if (hasMax && hasMin) {
            return +value > +props.maxValue || +value < +props.minValue;
        }
        if (hasMax) {
            return +value > +props.maxValue;
        }

        if (hasMin) {
            return +value < +props.minValue;
        }

        return false;
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
        if (!props.disabledValues.some((value) => value === val) && !checkMinMaxValue(val)) {
            emit('update:modelValue', val);
            emit('selected');
        }
    };

    const rangeActive = (value: number): boolean => {
        const yearValue = props.monthPicker ? props.year : value;
        return isDateBetween(
            props.multiModelValue,
            setYear(
                props.monthPicker ? setMonth(new Date(), hoverValue.value || 0) : new Date(),
                props.monthPicker ? yearValue : hoverValue.value || yearValue,
            ),
            setYear(props.monthPicker ? setMonth(new Date(), value) : new Date(), yearValue),
        );
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

    const assignRef = (el: HTMLElement, col: IDefaultSelect, rowInd: number, colInd: number): void => {
        if (el) {
            if (col.value === +props.modelValue && !props.disabledValues.includes(col.value)) {
                selectionActiveRef.value = el;
            }
            if (arrowNavigation?.value) {
                if (Array.isArray(elementRefs.value[rowInd])) {
                    elementRefs.value[rowInd][colInd] = el;
                } else {
                    elementRefs.value[rowInd] = [el];
                }
                const refs = props.headerRefs?.length
                    ? [props.headerRefs].concat(elementRefs.value)
                    : elementRefs.value.concat([props.skipButtonRef ? [] : [toggleButton.value as HTMLElement]]);

                buildMultiLevelMatrix(refs, props.headerRefs?.length ? 'monthPicker' : 'selectionGrid');
            }
        }
    };

    defineExpose({ focusGrid });
</script>
