import { isAfter, isBefore, setMilliseconds } from 'date-fns';

import { isDateEqual, setDateTime } from '@/utils/date-utils';

import type { InternalModuleValue, Time, TimeType, TimePickerProps } from '@/interfaces';
import type { UnwrapNestedRefs, WritableComputedRef } from 'vue';

export const useTimePicker = (
    props: TimePickerProps,
    time: UnwrapNestedRefs<Time>,
    modelValue: WritableComputedRef<InternalModuleValue>,
    updateFlow: () => void,
) => {
    const getTimeValue = (type: TimeType, i?: number): number => {
        if (Array.isArray(time[type])) return (time[type] as number[])[i as number];
        return time[type] as number;
    };
    // Check if seconds are enabled, and return proper value
    const getSecondsValue = (i?: number): number => {
        if (props.enableSeconds) {
            if (Array.isArray(time.seconds)) {
                return time.seconds[i as number];
            }
            return time.seconds;
        }
        return 0;
    };
    const getSetDateTime = (dateValue: Date, i?: number): Date => {
        if (i !== undefined) {
            return setDateTime(
                dateValue,
                getTimeValue('hours', i),
                getTimeValue('minutes', i) as number,
                getSecondsValue(i),
            );
        }
        return setDateTime(dateValue, time.hours as number, time.minutes as number, getSecondsValue());
    };
    // Any time modification will go through this function
    const setTime = (property: TimeType, value: number | number[]): void => {
        time[property] = value;
    };

    const validateTime = (type: TimeType, value: number | number[]) => {
        const copies = Object.fromEntries(
            Object.keys(time).map((key) => {
                if (key === type) return [key, value];
                return [key, time[key as TimeType]];
            }),
        );

        if (props.range && !props.disableTimeRangeValidation) {
            const setTime = (index: number) =>
                setDateTime(
                    (modelValue.value as Date[])[index],
                    (copies.hours as number[])[index],
                    (copies.minutes as number[])[index],
                    (copies.seconds as number[])[index],
                );

            const resetMilliseconds = (index: number) => setMilliseconds((modelValue.value as Date[])[index], 0);
            return !(
                isDateEqual((modelValue.value as Date[])[0], (modelValue.value as Date[])[1]) &&
                (isAfter(setTime(0), resetMilliseconds(1)) || isBefore(setTime(1), resetMilliseconds(0)))
            );
        }
        return true;
    };

    const updateTime = (type: TimeType, value: number | number[]) => {
        const valid = validateTime(type, value);
        if (valid) {
            setTime(type, value);
            updateFlow();
        }
    };

    const updateHours = (value: number | number[]) => {
        updateTime('hours', value);
    };

    const updateMinutes = (value: number | number[]) => {
        updateTime('minutes', value);
    };

    const updateSeconds = (value: number | number[]) => {
        updateTime('seconds', value);
    };

    return {
        setTime,
        updateHours,
        updateMinutes,
        updateSeconds,
        getSetDateTime,
    };
};
