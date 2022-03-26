<template>
    <div class="dp__month_year_col_nav" @click="$emit('activate')" @keydown.enter="$emit('activate')" tabindex="0">
        <div class="dp__inner_nav" role="button" :aria-label="ariaLabel">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import type { PropType } from 'vue';

    defineEmits(['activate']);
    defineProps({ ariaLabel: { type: String as PropType<string>, default: '' } });
</script>
