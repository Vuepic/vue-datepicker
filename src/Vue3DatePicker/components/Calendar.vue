<template>
    <div :class="calendarClass">
        <div :class="contentWrapClass">
            <component
                :is="monthYearCmp"
                v-if="!disableMonthYearSelect && !timePicker"
                v-bind="{ months, years, filters, monthPicker, month, year, customProps }"
                @update:month="updateMonthYear($event)"
                @update:year="updateMonthYear($event, false)"
            >
                <template v-for="(slot, i) in monthYearSlots" #[slot] :key="i">
                    <slot :name="slot" />
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
                        <td v-if="weekNumbers" class="dp__cell dp__week_num">{{ getWeekDay(week.days) }}</td>
                        <td
                            class="dp__cell"
                            v-for="(dayVal, dayInd) in week.days"
                            :key="dayInd + weekInd"
                            @click="selectDate(dayVal)"
                            @mouseover="setHoverDate(dayVal)"
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
                :is="timePickerCmp"
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
                }"
                @update:hours="updateTime($event)"
                @update:minutes="updateTime($event, false)"
            >
                <template v-for="(slot, i) in timePickerSlots" #[slot] :key="i">
                    <slot :name="slot" />
                </template>
            </component>
        </div>
        <ActionRow
            v-if="!autoApply"
            v-bind="{
                selectText,
                cancelText,
                internalModelValue,
                range,
                previewFormat,
                inline,
                monthPicker,
                timePicker,
            }"
            @closePicker="$emit('closePicker')"
            @selectDate="$emit('selectDate')"
        >
            <template v-for="(slot, i) in actionSlots" #[slot]="props" :key="i">
                <slot :name="slot" v-bind="{ ...props }" />
            </template>
        </ActionRow>
    </div>
</template>

