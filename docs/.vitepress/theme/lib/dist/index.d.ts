import { AllowedComponentProps } from 'vue';
import { ComponentCustomProperties } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentInternalInstance } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComponentPublicInstance } from 'vue';
import { ComputedRef } from 'vue';
import { DebuggerEvent } from 'vue';
import { DefineComponent } from 'vue';
import { GlobalComponents } from 'vue';
import { GlobalDirectives } from 'vue';
import { Locale } from 'date-fns';
import { MaybeRefOrGetter } from 'vue';
import { NearestMinutes } from 'date-fns';
import { nextTick } from 'vue';
import { OnCleanup } from '@vue/reactivity';
import { Placement } from '@floating-ui/vue';
import { PublicProps } from 'vue';
import { RoundingMethod } from 'date-fns';
import { ShallowRef } from 'vue';
import { ShallowUnwrapRef } from 'vue';
import { Slot } from 'vue';
import { Strategy } from '@floating-ui/vue';
import { TZDate } from '@date-fns/tz';
import { VNodeProps } from 'vue';
import { WatchOptions } from 'vue';
import { WatchStopHandle } from 'vue';

declare const __VLS_component: DefineComponent<RootProps, {
openMenu: () => void;
closeMenu: () => void;
selectDate: () => void;
clearValue: () => void;
formatInputValue: () => void;
updateInternalModelValue: (value: Date | Date[]) => void;
setMonthYear: (value: Partial<MonthModel>, instance?: number) => void;
parseModel: () => void;
switchView: (view: MenuView, instance?: number) => void;
handleFlow: () => void;
toggleMenu: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: () => any;
focus: () => any;
invalid: (event: Event) => any;
open: () => any;
"update:model-value": (value: any) => any;
"internal-model-change": (value: InternalModelValue) => any;
"text-submit": () => any;
"text-input": (event: string | Event, parsedDate: InputParsedDate) => any;
closed: () => any;
cleared: () => any;
"flow-step": (step: number) => any;
"update-month-year": (value: {
instance: number;
month: number;
year: number;
}) => any;
"invalid-select": () => any;
"invalid-fixed-range": (date: Date) => any;
"invalid-date": (date: Date) => any;
"tooltip-open": (marker: Marker) => any;
"tooltip-close": (marker: Marker) => any;
"am-pm-change": (value: Hour12) => any;
"range-start": (date: Date) => any;
"range-end": (date: Date) => any;
"date-click": (date: Date) => any;
"overlay-toggle": (toggle: {
open: boolean;
overlay: PickerSection;
}) => any;
}, string, PublicProps, Readonly<RootProps> & Readonly<{
onBlur?: (() => any) | undefined;
onFocus?: (() => any) | undefined;
onInvalid?: ((event: Event) => any) | undefined;
onOpen?: (() => any) | undefined;
"onUpdate:model-value"?: ((value: any) => any) | undefined;
"onInternal-model-change"?: ((value: InternalModelValue) => any) | undefined;
"onText-submit"?: (() => any) | undefined;
"onText-input"?: ((event: string | Event, parsedDate: InputParsedDate) => any) | undefined;
onClosed?: (() => any) | undefined;
onCleared?: (() => any) | undefined;
"onFlow-step"?: ((step: number) => any) | undefined;
"onUpdate-month-year"?: ((value: {
instance: number;
month: number;
year: number;
}) => any) | undefined;
"onInvalid-select"?: (() => any) | undefined;
"onInvalid-fixed-range"?: ((date: Date) => any) | undefined;
"onInvalid-date"?: ((date: Date) => any) | undefined;
"onTooltip-open"?: ((marker: Marker) => any) | undefined;
"onTooltip-close"?: ((marker: Marker) => any) | undefined;
"onAm-pm-change"?: ((value: Hour12) => any) | undefined;
"onRange-start"?: ((date: Date) => any) | undefined;
"onRange-end"?: ((date: Date) => any) | undefined;
"onDate-click"?: ((date: Date) => any) | undefined;
"onOverlay-toggle"?: ((toggle: {
open: boolean;
overlay: PickerSection;
}) => any) | undefined;
}>, {
timePicker: boolean;
monthPicker: boolean;
dark: boolean;
transitions: boolean | Partial<TransitionsConfig>;
hideNavigation: PickerSection[];
vertical: boolean;
hideMonthYearSelect: boolean;
disableYearSelect: boolean;
yearRange: [number, number];
autoApply: boolean;
disabledDates: Date[] | string[] | ((date: Date) => boolean);
hideOffsetDates: boolean;
noToday: boolean;
markers: Marker[];
presetDates: PresetDate[];
preventMinMaxNavigation: boolean;
reverseYears: boolean;
weekPicker: boolean;
arrowNavigation: boolean;
centered: boolean;
locale: Locale;
weekStart: string | number;
yearPicker: boolean;
modelAuto: boolean;
multiDates: boolean | Partial<MultiDatesConfig>;
range: boolean | Partial<RangeConfig>;
inline: boolean | {
input?: boolean;
};
sixWeeks: boolean | SixWeekMode;
focusStartDate: boolean;
quarterPicker: boolean;
yearFirst: boolean;
loading: boolean;
ui: Partial<UIConfig>;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
'date-picker': ({
$: ComponentInternalInstance;
$data: {};
$props: Partial<{}> & Omit<{} & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
$attrs: {
[x: string]: unknown;
};
$refs: any;
$slots: Readonly<{
[name: string]: Slot<any> | undefined;
}>;
$root: ComponentPublicInstance | null;
$parent: ComponentPublicInstance | null;
$host: Element | null;
$emit: (event: string, ...args: any[]) => void;
$el: any;
$options: ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {
closeMenu: (fromClickAway?: boolean) => void;
selectDate: () => void;
clearValue: () => void;
openMenu: () => void;
onScroll: () => void;
formatInputValue: () => void;
updateInternalModelValue: (value: Date | Date[]) => void;
setMonthYear: (value: Partial<MonthModel>, instance?: number) => void;
parseModel: (value?: ModelValue) => void;
switchView: (view: MenuView, instance?: number) => void;
toggleMenu: () => void;
handleFlow: (skipStep?: number) => void;
getDpWrapMenuRef: () => any;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & {
beforeCreate?: (() => void) | (() => void)[];
created?: (() => void) | (() => void)[];
beforeMount?: (() => void) | (() => void)[];
mounted?: (() => void) | (() => void)[];
beforeUpdate?: (() => void) | (() => void)[];
updated?: (() => void) | (() => void)[];
activated?: (() => void) | (() => void)[];
deactivated?: (() => void) | (() => void)[];
beforeDestroy?: (() => void) | (() => void)[];
beforeUnmount?: (() => void) | (() => void)[];
destroyed?: (() => void) | (() => void)[];
unmounted?: (() => void) | (() => void)[];
renderTracked?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[];
renderTriggered?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[];
errorCaptured?: ((err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void)[];
};
$forceUpdate: () => void;
$nextTick: nextTick;
$watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, OnCleanup]) => any : (...args: [any, any, OnCleanup]) => any, options?: WatchOptions): WatchStopHandle;
} & Readonly<{}> & Omit<Readonly<{}> & Readonly<{}>, "onScroll" | "openMenu" | "selectDate" | "handleFlow" | "switchView" | "formatInputValue" | "closeMenu" | "clearValue" | "updateInternalModelValue" | "setMonthYear" | "parseModel" | "toggleMenu" | "getDpWrapMenuRef"> & ShallowUnwrapRef<    {
closeMenu: (fromClickAway?: boolean) => void;
selectDate: () => void;
clearValue: () => void;
openMenu: () => void;
onScroll: () => void;
formatInputValue: () => void;
updateInternalModelValue: (value: Date | Date[]) => void;
setMonthYear: (value: Partial<MonthModel>, instance?: number) => void;
parseModel: (value?: ModelValue) => void;
switchView: (view: MenuView, instance?: number) => void;
toggleMenu: () => void;
handleFlow: (skipStep?: number) => void;
getDpWrapMenuRef: () => any;
}> & {} & ComponentCustomProperties & {} & {
$slots: any;
}) | null;
}, any>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<RootSlots> & RootSlots;
    refs: {
        'date-picker': ({
            $: ComponentInternalInstance;
            $data: {};
            $props: Partial<{}> & Omit<{} & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: any;
            $slots: Readonly<{
                [name: string]: Slot<any> | undefined;
            }>;
            $root: ComponentPublicInstance | null;
            $parent: ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {
            closeMenu: (fromClickAway?: boolean) => void;
            selectDate: () => void;
            clearValue: () => void;
            openMenu: () => void;
            onScroll: () => void;
            formatInputValue: () => void;
            updateInternalModelValue: (value: Date | Date[]) => void;
            setMonthYear: (value: Partial<MonthModel>, instance?: number) => void;
            parseModel: (value?: ModelValue) => void;
            switchView: (view: MenuView, instance?: number) => void;
            toggleMenu: () => void;
            handleFlow: (skipStep?: number) => void;
            getDpWrapMenuRef: () => any;
            }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[];
                renderTriggered?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, OnCleanup]) => any : (...args: [any, any, OnCleanup]) => any, options?: WatchOptions): WatchStopHandle;
        } & Readonly<{}> & Omit<Readonly<{}> & Readonly<{}>, "onScroll" | "openMenu" | "selectDate" | "handleFlow" | "switchView" | "formatInputValue" | "closeMenu" | "clearValue" | "updateInternalModelValue" | "setMonthYear" | "parseModel" | "toggleMenu" | "getDpWrapMenuRef"> & ShallowUnwrapRef<    {
        closeMenu: (fromClickAway?: boolean) => void;
        selectDate: () => void;
        clearValue: () => void;
        openMenu: () => void;
        onScroll: () => void;
        formatInputValue: () => void;
        updateInternalModelValue: (value: Date | Date[]) => void;
        setMonthYear: (value: Partial<MonthModel>, instance?: number) => void;
        parseModel: (value?: ModelValue) => void;
        switchView: (view: MenuView, instance?: number) => void;
        toggleMenu: () => void;
        handleFlow: (skipStep?: number) => void;
        getDpWrapMenuRef: () => any;
        }> & {} & ComponentCustomProperties & {} & {
            $slots: any;
        }) | null;
    };
    rootEl: any;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare interface ActionRowConfig {
    showSelect: boolean;
    showCancel: boolean;
    showNow: boolean;
    showPreview: boolean;
    selectBtnLabel: string;
    cancelBtnLabel: string;
    nowBtnLabel: string;
    nowBtnRound?: Partial<{
        rounding: RoundingMethod;
        roundTo: NearestMinutes;
    }>;
}

