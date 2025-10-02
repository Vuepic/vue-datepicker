import { describe, it, expect, vi, beforeEach } from 'vitest';
import { computed, ref } from 'vue';
import { useValidation } from '@/composables/useValidation';

vi.mock('@/composables/useContext.ts', () => {
    const rootProps: any = {
        yearRange: [2000, 2030],
        disabledWeekDays: [],
        monthPicker: false,
        yearPicker: false,
        minTime: undefined,
        maxTime: undefined,
    };

    // Mutable refs backing the computed defaults
    const safeDatesRef = ref({
        minDate: undefined as Date | undefined,
        maxDate: undefined as Date | undefined,
        disabledDates: undefined as any,
        allowedDates: null as any,
    });
    const rangeRef = ref({
        enabled: false,
        noDisabledRange: false,
        minMaxRawRange: false,
        minRange: undefined as number | undefined,
        maxRange: undefined as number | undefined,
        partialRange: false,
    });
    const multiDatesRef = ref({ enabled: false });
    const filtersRef = ref({ months: [] as (string | number)[], times: { hours: [], minutes: [], seconds: [] } });
    const timeConfigRef = ref({ enableTimePicker: true, ignoreTimeValidation: false });

    const defaults: any = {
        safeDates: computed(() => safeDatesRef.value),
        range: computed(() => rangeRef.value),
        multiDates: computed(() => multiDatesRef.value),
        filters: computed(() => filtersRef.value),
        timeConfig: computed(() => timeConfigRef.value),
    };

    return {
        useContext: () => ({
            rootProps,
            defaults,
            __mocks: { safeDatesRef, rangeRef, multiDatesRef, filtersRef, timeConfigRef },
        }),
    };
});

vi.mock('@/composables/useUtils.ts', () => {
    return {
        useUtils: () => ({
            getMapKeyType: () => 'date',
            getMapDate: (date: Date, map: Map<string, any>) => {
                // naive keying by ISO date
                const key = date.toISOString().slice(0, 10);
                return map.get(key);
            },
            errorMapper: {
                prop: (n: string) => `Prop ${n} invalid`,
            },
            convertType: (v: any) => v,
        }),
    };
});

vi.mock('@/composables/useDateUtils.ts', async () => {
    const actual = await vi.importActual<any>('@/composables/useDateUtils.ts');
    return { useDateUtils: actual.useDateUtils };
});

describe('useValidation', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date('2024-01-10T12:00:00'));
    });

    it('should validate dates against min and max and disabled/allowed sets', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext() as any;
        const v = useValidation();

        // set min and max
        ctx.__mocks.safeDatesRef.value = {
            minDate: new Date('2024-01-05'),
            maxDate: new Date('2024-01-20'),
            disabledDates: undefined,
            allowedDates: null,
        } as any;

        expect(v.validateDate(new Date('2024-01-04'))).toBe(false);
        expect(v.validateDate(new Date('2024-01-21'))).toBe(false);
        expect(v.validateDate(new Date('2024-01-10'))).toBe(true);

        // disable a weekday
        ctx.rootProps.disabledWeekDays = [0]; // Sundays
        const sunday = new Date('2024-01-14');
        expect(v.validateDate(sunday)).toBe(false);
    });

    it('should determine disabled range when noDisabledRange=true', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext() as any;
        const v = useValidation();

        // set a disabled date in the middle
        const disabledMap = new Map<string, any>();
        disabledMap.set('2024-01-12', new Date('2024-01-12'));
        ctx.__mocks.safeDatesRef.value = {
            minDate: undefined,
            maxDate: undefined,
            disabledDates: (d: Date) => d.toISOString().slice(0, 10) === '2024-01-12',
            allowedDates: null,
        } as any;

        ctx.__mocks.rangeRef.value = {
            enabled: true,
            noDisabledRange: true,
            minMaxRawRange: false,
            partialRange: false,
        } as any;
        const allowed = v.isDateRangeAllowed([new Date('2024-01-10'), new Date('2024-01-15')]);
        expect(allowed).toBe(false);
    });

    it('should check min and max range with disabled dates excluded when not raw', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext() as any;
        const v = useValidation();

        ctx.__mocks.rangeRef.value = { enabled: true, minRange: 2, maxRange: 5, minMaxRawRange: false } as any;

        // Range of 4 days with 1 disabled -> effective 3 should be >=2 and <=5
        ctx.__mocks.safeDatesRef.value = {
            minDate: undefined,
            maxDate: undefined,
            disabledDates: (d: Date) => d.toISOString().slice(0, 10) === '2024-01-12',
            allowedDates: null,
        } as any;

        const ok = v.checkMinMaxRange(new Date('2024-01-14'), [new Date('2024-01-10')] as any);
        expect(ok).toBe(true);
    });

    it('should validate time with disabled times array and function', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext() as any;
        const v = useValidation();

        // time validation enabled
        ctx.__mocks.timeConfigRef.value = { enableTimePicker: true, ignoreTimeValidation: false };

        // Using disabledTimes array
        ctx.rootProps.disabledTimes = [{ hours: 10, minutes: 30, seconds: 0 }];
        const d1 = new Date('2024-01-10T10:30:00');
        expect(v.isValidTime(d1)).toBe(false);

        // Using disabledTimes function
        ctx.rootProps.disabledTimes = () => true; // always disabled
        const d2 = new Date('2024-01-10T09:00:00');
        expect(v.isValidTime(d2)).toBe(false);
    });

    it('should validate month navigation within min/max and month validity', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext() as any;
        const v = useValidation();

        ctx.rootProps.monthPicker = true;
        ctx.defaults.safeDates = computed(() => ({ minDate: new Date('2024-01-01'), maxDate: new Date('2024-03-31') }));
        // isMonthWithinRange true for Feb
        expect(v.isMonthValid.value(new Date('2024-02-10'))).toBe(true);

        // validateMonthYear blocks navigation beyond max when prevent flag true
        const blockNext = v.validateMonthYear(new Date('2024-03-15'), true, true);
        expect(typeof blockNext).toBe('boolean');
    });

    it('should checkPartialRangeValue and checkRangeEnabled throw when invalid', () => {
        const v = useValidation();
        expect(() => v.checkPartialRangeValue(false as any)).toThrow();
        expect(() => v.checkRangeEnabled(() => 1, false)).toThrow();
    });

    it('should validate isValidDate for different inputs', () => {
        const v = useValidation();
        expect(v.isValidDate([new Date('2024-01-01'), null as any])).toBe(true);
        expect(v.isValidDate(null as any)).toBe(false);
    });
});
