import { inject, type InjectionKey } from 'vue';

export const useContext = <T>(key: InjectionKey<T>, parent?: string) => {
    const context = inject(key, null);

    if (!context) {
        throw new Error(`Missing <${parent ?? 'DatePickerRoot'} /> component.`);
    }

    return context;
};
