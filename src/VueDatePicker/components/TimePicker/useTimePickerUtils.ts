import { computed } from 'vue';
import { isAfter, isBefore, setMilliseconds, setSeconds } from 'date-fns';

import { useContext, useDateUtils } from '@/composables';

import type { TimeKey, TimeModel } from '@/types';

export const useTimePickerUtils = (updateFlow?: () => void) => {
    const { getDate, isDateEqual, setTime } = useDateUtils();
    const {
        modelValue,
        time,
        rootProps,
        defaults: { range, timeConfig },
    } = useContext();

    const getTimeValue = (type: TimeKey, i?: number): number => {
        if (Array.isArray(time[type])) return time[type][i as number]!;
        return time[type];
    };
    // Check if seconds are enabled, and return proper value
    const getSecondsValue = (i?: number): number => {
        if (timeConfig.value.enableSeconds) {
            if (Array.isArray(time.seconds)) {
                return time.seconds[i as number]!;
            }
            return time.seconds;
        }
        return 0;
    };
    const getSetDateTime = (dateValue?: Date | null, i?: number): Date => {
        if (!dateValue) return setSeconds(getDate(), getSecondsValue(i));
        if (i !== undefined) {
            return setTime(
                { hours: getTimeValue('hours', i), minutes: getTimeValue('minutes', i), seconds: getSecondsValue(i) },
                dateValue,
            );
        }
        return setTime(
            { hours: time.hours as number, minutes: time.minutes as number, seconds: getSecondsValue() },
            dateValue,
        );
    };
    // Any time modification will go through this function
    const assignTime = (property: TimeKey, value: number | number[]): void => {
        time[property] = value;
    };

    const isRangeCheck = computed(() => {
        if (rootProps.modelAuto && range.value.enabled) {
            return Array.isArray(modelValue.value) ? modelValue.value.length > 1 : false;
        }
        return range.value.enabled;
    });

    const validateTime = (type: TimeKey, value: number | number[]) => {
        const copies = Object.fromEntries(
            Object.keys(time).map((key) => {
                if (key === type) return [key, value];
                return [key, time[key as TimeKey]].slice();
            }),
        );

        if (isRangeCheck.value && !range.value.disableTimeRangeValidation) {
            const setNewTime = (index: number) =>
                modelValue.value
                    ? setTime(
                          {
                              hours: (copies.hours as number[])[index],
                              minutes: (copies.minutes as number[])[index],
                              seconds: (copies.seconds as number[])[index],
                          },
                          (modelValue.value as Date[])[index],
                      )
                    : (null as unknown as Date);

            const resetMilliseconds = (index: number) => setMilliseconds((modelValue.value as Date[])[index]!, 0);
            return !(
                isDateEqual(setNewTime(0), setNewTime(1)) &&
                (isAfter(setNewTime(0), resetMilliseconds(1)) || isBefore(setNewTime(1), resetMilliseconds(0)))
            );
        }
        return true;
    };

    const updateTime = (type: TimeKey, value: number | number[]) => {
        const valid = validateTime(type, value);
        if (valid) {
            assignTime(type, value);
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
            const hours = isMulti ? [+startTime[0]!.hours, +startTime[1]!.hours] : +startTime.hours;
            const minutes = isMulti ? [+startTime[0]!.minutes, +startTime[1]!.minutes] : +startTime.minutes;
            const seconds = isMulti
                ? [+(startTime[0]!.seconds ?? 0), +(startTime[1]!.seconds ?? 0)]
                : +(startTime.seconds ?? 0);

            assignTime('hours', hours);
            assignTime('minutes', minutes);
            if (timeConfig.value.enableSeconds) {
                assignTime('seconds', seconds);
            }
        }
    };

    const getDisabledTimesData = (ind: number, hours?: number) => {
        const data: { hours: number; disabledArr: TimeModel[] } = {
            hours: Array.isArray(time.hours) ? time.hours[ind]! : time.hours!,
            disabledArr: [],
        };

        if (hours || hours === 0) data.hours = hours;

        if (Array.isArray(rootProps.disabledTimes)) {
            data.disabledArr = (
                range.value.enabled && Array.isArray(rootProps.disabledTimes[ind])
                    ? rootProps.disabledTimes[ind]
                    : rootProps.disabledTimes
            ) as TimeModel[];
        }
        return data;
    };

    const disabledTimesConfig = computed(() => (ind: number, hoursVal?: number) => {
        if (Array.isArray(rootProps.disabledTimes)) {
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
        assignTime,
        updateHours,
        updateMinutes,
        updateSeconds,
        getSetDateTime,
        updateTimeValues,
        getSecondsValue,
        assignStartTime,
        validateTime,
        disabledTimesConfig,
    };
};
