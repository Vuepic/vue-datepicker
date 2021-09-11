import parse from 'date-fns/parse';
import format from 'date-fns/format';

interface IUseDateUtils {
    parseDate: (date: string) => Date;
    formatDate: (date: string | Date) => string;
    formatDateRange: (dates: string[] | Date[]) => string;
}

/**
 * Global hook with collection of functions for date manipulations
 */
export const useDateUtils = (pattern?: string | ((date: Date | Date[]) => string)): IUseDateUtils => {
    const formatPattern = typeof pattern === 'string' && pattern ? pattern : 'MM/dd/yyyy, hh:mm';

    const parseDate = (date: string): Date => {
        return parse(date, formatPattern, new Date());
    };

    const formatDate = (date: string | Date): string => {
        return format(new Date(date), formatPattern);
    };

    const formatDateRange = (dates: string[] | Date[]): string => {
        return `${formatDate(dates[0])} - ${formatDate(dates[1])}`;
    };

    return { parseDate, formatDate, formatDateRange };
};
