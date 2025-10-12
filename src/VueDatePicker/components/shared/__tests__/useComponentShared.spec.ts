import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ref, computed } from 'vue';
import { useComponentShared } from '../useComponentShared';

vi.mock('@/composables/useContext.ts', () => {
    const modelValueRef = ref(null);
    const rangeRef = ref({ enabled: false, partialRange: false, fixedStart: false, fixedEnd: false });

    const defaults: any = {
        range: computed(() => rangeRef.value),
    };

    return {
        useContext: () => ({
            rootEmit: vi.fn(),
            modelValue: modelValueRef,
            defaults,
            __mocks: { modelValueRef, rangeRef },
        }),
    };
});

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        getDate: (date: Date | string) => (typeof date === 'string' ? new Date(date) : date),
        isDateAfter: (date1: Date, date2: Date) => date1.getTime() > date2.getTime(),
        isDateBefore: (date1: Date, date2: Date) => date1.getTime() < date2.getTime(),
        isDateEqual: (date1: Date, date2: Date) => date1.getTime() === date2.getTime(),
    }),
}));

describe('useComponentShared', () => {
    let ctx: any;

    beforeEach(async () => {
        vi.clearAllMocks();
        const { useContext } = await import('@/composables/useContext.ts');
        ctx = useContext();
        ctx.__mocks.modelValueRef.value = null;
        ctx.__mocks.rangeRef.value = { enabled: false, partialRange: false, fixedStart: false, fixedEnd: false };
    });

    it('should initialize with all methods', () => {
        const shared = useComponentShared();

        expect(shared.handleMultiDatesSelect).toBeDefined();
        expect(shared.setMonthOrYearRange).toBeDefined();
        expect(shared.checkRangeAutoApply).toBeDefined();
        expect(shared.setPresetDate).toBeDefined();
        expect(shared.getRangeWithFixedDate).toBeDefined();
    });

    describe('handleMultiDatesSelect', () => {
        it('should add date to empty modelValue', () => {
            const shared = useComponentShared();
            const date = new Date(2024, 2, 15);

            shared.handleMultiDatesSelect(date);

            expect(ctx.modelValue.value).toEqual([date]);
        });

        it('should add date to existing array', () => {
            ctx.__mocks.modelValueRef.value = [new Date(2024, 2, 10)];
            const shared = useComponentShared();
            const date = new Date(2024, 2, 15);

            shared.handleMultiDatesSelect(date);

            expect(ctx.modelValue.value.length).toBe(2);
            expect(ctx.modelValue.value).toContain(date);
        });

        it('should remove date if already selected', () => {
            const date = new Date(2024, 2, 15);
            ctx.__mocks.modelValueRef.value = [new Date(2024, 2, 10), date];
            const shared = useComponentShared();

            shared.handleMultiDatesSelect(date);

            expect(ctx.modelValue.value.length).toBe(1);
            expect(ctx.modelValue.value).not.toContain(date);
        });

        it('should set modelValue to null when removing last date', () => {
            const date = new Date(2024, 2, 15);
            ctx.__mocks.modelValueRef.value = [date];
            const shared = useComponentShared();

            shared.handleMultiDatesSelect(date);

            expect(ctx.modelValue.value).toBeNull();
        });

        it('should respect multiDatesLimit', () => {
            ctx.__mocks.modelValueRef.value = [new Date(2024, 2, 10), new Date(2024, 2, 12)];
            const shared = useComponentShared();
            const date = new Date(2024, 2, 15);

            shared.handleMultiDatesSelect(date, 2);

            expect(ctx.modelValue.value.length).toBe(2);
            expect(ctx.modelValue.value).not.toContain(date);
        });

        it('should add date when within limit', () => {
            ctx.__mocks.modelValueRef.value = [new Date(2024, 2, 10)];
            const shared = useComponentShared();
            const date = new Date(2024, 2, 15);

            shared.handleMultiDatesSelect(date, 3);

            expect(ctx.modelValue.value.length).toBe(2);
            expect(ctx.modelValue.value).toContain(date);
        });
    });

    describe('setMonthOrYearRange', () => {
        it('should start new range', () => {
            const shared = useComponentShared();
            const date = new Date(2024, 2, 15);

            const result = shared.setMonthOrYearRange(date);

            expect(result).toEqual([date]);
        });

        it('should complete range with end date', () => {
            const startDate = new Date(2024, 2, 10);
            ctx.__mocks.modelValueRef.value = [startDate];
            const shared = useComponentShared();
            const endDate = new Date(2024, 2, 20);

            const result = shared.setMonthOrYearRange(endDate);

            expect(result).toEqual([startDate, endDate]);
        });

        it('should add date before start when selecting earlier date', () => {
            const startDate = new Date(2024, 2, 15);
            ctx.__mocks.modelValueRef.value = [startDate];
            const shared = useComponentShared();
            const earlierDate = new Date(2024, 2, 10);

            const result = shared.setMonthOrYearRange(earlierDate);

            expect(result).toEqual([earlierDate, startDate]);
        });

        it('should reset range when both dates are set', () => {
            ctx.__mocks.modelValueRef.value = [new Date(2024, 2, 10), new Date(2024, 2, 20)];
            const shared = useComponentShared();
            const newDate = new Date(2024, 2, 15);

            const result = shared.setMonthOrYearRange(newDate);

            expect(result).toEqual([newDate]);
        });
    });

    describe('checkRangeAutoApply', () => {
        const mockEmit = vi.fn();

        beforeEach(() => {
            mockEmit.mockClear();
        });

        it('should not emit when range is null', () => {
            const shared = useComponentShared();

            shared.checkRangeAutoApply(null as any, mockEmit, true, false);

            expect(mockEmit).not.toHaveBeenCalled();
        });

        it('should emit auto-apply when range is complete and autoApply is true', () => {
            const shared = useComponentShared();
            const range = [new Date(2024, 2, 10), new Date(2024, 2, 20)];

            shared.checkRangeAutoApply(range, mockEmit, true, false);

            expect(mockEmit).toHaveBeenCalledExactlyOnceWith('auto-apply');
        });

        it('should not emit when autoApply is false', () => {
            const shared = useComponentShared();
            const range = [new Date(2024, 2, 10), new Date(2024, 2, 20)];

            shared.checkRangeAutoApply(range, mockEmit, false, false);

            expect(mockEmit).not.toHaveBeenCalled();
        });

        it('should emit when range start only and modelAuto is true', () => {
            const shared = useComponentShared();
            const range = [new Date(2024, 2, 10), null as any];

            shared.checkRangeAutoApply(range, mockEmit, true, true);

            expect(mockEmit).toHaveBeenCalledExactlyOnceWith('auto-apply');
        });

        it('should not emit when range start only but modelAuto is false', () => {
            const shared = useComponentShared();
            const range = [new Date(2024, 2, 10), null as any];

            shared.checkRangeAutoApply(range, mockEmit, true, false);

            expect(mockEmit).not.toHaveBeenCalled();
        });
    });

    describe('setPresetDate', () => {
        it('should set single date', () => {
            const shared = useComponentShared();
            const date = new Date(2024, 2, 15);

            shared.setPresetDate({ value: date });

            expect(ctx.modelValue.value).toEqual(date);
        });

        it('should set date from string', () => {
            const shared = useComponentShared();
            const dateStr = '2024-03-15';

            shared.setPresetDate({ value: dateStr });

            expect(ctx.modelValue.value).toBeInstanceOf(Date);
        });

        it('should set range when range is enabled', () => {
            ctx.__mocks.rangeRef.value = { enabled: true, partialRange: false, fixedStart: false, fixedEnd: false };
            const shared = useComponentShared();
            const dates = [new Date(2024, 2, 10), new Date(2024, 2, 20)];

            shared.setPresetDate({ value: dates });

            expect(ctx.modelValue.value).toEqual(dates);
        });

        it('should not set array with more than 2 dates', () => {
            ctx.__mocks.rangeRef.value = { enabled: true, partialRange: false, fixedStart: false, fixedEnd: false };
            ctx.__mocks.modelValueRef.value = null;
            const shared = useComponentShared();
            const dates = [new Date(2024, 2, 10), new Date(2024, 2, 15), new Date(2024, 2, 20)];

            shared.setPresetDate({ value: dates });

            expect(ctx.modelValue.value).toBeNull();
        });
    });

    describe('getRangeWithFixedDate', () => {
        it('should return empty array when modelValue is not a range', () => {
            const shared = useComponentShared();
            const date = new Date(2024, 2, 15);

            const result = shared.getRangeWithFixedDate(date);

            expect(result).toEqual([]);
        });

        it('should return fixed start range', () => {
            ctx.__mocks.rangeRef.value = { enabled: true, partialRange: false, fixedStart: true, fixedEnd: false };
            const startDate = new Date(2024, 2, 10);
            ctx.__mocks.modelValueRef.value = [startDate, new Date(2024, 2, 20)];
            const shared = useComponentShared();
            const newDate = new Date(2024, 2, 25);

            const result = shared.getRangeWithFixedDate(newDate);

            expect(result).toEqual([startDate, newDate]);
        });

        it('should return fixed end range', () => {
            ctx.__mocks.rangeRef.value = { enabled: true, partialRange: false, fixedStart: false, fixedEnd: true };
            const endDate = new Date(2024, 2, 20);
            ctx.__mocks.modelValueRef.value = [new Date(2024, 2, 10), endDate];
            const shared = useComponentShared();
            const newDate = new Date(2024, 2, 5);

            const result = shared.getRangeWithFixedDate(newDate);

            expect(result).toEqual([newDate, endDate]);
        });

        it('should return current value when fixed start violated', () => {
            ctx.__mocks.rangeRef.value = { enabled: true, partialRange: false, fixedStart: true, fixedEnd: false };
            const startDate = new Date(2024, 2, 10);
            ctx.__mocks.modelValueRef.value = [startDate, new Date(2024, 2, 20)];
            const shared = useComponentShared();
            const invalidDate = new Date(2024, 2, 5);

            const result = shared.getRangeWithFixedDate(invalidDate);

            expect(result).toEqual(ctx.modelValue.value);
        });

        it('should return current value when fixed end violated', () => {
            ctx.__mocks.rangeRef.value = { enabled: true, partialRange: false, fixedStart: false, fixedEnd: true };
            const endDate = new Date(2024, 2, 20);
            ctx.__mocks.modelValueRef.value = [new Date(2024, 2, 10), endDate];
            const shared = useComponentShared();
            const invalidDate = new Date(2024, 2, 25);

            const result = shared.getRangeWithFixedDate(invalidDate);

            expect(result).toEqual(ctx.modelValue.value);
        });

        it('should handle partialRange with single date', () => {
            ctx.__mocks.rangeRef.value = { enabled: true, partialRange: true, fixedStart: true, fixedEnd: false };
            const startDate = new Date(2024, 2, 10);
            ctx.__mocks.modelValueRef.value = [startDate];
            const shared = useComponentShared();
            const newDate = new Date(2024, 2, 15);

            const result = shared.getRangeWithFixedDate(newDate);

            expect(result).toEqual([startDate, newDate]);
        });

        it('should accept equal date for fixed start', () => {
            ctx.__mocks.rangeRef.value = { enabled: true, partialRange: false, fixedStart: true, fixedEnd: false };
            const startDate = new Date(2024, 2, 10);
            ctx.__mocks.modelValueRef.value = [startDate, new Date(2024, 2, 20)];
            const shared = useComponentShared();

            const result = shared.getRangeWithFixedDate(startDate);

            expect(result).toEqual([startDate, startDate]);
        });

        it('should accept equal date for fixed end', () => {
            ctx.__mocks.rangeRef.value = { enabled: true, partialRange: false, fixedStart: false, fixedEnd: true };
            const endDate = new Date(2024, 2, 20);
            ctx.__mocks.modelValueRef.value = [new Date(2024, 2, 10), endDate];
            const shared = useComponentShared();

            const result = shared.getRangeWithFixedDate(endDate);

            expect(result).toEqual([endDate, endDate]);
        });
    });
});
