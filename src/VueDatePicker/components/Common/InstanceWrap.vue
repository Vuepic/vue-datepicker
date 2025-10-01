<template>
    <div
        :class="{
            dp__menu_inner: !stretch,
            'dp--menu--inner-stretched': stretch,
            dp__flex_display: multiCalendars.count > 0,
            'dp--flex-display-collapsed': collapse,
        }"
        :data-dp-mobile="isMobile"
    >
        <slot :instances="instances" :wrap-class="{ dp__instance_calendar: multiCalendars.count > 0 }"></slot>
    </div>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';
    import { useContext } from '@/composables';

    defineProps<{ stretch?: boolean; collapse?: boolean }>();

    const {
        isMobile,
        defaults: { multiCalendars },
    } = useContext();

    defineSlots<{
        default(props: { instances: number[]; wrapClass: Record<string, boolean> }): any;
    }>();

    const instances = computed((): number[] =>
        multiCalendars.value.count > 0 ? [...Array(multiCalendars.value.count).keys()] : [0],
    );
</script>
