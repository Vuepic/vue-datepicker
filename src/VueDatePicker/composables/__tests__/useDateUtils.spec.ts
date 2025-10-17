import { describe, it, expect, vi } from 'vitest';
import { useDateUtils } from '@/composables/useDateUtils';

const {
    resetDateTime,
    getDate,
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
    sanitizeTime,
    getTimeObjFromCurrent,
    getBeforeAndAfterInRange,
    timeGetter,
} = useDateUtils();

describe('useDateUtils', () => {
    it('resetDateTime should zero out time and optionally set to start of month', () => {
        const d = new Date('2024-05-15T12:34:56.789');
        const r1 = resetDateTime(d);
        expect(r1.getHours()).toBe(0);
        expect(r1.getMinutes()).toBe(0);
        expect(r1.getSeconds()).toBe(0);
        expect(r1.getMilliseconds()).toBe(0);

        const r2 = resetDateTime(d, true);
        expect(r2.getDate()).toBe(1);
        expect(r2.getHours()).toBe(0);
        expect(r2.getMinutes()).toBe(0);
    });

    it('getDate should create Date from inputs', () => {
        const fromDate = getDate(new Date('2024-01-02T00:00:00'));
        expect(fromDate).toBeInstanceOf(Date);
        expect(+fromDate).toBe(+new Date('2024-01-02T00:00:00'));

        const fromStr = getDate('2024-02-03T04:05:06');
        expect(+fromStr).toBe(+new Date('2024-02-03T04:05:06'));

        const fromTs = getDate(1714694400000); // 2024-05-03T00:00:00.000Z
        expect(fromTs.getTime()).toBe(1714694400000);
    });

    it('setTime should apply provided time parts and clear milliseconds', () => {
        const base = new Date('2024-01-01T00:00:00.555');
        const res = setTime({ hours: 13, minutes: 37, seconds: 7 }, base);
        expect(res.getHours()).toBe(13);
        expect(res.getMinutes()).toBe(37);
        expect(res.getSeconds()).toBe(7);
        expect(res.getMilliseconds()).toBe(0);

        // partial update
        const res2 = setTime({ minutes: 5 }, base);
        expect(res2.getMinutes()).toBe(5);
    });

    it('isDateEqual/Before/After should compare by date only', () => {
        const a = new Date('2025-10-02T00:00:00');
        const b = new Date('2025-10-02T23:59:59');
        expect(isDateEqual(a, b)).toBe(true);

        const c = new Date('2025-10-03T00:00:00');
        expect(isDateBefore(a, c)).toBe(true);
        expect(isDateAfter(c, a)).toBe(true);
    });

    it('isDateBetween should work for full range and with hover date', () => {
        const d1 = new Date('2024-01-10');
        const d2 = new Date('2024-01-20');
        const check = new Date('2024-01-15');
        expect(isDateBetween([d1, d2], null, check)).toBe(true);
        expect(isDateBetween([d1, d2], null, new Date('2024-01-25'))).toBe(false);

        // With hover date (open range)
        const hover = new Date('2024-01-18');
        expect(isDateBetween([d1], hover, check)).toBe(true);
        expect(isDateBetween([d1], hover, new Date('2024-01-05'))).toBe(false);
    });

    it('getDaysInBetween should return inclusive range in correct order', () => {
        const d1 = new Date('2024-01-01');
        const d2 = new Date('2024-01-03');
        const list = getDaysInBetween(d2, d1); // reversed order input
        expect(list).toHaveLength(3);
        expect(list[0]?.toDateString()).toBe(d1.toDateString());
        expect(list[2]?.toDateString()).toBe(d2.toDateString());
    });

    it('getCellId should format date to dp-YYYY-MM-DD', () => {
        const id = getCellId(new Date('2024-09-08T12:00:00'));
        expect(id).toBe('dp-2024-09-08');
    });

    it('resetDate should move date to first of month at midnight', () => {
        const r = resetDate('2024-07-15T12:00:00');
        expect(r.getDate()).toBe(1);
        expect(r.getHours()).toBe(0);
        expect(r.getMinutes()).toBe(0);
    });

    it('getMinMonth/getMaxMonth/getYearFromDate should derive boundaries', () => {
        const min = getMinMonth(2024, '2024-03-10');
        expect(min).toBe(2);

        const minWhenGreater = getMinMonth(2023, '2024-03-10');
        expect(minWhenGreater).toBe(12);

        const max = getMaxMonth(2024, '2024-09-10');
        expect(max).toBe(8);

        const maxWhenLower = getMaxMonth(2025, '2024-09-10');
        expect(maxWhenLower).toEqual(-1);

        const year = getYearFromDate('2026-02-01');
        expect(year).toBe(2026);
    });

    it('getTimeObj should map values', () => {
        const base = new Date('2024-01-01T11:22:33');
        const obj = getTimeObj(base);
        expect(obj).toEqual({ hours: 11, minutes: 22, seconds: 33 });
    });

    it('sanitizeTime should coerce numbers and allow single field override', () => {
        const full = sanitizeTime({ hours: '1' as any, minutes: '02' as any, seconds: 'x' as any });
        expect(full).toEqual({ hours: 1, minutes: 2, seconds: undefined });

        const override = sanitizeTime({ hours: 8, minutes: 9, seconds: 10 }, 'minutes', 59);
        expect(override).toEqual({ hours: 8, minutes: 59, seconds: 10 });
    });

    it('getTimeObjFromCurrent should merge with current defaults and handle seconds flag', () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date('2030-01-02T03:04:05'));

        const merged = getTimeObjFromCurrent({ hours: 10, minutes: 20 }, false);
        expect(merged.hours).toBe(10);
        expect(merged.minutes).toBe(20);
        expect(merged.seconds).toBe(0); // seconds disabled -> 0

        const merged2 = getTimeObjFromCurrent({}, true);
        // When seconds enabled, it should use current seconds; with fake timers it's 5
        expect(typeof merged2.hours).toBe('number');
        expect(typeof merged2.minutes).toBe('number');
        expect(merged2.seconds).toBe(5);

        vi.useRealTimers();
    });

    it('getBeforeAndAfterInRange should return dates around given date at midnight', () => {
        const base = new Date('2024-08-15T12:00:00');
        const { before, after } = getBeforeAndAfterInRange(3, base);
        expect(before.getDate()).toBe(12);
        expect(before.getHours()).toBe(0);
        expect(after.getDate()).toBe(18);
        expect(after.getHours()).toBe(0);
    });

    it('timeGetter should return value or duplicated array for range', () => {
        const date = new Date('2024-01-01T08:09:10');
        expect(timeGetter('hours', null, date, false)).toBe(8);
        expect(timeGetter('minutes', [date, date], date, true)).toEqual([9, 9]);
        expect(timeGetter('seconds', null, date, false)).toBe(10);
    });

    it('getWeekFromDate should return the start and end of the week based on weekStart', () => {
        const date = new Date('2024-03-13'); // Wednesday
        const [start, end] = getWeekFromDate(date, 1); // week starts Monday
        expect(start).toBeInstanceOf(Date);
        expect(end).toBeInstanceOf(Date);
        expect(start.getDay()).toBe(1);
        expect(end.getDay()).toBe(0);
    });
});
