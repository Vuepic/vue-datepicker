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
    import type { PropType } from 'vue';
    import { onMounted, ref } from 'vue';

    const emit = defineEmits(['activate', 'setRef']);
    defineProps({
        ariaLabel: { type: String as PropType<string>, default: '' },
        disabled: { type: Boolean as PropType<boolean>, default: false },
    });
    const elRef = ref(null);

    onMounted(() => emit('setRef', elRef));
</script>
