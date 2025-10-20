import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ref, reactive } from 'vue';
import { useTimePickerUtils } from '@/components/TimePicker/useTimePickerUtils';

// Mock dependencies
vi.mock('@/composables/useContext.ts', () => {
    const modelValue = ref<Date | Date[] | null>(new Date('2024-01-15T14:30:00'));
    const time = reactive({
        hours: 14,
        minutes: 30,
        seconds: 0,
    });
    const rootProps = {
        modelAuto: false,
        disabledTimes: null,
    };
    const defaults = {
        range: ref({
            enabled: false,
            disableTimeRangeValidation: false,
        }),
        timeConfig: ref({
            enableSeconds: false,
        }),
    };
    return {
        useContext: () => ({
            modelValue,
            time,
            rootProps,
            defaults,
        }),
    };
});

vi.mock('@/composables/useDateUtils.ts', async () => {
    const { setHours, setMinutes, setSeconds, setMilliseconds } = await import('date-fns');
    return {
        useDateUtils: () => ({
            getDate: (date?: Date) => date || new Date('2024-01-15T12:00:00'),
            isDateEqual: (date1: Date, date2: Date) => date1.getTime() === date2.getTime(),
            setTime: (timeObj: any, date: Date) => {
                let newDate = date || new Date('2024-01-15T12:00:00');
                if (timeObj.hours != null) newDate = setHours(newDate, +timeObj.hours);
                if (timeObj.minutes != null) newDate = setMinutes(newDate, +timeObj.minutes);
                if (timeObj.seconds != null) newDate = setSeconds(newDate, +timeObj.seconds);
                return setMilliseconds(newDate, 0);
            },
        }),
    };
});

