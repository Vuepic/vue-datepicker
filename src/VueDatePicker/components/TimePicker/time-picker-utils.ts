import { computed } from 'vue';

import { isAfter, isBefore, setMilliseconds } from 'date-fns';

import { getDate, isDateEqual, setDateTime } from '@/utils/date-utils';

import type {
    InternalModuleValue,
    Time,
    TimeType,
    TimePickerProps,
    TimeModel,
    TimeValuesInv,
    DisabledTime,
} from '@/interfaces';
import type { UnwrapNestedRefs, WritableComputedRef } from 'vue';

export const useTimePickerUtils = (
    props: TimePickerProps,
    time: UnwrapNestedRefs<Time>,
    modelValue: WritableComputedRef<InternalModuleValue>,
    updateFlow?: () => void,
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
    const getSetDateTime = (dateValue: Date | null, i?: number): Date => {
        if (!dateValue) return getDate();
        if (i !== undefined) {
            return setDateTime(dateValue, getTimeValue('hours', i), getTimeValue('minutes', i), getSecondsValue(i));
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
                return [key, time[key as TimeType]].slice();
            }),
        );

        if (props.range && !props.disableTimeRangeValidation) {
            const setTime = (index: number) =>
                !modelValue.value
                    ? (null as unknown as Date)
                    : setDateTime(
                          (modelValue.value as Date[])[index],
                          (copies.hours as number[])[index],
                          (copies.minutes as number[])[index],
                          (copies.seconds as number[])[index],
                      );

            const resetMilliseconds = (index: number) => setMilliseconds((modelValue.value as Date[])[index], 0);
            return !(
                isDateEqual(setTime(0), setTime(1)) &&
                (isAfter(setTime(0), resetMilliseconds(1)) || isBefore(setTime(1), resetMilliseconds(0)))
            );
        }
        return true;
    };

    const updateTime = (type: TimeType, value: number | number[]) => {
        const valid = validateTime(type, value);
        if (valid) {
            setTime(type, value);
            if (updateFlow) updateFlow();
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

    const updateTimeValues = (
        value: number | number[],
        isHours: boolean,
        isSeconds: boolean,
        handleTimeUpdate: (date: Date | Date[]) => void,
    ) => {
        if (isHours) updateHours(value);
        if (!isHours && !isSeconds) updateMinutes(value);
        if (isSeconds) updateSeconds(value);

        if (modelValue.value) {
            handleTimeUpdate(modelValue.value);
        }
    };

    /**
     * If start time is provided, assign data.
     * Note: data is sanitized  parameters since prop value can be provided partially
     */
    const assignStartTime = (startTime: TimeModel | TimeModel[] | null): void => {
        if (startTime) {
            const isMulti = Array.isArray(startTime);
            const hours = isMulti ? [+startTime[0].hours, +startTime[1].hours] : +startTime.hours;
            const minutes = isMulti ? [+startTime[0].minutes, +startTime[1].minutes] : +startTime.minutes;
            const seconds = isMulti ? [+startTime[0].seconds, +startTime[1].seconds] : +startTime.seconds;

            setTime('hours', hours);
            setTime('minutes', minutes);
            if (props.enableSeconds) {
                setTime('seconds', seconds);
            }
        }
    };

    const getDisabledTimesData = (ind: number, hours?: number) => {
        const data: { hours: number; disabledArr: DisabledTime[] } = {
            hours: Array.isArray(time.hours) ? time.hours[ind] : time.hours,
            disabledArr: [],
        };

        if (hours || hours === 0) data.hours = hours;

        if (Array.isArray(props.disabledTimes)) {
            data.disabledArr = (
                props.range && Array.isArray(props.disabledTimes[ind]) ? props.disabledTimes[ind] : props.disabledTimes
            ) as DisabledTime[];
        }
        return data;
    };

    const disabledTimesConfig = computed(() => (ind: number, hoursVal?: number): TimeValuesInv => {
        if (Array.isArray(props.disabledTimes)) {
            const { disabledArr, hours } = getDisabledTimesData(ind, hoursVal);

            const timeFound = disabledArr.filter((time) => +time.hours === hours);
            if (timeFound[0]?.minutes === '*') return { hours: [hours], minutes: undefined, seconds: undefined };
            return {
                hours: [],
                minutes: timeFound?.map((t) => +t.minutes) ?? [],
                seconds: timeFound?.map((t) => (t.seconds ? +t.seconds : undefined)) ?? [],
            };
        }
        return { hours: [], minutes: [], seconds: [] };
    });

    return {
        setTime,
        updateHours,
        updateMinutes,
        updateSeconds,
        getSetDateTime,
        updateTimeValues,
        getSecondsValue,
        assignStartTime,
        disabledTimesConfig,
    };
};
