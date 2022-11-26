import type { AriaLabels, IFormat, Transition, TextInputOptions, DateFilter } from '@/interfaces';

export const mergeDefaultTransitions = (conf: Partial<Transition>): Transition =>
    Object.assign(
        {
            menuAppear: 'dp-menu-appear',
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
            day: () => '',
        },
        labels,
    );
};

export const defaultMultiCalendars = (multiCalendars: boolean | string | number | null): number => {
    if (multiCalendars === null) return 0;
    if (typeof multiCalendars === 'boolean') return multiCalendars ? 2 : 0;
    return +multiCalendars >= 2 ? +multiCalendars : 2;
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
