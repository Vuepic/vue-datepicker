import type { Slots } from 'vue';
import type { PresetRange } from '@/interfaces';

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
    { name: 'seconds-overlay', use: ['calendar', 'time'] },
    { name: 'hours', use: ['calendar', 'time'] },
    { name: 'minutes', use: ['calendar', 'time'] },
    { name: 'month', use: ['calendar', 'month-year'] },
    { name: 'year', use: ['calendar', 'month-year'] },
    { name: 'action-select', use: ['action'] },
    { name: 'action-preview', use: ['action'] },
    { name: 'calendar-header', use: ['calendar'] },
    { name: 'marker-tooltip', use: ['calendar'] },
    { name: 'now-button', use: [] },
    { name: 'time-picker-overlay', use: ['calendar', 'time'] },
    { name: 'am-pm-button', use: ['calendar', 'time'] },
    { name: 'left-sidebar', use: ['menu'] },
    { name: 'right-sidebar', use: ['menu'] },
];

export const inputSlots = [{ name: 'trigger' }, { name: 'input-icon' }, { name: 'clear-icon' }, { name: 'dp-input' }];

const slotNames = {
    all: () => slots,
    monthYear: () => slots.filter((slot) => slot.use.includes('month-year')),
    input: () => inputSlots,
    timePicker: () => slots.filter((slot) => slot.use.includes('time')),
    action: () => slots.filter((slot) => slot.use.includes('action')),
    calendar: () => slots.filter((slot) => slot.use.includes('calendar')),
    menu: () => slots.filter((slot) => slot.use.includes('menu')),
};

export const mapSlots = (
    slots: Slots,
    usage: 'all' | 'monthYear' | 'timePicker' | 'input' | 'action' | 'calendar' | 'menu',
    presetRanges?: PresetRange[],
): string[] => {
    const toReturn: string[] = [];

    slotNames[usage]().forEach((slot) => {
        if (slots[slot.name]) {
            toReturn.push(slot.name);
        }
    });

    if (presetRanges && presetRanges.length) {
        presetRanges.forEach((preset) => {
            if (preset.slot) {
                toReturn.push(preset.slot);
            }
        });
    }

    return toReturn;
};
