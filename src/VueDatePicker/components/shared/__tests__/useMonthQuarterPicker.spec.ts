import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ref, computed } from 'vue';
import { useMonthOrQuarterPicker } from '../useMonthQuarterPicker';

vi.mock('@/composables/useContext.ts', () => {
    const rootProps: any = {
        preventMinMaxNavigation: false,
        focusStartDate: false,
    };

    const modelValueRef = ref(null);
    const monthRef = ref(2);
    const yearRef = ref(2024);
    const calendarsRef = ref([{ month: 2, year: 2024 }]);
    const isTextInputDateRef = ref(false);
    const multiCalendarsRef = ref({ count: 0, solo: false });
    const rangeRef = ref({ showLastInRange: false });
    const safeDatesRef = ref({ minDate: undefined, maxDate: undefined });
    const filtersRef = ref({ years: [] });
    const highlightRef = ref(null);

    const defaults: any = {
        multiCalendars: computed(() => multiCalendarsRef.value),
        range: computed(() => rangeRef.value),
        safeDates: computed(() => safeDatesRef.value),
        filters: computed(() => filtersRef.value),
        highlight: computed(() => highlightRef.value),
    };

    const state = computed(() => ({
        isTextInputDate: isTextInputDateRef.value,
        menuFocused: false,
        shiftKeyInMenu: false,
        isInputFocused: false,
    }));

    return {
        useContext: () => ({
            rootProps,
            rootEmit: vi.fn(),
            state,
            month: computed(() => (instance: number) => calendarsRef.value[instance]?.month ?? monthRef.value),
            year: computed(() => (instance: number) => calendarsRef.value[instance]?.year ?? yearRef.value),
            modelValue: modelValueRef,
            calendars: calendarsRef,
            defaults,
            __mocks: {
                modelValueRef,
                monthRef,
                yearRef,
                calendarsRef,
                isTextInputDateRef,
                multiCalendarsRef,
                rangeRef,
                safeDatesRef,
                filtersRef,
                highlightRef,
            },
        }),
    };
});

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        getDate: () => new Date(2024, 2, 15),
        resetDate: (date: Date) => new Date(date),
        getYearFromDate: (date: Date | undefined) => (date ? date.getFullYear() : undefined),
    }),
}));

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        checkHighlightYear: () => false,
        groupListAndMap: (items: any[], fn: (item: any) => any) => {
            const groups = [];
            for (let i = 0; i < items.length; i += 4) {
                groups.push(items.slice(i, i + 4).map(fn));
            }
            return groups;
        },
        checkMinMaxValue: (value: number, min: number | undefined, max: number | undefined) => {
            if (min !== undefined && value < min) return true;
            if (max !== undefined && value > max) return true;
            return false;
        },
    }),
}));

vi.mock('@/composables/useUtilsWithContext.ts', () => ({
    useUtilsWithContext: () => ({
        getYears: () => Array.from({ length: 12 }, (_, i) => ({ text: `${2020 + i}`, value: 2020 + i })),
    }),
}));

vi.mock('@/composables/useValidation.ts', () => ({
    useValidation: () => ({
        validateMonthYear: vi.fn().mockReturnValue(false),
    }),
}));

