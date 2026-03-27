<template>
    <InstanceWrap v-slot="{ instances, wrapClass }" :collapse="collapse" stretch>
        <div v-for="instance in instances" :key="instance" :class="wrapClass">
            <div class="dp-half-year-picker-wrap" :style="{ minHeight: `${config.modeHeight}px` }">
                <slot v-if="$slots['top-extra']" name="top-extra" :value="modelValue" />
                <div>
                    <YearModePicker
                        :items="groupedYears(instance)"
                        :instance="instance"
                        :show-year-picker="showYearPicker[instance]"
                        :year="year(instance)"
                        :is-disabled="(next: boolean) => isDisabled(instance, next)"
                        @handle-year="handleYear(instance, $event)"
                        @year-select="handleYearSelect($event, instance)"
                        @toggle-year-picker="toggleYearPicker(instance, $event?.flow, $event?.show)"
                    >
                        <template v-for="(slot, i) in yearModeSlots" #[slot]="args" :key="i">
                            <slot :name="slot" v-bind="args" />
                        </template>
                    </YearModePicker>
                </div>
                <div class="dp--half-year-items">
                    <div v-for="(halfYear, i) in halfYears(instance)" :key="i">
                        <button
                            type="button"
                            class="dp--hy-btn"
                            :class="{
                                'dp--hy-btn-active': halfYear.active,
                                'dp--hy-btn-between': halfYear.isBetween,
                                'dp--hy-btn-disabled': halfYear.disabled,
                                'dp--highlighted': halfYear.highlighted,
                            }"
                            data-dp-action-element="0"
                            :data-test-id="halfYear.value"
                            :disabled="boolHtmlAttribute(halfYear.disabled)"
                            @click="selectHalfYear(halfYear.value, instance, halfYear.disabled)"
                            @mouseover="setHoverDate(halfYear.value)"
                        >
                            <slot name="half-year" :value="halfYear.value" :text="halfYear.text">
                                {{ halfYear.text }}
                            </slot>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </InstanceWrap>
</template>

<script lang="ts" setup>
    import { useSlots } from 'vue';

    import InstanceWrap from '@/components/Common/InstanceWrap.vue';
    import YearModePicker from '@/components/shared/YearModePicker.vue';

    import { useContext, useUtils } from '@/composables';
    import { getSlotsByComponent, type HalfYearPickerSlots, SlotUse } from '@/constants/slots.ts';
    import { type HalfYearPickerEmits, useHalfYearPicker } from '@/components/HalfYearPicker/useHalfYearPicker.ts';
    import type { BaseProps } from '@/types';

    defineSlots<HalfYearPickerSlots>();
    const emit = defineEmits<HalfYearPickerEmits>();
    const props = defineProps<BaseProps>();

    const {
        defaults: { config },
    } = useContext();
    const slots = useSlots();
    const { boolHtmlAttribute } = useUtils();

    const yearModeSlots = getSlotsByComponent(slots, SlotUse.YearMode);

    const {
        groupedYears,
        year,
        isDisabled,
        halfYears,
        modelValue,
        showYearPicker,
        setHoverDate,
        selectHalfYear,
        toggleYearPicker,
        handleYearSelect,
        handleYear,
    } = useHalfYearPicker(props, emit);

    const getSidebarProps = () => {
        return {
            modelValue,
            year,
            selectHalfYear,
            handleYearSelect,
            handleYear,
        };
    };

    defineExpose({ getSidebarProps });
</script>
