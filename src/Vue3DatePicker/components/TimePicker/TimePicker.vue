<template>
    <div>
        <div class="dp__button" @click="toggleTimePicker(true)"><ClockIcon /></div>
        <div v-if="showTimePicker" class="dp__overlay">
            <div class="dp__overlay_container">
                <div class="dp__overlay_row">
                    <template v-if="!range">
                        <TimeInput
                            @handleHours="handleHours($event)"
                            @handleMinutes="handleMinutes($event)"
                            @setHours="setHours($event)"
                            :is24="is24"
                            :hour-display="hourDisplay"
                            :minute-display="minuteDisplay"
                            :hours-grid-incremen="hoursGridIncrement"
                            :minutes-grid-increment="minutesGridIncrement"
                        />
                    </template>
                    <template v-if="range">
                        <TimeInput
                            :hour-display="hourDisplay"
                            :minute-display="minuteDisplay"
                            :is24="is24"
                            :hours-grid-increment="hoursGridIncrement"
                            :minutes-grid-increment="minutesGridIncrement"
                        />
                        <TimeInput
                            :hour-display="hourDisplay"
                            :minute-display="minuteDisplay"
                            :is24="is24"
                            :hours-grid-increment="hoursGridIncrement"
                            :minutes-grid-increment="minutesGridIncrement"
                        />
                    </template>
                    <!-- todo - add this -->
                    <!--                    <div v-if="!is24" class="dp__pm_am_button">-->
                    <!--                        <div><button>PM</button></div>-->
                    <!--                    </div>-->
                </div>
                <div class="dp__button" @click="toggleTimePicker(false)"><CalendarIcon /></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType, ref, toRef } from 'vue';
    import { TimePickerProps } from '../../interfaces';
    import { ClockIcon, CalendarIcon } from '../Icons';
    import TimeInput from './TimeInput.vue';

    export default defineComponent({
        name: 'TimePicker',
        emits: ['update:hoursSingle', 'update:minutesSingle'],
        components: {
            CalendarIcon,
            ClockIcon,
            TimeInput,
        },
        props: {
            hoursIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
            minutesIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
            is24: { type: Boolean as PropType<boolean>, default: true },
            hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
            hoursSingle: { type: Number as PropType<number>, default: 0 },
            minutesSingle: { type: Number as PropType<number>, default: 0 },
            range: { type: Boolean as PropType<boolean>, default: false },
        },
        setup(props: TimePickerProps, { emit }) {
            const hour = toRef(props, 'hoursSingle');
            const minute = toRef(props, 'minutesSingle');

            const showTimePicker = ref(false);

            const hourDisplay = computed((): string => {
                return hour.value < 10 ? `0${hour.value}` : `${hour.value}`;
            });

            const minuteDisplay = computed((): string => {
                return minute.value < 10 ? `0${minute.value}` : `${minute.value}`;
            });

            const getCols = computed(() => {
                return props.is24 ? 5 : 3;
            });

            const toggleTimePicker = (show: boolean): void => {
                showTimePicker.value = show;
            };

            const emitSingleHoursValue = (value: number): void => {
                emit('update:hoursSingle', value);
            };

            const emitSingleMinutesValue = (value: number): void => {
                emit('update:minutesSingle', value);
            };

            const handleSingleHoursValue = (type: string): void => {
                if (type === 'increment') {
                    if (
                        (props.is24 && hour.value + +props.hoursIncrement >= 24) ||
                        (!props.is24 && hour.value + +props.hoursIncrement >= 12)
                    ) {
                        emitSingleHoursValue(0);
                    } else {
                        emitSingleHoursValue(hour.value + +props.hoursIncrement);
                    }
                } else {
                    if (hour.value - +props.hoursIncrement < 0) {
                        emitSingleHoursValue(props.is24 ? 23 : 11);
                    } else {
                        emitSingleHoursValue(hour.value - +props.hoursIncrement);
                    }
                }
            };

            const handleRangeHoursValue = (type: string, position?: number): void => {
                console.log(type, position);
            };

            const handleHours = (type: string, position?: number): void => {
                if (!props.range) {
                    handleSingleHoursValue(type);
                } else {
                    handleRangeHoursValue(type, position);
                }
            };

            const setHours = (hours: number): void => {
                if (!props.range) {
                    emitSingleHoursValue(hours);
                }
            };

            const handleSingleMinutesValue = (type: string): void => {
                if (type === 'increment') {
                    if (minute.value + +props.minutesIncrement >= 60) {
                        emitSingleMinutesValue(0);
                    } else {
                        emitSingleMinutesValue(minute.value + +props.minutesIncrement);
                    }
                } else {
                    if (minute.value - +props.minutesIncrement < 0) {
                        emitSingleMinutesValue(59);
                    } else {
                        minute.value -= +props.minutesIncrement;
                        emitSingleMinutesValue(minute.value - +props.minutesIncrement);
                    }
                }
            };

            const handleRangeMinutesValue = (type: string, position?: number): void => {
                console.log(type, position);
            };

            const handleMinutes = (type: string, position?: number): void => {
                if (!props.range) {
                    handleSingleMinutesValue(type);
                } else {
                    handleRangeMinutesValue(type, position);
                }
            };

            return {
                hour,
                minute,
                hourDisplay,
                minuteDisplay,
                showTimePicker,
                getCols,
                toggleTimePicker,
                handleHours,
                handleMinutes,
                emitSingleHoursValue,
                setHours,
            };
        },
    });
</script>
