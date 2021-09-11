import parse from 'date-fns/parse';
import format from 'date-fns/format';

interface IUseDateUtils {
    parseDate: (date: string) => Date;
    formatDate: (date: string | Date) => string;
    formatDateRange: (dates: string[] | Date[]) => string;
}

export const getDefaultPattern = (is24: boolean): string => {
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

    return { parseDate, formatDate, formatDateRange };
};
