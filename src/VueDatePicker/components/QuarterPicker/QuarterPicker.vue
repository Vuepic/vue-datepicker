<template>
    <InstanceWrap v-slot="{ instance }" :multi-calendars="defaultedMultiCalendars.count" stretch>
        <div class="dp-quarter-picker-wrap" :style="{ minHeight: `${defaultedConfig.modeHeight}px` }">
            <div>
                <YearModePicker
                    v-bind="$props"
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
                        :data-test="quarter.value"
                        :disabled="quarter.disabled"
                        @click="selectQuarter(quarter.value, instance, quarter.disabled)"
                        @mouseover="setHoverDate(quarter.value)"
                    >
                        <template v-if="$slots['quarter']"
                            ><slot name="quarter" :value="quarter.value" :text="quarter.text"
                        /></template>
                        <template v-else>
                            {{ quarter.text }}
                        </template>
                    </button>
                </div>
            </div>
        </div>
    </InstanceWrap>
</template>

<script lang="ts" setup>
    import { useSlots } from 'vue';

    import InstanceWrap from '@/components/Common/InstanceWrap.vue';
    import YearModePicker from '@/components/shared/YearModePicker.vue';

    import { useQuarterPicker } from '@/components/QuarterPicker/quarter-picker';
    import { mapSlots } from '@/composables';
    import { PickerBaseProps } from '@/props';

    const emit = defineEmits([
        'update:internal-model-value',
        'reset-flow',
        'overlay-closed',
        'auto-apply',
        'range-start',
        'range-end',
    ]);
    const props = defineProps({
        ...PickerBaseProps,
    });

    const slots = useSlots();
    const yearModeSlots = mapSlots(slots, 'yearMode');

    defineOptions({
        compatConfig: {
            MODE: 3,
        },
    });

    const {
        defaultedMultiCalendars,
        defaultedConfig,
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
