import { DefineComponent } from 'vue';

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

export interface IDatepickerProps {
    uid: string;
    is24: boolean;
    enableTimePicker: boolean;
    range: boolean;
    modelValue: ModelValue;
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
    minTime: ITimeValue;
    maxTime: ITimeValue;
    weekStart: string | number;
    disabled: boolean;
    readonly: boolean;
    format: IFormat;
    previewFormat: IFormat;
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
    autoPosition: boolean;
    monthPicker: boolean;
    timePicker: boolean;
    closeOnAutoApply: boolean;
    textInput: boolean;
    textInputOptions: ITextInputOptions;
    teleport: string;
    monthNameFormat: 'long' | 'short';
    startDate: string | Date;
    startTime: ITimeValue | ITimeValue[];
    monthYearComponent: DefineComponent;
    timePickerComponent: DefineComponent;
    customProps: Record<string, unknown>;
}

export interface DatepickerInputProps {
    inputValue?: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    inputClassName: string;
    hideInputIcon: boolean;
    state: boolean;
    clearable: boolean;
    inline: boolean;
    range: boolean;
    textInput: boolean;
    maskProps: IMaskProps;
    textInputOptions: ITextInputOptions;
    isMenuOpen: boolean;
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
    internalModelValue?: InternalModuleValue;
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
    previewFormat: IFormat;
    locale: string;
    minDate: Date | string;
    maxDate: Date | string;
    disabledDates: Date[] | string[];
    filters: IDateFilter;
    minTime: ITimeValue;
    maxTime: ITimeValue;
    inline: boolean;
    openOnTop: boolean;
    monthPicker: boolean;
    timePicker: boolean;
    monthNameFormat: 'long' | 'short';
    startDate: string | Date;
    startTime: ITimeValue | ITimeValue[];
    monthYearComponent: DefineComponent;
    timePickerComponent: DefineComponent;
    customProps: Record<string, unknown>;
}

export interface CalendarProps {
    weekStart: number | string;
    weekNumbers: boolean;
    weekNumName: string;
    disableMonthYearSelect: boolean;
    calendarClassName: string;
    is24: boolean;
    yearRange: number[];
    calendarCellClassName: string;
    enableTimePicker: boolean;
    hoursIncrement: number | string;
    minutesIncrement: number | string;
    hoursGridIncrement: number | string;
    minutesGridIncrement: number | string;
    range: boolean;
    internalModelValue: InternalModuleValue;
    autoApply: boolean;
    selectText: string;
    cancelText: string;
    previewFormat: IFormat;
    locale: string;
    minDate: Date | string;
    maxDate: Date | string;
    disabledDates: Date[] | string[];
    filters: IDateFilter;
    minTime: ITimeValue;
    maxTime: ITimeValue;
    inline: boolean;
    monthPicker: boolean;
    timePicker: boolean;
    monthNameFormat: 'long' | 'short';
    startDate: string | Date;
    startTime: ITimeValue | ITimeValue[];
    monthYearComponent: DefineComponent;
    timePickerComponent: DefineComponent;
    customProps: Record<string, unknown>;
}

export interface MonthYearPickerProps {
    months: IDefaultSelect[];
    years: IDefaultSelect[];
    year: number;
    month: number;
    filters: IDateFilter;
    monthPicker: boolean;
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
    uid: string;
    modelValue: string | number;
    items: IDefaultSelect[][];
    gridId: string;
    disabledValues: number[];
    minValue: number | string;
    maxValue: number | string;
}

export interface ActionRowProps {
    selectText: string;
    cancelText: string;
    internalModelValue: InternalModuleValue;
    range: boolean;
    previewFormat: IFormat;
    inline: boolean;
    monthPicker: boolean;
    timePicker: boolean;
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
    minTime: ITimeValue;
    maxTime: ITimeValue;
}

export interface IMaskProps {
    pattern: string;
    mask: string;
    format: string;
}

export interface ITextInputOptions {
    placeholder?: string;
    enterSubmit: boolean;
    openMenu: boolean;
    freeInput: boolean;
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
