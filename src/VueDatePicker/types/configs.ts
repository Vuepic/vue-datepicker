import type { CustomClass, InternalModelValue, PickerSection, TimeKey } from '@/types/generic.ts';
import type { CalendarDay, MonthModel, TimeModel } from '@/types/picker.ts';
import type { ShallowRef } from 'vue';
import type { Placement, Strategy } from '@floating-ui/vue';
import type { NearestMinutes, RoundingMethod } from 'date-fns';

export interface InputAttributesConfig {
    name?: string;
    required: boolean;
    autocomplete: string;
    state?: boolean;
    clearable: boolean;
    alwaysClearable: boolean;
    hideInputIcon: boolean;
    id?: string;
    inputmode: 'search' | 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | undefined;
}

export interface TimeConfig {
    enableTimePicker: boolean;
    ignoreTimeValidation: boolean;
    enableSeconds: boolean;
    enableMinutes: boolean;
    is24: boolean;
    noHoursOverlay: boolean;
    noMinutesOverlay: boolean;
    noSecondsOverlay: boolean;
    hoursGridIncrement: number | string;
    minutesGridIncrement: number | string;
    secondsGridIncrement: number | string;
    timePickerInline: boolean;
    startTime: TimeModel | TimeModel[];
}

export interface Config {
    allowStopPropagation: boolean;
    closeOnScroll: boolean;
    modeHeight: number;
    allowPreventDefault: boolean;
    closeOnClearValue: boolean;
    closeOnAutoApply: boolean;
    noSwipe: boolean;
    keepActionRow: boolean;
    onClickOutside?: (validate: () => boolean, evt: PointerEvent) => void;
    tabOutClosesMenu: boolean;
    arrowLeft?: string;
    keepViewOnOffsetClick?: boolean;
    timeArrowHoldThreshold: number;
    shadowDom?: boolean;
    mobileBreakpoint: number;
    setDateOnMenuClose?: boolean;
    escClose?: boolean;
    spaceConfirm?: boolean;
    monthChangeOnArrows?: boolean;
    monthChangeOnScroll?: boolean | string;
}

export interface UIConfig {
    navBtnNext: CustomClass | undefined;
    navBtnPrev: CustomClass | undefined;
    calendar: CustomClass | undefined;
    calendarCell: CustomClass | undefined;
    menu: CustomClass | undefined;
    input: CustomClass | undefined;
    dayClass: ((date: Date, internalModelValue: InternalModelValue) => string) | undefined;
}

export interface FlowConfig {
    steps: PickerSection[];
    partial: boolean;
}

export interface FilterConfig {
    weekDays: number[];
    months: number[];
    years: number[];
    times: { hours: number[]; minutes: number[]; seconds: number[] };
}

export interface MultiCalendarsConfig {
    static: boolean;
    solo: boolean;
    count: number;
}

export interface TransitionsConfig {
    menuAppearTop: string;
    menuAppearBottom: string;
    open: string;
    close: string;
    next: string;
    previous: string;
    vNext: string;
    vPrevious: string;
}

export interface HighlightConfig {
    dates: Date[];
    years: number[];
    months: MonthModel[];
    quarters: { quarter: number; year: number }[];
    weekdays: number[];
    options: { highlightDisabled: boolean };
}

export interface FormatsConfig {
    month: string;
    year: string;
    weekDay: string;
    quarter: string;
    day: string;
    input?: string | ((date: Date) => string) | ((dates: Date[]) => string);
    preview?: string | ((date: Date) => string) | ((dates: Date[]) => string);
}

export interface TextInputConfig {
    enterSubmit: boolean;
    tabSubmit: boolean;
    openMenu: string | boolean;
    rangeSeparator: string;
    selectOnFocus: boolean;
    escClose: boolean;
    format: string | string[] | ((value: string) => Date | null);
    maskFormat: string;
}

export interface RangeConfig {
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

export interface MultiDatesConfig {
    limit: number | string;
    dragSelect: boolean;
}

export interface WeekNumbersConfig {
    type?: 'iso' | 'local' | ((date: Date) => string | number);
    hideOnOffsetDates?: boolean;
    label?: string;
}

export interface AriaLabelsConfig {
    toggleOverlay: string;
    menu: string;
    input: string;
    openTimePicker: string;
    closeTimePicker: string;
    incrementValue: (type: TimeKey) => string;
    decrementValue: (type: TimeKey) => string;
    openTpOverlay: (type: TimeKey) => string;
    amPmButton: string;
    openYearsOverlay: string;
    openMonthsOverlay: string;
    nextMonth: string;
    prevMonth: string;
    nextYear: string;
    prevYear: string;
    day?: (dayVal: CalendarDay) => string;
    weekDay?: (day: number) => string;
    clearInput: string;
    calendarIcon: string;
    timePicker: string;
    monthPicker?: (isOverlay: boolean) => string;
    yearPicker?: (isOverlay: boolean) => string;
    timeOverlay?: (type: TimeKey) => string;
}

export interface ActionRowConfig {
    showSelect: boolean;
    showCancel: boolean;
    showNow: boolean;
    showPreview: boolean;
    selectBtnLabel: string;
    cancelBtnLabel: string;
    nowBtnLabel: string;
    nowBtnRound?: Partial<{ rounding: RoundingMethod; roundTo: NearestMinutes }>;
}

export interface FloatingConfig {
    offset: number;
    arrow: Readonly<ShallowRef<HTMLDivElement | null>> | boolean;
    strategy?: Strategy;
    placement?: Placement;
}
