import { getDate, getZonedDate, isDateBefore, isDateEqual } from '@/utils/date-utils';

import type { WritableComputedRef } from 'vue';
import type { InternalModuleValue, VueEmit } from '@/interfaces';

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

    modelValue.value = rangeDate;
    return rangeDate;
};

export const checkRangeAutoApply = (range: Date[], emit: VueEmit, autoApply: boolean, modelAuto: boolean) => {
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
        opts.modelValue.value = opts.value.map((date) => getZonedDate(getDate(date), opts.timezone));
    } else if (!Array.isArray(opts.value)) {
        opts.modelValue.value = getZonedDate(getDate(opts.value), opts.timezone);
    }
};
