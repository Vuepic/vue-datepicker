import { ref, toRef, watch } from 'vue';
import { format, getHours, getMinutes, getMonth, getSeconds, getYear, parse, setYear } from 'date-fns';

import { dateToUtc, getDate, setDateTime } from '@/utils/date-utils';
import { convertType, errors } from '@/utils/util';
import { useUtils } from '@/components/composables';

import type { ModelValue, VueEmit, TimeModel, MonthModel, ModelTypeConverted } from '@/interfaces';
import type { AllPropsType } from '@/utils/props';
import type { Ref } from 'vue';

/**
 * Handles values from external to internal and vise versa
 */
export const useExternalInternalMapper = (emit: VueEmit, props: AllPropsType, isInputFocused: Ref<boolean>) => {
    const internalModelValue = ref();
    const {
        getZonedToUtc,
        getZonedDate,
        formatDate,
        getDefaultPattern,
        checkRangeEnabled,
        checkPartialRangeValue,
        isValidDate,
        setDateMonthOrYear,
        defaults,
    } = useUtils(props);

    const inputValue = ref('');
    const formatRef = toRef(props, 'format');

    watch(internalModelValue, () => {
        emit('internal-model-change', internalModelValue.value);
    });

    watch(formatRef, () => {
        formatInputValue();
    });

    const getTimeVal = (date?: Date): TimeModel | ModelTypeConverted => {
        const dateValue = date || getDate();
        if (props.modelType) return toModelType(dateValue);
        return {
            hours: getHours(dateValue),
            minutes: getMinutes(dateValue),
            seconds: props.enableSeconds ? getSeconds(dateValue) : 0,
        };
    };

    const getMonthVal = (date: Date): MonthModel | ModelTypeConverted => {
        if (props.modelType) return toModelType(date);
        return { month: getMonth(date), year: getYear(date) };
    };

    const mapYearExternalToInternal = (value: number | number[]): Date | Date[] => {
        if (Array.isArray(value)) {
            return checkRangeEnabled(() => [
                setYear(getDate(), value[0]),
                value[1] ? setYear(getDate(), value[1]) : checkPartialRangeValue(),
            ]);
        }
        return setYear(getDate(), +value);
    };

    const convertCustomModeType = (value: unknown, defaultValue: Date): Date => {
        const shouldConvert = (typeof value === 'string' || typeof value === 'number') && props.modelType;
        if (shouldConvert) return parseModelType(value);
        return defaultValue;
    };

    const mapTimeExternalToInternal = (value: TimeModel | TimeModel[]): Date | Date[] => {
        // Unlike in other modes, partial range is not supported here, since the time needs to be defined on both time inputs
        if (Array.isArray(value)) {
            return [
                convertCustomModeType(
                    value[0],
                    setDateTime(null, +value[0].hours, +value[0].minutes, value[0].seconds),
                ),
                convertCustomModeType(
                    value[1],
                    setDateTime(null, +value[1].hours, +value[1].minutes, value[1].seconds),
                ),
            ];
        }
        return convertCustomModeType(value, setDateTime(null, value.hours, value.minutes, value.seconds));
    };

    const mapMonthExternalToInternal = (value: MonthModel | MonthModel[]): Date | Date[] => {
        if (Array.isArray(value)) {
            if (props.multiDates) {
                return value.map((val) => convertCustomModeType(val, setDateMonthOrYear(null, +val.month, +val.year)));
            }
            return checkRangeEnabled(() => [
                convertCustomModeType(value[0], setDateMonthOrYear(null, +value[0].month, +value[0].year)),
                convertCustomModeType(
                    value[1],
                    value[1] ? setDateMonthOrYear(null, +value[1].month, +value[1].year) : checkPartialRangeValue(),
                ),
            ]);
        }
        return convertCustomModeType(value, setDateMonthOrYear(null, +value.month, +value.year));
    };

    // Map external multi dates format to internal model value
    const mapMultiDateExternalToInternal = (value: Date[] | string[]) => {
        if (Array.isArray(value)) {
            return value.map((date) => parseModelType(date));
        }
        throw new Error(errors.dateArr('multi-dates'));
    };

    // Map external week picker format to internal model value
    const mapWeekExternalToInternal = (value: Date[]) => {
        if (Array.isArray(value)) {
            return [getDate(value[0]), getDate(value[1])];
        }
        throw new Error(errors.dateArr('week-picker'));
    };

    // Map external format to internal model value for range and single picker
    const mapDateExternalToInternal = (value: Date | Date[]) => {
        if (props.modelAuto) {
            if (Array.isArray(value)) return [parseModelType(value[0]), parseModelType(value[1])];
            // In case of auto-apply, if we add null, it will never select range
            return props.autoApply ? [parseModelType(value)] : [parseModelType(value), null];
        }
        if (Array.isArray(value)) {
            return checkRangeEnabled(() => [
                parseModelType(value[0]),
                value[1] ? parseModelType(value[1]) : checkPartialRangeValue(),
            ]);
        }
        return parseModelType(value);
    };

    /**
     * When emitting value back to host, if partial date is enabled and second value is not selected
     * auto add 'null' value as second value
     */
    const sanitizeModelValue = () => {
        if (Array.isArray(internalModelValue.value) && props.range && internalModelValue.value.length === 1) {
            internalModelValue.value.push(checkPartialRangeValue());
        }
    };

    // Shared method, create mapped array of dates to emit
    const getRangeEmitValue = (): Date[] => {
        const modelValue = internalModelValue.value as Date[];
        return [
            toModelType(modelValue[0]),
            modelValue[1] ? toModelType(modelValue[1]) : checkPartialRangeValue(),
        ] as Date[];
    };

    // Get value for model-auto, single or array, internally it is always handled as an array
    const getModelAutoForExternal = () =>
        (internalModelValue.value as Date[])[1]
            ? getRangeEmitValue()
            : toModelType(convertType(internalModelValue.value[0]));

    // Map internal value for external
    const getMultiDatesForExternal = () =>
        ((internalModelValue.value as Date[]) || []).map((date) => toModelType(date) as string);

    // Parent internal to external function mapper that will return proper date format based on provided config
    const mapInternalDatesToExternal = () => {
        sanitizeModelValue();
        if (props.modelAuto) return getModelAutoForExternal();
        if (props.multiDates) return getMultiDatesForExternal();
        if (Array.isArray(internalModelValue.value)) {
            return checkRangeEnabled(() => getRangeEmitValue());
        }
        return toModelType(convertType(internalModelValue.value));
    };

    const mapExternalToInternal = (value: ModelValue) => {
        if (!value) return null;
        if (props.timePicker) return mapTimeExternalToInternal(convertType(value));
        if (props.monthPicker) return mapMonthExternalToInternal(convertType(value));
        if (props.yearPicker) return mapYearExternalToInternal(convertType(value));
        if (props.multiDates) return mapMultiDateExternalToInternal(convertType(value));
        if (props.weekPicker) return mapWeekExternalToInternal(convertType(value));
        return mapDateExternalToInternal(convertType(value));
    };

    /**
     * Map external values to dates that will be used internally by the datepicker
     * Also does the validation of the provided value, if invalid it will use null as a default or an empty value
     */
    const parseExternalModelValue = (value: ModelValue): void => {
        const mappedDate = mapExternalToInternal(value);

        if (isValidDate(convertType(mappedDate))) {
            internalModelValue.value = convertType(mappedDate);
            formatInputValue();
        } else {
            internalModelValue.value = null;
            inputValue.value = '';
        }
    };

    const formatRangeTextInput = () => {
        const formatter = (value: Date) => format(value, defaults.value.textInputOptions?.format as string);
        return `${formatter(internalModelValue.value[0])} ${defaults.value.textInputOptions?.rangeSeparator} ${
            internalModelValue.value[1] ? formatter(internalModelValue.value[1]) : ''
        }`;
    };

    // If text input format is enabled, on input focus, set the text to the given format
    const formatForTextInput = () => {
        if (isInputFocused.value && internalModelValue.value) {
            if (Array.isArray(internalModelValue.value)) return formatRangeTextInput();
            return format(internalModelValue.value, defaults.value.textInputOptions?.format as string);
        }
        return formatDate(internalModelValue.value);
    };

    // Get proper input value depending on the mode
    const getInputValue = (): string => {
        if (!internalModelValue.value) return '';
        if (props.multiDates) return (internalModelValue.value as Date[]).map((date) => formatDate(date)).join('; ');
        if (props.textInput && typeof defaults.value.textInputOptions?.format === 'string') return formatForTextInput();
        return formatDate(internalModelValue.value);
    };

    /**
     * Map the date value(s) to the human-readable text for the input field
     */
    const formatInputValue = (): void => {
        if (!props.format || typeof props.format === 'string') {
            inputValue.value = getInputValue();
        } else {
            inputValue.value = props.format(internalModelValue.value as Date | Date[]);
        }
    };

    const parseModelType = (value: string | number | Date): Date => {
        if (props.utc) {
            const toDate = new Date(value);
            return props.utc === 'preserve' ? new Date(toDate.getTime() + toDate.getTimezoneOffset() * 60000) : toDate;
        }
        if (props.modelType) {
            if (props.modelType === 'date' || props.modelType === 'timestamp') return getZonedDate(new Date(value));

            if (props.modelType === 'format' && (typeof props.format === 'string' || !props.format))
                return parse(value as string, getDefaultPattern(), new Date());

            return getZonedDate(parse(value as string, props.modelType, new Date()));
        }

        return getZonedDate(new Date(value));
    };

    const toModelType = (val: Date): string | number | Date => {
        if (!val) return '';
        if (props.utc) {
            return dateToUtc(val, props.utc === 'preserve');
        }
        if (props.modelType) {
            if (props.modelType === 'timestamp') return +getZonedToUtc(val);

            if (props.modelType === 'format' && (typeof props.format === 'string' || !props.format))
                return formatDate(getZonedToUtc(val));

            return formatDate(getZonedToUtc(val), props.modelType);
        }
        return getZonedToUtc(val);
    };

    const emitValue = (value: ModelValue): void => {
        emit('update:model-value', value);
    };

    /**
     * Shared code between modes that support range and partial range
     * Maps the internal model-value into appropriate output
     */
    const mapInternalToSpecificExternal = <T extends (val: Date) => ReturnType<T> | ReturnType<T>[]>(mapper: T) => {
        if (Array.isArray(internalModelValue.value)) {
            if (props.multiDates) {
                return internalModelValue.value.map((value) => mapper(value));
            }
            return [
                mapper(internalModelValue.value[0]),
                internalModelValue.value[1] ? mapper(internalModelValue.value[1]) : checkPartialRangeValue(),
            ];
        }
        return mapper(convertType(internalModelValue.value));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const modeEmitter = (mapper: any) => emitValue(convertType(mapInternalToSpecificExternal(mapper)));

    /**
     * When date is selected, emit event to update modelValue on external,
     * and format input value
     */
    const emitModelValue = (): void => {
        formatInputValue();

        if (props.monthPicker) return modeEmitter(getMonthVal);
        if (props.timePicker) return modeEmitter(getTimeVal);
        if (props.yearPicker) return modeEmitter(getYear);
        if (props.weekPicker) return emitValue(internalModelValue.value);
        return emitValue(mapInternalDatesToExternal());
    };

    // Check if there is any selection before emitting value, to prevent null setting
    const checkBeforeEmit = (): boolean => {
        if (internalModelValue.value) {
            if (props.range) {
                if (props.partialRange) return internalModelValue.value.length >= 1;
                return internalModelValue.value.length === 2;
            }
            return !!internalModelValue.value;
        }
        return false;
    };

    return {
        inputValue,
        internalModelValue,
        checkBeforeEmit,
        parseExternalModelValue,
        formatInputValue,
        emitModelValue,
    };
};
