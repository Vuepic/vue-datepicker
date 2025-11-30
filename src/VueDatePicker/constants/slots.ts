import type { Slots } from 'vue';
import type { PresetDate, RootSlots } from '@/types';

export enum SlotUse {
    Input = 'input',
    DatePicker = 'date-picker',
    Calendar = 'calendar',
    DatePickerHeader = 'date-picker-header',
    Menu = 'menu',
    ActionRow = 'action-row',
    TimePicker = 'time-picker',
    TimeInput = 'time-input',
    PassTrough = 'pass-trough',
    MonthPicker = 'month-picker',
    YearMode = 'year-mode',
    QuarterPicker = 'quarter-picker',
    YearPicker = 'year-picker',
}

const timeOverlayUse = [SlotUse.TimeInput, SlotUse.TimePicker, SlotUse.PassTrough];

const slots = [
    { name: 'trigger', use: [SlotUse.Input] },
    { name: 'input-icon', use: [SlotUse.Input] },
    { name: 'clear-icon', use: [SlotUse.Input] },
    { name: 'dp-input', use: [SlotUse.Input] },
    { name: 'clock-icon', use: [SlotUse.TimePicker, SlotUse.TimeInput, SlotUse.PassTrough] },
    { name: 'arrow-left', use: [SlotUse.DatePickerHeader, SlotUse.PassTrough, SlotUse.YearMode] },
    { name: 'arrow-right', use: [SlotUse.DatePickerHeader, SlotUse.PassTrough, SlotUse.YearMode] },
    {
        name: 'arrow-up',
        use: [SlotUse.TimePicker, SlotUse.TimeInput, SlotUse.DatePickerHeader, SlotUse.PassTrough],
    },
    {
        name: 'arrow-down',
        use: [SlotUse.TimePicker, SlotUse.TimeInput, SlotUse.DatePickerHeader, SlotUse.PassTrough],
    },
    {
        name: 'calendar-icon',
        use: [SlotUse.DatePickerHeader, SlotUse.TimePicker, SlotUse.PassTrough, SlotUse.YearMode],
    },
    { name: 'day', use: [SlotUse.Calendar, SlotUse.PassTrough] },
    {
        name: 'month-overlay-value',
        use: [SlotUse.DatePickerHeader, SlotUse.PassTrough, SlotUse.MonthPicker],
    },
    {
        name: 'year-overlay-value',
        use: [SlotUse.DatePickerHeader, SlotUse.PassTrough, SlotUse.YearMode, SlotUse.YearPicker],
    },
    { name: 'year-overlay', use: [SlotUse.DatePickerHeader, SlotUse.PassTrough] },
    { name: 'month-overlay', use: [SlotUse.DatePickerHeader, SlotUse.PassTrough] },
    { name: 'month-overlay-header', use: [SlotUse.DatePickerHeader, SlotUse.PassTrough] },
    { name: 'year-overlay-header', use: [SlotUse.DatePickerHeader, SlotUse.PassTrough] },
    {
        name: 'hours-overlay-value',
        use: timeOverlayUse,
    },
    {
        name: 'hours-overlay-header',
        use: timeOverlayUse,
    },
    {
        name: 'minutes-overlay-value',
        use: timeOverlayUse,
    },
    {
        name: 'minutes-overlay-header',
        use: timeOverlayUse,
    },
    {
        name: 'seconds-overlay-value',
        use: timeOverlayUse,
    },
    {
        name: 'seconds-overlay-header',
        use: timeOverlayUse,
    },
    { name: 'hours', use: [SlotUse.TimeInput, SlotUse.TimePicker, SlotUse.PassTrough] },
    { name: 'minutes', use: [SlotUse.TimeInput, SlotUse.TimePicker, SlotUse.PassTrough] },
    { name: 'seconds', use: [SlotUse.TimeInput, SlotUse.TimePicker, SlotUse.PassTrough] },
    { name: 'month', use: [SlotUse.DatePickerHeader, SlotUse.TimePicker, SlotUse.PassTrough] },
    { name: 'year', use: [SlotUse.DatePickerHeader, SlotUse.TimePicker, SlotUse.PassTrough, SlotUse.YearMode] },
    { name: 'action-buttons', use: [SlotUse.ActionRow] },
    { name: 'action-preview', use: [SlotUse.ActionRow] },
    { name: 'calendar-header', use: [SlotUse.Calendar, SlotUse.PassTrough] },
    { name: 'marker-tooltip', use: [SlotUse.Calendar, SlotUse.PassTrough] },
    { name: 'action-extra', use: [SlotUse.Menu] },
    { name: 'time-picker-overlay', use: [SlotUse.TimePicker, SlotUse.TimePicker, SlotUse.PassTrough] },
    { name: 'am-pm-button', use: [SlotUse.TimePicker, SlotUse.TimeInput, SlotUse.PassTrough] },
    { name: 'left-sidebar', use: [SlotUse.Menu] },
    { name: 'right-sidebar', use: [SlotUse.Menu] },
    {
        name: 'month-year',
        use: [SlotUse.DatePickerHeader, SlotUse.PassTrough, SlotUse.MonthPicker, SlotUse.YearPicker],
    },
    { name: 'time-picker', use: [SlotUse.DatePicker, SlotUse.PassTrough] },
    { name: 'action-row', use: [SlotUse.ActionRow] },
    { name: 'marker', use: [SlotUse.Calendar, SlotUse.PassTrough] },
    { name: 'quarter', use: [SlotUse.QuarterPicker, SlotUse.PassTrough] },
    {
        name: 'top-extra',
        use: [
            SlotUse.DatePickerHeader,
            SlotUse.PassTrough,
            SlotUse.MonthPicker,
            SlotUse.QuarterPicker,
            SlotUse.YearPicker,
        ],
    },
    {
        name: 'tp-inline-arrow-up',
        use: [SlotUse.DatePicker, SlotUse.TimeInput, SlotUse.TimePicker, SlotUse.PassTrough],
    },
    {
        name: 'tp-inline-arrow-down',
        use: [SlotUse.DatePicker, SlotUse.TimeInput, SlotUse.TimePicker, SlotUse.PassTrough],
    },
    { name: 'arrow', use: [SlotUse.Menu] },
    { name: 'menu-header', use: [SlotUse.Menu] },
] as const;

