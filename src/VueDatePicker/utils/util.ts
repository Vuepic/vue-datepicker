import { unref } from 'vue';

import type { IDefaultSelect, IMarker, MaybeElementRef, ModelValue } from '@/interfaces';
import type { ComponentPublicInstance } from 'vue';

export const getArrayInArray = <T>(list: T[], increment = 3): T[][] => {
    const items = [];
    for (let i = 0; i < list.length; i += increment) {
        items.push([list[i], list[i + 1], list[i + 2]]);
    }

    return items;
};

/**
 * Generate week day names based on locale and in order specified in week start
 */
export const getDayNames = (locale: string, weekStart: number): string[] => {
    // Get list in order from sun ... sat
    const days = [1, 2, 3, 4, 5, 6, 7].map((day) => {
        return new Intl.DateTimeFormat(locale, { weekday: 'short', timeZone: 'UTC' })
            .format(new Date(`2017-01-0${day}T00:00:00+00:00`))
            .slice(0, 2);
    });

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
export const getYears = (yearRange: number[] | string[], reverse?: boolean): IDefaultSelect[] => {
    const years: IDefaultSelect[] = [];
    for (let year = +yearRange[0]; year <= +yearRange[1]; year++) {
        years.push({ value: +year, text: `${year}` });
    }
    return reverse ? years.reverse() : years;
};

/**
 * Generate month names based on locale for selection display
 */
export const getMonths = (locale: string, format: 'long' | 'short'): IDefaultSelect[] => {
    const formatter = new Intl.DateTimeFormat(locale, { month: format, timeZone: 'UTC' });
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
        const mm = month < 10 ? `0${month}` : month;
        return new Date(`2017-${mm}-01T00:00:00+00:00`);
    });
    return months.map((date, i) => ({
        text: formatter.format(date),
        value: i,
    }));
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

export const getDefaultMarker = (marker: IMarker): IMarker => Object.assign({ type: 'dot' }, marker);

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
