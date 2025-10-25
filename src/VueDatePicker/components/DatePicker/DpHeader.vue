<template>
    <div class="dp--header-wrap">
        <template v-if="$slots['month-year']">
            <div class="dp__month_year_wrap">
                <slot
                    name="month-year"
                    v-bind="{
                        month,
                        year,
                        months,
                        years,
                        updateMonthYear,
                        handleMonthYearChange,
                        instance,
                        isDisabled,
                    }"
                />
            </div>
        </template>
        <template v-else>
            <div v-if="$slots['top-extra']">
                <slot name="top-extra" :value="modelValue" />
            </div>
            <div class="dp__month_year_wrap">
                <ArrowBtn
                    v-if="showLeftIcon(instance) && !rootProps.vertical"
                    :aria-label="ariaLabels?.prevMonth"
                    :disabled="isDisabled(false)"
                    :class="ui?.navBtnPrev"
                    el-name="action-prev"
                    @activate="handleMonthYearChange(false, true)"
                    @set-ref="setElRefs($event, 0)"
                >
                    <slot v-if="$slots['arrow-left']" name="arrow-left" />
                    <ChevronLeftIcon v-if="!$slots['arrow-left']" />
                </ArrowBtn>
                <div
                    class="dp__month_year_wrap"
                    :class="{
                        dp__year_disable_select: rootProps.disableYearSelect,
                    }"
                >
                    <template v-for="(type, i) in selectionButtonsDisplay" :key="type.type">
                        <button
                            :ref="(el) => setElRefs(el as HTMLElement, i + 1)"
                            type="button"
                            :data-dp-element="`overlay-${type.type}`"
                            class="dp__btn dp__month_year_select"
                            :class="{ 'dp--hidden-el': overlayOpen }"
                            :aria-label="`${type.text}-${type.ariaLabel}`"
                            :data-test-id="`${type.type}-toggle-overlay-${instance}`"
                            @click="type.toggle(false)"
                            @keydown="checkKeyDown($event, () => type.toggle(), true)"
                        >
                            <slot
                                v-if="$slots[type.type]"
                                :name="type.type"
                                :text="type.text"
                                :value="props[type.type]"
                            />
                            <template v-if="!$slots[type.type]">{{ type.text }}</template>
                        </button>
                        <transition :name="transitionName(type.showSelectionGrid)" :css="showTransition">
                            <SelectionOverlay
                                v-if="type.showSelectionGrid"
                                :items="type.items"
                                :is-last="rootProps.autoApply && !config.keepActionRow"
                                :skip-button-ref="false"
                                :type="type.type"
                                :header-refs="[]"
                                :menu-wrap-ref="menuWrapRef"
                                :overlay-label="type.overlayLabel"
                                @selected="type.updateModelValue"
                                @toggle="type.toggle"
                            >
                                <template #button-icon>
                                    <slot v-if="$slots['calendar-icon']" name="calendar-icon" />
                                    <CalendarIcon v-if="!$slots['calendar-icon']" />
                                </template>
                                <template v-if="$slots[`${type.type}-overlay-value`]" #item="{ item }">
                                    <slot :name="`${type.type}-overlay-value`" :text="item.text" :value="item.value" />
                                </template>
                                <template v-if="$slots[`${type.type}-overlay`]" #overlay>
                                    <slot :name="`${type.type}-overlay`" v-bind="overlaySlotProps(type.type)" />
                                </template>
                                <template v-if="$slots[`${type.type}-overlay-header`]" #header>
                                    <slot :name="`${type.type}-overlay-header`" :toggle="type.toggle" />
                                </template>
                            </SelectionOverlay>
                        </transition>
                    </template>
                </div>
                <ArrowBtn
                    v-if="showLeftIcon(instance) && rootProps.vertical"
                    :aria-label="ariaLabels?.prevMonth"
                    el-name="action-prev"
                    :disabled="isDisabled(false)"
                    :class="ui?.navBtnPrev"
                    @activate="handleMonthYearChange(false, true)"
                >
                    <slot v-if="$slots['arrow-up']" name="arrow-up" />
                    <ChevronUpIcon v-if="!$slots['arrow-up']" />
                </ArrowBtn>
                <ArrowBtn
                    v-if="showRightIcon(instance)"
                    ref="rightIcon"
                    el-name="action-next"
                    :disabled="isDisabled(true)"
                    :aria-label="ariaLabels?.nextMonth"
                    :class="ui?.navBtnNext"
                    @activate="handleMonthYearChange(true, true)"
                    @set-ref="setElRefs($event, rootProps.disableYearSelect ? 2 : 3)"
                >
                    <slot
                        v-if="$slots[rootProps.vertical ? 'arrow-down' : 'arrow-right']"
                        :name="rootProps.vertical ? 'arrow-down' : 'arrow-right'"
                    />
                    <component
                        :is="rootProps.vertical ? ChevronDownIcon : ChevronRightIcon"
                        v-if="!$slots[rootProps.vertical ? 'arrow-down' : 'arrow-right']"
                    />
                </ArrowBtn>
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, ref, type Ref } from 'vue';
    import { type MaybeElementRef, unrefElement } from '@vueuse/core';

    import {
        CalendarIcon,
        ChevronDownIcon,
        ChevronLeftIcon,
        ChevronRightIcon,
        ChevronUpIcon,
    } from '@/components/Icons';
    import ArrowBtn from '@/components/Common/ArrowBtn.vue';
    import SelectionOverlay from '@/components/Common/SelectionOverlay.vue';

    import {
        useArrowNavigation,
        useTransitions,
        useDateUtils,
        useHelperFns,
        useContext,
        useFormatter,
        useValidation,
    } from '@/composables';
    import { useMonthYearPick } from '@/components/shared/useMonthYearPick.ts';
    import { useNavigationDisplay } from '@/components/shared/useNavigationDisplay.ts';
    import { FlowStep, HeaderPicker } from '@/constants';
    import type { OverlayGridItem, SelectItem } from '@/types';

    interface DpHeaderEmits {
        mount: [];
        'reset-flow': [];
        'update-month-year': [value: { fromNav?: boolean; month: number; year: number }];
        'overlay-opened': [type: FlowStep];
    }

    interface DpHeaderProps {
        month: number;
        year: number;
        instance: number;
        years: SelectItem[];
        months: SelectItem[];
        menuWrapRef: HTMLElement | null;
    }

    const emit = defineEmits<DpHeaderEmits>();

    const props = defineProps<DpHeaderProps>();

    const {
        rootEmit,
        rootProps,
        modelValue,
        defaults: { ariaLabels, filters, config, highlight, safeDates, ui },
    } = useContext();
    const { transitionName, showTransition } = useTransitions();
    const { showLeftIcon, showRightIcon } = useNavigationDisplay();
    const { buildMatrix } = useArrowNavigation();
    const { handleMonthYearChange, isDisabled, updateMonthYear } = useMonthYearPick(props, emit);
    const { getMaxMonth, getMinMonth, getYearFromDate, groupListAndMap, checkHighlightYear, checkHighlightMonth } =
        useDateUtils();
    const { checkKeyDown } = useHelperFns();
    const { formatYear } = useFormatter();
    const { checkMinMaxValue } = useValidation();

    const showMonthPicker = ref(false);
    const showYearPicker = ref(false);
    const overlayOpen = ref(false);
    const elementRefs = ref<Array<HTMLElement | null | undefined>>([null, null, null, null]);

    onMounted(() => {
        emit('mount');
    });

    const bindOptions = (type: HeaderPicker) => ({
        get: () => props[type],
        set: (value: number) => {
            const otherType = type === HeaderPicker.month ? HeaderPicker.year : HeaderPicker.month;
            emit('update-month-year', { [type]: value, [otherType]: props[otherType] } as never);

            if (type === HeaderPicker.month) {
                toggleMonthPicker(true);
            } else {
                toggleYearPicker(true);
            }
        },
    });

    const monthModelBind = computed(bindOptions(HeaderPicker.month));
    const yearModelBind = computed(bindOptions(HeaderPicker.year));

    const overlaySlotProps = computed(() => (type: HeaderPicker) => ({
        month: props.month,
        year: props.year,
        items: type === HeaderPicker.month ? props.months : props.years,
        instance: props.instance,
        updateMonthYear,
        toggle: type === HeaderPicker.month ? toggleMonthPicker : toggleYearPicker,
    }));

    const getMonthDisplayVal = computed((): SelectItem => {
        const month = props.months.find((month) => month.value === props.month);
        if (month) return month;
        return { text: '', value: 0 };
    });

    const groupedMonths = computed((): OverlayGridItem[][] => {
        return groupListAndMap(props.months, (month: SelectItem) => {
            const active = props.month === month.value;
            const disabled =
                checkMinMaxValue(
                    month.value,
                    getMinMonth(props.year, safeDates.value.minDate),
                    getMaxMonth(props.year, safeDates.value.maxDate),
                ) || filters.value.months.includes(month.value);
            const highlighted = checkHighlightMonth(highlight.value, month.value, props.year);
            return { active, disabled, highlighted };
        });
    });

    const groupedYears = computed((): OverlayGridItem[][] => {
        return groupListAndMap(props.years, (year: SelectItem) => {
            const active = props.year === year.value;
            const disabled =
                checkMinMaxValue(
                    year.value,
                    getYearFromDate(safeDates.value.minDate),
                    getYearFromDate(safeDates.value.maxDate),
                ) || filters.value.years.includes(year.value);
            const highlighted = checkHighlightYear(highlight.value, year.value);
            return { active, disabled, highlighted };
        });
    });

    const toggleWrap = (val: Ref<boolean>, type: FlowStep, show?: boolean) => {
        if (show === undefined) {
            val.value = !val.value;
        } else {
            val.value = show;
        }

        if (val.value) {
            overlayOpen.value = true;
            emit('overlay-opened', type);
        } else {
            overlayOpen.value = false;
            rootEmit('overlay-toggle', { open: false, overlay: type });
        }
    };

    const toggleMonthPicker = (flow = false, show?: boolean): void => {
        checkFlow(flow);
        toggleWrap(showMonthPicker, FlowStep.month, show);
    };

    const toggleYearPicker = (flow = false, show?: boolean): void => {
        checkFlow(flow);
        toggleWrap(showYearPicker, FlowStep.year, show);
    };

    const checkFlow = (flow: boolean): void => {
        if (!flow) {
            emit('reset-flow');
        }
    };

    const setElRefs = (el: MaybeElementRef<HTMLElement | null>, i: number): void => {
        if (rootProps.arrowNavigation) {
            elementRefs.value[i] = unrefElement(el);
            buildMatrix(elementRefs.value, 'monthYear');
        }
    };

    const selectionButtons = computed(() => [
        {
            type: HeaderPicker.month,
            index: 1,
            toggle: toggleMonthPicker,
            modelValue: monthModelBind.value,
            updateModelValue: (val: number) => (monthModelBind.value = val),
            text: getMonthDisplayVal.value.text,
            showSelectionGrid: showMonthPicker.value,
            items: groupedMonths.value,
            ariaLabel: ariaLabels.value?.openMonthsOverlay,
            overlayLabel: ariaLabels.value.monthPicker?.(true) ?? undefined,
        },
        {
            type: HeaderPicker.year,
            index: 2,
            toggle: toggleYearPicker,
            modelValue: yearModelBind.value,
            updateModelValue: (val: number) => (yearModelBind.value = val),
            text: formatYear(props.year),
            showSelectionGrid: showYearPicker.value,
            items: groupedYears.value,
            ariaLabel: ariaLabels.value?.openYearsOverlay,
            overlayLabel: ariaLabels.value.yearPicker?.(true) ?? undefined,
        },
    ]);

    const selectionButtonsDisplay = computed(() => {
        if (rootProps.disableYearSelect) {
            return [selectionButtons.value[0]!];
        } else {
            return rootProps.yearFirst ? [...selectionButtons.value].reverse() : selectionButtons.value;
        }
    });

    defineExpose({
        toggleMonthPicker,
        toggleYearPicker,
        handleMonthYearChange,
    });
</script>
