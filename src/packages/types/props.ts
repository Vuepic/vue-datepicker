import type { MaybeValue, Time } from '@packages/types/generic.ts';
import type { MonthModel, TimeModel } from '@/interfaces.ts';
import type { Locale } from 'date-fns';

export interface RangeOpts {
    noDisabledRange: boolean;
    showLastInRange: boolean;
    minMaxRawRange: boolean;
    partialRange: boolean;
    disableTimeRangeValidation: boolean;
    fixedStart: boolean;
    fixedEnd: boolean;
    maxRange?: string | number;
    minRange?: string | number;
    autoRange?: string | number;
}

export interface RangeConfig extends RangeOpts {
    enabled: boolean;
}

export type RangeProp = boolean | Partial<RangeOpts>;

export interface MultiDatesConfig {
    limit: number | string;
    dragSelect: boolean;
}

export interface MultiDatesDefault {
    limit: number | null;
    dragSelect: boolean;
    enabled: boolean;
}

export type MultiDatesProp = boolean | Partial<MultiDatesConfig>;

export type FormatProp = string | ((date: Date | (Date | null)[]) => string) | undefined;

export interface TimeOptions {
    enableSeconds: boolean;
    enableMinutes: boolean;
    is24: boolean;
    startTime?: Time;
}

export type TimeProp = boolean | Partial<TimeOptions>;

export interface WeekNumbersOpts {
    type: 'iso' | 'local' | ((date: Date) => string | number) | undefined | null;
    hideOnOffsetDates?: boolean;
}

export type WeekNumbersProp = MaybeValue<'iso' | 'local' | ((date: Date) => string | number) | WeekNumbersOpts>;

export type ModelValueProp =
    | Date
    | Date[]
    | string
    | string[]
    | TimeModel
    | TimeModel[]
    | MonthModel
    | MonthModel[]
    | number
    | number[]
    | null;

export type SixWeeksProp = 'append' | 'prepend' | 'center' | 'fair' | boolean;

export interface FilterProp {
    months: number[];
    years: number[];
    times: { hours: number[]; minutes: number[]; seconds: number[] };
}

export interface TextInputOptionsProp {
    enterSubmit: boolean;
    tabSubmit: boolean;
    openMenu: string | boolean;
    rangeSeparator: string;
    selectOnFocus: boolean;
    escClose: boolean;
    format?: string | string[] | ((value: string) => MaybeValue<Date>);
    clearable: boolean;
    locale?: Locale;
}
