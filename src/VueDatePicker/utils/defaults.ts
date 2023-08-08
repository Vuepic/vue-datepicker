import type {
    AriaLabels,
    IFormat,
    Transition,
    TextInputOptions,
    DateFilter,
    ActionRowData,
    MultiCalendarsProp,
    MultiCalendarsOptions,
    OptionEnabled,
} from '@/interfaces';

export const mergeDefaultTransitions = (conf: Partial<Transition>): Transition =>
    Object.assign(
        {
            menuAppearTop: 'dp-menu-appear-top',
            menuAppearBottom: 'dp-menu-appear-bottom',
            open: 'dp-slide-down',
            close: 'dp-slide-up',
            next: 'calendar-next',
            previous: 'calendar-prev',
            vNext: 'dp-slide-up',
            vPrevious: 'dp-slide-down',
        },
        conf,
    );

export const defaultAriaLabels = (labels: Partial<AriaLabels>): AriaLabels => {
    return Object.assign(
        {
            toggleOverlay: 'Toggle overlay',
            menu: 'Datepicker menu',
            input: 'Datepicker input',
            calendarWrap: 'Calendar wrapper',
            calendarDays: 'Calendar days',
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
            day: () => '',
        },
        labels,
    );
};

const getMultiCalendarsCount = (option: OptionEnabled) => {
    if (!option) return 0;
    if (typeof option === 'boolean') return option ? 2 : 0;
    return +option >= 2 ? +option : 2;
};

export const defaultMultiCalendars = (multiCalendars: MultiCalendarsProp): MultiCalendarsOptions => {
    const option = Array.isArray(multiCalendars) ? multiCalendars[0] : multiCalendars;
    const addOptions = Array.isArray(multiCalendars) ? multiCalendars[1] : {};
    const count = getMultiCalendarsCount(option);

    return {
        count,
        static: true,
        solo: false,
        ...(addOptions ? addOptions : {}),
    };
};

export const defaultPreviewFormat = (
    previewFormat: IFormat,
    format: IFormat,
    defaultPattern: string | ((val: Date) => string),
): IFormat => {
    if (!previewFormat) {
        return typeof defaultPattern === 'string' ? defaultPattern : format;
    }
    return previewFormat;
};

export const defaultTransitions = (transitions: boolean | Partial<Transition>): Transition => {
    if (typeof transitions === 'boolean') {
        return transitions ? mergeDefaultTransitions({}) : (false as unknown as Transition);
    }
    return mergeDefaultTransitions(transitions);
};

/**
 * Default options to merge with user provided ones
 */
export const getDefaultTextInputOptions = (): TextInputOptions => ({
    enterSubmit: true,
    tabSubmit: true,
    openMenu: true,
    rangeSeparator: ' - ',
});

/**
 * Default filters to merge with user provided values
 */
export const getDefaultFilters = (filters: Partial<DateFilter>): DateFilter =>
    Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, filters);

export const getDefaultActionRowData = (actionRow: Partial<ActionRowData>): ActionRowData =>
    Object.assign({ showSelect: true, showCancel: true, showNow: false, showPreview: true }, actionRow);
