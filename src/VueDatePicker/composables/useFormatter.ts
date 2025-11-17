import { format, setMonth, setYear } from 'date-fns';
import { useContext } from '@/composables/useContext.ts';

export const useFormatter = () => {
    const {
        getDate,
        state,
        modelValue,
        rootProps,
        defaults: { formats, textInput },
    } = useContext();

    const formatYear = (year: number) => {
        return format(setYear(getDate(), year), formats.value.year, { locale: rootProps.locale });
    };

    const formatMonth = (month: number) => {
        return format(setMonth(getDate(), month), formats.value.month, { locale: rootProps.locale });
    };

    const formatWeekDay = (date: Date) => {
        return format(date, formats.value.weekDay, { locale: rootProps.locale });
    };

    const formatQuarter = (quarter: Date) => {
        return format(quarter, formats.value.quarter, { locale: rootProps.locale });
    };

    const formatQuarterText = (start: Date, end: Date) => {
        return [start, end].map((date) => formatQuarter(date)).join('-');
    };

    const formatDay = (date: Date) => {
        return format(date, formats.value.day, { locale: rootProps.locale });
    };

    const formatSelectedDate = (value: Date | Date[] | null, customPattern?: string, preview?: boolean) => {
        const fmt = preview ? formats.value.preview : formats.value.input;
        if (!value) return '';
        if (typeof fmt === 'function') return fmt(value as never);
        const pattern = customPattern ?? fmt;
        const options = { locale: rootProps.locale };

        if (Array.isArray(value)) {
            return `${format(value[0]!, pattern, options)}${rootProps.modelAuto && !value[1] ? '' : textInput.value.rangeSeparator}${
                value[1] ? format(value[1], pattern, options) : ''
            }`;
        }

        return format(value, pattern, options);
    };

    const formatRangeTextInput = () => {
        const formatter = (value: Date) => format(value, textInput.value.format as string);
        if (Array.isArray(modelValue.value)) {
            return `${formatter(modelValue.value[0]!)} ${textInput.value.rangeSeparator} ${
                modelValue.value[1] ? formatter(modelValue.value[1]) : ''
            }`;
        }
        return '';
    };

    // If text input format is enabled, on input focus, set the text to the given format
    const formatForTextInput = () => {
        if (state.isInputFocused && modelValue.value) {
            if (Array.isArray(modelValue.value)) return formatRangeTextInput();
            return format(modelValue.value, textInput.value.format as string);
        }
        return formatSelectedDate(modelValue.value);
    };

    const formatPreview = (value: Date | Date[] | null) => {
        return formatSelectedDate(value, undefined, true);
    };

    return {
        formatYear,
        formatMonth,
        formatWeekDay,
        formatQuarter,
        formatSelectedDate,
        formatForTextInput,
        formatPreview,
        formatQuarterText,
        formatDay,
    };
};
