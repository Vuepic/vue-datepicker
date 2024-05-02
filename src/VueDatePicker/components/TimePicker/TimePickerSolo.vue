<template>
    <InstanceWrap :multi-calendars="0" stretch>
        <TimePicker
            ref="tpRef"
            v-bind="$props"
            :hours="time.hours"
            :minutes="time.minutes"
            :seconds="time.seconds"
            :internal-model-value="internalModelValue"
            :disabled-times-config="disabledTimesConfig"
            :validate-time="validateTime"
            @update:hours="updateTime($event)"
            @update:minutes="updateTime($event, false)"
            @update:seconds="updateTime($event, false, true)"
            @am-pm-change="$emit('am-pm-change', $event)"
            @reset-flow="$emit('reset-flow')"
        >
            <template v-for="(slot, i) in timePickerSlots" #[slot]="args" :key="i">
                <slot :name="slot" v-bind="args" />
            </template>
        </TimePicker>
    </InstanceWrap>
</template>

<script lang="ts" setup>
    import { onMounted, ref, useSlots } from 'vue';

    import TimePicker from '@/components/TimePicker/TimePicker.vue';

    import { PickerBaseProps } from '@/props';
    import { mapSlots } from '@/composables';
    import { useTimePicker } from '@/components/TimePicker/time-picker';
    import InstanceWrap from '@/components/Common/InstanceWrap.vue';

    const emit = defineEmits([
        'update:internal-model-value',
        'time-update',
        'am-pm-change',
        'mount',
        'reset-flow',
        'update-flow-step',
    ]);
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
    const tpRef = ref<InstanceType<typeof TimePicker> | null>(null);

    const { time, modelValue, disabledTimesConfig, updateTime, validateTime } = useTimePicker(props, emit);

    onMounted(() => {
        if (!props.shadow) {
            emit('mount', null);
        }
    });

    const getSidebarProps = () => {
        return {
            modelValue,
            time,
            updateTime,
        };
    };

    const toggleTimePicker = (show: boolean, flow = false, childOpen = '') => {
        tpRef.value?.toggleTimePicker(show, flow, childOpen);
    };

    defineExpose({ getSidebarProps, toggleTimePicker });
</script>
