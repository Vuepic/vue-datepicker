import { onMounted, type EmitFn } from 'vue';
import { set } from 'date-fns';

import { useContext, useDateUtils, useRemapper, useTimeZone } from '@/composables';
import { useTimePickerUtils } from '@/components/TimePicker/useTimePickerUtils.ts';

import type { TimeModel } from '@/types';

export interface TimePickerEmits {
    'update-flow-step': [];
    'time-update': [];
}

export const useTimePicker = (emit: EmitFn<TimePickerEmits>) => {
    const {
        time,
        modelValue,
        rootProps,
        isTextInputDate,
        defaults: { startTime, range, tz, timeConfig },
    } = useContext();
    const { toTzSafe } = useTimeZone();

    const { getDate, getTimeObj } = useDateUtils();
    useRemapper(() => {
        if (isTextInputDate.value) setTimeFromModel();
    });
    const { updateTimeValues, getSetDateTime, assignTime, assignStartTime, disabledTimesConfig, validateTime } =
        useTimePickerUtils(updateFlowStep);

    function updateFlowStep() {
        emit('update-flow-step');
    }

    const parseStartTime = (startTime: TimeModel) => {
        const { hours, minutes, seconds } = startTime;
        return { hours: +hours, minutes: +minutes, seconds: seconds ? +seconds : 0 };
    };

    const getDateFromStartTime = () => {
        if (rootProps.startTime) {
            if (Array.isArray(rootProps.startTime)) {
                const parsedFirst = parseStartTime(rootProps.startTime[0]!);
                const parsedSecond = parseStartTime(rootProps.startTime[1]!);
                return [set(getDate(), parsedFirst), set(getDate(), parsedSecond)];
            }
            const parsed = parseStartTime(rootProps.startTime);
            return set(getDate(), parsed);
        }
        return range.value.enabled ? [null, null] : null;
    };

    const assignEmptyModel = () => {
        if (range.value.enabled) {
            const [firstStartTime, secondStartTime] = getDateFromStartTime() as Date[];
            modelValue.value = [
                toTzSafe(getSetDateTime(firstStartTime, 0), tz.value)!,
                toTzSafe(getSetDateTime(secondStartTime, 1), tz.value)!,
            ];
        } else {
            modelValue.value = toTzSafe(getSetDateTime(getDateFromStartTime() as Date), tz.value)!;
        }
    };

    const getTimeValue = (dates: Date | Date[] | null) => {
        if (Array.isArray(dates)) {
            return [getTimeObj(getDate(dates[0])), getTimeObj(getDate(dates[1]))];
        }
        return [getTimeObj(dates ?? getDate())];
    };

    const assignNewTime = (hours: number | number[], minutes: number | number[], seconds: number | number[]) => {
        assignTime('hours', hours);
        assignTime('minutes', minutes);
        assignTime('seconds', timeConfig.value.enableSeconds ? seconds : 0);
    };

    const setTimeFromModel = () => {
        const [first, second] = getTimeValue(modelValue.value);

        if (range.value.enabled) {
            return assignNewTime(
                [first!.hours, second!.hours],
                [first!.minutes, second!.minutes],
                [first!.seconds, second!.seconds],
            );
        }
        return assignNewTime(first!.hours, first!.minutes, first!.seconds);
    };

    onMounted(() => {
        assignStartTime(startTime.value);
        if (!modelValue.value) return assignEmptyModel();
        return setTimeFromModel();
    });

    const handleTimeUpdate = () => {
        if (Array.isArray(modelValue.value)) {
            modelValue.value = modelValue.value.map((date, i) => {
                if (date) return getSetDateTime(date, i);
                return date;
            });
        } else {
            modelValue.value = getSetDateTime(modelValue.value);
        }
        emit('time-update');
    };

    const updateTime = (value: number | number[], isHours = true, isSeconds = false) => {
        updateTimeValues(value, isHours, isSeconds, handleTimeUpdate);
    };

    return {
        modelValue,
        time,
        disabledTimesConfig,
        validateTime,
        updateTime,
    };
};
