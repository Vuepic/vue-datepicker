import type { EmitFn } from 'vue';
import { useContext, useDateUtils } from '@/composables';

export const useComponentShared = () => {
    const { isDateAfter, isDateBefore, isDateEqual } = useDateUtils();
    const {
        getDate,
        rootEmit,
        modelValue,
        defaults: { range },
    } = useContext();

    const handleMultiDatesSelect = (date: Date, multiDatesLimit?: number | string | null): void => {
        if (modelValue.value && Array.isArray(modelValue.value)) {
            if (modelValue.value.some((dateVal) => isDateEqual(date, dateVal))) {
                const value = modelValue.value.filter((dateVal) => !isDateEqual(dateVal, date));
                modelValue.value = value.length ? value : null;
            } else if ((multiDatesLimit && +multiDatesLimit > modelValue.value.length) || !multiDatesLimit) {
                modelValue.value.push(date);
            }
        } else {
            modelValue.value = [date];
        }
    };

    const setMonthOrYearRange = (date: Date) => {
        let rangeDate = modelValue.value ? (modelValue.value as Date[]).slice() : [];
        if (rangeDate.length === 2 && rangeDate[1] !== null) {
            rangeDate = [];
        }
        if (rangeDate.length) {
            if (isDateBefore(date, rangeDate[0])) rangeDate.unshift(date);
            else rangeDate[1] = date;
            rootEmit('range-end', date);
        } else {
            rangeDate = [date];
            rootEmit('range-start', date);
        }

        return rangeDate;
    };

    const checkRangeAutoApply = (
        range: Date[],
        emit: EmitFn<{ 'auto-apply': [ignoreClose?: boolean] }>,
        autoApply: boolean,
        modelAuto: boolean,
        partial: boolean,
        ignoreClose: boolean,
    ) => {
        if (!range) return;
        if (range[0] && range[1] && autoApply) {
            emit('auto-apply', ignoreClose);
        }
        if (range[0] && !range[1] && (modelAuto || partial) && autoApply) {
            emit('auto-apply', ignoreClose);
        }
    };

    const setPresetDate = (opts: { value: Date[] | string[] | Date | string }) => {
        if (Array.isArray(opts.value) && opts.value.length <= 2 && range.value.enabled) {
            modelValue.value = opts.value.map((date) => getDate(date));
        } else if (!Array.isArray(opts.value)) {
            modelValue.value = getDate(opts.value);
        }
    };

    const getRangeWithFixedDate = (date: Date): Date[] => {
        if (
            Array.isArray(modelValue.value) &&
            (modelValue.value.length === 2 || (modelValue.value.length === 1 && range.value.partialRange))
        ) {
            if (
                range.value.fixedStart &&
                (isDateAfter(date, modelValue.value[0]) || isDateEqual(date, modelValue.value[0]))
            ) {
                return [modelValue.value[0]!, date];
            }
            if (
                range.value.fixedEnd &&
                (isDateBefore(date, modelValue.value[1]) || isDateEqual(date, modelValue.value[1]))
            ) {
                return [date, modelValue.value[1]!];
            }
            rootEmit('invalid-fixed-range', date);
            return modelValue.value;
        }
        return [];
    };

    return {
        getRangeWithFixedDate,
        setPresetDate,
        checkRangeAutoApply,
        setMonthOrYearRange,
        handleMultiDatesSelect,
    };
};
