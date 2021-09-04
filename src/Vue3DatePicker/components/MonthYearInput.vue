<template>
    <div class="dp__month_year_row">
        <template v-if="!monthPicker">
            <div class="dp__month_year_col_nav" @click="onPrev">
                <ChevronLeftIcon />
            </div>
            <div class="dp__month_year_select" @click="toggleMonthPicker">{{ getMonthDisplayVal }}</div>
            <div class="dp__month_year_select" @click="toggleYearPicker">{{ year }}</div>
            <SelectionGrid
                v-if="showMonthPicker"
                :model-value="month"
                :items="groupedMonths"
                :disabled-values="filters.months"
                @update:modelValue="onMonthUpdate"
                @toggle="toggleMonthPicker"
                ><template #button-icon><CalendarIcon /></template
            ></SelectionGrid>
            <SelectionGrid
                v-if="showYearPicker"
                :model-value="year"
                :items="groupedYears"
                :disabled-values="filters.years"
                @update:modelValue="onYearUpdate"
                @toggle="toggleYearPicker"
                ><template #button-icon><CalendarIcon /></template
            ></SelectionGrid>
            <div class="dp__month_year_col_nav" @click="onNext">
                <ChevronRightIcon />
            </div>
        </template>
        <template v-if="monthPicker">
            <SelectionGrid
                :model-value="month"
                :items="groupedMonths"
                :disabled-values="filters.months"
                @update:modelValue="onMonthUpdate"
                @toggle="toggleMonthPicker"
            >
                <template #header>
                    <div class="dp__month_picker_header">
                        <div class="dp__month_year_col_nav" @click="handleYear">
                            <ChevronLeftIcon />
                        </div>
                        <div @click="toggleYearPicker" class="dp__pointer">{{ year }}</div>
                        <div class="dp__month_year_col_nav" @click="handleYear(true)">
                            <ChevronRightIcon />
                        </div>
                    </div>
                    <SelectionGrid
                        v-if="showYearPicker"
                        uid="-inner"
                        id="dp__overlay_inner"
                        :model-value="year"
                        :items="groupedYears"
                        :disabled-values="filters.years"
                        @update:modelValue="onYearUpdate"
                        @toggle="toggleYearPicker"
                        ><template #button-icon><CalendarIcon /></template
                    ></SelectionGrid>
                </template>
            </SelectionGrid>
        </template>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType, ref } from 'vue';
    import { IDateFilter, IMonth, IYear, MonthYearPickerProps } from '../interfaces';
    import { useKey, useMontYearPick } from '../utils/hooks';
    import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon } from './Icons';
    import SelectionGrid from './SelectionGrid.vue';

    export default defineComponent({
        name: 'MonthYearPicker',
        emits: ['update:month', 'update:year'],
        components: {
            CalendarIcon,
            ChevronLeftIcon,
            ChevronRightIcon,
            SelectionGrid,
        },
        props: {
            months: { type: Array as PropType<IMonth[]>, default: () => [] },
            years: { type: Array as PropType<IYear[]>, default: () => [] },
            year: { type: Number as PropType<number>, default: 0 },
            month: { type: Number as PropType<number>, default: 0 },
            filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
            monthPicker: { type: Boolean as PropType<boolean>, default: false },
        },
        setup(props: MonthYearPickerProps, { emit }) {
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

            const getGroupedList = (items: IMonth[] | IYear[]): IMonth[][] | IYear[][] => {
                const list = [];

                for (let i = 0; i < items.length; i += 3) {
                    list.push([items[i], items[i + 1], items[i + 2]]);
                }
                return list;
            };

            const getMonthDisplayVal = computed((): string => {
                const month = props.months.find((month) => month.value === props.month);
                if (month) return month.text;
                return '';
            });

            const groupedMonths = computed((): IMonth[][] => {
                return getGroupedList(props.months);
            });

            const groupedYears = computed((): IYear[][] => {
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

            return {
                toggleYearPicker,
                onNext,
                onPrev,
                onYearUpdate,
                getMonthDisplayVal,
                showMonthPicker,
                showYearPicker,
                groupedMonths,
                toggleMonthPicker,
                onMonthUpdate,
                handleYear,
                groupedYears,
                useKey,
            };
        },
    });
</script>