describe('useTimePickerUtils', () => {
    let updateFlowMock: ReturnType<typeof vi.fn>;

    beforeEach(async () => {
        vi.clearAllMocks();
        updateFlowMock = vi.fn();

        // Reset context to default state
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.time.hours = 14;
        ctx.time.minutes = 30;
        ctx.time.seconds = 0;
        ctx.modelValue.value = new Date('2024-01-15T14:30:00');
        ctx.rootProps.modelAuto = false;
        (ctx.rootProps as any).disabledTimes = null;
        ctx.defaults.range.value.enabled = false;
        ctx.defaults.range.value.disableTimeRangeValidation = false;
        ctx.defaults.timeConfig.value.enableSeconds = false;
    });

    describe('assignTime', () => {
        it('should assign hours value to time object', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();

            const { assignTime } = useTimePickerUtils();

            assignTime('hours', 16);

            expect(ctx.time.hours).toBe(16);
        });

        it('should assign minutes value to time object', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();

            const { assignTime } = useTimePickerUtils();

            assignTime('minutes', 45);

            expect(ctx.time.minutes).toBe(45);
        });

        it('should assign seconds value to time object', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();

            const { assignTime } = useTimePickerUtils();

            assignTime('seconds', 30);

            expect(ctx.time.seconds).toBe(30);
        });

        it('should assign array values in range mode', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = true;
            ctx.time.hours = [14, 16];
            ctx.time.minutes = [30, 45];
            ctx.time.seconds = [0, 0];

            const { assignTime } = useTimePickerUtils();

            assignTime('hours', [15, 17]);

            expect(ctx.time.hours).toEqual([15, 17]);

            // Reset
            ctx.defaults.range.value.enabled = false;
        });
    });

    describe('updateHours', () => {
        it('should update hours when valid', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();

            const { updateHours } = useTimePickerUtils(updateFlowMock);

            updateHours(16);

            expect(ctx.time.hours).toBe(16);
            expect(updateFlowMock).toHaveBeenCalled();
        });

        it('should call updateFlow when hours are updated', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();

            const { updateHours } = useTimePickerUtils(updateFlowMock);

            updateHours(20);

            expect(ctx.time.hours).toBe(20);
            expect(updateFlowMock).toHaveBeenCalled();
        });
    });

    describe('updateMinutes', () => {
        it('should update minutes when valid', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();

            const { updateMinutes } = useTimePickerUtils(updateFlowMock);

            updateMinutes(45);

            expect(ctx.time.minutes).toBe(45);
            expect(updateFlowMock).toHaveBeenCalled();
        });
    });

    describe('updateSeconds', () => {
        it('should update seconds when valid', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();

            const { updateSeconds } = useTimePickerUtils(updateFlowMock);

            updateSeconds(45);

            expect(ctx.time.seconds).toBe(45);
            expect(updateFlowMock).toHaveBeenCalled();
        });
    });

    describe('getSecondsValue', () => {
        it('should return 0 when seconds are disabled', () => {
            const { getSecondsValue } = useTimePickerUtils();

            const seconds = getSecondsValue();

            expect(seconds).toBe(0);
        });

        it('should return seconds value when enabled', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.timeConfig.value.enableSeconds = true;
            ctx.time.seconds = 45;

            const { getSecondsValue } = useTimePickerUtils();

            const seconds = getSecondsValue();

            expect(seconds).toBe(45);

            // Reset
            ctx.defaults.timeConfig.value.enableSeconds = false;
            ctx.time.seconds = 0;
        });

        it('should return array seconds in range mode', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.timeConfig.value.enableSeconds = true;
            ctx.defaults.range.value.enabled = true;
            ctx.time.hours = [14, 16];
            ctx.time.minutes = [30, 45];
            ctx.time.seconds = [15, 30];

            const { getSecondsValue } = useTimePickerUtils();

            const seconds = getSecondsValue(0);

            expect(seconds).toBe(15);

            // Reset
            ctx.defaults.timeConfig.value.enableSeconds = false;
            ctx.defaults.range.value.enabled = false;
        });
    });

    describe('getSetDateTime', () => {
        it('should set time on a date', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();

            // Set state BEFORE creating composable instance
            ctx.time.hours = 16;
            ctx.time.minutes = 45;
            ctx.time.seconds = 30;
            ctx.defaults.timeConfig.value.enableSeconds = true; // Enable seconds

            // Create composable AFTER state is set
            const { getSetDateTime } = useTimePickerUtils();

            const result = getSetDateTime(new Date('2024-01-15T10:00:00'));

            expect(result.getHours()).toBe(16);
            expect(result.getMinutes()).toBe(45);
            expect(result.getSeconds()).toBe(30);

            // Reset
            ctx.defaults.timeConfig.value.enableSeconds = false;
        });

        it('should handle null date value', async () => {
            const { getSetDateTime } = useTimePickerUtils();

            const result = getSetDateTime(null);

            expect(result).toBeInstanceOf(Date);
        });

        it('should handle range mode with index', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = true;
            ctx.time.hours = [14, 16];
            ctx.time.minutes = [30, 45];
            ctx.time.seconds = [0, 15];

            const { getSetDateTime } = useTimePickerUtils();

            const result = getSetDateTime(new Date('2024-01-15T10:00:00'), 1);

            expect(result.getHours()).toBe(16);
            expect(result.getMinutes()).toBe(45);

            // Reset
            ctx.defaults.range.value.enabled = false;
        });
    });

    describe('validateTime', () => {
        it('should return true for valid single time', () => {
            const { validateTime } = useTimePickerUtils();

            const valid = validateTime('hours', 16);

            expect(valid).toBe(true);
        });

        it('should validate range time values', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = true;
            ctx.time = { hours: [14, 16], minutes: [30, 45], seconds: [0, 0] };
            ctx.modelValue.value = [new Date('2024-01-15T14:30:00'), new Date('2024-01-15T16:45:00')];

            const { validateTime } = useTimePickerUtils();

            const valid = validateTime('hours', [15, 17]);

            expect(valid).toBe(true);

            // Reset
            ctx.defaults.range.value.enabled = false;
            ctx.time = { hours: 14, minutes: 30, seconds: 0 };
            ctx.modelValue.value = new Date('2024-01-15T14:30:00');
        });

        it('should return true when disableTimeRangeValidation is true', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = true;
            ctx.defaults.range.value.disableTimeRangeValidation = true;

            const { validateTime } = useTimePickerUtils();

            const valid = validateTime('hours', [16, 14]);

            expect(valid).toBe(true);

            // Reset
            ctx.defaults.range.value.enabled = false;
            ctx.defaults.range.value.disableTimeRangeValidation = false;
        });
    });

    describe('updateTimeValues', () => {
        it('should update hours and call handleTimeUpdate', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            const handleTimeUpdate = vi.fn();

            const { updateTimeValues } = useTimePickerUtils(updateFlowMock);

            updateTimeValues(16, true, false, handleTimeUpdate);

            expect(ctx.time.hours).toBe(16);
            expect(handleTimeUpdate).toHaveBeenCalled();
        });

        it('should update minutes when isHours and isSeconds are false', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            const handleTimeUpdate = vi.fn();

            const { updateTimeValues } = useTimePickerUtils(updateFlowMock);

            updateTimeValues(45, false, false, handleTimeUpdate);

            expect(ctx.time.minutes).toBe(45);
            expect(handleTimeUpdate).toHaveBeenCalled();
        });

        it('should update seconds when isSeconds is true', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            const handleTimeUpdate = vi.fn();

            const { updateTimeValues } = useTimePickerUtils(updateFlowMock);

            updateTimeValues(30, false, true, handleTimeUpdate);

            expect(ctx.time.seconds).toBe(30);
            expect(handleTimeUpdate).toHaveBeenCalled();
        });

        it('should not call handleTimeUpdate when modelValue is null', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.modelValue.value = null;
            const handleTimeUpdate = vi.fn();

            const { updateTimeValues } = useTimePickerUtils(updateFlowMock);

            updateTimeValues(16, true, false, handleTimeUpdate);

            expect(handleTimeUpdate).not.toHaveBeenCalled();

            // Reset
            ctx.modelValue.value = new Date('2024-01-15T14:30:00');
        });
    });

    describe('assignStartTime', () => {
        it('should assign single startTime values', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();

            const { assignStartTime } = useTimePickerUtils();

            assignStartTime({ hours: 10, minutes: 30, seconds: 15 });

            expect(ctx.time.hours).toBe(10);
            expect(ctx.time.minutes).toBe(30);
        });

        it('should assign array startTime values in range mode', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = true;

            const { assignStartTime } = useTimePickerUtils();

            assignStartTime([
                { hours: 10, minutes: 30, seconds: 0 },
                { hours: 14, minutes: 45, seconds: 0 },
            ]);

            expect(ctx.time.hours).toEqual([10, 14]);
            expect(ctx.time.minutes).toEqual([30, 45]);

            // Reset
            ctx.defaults.range.value.enabled = false;
        });

        it('should assign seconds when enableSeconds is true', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.timeConfig.value.enableSeconds = true;

            const { assignStartTime } = useTimePickerUtils();

            assignStartTime({ hours: 10, minutes: 30, seconds: 45 });

            expect(ctx.time.seconds).toBe(45);

            // Reset
            ctx.defaults.timeConfig.value.enableSeconds = false;
        });

        it('should handle null startTime', () => {
            const { assignStartTime } = useTimePickerUtils();

            // Should not throw error
            expect(() => assignStartTime(null)).not.toThrow();
        });
    });

    describe('disabledTimesConfig', () => {
        it('should return empty arrays when no disabled times', () => {
            const { disabledTimesConfig } = useTimePickerUtils();

            const config = disabledTimesConfig.value(0);

            expect(config.hours).toEqual([]);
            expect(config.minutes).toEqual([]);
            expect(config.seconds).toEqual([]);
        });

        it('should return disabled minutes for specific hour', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.disabledTimes = [
                { hours: 14, minutes: 30 },
                { hours: 14, minutes: 45 },
            ] as any;

            const { disabledTimesConfig } = useTimePickerUtils();

            const config = disabledTimesConfig.value(0, 14);

            expect(config.hours).toEqual([]);
            expect(config.minutes).toContain(30);
            expect(config.minutes).toContain(45);

            // Reset
            (ctx.rootProps as any).disabledTimes = null;
        });

        it('should return all minutes disabled when minutes is "*"', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.disabledTimes = [{ hours: 14, minutes: '*' }] as any;

            const { disabledTimesConfig } = useTimePickerUtils();

            const config = disabledTimesConfig.value(0, 14);

            expect(config.hours).toEqual([14]);
            expect(config.minutes).toBeUndefined();

            // Reset
            (ctx.rootProps as any).disabledTimes = null;
        });

        it('should handle range mode disabled times', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = true;
            ctx.rootProps.disabledTimes = [[{ hours: 14, minutes: 30 }], [{ hours: 16, minutes: 45 }]] as any;

            const { disabledTimesConfig } = useTimePickerUtils();

            const config0 = disabledTimesConfig.value(0, 14);
            const config1 = disabledTimesConfig.value(1, 16);

            expect(config0.minutes).toContain(30);
            expect(config1.minutes).toContain(45);

            // Reset
            ctx.defaults.range.value.enabled = false;
            (ctx.rootProps as any).disabledTimes = null;
        });

        it('should handle disabled seconds', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.disabledTimes = [
                { hours: 14, minutes: 30, seconds: 15 },
                { hours: 14, minutes: 30, seconds: 45 },
            ];

            const { disabledTimesConfig } = useTimePickerUtils();

            const config = disabledTimesConfig.value(0, 14);

            expect(config.seconds).toContain(15);
            expect(config.seconds).toContain(45);

            // Reset
            (ctx.rootProps as any).disabledTimes = null;
        });
    });

    describe('updateFlow callback', () => {
        it('should call updateFlow when provided to updateHours', async () => {
            const { updateHours } = useTimePickerUtils(updateFlowMock);

            updateHours(16);

            expect(updateFlowMock).toHaveBeenCalled();
        });

        it('should not throw when updateFlow is not provided', async () => {
            const { updateHours } = useTimePickerUtils();

            expect(() => updateHours(16)).not.toThrow();
        });
    });

    describe('Edge Cases', () => {
        it('should handle string number conversion in assignStartTime', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();

            const { assignStartTime } = useTimePickerUtils();

            assignStartTime({ hours: '10' as any, minutes: '30' as any, seconds: '15' as any });

            expect(ctx.time.hours).toBe(10);
            expect(ctx.time.minutes).toBe(30);
        });

        it('should handle missing seconds in assignStartTime', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.timeConfig.value.enableSeconds = true;

            const { assignStartTime } = useTimePickerUtils();

            assignStartTime({ hours: 10, minutes: 30, seconds: undefined as any });

            // When seconds is undefined, +undefined = NaN (implementation behavior)
            expect(ctx.time.seconds).toEqual(0);

            // Reset
            ctx.defaults.timeConfig.value.enableSeconds = false;
        });
    });
});
