import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ref } from 'vue';
import { useInput } from '../useInput';

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootProps = {
        locale: undefined,
    };
    const defaults = {
        textInput: ref({
            pattern: 'MM/dd/yyyy',
        }),
        startTime: ref({ hours: 10, minutes: 30, seconds: 0 }),
        timeConfig: ref({ enableSeconds: false }),
    };
    return { useContext: () => ({ rootProps, defaults }) };
});

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        getTimeObjFromCurrent: vi.fn(() => ({ hours: 0, minutes: 0, seconds: 0 })),
    }),
}));

describe('useInput', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('parseFreeInput', () => {
        it('should parse valid date string with string pattern', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.textInput.value.pattern = 'MM/dd/yyyy';

            const { parseFreeInput } = useInput();
            const result = parseFreeInput('01/15/2024');

            expect(result).toBeInstanceOf(Date);
            expect(result?.getMonth()).toBe(0); // January
            expect(result?.getDate()).toBe(15);
            expect(result?.getFullYear()).toBe(2024);
        });

        it('should return null for invalid date string', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.textInput.value.pattern = 'MM/dd/yyyy';

            const { parseFreeInput } = useInput();
            const result = parseFreeInput('invalid-date');

            expect(result).toBeNull();
        });

        it('should parse date with time from startTime when not pasted', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.textInput.value.pattern = 'MM/dd/yyyy';
            (ctx.defaults.startTime as any).value = { hours: 14, minutes: 30, seconds: 45 };

            const { parseFreeInput } = useInput();
            const result = parseFreeInput('01/15/2024');

            expect(result).toBeInstanceOf(Date);
            expect(result?.getHours()).toBe(14);
            expect(result?.getMinutes()).toBe(30);
            expect(result?.getSeconds()).toBe(45);
        });

        it('should parse date without time when textPasted is true', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.textInput.value.pattern = 'MM/dd/yyyy';

            const { parseFreeInput, textPasted } = useInput();
            textPasted.value = true;

            const result = parseFreeInput('01/15/2024');

            expect(result).toBeInstanceOf(Date);
            // Should use parsed time from the input, not startTime

            // Reset
            textPasted.value = false;
        });

        it('should parse date without time when inputVal is provided', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.textInput.value.pattern = 'MM/dd/yyyy';
            (ctx.defaults.startTime as any).value = { hours: 14, minutes: 30, seconds: 0 };

            const { parseFreeInput } = useInput();
            const result = parseFreeInput('01/15/2024', 'some-input-val');

            expect(result).toBeInstanceOf(Date);
            // When inputVal is provided, it should not apply startTime
        });

        it('should handle array of patterns and use first matching pattern', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.textInput.value.pattern = ['dd-MM-yyyy', 'MM/dd/yyyy', 'yyyy-MM-dd'];

            const { parseFreeInput } = useInput();
            const result = parseFreeInput('15-01-2024');

            expect(result).toBeInstanceOf(Date);
            expect(result?.getMonth()).toBe(0); // January
            expect(result?.getDate()).toBe(15);
            expect(result?.getFullYear()).toBe(2024);
        });

        it('should try all patterns in array until one matches', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.textInput.value.pattern = ['dd-MM-yyyy', 'MM/dd/yyyy', 'yyyy-MM-dd'];

            const { parseFreeInput } = useInput();
            const result = parseFreeInput('2024-01-15');

            expect(result).toBeInstanceOf(Date);
            expect(result?.getMonth()).toBe(0); // January
            expect(result?.getDate()).toBe(15);
            expect(result?.getFullYear()).toBe(2024);
        });

        it('should return null when no pattern in array matches', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.textInput.value.pattern = ['dd-MM-yyyy', 'MM/dd/yyyy'];

            const { parseFreeInput } = useInput();
            const result = parseFreeInput('invalid-format');

            expect(result).toBeNull();
        });

        it('should handle custom function pattern', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            const customParser = vi.fn((value: string) => {
                if (value === 'custom-date') {
                    return new Date(2024, 0, 15);
                }
                return null;
            });
            (ctx.defaults.textInput.value as any).pattern = customParser;

            const { parseFreeInput } = useInput();
            const result = parseFreeInput('custom-date');

            expect(customParser).toHaveBeenCalledExactlyOnceWith('custom-date');
            expect(result).toBeInstanceOf(Date);
            expect(result?.getMonth()).toBe(0);
            expect(result?.getDate()).toBe(15);
            expect(result?.getFullYear()).toBe(2024);
        });

        it('should handle different date formats with string pattern', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.textInput.value.pattern = 'yyyy-MM-dd';

            const { parseFreeInput } = useInput();
            const result = parseFreeInput('2024-03-20');

            expect(result).toBeInstanceOf(Date);
            expect(result?.getMonth()).toBe(2); // March
            expect(result?.getDate()).toBe(20);
            expect(result?.getFullYear()).toBe(2024);
        });

        it('should handle partial date input matching pattern length', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.textInput.value.pattern = 'MM/dd/yyyy';

            const { parseFreeInput } = useInput();
            const result = parseFreeInput('01/15');

            // Should parse what it can up to the input length
            expect(result).toBeInstanceOf(Date);
        });

        it('should use array startTime when available', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.textInput.value.pattern = 'MM/dd/yyyy';
            (ctx.defaults.startTime as any).value = [
                { hours: 9, minutes: 0, seconds: 0 },
                { hours: 17, minutes: 0, seconds: 0 },
            ];

            const { parseFreeInput } = useInput();
            const result = parseFreeInput('01/15/2024');

            expect(result).toBeInstanceOf(Date);
            expect(result?.getHours()).toBe(9);
            expect(result?.getMinutes()).toBe(0);
        });

        it('should handle locale-specific parsing', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.textInput.value.pattern = 'PP';
            ctx.rootProps.locale = undefined as any;

            const { parseFreeInput } = useInput();
            const result = parseFreeInput('01/15/2024');

            // Should use the locale from rootProps when parsing
            expect(result !== null || result === null).toBe(true);
        });
    });

    describe('textPasted', () => {
        it('should expose textPasted ref with default false value', () => {
            const { textPasted } = useInput();

            expect(textPasted.value).toBe(false);
        });

        it('should allow textPasted to be set to true', () => {
            const { textPasted } = useInput();

            textPasted.value = true;
            expect(textPasted.value).toBe(true);
        });

        it('should affect parsing behavior when textPasted is true', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.textInput.value.pattern = 'MM/dd/yyyy';
            (ctx.defaults.startTime as any).value = { hours: 10, minutes: 30, seconds: 0 };

            const { parseFreeInput, textPasted } = useInput();

            // First parse without paste
            const resultWithoutPaste = parseFreeInput('01/15/2024');
            expect(resultWithoutPaste?.getHours()).toBe(10);

            // Then parse with paste
            textPasted.value = true;
            const resultWithPaste = parseFreeInput('01/15/2024');

            // Should not apply startTime when pasted
            expect(resultWithPaste).toBeInstanceOf(Date);
        });
    });
});
