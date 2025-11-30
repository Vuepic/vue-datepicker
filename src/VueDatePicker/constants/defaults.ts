import { WeekStart } from '.';
import { enUS } from 'date-fns/locale';

export const defaultRangeOptions = {
    noDisabledRange: false,
    showLastInRange: true,
    minMaxRawRange: false,
    partialRange: true,
    disableTimeRangeValidation: false,
    maxRange: undefined,
    minRange: undefined,
    autoRange: undefined,
    fixedStart: false,
    fixedEnd: false,
    autoSwitchStartEnd: true,
};

export const defaultConfig = {
    allowStopPropagation: true,
    closeOnScroll: false,
    modeHeight: 255,
    allowPreventDefault: false,
    closeOnClearValue: true,
    closeOnAutoApply: true,
    noSwipe: false,
    keepActionRow: false,
    onClickOutside: undefined,
    tabOutClosesMenu: true,
    arrowLeft: undefined,
    keepViewOnOffsetClick: false,
    timeArrowHoldThreshold: 0,
    shadowDom: false,
    mobileBreakpoint: 600,
    setDateOnMenuClose: false,
    escClose: true,
    spaceConfirm: true,
    monthChangeOnArrows: true,
    monthChangeOnScroll: true,
};

export const defaultTextInputOptions = {
    enterSubmit: true,
    tabSubmit: true,
    openMenu: 'open',
    selectOnFocus: false,
    rangeSeparator: ' - ',
    escClose: true,
    format: undefined,
    maskFormat: undefined,
    applyOnBlur: false,
    separators: undefined,
};

export const defaultHighlightOptions = {
    dates: [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: false },
};

export const defaultActionRow = {
    showSelect: true,
    showCancel: true,
    showNow: false,
    showPreview: true,
    selectBtnLabel: 'Select',
    cancelBtnLabel: 'Cancel',
    nowBtnLabel: 'Now',
    nowBtnRound: undefined,
};

export const defaultAriaLabels = {
    toggleOverlay: 'Toggle overlay',
    menu: 'Datepicker menu',
    input: 'Datepicker input',
    openTimePicker: 'Open time picker',
    closeTimePicker: 'Close time Picker',
    incrementValue: (type: string) => `Increment ${type}`,
    decrementValue: (type: string) => `Decrement ${type}`,
    openTpOverlay: (type: string) => `Open ${type} overlay`,
    amPmButton: 'Switch AM/PM mode',
    openYearsOverlay: 'Open years overlay',
    openMonthsOverlay: 'Open months overlay',
    nextMonth: 'Next month',
    prevMonth: 'Previous month',
    nextYear: 'Next year',
    prevYear: 'Previous year',
    day: undefined,
    weekDay: undefined,
    clearInput: 'Clear value',
    calendarIcon: 'Calendar icon',
    timePicker: 'Time picker',
    monthPicker: (overlay: boolean) => `Month picker${overlay ? ' overlay' : ''}`,
    yearPicker: (overlay: boolean) => `Year picker${overlay ? ' overlay' : ''}`,
    timeOverlay: (type: string) => `${type} overlay`,
};

export const defaultTransitions = {
    menuAppearTop: 'dp-menu-appear-top',
    menuAppearBottom: 'dp-menu-appear-bottom',
    open: 'dp-slide-down',
    close: 'dp-slide-up',
    next: 'calendar-next',
    previous: 'calendar-prev',
    vNext: 'dp-slide-up',
    vPrevious: 'dp-slide-down',
};

export const defaultFilters = {
    weekDays: [],
    months: [],
    years: [],
    times: { hours: [], minutes: [], seconds: [] },
};

export const defaultFormats = {
    month: 'LLL',
    year: 'yyyy',
    weekDay: 'EEEEEE',
    quarter: 'MMMM',
    day: 'd',
    input: undefined,
    preview: undefined,
};

export const defaultTime = {
    enableTimePicker: true,
    ignoreTimeValidation: false,
    enableSeconds: false,
    enableMinutes: true,
    is24: true,
    noHoursOverlay: false,
    noMinutesOverlay: false,
    noSecondsOverlay: false,
    hoursGridIncrement: 1,
    minutesGridIncrement: 5,
    secondsGridIncrement: 5,
    hoursIncrement: 1,
    minutesIncrement: 1,
    secondsIncrement: 1,
    timePickerInline: false,
    startTime: undefined,
};

export const basePropDefaults = {
    flowStep: 0,
    menuWrapRef: null,
    collapse: false,
};

export const propDefaults = {
    weekStart: WeekStart.Monday,
    yearRange: (): [number, number] => [1900, 2100],
    ui: () => ({}),
    locale: () => enUS,
    dark: false,
    transitions: true,
    hideNavigation: () => [],
    vertical: false,
    hideMonthYearSelect: false,
    disableYearSelect: false,
    autoApply: false,
    disabledDates: () => [],
    hideOffsetDates: false,
    noToday: false,
    markers: () => [],
    presetDates: () => [],
    preventMinMaxNavigation: false,
    reverseYears: false,
    weekPicker: false,
    arrowNavigation: false,
    monthPicker: false,
    yearPicker: false,
    quarterPicker: false,
    timePicker: false,
    modelAuto: false,
    multiDates: false,
    range: false,
    inline: false,
    sixWeeks: false,
    focusStartDate: false,
    yearFirst: false,
    loading: false,
    centered: false,
};

export const defaultInputAttrs = {
    name: undefined,
    required: false,
    autocomplete: 'off',
    state: undefined,
    clearable: true,
    alwaysClearable: false,
    hideInputIcon: false,
    id: undefined,
    inputmode: 'none',
};

export const defaultWeekNumbers = {
    type: 'local',
    hideOnOffsetDates: false,
    label: 'W',
};
