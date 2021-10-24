<template>
    <div class="dp__time_input">
        <div class="dp__time_col">
            <div
                class="dp__inc_dec_button"
                @click="handleHours('increment')"
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
                @click="handleHours('decrement')"
                role="button"
                aria-label="Decrement hours"
            >
                <slot name="arrow-down" v-if="$slots['arrow-down']" />
                <ChevronDownIcon v-if="!$slots['arrow-down']" />
            </div>
        </div>
        <div class="dp__time_col">:</div>
        <div class="dp__time_col">
            <div
                class="dp__inc_dec_button"
                @click="handleMinutes('increment')"
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
                @click="handleMinutes('decrement')"
                role="button"
                aria-label="Decrement minutes"
            >
                <slot name="arrow-down" v-if="$slots['arrow-down']" />
                <ChevronDownIcon v-if="!$slots['arrow-down']" />
            </div>
        </div>
        <div v-if="!is24">
            <button class="dp__pm_am_button" role="button" aria-label="Switch AM/PM mode" @click="setAmPm">
                {{ amPm }}
            </button>
        </div>
        <SelectionGrid
            v-if="hourOverlay"
            :items="getHoursGridItems()"
            :disabled-values="filters.times.hours"
            :min-value="minTime.hours"
            :max-value="maxTime.hours"
            @update:modelValue="$emit('update:hours', $event)"
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
        <SelectionGrid
            v-if="minuteOverlay"
            :items="getMinutesGridItems()"
            :disabled-values="filters.times.minutes"
            :min-value="minTime.minutes"
            :max-value="maxTime.minutes"
            @update:modelValue="$emit('update:minutes', $event)"
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
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, PropType, ref, toRef } from 'vue';
    import { ChevronUpIcon, ChevronDownIcon, ClockIcon } from '../Icons';
    import { IDateFilter, IDefaultSelect, ITimeValue } from '../../interfaces';
    import { getArrayInArray, hoursToAmPmHours } from '../../utils/util';
    import SelectionGrid from '../SelectionGrid.vue';
    import { addDateHours, addDateMinutes, subDateHours, subDateMinutes } from '../../utils/date-utils';

    const emit = defineEmits(['setHours', 'setMinutes', 'update:hours', 'update:minutes']);
    const props = defineProps({
        hours: { type: Number as PropType<number>, default: 0 },
        minutes: { type: Number as PropType<number>, default: 0 },
        hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
        minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
        hoursIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
        minutesIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
        is24: { type: Boolean as PropType<boolean>, default: true },
        filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
        minTime: { type: Object as PropType<ITimeValue>, default: () => ({}) },
        maxTime: { type: Object as PropType<ITimeValue>, default: () => ({}) },
        noHoursOverlay: { type: Boolean as PropType<boolean>, default: false },
        noMinutesOverlay: { type: Boolean as PropType<boolean>, default: false },
    });

    const hourOverlay = ref(false);
    const minuteOverlay = ref(false);
    const hours = toRef(props, 'hours');
    const minutes = toRef(props, 'minutes');
    const amPm = ref('AM');

    onMounted(() => {
        checkMinMaxHours();
    });

    const hourDisplay = computed((): IDefaultSelect => {
        const hour = convert24ToAmPm(hours.value);
        return { text: hour < 10 ? `0${hour}` : `${hour}`, value: hour };
    });

    const minuteDisplay = computed((): IDefaultSelect => {
        return { text: minutes.value < 10 ? `0${minutes.value}` : `${minutes.value}`, value: minutes.value };
    });

    const generateGridItems = (loopMax: number, increment: number) => {
        const generatedArray: IDefaultSelect[] = [];

        for (let i = 0; i < loopMax; i += increment) {
            generatedArray.push({ value: i, text: i < 10 ? `0${i}` : `${i}` });
        }

        return getArrayInArray(generatedArray);
    };

    const getHoursGridItems = (): IDefaultSelect[][] => {
        const hours = props.is24 ? 24 : 12;
        return generateGridItems(hours, +props.hoursGridIncrement);
    };

    const getMinutesGridItems = (): IDefaultSelect[][] => {
        return generateGridItems(60, +props.minutesGridIncrement);
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

    const checkMinMaxHours = (): void => {
        if (Object.keys(props.maxTime).length) {
            if (props.maxTime.hours && hours.value > props.maxTime.hours) {
                emit('update:hours', +props.maxTime.hours);
            }
            if (props.maxTime.minutes && minutes.value > props.maxTime.minutes) {
                emit('update:minutes', +props.maxTime.minutes);
            }
        }
        if (Object.keys(props.minTime).length) {
            if (props.minTime.hours && hours.value < props.minTime.hours) {
                emit('update:hours', +props.minTime.hours);
            }
            if (props.minTime.minutes && minutes.value < props.minTime.minutes) {
                emit('update:minutes', +props.minTime.minutes);
            }
        }
    };

    const handleHours = (type: string): void => {
        if (type === 'increment') {
            const hoursValue = addDateHours(hours.value, +props.hoursIncrement);
            if (props.maxTime.hours) {
                if (hoursValue > +props.maxTime.hours) {
                    return;
                }
            }
            if (props.minTime.hours) {
                if (hoursValue < +props.minTime.hours) {
                    return;
                }
            }
            emit('update:hours', hoursValue);
        } else {
            const hoursValue = subDateHours(hours.value, +props.hoursIncrement);
            if (props.minTime.hours) {
                if (hoursValue < +props.minTime.hours) {
                    return;
                }
            }
            if (props.maxTime.hours) {
                if (hoursValue > +props.maxTime.hours) {
                    return;
                }
            }
            emit('update:hours', hoursValue);
        }
    };

    const handleMinutes = (type: string): void => {
        if (type === 'increment') {
            const minutesValue = addDateMinutes(minutes.value, +props.minutesIncrement);
            if (props.maxTime.minutes) {
                if (minutesValue > +props.maxTime.minutes || minutesValue === 0) {
                    return;
                }
            }
            if (props.minTime.minutes) {
                if (minutesValue < +props.minTime.minutes || minutesValue === 0) {
                    return;
                }
            }
            emit('update:minutes', minutesValue);
        } else {
            const minutesValue = subDateMinutes(minutes.value, +props.minutesIncrement);
            if (props.minTime.minutes) {
                if (minutesValue < +props.minTime.minutes || minutesValue === 0) {
                    return;
                }
            }
            if (props.maxTime.minutes) {
                if (minutesValue > +props.maxTime.minutes) {
                    return;
                }
            }
            emit('update:minutes', minutesValue);
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
            emit('update:hours', hours.value - 12);
        } else {
            amPm.value = 'PM';
            emit('update:hours', hours.value + 12);
        }
    };
</script>
