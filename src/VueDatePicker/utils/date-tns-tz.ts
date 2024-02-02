/**
 * This is a port of only needed functions from date-fns-tz package
 * As of time of writing this, date-fns-tz doesn't support date-fns@3, therefore this override is used
 */
// @SONAR_START@
const MILLISECONDS_IN_HOUR = 3600000;
const MILLISECONDS_IN_MINUTE = 60000;
const DEFAULT_ADDITIONAL_DIGITS = 2;
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const tzPattern = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;

const patterns = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,

    // year tokens
    YY: /^(\d{2})$/,
    YYY: [
        /^([+-]\d{2})$/, // 0 additional digits
        /^([+-]\d{3})$/, // 1 additional digit
        /^([+-]\d{4})$/, // 2 additional digits
    ],
    YYYY: /^(\d{4})/,
    YYYYY: [
        /^([+-]\d{4})/, // 0 additional digits
        /^([+-]\d{5})/, // 1 additional digit
        /^([+-]\d{6})/, // 2 additional digits
    ],

    // date tokens
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,

    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

    // time zone tokens (to identify the presence of a tz)
    timezone: /([Z+-].*)$/,
    timeZone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/,
};

export const utcToZonedTime = (dirtyDate: Date | string | number, timeZone: string, options?: any) => {
    const date = toDate(dirtyDate, options);

    const offsetMilliseconds = tzParseTimezone(timeZone, date, true);

    const d = new Date(date.getTime() - offsetMilliseconds);

    const resultDate = new Date(0);

    resultDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());

    resultDate.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());

    return resultDate;
};

export const zonedTimeToUtc = (date: Date | string | number, timeZone: string, options?: any) => {
    if (typeof date === 'string' && !date.match(tzPattern)) {
        const extendedOptions = cloneObject(options);
        extendedOptions.timeZone = timeZone;
        return toDate(date, extendedOptions);
    }

    const d = toDate(date, options);

    const utc = newDateUTC(
        d.getFullYear(),
        d.getMonth(),
        d.getDate(),
        d.getHours(),
        d.getMinutes(),
        d.getSeconds(),
        d.getMilliseconds(),
    ).getTime();

    const offsetMilliseconds = tzParseTimezone(timeZone, new Date(utc));

    return new Date(utc + offsetMilliseconds);
};

function tzParseTimezone(timezoneString: string, date: Date | number | string, isUtcDate?: boolean) {
    let token;
    let absoluteOffset;

    // Empty string
    if (!timezoneString) {
        return 0;
    }

    // Z
    token = patterns.timezoneZ.exec(timezoneString);
    if (token) {
        return 0;
    }

    let hours;

    // ±hh
    token = patterns.timezoneHH.exec(timezoneString);
    if (token) {
        hours = parseInt(token[1], 10);

        if (!validateTimezone(hours)) {
            return NaN;
        }

        return -(hours * MILLISECONDS_IN_HOUR);
    }

    // ±hh:mm or ±hhmm
    token = patterns.timezoneHHMM.exec(timezoneString);
    if (token) {
        hours = parseInt(token[1], 10);
        const minutes = parseInt(token[2], 10);

        if (!validateTimezone(hours, minutes)) {
            return NaN;
        }

        absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
        return hours > 0 ? -absoluteOffset : absoluteOffset;
    }

    // IANA time zone
    if (isValidTimezoneIANAString(timezoneString)) {
        date = new Date(date || Date.now());
        const utcDate = isUtcDate ? date : toUtcDate(date);

        const offset = calcOffset(utcDate, timezoneString);

        const fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString);

        return -fixedOffset;
    }

    return NaN;
}

const validIANATimezoneCache: Record<string, boolean> = {};
function isValidTimezoneIANAString(timeZoneString: string) {
    if (validIANATimezoneCache[timeZoneString]) return true;
    try {
        new Intl.DateTimeFormat(undefined, { timeZone: timeZoneString });
        validIANATimezoneCache[timeZoneString] = true;
        return true;
    } catch (error) {
        return false;
    }
}

