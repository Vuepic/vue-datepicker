<template>
    <div class="dp__month_year_row">
        <template v-if="!monthPicker && !yearPicker">
            <ActionIcon
                :aria-label="ariaLabels.prevMonth"
                :disabled="isDisabled(false)"
                @activate="handleMonthYearChange(false)"
                v-if="showLeftIcon && !vertical"
                @set-ref="setElRefs($event, 0)"
            >
                <slot name="arrow-left" v-if="$slots['arrow-left']" />
                <ChevronLeftIcon v-if="!$slots['arrow-left']" />
            </ActionIcon>
            <RegularPicker
                :aria-label="ariaLabels.openMonthsOverlay"
                slot-name="month-overlay"
                v-model="monthModelBind"
                v-bind="childProps('month')"
                @toggle="toggleMonthPicker"
                @set-ref="setElRefs($event, 1)"
                type="month"
            >
                <slot v-if="$slots.month" name="month" v-bind="getMonthDisplayVal" />
                <template v-if="!$slots.month">{{ getMonthDisplayVal.text }}</template>
                <template #calendar-icon v-if="$slots['calendar-icon']">
                    <slot name="calendar-icon" />
                </template>
                <template v-if="$slots['month-overlay']" #month-overlay="{ item }">
                    <slot name="month-overlay" :text="item.text" :value="item.value" />
                </template>
            </RegularPicker>
            <RegularPicker
                :aria-label="ariaLabels.openYearsOverlay"
                slot-name="year-overlay"
                v-model="yearModelBind"
                v-bind="childProps('year')"
                @toggle="toggleYearPicker"
                @set-ref="setElRefs($event, 2)"
                type="year"
            >
                <slot v-if="$slots.year" name="year" :year="year" />
                <template v-if="!$slots.year">{{ year }}</template>
                <template #calendar-icon v-if="$slots['calendar-icon']">
                    <slot name="calendar-icon" />
                </template>
                <template v-if="$slots['year-overlay']" #year-overlay="{ item }">
                    <slot name="year-overlay" :text="item.text" :value="item.value" />
                </template>
            </RegularPicker>
            <ActionIcon
                :aria-label="ariaLabels.prevMonth"
                :disabled="isDisabled(false)"
                @activate="handleMonthYearChange(false)"
                v-if="showLeftIcon && vertical"
            >
                <slot name="arrow-up" v-if="$slots['arrow-up']" />
                <ChevronUpIcon v-if="!$slots['arrow-up']" />
            </ActionIcon>
            <ActionIcon
                :disabled="isDisabled(true)"
                :aria-label="ariaLabels.nextMonth"
                @activate="handleMonthYearChange(true)"
                ref="rightIcon"
                v-if="showRightIcon"
                @set-ref="setElRefs($event, 3)"
            >
                <slot
                    :name="vertical ? 'arrow-down' : 'arrow-right'"
                    v-if="$slots[vertical ? 'arrow-down' : 'arrow-right']"
                />
                <component
                    :is="vertical ? ChevronDownIcon : ChevronRightIcon"
                    v-if="!$slots[vertical ? 'arrow-down' : 'arrow-right']"
                />
            </ActionIcon>
        </template>
        <template v-if="monthPicker">
            <SelectionGrid
                v-bind="childProps('month')"
                :skip-active="props.range"
                :year="year"
                :multi-model-value="multiModelValue"
                month-picker
                v-model="monthModelBind"
                @toggle="toggleMonthPicker"
                @selected="$emit('overlay-closed')"
            >
                <template v-if="$slots['month-overlay']" #item="{ item }">
                    <slot name="month-overlay" :text="item.text" :value="item.value" />
                </template>
                <template #header>
                    <div class="dp__month_picker_header">
                        <div
                            class="dp__month_year_col_nav"
                            tabindex="0"
                            ref="mpPrevIconRef"
                            @click="handleYear(false)"
                            @keydown.enter="handleYear(false)"
                        >
                            <div class="dp__inner_nav" role="button" :aria-label="ariaLabels.prevMonth">
                                <slot name="arrow-left" v-if="$slots['arrow-left']" />
                                <ChevronLeftIcon v-if="!$slots['arrow-left']" />
                            </div>
                        </div>
                        <div
                            class="dp__pointer"
                            role="button"
                            ref="mpYearButtonRef"
                            :aria-label="ariaLabels.openYearsOverlay"
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
                            ref="mpNextIconRef"
                            @click="handleYear(true)"
                            @keydown.enter="handleYear(true)"
                        >
                            <div class="dp__inner_nav" role="button" :aria-label="ariaLabels.nextMonth">
                                <slot name="arrow-right" v-if="$slots['arrow-right']" />
                                <ChevronRightIcon v-if="!$slots['arrow-right']" />
                            </div>
                        </div>
                    </div>
                    <transition :name="transitionName(showYearPicker)" :css="showTransition">
                        <SelectionGrid
                            v-if="showYearPicker"
                            v-bind="childProps('year')"
                            v-model="yearModelBind"
                            @toggle="toggleYearPicker"
                            @selected="$emit('overlay-closed')"
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
        <template v-if="yearPicker">
            <SelectionGrid
                v-bind="childProps('year')"
                v-model="yearModelBind"
                :multi-model-value="multiModelValue"
                :skip-active="props.range"
                skip-button-ref
                year-picker
                @toggle="toggleYearPicker"
                @selected="$emit('overlay-closed')"
            >
                <template v-if="$slots['year-overlay']" #item="{ item }">
                    <slot name="year-overlay" :text="item.text" :value="item.value" />
                </template>
            </SelectionGrid>
        </template>
    </div>
