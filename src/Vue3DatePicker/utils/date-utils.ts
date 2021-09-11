import parse from 'date-fns/parse';
import format from 'date-fns/format';
import { IModelValueMonthPicker, IModelValueTimePicker } from '../interfaces';
import { isTimeValueValid } from './util';

interface IUseDateUtils {
    parseDate: (date: string) => Date;
    formatDate: (date: string | Date) => string;
    formatDateRange: (dates: string[] | Date[]) => string;
    formatMonth: (value: IModelValueMonthPicker) => string;
    formatTime: (value: IModelValueTimePicker | IModelValueTimePicker[]) => string;
}

export const getDefaultPattern = (is24: boolean, monthPicker: boolean, timePicker: boolean): string => {
    if (monthPicker) {
        return 'MM/yyyy';
    }
    if (timePicker) {
        return is24 ? 'HH:mm' : 'hh:mm aa';
    }
    return `MM/dd/yyyy, ${is24 ? 'HH:mm' : 'hh:mm aa'}`;
};

/**
 * Global hook with collection of functions for date manipulations
 */
export const useDateUtils = (pattern: string): IUseDateUtils => {
    const parseDate = (date: string): Date => {
        return parse(date, pattern, new Date());
    };

    const formatDate = (date: string | Date): string => {
        return format(new Date(date), pattern);
    };

    const formatDateRange = (dates: string[] | Date[]): string => {
        return `${formatDate(dates[0])} - ${formatDate(dates[1])}`;
    };

    const formatMonth = (month: IModelValueMonthPicker): string => {
        if (month && (month.month || month.month === 0) && month.year) {
            const date = new Date(month.year, month.month);

            return format(date, pattern);
        }
        return '';
    };

    const formatTime = (time: IModelValueTimePicker | IModelValueTimePicker[]): string => {
        if (Array.isArray(time)) {
            if (isTimeValueValid(time[0]) && isTimeValueValid(time[0])) {
                const dateOne = new Date();
                const dateTwo = new Date();
                dateOne.setHours(time[0].hours);
                dateTwo.setHours(time[1].hours);
                dateOne.setMinutes(time[0].minutes);
                dateTwo.setMinutes(time[1].minutes);

                return `${format(dateOne, pattern)} - ${format(dateTwo, pattern)}`;
            }
            return '';
        }
        if (isTimeValueValid(time)) {
            const date = new Date();
            date.setHours(time.hours);
            date.setMinutes(time.minutes);

            return format(date, pattern);
        }
        return '';
    };

    return { parseDate, formatDate, formatDateRange, formatMonth, formatTime };
};
