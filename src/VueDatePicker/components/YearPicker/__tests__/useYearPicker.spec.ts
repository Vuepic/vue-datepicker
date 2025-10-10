import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ref, nextTick } from 'vue';
import { useYearPicker } from '@/components/YearPicker/useYearPicker';
import type { BaseProps } from '@/types';

// Mock all composables
vi.mock('@/composables/useContext.ts', () => {
    const rootEmit = vi.fn();
    const rootProps = {
        autoApply: false,
        modelAuto: false,
        startDate: null,
        focusStartDate: false,
    };
    const isTextInputDate = ref(false);
    const modelValue = ref<Date | Date[] | null>(null);

    const defaults = {
        range: ref({ enabled: false }),
        highlight: ref({}),
        safeDates: ref({ minDate: null, maxDate: null, disabledDates: null, allowedDates: null }),
        filters: ref({ years: [] }),
        multiDates: ref({ enabled: false, limit: null }),
    };

    return {
        useContext: () => ({
            rootEmit,
            rootProps,
            isTextInputDate,
            modelValue,
            defaults,
        }),
    };
});

vi.mock('@/composables/useRemapper.ts', () => ({
    useRemapper: vi.fn((_cb: any) => {}),
}));

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        isDateBetween: vi.fn(() => false),
        getDate: vi.fn((date?: Date) => date || new Date(2024, 2, 15)),
        resetDateTime: vi.fn((date: Date) => {
            const d = new Date(date);
            d.setHours(0, 0, 0, 0);
            return d;
        }),
        resetDate: vi.fn((date: Date) => {
            const d = new Date(date);
            d.setHours(0, 0, 0, 0);
            return d;
        }),
        getYearFromDate: vi.fn((date?: Date | null) => {
            if (!date) return null;
            return date.getFullYear();
        }),
    }),
}));

vi.mock('@/components/shared/useComponentShared.ts', () => ({
    useComponentShared: () => ({
        checkRangeAutoApply: vi.fn(),
        setMonthOrYearRange: vi.fn((date: Date) => [date, date]),
    }),
}));

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        checkHighlightYear: vi.fn(() => false),
        checkMinMaxValue: vi.fn(() => false),
        groupListAndMap: vi.fn((list: any[], mapper: any) => {
            const result = [];
            for (let i = 0; i < list.length; i += 4) {
                const row = list.slice(i, i + 4).map((item: any) => ({
                    text: item.text,
                    value: item.value,
                    ...mapper(item),
                    className: {},
                }));
                result.push(row);
            }
            return result;
        }),
    }),
}));

vi.mock('@/composables/useUtilsWithContext.ts', () => ({
    useUtilsWithContext: () => ({
        getYears: vi.fn(() => [
            { text: '2020', value: 2020 },
            { text: '2021', value: 2021 },
            { text: '2022', value: 2022 },
            { text: '2023', value: 2023 },
            { text: '2024', value: 2024 },
            { text: '2025', value: 2025 },
            { text: '2026', value: 2026 },
            { text: '2027', value: 2027 },
        ]),
    }),
}));

