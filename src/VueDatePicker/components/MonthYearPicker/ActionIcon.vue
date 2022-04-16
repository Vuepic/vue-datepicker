<template>
    <div
        class="dp__month_year_col_nav"
        @click="$emit('activate')"
        @keydown.enter="$emit('activate')"
        tabindex="0"
        ref="elRef"
    >
        <div class="dp__inner_nav" role="button" :aria-label="ariaLabel">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import type { PropType } from 'vue';
    import { onMounted, ref } from 'vue';

    const emit = defineEmits(['activate', 'setRef']);
    defineProps({ ariaLabel: { type: String as PropType<string>, default: '' } });
    const elRef = ref(null);

    onMounted(() => emit('setRef', elRef));
</script>
