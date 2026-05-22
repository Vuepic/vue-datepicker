<template>
  <div
    :class="{
      'dp--menu-inner': !stretch,
      'dp--menu--inner-stretched': stretch,
      'dp--flex-display': multiCalendars.count > 0,
      'dp--flex-display-collapsed': collapse,
    }"
    :data-dp-mobile="isMobile"
  >
    <slot :instances="instances" :wrap-class="{ 'dp--instance-calendar': multiCalendars.count > 0 }"></slot>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useContext, useResponsive } from '@/composables';

  defineProps<{ stretch?: boolean; collapse?: boolean }>();

  const {
    defaults: { multiCalendars },
  } = useContext();
  const { isMobile } = useResponsive();

  defineSlots<{
    default(props: { instances: number[]; wrapClass: Record<string, boolean> }): any;
  }>();

  const instances = computed((): number[] =>
    multiCalendars.value.count > 0 ? [...Array.from({ length: multiCalendars.value.count }).keys()] : [0],
  );
</script>
