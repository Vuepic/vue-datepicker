<template>
    <div class="dp__time_input">
        <div class="dp__time_col">
            <div class="dp__inc_dec_button" @click="handleHours('increment')">
                <ChevronUpIcon />
            </div>
            <div class="dp__time_display" @click="toggleHourOverlay">{{ hourDisplay }}</div>
            <div class="dp__inc_dec_button" @click="handleHours('decrement')">
                <ChevronDownIcon />
            </div>
        </div>
        <div class="dp__time_col">:</div>
        <div class="dp__time_col">
            <div class="dp__inc_dec_button" @click="handleMinutes('increment')">
                <ChevronUpIcon />
            </div>
            <div class="dp__time_display" @click="toggleMinuteOverlay">
                {{ minuteDisplay }}
            </div>
            <div class="dp__inc_dec_button" @click="handleMinutes('decrement')">
                <ChevronDownIcon />
            </div>
        </div>
        <div v-if="!is24">
            <button class="dp__pm_am_button" @click="setAmPm">{{ amPm }}</button>
        </div>
        <SelectionGrid
            v-if="hourOverlay"
            @update:modelValue="$emit('update:hours', $event)"
            :items="getHoursGridItems()"
            @selected="toggleHourOverlay"
            @toggle="toggleHourOverlay"
            :disabled-values="filters.times.hours"
            :min-value="minTime.hours"
            :max-value="maxTime.hours"
        >
            <template #button-icon>
                <ClockIcon />
            </template>
        </SelectionGrid>
        <SelectionGrid
            v-if="minuteOverlay"
            @update:modelValue="$emit('update:minutes', $event)"
            :items="getMinutesGridItems()"
            @selected="toggleMinuteOverlay"
            @toggle="toggleMinuteOverlay"
            :disabled-values="filters.times.minutes"
            :min-value="minTime.minutes"
            :max-value="maxTime.minutes"
        >
            <template #button-icon>
                <ClockIcon />
            </template>
        </SelectionGrid>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType, ref, toRef } from 'vue';
    import { ChevronUpIcon, ChevronDownIcon, ClockIcon } from '../Icons';
    import { IDateFilter, IDefaultSelect, ITimeRange, TimeInputProps } from '../../interfaces';
    import { getArrayInArray, hoursToAmPmHours } from '../../utils/util';
    import SelectionGrid from '../SelectionGrid.vue';

    export default defineComponent({
        name: 'TimeInput',
        emits: ['setHours', 'setMinutes', 'update:hours', 'update:minutes'],
        components: {
            ChevronDownIcon,
            ChevronUpIcon,
            ClockIcon,
            SelectionGrid,
        },
        props: {
            hours: { type: Number as PropType<number>, default: 0 },
            minutes: { type: Number as PropType<number>, default: 0 },
            hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
            hoursIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
            minutesIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
            is24: { type: Boolean as PropType<boolean>, default: true },
            filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
            minTime: { type: Object as PropType<ITimeRange>, default: () => ({}) },
            maxTime: { type: Object as PropType<ITimeRange>, default: () => ({}) },
        },
        setup(props: TimeInputProps, { emit }) {
            const showTimePicker = ref(false);
            const hourOverlay = ref(false);
            const minuteOverlay = ref(false);
            const hours = toRef(props, 'hours');
            const minutes = toRef(props, 'minutes');
            const amPm = ref('AM');

            const hourDisplay = computed((): string => {
                const hour = convert24ToAmPm(hours.value);
                return hour < 10 ? `0${hour}` : `${hour}`;
            });

            const minuteDisplay = computed((): string => {
                return minutes.value < 10 ? `0${minutes.value}` : `${minutes.value}`;
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
                hourOverlay.value = !hourOverlay.value;
            };

            const toggleMinuteOverlay = (): void => {
                minuteOverlay.value = !minuteOverlay.value;
            };

            const handleHours = (type: string): void => {
                if (type === 'increment') {
                    if (props.maxTime.hours) {
                        if (hours.value + +props.hoursIncrement > +props.maxTime.hours) {
                            return;
                        }
                    }
                    if (
                        (props.is24 && hours.value + +props.hoursIncrement >= 24) ||
                        (!props.is24 && hours.value + +props.hoursIncrement >= 12)
                    ) {
                        emit('update:hours', 0);
                    } else {
                        emit('update:hours', hours.value + +props.hoursIncrement);
                    }
                } else {
                    if (props.minTime.hours) {
                        if (hours.value - +props.hoursIncrement < +props.minTime.hours) {
                            return;
                        }
                    }
                    if (hours.value - +props.hoursIncrement < 0) {
                        emit('update:hours', props.is24 ? 23 : 11);
                    } else {
                        emit('update:hours', hours.value - +props.hoursIncrement);
                    }
                }
            };

            const handleMinutes = (type: string): void => {
                if (type === 'increment') {
                    if (props.maxTime.minutes) {
                        if (minutes.value + +props.minutesIncrement > +props.maxTime.minutes) {
                            return;
                        }
                    }
                    if (minutes.value + +props.minutesIncrement >= 60) {
                        emit('update:minutes', 0);
                    } else {
                        emit('update:minutes', minutes.value + +props.minutesIncrement);
                    }
                } else {
                    if (props.minTime.minutes) {
                        if (minutes.value - +props.minutesIncrement < +props.minTime.minutes) {
                            return;
                        }
                    }
                    if (minutes.value - +props.minutesIncrement < 0) {
                        emit('update:minutes', 59);
                    } else {
                        emit('update:minutes', minutes.value - +props.minutesIncrement);
                    }
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

            return {
                showTimePicker,
                hourOverlay,
                minuteOverlay,
                hourDisplay,
                minuteDisplay,
                toggleHourOverlay,
                toggleMinuteOverlay,
                getHoursGridItems,
                getMinutesGridItems,
                handleHours,
                handleMinutes,
                setAmPm,
                amPm,
            };
        },
    });
</script>
