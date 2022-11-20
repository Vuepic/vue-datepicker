import { describe, it, expect } from 'vitest';

import { getArrayInArray, getDayNames, getMonths, getYears } from '@/utils/util';
import { parseFreeInput } from '@/utils/date-utils';
import { useState, useUtils } from '@/components/composables';
import type { AllPropsType } from '@/utils/props';

describe('Utils and date utils formatting', () => {
    const { setProps } = useState();
    const { getCalendarDays, getDefaultPattern, resetDateTime, setDateTime } = useUtils();

    it('Should get calendar days', () => {
        setProps({ weekStart: 1, hideOffsetDates: false } as AllPropsType);
        const days = getCalendarDays(0, 2021);

        expect(days).toHaveLength(5);
        expect(days[0].days).toHaveLength(7);
        expect(days[0].days[0].text).toEqual(28);
    });

    it('Should get calendar days starting from sunday', () => {
        setProps({ weekStart: 0, hideOffsetDates: false } as AllPropsType);

        const days = getCalendarDays(0, 2021);
        expect(days).toHaveLength(6);
        expect(days[0].days[0].text).toEqual(27);
    });

    it('Should get calendar days with hidden offset dats', () => {
        setProps({ weekStart: 1, hideOffsetDates: true } as AllPropsType);

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
        setProps({ enableTimePicker: true, is24: true } as AllPropsType);
        const patternDef = getDefaultPattern();
        setProps({ monthPicker: true } as AllPropsType);
        const patternMonthPicker = getDefaultPattern();

        expect(patternDef).toEqual('MM/dd/yyyy, HH:mm');
        expect(patternMonthPicker).toEqual('MM/yyyy');
    });

    it('Should parse free input', () => {
        const date = parseFreeInput('01/01/2021', 'MM/dd/yyyy, HH:mm');

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
});
