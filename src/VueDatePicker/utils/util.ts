import { unref } from 'vue';
import { format } from 'date-fns';

import type {
    Config,
    DPElements,
    IDefaultSelect,
    IMarker,
    MaybeElementRef,
    ModelValue,
    OverlayGridItem,
} from '@/interfaces';
import { type Locale } from 'date-fns';
import type { ComponentPublicInstance } from 'vue';
import { getDate } from '@/utils/date-utils';

export const getArrayInArray = <T>(list: T[], increment = 3): T[][] => {
    const items = [];
    for (let i = 0; i < list.length; i += increment) {
        items.push([list[i], list[i + 1], list[i + 2]]);
    }

    return items;
};

function dayNameIntlMapper(locale: string) {
    return (day: number) => {
        return new Intl.DateTimeFormat(locale, { weekday: 'short' })
            .format(new Date(`2017-01-0${day}T00:00:00`))
            .slice(0, 2);
    };
}

function dayNameDateFnsMapper(formatLocale: Locale) {
    return (day: number) => {
        return format(new Date(`2017-01-0${day}T00:00:00`), 'EEEEEE', { locale: formatLocale });
    };
}

/**
 * Generate week day names based on formatLocale or locale and in order specified in week start
 */
export const getDayNames = (formatLocale: Locale | null, locale: string, weekStart: number): string[] => {
    // Get list in order from sun ... sat
    const daysArray = [1, 2, 3, 4, 5, 6, 7];
    let days;

    // Map day order numbers to names
    if (formatLocale !== null) {
        try {
            days = daysArray.map(dayNameDateFnsMapper(formatLocale));
        } catch (e) {
            days = daysArray.map(dayNameIntlMapper(locale));
        }
    } else {
        days = daysArray.map(dayNameIntlMapper(locale));
    }

    // Get days that are in order before specified week start
    const beforeWeekStart = days.slice(0, weekStart);
    // Get days that are in order after specified week start
    const afterWeekStart = days.slice(weekStart + 1, days.length);

    // return them in correct order
    return [days[weekStart]].concat(...afterWeekStart).concat(...beforeWeekStart);
};

/**
 * Generate array of years for selection display
 */
export const getYears = (yearRange: number[] | string[], locale: string, reverse?: boolean): IDefaultSelect[] => {
    const years: IDefaultSelect[] = [];
    for (let year = +yearRange[0]; year <= +yearRange[1]; year++) {
        years.push({ value: +year, text: formatNumber(year, locale) });
    }
    return reverse ? years.reverse() : years;
};

/**
 * Generate month names based on formatLocale or locale for selection display
 */
export const getMonths = (
    formatLocale: Locale | null,
    locale: string,
    monthFormat: 'long' | 'short',
): IDefaultSelect[] => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
        const mm = month < 10 ? `0${month}` : month;
        return new Date(`2017-${mm}-01T00:00:00`);
    });

    if (formatLocale !== null) {
        try {
            const monthDateFnsFormat = monthFormat === 'long' ? 'MMMM' : 'MMM';
            return months.map((date, i) => {
                const month = format(date, monthDateFnsFormat, { locale: formatLocale });
                return {
                    text: month.charAt(0).toUpperCase() + month.substring(1),
                    value: i,
                };
            });
        } catch (e) {
            // Do nothing. Go ahead to execute fallback
        }
    }

    const formatter = new Intl.DateTimeFormat(locale, { month: monthFormat });
    return months.map((date, i) => {
        const month = formatter.format(date);
        return {
            text: month.charAt(0).toUpperCase() + month.substring(1),
            value: i,
        };
    });
};

/**
 * Since internally watched values are in 24h mode, this will get am-pm value from set hour
 */
export const hoursToAmPmHours = (index: number): number => {
    const hoursValues = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    return hoursValues[index];
};

export const unrefElement = (elRef: MaybeElementRef): HTMLElement | null => {
    const plain = unref(elRef);
    if (!(plain as ComponentPublicInstance)?.$el) return plain as HTMLElement | null;
    return (plain as ComponentPublicInstance)?.$el;
};

export const getDefaultMarker = (marker: IMarker): IMarker => ({ type: 'dot', ...(marker ?? {}) });

