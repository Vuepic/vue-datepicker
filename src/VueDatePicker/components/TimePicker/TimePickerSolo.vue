<template>
    <InstanceWrap :multi-calendars="0" stretch>
        <TimePicker
            v-bind="$props"
            :hours="time.hours"
            :minutes="time.minutes"
            :seconds="time.seconds"
            :internal-model-value="internalModelValue"
            :disabled-times-config="disabledTimesConfig"
            @update:hours="updateTime($event)"
            @update:minutes="updateTime($event, false)"
            @update:seconds="updateTime($event, false, true)"
            @am-pm-change="$emit('am-pm-change', $event)"
        >
            <template v-for="(slot, i) in timePickerSlots" #[slot]="args" :key="i">
                <slot :name="slot" v-bind="args" />
            </template>
        </TimePicker>
    </InstanceWrap>
</template>

<script lang="ts" setup>
    import { useSlots } from 'vue';

    import TimePicker from '@/components/TimePicker/TimePicker.vue';

    import { PickerBaseProps } from '@/props';
    import { mapSlots } from '@/composables';
    import { useTimePicker } from '@/components/TimePicker/time-picker';
    import InstanceWrap from '@/components/Common/InstanceWrap.vue';

    const emit = defineEmits(['update:internal-model-value', 'time-update', 'am-pm-change']);
    const props = defineProps({
        ...PickerBaseProps,
    });
    defineOptions({
        compatConfig: {
            MODE: 3,
        },
    });
    const slots = useSlots();
    const timePickerSlots = mapSlots(slots, 'timePicker');

    const { time, disabledTimesConfig, updateTime } = useTimePicker(props, emit);
</script>
