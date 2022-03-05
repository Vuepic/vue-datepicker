/* eslint-disable @typescript-eslint/ban-types */
import { DefineComponent, ComputedOptions, ComponentOptionsMixin, MethodOptions } from 'vue';
import { Locale } from 'date-fns';

type EmitEvents =
    | 'update:modelValue'
    | 'textSubmit'
    | 'closed'
    | 'cleared'
    | 'open'
    | 'focus'
    | 'blur'
    | 'internalModelChange'
    | 'recalculatePosition'
    | 'flow-step'
    | 'updateMonthYear';

interface Vue3DatePicker {
    uid?: string;
    name?: string;
    is24?: boolean;
    enableTimePicker?: boolean;
    range?: boolean;
    multiCalendars?: boolean | number | string;
    multiCalendarsSolo?: boolean;
    modelValue?:
        | Date
        | Date[]
        | string
        | string[]
        | {
              hours: number | string;
              minutes: number | string;
              seconds?: number | string;
          }
        | {
              hours: number | string;
              minutes: number | string;
              seconds?: number | string;
          }[]
        | { month: number | string; year: number | string }
        | { month: number | string; year: number | string }[]
        | null;
    locale?: string;
    position?: 'left' | 'center' | 'right';
    dark?: boolean;
    placeholder?: string;
    weekNumbers?: boolean;
    hoursIncrement?: number | string;
    hoursGridIncrement?: number | string;
    secondsGridIncrement?: number | string;
    minutesGridIncrement?: number | string;
    minutesIncrement?: number | string;
    secondsIncrement?: number | string;
    minDate?: Date | string;
    maxDate?: Date | string;
    minTime?: { hours?: number | string; minutes?: number | string; seconds?: number | string };
    maxTime?: { hours?: number | string; minutes?: number | string; seconds?: number | string };
    weekStart?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | 0 | 1 | 2 | 3 | 4 | 5 | 6;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    format?:
        | string
        | ((
              date:
                  | Date
                  | Date[]
                  | {
                        hours: number | string;
                        minutes: number | string;
                        seconds?: number | string;
                    }
                  | {
                        hours: number | string;
                        minutes: number | string;
                        seconds?: number | string;
                    }[]
                  | {
                        month: number | string;
                        year: number | string;
                    },
          ) => string);
    previewFormat?:
        | string
        | ((
              date:
                  | Date
                  | Date[]
                  | {
                        hours: number | string;
                        minutes: number | string;
                        seconds?: number | string;
                    }
                  | {
                        hours: number | string;
                        minutes: number | string;
                        seconds?: number | string;
                    }[]
                  | {
                        month: number | string;
                        year: number | string;
                    },
          ) => string);
    inputClassName?: string;
    menuClassName?: string;
    calendarClassName?: string;
    calendarCellClassName?: string;
    hideInputIcon?: boolean;
    state?: boolean;
    clearable?: boolean;
    closeOnScroll?: boolean;
    autoApply?: boolean;
    filters?: {
        months?: number[];
        years?: number[];
        times?: { hours?: number[]; minutes?: number[]; seconds?: number[] };
    };
    disableMonthYearSelect?: boolean;
    yearRange?: number[];
    disabledDates?: Date[] | string[] | ((date: Date) => boolean);
    inline?: boolean;
    inlineWithInput?: boolean;
    selectText?: string;
    cancelText?: string;
    weekNumName?: string;
    autoPosition?: boolean;
    monthPicker?: boolean;
    timePicker?: boolean;
    closeOnAutoApply?: boolean;
    textInput?: boolean;
    textInputOptions?: {
        enterSubmit?: boolean;
        tabSubmit?: boolean;
        openMenu?: boolean;
        rangeSeparator?: string;
        format?: null;
    };
    teleport?: string;
    monthNameFormat?: 'long' | 'short';
    startDate?: string | Date;
    startTime?:
        | {
              hours: number | string;
              minutes: number | string;
              seconds?: number | string;
          }
        | {
              hours: number | string;
              minutes: number | string;
              seconds?: number | string;
          }[];
    monthYearComponent?: DefineComponent;
    timePickerComponent?: DefineComponent;
    actionRowComponent?: DefineComponent;
    customProps?: Record<string, unknown>;
    hideOffsetDates?: boolean;
    autoRange?: number | string;
    noToday?: boolean;
    noHoursOverlay?: boolean;
    noMinutesOverlay?: boolean;
    noSecondsOverlay?: boolean;
    altPosition?: boolean | ((el: HTMLElement | undefined) => { top: string; left: string; transform: string });
    disabledWeekDays?: number[] | string[];
    allowedDates?: string[] | Date[];
    showNowButton?: boolean;
    nowButtonLabel?: string;
    partialRange?: boolean;
    monthChangeOnScroll?: boolean | 'inverse';
    markers?: {
        date: Date | string;
        type?: 'dot' | 'line';
        tooltip?: { text: string; color?: string }[];
        color?: string;
    }[];
    transitions?: boolean | { open?: string; close?: string; next?: string; previous?: string };
    modeHeight?: string | number;
    enableSeconds?: boolean;
    escClose?: boolean;
    openMenuOnFocus?: boolean;
    spaceConfirm?: boolean;
    monthChangeOnArrows?: boolean;
    formatLocale?: Locale;
    autocomplete?: string;
    multiDates?: boolean;
    presetRanges?: { label: string; range: Date[] | string[] }[];
    flow?: ('month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds')[];
    preventMinMaxNavigation?: boolean;
    minRange?: number | string;
    maxRange?: number | string;
    fixedStart?: boolean;
    fixedEnd?: boolean;
    utc?: boolean;
    multiDatesLimit?: number | string;
    reverseYears?: boolean;
    keepActionRow?: boolean;
    weekPicker?: boolean;
}

interface PublicMethods extends MethodOptions {
    selectDate: () => void;
    closeMenu: () => void;
    openMenu: () => void;
    clearValue: () => void;
    onScroll: () => void;
}

declare const _default: DefineComponent<
    Vue3DatePicker,
    {},
    {},
    ComputedOptions,
    PublicMethods,
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    EmitEvents[],
    EmitEvents,
    Vue3DatePicker
>;

export default _default;
