import type { Locale } from 'date-fns';
import type {
    TimeConfig,
    Config,
    TeleportConfig,
    UIConfig,
    FlowConfig,
    FilterConfig,
    TransitionsConfig,
    MultiCalendarsConfig,
    TimeZoneConfig,
    HighlightConfig,
    FormatsConfig,
    TextInputConfig,
    InputAttributesConfig,
    RangeConfig,
    MultiDatesConfig,
    WeekNumbersConfig,
    AriaLabelsConfig,
    ActionRowConfig,
} from '@/types/configs.ts';
import type { CalendarWeek, Marker, TimeModel, PresetDate, HighlightFn, DisabledTimesFn } from '@/types/picker.ts';
import type { PickerSection, DateValue, ModelValue, SixWeekMode } from '@/types/generic.ts';
import { basePropDefaults, type propDefaults } from '@/constants/defaults.ts';

export interface RootProps {
    multiCalendars?: boolean | number | string | Partial<MultiCalendarsConfig>;
    modelValue?: ModelValue;
    modelType?: string;
    dark?: boolean;
    transitions?: boolean | Partial<TransitionsConfig>;
    ariaLabels?: Partial<AriaLabelsConfig>;
    hideNavigation?: PickerSection[];
    timezone?: string | Partial<TimeZoneConfig>;
    vertical?: boolean;
    hideMonthYearSelect?: boolean;
    disableYearSelect?: boolean;
    yearRange?: [number, number];
    autoApply?: boolean;
    disabledDates?: Date[] | string[] | ((date: Date) => boolean);
    startDate?: DateValue;
    startTime?: TimeModel | TimeModel[];
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
    teleport?: Partial<TeleportConfig> | boolean;
    locale?: Locale;
    weekNumName?: string;
    weekStart?: string | number;
    weekNumbers?: 'iso' | 'local' | ((date: Date) => string | number) | WeekNumbersConfig;
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
    uid?: string;
    disabled?: boolean;
    readonly?: boolean;
    inline?: boolean | { input?: boolean };
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
}

type WithDefaults<T, D> = Omit<T, keyof D> & Required<Pick<T, keyof D & keyof T>>;
export type RootPropsWithDefaults = WithDefaults<RootProps, typeof propDefaults>;

export interface BaseProps {
    flowStep?: number;
    collapse?: boolean;
    menuWrapRef: HTMLElement | null;
    noOverlayFocus: boolean;
}

export type BasePropsWithDefaults = WithDefaults<BaseProps, typeof basePropDefaults>;
