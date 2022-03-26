<template>
    <div
        class="dp__month_year_select"
        @click="$emit('toggle')"
        @keydown.enter="$emit('toggle')"
        role="button"
        :aria-label="ariaLabel"
        tabindex="0"
    >
        <slot name="default" />
    </div>
    <transition :name="transitionName(showSelectionGrid)" :css="showTransition">
        <SelectionGrid
            v-if="showSelectionGrid"
            v-bind="{
                modelValue,
                items,
                disabledValues,
                minValue,
                maxValue,
            }"
            @update:model-value="$emit('update:model-value', $event)"
            @toggle="$emit('toggle')"
        >
            <template #button-icon>
                <slot name="calendar-icon" v-if="$slots['calendar-icon']" />
                <CalendarIcon v-if="!$slots['calendar-icon']" />
            </template>
            <template v-if="$slots[slotName]" #item="{ item }">
                <slot :name="slotName" :item="item" />
            </template>
        </SelectionGrid>
    </transition>
</template>

<script lang="ts" setup>
    import type { PropType } from 'vue';
    import SelectionGrid from '../SelectionGrid.vue';
    import { CalendarIcon } from '../Icons';
    import { useTransitions } from '@/VueDatePicker/components/composition/transition';
    import type { IDefaultSelect } from '@/VueDatePicker/interfaces';

    defineEmits(['update:model-value', 'toggle']);
    defineProps({
        ariaLabel: { type: String as PropType<string>, default: '' },
        showSelectionGrid: { type: Boolean as PropType<boolean>, default: false },
        modelValue: { type: Number as PropType<number>, default: null },
        items: { type: Array as PropType<IDefaultSelect[][]>, default: () => [] },
        disabledValues: { type: Array as PropType<number[]>, default: () => [] },
        minValue: { type: Number as PropType<number>, default: null },
        maxValue: { type: Number as PropType<number>, default: null },
        slotName: { type: String as PropType<string>, default: '' },
    });

    const { transitionName, showTransition } = useTransitions();
</script>
