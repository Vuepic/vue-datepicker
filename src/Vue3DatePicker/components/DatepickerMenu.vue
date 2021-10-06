<template>
    <div class="dp__menu" :class="dpMenuClass" :id="`dp__menu_${uid}`">
        <div :class="arrowClass" v-if="!inline"></div>
        <div class="dp__calendar_wrapper">
            <Calendar
                v-bind="calendarProps"
                :instance="1"
                :mapped-dates="mappedDates"
                :month="month"
                :year="year"
                @update:hours="updateTime($event)"
                @update:minutes="updateTime($event, false)"
                @update:month="updateMonthYear($event)"
                @update:year="updateMonthYear($event, false)"
                @selectDate="selectDate($event)"
                @setHoverDate="setHoverDate($event)"
            >
                <template v-for="(slot, i) in calendarSlots" #[slot]="args" :key="i">
                    <slot :name="slot" v-bind="{ ...args }" />
                </template>
            </Calendar>
            <Calendar
                v-if="range && twoCalendars"
                v-bind="calendarProps"
                :instance="2"
                :mapped-dates="mappedDatesNext"
                :month="monthNext"
                :year="yearNext"
                @update:hours="updateTime($event)"
                @update:minutes="updateTime($event, false)"
                @update:month="updateMonthYear($event, true, true)"
                @update:year="updateMonthYear($event, false, true)"
                @selectDate="selectDate($event)"
                @setHoverDate="setHoverDate($event)"
            >
                <template v-for="(slot, i) in calendarSlots" #[slot]="args" :key="i">
                    <slot :name="slot" v-bind="{ ...args }" />
                </template>
            </Calendar>
        </div>
        <component
            v-if="!autoApply"
            :is="actionRowComponent ? actionRowComponent : ActionRow"
            v-bind="{
                selectText,
                cancelText,
                internalModelValue,
                range,
                previewFormat,
                inline,
                monthPicker,
                timePicker,
                customProps,
                twoCalendars,
            }"
            @closePicker="$emit('closePicker')"
            @selectDate="$emit('selectDate')"
        >
            <template v-for="(slot, i) in actionSlots" #[slot]="args" :key="i">
                <slot :name="slot" v-bind="{ ...args }" />
            </template>
        </component>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, PropType, nextTick, DefineComponent, useSlots, ComputedRef } from 'vue';
    import Calendar from './Calendar.vue';
    import ActionRow from './ActionRow.vue';

    import {
        DynamicClass,
        ICalendarDate,
        IDateFilter,
        IDefaultSelect,
        IFormat,
        InternalModuleValue,
        ITimeValue,
    } from '../interfaces';
    import { mapSlots } from '../utils/composition/slots';
    import { getCalendarDays, getMonths, getYears } from '../utils/util';
    import { useCalendar } from '../utils/composition/calendar';
    import { isDateEqual } from '../utils/date-utils';

    const emit = defineEmits([
        'update:internalModelValue',
        'closePicker',
        'selectDate',
        'dpOpen',
        'autoApply',
        'timeUpdate',
    ]);
    const props = defineProps({
        uid: { type: String as PropType<string>, default: 'dp' },
        internalModelValue: { type: [Date, Array] as PropType<InternalModuleValue>, default: null },
        weekNumbers: { type: Boolean as PropType<boolean>, default: false },
        weekStart: { type: [Number, String] as PropType<number | string>, default: 1 },
        disableMonthYearSelect: { type: Boolean as PropType<boolean>, default: false },
        menuClassName: { type: String as PropType<string>, default: null },
        calendarClassName: { type: String as PropType<string>, default: null },
        yearRange: { type: Array as PropType<number[]>, default: () => [1970, 2100] },
        range: { type: Boolean as PropType<boolean>, default: false },
        twoCalendars: { type: Boolean as PropType<boolean>, default: false },
        calendarCellClassName: { type: String as PropType<string>, default: null },
        enableTimePicker: { type: Boolean as PropType<boolean>, default: false },
        is24: { type: Boolean as PropType<boolean>, default: true },
        hoursIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
        minutesIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
        hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
        minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
        minDate: { type: [Date, String] as PropType<Date | string>, default: null },
        maxDate: { type: [Date, String] as PropType<Date | string>, default: null },
        autoApply: { type: Boolean as PropType<boolean>, default: false },
        selectText: { type: String as PropType<string>, default: 'Select' },
        cancelText: { type: String as PropType<string>, default: 'Cancel' },
        previewFormat: {
            type: [String, Function] as PropType<IFormat>,
            default: () => null,
        },
        locale: { type: String as PropType<string>, default: 'en-US' },
        weekNumName: { type: String as PropType<string>, default: 'W' },
        disabledDates: { type: Array as PropType<Date[] | string[]>, default: () => [] },
        filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
        minTime: { type: Object as PropType<ITimeValue>, default: () => ({}) },
        maxTime: { type: Object as PropType<ITimeValue>, default: () => ({}) },
        inline: { type: Boolean as PropType<boolean>, default: false },
        openOnTop: { type: Boolean as PropType<boolean>, default: false },
        monthPicker: { type: Boolean as PropType<boolean>, default: false },
        timePicker: { type: Boolean as PropType<boolean>, default: false },
        monthNameFormat: { type: String as PropType<'long' | 'short'>, default: 'short' },
        startDate: { type: [Date, String] as PropType<string | Date>, default: null },
        startTime: { type: [Object, Array] as PropType<ITimeValue | ITimeValue[] | null>, default: null },
        monthYearComponent: { type: Object as PropType<DefineComponent>, default: null },
        timePickerComponent: { type: Object as PropType<DefineComponent>, default: null },
        actionRowComponent: { type: Object as PropType<DefineComponent>, default: null },
        customProps: { type: Object as PropType<Record<string, unknown>>, default: null },
        hideOffsetDates: { type: Boolean as PropType<boolean>, default: false },
    });
    const slots = useSlots();

    onMounted(() => {
        if (!props.inline) {
            nextTick(() => emit('dpOpen'));
        }
    });

    const {
        updateTime,
        updateMonthYear,
        today,
        month,
        year,
        monthNext,
        yearNext,
        hours,
        minutes,
        isDisabled,
        isActiveDate,
        selectDate,
        getWeekNum,
        setHoverDate,
        rangeActive,
    } = useCalendar(props, emit);

    const calendarSlots = mapSlots(slots, 'calendar');
    const actionSlots = mapSlots(slots, 'action');

    const arrowClass = computed(() => (!props.openOnTop ? 'dp__arrow_top' : 'dp__arrow_bottom'));

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
        return getCalendarDays(month.value, year.value, +props.weekStart, props.hideOffsetDates);
    });

    const datesNextMonth = computed(() => {
        return getCalendarDays(monthNext.value, yearNext.value, +props.weekStart, props.hideOffsetDates);
    });

    // If datepicker is using only month or time picker
    const specificMode = computed((): boolean => props.monthPicker || props.timePicker);

    /**
     * Array of the dates from which calendar is built.
     * It also sets classes depending on picker modes, active dates, today, v-model.
     */
    const mappedDates = computed((): ICalendarDate[] => mapDates(dates));
    // This one is for the next month if twoCalendars is active
    const mappedDatesNext = computed((): ICalendarDate[] => mapDates(datesNextMonth));

    const calendarProps = computed(() => ({
        locale: props.locale,
        weekNumName: props.weekNumName,
        weekStart: props.weekStart,
        weekNumbers: props.weekNumbers,
        enableTimePicker: props.enableTimePicker,
        is24: props.is24,
        hoursIncrement: props.hoursIncrement,
        minutesIncrement: props.minutesIncrement,
        hoursGridIncrement: props.minutesGridIncrement,
        minutesGridIncrement: props.minutesGridIncrement,
        range: props.range,
        filters: props.filters,
        minTime: props.minTime,
        maxTime: props.maxTime,
        customProps: props.customProps,
        hours: hours.value,
        minutes: minutes.value,
        calendarClassName: props.calendarClassName,
        specificMode: specificMode.value,
        getWeekNum,
        twoCalendars: props.twoCalendars,
        months: months.value,
        years: years.value,
    }));

    const dpMenuClass = computed(
        (): DynamicClass => ({
            [props.menuClassName]: !!props.menuClassName,
            dp__flex_display: props.inline,
        }),
    );

    const mapDates = (dates: ComputedRef<ICalendarDate[]>): ICalendarDate[] => {
        return dates.value.map((date) => {
            return {
                ...date,
                days: date.days.map((calendarDay) => {
                    const disabled = isDisabled(calendarDay.value);
                    calendarDay.classData = {
                        ['dp__cell_offset']: !calendarDay.current,
                        ['dp__pointer']: !disabled && !(!calendarDay.current && props.hideOffsetDates),
                        ['dp__active_date']: isActiveDate(calendarDay),
                        ['dp__date_hover']:
                            !disabled && !isActiveDate(calendarDay) && !(!calendarDay.current && props.hideOffsetDates),
                        ['dp__range_between']:
                            props.range &&
                            !disabled &&
                            !(!calendarDay.current && props.hideOffsetDates) &&
                            !isActiveDate(calendarDay)
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
    };
</script>
