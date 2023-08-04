<template>
    <InstanceWrap v-slot="{ instance }" :multi-calendars="defaultedMultiCalendars" stretch>
        <SelectionOverlay
            :items="groupedMonths(instance)"
            :arrow-navigation="arrowNavigation"
            :is-last="autoApply && !keepActionRow"
            :esc-close="escClose"
            :height="modeHeight"
            @selected="selectMonth($event, instance)"
            @hover-value="setHoverDate($event, instance)"
            use-relative
            type="month"
        >
            <template #header>
                <div class="dp__month_picker_header">
                    <ArrowBtn
                        ref="mpPrevIconRef"
                        :aria-label="defaultedAriaLabels?.prevYear"
                        :disabled="isDisabled(instance, false)"
                        @activate="handleYear(instance, false)"
                    >
                        <slot name="arrow-left" v-if="$slots['arrow-left']" />
                        <ChevronLeftIcon v-if="!$slots['arrow-left']" />
                    </ArrowBtn>
                    <div
                        class="dp--year-select"
                        role="button"
                        ref="mpYearButtonRef"
                        :aria-label="defaultedAriaLabels?.openYearsOverlay"
                        tabindex="0"
                        @click="() => toggleYearPicker(false)"
                        @keydown.enter="() => toggleYearPicker(false)"
                    >
                        <slot v-if="$slots.year" name="year" :year="year(instance)" />
                        <template v-if="!$slots.year">{{ year(instance) }}</template>
                    </div>
                    <ArrowBtn
                        ref="mpNextIconRef"
                        :aria-label="defaultedAriaLabels?.nextYear"
                        :disabled="isDisabled(instance, false)"
                        @activate="handleYear(instance, true)"
                    >
                        <slot name="arrow-right" v-if="$slots['arrow-right']" />
                        <ChevronRightIcon v-if="!$slots['arrow-right']" />
                    </ArrowBtn>
                    <transition :name="transitionName(showYearPicker)" :css="showTransition">
                        <SelectionOverlay
                            v-if="showYearPicker"
                            :items="groupedYears(instance)"
                            :text-input="textInput"
                            :esc-close="escClose"
                            @toggle="toggleYearPicker"
                            @selected="handleYearSelect($event, instance)"
                            :is-last="autoApply && !keepActionRow"
                            type="year"
                        >
                            <template #button-icon>
                                <slot name="calendar-icon" v-if="$slots['calendar-icon']" />
                                <CalendarIcon v-if="!$slots['calendar-icon']" />
                            </template>
                            <template v-if="$slots['year-overlay-value']" #item="{ item }">
                                <slot name="year-overlay-value" :text="item.text" :value="item.value" />
                            </template>
                        </SelectionOverlay>
                    </transition>
                </div>
            </template>
        </SelectionOverlay>
    </InstanceWrap>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    import SelectionOverlay from '@/components/Common/SelectionOverlay.vue';
    import InstanceWrap from '@/components/Common/InstanceWrap.vue';
    import ArrowBtn from '@/components/Common/ArrowBtn.vue';

    import { PickerBaseProps } from '@/props';
    import { useMonthPicker } from '@/components/MonthPicker/month-picker';
    import { useDefaults, useTransitions } from '@/composables';
    import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@/components/Icons';

    const emit = defineEmits([
        'update:internal-model-value',
        'overlay-closed',
        'reset-flow',
        'range-start',
        'range-end',
        'auto-apply',
    ]);
    const props = defineProps({
        ...PickerBaseProps,
    });

    const { defaultedMultiCalendars, defaultedAriaLabels, defaultedTransitions } = useDefaults(props);
    const { groupedMonths, groupedYears, year, isDisabled, setHoverDate, selectMonth, selectYear } = useMonthPicker(
        props,
        emit,
    );
    const { transitionName, showTransition } = useTransitions(defaultedTransitions);

    const showYearPicker = ref(false);

    const handleYearSelect = (year: number, instance: number) => {
        selectYear(year, instance);
        toggleYearPicker();
    };

    const handleYear = (instance: number, increment = false): void => {
        if (!isDisabled.value(instance, increment)) {
            const yearToSelect = increment ? year.value(instance) + 1 : year.value(instance) - 1;
            selectYear(yearToSelect, instance);
        }
    };

    const toggleYearPicker = (flow = false, show?: boolean): void => {
        if (!flow) {
            emit('reset-flow');
        }

        if (show !== undefined) {
            showYearPicker.value = show;
        } else {
            showYearPicker.value = !showYearPicker.value;
        }

        if (!showYearPicker.value) {
            emit('overlay-closed');
        }
    };
</script>
