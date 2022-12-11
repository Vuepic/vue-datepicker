<template>
    <div
        class="dp__month_year_select"
        @click="$emit('toggle')"
        @keydown.enter="$emit('toggle')"
        @keydown.space="$emit('toggle')"
        role="button"
        :aria-label="ariaLabel"
        tabindex="0"
        ref="elRef"
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
                escClose,
                type,
                arrowNavigation,
                textInput,
                autoApply,
                ariaLabels,
                hideNavigation,
            }"
            :header-refs="[]"
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
            <template v-if="$slots[overlaySlot]" #overlay>
                <slot :name="overlaySlot" />
            </template>
            <template v-if="$slots[`${overlaySlot}-header`]" #header>
                <slot :name="`${overlaySlot}-header`" />
            </template>
        </SelectionGrid>
    </transition>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from 'vue';

    import SelectionGrid from '@/components/SelectionGrid.vue';
    import { CalendarIcon } from '@/components/Icons';
    import { useTransitions } from '@/components/composables';

    import type { PropType } from 'vue';
    import type { IDefaultSelect, Transition, AriaLabels, Flow } from '@/interfaces';

    const emit = defineEmits(['update:model-value', 'toggle', 'set-ref']);
    const props = defineProps({
        ariaLabel: { type: String as PropType<string>, default: '' },
        showSelectionGrid: { type: Boolean as PropType<boolean>, default: false },
        modelValue: { type: Number as PropType<number>, default: null },
        items: { type: Array as PropType<IDefaultSelect[][]>, default: () => [] },
        disabledValues: { type: Array as PropType<number[]>, default: () => [] },
        minValue: { type: Number as PropType<number | null>, default: null },
        maxValue: { type: Number as PropType<number | null>, default: null },
        slotName: { type: String as PropType<string>, default: '' },
        overlaySlot: { type: String as PropType<string>, default: '' },
        headerRefs: { type: Array as PropType<(HTMLElement | null)[]>, default: () => [] },
        escClose: { type: Boolean as PropType<boolean>, default: true },
        type: { type: String as PropType<'month' | 'year'>, default: null },
        transitions: { type: [Object, Boolean] as PropType<Transition>, default: false },
        arrowNavigation: { type: Boolean as PropType<boolean>, default: false },
        autoApply: { type: Boolean as PropType<boolean>, default: false },
        textInput: { type: Boolean as PropType<boolean>, default: false },
        ariaLabels: { type: Object as PropType<AriaLabels>, default: () => ({}) },
        hideNavigation: { type: Array as PropType<Flow[]>, default: () => [] },
    });

    const { transitionName, showTransition } = useTransitions(props.transitions);

    const elRef = ref(null);

    onMounted(() => emit('set-ref', elRef));
</script>
