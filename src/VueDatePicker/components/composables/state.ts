import { computed, reactive } from 'vue';

const state = reactive({
    menuFocused: false,
    shiftKeyInMenu: false,
});

export const useState = () => {
    const setMenuFocused = (value: boolean): void => {
        state.menuFocused = value;
    };

    const setShiftKey = (value: boolean): void => {
        if (state.shiftKeyInMenu === value) return;
        state.shiftKeyInMenu = value;
    };

    const control = computed(() => ({ shiftKeyInMenu: state.shiftKeyInMenu, menuFocused: state.menuFocused }));

    return {
        control,
        setMenuFocused,
        setShiftKey,
    };
};
