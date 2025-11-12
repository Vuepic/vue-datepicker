import { EventKey, MAP_KEY_FORMAT } from '@/constants';
import { format, getHours, getMinutes, getSeconds } from 'date-fns';
import type {
    Config,
    DPElements,
    InternalModelValue,
    SelectItem,
    TimeInternalModel,
    TimeKey,
    TimeModel,
} from '@/types';

export const useHelperFns = () => {
    const getMapKey = (date: Date | string | number, mapKeyFormat?: MAP_KEY_FORMAT) => {
        return format(date, mapKeyFormat ?? MAP_KEY_FORMAT.DATE);
    };

    const getMapKeyType = (monthPicker: boolean | undefined, yearPicker: boolean | undefined): MAP_KEY_FORMAT => {
        if (monthPicker) return MAP_KEY_FORMAT.MONTH_AND_YEAR;
        if (yearPicker) return MAP_KEY_FORMAT.YEAR;
        return MAP_KEY_FORMAT.DATE;
    };

    const getMapDate = <T>(date: Date, map: Map<string, T>, format?: MAP_KEY_FORMAT): T | undefined => {
        return map.get(getMapKey(date, format));
    };

    const convertType = <T>(val: any): T => {
        return val as unknown as T;
    };

    const getNumVal = (num?: string | number | null): number | null => {
        if (num === 0) return num;
        if (!num || Number.isNaN(+num)) return null;
        return +num;
    };

    const getFocusableElementsSelector = () =>
        [
            'a[href]',
            'area[href]',
            "input:not([disabled]):not([type='hidden'])",
            'select:not([disabled])',
            'textarea:not([disabled])',
            'button:not([disabled])',
            "[tabindex]:not([tabindex='-1'])",
            '[data-datepicker-instance]',
        ].join(', ');

    const findNextFocusableElement = (startingElement: HTMLElement, reverse: boolean) => {
        let focusable = [...document.querySelectorAll(getFocusableElementsSelector())] as HTMLElement[];

        focusable = focusable.filter((elem) => {
            return !startingElement.contains(elem) || 'datepicker-instance' in elem.dataset;
        });

        const currentIndex = focusable.indexOf(startingElement);

        if (currentIndex >= 0 && (reverse ? currentIndex - 1 >= 0 : currentIndex + 1 <= focusable.length)) {
            return focusable[currentIndex + (reverse ? -1 : 1)] as HTMLElement;
        }
    };

    const padZero = (val: number) => String(val).padStart(2, '0');

    const getElWithin = (wrapper: HTMLElement | null, attribute: DPElements): HTMLElement | undefined | null => {
        return wrapper?.querySelector(`[data-dp-element="${attribute}"]`);
    };

    const checkStopPropagation = (ev: Event | undefined, config: Config, immediate = false) => {
        if (ev && config.allowStopPropagation) {
            if (immediate) {
                ev.stopImmediatePropagation();
            }
            ev.stopPropagation();
        }
    };

    const checkKeyDown = (ev: KeyboardEvent, fn: () => any, prevent = false, cb?: (ev: KeyboardEvent) => void) => {
        if (ev.key === EventKey.enter || ev.key === EventKey.space) {
            if (prevent) {
                ev.preventDefault();
            }
            return fn();
        }
        if (cb) return cb(ev);
    };

    const handleEventPropagation = (ev: KeyboardEvent, config: Config) => {
        if (config.allowStopPropagation) {
            ev.stopPropagation();
        }
        if (config.allowPreventDefault) {
            ev.preventDefault();
        }
    };

    const findFocusableEl = (container: HTMLElement | null): HTMLElement | undefined => {
        if (container) {
            const elementsList = container.querySelectorAll('input, button, select, textarea, a[href]');
            const elArr = [...elementsList] as HTMLElement[];
            return elArr[0];
        }
        return undefined;
    };

    const isTouchDevice = () => {
        return 'ontouchstart' in globalThis || navigator.maxTouchPoints > 0;
    };

    const hoursToAmPmHours = (index: number): number => {
        const hoursValues = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        return hoursValues[index]!;
    };

    const getGroupedList = (items: SelectItem[]): SelectItem[][] => {
        const list = [];
        const setList = (listItems: SelectItem[]) => {
            return listItems.filter((item) => !!item);
        };
        for (let i = 0; i < items.length; i += 3) {
            const listItems = [items[i]!, items[i + 1]!, items[i + 2]!];
            list.push(setList(listItems));
        }
        return list;
    };

    const errorMapper = {
        prop: (name: string): string => `"${name}" prop must be enabled!`,
        dateArr: (name: string) => `You need to use array as "model-value" binding in order to support "${name}"`,
    };

    const timeGetter = (
        type: TimeKey,
        date: Date | Date[] | null,
        fallbackDate: Date,
        isRange: boolean,
        time: TimeInternalModel,
    ) => {
        const fn = {
            hours: getHours,
            minutes: getMinutes,
            seconds: getSeconds,
        };

        if (!date) return isRange ? [fn[type](fallbackDate), fn[type](fallbackDate)] : fn[type](fallbackDate);

        if (Array.isArray(date) && isRange) {
            const start = date[0] ?? fallbackDate;
            const end = date[1];
            return [fn[type](start), end ? fn[type](end) : ((time[type] as number[])[1] ?? fn[type](fallbackDate))];
        }

        return fn[type](date as Date);
    };

    const setTimeModelValue = (
        time: TimeInternalModel,
        modelValue: InternalModelValue,
        fallbackDate: Date,
        isRange: boolean,
    ) => {
        time.hours = timeGetter('hours', modelValue, fallbackDate, isRange, time);
        time.minutes = timeGetter('minutes', modelValue, fallbackDate, isRange, time);
        time.seconds = timeGetter('seconds', modelValue, fallbackDate, isRange, time);
    };

    const getTimeObjFromCurrent = (
        date: Date,
        obj: TimeModel | Record<string, string | number>,
        enableSeconds: boolean,
    ): TimeModel => {
        const defaultTime = {
            hours: getHours(date),
            minutes: getMinutes(date),
            seconds: enableSeconds ? getSeconds(date) : 0,
        };
        return Object.assign(defaultTime, obj);
    };

    return {
        getMapKey,
        getMapKeyType,
        getMapDate,
        convertType,
        getNumVal,
        findNextFocusableElement,
        padZero,
        getElWithin,
        checkStopPropagation,
        checkKeyDown,
        handleEventPropagation,
        findFocusableEl,
        isTouchDevice,
        hoursToAmPmHours,
        getGroupedList,
        setTimeModelValue,
        getTimeObjFromCurrent,
        errorMapper,
    };
};
