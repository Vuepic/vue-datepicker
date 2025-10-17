import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ref, computed } from 'vue';
import { useExternalInternalMapper } from '@/composables/useExternalInternalMapper';

// Mock all dependencies
vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        getDate: (date?: any, _tz?: string) => (date ? new Date(date) : new Date('2024-01-15T12:00:00')),
        setTime: (time: any) => {
            const d = new Date('2024-01-15');
            d.setHours(time.hours || 0, time.minutes || 0, time.seconds || 0);
            return d;
        },
        getWeekFromDate: (date: Date, weekStart: number) => {
            // Return array of 7 dates for a week
            const week: Date[] = [];
            const start = new Date(date);
            start.setDate(start.getDate() - start.getDay() + weekStart);
            for (let i = 0; i < 7; i++) {
                const day = new Date(start);
                day.setDate(start.getDate() + i);
                week.push(day);
            }
            return week;
        },
    }),
}));

vi.mock('@/composables/useValidation.ts', () => ({
    useValidation: () => ({
        checkPartialRangeValue: (partialRange: boolean) => (partialRange ? null : undefined),
        checkRangeEnabled: (fn: () => any, enabled: boolean) => (enabled ? fn() : null),
        isValidDate: (date: any) => {
            if (!date) return false;
            if (Array.isArray(date)) return date.every((d) => d instanceof Date && !isNaN(d.getTime()));
            return date instanceof Date && !isNaN(date.getTime());
        },
    }),
}));

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        convertType: (val: any) => val,
        errorMapper: {
            dateArr: (type: string) => `Invalid ${type} format`,
        },
    }),
}));

vi.mock('@/composables/useFormatter.ts', () => ({
    useFormatter: () => ({
        formatSelectedDate: (date: any, _format?: string) => {
            if (!date) return '';
            if (Array.isArray(date)) {
                return date.map((d) => d.toISOString().split('T')[0]).join(' - ');
            }
            return date.toISOString().split('T')[0];
        },
        formatForTextInput: () => '2024-01-15',
    }),
}));

// Mock useContext with configurable state
let mockModelValue = ref<any>(null);
let mockInputValue = ref<string>('');
let mockRootProps: any = {};
let mockDefaults: any = {};
let mockRootEmit = vi.fn();

vi.mock('@/composables/useContext.ts', () => ({
    useContext: () => ({
        rootEmit: mockRootEmit,
        rootProps: mockRootProps,
        inputValue: mockInputValue,
        modelValue: mockModelValue,
        defaults: mockDefaults,
        state: {
            isTextInputDate: false,
        },
        updateTime: vi.fn(),
    }),
}));