export const isModelAuto = (modelValue: ModelValue): boolean => {
    if (Array.isArray(modelValue)) {
        return !!modelValue[0] && !!modelValue[1];
    }
    return false;
};

export const errors = {
    prop: (name: string): string => `"${name}" prop must be enabled!`,
    dateArr: (name: string) => `You need to use array as "model-value" binding in order to support "${name}"`,
};

export const convertType = <T>(val: any): T => {
    return val as unknown as T;
};

export const getNumVal = (num?: string | number | null): number | null => {
    if (num === 0) return num;
    if (!num || isNaN(+num)) return null;
    return +num;
};

export const isNumNullish = (num?: number | null): num is null => {
    return num === null;
};

export const findFocusableEl = (container: HTMLElement | null): HTMLElement | undefined => {
    if (container) {
        const elementsList = container.querySelectorAll('input, button, select, textarea, a[href]');
        const elArr = [...elementsList] as HTMLElement[];
        return elArr[0];
    }
    return undefined;
};

/**
 * Create array for the SelectionOverlay grouped by 3
 */
export const getGroupedList = (items: IDefaultSelect[]): IDefaultSelect[][] => {
    const list = [];
    const setList = (listItems: IDefaultSelect[]) => {
        return listItems.filter((item) => item);
    };
    for (let i = 0; i < items.length; i += 3) {
        const listItems = [items[i], items[i + 1], items[i + 2]];
        list.push(setList(listItems));
    }
    return list;
};

/**
 * Check if number is between min and max values
 */
export const checkMinMaxValue = (value: number | string, min?: number, max?: number): boolean => {
    const hasMax = max !== undefined && max !== null;
    const hasMin = min !== undefined && min !== null;

    if (!hasMax && !hasMin) return false;

    const maxVal = +(max as number);
    const minVal = +(min as number);

    if (hasMax && hasMin) {
        return +value > maxVal || +value < minVal;
    }
    if (hasMax) {
        return +value > maxVal;
    }

    if (hasMin) {
        return +value < minVal;
    }

    return false;
};

/**
 * Maps data for the SelectionOverlay
 */
export const groupListAndMap = (
    list: IDefaultSelect[],
    cb: (item: IDefaultSelect) => { active: boolean; disabled: boolean; highlighted?: boolean; isBetween?: boolean },
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

export const checkStopPropagation = (ev: Event | undefined, config: Config, immediate = false) => {
    if (ev && config.allowStopPropagation) {
        if (immediate) {
            ev.stopImmediatePropagation();
        }
        ev.stopPropagation();
    }
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

export function findNextFocusableElement(startingElement: HTMLElement, reverse: boolean) {
    let focusable = [...document.querySelectorAll(getFocusableElementsSelector())];

    focusable = focusable.filter((elem) => {
        return !startingElement.contains(elem) || elem.hasAttribute('data-datepicker-instance');
    });

    const currentIndex = focusable.indexOf(startingElement);

    if (currentIndex >= 0 && (reverse ? currentIndex - 1 >= 0 : currentIndex + 1 <= focusable.length)) {
        return focusable[currentIndex + (reverse ? -1 : 1)] as HTMLElement;
    }
}

export const getElWithin = (wrapper: HTMLElement | null, attribute: DPElements): HTMLElement | undefined | null => {
    return wrapper?.querySelector(`[data-dp-element="${attribute}"]`);
};

export const formatNumber = (num: number, locale: string): string => {
    return new Intl.NumberFormat(locale, { useGrouping: false, style: 'decimal' }).format(num);
};

export const getMapKey = (date: Date | string | number) => {
    return format(date, 'dd-MM-yyyy');
};

export const shouldMap = (arr: any): arr is Date[] | string[] | boolean => {
    return Array.isArray(arr);
};

export const getMapDate = <T>(date: Date, map: Map<string, T>): T | undefined => {
    return map.get(getMapKey(date));
};

export const matchDate = (date: Date, mapOrFn: Map<string, any> | ((date: Date) => boolean) | null) => {
    if (!date) return true;
    if (!mapOrFn) return false;
    if (mapOrFn instanceof Map) {
        return !!getMapDate(date, mapOrFn);
    }
    return mapOrFn(getDate(date));
};
