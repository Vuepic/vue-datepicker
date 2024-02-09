import { describe, expect, it } from 'vitest';
import { localToTz, sanitizeDateToLocal } from '@/utils/timezone';
import { differenceInHours, getYear } from 'date-fns';

const getOffset = (date: Date) => {
    return Math.abs(date.getTimezoneOffset() / 60);
};
describe('Timezone functionality', () => {
    it('Should get date value in a specific timezone', () => {
        const local = new Date();
        const offset = getOffset(local);
        const zoned = localToTz(local, 'UTC');

        expect(differenceInHours(local, zoned)).toEqual(offset);
    });

    it('Should map date to a timezone depending on the timezone config', () => {
        const today = new Date();
        const utc = `${getYear(today)}-01-15T01:00:00Z`;
        const utcExact = new Date(getYear(today), 0, 15, 1, 0, 0, 0);
        const offset = getOffset(today);
        const dateInTz = sanitizeDateToLocal(today, { timezone: 'UTC', exactMatch: false });
        expect(differenceInHours(today, dateInTz as Date)).toEqual(offset);

        const dateExact = sanitizeDateToLocal(utc, {
            timezone: 'UTC',
            exactMatch: true,
            dateInTz: 'utc',
        });
        expect(dateExact).toEqual(utcExact);

        const localToExact = sanitizeDateToLocal(today, { timezone: 'America/New_York', exactMatch: true });
        expect(localToExact).toEqual(today);
    });
});