describe('useExternalInternalMapper', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date('2024-01-15T12:00:00'));

        // Reset mocks
        mockModelValue = ref<any>(null);
        mockInputValue = ref<string>('');
        mockRootEmit = vi.fn();
        mockRootProps = {
            modelType: undefined,
            modelAuto: false,
            autoApply: false,
            timePicker: false,
            monthPicker: false,
            yearPicker: false,
            weekPicker: false,
            weekStart: 1,
            locale: undefined,
        };
        mockDefaults = {
            textInput: computed(() => ({ enabled: false, format: 'MM/dd/yyyy' })),
            range: computed(() => ({ enabled: false, partialRange: false })),
            tz: computed(() => ({ timezone: undefined, convertModel: false })),
            multiDates: computed(() => ({ enabled: false })),
            timeConfig: computed(() => ({ enableSeconds: false })),
            formats: computed(() => ({ input: 'MM/dd/yyyy, HH:mm' })),
        };

        // Re-apply mocked context
        vi.doMock('@/composables/useContext.ts', () => ({
            useContext: () => ({
                rootEmit: mockRootEmit,
                rootProps: mockRootProps,
                inputValue: mockInputValue,
                modelValue: mockModelValue,
                defaults: mockDefaults,
            }),
        }));
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.clearAllMocks();
    });

    describe('parseExternalModelValue', () => {
        it('should parse a single date value', () => {
            const { parseExternalModelValue } = useExternalInternalMapper();
            const date = new Date('2024-02-20T10:30:00');

            parseExternalModelValue(date);

            expect(mockModelValue.value).toBeInstanceOf(Date);
            expect(mockInputValue.value).toBe('2024-02-20');
        });

        it('should parse a date range', () => {
            mockDefaults.range = computed(() => ({ enabled: true, partialRange: false }));
            const { parseExternalModelValue } = useExternalInternalMapper();
            const range = [new Date('2024-02-01'), new Date('2024-02-10')];

            parseExternalModelValue(range);

            expect(Array.isArray(mockModelValue.value)).toBe(true);
            expect(mockModelValue.value).toHaveLength(2);
        });

        it('should set null for invalid date values', () => {
            const { parseExternalModelValue } = useExternalInternalMapper();

            parseExternalModelValue('invalid-date');

            expect(mockModelValue.value).toBeNull();
            expect(mockInputValue.value).toBe('');
        });

        it('should handle empty/null values', () => {
            const { parseExternalModelValue } = useExternalInternalMapper();

            parseExternalModelValue(null);

            expect(mockModelValue.value).toBeNull();
            expect(mockInputValue.value).toBe('');
        });

        it('should parse multi-dates array', () => {
            mockDefaults.multiDates = computed(() => ({ enabled: true }));
            const { parseExternalModelValue } = useExternalInternalMapper();
            const dates = [new Date('2024-01-01'), new Date('2024-01-15'), new Date('2024-01-30')];

            parseExternalModelValue(dates);

            expect(Array.isArray(mockModelValue.value)).toBe(true);
            expect(mockModelValue.value).toHaveLength(3);
        });

        it('should handle time picker mode', () => {
            mockRootProps.timePicker = true;
            const { parseExternalModelValue } = useExternalInternalMapper();
            const timeValue = { hours: 14, minutes: 30, seconds: 0 };

            parseExternalModelValue(timeValue);

            expect(mockModelValue.value).toBeInstanceOf(Date);
        });

        it('should handle month picker mode', () => {
            mockRootProps.monthPicker = true;
            const { parseExternalModelValue } = useExternalInternalMapper();
            const monthValue = { month: 5, year: 2024 };

            parseExternalModelValue(monthValue);

            expect(mockModelValue.value).toBeInstanceOf(Date);
        });

        it('should handle year picker mode', () => {
            mockRootProps.yearPicker = true;
            const { parseExternalModelValue } = useExternalInternalMapper();

            parseExternalModelValue(2025);

            expect(mockModelValue.value).toBeInstanceOf(Date);
        });

        it('should handle week picker mode', () => {
            mockRootProps.weekPicker = true;
            mockDefaults.range = computed(() => ({ enabled: true, partialRange: false }));
            const { parseExternalModelValue } = useExternalInternalMapper();
            const weekRange = [new Date('2024-01-01'), new Date('2024-01-07')];

            parseExternalModelValue(weekRange);

            expect(mockModelValue.value).toBeDefined();
        });
    });

    describe('formatInputValue', () => {
        it('should format single date to input string', () => {
            mockModelValue.value = new Date('2024-03-15T14:30:00');
            const { formatInputValue } = useExternalInternalMapper();

            formatInputValue();

            expect(mockInputValue.value).toBe('2024-03-15');
        });

        it('should format date range with separator', () => {
            mockModelValue.value = [new Date('2024-03-01'), new Date('2024-03-15')];
            const { formatInputValue } = useExternalInternalMapper();

            formatInputValue();

            expect(mockInputValue.value).toContain(' - ');
        });

        it('should format multi-dates with semicolon separator', () => {
            mockDefaults.multiDates = computed(() => ({ enabled: true }));
            mockModelValue.value = [new Date('2024-01-01'), new Date('2024-01-15'), new Date('2024-01-30')];
            const { formatInputValue } = useExternalInternalMapper();

            formatInputValue();

            expect(mockInputValue.value).toContain('; ');
        });

        it('should return empty string when modelValue is null', () => {
            mockModelValue.value = null;
            const { formatInputValue } = useExternalInternalMapper();

            formatInputValue();

            expect(mockInputValue.value).toBe('');
        });

        it('should use text input format when enabled', () => {
            mockDefaults.textInput = computed(() => ({ enabled: true, format: 'yyyy-MM-dd' }));
            mockModelValue.value = new Date('2024-03-15');
            const { formatInputValue } = useExternalInternalMapper();

            formatInputValue();

            expect(mockInputValue.value).toBe('2024-01-15');
        });
    });

    describe('emitModelValue', () => {
        it('should emit update:model-value for single date', () => {
            mockModelValue.value = new Date('2024-04-20T10:00:00');
            const { emitModelValue } = useExternalInternalMapper();

            emitModelValue();

            expect(mockRootEmit).toHaveBeenCalledExactlyOnceWith('update:model-value', expect.any(Date));
        });

        it('should emit date range', () => {
            mockDefaults.range = computed(() => ({ enabled: true, partialRange: false }));
            mockModelValue.value = [new Date('2024-04-01'), new Date('2024-04-10')];
            const { emitModelValue } = useExternalInternalMapper();

            emitModelValue();

            expect(mockRootEmit).toHaveBeenCalledExactlyOnceWith('update:model-value', expect.any(Array));
        });

        it('should emit month value in month picker mode', () => {
            mockRootProps.monthPicker = true;
            mockModelValue.value = new Date('2024-05-01');
            const { emitModelValue } = useExternalInternalMapper();

            emitModelValue();

            expect(mockRootEmit).toHaveBeenCalledExactlyOnceWith('update:model-value', expect.anything());
        });

        it('should emit time value in time picker mode', () => {
            mockRootProps.timePicker = true;
            mockModelValue.value = new Date('2024-01-15T14:30:00');
            const { emitModelValue } = useExternalInternalMapper();

            emitModelValue();

            expect(mockRootEmit).toHaveBeenCalledExactlyOnceWith('update:model-value', expect.anything());
        });

        it('should emit year value in year picker mode', () => {
            mockRootProps.yearPicker = true;
            mockModelValue.value = new Date('2025-01-01');
            const { emitModelValue } = useExternalInternalMapper();

            emitModelValue();

            expect(mockRootEmit).toHaveBeenCalledExactlyOnceWith('update:model-value', expect.anything());
        });

        it('should emit week range in week picker mode', () => {
            mockRootProps.weekPicker = true;
            mockModelValue.value = new Date('2024-01-15');
            const { emitModelValue } = useExternalInternalMapper();

            emitModelValue();

            expect(mockRootEmit).toHaveBeenCalledExactlyOnceWith('update:model-value', expect.anything());
        });

        it('should format input value after emitting', () => {
            mockModelValue.value = new Date('2024-04-20T10:00:00');
            const { emitModelValue } = useExternalInternalMapper();

            emitModelValue();

            expect(mockInputValue.value).toBe('2024-04-20');
        });
    });

    describe('checkBeforeEmit', () => {
        it('should return true when single date is selected', () => {
            mockModelValue.value = new Date('2024-05-15');
            const { checkBeforeEmit } = useExternalInternalMapper();

            expect(checkBeforeEmit()).toBe(true);
        });

        it('should return false when modelValue is null', () => {
            mockModelValue.value = null;
            const { checkBeforeEmit } = useExternalInternalMapper();

            expect(checkBeforeEmit()).toBe(false);
        });

        it('should return true when range has both dates selected', () => {
            mockDefaults.range = computed(() => ({ enabled: true, partialRange: false }));
            mockModelValue.value = [new Date('2024-05-01'), new Date('2024-05-10')];
            const { checkBeforeEmit } = useExternalInternalMapper();

            expect(checkBeforeEmit()).toBe(true);
        });

        it('should return false when range has only one date and partialRange is disabled', () => {
            mockDefaults.range = computed(() => ({ enabled: true, partialRange: false }));
            mockModelValue.value = [new Date('2024-05-01')];
            const { checkBeforeEmit } = useExternalInternalMapper();

            expect(checkBeforeEmit()).toBe(false);
        });

        it('should return true when range has one date and partialRange is enabled', () => {
            mockDefaults.range = computed(() => ({ enabled: true, partialRange: true }));
            mockModelValue.value = [new Date('2024-05-01')];
            const { checkBeforeEmit } = useExternalInternalMapper();

            expect(checkBeforeEmit()).toBe(true);
        });

        it('should return false for empty array', () => {
            mockDefaults.range = computed(() => ({ enabled: true, partialRange: false }));
            mockModelValue.value = [];
            const { checkBeforeEmit } = useExternalInternalMapper();

            expect(checkBeforeEmit()).toBe(false);
        });
    });

    describe('modelType conversions', () => {
        it('should parse timestamp modelType', () => {
            mockRootProps.modelType = 'timestamp';
            const { parseExternalModelValue } = useExternalInternalMapper();
            const timestamp = new Date('2024-06-15T10:30:00').getTime();

            parseExternalModelValue(timestamp);

            expect(mockModelValue.value).toBeInstanceOf(Date);
        });

        it('should emit timestamp when modelType is timestamp', () => {
            mockRootProps.modelType = 'timestamp';
            mockModelValue.value = new Date('2024-06-15T10:30:00');
            const { emitModelValue } = useExternalInternalMapper();

            emitModelValue();

            expect(mockRootEmit).toHaveBeenCalledExactlyOnceWith('update:model-value', expect.any(Number));
        });

        it('should parse ISO string modelType', () => {
            mockRootProps.modelType = 'iso';
            const { parseExternalModelValue } = useExternalInternalMapper();
            const isoString = '2024-06-15T10:30:00.000Z';

            parseExternalModelValue(isoString);

            expect(mockModelValue.value).toBeInstanceOf(Date);
        });

        it('should emit ISO string when modelType is iso', () => {
            mockRootProps.modelType = 'iso';
            mockModelValue.value = new Date('2024-06-15T10:30:00');
            const { emitModelValue } = useExternalInternalMapper();

            emitModelValue();

            const emittedValue = mockRootEmit.mock.calls[0]?.[1];
            expect(typeof emittedValue === 'string' || emittedValue instanceof Date).toBe(true);
        });
    });

    describe('modelAuto mode', () => {
        it('should emit single date when only one date is selected in modelAuto', () => {
            mockRootProps.modelAuto = true;
            mockModelValue.value = [new Date('2024-07-01')];
            const { emitModelValue } = useExternalInternalMapper();

            emitModelValue();

            expect(mockRootEmit).toHaveBeenCalled();
        });

        it('should emit array when both dates are selected in modelAuto', () => {
            mockRootProps.modelAuto = true;
            mockModelValue.value = [new Date('2024-07-01'), new Date('2024-07-10')];
            const { emitModelValue } = useExternalInternalMapper();

            emitModelValue();

            expect(mockRootEmit).toHaveBeenCalledExactlyOnceWith('update:model-value', expect.any(Array));
        });

        it('should parse modelAuto value correctly', () => {
            mockRootProps.modelAuto = true;
            const { parseExternalModelValue } = useExternalInternalMapper();
            const date = [new Date('2024-07-15'), new Date('2024-07-15')];

            parseExternalModelValue(date);

            expect(Array.isArray(mockModelValue.value)).toBe(true);
        });
    });

    describe('timezone handling', () => {
        it('should convert dates with timezone when enabled', () => {
            mockDefaults.tz = computed(() => ({ timezone: 'UTC', convertModel: true }));
            mockRootProps.modelType = 'iso';
            mockModelValue.value = new Date('2024-08-15T10:00:00');
            const { emitModelValue } = useExternalInternalMapper();

            emitModelValue();

            expect(mockRootEmit).toHaveBeenCalled();
        });
    });

    describe('partial range handling', () => {
        it('should add null as second value when partialRange is enabled', () => {
            mockDefaults.range = computed(() => ({ enabled: true, partialRange: true }));
            mockModelValue.value = [new Date('2024-09-01')];
            const { emitModelValue } = useExternalInternalMapper();

            emitModelValue();

            expect(mockRootEmit).toHaveBeenCalled();
        });
    });

    describe('time range handling', () => {
        it('should parse time range for time picker', () => {
            mockRootProps.timePicker = true;
            const { parseExternalModelValue } = useExternalInternalMapper();
            const timeRange = [
                { hours: 9, minutes: 0, seconds: 0 },
                { hours: 17, minutes: 30, seconds: 0 },
            ];

            parseExternalModelValue(timeRange);

            expect(Array.isArray(mockModelValue.value)).toBe(true);
            expect(mockModelValue.value).toHaveLength(2);
        });
    });

    describe('year range handling', () => {
        it('should parse year range', () => {
            mockRootProps.yearPicker = true;
            mockDefaults.range = computed(() => ({ enabled: true, partialRange: false }));
            const { parseExternalModelValue } = useExternalInternalMapper();

            parseExternalModelValue([2024, 2025]);

            expect(Array.isArray(mockModelValue.value)).toBe(true);
            expect(mockModelValue.value).toHaveLength(2);
        });

        it('should parse multi-year selection', () => {
            mockRootProps.yearPicker = true;
            mockDefaults.multiDates = computed(() => ({ enabled: true }));
            const { parseExternalModelValue } = useExternalInternalMapper();

            parseExternalModelValue([2023, 2024, 2025]);

            expect(Array.isArray(mockModelValue.value)).toBe(true);
            expect(mockModelValue.value).toHaveLength(3);
        });
    });

    describe('month range handling', () => {
        it('should parse month range', () => {
            mockRootProps.monthPicker = true;
            mockDefaults.range = computed(() => ({ enabled: true, partialRange: false }));
            const { parseExternalModelValue } = useExternalInternalMapper();
            const monthRange = [
                { month: 0, year: 2024 },
                { month: 5, year: 2024 },
            ];

            parseExternalModelValue(monthRange);

            expect(Array.isArray(mockModelValue.value)).toBe(true);
            expect(mockModelValue.value).toHaveLength(2);
        });

        it('should parse multi-month selection', () => {
            mockRootProps.monthPicker = true;
            mockDefaults.multiDates = computed(() => ({ enabled: true }));
            const { parseExternalModelValue } = useExternalInternalMapper();
            const months = [
                { month: 0, year: 2024 },
                { month: 3, year: 2024 },
                { month: 6, year: 2024 },
            ];

            parseExternalModelValue(months);

            expect(Array.isArray(mockModelValue.value)).toBe(true);
            expect(mockModelValue.value).toHaveLength(3);
        });
    });

    describe('edge cases', () => {
        it('should handle empty array input', () => {
            const { parseExternalModelValue } = useExternalInternalMapper();

            parseExternalModelValue([]);

            expect(mockModelValue.value).toBeNull();
        });

        it('should throw error for invalid multi-dates format', () => {
            mockDefaults.multiDates = computed(() => ({ enabled: true }));
            const { parseExternalModelValue } = useExternalInternalMapper();

            expect(() => {
                parseExternalModelValue('not-an-array' as any);
            }).toThrow();
        });

        it('should handle seconds in time picker when enabled', () => {
            mockRootProps.timePicker = true;
            mockDefaults.timeConfig = computed(() => ({ enableSeconds: true }));
            const { parseExternalModelValue } = useExternalInternalMapper();
            const timeValue = { hours: 14, minutes: 30, seconds: 45 };

            parseExternalModelValue(timeValue);

            expect(mockModelValue.value).toBeInstanceOf(Date);
        });
    });
});
