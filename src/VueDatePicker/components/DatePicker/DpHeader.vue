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
                <slot name="top-extra" :value="internalModelValue" />
            </div>
            <div class="dp__month_year_wrap">
                <ArrowBtn
                    v-if="showLeftIcon(defaultedMultiCalendars, instance) && !vertical"
                    :aria-label="defaultedAriaLabels?.prevMonth"
                    :disabled="isDisabled(false)"
                    :class="defaultedUI?.navBtnPrev"
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
                        dp__year_disable_select: disableYearSelect,
                    }"
                >
                    <template v-for="(type, i) in selectionButtonsDisplay" :key="type.type">
                        <button
                            :ref="(el) => setElRefs(el, i + 1)"
                            type="button"
                            :data-dp-element="`overlay-${type.type}`"
                            class="dp__btn dp__month_year_select"
                            :class="{ 'dp--hidden-el': overlayOpen }"
                            :aria-label="`${type.text}-${type.ariaLabel}`"
                            :data-test-id="`${type.type}-toggle-overlay-${instance}`"
                            @click="type.toggle"
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
                                :arrow-navigation="arrowNavigation"
                                :hide-navigation="hideNavigation"
                                :is-last="autoApply && !defaultedConfig.keepActionRow"
                                :skip-button-ref="false"
                                :config="config"
                                :type="type.type"
                                :header-refs="[]"
                                :esc-close="escClose"
                                :menu-wrap-ref="menuWrapRef"
                                :text-input="textInput"
                                :aria-labels="ariaLabels"
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
                    v-if="showLeftIcon(defaultedMultiCalendars, instance) && vertical"
                    :aria-label="defaultedAriaLabels?.prevMonth"
                    el-name="action-prev"
                    :disabled="isDisabled(false)"
                    :class="defaultedUI?.navBtnPrev"
                    @activate="handleMonthYearChange(false, true)"
                >
                    <slot v-if="$slots['arrow-up']" name="arrow-up" />
                    <ChevronUpIcon v-if="!$slots['arrow-up']" />
                </ArrowBtn>
                <ArrowBtn
                    v-if="showRightIcon(defaultedMultiCalendars, instance)"
                    ref="rightIcon"
                    el-name="action-next"
                    :disabled="isDisabled(true)"
                    :aria-label="defaultedAriaLabels?.nextMonth"
                    :class="defaultedUI?.navBtnNext"
                    @activate="handleMonthYearChange(true, true)"
                    @set-ref="setElRefs($event, disableYearSelect ? 2 : 3)"
                >
                    <slot
                        v-if="$slots[vertical ? 'arrow-down' : 'arrow-right']"
                        :name="vertical ? 'arrow-down' : 'arrow-right'"
                    />
                    <component
                        :is="vertical ? ChevronDownIcon : ChevronRightIcon"
                        v-if="!$slots[vertical ? 'arrow-down' : 'arrow-right']"
                    />
                </ArrowBtn>
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
    import type { PropType, Ref } from 'vue';
    import { computed, onMounted, ref } from 'vue';

    import {
        CalendarIcon,
        ChevronDownIcon,
        ChevronLeftIcon,
        ChevronRightIcon,
        ChevronUpIcon,
    } from '@/components/Icons';
    import ArrowBtn from '@/components/Common/ArrowBtn.vue';
    import SelectionOverlay from '@/components/Common/SelectionOverlay.vue';

    import { PickerBaseProps } from '@/props';

    import { useArrowNavigation, useMonthYearPick, useTransitions, useDefaults, useCommon } from '@/composables';
    import {
        checkHighlightMonth,
        checkHighlightYear,
        getMaxMonth,
        getMinMaxYear,
        getMinMonth,
    } from '@/utils/date-utils';
    import { checkKeyDown, checkMinMaxValue, formatNumber, groupListAndMap, unrefElement } from '@/utils/util';
    import { FlowStep, HeaderPicker } from '@/constants';

    import type { HeaderSelectionBtn, IDefaultSelect, MaybeElementRef, OverlayGridItem } from '@/interfaces';

    const emit = defineEmits(['update-month-year', 'mount', 'reset-flow', 'overlay-closed', 'overlay-opened']);
    const props = defineProps({
        month: { type: Number as PropType<number>, default: 0 },
        year: { type: Number as PropType<number>, default: 0 },
        instance: { type: Number as PropType<number>, default: 0 },
        years: { type: Array as PropType<IDefaultSelect[]>, default: () => [] },
        months: { type: Array as PropType<IDefaultSelect[]>, default: () => [] },
        ...PickerBaseProps,
    });

    defineOptions({
        compatConfig: {
            MODE: 3,
        },
    });

    const {
        defaultedTransitions,
        defaultedAriaLabels,
        defaultedMultiCalendars,
        defaultedFilters,
        defaultedConfig,
        defaultedHighlight,
        propDates,
        defaultedUI,
    } = useDefaults(props);
    const { transitionName, showTransition } = useTransitions(defaultedTransitions);
    const { buildMatrix } = useArrowNavigation();
    const { handleMonthYearChange, isDisabled, updateMonthYear } = useMonthYearPick(props, emit);
    const { showLeftIcon, showRightIcon } = useCommon();

    const showMonthPicker = ref(false);
    const showYearPicker = ref(false);
    const overlayOpen = ref(false);
    const elementRefs = ref<Array<HTMLElement | null>>([null, null, null, null]);

    onMounted(() => {
        emit('mount');
    });

    const bindOptions = (type: HeaderPicker) => ({
        get: () => props[type],
        set: (value: number) => {
            const otherType = type === HeaderPicker.month ? HeaderPicker.year : HeaderPicker.month;
            emit('update-month-year', { [type]: value, [otherType]: props[otherType] });

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

    const getMonthDisplayVal = computed((): IDefaultSelect => {
        const month = props.months.find((month) => month.value === props.month);
        if (month) return month;
        return { text: '', value: 0 };
    });

    const groupedMonths = computed((): OverlayGridItem[][] => {
        return groupListAndMap(props.months, (month: IDefaultSelect) => {
            const active = props.month === month.value;
            const disabled =
                checkMinMaxValue(
                    month.value,
                    getMinMonth(props.year, propDates.value.minDate),
                    getMaxMonth(props.year, propDates.value.maxDate),
                ) || defaultedFilters.value.months.includes(month.value);
            const highlighted = checkHighlightMonth(defaultedHighlight.value, month.value, props.year);
            return { active, disabled, highlighted };
        });
    });

    const groupedYears = computed((): OverlayGridItem[][] => {
        return groupListAndMap(props.years, (year: IDefaultSelect) => {
            const active = props.year === year.value;
            const disabled =
                checkMinMaxValue(
                    year.value,
                    getMinMaxYear(propDates.value.minDate),
                    getMinMaxYear(propDates.value.maxDate),
                ) || defaultedFilters.value.years.includes(year.value);
            const highlighted = checkHighlightYear(defaultedHighlight.value, year.value);
            return { active, disabled, highlighted };
        });
    });

    const toggleWrap = (val: Ref<boolean>, type: FlowStep, show?: boolean) => {
        if (show !== undefined) {
            val.value = show;
        } else {
            val.value = !val.value;
        }

        if (!val.value) {
            overlayOpen.value = false;
            emit('overlay-closed', type);
        } else {
            overlayOpen.value = true;
            emit('overlay-opened', type);
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

    const setElRefs = (el: MaybeElementRef, i: number): void => {
        if (props.arrowNavigation) {
            elementRefs.value[i] = unrefElement(el);
            buildMatrix(elementRefs.value, 'monthYear');
        }
    };

    const selectionButtons = computed((): HeaderSelectionBtn[] => [
        {
            type: HeaderPicker.month,
            index: 1,
            toggle: toggleMonthPicker,
            modelValue: monthModelBind.value,
            updateModelValue: (val: number) => (monthModelBind.value = val),
            text: getMonthDisplayVal.value.text,
            showSelectionGrid: showMonthPicker.value,
            items: groupedMonths.value,
            ariaLabel: defaultedAriaLabels.value?.openMonthsOverlay,
            overlayLabel: defaultedAriaLabels.value.monthPicker?.(true) ?? undefined,
        },
        {
            type: HeaderPicker.year,
            index: 2,
            toggle: toggleYearPicker,
            modelValue: yearModelBind.value,
            updateModelValue: (val: number) => (yearModelBind.value = val),
            text: formatNumber(props.year, props.locale),
            showSelectionGrid: showYearPicker.value,
            items: groupedYears.value,
            ariaLabel: defaultedAriaLabels.value?.openYearsOverlay,
            overlayLabel: defaultedAriaLabels.value.yearPicker?.(true) ?? undefined,
        },
    ]);

    const selectionButtonsDisplay = computed(() => {
        if (props.disableYearSelect) {
            return [selectionButtons.value[0]];
        } else {
            return props.yearFirst ? [...selectionButtons.value].reverse() : selectionButtons.value;
        }
    });

    defineExpose({
        toggleMonthPicker,
        toggleYearPicker,
        handleMonthYearChange,
    });
</script>