function fixOffset(date: Date, offset: number, timezoneString: string) {
    const localTS = date.getTime();

    // Our UTC time is just a guess because our offset is just a guess
    let utcGuess = localTS - offset;

    // Test whether the zone matches the offset for this ts
    const o2 = calcOffset(new Date(utcGuess), timezoneString);

    // If so, offset didn't change, and we're done
    if (offset === o2) {
        return offset;
    }

    // If not, change the ts by the difference in the offset
    utcGuess -= o2 - offset;

    // If that gives us the local time we want, we're done
    const o3 = calcOffset(new Date(utcGuess), timezoneString);
    if (o2 === o3) {
        return o2;
    }

    // If it's different, we're in a hole time. The offset has changed, but we don't adjust the time
    return Math.max(o2, o3);
}

function validateTimezone(hours: number, minutes?: number) {
    return -23 <= hours && hours <= 23 && (minutes == null || (0 <= minutes && minutes <= 59));
}

function calcOffset(date: Date, timezoneString: string) {
    const tokens = tzTokenizeDate(date, timezoneString) as number[];

    // ms dropped because it's not provided by tzTokenizeDate
    const asUTC = newDateUTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3] % 24, tokens[4], tokens[5], 0).getTime();

    let asTS = date.getTime();
    const over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return asUTC - asTS;
}

function newDateUTC(
    fullYear: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    millisecond: number,
) {
    const utcDate = new Date(0);
    utcDate.setUTCFullYear(fullYear, month, day);
    utcDate.setUTCHours(hour, minute, second, millisecond);
    return utcDate;
}

function tzTokenizeDate(date: Date, timeZone: string) {
    const dtf = getDateTimeFormat(timeZone);
    return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}

const dtfCache: Record<string, any> = {};
function getDateTimeFormat(timeZone: string) {
    if (!dtfCache[timeZone]) {
        // New browsers use `hourCycle`, IE and Chrome <73 does not support it and uses `hour12`
        const testDateFormatted = new Intl.DateTimeFormat('en-US', {
            hour12: false,
            timeZone: 'America/New_York',
            year: 'numeric',
            month: 'numeric',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }).format(new Date('2014-06-25T04:00:00.123Z'));
        const hourCycleSupported =
            testDateFormatted === '06/25/2014, 00:00:00' || testDateFormatted === '06/25/2014 00:00:00';

        dtfCache[timeZone] = hourCycleSupported
            ? new Intl.DateTimeFormat('en-US', {
                  hour12: false,
                  timeZone: timeZone,
                  year: 'numeric',
                  month: 'numeric',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
              })
            : new Intl.DateTimeFormat('en-US', {
                  hourCycle: 'h23',
                  timeZone: timeZone,
                  year: 'numeric',
                  month: 'numeric',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
              });
    }
    return dtfCache[timeZone];
}

const typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5,
};

function partsOffset(dtf: any, date: any) {
    try {
        const formatted = dtf.formatToParts(date);
        const filled = [];
        for (let i = 0; i < formatted.length; i++) {
            const pos = typeToPos[formatted[i].type as keyof typeof typeToPos];

            if (pos >= 0) {
                filled[pos] = parseInt(formatted[i].value, 10);
            }
        }
        return filled;
    } catch (error) {
        if (error instanceof RangeError) {
            return [NaN];
        }
        throw error;
    }
}

function hackyOffset(dtf: any, date: any) {
    const formatted = dtf.format(date).replace(/\u200E/g, '');
    const parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted) as string[];
    // var [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed
    // return [fYear, fMonth, fDay, fHour, fMinute, fSecond]
    return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]];
}

export const getTimezoneOffset = (timeZone: string, date?: Date) => {
    return -tzParseTimezone(timeZone, date as Date);
};

