import { reactive } from 'vue';

const store = reactive({
    menuFocused: false,
    shiftKeyInMenu: false,
});

// Sync data between the components
export const useStore = () => {
    const setMenuFocused = (value: boolean): void => {
        store.menuFocused = value;
    };

    const setShiftKey = (value: boolean): void => {
        if (store.shiftKeyInMenu === value) return;
        store.shiftKeyInMenu = value;
    };

    const getStore = () => store;

    return {
        setMenuFocused,
        getStore,
        setShiftKey,
    };
};
