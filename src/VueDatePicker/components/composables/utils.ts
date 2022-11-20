import { computed } from 'vue';
import { format, getHours, getMinutes, getSeconds } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

import { errors } from '@/utils/util';
import { useState } from '@/components/composables/state';
import { dateValidator, isValidTime } from '@/utils/date-utils';

import type { Flow, TimeModel } from '@/interfaces';

export const useUtils = () => {
    const { internalModelValue, config } = useState();

    // Check for partial range enabled on null value as second item in the array
    const checkPartialRangeValue = (): Date => {
        if (config.value.partialRange) return null as unknown as Date;
        throw new Error(errors.prop('partial-range'));
    };

    // Execute some code depending on the range prop, if not, throw error
    const checkRangeEnabled = <T>(fn: () => T): T => {
        if (config.value.range) return fn();
        throw new Error(errors.prop('range'));
    };

    // Shared method for time format
    const getTimeFormat = (): string => {
        const seconds = config.value.enableSeconds ? ':ss' : '';
        return config.value.is24 ? `HH:mm${seconds}` : `hh:mm${seconds} aa`;
    };

    // Get default format pattern, returns user specified if defined first
    const getDefaultPattern = (): string => {
        if (config.value.format) return config.value.format as string;
        if (config.value.monthPicker) return 'MM/yyyy';
        if (config.value.timePicker) return getTimeFormat();
        if (config.value.weekPicker) return 'MM/dd/yyyy';
        if (config.value.yearPicker) return 'yyyy';
        return config.value.enableTimePicker ? `MM/dd/yyyy, ${getTimeFormat()}` : 'MM/dd/yyyy';
    };

    // Format date to a  human-readable output
    const formatDate = (value: Date | Date[]) => {
        if (typeof config.value.format === 'function') return config.value.format(value);
        const pattern = getDefaultPattern();
        const options = config.value.formatLocale ? { locale: config.value.formatLocale } : undefined;

        if (Array.isArray(value)) {
            return `${format(value[0], pattern, options)} ${
                config.value.modelAuto && !value[1] ? '' : config.value.textInputOptions.rangeSeparator || '-'
            } ${value[1] ? format(value[1], pattern, options) : ''}`;
        }

        return format(value, pattern, options);
    };

    // Converts utc date to a timezone date
    const getZonedDate = (date: Date): Date => {
        return config.value.timezone ? utcToZonedTime(date, config.value.timezone) : date;
    };

    // Convert zoned date back to utc date
    const getZonedToUtc = (date: Date): Date => {
        return config.value.timezone ? zonedTimeToUtc(date, config.value.timezone) : date;
    };

    // Instead of using everywhere new Date(), this is the central place for getting or parsing the date
    const getDate = (value?: Date | string | number) => (value ? new Date(value) : new Date());

    const hideNavigationButtons = computed(() => (key: Flow) => {
        return config.value.hideNavigation?.includes(key);
    });

    const validateDate = (date: Date) => {
        const { validate } = dateValidator(
            config.value.minDate,
            config.value.maxDate,
            config.value.disabledDates,
            config.value.allowedDates,
            config.value.filters,
            config.value.disabledWeekDays,
            config.value.yearRange,
        );

        return validate(date);
    };

    const validateTime = () => {
        const validTime =
            !config.value.enableTimePicker ||
            config.value.monthPicker ||
            config.value.yearPicker ||
            config.value.ignoreTimeValidation;

        if (validTime) return true;

        return isValidTime(
            internalModelValue.value,
            config.value.minTime,
            config.value.maxTime,
            config.value.maxDate,
            config.value.minDate,
        );
    };

    const assignDefaultTime = (obj: TimeModel): TimeModel => {
        const defaultTime = {
            hours: getHours(getDate()),
            minutes: getMinutes(getDate()),
            seconds: getSeconds(getDate()),
        };
        return Object.assign(defaultTime, obj);
    };

    const getDefaultStartTime = (): TimeModel | TimeModel[] | null => {
        if (config.value.range) {
            if (config.value.startTime && Array.isArray(config.value.startTime)) {
                return [assignDefaultTime(config.value.startTime[0]), assignDefaultTime(config.value.startTime[1])];
            }
            return null;
        }
        return config.value.startTime && !Array.isArray(config.value.startTime)
            ? assignDefaultTime(config.value.startTime)
            : null;
    };

    /**
     * Check if date is between max and min date, or if it is included in filters
     */
    const isDisabled = (date: Date): boolean => {
        return !validateDate(date);
    };

    return {
        checkPartialRangeValue,
        checkRangeEnabled,
        getZonedDate,
        getZonedToUtc,
        getDate,
        formatDate,
        getDefaultPattern,
        validateDate,
        validateTime,
        getDefaultStartTime,
        isDisabled,
        hideNavigationButtons,
    };
};
