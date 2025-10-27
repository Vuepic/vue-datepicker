import { onMounted, type EmitFn } from 'vue';
import { set } from 'date-fns';

import { useContext, useDateUtils, useRemapper } from '@/composables';
import { useTimePickerUtils } from '@/components/TimePicker/useTimePickerUtils.ts';

import type { TimeInternalModel, TimeModel } from '@/types';

export interface TimePickerEmits {
    'update-flow-step': [];
    'time-update': [];
}

export const useTimePicker = (emit: EmitFn<TimePickerEmits>) => {
    const {
        getDate,
        time,
        modelValue,
        state,
        defaults: { startTime, range, timeConfig },
    } = useContext();

    const { getTimeObj } = useDateUtils();
    useRemapper(() => {
        if (state.isTextInputDate) setTimeFromModel();
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
        if (timeConfig.value.startTime) {
            if (Array.isArray(timeConfig.value.startTime)) {
                const parsedFirst = parseStartTime(timeConfig.value.startTime[0]!);
                const parsedSecond = parseStartTime(timeConfig.value.startTime[1]!);
                return [set(getDate(), parsedFirst), set(getDate(), parsedSecond)];
            }
            const parsed = parseStartTime(timeConfig.value.startTime);
            return set(getDate(), parsed);
        }
        return range.value.enabled ? [null, null] : null;
    };

    const assignEmptyModel = () => {
        if (range.value.enabled) {
            const [firstStartTime, secondStartTime] = getDateFromStartTime() as Date[];
            modelValue.value = [getSetDateTime(firstStartTime, 0), getSetDateTime(secondStartTime, 1)];
        } else {
            modelValue.value = getSetDateTime(getDateFromStartTime() as Date);
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

    const updateTime = (values: TimeInternalModel) => {
        updateTimeValues(values, handleTimeUpdate);
    };

    return {
        modelValue,
        time,
        disabledTimesConfig,
        validateTime,
        updateTime,
    };
};
