<template>
    <div>
        <div class="dp__button" @click="toggleTimePicker(true)"><ClockIcon /></div>
        <div v-if="showTimePicker" class="dp__overlay">
            <div class="dp__overlay_container">
                <div class="dp__overlay_row">
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
                    </div>
                    <!-- todo - add this -->
                    <!--                    <div v-if="!is24" class="dp__pm_am_button">-->
                    <!--                        <div><button>PM</button></div>-->
                    <!--                    </div>-->
                </div>
                <div class="dp__button" @click="toggleTimePicker(false)"><CalendarIcon /></div>
            </div>
            <SelectionGrid
                v-if="hourOverlay"
                v-model="hour"
                :items="getHoursGridItems()"
                @selected="toggleHourOverlay"
                @toggle="toggleHourOverlay"
            >
                <template #button-icon>
                    <ClockIcon />
                </template>
            </SelectionGrid>
            <SelectionGrid
                v-if="minuteOverlay"
                v-model="minute"
                :items="getMinutesGridItems()"
                @selected="toggleMinuteOverlay"
                @toggle="toggleMinuteOverlay"
            >
                <template #button-icon>
                    <ClockIcon />
                </template>
            </SelectionGrid>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType, ref } from 'vue';
    // import RContainer from '@/components/RGrid/RContainer.vue';
    // import RRow from '@/components/RGrid/RRow.vue';
    // import RCol from '@/components/RGrid/RCol.vue';
    // import RButton from '@/components/RButton/RButton.vue';
    import { TimeInputProps, IDefaultSelect } from '../interfaces';
    import { ClockIcon, ChevronUpIcon, ChevronDownIcon, CalendarIcon } from './Icons';
    import SelectionGrid from './SelectionGrid.vue';
    import { getArrayInArray } from '../utils/util';

    export default defineComponent({
        name: 'TimeInputPicker',
        components: {
            CalendarIcon,
            ChevronDownIcon,
            // RRow,
            // RCol,
            // RContainer,
            // RButton,
            // ChevronDownIcon,
            ChevronUpIcon,
            ClockIcon,
            // CalendarIcon,
            SelectionGrid,
        },
        props: {
            hoursIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
            minutesIncrement: { type: [Number, String] as PropType<number | string>, default: 1 },
            is24: { type: Boolean as PropType<boolean>, default: true },
            hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
        },
        setup(props: TimeInputProps) {
            const hour = ref(0);
            const minute = ref(0);

            const showTimePicker = ref(false);
            const hourOverlay = ref(false);
            const minuteOverlay = ref(false);

            const hourDisplay = computed((): string => {
                return hour.value < 10 ? `0${hour.value}` : `${hour.value}`;
            });

            const minuteDisplay = computed((): string => {
                return minute.value < 10 ? `0${minute.value}` : `${minute.value}`;
            });

            const getCols = computed(() => {
                return props.is24 ? 5 : 3;
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

            const toggleTimePicker = (show: boolean): void => {
                showTimePicker.value = show;
            };

            const handleHours = (type: string): void => {
                if (type === 'increment') {
                    if (
                        (props.is24 && hour.value + +props.hoursIncrement >= 24) ||
                        (!props.is24 && hour.value + +props.hoursIncrement >= 12)
                    ) {
                        hour.value = 0;
                    } else {
                        hour.value += +props.hoursIncrement;
                    }
                } else {
                    if (hour.value - +props.hoursIncrement < 0) {
                        hour.value = props.is24 ? 23 : 11;
                    } else {
                        hour.value -= +props.hoursIncrement;
                    }
                }
            };

            const handleMinutes = (type: string): void => {
                if (type === 'increment') {
                    if (minute.value + +props.minutesIncrement >= 60) {
                        minute.value = 0;
                    } else {
                        minute.value += +props.minutesIncrement;
                    }
                } else {
                    if (minute.value - +props.minutesIncrement < 0) {
                        minute.value = 59;
                    } else {
                        minute.value -= +props.minutesIncrement;
                    }
                }
            };

            const toggleHourOverlay = (): void => {
                hourOverlay.value = !hourOverlay.value;
            };

            const toggleMinuteOverlay = (): void => {
                minuteOverlay.value = !minuteOverlay.value;
            };

            return {
                hour,
                minute,
                hourDisplay,
                minuteDisplay,
                showTimePicker,
                hourOverlay,
                minuteOverlay,
                getCols,
                getHoursGridItems,
                getMinutesGridItems,
                toggleTimePicker,
                handleHours,
                handleMinutes,
                toggleHourOverlay,
                toggleMinuteOverlay,
            };
        },
    });
</script>