export declare interface ActionRowSlotProps {
    internalModelValue: InternalModelValue;
    disabled: boolean;
    selectDate: () => void;
    closePicker: () => void;
}

export declare interface AriaLabelsConfig {
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

declare const basePropDefaults: {
    flowStep: number;
    menuWrapRef: null;
    collapse: boolean;
};

export declare interface BaseProps {
    flowStep?: number;
    collapse?: boolean;
    menuWrapRef: HTMLElement | null;
    noOverlayFocus: boolean;
}

export declare type BasePropsWithDefaults = WithDefaults<BaseProps, typeof basePropDefaults>;

export declare interface CalendarDay {
    text: number | string;
    value: Date;
    current: boolean;
    classData: DynamicClass;
    marker?: Marker | null;
}

export declare interface CalendarMonthYear {
    month: number;
    year: number;
}

export declare interface CalendarWeek {
    days: CalendarDay[];
}

export declare interface Config {
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

export declare type CustomClass = string | string[];

export declare type DateGetter = (date?: MaybeDate, reset?: boolean, skipInstanceCheck?: boolean) => Date;

export declare type DateValue = Date | string | number;

export declare type DisabledTimesFn = ((time: TimeObj) => boolean) | ((time: TimeObj[]) => boolean) | ((time: (TimeObj | undefined)[]) => boolean);

export declare type DPElements = 'action-row' | 'action-prev' | 'action-next' | 'overlay-month' | 'overlay-year';

export declare interface DpInputSlotProps {
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

export declare type DynamicClass = Record<string, boolean | undefined>;

export declare interface FilterConfig {
    weekDays: number[];
    months: number[];
    years: number[];
    times: {
        hours: number[];
        minutes: number[];
        seconds: number[];
    };
}

export declare interface FloatingConfig {
    offset: number;
    arrow: Readonly<ShallowRef<HTMLDivElement | null>> | boolean;
    strategy?: Strategy;
    placement?: Placement;
}

export declare interface FlowConfig {
    steps: PickerSection[];
    partial: boolean;
}

export declare interface FormatsConfig {
    month: string;
    year: string;
    weekDay: string;
    quarter: string;
    day: string;
    input?: string | ((date: Date) => string) | ((dates: Date[]) => string);
    preview?: string | ((date: Date) => string) | ((dates: Date[]) => string);
}

export declare interface HighlightConfig {
    dates: Date[];
    years: number[];
    months: MonthModel[];
    quarters: {
        quarter: number;
        year: number;
    }[];
    weekdays: number[];
    options: {
        highlightDisabled: boolean;
    };
}

export declare type HighlightFn = (date: Date | MonthModel | number | {
    quarter: number;
    year: number;
}, disabled?: boolean) => boolean;

export declare type Hour12 = 'AM' | 'PM';

export declare interface InputAttributesConfig {
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

export declare type InputParsedDate = Date | Array<Date | null> | null;

export declare type InternalModelValue = Date | Date[] | null;

export declare interface InternalTime {
    hours: number | number[];
    minutes: number | number[];
    seconds: number | number[];
}

export declare interface InvalidTimesConfig {
    hours: number[];
    minutes?: number[];
    seconds?: (number | undefined)[];
}

export declare interface Marker {
    date: Date | string;
    type?: 'dot' | 'line';
    tooltip?: {
        text?: string;
        slot?: string;
        color?: string;
    }[];
    color?: string;
    customPosition?: (el: HTMLElement) => Record<string, string>;
}

export declare type MaybeDate = DateValue | null | undefined;

export declare type MenuExposedFn = 'selectCurrentDate' | 'presetDate' | 'clearHoverDate' | 'handleArrow' | 'updateMonthYear' | 'selectWeekDate' | 'changeYear' | 'changeMonth';

export declare type MenuView = 'month' | 'year' | 'calendar' | 'time';

export declare type ModelTypeConverted = string | number | Date;

export declare type ModelValue = Date | Date[] | string | string[] | TimeModel | TimeModel[] | MonthModel | MonthModel[] | number | number[] | null | undefined;

export declare interface MonthModel {
    month: number | string;
    year: number | string;
}

export declare interface MonthYearOverlaySlotProps {
    month: number;
    year: number;
    items: {
        text: string;
        value: number;
    }[];
    updateMonthYear: (month: number, year: number) => void;
    instance: number;
    toggle: () => void;
}

export declare interface MonthYearSlotProps {
    year: number;
    month?: number;
    months?: {
        value: number;
        text: string;
        className?: Record<string, boolean>;
    }[];
    years?: {
        value: number;
        text: string;
        className?: Record<string, boolean>;
    }[];
    updateMonthYear?: (month: number, year: number, fromNav: boolean) => void;
    handleMonthYearChange?: (isNext: boolean, fromNav?: boolean) => void;
    instance?: number;
    selectMonth?: (month: number, instance: number) => void;
    selectYear?: (year: number, instance: number) => void;
    isDisabled?: (next: boolean) => boolean;
}

export declare interface MultiCalendarsConfig {
    static: boolean;
    solo: boolean;
    count: number;
}

export declare interface MultiDatesConfig {
    limit: number | string;
    dragSelect: boolean;
}

export declare type Numeric = number | string | null;

export declare type OptionalDate = Date | string | null;

export declare interface OverlayGridItem {
    value: number;
    text: string;
    active: boolean;
    disabled: boolean;
    className: DynamicClass;
}

export declare type PickerSection = 'month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds';

export declare type PresetDate = {
    label: string;
    value: MaybeRefOrGetter<Date[] | string[] | Date | string>;
    style?: Record<string, string>;
    slot?: string;
    testId?: string;
};

declare const propDefaults: {
    weekStart: number;
    yearRange: () => [number, number];
    ui: () => {};
    locale: () => Locale;
    dark: boolean;
    transitions: boolean;
    hideNavigation: () => never[];
    vertical: boolean;
    hideMonthYearSelect: boolean;
    disableYearSelect: boolean;
    autoApply: boolean;
    disabledDates: () => never[];
    hideOffsetDates: boolean;
    noToday: boolean;
    markers: () => never[];
    presetDates: () => never[];
    preventMinMaxNavigation: boolean;
    reverseYears: boolean;
    weekPicker: boolean;
    arrowNavigation: boolean;
    monthPicker: boolean;
    yearPicker: boolean;
    quarterPicker: boolean;
    timePicker: boolean;
    modelAuto: boolean;
    multiDates: boolean;
    range: boolean;
    inline: boolean;
    sixWeeks: boolean;
    focusStartDate: boolean;
    yearFirst: boolean;
    loading: boolean;
    centered: boolean;
};

export declare interface RangeConfig {
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

export declare interface RootEmits {
    'update:model-value': [value: any];
    'internal-model-change': [value: InternalModelValue];
    'text-submit': [];
    'text-input': [event: Event | string, parsedDate: InputParsedDate];
    open: [];
    closed: [];
    focus: [];
    blur: [];
    cleared: [];
    'flow-step': [step: number];
    'update-month-year': [value: {
        instance: number;
        month: number;
        year: number;
    }];
    'invalid-select': [];
    'invalid-fixed-range': [date: Date];
    'invalid-date': [date: Date];
    'tooltip-open': [marker: Marker];
    'tooltip-close': [marker: Marker];
    'am-pm-change': [value: Hour12];
    'range-start': [date: Date];
    'range-end': [date: Date];
    'date-click': [date: Date];
    'overlay-toggle': [toggle: {
        open: boolean;
        overlay: PickerSection;
    }];
    invalid: [event: Event];
}

export declare interface RootProps {
    multiCalendars?: boolean | number | string | Partial<MultiCalendarsConfig>;
    modelValue?: ModelValue;
    modelType?: string;
    dark?: boolean;
    transitions?: boolean | Partial<TransitionsConfig>;
    ariaLabels?: Partial<AriaLabelsConfig>;
    hideNavigation?: PickerSection[];
    timezone?: string;
    vertical?: boolean;
    hideMonthYearSelect?: boolean;
    disableYearSelect?: boolean;
    yearRange?: [number, number];
    autoApply?: boolean;
    disabledDates?: Date[] | string[] | ((date: Date) => boolean);
    startDate?: DateValue;
    hideOffsetDates?: boolean;
    noToday?: boolean;
    allowedDates?: DateValue[];
    markers?: Marker[];
    presetDates?: PresetDate[];
    flow?: Partial<FlowConfig>;
    preventMinMaxNavigation?: boolean;
    reverseYears?: boolean;
    weekPicker?: boolean;
    filters?: Partial<FilterConfig>;
    arrowNavigation?: boolean;
    highlight?: HighlightFn | Partial<HighlightConfig>;
    teleport?: string | boolean | HTMLElement;
    centered?: boolean;
    locale?: Locale;
    weekStart?: string | number;
    weekNumbers?: boolean | WeekNumbersConfig;
    dayNames?: (() => string[]) | string[];
    monthPicker?: boolean;
    yearPicker?: boolean;
    modelAuto?: boolean;
    formats?: Partial<FormatsConfig> | null;
    multiDates?: boolean | Partial<MultiDatesConfig>;
    minDate?: DateValue;
    maxDate?: DateValue;
    minTime?: TimeModel;
    maxTime?: TimeModel;
    inputAttrs?: Partial<InputAttributesConfig>;
    timeConfig?: Partial<TimeConfig>;
    placeholder?: string;
    timePicker?: boolean;
    range?: boolean | Partial<RangeConfig>;
    menuId?: string;
    disabled?: boolean;
    readonly?: boolean;
    inline?: boolean | {
        input?: boolean;
    };
    textInput?: boolean | Partial<TextInputConfig>;
    sixWeeks?: boolean | SixWeekMode;
    actionRow?: Partial<ActionRowConfig>;
    focusStartDate?: boolean;
    disabledTimes?: DisabledTimesFn | TimeModel[] | TimeModel[][];
    calendar?: (month: CalendarWeek[]) => CalendarWeek[];
    config?: Partial<Config>;
    quarterPicker?: boolean;
    yearFirst?: boolean;
    loading?: boolean;
    ui?: Partial<UIConfig>;
    floating?: Partial<FloatingConfig>;
}

export declare type RootPropsWithDefaults = WithDefaults<RootProps, typeof propDefaults>;

export declare interface RootSlots {
    'clock-icon'(): any;
    'arrow-left'(): any;
    'arrow-right'(): any;
    'arrow-up'(): any;
    'arrow-down'(): any;
    'calendar-icon'(): any;
    'input-icon'(): any;
    'tp-inline-arrow-up'(): any;
    'tp-inline-arrow-down'(): any;
    'clear-icon'(props: {
        clear: (ev?: Event) => void;
    }): any;
    trigger(): any;
    'menu-header'(): any;
    day(props: {
        date: Date;
        day: number;
    }): any;
    'month-overlay-value'(props: {
        text: string;
        value: number;
    }): any;
    'year-overlay-value'(props: {
        text: string;
        value: number;
    }): any;
    'year-overlay'(props: MonthYearOverlaySlotProps): any;
    'month-overlay'(props: MonthYearOverlaySlotProps): any;
    'month-overlay-header'(props: {
        toggle: () => void;
    }): any;
    'year-overlay-header'(props: {
        toggle: () => void;
    }): any;
    'hours-overlay-header'(props: {
        toggle: () => void;
    }): any;
    'minutes-overlay-header'(props: {
        toggle: () => void;
    }): any;
    'seconds-overlay-header'(props: {
        toggle: () => void;
    }): any;
    'hours-overlay-value'(props: {
        text: string;
        value: number;
    }): any;
    'minutes-overlay-value'(props: {
        text: string;
        value: number;
    }): any;
    'seconds-overlay-value'(props: {
        text: string;
        value: number;
    }): any;
    hours(props: {
        text: string;
        value: number;
    }): any;
    minutes(props: {
        text: string;
        value: number;
    }): any;
    month(props: {
        text: string;
        value: number;
    }): any;
    year(props: {
        text: string;
        value: number;
    }): any;
    'action-buttons'(props: {
        value: InternalModelValue;
    }): any;
    'action-preview'(props: {
        value: InternalModelValue;
    }): any;
    'calendar-header'(props: {
        day: string;
        index: number;
    }): any;
    'marker-tooltip'(props: {
        day: Date;
        tooltip: {
            text?: string;
            html?: string;
            color?: string;
        };
    }): any;
    'action-extra'(props: {
        selectCurrentDate: () => void;
    }): any;
    'time-picker-overlay'(props: TimeOverlaySlotProps): any;
    'am-pm-button'(props: {
        toggle: () => void;
        value: string;
    }): any;
    'left-sidebar'(props: SidebarSlotProps): any;
    'right-sidebar'(props: SidebarSlotProps): any;
    'month-year'(props: MonthYearSlotProps): any;
    'dp-input'(props: DpInputSlotProps): any;
    'time-picker'(props: TimePickerSlotProps): any;
    'action-row'(props: ActionRowSlotProps): any;
    marker(props: {
        marker: Marker;
        day: number;
        date: Date;
    }): any;
    quarter(props: {
        value: Date;
        text: string;
    }): any;
    'top-extra'(props: {
        value: InternalModelValue;
    }): any;
}

export declare interface SelectItem<T = number> {
    value: T;
    text: string;
}

export declare interface SidebarSlotProps {
    modelValue: InternalModelValue;
    month?: ComputedRef<(instance: number) => number>;
    year?: ComputedRef<(instance: number) => number>;
    time?: InternalTime;
    updateTime?: (value: number | number[], isHours?: boolean, isSeconds?: boolean) => void;
    updateMonthYear?: (instance: number, val: {
        month: number;
        year: number;
        fromNav?: boolean;
    }) => void;
    selectDate?: (day: {
        value: Date;
    }, isNext?: boolean) => void;
    presetDate?: (value: Date[] | string[] | Date | string, noTz?: boolean) => void;
    getModelMonthYear?: () => {
        month: number | null;
        year: number | null;
    }[];
    selectMonth?: (month: number, instance: number) => void;
    selectYear?: (year: number, instance: number) => void;
    handleYear?: (instance: number, increment?: boolean) => void;
    selectQuarter?: (date: Date, instance: number, disabled: boolean) => void;
    handleYearSelect?: (year: number, instance: number) => void;
}

export declare type SixWeekMode = 'append' | 'prepend' | 'center' | 'fair';

export declare interface TextInputConfig {
    enterSubmit: boolean;
    tabSubmit: boolean;
    openMenu: string | boolean;
    rangeSeparator: string;
    selectOnFocus: boolean;
    escClose: boolean;
    format: string;
    maskFormat: string;
}

export declare interface TimeConfig {
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

export declare interface TimeInputSection {
    type: TimeKey;
    separator?: boolean;
}

export declare interface TimeInternalModel {
    hours: number | number[];
    minutes: number | number[];
    seconds: number | number[];
}

export declare type TimeKey = 'hours' | 'minutes' | 'seconds';

export declare interface TimeModel {
    hours: number | string;
    minutes: number | string;
    seconds?: number | string;
}

export declare type TimeObj = {
    hours: number;
    minutes: number;
    seconds: number;
};

export declare type TimeOverlaySlotProps = InternalTime & {
    setHours: (hours: number | number[]) => void;
    setMinutes: (minutes: number | number[]) => void;
    setSeconds: (seconds: number | number[]) => void;
};

export declare interface TimePickerSlotProps {
    time: InternalTime;
    updateTime: (value: number | number[], isHours?: boolean, isSeconds?: boolean) => void;
}

export declare interface TransitionsConfig {
    menuAppearTop: string;
    menuAppearBottom: string;
    open: string;
    close: string;
    next: string;
    previous: string;
    vNext: string;
    vPrevious: string;
}

export { TZDate }

export declare interface UIConfig {
    navBtnNext: CustomClass | undefined;
    navBtnPrev: CustomClass | undefined;
    calendar: CustomClass | undefined;
    calendarCell: CustomClass | undefined;
    menu: CustomClass | undefined;
    input: CustomClass | undefined;
    dayClass: ((date: Date, internalModelValue: InternalModelValue) => string) | undefined;
}

export declare type UIParsed = {
    [K in keyof UIConfig]: K extends 'dayClass' ? UIConfig[K] | undefined : Record<string, boolean> | undefined;
};

export declare const VueDatePicker: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare interface WeekNumbersConfig {
    type?: 'iso' | 'local' | ((date: Date) => string | number);
    hideOnOffsetDates?: boolean;
    label?: string;
}

declare type WithDefaults<T, D> = Omit<T, keyof D> & Required<Pick<T, keyof D & keyof T>>;

export { }
