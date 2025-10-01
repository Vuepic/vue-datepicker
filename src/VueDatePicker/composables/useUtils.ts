import { format } from 'date-fns';
import { EventKey, MAP_KEY_FORMAT } from '@/constants';

import { useDateUtils } from '@/composables';
import type {
    Config,
    DPElements,
    HighlightConfig,
    HighlightFn,
    InternalModelValue,
    ModelValue,
    OverlayGridItem,
    SelectItem,
} from '@/types';

export const useUtils = () => {
    const { getDate } = useDateUtils();

    // todo - check usage
    const padZero = (val: number) => (val < 10 ? `0${val}` : val);

    const checkHighlightMonth = (defaultedHighlight: HighlightConfig | HighlightFn, month: number, year: number) => {
        return typeof defaultedHighlight === 'function'
            ? defaultedHighlight({ month: month, year })
            : !!defaultedHighlight.months.find((value) => value.month === month && value.year === year);
    };

    const checkHighlightYear = (defaultedHighlight: HighlightConfig | HighlightFn, year: number) => {
        return typeof defaultedHighlight === 'function'
            ? defaultedHighlight(year)
            : defaultedHighlight.years.includes(year);
    };

    const handleEventPropagation = (ev: KeyboardEvent, config: Config) => {
        if (config.allowStopPropagation) {
            ev.stopPropagation();
        }
        if (config.allowPreventDefault) {
            ev.preventDefault();
        }
    };

    const getMapKey = (date: Date | string | number, mapKeyFormat?: MAP_KEY_FORMAT) => {
        return format(date, mapKeyFormat ?? MAP_KEY_FORMAT.DATE);
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
        let focusable = [...document.querySelectorAll(getFocusableElementsSelector())];

        focusable = focusable.filter((elem) => {
            return !startingElement.contains(elem) || elem.hasAttribute('data-datepicker-instance');
        });

        const currentIndex = focusable.indexOf(startingElement);

        if (currentIndex >= 0 && (reverse ? currentIndex - 1 >= 0 : currentIndex + 1 <= focusable.length)) {
            return focusable[currentIndex + (reverse ? -1 : 1)] as HTMLElement;
        }
    };

    const getNumVal = (num?: string | number | null): number | null => {
        if (num === 0) return num;
        if (!num || isNaN(+num)) return null;
        return +num;
    };

    const getMapKeyType = (monthPicker: boolean | undefined, yearPicker: boolean | undefined): MAP_KEY_FORMAT => {
        if (monthPicker) return MAP_KEY_FORMAT.MONTH_AND_YEAR;
        if (yearPicker) return MAP_KEY_FORMAT.YEAR;
        return MAP_KEY_FORMAT.DATE;
    };

    const getMapDate = <T>(date: Date, map: Map<string, T>, format?: MAP_KEY_FORMAT): T | undefined => {
        return map.get(getMapKey(date, format));
    };

    const errorMapper = {
        prop: (name: string): string => `"${name}" prop must be enabled!`,
        dateArr: (name: string) => `You need to use array as "model-value" binding in order to support "${name}"`,
    };

    const convertType = <T>(val: any): T => {
        return val as unknown as T;
    };

    const isModelAuto = (modelValue: InternalModelValue): boolean => {
        if (Array.isArray(modelValue)) {
            return !!modelValue[0] && !!modelValue[1];
        }
        return false;
    };

    const matchDate = (date: Date, mapOrFn: Map<string, any> | ((date: Date) => boolean) | null) => {
        if (!date) return true;
        if (!mapOrFn) return false;
        if (mapOrFn instanceof Map) {
            return !!getMapDate(date, mapOrFn);
        }
        return mapOrFn(getDate(date));
    };

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

    const findFocusableEl = (container: HTMLElement | null): HTMLElement | undefined => {
        if (container) {
            const elementsList = container.querySelectorAll('input, button, select, textarea, a[href]');
            const elArr = [...elementsList] as HTMLElement[];
            return elArr[0];
        }
        return undefined;
    };

    const getGroupedList = (items: SelectItem[]): SelectItem[][] => {
        const list = [];
        const setList = (listItems: SelectItem[]) => {
            return listItems.filter((item) => item);
        };
        for (let i = 0; i < items.length; i += 3) {
            const listItems = [items[i]!, items[i + 1]!, items[i + 2]!];
            list.push(setList(listItems));
        }
        return list;
    };

    const groupListAndMap = (
        list: SelectItem[],
        cb: (item: SelectItem) => {
            active: boolean;
            disabled: boolean;
            highlighted?: boolean;
            isBetween?: boolean;
        },
    ): OverlayGridItem[][] => {
        return getGroupedList(list).map((items) => {
            return items.map((item) => {
                const { active, disabled, isBetween, highlighted } = cb(item);
                return {
                    ...item,
                    active,
                    disabled: disabled,
                    className: {
                        dp__overlay_cell_active: active,
                        dp__overlay_cell: !active,
                        dp__overlay_cell_disabled: disabled,
                        dp__overlay_cell_pad: true,
                        dp__overlay_cell_active_disabled: disabled && active,
                        dp__cell_in_between: isBetween,
                        'dp--highlighted': highlighted,
                    },
                };
            });
        });
    };

    const checkMinMaxValue = (value: number | string, min?: number, max?: number): boolean => {
        const hasMax = max !== undefined && max !== null;
        const hasMin = min !== undefined && min !== null;

        if (!hasMax && !hasMin) return false;

        const maxVal = +(max as number);
        const minVal = +(min as number);

        if (hasMax && hasMin) {
            return +value > maxVal || +value < minVal;
        }
        if (hasMax) return +value > maxVal;

        if (hasMin) {
            return +value < minVal;
        }

        return false;
    };

    const isTouchDevice = () => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };

    const hoursToAmPmHours = (index: number): number => {
        const hoursValues = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        return hoursValues[index]!;
    };

    return {
        padZero,
        checkHighlightMonth,
        checkHighlightYear,
        getMapKey,
        findNextFocusableElement,
        getNumVal,
        getMapKeyType,
        getMapDate,
        convertType,
        isModelAuto,
        matchDate,
        handleEventPropagation,
        getElWithin,
        checkStopPropagation,
        checkKeyDown,
        findFocusableEl,
        groupListAndMap,
        checkMinMaxValue,
        isTouchDevice,
        hoursToAmPmHours,
        errorMapper,
    };
};
