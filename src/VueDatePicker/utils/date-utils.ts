import { parse, isDate, isValid } from 'date-fns';

const parseTextToDate = (value: string, pattern: string): Date | null => {
    const parsedDate = parse(value, pattern.slice(0, value.length), new Date());
    if (isValid(parsedDate) && isDate(parsedDate)) {
        return parsedDate;
    }
    return null;
};

export const parseFreeInput = (
    value: string,
    pattern: string | string[] | ((value: string) => Date | null),
): Date | null => {
    if (typeof pattern === 'string') {
        return parseTextToDate(value, pattern);
    }

    if (Array.isArray(pattern)) {
        let parsedDate = null;
        for (const textVal of pattern) {
            parsedDate = parseTextToDate(value, textVal);
            if (parsedDate) {
                break;
            }
        }
        return parsedDate;
    }

    if (typeof pattern === 'function') {
        return pattern(value);
    }

    return null;
};

export const dateToUtc = (date: Date, preserve: boolean) => {
    if (preserve) {
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${date.getFullYear()}-${month}-${day}T${hours}:${minutes}:00.000Z`;
    }
    const utcDate = Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
    );

    return new Date(utcDate).toISOString();
};
