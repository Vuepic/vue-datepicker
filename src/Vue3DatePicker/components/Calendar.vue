<template>
    <div :class="calendarClass">
        <div :class="contentWrapClass">
            <component
                :is="monthYearComponent ? monthYearComponent : MonthYearInput"
                v-if="!disableMonthYearSelect && !timePicker"
                v-bind="{
                    months,
                    years,
                    filters,
                    monthPicker: specificMode,
                    month,
                    year,
                    customProps,
                    twoCalendars,
                    instance,
                }"
                @update:month="$emit('update:month', $event)"
                @update:year="$emit('update:year', $event)"
            >
                <template v-for="(slot, i) in monthYearSlots" #[slot]="args" :key="i">
                    <slot :name="slot" v-bind="args" />
                </template>
            </component>
            <table class="dp__calendar_tb" v-if="!specificMode">
                <thead>
                    <tr class="dp__calendar_days">
                        <th class="dp__calendar_header_cell" v-if="weekNumbers">{{ weekNumName }}</th>
                        <th class="dp__calendar_header_cell" v-for="(dayVal, i) in weekDays" :key="i">{{ dayVal }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(week, weekInd) in mappedDates" :key="weekInd">
                        <td v-if="weekNumbers" class="dp__cell dp__week_num">{{ getWeekNum(week.days) }}</td>
                        <td
                            class="dp__cell"
                            v-for="(dayVal, dayInd) in week.days"
                            :key="dayInd + weekInd"
                            @click="$emit('selectDate', dayVal)"
                            @mouseover="$emit('setHoverDate', dayVal)"
                        >
                            <div class="dp__cell_inner" :class="dayVal.classData">
                                <slot name="day" v-if="$slots.day" :day="+dayVal.text" :date="dayVal.value"></slot>
                                <template v-if="!$slots.day">
                                    {{ dayVal.text }}
                                </template>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <component
                v-if="enableTimePicker"
                :is="timePickerComponent ? timePickerComponent : TimePickerCmp"
                v-bind="{
                    is24,
                    hoursIncrement,
                    minutesIncrement,
                    hoursGridIncrement,
                    minutesGridIncrement,
                    range,
                    filters,
                    minTime,
                    maxTime,
                    timePicker,
                    hours,
                    minutes,
                    customProps,
                    twoCalendars,
                    instance,
                }"
                @update:hours="$emit('update:hours', $event)"
                @update:minutes="$emit('update:minutes', $event)"
            >
                <template v-for="(slot, i) in timePickerSlots" #[slot]="args" :key="i">
                    <slot :name="slot" v-bind="args" />
                </template>
            </component>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, DefineComponent, PropType, UnwrapRef, useSlots } from 'vue';

    import TimePickerCmp from './TimePicker/TimePicker.vue';
    import MonthYearInput from './MonthYearInput.vue';

    import { DynamicClass, IDateFilter, ITimeValue, ICalendarDate, ICalendarDay, IDefaultSelect } from '../interfaces';
    import { getDayNames } from '../utils/util';
    import { mapSlots } from './composition/slots';

    defineEmits(['update:hours', 'update:minutes', 'selectDate', 'setHoverDate', 'update:month', 'update:year']);

    const props = defineProps({
        locale: { type: String as PropType<string>, default: 'en-Us' },
        weekNumName: { type: String as PropType<string>, default: 'W' },
        weekStart: { type: [Number, String] as PropType<number | string>, default: 1 },
        weekNumbers: { type: Boolean as PropType<boolean>, default: false },
        mappedDates: { type: Array as PropType<ICalendarDate[]>, default: () => [] },
        enableTimePicker: { type: Boolean as PropType<boolean>, default: true },
        timePickerComponent: { type: Object as PropType<DefineComponent>, default: null },
        monthYearComponent: { type: Object as PropType<DefineComponent>, default: null },
        is24: { type: Boolean as PropType<boolean>, default: true },
        hoursIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
        minutesIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
        hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
        minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
        range: { type: Boolean as PropType<boolean>, default: false },
        filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
        minTime: { type: Object as PropType<ITimeValue>, default: () => ({}) },
        maxTime: { type: Object as PropType<ITimeValue>, default: () => ({}) },
        customProps: { type: Object as PropType<Record<string, unknown>>, default: null },
        hours: { type: [Number, Array] as PropType<number | number[]>, default: 0 },
        minutes: { type: [Number, Array] as PropType<number | number[]>, default: 0 },
        calendarClassName: { type: String as PropType<string>, default: null },
        monthPicker: { type: Boolean as PropType<boolean>, default: false },
        timePicker: { type: Boolean as PropType<boolean>, default: false },
        disableMonthYearSelect: { type: Boolean as PropType<boolean>, default: false },
        getWeekNum: {
            type: Function as PropType<(dates: UnwrapRef<ICalendarDay[]>) => string | number>,
            default: () => '',
        },
        instance: { type: Number as PropType<number>, default: 1 },
        twoCalendars: { type: Boolean as PropType<boolean>, default: false },
        years: { type: Array as PropType<IDefaultSelect[]>, default: () => [] },
        months: { type: Array as PropType<IDefaultSelect[]>, default: () => [] },
        month: { type: Number as PropType<number>, default: 0 },
        year: { type: Number as PropType<number>, default: 0 },
    });
    const slots = useSlots();

    const weekDays = computed(() => {
        return getDayNames(props.locale, +props.weekStart);
    });

    const timePickerSlots = mapSlots(slots, 'timePicker');
    const monthYearSlots = mapSlots(slots, 'monthYear');

    const specificMode = computed(() => props.monthPicker || props.timePicker);

    // Class object for top most calendar wrapper
    const calendarClass = computed(
        (): DynamicClass => ({
            ['dp__calendar']: true,
            [props.calendarClassName]: !!props.calendarClassName,
        }),
    );

    // Wrapper class for the wrapper div
    const contentWrapClass = computed(
        (): DynamicClass => ({
            dp__calendar_content_wrap: true,
            dp_calendar_fixed: specificMode.value,
        }),
    );
</script>
