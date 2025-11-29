<template>
    <InstanceWrap v-slot="{ instances, wrapClass }" :collapse="collapse" stretch>
        <div v-for="instance in instances" :key="instance" :class="wrapClass">
            <div class="dp-quarter-picker-wrap" :style="{ minHeight: `${config.modeHeight}px` }">
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
                <div class="dp--quarter-items">
                    <div v-for="(quarter, i) in quarters(instance)" :key="i">
                        <button
                            type="button"
                            class="dp--qr-btn"
                            :class="{
                                'dp--qr-btn-active': quarter.active,
                                'dp--qr-btn-between': quarter.isBetween,
                                'dp--qr-btn-disabled': quarter.disabled,
                                'dp--highlighted': quarter.highlighted,
                            }"
                            data-dp-action-element="0"
                            :data-test-id="quarter.value"
                            :disabled="boolHtmlAttribute(quarter.disabled)"
                            @click="selectQuarter(quarter.value, instance, quarter.disabled)"
                            @mouseover="setHoverDate(quarter.value)"
                        >
                            <slot name="quarter" :value="quarter.value" :text="quarter.text">
                                {{ quarter.text }}
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
    import { getSlotsByComponent, type QuarterPickerSlots, SlotUse } from '@/constants/slots.ts';
    import { type QuarterPickerEmits, useQuarterPicker } from '@/components/QuarterPicker/useQuarterPicker.ts';
    import type { BaseProps } from '@/types';

    defineSlots<QuarterPickerSlots>();
    const emit = defineEmits<QuarterPickerEmits>();
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
        quarters,
        modelValue,
        showYearPicker,
        setHoverDate,
        selectQuarter,
        toggleYearPicker,
        handleYearSelect,
        handleYear,
    } = useQuarterPicker(props, emit);

    const getSidebarProps = () => {
        return {
            modelValue,
            year,
            selectQuarter,
            handleYearSelect,
            handleYear,
        };
    };

    defineExpose({ getSidebarProps });
</script>
