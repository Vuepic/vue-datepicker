import { Slots } from 'vue';

export const slots = [
    { name: 'clock-icon', use: ['time', 'calendar'] },
    { name: 'arrow-left', use: ['month-year', 'calendar'] },
    { name: 'arrow-right', use: ['month-year', 'calendar'] },
    { name: 'arrow-up', use: ['time', 'calendar'] },
    { name: 'arrow-down', use: ['time', 'calendar'] },
    { name: 'calendar-icon', use: ['month-year', 'time', 'calendar'] },
    { name: 'day', use: ['calendar'] },
    { name: 'month-overlay', use: ['calendar', 'month-year'] },
    { name: 'year-overlay', use: ['calendar', 'month-year'] },
    { name: 'hours-overlay', use: ['calendar', 'time'] },
    { name: 'minutes-overlay', use: ['calendar', 'time'] },
    { name: 'hours', use: ['calendar', 'time'] },
    { name: 'minutes', use: ['calendar', 'time'] },
    { name: 'month', use: ['calendar', 'month-year'] },
    { name: 'year', use: ['calendar', 'month-year'] },
    { name: 'action-select', use: ['action'] },
    { name: 'action-preview', use: ['action'] },
    { name: 'calendar-header', use: ['calendar'] },
    { name: 'now-button', use: [] },
];

export const inputSlots = [{ name: 'trigger' }, { name: 'input-icon' }, { name: 'clear-icon' }, { name: 'dp-input' }];

const slotNames = {
    all: () => slots,
    monthYear: () => slots.filter((slot) => slot.use.includes('month-year')),
    input: () => inputSlots,
    timePicker: () => slots.filter((slot) => slot.use.includes('time')),
    action: () => slots.filter((slot) => slot.use.includes('action')),
    calendar: () => slots.filter((slot) => slot.use.includes('calendar')),
};

export const mapSlots = (
    slots: Slots,
    usage: 'all' | 'monthYear' | 'timePicker' | 'input' | 'action' | 'calendar',
): string[] => {
    const toReturn: string[] = [];

    slotNames[usage]().forEach((slot) => {
        if (slots[slot.name]) {
            toReturn.push(slot.name);
        }
    });

    return toReturn;
};
