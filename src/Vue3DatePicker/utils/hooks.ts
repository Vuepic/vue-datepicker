import { ICalendarDate, IHoursMinutes, IMonthYearHook, MonthYearPickerProps, VueEmit } from '../interfaces';
import { computed, ComputedRef, Ref } from 'vue';
import { generateHours, generateMinutes, getCalendarDays } from './util';

export const useMontYearPick = (props: MonthYearPickerProps, emit: VueEmit): IMonthYearHook => {
    const onNext = (): void => {
        let month = props.month;
        let year = props.year;
        if (props.month === 11) {
            month = 0;
            year = props.year + 1;
        } else {
            month += 1;
        }
        updateMonthYear(month, year);
    };

    const onPrev = (): void => {
        let month = props.month;
        let year = props.year;
        if (props.month === 0) {
            month = 11;
            year = props.year - 1;
        } else {
            month -= 1;
        }
        updateMonthYear(month, year);
    };

    const updateMonthYear = (month: number, year: number): void => {
        emit('update:month', month);
        emit('update:year', year);
    };

    return { onNext, onPrev };
};

export const useHoursAndMinutes = (is24: boolean, timeIncrement: number): ComputedRef<IHoursMinutes> => {
    return computed((): IHoursMinutes => {
        return {
            hours: generateHours(is24),
            minutes: generateMinutes(timeIncrement),
        };
    });
};

export const useBindValue = (props: any, emit: VueEmit, key = 'modelValue'): ComputedRef<unknown> => {
    return computed({
        get: () => props[key],
        set: (value) => emit(`update:${key}`, value),
    });
};

export const useDpDaysGen = (month: Ref<number>, year: Ref<number>, start: number): ComputedRef<ICalendarDate[]> =>
    computed(() => {
        return getCalendarDays(month.value, year.value, start);
    });

export const useKey = (index: number): string => {
    const len = 5;
    function makeKey(length: number): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result + index;
    }
    return makeKey(len);
};

export const useScrollPosition = (parentId: string, scrollElId: string): void => {
    const el = document.getElementById(scrollElId);
    if (el) {
        const parent = document.getElementById(parentId);
        if (parent) {
            parent.scrollTop =
                el.offsetTop -
                parent.offsetTop -
                (parent.getBoundingClientRect().height / 2 - el.getBoundingClientRect().height);
        }
    }
};
