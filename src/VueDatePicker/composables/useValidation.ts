import { computed } from 'vue';
import {
    addMonths,
    differenceInCalendarDays,
    eachDayOfInterval,
    getDay,
    getHours,
    getMinutes,
    getMonth,
    getYear,
    isAfter,
    isBefore,
    isEqual,
    isValid,
    set,
    subMonths,
} from 'date-fns';

import { useContext, useDateUtils, useHelperFns } from '@/composables';
import type { DisabledTimesFn, InternalModelValue, MaybeDate, OptionalDate, TimeModel } from '@/types';

export const useValidation = () => {
    const {
        defaults: { safeDates, range, multiDates, filters, timeConfig },
        rootProps,
        getDate,
    } = useContext();
    const { getMapKeyType, getMapDate, errorMapper, convertType } = useHelperFns();
    const { isDateBefore, isDateAfter, isDateEqual, resetDate, getDaysInBetween, setTimeValue, getTimeObj, setTime } =
        useDateUtils();

    const isDateDisabled = (date: Date) => {
        if (!safeDates.value.disabledDates) return false;
        if (typeof safeDates.value.disabledDates === 'function') return safeDates.value.disabledDates(getDate(date));
        return !!getMapDate(date, safeDates.value.disabledDates);
    };

    const validateAboveMax = (date: Date) => {
        if (!safeDates.value.maxDate) return false;
        if (rootProps.yearPicker) return getYear(date) > getYear(safeDates.value.maxDate);
        return isDateAfter(date, safeDates.value.maxDate);
    };

    const validateBellowMin = (date: Date) => {
        if (!safeDates.value.minDate) return false;
        if (rootProps.yearPicker) return getYear(date) < getYear(safeDates.value.minDate);
        return isDateBefore(date, safeDates.value.minDate);
    };

    const validateDate = (date: Date | null | undefined) => {
        if (!date) return false;
        const aboveMax = validateAboveMax(date);
        const bellowMin = validateBellowMin(date);
        const isDisabled = isDateDisabled(date);

        const disabledMonths = filters.value.months.map((month) => +month);
        const inDisabledMonths = disabledMonths.includes(getMonth(date));
        const weekDayDisabled = filters.value.weekDays?.length
            ? filters.value.weekDays.some((day) => +day === getDay(date))
            : false;

        const notInSpecific = checkAllowedDates(date);

        const dateYear = getYear(date);

        const outOfYearRange = dateYear < +rootProps.yearRange[0] || dateYear > +rootProps.yearRange[1];

        return !(
            aboveMax ||
            bellowMin ||
            isDisabled ||
            inDisabledMonths ||
            outOfYearRange ||
            weekDayDisabled ||
            notInSpecific
        );
    };

    const validateMinDate = (month: number, year: number): boolean => {
        return (
            isDateBefore(...getDateForCompare(safeDates.value.minDate, month, year)) ||
            isDateEqual(...getDateForCompare(safeDates.value.minDate, month, year))
        );
    };

    const validateMaxDate = (month: number, year: number): boolean => {
        return (
            isDateAfter(...getDateForCompare(safeDates.value.maxDate, month, year)) ||
            isDateEqual(...getDateForCompare(safeDates.value.maxDate, month, year))
        );
    };

    const validateBothMinAndMax = (month: number, year: number, isNext: boolean) => {
        let valid = false;
        if (safeDates.value.maxDate && isNext && validateMaxDate(month, year)) {
            valid = true;
        }
        if (safeDates.value.minDate && !isNext && validateMinDate(month, year)) {
            valid = true;
        }
        return valid;
    };

    const validateMonthYearInRange = (month: number, year: number, isNext: boolean, preventNav: boolean): boolean => {
        let valid = false;
        if (preventNav && (safeDates.value.minDate || safeDates.value.maxDate)) {
            if (safeDates.value.minDate && safeDates.value.maxDate) {
                valid = validateBothMinAndMax(month, year, isNext);
            } else if (safeDates.value.minDate && validateMinDate(month, year)) {
                valid = true;
            } else if (safeDates.value.maxDate && validateMaxDate(month, year)) {
                valid = true;
            }
        } else {
            valid = true;
        }
        return valid;
    };

    const checkAllowedDates = (date: Date) => {
        if (Array.isArray(safeDates.value.allowedDates) && !safeDates.value.allowedDates.length) return true;
        if (safeDates.value.allowedDates) {
            return !getMapDate(
                date,
                safeDates.value.allowedDates,
                getMapKeyType(rootProps.monthPicker, rootProps.yearPicker),
            );
        }
        return false;
    };

    /**
     * Check if date is between max and min date, or if it is included in filters
     */
    const isDisabled = (date: Date): boolean => {
        return !validateDate(date);
    };

    // Check if there are disabled dates for a given range
    const isDateRangeAllowed = (pickedRange: Date[]): boolean => {
        if (range.value.noDisabledRange) {
            const datesInBetween = eachDayOfInterval({ start: pickedRange[0]!, end: pickedRange[1]! });
            return !datesInBetween.some((date) => isDisabled(date));
        }
        return true;
    };
    const isValidYear = (val: MaybeDate) => {
        if (val) {
            const activeYear = getYear(val);
            return activeYear >= +rootProps.yearRange[0] && activeYear <= rootProps.yearRange[1];
        }
        return true;
    };

    const shouldCheckMinMaxRange = (modelValue: InternalModelValue, index: number): modelValue is Array<Date> => {
        return Boolean(
            Array.isArray(modelValue) &&
            modelValue[index] &&
            (range.value.maxRange || range.value.minRange) &&
            isValidYear(modelValue[index]),
        );
    };

    // If min or max range is set, validate given range
    const checkMinMaxRange = (secondDate: Date, modelValue: InternalModelValue, index = 0): boolean => {
        if (shouldCheckMinMaxRange(modelValue, index) && isValidYear(secondDate)) {
            const absoluteDiff = differenceInCalendarDays(secondDate, modelValue[index]!);
            const daysInBetween = getDaysInBetween(modelValue[index]!, secondDate);
            const disabledDates =
                daysInBetween.length === 1 ? 0 : daysInBetween.filter((date) => isDisabled(date)).length;
            const diff = Math.abs(absoluteDiff) - (range.value.minMaxRawRange ? 0 : disabledDates);
            if (range.value.minRange && range.value.maxRange)
                return diff >= +range.value.minRange && diff <= +range.value.maxRange;
            if (range.value.minRange) return diff >= +range.value.minRange;
            if (range.value.maxRange) return diff <= +range.value.maxRange;
        }
        return true;
    };

    // Check if we need to do a time validation
    const skipTimeValidation = () => {
        return (
            !timeConfig.value.enableTimePicker ||
            rootProps.monthPicker ||
            rootProps.yearPicker ||
            timeConfig.value.ignoreTimeValidation
        );
    };

    // Return set time for a given date or array of dates
    const getSetTimeValue = (date: Date | (Date | null)[]) => {
        if (Array.isArray(date)) {
            return [date[0] ? setTimeValue(date[0]) : null, date[1] ? setTimeValue(date[1]) : null];
        }
        return setTimeValue(date);
    };

    const checkDisabledTimePerRange = (disabledTimes: TimeModel[], date: Date | null, isValid: boolean) => {
        if (!date) return false;
        return (
            disabledTimes.find((time) =>
                +time.hours === getHours(date) && time.minutes === '*'
                    ? true
                    : +time.minutes === getMinutes(date) && +time.hours === getHours(date),
            ) && isValid
        );
    };

    // In case range is used, and separate set of disabled is provided for start and end dates, validate separately
    const checkDisabledTimesRanged = (disabledTimes: TimeModel[][], dates: (Date | null)[], isValid: boolean) => {
        const [disabledTimesStart, disabledTimesEnd] = disabledTimes;
        const [startDate, endDate] = dates;
        return (
            !checkDisabledTimePerRange(disabledTimesStart!, startDate!, isValid) &&
            !checkDisabledTimePerRange(disabledTimesEnd!, endDate!, isValid) &&
            isValid
        );
    };

    const checkDisabledTimesOnArr = (isValid: boolean, date: (Date | null)[] | Date) => {
        const dates = Array.isArray(date) ? date : [date];
        if (Array.isArray(rootProps.disabledTimes)) {
            if (Array.isArray(rootProps.disabledTimes[0])) {
                return checkDisabledTimesRanged(rootProps.disabledTimes as TimeModel[][], dates, isValid);
            }
            return !dates.some((dt) => {
                return checkDisabledTimePerRange(rootProps.disabledTimes as unknown as TimeModel[], dt, isValid);
            });
        }
        return isValid;
    };

    const checkDisabledTimesFn = (isValid: boolean, date: Date | (Date | null)[]) => {
        const param = Array.isArray(date)
            ? [getTimeObj(date[0]!), date[1] ? getTimeObj(date[1]) : undefined]
            : getTimeObj(date);
        const valid = !(rootProps.disabledTimes as DisabledTimesFn)(param as never);
        return isValid && valid;
    };

    const checkDisabledTimes = (date: Date | (Date | null)[], isValid: boolean) => {
        if (rootProps.disabledTimes) {
            if (Array.isArray(rootProps.disabledTimes)) {
                return checkDisabledTimesOnArr(isValid, date);
            }
            return checkDisabledTimesFn(isValid, date);
        }
        return isValid;
    };

    // Validate time
    const isValidTime = (date: InternalModelValue): boolean => {
        let isValid = true;
        if (!date) return true;
        if (skipTimeValidation()) return true;

        const selectedDateTime = !safeDates.value.minDate && !safeDates.value.maxDate ? getSetTimeValue(date) : date;

        if (rootProps.maxTime || safeDates.value.maxDate) {
            isValid = checkTimeMinMax(
                rootProps.maxTime as TimeModel,
                safeDates.value.maxDate,
                'max',
                convertType(selectedDateTime),
                isValid,
            );
        }

        if (rootProps.minTime || safeDates.value.minDate) {
            isValid = checkTimeMinMax(
                rootProps.minTime,
                safeDates.value.minDate,
                'min',
                convertType(selectedDateTime),
                isValid,
            );
        }
        return checkDisabledTimes(date, isValid);
    };

    const isMonthWithinRange = (date: OptionalDate): boolean => {
        if (!rootProps.monthPicker) return true;
        let valid = true;
        const dateToCompare = getDate(resetDate(date));
        if (safeDates.value.minDate && safeDates.value.maxDate) {
            const minDate = getDate(resetDate(safeDates.value.minDate));
            const maxDate = getDate(resetDate(safeDates.value.maxDate));
            return (
                (isDateAfter(dateToCompare, minDate) && isDateBefore(dateToCompare, maxDate)) ||
                isDateEqual(dateToCompare, minDate) ||
                isDateEqual(dateToCompare, maxDate)
            );
        }
        if (safeDates.value.minDate) {
            const minDate = getDate(resetDate(safeDates.value.minDate));

            valid = isDateAfter(dateToCompare, minDate) || isDateEqual(dateToCompare, minDate);
        }
        if (safeDates.value.maxDate) {
            const maxDate = getDate(resetDate(safeDates.value.maxDate));
            valid = isDateBefore(dateToCompare, maxDate) || isDateEqual(dateToCompare, maxDate);
        }

        return valid;
    };

    const isTimeValid = computed(() => (internalModelValue: InternalModelValue): boolean => {
        if (!timeConfig.value.enableTimePicker || timeConfig.value.ignoreTimeValidation) return true;
        return isValidTime(internalModelValue);
    });

    const isMonthValid = computed(() => (internalModelValue: InternalModelValue): boolean => {
        if (!rootProps.monthPicker) return true;
        if (Array.isArray(internalModelValue) && (range.value.enabled || multiDates.value.enabled)) {
            const invalid = internalModelValue.filter((value) => !isMonthWithinRange(value));
            return !invalid.length;
        }
        return isMonthWithinRange(internalModelValue as Date);
    });

    const validateMonthYear = (date: Date, preventMinMaxNavigation: boolean, next: boolean) => {
        if (!preventMinMaxNavigation) return false;
        if (next && !safeDates.value.maxDate) return false;
        if (!next && !safeDates.value.minDate) return false;
        const compareDate = next ? addMonths(date, 1) : subMonths(date, 1);
        const monthYear: [number, number] = [getMonth(compareDate), getYear(compareDate)];
        return next ? !validateMaxDate(...monthYear) : !validateMinDate(...monthYear);
    };

    const getDateForCompare = (date: MaybeDate, month: number, year: number): [Date, Date] => {
        return [set(getDate(date), { date: 1 }), set(getDate(), { month, year, date: 1 })];
    };

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

    const checkTimeMinMax = (
        minOrMax: TimeModel | undefined,
        dateCompare: OptionalDate,
        map: 'min' | 'max',
        selectedDateTime: Date | Date[],
        isValid: boolean,
    ) => {
        if (Array.isArray(selectedDateTime)) {
            const dateOne = getDateForCompareValidation(minOrMax, selectedDateTime[0]!, dateCompare);
            const dateTwo = getDateForCompareValidation(minOrMax, selectedDateTime[1]!, dateCompare);
            return (
                validateTime(selectedDateTime[0]!, dateOne, map, !!dateCompare) &&
                validateTime(selectedDateTime[1]!, dateTwo, map, !!dateCompare) &&
                isValid
            );
        }
        const date = getDateForCompareValidation(minOrMax, selectedDateTime, dateCompare);
        return validateTime(selectedDateTime, date, map, !!dateCompare) && isValid;
    };

    const getDateForCompareValidation = (
        minOrMax: TimeModel | undefined,
        selected: Date,
        minOrMaxDate: OptionalDate,
    ) => {
        return minOrMax ? setTime(minOrMax, selected) : getDate(minOrMaxDate ?? selected);
    };

    const isValidDate = (value: Date | Date[] | null | (Date | null)[]): boolean => {
        if (Array.isArray(value)) {
            return isValid(value[0]) && (value[1] ? isValid(value[1]) : true);
        }
        return value ? isValid(value) : false;
    };

    const checkPartialRangeValue = (isPartial: boolean): Date => {
        if (isPartial) return null as unknown as Date;
        throw new Error(errorMapper.prop('partial-range'));
    };

    const checkRangeEnabled = <T>(fn: () => T, range: boolean): T => {
        if (range) return fn();
        throw new Error(errorMapper.prop('range'));
    };

    const checkMinMaxValue = (value: number | string, min?: number, max?: number): boolean => {
        const hasMax = max !== undefined && max !== null;
        const hasMin = min !== undefined && min !== null;

        if (!hasMax && !hasMin) return false;

        const maxVal = +(max as number);
        const minVal = +(min as number);

        if (hasMax && hasMin) {
            return +value > maxVal || +value < minVal;
        }
        if (hasMax) return +value > maxVal;

        if (hasMin) {
            return +value < minVal;
        }

        return false;
    };

    return {
        isDisabled,
        validateDate,
        validateMonthYearInRange,
        isDateRangeAllowed,
        checkMinMaxRange,
        isValidTime,
        validateMonthYear,
        validateMinDate,
        validateMaxDate,
        isValidDate,
        checkPartialRangeValue,
        checkRangeEnabled,
        checkMinMaxValue,
        isTimeValid,
        isMonthValid,
    };
};
