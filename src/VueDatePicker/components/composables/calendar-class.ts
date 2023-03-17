import { ref } from 'vue';
import { addDays } from 'date-fns';

import { useUtils } from '@/components/composables';
import { isModelAuto } from '@/utils/util';
import { isDateAfter, isDateBefore, isDateBetween, isDateEqual, getDate } from '@/utils/date-utils';

import type { UnwrapRef, WritableComputedRef } from 'vue';
import type { ExtendedProps, ICalendarDay, InternalModuleValue } from '@/interfaces';

export const useCalendarClass = (modelValue: WritableComputedRef<InternalModuleValue>, props: ExtendedProps) => {
    const { isDisabled, matchDate, getWeekFromDate } = useUtils(props);
    // Track hovered date
    const hoveredDate = ref<Date | null>(null);
    // Today date
    const today = ref<Date>(getDate());

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
        if (Array.isArray(modelValue.value) && props.range && modelValue.value[0] && hoveredDate.value) {
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
        return isStart ? !isDateBefore(hoveredDate.value || null, dateToCompare) : true;
    };

    /**
     * Check when to add a proper active start/end date class on range picker
     */
    const rangeActiveStartEnd = (day: UnwrapRef<ICalendarDay>, isStart = true): boolean => {
        if ((props.range || props.weekPicker) && Array.isArray(modelValue.value)) {
            if (props.hideOffsetDates && !day.current) return false;
            return isDateEqual(getDate(day.value), modelValue.value[isStart ? 0 : 1]);
        }

        if (props.range) {
            return (
                (checkDateEqual(day, isStart) && checkDateBefore(isStart)) ||
                (isDateEqual(day.value, Array.isArray(modelValue.value) ? modelValue.value[0] : null) &&
                    checkRangeDirection(isStart))
            );
        }
        return false;
    };

    // If the range mode is used, checks for the end value of hovered date
    const isHoverDateStartEnd = (dateIsHovered: boolean, calendarDay: ICalendarDay, start?: boolean): boolean => {
        if (Array.isArray(modelValue.value) && modelValue.value[0] && modelValue.value.length === 1) {
            if (dateIsHovered) {
                return false;
            }
            return start
                ? isDateAfter(modelValue.value[0], calendarDay.value)
                : isDateBefore(modelValue.value[0], calendarDay.value);
        }
        return false;
    };

    /**
     * Check if some date is active, in case of range, it will have two dates
     */
    const isActiveDate = (calendarDay: ICalendarDay): boolean => {
        if (!modelValue.value) return false;
        if (props.hideOffsetDates && !calendarDay.current) return false;
        if (!props.range) {
            if (props.multiDates && Array.isArray(modelValue.value)) {
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
        if (props.autoRange || props.weekPicker) {
            if (hoveredDate.value) {
                if (props.hideOffsetDates && !day.current) return false;
                const rangeEnd = addDays(hoveredDate.value, +props.autoRange);
                const range = getWeekFromDate(getDate(hoveredDate.value));
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
        if (props.autoRange || props.weekPicker) {
            if (hoveredDate.value) {
                const rangeEnd = addDays(hoveredDate.value, +props.autoRange);
                if (props.hideOffsetDates && !day.current) return false;
                const range = getWeekFromDate(getDate(hoveredDate.value));
                return props.weekPicker
                    ? isDateAfter(day.value, range[0]) && isDateBefore(day.value, range[1])
                    : isDateAfter(day.value, hoveredDate.value) && isDateBefore(day.value, rangeEnd);
            }
            return false;
        }
        return false;
    };

    const isAutoRangeStart = (day: UnwrapRef<ICalendarDay>): boolean => {
        if (props.autoRange || props.weekPicker) {
            if (hoveredDate.value) {
                if (props.hideOffsetDates && !day.current) return false;
                const range = getWeekFromDate(getDate(hoveredDate.value));
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
        if ((Array.isArray(modelValue.value) && modelValue.value.length) || props.weekPicker) return false;
        const isInRange = props.range ? !rangeActiveStartEnd(day) && !rangeActiveStartEnd(day, false) : true;

        return !isDisabled(day.value) && !isActiveDate(day) && !(!day.current && props.hideOffsetDates) && isInRange;
    };

    // Check if the date is selected
    const isActive = (day: ICalendarDay) => {
        if (props.range) {
            return props.modelAuto ? isSingleInModelAuto() && isActiveDate(day) : false;
        }
        return isActiveDate(day);
    };

    // Check if the date should be highlighted
    const highlighted = (day: ICalendarDay) => {
        if (props.highlight) {
            return matchDate(day.value, props.highlight);
        }
        return false;
    };

    // If enabled, checks the days that are also highlighted to not be marked as disabled
    const disableHighlight = (day: ICalendarDay) => isDisabled(day.value) && props.highlightDisabledDays === false;

    // Check if the given week day should be highlighted
    const highlightedWeekDay = (day: ICalendarDay) => {
        return props.highlightWeekDays && props.highlightWeekDays.includes(day.value.getDay());
    };

    const isBetween = (day: ICalendarDay) => {
        if (
            (props.range || props.weekPicker) &&
            (props.multiCalendars > 0 ? day.current : true) &&
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
        const isRangeStartEnd = props.range ? isRangeStart || isRangeEnd : false;
        return {
            dp__cell_offset: !day.current,
            dp__pointer: !props.disabled && !(!day.current && props.hideOffsetDates) && !isDisabled(day.value),
            dp__cell_disabled: isDisabled(day.value),
            dp__cell_highlight:
                !disableHighlight(day) &&
                (highlighted(day) || highlightedWeekDay(day)) &&
                !isActive(day) &&
                !isRangeStartEnd,
            dp__cell_highlight_active:
                !disableHighlight(day) && (highlighted(day) || highlightedWeekDay(day)) && isActive(day),
            dp__today: !props.noToday && isDateEqual(day.value, today.value) && day.current,
        };
    };

    // Get set of classes for the single date picker
    const singleDateClasses = (day: ICalendarDay): Record<string, boolean> => {
        return {
            dp__active_date: isActive(day),
            dp__date_hover: dateHover(day),
        };
    };

    // Get set of classes for the week picker
    const weekPickerClasses = (day: ICalendarDay): Record<string, boolean> => {
        return {
            ...rangeDateClasses(day),
            ...autoRangeClasses(day),
            dp__range_between_week: isBetween(day) && props.weekPicker,
        };
    };

    const rangeStartEnd = (day: ICalendarDay) => {
        const isRangeStart =
            props.multiCalendars > 0
                ? day.current && rangeActiveStartEnd(day) && isModelAutoActive()
                : rangeActiveStartEnd(day) && isModelAutoActive();

        const isRangeEnd =
            props.multiCalendars > 0
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
            dp__range_between: isBetween(day) && !props.weekPicker,
            dp__date_hover_start: isHoverDateStartEnd(dateHover(day), day, true),
            dp__date_hover_end: isHoverDateStartEnd(dateHover(day), day, false),
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
        if (props.range) {
            if (props.autoRange) return autoRangeClasses(day);
            if (props.modelAuto) return { ...singleDateClasses(day), ...rangeDateClasses(day) };
            return rangeDateClasses(day);
        }
        if (props.weekPicker) {
            return weekPickerClasses(day);
        }

        return singleDateClasses(day);
    };

    // Get needed classes
    const getDayClassData = (day: ICalendarDay): Record<string, boolean> => {
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
