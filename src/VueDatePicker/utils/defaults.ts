import type { AriaLabels, IFormat, ITransition, ITextInputOptions } from '@/interfaces';

export const mergeDefaultTransitions = (conf: Partial<ITransition>): ITransition =>
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

export const defaultTransitions = (transitions: boolean | ITransition): ITransition => {
    if (typeof transitions === 'boolean') {
        return transitions ? mergeDefaultTransitions({}) : (false as unknown as ITransition);
    }
    return mergeDefaultTransitions(transitions);
};

/**
 * Default options to merge with user provided ones
 */
export const getDefaultTextInputOptions = (): ITextInputOptions => ({
    enterSubmit: true,
    tabSubmit: true,
    openMenu: true,
    rangeSeparator: ' - ',
});
