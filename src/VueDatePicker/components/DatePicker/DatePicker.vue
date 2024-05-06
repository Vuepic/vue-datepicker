<template>
    <InstanceWrap v-slot="{ instance, index }" :multi-calendars="defaultedMultiCalendars.count" :collapse="collapse">
        <DpHeader
            v-if="!disableMonthYearSelect"
            :ref="
                (el: any) => {
                    if (el) headerRefs[index] = el;
                }
            "
            :months="getMonths(formatLocale, locale, monthNameFormat)"
            :years="getYears(yearRange, locale, reverseYears)"
            :month="month(instance)"
            :year="year(instance)"
            :instance="instance"
            v-bind="$props"
            @mount="componentMounted(CMP.header)"
            @reset-flow="$emit('reset-flow')"
            @update-month-year="updateMonthYear(instance, $event)"
            @overlay-closed="onHeaderOverlayClose"
            @overlay-opened="$emit('overlay-toggle', { open: true, overlay: $event })"
        >
            <template v-for="(slot, j) in headerSlots" #[slot]="args" :key="j">
                <slot :name="slot" v-bind="args" />
            </template>
        </DpHeader>
        <DpCalendar
            :ref="
                (el: any) => {
                    if (el) calendarRefs[index] = el;
                }
            "
            :mapped-dates="mappedDates(instance)"
            :month="month(instance)"
            :year="year(instance)"
            :instance="instance"
            v-bind="$props"
            @select-date="selectDate($event, instance !== 1)"
            @handle-space="handleSpace($event, instance !== 1)"
            @set-hover-date="setHoverDate($event)"
            @handle-scroll="handleScroll($event, instance)"
            @handle-swipe="handleSwipe($event, instance)"
            @mount="componentMounted(CMP.calendar)"
            @reset-flow="$emit('reset-flow')"
            @tooltip-open="$emit('tooltip-open', $event)"
            @tooltip-close="$emit('tooltip-close', $event)"
        >
            <template v-for="(slot, j) in calendarSlots" #[slot]="args" :key="j">
                <slot :name="slot" v-bind="{ ...args }" />
            </template>
        </DpCalendar>
    </InstanceWrap>
    <div v-if="enableTimePicker">
        <template v-if="$slots['time-picker']">
            <slot name="time-picker" v-bind="{ time, updateTime }" />
        </template>
        <TimePicker
            v-else
            ref="timePickerRef"
            v-bind="$props"
            :hours="time.hours"
            :minutes="time.minutes"
            :seconds="time.seconds"
            :internal-model-value="internalModelValue"
            :disabled-times-config="disabledTimesConfig"
            :validate-time="validateTime"
            @mount="componentMounted(CMP.timePicker)"
            @update:hours="updateTime($event)"
            @update:minutes="updateTime($event, false)"
            @update:seconds="updateTime($event, false, true)"
            @reset-flow="$emit('reset-flow')"
            @overlay-closed="timePickerOverlayToggle($event, false)"
            @overlay-opened="timePickerOverlayToggle($event, true)"
            @am-pm-change="$emit('am-pm-change', $event)"
        >
            <template v-for="(slot, i) in timePickerSlots" #[slot]="args" :key="i">
                <slot :name="slot" v-bind="args" />
            </template>
        </TimePicker>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref, useSlots, watch } from 'vue';

    import DpHeader from '@/components/DatePicker/DpHeader.vue';
    import DpCalendar from '@/components/DatePicker/DpCalendar.vue';
    import InstanceWrap from '@/components/Common/InstanceWrap.vue';
    import TimePicker from '@/components/TimePicker/TimePicker.vue';

    import { PickerBaseProps } from '@/props';
    import { mapSlots, useCalendarClass, useDefaults } from '@/composables';
    import { useDatePicker } from '@/components/DatePicker/date-picker';
    import { getMonths, getYears } from '@/utils/util';
    import { CMP, FlowStep } from '@/constants';

    import type { ICalendarDay } from '@/interfaces';
    import { endOfWeek, getMonth, startOfWeek } from 'date-fns';

    const emit = defineEmits([
        'tooltip-open',
        'tooltip-close',
        'mount',
        'update:internal-model-value',
        'update-flow-step',
        'reset-flow',
        'auto-apply',
        'focus-menu',
        'select-date',
        'range-start',
        'range-end',
        'invalid-fixed-range',
        'time-update',
        'am-pm-change',
        'time-picker-open',
        'time-picker-close',
        'recalculate-position',
        'update-month-year',
        'auto-apply-invalid',
        'date-update',
        'invalid-date',
        'overlay-toggle',
    ]);
    const props = defineProps({
        ...PickerBaseProps,
    });

    const {
        calendars,
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
    } = useDatePicker(props, emit, triggerCalendarTransition, updateFlowStep);
    const slots = useSlots();
    const { setHoverDate, getDayClassData, clearHoverDate } = useCalendarClass(modelValue, props);
    const { defaultedMultiCalendars } = useDefaults(props);

    const headerRefs = ref<InstanceType<typeof DpHeader>[]>([]);
    const calendarRefs = ref<InstanceType<typeof DpCalendar>[]>([]);
    const timePickerRef = ref<InstanceType<typeof TimePicker> | null>(null);

    const calendarSlots = mapSlots(slots, 'calendar');
    const headerSlots = mapSlots(slots, 'monthYear');
    const timePickerSlots = mapSlots(slots, 'timePicker');

    const componentMounted = (cmp: CMP) => {
        if (!props.shadow) {
            emit('mount', cmp);
        }
    };

    watch(
        calendars,
        () => {
            if (!props.shadow) {
                setTimeout(() => {
                    emit('recalculate-position');
                }, 0);
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
            calendarRefs.value[instance]?.triggerTransition(month.value(instance), year.value(instance));
        } else {
            calendarRefs.value.forEach((refVal, i) => refVal.triggerTransition(month.value(i), year.value(i)));
        }
    }

    function updateFlowStep() {
        emit('update-flow-step');
    }

    const handleSpace = (day: ICalendarDay, isNext = false): void => {
        selectDate(day, isNext);
        if (props.spaceConfirm) {
            emit('select-date');
        }
    };

    const toggleMonthPicker = (flow: boolean, show?: boolean, instance = 0) => {
        headerRefs.value[instance]?.toggleMonthPicker(flow, show);
    };

    const toggleYearPicker = (flow: boolean, show?: boolean, instance = 0) => {
        headerRefs.value[instance]?.toggleYearPicker(flow, show);
    };

    const toggleTimePicker = (flow: boolean, show?: boolean, childOpen?: string) => {
        timePickerRef.value?.toggleTimePicker(flow, show, childOpen);
    };

    const selectWeekDate = (selectStart: boolean) => {
        if (!props.range) {
            const date = modelValue.value ? modelValue.value : today;
            const toSelect = selectStart
                ? startOfWeek(date as Date, { weekStartsOn: 1 })
                : endOfWeek(date as Date, { weekStartsOn: 1 });

            selectDate({
                value: toSelect,
                current: getMonth(date as Date) === month.value(0),
                text: '',
                classData: {},
            });
        }
    };

    const changeMonth = (isNext: boolean) => {
        headerRefs.value[0]?.handleMonthYearChange(isNext, true);
    };

    const changeYear = (isNext: boolean) => {
        updateMonthYear(0, { month: month.value(0), year: year.value(0) + (isNext ? 1 : -1), fromNav: true });
    };

    const timePickerOverlayToggle = (type: FlowStep, open: boolean) => {
        if (type === FlowStep.time) {
            emit(`time-picker-${open ? 'open' : 'close'}`);
        }
        emit('overlay-toggle', { open, overlay: type });
    };

    const onHeaderOverlayClose = (type: FlowStep) => {
        emit('overlay-toggle', { open: false, overlay: type });
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
        toggleMonthPicker,
        toggleYearPicker,
        toggleTimePicker,
        handleArrow,
        updateMonthYear,
        getSidebarProps,
        changeMonth,
        changeYear,
        selectWeekDate,
    });
</script>
