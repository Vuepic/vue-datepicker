import { computed } from 'vue';
import { useContext } from '@/composables';
import type { PickerSection } from '@/types';

export const useNavigationDisplay = () => {
    const {
        rootProps,
        defaults: { multiCalendars },
    } = useContext();

    const hideNavigationButtons = computed(() => (key: PickerSection) => {
        return rootProps.hideNavigation?.includes(key);
    });

    const showLeftIcon = computed(() => (instance: number) => {
        if (multiCalendars.value.count) {
            return !multiCalendars.value.solo ? instance === 0 : true;
        }
        return true;
    });

    const showRightIcon = computed(() => (instance: number) => {
        if (multiCalendars.value.count) {
            return !multiCalendars.value.solo ? instance === multiCalendars.value.count - 1 : true;
        }
        return true;
    });

    return { hideNavigationButtons, showLeftIcon, showRightIcon };
};
