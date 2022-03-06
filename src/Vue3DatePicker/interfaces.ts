import { ComponentPublicInstance, ExtractPropTypes, Ref } from 'vue';
import { CommonProps } from './utils/props';

export type DynamicClass = Record<string, boolean>;

export interface IDefaultSelect<T = number> {
    value: T;
    text: string;
    className?: DynamicClass;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VueEmit = (event: any, ...args: any[]) => void;

export enum OpenPosition {
    center = 'center',
    left = 'left',
    right = 'right',
}

export type IFormat =
    | string
    | ((date: Date | Date[] | ITimeValue | ITimeValue[] | IMonthValue | IMonthValue[]) => string);

export type InternalModuleValue = Date | Date[] | null;

export interface IDateFilter {
    months: number[];
    years: number[];
    times: { hours: number[]; minutes: number[]; seconds: number[] };
}

export interface ICalendarDay {
    text: number | string;
    value: Date;
    current: boolean;
    classData?: DynamicClass;
    marker?: IMarker | null;
}

export interface ICalendarDate {
    days: ICalendarDay[];
}

export interface ITextInputOptions {
    enterSubmit: boolean;
    tabSubmit: boolean;
    openMenu: boolean;
    rangeSeparator: string;
    format?: null;
}

export interface IMonthValue {
    month: number | string;
    year: number | string;
}

export interface ITimeValue {
    hours: number | string;
    minutes: number | string;
    seconds: number | string;
}

export type ModelValue =
    | Date
    | Date[]
    | string
    | string[]
    | ITimeValue
    | ITimeValue[]
    | IMonthValue
    | IMonthValue[]
    | null;

export type WeekStartNum = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type WeekStartStr = '0' | '1' | '2' | '3' | '4' | '5' | '6';

export interface MenuPropsWithExtend extends ExtractPropTypes<typeof CommonProps> {
    internalModelValue: InternalModuleValue;
    multiCalendars: number;
    filters: IDateFilter;
    openOnTop: boolean;
}

export type MenuProps = MenuPropsWithExtend & { [key: string]: unknown };

export interface UseMonthYearPick {
    months: IDefaultSelect[];
    years: IDefaultSelect[];
    filters: IDateFilter;
    year: number;
    month: number;
    preventMinMaxNavigation: boolean;
    maxDate: Date | string;
    minDate: Date | string;
}

export type MaybeRef<T> = T | Ref<T>;
export type Fn = () => void;

export interface ConfigurableWindow {
    window?: Window;
}

export type MaybeElementRef = MaybeRef<HTMLElement | SVGElement | ComponentPublicInstance | undefined | null>;
export type OnClickOutsideEvents = Pick<
    WindowEventMap,
    'click' | 'mousedown' | 'mouseup' | 'touchstart' | 'touchend' | 'pointerdown' | 'pointerup'
>;

export interface OnClickOutsideOptions<E extends keyof OnClickOutsideEvents> extends ConfigurableWindow {
    event?: E;
}

export interface IMarker {
    date: Date | string;
    type?: 'dot' | 'line';
    tooltip?: { text: string; color?: string }[];
    color?: string;
}

export interface ITransition {
    open: string;
    close: string;
    next: string;
    previous: string;
}
export type IDisableDates = (date: Date) => boolean;
export type ITimeType = 'hours' | 'minutes' | 'seconds';

export type AltPosition = boolean | ((el: HTMLElement | undefined) => { top: string; left: string; transform: string });

export type PresetRange = { label: string; range: Date[] | string[] };

export type Flow = ('month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds')[];
export type MenuChildCmp = 'timePicker' | 'monthYearInput' | 'calendar';

export interface MonthYearInputRef {
    toggleMonthPicker: (auto: boolean) => void;
    toggleYearPicker: (auto: boolean) => void;
}

export interface TimePickerRef {
    toggleTimePicker: (show: boolean, flow: boolean, child?: 'hours' | 'minutes' | 'seconds') => void;
}

export interface TimeInputRef {
    openChildCmp: (child: string) => void;
}

export interface ICalendarData {
    month: number;
    year: number;
}

export type ComponentRef = Ref<HTMLElement | null>;
