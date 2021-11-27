<template>
    <div class="dp__time_input">
        <div :class="timeColClass">
            <div
                class="dp__inc_dec_button"
                @click="handleTimeValue('hours')"
                role="button"
                aria-label="Increment hours"
            >
                <slot name="arrow-up" v-if="$slots['arrow-up']" />
                <ChevronUpIcon v-if="!$slots['arrow-up']" />
            </div>
            <div
                :class="noHoursOverlay ? '' : 'dp__time_display'"
                @click="toggleHourOverlay"
                role="button"
                aria-label="Open hours overlay"
            >
                <slot v-if="$slots.hours" name="hours" :text="hourDisplay.text" :value="hourDisplay.value" />
                <template v-if="!$slots.hours">{{ hourDisplay.text }}</template>
            </div>
            <div
                class="dp__inc_dec_button"
                @click="handleTimeValue('hours', false)"
                role="button"
                aria-label="Decrement hours"
            >
                <slot name="arrow-down" v-if="$slots['arrow-down']" />
                <ChevronDownIcon v-if="!$slots['arrow-down']" />
            </div>
        </div>
        <div :class="timeColClass">:</div>
        <div :class="timeColClass">
            <div
                class="dp__inc_dec_button"
                @click="handleTimeValue('minutes')"
                role="button"
                aria-label="Increment minutes"
            >
                <slot name="arrow-up" v-if="$slots['arrow-up']" />
                <ChevronUpIcon v-if="!$slots['arrow-up']" />
            </div>
            <div
                :class="noMinutesOverlay ? '' : 'dp__time_display'"
                @click="toggleMinuteOverlay"
                role="button"
                aria-label="Open minutes overlay"
            >
                <slot v-if="$slots.minutes" name="minutes" :text="minuteDisplay.text" :value="minuteDisplay.value" />
                <template v-if="!$slots.minutes">{{ minuteDisplay.text }}</template>
            </div>
            <div
                class="dp__inc_dec_button"
                @click="handleTimeValue('minutes', false)"
                role="button"
                aria-label="Decrement minutes"
            >
                <slot name="arrow-down" v-if="$slots['arrow-down']" />
                <ChevronDownIcon v-if="!$slots['arrow-down']" />
            </div>
        </div>
        <div :class="timeColClass" v-if="enableSeconds">:</div>
        <div :class="timeColClass" v-if="enableSeconds">
            <div
                class="dp__inc_dec_button"
                @click="handleTimeValue('seconds')"
                role="button"
                aria-label="Increment seconds"
            >
                <slot name="arrow-up" v-if="$slots['arrow-up']" />
                <ChevronUpIcon v-if="!$slots['arrow-up']" />
            </div>
            <div
                :class="noSecondsOverlay ? '' : 'dp__time_display'"
                @click="toggleSecondsOverlay"
                role="button"
                aria-label="Open seconds overlay"
            >
                <slot v-if="$slots.seconds" name="hours" :text="secondDisplay.text" :value="secondDisplay.value" />
                <template v-if="!$slots.seconds">{{ secondDisplay.text }}</template>
            </div>
            <div
                class="dp__inc_dec_button"
                @click="handleTimeValue('seconds', false)"
                role="button"
                aria-label="Decrement seconds"
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
                @click="setAmPm"
            >
                {{ amPm }}
            </button>
        </div>
        <transition :name="transitionName(hourOverlay)" :css="showTransition">
            <SelectionGrid
                v-if="hourOverlay"
                :items="getGridItems(is24 ? 24 : 12, hoursGridIncrement)"
                :disabled-values="filters.times.hours"
                :min-value="minTime.hours"
                :max-value="maxTime.hours"
                @update:model-value="$emit('update:hours', $event)"
                @selected="toggleHourOverlay"
                @toggle="toggleHourOverlay"
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
                :min-value="minTime.minutes"
                :max-value="maxTime.minutes"
                @update:model-value="$emit('update:minutes', $event)"
                @selected="toggleMinuteOverlay"
                @toggle="toggleMinuteOverlay"
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
                :min-value="minTime.seconds"
                :max-value="maxTime.seconds"
                @update:model-value="$emit('update:seconds', $event)"
                @selected="toggleSecondsOverlay"
                @toggle="toggleSecondsOverlay"
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
    import { computed, onMounted, PropType, ref } from 'vue';
    import { ChevronUpIcon, ChevronDownIcon, ClockIcon } from '../Icons';
    import { DynamicClass, IDateFilter, IDefaultSelect, ITimeType, ITimeValue } from '../../interfaces';
    import { getArrayInArray, hoursToAmPmHours } from '../../utils/util';
    import SelectionGrid from '../SelectionGrid.vue';
    import {
        addDateHours,
        addDateMinutes,
        addDateSeconds,
        subDateHours,
        subDateMinutes,
        subDateSeconds,
    } from '../../utils/date-utils';
    import { useTransitions } from '../composition/transition';

    const emit = defineEmits(['setHours', 'setMinutes', 'update:hours', 'update:minutes', 'update:seconds']);
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
        minTime: { type: Object as PropType<ITimeValue>, default: () => ({}) },
        maxTime: { type: Object as PropType<ITimeValue>, default: () => ({}) },
        noHoursOverlay: { type: Boolean as PropType<boolean>, default: false },
        noMinutesOverlay: { type: Boolean as PropType<boolean>, default: false },
        noSecondsOverlay: { type: Boolean as PropType<boolean>, default: false },
        enableSeconds: { type: Boolean as PropType<boolean>, default: false },
    });

    const hourOverlay = ref(false);
    const minuteOverlay = ref(false);
    const secondsOverlay = ref(false);
    const typeTypes = ref<ITimeType[]>(['hours', 'minutes', 'seconds']);
    const amPm = ref('AM');
    const { transitionName, showTransition } = useTransitions();

    onMounted(() => {
        checkMinMaxHours();
    });

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
    // for control flow
    const getMaxType = (type: ITimeType): string => props.maxTime[type] as string;
    const getMinType = (type: ITimeType): string => props.minTime[type] as string;

    const checkMinMaxHours = (): void => {
        if (Object.keys(props.maxTime).length) {
            typeTypes.value.forEach((type) => {
                if (props.maxTime[type] && props[type] > +getMaxType(type)) {
                    emit(`update:${type}`, +getMaxType(type));
                }
            });
        }
        if (Object.keys(props.minTime).length) {
            typeTypes.value.forEach((type) => {
                if (props.minTime[type] && props[type] < +getMaxType(type)) {
                    emit(`update:${type}`, +getMaxType(type));
                }
            });
        }
    };

    const getTypeValue = (type: ITimeType, inc: boolean): number => {
        if (type === 'hours') {
            return inc
                ? addDateHours(props.hours, +props.hoursIncrement)
                : subDateHours(props.hours, +props.hoursIncrement);
        }
        if (type === 'minutes') {
            return inc
                ? addDateMinutes(props.minutes, +props.minutesIncrement)
                : subDateMinutes(props.minutes, +props.minutesIncrement);
        }
        return inc
            ? addDateSeconds(props.seconds, +props.secondsIncrement)
            : subDateSeconds(props.seconds, +props.secondsIncrement);
    };

    const handleTimeValue = (type: ITimeType, inc = true): void => {
        const value = getTypeValue(type, inc);
        if (inc) {
            if (props.maxTime[type]) {
                if (value > +getMaxType(type) || value === 0) {
                    return;
                }
            }
            if (props.minTime[type]) {
                if (value < +getMinType(type) || value === 0) {
                    return;
                }
            }
            emit(`update:${type}`, value);
        } else {
            if (props.minTime[type]) {
                if (value < +getMaxType(type) || value === 0) {
                    return;
                }
            }
            if (props.maxTime[type]) {
                if (value > +getMaxType(type)) {
                    return;
                }
            }
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
</script>
