import { computed, type ComputedRef, onMounted, onUnmounted, ref } from 'vue';
import type { Config } from '@/types';

export const useResponsive = (config: ComputedRef<Config>) => {
    const windowWidth = ref(0);

    onMounted(() => {
        updateWindowWidth();
        globalThis.addEventListener('resize', updateWindowWidth, { passive: true });
    });

    onUnmounted(() => {
        globalThis.removeEventListener('resize', updateWindowWidth);
    });

    const updateWindowWidth = () => {
        windowWidth.value = globalThis.document.documentElement.clientWidth;
    };

    const isMobile = computed(() => (windowWidth.value <= config.value.mobileBreakpoint ? true : undefined));

    return {
        isMobile,
    };
};
