/* eslint-disable @typescript-eslint/ban-types */
import { DefineComponent, ComputedOptions, ComponentOptionsMixin, MethodOptions } from 'vue';

type EmitEvents = 'update:modelValue' | 'textSubmit' | 'closed' | 'cleared' | 'open';

interface Vue3DatePicker {
    is24?: boolean;
    enableTimePicker?: boolean;
    range?: boolean;
    twoCalendars?: boolean;
    twoCalendarsSolo?: boolean;
    modelValue?:
        | Date
        | Date[]
        | string
        | string[]
        | {
              hours: number | string;
              minutes: number | string;
          }
        | {
              hours: number | string;
              minutes: number | string;
          }[]
        | { month: number | string; year: number | string }
        | null;
    locale?: string;
    position?: 'left' | 'center' | 'right';
    dark?: boolean;
    placeholder?: string;
    weekNumbers?: boolean;
    hoursIncrement?: number | string;
    hoursGridIncrement?: number | string;
    minutesGridIncrement?: number | string;
    minutesIncrement?: number | string;
    minDate?: Date | string;
    maxDate?: Date | string;
    minTime?: { hours?: number | string; minutes?: number | string };
    maxTime?: { hours?: number | string; minutes?: number | string };
    weekStart?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | 0 | 1 | 2 | 3 | 4 | 5 | 6;
    disabled?: boolean;
    readonly?: boolean;
    format?:
        | string
        | ((
              date:
                  | Date
                  | Date[]
                  | {
                        hours: number | string;
                        minutes: number | string;
                    }
                  | {
                        hours: number | string;
                        minutes: number | string;
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
                    }
                  | {
                        hours: number | string;
                        minutes: number | string;
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
        times?: { hours?: number[]; minutes?: number[] };
    };
    disableMonthYearSelect?: boolean;
    yearRange?: number[];
    disabledDates?: Date[] | string[];
    inline?: boolean;
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
        openMenuOnFocus?: boolean;
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
          }
        | {
              hours: number | string;
              minutes: number | string;
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
    altPosition?: boolean;
    disabledWeekDays?: number[] | string[];
    allowedDates?: string[] | Date[];
    showNowButton?: boolean;
    nowButtonLabel?: string;
    partialRange?: boolean;
    monthChangeOnScroll?: boolean;
}

interface PublicMethods extends MethodOptions {
    selectDate: () => void;
    closeMenu: () => void;
    openMenu: () => void;
    clearValue: () => void;
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
