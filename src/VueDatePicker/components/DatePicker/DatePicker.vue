<template>
    <InstanceWrap v-slot="{ instances, wrapClass }" :collapse="collapse">
        <div v-for="instance in instances" :key="instance" :class="wrapClass">
            <DpHeader
                v-if="!rootProps.hideMonthYearSelect"
                ref="calendar-header"
                :months="getMonths()"
                :years="getYears()"
                :month="month(instance)"
                :year="year(instance)"
                :instance="instance"
                :menu-wrap-ref="menuWrapRef"
                @mount="componentMounted(CMP.header)"
                @reset-flow="$emit('reset-flow')"
                @update-month-year="updateMonthYear(instance, $event)"
                @overlay-closed="onHeaderOverlayClose"
            >
                <template v-for="(slot, i) in headerSlots" #[slot]="args" :key="i">
                    <slot :name="slot" v-bind="args" />
                </template>
            </DpHeader>
            <DpCalendar
                ref="calendar"
                :mapped-dates="mappedDates(instance)"
                :instance="instance"
                :month="month(instance)"
                :year="year(instance)"
                @select-date="selectDate($event, instance !== 1)"
                @set-hover-date="setHoverDate($event)"
                @handle-scroll="handleScroll($event, instance)"
                @handle-swipe="handleSwipe($event, instance)"
                @mount="componentMounted(CMP.calendar)"
            >
                <template v-for="(slot, j) in calendarSlots" #[slot]="args" :key="j">
                    <slot :name="slot" v-bind="{ ...args }" />
                </template>
            </DpCalendar>
        </div>
    </InstanceWrap>
    <div v-if="timeConfig.enableTimePicker">
        <template v-if="$slots['time-picker']">
            <slot name="time-picker" v-bind="{ time, updateTime }" />
        </template>

        <TimePicker
            v-else
            ref="time-picker"
            :hours="time.hours"
            :minutes="time.minutes"
            :seconds="time.seconds"
            :disabled-times-config="disabledTimesConfig"
            :validate-time="validateTime"
            :no-overlay-focus="noOverlayFocus"
            @mount="componentMounted(CMP.timePicker)"
            @update:hours="updateTime({ hours: $event, minutes: time.minutes, seconds: time.seconds })"
            @update:minutes="updateTime({ hours: time.hours, minutes: $event, seconds: time.seconds })"
            @update:seconds="updateTime({ hours: time.hours, minutes: time.minutes, seconds: $event })"
            @reset-flow="$emit('reset-flow')"
        >
            <template v-for="(slot, i) in timePickerSlots" #[slot]="args" :key="i">
                <slot :name="slot" v-bind="args" />
            </template>
        </TimePicker>
    </div>
</template>

