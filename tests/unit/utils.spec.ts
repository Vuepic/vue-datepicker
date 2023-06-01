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
} from 'date-fns';
import { getTimezoneOffset, zonedTimeToUtc } from 'date-fns-tz';
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
    dateToUtc,
    getTimeObj,
    isDateAfter,
    isDateBefore,
    isDateBetween,
    parseFreeInput,
    resetDate,
    resetDateTime,
    setDateTime,
} from '@/utils/date-utils';
import { useTransitions, useUtils } from '@/composables';

import type { AllPropsType } from '@/props';
import { defaultMultiCalendars, defaultTransitions } from '@/utils/defaults';
import type { SixWeekMode } from '@/interfaces';

const getCurrentTime = () => {
    return {
        hours: getHours(new Date()),
        minutes: getMinutes(0),
        seconds: 0,
    };
};

describe('Utils and date utils formatting', () => {
    it('Should get calendar days', () => {
        const { getCalendarDays } = useUtils({ weekStart: 1, hideOffsetDates: false } as AllPropsType);

        const days = getCalendarDays(0, 2021);

        expect(days).toHaveLength(5);
        expect(days[0].days).toHaveLength(7);
        expect(days[0].days[0].text).toEqual(28);
    });

    it('Should get calendar days starting from sunday', () => {
        const { getCalendarDays } = useUtils({ weekStart: 0, hideOffsetDates: false } as AllPropsType);

        const days = getCalendarDays(0, 2021);
        expect(days).toHaveLength(6);
        expect(days[0].days[0].text).toEqual(27);
    });

    it('Should get calendar days with hidden offset dats', () => {
        const { getCalendarDays } = useUtils({ weekStart: 1, hideOffsetDates: true } as AllPropsType);

        const days = getCalendarDays(0, 2021);

        expect(days).toHaveLength(5);
        expect(days[0].days[0].text).toEqual('');
    });

    describe('getCalendar should get the correct weeks depending on six week mode', () => {
        const getCalendarDaysWithSixWeekMode = (sixWeeks: boolean | SixWeekMode) => {
            const { getCalendarDays } = useUtils({
                weekStart: 1,
                hideOffsetDates: false,
                sixWeeks,
            } as AllPropsType);

            const jan = getCalendarDays(0, 2021); // ends on a sunday
            const feb = getCalendarDays(1, 2021); // spans exactly 4 weeks from monday to sunday
            const mar = getCalendarDays(2, 2021); // starts on a monday
            const apr = getCalendarDays(3, 2021); // has five weeks with more days in the end week
            const may = getCalendarDays(4, 2021); // has six weeks
            const jun = getCalendarDays(5, 2021); // has five weeks with more days in the start week
            return { jan, feb, mar, apr, may, jun };
        };

        it('In `false` mode, it should get only weeks that contain dates of the queried month', () => {
            const { jan, feb, mar, apr, may, jun } = getCalendarDaysWithSixWeekMode(false);

            expect(jan).toHaveLength(5);
            expect(jan[0].days[0].text).toEqual(28);
            expect(jan[4].days[6].text).toEqual(31);
            expect(feb).toHaveLength(4);
            expect(feb[0].days[0].text).toEqual(1);
            expect(feb[3].days[6].text).toEqual(28);
            expect(mar).toHaveLength(5);
            expect(mar[0].days[0].text).toEqual(1);
            expect(mar[4].days[6].text).toEqual(4);
            expect(apr).toHaveLength(5);
            expect(apr[0].days[0].text).toEqual(29);
            expect(apr[4].days[6].text).toEqual(2);
            expect(may).toHaveLength(6);
            expect(may[0].days[0].text).toEqual(26);
            expect(may[5].days[6].text).toEqual(6);
            expect(jun).toHaveLength(5);
            expect(jun[0].days[0].text).toEqual(31);
            expect(jun[4].days[6].text).toEqual(4);
        });

        it('In `true` or `append` mode, it should return six weeks, padded to the end of the calendar', () => {
            const appendResult = getCalendarDaysWithSixWeekMode('append');

            expect(getCalendarDaysWithSixWeekMode(true)).toEqual(appendResult);

            const { jan, feb, mar, apr, may, jun } = appendResult;

            expect(jan).toHaveLength(6);
            expect(jan[0].days[0].text).toEqual(28);
            expect(jan[5].days[6].text).toEqual(7);
            expect(feb).toHaveLength(6);
            expect(feb[0].days[0].text).toEqual(1);
            expect(feb[5].days[6].text).toEqual(14);
            expect(mar).toHaveLength(6);
            expect(mar[0].days[0].text).toEqual(1);
            expect(mar[5].days[6].text).toEqual(11);
            expect(apr).toHaveLength(6);
            expect(apr[0].days[0].text).toEqual(29);
            expect(apr[5].days[6].text).toEqual(9);
            expect(may).toHaveLength(6);
            expect(may[0].days[0].text).toEqual(26);
            expect(may[5].days[6].text).toEqual(6);
            expect(jun).toHaveLength(6);
            expect(jun[0].days[0].text).toEqual(31);
            expect(jun[5].days[6].text).toEqual(11);
        });

        it('In `prepend` mode, it should return six weeks, padded to the start of the calendar', () => {
            const { jan, feb, mar, apr, may, jun } = getCalendarDaysWithSixWeekMode('prepend');

            expect(jan).toHaveLength(6);
            expect(jan[0].days[0].text).toEqual(21);
            expect(jan[5].days[6].text).toEqual(31);
            expect(feb).toHaveLength(6);
            expect(feb[0].days[0].text).toEqual(18);
            expect(feb[5].days[6].text).toEqual(28);
            expect(mar).toHaveLength(6);
            expect(mar[0].days[0].text).toEqual(22);
            expect(mar[5].days[6].text).toEqual(4);
            expect(apr).toHaveLength(6);
            expect(apr[0].days[0].text).toEqual(22);
            expect(apr[5].days[6].text).toEqual(2);
            expect(may).toHaveLength(6);
            expect(may[0].days[0].text).toEqual(26);
            expect(may[5].days[6].text).toEqual(6);
            expect(jun).toHaveLength(6);
            expect(jun[0].days[0].text).toEqual(24);
            expect(jun[5].days[6].text).toEqual(4);
        });

        it('In `center` mode, it should return six weeks, padded so that months that start with a full week get a week of leading offset', () => {
            const { jan, feb, mar, apr, may, jun } = getCalendarDaysWithSixWeekMode('center');

            expect(jan).toHaveLength(6);
            expect(jan[0].days[0].text).toEqual(28);
            expect(jan[5].days[6].text).toEqual(7);
            expect(feb).toHaveLength(6);
            expect(feb[0].days[0].text).toEqual(25);
            expect(feb[5].days[6].text).toEqual(7);
            expect(mar).toHaveLength(6);
            expect(mar[0].days[0].text).toEqual(22);
            expect(mar[5].days[6].text).toEqual(4);
            expect(apr).toHaveLength(6);
            expect(apr[0].days[0].text).toEqual(29);
            expect(apr[5].days[6].text).toEqual(9);
            expect(may).toHaveLength(6);
            expect(may[0].days[0].text).toEqual(26);
            expect(may[5].days[6].text).toEqual(6);
            expect(jun).toHaveLength(6);
            expect(jun[0].days[0].text).toEqual(31);
            expect(jun[5].days[6].text).toEqual(11);
        });

        it('In `fair` mode, it should return six weeks, padded to start and end of the month depending on which has the smaller offset in the partial week', () => {
            const { jan, feb, mar, apr, may, jun } = getCalendarDaysWithSixWeekMode('fair');

            expect(jan).toHaveLength(6);
            expect(jan[0].days[0].text).toEqual(28);
            expect(jan[5].days[6].text).toEqual(7);
            expect(feb).toHaveLength(6);
            expect(feb[0].days[0].text).toEqual(25);
            expect(feb[5].days[6].text).toEqual(7);
            expect(mar).toHaveLength(6);
            expect(mar[0].days[0].text).toEqual(22);
            expect(mar[5].days[6].text).toEqual(4);
            expect(apr).toHaveLength(6);
            expect(apr[0].days[0].text).toEqual(29);
            expect(apr[5].days[6].text).toEqual(9);
            expect(may).toHaveLength(6);
            expect(may[0].days[0].text).toEqual(26);
            expect(may[5].days[6].text).toEqual(6);
            expect(jun).toHaveLength(6);
            expect(jun[0].days[0].text).toEqual(24);
            expect(jun[5].days[6].text).toEqual(4);
        });
    });

    it('Should group array by 3', () => {
        const items = getArrayInArray(Array.from(Array(10).keys()));

        expect(items).toHaveLength(4);
        expect(items[0]).toHaveLength(3);
    });

    it('Should get day names', () => {
        const days = getDayNames('de', 1);

        expect(days).toHaveLength(7);
        expect(days[1]).toEqual('Di');
    });

    it('Should generate years', () => {
        const years = getYears([2021, 2025]);

        expect(years).toHaveLength(5);
        expect(years[1].value).toEqual(2022);
    });

    it('Should get month values', () => {
        const months = getMonths('en', 'long');

        expect(months).toHaveLength(12);
        expect(months[0].text).toEqual('January');
    });

    it('Should get default pattern', () => {
        const props = reactive({ enableTimePicker: true, is24: true, monthPicker: false });
        const { getDefaultPattern } = useUtils(props as AllPropsType);

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
        expect(enabledTransitions).toHaveProperty('menuAppear', '');
    });

    it('Should return proper multi-calendars default value', () => {
        const enabled = defaultMultiCalendars(true);
        expect(enabled).toEqual(2);

        const stringEnabled = defaultMultiCalendars('3');
        expect(stringEnabled).toEqual(3);

        const invalid = defaultMultiCalendars(1);
        expect(invalid).toEqual(2);
    });

    it('Should return empty transition name', () => {
        const { transitionName } = useTransitions(false);
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
});
