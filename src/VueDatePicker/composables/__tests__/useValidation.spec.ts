import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ref } from 'vue';
import { useValidation } from '@/composables/useValidation';
import * as composables from '@/composables';

// Mock the composables
vi.mock('@/composables', async () => {
    const actual = await vi.importActual('@/composables');
    return {
        ...actual,
        useContext: vi.fn(),
        useDateUtils: vi.fn(),
        useUtils: vi.fn(),
    };
});

describe('useValidation', () => {
    let mockContext: any;
    let mockDateUtils: any;
    let mockUtils: any;
    let validation: ReturnType<typeof useValidation>;

    const createDate = (year: number, month: number, day: number, hours = 0, minutes = 0) => {
        return new Date(year, month, day, hours, minutes);
    };

    beforeEach(() => {
        vi.clearAllMocks();

        // Mock useDateUtils
        mockDateUtils = {
            getDate: vi.fn((date?: Date) => {
                if (!date) {
                    const d = new Date();
                    d.setHours(0, 0, 0, 0);
                    return d;
                }
                return new Date(date);
            }),
            isDateBefore: vi.fn((date1: Date, date2: Date) => date1.getTime() < date2.getTime()),
            isDateAfter: vi.fn((date1: Date, date2: Date) => date1.getTime() > date2.getTime()),
            isDateEqual: vi.fn((date1: Date, date2: Date) => date1.getTime() === date2.getTime()),
            resetDate: vi.fn((date: Date) => {
                const d = new Date(date);
                d.setHours(0, 0, 0, 0);
                return d;
            }),
            getDaysInBetween: vi.fn((date1: Date, date2: Date) => {
                const days = [];
                const start = new Date(date1);
                const end = new Date(date2);
                for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
                    days.push(new Date(d));
                }
                return days;
            }),
            setTimeValue: vi.fn((date: Date) => date),
            getTimeObj: vi.fn((date: Date) => ({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds(),
            })),
            setTime: vi.fn((timeObj: any, date: Date) => {
                const newDate = new Date(date);
                newDate.setHours(timeObj.hours || 0);
                newDate.setMinutes(timeObj.minutes || 0);
                newDate.setSeconds(timeObj.seconds || 0);
                return newDate;
            }),
        };

        // Mock useContext with default values
        mockContext = {
            defaults: {
                safeDates: ref({
                    minDate: null,
                    maxDate: null,
                    disabledDates: null,
                    allowedDates: null,
                }),
                range: ref({
                    enabled: false,
                    noDisabledRange: false,
                    maxRange: null,
                    minRange: null,
                    minMaxRawRange: false,
                }),
                multiDates: ref({ enabled: false }),
                filters: ref({ months: [] }),
                timeConfig: ref({ enableTimePicker: false, ignoreTimeValidation: false }),
            },
            rootProps: {
                yearPicker: false,
                monthPicker: false,
                yearRange: [1900, 2100],
                disabledTimes: null,
                maxTime: null,
                minTime: null,
            },
        };

        // Mock useUtils
        mockUtils = {
            getMapKeyType: vi.fn(() => 'date'),
            getMapDate: vi.fn(() => false),
            errorMapper: {
                prop: vi.fn((key: string) => `Error: ${key}`),
            },
            convertType: vi.fn((date: any) => date),
        };

        vi.mocked(composables.useContext).mockReturnValue(mockContext);
        vi.mocked(composables.useDateUtils).mockReturnValue(mockDateUtils);
        vi.mocked(composables.useUtils).mockReturnValue(mockUtils);

        validation = useValidation();
    });

    describe('validateDate', () => {
        it('should return false for null or undefined date', () => {
            expect(validation.validateDate(null)).toBe(false);
            expect(validation.validateDate(undefined)).toBe(false);
        });

        it('should return true for valid date within range', () => {
            const date = createDate(2024, 5, 15);
            expect(validation.validateDate(date)).toBe(true);
        });

        it('should return false when date is above max date', () => {
            mockContext.defaults.safeDates.value.maxDate = createDate(2024, 5, 10);
            const date = createDate(2024, 5, 15);
            expect(validation.validateDate(date)).toBe(false);
        });

        it('should return false when date is below min date', () => {
            mockContext.defaults.safeDates.value.minDate = createDate(2024, 5, 20);
            const date = createDate(2024, 5, 15);
            expect(validation.validateDate(date)).toBe(false);
        });

        it('should return false for disabled dates using array', () => {
            mockContext.defaults.safeDates.value.disabledDates = [createDate(2024, 5, 15)];
            mockUtils.getMapDate.mockReturnValue(true);
            const date = createDate(2024, 5, 15);
            expect(validation.validateDate(date)).toBe(false);
        });

        it('should return false for disabled dates using function', () => {
            mockContext.defaults.safeDates.value.disabledDates = vi.fn(() => true);
            const date = createDate(2024, 5, 15);
            expect(validation.validateDate(date)).toBe(false);
        });

        it('should return false when month is in disabled months', () => {
            mockContext.defaults.filters.value.months = [5]; // June (0-indexed)
            const date = createDate(2024, 5, 15);
            expect(validation.validateDate(date)).toBe(false);
        });

        it('should return false for disabled weekdays', () => {
            mockContext.defaults.filters.value.weekDays = [0]; // Sunday
            const sunday = createDate(2024, 5, 16); // June 16, 2024 is Sunday
            expect(validation.validateDate(sunday)).toBe(false);
        });

        it('should return false when year is out of range', () => {
            mockContext.rootProps.yearRange = [2000, 2030];
            const date = createDate(1999, 5, 15);
            expect(validation.validateDate(date)).toBe(false);
        });

        it('should return false when not in allowed dates', () => {
            mockContext.defaults.safeDates.value.allowedDates = [createDate(2024, 5, 10)];
            mockUtils.getMapDate.mockReturnValue(false); // Not found in allowed dates
            const date = createDate(2024, 5, 15);
            expect(validation.validateDate(date)).toBe(false);
        });

        it('should handle year picker mode for max date validation', () => {
            mockContext.rootProps.yearPicker = true;
            mockContext.defaults.safeDates.value.maxDate = createDate(2024, 0, 1);
            const date = createDate(2025, 0, 1);
            expect(validation.validateDate(date)).toBe(false);
        });
    });

    describe('isDisabled', () => {
        it('should return true when date is invalid', () => {
            mockContext.defaults.safeDates.value.maxDate = createDate(2024, 5, 10);
            const date = createDate(2024, 5, 15);
            expect(validation.isDisabled(date)).toBe(true);
        });

        it('should return false when date is valid', () => {
            const date = createDate(2024, 5, 15);
            expect(validation.isDisabled(date)).toBe(false);
        });
    });

    describe('isDateRangeAllowed', () => {
        it('should return true when noDisabledRange is false', () => {
            mockContext.defaults.range.value.noDisabledRange = false;
            const range = [createDate(2024, 5, 10), createDate(2024, 5, 15)];
            expect(validation.isDateRangeAllowed(range)).toBe(true);
        });

        it('should return true when no disabled dates in range', () => {
            mockContext.defaults.range.value.noDisabledRange = true;
            const range = [createDate(2024, 5, 10), createDate(2024, 5, 15)];
            expect(validation.isDateRangeAllowed(range)).toBe(true);
        });

        it('should return false when range contains disabled dates', () => {
            mockContext.defaults.range.value.noDisabledRange = true;
            mockContext.defaults.safeDates.value.disabledDates = [createDate(2024, 5, 12)];
            mockUtils.getMapDate.mockImplementation((date: Date) => {
                return date.getDate() === 12;
            });
            const range = [createDate(2024, 5, 10), createDate(2024, 5, 15)];
            expect(validation.isDateRangeAllowed(range)).toBe(false);
        });
    });

    describe('checkMinMaxRange', () => {
        it('should return true when not array or missing index', () => {
            const result = validation.checkMinMaxRange(createDate(2024, 5, 15), null);
            expect(result).toBe(true);
        });

        it('should return true when no min or max range set', () => {
            const modelValue = [createDate(2024, 5, 10)];
            const secondDate = createDate(2024, 5, 15);
            expect(validation.checkMinMaxRange(secondDate, modelValue, 0)).toBe(true);
        });

        it('should validate minRange correctly', () => {
            mockContext.defaults.range.value.minRange = 5;
            const modelValue = [createDate(2024, 5, 10)];
            const validDate = createDate(2024, 5, 15); // 5 days difference
            const invalidDate = createDate(2024, 5, 12); // 2 days difference

            expect(validation.checkMinMaxRange(validDate, modelValue, 0)).toBe(true);
            expect(validation.checkMinMaxRange(invalidDate, modelValue, 0)).toBe(false);
        });

        it('should validate maxRange correctly', () => {
            mockContext.defaults.range.value.maxRange = 7;
            const modelValue = [createDate(2024, 5, 10)];
            const validDate = createDate(2024, 5, 15); // 5 days difference
            const invalidDate = createDate(2024, 5, 20); // 10 days difference

            expect(validation.checkMinMaxRange(validDate, modelValue, 0)).toBe(true);
            expect(validation.checkMinMaxRange(invalidDate, modelValue, 0)).toBe(false);
        });

        it('should validate both minRange and maxRange', () => {
            mockContext.defaults.range.value.minRange = 3;
            mockContext.defaults.range.value.maxRange = 7;
            const modelValue = [createDate(2024, 5, 10)];

            const validDate = createDate(2024, 5, 15); // 5 days - within range
            const tooClose = createDate(2024, 5, 11); // 1 day - too close
            const tooFar = createDate(2024, 5, 20); // 10 days - too far

            expect(validation.checkMinMaxRange(validDate, modelValue, 0)).toBe(true);
            expect(validation.checkMinMaxRange(tooClose, modelValue, 0)).toBe(false);
            expect(validation.checkMinMaxRange(tooFar, modelValue, 0)).toBe(false);
        });

        it('should exclude disabled dates from range calculation when minMaxRawRange is false', () => {
            mockContext.defaults.range.value.minRange = 3;
            mockContext.defaults.range.value.minMaxRawRange = false;
            const modelValue = [createDate(2024, 5, 10)];
            const secondDate = createDate(2024, 5, 15); // 5 days

            // Mock getDaysInBetween to include disabled dates
            mockDateUtils.getDaysInBetween.mockReturnValue([
                createDate(2024, 5, 10),
                createDate(2024, 5, 11),
                createDate(2024, 5, 12),
                createDate(2024, 5, 13),
                createDate(2024, 5, 14),
                createDate(2024, 5, 15),
            ]);

            // Mock isDisabled to return true for some dates
            mockContext.defaults.safeDates.value.disabledDates = vi.fn((date: Date) => date.getDate() === 12);

            expect(validation.checkMinMaxRange(secondDate, modelValue, 0)).toBe(true);
        });
    });

    describe('isValidTime', () => {
        it('should return true when date is null', () => {
            expect(validation.isValidTime(null)).toBe(true);
        });

        it('should return true when time picker is disabled', () => {
            mockContext.defaults.timeConfig.value.enableTimePicker = false;
            const date = createDate(2024, 5, 15, 10, 30);
            expect(validation.isValidTime(date)).toBe(true);
        });

        it('should return true when time validation is ignored', () => {
            mockContext.defaults.timeConfig.value.enableTimePicker = true;
            mockContext.defaults.timeConfig.value.ignoreTimeValidation = true;
            const date = createDate(2024, 5, 15, 10, 30);
            expect(validation.isValidTime(date)).toBe(true);
        });

        it('should return true when monthPicker is enabled', () => {
            mockContext.rootProps.monthPicker = true;
            const date = createDate(2024, 5, 15, 10, 30);
            expect(validation.isValidTime(date)).toBe(true);
        });

        it('should return true when yearPicker is enabled', () => {
            mockContext.rootProps.yearPicker = true;
            const date = createDate(2024, 5, 15, 10, 30);
            expect(validation.isValidTime(date)).toBe(true);
        });

        it('should validate against maxTime', () => {
            mockContext.defaults.timeConfig.value.enableTimePicker = true;
            mockContext.rootProps.maxTime = { hours: 12, minutes: 0, seconds: 0 };

            const validDate = createDate(2024, 5, 15, 11, 0);
            const invalidDate = createDate(2024, 5, 15, 13, 0);

            expect(validation.isValidTime(validDate)).toBe(true);
            expect(validation.isValidTime(invalidDate)).toBe(false);
        });

        it('should validate against minTime', () => {
            mockContext.defaults.timeConfig.value.enableTimePicker = true;
            mockContext.rootProps.minTime = { hours: 9, minutes: 0, seconds: 0 };

            const validDate = createDate(2024, 5, 15, 10, 0);
            const invalidDate = createDate(2024, 5, 15, 8, 0);

            expect(validation.isValidTime(validDate)).toBe(true);
            expect(validation.isValidTime(invalidDate)).toBe(false);
        });

        it('should validate disabledTimes as array', () => {
            mockContext.defaults.timeConfig.value.enableTimePicker = true;
            mockContext.rootProps.disabledTimes = [
                { hours: 10, minutes: 30 },
                { hours: 14, minutes: 0 },
            ];

            const disabledTime = createDate(2024, 5, 15, 10, 30);
            const allowedTime = createDate(2024, 5, 15, 11, 0);

            expect(validation.isValidTime(disabledTime)).toBe(false);
            expect(validation.isValidTime(allowedTime)).toBe(true);
        });

        it('should validate disabledTimes with wildcard minutes', () => {
            mockContext.defaults.timeConfig.value.enableTimePicker = true;
            mockContext.rootProps.disabledTimes = [{ hours: 10, minutes: '*' }];

            const disabledTime = createDate(2024, 5, 15, 10, 30);
            const allowedTime = createDate(2024, 5, 15, 11, 30);

            expect(validation.isValidTime(disabledTime)).toBe(false);
            expect(validation.isValidTime(allowedTime)).toBe(true);
        });

        it('should validate disabledTimes as function', () => {
            mockContext.defaults.timeConfig.value.enableTimePicker = true;
            mockContext.rootProps.disabledTimes = vi.fn((time: any) => {
                return time.hours === 10 && time.minutes === 30;
            });

            const disabledTime = createDate(2024, 5, 15, 10, 30);
            const allowedTime = createDate(2024, 5, 15, 11, 0);

            expect(validation.isValidTime(disabledTime)).toBe(false);
            expect(validation.isValidTime(allowedTime)).toBe(true);
        });

        it('should validate time range with separate disabled times', () => {
            mockContext.defaults.timeConfig.value.enableTimePicker = true;
            mockContext.rootProps.disabledTimes = [
                [{ hours: 10, minutes: 0 }], // Start date disabled times
                [{ hours: 14, minutes: 0 }], // End date disabled times
            ];

            const dates = [createDate(2024, 5, 15, 10, 0), createDate(2024, 5, 16, 14, 0)];
            expect(validation.isValidTime(dates)).toBe(false);
        });
    });

    describe('validateMonthYear', () => {
        it('should return false when preventMinMaxNavigation is false', () => {
            const date = createDate(2024, 5, 15);
            expect(validation.validateMonthYear(date, false, true)).toBe(false);
        });

        it('should return false when navigating next and no maxDate', () => {
            mockContext.defaults.safeDates.value.maxDate = null;
            const date = createDate(2024, 5, 15);
            expect(validation.validateMonthYear(date, true, true)).toBe(false);
        });

        it('should return false when navigating previous and no minDate', () => {
            mockContext.defaults.safeDates.value.minDate = null;
            const date = createDate(2024, 5, 15);
            expect(validation.validateMonthYear(date, true, false)).toBe(false);
        });

        it('should disable next navigation when next month exceeds maxDate', () => {
            mockContext.defaults.safeDates.value.maxDate = createDate(2024, 6, 15); // July
            const date = createDate(2024, 6, 15); // July

            // Next month would be August, which exceeds July maxDate
            // Should return true (disable navigation)
            expect(validation.validateMonthYear(date, true, true)).toBe(true);
        });

        it('should disable previous navigation when previous month is before minDate', () => {
            mockContext.defaults.safeDates.value.minDate = createDate(2024, 4, 15); // May
            const date = createDate(2024, 4, 15); // May

            // Previous month would be April, which is before May minDate
            // Should return true (disable navigation)
            expect(validation.validateMonthYear(date, true, false)).toBe(true);
        });
    });

    describe('validateMinDate', () => {
        it('should return true when date is after minDate', () => {
            mockContext.defaults.safeDates.value.minDate = createDate(2024, 3, 1); // April
            expect(validation.validateMinDate(5, 2024)).toBe(true); // June 2024
        });

        it('should return true when date equals minDate', () => {
            mockContext.defaults.safeDates.value.minDate = createDate(2024, 5, 1); // June
            expect(validation.validateMinDate(5, 2024)).toBe(true); // June 2024
        });

        it('should return false when date is before minDate', () => {
            mockContext.defaults.safeDates.value.minDate = createDate(2024, 7, 1); // August
            expect(validation.validateMinDate(5, 2024)).toBe(false); // June 2024
        });
    });

    describe('validateMaxDate', () => {
        it('should return true when date is before maxDate', () => {
            mockContext.defaults.safeDates.value.maxDate = createDate(2024, 7, 1); // August
            // Returns true if provided month/year is valid (before or equal to maxDate)
            expect(validation.validateMaxDate(5, 2024)).toBe(true); // June is before August - valid
        });

        it('should return true when date equals maxDate', () => {
            mockContext.defaults.safeDates.value.maxDate = createDate(2024, 5, 1); // June
            // Returns true when equal to maxDate
            expect(validation.validateMaxDate(5, 2024)).toBe(true); // June equals June - valid
        });

        it('should return false when date is after maxDate', () => {
            mockContext.defaults.safeDates.value.maxDate = createDate(2024, 3, 1); // April
            // Returns false if provided month/year is after maxDate (invalid)
            expect(validation.validateMaxDate(5, 2024)).toBe(false); // June is after April - invalid
        });
    });

    describe('validateMonthYearInRange', () => {
        it('should return true when preventNav is false', () => {
            expect(validation.validateMonthYearInRange(5, 2024, true, false)).toBe(true);
        });

        it('should return true when no min or max date set', () => {
            mockContext.defaults.safeDates.value.minDate = null;
            mockContext.defaults.safeDates.value.maxDate = null;
            expect(validation.validateMonthYearInRange(5, 2024, true, true)).toBe(true);
        });

        it('should validate against both min and max when both are set', () => {
            mockContext.defaults.safeDates.value.minDate = createDate(2024, 3, 1); // April
            mockContext.defaults.safeDates.value.maxDate = createDate(2024, 7, 1); // August

            expect(validation.validateMonthYearInRange(5, 2024, true, true)).toBe(true); // June - valid
            expect(validation.validateMonthYearInRange(2, 2024, false, true)).toBe(false); // March - before min
            expect(validation.validateMonthYearInRange(8, 2024, true, true)).toBe(false); // September - after max
        });

        it('should validate against minDate only when maxDate is not set', () => {
            mockContext.defaults.safeDates.value.minDate = createDate(2024, 5, 1); // June
            mockContext.defaults.safeDates.value.maxDate = null;

            expect(validation.validateMonthYearInRange(5, 2024, false, true)).toBe(true); // June - equals min
            expect(validation.validateMonthYearInRange(3, 2024, false, true)).toBe(false); // April - before min
        });

        it('should validate against maxDate only when minDate is not set', () => {
            mockContext.defaults.safeDates.value.minDate = null;
            mockContext.defaults.safeDates.value.maxDate = createDate(2024, 5, 1); // June

            expect(validation.validateMonthYearInRange(5, 2024, true, true)).toBe(true); // June - equals max
            expect(validation.validateMonthYearInRange(7, 2024, true, true)).toBe(false); // August - after max
        });
    });

    describe('isValidDate', () => {
        it('should return false for null value', () => {
            expect(validation.isValidDate(null)).toBe(false);
        });

        it('should return true for valid single date', () => {
            const date = createDate(2024, 5, 15);
            expect(validation.isValidDate(date)).toBe(true);
        });

        it('should return true for valid date array', () => {
            const dates = [createDate(2024, 5, 10), createDate(2024, 5, 15)];
            expect(validation.isValidDate(dates)).toBe(true);
        });

        it('should return true for partial date range', () => {
            const dates = [createDate(2024, 5, 10), null];
            expect(validation.isValidDate(dates)).toBe(true);
        });

        it('should return false for invalid date', () => {
            const invalidDate = new Date('invalid');
            expect(validation.isValidDate(invalidDate)).toBe(false);
        });

        it('should return false for array with invalid dates', () => {
            const dates = [new Date('invalid'), createDate(2024, 5, 15)];
            expect(validation.isValidDate(dates)).toBe(false);
        });
    });

    describe('checkPartialRangeValue', () => {
        it('should return null when isPartial is true', () => {
            expect(validation.checkPartialRangeValue(true)).toBe(null);
        });

        it('should throw error when isPartial is false', () => {
            expect(() => validation.checkPartialRangeValue(false)).toThrow('Error: partial-range');
        });
    });

    describe('checkRangeEnabled', () => {
        it('should execute function when range is enabled', () => {
            const fn = vi.fn(() => 'result');
            expect(validation.checkRangeEnabled(fn, true)).toBe('result');
            expect(fn).toHaveBeenCalledTimes(1);
        });

        it('should throw error when range is not enabled', () => {
            const fn = vi.fn();
            expect(() => validation.checkRangeEnabled(fn, false)).toThrow('Error: range');
            expect(fn).toHaveBeenCalledTimes(0);
        });
    });

    describe('isTimeValid computed', () => {
        it('should return true when time picker is disabled', () => {
            mockContext.defaults.timeConfig.value.enableTimePicker = false;
            const date = createDate(2024, 5, 15, 10, 30);
            expect(validation.isTimeValid.value(date)).toBe(true);
        });

        it('should return true when time validation is ignored', () => {
            mockContext.defaults.timeConfig.value.enableTimePicker = true;
            mockContext.defaults.timeConfig.value.ignoreTimeValidation = true;
            const date = createDate(2024, 5, 15, 10, 30);
            expect(validation.isTimeValid.value(date)).toBe(true);
        });

        it('should validate time when time picker is enabled', () => {
            mockContext.defaults.timeConfig.value.enableTimePicker = true;
            mockContext.rootProps.maxTime = { hours: 12, minutes: 0, seconds: 0 };

            const validDate = createDate(2024, 5, 15, 11, 0);
            const invalidDate = createDate(2024, 5, 15, 13, 0);

            expect(validation.isTimeValid.value(validDate)).toBe(true);
            expect(validation.isTimeValid.value(invalidDate)).toBe(false);
        });
    });

    describe('isMonthValid computed', () => {
        beforeEach(() => {
            mockContext.rootProps.monthPicker = true;
        });

        it('should return true when monthPicker is disabled', () => {
            mockContext.rootProps.monthPicker = false;
            const date = createDate(2024, 5, 15);
            expect(validation.isMonthValid.value(date)).toBe(true);
        });

        it('should validate single month within range', () => {
            mockContext.defaults.safeDates.value.minDate = createDate(2024, 3, 1); // April
            mockContext.defaults.safeDates.value.maxDate = createDate(2024, 7, 1); // August

            const validDate = createDate(2024, 5, 1); // June
            const invalidDate = createDate(2024, 2, 1); // March

            expect(validation.isMonthValid.value(validDate)).toBe(true);
            expect(validation.isMonthValid.value(invalidDate)).toBe(false);
        });

        it('should validate month array for range mode', () => {
            mockContext.defaults.range.value.enabled = true;
            mockContext.defaults.safeDates.value.minDate = createDate(2024, 3, 1); // April
            mockContext.defaults.safeDates.value.maxDate = createDate(2024, 7, 1); // August

            const validRange = [createDate(2024, 4, 1), createDate(2024, 6, 1)]; // May-July
            const invalidRange = [createDate(2024, 2, 1), createDate(2024, 5, 1)]; // March-June (March invalid)

            expect(validation.isMonthValid.value(validRange)).toBe(true);
            expect(validation.isMonthValid.value(invalidRange)).toBe(false);
        });

        it('should validate month array for multiDates mode', () => {
            mockContext.defaults.multiDates.value.enabled = true;
            mockContext.defaults.safeDates.value.minDate = createDate(2024, 3, 1); // April
            mockContext.defaults.safeDates.value.maxDate = createDate(2024, 7, 1); // August

            const validDates = [createDate(2024, 4, 1), createDate(2024, 5, 1)]; // May, June
            const invalidDates = [createDate(2024, 2, 1), createDate(2024, 5, 1)]; // March, June (March invalid)

            expect(validation.isMonthValid.value(validDates)).toBe(true);
            expect(validation.isMonthValid.value(invalidDates)).toBe(false);
        });

        it('should handle month equal to minDate', () => {
            mockContext.defaults.safeDates.value.minDate = createDate(2024, 5, 1); // June
            const date = createDate(2024, 5, 1); // June
            expect(validation.isMonthValid.value(date)).toBe(true);
        });

        it('should handle month equal to maxDate', () => {
            mockContext.defaults.safeDates.value.maxDate = createDate(2024, 5, 1); // June
            const date = createDate(2024, 5, 1); // June
            expect(validation.isMonthValid.value(date)).toBe(true);
        });
    });
});
