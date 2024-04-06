import { ref } from 'vue';
import { addDays } from 'date-fns';

import { useDefaults, useValidation } from '@/composables/index';
import { isModelAuto, matchDate } from '@/utils/util';
import { isDateAfter, isDateBefore, isDateBetween, isDateEqual, getDate, getWeekFromDate } from '@/utils/date-utils';
import { localToTz } from '@/utils/timezone';

import type { UnwrapRef, WritableComputedRef } from 'vue';
import type { ICalendarDay, InternalModuleValue } from '@/interfaces';
import type { PickerBasePropsType } from '@/props';

export const useCalendarClass = (modelValue: WritableComputedRef<InternalModuleValue>, props: PickerBasePropsType) => {
    const { defaultedMultiCalendars, defaultedMultiDates, defaultedHighlight, defaultedTz, propDates, defaultedRange } =
        useDefaults(props);
    const { isDisabled } = useValidation(props);
    // Track hovered date
    const hoveredDate = ref<Date | null>(null);
    // Today date
    const today = ref<Date>(localToTz(new Date(), defaultedTz.value.timezone));

    /**
     * When using range picker keep track of hovered value in the calendar
     */
    const setHoverDate = (day: UnwrapRef<ICalendarDay>): void => {
        if (!day.current && props.hideOffsetDates) {
            return;
        }
        hoveredDate.value = day.value;
    };

    // When mouse leaves the menu clear the hover date data
    const clearHoverDate = (): void => {
        hoveredDate.value = null;
    };

    const checkRangeDirection = (isStart: boolean): boolean => {
        if (
            Array.isArray(modelValue.value) &&
            defaultedRange.value.enabled &&
            modelValue.value[0] &&
            hoveredDate.value
        ) {
            return isStart
                ? isDateAfter(hoveredDate.value, modelValue.value[0])
                : isDateBefore(hoveredDate.value, modelValue.value[0]);
        }
        return true;
    };

    const checkDateEqual = (day: ICalendarDay, isStart: boolean) => {
        const startDateCompare = () => {
            if (!modelValue.value) return null;
            return isStart ? (modelValue.value as Date[])[0] || null : (modelValue.value as Date[])[1];
        };
        const dateToCompare = modelValue.value && Array.isArray(modelValue.value) ? startDateCompare() : null;
        return isDateEqual(getDate(day.value), dateToCompare);
    };

    const checkDateBefore = (isStart: boolean) => {
        const dateToCompare = Array.isArray(modelValue.value) ? modelValue.value[0] : null;
        return isStart ? !isDateBefore(hoveredDate.value ?? null, dateToCompare) : true;
    };

    /**
     * Check when to add a proper active start/end date class on range picker
     */
    const rangeActiveStartEnd = (day: UnwrapRef<ICalendarDay>, isStart = true): boolean => {
        if (
            (defaultedRange.value.enabled || props.weekPicker) &&
            Array.isArray(modelValue.value) &&
            modelValue.value.length === 2
        ) {
            if (props.hideOffsetDates && !day.current) return false;
            return isDateEqual(getDate(day.value), modelValue.value[isStart ? 0 : 1]);
        }

        if (defaultedRange.value.enabled) {
            return (
                (checkDateEqual(day, isStart) && checkDateBefore(isStart)) ||
                (isDateEqual(day.value, Array.isArray(modelValue.value) ? modelValue.value[0] : null) &&
                    checkRangeDirection(isStart))
            );
        }
        return false;
    };

    // If the range mode is used, checks for the end value of hovered date
    const isHoverDateStartEnd = (calendarDay: ICalendarDay, start?: boolean): boolean => {
        if (Array.isArray(modelValue.value) && modelValue.value[0] && modelValue.value.length === 1) {
            const isHover = isDateEqual(calendarDay.value, hoveredDate.value);
            return start
                ? isDateAfter(modelValue.value[0], calendarDay.value) && isHover
                : isDateBefore(modelValue.value[0], calendarDay.value) && isHover;
        }
        return false;
    };

    /**
     * Check if some date is active, in case of range, it will have two dates
     */
    const isActiveDate = (calendarDay: ICalendarDay): boolean => {
        if (!modelValue.value) return false;
        if (props.hideOffsetDates && !calendarDay.current) return false;
        if (!defaultedRange.value.enabled) {
            if (defaultedMultiDates.value.enabled && Array.isArray(modelValue.value)) {
                return modelValue.value.some((dateVal) => isDateEqual(dateVal, calendarDay.value));
            }
            return isDateEqual(calendarDay.value, modelValue.value ? (modelValue.value as Date) : today.value);
        }
        if (props.modelAuto && Array.isArray(modelValue.value)) {
            return isDateEqual(calendarDay.value, modelValue.value[0] ? modelValue.value[0] : today.value);
        }
        return false;
    };

    /**
     * Check if range ends on the given day
     */
    const isHoverRangeEnd = (day: UnwrapRef<ICalendarDay>): boolean => {
        if (defaultedRange.value.autoRange || props.weekPicker) {
            if (hoveredDate.value) {
                if (props.hideOffsetDates && !day.current) return false;
                const rangeEnd = addDays(hoveredDate.value, +(defaultedRange.value.autoRange as number));
                const range = getWeekFromDate(getDate(hoveredDate.value), props.weekStart);
                return props.weekPicker
                    ? isDateEqual(range[1], getDate(day.value))
                    : isDateEqual(rangeEnd, getDate(day.value));
            }
            return false;
        }
        return false;
    };

    /**
     * Check if date in auto range preview is in between
     */
    const isAutoRangeInBetween = (day: UnwrapRef<ICalendarDay>): boolean => {
        if (defaultedRange.value.autoRange || props.weekPicker) {
            if (hoveredDate.value) {
                const rangeEnd = addDays(hoveredDate.value, +(defaultedRange.value.autoRange as number));
                if (props.hideOffsetDates && !day.current) return false;
                const range = getWeekFromDate(getDate(hoveredDate.value), props.weekStart);
                return props.weekPicker
                    ? isDateAfter(day.value, range[0]) && isDateBefore(day.value, range[1])
                    : isDateAfter(day.value, hoveredDate.value) && isDateBefore(day.value, rangeEnd);
            }
            return false;
        }
        return false;
    };

    const isAutoRangeStart = (day: UnwrapRef<ICalendarDay>): boolean => {
        if (defaultedRange.value.autoRange || props.weekPicker) {
            if (hoveredDate.value) {
                if (props.hideOffsetDates && !day.current) return false;
                const range = getWeekFromDate(getDate(hoveredDate.value), props.weekStart);
                return props.weekPicker ? isDateEqual(range[0], day.value) : isDateEqual(hoveredDate.value, day.value);
            }
            return false;
        }
        return false;
    };

    /**
     * If range mode used, this will check if the calendar day is between 2 active dates
     */
    const rangeActive = (calendarDay: ICalendarDay): boolean => {
        return isDateBetween(modelValue.value as Date[], hoveredDate.value, calendarDay.value);
    };

    const isSingleInModelAuto = (): boolean => {
        if (props.modelAuto && Array.isArray(props.internalModelValue)) {
            return !!props.internalModelValue[0];
        }
        return false;
    };

    const isModelAutoActive = () => {
        if (props.modelAuto) return isModelAuto(props.internalModelValue);
        return true;
    };

    // Check if date is hovered, for single picker mode
    const dateHover = (day: ICalendarDay) => {
        if (props.weekPicker) return false;
        const isInRange = defaultedRange.value.enabled
            ? !rangeActiveStartEnd(day) && !rangeActiveStartEnd(day, false)
            : true;

        return !isDisabled(day.value) && !isActiveDate(day) && !(!day.current && props.hideOffsetDates) && isInRange;
    };

    // Check if the date is selected
    const isActive = (day: ICalendarDay) => {
        if (defaultedRange.value.enabled) {
            return props.modelAuto ? isSingleInModelAuto() && isActiveDate(day) : false;
        }
        return isActiveDate(day);
    };

    // Check if the date should be highlighted
    const highlighted = (day: ICalendarDay) => {
        if (defaultedHighlight.value) {
            return matchDate(day.value, propDates.value.highlight);
        }
        return false;
    };

    // If enabled, checks the days that are also highlighted to not be marked as disabled
    const disableHighlight = (day: ICalendarDay) => {
        const disabled = isDisabled(day.value);
        return (
            disabled &&
            (typeof defaultedHighlight.value === 'function'
                ? !defaultedHighlight.value(day.value, disabled)
                : !defaultedHighlight.value.options.highlightDisabled)
        );
    };

    // Check if the given week day should be highlighted
    const highlightedWeekDay = (day: ICalendarDay) => {
        if (typeof defaultedHighlight.value === 'function') return defaultedHighlight.value(day.value);
        return defaultedHighlight.value.weekdays?.includes(day.value.getDay());
    };

    const isBetween = (day: ICalendarDay) => {
        if (
            (defaultedRange.value.enabled || props.weekPicker) &&
            (defaultedMultiCalendars.value.count > 0 ? day.current : true) &&
            isModelAutoActive() &&
            !(!day.current && props.hideOffsetDates) &&
            !isActiveDate(day)
        ) {
            return rangeActive(day);
        }
        return false;
    };

    // Common classes to be checked for any mode
    const sharedClasses = (day: ICalendarDay): Record<string, boolean> => {
        const { isRangeStart, isRangeEnd } = rangeStartEnd(day);
        const isRangeStartEnd = defaultedRange.value.enabled ? isRangeStart || isRangeEnd : false;
        return {
            dp__cell_offset: !day.current,
            dp__pointer: !props.disabled && !(!day.current && props.hideOffsetDates) && !isDisabled(day.value),
            dp__cell_disabled: isDisabled(day.value),
            dp__cell_highlight:
                !disableHighlight(day) &&
                (highlighted(day) || highlightedWeekDay(day)) &&
                !isActive(day) &&
                !isRangeStartEnd &&
                !isAutoRangeStart(day) &&
                !(isBetween(day) && props.weekPicker) &&
                !isRangeEnd,
            dp__cell_highlight_active:
                !disableHighlight(day) && (highlighted(day) || highlightedWeekDay(day)) && isActive(day),
            dp__today: !props.noToday && isDateEqual(day.value, today.value) && day.current,
            'dp--past': isDateBefore(day.value, today.value),
            'dp--future': isDateAfter(day.value, today.value),
        };
    };

    // Get set of classes for the single date picker
    const singleDateClasses = (day: ICalendarDay): Record<string, boolean> => {
        return {
            dp__active_date: isActive(day),
            dp__date_hover: dateHover(day),
        };
    };

    // Get set of classes for the single week picker
    const weekPickerSingleClasses = (day: ICalendarDay): Record<string, boolean> => {
        if (modelValue.value && !Array.isArray(modelValue.value)) {
            const week = getWeekFromDate(modelValue.value, props.weekStart);
            return {
                ...autoRangeClasses(day),
                dp__range_start: isDateEqual(week[0], day.value),
                dp__range_end: isDateEqual(week[1], day.value),
                dp__range_between_week: isDateAfter(day.value, week[0]) && isDateBefore(day.value, week[1]),
            };
        }
        return {
            ...autoRangeClasses(day),
        };
    };

    // Get set of classes for the range week picker
    const weekPickerRangeClasses = (day: ICalendarDay) => {
        if (modelValue.value && Array.isArray(modelValue.value)) {
            const startWeek = getWeekFromDate(modelValue.value[0], props.weekStart);
            const endWeek = modelValue.value[1] ? getWeekFromDate(modelValue.value[1], props.weekStart) : [];

            return {
                ...autoRangeClasses(day),
                dp__range_start: isDateEqual(startWeek[0], day.value) || isDateEqual(endWeek[0], day.value),
                dp__range_end: isDateEqual(startWeek[1], day.value) || isDateEqual(endWeek[1], day.value),
                dp__range_between_week:
                    (isDateAfter(day.value, startWeek[0]) && isDateBefore(day.value, startWeek[1])) ||
                    (isDateAfter(day.value, endWeek[0]) && isDateBefore(day.value, endWeek[1])),
                dp__range_between: isDateAfter(day.value, startWeek[1]) && isDateBefore(day.value, endWeek[0]),
            };
        }
        return {
            ...autoRangeClasses(day),
        };
    };

    const rangeStartEnd = (day: ICalendarDay) => {
        const isRangeStart =
            defaultedMultiCalendars.value.count > 0
                ? day.current && rangeActiveStartEnd(day) && isModelAutoActive()
                : rangeActiveStartEnd(day) && isModelAutoActive();

        const isRangeEnd =
            defaultedMultiCalendars.value.count > 0
                ? day.current && rangeActiveStartEnd(day, false) && isModelAutoActive()
                : rangeActiveStartEnd(day, false) && isModelAutoActive();
        return { isRangeStart, isRangeEnd };
    };

    // Get set of classes for the range
    const rangeDateClasses = (day: ICalendarDay): Record<string, boolean> => {
        const { isRangeStart, isRangeEnd } = rangeStartEnd(day);
        return {
            dp__range_start: isRangeStart,
            dp__range_end: isRangeEnd,
            dp__range_between: isBetween(day),
            dp__date_hover:
                isDateEqual(day.value, hoveredDate.value) && !isRangeStart && !isRangeEnd && !props.weekPicker,
            dp__date_hover_start: isHoverDateStartEnd(day, true),
            dp__date_hover_end: isHoverDateStartEnd(day, false),
        };
    };

    // Get set of classes for auto range
    const autoRangeClasses = (day: ICalendarDay): Record<string, boolean> => {
        return {
            ...rangeDateClasses(day),
            dp__cell_auto_range: isAutoRangeInBetween(day),
            dp__cell_auto_range_start: isAutoRangeStart(day),
            dp__cell_auto_range_end: isHoverRangeEnd(day),
        };
    };

    // Return specific set of classes depending on the config, since we don't need to check for all
    const getModeClasses = (day: ICalendarDay) => {
        if (defaultedRange.value.enabled) {
            if (defaultedRange.value.autoRange) return autoRangeClasses(day);
            if (props.modelAuto) return { ...singleDateClasses(day), ...rangeDateClasses(day) };
            if (props.weekPicker) return weekPickerRangeClasses(day);
            return rangeDateClasses(day);
        }
        if (props.weekPicker) {
            return weekPickerSingleClasses(day);
        }

        return singleDateClasses(day);
    };

    // Get needed classes
    const getDayClassData = (day: ICalendarDay): Record<string, boolean> => {
        if (props.hideOffsetDates && !day.current) return {};
        return {
            ...sharedClasses(day),
            ...getModeClasses(day),
            [props.dayClass ? props.dayClass(day.value) : '']: true,
            [props.calendarCellClassName]: !!props.calendarCellClassName,
        };
    };

    return {
        setHoverDate,
        clearHoverDate,
        getDayClassData,
    };
};
