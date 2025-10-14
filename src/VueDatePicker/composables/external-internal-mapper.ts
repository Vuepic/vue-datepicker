import { ref, toRef, watch } from 'vue';
import { addHours, format, getHours, getMinutes, getMonth, getSeconds, getYear, parse, set, setYear } from 'date-fns';

import {
    checkPartialRangeValue,
    checkRangeEnabled,
    dateToUtc,
    formatDate,
    getDate,
    getWeekFromDate,
    isValidDate,
    setDateMonthOrYear,
    setDateTime,
} from '@/utils/date-utils';
import { convertType, errors } from '@/utils/util';
import { useDefaults } from '@/composables/defaults';

import type { ModelValue, VueEmit, TimeModel, MonthModel, ModelTypeConverted } from '@/interfaces';
import type { AllPropsType } from '@/props';
import type { Ref } from 'vue';
import { getTimezoneOffset, localToTz } from '@/utils/timezone';
import { modelTypePredefined } from '@/constants';

/**
 * Handles values from external to internal and vise versa
 */
export const useExternalInternalMapper = (
    emit: VueEmit,
    props: AllPropsType,
    { isInputFocused, isTextInputDate }: { isInputFocused: Ref<boolean>; isTextInputDate: Ref<boolean> },
) => {
    const internalModelValue = ref();

    const { defaultedTextInput, defaultedRange, defaultedTz, defaultedMultiDates, getDefaultPattern } =
        useDefaults(props);

    const inputValue = ref('');
    const formatRef = toRef(props, 'format');
    const formatLocale = toRef(props, 'formatLocale');

    watch(
        internalModelValue,
        () => {
            if (typeof props.onInternalModelChange === 'function') {
                emit('internal-model-change', internalModelValue.value, emitModelValue(true));
            }
        },
        { deep: true },
    );

    watch(defaultedRange, (newVal, oldVal) => {
        if (newVal.enabled !== oldVal.enabled) {
            internalModelValue.value = null;
        }
    });

    watch(formatRef, () => {
        formatInputValue();
    });

    const convertModelToTz = (date: Date) => {
        if (defaultedTz.value.timezone && defaultedTz.value.convertModel) {
            return localToTz(date, defaultedTz.value.timezone);
        }
        return date;
    };

    const convertZonedModelToLocal = (date: Date) => {
        if (defaultedTz.value.timezone && defaultedTz.value.convertModel) {
            const offset = getTimezoneOffset(defaultedTz.value.timezone, date);
            return addHours(date, offset);
        }
        return date;
    };

    const formatDateFn = (value: Date | Date[], customPattern?: string, parser = false) => {
        return formatDate(
            value,
            props.format,
            props.formatLocale,
            defaultedTextInput.value.rangeSeparator,
            props.modelAuto,
            customPattern ?? getDefaultPattern(),
            parser,
        );
    };

    const getTimeVal = (date?: Date): TimeModel | ModelTypeConverted | null => {
        if (!date) return null;
        if (props.modelType) return toModelType(date);
        return {
            hours: getHours(date),
            minutes: getMinutes(date),
            seconds: props.enableSeconds ? getSeconds(date) : 0,
        };
    };

    const getMonthVal = (date: Date): MonthModel | ModelTypeConverted => {
        if (props.modelType) return toModelType(date);
        return { month: getMonth(date), year: getYear(date) };
    };

    const mapYearExternalToInternal = (value: number | number[]): Date | Date[] => {
        if (Array.isArray(value)) {
            if (defaultedMultiDates.value.enabled) {
                return value.map((val) => convertCustomModeType(val, setYear(getDate(), val)));
            }
            return checkRangeEnabled(
                () => [
                    setYear(getDate(), value[0]),
                    value[1] ? setYear(getDate(), value[1]) : checkPartialRangeValue(defaultedRange.value.partialRange),
                ],
                defaultedRange.value.enabled,
            );
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
        const today = set(getDate(), { date: 1 });
        if (Array.isArray(value)) {
            if (defaultedMultiDates.value.enabled) {
                return value.map((val) => convertCustomModeType(val, setDateMonthOrYear(today, +val.month, +val.year)));
            }
            return checkRangeEnabled(
                () => [
                    convertCustomModeType(value[0], setDateMonthOrYear(today, +value[0].month, +value[0].year)),
                    convertCustomModeType(
                        value[1],
                        value[1]
                            ? setDateMonthOrYear(today, +value[1].month, +value[1].year)
                            : checkPartialRangeValue(defaultedRange.value.partialRange),
                    ),
                ],
                defaultedRange.value.enabled,
            );
        }
        return convertCustomModeType(value, setDateMonthOrYear(today, +value.month, +value.year));
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
        if (Array.isArray(value) && defaultedRange.value.enabled) {
            const startWeek = value[0];
            const endWeek = value[1];
            return [
                getDate(Array.isArray(startWeek) ? startWeek[0] : null),
                Array.isArray(endWeek) && endWeek.length ? getDate(endWeek[0]) : null,
            ];
        }
        return getDate(value[0]);
    };

    // Map external format to internal model value for range and single picker
    const mapDateExternalToInternal = (value: Date | Date[]) => {
        if (props.modelAuto) {
            if (Array.isArray(value)) return [parseModelType(value[0]), parseModelType(value[1])];
            // In case of auto-apply, if we add null, it will never select range
            return props.autoApply ? [parseModelType(value)] : [parseModelType(value), null];
        }
        if (Array.isArray(value)) {
            return checkRangeEnabled(
                () =>
                    value[1]
                        ? [
                              parseModelType(value[0]),
                              value[1]
                                  ? parseModelType(value[1])
                                  : checkPartialRangeValue(defaultedRange.value.partialRange),
                          ]
                        : [parseModelType(value[0])],
                defaultedRange.value.enabled,
            );
        }
        return parseModelType(value);
    };

    /**
     * When emitting value back to host, if partial date is enabled and second value is not selected
     * auto add 'null' value as second value
     */
    const sanitizeModelValue = () => {
        if (
            Array.isArray(internalModelValue.value) &&
            defaultedRange.value.enabled &&
            internalModelValue.value.length === 1
        ) {
            internalModelValue.value.push(checkPartialRangeValue(defaultedRange.value.partialRange));
        }
    };

    // Shared method, create mapped array of dates to emit
    const getRangeEmitValue = (): Date[] => {
        const modelValue = internalModelValue.value as Date[];
        return [
            toModelType(modelValue[0]),
            modelValue[1] ? toModelType(modelValue[1]) : checkPartialRangeValue(defaultedRange.value.partialRange),
        ] as Date[];
    };

    // Get value for model-auto, single or array, internally it is always handled as an array
    const getModelAutoForExternal = () => {
        if (Array.isArray(internalModelValue.value)) {
            return internalModelValue.value[1]
                ? getRangeEmitValue()
                : toModelType(convertType(internalModelValue.value[0]));
        }
        return [];
    };

    // Map internal value for external
    const getMultiDatesForExternal = () =>
        ((internalModelValue.value as Date[]) || []).map((date) => toModelType(date) as string);

    // Parent internal to external function mapper that will return proper date format based on provided config
    const mapInternalDatesToExternal = (noSanitize: boolean = false) => {
        if (!noSanitize) {
            sanitizeModelValue();
        }
        if (props.modelAuto) return getModelAutoForExternal();
        if (defaultedMultiDates.value.enabled) return getMultiDatesForExternal();
        if (Array.isArray(internalModelValue.value)) {
            return checkRangeEnabled(() => getRangeEmitValue(), defaultedRange.value.enabled);
        }
        return toModelType(convertType(internalModelValue.value));
    };

    const mapExternalToInternal = (value: ModelValue) => {
        if (!value || (Array.isArray(value) && !value.length)) return null;
        if (props.timePicker) return mapTimeExternalToInternal(convertType(value));
        if (props.monthPicker) return mapMonthExternalToInternal(convertType(value));
        if (props.yearPicker) return mapYearExternalToInternal(convertType(value));
        if (defaultedMultiDates.value.enabled) return mapMultiDateExternalToInternal(convertType(value));
        if (props.weekPicker) return mapWeekExternalToInternal(convertType(value));
        return mapDateExternalToInternal(convertType(value));
    };

    /**
     * Map external values to dates that will be used internally by the datepicker
     * Also does the validation of the provided value, if invalid it will use null as a default or an empty value
     */
    const parseExternalModelValue = (value: ModelValue): void => {
        // Prevent text input from being overridden by external value while typing
        if (isTextInputDate.value) return;

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
        const formatter = (value: Date) => format(value, defaultedTextInput.value.format as string);
        return `${formatter(internalModelValue.value[0])} ${defaultedTextInput.value.rangeSeparator} ${
            internalModelValue.value[1] ? formatter(internalModelValue.value[1]) : ''
        }`;
    };

    // If text input format is enabled, on input focus, set the text to the given format
    const formatForTextInput = () => {
        if (isInputFocused.value && internalModelValue.value) {
            if (Array.isArray(internalModelValue.value)) return formatRangeTextInput();
            return format(internalModelValue.value, defaultedTextInput.value.format as string);
        }
        return formatDateFn(internalModelValue.value);
    };

    // Get proper input value depending on the mode
    const getInputValue = (): string => {
        if (!internalModelValue.value) return '';
        if (defaultedMultiDates.value.enabled)
            return (internalModelValue.value as Date[]).map((date) => formatDateFn(date)).join('; ');
        if (defaultedTextInput.value.enabled && typeof defaultedTextInput.value.format === 'string')
            return formatForTextInput();
        return formatDateFn(internalModelValue.value);
    };

    /**
     * Map the date value(s) to the human-readable text for the input field
     */
    const formatInputValue = (): void => {
        if (
            !props.format ||
            typeof props.format === 'string' ||
            (defaultedTextInput.value.enabled && typeof defaultedTextInput.value.format === 'string')
        ) {
            inputValue.value = getInputValue();
        } else {
            inputValue.value = props.format(internalModelValue.value);
        }
    };

    const parseModelType = (value: string | number | Date): Date => {
        if (props.utc) {
            const toDate = new Date(value);
            return props.utc === 'preserve' ? new Date(toDate.getTime() + toDate.getTimezoneOffset() * 60000) : toDate;
        }
        if (props.modelType) {
            if (modelTypePredefined.includes(props.modelType)) return convertModelToTz(new Date(value));

            if (props.modelType === 'format' && (typeof props.format === 'string' || !props.format))
                return convertModelToTz(
                    parse(value as string, getDefaultPattern(), new Date(), { locale: formatLocale.value }),
                );

            return convertModelToTz(
                parse(value as string, props.modelType, new Date(), { locale: formatLocale.value }),
            );
        }

        return convertModelToTz(new Date(value));
    };

    const toModelType = (val: Date): string | number | Date => {
        if (!val) return '';
        if (props.utc) {
            return dateToUtc(val, props.utc === 'preserve', props.enableSeconds);
        }
        if (props.modelType) {
            if (props.modelType === 'timestamp') return +convertZonedModelToLocal(val);
            if (props.modelType === 'iso') return convertZonedModelToLocal(val).toISOString();

            if (props.modelType === 'format' && (typeof props.format === 'string' || !props.format))
                return formatDateFn(convertZonedModelToLocal(val));

            return formatDateFn(convertZonedModelToLocal(val), props.modelType, true);
        }
        return convertZonedModelToLocal(val);
    };

    const emitValue = (value: ModelValue, useTz = false, returnOnly = false) => {
        if (returnOnly) return value;
        emit('update:model-value', value);
        if (defaultedTz.value.emitTimezone && useTz) {
            const zonedValue = Array.isArray(value)
                ? value.map((date) => localToTz(convertType(date), defaultedTz.value.emitTimezone))
                : localToTz(convertType(value), defaultedTz.value.emitTimezone);
            emit('update:model-timezone-value', zonedValue);
        }
    };

    /**
     * Shared code between modes that support range and partial range
     * Maps the internal model-value into appropriate output
     */
    const mapInternalToSpecificExternal = <T extends (val: Date) => ReturnType<T> | ReturnType<T>[]>(mapper: T) => {
        if (Array.isArray(internalModelValue.value)) {
            if (defaultedMultiDates.value.enabled) {
                return internalModelValue.value.map((value) => mapper(value));
            }
            return [
                mapper(internalModelValue.value[0]),
                internalModelValue.value[1]
                    ? mapper(internalModelValue.value[1])
                    : checkPartialRangeValue(defaultedRange.value.partialRange),
            ];
        }
        return mapper(convertType(internalModelValue.value));
    };

    const mapInternalWeekPickerToExternal = () => {
        if (Array.isArray(internalModelValue.value)) {
            const startWeek = getWeekFromDate(internalModelValue.value[0], props.weekStart);
            const endWeek = internalModelValue.value[1]
                ? getWeekFromDate(internalModelValue.value[1], props.weekStart)
                : [];
            return [startWeek.map((date) => getDate(date)), endWeek.map((date) => getDate(date))];
        }
        return getWeekFromDate(internalModelValue.value, props.weekStart).map((date) => getDate(date));
    };

    const modeEmitter = (mapper: any, returnOnly: boolean) =>
        emitValue(convertType(mapInternalToSpecificExternal(mapper)), false, returnOnly);

    const emitWeekPicker = (returnOnly: boolean) => {
        const value = mapInternalWeekPickerToExternal();
        if (returnOnly) return value;
        return emit('update:model-value', mapInternalWeekPickerToExternal());
    };

    /**
     * When date is selected, emit event to update modelValue on external,
     * and format input value
     */
    const emitModelValue = (returnOnly: boolean = false) => {
        if (!returnOnly) {
            formatInputValue();
        }

        if (props.monthPicker) return modeEmitter(getMonthVal, returnOnly);
        if (props.timePicker) return modeEmitter(getTimeVal, returnOnly);
        if (props.yearPicker) return modeEmitter(getYear, returnOnly);
        if (props.weekPicker) return emitWeekPicker(returnOnly);
        return emitValue(mapInternalDatesToExternal(returnOnly), true, returnOnly);
    };

    // Check if there is any selection before emitting value, to prevent null setting
    const checkBeforeEmit = (): boolean => {
        if (internalModelValue.value) {
            if (defaultedRange.value.enabled) {
                if (defaultedRange.value.partialRange) return internalModelValue.value.length >= 1;
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
