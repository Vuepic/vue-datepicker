<template>
    <VueDatePicker ref="date-picker">
        <template v-for="(slot, i) in slots" #[slot]="args" :key="i">
            <slot :name="slot" v-bind="args" />
        </template>
    </VueDatePicker>
</template>

<script lang="ts" setup>
    import VueDatePicker from '@/VueDatePicker.vue';
    import { useExposed, useInjector } from '@/composables';
    import { propDefaults } from '@/constants/defaults.ts';

    import type { RootEmits, RootProps, RootSlots } from '@/types';
    import { useTemplateRef } from 'vue';

    const emit = defineEmits<RootEmits>();

    const props = withDefaults(defineProps<RootProps>(), propDefaults);

    const slots = defineSlots<RootSlots>();

    useInjector(props, emit);

    const datePicker = useTemplateRef('date-picker');

    defineExpose(useExposed(datePicker as never));
</script>
