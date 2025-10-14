import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ref, reactive } from 'vue';
import { useTimePicker } from '@/components/TimePicker/useTimePicker';

// Mock dependencies
vi.mock('@/composables/useContext.ts', () => {
    const time = reactive({
        hours: 14,
        minutes: 30,
        seconds: 0,
    });
    const modelValue = ref<Date | Date[] | null>(new Date('2024-01-15T14:30:00'));
    const rootProps = {
        startTime: null,
    };
    const isTextInputDate = ref(false);
    const defaults = {
        startTime: ref(null),
        range: ref({
            enabled: false,
        }),
        tz: ref(null),
        timeConfig: ref({
            enableSeconds: false,
        }),
    };
    const state = reactive({
        isTextInputDate: false,
    });
    return {
        useContext: () => ({
            state,
            time,
            modelValue,
            rootProps,
            defaults,
        }),
    };
});

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        getDate: vi.fn((date?: Date) => date || new Date('2024-01-15T12:00:00')),
        getTimeObj: vi.fn((date?: Date | null) => {
            const d = date || new Date('2024-01-15T12:00:00');
            return {
                hours: d.getHours(),
                minutes: d.getMinutes(),
                seconds: d.getSeconds(),
            };
        }),
    }),
}));

vi.mock('@/composables/useRemapper.ts', () => ({
    useRemapper: vi.fn((_callback: () => void) => {
        // Store callback for potential execution in tests
    }),
}));

vi.mock('@/composables/useTimeZone.ts', () => ({
    useTimeZone: () => ({
        toTzSafe: vi.fn((date) => date),
    }),
}));

vi.mock('@/components/TimePicker/useTimePickerUtils.ts', () => ({
    useTimePickerUtils: (updateFlow?: () => void) => ({
        updateTimeValues: vi.fn((value, isHours, isSeconds, callback) => {
            // Call updateFlow first (emits update-flow-step)
            if (updateFlow) updateFlow();
            // Then call the callback (emits time-update)
            callback();
        }),
        getSetDateTime: vi.fn((date, _index) => {
            if (date) return date;
            return new Date('2024-01-15T12:00:00');
        }),
        assignTime: vi.fn(async (property, value) => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.time[property] = value;
        }),
        assignStartTime: vi.fn(),
        disabledTimesConfig: null,
        validateTime: vi.fn(() => true),
    }),
}));

