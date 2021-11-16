import { Ref, ref } from 'vue';

import {
    formatDate,
    getDefaultPattern,
    getMonthForExternal,
    getTImeForExternal,
    isValidDate,
    setDateTime,
    setDateMonthOrYear,
} from '../../utils/date-utils';
import { IFormat, ModelValue, VueEmit } from '../../interfaces';
import { isMonth, isRangeArray, isSingle, isTime, isTimeArray } from '../../utils/type-guard';

interface IExternalInternalMapper {
    parseExternalModelValue: (value: ModelValue) => void;
    internalModelValue: Ref<Date | Date[] | null>;
    inputValue: Ref<string>;
    formatInputValue: () => void;
    emitModelValue: () => void;
    checkBeforeEmit: () => boolean;
}

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
    emit: VueEmit,
): IExternalInternalMapper => {
    const inputValue = ref('');
    const internalModelValue = ref();

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
                        setDateTime(null, +value[0].hours, +value[0].minutes),
                        setDateTime(null, +value[1].hours, +value[1].minutes),
                    ];
                } else if (isTime(value)) {
                    mappedDate = setDateTime(null, +value.hours, +value.minutes);
                }
            } else if (monthPicker) {
                if (isMonth(value) && 'month' in value && 'year' in value) {
                    mappedDate = setDateMonthOrYear(null, +value.month, +value.year);
                }
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
     * Map the date value(s) to the human readable text for the input field
     */
    const formatInputValue = (): void => {
        if (!internalModelValue.value) {
            inputValue.value = '';
        } else if (!format || typeof format === 'string') {
            const pattern = getDefaultPattern(format, is24, monthPicker, timePicker, enableTimePicker);
            inputValue.value = formatDate(internalModelValue.value, pattern);
        } else if (timePicker) {
            inputValue.value = format(getTImeForExternal(internalModelValue.value));
        } else if (monthPicker) {
            inputValue.value = format(getMonthForExternal(internalModelValue.value as Date));
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
            emit('update:modelValue', getMonthForExternal(internalModelValue.value as Date));
        } else if (timePicker) {
            emit('update:modelValue', getTImeForExternal(internalModelValue.value));
        } else {
            if (range && partialRange && internalModelValue.value.length === 1) {
                internalModelValue.value.push(null);
            }
            emit('update:modelValue', internalModelValue.value);
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
