<template>
    <div>
        <div
            v-if="!timePicker"
            v-show="!hideNavigationButtons('time')"
            :class="toggleButtonClass"
            role="button"
            :aria-label="defaults.ariaLabels?.openTimePicker"
            tabindex="0"
            data-test="open-time-picker-btn"
            ref="openTimePickerBtn"
            @keydown.enter="toggleTimePicker(true)"
            @keydown.space="toggleTimePicker(true)"
            @click="toggleTimePicker(true)"
        >
            <slot name="clock-icon" v-if="$slots['clock-icon']" />
            <ClockIcon v-if="!$slots['clock-icon']" />
        </div>
        <transition :name="transitionName(showTimePicker)" :css="showTransition">
            <div v-if="showTimePicker || timePicker" class="dp__overlay" ref="overlayRef" tabindex="0">
                <div class="dp__overlay_container dp__container_flex">
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
                        <div class="dp__overlay_row">
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
                                    disabled: index === 0 ? fixedStart : fixedEnd,
                                }"
                                ref="timeInputRefs"
                                @update:hours="updateHours(getEvent($event, index, 'hours'))"
                                @update:minutes="updateMinutes(getEvent($event, index, 'minutes'))"
                                @update:seconds="updateSeconds(getEvent($event, index, 'seconds'))"
                                @mounted="focusOverlay"
                                @overlay-closed="focusOverlay"
                            >
                                <template v-for="(slot, i) in timeInputSlots" #[slot]="args" :key="i">
                                    <slot :name="slot" v-bind="args" />
                                </template>
                            </TimeInput>
                        </div>
                    </template>
                    <div
                        v-if="!timePicker"
                        v-show="!hideNavigationButtons('time')"
                        ref="closeTimePickerBtn"
                        :class="toggleButtonClass"
                        role="button"
                        :aria-label="defaults.ariaLabels?.closeTimePicker"
                        tabindex="0"
                        @keydown.enter="toggleTimePicker(false)"
                        @keydown.space="toggleTimePicker(false)"
                        @click="toggleTimePicker(false)"
                    >
                        <slot name="calendar-icon" v-if="$slots['calendar-icon']" />
                        <CalendarIcon v-if="!$slots['calendar-icon']" />
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
    import { computed, nextTick, onMounted, ref, useSlots } from 'vue';

    import { ClockIcon, CalendarIcon } from '@/components/Icons';
    import TimeInput from '@/components/TimePicker/TimeInput.vue';

    import { isModelAuto, unrefElement } from '@/utils/util';
    import { mapSlots, useTransitions, useArrowNavigation, useUtils } from '@/components/composables';
    import { AllProps } from '@/utils/props';

    import type { PropType } from 'vue';
    import type { TimeInputRef, InternalModuleValue } from '@/interfaces';

    const emit = defineEmits([
        'update:hours',
        'update:minutes',
        'update:seconds',
        'mount',
        'reset-flow',
        'overlay-closed',
    ]);

    const props = defineProps({
        hours: { type: [Number, Array] as PropType<number | number[]>, default: 0 },
        minutes: { type: [Number, Array] as PropType<number | number[]>, default: 0 },
        seconds: { type: [Number, Array] as PropType<number | number[]>, default: 0 },
        internalModelValue: { type: [Date, Array] as PropType<InternalModuleValue>, default: null },
        ...AllProps,
    });

    const { buildMatrix, setTimePicker } = useArrowNavigation();
    const slots = useSlots();
    const { hideNavigationButtons, defaults } = useUtils(props);

    const { transitionName, showTransition } = useTransitions(defaults.value.transitions);
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

        if (props.arrowNavigation) {
            setTimePicker(show);
            if (!show) {
                emit('overlay-closed');
            }
        }

        nextTick(() => {
            if (childOpen !== '' && timeInputRefs.value[0]) {
                timeInputRefs.value[0].openChildCmp(childOpen);
            }
        });
    };

    const toggleButtonClass = computed(() => ({
        dp__button: true,
        dp__button_bottom: props.autoApply,
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
        if (overlayRef.value && props.arrowNavigation) {
            overlayRef.value.focus({ preventScroll: true });
        }
    };

    defineExpose({ toggleTimePicker });
</script>
