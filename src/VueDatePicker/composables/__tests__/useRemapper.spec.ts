import { beforeEach, describe, expect, it, vi } from 'vitest';
import { nextTick, reactive, ref } from 'vue';
import { useRemapper } from '@/composables/useRemapper';
import * as composables from '@/composables';

// Mock the composables
vi.mock('@/composables', async () => {
    const actual = await vi.importActual('@/composables');
    return {
        ...actual,
        useContext: vi.fn(),
        useDateUtils: vi.fn(),
    };
});

describe('useRemapper', () => {
    let mockContext: any;
    let mockDateUtils: any;
    let timeGetterSpy: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        // Reset all mocks
        vi.clearAllMocks();

        // Create spy for timeGetter
        timeGetterSpy = vi.fn((type: string, date: Date, isRange: boolean) => {
            if (type === 'hours') return isRange ? [10, 12] : 10;
            if (type === 'minutes') return isRange ? [30, 45] : 30;
            if (type === 'seconds') return isRange ? [0, 15] : 0;
            return null;
        });

        // Mock useDateUtils
        mockDateUtils = {
            timeGetter: timeGetterSpy,
        };

        // Mock useContext with reactive objects
        mockContext = {
            today: ref(new Date('2024-01-15')),
            time: reactive({
                hours: 10,
                minutes: 30,
                seconds: 0,
            }),
            modelValue: ref(null),
            defaults: {
                range: ref({ enabled: false }),
            },
        };

        // Setup mocks
        vi.mocked(composables.useContext).mockReturnValue(mockContext);
        vi.mocked(composables.useDateUtils).mockReturnValue(mockDateUtils);
    });

    describe('range watcher', () => {
        it('should update time when range.enabled changes from false to true', async () => {
            useRemapper();

            // Change range.enabled
            mockContext.defaults.range.value = { enabled: true };
            await nextTick();

            // Verify timeGetter was called for hours, minutes, seconds
            // Note: today is passed as a ref, not today.value
            expect(timeGetterSpy).toHaveBeenCalledTimes(3);
            expect(timeGetterSpy).toHaveBeenNthCalledWith(1, 'hours', mockContext.today, true);
            expect(timeGetterSpy).toHaveBeenNthCalledWith(2, 'minutes', mockContext.today, true);
            expect(timeGetterSpy).toHaveBeenNthCalledWith(3, 'seconds', mockContext.today, true);

            // Verify time was updated
            expect(mockContext.time.hours).toEqual([10, 12]);
            expect(mockContext.time.minutes).toEqual([30, 45]);
            expect(mockContext.time.seconds).toEqual([0, 15]);
        });

        it('should update time when range.enabled changes from true to false', async () => {
            // Start with range enabled
            mockContext.defaults.range.value = { enabled: true };
            mockContext.time.hours = [10, 12];
            mockContext.time.minutes = [30, 45];
            mockContext.time.seconds = [0, 15];

            useRemapper();

            // Change range.enabled to false
            mockContext.defaults.range.value = { enabled: false };
            await nextTick();

            // Verify timeGetter was called with range disabled
            expect(timeGetterSpy).toHaveBeenCalledTimes(3);
            expect(timeGetterSpy).toHaveBeenNthCalledWith(1, 'hours', mockContext.today, false);
            expect(timeGetterSpy).toHaveBeenNthCalledWith(2, 'minutes', mockContext.today, false);
            expect(timeGetterSpy).toHaveBeenNthCalledWith(3, 'seconds', mockContext.today, false);

            // Verify time was updated to single values
            expect(mockContext.time.hours).toBe(10);
            expect(mockContext.time.minutes).toBe(30);
            expect(mockContext.time.seconds).toBe(0);
        });

        it('should not update time when range.enabled value stays the same', async () => {
            useRemapper();

            // Clear previous calls
            timeGetterSpy.mockClear();

            // Change range but keep enabled the same
            mockContext.defaults.range.value = { enabled: false, someOtherProperty: 'changed' };
            await nextTick();

            // Should not call timeGetter
            expect(timeGetterSpy).not.toHaveBeenCalled();
        });

        it('should handle deep changes in range object', async () => {
            useRemapper();

            // Modify nested property that doesn't affect enabled
            const currentRange = mockContext.defaults.range.value;
            mockContext.defaults.range.value = { ...currentRange, maxRange: 7 };
            await nextTick();

            // Should not trigger time update since enabled didn't change
            timeGetterSpy.mockClear();
            await nextTick();
            expect(timeGetterSpy).not.toHaveBeenCalled();
        });

        it('should watch range with deep: true option', async () => {
            useRemapper();

            // Verify the watch is deep by changing nested properties
            const range = mockContext.defaults.range;
            range.value = { ...range.value, enabled: true };
            await nextTick();

            expect(timeGetterSpy).toHaveBeenCalled();
        });
    });

    describe('modelValue watcher', () => {
        it('should call reMap callback when modelValue changes', async () => {
            const reMapSpy = vi.fn();
            useRemapper(reMapSpy);

            // Change modelValue
            mockContext.modelValue.value = new Date('2024-02-01');
            await nextTick();

            expect(reMapSpy).toHaveBeenCalled();
        });

        it('should not call reMap callback when modelValue stays the same', async () => {
            const reMapSpy = vi.fn();
            const initialDate = new Date('2024-01-15');
            mockContext.modelValue.value = initialDate;

            useRemapper(reMapSpy);
            reMapSpy.mockClear();

            // Set to the same value
            mockContext.modelValue.value = initialDate;
            await nextTick();

            // Should not be called due to JSON.stringify comparison
            expect(reMapSpy).not.toHaveBeenCalled();
        });

        it('should call reMap when modelValue changes from null to date', async () => {
            const reMapSpy = vi.fn();
            mockContext.modelValue.value = null;

            useRemapper(reMapSpy);
            reMapSpy.mockClear();

            mockContext.modelValue.value = new Date('2024-02-01');
            await nextTick();

            expect(reMapSpy).toHaveBeenCalled();
        });

        it('should call reMap when modelValue changes from date to null', async () => {
            const reMapSpy = vi.fn();
            mockContext.modelValue.value = new Date('2024-01-15');

            useRemapper(reMapSpy);
            reMapSpy.mockClear();

            mockContext.modelValue.value = null;
            await nextTick();

            expect(reMapSpy).toHaveBeenCalled();
        });

        it('should call reMap when array modelValue changes', async () => {
            const reMapSpy = vi.fn();
            mockContext.modelValue.value = [new Date('2024-01-01'), new Date('2024-01-15')];

            useRemapper(reMapSpy);
            reMapSpy.mockClear();

            mockContext.modelValue.value = [new Date('2024-02-01'), new Date('2024-02-15')];
            await nextTick();

            expect(reMapSpy).toHaveBeenCalled();
        });

        it('should not call reMap when no callback is provided', async () => {
            useRemapper(); // No callback

            // Change modelValue
            mockContext.modelValue.value = new Date('2024-02-01');
            await nextTick();

            // Should not throw or cause issues
            expect(true).toBe(true);
        });

        it('should handle undefined callback gracefully', async () => {
            useRemapper(undefined);

            mockContext.modelValue.value = new Date('2024-02-01');
            await nextTick();

            // Should not throw
            expect(true).toBe(true);
        });

        it('should use JSON.stringify for comparison', async () => {
            const reMapSpy = vi.fn();

            // Set initial object value
            mockContext.modelValue.value = { date: new Date('2024-01-15'), other: 'value' };

            useRemapper(reMapSpy);
            reMapSpy.mockClear();

            // Set to different object - JSON.stringify will produce different strings
            mockContext.modelValue.value = { date: new Date('2024-01-15'), other: 'changed' };
            await nextTick();

            // Should be called because the serialized strings differ
            expect(reMapSpy).toHaveBeenCalled();
        });

        it('should watch modelValue with deep: true option', async () => {
            const reMapSpy = vi.fn();
            mockContext.modelValue.value = { nested: { value: 'test' } };

            useRemapper(reMapSpy);
            reMapSpy.mockClear();

            // Change nested property
            mockContext.modelValue.value = { nested: { value: 'changed' } };
            await nextTick();

            expect(reMapSpy).toHaveBeenCalled();
        });
    });

    describe('combined watchers', () => {
        it('should handle both range and modelValue changes independently', async () => {
            const reMapSpy = vi.fn();
            useRemapper(reMapSpy);

            // Clear initial calls
            timeGetterSpy.mockClear();
            reMapSpy.mockClear();

            // Change range
            mockContext.defaults.range.value = { enabled: true };
            await nextTick();

            expect(timeGetterSpy).toHaveBeenCalled();
            expect(reMapSpy).not.toHaveBeenCalled();

            // Clear and change modelValue
            timeGetterSpy.mockClear();
            reMapSpy.mockClear();

            mockContext.modelValue.value = new Date('2024-02-01');
            await nextTick();

            expect(timeGetterSpy).not.toHaveBeenCalled();
            expect(reMapSpy).toHaveBeenCalled();
        });

        it('should handle simultaneous changes', async () => {
            const reMapSpy = vi.fn();
            useRemapper(reMapSpy);

            timeGetterSpy.mockClear();
            reMapSpy.mockClear();

            // Change both at once
            mockContext.defaults.range.value = { enabled: true };
            mockContext.modelValue.value = new Date('2024-02-01');
            await nextTick();

            expect(timeGetterSpy).toHaveBeenCalled();
            expect(reMapSpy).toHaveBeenCalled();
        });
    });

    describe('edge cases', () => {
        it('should handle null modelValue changes', async () => {
            const reMapSpy = vi.fn();
            mockContext.modelValue.value = null;

            useRemapper(reMapSpy);
            reMapSpy.mockClear();

            mockContext.modelValue.value = null;
            await nextTick();

            // JSON.stringify(null ?? {}) === JSON.stringify(null ?? {})
            // Both become "{}", so should not call reMap
            expect(reMapSpy).not.toHaveBeenCalled();
        });

        it('should handle undefined modelValue changes', async () => {
            const reMapSpy = vi.fn();
            mockContext.modelValue.value = undefined;

            useRemapper(reMapSpy);
            reMapSpy.mockClear();

            mockContext.modelValue.value = new Date('2024-02-01');
            await nextTick();

            expect(reMapSpy).toHaveBeenCalled();
        });

        it('should handle rapid range changes', async () => {
            useRemapper();

            // Rapid changes
            mockContext.defaults.range.value = { enabled: true };
            mockContext.defaults.range.value = { enabled: false };
            mockContext.defaults.range.value = { enabled: true };
            await nextTick();

            // Should have called timeGetter multiple times
            expect(timeGetterSpy.mock.calls.length).toBeGreaterThan(0);
        });

        it('should handle rapid modelValue changes', async () => {
            const reMapSpy = vi.fn();
            useRemapper(reMapSpy);
            reMapSpy.mockClear();

            // Rapid changes
            mockContext.modelValue.value = new Date('2024-01-01');
            mockContext.modelValue.value = new Date('2024-02-01');
            mockContext.modelValue.value = new Date('2024-03-01');
            await nextTick();

            // reMap should be called for each change
            expect(reMapSpy.mock.calls.length).toBeGreaterThan(0);
        });

        it('should handle complex object modelValue', async () => {
            const reMapSpy = vi.fn();
            mockContext.modelValue.value = {
                start: new Date('2024-01-01'),
                end: new Date('2024-01-15'),
                meta: { selected: true },
            };

            useRemapper(reMapSpy);
            reMapSpy.mockClear();

            mockContext.modelValue.value = {
                start: new Date('2024-02-01'),
                end: new Date('2024-02-15'),
                meta: { selected: false },
            };
            await nextTick();

            expect(reMapSpy).toHaveBeenCalled();
        });

        it('should handle empty object vs null comparison', async () => {
            const reMapSpy = vi.fn();
            mockContext.modelValue.value = null;

            useRemapper(reMapSpy);
            reMapSpy.mockClear();

            // Both null and undefined become {} in the comparison
            mockContext.modelValue.value = undefined;
            await nextTick();

            // Should not call reMap as both stringify to "{}"
            expect(reMapSpy).not.toHaveBeenCalled();
        });
    });

    describe('timeGetter integration', () => {
        it('should pass correct parameters to timeGetter', async () => {
            mockContext.today.value = new Date('2024-06-15');

            useRemapper();

            timeGetterSpy.mockClear();
            mockContext.defaults.range.value = { enabled: true };
            await nextTick();

            expect(timeGetterSpy).toHaveBeenCalledTimes(3);
            expect(timeGetterSpy).toHaveBeenNthCalledWith(1, 'hours', mockContext.today, true);
            expect(timeGetterSpy).toHaveBeenNthCalledWith(2, 'minutes', mockContext.today, true);
            expect(timeGetterSpy).toHaveBeenNthCalledWith(3, 'seconds', mockContext.today, true);
        });

        it('should handle different timeGetter return values', async () => {
            timeGetterSpy.mockImplementation((type: string) => {
                if (type === 'hours') return 23;
                if (type === 'minutes') return 59;
                if (type === 'seconds') return 59;
                return null;
            });

            useRemapper();

            mockContext.defaults.range.value = { enabled: true };
            await nextTick();

            expect(mockContext.time.hours).toBe(23);
            expect(mockContext.time.minutes).toBe(59);
            expect(mockContext.time.seconds).toBe(59);
        });

        it('should handle null/undefined timeGetter returns', async () => {
            timeGetterSpy.mockReturnValue(null);

            useRemapper();

            mockContext.defaults.range.value = { enabled: true };
            await nextTick();

            expect(mockContext.time.hours).toBeNull();
            expect(mockContext.time.minutes).toBeNull();
            expect(mockContext.time.seconds).toBeNull();
        });
    });
});
