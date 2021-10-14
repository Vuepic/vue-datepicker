<template>
    <div class="dp__month_year_row">
        <template v-if="!monthPicker">
            <div class="dp__month_year_col_nav" @click="onPrev">
                <div class="dp__inner_nav">
                    <slot name="arrow-left" v-if="$slots['arrow-left']" />
                    <ChevronLeftIcon v-if="!$slots['arrow-left']" />
                </div>
            </div>
            <div class="dp__month_year_select" @click="toggleMonthPicker">
                <slot
                    v-if="$slots.month"
                    name="month"
                    :value="getMonthDisplayVal.value"
                    :text="getMonthDisplayVal.text"
                />
                <template v-if="!$slots.month">{{ getMonthDisplayVal.text }}</template>
            </div>
            <div class="dp__month_year_select" @click="toggleYearPicker">
                <slot v-if="$slots.year" name="year" :year="year" />
                <template v-if="!$slots.year">{{ year }}</template>
            </div>
            <SelectionGrid
                v-if="showMonthPicker"
                v-bind="{ modelValue: month, items: groupedMonths, disabledValues: filters.months, uid: instance }"
                @update:modelValue="onMonthUpdate"
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
            <SelectionGrid
                v-if="showYearPicker"
                v-bind="{ modelValue: year, items: groupedYears, disabledValues: filters.years, uid: instance }"
                @update:modelValue="onYearUpdate"
                @toggle="toggleYearPicker"
                ><template #button-icon>
                    <slot name="calendar-icon" v-if="$slots['calendar-icon']" />
                    <CalendarIcon v-if="!$slots['calendar-icon']" />
                </template>
                <template v-if="$slots['year-overlay']" #item="{ item }">
                    <slot name="year-overlay" :text="item.text" :value="item.value" />
                </template>
            </SelectionGrid>
            <div class="dp__month_year_col_nav" @click="onNext">
                <div class="dp__inner_nav">
                    <slot name="arrow-right" v-if="$slots['arrow-right']" />
                    <ChevronRightIcon v-if="!$slots['arrow-right']" />
                </div>
            </div>
        </template>
        <template v-if="monthPicker">
            <SelectionGrid
                v-bind="{ modelValue: month, items: groupedMonths, disabledValues: filters.months }"
                @update:modelValue="onMonthUpdate"
                @toggle="toggleMonthPicker"
            >
                <template v-if="$slots['month-overlay']" #item="{ item }">
                    <slot name="month-overlay" :text="item.text" :value="item.value" />
                </template>
                <template #header>
                    <div class="dp__month_picker_header">
                        <div class="dp__month_year_col_nav" @click="handleYear(false)">
                            <slot name="arrow-left" v-if="$slots['arrow-left']" />
                            <ChevronLeftIcon v-if="!$slots['arrow-left']" />
                        </div>
                        <div @click="toggleYearPicker" class="dp__pointer">
                            <slot v-if="$slots.year" name="year" :year="year" />
                            <template v-if="!$slots.year">{{ year }}</template>
                        </div>
                        <div class="dp__month_year_col_nav" @click="handleYear(true)">
                            <slot name="arrow-right" v-if="$slots['arrow-right']" />
                            <ChevronRightIcon v-if="!$slots['arrow-right']" />
                        </div>
                    </div>
                    <SelectionGrid
                        v-if="showYearPicker"
                        v-bind="{
                            modelValue: year,
                            items: groupedYears,
                            disabledValues: filters.years,
                            gridId: 'dp__overlay_inner',
                            uid: 'inner',
                        }"
                        @update:modelValue="onYearUpdate"
                        @toggle="toggleYearPicker"
                        ><template #button-icon>
                            <slot name="calendar-icon" v-if="$slots['calendar-icon']" />
                            <CalendarIcon v-if="!$slots['calendar-icon']" />
                        </template>
                        <template v-if="$slots['year-overlay']" #item="{ item }">
                            <slot name="year-overlay" :text="item.text" :value="item.value" />
                        </template>
                    </SelectionGrid>
                </template>
            </SelectionGrid>
        </template>
    </div>
</template>

<script lang="ts" setup>
    import { computed, PropType, ref } from 'vue';

    import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon } from './Icons';
    import SelectionGrid from './SelectionGrid.vue';

    import { IDateFilter, IDefaultSelect } from '../interfaces';
    import { useMontYearPick } from './composition/month-year';

    const emit = defineEmits(['update:month', 'update:year']);
    const props = defineProps({
        months: { type: Array as PropType<IDefaultSelect[]>, default: () => [] },
        years: { type: Array as PropType<IDefaultSelect[]>, default: () => [] },
        year: { type: Number as PropType<number>, default: 0 },
        month: { type: Number as PropType<number>, default: 0 },
        filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
        monthPicker: { type: Boolean as PropType<boolean>, default: false },
        instance: { type: Number as PropType<number>, default: 1 },
    });

    const showMonthPicker = ref(false);
    const showYearPicker = ref(false);
    const { onNext, onPrev } = useMontYearPick(props, emit);

    const onMonthUpdate = (month: number): void => {
        emit('update:month', month);
        toggleMonthPicker();
    };

    const onYearUpdate = (year: number): void => {
        emit('update:year', year);
        toggleYearPicker();
    };

    const getGroupedList = (items: IDefaultSelect[]): IDefaultSelect[][] => {
        const list = [];

        for (let i = 0; i < items.length; i += 3) {
            list.push([items[i], items[i + 1], items[i + 2]]);
        }
        return list;
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
        return getGroupedList(props.years);
    });

    const toggleMonthPicker = (): void => {
        showMonthPicker.value = !showMonthPicker.value;
    };

    const toggleYearPicker = (): void => {
        showYearPicker.value = !showYearPicker.value;
    };

    const handleYear = (increment = false): void => {
        if (increment) {
            const yr = props.year + 1;
            emit('update:year', yr);
        } else {
            const yr = props.year - 1;
            emit('update:year', yr);
        }
    };
</script>
