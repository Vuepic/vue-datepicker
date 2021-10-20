import { IMonthYearHook, UseMonthYearPick, VueEmit } from '../../interfaces';

export const useMontYearPick = (props: UseMonthYearPick, emit: VueEmit): IMonthYearHook => {
    const months = props.months.map((month) => month.value);
    const years = props.years.map((year) => year.value);
    const excludedMonths = months.filter((month: number) => !props.filters.months.some((mon: number) => mon === month));
    const excludedYears = years.filter((year: number) => !props.filters.years.some((yr: number) => yr === year));

    const onNext = (): void => {
        let tempMonth;
        let month = props.month;
        let year = props.year;
        if (props.month === 11) {
            month = 0;
            year = props.year + 1;
        } else {
            month += 1;
        }
        if (props.filters.months.includes(month)) {
            if (month === 0) {
                month = Math.min(...excludedMonths);
            } else {
                month = Math.max(...excludedMonths);
            }
            tempMonth = month;
        }
        if (month === tempMonth) {
            month = Math.min(...excludedMonths);
            year = props.year + 1;
        }
        if (props.filters.years.includes(year)) {
            const foundYear = excludedYears.find((availableYear: number) => availableYear > year);
            if (foundYear) {
                year = foundYear;
            }
        }
        if (year <= years[years.length - 1]) {
            updateMonthYear(month, year);
        }
    };

    const onPrev = (): void => {
        let tempMonth;
        let month = props.month;
        let year = props.year;
        if (props.month === 0) {
            month = 11;
            year = props.year - 1;
        } else {
            month -= 1;
        }
        if (props.filters.months.includes(month)) {
            if (month === 11) {
                month = Math.max(...excludedMonths);
            } else {
                month = Math.min(...excludedMonths);
            }
            tempMonth = month;
        }
        if (month === tempMonth) {
            month = Math.max(...excludedMonths);
            year = props.year - 1;
        }
        if (props.filters.years.includes(year)) {
            const foundYear = excludedYears.reverse().find((availableYear: number) => availableYear < year);
            if (foundYear) {
                year = foundYear;
            }
        }
        if (year >= years[0]) {
            updateMonthYear(month, year);
        }
    };

    const updateMonthYear = (month: number, year: number): void => {
        emit('update:month', month);
        emit('update:year', year);
    };

    return { onNext, onPrev };
};