describe('useMonthOrQuarterPicker', () => {
    let ctx: any;
    const mockEmit = vi.fn();

    beforeEach(async () => {
        vi.clearAllMocks();
        const { useContext } = await import('@/composables/useContext.ts');
        ctx = useContext();
        ctx.__mocks.modelValueRef.value = null;
        ctx.__mocks.monthRef.value = 2;
        ctx.__mocks.yearRef.value = 2024;
        ctx.__mocks.calendarsRef.value = [{ month: 2, year: 2024 }];
        ctx.__mocks.isTextInputDateRef.value = false;
        ctx.__mocks.multiCalendarsRef.value = { count: 0, solo: false };
        ctx.__mocks.rangeRef.value = { showLastInRange: false };
        ctx.__mocks.safeDatesRef.value = { minDate: undefined, maxDate: undefined };
        ctx.__mocks.filtersRef.value = { years: [] };
        ctx.__mocks.highlightRef.value = null;
        ctx.rootProps.preventMinMaxNavigation = false;
        ctx.rootProps.focusStartDate = false;
        mockEmit.mockClear();
    });

    it('should initialize with default values', () => {
        const picker = useMonthOrQuarterPicker(mockEmit);

        expect(picker.isDisabled).toBeDefined();
        expect(picker.groupedYears).toBeDefined();
        expect(picker.showYearPicker).toBeDefined();
        expect(picker.selectYear).toBeDefined();
        expect(picker.toggleYearPicker).toBeDefined();
        expect(picker.handleYearSelect).toBeDefined();
        expect(picker.handleYear).toBeDefined();
    });

    it('should return isDisabled as computed property', () => {
        const picker = useMonthOrQuarterPicker(mockEmit);

        expect(typeof picker.isDisabled.value).toBe('function');
    });

    it('should check if next is disabled', () => {
        const picker = useMonthOrQuarterPicker(mockEmit);
        const disabled = picker.isDisabled.value(0, true);

        expect(typeof disabled).toBe('boolean');
    });

    it('should check if previous is disabled', () => {
        const picker = useMonthOrQuarterPicker(mockEmit);
        const disabled = picker.isDisabled.value(0, false);

        expect(typeof disabled).toBe('boolean');
    });

    it('should return grouped years', () => {
        const picker = useMonthOrQuarterPicker(mockEmit);
        const grouped = picker.groupedYears.value(0);

        expect(Array.isArray(grouped)).toBe(true);
        expect(grouped.length).toBeGreaterThan(0);
    });

    it('should select year and update calendar', () => {
        const picker = useMonthOrQuarterPicker(mockEmit);
        picker.selectYear(2025, 0);

        expect(ctx.calendars.value[0].year).toBe(2025);
    });

    it('should toggle year picker', () => {
        const picker = useMonthOrQuarterPicker(mockEmit);

        expect(picker.showYearPicker.value[0]).toBeFalsy();

        picker.toggleYearPicker(0);
        expect(picker.showYearPicker.value[0]).toBe(true);
        expect(mockEmit).toHaveBeenCalledExactlyOnceWith('reset-flow');

        picker.toggleYearPicker(0);
        expect(picker.showYearPicker.value[0]).toBe(false);
    });

    it('should toggle year picker with flow parameter', () => {
        const picker = useMonthOrQuarterPicker(mockEmit);

        picker.toggleYearPicker(0, true);

        expect(picker.showYearPicker.value[0]).toBe(true);
        expect(mockEmit).not.toHaveBeenCalled();
    });

    it('should toggle year picker with explicit show parameter', () => {
        const picker = useMonthOrQuarterPicker(mockEmit);

        picker.toggleYearPicker(0, false, true);
        expect(picker.showYearPicker.value[0]).toBe(true);

        picker.toggleYearPicker(0, false, false);
        expect(picker.showYearPicker.value[0]).toBe(false);
    });

    it('should handle year select and close picker', () => {
        const picker = useMonthOrQuarterPicker(mockEmit);

        picker.toggleYearPicker(0);
        expect(picker.showYearPicker.value[0]).toBe(true);

        picker.handleYearSelect(2025, 0);

        expect(ctx.calendars.value[0].year).toBe(2025);
        expect(picker.showYearPicker.value[0]).toBe(false);
    });

    it('should handle year increment', () => {
        const picker = useMonthOrQuarterPicker(mockEmit);

        picker.handleYear(0, true);

        expect(ctx.calendars.value[0].year).toBe(2025);
    });

    it('should handle year decrement', () => {
        const picker = useMonthOrQuarterPicker(mockEmit);

        picker.handleYear(0, false);

        expect(ctx.calendars.value[0].year).toBe(2023);
    });

    it('should assign multi calendars when count is set', () => {
        ctx.__mocks.multiCalendarsRef.value = { count: 3, solo: false };
        const picker = useMonthOrQuarterPicker(mockEmit);
        picker.selectYear(2025, 0);

        expect(ctx.calendars.value.length).toBe(3);
        expect(ctx.calendars.value[0].year).toBe(2025);
        expect(ctx.calendars.value[1].year).toBe(2026);
        expect(ctx.calendars.value[2].year).toBe(2027);
    });

    it('should handle solo multi calendars with range', () => {
        ctx.__mocks.multiCalendarsRef.value = { count: 2, solo: true };
        ctx.__mocks.modelValueRef.value = [new Date(2024, 0, 1), new Date(2025, 11, 31)];

        const picker = useMonthOrQuarterPicker(mockEmit);
        picker.selectYear(2024, 0);

        expect(ctx.calendars.value[0].year).toBe(2024);
    });

    it('should update multi calendars when changing non-first instance', () => {
        ctx.__mocks.multiCalendarsRef.value = { count: 3, solo: false };
        ctx.__mocks.calendarsRef.value = [
            { month: 2, year: 2024 },
            { month: 2, year: 2025 },
            { month: 2, year: 2026 },
        ];

        const picker = useMonthOrQuarterPicker(mockEmit);
        picker.selectYear(2030, 2);

        expect(ctx.calendars.value[0].year).toBe(2028);
        expect(ctx.calendars.value[2].year).toBe(2030);
    });

    it('should toggle year picker and emit reset-flow', () => {
        const picker = useMonthOrQuarterPicker(mockEmit);

        picker.toggleYearPicker(0);

        expect(mockEmit).toHaveBeenCalledExactlyOnceWith('reset-flow');
    });

    it('should handle focusStartDate in range mode', () => {
        ctx.rootProps.focusStartDate = true;
        ctx.__mocks.modelValueRef.value = [new Date(2024, 0, 1), new Date(2025, 11, 31)];
        ctx.__mocks.calendarsRef.value = [{ month: 0, year: 2024 }];

        useMonthOrQuarterPicker(mockEmit);

        expect(ctx.calendars.value[0].year).toBe(2024);
    });

    it('should handle showLastInRange option', () => {
        ctx.__mocks.rangeRef.value = { showLastInRange: true };
        ctx.__mocks.modelValueRef.value = [new Date(2020, 0, 1), new Date(2025, 11, 31)];

        useMonthOrQuarterPicker(mockEmit);

        expect(ctx.calendars.value[0]).toBeDefined();
    });

    it('should group years correctly', () => {
        const picker = useMonthOrQuarterPicker(mockEmit);
        const grouped = picker.groupedYears.value(0);

        expect(Array.isArray(grouped)).toBe(true);
        grouped.forEach((group) => {
            expect(Array.isArray(group)).toBe(true);
            group.forEach((item) => {
                expect(item).toHaveProperty('active');
                expect(item).toHaveProperty('disabled');
                expect(item).toHaveProperty('highlighted');
            });
        });
    });

    it('should mark current year as active in grouped years', () => {
        ctx.__mocks.yearRef.value = 2024;
        const picker = useMonthOrQuarterPicker(mockEmit);
        const grouped = picker.groupedYears.value(0);

        const allYears = grouped.flat();
        const activeYear = allYears.find((item) => item.active);

        expect(activeYear).toBeDefined();
    });

    it('should handle minDate in grouped years', () => {
        ctx.__mocks.safeDatesRef.value = { minDate: new Date(2025, 0, 1), maxDate: undefined };
        const picker = useMonthOrQuarterPicker(mockEmit);
        const grouped = picker.groupedYears.value(0);

        const allYears = grouped.flat();
        expect(allYears.some((item) => item.disabled)).toBe(true);
    });

    it('should handle maxDate in grouped years', () => {
        ctx.__mocks.safeDatesRef.value = { minDate: undefined, maxDate: new Date(2023, 11, 31) };
        const picker = useMonthOrQuarterPicker(mockEmit);
        const grouped = picker.groupedYears.value(0);

        const allYears = grouped.flat();
        expect(allYears.some((item) => item.disabled)).toBe(true);
    });
});
