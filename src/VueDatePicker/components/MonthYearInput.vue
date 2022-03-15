<template>
    <div class="dp__month_year_row">
        <template v-if="!monthPicker">
            <div
                class="dp__month_year_col_nav"
                @click="handleMonthYearChange(false)"
                @keydown.enter="handleMonthYearChange(false)"
                v-if="showLeftIcon"
                tabindex="0"
            >
                <div class="dp__inner_nav" role="button" aria-label="Previous month">
                    <slot name="arrow-left" v-if="$slots['arrow-left']" />
                    <ChevronLeftIcon v-if="!$slots['arrow-left']" />
                </div>
            </div>
            <div
                class="dp__month_year_select"
                @click="toggleMonthPicker"
                @keydown.enter="toggleMonthPicker"
                role="button"
                aria-label="Open months overlay"
                tabindex="0"
            >
                <slot
                    v-if="$slots.month"
                    name="month"
                    :value="getMonthDisplayVal.value"
                    :text="getMonthDisplayVal.text"
                />
                <template v-if="!$slots.month">{{ getMonthDisplayVal.text }}</template>
            </div>
            <div
                class="dp__month_year_select"
                @click="toggleYearPicker"
                @keydown.enter="toggleYearPicker"
                role="button"
                aria-label="Open years overlay"
                tabindex="0"
            >
                <slot v-if="$slots.year" name="year" :year="year" />
                <template v-if="!$slots.year">{{ year }}</template>
            </div>
            <transition :name="transitionName(showMonthPicker)" :css="showTransition">
                <SelectionGrid
                    v-if="showMonthPicker"
                    v-bind="{
                        modelValue: month,
                        items: groupedMonths,
                        disabledValues: filters.months,
                        minValue: minMonth,
                        maxValue: maxMonth,
                    }"
                    @update:model-value="onMonthUpdate"
                    @toggle="toggleMonthPicker"
                >
                    <template #button-icon>
                        <slot name="calendar-icon" v-if="$slots['calendar-icon']" />
                        <CalendarIcon v-if="!$slots['calendar-icon']" />
                    </template>
                    <template v-if="$slots['month-overlay']" #item="{ item }">
                        <slot name="month-overlay" :text="item.text" :value="item.value" />
                    </template>
                </SelectionGrid>
            </transition>
            <transition :name="transitionName(showYearPicker)" :css="showTransition">
                <SelectionGrid
                    v-if="showYearPicker"
                    v-bind="{
                        modelValue: year,
                        items: groupedYears,
                        disabledValues: filters.years,
                        minValue: minYear,
                        maxValue: maxYear,
                    }"
                    @update:model-value="onYearUpdate"
                    @toggle="toggleYearPicker"
                    ><template #button-icon>
                        <slot name="calendar-icon" v-if="$slots['calendar-icon']" />
                        <CalendarIcon v-if="!$slots['calendar-icon']" />
                    </template>
                    <template v-if="$slots['year-overlay']" #item="{ item }">
                        <slot name="year-overlay" :text="item.text" :value="item.value" />
                    </template>
                </SelectionGrid>
            </transition>
            <div
                class="dp__month_year_col_nav"
                @click="handleMonthYearChange(true)"
                v-if="showRightIcon"
                @keydown.enter="handleMonthYearChange(true)"
                tabindex="0"
            >
                <div class="dp__inner_nav" role="button" aria-label="Next month">
                    <slot name="arrow-right" v-if="$slots['arrow-right']" />
                    <ChevronRightIcon v-if="!$slots['arrow-right']" />
                </div>
            </div>
        </template>
        <template v-if="monthPicker">
            <SelectionGrid
                v-bind="{
                    modelValue: month,
                    items: groupedMonths,
                    disabledValues: filters.months,
                    minValue: minMonth,
                    maxValue: maxMonth,
                    multiModelValue,
                    year,
                    skipActive: props.range,
                }"
                @update:model-value="onMonthUpdate"
                @toggle="toggleMonthPicker"
            >
                <template v-if="$slots['month-overlay']" #item="{ item }">
                    <slot name="month-overlay" :text="item.text" :value="item.value" />
                </template>
                <template #header>
                    <div class="dp__month_picker_header">
                        <div
                            class="dp__month_year_col_nav"
                            tabindex="0"
                            @click="handleYear(false)"
                            @keydown.enter="handleYear(false)"
                        >
                            <div class="dp__inner_nav" role="button" aria-label="Previous month">
                                <slot name="arrow-left" v-if="$slots['arrow-left']" />
                                <ChevronLeftIcon v-if="!$slots['arrow-left']" />
                            </div>
                        </div>
                        <div
                            class="dp__pointer"
                            role="button"
                            aria-label="Open years overlay"
                            tabindex="0"
                            @click="toggleYearPicker"
                            @keydown.enter="toggleYearPicker"
                        >
                            <slot v-if="$slots.year" name="year" :year="year" />
                            <template v-if="!$slots.year">{{ year }}</template>
                        </div>
                        <div
                            class="dp__month_year_col_nav"
                            tabindex="0"
                            @click="handleYear(true)"
                            @keydown.enter="handleYear(true)"
                        >
                            <div class="dp__inner_nav" role="button" aria-label="Next month">
                                <slot name="arrow-right" v-if="$slots['arrow-right']" />
                                <ChevronRightIcon v-if="!$slots['arrow-right']" />
                            </div>
                        </div>
                    </div>
                    <transition :name="transitionName(showYearPicker)" :css="showTransition">
                        <SelectionGrid
                            v-if="showYearPicker"
                            v-bind="{
                                modelValue: year,
                                items: groupedYears,
                                disabledValues: filters.years,
                                minValue: minYear,
                                maxValue: maxYear,
                            }"
                            @update:model-value="onYearUpdate"
                            @toggle="toggleYearPicker"
                            ><template #button-icon>
                                <slot name="calendar-icon" v-if="$slots['calendar-icon']" />
                                <CalendarIcon v-if="!$slots['calendar-icon']" />
                            </template>
                            <template v-if="$slots['year-overlay']" #item="{ item }">
                                <slot name="year-overlay" :text="item.text" :value="item.value" />
                            </template>
                        </SelectionGrid>
                    </transition>
                </template>
            </SelectionGrid>
        </template>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, ref } from 'vue';
    import type { PropType } from 'vue';
    import { getMonth, getYear } from 'date-fns';

    import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon } from './Icons';
    import SelectionGrid from './SelectionGrid.vue';

    import type { IDefaultSelect } from '../interfaces';
    import { useMontYearPick } from './composition/month-year';
    import { useTransitions } from './composition/transition';
    import { MonthCalendarSharedProps } from '../utils/props';

    const emit = defineEmits(['update:month', 'update:year', 'monthYearSelect', 'mount', 'reset-flow']);
    const props = defineProps({
        ...MonthCalendarSharedProps,
        minDate: { type: [Date, String] as PropType<Date | string>, default: null },
        maxDate: { type: [Date, String] as PropType<Date | string>, default: null },
        preventMinMaxNavigation: { type: Boolean as PropType<boolean>, default: false },
        reverseYears: { type: Boolean as PropType<boolean>, default: false },
    });

    const { transitionName, showTransition } = useTransitions();

    const showMonthPicker = ref(false);
    const showYearPicker = ref(false);
    const { handleMonthYearChange } = useMontYearPick(props, emit);

    onMounted(() => {
        emit('mount');
    });

    const onMonthUpdate = (month: number): void => {
        emit('update:month', month);
        emit('monthYearSelect');
        toggleMonthPicker(true);
    };

    const onYearUpdate = (year: number): void => {
        emit('update:year', year);
        emit('monthYearSelect', true);
        toggleYearPicker(true);
    };

    const minYear = computed(() => (props.minDate ? getYear(new Date(props.minDate)) : null));
    const maxYear = computed(() => (props.maxDate ? getYear(new Date(props.maxDate)) : null));

    const minMonth = computed(() => {
        if (props.minDate && minYear.value) {
            if (minYear.value > props.year) return 12;
            if (minYear.value === props.year) return getMonth(new Date(props.minDate));
        }
        return null;
    });

    const maxMonth = computed(() => {
        if (props.maxDate && maxYear.value) {
            if (maxYear.value < props.year) return -1;
            if (maxYear.value === props.year) return getMonth(new Date(props.maxDate));
        }
        return null;
    });

    const multiModelValue = computed(() => {
        return props.range && props.internalModelValue && props.monthPicker ? (props.internalModelValue as Date[]) : [];
    });

    const getGroupedList = (items: IDefaultSelect[], reverse = false): IDefaultSelect[][] => {
        const list = [];

        for (let i = 0; i < items.length; i += 3) {
            const listItems = [items[i], items[i + 1], items[i + 2]];
            list.push(reverse ? listItems.reverse() : listItems);
        }
        return reverse ? list.reverse() : list;
    };

    const getMonthDisplayVal = computed((): IDefaultSelect => {
        const month = props.months.find((month) => month.value === props.month);
        if (month) return month;
        return { text: '', value: 0 };
    });

    const groupedMonths = computed((): IDefaultSelect[][] => {
        return getGroupedList(props.months);
    });

    const groupedYears = computed((): IDefaultSelect[][] => {
        return getGroupedList(props.years, props.reverseYears);
    });

    const showLeftIcon = computed(() => {
        if (props.multiCalendars) {
            return !props.multiCalendarsSolo ? props.instance === 0 : true;
        }
        return true;
    });

    const showRightIcon = computed((): boolean => {
        if (props.multiCalendars) {
            return !props.multiCalendarsSolo ? props.instance === props.multiCalendars - 1 : true;
        }
        return true;
    });

    const toggleMonthPicker = (flow = false): void => {
        checkFlow(flow);
        showMonthPicker.value = !showMonthPicker.value;
    };

    const toggleYearPicker = (flow = false): void => {
        checkFlow(flow);
        showYearPicker.value = !showYearPicker.value;
    };

    const checkFlow = (flow: boolean): void => {
        if (!flow) {
            emit('reset-flow');
        }
    };

    const handleYear = (increment = false): void => {
        emit('update:year', increment ? props.year + 1 : props.year - 1);
    };

    defineExpose({
        toggleMonthPicker,
        toggleYearPicker,
    });
</script>
