<template>
    <div class="dp__menu dp__menu_elevate" :class="dpMenuClass">
        <div class="dp__arrow"></div>
        <Calendar
            :months="mappedMonths"
            :language="language"
            :week-numbers="weekNumbers"
            :week-start="weekStart"
            :disable-month-year-select="disableMonthYearSelect"
            :calendar-class-name="calendarClassName"
            :is24="is24"
            :range="range"
            :year-range="yearRange"
            :start-date="firstDate"
            :calendar-cell-class-name="calendarCellClassName"
            :enable-time-picker="enableTimePicker"
            :hours-increment="hoursIncrement"
            :minutes-increment="minutesIncrement"
            :hours-grid-increment="hoursGridIncrement"
            :minutes-grid-increment="minutesGridIncrement"
            :auto-apply="autoApply"
            :locale="locale"
            @selectRangeDate="$emit('update:rangeModelValue', $event)"
            @closePicker="$emit('closePicker')"
            @selectDate="$emit('selectDate')"
            v-model:rangeModelValue="rangeDate"
            v-model:singleModelValue="singleDate"
        ></Calendar>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType } from 'vue';
    import Calendar from './Calendar.vue';

    import { DatepickerMenuProps, ILanguage, IMonth, DynamicClass, FormatOptions } from '../interfaces';
    import { useBindValue } from '../utils/hooks';

    export default defineComponent({
        name: 'DatepickerMenu',
        components: { Calendar },
        emits: ['update:singleModelValue', 'update:rangeModelValue', 'closePicker', 'selectDate'],
        props: {
            language: { type: Object as PropType<ILanguage>, default: null },
            weekNumbers: { type: Boolean as PropType<boolean>, default: false },
            weekStart: { type: [Number, String] as PropType<number | string>, default: 1 },
            disableMonthYearSelect: { type: Boolean as PropType<boolean>, default: false },
            menuClassName: { type: String as PropType<string>, default: null },
            calendarClassName: { type: String as PropType<string>, default: null },
            yearRange: { type: Array as PropType<number[]>, default: () => [] },
            singleModelValue: { type: [String, Date] as PropType<string | Date>, default: null },
            rangeModelValue: { type: Array as unknown as PropType<[Date?, Date?]>, default: () => [] },
            range: { type: Boolean as PropType<boolean>, default: false },
            calendarCellClassName: { type: String as PropType<string>, default: null },
            enableTimePicker: { type: Boolean as PropType<boolean>, default: false },
            is24: { type: Boolean as PropType<boolean>, default: true },
            hoursIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            minutesIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
            autoApply: { type: Boolean as PropType<boolean>, default: false },
            selectText: { type: String as PropType<string>, default: 'Select' },
            cancelText: { type: String as PropType<string>, default: 'Cancel' },
            previewFormat: {
                type: [Object, Function] as PropType<FormatOptions | ((date: Date | Date[]) => string)>,
                default: () => ({}),
            }, // connected on single calendar
            locale: { type: String as PropType<string>, default: 'en-US' },
        },
        setup(props: DatepickerMenuProps, { emit }) {
            const mappedMonths = computed((): IMonth[] =>
                props.language.months.map((month: string, i: number) => ({ text: month, value: i })),
            );

            const dpMenuClass = computed(
                (): DynamicClass => ({
                    [props.menuClassName]: !!props.menuClassName,
                }),
            );

            const rangeDate = useBindValue(props, emit, 'rangeModelValue');
            const singleDate = useBindValue(props, emit, 'singleModelValue');

            const firstDate = computed((): Date => {
                if (props.range) {
                    return props.rangeModelValue[0] ? new Date(props.rangeModelValue[0]) : new Date();
                } else {
                    return props.singleModelValue ? new Date(props.singleModelValue) : new Date();
                }
            });

            return {
                firstDate,
                rangeDate,
                singleDate,
                dpMenuClass,
                mappedMonths,
            };
        },
    });
</script>
