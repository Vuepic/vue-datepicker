<template>
    <transition appear :name="transitions.menuAppear" mode="out-in" :css="!!transitions">
        <div
            :id="uid ? `dp-menu-${uid}` : undefined"
            tabindex="0"
            ref="dpMenuRef"
            role="dialog"
            :aria-label="ariaLabels.menu"
            :class="dpMenuClass"
            @mouseleave="clearHoverDate"
            @click="handleDpMenuClick"
            @keydown.esc="handleEsc"
            @keydown.left.prevent="handleArrowKey('left')"
            @keydown.up.prevent="handleArrowKey('up')"
            @keydown.down.prevent="handleArrowKey('down')"
            @keydown.right.prevent="handleArrowKey('right')"
            @keydown="checkShiftKey"
        >
            <div :class="disabledReadonlyOverlay" v-if="(disabled || readonly) && inline"></div>
            <div :class="arrowClass" v-if="!inline && !teleportCenter"></div>
            <div
                :class="{
                    dp__menu_content_wrapper:
                        presetRanges.length || !!$slots['left-sidebar'] || !!$slots['right-sidebar'],
                }"
            >
                <div class="dp__sidebar_left" v-if="$slots['left-sidebar']">
                    <slot name="left-sidebar" />
                </div>
                <div class="dp__preset_ranges" v-if="presetRanges.length">
                    <div
                        v-for="(preset, i) in presetRanges"
                        :key="i"
                        :style="preset.style || {}"
                        class="dp__preset_range"
                        @click="presetDateRange(preset.range, !!preset.slot)"
                    >
                        <template v-if="preset.slot">
                            <slot
                                :name="preset.slot"
                                :preset-date-range="presetDateRange"
                                :label="preset.label"
                                :range="preset.range"
                            />
                        </template>
                        <template v-else>
                            {{ preset.label }}
                        </template>
                    </div>
                </div>
                <div class="dp__instance_calendar" ref="calendarWrapperRef" role="document">
                    <div :class="menuCalendarClassWrapper">
                        <div v-for="(instance, i) in calendarAmm" :key="instance" :class="calendarInstanceClassWrapper">
                            <component
                                :is="monthYearComponent ? monthYearComponent : MonthYearPicker"
                                :ref="
                                    (el) => {
                                        if (el) monthYearPickerRefs[i] = el;
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
                                    vertical,
                                    yearPicker,
                                    escClose,
                                }"
                                @mount="childMount('monthYearInput')"
                                @reset-flow="resetFlow"
                                @update-month-year="updateMonthYear(instance, $event)"
                                @month-year-select="monthYearSelect"
                                @overlay-closed="focusMenu"
                            >
                                <template v-for="(slot, j) in monthYearSlots" #[slot]="args" :key="j">
                                    <slot :name="slot" v-bind="args" />
                                </template>
                            </component>
                            <Calendar
                                :ref="
                                    (el) => {
                                        if (el) calendarRefs[i] = el;
                                    }
                                "
                                v-bind="calendarProps"
                                v-model:flow-step="flowStep"
                                :instance="instance"
                                :mapped-dates="mappedDates(instance)"
                                :month="month(instance)"
                                :year="year(instance)"
                                @select-date="selectDate($event, !isFirstInstance(instance))"
                                @handle-space="handleSpace($event, !isFirstInstance(instance))"
                                @set-hover-date="setHoverDate($event)"
                                @handle-scroll="handleScroll($event, instance)"
                                @handle-swipe="handleSwipe($event, instance)"
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
                                modelAuto,
                                internalModelValue,
                                escClose,
                            }"
                            @mount="childMount('timePicker')"
                            @update:hours="updateTime($event)"
                            @update:minutes="updateTime($event, false)"
                            @update:seconds="updateTime($event, false, true)"
                            @reset-flow="resetFlow"
                            @overlay-closed="focusMenu"
                        >
                            <template v-for="(slot, i) in timePickerSlots" #[slot]="args" :key="i">
                                <slot :name="slot" v-bind="args" />
                            </template>
                        </component>
                    </div>
                </div>
                <div class="dp__sidebar_right" v-if="$slots['right-sidebar']">
                    <slot name="right-sidebar" />
                </div>
                <div class="dp__now_wrap" v-if="showNowButton">
                    <slot name="now-button" v-if="$slots['now-button']" :select-current-date="selectCurrentDate" />
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
                    modelAuto,
                    partialRange,
                    ignoreTimeValidation,
                }"
                @close-picker="$emit('closePicker')"
                @select-date="$emit('selectDate')"
                @invalid-select="$emit('invalid-select')"
            >
                <template v-for="(slot, i) in actionSlots" #[slot]="args" :key="i">
                    <slot :name="slot" v-bind="{ ...args }" />
                </template>
            </component>
        </div>
    </transition>
</template>

