import { getDate, resetDateTime } from '@/utils/date-utils';
import type { MaybeDate, TimeZoneConfig } from '@/interfaces';

/**
 * Converts date from the local timezone into the specific timezone
 */
export const localToTz = (date: Date, timeZone?: string) => {
    if (!timeZone) return new Date(date);
    return new Date(date.toLocaleString('en-US', { timeZone }));
};

export const dateToTimezoneSafe = (date: Date | string | number, tz?: TimeZoneConfig, reset?: boolean) => {
    const d = sanitizeDateToLocal(date, tz, reset);
    if (!d) return getDate();
    return d;
};

const getDateInTz = (date: Date | number | string, tz: TimeZoneConfig, reset?: boolean) => {
    const newDate = tz.dateInTz ? localToTz(new Date(date), tz.dateInTz) : getDate(date);
    return reset ? resetDateTime(newDate, true) : newDate;
};

// Converts specific date to a Date object based on a provided timezone
export const sanitizeDateToLocal = (date: MaybeDate, tz?: TimeZoneConfig, reset?: boolean) => {
    if (!date) return null;
    const newDate = reset ? resetDateTime(getDate(date), true) : getDate(date);
    if (!tz) return newDate;
    return tz.exactMatch ? getDateInTz(date, tz, reset) : localToTz(newDate, tz.timezone);
};

const isDST = (date: Date) => {
    const january = new Date(date.getFullYear(), 0, 1);

    const januaryOffset = january.getTimezoneOffset();
    const dateOffset = date.getTimezoneOffset();

    return dateOffset < januaryOffset;
};

export const getTimezoneOffset = (timezone?: string, localDate?: Date) => {
    if (!timezone) return 0;
    const date = new Date();
    const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
    const specificDate = new Date(date.toLocaleString('en-US', { timeZone: timezone }));
    const dateToOffset = isDST(localDate ?? specificDate) ? specificDate : (localDate ?? specificDate);
    const dstOffset = dateToOffset!.getTimezoneOffset() / 60;
    return (+utcDate - +specificDate) / (1000 * 60 * 60) - dstOffset;
};
