import type { ComputedRef } from 'vue';
import type { InternalModelValue, OverlayGridItem, SelectItem } from '@/types/generic.ts';
import type { Marker, TimeInternalModel } from '@/types/picker.ts';

export interface InternalTime {
    hours: number | number[];
    minutes: number | number[];
    seconds: number | number[];
}

export interface MonthYearOverlaySlotProps {
    month: number;
    year: number;
    items: { text: string; value: number }[];
    updateMonthYear: (month: number, year: number) => void;
    instance: number;
    toggle: () => void;
}

export interface DatePickerSidebarSlotProps {
    modelValue: InternalModelValue;
    month: ComputedRef<(instance: number) => number>;
    year: ComputedRef<(instance: number) => number>;
    time: InternalTime;
    updateTime: (time: TimeInternalModel) => void;
    updateMonthYear: (instance: number, val: { month: number; year: number; fromNav?: boolean }) => void;
    selectDate: (year: number, instance: number) => void;
    presetDate: (value: Date[] | string[] | Date | string, noTz?: boolean) => void;
}

export interface MonthPickerSidebarSlotProps {
    modelValue: InternalModelValue;
    year: ComputedRef<(instance: number) => number>;
    getModelMonthYear?: () => { month: number | null; year: number | null }[];
    selectMonth: (month: number, instance: number) => void;
    selectYear: (year: number, instance: number) => void;
    handleYear: (instance: number, increment?: boolean) => void;
}

export interface QuarterPickerSidebarSlotProps {
    modelValue: InternalModelValue;
    year: ComputedRef<(instance: number) => number>;
    selectQuarter: (date: Date, instance: number, disabled: boolean) => void;
    handleYearSelect: (year: number, instance: number) => void;
    handleYear: (instance: number, increment?: boolean) => void;
}

export interface TimePickerSidebarSlotProps {
    modelValue: InternalModelValue;
    time: InternalTime;
    updateTime: (time: TimeInternalModel) => void;
}

export interface YearPickerSidebarSlotProps {
    modelValue: InternalModelValue;
    selectYear: (year: number) => void;
}

export type TimeOverlaySlotProps = InternalTime & {
    setHours: (hours: number | number[]) => void;
    setMinutes: (minutes: number | number[]) => void;
    setSeconds: (seconds: number | number[]) => void;
};

export interface DatePickerMonthYearSlotProps {
    month: number;
    year: number;
    months: SelectItem[];
    years: SelectItem[];
    updateMonthYear: (month: number, year: number, fromNav: boolean) => void;
    handleMonthYearChange: (isNext: boolean, fromNav?: boolean) => void;
    instance: number;
    isDisabled: (next: boolean) => boolean;
}

export interface MonthPickerMonthYearSlotProps {
    year: (instance: number) => number;
    months: OverlayGridItem[][];
    years: OverlayGridItem[][];
    instance: number;
    selectMonth: (month: number, instance: number) => void;
    selectYear: (year: number, instance: number) => void;
}

export interface YearPickerMonthYearSlotProps {
    years: OverlayGridItem[][];
    selectYear: (year: number, instance: number) => void;
}

export interface DpInputSlotProps {
    value: string;
    isMenuOpen: boolean;
    onInput: (ev: string | Event) => void;
    onEnter: (ev: KeyboardEvent) => void;
    onTab: (ev: KeyboardEvent) => void;
    onClear: (ev?: Event | undefined) => void;
    onBlur: () => void;
    onFocus: () => void;
    onKeypress: (ev: KeyboardEvent) => void;
    onPaste: () => void;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
}

export interface ActionRowSlotProps {
    modelValue: InternalModelValue;
    disabled: boolean;
    selectDate: () => void;
    closePicker: () => void;
}

export interface TimePickerSlotProps {
    time: InternalTime;
    updateTime: (time: TimeInternalModel) => void;
}

export interface RootSlots {
    'clock-icon'(props: any): any;
    'arrow-left'(props: any): any;
    'arrow-right'(props: any): any;
    'arrow-up'(props: any): any;
    'arrow-down'(props: any): any;
    'calendar-icon'(props: any): any;
    'input-icon'(props: any): any;
    'tp-inline-arrow-up'(props: any): any;
    'tp-inline-arrow-down'(props: any): any;
    'clear-icon'(props: { clear: (ev?: Event) => void }): any;
    'arrow'(props: any): any;
    trigger(props: any): any;
    'menu-header'(props: {}): any;
    day(props: { date: Date; day: number }): any;
    'month-overlay-value'(props: { text: string; value: number }): any;
    'year-overlay-value'(props: { text: string; value: number }): any;
    'year-overlay'(props: MonthYearOverlaySlotProps): any;
    'month-overlay'(props: MonthYearOverlaySlotProps): any;
    'month-overlay-header'(props: { toggle: () => void }): any;
    'year-overlay-header'(props: { toggle: () => void }): any;
    'hours-overlay-header'(props: { toggle: () => void }): any;
    'minutes-overlay-header'(props: { toggle: () => void }): any;
    'seconds-overlay-header'(props: { toggle: () => void }): any;
    'hours-overlay-value'(props: { text: string; value: number }): any;
    'minutes-overlay-value'(props: { text: string; value: number }): any;
    'seconds-overlay-value'(props: { text: string; value: number }): any;
    hours(props: { text: string; value: number }): any;
    minutes(props: { text: string; value: number }): any;
    seconds(props: { text: string; value: number }): any;
    month(props: { text: string; value: number }): any;
    year(props: { text: string; value: number }): any;
    'action-buttons'(props: { value: InternalModelValue }): any;
    'action-preview'(props: { value: InternalModelValue; formatValue: string }): any;
    'calendar-header'(props: { day: string; index: number }): any;
    'marker-tooltip'(props: { day: Date; tooltip: { text?: string; html?: string; color?: string } }): any;
    'action-extra'(props: { selectCurrentDate: () => void }): any;
    'time-picker-overlay'(props: TimeOverlaySlotProps): any;
    'am-pm-button'(props: { toggle: () => void; value: string }): any;
    'left-sidebar'(props: DatePickerSidebarSlotProps): any;
    'left-sidebar'(props: MonthPickerSidebarSlotProps): any;
    'left-sidebar'(props: QuarterPickerSidebarSlotProps): any;
    'left-sidebar'(props: TimePickerSidebarSlotProps): any;
    'left-sidebar'(props: YearPickerSidebarSlotProps): any;
    'right-sidebar'(props: DatePickerSidebarSlotProps): any;
    'right-sidebar'(props: MonthPickerSidebarSlotProps): any;
    'right-sidebar'(props: QuarterPickerSidebarSlotProps): any;
    'right-sidebar'(props: TimePickerSidebarSlotProps): any;
    'right-sidebar'(props: YearPickerSidebarSlotProps): any;
    'month-year'(props: DatePickerMonthYearSlotProps): any;
    'month-year'(props: MonthPickerMonthYearSlotProps): any;
    'month-year'(props: YearPickerMonthYearSlotProps): any;
    'dp-input'(props: DpInputSlotProps): any;
    'time-picker'(props: TimePickerSlotProps): any;
    'action-row'(props: ActionRowSlotProps): any;
    marker(props: { marker: Marker; day: number; date: Date }): any;
    quarter(props: { value: Date; text: string }): any;
    'top-extra'(props: { value: InternalModelValue }): any;
}
