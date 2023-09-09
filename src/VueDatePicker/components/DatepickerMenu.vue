<template>
    <div
        :id="uid ? `dp-menu-${uid}` : undefined"
        tabindex="0"
        ref="dpMenuRef"
        role="dialog"
        :class="dpMenuClass"
        @mouseleave="clearHoverDate"
        @click="handleDpMenuClick"
        @keydown.esc="handleEsc"
        @keydown.left.prevent="handleArrowKey('left')"
        @keydown.up.prevent="handleArrowKey('up')"
        @keydown.down.prevent="handleArrowKey('down')"
        @keydown.right.prevent="handleArrowKey('right')"
        @keydown="checkShiftKey"
    >
        <div :class="disabledReadonlyOverlay" v-if="(disabled || readonly) && defaultedInline.enabled"></div>
        <div :class="arrowClass" v-if="!defaultedInline.enabled && !teleportCenter"></div>
        <div
            ref="innerMenuRef"
            :class="{
                dp__menu_content_wrapper: presetDates?.length || !!$slots['left-sidebar'] || !!$slots['right-sidebar'],
            }"
            :style="{ '--dp-menu-width': `${calendarWidth}px` }"
        >
            <div class="dp__sidebar_left" v-if="$slots['left-sidebar']">
                <slot name="left-sidebar" v-bind="getSidebarProps" />
            </div>
            <div class="dp--preset-dates" v-if="presetDates.length">
                <div v-for="(preset, i) in presetDates" :key="i" :style="preset.style || {}" class="dp--preset-range">
                    <template v-if="preset.slot">
                        <slot
                            :name="preset.slot"
                            :preset-date="presetDate"
                            :label="preset.label"
                            :value="preset.value"
                        />
                    </template>
                    <template v-else>
                        <div
                            role="button"
                            tabindex="0"
                            @click="presetDate(preset.value, preset.noTz)"
                            @keydown.enter.prevent="presetDate(preset.value, preset.noTz)"
                            @keydown.space.prevent="presetDate(preset.value, preset.noTz)"
                        >
                            {{ preset.label }}
                        </div>
                    </template>
                </div>
            </div>
            <div class="dp__instance_calendar" ref="calendarWrapperRef" role="document">
                <component
                    ref="dynCmpRef"
                    :is="displayComponent"
                    v-bind="baseProps"
                    :flow-step="flowStep"
                    @mount="childMount"
                    @update-flow-step="updateFlowStep"
                    @reset-flow="resetFlow"
                    @focus-menu="focusMenu"
                    @select-date="$emit('select-date')"
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
                    @update:internal-model-value="$emit('update:internal-model-value', $event)"
                >
                    <template v-for="(slot, i) in sharedSlots" #[slot]="args" :key="i">
                        <slot :name="slot" v-bind="{ ...args }" />
                    </template>
                </component>
            </div>
            <div class="dp__sidebar_right" v-if="$slots['right-sidebar']">
                <slot name="right-sidebar" v-bind="getSidebarProps" />
            </div>
            <div class="dp__action_extra" v-if="$slots['action-extra']">
                <slot name="action-extra" v-if="$slots['action-extra']" :select-current-date="selectCurrentDate" />
            </div>
        </div>
        <ActionRow
            v-if="!autoApply || keepActionRow || defaultedConfig.keepActionRow"
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
    import { checkStopPropagation, unrefElement } from '@/utils/util';
    import { AllProps } from '@/props';

    import MonthPicker from '@/components/MonthPicker/MonthPicker.vue';
    import YearPicker from '@/components/YearPicker/YearPicker.vue';
    import TimePickerSolo from '@/components/TimePicker/TimePickerSolo.vue';
    import DatePicker from '@/components/DatePicker/DatePicker.vue';

    import type {
        DynamicClass,
        MenuView,
        InternalModuleValue,
        ArrMapValues,
        MenuExposedFn,
        MonthModel,
    } from '@/interfaces';
    import type { PropType } from 'vue';

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
    ]);

    const props = defineProps({
        ...AllProps,
        shadow: { type: Boolean as PropType<boolean>, default: false },
        openOnTop: { type: Boolean as PropType<boolean>, default: false },
        internalModelValue: { type: [Date, Array] as PropType<InternalModuleValue>, default: null },
        arrMapValues: { type: Object as PropType<ArrMapValues>, default: () => ({}) },
    });

    const baseProps = computed(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { openOnTop, ...initProps } = props;
        return {
            ...initProps,
            flowStep: flowStep.value,
        };
    });

    const { setMenuFocused, setShiftKey, control } = useState();
    const slots = useSlots();
    const { defaultedTextInput, defaultedInline, defaultedConfig } = useDefaults(props);

    const calendarWrapperRef = ref(null);
    const calendarWidth = ref(0);
    const dpMenuRef = ref(null);
    const innerMenuRef = ref(null);
    const menuMount = ref(false);
    const dynCmpRef = ref<any>(null);

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
                    if (props.allowPreventDefault || defaultedConfig.value.allowPreventDefault) {
                        event.preventDefault();
                    }
                    checkStopPropagation(event, defaultedConfig.value, true);
                };
                menu.addEventListener('pointerdown', stopDefault);
                menu.addEventListener('mousedown', stopDefault);
            }
        }
    });

    onUnmounted(() => {
        window.removeEventListener('resize', getCalendarWidth);
    });

    const getCalendarWidth = (): void => {
        const el = unrefElement(innerMenuRef);
        if (el) {
            calendarWidth.value = el.getBoundingClientRect().width;
        }
    };

    const { arrowRight, arrowLeft, arrowDown, arrowUp } = useArrowNavigation();
    const { flowStep, updateFlowStep, childMount, resetFlow } = useFlow(props, emit, dynCmpRef);

    const displayComponent = computed(() => {
        if (props.monthPicker) return MonthPicker;
        if (props.yearPicker) return YearPicker;
        if (props.timePicker) return TimePickerSolo;
        return DatePicker;
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
    }));

    const dpMenuClass = computed(
        (): DynamicClass => ({
            dp__menu: true,
            dp__menu_index: !defaultedInline.value.enabled,
            dp__relative: defaultedInline.value.enabled,
            [props.menuClassName]: !!props.menuClassName,
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

    const handleArrowKey = (arrow: 'up' | 'down' | 'left' | 'right'): void => {
        if (props.arrowNavigation) {
            if (arrow === 'up') return arrowUp();
            if (arrow === 'down') return arrowDown();
            if (arrow === 'left') return arrowLeft();
            if (arrow === 'right') return arrowRight();
        } else {
            if (arrow === 'left' || arrow === 'up') {
                callChildFn('handleArrow', 'left', 0, arrow === 'up');
            } else {
                callChildFn('handleArrow', 'right', 0, arrow === 'down');
            }
        }
    };

    const checkShiftKey = (ev: KeyboardEvent) => {
        setShiftKey(ev.shiftKey);
        if (!props.disableMonthYearSelect && ev.code === 'Tab') {
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

    defineExpose({
        updateMonthYear,
        switchView,
    });
</script>
