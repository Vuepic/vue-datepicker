import type { Slots } from 'vue';
import type { PresetDate } from '@/types';

const slots = [
    { name: 'clock-icon', use: ['time', 'calendar', 'shared'] },
    { name: 'arrow-left', use: ['month-year', 'calendar', 'shared', 'year-mode'] },
    { name: 'arrow-right', use: ['month-year', 'calendar', 'shared', 'year-mode'] },
    { name: 'arrow-up', use: ['time', 'calendar', 'month-year', 'shared'] },
    { name: 'arrow-down', use: ['time', 'calendar', 'month-year', 'shared'] },
    { name: 'calendar-icon', use: ['month-year', 'time', 'calendar', 'shared', 'year-mode'] },
    { name: 'day', use: ['calendar', 'shared'] },
    { name: 'month-overlay-value', use: ['calendar', 'month-year', 'shared'] },
    { name: 'year-overlay-value', use: ['calendar', 'month-year', 'shared', 'year-mode'] },
    { name: 'year-overlay', use: ['month-year', 'shared'] },
    { name: 'month-overlay', use: ['month-year', 'shared'] },
    { name: 'month-overlay-header', use: ['month-year', 'shared'] },
    { name: 'year-overlay-header', use: ['month-year', 'shared'] },
    { name: 'hours-overlay-value', use: ['calendar', 'time', 'shared'] },
    { name: 'hours-overlay-header', use: ['calendar', 'time', 'shared'] },
    { name: 'minutes-overlay-value', use: ['calendar', 'time', 'shared'] },
    { name: 'minutes-overlay-header', use: ['calendar', 'time', 'shared'] },
    { name: 'seconds-overlay-value', use: ['calendar', 'time', 'shared'] },
    { name: 'seconds-overlay-header', use: ['calendar', 'time', 'shared'] },
    { name: 'hours', use: ['calendar', 'time', 'shared'] },
    { name: 'minutes', use: ['calendar', 'time', 'shared'] },
    { name: 'month', use: ['calendar', 'month-year', 'shared'] },
    { name: 'year', use: ['calendar', 'month-year', 'shared', 'year-mode'] },
    { name: 'action-buttons', use: ['action'] },
    { name: 'action-preview', use: ['action'] },
    { name: 'calendar-header', use: ['calendar', 'shared'] },
    { name: 'marker-tooltip', use: ['calendar', 'shared'] },
    { name: 'action-extra', use: ['menu'] },
    { name: 'time-picker-overlay', use: ['calendar', 'time', 'shared'] },
    { name: 'am-pm-button', use: ['calendar', 'time', 'shared'] },
    { name: 'left-sidebar', use: ['menu'] },
    { name: 'right-sidebar', use: ['menu'] },
    { name: 'month-year', use: ['month-year', 'shared'] },
    { name: 'time-picker', use: ['menu', 'shared'] },
    { name: 'action-row', use: ['action'] },
    { name: 'marker', use: ['calendar', 'shared'] },
    { name: 'quarter', use: ['shared'] },
    { name: 'top-extra', use: ['shared', 'month-year'] },
    { name: 'tp-inline-arrow-up', use: ['shared', 'time'] },
    { name: 'tp-inline-arrow-down', use: ['shared', 'time'] },
    { name: 'menu-header', use: ['menu'] },
];

const inputSlots = [{ name: 'trigger' }, { name: 'input-icon' }, { name: 'clear-icon' }, { name: 'dp-input' }];

const slotNames = {
    all: () => slots,
    monthYear: () => slots.filter((slot) => slot.use.includes('month-year')),
    input: () => inputSlots,
    timePicker: () => slots.filter((slot) => slot.use.includes('time')),
    action: () => slots.filter((slot) => slot.use.includes('action')),
    calendar: () => slots.filter((slot) => slot.use.includes('calendar')),
    menu: () => slots.filter((slot) => slot.use.includes('menu')),
    shared: () => slots.filter((slot) => slot.use.includes('shared')),
    yearMode: () => slots.filter((slot) => slot.use.includes('year-mode')),
};

export const useSlotsMapper = () => {
    const mapSlots = (
        slots: Slots,
        usage: 'all' | 'monthYear' | 'timePicker' | 'input' | 'action' | 'calendar' | 'menu' | 'shared' | 'yearMode',
        presetDates?: PresetDate[],
    ): string[] => {
        const toReturn: string[] = [];

        slotNames[usage]().forEach((slot) => {
            if (slots[slot.name]) {
                toReturn.push(slot.name);
            }
        });

        if (presetDates?.length) {
            presetDates.forEach((preset) => {
                if (preset.slot) {
                    toReturn.push(preset.slot);
                }
            });
        }

        return toReturn;
    };

    return {
        mapSlots,
    };
};
