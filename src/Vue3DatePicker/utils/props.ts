import { DefineComponent, ExtractPropTypes, PropType } from 'vue';
import {
    Flow,
    IDateFilter,
    IDefaultSelect,
    IDisableDates,
    IMarker,
    InternalModuleValue,
    ITimeValue,
    PresetRange,
    WeekStartNum,
    WeekStartStr,
} from '../interfaces';
import { Prop } from '@vue/runtime-core';

// Since many props are passed from the main component to the children, this is simply to reuse prop definitions and don't repeat the same code
export const CommonProps = {
    weekNumbers: { type: Boolean as PropType<boolean>, default: false },
    weekStart: { type: [Number, String] as PropType<WeekStartNum | WeekStartStr>, default: 1 },
    disableMonthYearSelect: { type: Boolean as PropType<boolean>, default: false },
    menuClassName: { type: String as PropType<string>, default: null },
    calendarClassName: { type: String as PropType<string>, default: null },
    yearRange: { type: Array as PropType<number[]>, default: () => [1970, 2100] },
    range: { type: Boolean as PropType<boolean>, default: false },
    multiCalendarsSolo: { type: Boolean as PropType<boolean>, default: false },
    calendarCellClassName: { type: String as PropType<string>, default: null },
    enableTimePicker: { type: Boolean as PropType<boolean>, default: true },
    is24: { type: Boolean as PropType<boolean>, default: true },
    hoursIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
    minutesIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
    secondsIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
    hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
    secondsGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
    minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
    minDate: { type: [Date, String] as PropType<Date | string>, default: null },
    maxDate: { type: [Date, String] as PropType<Date | string>, default: null },
    autoApply: { type: Boolean as PropType<boolean>, default: false },
    selectText: { type: String as PropType<string>, default: 'Select' },
    cancelText: { type: String as PropType<string>, default: 'Cancel' },
    locale: { type: String as PropType<string>, default: 'en-US' },
    weekNumName: { type: String as PropType<string>, default: 'W' },
    disabledDates: { type: [Array, Function] as PropType<Date[] | string[] | IDisableDates>, default: () => [] },
    minTime: { type: Object as PropType<ITimeValue>, default: null },
    maxTime: { type: Object as PropType<ITimeValue>, default: null },
    inline: { type: Boolean as PropType<boolean>, default: false },
    monthPicker: { type: Boolean as PropType<boolean>, default: false },
    timePicker: { type: Boolean as PropType<boolean>, default: false },
    monthNameFormat: { type: String as PropType<'long' | 'short'>, default: 'short' },
    startDate: { type: [Date, String] as PropType<string | Date>, default: null },
    startTime: { type: [Object, Array] as PropType<ITimeValue | ITimeValue[] | null>, default: null },
    monthYearComponent: { type: Object as PropType<DefineComponent>, default: null },
    timePickerComponent: { type: Object as PropType<DefineComponent>, default: null },
    actionRowComponent: { type: Object as PropType<DefineComponent>, default: null },
    customProps: { type: Object as PropType<Record<string, unknown>>, default: null },
    hideOffsetDates: { type: Boolean as PropType<boolean>, default: false },
    autoRange: { type: [Number, String] as PropType<number | string>, default: null },
    noToday: { type: Boolean as PropType<boolean>, default: false },
    noHoursOverlay: { type: Boolean as PropType<boolean>, default: false },
    noMinutesOverlay: { type: Boolean as PropType<boolean>, default: false },
    noSecondsOverlay: { type: Boolean as PropType<boolean>, default: false },
    disabledWeekDays: { type: Array as PropType<string[] | number[]>, default: () => [] },
    allowedDates: { type: Array as PropType<string[] | Date[]>, default: () => [] },
    showNowButton: { type: Boolean as PropType<boolean>, default: false },
    nowButtonLabel: { type: String as PropType<string>, default: 'Now' },
    monthChangeOnScroll: { type: [Boolean, String] as PropType<boolean | 'inverse'>, default: true },
    markers: { type: Array as PropType<IMarker[]>, default: () => [] },
    uid: { type: String as PropType<string>, default: null },
    modeHeight: { type: [Number, String] as PropType<number | string>, default: 255 },
    enableSeconds: { type: Boolean as PropType<boolean>, default: false },
    escClose: { type: Boolean as PropType<boolean>, default: true },
    spaceConfirm: { type: Boolean as PropType<boolean>, default: true },
    monthChangeOnArrows: { type: Boolean as PropType<boolean>, default: true },
    textInput: { type: Boolean as PropType<boolean>, default: false },
    disabled: { type: Boolean as PropType<boolean>, default: false },
    readonly: { type: Boolean as PropType<boolean>, default: false },
    multiDates: { type: Boolean as PropType<boolean>, default: false },
    presetRanges: { type: Array as PropType<PresetRange[]>, default: () => [] },
    flow: { type: Array as PropType<Flow>, default: () => [] },
    preventMinMaxNavigation: { type: Boolean as PropType<boolean>, default: false },
    minRange: { type: [Number, String] as PropType<number | string>, default: null },
    maxRange: { type: [Number, String] as PropType<number | string>, default: null },
    fixedStart: { type: Boolean as PropType<boolean>, default: false },
    fixedEnd: { type: Boolean as PropType<boolean>, default: false },
    multiDatesLimit: { type: [Number, String] as PropType<number | string>, default: null },
    reverseYears: { type: Boolean as PropType<boolean>, default: false },
    keepActionRow: { type: Boolean as PropType<boolean>, default: false },
    weekPicker: { type: Boolean as PropType<boolean>, default: false },
};

type ICommonProps = Record<
    keyof typeof CommonProps,
    Readonly<Partial<ExtractPropTypes<typeof CommonProps>>>[keyof typeof CommonProps]
>;

type IPartialProp = Prop<Readonly<Partial<ExtractPropTypes<typeof CommonProps>>>[keyof typeof CommonProps]>;

export const passCommonProps = (props: IPartialProp): ICommonProps => {
    const buildProps: ICommonProps = {} as ICommonProps;
    Object.keys(props).forEach((key) => {
        buildProps[key as keyof typeof CommonProps] = props[key as keyof IPartialProp];
    });

    return buildProps;
};

// Shared props between MonthYearInput and Calendar components
export const MonthCalendarSharedProps = {
    years: { type: Array as PropType<IDefaultSelect[]>, default: () => [] },
    months: { type: Array as PropType<IDefaultSelect[]>, default: () => [] },
    month: { type: Number as PropType<number>, default: 0 },
    year: { type: Number as PropType<number>, default: 0 },
    filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
    monthPicker: { type: Boolean as PropType<boolean>, default: false },
    instance: { type: Number as PropType<number>, default: 1 },
    internalModelValue: { type: [Date, Array] as PropType<InternalModuleValue>, default: null },
    range: { type: Boolean as PropType<boolean>, default: false },
    multiCalendars: { type: Number as PropType<number>, default: 0 },
    multiCalendarsSolo: { type: Boolean as PropType<boolean>, default: false },
    customProps: { type: Object as PropType<Record<string, unknown>>, default: null },
};
