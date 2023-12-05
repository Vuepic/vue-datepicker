<template>
    <InstanceWrap v-slot="{ instance }" :multi-calendars="defaultedMultiCalendars.count" stretch>
        <template v-if="$slots['month-year']">
            <slot
                name="month-year"
                v-bind="{
                    year,
                    months: groupedMonths(instance),
                    years: groupedYears(instance),
                    selectMonth,
                    selectYear,
                    instance,
                }"
            />
        </template>
        <template v-else>
            <SelectionOverlay
                :items="groupedMonths(instance)"
                :arrow-navigation="arrowNavigation"
                :is-last="autoApply && !defaultedConfig.keepActionRow"
                :esc-close="escClose"
                :height="defaultedConfig.modeHeight"
                :config="config"
                :no-overlay-focus="noOverlayFocus"
                use-relative
                type="month"
                @selected="selectMonth($event, instance)"
                @hover-value="setHoverDate($event, instance)"
            >
                <template #header>
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
                </template>
            </SelectionOverlay>
        </template>
    </InstanceWrap>
</template>

<script lang="ts" setup>
    import { onMounted, useSlots } from 'vue';
    import SelectionOverlay from '@/components/Common/SelectionOverlay.vue';
    import InstanceWrap from '@/components/Common/InstanceWrap.vue';
    import YearModePicker from '@/components/shared/YearModePicker.vue';

    import { PickerBaseProps } from '@/props';
    import { useMonthPicker } from '@/components/MonthPicker/month-picker';
    import { mapSlots } from '@/composables';

    const emit = defineEmits([
        'update:internal-model-value',
        'overlay-closed',
        'reset-flow',
        'range-start',
        'range-end',
        'auto-apply',
        'update-month-year',
        'mount',
    ]);

    const slots = useSlots();
    const yearModeSlots = mapSlots(slots, 'yearMode');

    const props = defineProps({
        ...PickerBaseProps,
    });

    onMounted(() => {
        if (!props.shadow) {
            emit('mount', null);
        }
    });

    defineOptions({
        compatConfig: {
            MODE: 3,
        },
    });

    const {
        groupedMonths,
        groupedYears,
        year,
        isDisabled,
        defaultedMultiCalendars,
        defaultedConfig,
        showYearPicker,
        modelValue,
        presetDate,
        setHoverDate,
        selectMonth,
        selectYear,
        toggleYearPicker,
        handleYearSelect,
        handleYear,
        getModelMonthYear,
    } = useMonthPicker(props, emit);

    const getSidebarProps = () => {
        return {
            modelValue,
            year,
            getModelMonthYear,
            selectMonth,
            selectYear,
            handleYear,
        };
    };

    defineExpose({ getSidebarProps, presetDate, toggleYearPicker: (flow: boolean) => toggleYearPicker(0, flow) });
</script>
