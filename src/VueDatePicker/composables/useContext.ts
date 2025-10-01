import { inject } from 'vue';
import { ContextKey } from '@/composables/useInjector.ts';

export const useContext = () => {
    const ctx = inject(ContextKey);

    if (!ctx) {
        throw new Error("Can't use context");
    }

    return ctx;
};
