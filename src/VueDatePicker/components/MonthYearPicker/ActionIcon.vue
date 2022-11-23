<template>
    <div
        class="dp__month_year_col_nav"
        @click="$emit('activate')"
        @keydown.enter="$emit('activate')"
        @keydown.space="$emit('activate')"
        tabindex="0"
        role="button"
        :aria-label="ariaLabel"
        :aria-disabled="disabled"
        ref="elRef"
    >
        <div class="dp__inner_nav" :class="{ dp__inner_nav_disabled: disabled }">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from 'vue';

    import type { PropType } from 'vue';

    const emit = defineEmits(['activate', 'set-ref']);
    defineProps({
        ariaLabel: { type: String as PropType<string>, default: '' },
        disabled: { type: Boolean as PropType<boolean>, default: false },
    });
    const elRef = ref(null);

    onMounted(() => emit('set-ref', elRef));
</script>