<script lang="ts">
    import { computed, DefineComponent, defineComponent, PropType } from 'vue';
    import MonthYearInput from './MonthYearInput.vue';
    import TimePicker from './TimePicker/TimePicker.vue';
    import ActionRow from './ActionRow.vue';
    import {
        CalendarProps,
        ICalendarDate,
        DynamicClass,
        IDefaultSelect,
        IDateFilter,
        IFormat,
        ITimeValue,
        InternalModuleValue,
    } from '../interfaces';
    import { getCalendarDays, getDayNames, getMonths, getYears } from '../utils/util';
    import { isDateEqual } from '../utils/date-utils';
    import { useCalendar } from '../utils/composition/calendar';
    import { useSlots } from '../utils/composition/slots';

    export default defineComponent({
        name: 'Calendar',
        components: {
            MonthYearInput,
            TimePicker,
            ActionRow,
        },
        emits: ['update:internalModelValue', 'closePicker', 'selectDate', 'autoApply'],
        props: {
            weekStart: { type: [Number, String] as PropType<number | string>, default: 1 },
            weekNumbers: { type: Boolean as PropType<boolean>, default: false },
            disableMonthYearSelect: { type: Boolean as PropType<boolean>, default: false },
            calendarClassName: { type: String as PropType<string>, default: null },
            yearRange: { type: Array as PropType<number[]>, default: () => [] },
            internalModelValue: { type: [Date, Array, Object] as PropType<InternalModuleValue>, default: null },
            calendarCellClassName: { type: String as PropType<string>, default: null },
            enableTimePicker: { type: Boolean as PropType<boolean>, default: true },
            is24: { type: Boolean as PropType<boolean>, default: true },
            hoursIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            minutesIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
            range: { type: Boolean as PropType<boolean>, default: false },
            autoApply: { type: Boolean as PropType<boolean>, default: false },
            selectText: { type: String as PropType<string>, default: 'Select' },
            cancelText: { type: String as PropType<string>, default: 'Cancel' },
            previewFormat: {
                type: [String, Function] as PropType<IFormat>,
                default: () => null,
            },
            locale: { type: String as PropType<string>, default: 'en-Us' },
            weekNumName: { type: String as PropType<string>, default: 'W' },
            minDate: { type: [Date, String] as PropType<Date | string>, default: null },
            maxDate: { type: [Date, String] as PropType<Date | string>, default: null },
            disabledDates: { type: Array as PropType<Date[] | string[]>, default: () => [] },
            filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
            minTime: { type: Object as PropType<ITimeValue>, default: () => ({}) },
            maxTime: { type: Object as PropType<ITimeValue>, default: () => ({}) },
            inline: { type: Boolean as PropType<boolean>, default: false },
            monthPicker: { type: Boolean as PropType<boolean>, default: false },
            timePicker: { type: Boolean as PropType<boolean>, default: false },
            monthNameFormat: { type: String as PropType<'long' | 'short'>, default: 'short' },
            startDate: { type: [Date, String] as PropType<string | Date>, default: null },
            startTime: { type: Object as PropType<ITimeValue | ITimeValue[]>, default: null },
            monthYearComponent: { type: Object as PropType<DefineComponent>, default: null },
            timePickerComponent: { type: Object as PropType<DefineComponent>, default: null },
            customProps: { type: Object as PropType<Record<string, unknown>>, default: null },
        },
        setup(props: CalendarProps, { emit, slots }) {
            const {
                updateTime,
                updateMonthYear,
                today,
                month,
                year,
                hours,
                minutes,
                isDisabled,
                isActiveDate,
                selectDate,
                getWeekDay,
                setHoverDate,
                rangeActive,
            } = useCalendar(props, emit);

            const weekDays = computed(() => {
                return getDayNames(props.locale, +props.weekStart);
            });

            const monthYearCmp = computed(() => {
                return props.monthYearComponent ? props.monthYearComponent : 'MonthYearInput';
            });

            const timePickerCmp = computed(() => {
                return props.timePickerComponent ? props.timePickerComponent : 'TimePicker';
            });

            // If datepicker is using only month or time picker
            const specificMode = computed((): boolean => props.monthPicker || props.timePicker);

            const monthYearSlots = useSlots(slots, 'monthYear');
            const timePickerSlots = useSlots(slots, 'timePicker');
            const actionSlots = useSlots(slots, 'action');

            // Generate array of years depending on provided range that will be available for picker
            const years = computed((): IDefaultSelect[] => {
                return getYears(props.yearRange);
            });

            // Get generated months
            const months = computed((): IDefaultSelect[] => {
                return getMonths(props.locale, props.monthNameFormat);
            });

            // Get dates for the currently selected month and year
            const dates = computed(() => {
                return getCalendarDays(month.value, year.value, +props.weekStart);
            });

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

            /**
             * Array of the dates from which calendar is built.
             * It also sets classes depending on picker modes, active dates, today, v-model.
             */
            const mappedDates = computed((): ICalendarDate[] => {
                return dates.value.map((date) => {
                    return {
                        ...date,
                        days: date.days.map((calendarDay) => {
                            const disabled = isDisabled(calendarDay.value);
                            calendarDay.classData = {
                                ['dp__cell_offset']: !calendarDay.current,
                                ['dp__pointer']: !disabled,
                                ['dp__active_date']: isActiveDate(calendarDay),
                                ['dp__date_hover']: !disabled && !isActiveDate(calendarDay),
                                ['dp__range_between']:
                                    props.range && !disabled && !isActiveDate(calendarDay)
                                        ? rangeActive(calendarDay)
                                        : false,
                                ['dp__today']: isDateEqual(calendarDay.value, today.value),
                                ['dp__cell_disabled']: disabled,
                                [props.calendarCellClassName]: !!props.calendarCellClassName,
                            };
                            return calendarDay;
                        }),
                    };
                });
            });

            return {
                month,
                year,
                years,
                months,
                calendarClass,
                specificMode,
                contentWrapClass,
                mappedDates,
                weekDays,
                hours,
                minutes,
                getWeekDay,
                selectDate,
                setHoverDate,
                updateMonthYear,
                updateTime,
                monthYearSlots,
                timePickerSlots,
                actionSlots,
                monthYearCmp,
                timePickerCmp,
            };
        },
    });
</script>
