import type { ComponentPublicInstance, Ref } from 'vue';
import type { PickerBasePropsType } from '@/props';
import type { HeaderPicker } from '@/constants';

export type DynamicClass = Record<string, boolean | undefined>;

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

export type IFormat = string | ((date: Date | Date[]) => string);

export type InternalModuleValue = Date | Date[] | null;

export interface DateFilter {
    months: number[];
    years: number[];
    times: { hours: number[]; minutes: number[]; seconds: number[] };
}

export interface ICalendarDay {
    text: number | string;
    value: Date;
    current: boolean;
    classData: DynamicClass;
    marker?: IMarker | null;
}

export interface ICalendarDate {
    days: ICalendarDay[];
}

export interface TextInputOptions {
    enterSubmit: boolean;
    tabSubmit: boolean;
    openMenu: boolean;
    rangeSeparator: string;
    format?: string | string[] | ((value: string) => Date | null);
}

export interface MonthModel {
    month: number | string;
    year: number | string;
}

export interface TimeModel {
    hours: number | string;
    minutes: number | string;
    seconds: number | string;
}

export type ModelValue =
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

export type WeekStartNum = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type WeekStartStr = '0' | '1' | '2' | '3' | '4' | '5' | '6';

export type SixWeekMode = 'append' | 'prepend' | 'center' | 'fair';

export type MaybeRef<T> = T | Ref<T>;
export type Fn = () => void;

export interface ConfigurableWindow {
    window?: Window;
}

export type MaybeElementRef = MaybeRef<HTMLElement | SVGElement | ComponentPublicInstance | undefined | null | Element>;
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
    tooltip?: { text?: string; slot?: string; color?: string }[];
    color?: string;
}

export interface Transition {
    menuAppearTop: string;
    menuAppearBottom: string;
    open: string;
    close: string;
    next: string;
    previous: string;
    vNext: string;
    vPrevious: string;
}

export type IDisableDates = (date: Date) => boolean;
export type TimeType = keyof Time;

export type CustomAltPosition = (el: HTMLElement | null) => {
    top: number | string;
    left: number | string;
    transform?: string;
};

export type PresetDate = {
    label: string;
    value: Date[] | string[] | Date | string;
    style?: Record<string, string>;
    slot?: string;
    noTz?: boolean;
};

export type Flow = 'month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds';

export interface AriaLabels {
    toggleOverlay: string;
    menu: string;
    input: string;
    calendarWrap: string;
    calendarDays: string;
    openTimePicker: string;
    closeTimePicker: string;
    incrementValue: (type: TimeType) => string;
    decrementValue: (type: TimeType) => string;
    openTpOverlay: (type: TimeType) => string;
    amPmButton: string;
    openYearsOverlay: string;
    openMonthsOverlay: string;
    nextMonth: string;
    prevMonth: string;
    nextYear: string;
    prevYear: string;
    day: (dayVal: ICalendarDay) => string;
}

export interface Time {
    hours: number | number[];
    minutes: number | number[];
    seconds: number | number[];
}

export interface TimeInputRef extends Element {
    openChildCmp: (child: string) => void;
}

export interface ICalendarData {
    month: number;
    year: number;
}

export type ComponentRef = Ref<ComponentPublicInstance | HTMLElement | null>;

export type TimeOverlayCheck = 'noHoursOverlay' | 'noMinutesOverlay' | 'noSecondsOverlay';

export type ModelFormatType = 'timestamp' | 'format';

export type ModelType = ModelFormatType | string;

export type DateTimeSetter = number | string | null;

export type DateValue = Date | string | null;

export type ModelTypeConverted = string | number | Date;

export interface MonthYearOpt {
    month?: number | string;
    year?: number | string;
}

export type DatepickerMenuRef = ComponentPublicInstance<{
    updateMonthYear: (ins: number, val: { month: number | null; year: number | null }) => void;
    switchView: (view: MenuView, instance?: number) => void;
}>;

export type DatepickerInputRef = ComponentPublicInstance<{
    setParsedDate: (date: Date | Date[]) => void;
    focusInput: () => void;
}>;

export interface ActionRowData {
    showSelect: boolean;
    showCancel: boolean;
    showNow: boolean;
    showPreview: true;
}

export type TimeObj = { hours: number; minutes: number; seconds: number };

export type DisabledTimesFn = (time: TimeObj | TimeObj[] | (TimeObj | undefined)[]) => boolean;

export type MenuView = 'month' | 'year' | 'calendar' | 'time';

export type ArrMapValue = Map<string, boolean> | null;
export interface ArrMapValues {
    disabledDates: ArrMapValue;
    allowedDates: ArrMapValue;
    highlightedDates: ArrMapValue;
}

export interface OverlayGridItem {
    value: number;
    text: string;
    active: boolean;
    disabled: boolean;
    className: DynamicClass;
}

export type PossibleDate = Date | string | number | null;

export interface HeaderSelectionBtn {
    type: HeaderPicker;
    index: 1 | 2;
    toggle: () => void;
    modelValue: number;
    updateModelValue: (val: number) => void;
    text: string | number;
    showSelectionGrid: boolean;
    items: OverlayGridItem[][];
    ariaLabel: string;
}

export type TimePickerProps = Partial<PickerBasePropsType> & {
    enableSeconds: boolean;
    disableTimeRangeValidation: boolean;
    range: boolean;
};

export type MenuExposedFn = 'selectCurrentDate' | 'presetDate' | 'clearHoverDate' | 'handleArrow' | 'updateMonthYear';

export type OptionEnabled = boolean | number | string;

export interface MultiCalendarsOptions {
    static: boolean;
    solo: boolean;
    count: number;
}

export type MultiCalendarsProp = OptionEnabled | Partial<MultiCalendarsOptions>;

export interface DisabledTime {
    hours: number | string;
    minutes: number | string;
    seconds?: number | string;
}

export type DisabledTimeArrProp = DisabledTimesFn | DisabledTime[] | DisabledTime[][];

export interface TimeValuesInv {
    hours: number[];
    minutes?: number[];
    seconds?: (number | undefined)[];
}

export type TextInputProp = boolean | Partial<TextInputOptions>;

export interface InlineOptions {
    enabled: boolean;
    input: boolean;
}

export type InlineProp = boolean | { input?: boolean };

export type DisabledTimesArrProp = (ind: number, hours?: number) => TimeValuesInv;

export interface Config {
    allowStopPropagation: boolean;
    closeOnScroll: boolean;
    modeHeight: number;
    allowPreventDefault: boolean;
    closeOnClearValue: boolean;
    closeOnAutoApply: boolean;
    noSwipe: boolean;
    keepActionRow: boolean;
    onClickOutside?: (validate: () => boolean) => void;
}
