<template>
    <div>
        <div
            v-if="!config.timePicker"
            v-show="!hideNavigationButtons('time')"
            :class="toggleButtonClass"
            role="button"
            :aria-label="config.ariaLabels?.openTimePicker"
            tabindex="0"
            ref="openTimePickerBtn"
            @keydown.enter="toggleTimePicker(true)"
            @keydown.space="toggleTimePicker(true)"
            @click="toggleTimePicker(true)"
        >
            <slot name="clock-icon" v-if="$slots['clock-icon']" />
            <ClockIcon v-if="!$slots['clock-icon']" />
        </div>
        <transition :name="transitionName(showTimePicker)" :css="showTransition">
            <div v-if="showTimePicker || config.timePicker" class="dp__overlay" ref="overlayRef" tabindex="0">
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
                                :disabled="index === 0 ? config.fixedStart : config.fixedEnd"
                                v-show="index === 0 ? true : shouldShowRangedInput"
                                :hours="tInput.hours"
                                :minutes="tInput.minutes"
                                :seconds="tInput.seconds"
                                :close-time-picker-btn="closeTimePickerBtn"
                                :order="index"
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
                        v-if="!config.timePicker"
                        v-show="!hideNavigationButtons('time')"
                        ref="closeTimePickerBtn"
                        :class="toggleButtonClass"
                        role="button"
                        :aria-label="config.ariaLabels?.closeTimePicker"
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
    import { mapSlots, useTransitions, useArrowNavigation, useState, useUtils } from '@/components/composables';

    import type { PropType } from 'vue';
    import type { TimeInputRef } from '@/interfaces';

    const { transitionName, showTransition } = useTransitions();
    const { buildMatrix, setTimePicker } = useArrowNavigation();
    const slots = useSlots();
    const { config, internalModelValue } = useState();
    const { hideNavigationButtons } = useUtils();

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
    });
    const openTimePickerBtn = ref(null);
    const closeTimePickerBtn = ref(null);
    const timeInputRefs = ref<TimeInputRef[]>([]);
    const overlayRef = ref<HTMLElement | null>(null);

    onMounted(() => {
        emit('mount');
        if (!config.value.timePicker && config.value.arrowNavigation) {
            buildMatrix([unrefElement(openTimePickerBtn.value) as HTMLElement], 'time');
        } else {
            setTimePicker(true, config.value.timePicker);
        }
    });

    const shouldShowRangedInput = computed(() => {
        if (config.value.range && config.value.modelAuto) return isModelAuto(internalModelValue.value);
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
        if (config.value.range) {
            for (let i = 0; i < 2; i++) {
                arr.push(getTimeInput(i));
            }
        } else {
            arr.push(getTimeInput(0));
        }
        return arr;
    });

    const toggleTimePicker = (show: boolean, flow = false, childOpen = ''): void => {
        if (!flow) {
            emit('reset-flow');
        }
        showTimePicker.value = show;

        if (config.value.arrowNavigation) {
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
        dp__button_bottom: config.value.autoApply,
    }));

    const timeInputSlots = mapSlots(slots, 'timePicker');

    const getEvent = (event: number, index: number, property: 'hours' | 'minutes' | 'seconds') => {
        if (!config.value.range) {
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
        if (overlayRef.value && config.value.arrowNavigation) {
            overlayRef.value.focus({ preventScroll: true });
        }
    };

    defineExpose({ toggleTimePicker });
</script>
