/* eslint-disable @typescript-eslint/ban-types */
import type {
    ComponentOptionsMixin,
    ComponentPropsOptions,
    ComponentPublicInstance,
    ComputedOptions,
    DefineComponent,
    MethodOptions,
} from 'vue';
import type { Locale } from 'date-fns';

export type ModelValue =
    | Date
    | Date[]
    | string
    | string[]
    | number
    | number[]
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

export type EmitEvents =
    | 'update:model-value'
    | 'text-submit'
    | 'closed'
    | 'cleared'
    | 'open'
    | 'focus'
    | 'blur'
    | 'internal-model-change'
    | 'recalculate-position'
    | 'flow-step'
    | 'update-month-year'
    | 'invalid-select'
    | 'tooltip-open'
    | 'tooltip-close'
    | 'invalid-fixed-range'
    | 'time-picker-open'
    | 'time-picker-close'
    | 'am-pm-change';

export interface VueDatePickerProps {
    uid?: string;
    name?: string;
    is24?: boolean;
    enableTimePicker?: boolean;
    range?: boolean;
    multiCalendars?: boolean | number | string;
    multiCalendarsSolo?: boolean;
    multiStatic?: boolean;
    modelValue?: ModelValue;
    locale?: string;
    position?: 'left' | 'center' | 'right';
    dark?: boolean;
    placeholder?: string;
    weekNumbers?: 'iso' | 'local' | ((date: Date) => string | number);
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
        format?: string | string[] | ((value: string) => Date | null);
    };
    monthNameFormat?: 'long' | 'short';
    startDate?: string | Date;
    startTime?:
        | {
              hours?: number | string;
              minutes?: number | string;
              seconds?: number | string;
          }
        | {
              hours?: number | string;
              minutes?: number | string;
              seconds?: number | string;
          }[];
    hideOffsetDates?: boolean;
    autoRange?: number | string;
    noToday?: boolean;
    noHoursOverlay?: boolean;
    noMinutesOverlay?: boolean;
    noSecondsOverlay?: boolean;
    altPosition?: (el: HTMLElement | undefined) => { top: number | string; left: number | string; transform?: string };
    disabledWeekDays?: number[] | string[];
    allowedDates?: string[] | Date[];
    showNowButton?: boolean;
    nowButtonLabel?: string;
    partialRange?: boolean;
    monthChangeOnScroll?: boolean | 'inverse';
    markers?: {
        date: Date | string;
        type?: 'dot' | 'line';
        tooltip?: { text?: string; html?: string; color?: string }[];
        color?: string;
    }[];
    transitions?:
        | boolean
        | { menuAppear?: string, open?: string; close?: string; next?: string; previous?: string; vNext?: string; vPrevious?: string };
    modeHeight?: string | number;
    enableSeconds?: boolean;
    escClose?: boolean;
    spaceConfirm?: boolean;
    monthChangeOnArrows?: boolean;
    formatLocale?: Locale;
    autocomplete?: string;
    multiDates?: boolean;
    presetRanges?: { label: string; range: Date[] | string[]; style?: Record<string, string>; slot?: string }[];
    flow?: ('month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds')[];
    partialFlow?: boolean;
    preventMinMaxNavigation?: boolean;
    minRange?: number | string;
    maxRange?: number | string;
    fixedStart?: boolean;
    fixedEnd?: boolean;
    utc?: boolean | 'preserve';
    multiDatesLimit?: number | string;
    reverseYears?: boolean;
    keepActionRow?: boolean;
    weekPicker?: boolean;
    noSwipe?: boolean;
    vertical?: boolean;
    ariaLabels?: {
        toggleOverlay?: string;
        menu?: string;
        input?: string;
        calendarWrap?: string;
        calendarDays?: string;
        openTimePicker?: string;
        closeTimePicker?: string;
        incrementValue?: (type: 'hours' | 'minutes' | 'seconds') => string;
        decrementValue?: (type: 'hours' | 'minutes' | 'seconds') => string;
        openTpOverlay?: (type: 'hours' | 'minutes' | 'seconds') => string;
        amPmButton?: string;
        openYearsOverlay?: string;
        openMonthsOverlay?: string;
        nextMonth?: string;
        prevMonth?: string;
        day?: ({ value }: { value: Date }) => string;
    };
    arrowNavigation?: boolean;
    yearPicker?: boolean;
    disableTimeRangeValidation?: boolean;
    dayNames?: ((lang: string, weekStart: number) => string[]) | string[];
    modelType?: 'timestamp' | 'format' | string;
    modelAuto?: boolean;
    highlight?: Date[] | string[] | number[] | ((date: Date[]) => boolean);
    highlightWeekDays?: number[];
    highlightDisabledDays?: boolean;
    offset?: string | number;
    teleportCenter?: boolean;
    teleport?: boolean | string;
    ignoreTimeValidation?: boolean;
    dayClass?: (date: Date) => string;
    hideNavigation?: ('month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds')[];
    onClickOutside?: (validate: () => boolean) => void;
    noDisabledRange?: boolean;
    sixWeeks?: boolean | 'append' | 'prepend' | 'center' | 'fair';
    timezone?: string;
    allowPreventDefault?: boolean;
    disableYearSelect?: boolean;
    closeOnClearValue?: boolean;
}

export type DatePickerInstance = ComponentPublicInstance<PublicMethods> | null;

export interface PublicMethods extends MethodOptions {
    selectDate: () => void;
    closeMenu: () => void;
    openMenu: () => void;
    clearValue: () => void;
    onScroll: () => void;
    updateInternalModelValue: (value: Date | Date[]) => void;
    setMonthYear: (value: { month?: number | string; year?: number | string }) => void;
    parseModel: (value?: ModelValue) => void;
}

declare const _default: DefineComponent<
    ComponentPropsOptions<VueDatePickerProps>,
    {},
    {},
    ComputedOptions,
    PublicMethods,
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    EmitEvents[],
    EmitEvents,
    VueDatePickerProps
>;

export default _default;