function toDate(argument: Date | string | number, dirtyOptions?: any) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }

    if (argument === null) {
        return new Date(NaN);
    }

    const options = dirtyOptions || {};

    const additionalDigits =
        options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);
    if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
        throw new RangeError('additionalDigits must be 0, 1 or 2');
    }

    // Clone the date
    if (
        argument instanceof Date ||
        (typeof argument === 'object' && Object.prototype.toString.call(argument) === '[object Date]')
    ) {
        // Prevent the date to lose the milliseconds when passed to new Date() in IE10
        return new Date(argument.getTime());
    } else if (typeof argument === 'number' || Object.prototype.toString.call(argument) === '[object Number]') {
        return new Date(argument);
    } else if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
        return new Date(NaN);
    }

    const dateStrings = splitDateString(argument);

    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    const year = parseYearResult.year;
    const restDateString = parseYearResult.restDateString;

    const date = parseDate(restDateString as string, year as number);

    function parseDate(dateString: string, year: number) {
        // Invalid ISO-formatted year
        if (year === null) {
            return null;
        }

        let token;
        let date;
        let month;
        let week;

        // YYYY
        if (dateString.length === 0) {
            date = new Date(0);
            date.setUTCFullYear(year);
            return date;
        }

        // YYYY-MM
        token = patterns.MM.exec(dateString);
        if (token) {
            date = new Date(0);
            month = parseInt(token[1], 10) - 1;

            if (!validateDate(year, month)) {
                return new Date(NaN);
            }

            date.setUTCFullYear(year, month);
            return date;
        }

        // YYYY-DDD or YYYYDDD
        token = patterns.DDD.exec(dateString);
        if (token) {
            date = new Date(0);
            const dayOfYear = parseInt(token[1], 10);

            if (!validateDayOfYearDate(year, dayOfYear)) {
                return new Date(NaN);
            }

            date.setUTCFullYear(year, 0, dayOfYear);
            return date;
        }

        // yyyy-MM-dd or YYYYMMDD
        token = patterns.MMDD.exec(dateString);
        if (token) {
            date = new Date(0);
            month = parseInt(token[1], 10) - 1;
            const day = parseInt(token[2], 10);

            if (!validateDate(year, month, day)) {
                return new Date(NaN);
            }

            date.setUTCFullYear(year, month, day);
            return date;
        }

        // YYYY-Www or YYYYWww
        token = patterns.Www.exec(dateString);
        if (token) {
            week = parseInt(token[1], 10) - 1;

            if (!validateWeekDate(year, week)) {
                return new Date(NaN);
            }

            return dayOfISOWeekYear(year, week);
        }

        // YYYY-Www-D or YYYYWwwD
        token = patterns.WwwD.exec(dateString);
        if (token) {
            week = parseInt(token[1], 10) - 1;
            const dayOfWeek = parseInt(token[2], 10) - 1;

            if (!validateWeekDate(year, week, dayOfWeek)) {
                return new Date(NaN);
            }

            return dayOfISOWeekYear(year, week, dayOfWeek);
        }

        // Invalid ISO-formatted date
        return null;
    }

    if (isNaN(date as unknown as number)) {
        return new Date(NaN);
    }

    if (date) {
        const timestamp = date.getTime();
        let time = 0;
        let offset;

        if (dateStrings.time) {
            time = parseTime(dateStrings.time) as number;

            if (isNaN(time)) {
                return new Date(NaN);
            }
        }

        if (dateStrings.timeZone || options.timeZone) {
            offset = tzParseTimezone(dateStrings.timeZone || options.timeZone, new Date(timestamp + time));
            if (isNaN(offset)) {
                return new Date(NaN);
            }
        } else {
            // get offset accurate to hour in time zones that change offset
            offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
            offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time + offset));
        }

        return new Date(timestamp + time + offset);
    } else {
        return new Date(NaN);
    }
}

function dayOfISOWeekYear(isoWeekYear: number, week: number, day?: number) {
    week = week || 0;
    day = day || 0;
    const date = new Date(0);
    date.setUTCFullYear(isoWeekYear, 0, 4);
    const fourthOfJanuaryDay = date.getUTCDay() || 7;
    const diff = week * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}

// Validation functions

function isLeapYearIndex(year: number) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function validateDate(year: number, month: number, date?: number) {
    if (month < 0 || month > 11) {
        return false;
    }

    if (date != null) {
        if (date < 1) {
            return false;
        }

        const isLeapYear = isLeapYearIndex(year);
        if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
            return false;
        }
        if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
            return false;
        }
    }

    return true;
}

function validateDayOfYearDate(year: number, dayOfYear: number) {
    if (dayOfYear < 1) {
        return false;
    }

    const isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && dayOfYear > 366) {
        return false;
    }
    return !(!isLeapYear && dayOfYear > 365);
}

