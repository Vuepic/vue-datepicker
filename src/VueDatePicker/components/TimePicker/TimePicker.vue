<template>
    <div class="dp--tp-wrap" :data-dp-mobile="isMobile">
        <button
            v-if="!rootProps.timePicker && !timeConfig.timePickerInline"
            v-show="!hideNavigationButtons('time')"
            ref="open-tp-btn"
            type="button"
            :class="{ ...toggleButtonClass, 'dp--hidden-el': showTimePicker }"
            :aria-label="ariaLabels?.openTimePicker"
            :tabindex="noOverlayFocus ? undefined : 0"
            data-test-id="open-time-picker-btn"
            @keydown="checkKeyDown($event, () => toggleTimePicker(true))"
            @click="toggleTimePicker(true)"
        >
            <slot v-if="$slots['clock-icon']" name="clock-icon" />
            <ClockIcon v-if="!$slots['clock-icon']" />
        </button>
        <transition :name="transitionName(showTimePicker)" :css="showTransition && !timeConfig.timePickerInline">
            <div
                v-if="showTimePicker || rootProps.timePicker || timeConfig.timePickerInline"
                ref="overlay"
                :role="timeConfig.timePickerInline ? undefined : 'dialog'"
                :class="{
                    dp__overlay: !timeConfig.timePickerInline,
                    'dp--overlay-absolute': !rootProps.timePicker && !timeConfig.timePickerInline,
                    'dp--overlay-relative': rootProps.timePicker,
                }"
                :style="rootProps.timePicker ? { height: `${config.modeHeight}px` } : undefined"
                :aria-label="ariaLabels?.timePicker"
                :tabindex="timeConfig.timePickerInline ? undefined : 0"
            >
                <div
                    :class="
                        !timeConfig.timePickerInline
                            ? 'dp__overlay_container dp__container_flex dp__time_picker_overlay_container'
                            : 'dp__time_picker_inline_container'
                    "
                    style="display: flex"
                >
                    <slot
                        v-if="$slots['time-picker-overlay']"
                        name="time-picker-overlay"
                        :hours="hours"
                        :minutes="minutes"
                        :seconds="seconds"
                        :set-hours="updateHours"
                        :set-minutes="updateMinutes"
                        :set-seconds="updateSeconds"
                    ></slot>
                    <template v-if="!$slots['time-picker-overlay']">
                        <div :class="timeConfig.timePickerInline ? 'dp__flex' : 'dp__overlay_row dp__flex_row'">
                            <TimeInput
                                v-for="(tInput, index) in timeInputs"
                                v-show="index === 0 ? true : shouldShowRangedInput"
                                :key="index"
                                v-bind="{
                                    order: index,
                                    hours: tInput.hours,
                                    minutes: tInput.minutes,
                                    seconds: tInput.seconds,
                                    closeTimePickerBtn,
                                    disabledTimesConfig,
                                    disabled: index === 0 ? range.fixedStart : range.fixedEnd,
                                }"
                                ref="tp-input"
                                :validate-time="
                                    (type: TimeKey, value: number) => validateTime(type, getEvent(value, index, type))
                                "
                                @update:hours="updateHours(getEvent($event, index, 'hours'))"
                                @update:minutes="updateMinutes(getEvent($event, index, 'minutes'))"
                                @update:seconds="updateSeconds(getEvent($event, index, 'seconds'))"
                                @mounted="focusOverlay"
                                @overlay-closed="timeInputOverlayClose"
                                @overlay-opened="timeInputOverlayOpen"
                            >
                                <template v-for="(slot, i) in timeInputSlots" #[slot]="args" :key="i">
                                    <slot :name="slot" v-bind="args" />
                                </template>
                            </TimeInput>
                        </div>
                    </template>
                    <button
                        v-if="!rootProps.timePicker && !timeConfig.timePickerInline"
                        v-show="!hideNavigationButtons('time')"
                        ref="close-tp-btn"
                        type="button"
                        :class="{ ...toggleButtonClass, 'dp--hidden-el': timePickerOverlayOpen }"
                        :aria-label="ariaLabels?.closeTimePicker"
                        tabindex="0"
                        @keydown="checkKeyDown($event, () => toggleTimePicker(false))"
                        @click="toggleTimePicker(false)"
                    >
                        <slot v-if="$slots['calendar-icon']" name="calendar-icon" />
                        <CalendarIcon v-if="!$slots['calendar-icon']" />
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
    import { computed, nextTick, onMounted, ref, useSlots, useTemplateRef } from 'vue';
    import { unrefElement } from '@vueuse/core';

    import { ClockIcon, CalendarIcon } from '@/components/Icons';
    import TimeInput from '@/components/TimePicker/TimeInput.vue';

    import {
        useSlotsMapper,
        useTransitions,
        useArrowNavigation,
        useContext,
        useResponsive,
        useHelperFns,
        useDateUtils,
    } from '@/composables';
    import { useNavigationDisplay } from '@/components/shared/useNavigationDisplay.ts';
    import { FlowStep } from '@/constants';

    import type { InvalidTimesConfig, TimeKey } from '@/types';

    interface TimePickerEmits {
        'update:hours': [hours: number | number[]];
        'update:minutes': [minutes: number | number[]];
        'update:seconds': [seconds: number | number[]];
        mount: [];
        'reset-flow': [];
    }

    interface TimePickerProps {
        hours: number | number[];
        minutes: number | number[];
        seconds: number | number[];
        disabledTimesConfig: ((ind: number, hours?: number) => InvalidTimesConfig) | null;
        noOverlayFocus?: boolean;
        validateTime: (type: TimeKey, value: number | number[]) => boolean;
    }

    const emit = defineEmits<TimePickerEmits>();

    const props = defineProps<TimePickerProps>();

    const {
        getDate,
        rootEmit,
        modelValue,
        rootProps,
        defaults: { ariaLabels, textInput, config, range, timeConfig },
    } = useContext();
    const { isModelAuto } = useDateUtils();
    const { checkKeyDown, findFocusableEl } = useHelperFns();
    const { buildMatrix, setTimePicker } = useArrowNavigation();
    const { transitionName, showTransition } = useTransitions();
    const { hideNavigationButtons } = useNavigationDisplay();
    const { mapSlots } = useSlotsMapper();
    const { isMobile } = useResponsive();
    const slots = useSlots();

    const overlayRef = useTemplateRef('overlay');
    const openTimePickerBtn = useTemplateRef('open-tp-btn');
    const closeTimePickerBtn = useTemplateRef('close-tp-btn');
    const timeInputRefs = useTemplateRef('tp-input');

    const timePickerOverlayOpen = ref(false);

    onMounted(() => {
        emit('mount');
        if (!rootProps.timePicker && rootProps.arrowNavigation) {
            buildMatrix([unrefElement(openTimePickerBtn.value!) as HTMLElement], 'time');
        } else {
            setTimePicker(true, rootProps.timePicker);
        }
    });

    const shouldShowRangedInput = computed(() => {
        if (range.value.enabled && rootProps.modelAuto) return isModelAuto(modelValue.value);
        return true;
    });

    const showTimePicker = ref(false);

    const getTimeInput = (i: number) => {
        return {
            hours: Array.isArray(props.hours) ? props.hours[i] : props.hours,
            minutes: Array.isArray(props.minutes) ? props.minutes[i] : props.minutes,
            seconds: Array.isArray(props.seconds) ? props.seconds[i] : props.seconds,
        };
    };

    const timeInputs = computed((): { hours: number; minutes: number; seconds: number }[] => {
        const arr = [];
        if (range.value.enabled) {
            for (let i = 0; i < 2; i++) {
                arr.push(getTimeInput(i));
            }
        } else {
            arr.push(getTimeInput(0));
        }
        return arr as { hours: number; minutes: number; seconds: number }[];
    });

    const toggleTimePicker = (show: boolean, flow = false, childOpen: TimeKey | '' = ''): void => {
        if (!flow) {
            emit('reset-flow');
        }
        showTimePicker.value = show;

        rootEmit('overlay-toggle', { open: show, overlay: FlowStep.time });

        if (rootProps.arrowNavigation) {
            setTimePicker(show);
        }

        nextTick(() => {
            if (childOpen !== '' && timeInputRefs.value?.[0]) {
                timeInputRefs.value[0].openChildCmp(childOpen);
            }
        });
    };

    const toggleButtonClass = computed(() => ({
        dp__btn: true,
        dp__button: true,
        dp__button_bottom: rootProps.autoApply && !config.value.keepActionRow,
    }));

    const timeInputSlots = mapSlots(slots, 'timePicker');

    const getEvent = (event: number, index: number, property: TimeKey) => {
        if (!range.value.enabled) {
            return event;
        }
        if (index === 0) {
            return [event, timeInputs.value[1]![property]];
        }
        return [timeInputs.value[0]![property], event];
    };

    const updateHours = (hours: number | number[]): void => {
        emit('update:hours', hours);
    };

    const updateMinutes = (minutes: number | number[]): void => {
        emit('update:minutes', minutes);
    };

    const updateSeconds = (seconds: number | number[]): void => {
        emit('update:seconds', seconds);
    };

    const focusOverlay = () => {
        if (overlayRef.value && !textInput.value.enabled && !props.noOverlayFocus) {
            const el = findFocusableEl(overlayRef.value);
            if (el) {
                el.focus({ preventScroll: true });
            }
        }
    };

    const timeInputOverlayClose = (mode: TimeKey) => {
        timePickerOverlayOpen.value = false;
        rootEmit('overlay-toggle', { open: false, overlay: mode });
    };
    const timeInputOverlayOpen = (mode: TimeKey) => {
        timePickerOverlayOpen.value = true;
        rootEmit('overlay-toggle', { open: true, overlay: mode });
    };

    defineExpose({ toggleTimePicker });
</script>
