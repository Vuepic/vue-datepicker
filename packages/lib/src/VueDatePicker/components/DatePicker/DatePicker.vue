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
        @update-month-year="updateMonthYear(instance, $event)"
        @overlay-closed="onHeaderOverlayClose"
      >
        <template v-for="slotName in headerSlots" #[slotName]="args" :key="slotName">
          <slot :name="slotName" v-bind="args" />
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
      >
        <template v-for="slotName in calendarSlots" #[slotName]="args" :key="slotName">
          <slot :name="slotName" v-bind="args as any" />
        </template>
      </DpCalendar>
    </div>
  </InstanceWrap>
  <div v-if="timeConfig.enableTimePicker">
    <slot name="time-picker" v-bind="{ time, updateTime }">
      <TimePicker
        ref="time-picker"
        :hours="time.hours"
        :minutes="time.minutes"
        :seconds="time.seconds"
        :disabled-times-config="disabledTimesConfig"
        :validate-time="validateTime"
        :no-overlay-focus="noOverlayFocus"
        @update:hours="updateTime({ hours: $event, minutes: time.minutes, seconds: time.seconds })"
        @update:minutes="updateTime({ hours: time.hours, minutes: $event, seconds: time.seconds })"
        @update:seconds="updateTime({ hours: time.hours, minutes: time.minutes, seconds: $event })"
      >
        <template v-for="slotName in timePickerSlots" #[slotName]="args" :key="slotName">
          <slot :name="slotName" v-bind="args" />
        </template>
      </TimePicker>
    </slot>
  </div>
</template>

<script setup lang="ts">
  import { computed, useSlots, useTemplateRef, watch } from 'vue';
  import { endOfWeek, getMonth, startOfWeek } from 'date-fns';

  import DpHeader from '@/components/DatePicker/DpHeader.vue';
  import DpCalendar from '@/components/DatePicker/DpCalendar.vue';
  import InstanceWrap from '@/components/Common/InstanceWrap.vue';
  import TimePicker from '@/components/TimePicker/TimePicker.vue';

  import { useContext, useDateUtils, useUtilsWithContext } from '@/composables';
  import { type DatePickerEmits, useDatePicker } from '@/components/DatePicker/useDatePicker.ts';

  import { basePropDefaults } from '@/constants/defaults.ts';
  import { FlowStep } from '@/constants';

  import { useCalendarClass } from '@/components/DatePicker/useCalendarClass.ts';
  import { type DatePickerSlots, getSlotsByComponent, SlotUse } from '@/constants/slots.ts';
  import type { BaseProps, TimeKey } from '@/types';

  const emit = defineEmits<DatePickerEmits>();
  defineSlots<DatePickerSlots>();
  withDefaults(defineProps<BaseProps>(), basePropDefaults);

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
    updateTime,
    assignMonthAndYear,
    setStartTime,
  } = useDatePicker(emit, triggerCalendarTransition);
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

  const headerRefs = useTemplateRef<InstanceType<typeof DpHeader>[]>('calendar-header');
  const calendarRefs = useTemplateRef<InstanceType<typeof DpCalendar>[]>('calendar');
  const timePickerRef = useTemplateRef('time-picker');

  const calendarSlots = getSlotsByComponent(slots, SlotUse.Calendar);
  const headerSlots = getSlotsByComponent(slots, SlotUse.DatePickerHeader);
  const timePickerSlots = getSlotsByComponent(slots, SlotUse.TimePicker);

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
   * Array of the dates from which the calendar is built.
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

  const toggleMonthPicker = (show?: boolean, instance = 0) => {
    headerRefs.value?.[instance]?.toggleMonthPicker(show);
  };

  const toggleYearPicker = (show?: boolean, instance = 0) => {
    headerRefs.value?.[instance]?.toggleYearPicker(show);
  };

  const toggleTimePicker = (show: boolean, childOpen?: TimeKey) => {
    timePickerRef.value?.toggleTimePicker(show, childOpen);
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
