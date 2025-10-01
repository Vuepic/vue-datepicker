import type { ComputedRef } from 'vue';
import type { InternalModelValue } from '@/types/generic.ts';
import type { Marker } from '@/types/picker.ts';

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

export interface SidebarSlotProps {
    modelValue: InternalModelValue;
    month?: ComputedRef<(instance: number) => number>;
    year?: ComputedRef<(instance: number) => number>;
    time?: InternalTime;
    updateTime?: (value: number | number[], isHours?: boolean, isSeconds?: boolean) => void;
    updateMonthYear?: (instance: number, val: { month: number; year: number; fromNav?: boolean }) => void;
    selectDate?: (day: { value: Date }, isNext?: boolean) => void;
    presetDate?: (value: Date[] | string[] | Date | string, noTz?: boolean) => void;
    getModelMonthYear?: () => { month: number | null; year: number | null }[];
    selectMonth?: (month: number, instance: number) => void;
    selectYear?: (year: number, instance: number) => void;
    handleYear?: (instance: number, increment?: boolean) => void;
    selectQuarter?: (date: Date, instance: number, disabled: boolean) => void;
    handleYearSelect?: (year: number, instance: number) => void;
}

export type TimeOverlaySlotProps = InternalTime & {
    setHours: (hours: number | number[]) => void;
    setMinutes: (minutes: number | number[]) => void;
    setSeconds: (seconds: number | number[]) => void;
};

export interface MonthYearSlotProps {
    year: number;
    month?: number;
    months?: { value: number; text: string; className?: Record<string, boolean> }[];
    years?: { value: number; text: string; className?: Record<string, boolean> }[];
    updateMonthYear?: (month: number, year: number, fromNav: boolean) => void;
    handleMonthYearChange?: (isNext: boolean, fromNav?: boolean) => void;
    instance?: number;
    selectMonth?: (month: number, instance: number) => void;
    selectYear?: (year: number, instance: number) => void;
    isDisabled?: (next: boolean) => boolean;
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
    internalModelValue: InternalModelValue;
    disabled: boolean;
    selectDate: () => void;
    closePicker: () => void;
}

export interface TimePickerSlotProps {
    time: InternalTime;
    updateTime: (value: number | number[], isHours?: boolean, isSeconds?: boolean) => void;
}

export interface RootSlots {
    'clock-icon'(): any;
    'arrow-left'(): any;
    'arrow-right'(): any;
    'arrow-up'(): any;
    'arrow-down'(): any;
    'calendar-icon'(): any;
    'input-icon'(): any;
    'tp-inline-arrow-up'(): any;
    'tp-inline-arrow-down'(): any;
    'clear-icon'(props: { clear: (ev?: Event) => void }): any;
    trigger(): any;
    'menu-header'(): any;
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
    month(props: { text: string; value: number }): any;
    year(props: { text: string; value: number }): any;
    'action-buttons'(props: { value: InternalModelValue }): any;
    'action-preview'(props: { value: InternalModelValue }): any;
    'calendar-header'(props: { day: string; index: number }): any;
    'marker-tooltip'(props: { day: Date; tooltip: { text?: string; html?: string; color?: string } }): any;
    'action-extra'(props: { selectCurrentDate: () => void }): any;
    'time-picker-overlay'(props: TimeOverlaySlotProps): any;
    'am-pm-button'(props: { toggle: () => void; value: string }): any;
    'left-sidebar'(props: SidebarSlotProps): any;
    'right-sidebar'(props: SidebarSlotProps): any;
    'month-year'(props: MonthYearSlotProps): any;
    'dp-input'(props: DpInputSlotProps): any;
    'time-picker'(props: TimePickerSlotProps): any;
    'action-row'(props: ActionRowSlotProps): any;
    marker(props: { marker: Marker; day: number; date: Date }): any;
    quarter(props: { value: Date; text: string }): any;
    'top-extra'(props: { value: InternalModelValue }): any;
}
