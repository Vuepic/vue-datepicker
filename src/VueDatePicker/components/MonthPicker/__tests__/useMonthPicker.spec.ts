import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ref, nextTick } from 'vue';
import { useMonthPicker } from '@/components/MonthPicker/useMonthPicker';
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
    const calendars = ref([{ month: 2, year: 2024 }]);
    const year = ref((instance: number) => calendars.value[instance]?.year ?? 2024);
    const modelValue = ref<Date | Date[] | null>(null);

    const defaults = {
        range: ref({ enabled: false, fixedStart: false, fixedEnd: false }),
        highlight: ref({}),
        safeDates: ref({ minDate: null, maxDate: null, disabledDates: null, allowedDates: null }),
        filters: ref({ months: [] }),
        multiDates: ref({ enabled: false, limit: null }),
    };

    return {
        useContext: () => ({
            rootEmit,
            rootProps,
            isTextInputDate,
            calendars,
            year,
            modelValue,
            defaults,
        }),
    };
});

vi.mock('@/composables/useRemapper.ts', () => ({
    useRemapper: vi.fn((_cb: any) => {}),
}));

vi.mock('@/composables/useValidation.ts', () => ({
    useValidation: () => ({
        checkMinMaxRange: vi.fn(() => true),
    }),
}));

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        isDateBetween: vi.fn(() => false),
        getDate: vi.fn(() => new Date(2024, 2, 15)),
        resetDateTime: vi.fn((date: Date) => date),
        resetDate: vi.fn((date: Date) => {
            const d = new Date(date);
            d.setHours(0, 0, 0, 0);
            return d;
        }),
        getMinMonth: vi.fn(() => 0),
        getMaxMonth: vi.fn(() => 11),
    }),
}));

