<template>
    <div class="dp__month_year_row">
        <template v-if="$slots['month-year']">
            <slot
                name="month-year"
                v-bind="{ month, year, months, years, updateMonthYear, handleMonthYearChange, instance }"
            />
        </template>
        <template v-else>
            <template v-if="!monthPicker && !yearPicker">
                <ActionIcon
                    v-if="showLeftIcon && !vertical"
                    :aria-label="defaults.ariaLabels?.prevMonth"
                    :disabled="isDisabled(false)"
                    @activate="handleMonthYearChange(false)"
                    @set-ref="setElRefs($event, 0)"
                >
                    <slot name="arrow-left" v-if="$slots['arrow-left']" />
                    <ChevronLeftIcon v-if="!$slots['arrow-left']" />
                </ActionIcon>
                <div class="dp__month_year_wrap">
                    <RegularPicker
                        type="month"
                        slot-name="month-overlay-val"
                        overlay-slot="overlay-month"
                        :aria-label="defaults.ariaLabels?.openMonthsOverlay"
                        v-model="monthModelBind"
                        v-bind="childProps('month')"
                        @toggle="toggleMonthPicker"
                        @set-ref="setElRefs($event, 1)"
                    >
                        <slot v-if="$slots.month" name="month" v-bind="getMonthDisplayVal" />
                        <template v-if="!$slots.month">{{ getMonthDisplayVal.text }}</template>
                        <template #calendar-icon v-if="$slots['calendar-icon']">
                            <slot name="calendar-icon" />
                        </template>
                        <template v-if="$slots['month-overlay-value']" #month-overlay-val="{ item }: any">
                            <slot name="month-overlay-value" :text="item.text" :value="item.value" />
                        </template>
                        <template v-if="$slots['month-overlay']" #overlay-month>
                            <slot name="month-overlay" v-bind="overlaySlotProps('month')" />
                        </template>
                        <template v-if="$slots['month-overlay-header']" #overlay-month-header>
                            <slot name="month-overlay-header" :toggle="toggleMonthPicker" />
                        </template>
                    </RegularPicker>
                    <RegularPicker
                        type="year"
                        slot-name="year-overlay-val"
                        overlay-slot="overlay-year"
                        :aria-label="defaults.ariaLabels?.openYearsOverlay"
                        v-model="yearModelBind"
                        v-bind="childProps('year')"
                        @toggle="toggleYearPicker"
                        @set-ref="setElRefs($event, 2)"
                    >
                        <slot v-if="$slots.year" name="year" :year="year" />
                        <template v-if="!$slots.year">{{ year }}</template>
                        <template #calendar-icon v-if="$slots['calendar-icon']">
                            <slot name="calendar-icon" />
                        </template>
                        <template v-if="$slots['year-overlay-value']" #year-overlay-val="{ item }: any">
                            <slot name="year-overlay-value" :text="item.text" :value="item.value" />
                        </template>
                        <template v-if="$slots['year-overlay']" #overlay-year>
                            <slot name="year-overlay" v-bind="overlaySlotProps('year')" />
                        </template>
                        <template v-if="$slots['year-overlay-header']" #overlay-year-header>
                            <slot name="year-overlay-header" :toggle="toggleYearPicker" />
                        </template>
                    </RegularPicker>
                </div>
                <ActionIcon
                    v-if="showLeftIcon && vertical"
                    :aria-label="defaults.ariaLabels?.prevMonth"
                    :disabled="isDisabled(false)"
                    @activate="handleMonthYearChange(false)"
                >
                    <slot name="arrow-up" v-if="$slots['arrow-up']" />
                    <ChevronUpIcon v-if="!$slots['arrow-up']" />
                </ActionIcon>
                <ActionIcon
                    v-if="showRightIcon"
                    ref="rightIcon"
                    :disabled="isDisabled(true)"
                    :aria-label="defaults.ariaLabels?.nextMonth"
                    @activate="handleMonthYearChange(true)"
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
                    :skip-active="range"
                    :year="year"
                    :multi-model-value="multiModelValue"
                    month-picker
                    v-model="monthModelBind"
                    @toggle="toggleMonthPicker"
                    @selected="$emit('overlay-closed')"
                >
                    <template v-if="$slots['month-overlay-value']" #item="{ item }">
                        <slot name="month-overlay-value" :text="item.text" :value="item.value" />
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
                                <div
                                    class="dp__inner_nav"
                                    :class="{ dp__inner_nav_disabled: isDisabled(false) }"
                                    role="button"
                                    :aria-label="defaults.ariaLabels?.prevMonth"
                                >
                                    <slot name="arrow-left" v-if="$slots['arrow-left']" />
                                    <ChevronLeftIcon v-if="!$slots['arrow-left']" />
                                </div>
                            </div>
                            <div
                                class="dp__pointer"
                                role="button"
                                ref="mpYearButtonRef"
                                :aria-label="defaults.ariaLabels?.openYearsOverlay"
                                tabindex="0"
                                @click="() => toggleYearPicker(false)"
                                @keydown.enter="() => toggleYearPicker(false)"
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
                                <div
                                    class="dp__inner_nav"
                                    :class="{ dp__inner_nav_disabled: isDisabled(true) }"
                                    role="button"
                                    :aria-label="defaults.ariaLabels?.nextMonth"
                                >
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
                                <template v-if="$slots['year-overlay-value']" #item="{ item }">
                                    <slot name="year-overlay-value" :text="item.text" :value="item.value" />
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
                    :skip-active="range"
                    skip-button-ref
                    year-picker
                    @toggle="toggleYearPicker"
                    @selected="$emit('overlay-closed')"
                >
                    <template v-if="$slots['year-overlay-value']" #item="{ item }">
                        <slot name="year-overlay-value" :text="item.text" :value="item.value" />
                    </template>
                </SelectionGrid>
            </template>
        </template>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, ref } from 'vue';
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

    import { useMontYearPick, useTransitions, useArrowNavigation, useUtils } from '@/components/composables';
    import { unrefElement } from '@/utils/util';
    import { AllProps } from '@/utils/props';

    import type { PropType } from 'vue';
    import type { IDefaultSelect, InternalModuleValue } from '@/interfaces';
    import { getDate } from '@/utils/date-utils';

    const emit = defineEmits(['update-month-year', 'month-year-select', 'mount', 'reset-flow', 'overlay-closed']);
    const props = defineProps({
        month: { type: Number as PropType<number>, default: 0 },
        year: { type: Number as PropType<number>, default: 0 },
        instance: { type: Number as PropType<number>, default: 0 },
        years: { type: Array as PropType<IDefaultSelect[]>, default: () => [] },
        months: { type: Array as PropType<IDefaultSelect[]>, default: () => [] },
        internalModelValue: { type: [Date, Array] as PropType<InternalModuleValue>, default: null },
        ...AllProps,
    });
    const { defaults } = useUtils(props);
    const { transitionName, showTransition } = useTransitions(defaults.value.transitions);
    const { buildMatrix } = useArrowNavigation();
    const { handleMonthYearChange, isDisabled, updateMonthYear } = useMontYearPick(props, emit);

    const showMonthPicker = ref(false);
    const showYearPicker = ref(false);
    const elementRefs = ref<Array<HTMLElement | null>>([null, null, null, null]);
    const mpPrevIconRef = ref<HTMLElement | null>(null);
    const mpYearButtonRef = ref<HTMLElement | null>(null);
    const mpNextIconRef = ref<HTMLElement | null>(null);

    onMounted(() => {
        emit('mount');
    });

    const bindOptions = (type: 'month' | 'year') => ({
        get: () => props[type],
        set: (value: number) => {
            const otherType = type === 'month' ? 'year' : 'month';
            emit('update-month-year', { [type]: value, [otherType]: props[otherType] });
            emit('month-year-select', type === 'year');
            if (type === 'month') {
                toggleMonthPicker(true);
            } else {
                toggleYearPicker(true);
            }
        },
    });

    const monthModelBind = computed(bindOptions('month'));
    const yearModelBind = computed(bindOptions('year'));

    const isMonthDisabled = (date: Date | string): boolean => {
        const year = getYear(getDate(date));
        return props.year === year;
    };

    const getDisabledMonths = computed(() => {
        if (props.monthPicker) {
            if (Array.isArray(props.disabledDates)) {
                return props.disabledDates
                    .map((date) => getDate(date))
                    .filter((date) => isMonthDisabled(date))
                    .map((date) => getMonth(date));
            }
            return [];
        }
        return [];
    });

    const childProps = computed(() => (type: 'month' | 'year') => {
        const isMonth = type === 'month';
        return {
            showSelectionGrid: (isMonth ? showMonthPicker : showYearPicker).value,
            items: (isMonth ? groupedMonths : groupedYears).value,
            disabledValues: defaults.value.filters[isMonth ? 'months' : 'years'].concat(getDisabledMonths.value),
            minValue: (isMonth ? minMonth : minYear).value,
            maxValue: (isMonth ? maxMonth : maxYear).value,
            headerRefs:
                isMonth && props.monthPicker ? [mpPrevIconRef.value, mpYearButtonRef.value, mpNextIconRef.value] : [],
            escClose: props.escClose,
            transitions: defaults.value.transitions,
            ariaLabels: defaults.value.ariaLabels,
            textInput: props.textInput,
            autoApply: props.autoApply,
            arrowNavigation: props.arrowNavigation,
            hideNavigation: props.hideNavigation,
        };
    });

    const overlaySlotProps = computed(() => (type: 'month' | 'year') => ({
        month: props.month,
        year: props.year,
        items: type === 'month' ? props.months : props.years,
        instance: props.instance,
        updateMonthYear,
        toggle: type === 'month' ? toggleMonthPicker : toggleYearPicker,
    }));

    const minYear = computed(() => (props.minDate ? getYear(getDate(props.minDate)) : null));
    const maxYear = computed(() => (props.maxDate ? getYear(getDate(props.maxDate)) : null));

    const minMonth = computed(() => {
        if (props.minDate && minYear.value) {
            if (minYear.value > props.year) return 12;
            if (minYear.value === props.year) return getMonth(getDate(props.minDate));
        }
        return null;
    });

    const maxMonth = computed(() => {
        if (props.maxDate && maxYear.value) {
            if (maxYear.value < props.year) return -1;
            if (maxYear.value === props.year) return getMonth(getDate(props.maxDate));
            return null;
        }
        return null;
    });

    const multiModelValue = computed(() => {
        return (props.range || props.multiDates) && props.internalModelValue && (props.monthPicker || props.yearPicker)
            ? (props.internalModelValue as Date[])
            : [];
    });

    const getGroupedList = (items: IDefaultSelect[]): IDefaultSelect[][] => {
        const list = [];
        const setList = (listItems: IDefaultSelect[]) => {
            return listItems;
        };
        for (let i = 0; i < items.length; i += 3) {
            const listItems = [items[i], items[i + 1], items[i + 2]];
            list.push(setList(listItems));
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

    const showLeftIcon = computed(() => {
        if (defaults.value.multiCalendars) {
            return !props.multiCalendarsSolo ? props.instance === 0 : true;
        }
        return true;
    });

    const showRightIcon = computed((): boolean => {
        if (defaults.value.multiCalendars) {
            return !props.multiCalendarsSolo ? props.instance === defaults.value.multiCalendars - 1 : true;
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
        if (!isDisabled.value(increment)) {
            emit('update-month-year', {
                year: increment ? props.year + 1 : props.year - 1,
                month: props.month,
                fromNav: true,
            });
        }
    };

    const setElRefs = (el: HTMLElement, i: number): void => {
        if (props.arrowNavigation) {
            elementRefs.value[i] = unrefElement(el);
            buildMatrix(elementRefs.value, 'monthYear');
        }
    };

    defineExpose({
        toggleMonthPicker,
        toggleYearPicker,
        handleMonthYearChange,
    });
</script>
