<template>
    <div class="dp__time_input">
        <div class="dp__time_col">
            <div class="dp__inc_dec_button" @click="$emit('handleHours', 'increment')">
                <ChevronUpIcon />
            </div>
            <div class="dp__time_display" @click="toggleHourOverlay">{{ hourDisplay }}</div>
            <div class="dp__inc_dec_button" @click="$emit('handleHours', 'decrement')">
                <ChevronDownIcon />
            </div>
        </div>
        <div class="dp__time_col">:</div>
        <div class="dp__time_col">
            <div class="dp__inc_dec_button" @click="$emit('handleMinutes', 'increment')">
                <ChevronUpIcon />
            </div>
            <div class="dp__time_display" @click="toggleMinuteOverlay">
                {{ minuteDisplay }}
            </div>
            <div class="dp__inc_dec_button" @click="$emit('handleMinutes', 'decrement')">
                <ChevronDownIcon />
            </div>
        </div>
        <SelectionGrid
            v-if="hourOverlay"
            @update:modelValue="$emit('setHours', $event)"
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
            :items="getMinutesGridItems()"
            @selected="toggleMinuteOverlay"
            @toggle="toggleMinuteOverlay"
        >
            <template #button-icon>
                <ClockIcon />
            </template>
        </SelectionGrid>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType, ref } from 'vue';
    import { ChevronUpIcon, ChevronDownIcon, ClockIcon } from '../Icons';
    import { IDefaultSelect, TimeInputProps } from '../../interfaces';
    import { getArrayInArray } from '../../utils/util';
    import SelectionGrid from '../SelectionGrid.vue';

    export default defineComponent({
        name: 'TimeInput',
        emits: ['handleHours', 'handleMinutes', 'setHours'],
        components: {
            ChevronDownIcon,
            ChevronUpIcon,
            ClockIcon,
            SelectionGrid,
        },
        props: {
            hourDisplay: { type: String as PropType<string>, default: '' },
            minuteDisplay: { type: String as PropType<string>, default: '' },
            hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
            is24: { type: Boolean as PropType<boolean>, default: true },
        },
        setup(props: TimeInputProps) {
            const showTimePicker = ref(false);
            const hourOverlay = ref(false);
            const minuteOverlay = ref(false);

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

            return {
                showTimePicker,
                hourOverlay,
                minuteOverlay,
                toggleHourOverlay,
                toggleMinuteOverlay,
                getHoursGridItems,
                getMinutesGridItems,
            };
        },
    });
</script>
