<template>
    <VueDatePicker
        v-model="modelBind"
        :dark="isDark"
        v-bind="$attrs"
        :highlight="highlightProp"
        :markers="markersProp"
        :placeholder="placeholder"
        :calendar="calendar ? calendarFn : undefined"
    ></VueDatePicker>
</template>

<script lang="ts" setup>
    import { ref, useAttrs, onMounted, computed } from 'vue';
    import { useData } from 'vitepress';
    import { addDays, getHours, getMinutes, getMonth, getYear, startOfQuarter } from 'date-fns';
    import { VueDatePicker } from '../lib';

    const { isDark } = useData();
    const attrs = useAttrs();

    const modelBind = ref();
    const placeholder = ref();

    const props = defineProps<{
        emptyModel?: boolean;
        highlight?: boolean;
        markers?: boolean;
        calendar?: boolean;
    }>();

    onMounted(() => {
        if (!props.emptyModel) {
            if (attrs.range) return assignRangeModelValue();
            if (attrs.timePicker) return assignTimePickerModelValue();
            if (attrs.monthPicker) return assignMonthPickerModelValue();
            if (attrs.yearPicker) return assignYearPickerModelValue();
            if (attrs.quarterPicker) return assignQuarterPickerModelValue();
            return assignSingleModelValue();
        }
    });

    const assignRangeModelValue = () => {
        placeholder.value = 'Select Range';
        modelBind.value = [new Date(), addDays(new Date(), 3)];
    };

    const assignTimePickerModelValue = () => {
        modelBind.value = { hours: getHours(new Date()), minutes: getMinutes(new Date()) };
    };

    const assignMonthPickerModelValue = () => {
        modelBind.value = { month: getMonth(new Date()), year: getYear(new Date()) };
    };

    const assignYearPickerModelValue = () => {
        modelBind.value = getYear(new Date());
    };

    const assignQuarterPickerModelValue = () => {
        modelBind.value = startOfQuarter(new Date());
    };

    const assignSingleModelValue = () => {
        placeholder.value = 'Select Date';
    };

    const highlightProp = computed(() => {
        if (props.highlight) {
            return { dates: [addDays(new Date(), 1), addDays(new Date(), 2), addDays(new Date(), 3)] };
        }
        return undefined;
    });

    const markersProp = computed(() => {
        if (props.markers) {
            return [
                {
                    date: addDays(new Date(), 1),
                    type: 'dot',
                    tooltip: [{ text: 'Dot with tooltip', color: 'green' }],
                },
                {
                    date: addDays(new Date(), 2),
                    type: 'line',
                    tooltip: [
                        { text: 'First tooltip', color: 'blue' },
                        { text: 'Second tooltip', color: 'yellow' },
                    ],
                },
                {
                    date: addDays(new Date(), 3),
                    type: 'dot',
                    color: 'yellow',
                },
            ];
        }
        return undefined;
    });

    const calendarFn = (weeks) => {
        return weeks
            .filter((week) => week.days.some((day) => day.text === 15))
            .map((week) => ({
                ...week,
                days: week.days.map((day) => {
                    day.classData['custom-class'] = true;
                    return day;
                }),
            }));
    };
</script>
