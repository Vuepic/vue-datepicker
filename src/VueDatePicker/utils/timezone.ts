import { getDate } from '@/utils/date-utils';
import type { MaybeDate, TimeZoneConfig } from '@/interfaces';

/**
 * Converts date from the local timezone into the specific timezone
 */
export const localToTz = (date: Date, timeZone?: string) => {
    if (!timeZone) return new Date(date);
    return new Date(date.toLocaleString('en-US', { timeZone }));
};

export const dateToTimezoneSafe = (date: Date | string | number, tz?: TimeZoneConfig) => {
    const d = sanitizeDateToLocal(date, tz);
    if (!d) return getDate();
    return d;
};

const getDateInTz = (date: Date | number | string, tz: TimeZoneConfig) => {
    return tz.dateInTz ? localToTz(new Date(date), tz.dateInTz) : getDate(date);
};

// Converts specific date to a Date object based on a provided timezone
export const sanitizeDateToLocal = (date: MaybeDate, tz?: TimeZoneConfig) => {
    if (!date) return null;
    if (!tz) return getDate(date);
    const local = getDate(date);
    return tz.exactMatch ? getDateInTz(date, tz) : localToTz(local, tz.timezone);
};
