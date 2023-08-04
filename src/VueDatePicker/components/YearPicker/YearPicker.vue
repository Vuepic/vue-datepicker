<template>
    <selection-overlay
        :items="groupedYears"
        :is-last="autoApply && !keepActionRow"
        :height="modeHeight"
        type="year"
        use-relative
        @selected="selectYear"
        @hover-value="setHoverValue"
    >
        <template v-if="$slots['year-overlay-value']" #item="{ item }">
            <slot name="year-overlay-value" :text="item.text" :value="item.value" />
        </template>
    </selection-overlay>
</template>

<script lang="ts" setup>
    import SelectionOverlay from '@/components/Common/SelectionOverlay.vue';

    import { PickerBaseProps } from '@/props';
    import { useYearPicker } from '@/components/YearPicker/year-picker';

    const emit = defineEmits(['update:internal-model-value', 'reset-flow', 'range-start', 'range-end']);
    const props = defineProps({
        ...PickerBaseProps,
    });

    defineOptions({
        compatConfig: {
            MODE: 3,
        },
    });

    const { groupedYears, selectYear, setHoverValue } = useYearPicker(props, emit);
</script>
