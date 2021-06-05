<template>
    <div :class="calendarClass">
        <div class="dp__calendar_content_wrap">
            <MonthYearInput
                :months="months"
                v-model:month="month"
                v-model:year="year"
                v-if="!disableMonthYearSelect"
                :years="years"
            />
            <table class="dp__calendar_tb">
                <thead>
                    <tr class="dp__calendar_days">
                        <th class="dp__calendar_header_cell" v-if="weekNumbers">{{ weekNumName }}</th>
                        <th class="dp__calendar_header_cell" v-for="(day, i) in weekDays" :key="i">{{ day }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(week, weekInd) in mappedDates" :key="weekInd">
                        <td v-if="weekNumbers" class="dp__cell dp__week_num">{{ getWeekDay(week.days) }}</td>
                        <td
                            class="dp__cell"
                            v-for="(day, dayInd) in week.days"
                            :key="dayInd + weekInd"
                            @click="selectDate(day)"
                            @mouseover="setHoverDate(day)"
                        >
                            <div class="dp__cell_inner" :class="day.classData">{{ day.text }}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <TimePicker
                v-if="enableTimePicker"
                :is24="is24"
                :hours-increment="hoursIncrement"
                :minutes-increment="minutesIncrement"
                :hours-grid-increment="hoursGridIncrement"
                :minutes-grid-increment="minutesGridIncrement"
                :range="range"
                v-model:hoursSingle="hoursSingle"
                v-model:minutesSingle="minutesSingle"
            />
        </div>
        <ActionRow
            v-if="!autoApply"
            :range-model-value="rangeModelValue"
            :single-model-value="singleModelValue"
            :range="range"
            :select-text="selectText"
            :cancel-text="cancelText"
            :preview-format="previewFormat"
            :locale="locale"
            :is24="is24"
            :enable-time-picker="enableTimePicker"
            @closePicker="$emit('closePicker')"
            @selectDate="$emit('selectDate')"
        ></ActionRow>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, PropType, ref, toRef, watch, UnwrapRef } from 'vue';
    import MonthYearInput from './MonthYearInput.vue';
    import TimePicker from './TimePicker/TimePicker.vue';
    import ActionRow from './ActionRow.vue';
    import {
        CalendarProps,
        ICalendarDate,
        ICalendarDay,
        IMonth,
        DynamicClass,
        IDefaultSelect,
        FormatOptions,
    } from '../interfaces';
    import { useDpDaysGen } from '../utils/hooks';
    import { getDayNames } from '@/Vue3DatePicker/utils/util';

    export default defineComponent({
        name: 'Calendar',
        components: {
            MonthYearInput,
            TimePicker,
            ActionRow,
        },
        emits: ['update:rangeModelValue', 'update:singleModelValue', 'closePicker', 'selectDate'],
        props: {
            months: { type: Array as PropType<IMonth[]>, default: () => [] },
            weekStart: { type: [Number, String] as PropType<number | string>, default: 1 },
            weekNumbers: { type: Boolean as PropType<boolean>, default: false },
            disableMonthYearSelect: { type: Boolean as PropType<boolean>, default: false },
            calendarClassName: { type: String as PropType<string>, default: null },
            yearRange: { type: Array as PropType<number[]>, default: () => [] },
            startDate: { type: Date as PropType<Date>, default: null },
            calendarCellClassName: { type: String as PropType<string>, default: null },
            enableTimePicker: { type: Boolean as PropType<boolean>, default: false },
            is24: { type: Boolean as PropType<boolean>, default: true },
            hoursIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            minutesIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
            rangeModelValue: { type: Array as unknown as PropType<[Date?, Date?]>, default: () => [] },
            singleModelValue: { type: Date as PropType<Date>, default: null },
            range: { type: Boolean as PropType<boolean>, default: false },
            autoApply: { type: Boolean as PropType<boolean>, default: false },
            selectText: { type: String as PropType<string>, default: 'Select' },
            cancelText: { type: String as PropType<string>, default: 'Cancel' },
            previewFormat: {
                type: [Object, Function] as PropType<FormatOptions | ((date: Date | Date[]) => string)>,
                default: null,
            },
            locale: { type: String as PropType<string>, default: 'en-US' },
            weekNumName: { type: String as PropType<string>, default: 'W' },
        },
        setup(props: CalendarProps, { emit }) {
            const weekDays = ref();
            const hoursSingle = ref(0);
            const minutesSingle = ref(0);
            const month = ref(0);
            const year = ref(0);
            const day = ref(0);
            const today = ref(new Date());
            const hoveredDate = ref<Date>();
            const activeDate = toRef(props, 'startDate');
            const rangeModelValue = toRef(props, 'rangeModelValue');
            const singleModelValue = toRef(props, 'singleModelValue');

            watch(activeDate, () => {
                if (activeDate.value) {
                    setStartDate(props.startDate);
                }
            });

            watch(hoursSingle, () => {
                if (props.singleModelValue) {
                    updateHoursSingle();
                }
            });

            watch(minutesSingle, () => {
                if (props.singleModelValue) {
                    updateMinutesSingle();
                }
            });

            onMounted(() => {
                if (props.startDate) {
                    setStartDate(props.startDate);
                } else {
                    setStartDate(new Date());
                }

                weekDays.value = getDayNames(props.locale, +props.weekStart);

                if (singleModelValue.value) {
                    hoursSingle.value = singleModelValue.value.getHours();
                    minutesSingle.value = singleModelValue.value.getMinutes();
                }
            });

            const dates = useDpDaysGen(month, year, +props.weekStart);

            const years = computed((): IDefaultSelect[] => {
                const years: IDefaultSelect[] = [];
                for (let minYear = props.yearRange[0]; minYear <= props.yearRange[1]; minYear++) {
                    years.push({ value: minYear, text: `${minYear}` });
                }
                return years;
            });

            const calendarClass = computed(
                (): DynamicClass => ({
                    ['dp__calendar']: true,
                    [props.calendarClassName]: !!props.calendarClassName,
                }),
            );

            const mappedDates = computed((): ICalendarDate[] => {
                return dates.value.map((date) => {
                    return {
                        ...date,
                        days: date.days.map((calendarDay) => {
                            calendarDay.classData = {
                                ['dp__cell_offset']: !calendarDay.current,
                                ['dp__pointer']: true,
                                ['dp__active_date']: isActiveDate(calendarDay),
                                ['dp__date_hover']: !isActiveDate(calendarDay),
                                ['dp__range_between']: props.range ? rangeActive(calendarDay) : false,
                                ['dp__today']: compareTwoDates(calendarDay.value, today.value),
                                [props.calendarCellClassName]: !!props.calendarCellClassName,
                            };
                            return calendarDay;
                        }),
                    };
                });
            });

            const compareTwoDates = (dateOne: Date, dateTwo: Date | null): boolean => {
                if (dateOne && dateTwo) {
                    const [dateOneDay, dateTwoDay] = [dateOne.getDate(), dateTwo.getDate()];
                    const [dateOneMonth, dateTwoMonth] = [dateOne.getMonth(), dateTwo.getMonth()];
                    const [dateOneYear, dateTwoYear] = [dateOne.getFullYear(), dateTwo.getFullYear()];

                    return dateOneDay === dateTwoDay && dateOneMonth === dateTwoMonth && dateOneYear === dateTwoYear;
                }
                return false;
            };

            const isActiveDate = (calendarDay: ICalendarDay): boolean => {
                if (!props.range) {
                    return compareTwoDates(calendarDay.value, singleModelValue.value);
                }
                return (
                    compareTwoDates(
                        calendarDay.value,
                        rangeModelValue.value[0]
                            ? new Date(JSON.parse(JSON.stringify(rangeModelValue.value[0])))
                            : null,
                    ) ||
                    compareTwoDates(
                        calendarDay.value,
                        rangeModelValue.value[1]
                            ? new Date(JSON.parse(JSON.stringify(rangeModelValue.value[1])))
                            : null,
                    )
                );
            };

            const rangeActive = (calendarDay: ICalendarDay): boolean => {
                if (rangeModelValue.value[0] && rangeModelValue.value[1]) {
                    return (
                        calendarDay.value.getTime() > rangeModelValue.value[0].getTime() &&
                        calendarDay.value.getTime() < rangeModelValue.value[1].getTime()
                    );
                }
                if (rangeModelValue.value[0] && hoveredDate.value) {
                    return (
                        (calendarDay.value.getTime() > rangeModelValue.value[0].getTime() &&
                            calendarDay.value.getTime() < hoveredDate.value.getTime()) ||
                        (calendarDay.value.getTime() < rangeModelValue.value[0].getTime() &&
                            calendarDay.value.getTime() > hoveredDate.value.getTime())
                    );
                }
                return false;
            };

            const setStartDate = (date: Date): void => {
                month.value = date.getMonth();
                year.value = date.getFullYear();
                day.value = date.getDate();
            };

            const selectDate = (day: UnwrapRef<ICalendarDay>): void => {
                if (!props.range) {
                    day.value.setHours(hoursSingle.value);
                    emit('update:singleModelValue', day.value);
                } else {
                    let rangeDate = rangeModelValue.value.slice();
                    if (rangeDate.length === 2) {
                        rangeDate = [];
                    }
                    if (!rangeDate[0]) {
                        rangeDate[0] = day.value;
                    } else {
                        if (day.value.getTime() < rangeDate[0].getTime()) {
                            rangeDate.unshift(day.value);
                        } else {
                            rangeDate[1] = day.value;
                        }
                    }
                    emit('update:rangeModelValue', rangeDate);
                }
            };

            const getWeekDay = (days: UnwrapRef<ICalendarDay[]>): string | number => {
                const firstCurrentData = days.find((day) => day.current);
                if (firstCurrentData) {
                    const today = new Date(firstCurrentData.value);
                    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
                    const pastDaysOfYear = (today.getTime() - firstDayOfYear.getTime()) / 86400000;
                    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
                }
                return '';
            };

            const setHoverDate = (day: UnwrapRef<ICalendarDay>): void => {
                hoveredDate.value = day.value;
            };

            const updateHoursSingle = (): void => {
                const newDate = new Date(JSON.parse(JSON.stringify(props.singleModelValue)));
                newDate.setHours(hoursSingle.value);
                emit('update:singleModelValue', newDate);
            };

            const updateMinutesSingle = (): void => {
                const newDate = new Date(JSON.parse(JSON.stringify(props.singleModelValue)));
                newDate.setMinutes(minutesSingle.value);
                emit('update:singleModelValue', newDate);
            };

            return {
                mappedDates,
                years,
                calendarClass,
                weekDays,
                selectDate,
                getWeekDay,
                setHoverDate,
                dates,
                month,
                year,
                day,
                hoursSingle,
                minutesSingle,
            };
        },
    });
</script>
