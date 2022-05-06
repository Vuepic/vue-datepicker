import { ref, watch } from 'vue';
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
import type { IFormat, ITextInputOptions, ModelValue, VueEmit } from '@/interfaces';
import { isMonth, isMonthArray, isRangeArray, isSingle, isTime, isTimeArray } from '@/utils/type-guard';
import { getYear, setYear } from 'date-fns';

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
    utc: boolean,
    weekPicker: boolean,
    yearPicker: boolean,
    textInputOptions: ITextInputOptions,
    emit: VueEmit,
) => {
    const inputValue = ref('');
    const internalModelValue = ref();

    watch(internalModelValue, () => {
        emit('internalModelChange', internalModelValue.value);
    });

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
                mappedDate = setYear(new Date(), value as number);
            } else if (multiDates && Array.isArray(value)) {
                mappedDate = value.map((date) => new Date(date as string));
            } else if (weekPicker && Array.isArray(value)) {
                mappedDate = [new Date(value[0] as string), new Date(value[1] as string)];
            } else if (range) {
                if (isRangeArray(value, partialRange)) {
                    mappedDate = [new Date(value[0]), value[1] ? new Date(value[1]) : (null as unknown as Date)];
                }
            } else if (isSingle(value)) {
                mappedDate = new Date(value);
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

    /**
     * Map the date value(s) to the human-readable text for the input field
     */
    const formatInputValue = (): void => {
        if (!internalModelValue.value) {
            inputValue.value = '';
        } else if (!format || typeof format === 'string') {
            const pattern = getDefaultPattern(
                format,
                is24,
                enableSeconds,
                monthPicker,
                timePicker,
                weekPicker,
                yearPicker,
                enableTimePicker,
            );
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

    /**
     * When date is selected, emit event to update modelValue on external
     */
    const emitModelValue = (): void => {
        if (monthPicker) {
            emit('update:modelValue', getMonthValForExternal(internalModelValue.value));
        } else if (timePicker) {
            emit('update:modelValue', getTImeForExternal(internalModelValue.value));
        } else if (weekPicker) {
            emit('update:modelValue', internalModelValue.value);
        } else if (yearPicker) {
            emit('update:modelValue', getYear(internalModelValue.value));
        } else {
            if (internalModelValue.value && range && partialRange && internalModelValue.value.length === 1) {
                internalModelValue.value.push(null);
            }
            const zonedDate = utc
                ? Array.isArray(internalModelValue.value)
                    ? internalModelValue.value.map((date) => (date ? dateToUtc(date) : date))
                    : dateToUtc(internalModelValue.value)
                : internalModelValue.value;
            emit('update:modelValue', zonedDate);
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
