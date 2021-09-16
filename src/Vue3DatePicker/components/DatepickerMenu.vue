<template>
    <div class="dp__menu" :class="dpMenuClass" :id="`dp__menu_${uid}`">
        <div :class="arrowClass" v-if="!inline"></div>
        <Calendar
            v-bind="{
                internalModelValue,
                range,
                weekNumbers,
                weekStart,
                disableMonthYearSelect,
                calendarClassName,
                is24,
                yearRange,
                calendarCellClassName,
                enableTimePicker,
                hoursIncrement,
                minutesIncrement,
                hoursGridIncrement,
                minutesGridIncrement,
                autoApply,
                locale,
                weekNumName,
                previewFormat,
                minDate,
                maxDate,
                disabledDates,
                filters,
                minTime,
                maxTime,
                selectText,
                cancelText,
                inline,
                monthPicker,
                timePicker,
                monthNameFormat,
                startDate,
                startTime,
            }"
            @closePicker="$emit('closePicker')"
            @selectDate="$emit('selectDate')"
            @autoApply="$emit('autoApply', $event)"
            @update:internalModelValue="$emit('update:internalModelValue', $event)"
        >
            <template v-for="(slot, i) in slotList" #[slot]="props" :key="i">
                <slot :name="slot" v-bind="{ ...props }" />
            </template>
        </Calendar>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, PropType, nextTick } from 'vue';
    import Calendar from './Calendar.vue';

    import {
        DatepickerMenuProps,
        DynamicClass,
        IDateFilter,
        IFormat,
        InternalModuleValue,
        ITimeValue,
    } from '../interfaces';
    import { useSlots } from '../utils/composition/slots';

    export default defineComponent({
        name: 'DatepickerMenu',
        components: { Calendar },
        emits: ['update:internalModelValue', 'closePicker', 'selectDate', 'dpOpen', 'autoApply'],
        // From this point onward there is no point on defining default values from props, since they are passed from the main component
        props: {
            uid: { type: String as PropType<string>, default: 'dp' },
            internalModelValue: { type: [String, Date, Object] as PropType<InternalModuleValue>, default: null },
            weekNumbers: { type: Boolean as PropType<boolean>, default: false },
            weekStart: { type: [Number, String] as PropType<number | string>, default: 1 },
            disableMonthYearSelect: { type: Boolean as PropType<boolean>, default: false },
            menuClassName: { type: String as PropType<string>, default: null },
            calendarClassName: { type: String as PropType<string>, default: null },
            yearRange: { type: Array as PropType<number[]>, default: () => [] },
            range: { type: Boolean as PropType<boolean>, default: false },
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
            startTime: { type: Object as PropType<ITimeValue | ITimeValue[]>, default: null },
        },
        setup(props: DatepickerMenuProps, { emit, slots }) {
            onMounted(() => {
                if (!props.inline) {
                    nextTick(() => emit('dpOpen'));
                }
            });

            const slotList = useSlots(slots, 'all');

            const arrowClass = computed(() => (!props.openOnTop ? 'dp__arrow_top' : 'dp__arrow_bottom'));

            const dpMenuClass = computed(
                (): DynamicClass => ({
                    [props.menuClassName]: !!props.menuClassName,
                    dp__flex_display: props.inline,
                }),
            );

            return {
                slotList,
                dpMenuClass,
                arrowClass,
            };
        },
    });
</script>
