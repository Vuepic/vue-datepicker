import {
    addDays,
    eachDayOfInterval,
    endOfWeek,
    format,
    getHours,
    getMinutes,
    getMonth,
    getSeconds,
    getYear,
    isAfter,
    isBefore,
    isEqual,
    set,
    startOfMonth,
    startOfWeek,
    subDays,
    type Duration,
    type Day,
} from 'date-fns';
import type {
    HighlightConfig,
    HighlightFn,
    InternalModelValue,
    MaybeDate,
    Numeric,
    OverlayGridItem,
    SelectItem,
    TimeKey,
    TimeModel,
    TimeObj,
} from '@/types';
import { useHelperFns } from '@/composables/useHelperFns.ts';
import { useContext } from '@/composables/useContext.ts';

export const useDateUtils = () => {
    const { getDate } = useContext();
    const { getMapDate, getGroupedList } = useHelperFns();

    const resetDateTime = (date: MaybeDate, fromStartOfMonth?: boolean): Date => {
        if (!date) return getDate();
        const dateParse = getDate(date);
        const timeReset = set(dateParse, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
        return fromStartOfMonth ? startOfMonth(timeReset) : timeReset;
    };

    const setTime = (time: Partial<{ hours: Numeric; minutes: Numeric; seconds: Numeric }>, dateToSet?: MaybeDate) => {
        const date = getDate(dateToSet);
        return set(date, {
            hours: +(time.hours ?? getHours(date)),
            minutes: +(time.minutes ?? getMinutes(date)),
            seconds: +(time.seconds ?? getSeconds(date)),
            milliseconds: 0,
        });
    };

    const getWeekFromDate = (date: Date, weekStart: string | number): [Date, Date] => {
        const start = startOfWeek(date, { weekStartsOn: +weekStart as Day });
        const end = endOfWeek(date, { weekStartsOn: +weekStart as Day });
        return [start, end];
    };

    const isDateBefore = (date: MaybeDate, dateToCompare: MaybeDate): boolean => {
        if (!date || !dateToCompare) {
            return false;
        }
        return isBefore(resetDateTime(date), resetDateTime(dateToCompare));
    };

    const isDateEqual = (date: MaybeDate, dateToCompare: MaybeDate): boolean => {
        if (!date || !dateToCompare) {
            return false;
        }
        return isEqual(resetDateTime(date), resetDateTime(dateToCompare));
    };

    const isDateAfter = (date: MaybeDate, dateToCompare: MaybeDate): boolean => {
        if (!date || !dateToCompare) {
            return false;
        }
        return isAfter(resetDateTime(date), resetDateTime(dateToCompare));
    };

    const isDateBetween = (range: Date[], hoverDate: Date | null, dateToCheck: Date): boolean => {
        if (range?.[0] && range?.[1]) {
            return isDateAfter(dateToCheck, range[0]) && isDateBefore(dateToCheck, range[1]);
        }
        if (range?.[0] && hoverDate) {
            return (
                (isDateAfter(dateToCheck, range[0]) && isDateBefore(dateToCheck, hoverDate)) ||
                (isDateBefore(dateToCheck, range[0]) && isDateAfter(dateToCheck, hoverDate))
            );
        }
        return false;
    };

    const getDaysInBetween = (dateOne: Date, dateTwo: Date) => {
        // Check if selection is backwards
        const start = isDateAfter(dateOne, dateTwo) ? dateTwo : dateOne;
        const end = isDateAfter(dateTwo, dateOne) ? dateTwo : dateOne;
        return eachDayOfInterval({ start, end });
    };

    const getCellId = (date: Date) => {
        return `dp-${format(date, 'yyyy-MM-dd')}`;
    };

    const resetDate = (date: MaybeDate) => {
        return resetDateTime(set(getDate(date), { date: 1 }));
    };

    const getMinMonth = (year: number, minDate?: MaybeDate) => {
        if (minDate) {
            const minYear = getYear(getDate(minDate));
            if (minYear > year) return 12;
            if (minYear === year) return getMonth(getDate(minDate));
        }
    };

    const getMaxMonth = (year: number, maxDate?: MaybeDate) => {
        if (maxDate) {
            const maxYear = getYear(getDate(maxDate));
            if (maxYear < year) return -1;
            if (maxYear === year) return getMonth(getDate(maxDate));
            return undefined;
        }
        return undefined;
    };

    const getYearFromDate = (date: MaybeDate) => {
        if (date) return getYear(getDate(date));
        return undefined;
    };

    const getTimeObj = (date: Date): TimeObj => {
        return {
            hours: getHours(date),
            minutes: getMinutes(date),
            seconds: getSeconds(date),
        };
    };

    const setTimeValue = (date: Date): Date => set(getDate(), getTimeObj(date));

    const sanitizeTime = (time: TimeModel, type?: TimeKey, value?: number): Duration => {
        if (type && (value || value === 0)) {
            return Object.fromEntries(
                (['hours', 'minutes', 'seconds'] as TimeKey[]).map((timeType) => {
                    if (timeType === type) return [timeType, value];
                    return [timeType, Number.isNaN(+time[timeType]!) ? undefined : +time[timeType]!];
                }),
            );
        }
        return {
            hours: Number.isNaN(+time.hours) ? undefined : +time.hours,
            minutes: Number.isNaN(+time.minutes) ? undefined : +time.minutes,
            seconds: Number.isNaN(+(time.seconds ?? '')) ? undefined : +time.seconds!,
        };
    };

    const getBeforeAndAfterInRange = (range: number, date: Date) => {
        const before = subDays(resetDateTime(date), range);
        const after = addDays(resetDateTime(date), range);
        return { before, after };
    };

    const isModelAuto = (modelValue: InternalModelValue): boolean => {
        if (Array.isArray(modelValue)) {
            return !!modelValue[0] && !!modelValue[1];
        }
        return false;
    };

    const matchDate = (date: Date, mapOrFn: Map<string, any> | ((date: Date) => boolean) | null) => {
        if (!date) return true;
        if (!mapOrFn) return false;
        if (mapOrFn instanceof Map) {
            return !!getMapDate(date, mapOrFn);
        }
        return mapOrFn(getDate(date));
    };

    const checkHighlightMonth = (defaultedHighlight: HighlightConfig | HighlightFn, month: number, year: number) => {
        return typeof defaultedHighlight === 'function'
            ? defaultedHighlight({ month: month, year })
            : defaultedHighlight.months.some((value) => value.month === month && value.year === year);
    };

    const checkHighlightYear = (defaultedHighlight: HighlightConfig | HighlightFn, year: number) => {
        return typeof defaultedHighlight === 'function'
            ? defaultedHighlight(year)
            : defaultedHighlight.years.includes(year);
    };

    const groupListAndMap = (
        list: SelectItem[],
        cb: (item: SelectItem) => {
            active: boolean;
            disabled: boolean;
            highlighted?: boolean;
            isBetween?: boolean;
        },
    ): OverlayGridItem[][] => {
        return getGroupedList(list).map((items) => {
            return items.map((item) => {
                const { active, disabled, isBetween, highlighted } = cb(item);
                return {
                    ...item,
                    active,
                    disabled: disabled,
                    className: {
                        dp__overlay_cell_active: active,
                        dp__overlay_cell: !active,
                        dp__overlay_cell_disabled: disabled,
                        dp__overlay_cell_pad: true,
                        dp__overlay_cell_active_disabled: disabled && active,
                        dp__cell_in_between: isBetween,
                        'dp--highlighted': highlighted,
                    },
                };
            });
        });
    };

    return {
        resetDateTime,
        groupListAndMap,
        setTime,
        getWeekFromDate,
        isDateAfter,
        isDateBefore,
        isDateBetween,
        isDateEqual,
        getDaysInBetween,
        getCellId,
        resetDate,
        getMinMonth,
        getMaxMonth,
        getYearFromDate,
        getTimeObj,
        setTimeValue,
        sanitizeTime,
        getBeforeAndAfterInRange,
        isModelAuto,
        matchDate,
        checkHighlightMonth,
        checkHighlightYear,
    };
};
