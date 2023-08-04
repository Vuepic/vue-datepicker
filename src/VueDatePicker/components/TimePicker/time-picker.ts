import { onMounted } from 'vue';

import { useDefaults, useModel } from '@/composables';
import { useTimePickerUtils } from '@/components/TimePicker/time-picker-utils';
import { getDate, getTimeObj } from '@/utils/date-utils';

import type { PickerBasePropsType } from '@/props';
import type { VueEmit } from '@/interfaces';

export const useTimePicker = (props: PickerBasePropsType, emit: VueEmit) => {
    const { modelValue, time } = useModel(props, emit);
    const { defaultedStartTime } = useDefaults(props);
    const { updateTimeValues, getSetDateTime, setTime, assignStartTime } = useTimePickerUtils(props, time, modelValue);

    const assignEmptyModel = () => {
        if (props.range) {
            modelValue.value = [getDate(), getDate()];
        } else {
            modelValue.value = getDate();
        }
    };

    const getTimeValue = (dates: Date | Date[] | null) => {
        if (Array.isArray(dates)) {
            return [getTimeObj(getDate(dates[0])), getTimeObj(getDate(dates[1]))];
        }
        return [getTimeObj(dates ?? getDate())];
    };

    const assignTime = (hours: number | number[], minutes: number | number[], seconds: number | number[]) => {
        setTime('hours', hours);
        setTime('minutes', minutes);
        if (props.enableSeconds) {
            setTime('seconds', seconds);
        }
    };

    const setTimeFromModel = () => {
        const [first, second] = getTimeValue(modelValue.value);

        if (props.range) {
            return assignTime(
                [first.hours, second.hours],
                [first.minutes, second.minutes],
                [first.seconds, second.minutes],
            );
        }
        return assignTime(first.hours, first.minutes, first.seconds);
    };

    onMounted(() => {
        assignStartTime(defaultedStartTime.value);
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
        time,
        updateTime,
    };
};
