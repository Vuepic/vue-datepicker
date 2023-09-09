<template>
    <div class="dp__month_year_row">
        <template v-if="$slots['month-year']">
            <slot
                name="month-year"
                v-bind="{ month, year, months, years, updateMonthYear, handleMonthYearChange, instance }"
            />
        </template>
        <template v-else>
            <ArrowBtn
                v-if="showLeftIcon(defaultedMultiCalendars, instance) && !vertical"
                :aria-label="defaultedAriaLabels?.prevMonth"
                :disabled="isDisabled(false)"
                @activate="handleMonthYearChange(false, true)"
                @set-ref="setElRefs($event, 0)"
            >
                <slot name="arrow-left" v-if="$slots['arrow-left']" />
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
                        type="button"
                        class="dp__btn dp__month_year_select"
                        tabindex="0"
                        :aria-label="type.ariaLabel"
                        :ref="(el) => setElRefs(el, i + 1)"
                        :data-test="`${type.type}-toggle-overlay-${instance}`"
                        @click="type.toggle"
                        @keydown.enter.prevent="type.toggle"
                        @keydown.space.prevent="type.toggle"
                    >
                        <slot v-if="$slots[type.type]" :name="type.type" :text="type.text" :value="props[type.type]" />
                        <template v-if="!$slots[type.type]">{{ type.text }}</template>
                    </button>
                    <transition :name="transitionName(type.showSelectionGrid)" :css="showTransition">
                        <SelectionOverlay
                            v-if="type.showSelectionGrid"
                            :items="type.items"
                            :arrow-navigation="arrowNavigation"
                            :hide-navigation="hideNavigation"
                            :is-last="autoApply && !keepActionRow && !defaultedConfig.keepActionRow"
                            :skip-button-ref="false"
                            :config="config"
                            :type="type.type"
                            :header-refs="[]"
                            :esc-close="escClose"
                            :text-input="textInput"
                            @selected="type.updateModelValue"
                            @toggle="type.toggle"
                        >
                            <template #button-icon>
                                <slot name="calendar-icon" v-if="$slots['calendar-icon']" />
                                <CalendarIcon v-if="!$slots['calendar-icon']" />
                            </template>
                            <template v-if="$slots[`${type.type}-overlay-val`]" #item="{ item }">
                                <slot :name="`${type.type}-overlay-val`" :text="item.text" :value="item.value" />
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
                :disabled="isDisabled(false)"
                @activate="handleMonthYearChange(false, true)"
            >
                <slot name="arrow-up" v-if="$slots['arrow-up']" />
                <ChevronUpIcon v-if="!$slots['arrow-up']" />
            </ArrowBtn>
            <ArrowBtn
                v-if="showRightIcon(defaultedMultiCalendars, instance)"
                ref="rightIcon"
                :disabled="isDisabled(true)"
                :aria-label="defaultedAriaLabels?.nextMonth"
                @activate="handleMonthYearChange(true, true)"
                @set-ref="setElRefs($event, disableYearSelect ? 2 : 3)"
            >
                <slot
                    :name="vertical ? 'arrow-down' : 'arrow-right'"
                    v-if="$slots[vertical ? 'arrow-down' : 'arrow-right']"
                />
                <component
                    :is="vertical ? ChevronDownIcon : ChevronRightIcon"
                    v-if="!$slots[vertical ? 'arrow-down' : 'arrow-right']"
                />
            </ArrowBtn>
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
    import { getMaxMonth, getMinMaxYear, getMinMonth } from '@/utils/date-utils';
    import { checkMinMaxValue, groupListAndMap, unrefElement } from '@/utils/util';
    import { HeaderPicker } from '@/constants';

    import type { HeaderSelectionBtn, IDefaultSelect, MaybeElementRef, OverlayGridItem } from '@/interfaces';

    const emit = defineEmits(['update-month-year', 'mount', 'reset-flow', 'overlay-closed']);
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

    const { defaultedTransitions, defaultedAriaLabels, defaultedMultiCalendars, defaultedFilters, defaultedConfig } =
        useDefaults(props);
    const { transitionName, showTransition } = useTransitions(defaultedTransitions);
    const { buildMatrix } = useArrowNavigation();
    const { handleMonthYearChange, isDisabled, updateMonthYear } = useMonthYearPick(props, emit);
    const { showLeftIcon, showRightIcon } = useCommon();

    const showMonthPicker = ref(false);
    const showYearPicker = ref(false);
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
                    getMinMonth(props.year, props.minDate),
                    getMaxMonth(props.year, props.maxDate),
                ) || defaultedFilters.value.months.includes(month.value);
            return { active, disabled };
        });
    });

    const groupedYears = computed((): OverlayGridItem[][] => {
        return groupListAndMap(props.years, (year: IDefaultSelect) => {
            const active = props.year === year.value;
            const disabled =
                checkMinMaxValue(year.value, getMinMaxYear(props.minDate), getMinMaxYear(props.maxDate)) ||
                defaultedFilters.value.years.includes(year.value);
            return { active, disabled };
        });
    });

    const toggleWrap = (val: Ref<boolean>, show?: boolean) => {
        if (show !== undefined) {
            val.value = show;
        } else {
            val.value = !val.value;
        }

        if (!val.value) {
            emit('overlay-closed');
        }
    };

    const toggleMonthPicker = (flow = false, show?: boolean): void => {
        checkFlow(flow);
        toggleWrap(showMonthPicker, show);
    };

    const toggleYearPicker = (flow = false, show?: boolean): void => {
        checkFlow(flow);
        toggleWrap(showYearPicker, show);
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
        },
        {
            type: HeaderPicker.year,
            index: 2,
            toggle: toggleYearPicker,
            modelValue: yearModelBind.value,
            updateModelValue: (val: number) => (yearModelBind.value = val),
            text: props.year,
            showSelectionGrid: showYearPicker.value,
            items: groupedYears.value,
            ariaLabel: defaultedAriaLabels.value?.openYearsOverlay,
        },
    ]);

    const selectionButtonsDisplay = computed(() =>
        props.disableYearSelect ? [selectionButtons.value[0]] : selectionButtons.value,
    );

    defineExpose({
        toggleMonthPicker,
        toggleYearPicker,
        handleMonthYearChange,
    });
</script>
