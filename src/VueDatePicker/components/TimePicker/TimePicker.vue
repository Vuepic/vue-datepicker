<template>
    <div>
        <button
            type="button"
            v-if="!timePicker && !timePickerInline"
            v-show="!hideNavigationButtons(hideNavigation, 'time')"
            :class="toggleButtonClass"
            :aria-label="defaultedAriaLabels?.openTimePicker"
            tabindex="0"
            data-test="open-time-picker-btn"
            ref="openTimePickerBtn"
            @keydown.enter="toggleTimePicker(true)"
            @keydown.space="toggleTimePicker(true)"
            @click="toggleTimePicker(true)"
        >
            <slot name="clock-icon" v-if="$slots['clock-icon']" />
            <ClockIcon v-if="!$slots['clock-icon']" />
        </button>
        <transition :name="transitionName(showTimePicker)" :css="showTransition && !timePickerInline">
            <div
                v-if="showTimePicker || timePicker || timePickerInline"
                :class="{
                    dp__overlay: !timePickerInline,
                    'dp--overlay-absolute': !props.timePicker && !timePickerInline,
                    'dp--overlay-relative': props.timePicker,
                }"
                :style="
                    timePicker
                        ? { height: `${modeHeight !== 255 ? modeHeight : defaultedConfig.modeHeight}px` }
                        : undefined
                "
                ref="overlayRef"
                :tabindex="timePickerInline ? undefined : 0"
            >
                <div
                    :class="
                        !timePickerInline
                            ? 'dp__overlay_container dp__container_flex dp__time_picker_overlay_container'
                            : 'dp__time_picker_inline_container'
                    "
                    style="display: flex"
                >
                    <slot
                        name="time-picker-overlay"
                        v-if="$slots['time-picker-overlay']"
                        :hours="hours"
                        :minutes="minutes"
                        :seconds="seconds"
                        :set-hours="updateHours"
                        :set-minutes="updateMinutes"
                        :set-seconds="updateSeconds"
                    ></slot>
                    <template v-if="!$slots['time-picker-overlay']">
                        <div :class="timePickerInline ? 'dp__flex' : 'dp__overlay_row dp__flex_row'">
                            <TimeInput
                                v-for="(tInput, index) in timeInputs"
                                :key="index"
                                v-show="index === 0 ? true : shouldShowRangedInput"
                                v-bind="{
                                    ...$props,
                                    order: index,
                                    hours: tInput.hours,
                                    minutes: tInput.minutes,
                                    seconds: tInput.seconds,
                                    closeTimePickerBtn,
                                    disabledTimesConfig,
                                    disabled: index === 0 ? fixedStart : fixedEnd,
                                }"
                                ref="timeInputRefs"
                                @update:hours="updateHours(getEvent($event, index, 'hours'))"
                                @update:minutes="updateMinutes(getEvent($event, index, 'minutes'))"
                                @update:seconds="updateSeconds(getEvent($event, index, 'seconds'))"
                                @mounted="focusOverlay"
                                @overlay-closed="focusOverlay"
                                @am-pm-change="$emit('am-pm-change', $event)"
                            >
                                <template v-for="(slot, i) in timeInputSlots" #[slot]="args" :key="i">
                                    <slot :name="slot" v-bind="args" />
                                </template>
                            </TimeInput>
                        </div>
                    </template>
                    <button
                        type="button"
                        v-if="!timePicker && !timePickerInline"
                        v-show="!hideNavigationButtons(hideNavigation, 'time')"
                        ref="closeTimePickerBtn"
                        :class="toggleButtonClass"
                        :aria-label="defaultedAriaLabels?.closeTimePicker"
                        tabindex="0"
                        @keydown.enter="toggleTimePicker(false)"
                        @keydown.space="toggleTimePicker(false)"
                        @click="toggleTimePicker(false)"
                    >
                        <slot name="calendar-icon" v-if="$slots['calendar-icon']" />
                        <CalendarIcon v-if="!$slots['calendar-icon']" />
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
    import { computed, nextTick, onMounted, ref, useSlots } from 'vue';

    import { ClockIcon, CalendarIcon } from '@/components/Icons';
    import TimeInput from '@/components/TimePicker/TimeInput.vue';

    import { findFocusableEl, isModelAuto, unrefElement } from '@/utils/util';
    import { mapSlots, useTransitions, useArrowNavigation, useDefaults, useCommon } from '@/composables';
    import { PickerBaseProps } from '@/props';

    import type { PropType } from 'vue';
    import type { DisabledTimesArrProp, TimeInputRef } from '@/interfaces';

    defineOptions({
        compatConfig: {
            MODE: 3,
        },
    });

    const emit = defineEmits([
        'update:hours',
        'update:minutes',
        'update:seconds',
        'mount',
        'reset-flow',
        'overlay-opened',
        'overlay-closed',
        'am-pm-change',
    ]);

    const props = defineProps({
        hours: { type: [Number, Array] as PropType<number | number[]>, default: 0 },
        minutes: { type: [Number, Array] as PropType<number | number[]>, default: 0 },
        seconds: { type: [Number, Array] as PropType<number | number[]>, default: 0 },
        disabledTimesConfig: { type: Function as PropType<DisabledTimesArrProp>, default: null },
        ...PickerBaseProps,
    });

    const { buildMatrix, setTimePicker } = useArrowNavigation();
    const slots = useSlots();

    const { defaultedTransitions, defaultedAriaLabels, defaultedTextInput, defaultedConfig } = useDefaults(props);
    const { transitionName, showTransition } = useTransitions(defaultedTransitions);
    const { hideNavigationButtons } = useCommon();

    const openTimePickerBtn = ref(null);
    const closeTimePickerBtn = ref(null);
    const timeInputRefs = ref<TimeInputRef[]>([]);
    const overlayRef = ref<HTMLElement | null>(null);

    onMounted(() => {
        emit('mount');
        if (!props.timePicker && props.arrowNavigation) {
            buildMatrix([unrefElement(openTimePickerBtn.value) as HTMLElement], 'time');
        } else {
            setTimePicker(true, props.timePicker);
        }
    });

    const shouldShowRangedInput = computed(() => {
        if (props.range && props.modelAuto) return isModelAuto(props.internalModelValue);
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
        if (props.range) {
            for (let i = 0; i < 2; i++) {
                arr.push(getTimeInput(i));
            }
        } else {
            arr.push(getTimeInput(0));
        }
        return arr as { hours: number; minutes: number; seconds: number }[];
    });

    const toggleTimePicker = (show: boolean, flow = false, childOpen = ''): void => {
        if (!flow) {
            emit('reset-flow');
        }
        showTimePicker.value = show;

        emit(show ? 'overlay-opened' : 'overlay-closed');

        if (props.arrowNavigation) {
            setTimePicker(show);
        }

        nextTick(() => {
            if (childOpen !== '' && timeInputRefs.value[0]) {
                timeInputRefs.value[0].openChildCmp(childOpen);
            }
        });
    };

    const toggleButtonClass = computed(() => ({
        dp__btn: true,
        dp__button: true,
        dp__button_bottom: props.autoApply && !props.keepActionRow && !defaultedConfig.value.keepActionRow,
    }));

    const timeInputSlots = mapSlots(slots, 'timePicker');

    const getEvent = (event: number, index: number, property: 'hours' | 'minutes' | 'seconds') => {
        if (!props.range) {
            return event;
        }
        if (index === 0) {
            return [event, timeInputs.value[1][property]];
        }
        return [timeInputs.value[0][property], event];
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
        if (overlayRef.value && !defaultedTextInput.value.enabled) {
            const el = findFocusableEl(overlayRef.value);
            if (el) {
                el.focus({ preventScroll: true });
            }
        }
    };

    defineExpose({ toggleTimePicker });
</script>
