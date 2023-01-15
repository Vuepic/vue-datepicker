<template>
    <transition appear :name="defaults.transitions?.menuAppear" mode="out-in" :css="!!transitions">
        <div
            :id="uid ? `dp-menu-${uid}` : undefined"
            tabindex="0"
            ref="dpMenuRef"
            role="dialog"
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
                        presetRanges?.length || !!$slots['left-sidebar'] || !!$slots['right-sidebar'],
                }"
            >
                <div class="dp__sidebar_left" v-if="$slots['left-sidebar']">
                    <slot name="left-sidebar" />
                </div>
                <div class="dp__preset_ranges" v-if="presetRanges?.length">
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
                                    (el: any) => {
                                        if (el) monthYearPickerRefs[i] = el;
                                    }
                                "
                                v-if="!disableMonthYearSelect && !timePicker"
                                :months="months"
                                :years="years"
                                :month="month(instance)"
                                :year="year(instance)"
                                :instance="instance"
                                :internal-model-value="internalModelValue"
                                v-bind="$props"
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
                                    (el: any) => {
                                        if (el) calendarRefs[i] = el;
                                    }
                                "
                                :specific-mode="specificMode"
                                :get-week-num="getWeekNum"
                                :instance="instance"
                                :mapped-dates="mappedDates(instance)"
                                :month="month(instance)"
                                :year="year(instance)"
                                v-bind="$props"
                                v-model:flow-step="flowStep"
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
                        <template v-if="$slots['time-picker']">
                            <slot name="time-picker" v-bind="{ time, updateTime }" />
                        </template>
                        <template v-else>
                            <component
                                v-if="enableTimePicker && !monthPicker && !weekPicker"
                                :is="timePickerComponent ? timePickerComponent : TimePickerCmp"
                                ref="timePickerRef"
                                :hours="time.hours"
                                :minutes="time.minutes"
                                :seconds="time.seconds"
                                :internal-model-value="internalModelValue"
                                v-bind="$props"
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
                        </template>
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
                :menu-mount="menuMount"
                :calendar-width="calendarWidth"
                :internal-model-value="internalModelValue"
                v-bind="$props"
                @close-picker="$emit('close-picker')"
                @select-date="$emit('select-date')"
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
    import { computed, onMounted, onUnmounted, reactive, ref, useSlots, watch } from 'vue';

    import ActionRow from '@/components/ActionRow.vue';
    import Calendar from '@/components/Calendar.vue';
    import MonthYearPicker from '@/components/MonthYearPicker/MonthYearPicker.vue';
    import TimePickerCmp from '@/components/TimePicker/TimePicker.vue';

    import { useCalendar, mapSlots, useArrowNavigation, useState, useUtils } from '@/components/composables';
    import { getMonths, getYears, unrefElement } from '@/utils/util';
    import { useCalendarClass } from '@/components/composables/calendar-class';
    import { AllProps } from '@/utils/props';

    import type {
        CalendarRef,
        DynamicClass,
        Flow,
        ICalendarDate,
        IDefaultSelect,
        MenuChildCmp,
        MonthYearPickerRef,
        TimePickerRef,
        ICalendarDay,
        InternalModuleValue,
    } from '@/interfaces';
    import type { ComputedRef, PropType, Ref, UnwrapRef } from 'vue';

    const emit = defineEmits([
        'close-picker',
        'select-date',
        'auto-apply',
        'time-update',
        'flow-step',
        'update-month-year',
        'invalid-select',
        'update:internal-model-value',
        'recalculate-position',
    ]);
    const props = defineProps({
        openOnTop: { type: Boolean as PropType<boolean>, default: false },
        internalModelValue: { type: [Date, Array] as PropType<InternalModuleValue>, default: null },
        ...AllProps,
    });

    const { setMenuFocused, setShiftKey, control } = useState();
    const { getCalendarDays, defaults } = useUtils(props);
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
                if (!props.monthYearComponent && !props.timePickerComponent && !Object.keys(slots).length) {
                    event.preventDefault();
                }
                event.stopImmediatePropagation();
                event.stopPropagation();
            };
            menu.addEventListener('pointerdown', stopDefault);
            menu.addEventListener('mousedown', stopDefault);
        }
        window.addEventListener('resize', getCalendarWidth);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', getCalendarWidth);
    });

    const { arrowRight, arrowLeft, arrowDown, arrowUp } = useArrowNavigation();

    const triggerCalendarTransition = (instance?: number): void => {
        if (instance || instance === 0) {
            (calendarRefs.value[instance] as unknown as CalendarRef).triggerTransition(
                month.value(instance),
                year.value(instance),
            );
        } else {
            calendarRefs.value.forEach((refVal, i) =>
                (refVal as unknown as CalendarRef).triggerTransition(month.value(i), year.value(i)),
            );
        }
    };

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
        calendars,
        modelValue,
        month,
        year,
        time,
        updateTime,
        updateMonthYear,
        selectDate,
        getWeekNum,
        monthYearSelect,
        handleScroll,
        handleArrow,
        handleSwipe,
        getMarker,
        selectCurrentDate,
        presetDateRange,
    } = useCalendar(props, emit, updateFlowStep, triggerCalendarTransition, flowStep);

    const { setHoverDate, clearHoverDate, getDayClassData } = useCalendarClass(modelValue, props);

    watch(
        calendars,
        () => {
            if (props.openOnTop) {
                setTimeout(() => {
                    emit('recalculate-position');
                }, 0);
            }
        },
        { deep: true },
    );

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
    const dates = computed(() => (instance: number) => getCalendarDays(month.value(instance), year.value(instance)));

    const calendarAmm = computed((): number[] =>
        defaults.value.multiCalendars > 0 && props.range ? [...Array(defaults.value.multiCalendars).keys()] : [0],
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
            dp__flex_display: defaults.value.multiCalendars > 0,
        }),
    );

    const calendarInstanceClassWrapper = computed(() => ({
        dp__instance_calendar: defaults.value.multiCalendars > 0,
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

    const dpMenuClass = computed(
        (): DynamicClass => ({
            dp__menu: true,
            dp__menu_index: !props.inline,
            dp__relative: props.inline,
            [props.menuClassName]: !!props.menuClassName,
        }),
    );

    // Map days data that will be displayed in the calendar component
    const mapDates = (dates: ComputedRef<(instance: number) => ICalendarDate[]>, instance: number): ICalendarDate[] => {
        return dates.value(instance).map((date) => {
            return {
                ...date,
                days: date.days.map((calendarDay) => {
                    calendarDay.marker = getMarker(calendarDay);
                    calendarDay.classData = getDayClassData(calendarDay);
                    return calendarDay;
                }),
            };
        });
    };

    const handleDpMenuClick = (e: Event) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
    };

    const handleEsc = (): void => {
        if (props.escClose) {
            emit('close-picker');
        }
    };

    const handleSpace = (day: UnwrapRef<ICalendarDay>, isNext = false): void => {
        selectDate(day, isNext);
        if (props.spaceConfirm) {
            emit('select-date');
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

    const handleFlowStep = (step: Flow, refVal: Ref, fn: string, multi: boolean, ...args: Array<boolean | string>) => {
        if (props.flow[flowStep.value] === step) {
            const cmpRef = multi ? refVal.value[0] : refVal.value;
            if (cmpRef) {
                cmpRef[fn](...args);
            }
        }
    };

    const handleFlow = (): void => {
        handleFlowStep('month', monthYearPickerRefs, 'toggleMonthPicker', true, true);
        handleFlowStep('year', monthYearPickerRefs, 'toggleYearPicker', true, true);
        handleFlowStep('calendar', timePickerRef, 'toggleTimePicker', false, false, true);
        handleFlowStep('time', timePickerRef, 'toggleTimePicker', false, true, true);

        const flowValue = props.flow[flowStep.value];
        if (flowValue === 'hours' || flowValue === 'minutes' || flowValue === 'seconds') {
            handleFlowStep(flowValue, timePickerRef, 'toggleTimePicker', false, true, true, flowValue);
        }
    };

    const handleArrowKey = (arrow: 'up' | 'down' | 'left' | 'right'): void => {
        if (props.arrowNavigation) {
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
            if ((ev.target as HTMLElement).classList.contains('dp__menu') && control.value.shiftKeyInMenu) {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                emit('close-picker');
            }
        }
    };

    defineExpose({
        updateMonthYear,
    });
</script>
