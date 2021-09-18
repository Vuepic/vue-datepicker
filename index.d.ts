/* eslint-disable */
import { DefineComponent, Plugin } from 'vue';

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

declare const Vue3DatePicker: DefineComponent<
    {
        uid?: string;
        is24?: boolean;
        enableTimePicker?: boolean;
        range?: boolean;
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
        minTime?: ITimeObj;
        maxTime?: ITimeObj;
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
            placeholder?: string;
            enterSubmit?: boolean;
            openMenu?: boolean;
            freeInput?: boolean;
        };
        teleport?: string;
        monthNameFormat?: 'long' | 'short';
        startDate: string | Date;
        startTime: ITimeObj | ITimeObj[];
    },
    {},
    any
> & { install: Exclude<Plugin['install'], undefined> };

export default Vue3DatePicker;
