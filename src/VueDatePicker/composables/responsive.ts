import { computed, type ComputedRef, onMounted, onUnmounted, ref } from 'vue';
import type { Config } from '@/interfaces';

export const useResponsive = (config: ComputedRef<Config>, isShadow?: boolean) => {
    const windowWidth = ref(0);

    onMounted(() => {
        updateWindowWidth();
        window.addEventListener('resize', updateWindowWidth, { passive: true });
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateWindowWidth);
    });

    const updateWindowWidth = () => {
        windowWidth.value = window.document.documentElement.clientWidth;
    };

    const isMobile = computed(() =>
        windowWidth.value <= config.value.mobileBreakpoint && !isShadow ? true : undefined,
    );

    return {
        isMobile,
    };
};
