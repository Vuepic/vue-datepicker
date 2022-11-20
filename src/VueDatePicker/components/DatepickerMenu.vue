<template>
    <transition appear :name="config.transitions?.menuAppear" mode="out-in" :css="!!config.transitions">
        <div
            :id="config.uid ? `dp-menu-${config.uid}` : undefined"
            tabindex="0"
            ref="dpMenuRef"
            role="dialog"
            :aria-label="config.ariaLabels?.menu"
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
            <div :class="disabledReadonlyOverlay" v-if="(config.disabled || config.readonly) && config.inline"></div>
            <div :class="arrowClass" v-if="!config.inline && !config.teleportCenter"></div>
            <div
                :class="{
                    dp__menu_content_wrapper:
                        config.presetRanges?.length || !!$slots['left-sidebar'] || !!$slots['right-sidebar'],
                }"
            >
                <div class="dp__sidebar_left" v-if="$slots['left-sidebar']">
                    <slot name="left-sidebar" />
                </div>
                <div class="dp__preset_ranges" v-if="config.presetRanges?.length">
                    <div
                        v-for="(preset, i) in config.presetRanges"
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
                                :is="config.monthYearComponent ? config.monthYearComponent : MonthYearPicker"
                                :ref="
                                    (el: any) => {
                                        if (el) monthYearPickerRefs[i] = el;
                                    }
                                "
                                v-if="!config.disableMonthYearSelect && !config.timePicker"
                                :months="months"
                                :years="years"
                                :month="month(instance)"
                                :year="year(instance)"
                                :instance="instance"
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
                        <component
                            v-if="config.enableTimePicker && !config.monthPicker && !config.weekPicker"
                            :is="config.timePickerComponent ? config.timePickerComponent : TimePickerCmp"
                            ref="timePickerRef"
                            :hours="time.hours"
                            :minutes="time.minutes"
                            :seconds="time.seconds"
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
                <div class="dp__now_wrap" v-if="config.showNowButton">
                    <slot name="now-button" v-if="$slots['now-button']" :select-current-date="selectCurrentDate" />
                    <button
                        v-if="!$slots['now-button']"
                        type="button"
                        role="button"
                        class="dp__now_button"
                        @click="selectCurrentDate"
                    >
                        {{ config.nowButtonLabel }}
                    </button>
                </div>
            </div>
            <component
                v-if="!config.autoApply || config.keepActionRow"
                :is="config.actionRowComponent ? config.actionRowComponent : ActionRow"
                :menu-mount="menuMount"
                :calendar-width="calendarWidth"
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
    } from '@/interfaces';
    import type { ComputedRef, PropType, Ref, UnwrapRef } from 'vue';

    const { config, setMenuFocused, setShiftKey, control } = useState();
    const { getCalendarDays } = useUtils();
    const slots = useSlots();

    const emit = defineEmits([
        'close-picker',
        'select-date',
        'dp-open',
        'auto-apply',
        'time-update',
        'flow-step',
        'update-month-year',
        'invalid-select',
    ]);
    const props = defineProps({
        openOnTop: { type: Boolean as PropType<boolean>, default: false },
    });

    const calendarWrapperRef = ref(null);
    const childrenMounted = reactive({
        timePicker: !!(!config.value.enableTimePicker || config.value.timePicker || config.value.monthPicker),
        monthYearInput: !!config.value.timePicker,
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
        if (!config.value.presetRanges?.length && !slots['left-sidebar'] && !slots['right-sidebar']) {
            getCalendarWidth();
        }

        const menu = unrefElement(dpMenuRef);
        if (menu && !config.value.textInput && !config.value.inline) {
            setMenuFocused(true);
            focusMenu();
        }
        if (menu) {
            const stopDefault = (event: Event) => {
                if (!config.value.monthYearComponent && !config.value.timePickerComponent) {
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

    watch(
        calendarRefs,
        () => {
            setTimeout(() => {
                if (props.openOnTop) {
                    emit('dp-open');
                }
            }, 0);
        },
        { deep: true },
    );

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
        if (config.value.flow?.length && flowStep.value !== -1) {
            flowStep.value += 1;
            emit('flow-step', flowStep.value);
            handleFlow();
        }
    };

    const resetFlow = (): void => {
        flowStep.value = -1;
    };

    const {
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
    } = useCalendar(emit, updateFlowStep, triggerCalendarTransition);

    const { setHoverDate, clearHoverDate, getDayClassData } = useCalendarClass(modelValue);

    const calendarSlots = mapSlots(slots, 'calendar');
    const actionSlots = mapSlots(slots, 'action');
    const timePickerSlots = mapSlots(slots, 'timePicker');
    const monthYearSlots = mapSlots(slots, 'monthYear');

    const arrowClass = computed(() => (!props.openOnTop ? 'dp__arrow_top' : 'dp__arrow_bottom'));

    // Generate array of years depending on provided range that will be available for picker
    const years = computed((): IDefaultSelect[] => {
        return getYears(config.value.yearRange);
    });

    // Get generated months
    const months = computed((): IDefaultSelect[] => {
        return getMonths(config.value.locale, config.value.monthNameFormat);
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
        config.value.multiCalendars > 0 && config.value.range ? [...Array(config.value.multiCalendars).keys()] : [0],
    );

    const isFirstInstance = computed(
        (): ((instance: number) => boolean) =>
            (instance): boolean =>
                instance === 1,
    );

    // If datepicker is using only month or time picker
    const specificMode = computed(
        (): boolean => config.value.monthPicker || config.value.timePicker || config.value.yearPicker,
    );

    const menuCalendarClassWrapper = computed(
        (): DynamicClass => ({
            dp__flex_display: config.value.multiCalendars > 0,
        }),
    );

    const calendarInstanceClassWrapper = computed(() => ({
        dp__instance_calendar: config.value.multiCalendars > 0,
    }));

    const disabledReadonlyOverlay = computed(() => ({
        dp__menu_disabled: config.value.disabled,
        dp__menu_readonly: config.value.readonly,
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
            dp__menu_index: !config.value.inline,
            dp__relative: config.value.inline,
            [config.value.menuClassName]: !!config.value.menuClassName,
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
        e.preventDefault();
        e.stopImmediatePropagation();
    };

    const handleEsc = (): void => {
        if (config.value.escClose) {
            emit('close-picker');
        }
    };

    const handleSpace = (day: UnwrapRef<ICalendarDay>, isNext = false): void => {
        selectDate(day, isNext);
        if (config.value.spaceConfirm) {
            emit('select-date');
        }
    };

    const childMount = (cmp: MenuChildCmp): void => {
        if (config.value.flow?.length) {
            childrenMounted[cmp] = true;

            if (!Object.keys(childrenMounted).filter((key) => !childrenMounted[key as MenuChildCmp]).length) {
                handleFlow();
            }
        }
    };

    const handleFlowStep = (step: Flow, refVal: Ref, fn: string, multi: boolean, ...args: Array<boolean | string>) => {
        if (config.value.flow[flowStep.value] === step) {
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

        const flowValue = config.value.flow[flowStep.value];
        if (flowValue === 'hours' || flowValue === 'minutes' || flowValue === 'seconds') {
            handleFlowStep(flowValue, timePickerRef, 'toggleTimePicker', false, true, true, flowValue);
        }
    };

    const handleArrowKey = (arrow: 'up' | 'down' | 'left' | 'right'): void => {
        if (config.value.arrowNavigation) {
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
        if (!config.value.disableMonthYearSelect && ev.code === 'Tab') {
            if ((ev.target as HTMLElement).classList.contains('dp__menu') && control.value.shiftKeyInMenu) {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                emit('close-picker');
            }
        }
    };
</script>
