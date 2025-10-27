<template>
    <InstanceWrap v-slot="{ wrapClass }" :multi-calendars="0" stretch>
        <div :class="wrapClass">
            <TimePicker
                ref="time-input"
                v-bind="$props"
                :hours="time.hours"
                :minutes="time.minutes"
                :seconds="time.seconds"
                :disabled-times-config="disabledTimesConfig"
                :validate-time="validateTime"
                @update:hours="updateTime({ hours: $event, minutes: time.minutes, seconds: time.seconds })"
                @update:minutes="updateTime({ hours: time.hours, minutes: $event, seconds: time.seconds })"
                @update:seconds="updateTime({ hours: time.hours, minutes: time.minutes, seconds: $event })"
                @reset-flow="$emit('reset-flow')"
            >
                <template v-for="(slot, i) in timePickerSlots" #[slot]="args" :key="i">
                    <slot :name="slot" v-bind="args" />
                </template>
            </TimePicker>
        </div>
    </InstanceWrap>
</template>

<script lang="ts" setup>
    import { onMounted, useSlots, useTemplateRef } from 'vue';

    import TimePicker from '@/components/TimePicker/TimePicker.vue';
    import InstanceWrap from '@/components/Common/InstanceWrap.vue';

    import { useSlotsMapper } from '@/composables';
    import { useTimePicker } from '@/components/TimePicker/useTimePicker.ts';
    import type { BaseProps, TimeKey } from '@/types';

    interface TimePickerEmits {
        'time-update': [];
        mount: [];
        'reset-flow': [];
        'update-flow-step': [];
    }

    const emit = defineEmits<TimePickerEmits>();

    defineProps<BaseProps>();

    const slots = useSlots();
    const { mapSlots } = useSlotsMapper();
    const timePickerSlots = mapSlots(slots, 'timePicker');

    const tpRef = useTemplateRef('time-input');
    const { time, modelValue, disabledTimesConfig, updateTime, validateTime } = useTimePicker(emit);

    onMounted(() => {
        emit('mount');
    });

    const getSidebarProps = () => {
        return {
            modelValue,
            time,
            updateTime,
        };
    };

    const toggleTimePicker = (show: boolean, flow = false, childOpen: TimeKey | '' = '') => {
        tpRef.value?.toggleTimePicker(show, flow, childOpen);
    };

    defineExpose({ getSidebarProps, toggleTimePicker });
</script>
