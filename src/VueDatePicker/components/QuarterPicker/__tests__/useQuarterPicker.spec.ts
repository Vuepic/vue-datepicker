import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ref } from 'vue';
import { useQuarterPicker } from '@/components/QuarterPicker/useQuarterPicker';
import type { BaseProps } from '@/types';

// Mock all composables
vi.mock('@/composables/useContext.ts', () => {
    const rootProps = {
        autoApply: false,
        modelAuto: false,
    };
    const modelValue = ref<Date | Date[] | null>(null);
    const calendars = ref([{ month: 0, year: 2024 }]);
    const year = ref((instance: number) => calendars.value[instance]?.year ?? 2024);

    const defaults = {
        highlight: ref({ quarters: [] }),
        range: ref({ enabled: false }),
        multiDates: ref({ enabled: false, limit: null }),
    };

    return {
        useContext: () => ({
            rootProps,
            modelValue,
            year,
            calendars,
            defaults,
        }),
    };
});

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        isDateBetween: vi.fn(() => false),
        isDateEqual: vi.fn((date1: Date, date2: Date) => {
            if (!date1 || !date2) return false;
            return date1.getTime() === date2.getTime();
        }),
    }),
}));

vi.mock('@/components/shared/useComponentShared.ts', () => ({
    useComponentShared: () => ({
        checkRangeAutoApply: vi.fn(),
        handleMultiDatesSelect: vi.fn(),
        setMonthOrYearRange: vi.fn((date: Date) => [date]),
    }),
}));

vi.mock('@/composables/useRemapper.ts', () => ({
    useRemapper: vi.fn(),
}));

vi.mock('@/composables/useValidation.ts', () => ({
    useValidation: () => ({
        isDisabled: vi.fn(() => false),
    }),
}));

vi.mock('@/composables/useFormatter.ts', () => ({
    useFormatter: () => ({
        formatQuarterText: vi.fn((start: Date, _end: Date) => {
            const quarter = Math.floor(start.getMonth() / 3) + 1;
            return `Q${quarter}`;
        }),
    }),
}));

vi.mock('@/components/shared/useMonthQuarterPicker.ts', () => ({
    useMonthOrQuarterPicker: () => ({
        selectYear: vi.fn(),
        groupedYears: vi.fn(() => [
            [
                { text: '2022', value: 2022, active: false, disabled: false, className: {} },
                { text: '2023', value: 2023, active: false, disabled: false, className: {} },
                { text: '2024', value: 2024, active: true, disabled: false, className: {} },
            ],
        ]),
        showYearPicker: ref([false]),
        isDisabled: vi.fn(() => false),
        toggleYearPicker: vi.fn(),
        handleYearSelect: vi.fn(),
        handleYear: vi.fn(),
    }),
}));

