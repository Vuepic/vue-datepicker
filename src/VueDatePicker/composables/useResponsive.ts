import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useContext } from '@/composables/useContext.ts';

export const useResponsive = () => {
    const {
        defaults: { config },
    } = useContext();
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
