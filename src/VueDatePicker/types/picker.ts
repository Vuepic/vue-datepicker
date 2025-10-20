import type { DynamicClass, TimeObj } from '@/types/generic.ts';
import type { MaybeRefOrGetter } from 'vue';
import type { UIConfig } from '@/types/configs.ts';

export interface CalendarWeek {
    days: CalendarDay[];
}

export interface CalendarDay {
    text: number | string;
    value: Date;
    current: boolean;
    classData: DynamicClass;
    marker?: Marker | null;
}

export interface Marker {
    date: Date | string;
    type?: 'dot' | 'line';
    tooltip?: { text?: string; slot?: string; color?: string }[];
    color?: string;
    customPosition?: (el: HTMLElement) => Record<string, string>;
}

export interface MonthModel {
    month: number | string;
    year: number | string;
}

export interface TimeModel {
    hours: number | string;
    minutes: number | string;
    seconds?: number | string;
}

export type PresetDate = {
    label: string;
    value: MaybeRefOrGetter<Date[] | string[] | Date | string>;
    style?: Record<string, string>;
    slot?: string;
    noTz?: boolean;
    testId?: string;
};

export type HighlightFn = (
    date: Date | MonthModel | number | { quarter: number; year: number },
    disabled?: boolean,
) => boolean;

export type UIParsed = {
    [K in keyof UIConfig]: K extends 'dayClass' ? UIConfig[K] | undefined : Record<string, boolean> | undefined;
};

export type DisabledTimesFn =
    | ((time: TimeObj) => boolean)
    | ((time: TimeObj[]) => boolean)
    | ((time: (TimeObj | undefined)[]) => boolean);

export interface CalendarMonthYear {
    month: number;
    year: number;
}

export interface InvalidTimesConfig {
    hours: number[];
    minutes?: number[];
    seconds?: (number | undefined)[];
}

export interface TimeInternalModel {
    hours: number | number[];
    minutes: number | number[];
    seconds: number | number[];
}
