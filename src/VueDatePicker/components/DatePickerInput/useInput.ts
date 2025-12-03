import { computed, ref } from 'vue';
import { isDate, isValid, parse, set } from 'date-fns';
import { useContext, useHelperFns } from '@/composables';

export const useInput = () => {
    const {
        getDate,
        rootProps,
        defaults: { textInput, startTime, timeConfig },
    } = useContext();
    const { getTimeObjFromCurrent } = useHelperFns();

    const textPasted = ref(false);

    const assignTimeTextInput = computed(() =>
        Array.isArray(startTime.value)
            ? startTime.value[0]
            : (startTime.value ?? getTimeObjFromCurrent(getDate(), {}, timeConfig.value.enableSeconds)),
    );

    const getPatternForValue = (fullPattern: string, value: string) => {
        const separatorRegex = /[^a-zA-Z]+/g;
        const valueSeparatorRegex = /\D+/g;

        const valueParts = value.split(valueSeparatorRegex);
        const patternParts = fullPattern.split(separatorRegex);
        const patternSeparators = fullPattern.match(separatorRegex) || [];
        const valueSeparators = value.match(valueSeparatorRegex) || [];

        let result = '';

        for (let i = 0; i < valueParts.length && i < patternParts.length; i++) {
            if (i > 0 && valueSeparators[i - 1]) {
                result += patternSeparators[i - 1] || valueSeparators[i - 1];
            }

            const valuePartLength = valueParts[i]?.length;
            result += patternParts[i]?.slice(0, valuePartLength);
        }

        return result;
    };

    const parseStringToDate = (value: string, pattern: string, inputVal?: string): Date | null => {
        const parsedDate = parse(value, getPatternForValue(pattern, value), getDate(), {
            locale: rootProps.locale,
        });

        if (isValid(parsedDate) && isDate(parsedDate)) {
            if (inputVal || textPasted.value) return parsedDate;
            return set(parsedDate, {
                hours: +assignTimeTextInput.value!.hours,
                minutes: +assignTimeTextInput.value!.minutes,
                seconds: +(assignTimeTextInput.value!.seconds ?? 0),
                milliseconds: 0,
            });
        }
        return null;
    };

    const parseFreeInput = (value: string, inputVal?: string): Date | null => {
        if (typeof textInput.value.pattern === 'string') {
            return parseStringToDate(value, textInput.value.pattern, inputVal);
        }

        if (Array.isArray(textInput.value.pattern)) {
            let parsedDate = null;
            for (const textVal of textInput.value.pattern) {
                parsedDate = parseStringToDate(value, textVal, inputVal);
                if (parsedDate) {
                    break;
                }
            }
            return parsedDate;
        }

        if (typeof textInput.value.pattern === 'function') {
            return textInput.value.pattern(value as never) as unknown as Date;
        }

        return null;
    };

    const createMaskedValue = (raw: string, maskFormat: string) => {
        const tokenPattern = /(YYYY|MM|DD|hh|mm|ss)/g;
        const tokens: string[] = [...maskFormat.matchAll(tokenPattern)].map((m) => m[0]);
        const delimiters: string[] = maskFormat.replace(tokenPattern, '|').split('|').filter(Boolean);
        const tokenLengths: number[] = tokens.map((t) => t.length);

        let masked = '',
            index = 0;
        for (let i = 0; i < tokens.length; i++) {
            const len = tokenLengths[i]!;
            const part = raw.slice(index, index + len);
            if (!part) break;
            masked += part;
            if (part.length === len && delimiters[i]) masked += delimiters[i];
            index += len;
        }
        return masked;
    };

    const applyMaxValues = (raw: string, tokens: string[]) => {
        const maxValues: Record<string, number> = {
            MM: 12,
            DD: 31,
            hh: 23,
            mm: 59,
            ss: 59,
        };

        let result = '',
            index = 0;
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i]!;
            const len = token.length;
            const part = raw.slice(index, index + len);
            if (!part) break;

            if (part.length < len) {
                result += part;
            } else {
                let num = Number.parseInt(part, 10);
                if (maxValues[token] && num > maxValues[token]) num = maxValues[token];
                result += num.toString().padStart(len, '0').slice(0, len);
            }

            index += len;
        }

        return result;
    };

    return {
        textPasted,
        parseFreeInput,
        applyMaxValues,
        createMaskedValue,
    };
};