type SlotItem = (typeof slots)[number];

export type SlotNamesFor<T extends SlotUse> = SlotItem extends infer Item
    ? Item extends { use: readonly SlotUse[]; name: infer Name }
        ? T extends Item['use'][number]
            ? Name
            : never
        : never
    : never;

export type ComponentSlots<T extends SlotUse> = Pick<RootSlots, SlotNamesFor<T>>;

export const getSlotsByComponent = <T extends SlotUse>(rootSlots: Slots, use: T): Array<SlotNamesFor<T>> => {
    return slots
        .filter((slot) => rootSlots[slot.name] && slot.use.includes(use as never))
        .map((slot) => slot.name) as Array<SlotNamesFor<T>>;
};

export const getAllSlots = (componentSlots: Slots, presetDates: PresetDate[]) => {
    return (slots as any)
        .map((slot: { name: string; use: SlotUse[] }) => slot.name)
        .concat(presetDates?.filter((preset) => preset.slot).map((preset) => preset.slot) ?? [])
        .filter((slot: string) => !!componentSlots[slot]);
};

export type YearModeSlots = ComponentSlots<SlotUse.YearMode>;

export type DatePickerHeaderSlots = ComponentSlots<SlotUse.DatePickerHeader>;
export type CalendarSlots = ComponentSlots<SlotUse.Calendar>;

export type DatePickerSlots = ComponentSlots<SlotUse.DatePicker> &
    DatePickerHeaderSlots &
    CalendarSlots &
    TimePickerSlots;

export type TimePickerSlots = ComponentSlots<SlotUse.TimePicker> & TimeInputSlots;

export type TimeInputSlots = ComponentSlots<SlotUse.TimeInput>;

export type QuarterPickerSlots = ComponentSlots<SlotUse.QuarterPicker> & YearModeSlots;

export type YearPickerSlots = ComponentSlots<SlotUse.YearPicker>;

export type ActionRowSlots = ComponentSlots<SlotUse.ActionRow>;

export type MenuSlots = ComponentSlots<SlotUse.Menu> & ActionRowSlots;
