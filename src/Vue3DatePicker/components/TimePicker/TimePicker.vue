<template>
    <div>
        <div class="dp__button" @click="toggleTimePicker(true)"><ClockIcon /></div>
        <div v-if="showTimePicker" class="dp__overlay">
            <div class="dp__overlay_container">
                <div class="dp__overlay_row">
                    <template v-if="!range">
                        <TimeInput
                            :is24="is24"
                            :hours="hoursSingle"
                            :minutes="minutesSingle"
                            @update:hours="$emit('update:hoursSingle', $event)"
                            @update:minutes="$emit('update:minutesSingle', $event)"
                            :hours-grid-incremen="hoursGridIncrement"
                            :minutes-grid-increment="minutesGridIncrement"
                            :hours-increment="hoursIncrement"
                            :minutes-increment="minutesIncrement"
                            :filters="filters"
                        />
                    </template>
                    <template v-if="range">
                        <TimeInput
                            :hours="hoursRange[0]"
                            :minutes="minutesRange[0]"
                            @update:hours="$emit('update:hoursRange', [$event, hoursRange[1]])"
                            @update:minutes="$emit('update:minutesRange', [$event, minutesRange[1]])"
                            :is24="is24"
                            :hours-grid-increment="hoursGridIncrement"
                            :minutes-grid-increment="minutesGridIncrement"
                            :hours-increment="hoursIncrement"
                            :minutes-increment="minutesIncrement"
                            :filters="filters"
                        />
                        <TimeInput
                            :hours="hoursRange[1]"
                            :minutes="minutesRange[1]"
                            @update:hours="$emit('update:hoursRange', [hoursRange[0], $event])"
                            @update:minutes="$emit('update:minutesRange', [hoursRange[0], $event])"
                            :is24="is24"
                            :hours-grid-increment="hoursGridIncrement"
                            :minutes-grid-increment="minutesGridIncrement"
                            :hours-increment="hoursIncrement"
                            :minutes-increment="minutesIncrement"
                            :filters="filters"
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
    import { defineComponent, PropType, ref } from 'vue';
    import { IDateFilter, IHoursRange, IMinutesRange } from '../../interfaces';
    import { ClockIcon, CalendarIcon } from '../Icons';
    import TimeInput from './TimeInput.vue';

    export default defineComponent({
        name: 'TimePicker',
        emits: ['update:hoursSingle', 'update:minutesSingle', 'update:hoursRange', 'update:minutesRange'],
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
            hoursRange: { type: Array as unknown as PropType<IHoursRange>, default: () => [0, 0] },
            minutesRange: { type: Array as unknown as PropType<IMinutesRange>, default: () => [0, 0] },
            range: { type: Boolean as PropType<boolean>, default: false },
            filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
        },
        setup() {
            const showTimePicker = ref(false);

            const toggleTimePicker = (show: boolean): void => {
                showTimePicker.value = show;
            };

            return {
                showTimePicker,
                toggleTimePicker,
            };
        },
    });
</script>