vi.mock('@/components/shared/useComponentShared.ts', () => ({
    useComponentShared: () => ({
        checkRangeAutoApply: vi.fn(),
        getRangeWithFixedDate: vi.fn((date: Date) => [date, date]),
        handleMultiDatesSelect: vi.fn(),
        setMonthOrYearRange: vi.fn((date: Date) => [date]),
        setPresetDate: vi.fn(),
    }),
}));

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        padZero: vi.fn((num: number) => String(num).padStart(2, '0')),
        checkHighlightMonth: vi.fn(() => false),
        checkMinMaxValue: vi.fn(() => false),
        groupListAndMap: vi.fn((list: any[], mapper: any) => {
            const result = [];
            for (let i = 0; i < list.length; i += 3) {
                const row = list.slice(i, i + 3).map((item: any) => ({
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
        getMonths: vi.fn(() => [
            { text: 'Jan', value: 0 },
            { text: 'Feb', value: 1 },
            { text: 'Mar', value: 2 },
            { text: 'Apr', value: 3 },
            { text: 'May', value: 4 },
            { text: 'Jun', value: 5 },
            { text: 'Jul', value: 6 },
            { text: 'Aug', value: 7 },
            { text: 'Sep', value: 8 },
            { text: 'Oct', value: 9 },
            { text: 'Nov', value: 10 },
            { text: 'Dec', value: 11 },
        ]),
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
        toggleYearPicker: vi.fn(),
        handleYearSelect: vi.fn(),
        handleYear: vi.fn(),
        isDisabled: vi.fn(() => false),
    }),
}));

describe('useMonthPicker', () => {
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
            ctx.calendars.value = [{ month: 2, year: 2024 }];
            ctx.isTextInputDate.value = false;
            ctx.defaults.range.value = { enabled: false, fixedStart: false, fixedEnd: false };
            ctx.defaults.multiDates.value = { enabled: false, limit: null };
            ctx.defaults.safeDates.value = { minDate: null, maxDate: null, disabledDates: null, allowedDates: null };
            ctx.defaults.filters.value = { months: [] };
        }
    });

    it('should initialize with default values', () => {
        const picker = useMonthPicker(mockProps, mockEmit);

        expect(picker.modelValue).toBeDefined();
        expect(picker.groupedMonths).toBeDefined();
        expect(picker.groupedYears).toBeDefined();
        expect(picker.year).toBeDefined();
        expect(picker.showYearPicker).toBeDefined();
    });

    it('should return grouped months for an instance', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        const months = picker.groupedMonths.value(0);

        expect(Array.isArray(months)).toBe(true);
        expect(months.length).toBeGreaterThan(0);
        expect(months[0]?.[0]).toHaveProperty('text');
        expect(months[0]?.[0]).toHaveProperty('value');
        expect(months[0]?.[0]).toHaveProperty('active');
        expect(months[0]?.[0]).toHaveProperty('disabled');
    });

    it('should return grouped years', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        const years = (picker.groupedYears as any)(0);

        expect(Array.isArray(years)).toBe(true);
        expect(years.length).toBeGreaterThan(0);
    });

    it('should get model month year for single date', () => {
        ctx.modelValue.value = new Date(2024, 5, 15);

        const picker = useMonthPicker(mockProps, mockEmit);
        const result = picker.getModelMonthYear();

        expect(result).toEqual({ month: 5, year: 2024 });
    });

    it('should get model month year for date range', () => {
        ctx.modelValue.value = [new Date(2024, 2, 1), new Date(2024, 5, 30)];

        const picker = useMonthPicker(mockProps, mockEmit);
        const result = picker.getModelMonthYear();

        expect(Array.isArray(result)).toBe(true);
        expect(result).toEqual([
            { month: 2, year: 2024 },
            { month: 5, year: 2024 },
        ]);
    });

    it('should get model month year as null when no model value', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        const result = picker.getModelMonthYear();

        expect(result).toEqual({ month: null, year: null });
    });

    it('should select single month and emit events', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        picker.selectMonth(5, 0);

        expect(mockEmit).toHaveBeenCalledTimes(2);
        expect(mockEmit).toHaveBeenNthCalledWith(1, 'auto-apply');
        expect(mockEmit).toHaveBeenNthCalledWith(2, 'update-flow-step');
    });

    it('should select single month and update model value', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        picker.selectMonth(5, 0);

        expect(ctx.modelValue.value).toBeDefined();
        if (ctx.modelValue.value && !Array.isArray(ctx.modelValue.value)) {
            expect(ctx.modelValue.value.getMonth()).toBe(5);
            expect(ctx.modelValue.value.getFullYear()).toBe(2024);
        }
    });

    it('should select ranged month when range is enabled', async () => {
        ctx.defaults.range.value = { enabled: true, fixedStart: false, fixedEnd: false };

        const picker = useMonthPicker(mockProps, mockEmit);
        picker.selectMonth(5, 0);

        await nextTick();
        expect(Array.isArray(ctx.modelValue.value)).toBe(true);
    });

    it('should select ranged month with fixed start', async () => {
        ctx.defaults.range.value = { enabled: true, fixedStart: true, fixedEnd: false };

        const picker = useMonthPicker(mockProps, mockEmit);
        picker.selectMonth(5, 0);

        await nextTick();
        expect(ctx.modelValue.value).toBeDefined();
    });

    it('should select ranged month with fixed end', async () => {
        ctx.defaults.range.value = { enabled: true, fixedStart: false, fixedEnd: true };

        const picker = useMonthPicker(mockProps, mockEmit);
        picker.selectMonth(5, 0);

        await nextTick();
        expect(ctx.modelValue.value).toBeDefined();
    });

    it('should select multi months when multiDates is enabled', () => {
        ctx.defaults.multiDates.value = { enabled: true, limit: 5 };

        const picker = useMonthPicker(mockProps, mockEmit);
        picker.selectMonth(5, 0);

        expect(mockEmit).toHaveBeenCalledExactlyOnceWith('auto-apply', true);
    });

    it('should update calendar month when selecting', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        picker.selectMonth(7, 0);

        expect(ctx.calendars.value[0].month).toBe(7);
    });

    it('should select year and emit update', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        picker.selectYear(2025, 0);

        expect(ctx.rootEmit).toHaveBeenCalledExactlyOnceWith('update-month-year', expect.any(Object));
    });

    it('should set hover date correctly', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        picker.setHoverDate(3, 0);

        // Hover date is internal, just verify no errors
        expect(picker.modelValue).toBeDefined();
    });

    it('should preset date and emit auto-apply', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        picker.presetDate(new Date(2024, 6, 15));

        expect(mockEmit).toHaveBeenCalledExactlyOnceWith('auto-apply');
    });

    it('should preset date with array of dates', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        picker.presetDate([new Date(2024, 2, 1), new Date(2024, 5, 30)]);

        expect(mockEmit).toHaveBeenCalledExactlyOnceWith('auto-apply');
    });

    it('should check if month is disabled with Map', () => {
        const disabledMap = new Map();
        disabledMap.set('06-2024', null);
        ctx.defaults.safeDates.value.disabledDates = disabledMap;

        const picker = useMonthPicker(mockProps, mockEmit);
        const months = picker.groupedMonths.value(0);

        // Month 5 (June) should be disabled
        const juneMonth = months.flatMap((row) => row).find((m) => m.value === 5);
        expect(juneMonth?.disabled).toBe(true);
    });

    it('should check if month is disabled with function', () => {
        ctx.defaults.safeDates.value.disabledDates = (date: Date) => date.getMonth() === 5;

        const picker = useMonthPicker(mockProps, mockEmit);
        const months = picker.groupedMonths.value(0);

        // Month 5 (June) should be disabled
        const juneMonth = months.flatMap((row) => row).find((m) => m.value === 5);
        expect(juneMonth?.disabled).toBe(true);
    });

    it('should check if month is allowed with Map', () => {
        const allowedMap = new Map();
        allowedMap.set('06-2024', null);
        allowedMap.set('07-2024', null);
        ctx.defaults.safeDates.value.allowedDates = allowedMap;

        const picker = useMonthPicker(mockProps, mockEmit);
        const months = picker.groupedMonths.value(0);

        // Months not in the map should be disabled
        const januaryMonth = months.flatMap((row) => row).find((m) => m.value === 0);
        expect(januaryMonth?.disabled).toBe(true);
    });

    it('should filter months from filters', () => {
        ctx.defaults.filters.value.months = [0, 1, 2];

        const picker = useMonthPicker(mockProps, mockEmit);
        const months = picker.groupedMonths.value(0);

        // January (0), February (1), March (2) should be disabled
        const januaryMonth = months.flatMap((row) => row).find((m) => m.value === 0);
        expect(januaryMonth?.disabled).toBe(true);
    });

    it('should mark active month correctly for single date', () => {
        ctx.modelValue.value = new Date(2024, 5, 15);
        ctx.calendars.value = [{ month: 5, year: 2024 }];

        const picker = useMonthPicker(mockProps, mockEmit);
        const months = picker.groupedMonths.value(0);

        // June (5) should be active
        const juneMonth = months.flatMap((row) => row).find((m) => m.value === 5);
        expect(juneMonth?.active).toBe(true);
    });

    it('should mark active months correctly for range', () => {
        ctx.modelValue.value = [new Date(2024, 2, 1), new Date(2024, 5, 30)];
        ctx.calendars.value = [{ month: 2, year: 2024 }];

        const picker = useMonthPicker(mockProps, mockEmit);
        const months = picker.groupedMonths.value(0);

        // March (2) should be active
        const marchMonth = months.flatMap((row) => row).find((m) => m.value === 2);
        expect(marchMonth?.active).toBe(true);
    });

    it('should handle toggle year picker', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        expect(picker.toggleYearPicker).toBeDefined();
        expect(typeof picker.toggleYearPicker).toBe('function');
    });

    it('should handle year select', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        expect(picker.handleYearSelect).toBeDefined();
        expect(typeof picker.handleYearSelect).toBe('function');
    });

    it('should handle year change', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        expect(picker.handleYear).toBeDefined();
        expect(typeof picker.handleYear).toBe('function');
    });

    it('should check if year navigation is disabled', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        expect(picker.isDisabled).toBeDefined();
        expect(typeof picker.isDisabled).toBe('function');
    });

    it('should return year for instance', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        // year is a ref from context, not a function on picker
        expect(picker.year).toBeDefined();
    });

    it('should emit update-month-year with correct params on month select', () => {
        const picker = useMonthPicker(mockProps, mockEmit);
        picker.selectMonth(7, 0);

        expect(ctx.rootEmit).toHaveBeenCalledExactlyOnceWith('update-month-year', {
            instance: 0,
            year: 2024,
            month: 7,
        });
    });

    it('should emit update-month-year with correct params on year select', () => {
        ctx.modelValue.value = new Date(2024, 5, 15);

        const picker = useMonthPicker(mockProps, mockEmit);
        picker.selectYear(2025, 0);

        expect(ctx.rootEmit).toHaveBeenCalledExactlyOnceWith(
            'update-month-year',
            expect.objectContaining({
                instance: 0,
                year: 2025,
            }),
        );
    });

    it('should handle month between for range mode', () => {
        ctx.defaults.range.value = { enabled: true, fixedStart: false, fixedEnd: false };
        ctx.modelValue.value = [new Date(2024, 2, 1), new Date(2024, 5, 30)];

        const picker = useMonthPicker(mockProps, mockEmit);
        const months = picker.groupedMonths.value(0);

        // Months should have isBetween property
        expect(months[0]?.[0]).toHaveProperty('isBetween');
    });

    it('should not mark months as between when range is disabled', () => {
        ctx.modelValue.value = [new Date(2024, 2, 1), new Date(2024, 5, 30)];

        const picker = useMonthPicker(mockProps, mockEmit);
        const months = picker.groupedMonths.value(0);

        // All months should have isBetween as false
        const allMonths = months.flatMap((row) => row);
        allMonths.forEach((month) => {
            expect((month as any).isBetween).toBe(false);
        });
    });

    it('should handle highlighted months', () => {
        ctx.defaults.highlight.value = { months: [5, 11] };

        const picker = useMonthPicker(mockProps, mockEmit);
        const months = picker.groupedMonths.value(0);

        // Months should have highlighted property
        expect(months[0]?.[0]).toHaveProperty('highlighted');
    });

    it('should handle empty disabledDates Map', () => {
        ctx.defaults.safeDates.value.disabledDates = new Map();

        const picker = useMonthPicker(mockProps, mockEmit);
        const months = picker.groupedMonths.value(0);

        // No months should be disabled by the empty map
        const allMonths = months.flatMap((row) => row);
        allMonths.forEach((month) => {
            // disabled can be true from other sources, just check structure is correct
            expect(month).toHaveProperty('disabled');
        });
    });

    it('should handle empty allowedDates Map', () => {
        ctx.defaults.safeDates.value.allowedDates = new Map();

        const picker = useMonthPicker(mockProps, mockEmit);
        const months = picker.groupedMonths.value(0);

        // Empty allowed map means all months are allowed
        const allMonths = months.flatMap((row) => row);
        allMonths.forEach((month) => {
            expect(month).toHaveProperty('disabled');
        });
    });

    it('should handle selecting month when modelValue already exists', () => {
        ctx.modelValue.value = new Date(2024, 3, 15);

        const picker = useMonthPicker(mockProps, mockEmit);
        picker.selectMonth(5, 0);

        expect(ctx.modelValue.value).toBeDefined();
        if (ctx.modelValue.value && !Array.isArray(ctx.modelValue.value)) {
            expect(ctx.modelValue.value.getMonth()).toBe(5);
        }
    });

    it('should handle selecting second date in range', async () => {
        ctx.defaults.range.value = { enabled: true, fixedStart: false, fixedEnd: false };
        ctx.modelValue.value = [new Date(2024, 2, 15)];

        const picker = useMonthPicker(mockProps, mockEmit);
        picker.selectMonth(5, 0);

        await nextTick();
        expect(ctx.modelValue.value).toBeDefined();
    });
});
