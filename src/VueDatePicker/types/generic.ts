import type { MonthModel, TimeModel } from '@/types/picker.ts';

export type DynamicClass = Record<string, boolean | undefined>;

export type PickerSection = 'month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds';

export type SixWeekMode = 'append' | 'prepend' | 'center' | 'fair';

export type TimeKey = 'hours' | 'minutes' | 'seconds';

export type DPElements = 'action-row' | 'action-prev' | 'action-next' | 'overlay-month' | 'overlay-year';

export type InternalModelValue = Date | Date[] | null;

export type DateValue = Date | string | number;

export type MaybeDate = DateValue | null | undefined;

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
    | null
    | undefined;

export type TimeObj = { hours: number; minutes: number; seconds: number };

export type CustomClass = string | string[];

export interface SelectItem<T = number> {
    value: T;
    text: string;
}

export interface OverlayGridItem {
    value: number;
    text: string;
    active: boolean;
    disabled: boolean;
    className: DynamicClass;
}

export type Numeric = number | string | null;

export type ModelTypeConverted = string | number | Date;

export type InputParsedDate = Date | Array<Date | null> | null;

export type MenuView = 'month' | 'year' | 'calendar' | 'time';

export type MenuExposedFn =
    | 'selectCurrentDate'
    | 'presetDate'
    | 'clearHoverDate'
    | 'handleArrow'
    | 'updateMonthYear'
    | 'selectWeekDate'
    | 'changeYear'
    | 'changeMonth';

export interface TimeInputSection {
    type: TimeKey;
    separator?: boolean;
}

export type TimeOverlayCheck = 'noHoursOverlay' | 'noMinutesOverlay' | 'noSecondsOverlay';

export type Hour12 = 'AM' | 'PM';
