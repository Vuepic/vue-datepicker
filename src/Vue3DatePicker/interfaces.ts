export type DynamicClass = Record<string, boolean>;

export interface IDefaultSelect {
    value: string | number;
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

export interface IDateFilter {
    months: number[];
    years: number[];
    times: { hours: number[]; minutes: number[] };
}

export interface ITimeRange {
    hours: number | string;
    minutes: number | string;
}

export interface RDatepickerProps {
    uid: string;
    is24: boolean;
    enableTimePicker: boolean;
    range: boolean;
    modelValue: Date | string;
    locale: string;
    position: OpenPosition;
    dark: boolean;
    placeholder: string;
    weekNumbers: boolean;
    hoursIncrement: number | string;
    hoursGridIncrement: number | string;
    minutesGridIncrement: number | string;
    minutesIncrement: number | string;
    minDate: Date | string;
    maxDate: Date | string;
    minTime: ITimeRange;
    maxTime: ITimeRange;
    weekStart: string | number;
    disabled: boolean;
    readonly: boolean;
    format: FormatOptions | ((date: Date | Date[]) => string);
    inputClassName: string;
    menuClassName: string;
    calendarClassName: string;
    calendarCellClassName: string;
    hideInputIcon: boolean;
    state: boolean;
    clearable: boolean;
    closeOnScroll: boolean;
    autoApply: boolean;
    filters: IDateFilter;
    disableMonthYearSelect: boolean;
    yearRange: number[];
    disabledDates: Date[] | string[];
    inline: boolean;
    selectText: string;
    cancelText: string;
    weekNumName: string;
}

export interface DatepickerInputProps {
    internalValue: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    inputClassName: string;
    hideInputIcon: boolean;
    state: boolean;
    clearable: boolean;
    inline: boolean;
}

export interface IMonth {
    text: string;
    value: number;
}

export interface IYear {
    text: string;
    value: number;
}

export interface DatepickerMenuProps {
    uid: string;
    weekNumName: string;
    weekNumbers: boolean;
    weekStart: number | string;
    disableMonthYearSelect: boolean;
    menuClassName: string;
    calendarClassName: string;
    is24: boolean;
    yearRange: number[];
    singleModelValue: string | Date;
    rangeModelValue: [Date?, Date?];
    range: boolean;
    calendarCellClassName: string;
    enableTimePicker: boolean;
    hoursIncrement: number | string;
    minutesIncrement: number | string;
    hoursGridIncrement: number | string;
    minutesGridIncrement: number | string;
    autoApply: boolean;
    selectText: string;
    cancelText: string;
    previewFormat: FormatOptions | ((date: Date | Date[]) => string);
    locale: string;
    minDate: Date | string;
    maxDate: Date | string;
    disabledDates: Date[] | string[];
    filters: IDateFilter;
    minTime: ITimeRange;
    maxTime: ITimeRange;
    inline: boolean;
}

export interface CalendarProps {
    weekStart: number | string;
    weekNumbers: boolean;
    weekNumName: string;
    months: IMonth[];
    disableMonthYearSelect: boolean;
    calendarClassName: string;
    is24: boolean;
    yearRange: number[];
    startDate: Date;
    calendarCellClassName: string;
    enableTimePicker: boolean;
    hoursIncrement: number | string;
    minutesIncrement: number | string;
    hoursGridIncrement: number | string;
    minutesGridIncrement: number | string;
    range: boolean;
    rangeModelValue: [Date?, Date?];
    singleModelValue: Date;
    autoApply: boolean;
    selectText: string;
    cancelText: string;
    previewFormat: FormatOptions | ((date: Date | Date[]) => string);
    locale: string;
    minDate: Date | string;
    maxDate: Date | string;
    disabledDates: Date[] | string[];
    filters: IDateFilter;
    minTime: ITimeRange;
    maxTime: ITimeRange;
    inline: boolean;
}

export interface MonthYearPickerProps {
    months: IMonth[];
    years: IYear[];
    year: number;
    month: number;
    filters: IDateFilter;
}

export interface ICalendarDay {
    text: number;
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

export type FormatOptions = Intl.DateTimeFormatOptions;

// export interface TimePickerProps {
//     hoursIncrement: number | string;
//     minutesIncrement: number | string;
//     is24: boolean;
//     hoursGridIncrement: number | string;
//     minutesGridIncrement: number | string;
//     hoursSingle: number;
//     minutesSingle: number;
//     range: boolean;
//     hoursRange: IHoursRange;
//     minutesRange: IMinutesRange;
//     filters: IDateFilter;
//     minTime: ITimeRange;
//     maxTime: ITimeRange;
// }

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

export interface SelectionGridProps {
    modelValue: string | number;
    items: IDefaultSelect[][];
    id: string;
    disabledValues: number[];
    minValue: number | string;
    maxValue: number | string;
}

export interface ActionRowProps {
    selectText: string;
    cancelText: string;
    range: boolean;
    singleModelValue: Date;
    rangeModelValue: Date[];
    previewFormat: FormatOptions | ((date: Date | Date[]) => string);
    locale: string;
    is24: boolean;
    enableTimePicker: boolean;
    inline: boolean;
}

export interface TimeInputProps {
    hoursIncrement: number | string;
    minutesIncrement: number | string;
    hours: number;
    minutes: number;
    hoursGridIncrement: string | number;
    minutesGridIncrement: string | number;
    is24: boolean;
    filters: IDateFilter;
    minTime: ITimeRange;
    maxTime: ITimeRange;
}

export type IHoursRange = [number, number];
export type IMinutesRange = [number, number];

export interface IHoursOptions {
    hourCycle?: string;
    hour12?: boolean;
}
