<template>
    <ClientOnly>
        <VueDatePicker
            v-model="modelBind"
            :dark="isDark"
            v-bind="$attrs"
            :placeholder="placeholder"
            :locale="localized ? zhCN : undefined"
        >
            <template v-for="(slot, i) in Object.keys(slots)" #[slot]="args" :key="i">
                <slot :name="slot" v-bind="args" />
            </template>
        </VueDatePicker>
    </ClientOnly>
</template>

<script lang="ts" setup>
    import { ref, useAttrs, onMounted, useSlots } from 'vue';
    import { useData } from 'vitepress';
    import { addDays, getHours, getMinutes, getMonth, getYear, startOfQuarter } from 'date-fns';
    import { zhCN } from 'date-fns/locale';
    import { VueDatePicker } from '../lib';

    const { isDark } = useData();
    const attrs = useAttrs();
    const slots = useSlots();

    const modelBind = ref();
    const placeholder = ref();

    const props = defineProps<{
        emptyModel?: boolean;
        localized?: boolean;
        bindSingle?: boolean;
    }>();

    onMounted(() => {
        if (attrs.range) return assignRangeModelValue();
        if (attrs.timePicker) return assignTimePickerModelValue();
        if (attrs.monthPicker) return assignMonthPickerModelValue();
        if (attrs.yearPicker) return assignYearPickerModelValue();
        if (attrs.quarterPicker) return assignQuarterPickerModelValue();
        return assignSingleModelValue();
    });

    const assignRangeModelValue = () => {
        placeholder.value = 'Select Range';
        if (!props.emptyModel) modelBind.value = [new Date(), addDays(new Date(), 3)];
    };

    const assignTimePickerModelValue = () => {
        placeholder.value = 'Select Time';
        if (!props.emptyModel) modelBind.value = { hours: getHours(new Date()), minutes: getMinutes(new Date()) };
    };

    const assignMonthPickerModelValue = () => {
        placeholder.value = 'Select Month';
        if (!props.emptyModel) modelBind.value = { month: getMonth(new Date()), year: getYear(new Date()) };
    };

    const assignYearPickerModelValue = () => {
        placeholder.value = 'Select Year';
        if (!props.emptyModel) modelBind.value = getYear(new Date());
    };

    const assignQuarterPickerModelValue = () => {
        placeholder.value = 'Select Quarter';
        if (!props.emptyModel) modelBind.value = startOfQuarter(new Date());
    };

    const assignSingleModelValue = () => {
        if (props.bindSingle) modelBind.value = new Date();
        placeholder.value = 'Select Date';
    };
</script>
