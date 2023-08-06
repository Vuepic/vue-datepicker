import { describe, expect, it } from 'vitest';
import {
    addHours,
    getDate,
    getHours,
    getMinutes,
    getMonth,
    getSeconds,
    getYear,
    set,
    setMonth,
    subHours,
    addDays,
    addMonths,
    subMonths,
    startOfWeek,
    endOfWeek,
} from 'date-fns';
import { getTimezoneOffset, zonedTimeToUtc } from 'date-fns-tz/esm';
import { reactive } from 'vue';

import {
    getArrayInArray,
    getDayNames,
    getMonths,
    getNumVal,
    getYears,
    hoursToAmPmHours,
    isModelAuto,
} from '@/utils/util';
import {
    assignDefaultTime,
    checkPartialRangeValue,
    checkRangeEnabled,
    checkTimeMinMax,
    dateToUtc,
    formatDate,
    getDaysInBetween,
    getNextMonthYear,
    getTimeObj,
    getWeekFromDate,
    isDateAfter,
    isDateBefore,
    isDateBetween,
    isValidDate,
    parseFreeInput,
    resetDate,
    resetDateTime,
    setDateMonthOrYear,
    setDateTime,
    setDateTimeFromObj,
    validateMaxDate,
    validateMinDate,
    validateMonthYear,
    validateTime,
} from '@/utils/date-utils';
import { useDefaults, useTransitions } from '@/composables';

import type { AllPropsType } from '@/props';
import { defaultMultiCalendars, defaultTransitions } from '@/utils/defaults';
import { de } from 'date-fns/locale';

const getCurrentTime = () => {
    return {
        hours: getHours(new Date()),
        minutes: getMinutes(0),
        seconds: 0,
    };
};

const getMinMax = () => {
    const minDate = set(new Date(), { hours: 10, minutes: 30, seconds: 0, milliseconds: 0 });
    const maxDate = set(new Date(), { hours: 22, minutes: 15, seconds: 0, milliseconds: 0 });
    return { minDate, maxDate };
};

