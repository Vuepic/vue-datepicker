import type { MenuView, MonthModel } from '@/types';
import type { ShallowRef } from 'vue';
import type VueDatePicker from '@/VueDatePicker.vue';

export const useExposed = (datePicker: Readonly<ShallowRef<InstanceType<typeof VueDatePicker>>>) => {
    const openMenu = () => datePicker.value?.openMenu();

    const closeMenu = () => datePicker.value?.closeMenu();

    const selectDate = () => datePicker.value?.selectDate();

    const clearValue = () => datePicker.value?.clearValue();

    const formatInputValue = () => datePicker.value?.formatInputValue();

    const updateInternalModelValue = (value: Date | Date[]) => datePicker.value?.updateInternalModelValue(value);

    const setMonthYear = (value: Partial<MonthModel>, instance?: number) =>
        datePicker.value?.setMonthYear(value, instance);

    const parseModel = () => datePicker.value?.parseModel();

    const switchView = (view: MenuView, instance?: number) => datePicker.value?.switchView(view, instance);

    const toggleMenu = () => datePicker.value?.toggleMenu();

    const handleFlow = () => datePicker.value?.handleFlow();

    return {
        openMenu,
        closeMenu,
        selectDate,
        clearValue,
        formatInputValue,
        updateInternalModelValue,
        setMonthYear,
        parseModel,
        switchView,
        handleFlow,
        toggleMenu,
    };
};
