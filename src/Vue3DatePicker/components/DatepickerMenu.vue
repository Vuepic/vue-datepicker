<template>
    <div
        :class="dpMenuClass"
        @mouseleave="clearHoverDate"
        role="dialog"
        aria-label="Datepicker menu"
        @click="handleDpMenuClick"
    >
        <div :class="arrowClass" v-if="!inline"></div>
        <div :class="menuCalendarClassWrapper" ref="calendarWrapperRef" role="document">
            <Calendar
                v-bind="calendarProps"
                :instance="1"
                :mapped-dates="mappedDates"
                :month="month"
                :year="year"
                :month-year-component="monthYearComponent"
                :time-picker-component="timePickerComponent"
                @update:hours="updateTime($event)"
                @update:minutes="updateTime($event, false)"
                @update:month="updateMonthYear($event)"
                @update:year="updateMonthYear($event, false)"
                @month-year-select="monthYearSelect"
                @select-date="selectDate($event)"
                @set-hover-date="setHoverDate($event)"
                @handle-scroll="handleScroll"
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
                :month-year-component="monthYearComponent"
                :time-picker-component="timePickerComponent"
                @update:hours="updateTime($event)"
                @update:minutes="updateTime($event, false)"
                @update:month="updateMonthYear($event, true, true)"
                @update:year="updateMonthYear($event, false, true)"
                @select-date="selectDate($event, true)"
                @set-hover-date="setHoverDate($event)"
                @handle-scroll="handleScroll($event, true)"
            >
                <template v-for="(slot, i) in calendarSlots" #[slot]="args" :key="i">
                    <slot :name="slot" v-bind="{ ...args }" />
                </template>
            </Calendar>
        </div>
        <div class="dp__now_wrap" v-if="showNowButton">
            <slot name="now-button" v-if="$slots['now-button']" :selectCurrentDate="selectCurrentDate" />
            <button
                v-if="!$slots['now-button']"
                type="button"
                role="button"
                class="dp__now_button"
                @click="selectCurrentDate"
            >
                {{ nowButtonLabel }}
            </button>
        </div>
        <component
            v-if="!autoApply"
            :is="actionRowComponent ? actionRowComponent : ActionRow"
            v-bind="{
                calendarWidth,
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
                menuMount,
            }"
            @close-picker="$emit('closePicker')"
            @select-date="$emit('selectDate')"
        >
            <template v-for="(slot, i) in actionSlots" #[slot]="args" :key="i">
                <slot :name="slot" v-bind="{ ...args }" />
            </template>
        </component>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, PropType, nextTick, DefineComponent, useSlots, ComputedRef, ref } from 'vue';
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
        WeekStartNum,
        WeekStartStr,
    } from '../interfaces';
    import { mapSlots } from './composition/slots';
    import { getCalendarDays, getMonths, getYears, unrefElement } from '../utils/util';
    import { useCalendar } from './composition/calendar';
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
        internalModelValue: { type: [Date, Array] as PropType<InternalModuleValue>, default: null },
        weekNumbers: { type: Boolean as PropType<boolean>, default: false },
        weekStart: { type: [Number, String] as PropType<WeekStartNum | WeekStartStr>, default: 1 },
        disableMonthYearSelect: { type: Boolean as PropType<boolean>, default: false },
        menuClassName: { type: String as PropType<string>, default: null },
        calendarClassName: { type: String as PropType<string>, default: null },
        yearRange: { type: Array as PropType<number[]>, default: () => [1970, 2100] },
        range: { type: Boolean as PropType<boolean>, default: false },
        twoCalendars: { type: Boolean as PropType<boolean>, default: false },
        twoCalendarsSolo: { type: Boolean as PropType<boolean>, default: false },
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
        autoRange: { type: [Number, String] as PropType<number | string>, default: null },
        noToday: { type: Boolean as PropType<boolean>, default: false },
        noHoursOverlay: { type: Boolean as PropType<boolean>, default: false },
        noMinutesOverlay: { type: Boolean as PropType<boolean>, default: false },
        disabledWeekDays: { type: Array as PropType<string[] | number[]>, default: () => [] },
        allowedDates: { type: Array as PropType<string[] | Date[]>, default: () => [] },
        showNowButton: { type: Boolean as PropType<boolean>, default: false },
        nowButtonLabel: { type: String as PropType<string>, default: 'Now' },
        monthChangeOnScroll: { type: Boolean as PropType<boolean>, default: true },
    });
    const slots = useSlots();
    const calendarWrapperRef = ref(null);
    const calendarWidth = ref(0);
    const menuMount = ref(false);

    onMounted(() => {
        menuMount.value = true;
        const el = unrefElement(calendarWrapperRef);
        if (el) {
            calendarWidth.value = el.getBoundingClientRect().width;
        }
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
        isHoverRangeEnd,
        isAutoRangeInBetween,
        isAutoRangeStart,
        rangeActive,
        clearHoverDate,
        rangeActiveStartEnd,
        monthYearSelect,
        handleScroll,
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
        return getCalendarDays(month.value, year.value, +props.weekStart as WeekStartNum, props.hideOffsetDates);
    });

    const datesNextMonth = computed(() => {
        return getCalendarDays(
            monthNext.value,
            yearNext.value,
            +props.weekStart as WeekStartNum,
            props.hideOffsetDates,
        );
    });

    // If datepicker is using only month or time picker
    const specificMode = computed((): boolean => props.monthPicker || props.timePicker);

    const menuCalendarClassWrapper = computed(
        (): DynamicClass => ({
            dp__calendar_wrapper: true,
            dp__flex_display: props.twoCalendars,
        }),
    );

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
        disableMonthYearSelect: props.disableMonthYearSelect,
        is24: props.is24,
        hoursIncrement: props.hoursIncrement,
        minutesIncrement: props.minutesIncrement,
        hoursGridIncrement: props.hoursGridIncrement,
        minutesGridIncrement: props.minutesGridIncrement,
        monthPicker: props.monthPicker,
        timePicker: props.timePicker,
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
        noHoursOverlay: props.noHoursOverlay,
        noMinutesOverlay: props.noMinutesOverlay,
        twoCalendarsSolo: props.twoCalendarsSolo,
    }));

    const dpMenuClass = computed(
        (): DynamicClass => ({
            dp__menu: true,
            [props.menuClassName]: !!props.menuClassName,
            dp__relative: props.inline,
        }),
    );

    const mapDates = (dates: ComputedRef<ICalendarDate[]>): ICalendarDate[] => {
        return dates.value.map((date) => {
            return {
                ...date,
                days: date.days.map((calendarDay) => {
                    const disabled = isDisabled(calendarDay.value);
                    calendarDay.classData = {
                        dp__cell_offset: !calendarDay.current,
                        dp__pointer: !disabled && !(!calendarDay.current && props.hideOffsetDates),
                        dp__active_date: props.range ? false : isActiveDate(calendarDay),
                        dp__date_hover:
                            !disabled &&
                            !isActiveDate(calendarDay) &&
                            !(!calendarDay.current && props.hideOffsetDates) &&
                            (props.range
                                ? !rangeActiveStartEnd(calendarDay) && !rangeActiveStartEnd(calendarDay, false)
                                : true),
                        dp__range_between:
                            props.range &&
                            (props.twoCalendars ? calendarDay.current : true) &&
                            !disabled &&
                            !(!calendarDay.current && props.hideOffsetDates) &&
                            !isActiveDate(calendarDay)
                                ? rangeActive(calendarDay)
                                : false,
                        dp__today: !props.noToday && isDateEqual(calendarDay.value, today.value),
                        dp__cell_disabled: disabled,
                        dp__cell_auto_range: isAutoRangeInBetween(calendarDay),
                        dp__cell_auto_range_start: isAutoRangeStart(calendarDay),
                        dp__cell_auto_range_end: isHoverRangeEnd(calendarDay),
                        dp__range_start: props.twoCalendars
                            ? calendarDay.current && rangeActiveStartEnd(calendarDay)
                            : rangeActiveStartEnd(calendarDay),
                        dp__range_end: props.twoCalendars
                            ? calendarDay.current && rangeActiveStartEnd(calendarDay, false)
                            : rangeActiveStartEnd(calendarDay, false),
                        [props.calendarCellClassName]: !!props.calendarCellClassName,
                    };
                    return calendarDay;
                }),
            };
        });
    };

    const handleDpMenuClick = (e: Event) => {
        e.stopImmediatePropagation();
    };

    const selectCurrentDate = (): void => {
        emit('update:internalModelValue', new Date());
        emit('selectDate');
    };
</script>
