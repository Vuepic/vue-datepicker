import { computed } from 'vue';

import type { Flow, MultiCalendarsOptions } from '@/interfaces';

export const useCommon = () => {
    const hideNavigationButtons = computed(() => (hideNavigation: Flow[] | undefined, key: Flow) => {
        return hideNavigation?.includes(key);
    });

    const showLeftIcon = computed(() => (multiCalendars: MultiCalendarsOptions, instance: number) => {
        if (multiCalendars.count) {
            return !multiCalendars.solo ? instance === 0 : true;
        }
        return true;
    });

    const showRightIcon = computed(() => (multiCalendars: MultiCalendarsOptions, instance: number) => {
        if (multiCalendars.count) {
            return !multiCalendars.solo ? instance === multiCalendars.count - 1 : true;
        }
        return true;
    });

    return { hideNavigationButtons, showLeftIcon, showRightIcon };
};
