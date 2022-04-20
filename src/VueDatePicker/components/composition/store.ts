import { reactive } from 'vue';

const store = reactive({
    menuFocused: false,
});

// Sync data between the components
export const useStore = () => {
    const setMenuFocused = (value: boolean): void => {
        store.menuFocused = value;
    };

    const getStore = () => store;

    return {
        setMenuFocused,
        getStore,
    };
};
