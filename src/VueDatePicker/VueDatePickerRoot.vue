<template>
    <VueDatePicker ref="date-picker">
        <template v-for="(slot, i) in slotList" #[slot]="args" :key="i">
            <slot :name="slot as keyof RootSlots" v-bind="args" />
        </template>
    </VueDatePicker>
</template>

<script lang="ts" setup>
    import VueDatePicker from '@/VueDatePicker.vue';
    import { useExposed, useInjector } from '@/composables';
    import { propDefaults } from '@/constants/defaults.ts';

    import type { RootEmits, RootProps, RootSlots } from '@/types';
    import { useSlots, useTemplateRef } from 'vue';
    import { getAllSlots } from '@/constants/slots.ts';

    const emit = defineEmits<RootEmits>();

    const props = withDefaults(defineProps<RootProps>(), propDefaults);

    defineSlots<RootSlots>();

    useInjector(props, emit);

    const slots = useSlots();
    const slotList = getAllSlots(slots, props.presetDates);

    const datePicker = useTemplateRef('date-picker');

    defineExpose(useExposed(datePicker as never));
</script>