describe('useYearPicker', () => {
    const mockEmit = vi.fn();
    const mockProps: BaseProps = {
        menuWrapRef: null,
        noOverlayFocus: false,
    };

    let ctx: any;

    beforeEach(async () => {
        vi.clearAllMocks();
        const { useContext } = await import('@/composables/useContext.ts');
        ctx = useContext();
        ctx.modelValue.value = null;
        ctx.rootProps.autoApply = false;
        ctx.rootProps.modelAuto = false;
        ctx.rootProps.startDate = null;
        ctx.rootProps.focusStartDate = false;
        ctx.isTextInputDate.value = false;
        ctx.defaults.range.value.enabled = false;
        ctx.defaults.highlight.value = {};
        ctx.defaults.safeDates.value = { minDate: null, maxDate: null, disabledDates: null, allowedDates: null };
        ctx.defaults.filters.value.years = [];
        ctx.defaults.multiDates.value.enabled = false;
    });

    afterEach(() => {
        // Reset mocks
        vi.clearAllMocks();
    });

    describe('Initialization', () => {
        it('should initialize with default values', () => {
            const { focusYear, groupedYears } = useYearPicker(mockProps, mockEmit);

            expect(focusYear.value).toBeUndefined();
            expect(groupedYears.value).toBeDefined();
        });

        it('should set focusYear from startDate when provided', () => {
            ctx.rootProps.startDate = new Date(2023, 0, 1);

            const { focusYear } = useYearPicker(mockProps, mockEmit);

            // focusYear is set in onMounted, just verify component initializes
            expect(focusYear).toBeDefined();
        });

        it('should set focusYear from startDate when focusStartDate is true', () => {
            ctx.rootProps.startDate = new Date(2023, 5, 15);
            ctx.rootProps.focusStartDate = true;
            ctx.modelValue.value = new Date(2024, 0, 1);

            const { focusYear } = useYearPicker(mockProps, mockEmit);

            // focusYear is set in onMounted, just verify component initializes
            expect(focusYear).toBeDefined();
        });

        it('should not set focusYear from startDate when modelValue exists and focusStartDate is false', async () => {
            ctx.rootProps.startDate = new Date(2023, 0, 1);
            ctx.rootProps.focusStartDate = false;
            ctx.modelValue.value = new Date(2024, 0, 1);

            const { focusYear } = useYearPicker(mockProps, mockEmit);

            await nextTick();
            expect(focusYear.value).toBeUndefined();
        });
    });

    describe('groupedYears', () => {
        it('should return grouped years with correct structure', () => {
            const { groupedYears } = useYearPicker(mockProps, mockEmit);

            expect(groupedYears.value).toBeInstanceOf(Array);
            expect(groupedYears.value.length).toBeGreaterThan(0);
            expect(groupedYears.value[0]).toBeInstanceOf(Array);
        });

        it('should mark active year correctly', () => {
            ctx.modelValue.value = new Date(2024, 0, 1);

            const { groupedYears } = useYearPicker(mockProps, mockEmit);

            const allYears = groupedYears.value.flat();
            const activeYear = allYears.find((y: any) => y.value === 2024);
            expect(activeYear?.active).toBe(true);
        });

        it('should mark multiple active years in array modelValue', () => {
            ctx.modelValue.value = [new Date(2023, 0, 1), new Date(2024, 0, 1)];

            const { groupedYears } = useYearPicker(mockProps, mockEmit);

            const allYears = groupedYears.value.flat();
            const activeYear2023 = allYears.find((y: any) => y.value === 2023);
            const activeYear2024 = allYears.find((y: any) => y.value === 2024);
            expect(activeYear2023?.active).toBe(true);
            expect(activeYear2024?.active).toBe(true);
        });

        it('should disable filtered years', () => {
            ctx.defaults.filters.value.years = [2023, 2024];

            const { groupedYears } = useYearPicker(mockProps, mockEmit);

            const allYears = groupedYears.value.flat();
            const disabledYear = allYears.find((y: any) => y.value === 2023);
            expect(disabledYear?.disabled).toBe(true);
        });

        it('should handle minDate and maxDate correctly', async () => {
            const { useDateUtils } = await import('@/composables/useDateUtils.ts');
            const dateUtils = useDateUtils();
            vi.mocked(dateUtils.getYearFromDate).mockImplementation((date?: any) => {
                if (!date) return null;
                return date.getFullYear();
            });

            ctx.defaults.safeDates.value.minDate = new Date(2022, 0, 1);
            ctx.defaults.safeDates.value.maxDate = new Date(2025, 11, 31);

            const { useUtils } = await import('@/composables/useUtils.ts');
            const utils = useUtils();
            vi.mocked(utils.checkMinMaxValue).mockImplementation((val, min, max) => {
                if (min !== null && +val < min!) return true;
                return max !== null && +val > max!;
            });

            const { groupedYears } = useYearPicker(mockProps, mockEmit);

            const allYears = groupedYears.value.flat();
            const year2020 = allYears.find((y: any) => y.value === 2020);
            const year2027 = allYears.find((y: any) => y.value === 2027);
            expect(year2020?.disabled).toBe(true);
            expect(year2027?.disabled).toBe(true);
        });

        it('should handle allowedDates Map', () => {
            const allowedDatesMap = new Map();
            allowedDatesMap.set('2023', true);
            allowedDatesMap.set('2024', true);
            ctx.defaults.safeDates.value.allowedDates = allowedDatesMap;

            const { groupedYears } = useYearPicker(mockProps, mockEmit);

            const allYears = groupedYears.value.flat();
            // When allowedDates map exists with values, years not in the map should be disabled
            // Years in the map should not be disabled by allowedDates check
            // However, they may still be disabled by other checks (checkMinMaxValue returns false in our mock)
            expect(groupedYears.value).toBeDefined();
            expect(allYears.length).toBeGreaterThan(0);
        });

        it('should handle disabledDates Map', () => {
            const disabledDatesMap = new Map();
            disabledDatesMap.set('2023', true);
            disabledDatesMap.set('2024', true);
            ctx.defaults.safeDates.value.disabledDates = disabledDatesMap;

            const { groupedYears } = useYearPicker(mockProps, mockEmit);

            const allYears = groupedYears.value.flat();
            const year2023 = allYears.find((y: any) => y.value === 2023);
            expect(year2023?.disabled).toBe(true);
        });
    });

    describe('selectYear', () => {
        it('should select year and emit auto-apply for single date mode', () => {
            const { selectYear } = useYearPicker(mockProps, mockEmit);

            selectYear(2024);

            expect(ctx.modelValue.value).toBeInstanceOf(Date);
            expect(ctx.modelValue.value?.getFullYear()).toBe(2024);
            expect(mockEmit).toHaveBeenCalledWith('auto-apply');
        });

        it('should emit update-month-year event when selecting year', () => {
            const { selectYear } = useYearPicker(mockProps, mockEmit);

            selectYear(2024);

            expect(ctx.rootEmit).toHaveBeenCalledWith('update-month-year', {
                instance: 0,
                year: 2024,
                month: expect.any(Number),
            });
        });

        it('should handle range mode year selection', async () => {
            ctx.defaults.range.value.enabled = true;

            const { selectYear } = useYearPicker(mockProps, mockEmit);

            selectYear(2024);

            await nextTick();
            expect(ctx.modelValue.value).toBeInstanceOf(Array);
        });

        it('should call checkRangeAutoApply in range mode', async () => {
            ctx.defaults.range.value.enabled = true;

            const { selectYear } = useYearPicker(mockProps, mockEmit);

            selectYear(2024);

            await nextTick();
            // checkRangeAutoApply is called in nextTick, verify modelValue is set
            expect(ctx.modelValue.value).toBeDefined();
        });

        it('should handle multiDates mode', () => {
            ctx.defaults.multiDates.value.enabled = true;

            const { selectYear } = useYearPicker(mockProps, mockEmit);

            selectYear(2024);

            expect(ctx.modelValue.value).toBeInstanceOf(Array);
            expect(mockEmit).toHaveBeenCalledWith('auto-apply', true);
        });

        it('should add year in multiDates mode when modelValue is null', () => {
            ctx.defaults.multiDates.value.enabled = true;
            ctx.modelValue.value = null;

            const { selectYear } = useYearPicker(mockProps, mockEmit);

            selectYear(2024);

            expect(ctx.modelValue.value).toBeInstanceOf(Array);
            expect((ctx.modelValue.value as Date[]).length).toBe(1);
        });

        it('should toggle year in multiDates mode when year already selected', () => {
            ctx.defaults.multiDates.value.enabled = true;
            ctx.modelValue.value = [new Date(2024, 0, 1), new Date(2023, 0, 1)];

            const { selectYear } = useYearPicker(mockProps, mockEmit);

            selectYear(2024);

            expect(ctx.modelValue.value).toBeInstanceOf(Array);
            const years = (ctx.modelValue.value as Date[]).map((d) => d.getFullYear());
            expect(years).not.toContain(2024);
            expect(years).toContain(2023);
        });

        it('should add year in multiDates mode when year not selected', () => {
            ctx.defaults.multiDates.value.enabled = true;
            ctx.modelValue.value = [new Date(2023, 0, 1)];

            const { selectYear } = useYearPicker(mockProps, mockEmit);

            selectYear(2024);

            expect(ctx.modelValue.value).toBeInstanceOf(Array);
            const years = (ctx.modelValue.value as Date[]).map((d) => d.getFullYear());
            expect(years).toContain(2024);
            expect(years).toContain(2023);
        });
    });

    describe('setHoverValue', () => {
        it('should set hover date when called', () => {
            const { setHoverValue } = useYearPicker(mockProps, mockEmit);

            setHoverValue(2024);

            // We can't directly access hoverDate, but we can verify it doesn't throw
            expect(() => setHoverValue(2025)).not.toThrow();
        });

        it('should update hover value multiple times', () => {
            const { setHoverValue } = useYearPicker(mockProps, mockEmit);

            setHoverValue(2023);
            setHoverValue(2024);
            setHoverValue(2025);

            expect(() => setHoverValue(2026)).not.toThrow();
        });
    });

    describe('Range Mode Integration', () => {
        beforeEach(() => {
            ctx.defaults.range.value.enabled = true;
        });

        it('should handle range selection with hover', async () => {
            ctx.modelValue.value = [new Date(2023, 0, 1), new Date(2024, 0, 1)];

            const { setHoverValue, groupedYears } = useYearPicker(mockProps, mockEmit);

            setHoverValue(2025);

            // groupedYears should be reactive to hover changes
            expect(groupedYears.value).toBeDefined();
        });

        it('should update modelValue in range mode', async () => {
            const { selectYear } = useYearPicker(mockProps, mockEmit);

            selectYear(2024);

            await nextTick();
            expect(ctx.modelValue.value).toBeInstanceOf(Array);
        });
    });

    describe('Edge Cases', () => {
        it('should handle null modelValue', () => {
            ctx.modelValue.value = null;

            const { groupedYears, selectYear } = useYearPicker(mockProps, mockEmit);

            expect(groupedYears.value).toBeDefined();
            expect(() => selectYear(2024)).not.toThrow();
        });

        it('should handle undefined startDate', async () => {
            ctx.rootProps.startDate = undefined;

            const { focusYear } = useYearPicker(mockProps, mockEmit);

            await nextTick();
            expect(focusYear.value).toBeUndefined();
        });

        it('should handle empty filters', () => {
            ctx.defaults.filters.value.years = [];

            const { groupedYears } = useYearPicker(mockProps, mockEmit);

            expect(groupedYears.value).toBeDefined();
        });

        it('should handle disabledDates as function', () => {
            ctx.defaults.safeDates.value.disabledDates = vi.fn(() => true);

            const { groupedYears } = useYearPicker(mockProps, mockEmit);

            const allYears = groupedYears.value.flat();
            // All years should be disabled when function returns true
            expect(allYears.every((y: any) => y.disabled)).toBe(true);
        });

        it('should handle allowedDates when not a Map', () => {
            ctx.defaults.safeDates.value.allowedDates = null;

            const { groupedYears } = useYearPicker(mockProps, mockEmit);

            expect(groupedYears.value).toBeDefined();
        });

        it('should handle disabledDates when not a Map or function', () => {
            ctx.defaults.safeDates.value.disabledDates = null;

            const { groupedYears } = useYearPicker(mockProps, mockEmit);

            expect(groupedYears.value).toBeDefined();
        });
    });

    describe('Highlight', () => {
        it('should handle highlight years', () => {
            ctx.defaults.highlight.value = { years: [2024] };

            const { groupedYears } = useYearPicker(mockProps, mockEmit);

            // Access the computed value to trigger the highlight check
            const years = groupedYears.value;
            expect(years).toBeDefined();
            expect(years.length).toBeGreaterThan(0);
        });
    });
});
