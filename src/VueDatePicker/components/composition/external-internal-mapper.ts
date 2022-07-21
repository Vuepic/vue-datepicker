import { ref, watch } from 'vue';
import { getYear, parse, setYear } from 'date-fns';
import type { ComputedRef } from 'vue';
import type { Locale } from 'date-fns';

import {
    dateToUtc,
    formatDate,
    getDefaultPattern,
    getMonthValForExternal,
    getTImeForExternal,
    isValidDate,
    setDateMonthOrYear,
    setDateTime,
} from '@/utils/date-utils';
import type { IFormat, ITextInputOptions, ModelType, ModelValue, VueEmit } from '@/interfaces';
import { isMonth, isMonthArray, isRangeArray, isSingle, isTime, isTimeArray } from '@/utils/type-guard';

/**
 * Handles values from external to internal and vise versa
 */
export const useExternalInternalMapper = (
    format: IFormat,
    timePicker: boolean,
    monthPicker: boolean,
    range: boolean,
    partialRange: boolean,
    is24: boolean,
    enableTimePicker: boolean,
    enableSeconds: boolean,
    formatLocale: ComputedRef<Locale>,
    multiDates: boolean,
    utc: boolean | 'preserve',
    weekPicker: boolean,
    yearPicker: boolean,
    textInputOptions: ITextInputOptions,
    modelType: ModelType,
    modelAuto: boolean,
    emit: VueEmit,
) => {
    const inputValue = ref('');
    const internalModelValue = ref();

    watch(internalModelValue, () => {
        emit('internalModelChange', internalModelValue.value);
    });

    const mapArrayToValue = (value: Date[]): Date[] => {
        return [parseModelType(value[0]), value[1] ? parseModelType(value[1]) : (null as unknown as Date)];
    };

    /**
     * Map external values to dates that will be used internally by the datepicker
     * Also does the validation of the provided value, if invalid it will use null as a default or an empty value
     */
    const parseExternalModelValue = (value: ModelValue): void => {
        let mappedDate: Date | Date[] | null = null;

        if (value) {
            if (timePicker) {
                if (isTimeArray(value) && 'hours' in value[0] && 'minutes' in value[0]) {
                    mappedDate = [
                        setDateTime(null, +value[0].hours, +value[0].minutes, +value[0].seconds),
                        setDateTime(null, +value[1].hours, +value[1].minutes, +value[1].seconds),
                    ];
                } else if (isTime(value)) {
                    mappedDate = setDateTime(null, +value.hours, +value.minutes, +value.seconds);
                }
            } else if (monthPicker) {
                if (isMonthArray(value) && 'month' in value[0] && 'year' in value[0]) {
                    mappedDate = [setDateMonthOrYear(null, +value[0].month, +value[0].year)];
                    if (value[1]) {
                        mappedDate[1] = setDateMonthOrYear(null, +value[1].month, +value[1].year);
                    } else if (!value[1] && partialRange) {
                        mappedDate[1] = null as unknown as Date;
                    }
                } else if (isMonth(value) && 'month' in value && 'year' in value) {
                    mappedDate = setDateMonthOrYear(null, +value.month, +value.year);
                }
            } else if (yearPicker) {
                if (Array.isArray(value)) {
                    mappedDate = [
                        setYear(new Date(), value[0] as number),
                        !value[1] && partialRange ? (null as unknown as Date) : setYear(new Date(), value[1] as number),
                    ];
                } else {
                    mappedDate = setYear(new Date(), value as number);
                }
            } else if (multiDates && Array.isArray(value)) {
                mappedDate = value.map((date) => parseModelType(date as Date));
            } else if (weekPicker && Array.isArray(value)) {
                mappedDate = [new Date(value[0] as string), new Date(value[1] as string)];
            } else if (range) {
                if (modelAuto) {
                    if (Array.isArray(value)) {
                        mappedDate = mapArrayToValue(value as Date[]);
                    } else {
                        mappedDate = [parseModelType(value as Date), null as unknown as Date];
                    }
                } else if (isRangeArray(value, partialRange)) {
                    mappedDate = mapArrayToValue(value);
                }
            } else if (isSingle(value)) {
                mappedDate = parseModelType(value);
            }
        } else {
            mappedDate = null;
        }

        if (isValidDate(mappedDate)) {
            internalModelValue.value = mappedDate;
            formatInputValue();
        } else {
            internalModelValue.value = null;
            inputValue.value = '';
        }
    };

    const getPattern = (): string => {
        return getDefaultPattern(
            format as string,
            is24,
            enableSeconds,
            monthPicker,
            timePicker,
            weekPicker,
            yearPicker,
            enableTimePicker,
        );
    };

    /**
     * Map the date value(s) to the human-readable text for the input field
     */
    const formatInputValue = (): void => {
        if (!internalModelValue.value) {
            inputValue.value = '';
        } else if (!format || typeof format === 'string') {
            const pattern = getPattern();
            if (Array.isArray(internalModelValue.value) && multiDates) {
                inputValue.value = internalModelValue.value
                    .map((date) => formatDate(date, pattern, formatLocale?.value))
                    .join('; ');
            } else {
                inputValue.value = formatDate(
                    internalModelValue.value,
                    pattern,
                    formatLocale?.value,
                    textInputOptions?.rangeSeparator,
                    modelAuto,
                );
            }
        } else if (timePicker) {
            inputValue.value = format(getTImeForExternal(internalModelValue.value));
        } else if (monthPicker) {
            inputValue.value = format(getMonthValForExternal(internalModelValue.value));
        } else {
            inputValue.value = format(internalModelValue.value);
        }
    };

    const checkBeforeEmit = (): boolean => {
        if (internalModelValue.value) {
            if (range) {
                if (partialRange) return internalModelValue.value.length >= 1;
                return internalModelValue.value.length === 2;
            }
            return !!internalModelValue.value;
        }
        return false;
    };

    const parseModelType = (value: string | number | Date): Date => {
        if (utc) {
            const toDate = new Date(value);
            return utc === 'preserve' ? new Date(toDate.getTime() + toDate.getTimezoneOffset() * 60000) : toDate;
        }
        if (modelType) {
            if (modelType === 'date' || modelType === 'timestamp') return new Date(value);

            if (modelType === 'format' && (typeof format === 'string' || !format))
                return parse(value as string, getPattern(), new Date());

            return parse(value as string, modelType, new Date());
        }
        return new Date(value);
    };

    const getModelValueType = (val: Date): string | number | Date => {
        if (modelType) {
            if (modelType === 'timestamp') return +val;

            if (modelType === 'format' && (typeof format === 'string' || !format))
                return formatDate(val, getPattern(), formatLocale?.value, textInputOptions?.rangeSeparator);

            return formatDate(val, modelType, formatLocale?.value, textInputOptions?.rangeSeparator);
        }
        return val;
    };

    const emitValue = (value: ModelValue): void => {
        emit('update:modelValue', value);
    };

    const getRangeEmitValue = (): Date[] => {
        return [
            getModelValueType(internalModelValue.value[0] as Date),
            internalModelValue.value[1] ? getModelValueType(internalModelValue.value[1] as Date) : null,
        ] as Date[];
    };

    /**
     * When date is selected, emit event to update modelValue on external
     */
    const emitModelValue = (): void => {
        if (monthPicker) {
            emitValue(getMonthValForExternal(internalModelValue.value));
        } else if (timePicker) {
            emitValue(getTImeForExternal(internalModelValue.value));
        } else if (weekPicker) {
            emitValue(internalModelValue.value);
        } else if (yearPicker) {
            emitValue(
                Array.isArray(internalModelValue.value)
                    ? [
                          getYear(internalModelValue.value[0]),
                          internalModelValue.value[1]
                              ? getYear(internalModelValue.value[1])
                              : (null as unknown as number),
                      ]
                    : getYear(internalModelValue.value),
            );
        } else {
            if (internalModelValue.value && range && partialRange && internalModelValue.value.length === 1) {
                internalModelValue.value.push(null);
            }
            if (utc) {
                let zonedDate;
                if (Array.isArray(internalModelValue.value)) {
                    const mapDate = (date: Date) => (date ? dateToUtc(date, utc === 'preserve') : date);
                    if (modelAuto) {
                        zonedDate = internalModelValue.value[1]
                            ? internalModelValue.value.map(mapDate)
                            : dateToUtc(internalModelValue.value[0], utc === 'preserve');
                    } else {
                        zonedDate = internalModelValue.value.map(mapDate);
                    }
                } else {
                    zonedDate = dateToUtc(internalModelValue.value, utc === 'preserve');
                }
                return emitValue(zonedDate as string);
            }
            if (Array.isArray(internalModelValue.value) && !multiDates) {
                if (modelAuto) {
                    emitValue(
                        internalModelValue.value[1]
                            ? getRangeEmitValue()
                            : (getModelValueType(internalModelValue.value[0] as Date) as Date),
                    );
                } else {
                    emitValue(getRangeEmitValue());
                }
            } else if (Array.isArray(internalModelValue.value) && multiDates) {
                emitValue(internalModelValue.value.map((date) => getModelValueType(date) as string));
            } else {
                emitValue(getModelValueType(internalModelValue.value));
            }
        }
        formatInputValue();
    };

    return {
        parseExternalModelValue,
        formatInputValue,
        internalModelValue,
        inputValue,
        emitModelValue,
        checkBeforeEmit,
    };
};
