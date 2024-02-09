import { differenceInCalendarDays, eachDayOfInterval, getDay, getHours, getMinutes, getMonth, getYear } from 'date-fns';
import {
    checkTimeMinMax,
    getDate,
    getDateForCompare,
    getDaysInBetween,
    getTimeObj,
    isDateAfter,
    isDateBefore,
    isDateEqual,
    resetDate,
    setTimeValue,
} from '@/utils/date-utils';
import { useDefaults } from '@/composables/defaults';
import { convertType, getMapDate } from '@/utils/util';

import type { InternalModuleValue, DisabledTimesFn, DisabledTime, TimeModel, MaybeDate } from '@/interfaces';
import type { PickerBasePropsType, AllPropsType } from '@/props';
import { computed } from 'vue';

export const useValidation = (props: PickerBasePropsType | AllPropsType) => {
    const { defaultedFilters, defaultedRange, propDates } = useDefaults(props);

    const isDateDisabled = (date: Date) => {
        if (!propDates.value.disabledDates) return false;
        if (typeof propDates.value.disabledDates === 'function') return propDates.value.disabledDates(getDate(date));
        return !!getMapDate(date, propDates.value.disabledDates);
    };

    const validateDate = (date: Date) => {
        const aboveMax = propDates.value.maxDate ? isDateAfter(date, propDates.value.maxDate) : false;
        const bellowMin = propDates.value.minDate ? isDateBefore(date, propDates.value.minDate) : false;
        const isDisabled = isDateDisabled(date);

        const disabledMonths = defaultedFilters.value.months.map((month) => +month);
        const inDisabledMonths = disabledMonths.includes(getMonth(date));
        const weekDayDisabled = props.disabledWeekDays.length
            ? props.disabledWeekDays.some((day) => +day === getDay(date))
            : false;

        const notInSpecific = checkAllowedDates(date);

        const dateYear = getYear(date);

        const outOfYearRange = dateYear < +props.yearRange[0] || dateYear > +props.yearRange[1];

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
            isDateBefore(...getDateForCompare(propDates.value.minDate, month, year)) ||
            isDateEqual(...getDateForCompare(propDates.value.minDate, month, year))
        );
    };

    const validateMaxDate = (month: number, year: number): boolean => {
        return (
            isDateAfter(...getDateForCompare(propDates.value.maxDate, month, year)) ||
            isDateEqual(...getDateForCompare(propDates.value.maxDate, month, year))
        );
    };

    const validateBothMinAndMax = (month: number, year: number, isNext: boolean) => {
        let valid = false;
        if (propDates.value.maxDate && isNext && validateMaxDate(month, year)) {
            valid = true;
        }
        if (propDates.value.minDate && !isNext && validateMinDate(month, year)) {
            valid = true;
        }
        return valid;
    };

    const validateMonthYearInRange = (month: number, year: number, isNext: boolean, preventNav: boolean): boolean => {
        let valid = false;
        if (preventNav) {
            if (propDates.value.minDate && propDates.value.maxDate) {
                valid = validateBothMinAndMax(month, year, isNext);
            } else if (propDates.value.minDate && validateMinDate(month, year)) {
                valid = true;
            } else if (propDates.value.maxDate && validateMaxDate(month, year)) {
                valid = true;
            }
        } else {
            valid = true;
        }
        return valid;
    };

    const checkAllowedDates = (date: Date) => {
        if (Array.isArray(propDates.value.allowedDates) && !propDates.value.allowedDates.length) return true;
        if (propDates.value.allowedDates) {
            return !getMapDate(date, propDates.value.allowedDates);
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
    const isDateRangeAllowed = (range: Date[]): boolean => {
        if (defaultedRange.value.noDisabledRange) {
            const datesInBetween = eachDayOfInterval({ start: range[0], end: range[1] });
            return !datesInBetween.some((date) => isDisabled(date));
        }
        return true;
    };
    const isValidYear = (val: MaybeDate) => {
        if (val) {
            const activeYear = getYear(val);
            return activeYear >= +props.yearRange[0] && activeYear <= props.yearRange[1];
        }
        return true;
    };

    const shouldCheckMinMaxRange = (modelValue: InternalModuleValue, index: number): modelValue is Array<Date> => {
        return (Array.isArray(modelValue) &&
            modelValue[index] &&
            (defaultedRange.value.maxRange || defaultedRange.value.minRange) &&
            isValidYear(modelValue[index])) as boolean;
    };

    // If min or max range is set, validate given range
    const checkMinMaxRange = (secondDate: Date, modelValue: InternalModuleValue, index = 0): boolean => {
        if (shouldCheckMinMaxRange(modelValue, index)) {
            const absoluteDiff = differenceInCalendarDays(secondDate, modelValue[index]);
            const daysInBetween = getDaysInBetween(modelValue[index], secondDate);
            const disabledDates =
                daysInBetween.length === 1 ? 0 : daysInBetween.filter((date) => isDisabled(date)).length;
            const diff = Math.abs(absoluteDiff) - (defaultedRange.value.minMaxRawRange ? 0 : disabledDates);
            if (defaultedRange.value.minRange && defaultedRange.value.maxRange)
                return diff >= +defaultedRange.value.minRange && diff <= +defaultedRange.value.maxRange;
            if (defaultedRange.value.minRange) return diff >= +defaultedRange.value.minRange;
            if (defaultedRange.value.maxRange) return diff <= +defaultedRange.value.maxRange;
        }
        return true;
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

    const checkDisabledTimePerRange = (disabledTimes: DisabledTime[], date: Date, isValid: boolean) => {
        return (
            disabledTimes.find((time) =>
                +time.hours === getHours(date) && time.minutes === '*'
                    ? true
                    : +time.minutes === getMinutes(date) && +time.hours === getHours(date),
            ) && isValid
        );
    };

    // In case range is used, and separate set of disabled is provided for start and end dates, validate separately
    const checkDisabledTimesRanged = (disabledTimes: DisabledTime[][], dates: Date[], isValid: boolean) => {
        const [disabledTimesStart, disabledTimesEnd] = disabledTimes;
        const [startDate, endDate] = dates;
        return (
            !checkDisabledTimePerRange(disabledTimesStart, startDate, isValid) &&
            !checkDisabledTimePerRange(disabledTimesEnd, endDate, isValid) &&
            isValid
        );
    };

    const checkDisabledTimesOnArr = (isValid: boolean, date: Date[] | Date) => {
        const dates = Array.isArray(date) ? date : [date];
        if (Array.isArray(props.disabledTimes)) {
            if (Array.isArray(props.disabledTimes[0])) {
                return checkDisabledTimesRanged(props.disabledTimes as DisabledTime[][], dates, isValid);
            }
            return !dates.some((dt) => {
                return checkDisabledTimePerRange(props.disabledTimes as DisabledTime[], dt, isValid);
            });
        }
        return isValid;
    };

    const checkDisabledTimesFn = (isValid: boolean, date: Date | Date[]) => {
        const param = Array.isArray(date)
            ? [getTimeObj(date[0]), date[1] ? getTimeObj(date[1]) : undefined]
            : getTimeObj(date);
        const valid = !(props.disabledTimes as DisabledTimesFn)(param);
        return isValid && valid;
    };

    const checkDisabledTimes = (date: Date | Date[], isValid: boolean) => {
        if (props.disabledTimes) {
            if (Array.isArray(props.disabledTimes)) {
                return checkDisabledTimesOnArr(isValid, date);
            }
            return checkDisabledTimesFn(isValid, date);
        }
        return isValid;
    };

    // Validate time
    const isValidTime = (date: InternalModuleValue): boolean => {
        let isValid = true;
        if (!date) return true;
        if (skipTimeValidation()) return true;

        const selectedDateTime = !propDates.value.minDate && !propDates.value.maxDate ? getSetTimeValue(date) : date;

        if (props.maxTime || propDates.value.maxDate) {
            isValid = checkTimeMinMax(
                props.maxTime as TimeModel,
                propDates.value.maxDate,
                'max',
                convertType(selectedDateTime),
                isValid,
            );
        }

        if (props.minTime || propDates.value.minDate) {
            isValid = checkTimeMinMax(
                props.minTime as TimeModel,
                propDates.value.minDate,
                'min',
                convertType(selectedDateTime),
                isValid,
            );
        }
        return checkDisabledTimes(date, isValid);
    };

    const isMonthWithinRange = (date: Date | string): boolean => {
        if (!props.monthPicker) return true;
        let valid = true;
        const dateToCompare = getDate(resetDate(date));
        if (propDates.value.minDate && propDates.value.maxDate) {
            const minDate = getDate(resetDate(propDates.value.minDate));
            const maxDate = getDate(resetDate(propDates.value.maxDate));
            return (
                (isDateAfter(dateToCompare, minDate) && isDateBefore(dateToCompare, maxDate)) ||
                isDateEqual(dateToCompare, minDate) ||
                isDateEqual(dateToCompare, maxDate)
            );
        }
        if (propDates.value.minDate) {
            const minDate = getDate(resetDate(propDates.value.minDate));

            valid = isDateAfter(dateToCompare, minDate) || isDateEqual(dateToCompare, minDate);
        }
        if (propDates.value.maxDate) {
            const maxDate = getDate(resetDate(propDates.value.maxDate));
            valid = isDateBefore(dateToCompare, maxDate) || isDateEqual(dateToCompare, maxDate);
        }

        return valid;
    };

    const isTimeValid = computed(() => (internalModelValue: InternalModuleValue): boolean => {
        if (!props.enableTimePicker || props.ignoreTimeValidation) return true;
        return isValidTime(internalModelValue);
    });

    const isMonthValid = computed(() => (internalModelValue: InternalModuleValue): boolean => {
        if (!props.monthPicker) return true;
        if (defaultedRange.value.enabled && Array.isArray(internalModelValue)) {
            const invalid = internalModelValue.filter((value) => !isMonthWithinRange(value));
            return !invalid.length;
        }
        return isMonthWithinRange(internalModelValue as Date);
    });

    return {
        isDisabled,
        validateDate,
        validateMonthYearInRange,
        isDateRangeAllowed,
        checkMinMaxRange,
        isValidTime,
        isTimeValid,
        isMonthValid,
    };
};
