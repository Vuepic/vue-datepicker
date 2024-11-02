<template>
    <div
        :id="uid ? `dp-menu-${uid}` : undefined"
        ref="dpMenuRef"
        :tabindex="defaultedInline.enabled ? undefined : '0'"
        :role="defaultedInline.enabled ? undefined : 'dialog'"
        :aria-label="ariaLabels?.menu"
        :class="dpMenuClass"
        :style="{ '--dp-arrow-left': arrowPos }"
        @mouseleave="clearHoverDate"
        @click="handleDpMenuClick"
        @keydown="onKeyDown"
    >
        <div v-if="((disabled || readonly) && defaultedInline.enabled) || loading" :class="disabledReadonlyOverlay">
            <div v-if="loading" class="dp--menu-load-container">
                <span class="dp--menu-loader"></span>
            </div>
        </div>
        <div v-if="$slots['menu-header']" class="dp--menu-header"><slot name="menu-header" /></div>
        <div v-if="!defaultedInline.enabled && !teleportCenter" :class="arrowClass"></div>
        <div
            ref="innerMenuRef"
            :class="{
                dp__menu_content_wrapper: presetDates?.length || !!$slots['left-sidebar'] || !!$slots['right-sidebar'],
                'dp--menu-content-wrapper-collapsed':
                    collapse && (presetDates?.length || !!$slots['left-sidebar'] || !!$slots['right-sidebar']),
            }"
            :data-dp-mobile="isMobile"
            :style="{ '--dp-menu-width': `${calendarWidth}px` }"
        >
            <div v-if="$slots['left-sidebar']" class="dp__sidebar_left">
                <slot name="left-sidebar" v-bind="getSidebarProps" />
            </div>
            <div
                v-if="presetDates.length"
                :class="{ 'dp--preset-dates-collapsed': collapse, 'dp--preset-dates': true }"
                :data-dp-mobile="isMobile"
            >
                <template v-for="(preset, i) in presetDates" :key="i">
                    <template v-if="preset.slot">
                        <slot
                            :name="preset.slot"
                            :preset-date="presetDate"
                            :label="preset.label"
                            :value="preset.value"
                        />
                    </template>
                    <template v-else>
                        <button
                            type="button"
                            :style="preset.style || {}"
                            class="dp__btn dp--preset-range"
                            :class="{ 'dp--preset-range-collapsed': collapse }"
                            :data-test-id="preset.testId ?? undefined"
                            :data-dp-mobile="isMobile"
                            @click.prevent="presetDate(preset.value, preset.noTz)"
                            @keydown="checkKeyDown($event, () => presetDate(preset.value, preset.noTz), true)"
                        >
                            {{ preset.label }}
                        </button>
                    </template>
                </template>
            </div>
            <div ref="calendarWrapperRef" class="dp__instance_calendar" role="document">
                <component
                    :is="displayComponent"
                    ref="dynCmpRef"
                    v-bind="baseProps"
                    :flow-step="flowStep"
                    @mount="childMount"
                    @update-flow-step="updateFlowStep"
                    @reset-flow="resetFlow"
                    @focus-menu="focusMenu"
                    @select-date="$emit('select-date')"
                    @date-update="$emit('date-update', $event)"
                    @tooltip-open="$emit('tooltip-open', $event)"
                    @tooltip-close="$emit('tooltip-close', $event)"
                    @auto-apply="$emit('auto-apply', $event)"
                    @range-start="$emit('range-start', $event)"
                    @range-end="$emit('range-end', $event)"
                    @invalid-fixed-range="$emit('invalid-fixed-range', $event)"
                    @time-update="$emit('time-update')"
                    @am-pm-change="$emit('am-pm-change', $event)"
                    @time-picker-open="$emit('time-picker-open', $event)"
                    @time-picker-close="onTimePickerClose"
                    @recalculate-position="recalculatePosition"
                    @update-month-year="$emit('update-month-year', $event)"
                    @auto-apply-invalid="$emit('auto-apply-invalid', $event)"
                    @invalid-date="$emit('invalid-date', $event)"
                    @overlay-toggle="$emit('overlay-toggle', $event)"
                    @update:internal-model-value="$emit('update:internal-model-value', $event)"
                >
                    <template v-for="(slot, i) in sharedSlots" #[slot]="args" :key="i">
                        <slot :name="slot" v-bind="{ ...args }" />
                    </template>
                </component>
            </div>
            <div v-if="$slots['right-sidebar']" class="dp__sidebar_right">
                <slot name="right-sidebar" v-bind="getSidebarProps" />
            </div>
            <div v-if="$slots['action-extra']" class="dp__action_extra">
                <slot v-if="$slots['action-extra']" name="action-extra" :select-current-date="selectCurrentDate" />
            </div>
        </div>
        <ActionRow
            v-if="!autoApply || defaultedConfig.keepActionRow"
            :menu-mount="menuMount"
            v-bind="baseProps"
            :calendar-width="calendarWidth"
            @close-picker="$emit('close-picker')"
            @select-date="$emit('select-date')"
            @invalid-select="$emit('invalid-select')"
            @select-now="selectCurrentDate"
        >
            <template v-for="(slot, i) in actionSlots" #[slot]="args" :key="i">
                <slot :name="slot" v-bind="{ ...args }" />
            </template>
        </ActionRow>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, onUnmounted, ref, useSlots } from 'vue';

    import ActionRow from '@/components/ActionRow.vue';

    import { mapSlots, useArrowNavigation, useState, useFlow, useDefaults } from '@/composables';
    import { checkKeyDown, checkStopPropagation, getElWithin, unrefElement } from '@/utils/util';
    import { AllProps } from '@/props';

    import MonthPicker from '@/components/MonthPicker/MonthPicker.vue';
    import YearPicker from '@/components/YearPicker/YearPicker.vue';
    import TimePickerSolo from '@/components/TimePicker/TimePickerSolo.vue';
    import DatePicker from '@/components/DatePicker/DatePicker.vue';
    import QuarterPicker from '@/components/QuarterPicker/QuarterPicker.vue';

    import type { DynamicClass, MenuView, InternalModuleValue, MenuExposedFn, MonthModel } from '@/interfaces';
    import type { PropType } from 'vue';
    import { ArrowDirection, EventKey } from '@/constants';
    import { useResponsive } from '@/composables/responsive';

    defineOptions({
        compatConfig: {
            MODE: 3,
        },
    });

    const emit = defineEmits([
        'close-picker',
        'select-date',
        'auto-apply',
        'time-update',
        'flow-step',
        'update-month-year',
        'invalid-select',
        'update:internal-model-value',
        'recalculate-position',
        'invalid-fixed-range',
        'tooltip-open',
        'tooltip-close',
        'time-picker-open',
        'time-picker-close',
        'am-pm-change',
        'range-start',
        'range-end',
        'auto-apply-invalid',
        'date-update',
        'invalid-date',
        'overlay-toggle',
        'menu-blur',
    ]);

    const props = defineProps({
        ...AllProps,
        shadow: { type: Boolean as PropType<boolean>, default: false },
        openOnTop: { type: Boolean as PropType<boolean>, default: false },
        internalModelValue: { type: [Date, Array] as PropType<InternalModuleValue>, default: null },
        noOverlayFocus: { type: Boolean as PropType<boolean>, default: false },
        collapse: { type: Boolean as PropType<boolean>, default: false },
        getInputRect: { type: Function as PropType<() => DOMRect>, default: () => ({}) },
        isTextInputDate: { type: Boolean as PropType<boolean>, default: false },
    });

    const dpMenuRef = ref<HTMLElement | null>(null);

    const baseProps = computed(() => {
        const { openOnTop: _, ...initProps } = props;
        return {
            ...initProps,
            isMobile: isMobile.value,
            flowStep: flowStep.value,
            menuWrapRef: dpMenuRef.value,
        };
    });

    const { setMenuFocused, setShiftKey, control } = useState();
    const slots = useSlots();
    const { defaultedTextInput, defaultedInline, defaultedConfig, defaultedUI } = useDefaults(props);
    const { isMobile } = useResponsive(defaultedConfig);

    const calendarWrapperRef = ref(null);
    const calendarWidth = ref(0);
    const innerMenuRef = ref(null);
    const menuMount = ref(false);
    const dynCmpRef = ref<any>(null);
    const isMenuActive = ref(false);

    onMounted(() => {
        if (!props.shadow) {
            menuMount.value = true;
            getCalendarWidth();
            window.addEventListener('resize', getCalendarWidth);

            const menu = unrefElement(dpMenuRef);
            if (menu && !defaultedTextInput.value.enabled && !defaultedInline.value.enabled) {
                setMenuFocused(true);
                focusMenu();
            }
            if (menu) {
                const stopDefault = (event: Event) => {
                    isMenuActive.value = true;
                    if (defaultedConfig.value.allowPreventDefault) {
                        event.preventDefault();
                    }
                    checkStopPropagation(event, defaultedConfig.value, true);
                };
                menu.addEventListener('pointerdown', stopDefault);
                menu.addEventListener('mousedown', stopDefault);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', getCalendarWidth);
        document.addEventListener('mousedown', handleClickOutside);
    });

    const getCalendarWidth = (): void => {
        const el = unrefElement(innerMenuRef);
        if (el) {
            calendarWidth.value = el.getBoundingClientRect().width;
        }
    };

    const { arrowRight, arrowLeft, arrowDown, arrowUp } = useArrowNavigation();
    const { flowStep, updateFlowStep, childMount, resetFlow, handleFlow } = useFlow(props, emit, dynCmpRef);

    const displayComponent = computed(() => {
        if (props.monthPicker) return MonthPicker;
        if (props.yearPicker) return YearPicker;
        if (props.timePicker) return TimePickerSolo;
        if (props.quarterPicker) return QuarterPicker;
        return DatePicker;
    });

    const arrowPos = computed(() => {
        if (defaultedConfig.value.arrowLeft) return defaultedConfig.value.arrowLeft;
        const menuRect = dpMenuRef.value?.getBoundingClientRect();
        const inputRect = props.getInputRect();
        if (inputRect?.width < calendarWidth?.value && inputRect?.left <= (menuRect?.left ?? 0)) {
            return `${inputRect?.width / 2}px`;
        } else if (inputRect?.right >= (menuRect?.right ?? 0) && inputRect?.width < calendarWidth?.value) {
            return `${calendarWidth?.value - inputRect?.width / 2}px`;
        }
        return '50%';
    });

    const focusMenu = (): void => {
        const menu = unrefElement(dpMenuRef);
        if (menu) {
            menu.focus({ preventScroll: true });
        }
    };

    const getSidebarProps = computed(() => dynCmpRef.value?.getSidebarProps() || {});

    const recalculatePosition = () => {
        if (props.openOnTop) {
            emit('recalculate-position');
        }
    };

    const actionSlots = mapSlots(slots, 'action');

    const sharedSlots = computed(() => {
        if (props.monthPicker || props.yearPicker) return mapSlots(slots, 'monthYear');
        if (props.timePicker) return mapSlots(slots, 'timePicker');
        return mapSlots(slots, 'shared');
    });

    const arrowClass = computed(() => (!props.openOnTop ? 'dp__arrow_top' : 'dp__arrow_bottom'));

    const disabledReadonlyOverlay = computed(() => ({
        dp__menu_disabled: props.disabled,
        dp__menu_readonly: props.readonly,
        'dp-menu-loading': props.loading,
    }));

    const dpMenuClass = computed(
        (): DynamicClass => ({
            dp__menu: true,
            dp__menu_index: !defaultedInline.value.enabled,
            dp__relative: defaultedInline.value.enabled,
            ...(defaultedUI.value.menu ?? {}),
        }),
    );

    const handleDpMenuClick = (ev: Event) => {
        checkStopPropagation(ev, defaultedConfig.value, true);
    };

    const handleEsc = (): void => {
        if (props.escClose) {
            emit('close-picker');
        }
    };

    const handleArrowKey = (arrow: ArrowDirection): void => {
        if (props.arrowNavigation) {
            if (arrow === ArrowDirection.up) return arrowUp();
            if (arrow === ArrowDirection.down) return arrowDown();
            if (arrow === ArrowDirection.left) return arrowLeft();
            if (arrow === ArrowDirection.right) return arrowRight();
        } else if (arrow === ArrowDirection.left || arrow === ArrowDirection.up) {
            callChildFn('handleArrow', ArrowDirection.left, 0, arrow === ArrowDirection.up);
        } else {
            callChildFn('handleArrow', ArrowDirection.right, 0, arrow === ArrowDirection.down);
        }
    };

    const checkShiftKey = (ev: KeyboardEvent) => {
        setShiftKey(ev.shiftKey);
        if (!props.disableMonthYearSelect && ev.code === EventKey.tab) {
            if ((ev.target as HTMLElement).classList.contains('dp__menu') && control.value.shiftKeyInMenu) {
                ev.preventDefault();
                checkStopPropagation(ev, defaultedConfig.value, true);
                emit('close-picker');
            }
        }
    };

    const onTimePickerClose = () => {
        focusMenu();
        emit('time-picker-close');
    };

    const closeOverlays = (instance: number) => {
        dynCmpRef.value?.toggleTimePicker(false, false);
        dynCmpRef.value?.toggleMonthPicker(false, false, instance);
        dynCmpRef.value?.toggleYearPicker(false, false, instance);
    };

    const switchView = (view: MenuView, instance = 0) => {
        if (view === 'month') return dynCmpRef.value?.toggleMonthPicker(false, true, instance);
        if (view === 'year') return dynCmpRef.value?.toggleYearPicker(false, true, instance);
        if (view === 'time') return dynCmpRef.value?.toggleTimePicker(true, false);
        return closeOverlays(instance);
    };

    const callChildFn = (fn: MenuExposedFn, ...args: any[]) => {
        if (dynCmpRef.value?.[fn]) {
            dynCmpRef.value?.[fn](...args);
        }
    };

    const selectCurrentDate = () => {
        callChildFn('selectCurrentDate');
    };

    const presetDate = (value: Date[] | string[] | string | Date, noTz?: boolean) => {
        callChildFn('presetDate', value, noTz);
    };

    const clearHoverDate = () => {
        callChildFn('clearHoverDate');
    };

    const updateMonthYear = (instance: number, value: MonthModel) => {
        callChildFn('updateMonthYear', instance, value);
    };

    const onArrowKey = (ev: KeyboardEvent, arrow: ArrowDirection) => {
        ev.preventDefault();
        handleArrowKey(arrow);
    };

    const onKeyDown = (ev: KeyboardEvent) => {
        checkShiftKey(ev);

        if (ev.key === EventKey.home || ev.key === EventKey.end) {
            return callChildFn(
                'selectWeekDate',
                ev.key === EventKey.home,
                (ev.target as HTMLElement).getAttribute('id'),
            );
        }
        if (ev.key === EventKey.pageUp || ev.key === EventKey.pageDown) {
            if (ev.shiftKey) {
                callChildFn('changeYear', ev.key === EventKey.pageUp);
                getElWithin(dpMenuRef.value, 'overlay-year')?.focus();
            } else {
                callChildFn('changeMonth', ev.key === EventKey.pageUp);
                getElWithin(dpMenuRef.value, ev.key === EventKey.pageUp ? 'action-prev' : 'action-next')?.focus();
            }
            if ((ev.target as HTMLElement).getAttribute('id')) {
                dpMenuRef.value?.focus({ preventScroll: true });
            }
        }

        switch (ev.key) {
            case EventKey.esc:
                return handleEsc();
            case EventKey.arrowLeft:
                return onArrowKey(ev, ArrowDirection.left);
            case EventKey.arrowRight:
                return onArrowKey(ev, ArrowDirection.right);
            case EventKey.arrowUp:
                return onArrowKey(ev, ArrowDirection.up);
            case EventKey.arrowDown:
                return onArrowKey(ev, ArrowDirection.down);
            default:
                return;
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (defaultedInline.value.enabled && !defaultedInline.value.input) {
            const activeClick = dpMenuRef.value?.contains(event.target as HTMLElement);
            if (!activeClick && isMenuActive.value) {
                isMenuActive.value = false;
                emit('menu-blur');
            }
        }
    };

    defineExpose({
        updateMonthYear,
        switchView,
        handleFlow,
    });
</script>