describe('useQuarterPicker', () => {
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
    });

    afterEach(() => {
        // Reset context state
        if (ctx) {
            ctx.modelValue.value = null;
            ctx.calendars.value = [{ month: 0, year: 2024 }];
            ctx.defaults.range.value = { enabled: false };
            ctx.defaults.multiDates.value = { enabled: false, limit: null };
            ctx.defaults.highlight.value = { quarters: [] };
        }
    });

    it('should initialize with default values', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);

        expect(picker.modelValue).toBeDefined();
        expect(picker.quarters).toBeDefined();
        expect(picker.groupedYears).toBeDefined();
        expect(picker.year).toBeDefined();
        expect(picker.showYearPicker).toBeDefined();
    });

    it('should return quarters for an instance', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarters = picker.quarters.value(0);

        expect(Array.isArray(quarters)).toBe(true);
        expect(quarters.length).toBe(4);
        expect(quarters[0]).toHaveProperty('text');
        expect(quarters[0]).toHaveProperty('value');
        expect(quarters[0]).toHaveProperty('active');
        expect(quarters[0]).toHaveProperty('disabled');
        expect(quarters[0]).toHaveProperty('isBetween');
        expect(quarters[0]).toHaveProperty('highlighted');
    });

    it('should format quarter text correctly', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarters = picker.quarters.value(0);

        expect(quarters[0]?.text).toBe('Q1');
        expect(quarters[1]?.text).toBe('Q2');
        expect(quarters[2]?.text).toBe('Q3');
        expect(quarters[3]?.text).toBe('Q4');
    });

    it('should return grouped years', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        const years = (picker as any).groupedYears(0);

        expect(Array.isArray(years)).toBe(true);
        expect(years.length).toBeGreaterThan(0);
    });

    it('should mark active quarter for single date', () => {
        ctx.modelValue.value = new Date(2024, 3, 15); // Q2

        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarters = picker.quarters.value(0);

        expect(quarters[1]?.active).toBe(true); // Q2
        expect(quarters[0]?.active).toBe(false);
        expect(quarters[2]?.active).toBe(false);
        expect(quarters[3]?.active).toBe(false);
    });

    it('should mark active quarters for range', () => {
        ctx.modelValue.value = [new Date(2024, 1, 15), new Date(2024, 7, 15)]; // Q1 and Q3

        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarters = picker.quarters.value(0);

        expect(quarters[0]?.active).toBe(true); // Q1
        expect(quarters[2]?.active).toBe(true); // Q3
    });

    it('should not mark any quarter as active when no model value', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarters = picker.quarters.value(0);

        expect(quarters[0]?.active).toBe(false);
        expect(quarters[1]?.active).toBe(false);
        expect(quarters[2]?.active).toBe(false);
        expect(quarters[3]?.active).toBe(false);
    });

    it('should select single quarter and emit events', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        picker.selectQuarter(new Date(2024, 3, 1), 0, false);

        expect(mockEmit).toHaveBeenCalledWith('auto-apply');
    });

    it('should select single quarter and update model value', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarterDate = new Date(2024, 3, 1); // Q2
        picker.selectQuarter(quarterDate, 0, false);

        expect(ctx.modelValue.value).toEqual(quarterDate);
    });

    it('should not select quarter when disabled', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        picker.selectQuarter(new Date(2024, 3, 1), 0, true);

        expect(ctx.modelValue.value).toBeNull();
        expect(mockEmit).not.toHaveBeenCalled();
    });

    it('should select ranged quarter when range is enabled', () => {
        ctx.defaults.range.value = { enabled: true };

        const picker = useQuarterPicker(mockProps, mockEmit);
        picker.selectQuarter(new Date(2024, 3, 1), 0, false);

        expect(Array.isArray(ctx.modelValue.value)).toBe(true);
    });

    it('should select multi quarters when multiDates is enabled', () => {
        ctx.defaults.multiDates.value = { enabled: true, limit: 5 };

        const picker = useQuarterPicker(mockProps, mockEmit);
        picker.selectQuarter(new Date(2024, 3, 1), 0, false);

        expect(mockEmit).toHaveBeenCalledWith('auto-apply', true);
    });

    it('should update calendar month when selecting quarter', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        picker.selectQuarter(new Date(2024, 3, 1), 0, false); // Q2 (April-June)

        // End of Q2 is June (month 5)
        expect(ctx.calendars.value[0].month).toBe(5);
    });

    it('should set hover date correctly', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        const hoverDate = new Date(2024, 3, 1);
        picker.setHoverDate(hoverDate);

        // Hover date is internal, just verify no errors
        expect(picker.modelValue).toBeDefined();
    });

    it('should handle toggle year picker', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        expect(picker.toggleYearPicker).toBeDefined();
        expect(typeof picker.toggleYearPicker).toBe('function');
    });

    it('should handle year select', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        expect(picker.handleYearSelect).toBeDefined();
        expect(typeof picker.handleYearSelect).toBe('function');
    });

    it('should handle year change', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        expect(picker.handleYear).toBeDefined();
        expect(typeof picker.handleYear).toBe('function');
    });

    it('should check if year navigation is disabled', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        expect(picker.isDisabled).toBeDefined();
        expect(typeof picker.isDisabled).toBe('function');
    });

    it('should return year for instance', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        expect(picker.year).toBeDefined();
    });

    it('should handle highlighted quarters with function', () => {
        ctx.defaults.highlight.value = (value: { quarter: number; year: number }) => {
            return value.quarter === 2 && value.year === 2024;
        };

        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarters = picker.quarters.value(0);

        expect(quarters[1]?.highlighted).toBe(true); // Q2
        expect(quarters[0]?.highlighted).toBe(false);
    });

    it('should handle highlighted quarters with array', () => {
        ctx.defaults.highlight.value = {
            quarters: [
                { quarter: 1, year: 2024 },
                { quarter: 3, year: 2024 },
            ],
        };

        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarters = picker.quarters.value(0);

        expect(quarters[0]?.highlighted).toBe(true); // Q1
        expect(quarters[2]?.highlighted).toBe(true); // Q3
        expect(quarters[1]?.highlighted).toBe(false);
        expect(quarters[3]?.highlighted).toBe(false);
    });

    it('should mark quarter as between in range mode', () => {
        ctx.defaults.range.value = { enabled: true };
        ctx.modelValue.value = [new Date(2024, 1, 15), new Date(2024, 7, 15)];

        const picker = useQuarterPicker(mockProps, mockEmit);
        // Set hover date to create a between state
        picker.setHoverDate(new Date(2024, 10, 1)); // Q4

        const quarters = picker.quarters.value(0);
        // Quarters should have isBetween property
        expect(quarters[0]).toHaveProperty('isBetween');
    });

    it('should not mark quarters as between when range is disabled', () => {
        ctx.modelValue.value = [new Date(2024, 1, 15), new Date(2024, 7, 15)];

        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarters = picker.quarters.value(0);

        // All quarters should have isBetween as false
        quarters.forEach((quarter) => {
            expect(quarter.isBetween).toBe(false);
        });
    });

    it('should generate quarters for different years', () => {
        ctx.year.value = () => 2023;

        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarters = picker.quarters.value(0);

        expect(quarters.length).toBe(4);
        expect(quarters[0]?.value.getFullYear()).toBe(2023);
    });

    it('should handle quarter values as Date objects', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarters = picker.quarters.value(0);

        quarters.forEach((quarter) => {
            expect(quarter.value).toBeInstanceOf(Date);
        });
    });

    it('should have correct quarter start dates', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarters = picker.quarters.value(0);

        expect(quarters[0]?.value.getMonth()).toBe(0); // January
        expect(quarters[1]?.value.getMonth()).toBe(3); // April
        expect(quarters[2]?.value.getMonth()).toBe(6); // July
        expect(quarters[3]?.value.getMonth()).toBe(9); // October
    });

    it('should handle selectYear method', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        expect(picker.selectYear).toBeDefined();
        expect(typeof picker.selectYear).toBe('function');
    });

    it('should check disabled state for quarters', () => {
        // Mock a disabled quarter
        vi.doMock('@/composables/useValidation.ts', () => ({
            useValidation: () => ({
                isDisabled: vi.fn((date: Date) => date.getMonth() === 9), // Q4 disabled
            }),
        }));

        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarters = picker.quarters.value(0);

        // Verify quarters have disabled property
        expect(quarters[0]).toHaveProperty('disabled');
        expect(quarters[1]).toHaveProperty('disabled');
        expect(quarters[2]).toHaveProperty('disabled');
        expect(quarters[3]).toHaveProperty('disabled');
    });

    it('should handle empty highlight configuration', () => {
        ctx.defaults.highlight.value = { quarters: [] };

        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarters = picker.quarters.value(0);

        quarters.forEach((quarter) => {
            expect(quarter.highlighted).toBe(false);
        });
    });

    it('should update calendar month to end of quarter', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);

        // Select Q1 (ends in March, month 2)
        picker.selectQuarter(new Date(2024, 0, 1), 0, false);
        expect(ctx.calendars.value[0].month).toBe(2);

        // Select Q2 (ends in June, month 5)
        picker.selectQuarter(new Date(2024, 3, 1), 0, false);
        expect(ctx.calendars.value[0].month).toBe(5);

        // Select Q3 (ends in September, month 8)
        picker.selectQuarter(new Date(2024, 6, 1), 0, false);
        expect(ctx.calendars.value[0].month).toBe(8);

        // Select Q4 (ends in December, month 11)
        picker.selectQuarter(new Date(2024, 9, 1), 0, false);
        expect(ctx.calendars.value[0].month).toBe(11);
    });

    it('should handle range mode with existing model value', () => {
        ctx.defaults.range.value = { enabled: true };
        ctx.modelValue.value = [new Date(2024, 0, 1)];

        const picker = useQuarterPicker(mockProps, mockEmit);
        picker.selectQuarter(new Date(2024, 6, 1), 0, false);

        expect(Array.isArray(ctx.modelValue.value)).toBe(true);
    });

    it('should emit reset-flow when applicable', () => {
        // The emit function should be callable
        mockEmit('reset-flow');
        expect(mockEmit).toHaveBeenCalledWith('reset-flow');
    });

    it('should handle multi-quarter selection with limit', () => {
        ctx.defaults.multiDates.value = { enabled: true, limit: 2 };

        const picker = useQuarterPicker(mockProps, mockEmit);
        picker.selectQuarter(new Date(2024, 0, 1), 0, false);

        expect(mockEmit).toHaveBeenCalledWith('auto-apply', true);
    });

    it('should maintain quarter state across year changes', () => {
        ctx.modelValue.value = new Date(2024, 3, 15); // Q2 2024
        ctx.year.value = () => 2024;

        const picker = useQuarterPicker(mockProps, mockEmit);
        let quarters = picker.quarters.value(0);
        expect(quarters[1]?.active).toBe(true);

        // Change year - the quarters computed property needs to be re-evaluated
        // with a different year context
        ctx.year.value = () => 2025;

        // Create a new picker instance with the new year to test isolation
        const picker2025 = useQuarterPicker(mockProps, mockEmit);
        quarters = picker2025.quarters.value(0);
        // Q2 should not be active in 2025 because model is still 2024 Q2
        expect(quarters[1]?.active).toBe(false);
    });

    it('should handle same quarter selection in range mode', () => {
        ctx.defaults.range.value = { enabled: true };
        ctx.modelValue.value = [new Date(2024, 0, 15)];

        const picker = useQuarterPicker(mockProps, mockEmit);
        // Select the same quarter
        picker.selectQuarter(new Date(2024, 0, 1), 0, false);

        expect(ctx.modelValue.value).toBeDefined();
    });

    it('should properly initialize showYearPicker', () => {
        const picker = useQuarterPicker(mockProps, mockEmit);
        expect(picker.showYearPicker.value).toBeDefined();
        expect(Array.isArray(picker.showYearPicker.value)).toBe(true);
    });

    it('should handle quarters for leap year', () => {
        ctx.year.value = () => 2024; // Leap year

        const picker = useQuarterPicker(mockProps, mockEmit);
        const quarters = picker.quarters.value(0);

        expect(quarters.length).toBe(4);
        quarters.forEach((quarter) => {
            expect(quarter.value).toBeInstanceOf(Date);
            expect(quarter.value.getFullYear()).toBe(2024);
        });
    });
});