<script setup lang="ts">
    import { computed, useSlots, useTemplateRef, watch } from 'vue';
    import { endOfWeek, getMonth, startOfWeek } from 'date-fns';

    import DpHeader from '@/components/DatePicker/DpHeader.vue';
    import DpCalendar from '@/components/DatePicker/DpCalendar.vue';
    import InstanceWrap from '@/components/Common/InstanceWrap.vue';
    import TimePicker from '@/components/TimePicker/TimePicker.vue';

    import { useSlotsMapper, useDateUtils, useContext, useUtilsWithContext } from '@/composables';
    import { type DatePickerEmits, useDatePicker } from '@/components/DatePicker/useDatePicker.ts';

    import { basePropDefaults } from '@/constants/defaults.ts';
    import { CMP, FlowStep } from '@/constants';

    import { useCalendarClass } from '@/components/DatePicker/useCalendarClass.ts';
    import type { BaseProps, TimeKey } from '@/types';

    const emit = defineEmits<DatePickerEmits>();

    const props = withDefaults(defineProps<BaseProps>(), basePropDefaults);

    const {
        month,
        year,
        modelValue,
        time,
        disabledTimesConfig,
        today,
        validateTime,
        getCalendarDays,
        getMarker,
        handleArrow,
        handleScroll,
        handleSwipe,
        selectDate,
        updateMonthYear,
        presetDate,
        selectCurrentDate,
        updateTime,
        assignMonthAndYear,
        setStartTime,
    } = useDatePicker(props, emit, triggerCalendarTransition, updateFlowStep);
    const slots = useSlots();
    const { setHoverDate, getDayClassData, clearHoverDate } = useCalendarClass();
    const {
        getDate,
        rootEmit,
        rootProps,
        defaults: { multiCalendars, timeConfig },
    } = useContext();
    const { getYears, getMonths } = useUtilsWithContext();
    const { getCellId } = useDateUtils();
    const { mapSlots } = useSlotsMapper();

    const headerRefs = useTemplateRef('calendar-header');
    const calendarRefs = useTemplateRef('calendar');
    const timePickerRef = useTemplateRef('time-picker');

    const calendarSlots = mapSlots(slots, 'calendar');
    const headerSlots = mapSlots(slots, 'monthYear');
    const timePickerSlots = mapSlots(slots, 'timePicker');

    const componentMounted = (cmp: CMP) => {
        emit('mount', cmp);
    };

    watch(
        multiCalendars,
        (newVal, oldVal) => {
            if (newVal.count - oldVal.count > 0) {
                assignMonthAndYear();
            }
        },
        { deep: true },
    );

    /**
     * Array of the dates from which calendar is built.
     * It also sets classes depending on picker modes, active dates, today, v-model.
     */
    const mappedDates = computed(() => (instance: number) => {
        return getCalendarDays(month.value(instance), year.value(instance)).map((date) => {
            return {
                ...date,
                days: date.days.map((calendarDay) => {
                    calendarDay.marker = getMarker(calendarDay);
                    calendarDay.classData = getDayClassData(calendarDay);
                    return calendarDay;
                }),
            };
        });
    });

    function triggerCalendarTransition(instance?: number): void {
        if (instance || instance === 0) {
            calendarRefs.value?.[instance]?.triggerTransition(month.value(instance), year.value(instance));
        } else {
            calendarRefs.value?.forEach((refVal, i) => refVal?.triggerTransition(month.value(i), year.value(i)));
        }
    }

    function updateFlowStep() {
        emit('update-flow-step');
    }

    const toggleMonthPicker = (flow: boolean, show?: boolean, instance = 0) => {
        headerRefs.value?.[instance]?.toggleMonthPicker(flow, show);
    };

    const toggleYearPicker = (flow: boolean, show?: boolean, instance = 0) => {
        headerRefs.value?.[instance]?.toggleYearPicker(flow, show);
    };

    const toggleTimePicker = (flow: boolean, show?: boolean, childOpen?: TimeKey) => {
        timePickerRef.value?.toggleTimePicker(flow, show, childOpen);
    };

    const selectWeekDate = (selectStart: boolean, id: string | null) => {
        if (!rootProps.range) {
            const activeDate = modelValue.value ? modelValue.value : today;
            const date = id ? getDate(id) : activeDate;
            const toSelect = selectStart
                ? startOfWeek(date as Date, { weekStartsOn: 1 })
                : endOfWeek(date as Date, { weekStartsOn: 1 });

            selectDate({
                value: toSelect,
                current: getMonth(date as Date) === month.value(0),
                text: '',
                classData: {},
            });
            document.getElementById(getCellId(toSelect))?.focus();
        }
    };

    const changeMonth = (isNext: boolean) => {
        headerRefs.value?.[0]?.handleMonthYearChange(isNext, true);
    };

    const changeYear = (isNext: boolean) => {
        updateMonthYear(0, { month: month.value(0), year: year.value(0) + (isNext ? 1 : -1), fromNav: true });
    };

    const onHeaderOverlayClose = (type: FlowStep) => {
        rootEmit('overlay-toggle', { open: false, overlay: type });
        emit('focus-menu');
    };

    const getSidebarProps = () => {
        return {
            modelValue,
            month,
            year,
            time,
            updateTime,
            updateMonthYear,
            selectDate,
            presetDate,
        };
    };

    defineExpose({
        clearHoverDate,
        presetDate,
        selectCurrentDate,
        handleArrow,
        updateMonthYear,
        setStartTime,
        toggleMonthPicker,
        toggleYearPicker,
        toggleTimePicker,
        getSidebarProps,
        changeMonth,
        changeYear,
        selectWeekDate,
    });
</script>
