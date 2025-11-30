<template>
    <InstanceWrap v-slot="{ instances, wrapClass }" :collapse="collapse" stretch>
        <div v-for="instance in instances" :key="instance" :class="wrapClass">
            <slot v-if="$slots['top-extra']" name="top-extra" :value="modelValue" />
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
            >
                <SelectionOverlay
                    :items="groupedMonths(instance)"
                    :is-last="rootProps.autoApply && !config.keepActionRow"
                    :height="config.modeHeight"
                    :no-overlay-focus="Boolean(noOverlayFocus || rootProps.textInput)"
                    use-relative
                    :level="0"
                    type="month"
                    @selected="selectMonth($event, instance)"
                    @hover-value="setHoverDate($event, instance)"
                >
                    <template #header>
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
                    </template>
                    <template v-if="$slots[`month-overlay-value`]" #item="{ item }">
                        <slot :name="`month-overlay-value`" :text="item.text" :value="item.value" />
                    </template>
                </SelectionOverlay>
            </slot>
        </div>
    </InstanceWrap>
</template>

<script lang="ts" setup>
    import { onMounted, useSlots } from 'vue';

    import SelectionOverlay from '@/components/Common/SelectionOverlay.vue';
    import InstanceWrap from '@/components/Common/InstanceWrap.vue';
    import YearModePicker from '@/components/shared/YearModePicker.vue';

    import { type MonthPickerEmits, useMonthPicker } from '@/components/MonthPicker/useMonthPicker.ts';
    import { useContext } from '@/composables';
    import type { BaseProps } from '@/types';
    import { type ComponentSlots, SlotUse, getSlotsByComponent } from '@/constants/slots.ts';

    defineSlots<ComponentSlots<SlotUse.MonthPicker> & ComponentSlots<SlotUse.YearMode>>();
    const emit = defineEmits<MonthPickerEmits>();
    const props = defineProps<BaseProps>();

    const slots = useSlots();

    const {
        rootProps,
        defaults: { config },
    } = useContext();

    const yearModeSlots = getSlotsByComponent(slots, SlotUse.YearMode);

    onMounted(() => {
        emit('mount');
    });

    const {
        groupedMonths,
        groupedYears,
        year,
        isDisabled,
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
