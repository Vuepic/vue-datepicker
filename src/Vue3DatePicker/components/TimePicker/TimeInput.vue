<template>
    <div class="dp__time_input" v-if="!disabled">
        <div :class="timeColClass">
            <div
                class="dp__inc_dec_button"
                role="button"
                aria-label="Increment hours"
                tabindex="0"
                @keydown.enter="handleTimeValue('hours')"
                @click="handleTimeValue('hours')"
            >
                <slot name="arrow-up" v-if="$slots['arrow-up']" />
                <ChevronUpIcon v-if="!$slots['arrow-up']" />
            </div>
            <div
                role="button"
                aria-label="Open hours overlay"
                :class="noHoursOverlay ? '' : 'dp__time_display'"
                tabindex="0"
                @keydown.enter="toggleHourOverlay"
                @click="toggleHourOverlay"
            >
                <slot v-if="$slots.hours" name="hours" :text="hourDisplay.text" :value="hourDisplay.value" />
                <template v-if="!$slots.hours">{{ hourDisplay.text }}</template>
            </div>
            <div
                class="dp__inc_dec_button"
                role="button"
                aria-label="Decrement hours"
                tabindex="0"
                @keydown.enter="handleTimeValue('hours', false)"
                @click="handleTimeValue('hours', false)"
            >
                <slot name="arrow-down" v-if="$slots['arrow-down']" />
                <ChevronDownIcon v-if="!$slots['arrow-down']" />
            </div>
        </div>
        <div :class="timeColClass">:</div>
        <div :class="timeColClass">
            <div
                class="dp__inc_dec_button"
                role="button"
                aria-label="Increment minutes"
                tabindex="0"
                @keydown.enter="handleTimeValue('minutes')"
                @click="handleTimeValue('minutes')"
            >
                <slot name="arrow-up" v-if="$slots['arrow-up']" />
                <ChevronUpIcon v-if="!$slots['arrow-up']" />
            </div>
            <div
                aria-label="Open minutes overlay"
                role="button"
                :class="noMinutesOverlay ? '' : 'dp__time_display'"
                tabindex="0"
                @keydown.enter="toggleMinuteOverlay"
                @click="toggleMinuteOverlay"
            >
                <slot v-if="$slots.minutes" name="minutes" :text="minuteDisplay.text" :value="minuteDisplay.value" />
                <template v-if="!$slots.minutes">{{ minuteDisplay.text }}</template>
            </div>
            <div
                class="dp__inc_dec_button"
                role="button"
                aria-label="Decrement minutes"
                tabindex="0"
                @keydown.enter="handleTimeValue('minutes', false)"
                @click="handleTimeValue('minutes', false)"
            >
                <slot name="arrow-down" v-if="$slots['arrow-down']" />
                <ChevronDownIcon v-if="!$slots['arrow-down']" />
            </div>
        </div>
        <div :class="timeColClass" v-if="enableSeconds">:</div>
        <div :class="timeColClass" v-if="enableSeconds">
            <div
                class="dp__inc_dec_button"
                role="button"
                aria-label="Increment seconds"
                tabindex="0"
                @keydown.enter="handleTimeValue('seconds')"
                @click="handleTimeValue('seconds')"
            >
                <slot name="arrow-up" v-if="$slots['arrow-up']" />
                <ChevronUpIcon v-if="!$slots['arrow-up']" />
            </div>
            <div
                role="button"
                aria-label="Open seconds overlay"
                :class="noSecondsOverlay ? '' : 'dp__time_display'"
                tabindex="0"
                @keydown.enter="toggleSecondsOverlay"
                @click="toggleSecondsOverlay"
            >
                <slot v-if="$slots.seconds" name="hours" :text="secondDisplay.text" :value="secondDisplay.value" />
                <template v-if="!$slots.seconds">{{ secondDisplay.text }}</template>
            </div>
            <div
                class="dp__inc_dec_button"
                role="button"
                aria-label="Decrement seconds"
                tabindex="0"
                @keydown.enter="handleTimeValue('seconds', false)"
                @click="handleTimeValue('seconds', false)"
            >
                <slot name="arrow-down" v-if="$slots['arrow-down']" />
                <ChevronDownIcon v-if="!$slots['arrow-down']" />
            </div>
        </div>
        <div v-if="!is24">
            <slot name="am-pm-button" v-if="$slots['am-pm-button']" :toggle="setAmPm" :value="amPm"></slot>
            <button
                v-if="!$slots['am-pm-button']"
                class="dp__pm_am_button"
                role="button"
                aria-label="Switch AM/PM mode"
                tabindex="0"
                @click="setAmPm"
                @keydown.enter="setAmPm"
            >
                {{ amPm }}
            </button>
        </div>
        <transition :name="transitionName(hourOverlay)" :css="showTransition">
            <SelectionGrid
                v-if="hourOverlay"
                :items="getGridItems(is24 ? 24 : 12, hoursGridIncrement)"
                :disabled-values="filters.times.hours"
                @update:model-value="$emit('update:hours', $event)"
                @selected="toggleHourOverlay"
                @toggle="toggleHourOverlay"
                @reset-flow="$emit('reset-flow')"
            >
                <template #button-icon>
                    <slot name="clock-icon" v-if="$slots['clock-icon']" />
                    <ClockIcon v-if="!$slots['clock-icon']" />
                </template>
                <template v-if="$slots['hours-overlay']" #item="{ item }">
                    <slot name="hours-overlay" :text="item.text" :value="item.value" />
                </template>
            </SelectionGrid>
        </transition>
        <transition :name="transitionName(minuteOverlay)" :css="showTransition">
            <SelectionGrid
                v-if="minuteOverlay"
                :items="getGridItems(60, minutesGridIncrement)"
                :disabled-values="filters.times.minutes"
                @update:model-value="$emit('update:minutes', $event)"
                @selected="toggleMinuteOverlay"
                @toggle="toggleMinuteOverlay"
                @reset-flow="$emit('reset-flow')"
            >
                <template #button-icon>
                    <slot name="clock-icon" v-if="$slots['clock-icon']" />
                    <ClockIcon v-if="!$slots['clock-icon']" />
                </template>
                <template v-if="$slots['minutes-overlay']" #item="{ item }">
                    <slot name="minutes-overlay" :text="item.text" :value="item.value" />
                </template>
            </SelectionGrid>
        </transition>
        <transition :name="transitionName(secondsOverlay)" :css="showTransition">
            <SelectionGrid
                v-if="secondsOverlay"
                :items="getGridItems(60, secondsGridIncrement)"
                :disabled-values="filters.times.seconds"
                @update:model-value="$emit('update:seconds', $event)"
                @selected="toggleSecondsOverlay"
                @toggle="toggleSecondsOverlay"
                @reset-flow="$emit('reset-flow')"
            >
                <template #button-icon>
                    <slot name="clock-icon" v-if="$slots['clock-icon']" />
                    <ClockIcon v-if="!$slots['clock-icon']" />
                </template>
                <template v-if="$slots['seconds-overlay']" #item="{ item }">
                    <slot name="seconds-overlay" :text="item.text" :value="item.value" />
                </template>
            </SelectionGrid>
        </transition>
    </div>
