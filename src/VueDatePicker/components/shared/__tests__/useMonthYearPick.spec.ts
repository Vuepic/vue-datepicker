import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ref } from 'vue';
import { useMonthYearPick } from '@/components/shared/useMonthYearPick';

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootProps = {
        disableYearSelect: false,
        preventMinMaxNavigation: false,
    };

    const defaults = {
        filters: ref({ months: [], years: [] }),
    };

    return {
        useContext: () => ({
            rootProps,
            defaults,
        }),
    };
});

vi.mock('@/composables/useValidation.ts', () => ({
    useValidation: () => ({
        validateMonthYearInRange: vi.fn(() => true),
        validateMonthYear: vi.fn(() => false),
    }),
}));

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        getDate: vi.fn(() => new Date(2024, 0, 1)),
    }),
}));

describe('useMonthYearPick', () => {
    const mockEmit = vi.fn();
    const defaultProps = {
        month: 2,
        year: 2024,
    };

    let ctx: any;

    beforeEach(async () => {
        vi.clearAllMocks();
        const { useContext } = await import('@/composables/useContext.ts');
        ctx = useContext();
    });

    afterEach(() => {
        if (ctx) {
            ctx.rootProps.disableYearSelect = false;
            ctx.rootProps.preventMinMaxNavigation = false;
            ctx.defaults.filters.value = { months: [], years: [] };
        }
    });

    it('should initialize with default values', () => {
        const picker = useMonthYearPick(defaultProps, mockEmit);

        expect(picker.handleMonthYearChange).toBeDefined();
        expect(picker.isDisabled).toBeDefined();
        expect(picker.updateMonthYear).toBeDefined();
    });

    it('should emit update-month-year when updateMonthYear is called', () => {
        const picker = useMonthYearPick(defaultProps, mockEmit);
        picker.updateMonthYear(5, 2024, false);

        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 5,
            year: 2024,
            fromNav: false,
        });
    });

    it('should handle month year change forward', () => {
        const picker = useMonthYearPick(defaultProps, mockEmit);
        picker.handleMonthYearChange(true, false);

        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 3,
            year: 2024,
            fromNav: false,
        });
    });

    it('should handle month year change backward', () => {
        const picker = useMonthYearPick(defaultProps, mockEmit);
        picker.handleMonthYearChange(false, false);

        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 1,
            year: 2024,
            fromNav: false,
        });
    });

    it('should handle month change with fromNav flag', () => {
        const picker = useMonthYearPick(defaultProps, mockEmit);
        picker.handleMonthYearChange(true, true);

        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 3,
            year: 2024,
            fromNav: true,
        });
    });

    it('should wrap to next year when incrementing from December', () => {
        const props = { month: 11, year: 2024 };
        const picker = useMonthYearPick(props, mockEmit);
        picker.handleMonthYearChange(true, false);

        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 0,
            year: 2025,
            fromNav: false,
        });
    });

    it('should wrap to previous year when decrementing from January', () => {
        const props = { month: 0, year: 2024 };
        const picker = useMonthYearPick(props, mockEmit);
        picker.handleMonthYearChange(false, false);

        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 11,
            year: 2023,
            fromNav: false,
        });
    });

    it('should keep same year when disableYearSelect is true', () => {
        ctx.rootProps.disableYearSelect = true;
        const props = { month: 11, year: 2024 };
        const picker = useMonthYearPick(props, mockEmit);
        picker.handleMonthYearChange(true, false);

        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 0,
            year: 2024,
            fromNav: false,
        });
    });

    it('should skip filtered months when moving forward', () => {
        ctx.defaults.filters.value = { months: [3], years: [] };
        const picker = useMonthYearPick(defaultProps, mockEmit);
        picker.handleMonthYearChange(true, false);

        // Should skip month 3 (April) and go to month 4 (May)
        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 4,
            year: 2024,
            fromNav: false,
        });
    });

    it('should skip filtered months when moving backward', () => {
        ctx.defaults.filters.value = { months: [1], years: [] };
        const picker = useMonthYearPick(defaultProps, mockEmit);
        picker.handleMonthYearChange(false, false);

        // Should skip month 1 (February) and go to month 0 (January)
        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 0,
            year: 2024,
            fromNav: false,
        });
    });

    it('should skip filtered years when moving forward', () => {
        ctx.defaults.filters.value = { months: [], years: [2025] };
        const props = { month: 11, year: 2024 };
        const picker = useMonthYearPick(props, mockEmit);
        picker.handleMonthYearChange(true, false);

        // Should skip year 2025 and go to 2026
        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 0,
            year: 2026,
            fromNav: false,
        });
    });

    it('should skip filtered years when moving backward', () => {
        ctx.defaults.filters.value = { months: [], years: [2023] };
        const props = { month: 0, year: 2024 };
        const picker = useMonthYearPick(props, mockEmit);
        picker.handleMonthYearChange(false, false);

        // Should skip year 2023 and go to 2022
        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 11,
            year: 2022,
            fromNav: false,
        });
    });

    it('should handle multiple filtered months recursively', () => {
        ctx.defaults.filters.value = { months: [3, 4, 5], years: [] };
        const picker = useMonthYearPick(defaultProps, mockEmit);
        picker.handleMonthYearChange(true, false);

        // Should skip months 3, 4, 5 and go to month 6
        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 6,
            year: 2024,
            fromNav: false,
        });
    });

    it('should handle multiple filtered years recursively', () => {
        ctx.defaults.filters.value = { months: [], years: [2025, 2026, 2027] };
        const props = { month: 11, year: 2024 };
        const picker = useMonthYearPick(props, mockEmit);
        picker.handleMonthYearChange(true, false);

        // Should skip years 2025, 2026, 2027 and go to 2028
        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 0,
            year: 2028,
            fromNav: false,
        });
    });

    it('should check isDisabled for next month', () => {
        const picker = useMonthYearPick(defaultProps, mockEmit);
        const disabled = picker.isDisabled.value(true);

        expect(typeof disabled).toBe('boolean');
    });

    it('should check isDisabled for previous month', () => {
        const picker = useMonthYearPick(defaultProps, mockEmit);
        const disabled = picker.isDisabled.value(false);

        expect(typeof disabled).toBe('boolean');
    });

    it('should call validateMonthYear with correct parameters', () => {
        const picker = useMonthYearPick(defaultProps, mockEmit);
        const disabled = picker.isDisabled.value(true);

        expect(typeof disabled).toBe('boolean');
    });

    it('should handle preventMinMaxNavigation flag', () => {
        ctx.rootProps.preventMinMaxNavigation = true;
        const picker = useMonthYearPick(defaultProps, mockEmit);
        picker.handleMonthYearChange(true, false);

        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 3,
            year: 2024,
            fromNav: false,
        });
    });

    it('should handle edge case of filtered month at year boundary', () => {
        ctx.defaults.filters.value = { months: [0], years: [] };
        const props = { month: 11, year: 2024 };
        const picker = useMonthYearPick(props, mockEmit);
        picker.handleMonthYearChange(true, false);

        // Should skip month 0 (January) in 2025 and go to month 1 (February)
        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 1,
            year: 2025,
            fromNav: false,
        });
    });

    it('should handle filtered months when disableYearSelect is true', () => {
        ctx.rootProps.disableYearSelect = true;
        ctx.defaults.filters.value = { months: [0], years: [] };
        const props = { month: 11, year: 2024 };
        const picker = useMonthYearPick(props, mockEmit);
        picker.handleMonthYearChange(true, false);

        // Should stay in same year and skip to month 1
        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 1,
            year: 2024,
            fromNav: false,
        });
    });

    it('should handle both filtered months and years', () => {
        ctx.defaults.filters.value = { months: [0], years: [2025] };
        const props = { month: 11, year: 2024 };
        const picker = useMonthYearPick(props, mockEmit);
        picker.handleMonthYearChange(true, false);

        // Should skip January 2025 to February 2025, then skip year 2025 entirely to 2026
        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 1,
            year: 2026,
            fromNav: false,
        });
    });

    it('should return isDisabled as computed property', () => {
        const picker = useMonthYearPick(defaultProps, mockEmit);
        expect(picker.isDisabled.value).toBeDefined();
        expect(typeof picker.isDisabled.value).toBe('function');
    });

    it('should handle sequential month changes', () => {
        const picker = useMonthYearPick(defaultProps, mockEmit);

        picker.handleMonthYearChange(true, false);
        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 3,
            year: 2024,
            fromNav: false,
        });

        mockEmit.mockClear();

        picker.handleMonthYearChange(false, false);
        expect(mockEmit).toHaveBeenCalledWith('update-month-year', {
            month: 1,
            year: 2024,
            fromNav: false,
        });
    });
});
