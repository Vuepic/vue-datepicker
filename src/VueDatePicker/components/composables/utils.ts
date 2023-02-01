import { computed } from 'vue';
import {
    addDays,
    endOfWeek,
    format,
    getDay,
    getHours,
    getMinutes,
    getMonth,
    getSeconds,
    getYear,
    isAfter,
    isBefore,
    isEqual,
    isValid,
    parseISO,
    set,
    setMonth,
    setYear,
    startOfWeek,
} from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz/esm';
import { errors, convertType } from '@/utils/util';

import type {
    DateValue,
    Flow,
    TimeModel,
    WeekStartNum,
    InternalModuleValue,
    ICalendarDate,
    ICalendarDay,
} from '@/interfaces';
import type { AllPropsType } from '@/utils/props';
import {
    defaultAriaLabels,
    defaultMultiCalendars,
    defaultPreviewFormat,
    defaultTransitions,
    getDefaultTextInputOptions,
    getDefaultFilters,
} from '@/utils/defaults';
import { getDate, isDateAfter, isDateBefore, isDateEqual, resetDateTime } from '@/utils/date-utils';

// Instead of using everywhere new Date(), this is the central place for getting or parsing the date

export const useUtils = (props: AllPropsType) => {
    // Check for partial range enabled on null value as second item in the array
    const checkPartialRangeValue = (): Date => {
        if (props.partialRange) return null as unknown as Date;
        throw new Error(errors.prop('partial-range'));
    };

    const defaults = computed(() => ({
        ariaLabels: defaultAriaLabels(props.ariaLabels),
        textInputOptions: Object.assign(getDefaultTextInputOptions(), props.textInputOptions),
        multiCalendars: defaultMultiCalendars(props.multiCalendars),
        previewFormat: defaultPreviewFormat(props.previewFormat, props.format, getDefaultPattern()),
        filters: getDefaultFilters(props.filters),
        transitions: defaultTransitions(props.transitions),
        startTime: getDefaultStartTime(),
    }));

    // Execute some code depending on the range prop, if not, throw error
    const checkRangeEnabled = <T>(fn: () => T): T => {
        if (props.range) return fn();
        throw new Error(errors.prop('range'));
    };

    // Shared method for time format
    const getTimeFormat = (): string => {
        const seconds = props.enableSeconds ? ':ss' : '';
        return props.is24 ? `HH:mm${seconds}` : `hh:mm${seconds} aa`;
    };

    // Get default format pattern, returns user specified if defined first
    const getDefaultPattern = (): string => {
        if (props.format) return props.format as string;
        if (props.monthPicker) return 'MM/yyyy';
        if (props.timePicker) return getTimeFormat();
        if (props.weekPicker) return 'MM/dd/yyyy';
        if (props.yearPicker) return 'yyyy';
        return props.enableTimePicker ? `MM/dd/yyyy, ${getTimeFormat()}` : 'MM/dd/yyyy';
    };

    // Format date to a  human-readable output
    const formatDate = (value: Date | Date[], customPattern?: string) => {
        if (typeof props.format === 'function') return props.format(value);
        const pattern = customPattern || getDefaultPattern();
        const options = props.formatLocale ? { locale: props.formatLocale } : undefined;

        if (Array.isArray(value)) {
            return `${format(value[0], pattern, options)} ${
                props.modelAuto && !value[1] ? '' : defaults.value.textInputOptions.rangeSeparator || '-'
            } ${value[1] ? format(value[1], pattern, options) : ''}`;
        }

        return format(value, pattern, options);
    };

    // Converts utc date to a timezone date
    const getZonedDate = (date: Date): Date => {
        return props.timezone ? utcToZonedTime(date, props.timezone) : date;
    };

    // Convert zoned date back to utc date
    const getZonedToUtc = (date: Date): Date => {
        return props.timezone ? zonedTimeToUtc(date, props.timezone) : date;
    };

    const hideNavigationButtons = computed(() => (key: Flow) => {
        return props.hideNavigation?.includes(key);
    });

    const validateDate = (date: Date) => {
        const aboveMax = props.maxDate ? isDateAfter(getZonedDate(date), getZonedDate(getDate(props.maxDate))) : false;
        const bellowMin = props.minDate
            ? isDateBefore(getZonedDate(date), getZonedDate(getDate(props.minDate)))
            : false;
        const inDisableArr = matchDate(date, props.disabledDates);
        const disabledMonths = defaults.value.filters.months.map((month) => +month);
        const inDisabledMonths = disabledMonths.includes(getMonth(date));
        const weekDayDisabled = props.disabledWeekDays.length
            ? props.disabledWeekDays.some((day) => +day === getDay(date))
            : false;
        const notInSpecific = props.allowedDates.length
            ? !props.allowedDates.some((dateVal) => isDateEqual(getZonedDate(getDate(dateVal)), getZonedDate(date)))
            : false;

        const dateYear = getYear(date);

        const outOfYearRange = dateYear < +props.yearRange[0] || dateYear > +props.yearRange[1];

        return !(
            aboveMax ||
            bellowMin ||
            inDisableArr ||
            inDisabledMonths ||
            outOfYearRange ||
            weekDayDisabled ||
            notInSpecific
        );
    };

    const assignDefaultTime = (obj: TimeModel): TimeModel => {
        const defaultTime = {
            hours: getHours(getDate()),
            minutes: getMinutes(getDate()),
            seconds: getSeconds(getDate()),
        };
        return Object.assign(defaultTime, obj);
    };

    const getDefaultStartTime = (): TimeModel | TimeModel[] | null => {
        if (props.range) {
            if (props.startTime && Array.isArray(props.startTime)) {
                return [assignDefaultTime(props.startTime[0]), assignDefaultTime(props.startTime[1])];
            }
            return null;
        }
        return props.startTime && !Array.isArray(props.startTime) ? assignDefaultTime(props.startTime) : null;
    };

    /**
     * Check if date is between max and min date, or if it is included in filters
     */
    const isDisabled = (date: Date): boolean => {
        return !validateDate(date);
    };

    const isValidDate = (value: Date | Date[] | null): boolean => {
        if (Array.isArray(value)) {
            return isValid(value[0]) && (value[1] ? isValid(value[1]) : true);
        }
        return value ? isValid(value) : false;
    };

    const sanitizeDate = (date: Date | string): Date | string => {
        if (date instanceof Date) {
            return date;
        }
        return parseISO(date);
    };

    const getWeekFromDate = (date: Date): [Date, Date] => {
        const start = startOfWeek(getZonedDate(date), { weekStartsOn: +props.weekStart as WeekStartNum });
        const end = endOfWeek(getZonedDate(date), { weekStartsOn: +props.weekStart as WeekStartNum });
        return [start, end];
    };

    const matchDate = (date: Date, pattern: Date[] | string[] | number[] | ((date: Date) => boolean)): boolean => {
        if (Array.isArray(pattern)) {
            return pattern.some((includedDate) => isDateEqual(getZonedDate(getDate(includedDate)), getZonedDate(date)));
        }
        return pattern(date);
    };

    const setDateMonthOrYear = (date: DateValue, month?: number | null, year?: number | null): Date => {
        let dateCopy = date ? getDate(date) : getDate();
        if (month || month === 0) {
            dateCopy = setMonth(dateCopy, month);
        }
        if (year) {
            dateCopy = setYear(dateCopy, year);
        }
        return dateCopy;
    };

    // Returns a getDate object with a set of time from a provided date
    const setTimeValue = (date: Date): Date =>
        set(getDate(), { hours: getHours(date), minutes: getMinutes(date), seconds: getSeconds(date) });

    const getMinMaxTime = (time: TimeModel): Date => {
        return set(getDate(), {
            hours: +time.hours || 0,
            minutes: +time.minutes || 0,
            seconds: +time.seconds || 0,
        });
    };

    /**
     * Depending on the time or full date validation, validate if the selected time is valid
     * Extracted logic from isValidTime fn
     */
    const validateTime = (date: Date | null, dateToCompare: Date, compare: 'max' | 'min', full: boolean): boolean => {
        if (!date) return true;
        if (full) {
            const valid = compare === 'max' ? isBefore(date, dateToCompare) : isAfter(date, dateToCompare);
            const setOptions = { seconds: 0, milliseconds: 0 };
            return valid || isEqual(set(date, setOptions), set(dateToCompare, setOptions));
        }
        return compare === 'max'
            ? date.getTime() <= dateToCompare.getTime()
            : date.getTime() >= dateToCompare.getTime();
    };

    // Check if we need to do a time validation
    const skipTimeValidation = () => {
        return !props.enableTimePicker || props.monthPicker || props.yearPicker || props.ignoreTimeValidation;
    };

    // Return set time for a given date or array of dates
    const getSetTimeValue = (date: Date | Date[]) => {
        if (Array.isArray(date)) {
            return [date[0] ? setTimeValue(date[0]) : null, date[1] ? setTimeValue(date[1]) : null];
        }
        return setTimeValue(date);
    };

    // Extracted validation function that will check time based on maxTime or maxDate
    const checkTimeMax = (selectedDateTime: Date | Date[]) => {
        const max = props.maxTime ? getMinMaxTime(props.maxTime) : getDate(props.maxDate);
        if (Array.isArray(selectedDateTime)) {
            return (
                validateTime(selectedDateTime[0], max, 'max', !!props.maxDate) &&
                validateTime(selectedDateTime[1], max, 'max', !!props.maxDate)
            );
        }
        return validateTime(selectedDateTime, max, 'max', !!props.maxDate);
    };

    // Extracted validation function that will check time based on minTime or minDate
    const checkTimeMin = (selectedDateTime: Date | Date[], isValid: boolean) => {
        const min = props.minTime ? getMinMaxTime(props.minTime) : getDate(props.minDate);
        if (Array.isArray(selectedDateTime)) {
            return (
                validateTime(selectedDateTime[0], min, 'min', !!props.minDate) &&
                validateTime(selectedDateTime[1], min, 'min', !!props.minDate) &&
                isValid
            );
        }
        return validateTime(selectedDateTime, min, 'min', !!props.minDate) && isValid;
    };

    // Validate time
    const isValidTime = (date: InternalModuleValue): boolean => {
        let isValid = true;
        if (!date) return true;
        if (skipTimeValidation()) return true;

        const selectedDateTime = !props.minDate && !props.maxDate ? getSetTimeValue(date) : date;

        if (props.maxTime || props.maxDate) {
            isValid = checkTimeMax(convertType(selectedDateTime));
        }

        if (props.minTime || props.minDate) {
            isValid = checkTimeMin(convertType(selectedDateTime), isValid);
        }
        return isValid;
    };

    // Get 7 days from the provided start date, month is used to check whether the date is from the specified month or in the offset
    const getWeekDays = (startDay: Date, month: number): ICalendarDay[] => {
        const startDate = getDate(JSON.parse(JSON.stringify(startDay)));
        const dates = [];
        for (let i = 0; i < 7; i++) {
            const next = addDays(startDate, i);
            const isNext = getMonth(next) !== month;
            dates.push({
                text: props.hideOffsetDates && isNext ? '' : next.getDate(),
                value: next,
                current: !isNext,
                classData: {},
            });
        }
        return dates;
    };

    // Get days for the calendar to be displayed in a table grouped by weeks
    const getCalendarDays = (month: number, year: number): ICalendarDate[] => {
        const weeks: ICalendarDate[] = [];
        const firstDate = getDate(getZonedDate(new Date(year, month)));
        const lastDate = getDate(getZonedDate(new Date(year, month + 1, 0)));

        const firstDateInCalendar = startOfWeek(firstDate, { weekStartsOn: props.weekStart as WeekStartNum });

        const addDaysToWeek = (date: Date) => {
            const days = getWeekDays(date, month);
            weeks.push({ days });
            if (
                !weeks[weeks.length - 1].days.some((day) =>
                    isDateEqual(resetDateTime(day.value), resetDateTime(lastDate)),
                )
            ) {
                const nextDate = addDays(date, 7);
                addDaysToWeek(nextDate);
            }
        };
        addDaysToWeek(firstDateInCalendar);

        if (props.sixWeeks && weeks.length < 6) {
            const diff = 6 - weeks.length;
            for (let i = 1; i <= diff; i++) {
                const lastWeek = weeks[weeks.length - 1];
                const last = lastWeek.days[lastWeek.days.length - 1];
                const days = getWeekDays(addDays(last.value, 1), getMonth(firstDate));
                weeks.push({ days });
            }
        }

        return weeks;
    };

    const getDateForCompare = (date: Date | string, month: number, year: number): [Date, Date] => {
        return [set(getDate(date), { date: 1 }), set(getDate(), { month, year, date: 1 })];
    };

    const validateMinDate = (month: number, year: number): boolean => {
        return (
            isDateBefore(...getDateForCompare(props.minDate, month, year)) ||
            isDateEqual(...getDateForCompare(props.minDate, month, year))
        );
    };

    const validateMaxDate = (month: number, year: number): boolean => {
        return (
            isDateAfter(...getDateForCompare(props.maxDate, month, year)) ||
            isDateEqual(...getDateForCompare(props.maxDate, month, year))
        );
    };

    const validateBothMinAndMax = (month: number, year: number, isNext: boolean) => {
        let valid = false;
        if (props.maxDate && isNext && validateMaxDate(month, year)) {
            valid = true;
        }
        if (props.minDate && !isNext && validateMinDate(month, year)) {
            valid = true;
        }
        return valid;
    };

    const validateMonthYearInRange = (month: number, year: number, isNext: boolean, preventNav: boolean): boolean => {
        let valid = false;
        if (preventNav) {
            if (props.minDate && props.maxDate) {
                valid = validateBothMinAndMax(month, year, isNext);
            } else if (props.minDate && validateMinDate(month, year)) {
                valid = true;
            } else if (props.maxDate && validateMaxDate(month, year)) {
                valid = true;
            }
        } else {
            valid = true;
        }
        return valid;
    };

    return {
        checkPartialRangeValue,
        checkRangeEnabled,
        getZonedDate,
        getZonedToUtc,
        formatDate,
        getDefaultPattern,
        validateDate,
        getDefaultStartTime,
        isDisabled,
        isValidDate,
        sanitizeDate,
        getWeekFromDate,
        matchDate,
        setDateMonthOrYear,
        isValidTime,
        getCalendarDays,
        validateMonthYearInRange,
        validateMaxDate,
        validateMinDate,
        defaults,
        hideNavigationButtons,
    };
};
