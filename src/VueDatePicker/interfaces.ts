import type { ComponentPublicInstance, Ref } from 'vue';
import type { HeaderPicker } from '@/constants';
import DatepickerMenu from '@/components/DatepickerMenu.vue';
import type DatepickerInput from '@/components/DatepickerInput.vue';

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
    selectOnFocus: boolean;
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

export type DisabledDatesProp = Date[] | string[] | IDisableDates;

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
    testId?: string;
};

export type Flow = 'month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds';

export interface AriaLabels {
    toggleOverlay: string;
    menu: string;
    input: string;
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
    day?: (dayVal: ICalendarDay) => string;
    weekDay?: (day: number) => string;
    clearInput: string;
    calendarIcon: string;
    timePicker: string;
    monthPicker?: (isOverlay: boolean) => string;
    yearPicker?: (isOverlay: boolean) => string;
    timeOverlay?: (type: TimeType) => string;
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

export type TimeOverlayCheck = 'noHoursOverlay' | 'noMinutesOverlay' | 'noSecondsOverlay';

export type DateTimeSetter = number | string | null;

export type DateValue = Date | string | null;

export type ModelTypeConverted = string | number | Date;

export type MaybeDate = Date | string | number | null | undefined;

export interface MonthYearOpt {
    month?: number | string;
    year?: number | string;
}

export type DatepickerMenuRef = InstanceType<typeof DatepickerMenu>;

export type DatepickerInputRef = InstanceType<typeof DatepickerInput>;

export interface ActionRowData {
    showSelect: boolean;
    showCancel: boolean;
    showNow: boolean;
    showPreview: true;
}

export type TimeObj = { hours: number; minutes: number; seconds: number };

export type DisabledTimesFn = (time: TimeObj | TimeObj[] | (TimeObj | undefined)[]) => boolean;

export type MenuView = 'month' | 'year' | 'calendar' | 'time';

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
    overlayLabel?: string;
}

export type MenuExposedFn =
    | 'selectCurrentDate'
    | 'presetDate'
    | 'clearHoverDate'
    | 'handleArrow'
    | 'updateMonthYear'
    | 'selectWeekDate'
    | 'changeYear'
    | 'changeMonth';

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
    tabOutClosesMenu: boolean;
    arrowLeft?: string;
    keepViewOnOffsetClick?: boolean;
    timeArrowHoldThreshold: number;
}

export interface Highlight {
    dates: Date[];
    years: number[];
    months: MonthModel[];
    quarters: { quarter: number; year: number }[];
    weekdays: number[];
    options: { highlightDisabled: boolean };
}

export type HighlightFn = (
    date: Date | MonthModel | number | { quarter: number; year: number },
    disabled?: boolean,
) => boolean;

export type HighlightProp = HighlightFn | Partial<Highlight>;

export interface WeekNumbersOpts {
    type: 'iso' | 'local' | ((date: Date) => string | number);
    hideOnOffsetDates?: boolean;
}

export type WeekNumbersProp = 'iso' | 'local' | ((date: Date) => string | number) | WeekNumbersOpts;

export type DPElements = 'action-row' | 'action-prev' | 'action-next' | 'overlay-month' | 'overlay-year';

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

export interface TimeZoneConfig {
    timezone: string | undefined;
    exactMatch: boolean;
    dateInTz?: string;
    emitTimezone?: string;
    convertModel?: boolean;
}

export type TimeZoneProp = string | Partial<TimeZoneConfig>;

export interface PropDates {
    maxDate: Date | null;
    minDate: Date | null;
    disabledDates: Map<string, Date | null> | ((date: Date) => boolean) | null;
    allowedDates: Map<string, Date | null> | null;
    highlight: Map<string, Date | null> | ((date: Date) => boolean) | null;
    markers: Map<string, IMarker> | null;
}

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

export interface TimeInput {
    type: TimeType;
    separator?: boolean;
}

export interface MapPropDatesOpts {
    minDate: MaybeDate;
    maxDate: MaybeDate;
    disabledDates: DisabledDatesProp;
    allowedDates: string[] | Date[];
    highlight: HighlightFn | Highlight;
    markers: IMarker[];
    timezone: TimeZoneConfig | undefined;
    isSpecific?: boolean;
}

export type CustomClass = string | string[];

export interface UIOpts {
    navBtnNext: CustomClass;
    navBtnPrev: CustomClass;
    calendar: CustomClass;
    calendarCell: CustomClass;
    menu: CustomClass;
    input: CustomClass;
}

export type UIParsed = {
    [K in keyof UIOpts]: Record<string, boolean>;
};
