<template>
    <div>
        <div
            class="dp__button"
            v-if="!timePicker"
            @click="toggleTimePicker(true)"
            role="button"
            aria-label="Open time picker"
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
                        :instance="instance"
                        :hours="hours"
                        :minutes="minutes"
                        :seconds="seconds"
                        :setHours="updateHours"
                        :setMinutes="updateMinutes"
                        :setSeconds="updateSeconds"
                    ></slot>
                    <template v-if="!$slots['time-picker-overlay']">
                        <div class="dp__overlay_row">
                            <template v-if="!range">
                                <TimeInput
                                    :hours="hours"
                                    :minutes="minutes"
                                    :seconds="seconds"
                                    v-bind="timeInputProps"
                                    @update:hours="updateHours($event)"
                                    @update:minutes="updateMinutes($event)"
                                    @update:seconds="updateSeconds($event)"
                                >
                                    <template v-for="(slot, i) in timeInputSlots" #[slot]="args" :key="i">
                                        <slot :name="slot" v-bind="args" />
                                    </template>
                                </TimeInput>
                            </template>
                            <template v-if="range">
                                <TimeInput
                                    v-if="twoCalendars ? instance === 1 : true"
                                    :hours="hours[0]"
                                    :minutes="minutes[0]"
                                    v-bind="timeInputProps"
                                    @update:hours="updateHours([$event, hours[1]])"
                                    @update:minutes="updateMinutes([$event, minutes[1]])"
                                >
                                    <template v-for="(slot, i) in timeInputSlots" #[slot]="args" :key="i">
                                        <slot :name="slot" v-bind="args" />
                                    </template>
                                </TimeInput>
                                <TimeInput
                                    v-if="twoCalendars ? instance === 2 : true"
                                    :hours="hours[1]"
                                    :minutes="minutes[1]"
                                    v-bind="timeInputProps"
                                    @update:hours="updateHours([hours[0], $event])"
                                    @update:minutes="updateMinutes([minutes[0], $event])"
                                >
                                    <template v-for="(slot, i) in timeInputSlots" #[slot]="args" :key="i">
                                        <slot :name="slot" v-bind="args" />
                                    </template>
                                </TimeInput>
                            </template>
                        </div>
                    </template>
                    <div
                        class="dp__button"
                        v-if="!timePicker"
                        @click="toggleTimePicker(false)"
                        role="button"
                        aria-label="Close time picker"
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
    import { computed, PropType, ref, useSlots } from 'vue';

    import { ClockIcon, CalendarIcon } from '../Icons';
    import TimeInput from './TimeInput.vue';

    import { IDateFilter, ITimeValue } from '../../interfaces';
    import { mapSlots } from '../composition/slots';
    import { useTransitions } from '../composition/transition';

    const emit = defineEmits(['update:hours', 'update:minutes', 'update:seconds']);

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
        minTime: { type: Object as PropType<ITimeValue>, default: () => ({}) },
        maxTime: { type: Object as PropType<ITimeValue>, default: () => ({}) },
        timePicker: { type: Boolean as PropType<boolean>, default: false },
        hours: { type: [Number, Array] as PropType<number | number[]>, default: 0 },
        minutes: { type: [Number, Array] as PropType<number | number[]>, default: 0 },
        seconds: { type: [Number, Array] as PropType<number | number[]>, default: 0 },
        instance: { type: [Number, Array] as PropType<number | number[]>, default: 1 },
        twoCalendars: { type: Boolean as PropType<boolean>, default: false },
        noHoursOverlay: { type: Boolean as PropType<boolean>, default: false },
        noMinutesOverlay: { type: Boolean as PropType<boolean>, default: false },
        noSecondsOverlay: { type: Boolean as PropType<boolean>, default: false },
        customProps: { type: Object as PropType<Record<string, unknown>>, default: null },
        enableSeconds: { type: Boolean as PropType<boolean>, default: false },
    });
    const slots = useSlots();

    const { transitionName, showTransition } = useTransitions();

    const showTimePicker = ref(false);

    const toggleTimePicker = (show: boolean): void => {
        showTimePicker.value = show;
    };

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
        maxTime: props.maxTime,
        minTime: props.minTime,
        noHoursOverlay: props.noHoursOverlay,
        noMinutesOverlay: props.noMinutesOverlay,
        noSecondsOverlay: props.noSecondsOverlay,
        enableSeconds: props.enableSeconds,
    }));

    const updateHours = (hours: number | number[]): void => {
        emit('update:hours', hours);
    };

    const updateMinutes = (minutes: number | number[]): void => {
        emit('update:minutes', minutes);
    };

    const updateSeconds = (seconds: number | number[]): void => {
        emit('update:seconds', seconds);
    };
</script>
