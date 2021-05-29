export type DynamicClass = Record<string, boolean>;

export interface IDefaultSelect {
    value: string | number;
    text: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VueEmit = (event: any, ...args: any[]) => void;

export interface ILanguage {
    days: string[];
    months: string[];
    weekNumber: string;
}

export enum OpenPosition {
    center = 'center',
    left = 'left',
    right = 'right',
}

export interface IDateFilter {
    months: number[];
    years: number[];
    times: number[];
}

export interface RDatepickerProps {
    id: string;
    is24: boolean;
    enableTimePicker: boolean;
    range: boolean;
    modelValue: Date | string;
    position: OpenPosition;
    placeholder: string;
    weekNumbers: boolean;
    hoursIncrement: number | string;
    hoursGridIncrement: number | string;
    minutesGridIncrement: number | string;
    minutesIncrement: number | string;
    minDate: Date | string;
    maxDate: Date | string;
    timeRange: number[];
    weekStart: string | number;
    disabled: boolean;
    readonly: boolean;
    format: FormatOptions | ((date: Date | Date[]) => string);
    language: ILanguage;
    inputClassName: string;
    menuClassName: string;
    calendarClassName: string;
    calendarCellClassName: string;
    dayClass: { day: Date; className: string };
    hideInputIcon: boolean;
    error: boolean;
    clearable: boolean;
    calendarBorder: boolean;
    closeOnScroll: boolean;
    autoApply: boolean;
    filters: IDateFilter;
    disableMonthYearSelect: boolean;
    yearRange: number[];
    disabledDaysOfTheWeek: number[];
    inline: boolean;
}

export interface DatepickerInputProps {
    internalValue: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    // size: ESizes;
    inputClassName: string;
    hideInputIcon: boolean;
    error: boolean;
    clearable: boolean;
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
    language: ILanguage;
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
}

export interface CalendarProps {
    weekStart: number | string;
    weekNumbers: boolean;
    language: ILanguage;
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
}

export interface MonthYearPickerProps {
    months: IMonth[];
    years: IYear[];
    year: number;
    month: number;
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

export interface FormatOptions {
    locale: string;
    options: Intl.DateTimeFormatOptions;
}

export interface TimeInputProps {
    hoursIncrement: number | string;
    minutesIncrement: number | string;
    is24: boolean;
    hoursGridIncrement: number | string;
    minutesGridIncrement: number | string;
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

export interface SelectionGridProps {
    modelValue: string | number;
    items: IDefaultSelect[][];
    id: string;
}
