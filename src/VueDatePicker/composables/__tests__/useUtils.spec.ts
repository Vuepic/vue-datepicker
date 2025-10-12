import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useUtils } from '@/composables/useUtils';
import { MAP_KEY_FORMAT } from '@/constants';

describe('useUtils', () => {
    let utils: ReturnType<typeof useUtils>;

    beforeEach(() => {
        utils = useUtils();
    });

    describe('padZero', () => {
        it('should pad single digit numbers with zero', () => {
            expect(utils.padZero(5)).toBe('05');
            expect(utils.padZero(0)).toBe('00');
            expect(utils.padZero(9)).toBe('09');
        });

        it('should not pad double digit numbers', () => {
            expect(utils.padZero(10)).toBe(10);
            expect(utils.padZero(15)).toBe(15);
            expect(utils.padZero(99)).toBe(99);
        });
    });

    describe('checkHighlightMonth', () => {
        it('should check highlight using function', () => {
            const highlightFn = ({ month, year }: { month: number; year: number }) => {
                return month === 5 && year === 2024;
            };

            expect(utils.checkHighlightMonth(highlightFn as any, 5, 2024)).toBe(true);
            expect(utils.checkHighlightMonth(highlightFn as any, 6, 2024)).toBe(false);
        });

        it('should check highlight using config object', () => {
            const config = {
                months: [
                    { month: 5, year: 2024 },
                    { month: 11, year: 2024 },
                ],
                years: [],
            };

            expect(utils.checkHighlightMonth(config as any, 5, 2024)).toBe(true);
            expect(utils.checkHighlightMonth(config as any, 11, 2024)).toBe(true);
            expect(utils.checkHighlightMonth(config as any, 6, 2024)).toBe(false);
        });

        it('should return false when month not in config', () => {
            const config = {
                months: [{ month: 3, year: 2023 }],
                years: [],
            };

            expect(utils.checkHighlightMonth(config as any, 5, 2024)).toBe(false);
        });
    });

    describe('checkHighlightYear', () => {
        it('should check highlight using function', () => {
            const highlightFn = (year: number) => year === 2024;

            expect(utils.checkHighlightYear(highlightFn as any, 2024)).toBe(true);
            expect(utils.checkHighlightYear(highlightFn as any, 2023)).toBe(false);
        });

        it('should check highlight using config object', () => {
            const config = {
                months: [],
                years: [2024, 2025, 2026],
            };

            expect(utils.checkHighlightYear(config as any, 2024)).toBe(true);
            expect(utils.checkHighlightYear(config as any, 2025)).toBe(true);
            expect(utils.checkHighlightYear(config as any, 2023)).toBe(false);
        });

        it('should return false when year not in config', () => {
            const config = {
                months: [],
                years: [2020, 2021],
            };

            expect(utils.checkHighlightYear(config as any, 2024)).toBe(false);
        });
    });

    describe('handleEventPropagation', () => {
        it('should stop propagation when allowed', () => {
            const event = new KeyboardEvent('keydown');
            const stopPropagationSpy = vi.spyOn(event, 'stopPropagation');

            utils.handleEventPropagation(event, { allowStopPropagation: true, allowPreventDefault: false } as any);

            expect(stopPropagationSpy).toHaveBeenCalled();
        });

        it('should prevent default when allowed', () => {
            const event = new KeyboardEvent('keydown');
            const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

            utils.handleEventPropagation(event, { allowStopPropagation: false, allowPreventDefault: true } as any);

            expect(preventDefaultSpy).toHaveBeenCalled();
        });

        it('should do both when both allowed', () => {
            const event = new KeyboardEvent('keydown');
            const stopPropagationSpy = vi.spyOn(event, 'stopPropagation');
            const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

            utils.handleEventPropagation(event, { allowStopPropagation: true, allowPreventDefault: true } as any);

            expect(stopPropagationSpy).toHaveBeenCalled();
            expect(preventDefaultSpy).toHaveBeenCalled();
        });

        it('should do nothing when neither allowed', () => {
            const event = new KeyboardEvent('keydown');
            const stopPropagationSpy = vi.spyOn(event, 'stopPropagation');
            const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

            utils.handleEventPropagation(event, { allowStopPropagation: false, allowPreventDefault: false } as any);

            expect(stopPropagationSpy).not.toHaveBeenCalled();
            expect(preventDefaultSpy).not.toHaveBeenCalled();
        });
    });

    describe('getMapKey', () => {
        it('should format date with default format', () => {
            const date = new Date('2024-06-15');
            const key = utils.getMapKey(date);

            // Default format is dd-MM-yyyy
            expect(key).toBe('15-06-2024');
        });

        it('should format date with custom format', () => {
            const date = new Date('2024-06-15');
            const key = utils.getMapKey(date, MAP_KEY_FORMAT.MONTH_AND_YEAR);

            expect(key).toMatch(/06-2024/);
        });

        it('should format date with year format', () => {
            const date = new Date('2024-06-15');
            const key = utils.getMapKey(date, MAP_KEY_FORMAT.YEAR);

            expect(key).toBe('2024');
        });

        it('should handle string input', () => {
            const key = utils.getMapKey('2024-06-15');

            // Formats the ISO string
            expect(key).toMatch(/15-06-2024/);
        });

        it('should handle number input (timestamp)', () => {
            const timestamp = new Date('2024-06-15').getTime();
            const key = utils.getMapKey(timestamp);

            expect(key).toMatch(/15-06-2024/);
        });
    });

    describe('getNumVal', () => {
        it('should return 0 for 0', () => {
            expect(utils.getNumVal(0)).toBe(0);
        });

        it('should return null for null', () => {
            expect(utils.getNumVal(null)).toBe(null);
        });

        it('should return null for undefined', () => {
            expect(utils.getNumVal(undefined)).toBe(null);
        });

        it('should return null for empty string', () => {
            expect(utils.getNumVal('')).toBe(null);
        });

        it('should return null for non-numeric string', () => {
            expect(utils.getNumVal('abc')).toBe(null);
        });

        it('should convert numeric string to number', () => {
            expect(utils.getNumVal('42')).toBe(42);
            expect(utils.getNumVal('100')).toBe(100);
        });

        it('should return number as is', () => {
            expect(utils.getNumVal(42)).toBe(42);
            expect(utils.getNumVal(100)).toBe(100);
        });

        it('should handle negative numbers', () => {
            expect(utils.getNumVal(-5)).toBe(-5);
            expect(utils.getNumVal('-10')).toBe(-10);
        });

        it('should handle decimal numbers', () => {
            expect(utils.getNumVal(3.14)).toBe(3.14);
            expect(utils.getNumVal('2.5')).toBe(2.5);
        });
    });

    describe('getMapKeyType', () => {
        it('should return MONTH_AND_YEAR for month picker', () => {
            expect(utils.getMapKeyType(true, false)).toBe(MAP_KEY_FORMAT.MONTH_AND_YEAR);
        });

        it('should return YEAR for year picker', () => {
            expect(utils.getMapKeyType(false, true)).toBe(MAP_KEY_FORMAT.YEAR);
        });

        it('should return DATE for date picker (default)', () => {
            expect(utils.getMapKeyType(false, false)).toBe(MAP_KEY_FORMAT.DATE);
        });

        it('should prioritize month picker over year picker', () => {
            expect(utils.getMapKeyType(true, true)).toBe(MAP_KEY_FORMAT.MONTH_AND_YEAR);
        });

        it('should handle undefined values', () => {
            expect(utils.getMapKeyType(undefined, undefined)).toBe(MAP_KEY_FORMAT.DATE);
        });
    });

    describe('getMapDate', () => {
        it('should retrieve value from map using date key', () => {
            const map = new Map<string, string>();
            const date = new Date('2024-06-15');
            const key = utils.getMapKey(date); // Use the actual key format
            map.set(key, 'test-value');

            const result = utils.getMapDate(date, map);

            expect(result).toBe('test-value');
        });

        it('should return undefined for non-existent key', () => {
            const map = new Map<string, string>();

            const result = utils.getMapDate(new Date('2024-06-15'), map);

            expect(result).toBeUndefined();
        });

        it('should use custom format when provided', () => {
            const map = new Map<string, string>();
            const date = new Date('2024-06-15');
            const yearKey = utils.getMapKey(date, MAP_KEY_FORMAT.YEAR);
            map.set(yearKey, 'year-value');

            const result = utils.getMapDate(date, map, MAP_KEY_FORMAT.YEAR);

            expect(result).toBe('year-value');
        });

        it('should handle different value types', () => {
            const map = new Map<string, number>();
            const date = new Date('2024-06-15');
            const key = utils.getMapKey(date);
            map.set(key, 42);

            const result = utils.getMapDate(date, map);

            expect(result).toBe(42);
        });
    });

    describe('errorMapper', () => {
        it('should format prop error message', () => {
            expect(utils.errorMapper.prop('range')).toBe('"range" prop must be enabled!');
            expect(utils.errorMapper.prop('multiDates')).toBe('"multiDates" prop must be enabled!');
        });

        it('should format dateArr error message', () => {
            expect(utils.errorMapper.dateArr('range')).toBe(
                'You need to use array as "model-value" binding in order to support "range"',
            );
            expect(utils.errorMapper.dateArr('multiDates')).toBe(
                'You need to use array as "model-value" binding in order to support "multiDates"',
            );
        });
    });

    describe('convertType', () => {
        it('should convert value to specified type', () => {
            const value = '123';
            const result = utils.convertType<number>(value);

            expect(result).toBe('123'); // Type assertion, not actual conversion
        });

        it('should handle object conversion', () => {
            const obj = { key: 'value' };
            const result = utils.convertType<Record<string, string>>(obj);

            expect(result).toEqual(obj);
        });

        it('should handle null', () => {
            const result = utils.convertType<null>(null);

            expect(result).toBeNull();
        });
    });

    describe('isModelAuto', () => {
        it('should return true for array with both values', () => {
            const model = [new Date('2024-01-01'), new Date('2024-01-15')];

            expect(utils.isModelAuto(model)).toBe(true);
        });

        it('should return false for array with null first value', () => {
            const model = [null, new Date('2024-01-15')];

            expect(utils.isModelAuto(model as any)).toBe(false);
        });

        it('should return false for array with null second value', () => {
            const model = [new Date('2024-01-01'), null];

            expect(utils.isModelAuto(model as any)).toBe(false);
        });

        it('should return false for array with both null values', () => {
            const model = [null, null];

            expect(utils.isModelAuto(model as any)).toBe(false);
        });

        it('should return false for single date', () => {
            const model = new Date('2024-01-01');

            expect(utils.isModelAuto(model)).toBe(false);
        });

        it('should return false for null', () => {
            expect(utils.isModelAuto(null)).toBe(false);
        });
    });

    describe('matchDate', () => {
        it('should return true for null/undefined date', () => {
            expect(utils.matchDate(null as any, new Map())).toBe(true);
            expect(utils.matchDate(undefined as any, new Map())).toBe(true);
        });

        it('should return false for null/undefined mapOrFn', () => {
            const date = new Date('2024-06-15');

            expect(utils.matchDate(date, null)).toBe(false);
        });

        it('should match date using Map', () => {
            const date = new Date('2024-06-15');
            const map = new Map<string, Date>();
            const key = utils.getMapKey(date);
            map.set(key, date);

            expect(utils.matchDate(date, map)).toBe(true);
        });

        it('should return false when date not in Map', () => {
            const date = new Date('2024-06-15');
            const map = new Map<string, Date>();

            expect(utils.matchDate(date, map)).toBe(false);
        });

        it('should match date using function', () => {
            const date = new Date('2024-06-15');
            const matchFn = (d: Date) => d.getMonth() === 5;

            expect(utils.matchDate(date, matchFn)).toBe(true);
        });

        it('should return false when function returns false', () => {
            const date = new Date('2024-06-15');
            const matchFn = (d: Date) => d.getMonth() === 11;

            expect(utils.matchDate(date, matchFn)).toBe(false);
        });
    });

    describe('checkStopPropagation', () => {
        it('should stop propagation when allowed', () => {
            const event = new Event('click');
            const stopPropagationSpy = vi.spyOn(event, 'stopPropagation');

            utils.checkStopPropagation(event, { allowStopPropagation: true, allowPreventDefault: false } as any);

            expect(stopPropagationSpy).toHaveBeenCalled();
        });

        it('should stop immediate propagation when immediate flag is true', () => {
            const event = new Event('click');
            const stopImmediatePropagationSpy = vi.spyOn(event, 'stopImmediatePropagation');
            const stopPropagationSpy = vi.spyOn(event, 'stopPropagation');

            utils.checkStopPropagation(event, { allowStopPropagation: true, allowPreventDefault: false } as any, true);

            expect(stopImmediatePropagationSpy).toHaveBeenCalled();
            expect(stopPropagationSpy).toHaveBeenCalled();
        });

        it('should not stop propagation when not allowed', () => {
            const event = new Event('click');
            const stopPropagationSpy = vi.spyOn(event, 'stopPropagation');

            utils.checkStopPropagation(event, { allowStopPropagation: false, allowPreventDefault: false } as any);

            expect(stopPropagationSpy).not.toHaveBeenCalled();
        });

        it('should handle undefined event', () => {
            expect(() => {
                utils.checkStopPropagation(undefined, {
                    allowStopPropagation: true,
                    allowPreventDefault: false,
                } as any);
            }).not.toThrow();
        });
    });

    describe('checkKeyDown', () => {
        it('should call function on Enter key', () => {
            const fn = vi.fn();
            const event = new KeyboardEvent('keydown', { key: 'Enter' });

            utils.checkKeyDown(event, fn);

            expect(fn).toHaveBeenCalled();
        });

        it('should call function on Space key', () => {
            const fn = vi.fn();
            const event = new KeyboardEvent('keydown', { key: ' ' });

            utils.checkKeyDown(event, fn);

            expect(fn).toHaveBeenCalled();
        });

        it('should prevent default when flag is true', () => {
            const fn = vi.fn();
            const event = new KeyboardEvent('keydown', { key: 'Enter' });
            const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

            utils.checkKeyDown(event, fn, true);

            expect(preventDefaultSpy).toHaveBeenCalled();
            expect(fn).toHaveBeenCalled();
        });

        it('should not prevent default when flag is false', () => {
            const fn = vi.fn();
            const event = new KeyboardEvent('keydown', { key: 'Enter' });
            const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

            utils.checkKeyDown(event, fn, false);

            expect(preventDefaultSpy).not.toHaveBeenCalled();
            expect(fn).toHaveBeenCalled();
        });

        it('should call callback for non-Enter/Space keys', () => {
            const fn = vi.fn();
            const cb = vi.fn();
            const event = new KeyboardEvent('keydown', { key: 'Escape' });

            utils.checkKeyDown(event, fn, false, cb);

            expect(fn).not.toHaveBeenCalled();
            expect(cb).toHaveBeenCalledExactlyOnceWith(event);
        });

        it('should not call callback when not provided', () => {
            const fn = vi.fn();
            const event = new KeyboardEvent('keydown', { key: 'Escape' });

            utils.checkKeyDown(event, fn);

            expect(fn).not.toHaveBeenCalled();
        });
    });

    describe('checkMinMaxValue', () => {
        it('should return false when no min/max provided', () => {
            expect(utils.checkMinMaxValue(50)).toBe(false);
            expect(utils.checkMinMaxValue(50, undefined, undefined)).toBe(false);
        });

        it('should validate against max only', () => {
            expect(utils.checkMinMaxValue(60, undefined, 50)).toBe(true); // Above max
            expect(utils.checkMinMaxValue(40, undefined, 50)).toBe(false); // Below max
            expect(utils.checkMinMaxValue(50, undefined, 50)).toBe(false); // Equal to max
        });

        it('should validate against min only', () => {
            expect(utils.checkMinMaxValue(40, 50, undefined)).toBe(true); // Below min
            expect(utils.checkMinMaxValue(60, 50, undefined)).toBe(false); // Above min
            expect(utils.checkMinMaxValue(50, 50, undefined)).toBe(false); // Equal to min
        });

        it('should validate against both min and max', () => {
            expect(utils.checkMinMaxValue(25, 10, 50)).toBe(false); // In range
            expect(utils.checkMinMaxValue(5, 10, 50)).toBe(true); // Below min
            expect(utils.checkMinMaxValue(60, 10, 50)).toBe(true); // Above max
            expect(utils.checkMinMaxValue(10, 10, 50)).toBe(false); // Equal to min
            expect(utils.checkMinMaxValue(50, 10, 50)).toBe(false); // Equal to max
        });

        it('should handle string values', () => {
            expect(utils.checkMinMaxValue('60', 10, 50)).toBe(true); // Above max
            expect(utils.checkMinMaxValue('5', 10, 50)).toBe(true); // Below min
            expect(utils.checkMinMaxValue('25', 10, 50)).toBe(false); // In range
        });

        it('should handle null values as no constraint', () => {
            expect(utils.checkMinMaxValue(50, null as any, null as any)).toBe(false);
        });
    });

    describe('isTouchDevice', () => {
        it('should detect touch device', () => {
            // This test depends on the environment
            const result = utils.isTouchDevice();

            expect(typeof result).toBe('boolean');
        });
    });

    describe('hoursToAmPmHours', () => {
        it('should convert 0 to 12 AM', () => {
            expect(utils.hoursToAmPmHours(0)).toBe(12);
        });

        it('should convert 1-11 to same values AM', () => {
            expect(utils.hoursToAmPmHours(1)).toBe(1);
            expect(utils.hoursToAmPmHours(6)).toBe(6);
            expect(utils.hoursToAmPmHours(11)).toBe(11);
        });

        it('should convert 12 to 12 PM', () => {
            expect(utils.hoursToAmPmHours(12)).toBe(12);
        });

        it('should convert 13-23 to 1-11 PM', () => {
            expect(utils.hoursToAmPmHours(13)).toBe(1);
            expect(utils.hoursToAmPmHours(18)).toBe(6);
            expect(utils.hoursToAmPmHours(23)).toBe(11);
        });

        it('should handle edge cases', () => {
            expect(utils.hoursToAmPmHours(0)).toBe(12); // Midnight
            expect(utils.hoursToAmPmHours(12)).toBe(12); // Noon
        });
    });

    // Note: getGroupedList is a private function used internally by groupListAndMap
    // We test it indirectly through groupListAndMap

    describe('groupListAndMap', () => {
        it('should group and map items with callback', () => {
            const items = [
                { text: 'Jan', value: 0 },
                { text: 'Feb', value: 1 },
                { text: 'Mar', value: 2 },
            ];

            const cb = (item: any) => ({
                active: item.value === 1,
                disabled: item.value === 2,
                highlighted: false,
                isBetween: false,
            });

            const result = utils.groupListAndMap(items, cb);

            expect(result).toHaveLength(1);
            expect(result[0]).toHaveLength(3);
            expect(result[0]![0]!.active).toBe(false);
            expect(result[0]![1]!.active).toBe(true);
            expect(result[0]![2]!.disabled).toBe(true);
        });

        it('should apply correct className properties', () => {
            const items = [{ text: 'Jan', value: 0 }];

            const cb = () => ({
                active: true,
                disabled: false,
                highlighted: true,
                isBetween: false,
            });

            const result = utils.groupListAndMap(items, cb);

            expect(result[0]![0]!.className).toEqual({
                dp__overlay_cell_active: true,
                dp__overlay_cell: false,
                dp__overlay_cell_disabled: false,
                dp__overlay_cell_pad: true,
                dp__overlay_cell_active_disabled: false,
                dp__cell_in_between: false,
                'dp--highlighted': true,
            });
        });

        it('should handle active and disabled together', () => {
            const items = [{ text: 'Jan', value: 0 }];

            const cb = () => ({
                active: true,
                disabled: true,
                highlighted: false,
                isBetween: false,
            });

            const result = utils.groupListAndMap(items, cb);

            expect(result[0]![0]!.className.dp__overlay_cell_active_disabled).toBe(true);
        });

        it('should handle isBetween state', () => {
            const items = [{ text: 'Jan', value: 0 }];

            const cb = () => ({
                active: false,
                disabled: false,
                highlighted: false,
                isBetween: true,
            });

            const result = utils.groupListAndMap(items, cb);

            expect(result[0]![0]!.className.dp__cell_in_between).toBe(true);
        });

        it('should preserve original item properties', () => {
            const items = [{ text: 'Jan', value: 0, custom: 'data' }];

            const cb = () => ({
                active: false,
                disabled: false,
            });

            const result = utils.groupListAndMap(items, cb);

            expect(result[0]![0]).toHaveProperty('text', 'Jan');
            expect(result[0]![0]).toHaveProperty('value', 0);
            expect(result[0]![0]).toHaveProperty('custom', 'data');
        });
    });
});