<script lang="ts" setup>
    import { computed, inject, onMounted, onUnmounted, reactive, ref, useSlots } from 'vue';
    import type { ComputedRef, PropType, Ref, UnwrapRef } from 'vue';

    import ActionRow from '@/components/ActionRow.vue';
    import Calendar from '@/components/Calendar.vue';
    import MonthYearPicker from '@/components/MonthYearPicker/MonthYearPicker.vue';
    import TimePickerCmp from '@/components/TimePicker/TimePicker.vue';

    import { useCalendar } from '@/components/composition/calendar';
    import { mapSlots } from '@/components/composition/slots';

    import type {
        AreaLabels,
        CalendarRef,
        DynamicClass,
        ICalendarDate,
        IDefaultSelect,
        InternalModuleValue,
        ITransition,
        MenuChildCmp,
        MonthYearPickerRef,
        TimePickerRef,
        WeekStartNum,
    } from '@/interfaces';

    import { useArrowNavigation } from '@/components/composition/arrow-navigate';
    import { useStore } from '@/components/composition/store';
    import { isDateEqual, matchDate } from '@/utils/date-utils';
    import {
        ariaLabelsKey,
        arrowNavigationKey,
        ControlProps,
        MenuProps,
        SharedProps,
        transitionsKey,
    } from '@/utils/props';
    import { getCalendarDays, getMonths, getYears, isModelAuto, unrefElement } from '@/utils/util';
    import { ICalendarDay } from '@/interfaces';

    const emit = defineEmits([
        'update:internalModelValue',
        'closePicker',
        'selectDate',
        'dpOpen',
        'autoApply',
        'timeUpdate',
        'flow-step',
        'updateMonthYear',
        'invalid-select',
    ]);
    const props = defineProps({
        ...MenuProps,
        ...SharedProps,
        ...ControlProps,
        internalModelValue: { type: [Date, Array] as PropType<InternalModuleValue>, default: null },
        multiCalendars: { type: Number as PropType<number>, default: 0 },
        openOnTop: { type: Boolean as PropType<boolean>, default: false },
    });
    const slots = useSlots();
    const calendarWrapperRef = ref(null);
    const childrenMounted = reactive({
        timePicker: !!(!props.enableTimePicker || props.timePicker || props.monthPicker),
        monthYearInput: !!props.timePicker,
        calendar: false,
    });
    const monthYearPickerRefs = ref<MonthYearPickerRef[]>([]);
    const calendarRefs = ref<CalendarRef[]>([]);
    const timePickerRef = ref<TimePickerRef | null>(null);
    const dpMenuRef = ref(null);
    const calendarWidth = ref(0);
    const menuMount = ref(false);
    const flowStep = ref(0);
    const transitions = inject<ComputedRef<ITransition>>(transitionsKey);
    const ariaLabels = inject<ComputedRef<AreaLabels>>(ariaLabelsKey);
    const arrowNavigation = inject<Ref<boolean>>(arrowNavigationKey);

    const { setMenuFocused, setShiftKey, getStore } = useStore();

    onMounted(() => {
        menuMount.value = true;
        if (!props.presetRanges?.length && !slots['left-sidebar'] && !slots['right-sidebar']) {
            getCalendarWidth();
        }

        const menu = unrefElement(dpMenuRef);
        if (menu && !props.textInput && !props.inline) {
            setMenuFocused(true);
            focusMenu();
        }
        if (menu) {
            const stopDefault = (event: Event) => {
                if (!props.monthYearComponent && !props.timePickerComponent) {
                    event.preventDefault();
                }
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

    const { arrowRight, arrowLeft, arrowDown, arrowUp } = useArrowNavigation();

    const focusMenu = (): void => {
        const menu = unrefElement(dpMenuRef);
        if (menu) {
            menu.focus({ preventScroll: true });
        }
    };

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
        handleSwipe,
        getMarker,
        selectCurrentDate,
        isHoverDateStartEnd,
        isHoverDate,
        presetDateRange,
    } = useCalendar(props, emit, updateFlowStep, calendarRefs);

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
    const specificMode = computed((): boolean => props.monthPicker || props.timePicker || props.yearPicker);

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
        customProps: props.customProps,
        calendarClassName: props.calendarClassName,
        specificMode: specificMode.value,
        getWeekNum,
        multiCalendars: props.multiCalendars,
        modeHeight: props.modeHeight,
        internalModelValue: props.internalModelValue,
        noSwipe: props.noSwipe,
        vertical: props.vertical,
        dayNames: props.dayNames,
        monthChangeOnScroll: props.monthChangeOnScroll,
    }));

    const dpMenuClass = computed(
        (): DynamicClass => ({
            dp__menu: true,
            dp__menu_index: !props.inline,
            dp__relative: props.inline,
            [props.menuClassName]: !!props.menuClassName,
        }),
    );

    const isSingleInModelAuto = (): boolean => {
        if (props.modelAuto && Array.isArray(props.internalModelValue)) {
            return !!props.internalModelValue[0];
        }
        return false;
    };

    const isModelAutoActive = () => {
        if (props.modelAuto) return isModelAuto(props.internalModelValue);
        return true;
    };

    const mapDates = (dates: ComputedRef<(instance: number) => ICalendarDate[]>, instance: number): ICalendarDate[] => {
        return dates.value(instance).map((date) => {
            return {
                ...date,
                days: date.days.map((calendarDay) => {
                    const disabled = isDisabled(calendarDay.value);
                    const dateHover = isHoverDate(disabled, calendarDay);
                    const isActive = props.range
                        ? props.modelAuto
                            ? isSingleInModelAuto() && isActiveDate(calendarDay)
                            : false
                        : isActiveDate(calendarDay);
                    const highlighted = props.highlight ? matchDate(calendarDay.value, props.highlight) : false;
                    const disableHighlight = disabled && props.highlightDisabledDays == false;
                    const highlightedWeekDay =
                        props.highlightWeekDays && props.highlightWeekDays.includes(calendarDay.value.getDay());
                    const isBetween =
                        (props.range || props.weekPicker) &&
                        (props.multiCalendars > 0 ? calendarDay.current : true) &&
                        !disabled &&
                        isModelAutoActive() &&
                        !(!calendarDay.current && props.hideOffsetDates) &&
                        !isActiveDate(calendarDay)
                            ? rangeActive(calendarDay)
                            : false;
                    calendarDay.marker = getMarker(calendarDay);
                    calendarDay.classData = {
                        dp__cell_offset: !calendarDay.current,
                        dp__pointer: !disabled && !(!calendarDay.current && props.hideOffsetDates),
                        dp__active_date: isActive,
                        dp__date_hover: dateHover,
                        dp__date_hover_start: isHoverDateStartEnd(dateHover, calendarDay, true),
                        dp__date_hover_end: isHoverDateStartEnd(dateHover, calendarDay, false),
                        dp__range_between: isBetween && !props.weekPicker,
                        dp__range_between_week: isBetween && props.weekPicker,
                        dp__today: !props.noToday && isDateEqual(calendarDay.value, today.value) && calendarDay.current,
                        dp__cell_disabled: disabled,
                        dp__cell_auto_range: isAutoRangeInBetween(calendarDay),
                        dp__cell_auto_range_start: isAutoRangeStart(calendarDay),
                        dp__cell_auto_range_end: isHoverRangeEnd(calendarDay),
                        dp__range_start:
                            props.multiCalendars > 0
                                ? calendarDay.current && rangeActiveStartEnd(calendarDay) && isModelAutoActive()
                                : rangeActiveStartEnd(calendarDay) && isModelAutoActive(),
                        dp__range_end:
                            props.multiCalendars > 0
                                ? calendarDay.current && rangeActiveStartEnd(calendarDay, false) && isModelAutoActive()
                                : rangeActiveStartEnd(calendarDay, false) && isModelAutoActive(),
                        [props.calendarCellClassName]: !!props.calendarCellClassName,
                        dp__cell_highlight: !disableHighlight && (highlighted || highlightedWeekDay) && !isActive,
                        dp__cell_highlight_active: !disableHighlight && (highlighted || highlightedWeekDay) && isActive,
                        [props.dayClass ? props.dayClass(calendarDay.value) : '']: true,
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

    const handleSpace = (day: UnwrapRef<ICalendarDay>, isNext = false): void => {
        selectDate(day, isNext);
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
            if (monthYearPickerRefs.value[0]) {
                monthYearPickerRefs.value[0].toggleMonthPicker(true);
            }
        }
        if (props.flow[flowStep.value] === 'year') {
            if (monthYearPickerRefs.value) {
                monthYearPickerRefs.value[0].toggleYearPicker(true);
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

    const handleArrowKey = (arrow: 'up' | 'down' | 'left' | 'right'): void => {
        if (arrowNavigation?.value) {
            if (arrow === 'up') return arrowUp();
            if (arrow === 'down') return arrowDown();
            if (arrow === 'left') return arrowLeft();
            if (arrow === 'right') return arrowRight();
        } else {
            if (arrow === 'left' || arrow === 'up') {
                handleArrow('left', 0, arrow === 'up');
            } else {
                handleArrow('right', 0, arrow === 'down');
            }
        }
    };

    const checkShiftKey = (ev: KeyboardEvent) => {
        setShiftKey(ev.shiftKey);
        if (!props.disableMonthYearSelect && ev.code === 'Tab') {
            if ((ev.target as HTMLElement).classList.contains('dp__menu') && getStore().shiftKeyInMenu) {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                emit('closePicker');
            }
        }
    };
</script>
