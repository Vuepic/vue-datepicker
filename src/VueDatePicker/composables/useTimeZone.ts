import { TZDate } from '@date-fns/tz';
import { useDateUtils } from '@/composables/useDateUtils.ts';
import type { MaybeDate, TimeZoneConfig } from '@/types';

export const useTimeZone = () => {
    const { getDate, resetDateTime } = useDateUtils();

    const toTzSafe = (maybeDate: MaybeDate, tz: TimeZoneConfig, reset?: boolean) => {
        if (!maybeDate) return null;
        const date = reset ? resetDateTime(maybeDate, true) : getDate(maybeDate);
        if (!tz) return date;
        return new TZDate(date, tz.timezone);
    };

    return {
        toTzSafe,
    };
};
