/* eslint-disable @typescript-eslint/ban-types */
import { DefineComponent, ComputedOptions, ComponentOptionsMixin, MethodOptions } from 'vue';

interface ITimeObj {
    hours: number | string;
    minutes: number | string;
}

interface IMonthObj {
    month: number | string;
    year: number | string;
}

type ModelValDef = Date | Date[] | string | string[] | ITimeObj | ITimeObj[] | IMonthObj | null;

type FormatFnc = string | ((date: Date | Date[] | ITimeObj | ITimeObj[] | IMonthObj) => string);

type EmitEvents = 'update:modelValue' | 'textSubmit' | 'closed' | 'cleared';

interface Vue3DatePicker {
    uid?: string;
    is24?: boolean;
    enableTimePicker?: boolean;
    range?: boolean;
    twoCalendars?: boolean;
    modelValue?: ModelValDef;
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
    weekStart?: string | number;
    disabled?: boolean;
    readonly?: boolean;
    format?: FormatFnc;
    previewFormat?: FormatFnc;
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
        openMenu?: boolean;
        rangeSeparator?: string;
        format?: null;
    };
    teleport?: string;
    monthNameFormat?: 'long' | 'short';
    startDate?: string | Date;
    startTime?: ITimeObj | ITimeObj[];
    monthYearComponent?: DefineComponent;
    timePickerComponent?: DefineComponent;
    actionRowComponent?: DefineComponent;
    customProps?: Record<string, unknown>;
    hideOffsetDates?: boolean;
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
