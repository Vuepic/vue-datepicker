import { useContext, useFormatter } from '@/composables';
import type { SelectItem } from '@/types';

export const useUtilsWithContext = () => {
    const { rootProps } = useContext();
    const { formatYear, formatMonth } = useFormatter();

    const getMonths = (): SelectItem[] => {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((month) => {
            return {
                text: formatMonth(month),
                value: month,
            };
        });
    };

    const getYears = (): SelectItem[] => {
        const years: SelectItem[] = [];
        for (let year = +rootProps.yearRange[0]; year <= +rootProps.yearRange[1]; year++) {
            years.push({ value: +year, text: formatYear(year) });
        }
        return rootProps.reverseYears ? years.reverse() : years;
    };

    const isOutOfYearRange = (year: number) => {
        return year < +rootProps.yearRange[0]! || year > +rootProps.yearRange[1]!;
    };

    return {
        getMonths,
        getYears,
        isOutOfYearRange,
    };
};
