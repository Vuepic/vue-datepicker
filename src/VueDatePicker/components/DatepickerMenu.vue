<template>
    <div
        :id="rootProps.menuId"
        ref="dp-menu"
        :tabindex="inline.enabled ? undefined : '0'"
        :role="inline.enabled ? undefined : 'dialog'"
        :aria-label="ariaLabels?.menu"
        :class="dpMenuClass"
        @mouseleave="clearHoverDate"
        @click="handleDpMenuClick"
        @keydown="onKeyDown"
    >
        <div
            v-if="((rootProps.disabled || rootProps.readonly) && inline.enabled) || rootProps.loading"
            :class="disabledReadonlyOverlay"
        >
            <div v-if="rootProps.loading" class="dp--menu-load-container">
                <span class="dp--menu-loader"></span>
            </div>
        </div>
        <div v-if="$slots['menu-header']" class="dp--menu-header"><slot name="menu-header" /></div>
        <slot name="arrow" />
        <div
            ref="inner-menu"
            :class="{
                dp__menu_content_wrapper:
                    rootProps.presetDates?.length || !!$slots['left-sidebar'] || !!$slots['right-sidebar'],
                'dp--menu-content-wrapper-collapsed':
                    collapse &&
                    (rootProps.presetDates?.length || !!$slots['left-sidebar'] || !!$slots['right-sidebar']),
            }"
            :data-dp-mobile="isMobile"
            :style="{ '--dp-menu-width': `${calendarWidth}px` }"
        >
            <div v-if="$slots['left-sidebar']" class="dp__sidebar_left">
                <slot name="left-sidebar" v-bind="getSidebarProps" />
            </div>
            <div
                v-if="rootProps.presetDates.length"
                :class="{ 'dp--preset-dates-collapsed': collapse, 'dp--preset-dates': true }"
                :data-dp-mobile="isMobile"
            >
                <template v-for="(preset, i) in rootProps.presetDates" :key="i">
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
            <div class="dp__instance_calendar">
                <component
                    :is="displayComponent"
                    ref="dyn-cmp"
                    :flow-step="flowStep"
                    :collapse="collapse"
                    :no-overlay-focus="noOverlayFocus"
                    :menu-wrap-ref="dpMenuRef"
                    @mount="childMount"
                    @update-flow-step="updateFlowStep"
                    @reset-flow="resetFlow"
                    @focus-menu="focusMenu"
                    @select-date="$emit('select-date')"
                    @auto-apply="$emit('auto-apply', $event)"
                    @time-update="$emit('time-update')"
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
            v-if="!rootProps.autoApply || config.keepActionRow"
            :menu-mount="menuMount"
            :calendar-width="calendarWidth"
            @close-picker="$emit('close-picker')"
            @select-date="$emit('select-date')"
            @select-now="selectCurrentDate"
        >
            <template v-for="(slot, i) in actionSlots" #[slot]="args" :key="i">
                <slot :name="slot" v-bind="{ ...args }" />
            </template>
        </ActionRow>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, onUnmounted, ref, toValue, useSlots, useTemplateRef } from 'vue';
    import { unrefElement } from '@vueuse/core';

    import ActionRow from '@/components/ActionRow.vue';
    import MonthPicker from '@/components/MonthPicker/MonthPicker.vue';
    import YearPicker from '@/components/YearPicker/YearPicker.vue';
    import TimePickerSolo from '@/components/TimePicker/TimePickerSolo.vue';
    import DatePicker from '@/components/DatePicker/DatePicker.vue';
    import QuarterPicker from '@/components/QuarterPicker/QuarterPicker.vue';

    import {
        useSlotsMapper,
        useArrowNavigation,
        useFlow,
        useResponsive,
        useContext,
        useHelperFns,
    } from '@/composables';
    import { ArrowDirection, EventKey } from '@/constants';

    import type { MaybeRefOrGetter } from 'vue';
    import type { DynamicClass, MenuExposedFn, MenuView, MonthModel } from '@/types';

    const emit = defineEmits<{
        'close-picker': [];
        'select-date': [];
        'auto-apply': [ignoreClose?: boolean];
        'time-update': [];
        'menu-blur': [];
    }>();

    defineProps<{
        collapse: boolean;
        noOverlayFocus: boolean;
        getInputRect: () => DOMRect;
    }>();

    const slots = useSlots();
    const {
        state,
        rootProps,
        defaults: { textInput, inline, config, ui, ariaLabels },
        setState,
    } = useContext();
    const { isMobile } = useResponsive();
    const { mapSlots } = useSlotsMapper();
    const { handleEventPropagation, getElWithin, checkStopPropagation, checkKeyDown } = useHelperFns();
    const { arrowRight, arrowLeft, arrowDown, arrowUp } = useArrowNavigation();

    const innerMenuRef = useTemplateRef('inner-menu');
    const dpMenuRef = useTemplateRef('dp-menu');
    const dynCmpRef = useTemplateRef<any>('dyn-cmp');

    const calendarWidth = ref(0);
    const menuMount = ref(false);
    const isMenuActive = ref(false);

    const { flowStep, updateFlowStep, childMount, resetFlow, handleFlow } = useFlow(dynCmpRef);

    const stopDefault = (event: Event) => {
        isMenuActive.value = true;
        if (config.value.allowPreventDefault) {
            event.preventDefault();
        }
        checkStopPropagation(event, config.value, true);
    };

    onMounted(() => {
        menuMount.value = true;
        getCalendarWidth();
        globalThis.addEventListener('resize', getCalendarWidth);

        const menu = unrefElement(dpMenuRef);
        if (menu && !textInput.value.enabled && !inline.value.enabled) {
            setState('menuFocused', true);
            focusMenu();
        }

        if (menu) {
            menu.addEventListener('pointerdown', stopDefault);
            menu.addEventListener('mousedown', stopDefault);
        }

        document.addEventListener('mousedown', handleClickOutside);
    });

    onUnmounted(() => {
        globalThis.removeEventListener('resize', getCalendarWidth);
        document.removeEventListener('mousedown', handleClickOutside);

        const menu = unrefElement(dpMenuRef);

        if (menu) {
            menu.removeEventListener('pointerdown', stopDefault);
            menu.removeEventListener('mousedown', stopDefault);
        }
    });

    const getCalendarWidth = (): void => {
        const el = unrefElement(innerMenuRef);
        if (el) {
            calendarWidth.value = el.getBoundingClientRect().width;
        }
    };

    const displayComponent = computed(() => {
        if (rootProps.monthPicker) return MonthPicker;
        if (rootProps.yearPicker) return YearPicker;
        if (rootProps.timePicker) return TimePickerSolo;
        if (rootProps.quarterPicker) return QuarterPicker;
        return DatePicker;
    });

    const focusMenu = (): void => {
        const menu = unrefElement(dpMenuRef);
        if (menu) {
            menu.focus({ preventScroll: true });
        }
    };

    const getSidebarProps = computed(() => dynCmpRef.value?.getSidebarProps() || {});

    const actionSlots = mapSlots(slots, 'action');

    const sharedSlots = computed((): string[] => {
        if (rootProps.monthPicker || rootProps.yearPicker) return mapSlots(slots, 'monthYear');
        if (rootProps.timePicker) return mapSlots(slots, 'timePicker');
        return mapSlots(slots, 'shared');
    });

    const disabledReadonlyOverlay = computed(() => ({
        dp__menu_disabled: rootProps.disabled,
        dp__menu_readonly: rootProps.readonly,
        'dp-menu-loading': rootProps.loading,
    }));

    const dpMenuClass = computed(
        (): DynamicClass => ({
            dp__menu: true,
            dp__menu_index: !inline.value.enabled,
            dp__relative: inline.value.enabled,
            ...ui.value.menu,
        }),
    );

    const handleDpMenuClick = (ev: Event) => {
        checkStopPropagation(ev, config.value, true);
    };

    const handleEsc = (ev: KeyboardEvent): void => {
        if (config.value.escClose) {
            emit('close-picker');
            handleEventPropagation(ev, config.value);
        }
    };

    const handleArrowKey = (arrow: ArrowDirection): void => {
        if (rootProps.arrowNavigation) {
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
        setState('shiftKeyInMenu', ev.shiftKey);
        if (!rootProps.hideMonthYearSelect && ev.code === EventKey.tab) {
            if ((ev.target as HTMLElement).classList.contains('dp__menu') && state.shiftKeyInMenu) {
                ev.preventDefault();
                checkStopPropagation(ev, config.value, true);
                emit('close-picker');
            }
        }
    };

    // todo
    const _onTimePickerClose = () => {
        focusMenu();
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

    const presetDate = (value: MaybeRefOrGetter<Date[] | string[] | string | Date>, noTz?: boolean) => {
        callChildFn('presetDate', toValue(value), noTz);
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
                return handleEsc(ev);
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
        if (inline.value.enabled && !inline.value.input) {
            const activeClick = dpMenuRef.value?.contains(event.target as HTMLElement);
            if (!activeClick && isMenuActive.value) {
                isMenuActive.value = false;
                emit('menu-blur');
            }
        }
    };

    const onValueCleared = () => {
        dynCmpRef.value?.setStartTime?.();
    };

    defineExpose({
        updateMonthYear,
        switchView,
        onValueCleared,
        handleFlow,
    });
</script>
