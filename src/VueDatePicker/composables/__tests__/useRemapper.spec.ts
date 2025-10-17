import { beforeEach, describe, expect, it, vi } from 'vitest';
import { computed, nextTick, ref } from 'vue';
import { useRemapper } from '@/composables/useRemapper';

// Mock useDateUtils
const mockSetTimeModelValue = vi.fn();
vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        setTimeModelValue: mockSetTimeModelValue,
    }),
}));

// Mock useContext with configurable state
let mockToday: any;
let mockTime: any;
let mockModelValue: any;
let mockRangeEnabled: any;

vi.mock('@/composables/useContext.ts', () => ({
    useContext: () => ({
        today: mockToday,
        time: mockTime,
        modelValue: mockModelValue,
        defaults: {
            range: computed(() => ({ enabled: mockRangeEnabled.value })),
        },
    }),
}));

describe('useRemapper', () => {
    beforeEach(() => {
        // Create fresh refs for each test to avoid watcher accumulation
        mockToday = ref<Date>(new Date('2024-01-15T00:00:00'));
        mockTime = ref<any>({ hours: 0, minutes: 0, seconds: 0 });
        mockModelValue = ref<any>(null);
        mockRangeEnabled = ref<boolean>(false);
        vi.clearAllMocks();
    });

    describe('range.enabled watcher', () => {
        it('should call setTimeModelValue when range.enabled changes from false to true', async () => {
            useRemapper();

            // Change range.enabled
            mockRangeEnabled.value = true;
            await nextTick();

            expect(mockSetTimeModelValue).toHaveBeenCalledExactlyOnceWith(
                mockTime,
                mockModelValue.value,
                mockToday,
                true,
            );
        });

        it('should call setTimeModelValue when range.enabled changes from true to false', async () => {
            mockRangeEnabled.value = true;
            useRemapper();

            // Clear the initial call if any
            mockSetTimeModelValue.mockClear();

            // Change range.enabled
            mockRangeEnabled.value = false;
            await nextTick();

            expect(mockSetTimeModelValue).toHaveBeenCalledExactlyOnceWith(
                mockTime,
                mockModelValue.value,
                mockToday,
                false,
            );
        });

        it('should not call setTimeModelValue when range.enabled stays the same', async () => {
            useRemapper();
            mockSetTimeModelValue.mockClear();

            // Trigger a re-render without changing enabled value
            mockTime.value = { hours: 10, minutes: 30, seconds: 0 };
            await nextTick();

            expect(mockSetTimeModelValue).not.toHaveBeenCalled();
        });

        it('should pass current context values to setTimeModelValue', async () => {
            const testDate = new Date('2024-03-20T12:00:00');
            const testTime = { hours: 14, minutes: 30, seconds: 45 };

            mockToday.value = testDate;
            mockTime.value = testTime;
            mockModelValue.value = testDate;

            useRemapper();

            mockRangeEnabled.value = true;
            await nextTick();

            expect(mockSetTimeModelValue).toHaveBeenCalledExactlyOnceWith(mockTime, testDate, mockToday, true);
        });
    });

    describe('modelValue watcher', () => {
        it('should call reMap callback when modelValue changes', async () => {
            const reMapCallback = vi.fn();
            useRemapper(reMapCallback);

            mockModelValue.value = new Date('2024-05-20T10:00:00');
            await nextTick();

            expect(reMapCallback).toHaveBeenCalledExactlyOnceWith();
        });

        it('should not call reMap when callback is not provided', async () => {
            const reMapCallback = vi.fn();
            useRemapper(); // No callback provided

            mockModelValue.value = new Date('2024-05-20T10:00:00');
            await nextTick();

            expect(reMapCallback).not.toHaveBeenCalled();
        });

        it('should call reMap when modelValue changes from null to a date', async () => {
            const reMapCallback = vi.fn();
            mockModelValue.value = null;

            useRemapper(reMapCallback);
            reMapCallback.mockClear();

            mockModelValue.value = new Date('2024-06-15T08:30:00');
            await nextTick();

            expect(reMapCallback).toHaveBeenCalledExactlyOnceWith();
        });

        it('should call reMap when modelValue changes from a date to null', async () => {
            const reMapCallback = vi.fn();
            mockModelValue.value = new Date('2024-06-15T08:30:00');

            useRemapper(reMapCallback);
            reMapCallback.mockClear();

            mockModelValue.value = null;
            await nextTick();

            expect(reMapCallback).toHaveBeenCalledExactlyOnceWith();
        });

        it('should call reMap when array modelValue changes', async () => {
            const reMapCallback = vi.fn();
            mockModelValue.value = [new Date('2024-01-01'), new Date('2024-01-10')];

            useRemapper(reMapCallback);
            reMapCallback.mockClear();

            mockModelValue.value = [new Date('2024-02-01'), new Date('2024-02-10')];
            await nextTick();

            expect(reMapCallback).toHaveBeenCalledExactlyOnceWith();
        });

        it('should not call reMap when modelValue changes to the same value', async () => {
            const reMapCallback = vi.fn();
            const sameDate = new Date('2024-07-01T00:00:00');
            mockModelValue.value = sameDate;

            useRemapper(reMapCallback);
            reMapCallback.mockClear();

            // Set to the same date object
            mockModelValue.value = sameDate;
            await nextTick();

            // Should not be called because JSON.stringify of the same date is equal
            expect(reMapCallback).not.toHaveBeenCalled();
        });

        it('should not call reMap when modelValue deeply changes but JSON is equivalent', async () => {
            const reMapCallback = vi.fn();
            const date1 = new Date('2024-07-01T12:00:00');
            mockModelValue.value = date1;

            useRemapper(reMapCallback);
            reMapCallback.mockClear();

            // Create a new date object with the same timestamp
            mockModelValue.value = new Date(date1.getTime());
            await nextTick();

            // Should not be called because JSON.stringify produces the same result
            expect(reMapCallback).not.toHaveBeenCalled();
        });

        it('should handle nested array changes in modelValue', async () => {
            const reMapCallback = vi.fn();
            mockModelValue.value = [new Date('2024-01-01')];

            useRemapper(reMapCallback);
            reMapCallback.mockClear();

            // Modify array by adding an element
            mockModelValue.value = [new Date('2024-01-01'), new Date('2024-01-15')];
            await nextTick();

            expect(reMapCallback).toHaveBeenCalledExactlyOnceWith();
        });

        it('should handle complex object changes', async () => {
            const reMapCallback = vi.fn();
            mockModelValue.value = { month: 5, year: 2024 };

            useRemapper(reMapCallback);
            reMapCallback.mockClear();

            mockModelValue.value = { month: 6, year: 2024 };
            await nextTick();

            expect(reMapCallback).toHaveBeenCalledExactlyOnceWith();
        });

        it('should handle undefined to null transition', async () => {
            const reMapCallback = vi.fn();
            mockModelValue.value = undefined;

            useRemapper(reMapCallback);
            reMapCallback.mockClear();

            mockModelValue.value = null;
            await nextTick();

            // Both undefined and null are handled as {} in JSON.stringify comparison
            // so this should not trigger reMap
            expect(reMapCallback).not.toHaveBeenCalled();
        });
    });

    describe('both watchers working together', () => {
        it('should handle both range.enabled and modelValue changes independently', async () => {
            const reMapCallback = vi.fn();
            useRemapper(reMapCallback);

            // Change range.enabled
            mockRangeEnabled.value = true;
            await nextTick();
            expect(mockSetTimeModelValue).toHaveBeenCalledExactlyOnceWith(
                mockTime,
                mockModelValue.value,
                mockToday,
                true,
            );

            mockSetTimeModelValue.mockClear();

            // Change modelValue
            mockModelValue.value = new Date('2024-08-10T10:00:00');
            await nextTick();
            expect(reMapCallback).toHaveBeenCalledExactlyOnceWith();
            expect(mockSetTimeModelValue).not.toHaveBeenCalled();
        });

        it('should handle simultaneous changes', async () => {
            const reMapCallback = vi.fn();
            useRemapper(reMapCallback);

            mockSetTimeModelValue.mockClear();
            reMapCallback.mockClear();

            // Change both at the same time
            mockRangeEnabled.value = true;
            mockModelValue.value = new Date('2024-09-01T15:00:00');
            await nextTick();

            expect(mockSetTimeModelValue).toHaveBeenCalledExactlyOnceWith(
                mockTime,
                mockModelValue.value,
                mockToday,
                true,
            );
            expect(reMapCallback).toHaveBeenCalledExactlyOnceWith();
        });
    });

    describe('edge cases', () => {
        it('should handle multiple rapid changes to modelValue', async () => {
            const reMapCallback = vi.fn();
            useRemapper(reMapCallback);

            reMapCallback.mockClear();

            mockModelValue.value = new Date('2024-10-01');
            await nextTick();

            mockModelValue.value = new Date('2024-10-02');
            await nextTick();

            mockModelValue.value = new Date('2024-10-03');
            await nextTick();

            expect(reMapCallback).toHaveBeenCalledTimes(3);
        });

        it('should handle multiple rapid changes to range.enabled', async () => {
            useRemapper();

            mockRangeEnabled.value = true;
            await nextTick();

            mockRangeEnabled.value = false;
            await nextTick();

            mockRangeEnabled.value = true;
            await nextTick();

            expect(mockSetTimeModelValue).toHaveBeenCalledTimes(3);
        });

        it('should handle empty array modelValue', async () => {
            const reMapCallback = vi.fn();
            mockModelValue.value = [new Date('2024-01-01')];

            useRemapper(reMapCallback);
            reMapCallback.mockClear();

            mockModelValue.value = [];
            await nextTick();

            expect(reMapCallback).toHaveBeenCalledExactlyOnceWith();
        });

        it('should handle time object modelValue', async () => {
            const reMapCallback = vi.fn();
            mockModelValue.value = { hours: 10, minutes: 30, seconds: 0 };

            useRemapper(reMapCallback);
            reMapCallback.mockClear();

            mockModelValue.value = { hours: 11, minutes: 45, seconds: 30 };
            await nextTick();

            expect(reMapCallback).toHaveBeenCalledExactlyOnceWith();
        });
    });
});
