import { PICKER_MODE } from '@packages/constants';
import type {
    FormatProp,
    TimeOptions,
    TimeProp,
    WeekNumbersProp,
    WeekNumbersOpts,
    FilterProp,
    TextInputOptionsProp,
} from '@packages/types';

export const useDefaults = () => {
    const getDefaultTextInputOptions = (
        textInput: Partial<TextInputOptionsProp> | boolean,
    ): TextInputOptionsProp & { enabled: boolean } => {
        const defaultOptions = {
            enterSubmit: true,
            tabSubmit: true,
            openMenu: 'open',
            selectOnFocus: false,
            rangeSeparator: ' - ',
            escClose: true,
            clearable: true,
        };

        if (typeof textInput === 'object') {
            return { ...defaultOptions, ...(textInput ?? {}), enabled: true };
        }
        return { ...defaultOptions, enabled: textInput };
    };

    const getTimeFormat = (opts: TimeOptions): string => {
        const { enableSeconds, enableMinutes, is24 } = opts;
        const seconds = enableSeconds ? ':ss' : '';
        const minutes = enableMinutes ? ':mm' : '';
        return is24 ? `HH${minutes}${seconds}` : `hh${minutes}${seconds} aa`;
    };

    const getDefaultPattern = (mode: PICKER_MODE, format: FormatProp, time: TimeProp, weekNumbers: WeekNumbersProp) => {
        const timeOptions = getDefaultTimeOptions(time);
        const defaultWeekNumbers = getDefaultWeekNumbers(weekNumbers);

        if (format && typeof format === 'string') return format;
        if (mode === PICKER_MODE.MONTH_PICKER) return 'MM/yyyy';
        if (mode === PICKER_MODE.TIME_PICKER) return getTimeFormat(timeOptions);
        if (mode === PICKER_MODE.WEEK_PICKER) return `${defaultWeekNumbers.type === 'iso' ? 'II' : 'ww'}-RR`;
        if (mode === PICKER_MODE.YEAR_PICKER) return 'yyyy';
        if (mode === PICKER_MODE.QUARTER_PICKER) return 'QQQ/yyyy';
        return timeOptions.enabled ? `MM/dd/yyyy, ${getTimeFormat(timeOptions)}` : 'MM/dd/yyyy';
    };

    const getDefaultTimeOptions = (opts: TimeProp): TimeOptions & { enabled: boolean } => {
        const defaultOptions = {
            is24: true,
            enableMinutes: true,
            enableSeconds: true,
            startTime: undefined,
        };
        if (typeof opts === 'object') {
            return { ...defaultOptions, ...(opts ?? {}), enabled: true };
        }
        return { ...defaultOptions, enabled: opts };
    };

    const getDefaultWeekNumbers = (weekNumbers: WeekNumbersProp): WeekNumbersOpts => {
        if (typeof weekNumbers === 'object') {
            return {
                type: weekNumbers?.type ?? 'local',
                hideOnOffsetDates: weekNumbers?.hideOnOffsetDates ?? false,
            };
        }
        return {
            type: weekNumbers,
            hideOnOffsetDates: false,
        };
    };

    const getDefaultStartTime = (isRange: boolean, time: TimeProp) => {
        const { startTime } = getDefaultTimeOptions(time);
        if (isRange && startTime && Array.isArray(startTime)) {
            return startTime.map((time) => assignTime(time));
        }
        return startTime ? assignTime(startTime) : assignTime({});
    };

    const getDefaultFilters = (filters: Partial<FilterProp> | undefined): FilterProp => ({
        months: [],
        years: [],
        times: { hours: [], minutes: [], seconds: [] },
        ...(filters ?? {}),
    });

    return {
        getDefaultTextInputOptions,
        getDefaultPattern,
        getDefaultStartTime,
        getDefaultFilters,
    };
};

import { assignTime } from '@packages/utils/date.ts';
