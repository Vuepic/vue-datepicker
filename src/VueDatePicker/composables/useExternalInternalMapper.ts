import { watch } from 'vue';
import { getHours, getMinutes, getMonth, getSeconds, getYear, parse, set, setYear } from 'date-fns';

import { useDateUtils, useValidation, useContext, useUtils, useFormatter } from '@/composables';
import { modelTypePredefined } from '@/constants';

import type { ModelTypeConverted, ModelValue, MonthModel, TimeModel } from '@/types';

export const useExternalInternalMapper = () => {
    const { getDate, setTime, getWeekFromDate } = useDateUtils();
    const { checkPartialRangeValue, checkRangeEnabled, isValidDate } = useValidation();
    const { convertType, errorMapper } = useUtils();
    const {
        rootEmit,
        state,
        rootProps,
        inputValue,
        defaults: { textInput, range, tz, multiDates, timeConfig, formats },
        modelValue,
    } = useContext();
    const { formatSelectedDate, formatForTextInput } = useFormatter();

    watch(
        modelValue,
        () => {
            rootEmit('internal-model-change', modelValue.value);
        },
        { deep: true },
    );

    watch(range, (newVal, oldVal) => {
        if (newVal.enabled !== oldVal.enabled) {
            modelValue.value = null;
        }
    });

    watch(
        () => formats.value.input,
        () => {
            formatInputValue();
        },
    );

    const convertZonedModelToLocal = (date: Date) => {
        if (tz.value.timezone && tz.value.convertModel) {
            return getDate(date); // todo
        }
        return date;
    };

    const getTimeVal = (date?: Date): TimeModel | ModelTypeConverted | null => {
        if (!date) return null;
        if (rootProps.modelType) return toModelType(date);
        return {
            hours: getHours(date),
            minutes: getMinutes(date),
            seconds: timeConfig.value.enableSeconds ? getSeconds(date) : 0,
        };
    };

    const getMonthVal = (date: Date): MonthModel | ModelTypeConverted => {
        if (rootProps.modelType) return toModelType(date);
        return { month: getMonth(date), year: getYear(date) };
    };

    const mapYearExternalToInternal = (value: number | number[]): Date | Date[] => {
        if (Array.isArray(value)) {
            if (multiDates.value.enabled) {
                return value.map((val) => convertCustomModeType(val, setYear(getDate(), val)));
            }
            return checkRangeEnabled(
                () => [
                    setYear(getDate(), value[0]!),
                    value[1] ? setYear(getDate(), value[1]) : checkPartialRangeValue(range.value.partialRange),
                ],
                range.value.enabled,
            );
        }
        return setYear(getDate(), +value);
    };

    const convertCustomModeType = (value: unknown, defaultValue: Date): Date => {
        const shouldConvert = (typeof value === 'string' || typeof value === 'number') && rootProps.modelType;
        if (shouldConvert) return parseModelType(value);
        return defaultValue;
    };

    const mapTimeExternalToInternal = (value: TimeModel | TimeModel[]): Date | Date[] => {
        // Unlike in other modes, partial range is not supported here, since the time needs to be defined on both time inputs
        if (Array.isArray(value)) {
            return [
                convertCustomModeType(value[0], setTime(value[0]!)),
                convertCustomModeType(value[1], setTime(value[1]!)),
            ];
        }
        return convertCustomModeType(value, setTime(value));
    };

    const mapMonthExternalToInternal = (value: MonthModel | MonthModel[]): Date | Date[] => {
        const today = set(getDate(), { date: 1 });
        if (Array.isArray(value)) {
            if (multiDates.value.enabled) {
                return value.map((val) =>
                    convertCustomModeType(val, set(today, { month: +val.month, year: +val.year })),
                );
            }
            return checkRangeEnabled(
                () => [
                    convertCustomModeType(value[0], set(today, { month: +value[0]!.month, year: +value[0]!.year })),
                    convertCustomModeType(
                        value[1],
                        value[1]
                            ? set(today, { month: +value[1].month, year: +value[1].year })
                            : checkPartialRangeValue(range.value.partialRange),
                    ),
                ],
                range.value.enabled,
            );
        }
        return convertCustomModeType(value, set(today, { month: +value.month, year: +value.year }));
    };

    // Map external multi dates format to internal model value
    const mapMultiDateExternalToInternal = (value: Date[] | string[]) => {
        if (Array.isArray(value)) {
            return value.map((date) => parseModelType(date));
        }
        throw new Error(errorMapper.dateArr('multi-dates'));
    };

    // Map external week picker format to internal model value
    const mapWeekExternalToInternal = (value: Date[]) => {
        if (Array.isArray(value) && range.value.enabled) {
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
        if (rootProps.modelAuto) {
            if (Array.isArray(value)) return [parseModelType(value[0]!), parseModelType(value[1]!)];
            // In case of auto-apply, if we add null, it will never select range
            return rootProps.autoApply ? [parseModelType(value)] : [parseModelType(value), null];
        }
        if (Array.isArray(value)) {
            return checkRangeEnabled(
                () =>
                    value[1]
                        ? [
                              parseModelType(value[0]!),
                              value[1] ? parseModelType(value[1]) : checkPartialRangeValue(range.value.partialRange),
                          ]
                        : [parseModelType(value[0]!)],
                range.value.enabled,
            );
        }
        return parseModelType(value);
    };

    /**
     * When emitting value back to host, if partial date is enabled and second value is not selected
     * auto add 'null' value as second value
     */
    const sanitizeModelValue = () => {
        if (Array.isArray(modelValue.value) && range.value.enabled && modelValue.value.length === 1) {
            modelValue.value.push(checkPartialRangeValue(range.value.partialRange));
        }
    };

    // Shared method, create mapped array of dates to emit
    const getRangeEmitValue = (): Date[] => {
        const mv = modelValue.value as Date[];
        return [
            toModelType(mv[0]!),
            mv[1] ? toModelType(mv[1]) : checkPartialRangeValue(range.value.partialRange),
        ] as Date[];
    };

    // Get value for model-auto, single or array, internally it is always handled as an array
    const getModelAutoForExternal = () => {
        if (Array.isArray(modelValue.value)) {
            return modelValue.value[1] ? getRangeEmitValue() : toModelType(convertType(modelValue.value[0]));
        }
        return [];
    };

    // Map internal value for external
    const getMultiDatesForExternal = () =>
        ((modelValue.value as Date[]) || []).map((date) => toModelType(date) as string);

    // Parent internal to external function mapper that will return proper date format based on provided config
    const mapInternalDatesToExternal = (noSanitize: boolean = false) => {
        if (!noSanitize) {
            sanitizeModelValue();
        }
        if (rootProps.modelAuto) return getModelAutoForExternal();
        if (multiDates.value.enabled) return getMultiDatesForExternal();
        if (Array.isArray(modelValue.value)) {
            return checkRangeEnabled(() => getRangeEmitValue(), range.value.enabled);
        }
        return toModelType(convertType(modelValue.value));
    };

    const mapExternalToInternal = (value: ModelValue) => {
        if (!value || (Array.isArray(value) && !value.length)) return null;
        if (rootProps.timePicker) return mapTimeExternalToInternal(convertType(value));
        if (rootProps.monthPicker) return mapMonthExternalToInternal(convertType(value));
        if (rootProps.yearPicker) return mapYearExternalToInternal(convertType(value));
        if (multiDates.value.enabled) return mapMultiDateExternalToInternal(convertType(value));
        if (rootProps.weekPicker) return mapWeekExternalToInternal(convertType(value));
        return mapDateExternalToInternal(convertType(value));
    };

    /**
     * Map external values to dates that will be used internally by the datepicker
     * Also does the validation of the provided value, if invalid it will use null as a default or an empty value
     */
    const parseExternalModelValue = (value: ModelValue): void => {
        if (state.isTextInputDate) return;
        const mappedDate = mapExternalToInternal(value);

        if (isValidDate(convertType(mappedDate))) {
            modelValue.value = convertType(mappedDate);
            formatInputValue();
        } else {
            modelValue.value = null;
            inputValue.value = '';
        }
    };

    // Get proper input value depending on the mode
    const getInputValue = (): string => {
        if (!modelValue.value) return '';
        if (multiDates.value.enabled)
            return (modelValue.value as Date[]).map((date) => formatSelectedDate(date)).join('; ');
        if (textInput.value.enabled) return formatForTextInput();
        return formatSelectedDate(modelValue.value);
    };

    /**
     * Map the date value(s) to the human-readable text for the input field
     */
    const formatInputValue = (): void => {
        inputValue.value = getInputValue();
    };

    const parseModelType = (value: string | number | Date): Date => {
        if (rootProps.modelType) {
            if (modelTypePredefined.includes(rootProps.modelType)) return new Date(value);

            if (rootProps.modelType === 'format' && typeof formats.value.input === 'string')
                return parse(value as string, formats.value.input, new Date(), { locale: rootProps.locale });

            return parse(value as string, rootProps.modelType, new Date(), { locale: rootProps.locale });
        }

        return new Date(value);
    };

    const toModelType = (val: Date): string | number | Date => {
        if (!val) return '';
        if (rootProps.modelType) {
            if (rootProps.modelType === 'timestamp') return +convertZonedModelToLocal(val);
            if (rootProps.modelType === 'iso') return convertZonedModelToLocal(val).toISOString();

            if (rootProps.modelType === 'format' && typeof formats.value.input === 'string')
                return formatSelectedDate(convertZonedModelToLocal(val));

            return formatSelectedDate(convertZonedModelToLocal(val), rootProps.modelType);
        }
        return convertZonedModelToLocal(val);
    };

    const emitValue = (value: ModelValue) => {
        rootEmit('update:model-value', value);
    };

    /**
     * Shared code between modes that support range and partial range
     * Maps the internal model-value into appropriate output
     */
    const mapInternalToSpecificExternal = <T extends (val: Date | null) => ReturnType<T> | ReturnType<T>[]>(
        mapper: T,
    ) => {
        if (Array.isArray(modelValue.value)) {
            if (multiDates.value.enabled) {
                return modelValue.value.map((value) => mapper(value));
            }
            return [mapper(modelValue.value[0]!), modelValue.value[1] ?? null];
        }
        return mapper(convertType(modelValue.value));
    };

    const mapInternalWeekPickerToExternal = () => {
        if (Array.isArray(modelValue.value)) {
            const startWeek = getWeekFromDate(modelValue.value[0]!, rootProps.weekStart);
            const endWeek = modelValue.value[1] ? getWeekFromDate(modelValue.value[1], rootProps.weekStart) : [];
            return [startWeek.map((date) => getDate(date)), endWeek.map((date) => getDate(date))];
        }
        return getWeekFromDate(modelValue.value!, rootProps.weekStart).map((date) => getDate(date));
    };

    const modeEmitter = (mapper: any) => emitValue(convertType(mapInternalToSpecificExternal(mapper)));

    const emitWeekPicker = () => {
        return rootEmit('update:model-value', mapInternalWeekPickerToExternal());
    };

    /**
     * When date is selected, emit event to update modelValue on external,
     * and format input value
     */
    const emitModelValue = () => {
        formatInputValue();

        if (rootProps.monthPicker) return modeEmitter(getMonthVal);
        if (rootProps.timePicker) return modeEmitter(getTimeVal);
        if (rootProps.yearPicker) return modeEmitter(getYear);
        if (rootProps.weekPicker) return emitWeekPicker();
        return emitValue(mapInternalDatesToExternal());
    };

    // Check if there is any selection before emitting value, to prevent null setting
    const checkBeforeEmit = (): boolean => {
        if (modelValue.value) {
            if (range.value.enabled) {
                if (range.value.partialRange) return (modelValue.value as Date[]).length >= 1;
                return (modelValue.value as Date[]).length === 2;
            }
            return !!modelValue.value;
        }
        return false;
    };

    return {
        checkBeforeEmit,
        parseExternalModelValue,
        formatInputValue,
        emitModelValue,
    };
};
