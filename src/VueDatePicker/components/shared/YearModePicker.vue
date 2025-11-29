<template>
    <div class="dp--year-mode-picker" :class="{ 'dp--hidden-el': overlayOpen }">
        <ArrowBtn
            v-if="showLeftIcon(instance)"
            ref="mpPrevIconRef"
            :aria-label="ariaLabels?.prevYear"
            :disabled="boolHtmlAttribute(isDisabled(false))"
            :class="ui?.navBtnPrev"
            @activate="handleYear(false)"
        >
            <slot v-if="$slots['arrow-left']" name="arrow-left" />
            <ChevronLeftIcon v-if="!$slots['arrow-left']" />
        </ArrowBtn>
        <button
            ref="mpYearButtonRef"
            class="dp__btn dp--year-select"
            type="button"
            :aria-label="`${year}-${ariaLabels?.openYearsOverlay}`"
            :data-test-id="`year-mode-btn-${instance}`"
            data-dp-action-element="0"
            @click="() => toggleYearPicker(false)"
            @keydown.enter.prevent="() => toggleYearPicker(false)"
        >
            <slot v-if="$slots.year" name="year" :text="yearDisplayVal" :value="year" />
            <template v-if="!$slots.year">{{ year }}</template>
        </button>
        <ArrowBtn
            v-if="showRightIcon(instance)"
            ref="mpNextIconRef"
            :aria-label="ariaLabels?.nextYear"
            :disabled="boolHtmlAttribute(isDisabled(true))"
            :class="ui?.navBtnNext"
            @activate="handleYear(true)"
        >
            <slot v-if="$slots['arrow-right']" name="arrow-right" />
            <ChevronRightIcon v-if="!$slots['arrow-right']" />
        </ArrowBtn>
    </div>
    <transition :name="transitionName(showYearPicker)" :css="showTransition">
        <SelectionOverlay
            v-if="showYearPicker"
            :items="items"
            :config="config"
            :is-last="rootProps.autoApply && !config.keepActionRow"
            :overlay-label="ariaLabels?.yearPicker?.(true)"
            type="year"
            @toggle="toggleYearPicker"
            @selected="handleYearSelect($event)"
        >
            <template #button-icon>
                <slot v-if="$slots['calendar-icon']" name="calendar-icon" />
                <CalendarIcon v-if="!$slots['calendar-icon']" />
            </template>
            <template v-if="$slots['year-overlay-value']" #item="{ item }">
                <slot name="year-overlay-value" :text="item.text" :value="item.value" />
            </template>
        </SelectionOverlay>
    </transition>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';

    import SelectionOverlay from '@/components/Common/SelectionOverlay.vue';
    import ArrowBtn from '@/components/Common/ArrowBtn.vue';
    import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@/components/Icons';

    import { useContext, useFormatter, useTransitions, useUtils } from '@/composables';
    import { useNavigationDisplay } from '@/components/shared/useNavigationDisplay.ts';

    import type { OverlayGridItem } from '@/types';
    import type { YearModeSlots } from '@/constants/slots.ts';

    interface YearModePickerEmits {
        'handle-year': [increment: boolean];
        'year-select': [year: number];
        'toggle-year-picker': [arg: { flow: boolean; show: boolean | undefined }];
    }

    interface YearModePickerProps {
        items: OverlayGridItem[][];
        instance: number;
        year: number;
        showYearPicker?: boolean;
        isDisabled: (isNext: boolean) => boolean;
    }

    defineSlots<YearModeSlots>();
    const emit = defineEmits<YearModePickerEmits>();
    const props = withDefaults(defineProps<YearModePickerProps>(), { showYearPicker: false });

    const { showRightIcon, showLeftIcon } = useNavigationDisplay();
    const {
        rootProps,
        defaults: { config, ariaLabels, ui },
    } = useContext();
    const { showTransition, transitionName } = useTransitions();
    const { formatYear } = useFormatter();
    const { boolHtmlAttribute } = useUtils();

    const overlayOpen = ref(false);

    const yearDisplayVal = computed(() => formatYear(props.year));

    const toggleYearPicker = (flow = false, show?: boolean) => {
        overlayOpen.value = !overlayOpen.value;
        emit('toggle-year-picker', { flow, show });
    };

    const handleYearSelect = (year: number) => {
        overlayOpen.value = false;
        emit('year-select', year);
    };

    const handleYear = (increment = false): void => {
        emit('handle-year', increment);
    };
</script>