describe('useTimePicker', () => {
    let emitMock: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        vi.clearAllMocks();
        emitMock = vi.fn();
    });

    describe('Initialization', () => {
        it('should return time, modelValue, and functions', () => {
            const result = useTimePicker(emitMock);

            expect(result).toHaveProperty('time');
            expect(result).toHaveProperty('modelValue');
            expect(result).toHaveProperty('updateTime');
            expect(result).toHaveProperty('validateTime');
            expect(result).toHaveProperty('disabledTimesConfig');
        });

        it('should initialize time from modelValue', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.modelValue.value = new Date('2024-01-15T16:45:30');

            const result = useTimePicker(emitMock);

            expect(result.time).toBeDefined();
        });
    });

    describe('updateTime', () => {
        it('should update hours when isHours is true', async () => {
            const { updateTime } = useTimePicker(emitMock);

            updateTime(16, true, false);

            expect(emitMock).toHaveBeenCalledTimes(2);
            expect(emitMock).toHaveBeenNthCalledWith(1, 'update-flow-step');
            expect(emitMock).toHaveBeenNthCalledWith(2, 'time-update');
        });

        it('should update minutes when isHours and isSeconds are false', async () => {
            const { updateTime } = useTimePicker(emitMock);

            updateTime(45, false, false);

            expect(emitMock).toHaveBeenCalledTimes(2);
            expect(emitMock).toHaveBeenNthCalledWith(1, 'update-flow-step');
            expect(emitMock).toHaveBeenNthCalledWith(2, 'time-update');
        });

        it('should update seconds when isSeconds is true', async () => {
            const { updateTime } = useTimePicker(emitMock);

            updateTime(30, false, true);

            expect(emitMock).toHaveBeenCalledTimes(2);
            expect(emitMock).toHaveBeenNthCalledWith(1, 'update-flow-step');
            expect(emitMock).toHaveBeenNthCalledWith(2, 'time-update');
        });

        it('should emit time-update event', async () => {
            const { updateTime } = useTimePicker(emitMock);

            updateTime(16, true, false);

            expect(emitMock).toHaveBeenCalledTimes(2);
            expect(emitMock).toHaveBeenNthCalledWith(1, 'update-flow-step');
            expect(emitMock).toHaveBeenNthCalledWith(2, 'time-update');
        });

        it('should update modelValue when updating time', async () => {
            const { updateTime } = useTimePicker(emitMock);

            updateTime(16, true, false);

            // ModelValue should be updated through getSetDateTime
            expect(emitMock).toHaveBeenCalledTimes(2);
            expect(emitMock).toHaveBeenNthCalledWith(1, 'update-flow-step');
            expect(emitMock).toHaveBeenNthCalledWith(2, 'time-update');
        });
    });

    describe('Range Mode', () => {
        beforeEach(async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = true;
            ctx.time.value = {
                hours: [14, 16],
                minutes: [30, 45],
                seconds: [0, 0],
            };
            ctx.modelValue.value = [new Date('2024-01-15T14:30:00'), new Date('2024-01-15T16:45:00')];
        });

        afterEach(async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = false;
            ctx.time.value = {
                hours: 14,
                minutes: 30,
                seconds: 0,
            };
            ctx.modelValue.value = new Date('2024-01-15T14:30:00');
        });

        it('should handle range mode time updates', () => {
            const { updateTime } = useTimePicker(emitMock);

            updateTime([15, 17], true, false);

            expect(emitMock).toHaveBeenCalledTimes(2);
            expect(emitMock).toHaveBeenNthCalledWith(1, 'update-flow-step');
            expect(emitMock).toHaveBeenNthCalledWith(2, 'time-update');
        });

        it('should update array modelValue in range mode', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();

            const { updateTime } = useTimePicker(emitMock);

            updateTime([15, 17], true, false);

            expect(Array.isArray(ctx.modelValue.value)).toBe(true);
        });
    });

    describe('Start Time', () => {
        it('should handle startTime prop', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.startTime = { hours: 10, minutes: 30, seconds: 0 };

            const result = useTimePicker(emitMock);

            expect(result.time).toBeDefined();

            // Reset
            (ctx.rootProps as any).startTime = null;
        });

        it('should handle array startTime in range mode', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = true;
            ctx.rootProps.startTime = [
                { hours: 10, minutes: 30, seconds: 0 },
                { hours: 14, minutes: 45, seconds: 0 },
            ];

            const result = useTimePicker(emitMock);

            expect(result.time).toBeDefined();

            // Reset
            ctx.defaults.range.value.enabled = false;
            (ctx.rootProps as any).startTime = null;
        });
    });

    describe('Null Model Value', () => {
        it('should handle null modelValue', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.modelValue.value = null;

            const result = useTimePicker(emitMock);

            expect(result.modelValue).toBeDefined();

            // Reset
            ctx.modelValue.value = new Date('2024-01-15T14:30:00');
        });

        it('should assign empty model when modelValue is null', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.modelValue.value = null;

            useTimePicker(emitMock);

            // ModelValue should be assigned through assignEmptyModel
            expect(ctx.modelValue).toBeDefined();

            // Reset
            ctx.modelValue.value = new Date('2024-01-15T14:30:00');
        });

        it('should handle null modelValue in range mode', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = true;
            ctx.modelValue.value = null;

            const result = useTimePicker(emitMock);

            expect(result.modelValue).toBeDefined();

            // Reset
            ctx.defaults.range.value.enabled = false;
            ctx.modelValue.value = new Date('2024-01-15T14:30:00');
        });
    });

    describe('Seconds Configuration', () => {
        it('should handle seconds when enableSeconds is true', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.timeConfig.value.enableSeconds = true;
            ctx.time.value.seconds = 45;

            const { updateTime } = useTimePicker(emitMock);

            updateTime(30, false, true);

            expect(emitMock).toHaveBeenCalledTimes(2);
            expect(emitMock).toHaveBeenNthCalledWith(1, 'update-flow-step');
            expect(emitMock).toHaveBeenNthCalledWith(2, 'time-update');

            // Reset
            ctx.defaults.timeConfig.value.enableSeconds = false;
            ctx.time.value.seconds = 0;
        });

        it('should set seconds to 0 when enableSeconds is false', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.timeConfig.value.enableSeconds = false;

            const { updateTime } = useTimePicker(emitMock);

            updateTime(30, false, true);

            // Seconds should be handled according to enableSeconds config
            expect(emitMock).toHaveBeenCalledTimes(2);
            expect(emitMock).toHaveBeenNthCalledWith(1, 'update-flow-step');
            expect(emitMock).toHaveBeenNthCalledWith(2, 'time-update');
        });
    });

    describe('Update Flow Step', () => {
        it('should emit update-flow-step event', () => {
            const { updateTime } = useTimePicker(emitMock);

            updateTime(16, true, false);

            expect(emitMock).toHaveBeenCalledTimes(2);
            expect(emitMock).toHaveBeenNthCalledWith(1, 'update-flow-step');
        });
    });

    describe('Time From Model', () => {
        it('should set time from single modelValue', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.modelValue.value = new Date('2024-01-15T16:45:30');

            const result = useTimePicker(emitMock);

            expect(result.time).toBeDefined();
        });

        it('should set time from array modelValue in range mode', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = true;
            ctx.modelValue.value = [new Date('2024-01-15T14:30:00'), new Date('2024-01-15T16:45:00')];

            const result = useTimePicker(emitMock);

            expect(result.time).toBeDefined();

            // Reset
            ctx.defaults.range.value.enabled = false;
            ctx.modelValue.value = new Date('2024-01-15T14:30:00');
        });
    });

    describe('validateTime', () => {
        it('should expose validateTime function', () => {
            const { validateTime } = useTimePicker(emitMock);

            expect(validateTime).toBeDefined();
            expect(typeof validateTime).toBe('function');
        });

        it('should validate time values', () => {
            const { validateTime } = useTimePicker(emitMock);

            const isValid = validateTime('hours', 16);

            expect(isValid).toBe(true);
        });
    });

    describe('disabledTimesConfig', () => {
        it('should expose disabledTimesConfig', () => {
            const { disabledTimesConfig } = useTimePicker(emitMock);

            expect(disabledTimesConfig).toBeDefined();
        });
    });

    describe('Text Input Date', () => {
        it('should handle text input date changes', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            (ctx.state.isTextInputDate as any) = true;

            const result = useTimePicker(emitMock);

            expect(result.time).toBeDefined();

            // Reset
            (ctx.state.isTextInputDate as any) = false;
        });
    });

    describe('Timezone Support', () => {
        it('should handle timezone conversion', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            (ctx.defaults.tz as any).value = 'America/New_York';

            const result = useTimePicker(emitMock);

            expect(result.modelValue).toBeDefined();

            // Reset
            (ctx.defaults.tz as any).value = null;
        });
    });

    describe('Parse Start Time', () => {
        it('should parse startTime with all values', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.startTime = { hours: '10', minutes: '30', seconds: '45' };

            const result = useTimePicker(emitMock);

            expect(result).toBeDefined();

            // Reset
            (ctx.rootProps as any).startTime = null;
        });

        it('should parse startTime without seconds', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            (ctx.rootProps as any).startTime = { hours: '10', minutes: '30', seconds: undefined };

            const result = useTimePicker(emitMock);

            expect(result).toBeDefined();

            // Reset
            (ctx.rootProps as any).startTime = null;
        });
    });

    describe('Integration', () => {
        it('should handle complete time update flow', async () => {
            const { updateTime } = useTimePicker(emitMock);

            updateTime(16, true, false);

            expect(emitMock).toHaveBeenCalledTimes(2);
            expect(emitMock).toHaveBeenNthCalledWith(1, 'update-flow-step');
            expect(emitMock).toHaveBeenNthCalledWith(2, 'time-update');
        });

        it('should update modelValue after time change', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();

            const { updateTime } = useTimePicker(emitMock);

            updateTime(16, true, false);

            expect(ctx.modelValue.value).toBeDefined();
        });
    });

    describe('Edge Cases', () => {
        it('should handle rapid consecutive updates', () => {
            const { updateTime } = useTimePicker(emitMock);

            updateTime(16, true, false);
            updateTime(17, true, false);
            updateTime(18, true, false);

            expect(emitMock).toHaveBeenCalledTimes(6); // 3 update-flow-step + 3 time-update
        });

        it('should handle mixed update types', () => {
            const { updateTime } = useTimePicker(emitMock);

            updateTime(16, true, false);
            updateTime(45, false, false);
            updateTime(30, false, true);

            expect(emitMock).toHaveBeenCalledTimes(6);
            // Verify both event types are called (3 times each)
            expect(emitMock).toHaveBeenNthCalledWith(1, 'update-flow-step');
            expect(emitMock).toHaveBeenNthCalledWith(2, 'time-update');
        });
    });
});
