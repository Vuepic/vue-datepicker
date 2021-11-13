import { ComponentPublicInstance, Ref } from 'vue';

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

export type IFormat = string | ((date: Date | Date[] | ITimeValue | ITimeValue[] | IMonthValue) => string);

export type InternalModuleValue = Date | Date[] | null;

export interface IDateFilter {
    months: number[];
    years: number[];
    times: { hours: number[]; minutes: number[] };
}

export interface ICalendarDay {
    text: number | string;
    value: Date;
    current: boolean;
    classData?: DynamicClass;
}

export interface ICalendarDate {
    days: ICalendarDay[];
}

export interface IMonthYearHook {
    onNext(): void;
    onPrev(): void;
}

export interface IHoursMinutes {
    hours: IDefaultSelect[];
    minutes: IDefaultSelect[];
}

export interface TimeGridValues {
    value: '';
    text: '';
}

export interface TimeGridProps {
    values: TimeGridValues;
}

export interface ITextInputOptions {
    enterSubmit: boolean;
    tabSubmit: boolean;
    openMenu: boolean;
    openMenuOnFocus: boolean;
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
}

export type ModelValue = Date | Date[] | string | string[] | ITimeValue | ITimeValue[] | IMonthValue | null;

export type WeekStartNum = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type WeekStartStr = '0' | '1' | '2' | '3' | '4' | '5' | '6';

export type UseCalendar = {
    range: boolean;
    startDate: Date | string;
    startTime: ITimeValue | ITimeValue[] | null;
    internalModelValue: InternalModuleValue;
    maxDate: Date | string;
    minDate: Date | string;
    filters: IDateFilter;
    yearRange: number[];
    disabledDates: string[] | Date[];
    autoApply: boolean;
    monthPicker: boolean;
    timePicker: boolean;
    hideOffsetDates: boolean;
    twoCalendars: boolean;
    twoCalendarsSolo: boolean;
    autoRange: number | string;
    disabledWeekDays: number[] | string[];
    allowedDates: Date[] | string[];
    monthChangeOnScroll: boolean;
} & { [key: string]: any };

export interface UseMonthYearPick {
    months: IDefaultSelect[];
    years: IDefaultSelect[];
    filters: IDateFilter;
    year: number;
    month: number;
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
