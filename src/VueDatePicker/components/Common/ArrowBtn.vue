<template>
    <button
        ref="arrow-btn"
        type="button"
        :data-dp-element="elName"
        class="dp__btn dp--arrow-btn-nav"
        tabindex="0"
        :aria-label="ariaLabel"
        :aria-disabled="disabled || undefined"
        @click="emit('activate')"
        @keydown="checkKeyDown($event, () => emit('activate'), true)"
    >
        <span class="dp__inner_nav" :class="{ dp__inner_nav_disabled: disabled }">
            <slot />
        </span>
    </button>
</template>

<script lang="ts" setup>
    import { onMounted, type Ref, useTemplateRef } from 'vue';
    import { useHelperFns } from '@/composables';

    const { checkKeyDown } = useHelperFns();

    const emit = defineEmits<{
        activate: [];
        'set-ref': [i: Ref<HTMLElement | null>];
    }>();

    defineProps<{
        ariaLabel?: string;
        elName?: string;
        disabled: boolean;
    }>();

    const elRef = useTemplateRef('arrow-btn');

    onMounted(() => emit('set-ref', elRef));
</script>
