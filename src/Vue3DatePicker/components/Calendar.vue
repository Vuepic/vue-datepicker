<template>
    <div :class="calendarClass">
        <div :class="contentWrapClass">
            <MonthYearInput
                v-if="!disableMonthYearSelect && !timePicker"
                :months="months"
                :years="years"
                :filters="filters"
                :month-picker="monthPicker"
                :month="month"
                :year="year"
                @update:month="updateMonth"
                @update:year="updateYear"
            />
            <table class="dp__calendar_tb" v-if="!specificMode">
                <thead>
                    <tr class="dp__calendar_days">
                        <th class="dp__calendar_header_cell" v-if="weekNumbers">{{ weekNumName }}</th>
                        <th class="dp__calendar_header_cell" v-for="(dayVal, i) in weekDays" :key="i">{{ dayVal }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(week, weekInd) in mappedDates" :key="weekInd">
                        <td v-if="weekNumbers" class="dp__cell dp__week_num">{{ getWeekDay(week.days) }}</td>
                        <td
                            class="dp__cell"
                            v-for="(dayVal, dayInd) in week.days"
                            :key="dayInd + weekInd"
                            @click="selectDate(dayVal)"
                            @mouseover="setHoverDate(dayVal)"
                        >
                            <div class="dp__cell_inner" :class="dayVal.classData">{{ dayVal.text }}</div>
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
                :filters="filters"
                :min-time="minTime"
                :max-time="maxTime"
                :time-picker="timePicker"
                v-model:hoursSingle="hoursSingle"
                v-model:minutesSingle="minutesSingle"
                v-model:hoursRange="hoursRange"
                v-model:minutesRange="minutesRange"
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
            :inline="inline"
            :month-picker="monthPicker"
            :month-picker-value="monthPickerValue"
            :time-picker="timePicker"
            :time-picker-value="timePickerValue"
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
        IDateFilter,
        ITimeRange,
        IModelValueMonthPicker,
        IModelValueTimePicker,
    } from '../interfaces';
    import { useDpDaysGen } from '../utils/hooks';
    import { getDayNames } from '../utils/util';

    export default defineComponent({
        name: 'Calendar',
        components: {
            MonthYearInput,
            TimePicker,
            ActionRow,
        },
        emits: [
            'update:rangeModelValue',
            'update:singleModelValue',
            'closePicker',
            'selectDate',
            'update:monthPickerValue',
            'update:timePickerValue',
            'autoApply',
        ],
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
            minDate: { type: [Date, String] as PropType<Date | string>, default: null },
            maxDate: { type: [Date, String] as PropType<Date | string>, default: null },
            disabledDates: { type: Array as PropType<Date[] | string[]>, default: () => [] },
            filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
            minTime: { type: Object as PropType<ITimeRange>, default: () => ({}) },
            maxTime: { type: Object as PropType<ITimeRange>, default: () => ({}) },
            inline: { type: Boolean as PropType<boolean>, default: false },
            monthPicker: { type: Boolean as PropType<boolean>, default: false },
            timePicker: { type: Boolean as PropType<boolean>, default: false },
            monthPickerValue: { type: Object as PropType<IModelValueMonthPicker>, default: null },
            timePickerValue: {
                type: [Object, Array] as PropType<IModelValueTimePicker | IModelValueTimePicker[]>,
                default: null,
            },
        },
        setup(props: CalendarProps, { emit }) {
            const weekDays = ref();
            const hoursSingle = ref(0);
            const hoursRange = ref([0, 0]);
            const minutesSingle = ref(0);
            const minutesRange = ref([0, 0]);
            const month = ref(new Date().getMonth());
            const year = ref(new Date().getFullYear());
            const day = ref(new Date().getDate());
            const today = ref(new Date());
            const hoveredDate = ref<Date>();
            const activeDate = toRef(props, 'startDate');
            const rangeModelValue = toRef(props, 'rangeModelValue');
            const singleModelValue = toRef(props, 'singleModelValue');
            const timePickerValue = toRef(props, 'timePickerValue');

            watch(activeDate, () => {
                if (activeDate.value) {
                    setStartDate(props.startDate);
                }
            });

            watch(hoursSingle, () => {
                if (props.singleModelValue || props.timePicker) {
                    updateSingleDateTime();
                }
            });

            watch(minutesSingle, () => {
                if (props.singleModelValue || props.timePicker) {
                    updateSingleDateTime();
                }
            });

            watch(hoursRange, () => {
                if (props.rangeModelValue.length === 2 || props.timePicker) {
                    updateRangeDateTimes();
                }
            });

            watch(minutesRange, () => {
                if (props.rangeModelValue.length === 2 || props.timePicker) {
                    updateRangeDateTimes();
                }
            });

            onMounted(() => {
                if (props.startDate) {
                    setStartDate(props.startDate);
                } else {
                    setStartDate(new Date());
                }

                weekDays.value = getDayNames(props.locale, +props.weekStart);
                const date = new Date();

                if (!specificMode.value) {
                    if (singleModelValue.value) {
                        assignSingleDateTime(singleModelValue.value);
                    } else {
                        assignSingleDateTime(date);
                    }

                    if (rangeModelValue.value && rangeModelValue.value[0] && rangeModelValue.value[1]) {
                        assignRangeDateTime(rangeModelValue.value as Date[]);
                    } else {
                        assignRangeDateTime(date);
                    }
                } else {
                    if (props.timePicker) {
                        if (!props.range && !Array.isArray(timePickerValue.value)) {
                            if (timePickerValue.value) {
                                hoursSingle.value = timePickerValue.value.hours;
                                minutesSingle.value = timePickerValue.value.minutes;
                            } else {
                                assignSingleDateTime(date);
                            }
                        } else if (props.range && Array.isArray(timePickerValue.value)) {
                            if (timePickerValue.value.length === 2) {
                                hoursRange.value = [timePickerValue.value[0].hours, timePickerValue.value[1].hours];
                                minutesRange.value = [
                                    timePickerValue.value[0].minutes,
                                    timePickerValue.value[1].minutes,
                                ];
                            } else {
                                assignRangeDateTime(date);
                            }
                        }
                    }

                    if (props.monthPickerValue && props.monthPicker) {
                        month.value = props.monthPickerValue.month;
                        year.value = props.monthPickerValue.year;
                    }
                }
            });

            /**
             * Hook call. Gets array of dates in the single month grouped in by week.
             * It will also get days in the offset from the previous/next month to fill the empty space
             */
            const dates = useDpDaysGen(month, year, +props.weekStart);

            /**
             * If datepicker is using only month or time picker
             */
            const specificMode = computed((): boolean => props.monthPicker || props.timePicker);

            /**
             * Generate array of years depending on provided range that will be available for picker
             */
            const years = computed((): IDefaultSelect[] => {
                const years: IDefaultSelect[] = [];
                for (let minYear = props.yearRange[0]; minYear <= props.yearRange[1]; minYear++) {
                    years.push({ value: minYear, text: `${minYear}` });
                }
                return years;
            });

            /**
             * Class object for top most calendar wrapper
             */
            const calendarClass = computed(
                (): DynamicClass => ({
                    ['dp__calendar']: true,
                    [props.calendarClassName]: !!props.calendarClassName,
                }),
            );

            const contentWrapClass = computed(
                (): DynamicClass => ({
                    dp__calendar_content_wrap: true,
                    dp_calendar_fixed: specificMode.value,
                }),
            );

            const assignSingleDateTime = (date: Date): void => {
                hoursSingle.value = date.getHours();
                minutesSingle.value = date.getMinutes();
            };

            const assignRangeDateTime = (date: Date | Date[]): void => {
                if (Array.isArray(date)) {
                    hoursRange.value = [date[0].getHours(), date[1].getHours()];
                    minutesRange.value = [date[0].getMinutes(), date[1].getMinutes()];
                } else {
                    hoursRange.value = [date.getHours(), date.getHours()];
                    minutesRange.value = [date.getMinutes(), date.getMinutes()];
                }
            };

            /**
             * CHeck if date is between max and min date
             */
            const isDisabled = (date: Date): boolean => {
                const aboveMax = props.maxDate ? getTimestamp(date) > getTimestamp(new Date(props.maxDate)) : false;
                const bellowMin = props.minDate ? getTimestamp(date) < getTimestamp(new Date(props.minDate)) : false;
                const inDisableArr = props.disabledDates.some(
                    (disabledDate: Date | string) => getTimestamp(new Date(disabledDate)) === getTimestamp(date),
                );

                return aboveMax || bellowMin || inDisableArr;
            };

            /**
             * Array of the dates from which calendar is built.
             * It also sets classes depending on picker modes, active dates, today, v-model.
             */
            const mappedDates = computed((): ICalendarDate[] => {
                return dates.value.map((date) => {
                    return {
                        ...date,
                        days: date.days.map((calendarDay) => {
                            const disabled = isDisabled(calendarDay.value);
                            calendarDay.classData = {
                                ['dp__cell_offset']: !calendarDay.current,
                                ['dp__pointer']: !disabled,
                                ['dp__active_date']: isActiveDate(calendarDay),
                                ['dp__date_hover']: !disabled && !isActiveDate(calendarDay),
                                ['dp__range_between']:
                                    props.range && !disabled && !isActiveDate(calendarDay)
                                        ? rangeActive(calendarDay)
                                        : false,
                                ['dp__today']: compareTwoDates(calendarDay.value, today.value),
                                ['dp__cell_disabled']: disabled,
                                [props.calendarCellClassName]: !!props.calendarCellClassName,
                            };
                            return calendarDay;
                        }),
                    };
                });
            });

            const updateMonthPicker = (yearChange = false): void => {
                emit('update:monthPickerValue', { month: month.value, year: year.value });
                if (props.autoApply) {
                    emit('autoApply', yearChange);
                }
            };

            /**
             * Compare if 2 dates are the same date by year, month, day
             */
            const compareTwoDates = (dateOne: Date, dateTwo: Date | null): boolean => {
                if (dateOne && dateTwo) {
                    const [dateOneDay, dateTwoDay] = [dateOne.getDate(), dateTwo.getDate()];
                    const [dateOneMonth, dateTwoMonth] = [dateOne.getMonth(), dateTwo.getMonth()];
                    const [dateOneYear, dateTwoYear] = [dateOne.getFullYear(), dateTwo.getFullYear()];

                    return dateOneDay === dateTwoDay && dateOneMonth === dateTwoMonth && dateOneYear === dateTwoYear;
                }
                return false;
            };

            /**
             * Check if some date is active, in case of range, it will have two dates
             */
            const isActiveDate = (calendarDay: ICalendarDay): boolean => {
                if (!props.range) {
                    return compareTwoDates(calendarDay.value, singleModelValue.value);
                }
                return (
                    compareTwoDates(
                        calendarDay.value,
                        rangeModelValue.value && rangeModelValue.value[0]
                            ? new Date(JSON.parse(JSON.stringify(rangeModelValue.value[0])))
                            : null,
                    ) ||
                    compareTwoDates(
                        calendarDay.value,
                        rangeModelValue.value && rangeModelValue.value[1]
                            ? new Date(JSON.parse(JSON.stringify(rangeModelValue.value[1])))
                            : null,
                    )
                );
            };

            /**
             * Used when comparing dates when time is used, so it will reset date to 0, 0 and return timestamp
             */
            const getTimestamp = (date: Date): number => {
                const dateCopy = new Date(date);
                dateCopy.setHours(0, 0);
                return dateCopy.getTime();
            };

            /**
             * If range mode used, this will check if the calendar day is between 2 active dates
             */
            const rangeActive = (calendarDay: ICalendarDay): boolean => {
                if (rangeModelValue.value && rangeModelValue.value[0] && rangeModelValue.value[1]) {
                    return (
                        getTimestamp(calendarDay.value) > getTimestamp(rangeModelValue.value[0]) &&
                        getTimestamp(calendarDay.value) < getTimestamp(rangeModelValue.value[1])
                    );
                }
                if (rangeModelValue.value && rangeModelValue.value[0] && hoveredDate.value) {
                    return (
                        (getTimestamp(calendarDay.value) > getTimestamp(rangeModelValue.value[0]) &&
                            getTimestamp(calendarDay.value) < getTimestamp(hoveredDate.value)) ||
                        (getTimestamp(calendarDay.value) < getTimestamp(rangeModelValue.value[0]) &&
                            getTimestamp(calendarDay.value) > getTimestamp(hoveredDate.value))
                    );
                }
                return false;
            };

            /**
             * Staring position of the calendar when opened
             */
            const setStartDate = (date: Date): void => {
                month.value = date.getMonth();
                year.value = date.getFullYear();
                day.value = date.getDate();
            };

            /**
             * Called when the date in the calendar is clicked, on single just emit date,
             * on range pick, do a calculation for start and end dates and emit.
             * Time values are set here also, if they are added before the date selection
             */
            const selectDate = (day: UnwrapRef<ICalendarDay>): void => {
                if (isDisabled(day.value)) {
                    return;
                }
                if (!props.range) {
                    day.value.setHours(hoursSingle.value);
                    day.value.setMinutes(minutesSingle.value);
                    emit('update:singleModelValue', day.value);
                    if (props.autoApply) {
                        emit('autoApply');
                    }
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
                    if (rangeDate[0]) {
                        rangeDate[0].setHours(hoursRange.value[0], minutesRange.value[0]);
                    }
                    if (rangeDate[1]) {
                        rangeDate[1].setHours(hoursRange.value[1], minutesRange.value[1]);
                    }
                    emit('update:rangeModelValue', rangeDate);
                    if (rangeDate[0] && rangeDate[1] && props.autoApply) {
                        emit('autoApply');
                    }
                }
            };

            /**
             * Get week number if enabled
             */
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

            /**
             * When using range picker keep track of hovered value in the calendar
             */
            const setHoverDate = (day: UnwrapRef<ICalendarDay>): void => {
                hoveredDate.value = day.value;
            };

            /**
             * Set hours and minutes on a single date when they are updated in time picker
             */
            const updateSingleDateTime = (): void => {
                if (!props.timePicker) {
                    const newDate = new Date(JSON.parse(JSON.stringify(props.singleModelValue)));
                    newDate.setHours(hoursSingle.value, minutesSingle.value);
                    emit('update:singleModelValue', newDate);
                    if (props.autoApply) {
                        emit('autoApply', true);
                    }
                } else {
                    const time: IModelValueTimePicker = { hours: hoursSingle.value, minutes: minutesSingle.value };
                    emit('update:timePickerValue', time);
                    if (props.autoApply) {
                        emit('autoApply', true);
                    }
                }
            };

            /**
             * Hard copy range model values and return them as date objects
             * For comparing data, set hours and minutes to 0
             */
            const getRangeCopy = (): [Date, Date] => {
                const copyDates = JSON.parse(JSON.stringify(rangeModelValue.value));
                const newDate1 = new Date(copyDates[0]);
                const newDate2 = new Date(copyDates[1]);
                return [newDate1, newDate2];
            };

            /**
             * Set hours and minutes on range date values, when they are updated in time picker
             */
            const updateRangeDateTimes = (): void => {
                if (!props.timePicker) {
                    const [newDate1, newDate2] = getRangeCopy();
                    newDate1.setHours(hoursRange.value[0], minutesRange.value[0]);
                    newDate2.setHours(hoursRange.value[1], minutesRange.value[1]);
                    emit('update:rangeModelValue', [newDate1, newDate2]);
                    if (props.autoApply) {
                        emit('autoApply', true);
                    }
                } else {
                    const time: IModelValueTimePicker[] = [
                        { hours: hoursRange.value[0], minutes: minutesRange.value[0] },
                        { hours: hoursRange.value[1], minutes: minutesRange.value[1] },
                    ];
                    emit('update:timePickerValue', time);
                    if (props.autoApply) {
                        emit('autoApply', true);
                    }
                }
            };

            const updateMonth = (monthValue: number): void => {
                month.value = monthValue;
                if (props.monthPicker) {
                    updateMonthPicker();
                }
            };

            const updateYear = (yearValue: number): void => {
                year.value = yearValue;
                if (props.monthPicker) {
                    updateMonthPicker(true);
                }
            };

            return {
                mappedDates,
                years,
                calendarClass,
                weekDays,
                dates,
                month,
                year,
                day,
                hoursSingle,
                minutesSingle,
                hoursRange,
                minutesRange,
                specificMode,
                contentWrapClass,
                selectDate,
                getWeekDay,
                setHoverDate,
                updateMonth,
                updateYear,
            };
        },
    });
</script>
