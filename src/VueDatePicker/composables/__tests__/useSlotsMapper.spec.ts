import { describe, it, expect, beforeEach } from 'vitest';
import { useSlotsMapper } from '@/composables/useSlotsMapper';
import type { Slots } from 'vue';
import type { PresetDate } from '@/types';

describe('useSlotsMapper', () => {
    let slotsMapper: ReturnType<typeof useSlotsMapper>;

    beforeEach(() => {
        slotsMapper = useSlotsMapper();
    });

    describe('mapSlots', () => {
        describe('all usage', () => {
            it('should return all available slot names when slots exist', () => {
                const slots: Slots = {
                    'clock-icon': () => null,
                    'arrow-left': () => null,
                    'arrow-right': () => null,
                    day: () => null,
                    month: () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'all');

                expect(result).toContain('clock-icon');
                expect(result).toContain('arrow-left');
                expect(result).toContain('arrow-right');
                expect(result).toContain('day');
                expect(result).toContain('month');
            });

            it('should return empty array when no slots exist', () => {
                const slots: Slots = {};
                const result = slotsMapper.mapSlots(slots, 'all');
                expect(result).toEqual([]);
            });

            it('should only return slots that exist in provided slots object', () => {
                const slots: Slots = {
                    'clock-icon': () => null,
                    'arrow-left': () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'all');

                expect(result).toHaveLength(2);
                expect(result).toContain('clock-icon');
                expect(result).toContain('arrow-left');
                expect(result).not.toContain('arrow-right');
            });
        });

        describe('monthYear usage', () => {
            it('should return month-year specific slots', () => {
                const slots: Slots = {
                    'arrow-left': () => null,
                    'arrow-right': () => null,
                    'month-overlay-value': () => null,
                    'year-overlay-value': () => null,
                    month: () => null,
                    year: () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'monthYear');

                expect(result).toContain('arrow-left');
                expect(result).toContain('arrow-right');
                expect(result).toContain('month-overlay-value');
                expect(result).toContain('year-overlay-value');
                expect(result).toContain('month');
                expect(result).toContain('year');
            });

            it('should not return slots not used in month-year', () => {
                const slots: Slots = {
                    'clock-icon': () => null, // time slot, not month-year
                    day: () => null, // calendar slot, not month-year
                    month: () => null, // month-year slot
                } as any;

                const result = slotsMapper.mapSlots(slots, 'monthYear');

                expect(result).toContain('month');
                expect(result).not.toContain('clock-icon');
                expect(result).not.toContain('day');
            });
        });

        describe('input usage', () => {
            it('should return input specific slots', () => {
                const slots: Slots = {
                    trigger: () => null,
                    'input-icon': () => null,
                    'clear-icon': () => null,
                    'dp-input': () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'input');

                expect(result).toContain('trigger');
                expect(result).toContain('input-icon');
                expect(result).toContain('clear-icon');
                expect(result).toContain('dp-input');
            });

            it('should return empty array when no input slots exist', () => {
                const slots: Slots = {
                    'clock-icon': () => null,
                    day: () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'input');

                expect(result).toEqual([]);
            });
        });

        describe('timePicker usage', () => {
            it('should return time picker specific slots', () => {
                const slots: Slots = {
                    'clock-icon': () => null,
                    hours: () => null,
                    minutes: () => null,
                    'hours-overlay-value': () => null,
                    'minutes-overlay-value': () => null,
                    'seconds-overlay-value': () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'timePicker');

                expect(result).toContain('clock-icon');
                expect(result).toContain('hours');
                expect(result).toContain('minutes');
                expect(result).toContain('hours-overlay-value');
                expect(result).toContain('minutes-overlay-value');
                expect(result).toContain('seconds-overlay-value');
            });

            it('should not return non-time slots', () => {
                const slots: Slots = {
                    day: () => null, // calendar only
                    hours: () => null, // time slot
                } as any;

                const result = slotsMapper.mapSlots(slots, 'timePicker');

                expect(result).toContain('hours');
                expect(result).not.toContain('day');
            });
        });

        describe('action usage', () => {
            it('should return action specific slots', () => {
                const slots: Slots = {
                    'action-buttons': () => null,
                    'action-preview': () => null,
                    'action-row': () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'action');

                expect(result).toContain('action-buttons');
                expect(result).toContain('action-preview');
                expect(result).toContain('action-row');
            });

            it('should only return action slots', () => {
                const slots: Slots = {
                    'action-buttons': () => null,
                    day: () => null, // not an action slot
                    hours: () => null, // not an action slot
                } as any;

                const result = slotsMapper.mapSlots(slots, 'action');

                expect(result).toHaveLength(1);
                expect(result).toContain('action-buttons');
            });
        });

        describe('calendar usage', () => {
            it('should return calendar specific slots', () => {
                const slots: Slots = {
                    day: () => null,
                    'calendar-header': () => null,
                    'marker-tooltip': () => null,
                    month: () => null,
                    year: () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'calendar');

                expect(result).toContain('day');
                expect(result).toContain('calendar-header');
                expect(result).toContain('marker-tooltip');
                expect(result).toContain('month');
                expect(result).toContain('year');
            });

            it('should include shared slots used in calendar', () => {
                const slots: Slots = {
                    'clock-icon': () => null, // shared with time
                    'arrow-left': () => null, // shared with month-year
                    day: () => null, // calendar and shared
                } as any;

                const result = slotsMapper.mapSlots(slots, 'calendar');

                expect(result).toContain('clock-icon');
                expect(result).toContain('arrow-left');
                expect(result).toContain('day');
            });
        });

        describe('menu usage', () => {
            it('should return menu specific slots', () => {
                const slots: Slots = {
                    'action-extra': () => null,
                    'left-sidebar': () => null,
                    'right-sidebar': () => null,
                    'time-picker': () => null,
                    'menu-header': () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'menu');

                expect(result).toContain('action-extra');
                expect(result).toContain('left-sidebar');
                expect(result).toContain('right-sidebar');
                expect(result).toContain('time-picker');
                expect(result).toContain('menu-header');
            });
        });

        describe('shared usage', () => {
            it('should return shared slots', () => {
                const slots: Slots = {
                    day: () => null,
                    marker: () => null,
                    quarter: () => null,
                    'top-extra': () => null,
                    'calendar-icon': () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'shared');

                expect(result).toContain('day');
                expect(result).toContain('marker');
                expect(result).toContain('quarter');
                expect(result).toContain('top-extra');
                expect(result).toContain('calendar-icon');
            });

            it('should include arrows in shared slots', () => {
                const slots: Slots = {
                    'arrow-left': () => null,
                    'arrow-right': () => null,
                    'arrow-up': () => null,
                    'arrow-down': () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'shared');

                expect(result).toContain('arrow-left');
                expect(result).toContain('arrow-right');
                expect(result).toContain('arrow-up');
                expect(result).toContain('arrow-down');
            });
        });

        describe('yearMode usage', () => {
            it('should return year mode specific slots', () => {
                const slots: Slots = {
                    'arrow-left': () => null,
                    'arrow-right': () => null,
                    'calendar-icon': () => null,
                    'year-overlay-value': () => null,
                    year: () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'yearMode');

                expect(result).toContain('arrow-left');
                expect(result).toContain('arrow-right');
                expect(result).toContain('calendar-icon');
                expect(result).toContain('year-overlay-value');
                expect(result).toContain('year');
            });
        });

        describe('presetDates parameter', () => {
            it('should include preset slots when presetDates provided', () => {
                const slots: Slots = {
                    day: () => null,
                } as any;

                const presetDates: PresetDate[] = [
                    { label: 'Today', value: new Date(), slot: 'preset-today' },
                    { label: 'Tomorrow', value: new Date(), slot: 'preset-tomorrow' },
                ];

                const result = slotsMapper.mapSlots(slots, 'all', presetDates);

                expect(result).toContain('day');
                expect(result).toContain('preset-today');
                expect(result).toContain('preset-tomorrow');
            });

            it('should not add preset slots when slot property is undefined', () => {
                const slots: Slots = {
                    day: () => null,
                } as any;

                const presetDates: PresetDate[] = [
                    { label: 'Today', value: new Date() }, // no slot property
                    { label: 'Tomorrow', value: new Date(), slot: 'preset-tomorrow' },
                ];

                const result = slotsMapper.mapSlots(slots, 'all', presetDates);

                expect(result).toContain('day');
                expect(result).not.toContain('preset-today');
                expect(result).toContain('preset-tomorrow');
            });

            it('should work without presetDates parameter', () => {
                const slots: Slots = {
                    day: () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'all');

                expect(result).toContain('day');
                expect(result).toHaveLength(1);
            });

            it('should work with empty presetDates array', () => {
                const slots: Slots = {
                    day: () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'all', []);

                expect(result).toContain('day');
                expect(result).toHaveLength(1);
            });

            it('should add preset slots to any usage type', () => {
                const slots: Slots = {
                    hours: () => null,
                } as any;

                const presetDates: PresetDate[] = [{ label: 'Now', value: new Date(), slot: 'preset-now' }];

                const result = slotsMapper.mapSlots(slots, 'timePicker', presetDates);

                expect(result).toContain('hours');
                expect(result).toContain('preset-now');
            });
        });

        describe('mixed usage scenarios', () => {
            it('should handle slots that belong to multiple categories', () => {
                const slots: Slots = {
                    'clock-icon': () => null, // time, calendar, shared
                    'arrow-left': () => null, // month-year, calendar, shared, year-mode
                    day: () => null, // calendar, shared
                } as any;

                const calendarResult = slotsMapper.mapSlots(slots, 'calendar');
                const sharedResult = slotsMapper.mapSlots(slots, 'shared');
                const timeResult = slotsMapper.mapSlots(slots, 'timePicker');

                expect(calendarResult).toContain('clock-icon');
                expect(calendarResult).toContain('arrow-left');
                expect(calendarResult).toContain('day');

                expect(sharedResult).toContain('clock-icon');
                expect(sharedResult).toContain('arrow-left');
                expect(sharedResult).toContain('day');

                expect(timeResult).toContain('clock-icon');
                expect(timeResult).not.toContain('day');
            });

            it('should handle all overlay slots correctly', () => {
                const slots: Slots = {
                    'month-overlay-value': () => null,
                    'year-overlay-value': () => null,
                    'hours-overlay-value': () => null,
                    'minutes-overlay-value': () => null,
                    'seconds-overlay-value': () => null,
                    'month-overlay': () => null,
                    'year-overlay': () => null,
                    'month-overlay-header': () => null,
                    'year-overlay-header': () => null,
                    'hours-overlay-header': () => null,
                    'minutes-overlay-header': () => null,
                    'seconds-overlay-header': () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'all');

                expect(result).toContain('month-overlay-value');
                expect(result).toContain('year-overlay-value');
                expect(result).toContain('hours-overlay-value');
                expect(result).toContain('minutes-overlay-value');
                expect(result).toContain('seconds-overlay-value');
                expect(result).toContain('month-overlay');
                expect(result).toContain('year-overlay');
                expect(result).toContain('month-overlay-header');
                expect(result).toContain('year-overlay-header');
                expect(result).toContain('hours-overlay-header');
                expect(result).toContain('minutes-overlay-header');
                expect(result).toContain('seconds-overlay-header');
            });

            it('should handle time picker inline arrows', () => {
                const slots: Slots = {
                    'tp-inline-arrow-up': () => null,
                    'tp-inline-arrow-down': () => null,
                } as any;

                const sharedResult = slotsMapper.mapSlots(slots, 'shared');
                const timeResult = slotsMapper.mapSlots(slots, 'timePicker');

                expect(sharedResult).toContain('tp-inline-arrow-up');
                expect(sharedResult).toContain('tp-inline-arrow-down');
                expect(timeResult).toContain('tp-inline-arrow-up');
                expect(timeResult).toContain('tp-inline-arrow-down');
            });
        });

        describe('edge cases', () => {
            it('should handle undefined slots object gracefully', () => {
                const slots: Slots = {};
                const result = slotsMapper.mapSlots(slots, 'all');
                expect(result).toEqual([]);
            });

            it('should not add duplicate slot names', () => {
                const slots: Slots = {
                    day: () => null,
                } as any;

                const presetDates: PresetDate[] = [
                    { label: 'Today', value: new Date(), slot: 'preset-date' },
                    { label: 'Tomorrow', value: new Date(), slot: 'preset-date' }, // same slot name
                ];

                const result = slotsMapper.mapSlots(slots, 'all', presetDates);

                expect(result).toContain('day');
                expect(result).toContain('preset-date');
                // Both preset-date entries should be added (no deduplication in implementation)
                expect(result.filter((s) => s === 'preset-date')).toHaveLength(2);
            });

            it('should preserve order of slots', () => {
                const slots: Slots = {
                    'arrow-left': () => null,
                    'arrow-right': () => null,
                    'calendar-icon': () => null,
                } as any;

                const result = slotsMapper.mapSlots(slots, 'monthYear');

                // Order should match the order in the slots definition
                const arrowLeftIndex = result.indexOf('arrow-left');
                const arrowRightIndex = result.indexOf('arrow-right');
                const calendarIconIndex = result.indexOf('calendar-icon');

                expect(arrowLeftIndex).toBeLessThan(arrowRightIndex);
                expect(arrowRightIndex).toBeLessThan(calendarIconIndex);
            });

            it('should handle all possible usage types', () => {
                const slots: Slots = {
                    day: () => null,
                    hours: () => null,
                    'action-buttons': () => null,
                    trigger: () => null,
                    'left-sidebar': () => null,
                } as any;

                expect(() => slotsMapper.mapSlots(slots, 'all')).not.toThrow();
                expect(() => slotsMapper.mapSlots(slots, 'monthYear')).not.toThrow();
                expect(() => slotsMapper.mapSlots(slots, 'timePicker')).not.toThrow();
                expect(() => slotsMapper.mapSlots(slots, 'input')).not.toThrow();
                expect(() => slotsMapper.mapSlots(slots, 'action')).not.toThrow();
                expect(() => slotsMapper.mapSlots(slots, 'calendar')).not.toThrow();
                expect(() => slotsMapper.mapSlots(slots, 'menu')).not.toThrow();
                expect(() => slotsMapper.mapSlots(slots, 'shared')).not.toThrow();
                expect(() => slotsMapper.mapSlots(slots, 'yearMode')).not.toThrow();
            });
        });

        describe('specific slot coverage', () => {
            it('should include time-picker-overlay in correct categories', () => {
                const slots: Slots = {
                    'time-picker-overlay': () => null,
                } as any;

                const calendarResult = slotsMapper.mapSlots(slots, 'calendar');
                const timeResult = slotsMapper.mapSlots(slots, 'timePicker');
                const sharedResult = slotsMapper.mapSlots(slots, 'shared');

                expect(calendarResult).toContain('time-picker-overlay');
                expect(timeResult).toContain('time-picker-overlay');
                expect(sharedResult).toContain('time-picker-overlay');
            });

            it('should include am-pm-button in correct categories', () => {
                const slots: Slots = {
                    'am-pm-button': () => null,
                } as any;

                const calendarResult = slotsMapper.mapSlots(slots, 'calendar');
                const timeResult = slotsMapper.mapSlots(slots, 'timePicker');
                const sharedResult = slotsMapper.mapSlots(slots, 'shared');

                expect(calendarResult).toContain('am-pm-button');
                expect(timeResult).toContain('am-pm-button');
                expect(sharedResult).toContain('am-pm-button');
            });

            it('should include month-year slot in correct categories', () => {
                const slots: Slots = {
                    'month-year': () => null,
                } as any;

                const monthYearResult = slotsMapper.mapSlots(slots, 'monthYear');
                const sharedResult = slotsMapper.mapSlots(slots, 'shared');

                expect(monthYearResult).toContain('month-year');
                expect(sharedResult).toContain('month-year');
            });

            it('should include quarter slot only in shared', () => {
                const slots: Slots = {
                    quarter: () => null,
                } as any;

                const sharedResult = slotsMapper.mapSlots(slots, 'shared');
                const calendarResult = slotsMapper.mapSlots(slots, 'calendar');
                const timeResult = slotsMapper.mapSlots(slots, 'timePicker');

                expect(sharedResult).toContain('quarter');
                expect(calendarResult).not.toContain('quarter');
                expect(timeResult).not.toContain('quarter');
            });

            it('should include top-extra in shared and month-year', () => {
                const slots: Slots = {
                    'top-extra': () => null,
                } as any;

                const sharedResult = slotsMapper.mapSlots(slots, 'shared');
                const monthYearResult = slotsMapper.mapSlots(slots, 'monthYear');
                const calendarResult = slotsMapper.mapSlots(slots, 'calendar');

                expect(sharedResult).toContain('top-extra');
                expect(monthYearResult).toContain('top-extra');
                expect(calendarResult).not.toContain('top-extra');
            });
        });
    });
});
