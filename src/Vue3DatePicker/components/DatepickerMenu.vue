<template>
    <div
        :id="uid ? `dp-menu-${uid}` : undefined"
        tabindex="0"
        ref="dpMenuRef"
        role="dialog"
        aria-label="Datepicker menu"
        :class="dpMenuClass"
        @mouseleave="clearHoverDate"
        @click="handleDpMenuClick"
        @keydown.esc="handleEsc"
        @keydown.space="handleSpace"
        @keydown.left="handleArrow('left', 0)"
        @keydown.right="handleArrow('right', 0)"
    >
        <div :class="disabledReadonlyOverlay" v-if="(disabled || readonly) && inline"></div>
        <div :class="arrowClass" v-if="!inline"></div>
        <div :class="presetRanges.length ? 'dp__menu_content_wrapper' : null">
            <div class="dp__preset_ranges" v-if="presetRanges.length">
                <div
                    v-for="(preset, i) in presetRanges"
                    :key="i"
                    class="dp__preset_range"
                    @click="presetDateRange(preset.range)"
                >
                    {{ preset.label }}
                </div>
            </div>
            <div class="dp__instance_calendar" ref="calendarWrapperRef" role="document">
                <div :class="menuCalendarClassWrapper">
                    <div v-for="(instance, i) in calendarAmm" :key="instance" :class="calendarInstanceClassWrapper">
                        <component
                            :is="monthYearComponent ? monthYearComponent : MonthYearInput"
                            :ref="
                                (el) => {
                                    if (el) monthYearInputRefs[i] = el;
                                }
                            "
                            v-if="!disableMonthYearSelect && !timePicker"
                            v-bind="{
                                months,
                                years,
                                filters,
                                monthPicker,
                                month: month(instance),
                                year: year(instance),
                                customProps,
                                multiCalendars,
                                multiCalendarsSolo,
                                instance,
                                minDate,
                                maxDate,
                                preventMinMaxNavigation,
                                internalModelValue,
                                range,
                                reverseYears,
                            }"
                            @mount="childMount('monthYearInput')"
                            @reset-flow="resetFlow"
                            @update:month="updateMonthYear(instance, $event, true)"
                            @update:year="updateMonthYear(instance, $event, false)"
                            @month-year-select="monthYearSelect"
                        >
                            <template v-for="(slot, j) in monthYearSlots" #[slot]="args" :key="j">
                                <slot :name="slot" v-bind="args" />
                            </template>
                        </component>
                        <Calendar
                            v-bind="calendarProps"
                            v-model:flow-step="flowStep"
                            :instance="instance"
                            :mapped-dates="mappedDates(instance)"
                            :month="month(instance)"
                            :year="year(instance)"
                            :month-year-component="monthYearComponent"
                            @select-date="selectDate($event, !isFirstInstance(instance))"
                            @set-hover-date="setHoverDate($event)"
                            @handle-scroll="handleScroll($event, instance)"
                            @mount="childMount('calendar')"
                            @reset-flow="resetFlow"
                        >
                            <template v-for="(slot, j) in calendarSlots" #[slot]="args" :key="j">
                                <slot :name="slot" v-bind="{ ...args }" />
                            </template>
                        </Calendar>
                    </div>
                </div>
                <div>
                    <component
                        v-if="enableTimePicker && !monthPicker && !weekPicker"
                        :is="timePickerComponent ? timePickerComponent : TimePickerCmp"
                        ref="timePickerRef"
                        v-bind="{
                            is24,
                            hoursIncrement,
                            minutesIncrement,
                            hoursGridIncrement,
                            secondsIncrement,
                            minutesGridIncrement,
                            secondsGridIncrement,
                            noHoursOverlay,
                            noMinutesOverlay,
                            noSecondsOverlay,
                            range,
                            filters,
                            timePicker,
                            hours,
                            minutes,
                            seconds,
                            customProps,
                            enableSeconds,
                            fixedStart,
                            fixedEnd,
                        }"
                        @mount="childMount('timePicker')"
                        @update:hours="updateTime($event)"
                        @update:minutes="updateTime($event, false)"
                        @update:seconds="updateTime($event, false, true)"
                        @reset-flow="resetFlow"
                    >
                        <template v-for="(slot, i) in timePickerSlots" #[slot]="args" :key="i">
                            <slot :name="slot" v-bind="args" />
                        </template>
                    </component>
                </div>
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
        </div>
        <component
            v-if="!autoApply || keepActionRow"
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
                multiCalendars,
                menuMount,
                maxTime,
                minTime,
                enableTimePicker,
                minDate,
                maxDate,
                multiDates,
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
    import { computed, onMounted, PropType, nextTick, useSlots, ComputedRef, ref, onUnmounted, reactive } from 'vue';
    import Calendar from './Calendar.vue';
    import ActionRow from './ActionRow.vue';
    import TimePickerCmp from './TimePicker/TimePicker.vue';
    import MonthYearInput from './MonthYearInput.vue';

    import {
        DynamicClass,
        ICalendarDate,
        IDateFilter,
        IDefaultSelect,
        IFormat,
        InternalModuleValue,
        MenuChildCmp,
        MonthYearInputRef,
        TimePickerRef,
        WeekStartNum,
    } from '../interfaces';
    import { mapSlots } from './composition/slots';
    import { getCalendarDays, getMonths, getYears, unrefElement } from '../utils/util';
    import { useCalendar } from './composition/calendar';
    import { isDateEqual } from '../utils/date-utils';
    import { CommonProps } from '../utils/props';

    const emit = defineEmits([
        'update:internalModelValue',
        'closePicker',
        'selectDate',
        'dpOpen',
        'autoApply',
        'timeUpdate',
        'flow-step',
        'updateMonthYear',
    ]);
    const props = defineProps({
        ...CommonProps,
        internalModelValue: { type: [Date, Array] as PropType<InternalModuleValue>, default: null },
        multiCalendars: { type: Number as PropType<number>, default: 0 },
        previewFormat: {
            type: [String, Function] as PropType<IFormat>,
            default: () => null,
        },
        filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
        openOnTop: { type: Boolean as PropType<boolean>, default: false },
    });
    const slots = useSlots();
    const calendarWrapperRef = ref(null);
    const childrenMounted = reactive({ timePicker: !props.enableTimePicker, monthYearInput: false, calendar: false });
    const monthYearInputRefs = ref<MonthYearInputRef[]>([]);
    const timePickerRef = ref<TimePickerRef | null>(null);
    const dpMenuRef = ref(null);
    const calendarWidth = ref(0);
    const menuMount = ref(false);
    const flowStep = ref(0);

    onMounted(() => {
        menuMount.value = true;
        if (!props.presetRanges?.length) {
            getCalendarWidth();
        }
        if (!props.inline) {
            nextTick(() => emit('dpOpen'));
        }
        const menu = unrefElement(dpMenuRef);
        if (menu && !props.textInput && !props.inline) {
            menu.focus({ preventScroll: true });
        }
        if (menu) {
            const stopDefault = (event: Event) => {
                event.stopImmediatePropagation();
                event.stopPropagation();
            };
            menu.addEventListener('pointerdown', stopDefault);
            menu.addEventListener('mousedown', stopDefault);
        }
        document.addEventListener('resize', getCalendarWidth);
    });

    onUnmounted(() => {
        document.removeEventListener('resize', getCalendarWidth);
    });

    const updateFlowStep = (): void => {
        if (props.flow?.length && flowStep.value !== -1) {
            flowStep.value += 1;
            emit('flow-step', flowStep.value);
            handleFlow();
        }
    };

    const resetFlow = (): void => {
        flowStep.value = -1;
    };

    const {
        updateTime,
        updateMonthYear,
        today,
        month,
        year,
        hours,
        minutes,
        seconds,
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
        handleArrow,
        getMarker,
        selectCurrentDate,
        isHoverDateStartEnd,
        isHoverDate,
        presetDateRange,
    } = useCalendar(props, emit, updateFlowStep);

    const calendarSlots = mapSlots(slots, 'calendar');
    const actionSlots = mapSlots(slots, 'action');
    const timePickerSlots = mapSlots(slots, 'timePicker');
    const monthYearSlots = mapSlots(slots, 'monthYear');

    const arrowClass = computed(() => (!props.openOnTop ? 'dp__arrow_top' : 'dp__arrow_bottom'));

    // Generate array of years depending on provided range that will be available for picker
    const years = computed((): IDefaultSelect[] => {
        return getYears(props.yearRange);
    });

    // Get generated months
    const months = computed((): IDefaultSelect[] => {
        return getMonths(props.locale, props.monthNameFormat);
    });

    const getCalendarWidth = (): void => {
        const el = unrefElement(calendarWrapperRef);
        if (el) {
            calendarWidth.value = el.getBoundingClientRect().width;
        }
    };

    // Get dates for the currently selected month and year
    const dates = computed(
        () => (instance: number) =>
            getCalendarDays(
                month.value(instance),
                year.value(instance),
                +props.weekStart as WeekStartNum,
                props.hideOffsetDates,
            ),
    );

    const calendarAmm = computed((): number[] =>
        props.multiCalendars > 0 && props.range ? [...Array(props.multiCalendars).keys()] : [0],
    );

    const isFirstInstance = computed(
        (): ((instance: number) => boolean) =>
            (instance): boolean =>
                instance === 1,
    );

    // If datepicker is using only month or time picker
    const specificMode = computed((): boolean => props.monthPicker || props.timePicker);

    const menuCalendarClassWrapper = computed(
        (): DynamicClass => ({
            dp__flex_display: props.multiCalendars > 0,
        }),
    );

    const calendarInstanceClassWrapper = computed(() => ({
        dp__instance_calendar: props.multiCalendars > 0,
    }));

    const disabledReadonlyOverlay = computed(() => ({
        dp__menu_disabled: props.disabled,
        dp__menu_readonly: props.readonly,
    }));
    /**
     * Array of the dates from which calendar is built.
     * It also sets classes depending on picker modes, active dates, today, v-model.
     */
    const mappedDates = computed(
        () =>
            (instance: number): ICalendarDate[] =>
                mapDates(dates, instance),
    );

    const calendarProps = computed(() => ({
        locale: props.locale,
        weekNumName: props.weekNumName,
        weekStart: props.weekStart,
        weekNumbers: props.weekNumbers,
        enableTimePicker: props.enableTimePicker,
        disableMonthYearSelect: props.disableMonthYearSelect,
        monthPicker: props.monthPicker,
        timePicker: props.timePicker,
        range: props.range,
        filters: props.filters,
        minTime: props.minTime,
        maxTime: props.maxTime,
        minDate: props.minDate,
        maxDate: props.maxDate,
        customProps: props.customProps,
        calendarClassName: props.calendarClassName,
        specificMode: specificMode.value,
        getWeekNum,
        multiCalendars: props.multiCalendars,
        months: months.value,
        years: years.value,
        multiCalendarsSolo: props.multiCalendarsSolo,
        modeHeight: props.modeHeight,
        internalModelValue: props.internalModelValue,
    }));

    const dpMenuClass = computed(
        (): DynamicClass => ({
            dp__menu: true,
            dp__menu_index: !props.inline,
            dp__relative: props.inline,
            [props.menuClassName]: !!props.menuClassName,
        }),
    );

    const mapDates = (dates: ComputedRef<(instance: number) => ICalendarDate[]>, instance: number): ICalendarDate[] => {
        return dates.value(instance).map((date) => {
            return {
                ...date,
                days: date.days.map((calendarDay) => {
                    const disabled = isDisabled(calendarDay.value);
                    const dateHover = isHoverDate(disabled, calendarDay);
                    calendarDay.marker = getMarker(calendarDay);
                    calendarDay.classData = {
                        dp__cell_offset: !calendarDay.current,
                        dp__pointer: !disabled && !(!calendarDay.current && props.hideOffsetDates),
                        dp__active_date: props.range ? false : isActiveDate(calendarDay),
                        dp__date_hover: dateHover,
                        dp__date_hover_start: isHoverDateStartEnd(dateHover, calendarDay, true),
                        dp__date_hover_end: isHoverDateStartEnd(dateHover, calendarDay, false),
                        dp__range_between:
                            (props.range || props.weekPicker) &&
                            (props.multiCalendars > 0 ? calendarDay.current : true) &&
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
                        dp__range_start:
                            props.multiCalendars > 0
                                ? calendarDay.current && rangeActiveStartEnd(calendarDay)
                                : rangeActiveStartEnd(calendarDay),
                        dp__range_end:
                            props.multiCalendars > 0
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
        e.stopPropagation();
        e.preventDefault();
        e.stopImmediatePropagation();
    };

    const handleEsc = (): void => {
        if (props.escClose) {
            emit('closePicker');
        }
    };

    const handleSpace = (event: Event): void => {
        event.stopImmediatePropagation();
        event.preventDefault();
        if (props.spaceConfirm) {
            emit('selectDate');
        }
    };

    const childMount = (cmp: MenuChildCmp): void => {
        if (props.flow?.length) {
            childrenMounted[cmp] = true;

            if (!Object.keys(childrenMounted).filter((key) => !childrenMounted[key as MenuChildCmp]).length) {
                handleFlow();
            }
        }
    };

    const handleFlow = (): void => {
        if (props.flow[flowStep.value] === 'month') {
            if (monthYearInputRefs.value[0]) {
                monthYearInputRefs.value[0].toggleMonthPicker(true);
            }
        }
        if (props.flow[flowStep.value] === 'year') {
            if (monthYearInputRefs.value) {
                monthYearInputRefs.value[0].toggleYearPicker(true);
            }
        }
        if (props.flow[flowStep.value] === 'calendar') {
            if (timePickerRef.value) {
                timePickerRef.value.toggleTimePicker(false, true);
            }
        }
        if (props.flow[flowStep.value] === 'time') {
            if (timePickerRef.value) {
                timePickerRef.value.toggleTimePicker(true, true);
            }
        }
        const flowValue = props.flow[flowStep.value];
        if (flowValue === 'hours' || flowValue === 'minutes' || flowValue === 'seconds') {
            if (timePickerRef.value) {
                timePickerRef.value.toggleTimePicker(true, true, flowValue);
            }
        }
    };
</script>
