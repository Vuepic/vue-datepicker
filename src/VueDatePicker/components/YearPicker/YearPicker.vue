<template>
    <div>
        <slot v-if="$slots['top-extra']" name="top-extra" :value="modelValue" />
        <template v-if="$slots['month-year']">
            <slot
                name="month-year"
                v-bind="{
                    years: groupedYears,
                    selectYear,
                }"
            />
        </template>
        <template v-else>
            <selection-overlay
                :items="groupedYears"
                :is-last="rootProps.autoApply && !config.keepActionRow"
                :height="config.modeHeight"
                :no-overlay-focus="Boolean(noOverlayFocus || rootProps.textInput)"
                :focus-value="focusYear"
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
    </div>
</template>

<script lang="ts" setup>
    import SelectionOverlay from '@/components/Common/SelectionOverlay.vue';

    import { useYearPicker, type YearPickerEmits } from '@/components/YearPicker/useYearPicker.ts';

    import { useContext } from '@/composables';
    import type { BaseProps } from '@/types';
    import type { YearPickerSlots } from '@/constants/slots.ts';

    defineSlots<YearPickerSlots>();
    const emit = defineEmits<YearPickerEmits>();
    const props = defineProps<BaseProps>();

    const {
        modelValue,
        defaults: { config },
        rootProps,
    } = useContext();

    const { groupedYears, focusYear, selectYear, setHoverValue } = useYearPicker(props, emit);

    const getSidebarProps = () => {
        return {
            modelValue,
            selectYear,
        };
    };

    defineExpose({ getSidebarProps });
</script>
