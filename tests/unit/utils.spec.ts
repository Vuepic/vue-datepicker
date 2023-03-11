import { describe, it, expect } from 'vitest';
import { addHours, getHours, getMinutes, getMonth, getSeconds, set, setMonth, subHours } from 'date-fns';
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
    isDateAfter,
    isDateBefore,
    isDateBetween,
    parseFreeInput,
    resetDateTime,
    setDateTime,
} from '@/utils/date-utils';
import { useTransitions, useUtils } from '@/components/composables';

import type { AllPropsType } from '@/utils/props';
import addDays from 'date-fns/addDays';
import { defaultMultiCalendars, defaultTransitions } from '@/utils/defaults';

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
        const utcDate = dateToUtc(date, false);

        const utcString = set(zonedTimeToUtc(date, Intl.DateTimeFormat().resolvedOptions().timeZone), {
            milliseconds: 0,
        });

        expect(utcString.toISOString()).toEqual(utcDate);
    });

    it('Should return UTC date with preserved value', () => {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const date = new Date();
        const utcDate = dateToUtc(date, true);
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
        expect(enabledTransitions).toHaveProperty('menuAppear', 'dp-menu-appear');
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
});
