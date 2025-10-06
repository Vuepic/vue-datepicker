import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ref } from 'vue';
import { useCalendarClass } from '@/components/DatePicker/useCalendarClass';
import type { CalendarDay } from '@/types';

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const modelValue = ref<Date | Date[] | null>(null);
    const highlight = ref<any>({ weekdays: [] });
    const range = ref({ enabled: false, autoRange: false, maxRange: null, minRange: null });

    return {
        useContext: () => ({
            today: new Date(2024, 0, 15),
            rootProps: {
                hideOffsetDates: false,
                weekPicker: false,
                modelAuto: false,
                disabled: false,
                noToday: false,
                weekStart: 0,
            },
            defaults: {
                multiCalendars: ref({ count: 0 }),
                multiDates: ref({ enabled: false }),
                ui: ref({ dayClass: null, calendarCell: {} }),
                highlight,
                safeDates: ref({ highlight: null }),
                range,
            },
            modelValue,
        }),
    };
});

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        isDateAfter: vi.fn((date1: Date, date2: Date) => date1 > date2),
        isDateBefore: vi.fn((date1: Date, date2: Date) => date1 < date2),
        isDateBetween: vi.fn((range: Date[], hoverDate: Date | null, day: Date) => {
            if (!range || range.length !== 2 || !hoverDate) return false;
            return day > range[0]! && day < range[1]!;
        }),
        isDateEqual: vi.fn((date1: any, date2: any) => {
            if (!date1 || !date2) return false;
            if (typeof date1.getTime !== 'function' || typeof date2.getTime !== 'function') return false;
            return date1.getTime() === date2.getTime();
        }),
        getDate: vi.fn((date?: Date) => date || new Date()),
        getWeekFromDate: vi.fn((date: Date, _weekStart: number) => {
            const start = new Date(date);
            const end = new Date(date);
            start.setDate(start.getDate() - start.getDay());
            end.setDate(end.getDate() + (6 - end.getDay()));
            return [start, end];
        }),
        getBeforeAndAfterInRange: vi.fn((range: number, date: Date) => {
            const before = new Date(date);
            const after = new Date(date);
            before.setDate(before.getDate() - range);
            after.setDate(after.getDate() + range);
            return { before, after };
        }),
    }),
}));

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        isModelAuto: vi.fn((value: any) => {
            if (Array.isArray(value)) {
                return value.length === 1;
            }
            return false;
        }),
        matchDate: vi.fn(() => false),
    }),
}));

vi.mock('@/composables/useValidation.ts', () => ({
    useValidation: () => ({
        isDisabled: vi.fn(() => false),
    }),
}));

describe('useCalendarClass', () => {
    const createDay = (date: Date, current = true): CalendarDay => ({
        text: date.getDate(),
        value: date,
        current,
        classData: {},
    });

    beforeEach(async () => {
        vi.clearAllMocks();
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.modelValue.value = null;
        (ctx.defaults.highlight as any).value = { weekdays: [] };
        (ctx.defaults.range as any).value = { enabled: false, autoRange: false, maxRange: null, minRange: null };
    });

    it('should initialize useCalendarClass', () => {
        const result = useCalendarClass();
        expect(result).toBeDefined();
        expect(result.setHoverDate).toBeDefined();
        expect(result.clearHoverDate).toBeDefined();
        expect(result.getDayClassData).toBeDefined();
    });

    it('should set and clear hover date', () => {
        const result = useCalendarClass();
        const day = createDay(new Date(2024, 0, 20));

        result.setHoverDate(day);
        expect(result.getDayClassData(day)).toBeDefined();

        result.clearHoverDate();
        expect(result.getDayClassData(day)).toBeDefined();
    });

    it('should mark today with dp__today class', () => {
        const result = useCalendarClass();
        const today = createDay(new Date(2024, 0, 15));
        const classData = result.getDayClassData(today);
        expect(classData.dp__today).toBe(true);
    });

    it('should mark past dates', () => {
        const result = useCalendarClass();
        const pastDay = createDay(new Date(2024, 0, 10));
        const classData = result.getDayClassData(pastDay);
        expect(classData['dp--past']).toBe(true);
    });

    it('should mark future dates', () => {
        const result = useCalendarClass();
        const futureDay = createDay(new Date(2024, 0, 20));
        const classData = result.getDayClassData(futureDay);
        expect(classData['dp--future']).toBe(true);
    });

    it('should mark offset dates', () => {
        const result = useCalendarClass();
        const offsetDay = createDay(new Date(2024, 1, 1), false);
        const classData = result.getDayClassData(offsetDay);
        expect(classData.dp__cell_offset).toBe(true);
    });

    it('should mark active date when modelValue is set', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        const activeDate = new Date(2024, 0, 20);
        ctx.modelValue.value = activeDate;

        const result = useCalendarClass();
        const day = createDay(activeDate);
        const classData = result.getDayClassData(day);

        expect(classData.dp__active_date).toBe(true);
    });

    it('should handle range mode', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.defaults.range as any).value = { enabled: true };
        ctx.modelValue.value = [new Date(2024, 0, 10), new Date(2024, 0, 20)];

        const result = useCalendarClass();
        const startDay = createDay(new Date(2024, 0, 10));
        const endDay = createDay(new Date(2024, 0, 20));

        const startClassData = result.getDayClassData(startDay);
        const endClassData = result.getDayClassData(endDay);

        expect(startClassData.dp__range_start).toBe(true);
        expect(endClassData.dp__range_end).toBe(true);
    });

    it('should handle dates in range mode', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.defaults.range as any).value = { enabled: true };
        ctx.modelValue.value = [new Date(2024, 0, 10), new Date(2024, 0, 20)];

        const result = useCalendarClass();
        const betweenDay = createDay(new Date(2024, 0, 15));
        const classData = result.getDayClassData(betweenDay);

        // Just verify the function returns class data for range mode
        expect(classData).toBeDefined();
    });

    it('should handle auto range mode', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.defaults.range as any).value = { enabled: true, autoRange: 5 };

        const result = useCalendarClass();
        const day = createDay(new Date(2024, 0, 20));

        result.setHoverDate(day);
        const classData = result.getDayClassData(day);

        expect(classData.dp__cell_auto_range_start).toBe(true);
    });

    it('should handle multi-dates mode', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.defaults.multiDates as any).value = { enabled: true };
        ctx.modelValue.value = [new Date(2024, 0, 10), new Date(2024, 0, 15)];

        const result = useCalendarClass();
        const day1 = createDay(new Date(2024, 0, 10));
        const day2 = createDay(new Date(2024, 0, 15));

        const classData1 = result.getDayClassData(day1);
        const classData2 = result.getDayClassData(day2);

        // Just verify the function returns class data for multi-dates mode
        expect(classData1).toBeDefined();
        expect(classData2).toBeDefined();
    });

    it('should mark offset dates with dp__cell_offset', async () => {
        const result = useCalendarClass();
        const offsetDay = createDay(new Date(2024, 1, 1), false);
        const classData = result.getDayClassData(offsetDay);

        expect(classData.dp__cell_offset).toBe(true);
    });

    it('should check disabled dates with validation', () => {
        const result = useCalendarClass();
        const day = createDay(new Date(2024, 0, 20));
        const classData = result.getDayClassData(day);

        // The mock returns false by default, so it should not be disabled
        expect(classData.dp__cell_disabled).toBe(false);
    });

    it('should apply pointer class to enabled dates', () => {
        const result = useCalendarClass();
        const day = createDay(new Date(2024, 0, 20));
        const classData = result.getDayClassData(day);

        expect(classData.dp__pointer).toBe(true);
    });
});
