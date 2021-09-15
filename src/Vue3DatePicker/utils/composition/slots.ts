import { Slots } from 'vue';

export const slots = [
    { name: 'clock-icon', use: ['time'] },
    { name: 'arrow-left', use: ['month-year'] },
    { name: 'arrow-right', use: ['month-year'] },
    { name: 'arrow-up', use: ['time'] },
    { name: 'arrow-down', use: ['time'] },
    { name: 'calendar-icon', use: ['month-year', 'time'] },
    { name: 'day', use: ['calendar'] },
    { name: 'action-select', use: ['action'] },
    { name: 'action-preview', use: ['action'] },
];

export const inputSlots = [{ name: 'trigger' }, { name: 'input-icon' }, { name: 'clear-icon' }];

const slotNames = {
    all: () => slots,
    monthYear: () => slots.filter((slot) => slot.use.includes('month-year')),
    input: () => inputSlots,
    timePicker: () => slots.filter((slot) => slot.use.includes('time')),
    action: () => slots.filter((slot) => slot.use.includes('action')),
};

export const useSlots = (slots: Slots, usage: 'all' | 'monthYear' | 'timePicker' | 'input' | 'action'): string[] => {
    const toReturn: string[] = [];

    slotNames[usage]().forEach((slot) => {
        if (slots[slot.name]) {
            toReturn.push(slot.name);
        }
    });

    return toReturn;
};