describe('Utils and date utils formatting', () => {
    it('Should group array by 3', () => {
        const items = getArrayInArray(Array.from(Array(10).keys()));

        expect(items).toHaveLength(4);
        expect(items[0]).toHaveLength(3);
    });

    it('Should get day names according to locale', () => {
        const days = getDayNames(null, 'de', 1);

        expect(days).toHaveLength(7);
        expect(days[1]).toEqual('Di');
    });

    it('Should get day names according to formatLocale', () => {
        const days = getDayNames(de, 'en', 1);

        expect(days).toHaveLength(7);
        expect(days[1]).toEqual('Di');
    });

    it('Should get day names by fallback to locale', () => {
        // Pass incorrect formatLocale
        const days = getDayNames({}, 'de', 1);

        expect(days).toHaveLength(7);
        expect(days[1]).toEqual('Di');
    });

    it('Should generate years', () => {
        const years = getYears([2021, 2025]);

        expect(years).toHaveLength(5);
        expect(years[1].value).toEqual(2022);
    });

    it('Should get month values according to locale', () => {
        const months = getMonths(null, 'en', 'long');

        expect(months).toHaveLength(12);
        expect(months[0].text).toEqual('January');
    });

    it('Should get month values according to formatLocale', () => {
        const months = getMonths(de, 'en', 'long');

        expect(months).toHaveLength(12);
        expect(months[0].text).toEqual('Januar');
    });

    it('Should get month values by fallback to locale', () => {
        // Pass incorrect formatLocale
        const months = getMonths({}, 'de', 'long');

        expect(months).toHaveLength(12);
        expect(months[0].text).toEqual('Januar');
    });

    it('Should get default pattern', () => {
        const props = reactive({ enableTimePicker: true, is24: true, monthPicker: false });
        const { getDefaultPattern } = useDefaults(props as AllPropsType);

        const patternDef = getDefaultPattern();
        props.monthPicker = true;
        const patternMonthPicker = getDefaultPattern();

        expect(patternDef).toEqual('MM/dd/yyyy, HH:mm');
        expect(patternMonthPicker).toEqual('MM/yyyy');
    });

    it('Should parse free input', () => {
        const date = parseFreeInput('01/01/2021', 'MM/dd/yyyy, HH:mm', getCurrentTime());

        expect(date).toBeDefined();
        expect(date?.getMonth()).toEqual(0);
    });

    it('Should reset date time', () => {
        const date = new Date();
        const resetDate = resetDateTime(date);

        expect(resetDate.getHours()).toEqual(0);
        expect(resetDate.getMinutes()).toEqual(0);
        expect(resetDate.getSeconds()).toEqual(0);
        expect(resetDate.getMilliseconds()).toEqual(0);
    });

    it('Should set date time', () => {
        const date = setDateTime(new Date(), 12, 12);

        expect(date.getHours()).toEqual(12);
        expect(date.getMinutes()).toEqual(12);
    });

    it('Should parse text input to date with pattern text', () => {
        const parsed = parseFreeInput('2', 'MM/dd/yyyy', getCurrentTime());
        expect(getMonth(parsed as Date)).toEqual(1);
    });

    it('Should parse text input with pattern function', () => {
        const parser = (value: string) => setMonth(new Date(), +value);
        const parsed = parseFreeInput('2', parser, getCurrentTime());

        expect(getMonth(parsed as Date)).toEqual(2);
    });

    it('Should get UTC date', () => {
        const date = new Date();
        const utcDate = dateToUtc(date, false, false);

        const utcString = set(zonedTimeToUtc(date, Intl.DateTimeFormat().resolvedOptions().timeZone), {
            milliseconds: 0,
        });

        expect(utcString.toISOString()).toEqual(utcDate);
    });

    it('Should return UTC date with preserved value', () => {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const date = new Date();
        const utcDate = dateToUtc(date, true, false);
        const offset = getTimezoneOffset(timezone);
        const mapHour = offset > 0 ? addHours : subHours;
        const offsetHours = Math.floor((offset / (1000 * 60 * 60)) % 24);
        const utcString = mapHour(
            set(zonedTimeToUtc(date, Intl.DateTimeFormat().resolvedOptions().timeZone), {
                milliseconds: 0,
                seconds: 0,
            }),
            offsetHours,
        );

        expect(utcString.toISOString()).toEqual(utcDate);
    });

    it('Should parse text input date from the pattern array', () => {
        const parsed = parseFreeInput('2', ['MM/dd/yyyy', 'MM/dd/yyyy'], getCurrentTime());
        expect(getMonth(parsed as Date)).toEqual(1);
    });

    it('Should return null on invalid text input', () => {
        const parsed = parseFreeInput('random', ['MM/dd/yyyy', 'MM/dd/yyyy'], getCurrentTime());
        expect(parsed).toBeNull();
    });

    it('Should map properly 12h to 24h mode', () => {
        const get12Val = hoursToAmPmHours(23);

        expect(get12Val).toEqual(11);
    });

    it('Should detect model-auto', () => {
        const isRange = isModelAuto(new Date());
        expect(isRange).toBeFalsy();
        const hasBothValue = isModelAuto([new Date(), new Date()]);
        expect(hasBothValue).toBeTruthy();
    });

    it('Should set time values on a date', () => {
        const date = new Date();
        const dateWithTime = setDateTime(date, 10, 15, 15);
        expect(getHours(dateWithTime)).toEqual(10);
        expect(getMinutes(dateWithTime)).toEqual(15);
        expect(getSeconds(dateWithTime)).toEqual(15);
    });

    it('Should not check before and after date if value is not provided', () => {
        const isBefore = isDateBefore(new Date(), null);
        const isAfter = isDateAfter(new Date(), null);
        expect(isBefore).toBeFalsy();
        expect(isAfter).toBeFalsy();
    });

    it('Should check if date is in-between', () => {
        const isBetween = isDateBetween([new Date()], addDays(new Date(), 5), addDays(new Date(), 1));
        expect(isBetween).toBeTruthy();
    });

    it('Should get proper default transitions', () => {
        const transitions = defaultTransitions(false);
        expect(transitions).toBeFalsy();

        const enabledTransitions = defaultTransitions({});
        expect(enabledTransitions).toHaveProperty('menuAppearBottom', 'dp-menu-appear-bottom');
    });

    it('Should return proper multi-calendars default value', () => {
        const enabled = defaultMultiCalendars(true);
        expect(enabled.count).toEqual(2);

        const stringEnabled = defaultMultiCalendars('3');
        expect(stringEnabled.count).toEqual(3);

        const invalid = defaultMultiCalendars(1);
        expect(invalid.count).toEqual(2);
    });

    it('Should return empty transition name', () => {
        const { defaultedTransitions } = useDefaults({ transitions: false } as AllPropsType);
        const { transitionName } = useTransitions(defaultedTransitions);
        expect(transitionName.value(true)).toEqual('');
    });

    it('Should return proper value from number param', () => {
        const undefinedVal = getNumVal();
        expect(undefinedVal).toBeNull();

        const nullishVal = getNumVal(null);
        expect(nullishVal).toBeNull();

        const invalidString = getNumVal('rand');
        expect(invalidString).toBeNull();

        const stringVal = getNumVal('2');
        expect(stringVal).toEqual(2);

        const zeroVal = getNumVal(0);
        expect(zeroVal).toEqual(0);

        const validNum = getNumVal(1);
        expect(validNum).toEqual(1);
    });

    it('Should reset date', () => {
        const dateToReset = set(new Date(), { date: 5, month: getMonth(new Date()), year: getYear(new Date()) });
        const reset = resetDate(dateToReset);

        expect(getDate(reset)).toEqual(1);
        expect(getHours(reset)).toEqual(0);
        expect(getMonth(reset)).toEqual(getMonth(new Date()));
    });

    it('Should convert date to time object', () => {
        const now = new Date();
        const timeObj = getTimeObj(now);
        expect(timeObj).toHaveProperty('hours', getHours(now));
        expect(timeObj).toHaveProperty('minutes', getMinutes(now));
        expect(timeObj).toHaveProperty('seconds', getSeconds(now));
    });

    it('Should set time value', () => {
        const timeObj = { hours: 10, minutes: 15, seconds: 0 };
        const date = setDateTimeFromObj(timeObj);
        expect(getHours(date)).toEqual(timeObj.hours);
        expect(getMinutes(date)).toEqual(timeObj.minutes);
        expect(getSeconds(date)).toEqual(timeObj.seconds);
    });

    it('Should check time min and max values', () => {
        const { minDate, maxDate } = getMinMax();
        const selectedDateBellowMin = set(new Date(), { hours: 9 });
        const selectedValidDate = set(new Date(), { hours: 12 });
        const selectedDateAboveMax = set(new Date(), { hours: 23 });

        const minValid = checkTimeMinMax(null, minDate, 'min', selectedDateBellowMin, true);
        expect(minValid).toBeFalsy();

        const maxValid = checkTimeMinMax(null, maxDate, 'max', selectedDateAboveMax, true);
        expect(maxValid).toBeFalsy();

        const validMin = checkTimeMinMax(null, minDate, 'min', selectedValidDate, true);
        expect(validMin).toBeTruthy();

        const validMax = checkTimeMinMax(null, maxDate, 'max', selectedValidDate, true);
        expect(validMax).toBeTruthy();
    });

    it('Should validate time', () => {
        const date = set(new Date(), { hours: 15 });
        const { minDate, maxDate } = getMinMax();

        const aboveMin = validateTime(date, minDate, 'min', true);
        expect(aboveMin).toBeTruthy();

        const bellowMax = validateTime(date, maxDate, 'max', true);
        expect(bellowMax).toBeTruthy();
    });

    it('Should check if date is valid date object', () => {
        expect(isValidDate(null)).toBeFalsy();
        expect(isValidDate(new Date())).toBeTruthy();
        expect(isValidDate([new Date(), null])).toBeTruthy();
        expect(isValidDate([null, new Date()])).toBeFalsy();
        expect(isValidDate([new Date(), new Date()])).toBeTruthy();
    });

    it('Should check for range and partial range errors', () => {
        try {
            expect(checkRangeEnabled(() => ({}), false)).toThrowError();
        } catch (e: any) {
            expect(e.message).toEqual('"range" prop must be enabled!');
        }

        try {
            expect(checkPartialRangeValue(false)).toThrowError();
        } catch (e: any) {
            expect(e.message).toEqual('"partial-range" prop must be enabled!');
        }
    });

    it('Should format date', () => {
        const singleDate = new Date();
        const rangeDate = [new Date(), addMonths(new Date(), 1)];

        const padWithZero = (value: number) => (value > 9 ? value : `0${value}`);

        const getFormattedSingle = (date: Date) =>
            `${padWithZero(getDate(date))}.${padWithZero(getMonth(date) + 1)}.${getYear(date)}`;

        const formatFn = (date: Date | Date[]) => {
            if (date) {
                if (Array.isArray(date)) {
                    return [getFormattedSingle(date[0]), getFormattedSingle(date[1])].join(rangeSeparator);
                }
                return getFormattedSingle(date);
            }
            return '';
        };

        const rangeSeparator = '---';
        const pattern = 'dd.MM.yyyy';

        const singleFormatted = formatDate(singleDate, null, null, rangeSeparator, false, pattern);
        expect(singleFormatted).toEqual(formatFn(singleDate));

        const multiFormatted = formatDate(rangeDate, null, null, rangeSeparator, false, pattern);
        expect(multiFormatted).toEqual(formatFn(rangeDate));

        const customFmt = formatDate(singleDate, formatFn, null, rangeSeparator, false, pattern);
        expect(customFmt).toEqual(formatFn(singleDate));
    });

    it('Should validate min and max dates', () => {
        const { minDate, maxDate } = getMinMax();
        const date = addMonths(new Date(), 1);
        const isMaxValid = validateMaxDate(getMonth(date), getYear(date), maxDate);
        expect(isMaxValid).toBeFalsy();

        const isMinValid = validateMinDate(getMonth(date), getYear(date), minDate);
        expect(isMinValid).toBeTruthy();
    });

    it('Should validate month and year', () => {
        const minDate = subMonths(new Date(), 3);
        const maxDate = addMonths(new Date(), 3);

        const isInvalid = validateMonthYear(new Date(), maxDate, minDate, false, false);
        expect(isInvalid).toBeFalsy();

        const invalid = validateMonthYear(addMonths(new Date(), 3), maxDate, minDate, true, true);
        expect(invalid).toBeTruthy();
    });

    it('Should set month and year on a date value', () => {
        const today = new Date();
        const month = 1;
        const year = 2023;
        const setDate = setDateMonthOrYear(today, month, year);
        expect(getMonth(setDate)).toEqual(month);
        expect(getYear(setDate)).toEqual(year);
    });

    it('Should assign default time model', () => {
        const time = assignDefaultTime({ hours: 15 }, false);
        expect(time.hours).toEqual(15);
    });

    it('Should get week from date', () => {
        const week = getWeekFromDate(new Date(), '', 1);
        const start = startOfWeek(new Date(), { weekStartsOn: 1 });
        const end = endOfWeek(new Date(), { weekStartsOn: 1 });
        expect(week[0]).toEqual(start);
        expect(week[1]).toEqual(end);
    });

    it('Should get next month', () => {
        const nextMonth = getMonth(addMonths(new Date(), 1));
        const { month } = getNextMonthYear(new Date());

        expect(nextMonth).toEqual(month);
    });

    it('Should get days in between', () => {
        const inBetween = getDaysInBetween(new Date(), addDays(new Date(), 2));
        expect(inBetween).toHaveLength(3);
    });
});