function validateWeekDate(year: number, week: number, day?: number) {
    if (week < 0 || week > 52) {
        return false;
    }

    return !(day != null && (day < 0 || day > 6));
}

function validateTime(hours: number, minutes?: number, seconds?: number) {
    if (hours != null && (hours < 0 || hours >= 25)) {
        return false;
    }

    if (minutes != null && (minutes < 0 || minutes >= 60)) {
        return false;
    }

    return !(seconds != null && (seconds < 0 || seconds >= 60));
}

function parseTime(timeString: string) {
    let token;
    let hours;
    let minutes;

    // hh
    token = patterns.HH.exec(timeString);
    if (token) {
        hours = parseFloat(token[1].replace(',', '.'));

        if (!validateTime(hours)) {
            return NaN;
        }

        return (hours % 24) * MILLISECONDS_IN_HOUR;
    }

    // hh:mm or hhmm
    token = patterns.HHMM.exec(timeString);
    if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseFloat(token[2].replace(',', '.'));

        if (!validateTime(hours, minutes)) {
            return NaN;
        }

        return (hours % 24) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    }

    // hh:mm:ss or hhmmss
    token = patterns.HHMMSS.exec(timeString);
    if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseInt(token[2], 10);
        const seconds = parseFloat(token[3].replace(',', '.'));

        if (!validateTime(hours, minutes, seconds)) {
            return NaN;
        }

        return (hours % 24) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
    }

    // Invalid ISO-formatted time
    return null;
}

function parseYear(dateString: string, additionalDigits: number) {
    const patternYYY = patterns.YYY[additionalDigits];
    const patternYYYYY = patterns.YYYYY[additionalDigits];

    let token;

    // YYYY or ±YYYYY
    token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
    if (token) {
        const yearString = token[1];
        return {
            year: parseInt(yearString, 10),
            restDateString: dateString.slice(yearString.length),
        };
    }

    // YY or ±YYY
    token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
    if (token) {
        const centuryString = token[1];
        return {
            year: parseInt(centuryString, 10) * 100,
            restDateString: dateString.slice(centuryString.length),
        };
    }

    // Invalid ISO-formatted year
    return {
        year: null,
    };
}

function splitDateString(dateString: string) {
    const dateStrings: Record<string, any> = {};
    let parts = patterns.dateTimePattern.exec(dateString);
    let timeString;

    if (!parts) {
        parts = patterns.datePattern.exec(dateString);
        if (parts) {
            dateStrings.date = parts[1];
            timeString = parts[2];
        } else {
            dateStrings.date = null;
            timeString = dateString;
        }
    } else {
        dateStrings.date = parts[1];
        timeString = parts[3];
    }

    if (timeString) {
        const token = patterns.timeZone.exec(timeString);
        if (token) {
            dateStrings.time = timeString.replace(token[1], '');
            dateStrings.timeZone = token[1].trim();
        } else {
            dateStrings.time = timeString;
        }
    }

    return dateStrings;
}

function getTimezoneOffsetInMilliseconds(date: Date | number | string): number {
    const _date = toDate(date);
    const utcDate = new Date(
        Date.UTC(
            _date.getFullYear(),
            _date.getMonth(),
            _date.getDate(),
            _date.getHours(),
            _date.getMinutes(),
            _date.getSeconds(),
            _date.getMilliseconds(),
        ),
    );
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}
function toInteger<T>(dirtyNumber: T): T extends number ? T : number {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
        return NaN as T extends number ? T : number;
    }

    const number = Number(dirtyNumber);

    if (isNaN(number)) {
        return number as T extends number ? T : number;
    }

    return (number < 0 ? Math.ceil(number) : Math.floor(number)) as T extends number ? T : number;
}

function cloneObject<T>(object: T): T {
    return assign({}, object);
}

function assign<T, U>(target: T, object: U): T & U {
    if (target == null) {
        throw new TypeError('assign requires that input parameter not be null or undefined');
    }

    for (const property in object) {
        if (Object.prototype.hasOwnProperty.call(object, property)) {
            (target as any)[property] = object[property];
        }
    }

    return target as T & U;
}

function toUtcDate(date: Date) {
    return newDateUTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds(),
    );
}

//@SONAR_STOP@