</template>

<script lang="ts" setup>
    import { computed, PropType, ref } from 'vue';
    import { getHours, getMinutes, getSeconds } from 'date-fns';

    import { ChevronUpIcon, ChevronDownIcon, ClockIcon } from '../Icons';

    import { DynamicClass, IDateFilter, IDefaultSelect, ITimeType } from '../../interfaces';
    import { getArrayInArray, hoursToAmPmHours } from '../../utils/util';
    import SelectionGrid from '../SelectionGrid.vue';
    import { useTransitions } from '../composition/transition';
    import { addTime, subTime } from '../../utils/date-utils';

    const emit = defineEmits([
        'setHours',
        'setMinutes',
        'update:hours',
        'update:minutes',
        'update:seconds',
        'reset-flow',
    ]);
    const props = defineProps({
        hours: { type: Number as PropType<number>, default: 0 },
        minutes: { type: Number as PropType<number>, default: 0 },
        seconds: { type: Number as PropType<number>, default: 0 },
        hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
        minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
        secondsGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
        hoursIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
        minutesIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
        secondsIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
        is24: { type: Boolean as PropType<boolean>, default: true },
        filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
        noHoursOverlay: { type: Boolean as PropType<boolean>, default: false },
        noMinutesOverlay: { type: Boolean as PropType<boolean>, default: false },
        noSecondsOverlay: { type: Boolean as PropType<boolean>, default: false },
        enableSeconds: { type: Boolean as PropType<boolean>, default: false },
        disabled: { type: Boolean as PropType<boolean>, default: false },
    });

    const hourOverlay = ref(false);
    const minuteOverlay = ref(false);
    const secondsOverlay = ref(false);
    const amPm = ref('AM');
    const { transitionName, showTransition } = useTransitions();

    const timeColClass = computed(
        (): DynamicClass => ({
            dp__time_col: true,
            dp__time_col_reg: !props.enableSeconds && props.is24,
            dp__time_col_reg_with_button: !props.enableSeconds && !props.is24,
            dp__time_col_sec: props.enableSeconds && props.is24,
            dp__time_col_sec_with_button: props.enableSeconds && !props.is24,
        }),
    );

    const hourDisplay = computed((): IDefaultSelect => {
        const hour = convert24ToAmPm(props.hours);
        return { text: hour < 10 ? `0${hour}` : `${hour}`, value: hour };
    });

    const minuteDisplay = computed((): IDefaultSelect => {
        return { text: props.minutes < 10 ? `0${props.minutes}` : `${props.minutes}`, value: props.minutes };
    });

    const secondDisplay = computed((): IDefaultSelect => {
        return { text: props.seconds < 10 ? `0${props.seconds}` : `${props.seconds}`, value: props.seconds };
    });

    const generateGridItems = (loopMax: number, increment: number) => {
        const generatedArray: IDefaultSelect[] = [];

        for (let i = 0; i < loopMax; i += increment) {
            generatedArray.push({ value: i, text: i < 10 ? `0${i}` : `${i}` });
        }

        return getArrayInArray(generatedArray);
    };

    const getGridItems = (max: number, increment: number | string): IDefaultSelect[][] => {
        return generateGridItems(max, +increment);
    };

    const toggleHourOverlay = (): void => {
        if (!props.noHoursOverlay) {
            hourOverlay.value = !hourOverlay.value;
        }
    };

    const toggleMinuteOverlay = (): void => {
        if (!props.noMinutesOverlay) {
            minuteOverlay.value = !minuteOverlay.value;
        }
    };

    const toggleSecondsOverlay = (): void => {
        if (!props.noSecondsOverlay) {
            secondsOverlay.value = !secondsOverlay.value;
        }
    };

    const getTypeValue = (type: ITimeType, inc: boolean): { hours: number; minutes: number; seconds: number } => {
        return {
            hours:
                type === 'hours'
                    ? inc
                        ? getHours(addTime({ hours: +props.hours }, { hours: +props.hoursIncrement }))
                        : getHours(subTime({ hours: +props.hours }, { hours: +props.hoursIncrement }))
                    : props.hours,
            minutes:
                type === 'minutes'
                    ? inc
                        ? getMinutes(addTime({ minutes: props.minutes }, { minutes: +props.minutesIncrement }))
                        : getMinutes(subTime({ minutes: props.minutes }, { minutes: +props.minutesIncrement }))
                    : props.minutes,
            seconds:
                type === 'seconds'
                    ? inc
                        ? getSeconds(addTime({ seconds: props.seconds }, { seconds: +props.secondsIncrement }))
                        : getSeconds(subTime({ seconds: props.seconds }, { seconds: +props.secondsIncrement }))
                    : props.seconds,
        };
    };

    const handleTimeValue = (type: ITimeType, inc = true): void => {
        const values = getTypeValue(type, inc);
        const value = values[type];
        if (inc) {
            emit(`update:${type}`, value);
        } else {
            emit(`update:${type}`, value);
        }
    };

    const convert24ToAmPm = (time: number): number => {
        if (props.is24) {
            return time;
        }
        if (time >= 12) {
            amPm.value = 'PM';
        } else {
            amPm.value = 'AM';
        }
        return hoursToAmPmHours(time);
    };

    const setAmPm = () => {
        if (amPm.value === 'PM') {
            amPm.value = 'AM';
            emit('update:hours', props.hours - 12);
        } else {
            amPm.value = 'PM';
            emit('update:hours', props.hours + 12);
        }
    };

    const openChildCmp = (child: string): void => {
        switch (child) {
            case 'hours':
                hourOverlay.value = true;
                break;
            case 'minutes':
                minuteOverlay.value = true;
                break;
            case 'seconds':
                secondsOverlay.value = true;
        }
    };

    defineExpose({ openChildCmp });
</script>
