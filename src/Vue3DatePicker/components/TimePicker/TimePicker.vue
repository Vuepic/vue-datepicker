<template>
    <div>
        <div
            v-if="!timePicker"
            :class="toggleButtonClass"
            role="button"
            aria-label="Open time picker"
            tabindex="0"
            @keydown.enter="toggleTimePicker(true)"
            @click="toggleTimePicker(true)"
        >
            <slot name="clock-icon" v-if="$slots['clock-icon']" />
            <ClockIcon v-if="!$slots['clock-icon']" />
        </div>
        <transition :name="transitionName(showTimePicker)" :css="showTransition">
            <div v-if="showTimePicker || timePicker" class="dp__overlay">
                <div class="dp__overlay_container">
                    <slot
                        name="time-picker-overlay"
                        v-if="$slots['time-picker-overlay']"
                        :range="range"
                        :hours="hours"
                        :minutes="minutes"
                        :seconds="seconds"
                        :setHours="updateHours"
                        :setMinutes="updateMinutes"
                        :setSeconds="updateSeconds"
                    ></slot>
                    <template v-if="!$slots['time-picker-overlay']">
                        <div class="dp__overlay_row">
                            <TimeInput
                                v-for="(tInput, index) in timeInputs"
                                :key="index"
                                :disabled="index === 0 ? fixedStart : fixedEnd"
                                :hours="tInput.hours"
                                :minutes="tInput.minutes"
                                :seconds="tInput.seconds"
                                v-bind="timeInputProps"
                                @update:hours="updateHours(getEvent($event, index, 'hours'))"
                                @update:minutes="updateMinutes(getEvent($event, index, 'minutes'))"
                                @update:seconds="updateSeconds(getEvent($event, index, 'seconds'))"
                            >
                                <template v-for="(slot, i) in timeInputSlots" #[slot]="args" :key="i">
                                    <slot :name="slot" v-bind="args" />
                                </template>
                            </TimeInput>
                        </div>
                    </template>
                    <div
                        v-if="!timePicker"
                        :class="toggleButtonClass"
                        role="button"
                        aria-label="Close time picker"
                        tabindex="0"
                        @keydown.enter="toggleTimePicker(false)"
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
    import { computed, inject, nextTick, onMounted, PropType, ref, useSlots } from 'vue';

    import { ClockIcon, CalendarIcon } from '../Icons';
    import TimeInput from './TimeInput.vue';

    import { IDateFilter, TimeInputRef } from '../../interfaces';
    import { mapSlots } from '../composition/slots';
    import { useTransitions } from '../composition/transition';

    const emit = defineEmits(['update:hours', 'update:minutes', 'update:seconds', 'mount', 'reset-flow']);

    const props = defineProps({
        hoursIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
        minutesIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
        secondsIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
        is24: { type: Boolean as PropType<boolean>, default: true },
        hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
        minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
        secondsGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
        range: { type: Boolean as PropType<boolean>, default: false },
        filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
        timePicker: { type: Boolean as PropType<boolean>, default: false },
        hours: { type: [Number, Array] as PropType<number | number[]>, default: 0 },
        minutes: { type: [Number, Array] as PropType<number | number[]>, default: 0 },
        seconds: { type: [Number, Array] as PropType<number | number[]>, default: 0 },
        noHoursOverlay: { type: Boolean as PropType<boolean>, default: false },
        noMinutesOverlay: { type: Boolean as PropType<boolean>, default: false },
        noSecondsOverlay: { type: Boolean as PropType<boolean>, default: false },
        customProps: { type: Object as PropType<Record<string, unknown>>, default: null },
        enableSeconds: { type: Boolean as PropType<boolean>, default: false },
        fixedStart: { type: Boolean as PropType<boolean>, default: false },
        fixedEnd: { type: Boolean as PropType<boolean>, default: false },
    });
    const slots = useSlots();
    const autoApply = inject('autoApply', false);
    const timeInputRef = ref<TimeInputRef | null>(null);

    const { transitionName, showTransition } = useTransitions();

    onMounted(() => {
        emit('mount');
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
        return arr;
    });

    const toggleTimePicker = (show: boolean, flow = false, childOpen = ''): void => {
        if (!flow) {
            emit('reset-flow');
        }
        showTimePicker.value = show;

        nextTick(() => {
            if (childOpen !== '' && timeInputRef.value) {
                timeInputRef.value.openChildCmp(childOpen);
            }
        });
    };

    const toggleButtonClass = computed(() => ({
        dp__button: true,
        dp__button_bottom: autoApply,
    }));

    const timeInputSlots = mapSlots(slots, 'timePicker');

    const timeInputProps = computed(() => ({
        is24: props.is24,
        hoursGridIncrement: props.hoursGridIncrement,
        minutesGridIncrement: props.minutesGridIncrement,
        secondsGridIncrement: props.secondsGridIncrement,
        hoursIncrement: props.hoursIncrement,
        minutesIncrement: props.minutesIncrement,
        secondsIncrement: props.secondsIncrement,
        filters: props.filters,
        noHoursOverlay: props.noHoursOverlay,
        noMinutesOverlay: props.noMinutesOverlay,
        noSecondsOverlay: props.noSecondsOverlay,
        enableSeconds: props.enableSeconds,
    }));

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

    defineExpose({ toggleTimePicker });
</script>