</template>

<script lang="ts" setup>
    import { computed, inject, onMounted, ref } from 'vue';
    import type { PropType, ComputedRef, Ref } from 'vue';
    import { getMonth, getYear } from 'date-fns';

    import {
        ChevronLeftIcon,
        ChevronRightIcon,
        CalendarIcon,
        ChevronDownIcon,
        ChevronUpIcon,
    } from '@/components/Icons';
    import ActionIcon from '@/components/MonthYearPicker/ActionIcon.vue';
    import RegularPicker from '@/components/MonthYearPicker/RegularPicker.vue';
    import SelectionGrid from '@/components/SelectionGrid.vue';
    import { useMontYearPick } from '@/components/composition/month-year';
    import { useTransitions } from '@/components/composition/transition';

    import type { IDefaultSelect, IDateFilter, AreaLabels } from '@/interfaces';

    import { ariaLabelsKey, arrowNavigationKey, DateValidationProps, MonthCalendarSharedProps } from '@/utils/props';
    import { unrefElement } from '@/utils/util';
    import { useArrowNavigation } from '@/components/composition/arrow-navigate';

    const emit = defineEmits(['update-month-year', 'monthYearSelect', 'mount', 'reset-flow', 'overlay-closed']);
    const props = defineProps({
        ...MonthCalendarSharedProps,
        ...DateValidationProps,
        preventMinMaxNavigation: { type: Boolean as PropType<boolean>, default: false },
        reverseYears: { type: Boolean as PropType<boolean>, default: false },
        years: { type: Array as PropType<IDefaultSelect[]>, default: () => [] },
        months: { type: Array as PropType<IDefaultSelect[]>, default: () => [] },
        filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
        multiCalendarsSolo: { type: Boolean as PropType<boolean>, default: false },
        yearPicker: { type: Boolean as PropType<boolean>, default: false },
        escClose: { type: Boolean as PropType<boolean>, default: true },
    });

    const { transitionName, showTransition } = useTransitions();
    const { buildMatrix } = useArrowNavigation();

    const showMonthPicker = ref(false);
    const showYearPicker = ref(false);
    const elementRefs = ref<Array<HTMLElement | null>>([null, null, null, null]);
    const mpPrevIconRef = ref<HTMLElement | null>(null);
    const mpYearButtonRef = ref<HTMLElement | null>(null);
    const mpNextIconRef = ref<HTMLElement | null>(null);
    const ariaLabels = inject<ComputedRef<AreaLabels>>(ariaLabelsKey);
    const arrowNavigation = inject<Ref<boolean>>(arrowNavigationKey);

    const { handleMonthYearChange, isDisabled } = useMontYearPick(props, emit);

    onMounted(() => {
        emit('mount');
    });

    const bindOptions = (type: 'month' | 'year') => ({
        get: () => props[type],
        set: (value: number) => {
            const otherType = type === 'month' ? 'year' : 'month';
            emit('update-month-year', { [type]: value, [otherType]: props[otherType] });
            emit('monthYearSelect', type === 'year');
            if (type === 'month') {
                toggleMonthPicker(true);
            } else {
                toggleYearPicker(true);
            }
        },
    });

    const monthModelBind = computed(bindOptions('month'));
    const yearModelBind = computed(bindOptions('year'));

    const childProps = computed(() => (type: 'month' | 'year') => {
        const isMonth = type === 'month';
        return {
            showSelectionGrid: (isMonth ? showMonthPicker : showYearPicker).value,
            items: (isMonth ? groupedMonths : groupedYears).value,
            disabledValues: props.filters[isMonth ? 'months' : 'years'],
            minValue: (isMonth ? minMonth : minYear).value,
            maxValue: (isMonth ? maxMonth : maxYear).value,
            headerRefs:
                isMonth && props.monthPicker ? [mpPrevIconRef.value, mpYearButtonRef.value, mpNextIconRef.value] : [],
            escClose: props.escClose,
        };
    });

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
            return null;
        }
        return null;
    });

    const multiModelValue = computed(() => {
        return props.range && props.internalModelValue && (props.monthPicker || props.yearPicker)
            ? (props.internalModelValue as Date[])
            : [];
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
        if (!showMonthPicker.value) {
            emit('overlay-closed');
        }
    };

    const toggleYearPicker = (flow = false): void => {
        checkFlow(flow);
        showYearPicker.value = !showYearPicker.value;
        if (!showYearPicker.value) {
            emit('overlay-closed');
        }
    };

    const checkFlow = (flow: boolean): void => {
        if (!flow) {
            emit('reset-flow');
        }
    };

    const handleYear = (increment = false): void => {
        emit('update-month-year', {
            year: increment ? props.year + 1 : props.year - 1,
            month: props.month,
            fromNav: true,
        });
    };

    const setElRefs = (el: HTMLElement, i: number): void => {
        if (arrowNavigation?.value) {
            elementRefs.value[i] = unrefElement(el);
            buildMatrix(elementRefs.value as HTMLElement[], 'monthYear');
        }
    };

    defineExpose({
        toggleMonthPicker,
        toggleYearPicker,
    });
</script>
