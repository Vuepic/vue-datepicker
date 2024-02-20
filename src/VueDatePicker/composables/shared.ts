import { getDate, isDateAfter, isDateBefore, isDateEqual } from '@/utils/date-utils';

import { localToTz } from '@/utils/timezone';
import type { ComputedRef, WritableComputedRef } from 'vue';
import type { InternalModuleValue, RangeConfig, VueEmit } from '@/interfaces';

export const handleMultiDatesSelect = (
    date: Date,
    modelValue: WritableComputedRef<InternalModuleValue>,
    multiDatesLimit?: number | string,
): void => {
    if (modelValue.value && Array.isArray(modelValue.value)) {
        if (modelValue.value.some((dateVal) => isDateEqual(date, dateVal))) {
            const value = modelValue.value.filter((dateVal) => !isDateEqual(dateVal, date));
            modelValue.value = !value.length ? null : value;
        } else if ((multiDatesLimit && +multiDatesLimit > modelValue.value.length) || !multiDatesLimit) {
            modelValue.value.push(date);
        }
    } else {
        modelValue.value = [date];
    }
};

export const setMonthOrYearRange = (
    modelValue: WritableComputedRef<InternalModuleValue>,
    date: Date,
    emit: VueEmit,
) => {
    let rangeDate = modelValue.value ? (modelValue.value as Date[]).slice() : [];
    if (rangeDate.length === 2 && rangeDate[1] !== null) {
        rangeDate = [];
    }

    if (!rangeDate.length) {
        rangeDate = [date];
        emit('range-start', date);
    } else if (isDateBefore(date, rangeDate[0])) {
        rangeDate.unshift(date);
        emit('range-start', rangeDate[0]);
        emit('range-start', rangeDate[1]);
    } else {
        rangeDate[1] = date;
        emit('range-end', date);
    }

    return rangeDate;
};

export const checkRangeAutoApply = (range: Date[], emit: VueEmit, autoApply: boolean, modelAuto: boolean) => {
    if (!range) return;
    if (range[0] && range[1] && autoApply) {
        emit('auto-apply');
    }
    if (range[0] && !range[1] && modelAuto && autoApply) {
        emit('auto-apply');
    }
};

export const setPresetDate = (opts: {
    value: Date[] | string[] | Date | string;
    range: boolean;
    timezone?: string;
    modelValue: WritableComputedRef<InternalModuleValue>;
}) => {
    if (Array.isArray(opts.value) && opts.value.length <= 2 && opts.range) {
        opts.modelValue.value = opts.value.map((date) => localToTz(getDate(date), opts.timezone));
    } else if (!Array.isArray(opts.value)) {
        opts.modelValue.value = localToTz(getDate(opts.value), opts.timezone);
    }
};

export const getRangeWithFixedDate = (
    date: Date,
    modelValue: WritableComputedRef<InternalModuleValue>,
    emit: VueEmit,
    defaultedRange: ComputedRef<RangeConfig>,
): Date[] => {
    if (Array.isArray(modelValue.value) && modelValue.value.length === 2) {
        if (
            defaultedRange.value.fixedStart &&
            (isDateAfter(date, modelValue.value[0]) || isDateEqual(date, modelValue.value[0]))
        ) {
            return [modelValue.value[0], date];
        }
        if (
            defaultedRange.value.fixedEnd &&
            (isDateBefore(date, modelValue.value[1]) || isDateEqual(date, modelValue.value[1]))
        ) {
            return [date, modelValue.value[1]];
        }
        emit('invalid-fixed-range', date);
        return modelValue.value;
    }
    return [];
};
