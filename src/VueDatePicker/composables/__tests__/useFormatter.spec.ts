import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ref, computed } from 'vue';
import { useFormatter } from '@/composables/useFormatter';

// Mock useContext to provide controlled props/defaults
vi.mock('@/composables/useContext.ts', () => {
    const modelValue = ref<Date | Date[] | null>(null);
    const state = { isInputFocused: false } as any;
    const rootProps = {
        locale: undefined,
        modelAuto: false,
    } as any;
    const defaults = {
        formats: computed(() => ({
            month: 'LLL',
            year: 'yyyy',
            weekDay: 'EEEEEE',
            quarter: 'MMMM',
            input: 'MM/dd/yyyy, HH:mm',
            preview: 'MM/dd/yyyy, HH:mm',
        })),
        textInput: computed(() => ({ enabled: true, format: 'MM/dd/yyyy, HH:mm', rangeSeparator: ' - ' })),
    } as any;
    const ctx = { state, modelValue, rootProps, defaults };
    return { useContext: () => ctx };
});

// Use real date utils

describe('useFormatter', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date('2024-04-10T15:16:17'));
    });
    afterEach(() => vi.useRealTimers());

    it('should format year and month according to defaults', () => {
        const { formatYear, formatMonth } = useFormatter();
        expect(formatYear(2025)).toBe('2025');
        expect(typeof formatMonth(0)).toBe('string'); // Jan localized token LLL
    });

    it('should format week day and quarter values', () => {
        const { formatWeekDay, formatQuarter, formatQuarterText } = useFormatter();
        const monday = formatWeekDay(1); // based on static date mapping
        expect(typeof monday).toBe('string');

        const qStart = new Date('2024-04-01T00:00:00');
        const qEnd = new Date('2024-06-30T00:00:00');
        expect(typeof formatQuarter(qStart)).toBe('string');
        expect(formatQuarterText(qStart, qEnd)).toContain('-');
    });

    it('should format selected date for single value using input pattern', () => {
        const { formatSelectedDate } = useFormatter();
        const d = new Date('2024-01-02T03:04:00');
        const txt = formatSelectedDate(d);
        expect(txt).toMatch(/^01\/02\/2024, /);
    });

    it('should format selected date for range with separator', () => {
        const { formatSelectedDate } = useFormatter();
        const r1 = new Date('2024-01-01T00:00:00');
        const r2 = new Date('2024-01-05T00:00:00');
        const txt = formatSelectedDate([r1, r2]);
        expect(txt).toContain(' - ');
    });

    it('should use preview format when requested', () => {
        const { formatSelectedDate } = useFormatter();
        const d = new Date('2024-08-09T10:00:00');
        const preview = formatSelectedDate(d, undefined, true);
        expect(preview).toMatch(/08\/09\/2024/);
    });

    it('should return empty string when no value is provided', () => {
        const { formatSelectedDate } = useFormatter();
        expect(formatSelectedDate(null)).toBe('');
    });

    it('should format for text input when focused and using range or single', async () => {
        // Access the same mocked context to toggle state and modelValue
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext() as any;

        const { formatForTextInput } = useFormatter();

        // Single
        ctx.state.isInputFocused = true;
        ctx.modelValue.value = new Date('2024-05-06T07:08:00');
        expect(formatForTextInput()).toMatch(/05\/06\/2024/);

        // Range
        ctx.modelValue.value = [new Date('2024-05-01'), new Date('2024-05-02')];
        expect(formatForTextInput()).toContain(ctx.defaults.textInput.value.rangeSeparator);

        // Not focused falls back to formatSelectedDate
        ctx.state.isInputFocused = false;
        const out = formatForTextInput();
        expect(out).toContain('2024');
    });
});
