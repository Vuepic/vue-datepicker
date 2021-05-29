<template>
    <div class="dp__month_year_row">
        <div class="dp__month_year_col_nav" @click="onPrev">
            <ChevronLeftIcon />
        </div>
        <div class="dp__month_year_select" @click="toggleMonthPicker">{{ getMonthDisplayVal }}</div>
        <div class="dp__month_year_select" @click="toggleYearPicker">{{ year }}</div>
        <SelectionGrid
            v-if="showMonthPicker"
            :model-value="month"
            :items="groupedMonths"
            @update:modelValue="onMonthUpdate"
            @toggle="toggleMonthPicker"
            ><template #button-icon><CalendarIcon /></template
        ></SelectionGrid>
        <SelectionGrid
            v-if="showYearPicker"
            :model-value="year"
            :items="groupedYears"
            @update:modelValue="onYearUpdate"
            @toggle="toggleYearPicker"
            ><template #button-icon><CalendarIcon /></template
        ></SelectionGrid>
        <div class="dp__month_year_col_nav" @click="onNext">
            <ChevronRightIcon />
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType, ref } from 'vue';
    import { IMonth, IYear, MonthYearPickerProps } from '../interfaces';
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
                groupedYears,
                useKey,
            };
        },
    });
</script>
