import { ref } from 'vue';
import { addDays, isAfter, isBefore } from 'date-fns';

import { useContext, useDateUtils, useUtils, useValidation } from '@/composables';

import type { UnwrapRef } from 'vue';
import type { CalendarDay } from '@/types';

export const useCalendarClass = () => {
    const {
        isDateAfter,
        isDateBefore,
        isDateBetween,
        isDateEqual,
        getDate,
        getWeekFromDate,
        getBeforeAndAfterInRange,
    } = useDateUtils();
    const { isModelAuto, matchDate } = useUtils();
    const {
        today,
        rootProps,
        defaults: { multiCalendars, multiDates, ui, highlight, safeDates, range },
        modelValue,
    } = useContext();

    const { isDisabled } = useValidation();
    // Track hovered date
    const hoveredDate = ref<Date | null>(null);
    //

    /**
     * When using range picker keep track of hovered value in the calendar
     */
    const setHoverDate = (day: UnwrapRef<CalendarDay>): void => {
        if (!day.current && rootProps.hideOffsetDates) {
            return;
        }
        hoveredDate.value = day.value;
    };

    // When mouse leaves the menu clear the hover date data
    const clearHoverDate = (): void => {
        hoveredDate.value = null;
    };

    const checkRangeDirection = (isStart: boolean): boolean => {
        if (Array.isArray(modelValue.value) && range.value.enabled && modelValue.value[0] && hoveredDate.value) {
            return isStart
                ? isDateAfter(hoveredDate.value, modelValue.value[0])
                : isDateBefore(hoveredDate.value, modelValue.value[0]);
        }
        return true;
    };

    const checkDateEqual = (day: CalendarDay, isStart: boolean) => {
        const startDateCompare = () => {
            if (!modelValue.value) return null;
            return isStart ? (modelValue.value as Date[])[0] || null : (modelValue.value as Date[])[1];
        };
        const dateToCompare = modelValue.value && Array.isArray(modelValue.value) ? startDateCompare() : null;
        return isDateEqual(getDate(day.value), dateToCompare);
    };

    const checkDateBefore = (isStart: boolean) => {
        const dateToCompare = Array.isArray(modelValue.value) ? modelValue.value[0] : null;
        return isStart ? !isDateBefore(hoveredDate.value, dateToCompare) : true;
    };

    /**
     * Check when to add a proper active start/end date class on range picker
     */
    const rangeActiveStartEnd = (day: UnwrapRef<CalendarDay>, isStart = true): boolean => {
        if (
            (range.value.enabled || rootProps.weekPicker) &&
            Array.isArray(modelValue.value) &&
            modelValue.value.length === 2
        ) {
            if (rootProps.hideOffsetDates && !day.current) return false;
            return isDateEqual(getDate(day.value), modelValue.value[isStart ? 0 : 1]);
        }

        if (range.value.enabled) {
            return (
                (checkDateEqual(day, isStart) && checkDateBefore(isStart)) ||
                (isDateEqual(day.value, Array.isArray(modelValue.value) ? modelValue.value[0]! : null) &&
                    checkRangeDirection(isStart))
            );
        }
        return false;
    };

    // If the range mode is used, checks for the end value of hovered date
    const isHoverDateStartEnd = (calendarDay: CalendarDay, start?: boolean): boolean => {
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
    const isActiveDate = (calendarDay: CalendarDay): boolean => {
        if (!modelValue.value) return false;
        if (rootProps.hideOffsetDates && !calendarDay.current) return false;
        if (!range.value.enabled) {
            if (multiDates.value.enabled && Array.isArray(modelValue.value)) {
                return modelValue.value.some((dateVal) => isDateEqual(dateVal, calendarDay.value));
            }
            return isDateEqual(calendarDay.value, modelValue.value ? (modelValue.value as Date) : today);
        }
        if (rootProps.modelAuto && Array.isArray(modelValue.value)) {
            return isDateEqual(calendarDay.value, modelValue.value[0] ?? today);
        }
        return false;
    };

    /**
     * Check if range ends on the given day
     */
    const isHoverRangeEnd = (day: UnwrapRef<CalendarDay>): boolean => {
        if (range.value.autoRange || rootProps.weekPicker) {
            if (hoveredDate.value) {
                if (rootProps.hideOffsetDates && !day.current) return false;
                const rangeEnd = addDays(hoveredDate.value, +(range.value.autoRange as number));
                const hoverRange = getWeekFromDate(getDate(hoveredDate.value), rootProps.weekStart);
                return rootProps.weekPicker
                    ? isDateEqual(hoverRange[1], getDate(day.value))
                    : isDateEqual(rangeEnd, getDate(day.value));
            }
            return false;
        }
        return false;
    };

    /**
     * Check if date in auto range preview is in between
     */
    const isAutoRangeInBetween = (day: UnwrapRef<CalendarDay>): boolean => {
        if (range.value.autoRange || rootProps.weekPicker) {
            if (hoveredDate.value) {
                const rangeEnd = addDays(hoveredDate.value, +(range.value.autoRange as number));
                if (rootProps.hideOffsetDates && !day.current) return false;
                const rangeBetween = getWeekFromDate(getDate(hoveredDate.value), rootProps.weekStart);
                return rootProps.weekPicker
                    ? isDateAfter(day.value, rangeBetween[0]) && isDateBefore(day.value, rangeBetween[1])
                    : isDateAfter(day.value, hoveredDate.value) && isDateBefore(day.value, rangeEnd);
            }
            return false;
        }
        return false;
    };

    const isAutoRangeStart = (day: UnwrapRef<CalendarDay>): boolean => {
        if (range.value.autoRange || rootProps.weekPicker) {
            if (hoveredDate.value) {
                if (rootProps.hideOffsetDates && !day.current) return false;
                const range = getWeekFromDate(getDate(hoveredDate.value), rootProps.weekStart);
                return rootProps.weekPicker
                    ? isDateEqual(range[0], day.value)
                    : isDateEqual(hoveredDate.value, day.value);
            }
            return false;
        }
        return false;
    };

    /**
     * If range mode used, this will check if the calendar day is between 2 active dates
     */
    const rangeActive = (calendarDay: CalendarDay): boolean => {
        return isDateBetween(modelValue.value as Date[], hoveredDate.value, calendarDay.value);
    };

    const isSingleInModelAuto = (): boolean => {
        if (rootProps.modelAuto && Array.isArray(modelValue.value)) {
            return !!modelValue.value[0];
        }
        return false;
    };

    const isModelAutoActive = () => {
        if (rootProps.modelAuto) return isModelAuto(modelValue.value);
        return true;
    };

    // Check if date is hovered, for single picker mode
    const dateHover = (day: CalendarDay) => {
        if (rootProps.weekPicker) return false;
        const isInRange = range.value.enabled ? !rangeActiveStartEnd(day) && !rangeActiveStartEnd(day, false) : true;

        return (
            !isDisabled(day.value) && !isActiveDate(day) && !(!day.current && rootProps.hideOffsetDates) && isInRange
        );
    };

    // Check if the date is selected
    const isActive = (day: CalendarDay) => {
        if (range.value.enabled) {
            return rootProps.modelAuto ? isSingleInModelAuto() && isActiveDate(day) : false;
        }
        return isActiveDate(day);
    };

    // Check if the date should be highlighted
    const highlighted = (day: CalendarDay) => {
        if (highlight.value) {
            return matchDate(day.value, safeDates.value.highlight);
        }
        return false;
    };

    // If enabled, checks the days that are also highlighted to not be marked as disabled
    const disableHighlight = (day: CalendarDay) => {
        const disabled = isDisabled(day.value);
        return (
            disabled &&
            (typeof highlight.value === 'function'
                ? !highlight.value(day.value, disabled)
                : !highlight.value.options.highlightDisabled)
        );
    };

    // Check if the given week day should be highlighted
    const highlightedWeekDay = (day: CalendarDay) => {
        if (typeof highlight.value === 'function') return highlight.value(day.value);
        return highlight.value.weekdays?.includes(day.value.getDay());
    };

    const isBetween = (day: CalendarDay) => {
        if (
            (range.value.enabled || rootProps.weekPicker) &&
            (multiCalendars.value.count > 0 ? day.current : true) &&
            isModelAutoActive() &&
            !(!day.current && rootProps.hideOffsetDates) &&
            !isActiveDate(day)
        ) {
            return rangeActive(day);
        }
        return false;
    };

    const isDateAfterMaxRange = (day: CalendarDay) => {
        if (Array.isArray(modelValue.value) && modelValue.value.length === 1) {
            const { before, after } = getBeforeAndAfterInRange(+range.value.maxRange!, modelValue.value[0]!);
            return isBefore(day.value, before) || isAfter(day.value, after);
        }
        return false;
    };

    const isDateBeforeMinRange = (day: CalendarDay) => {
        if (Array.isArray(modelValue.value) && modelValue.value.length === 1) {
            const { before, after } = getBeforeAndAfterInRange(+range.value.minRange!, modelValue.value[0]!);
            return isDateBetween([before, after], modelValue.value[0]!, day.value);
        }
        return false;
    };

    const minMaxRangeDate = (day: CalendarDay) => {
        if (range.value.enabled && (range.value.maxRange || range.value.minRange)) {
            if (range.value.maxRange && range.value.minRange) {
                return isDateAfterMaxRange(day) || isDateBeforeMinRange(day);
            }
            return range.value.maxRange ? isDateAfterMaxRange(day) : isDateBeforeMinRange(day);
        }
        return false;
    };

    // Common classes to be checked for any mode
    const sharedClasses = (day: CalendarDay): Record<string, boolean> => {
        const { isRangeStart, isRangeEnd } = rangeStartEnd(day);
        const isRangeStartEnd = range.value.enabled ? isRangeStart || isRangeEnd : false;
        return {
            dp__cell_offset: !day.current,
            dp__pointer:
                !rootProps.disabled &&
                !(!day.current && rootProps.hideOffsetDates) &&
                !isDisabled(day.value) &&
                !minMaxRangeDate(day),
            dp__cell_disabled: isDisabled(day.value) || minMaxRangeDate(day),
            dp__cell_highlight:
                !disableHighlight(day) &&
                (highlighted(day) || highlightedWeekDay(day)) &&
                !isActive(day) &&
                !isRangeStartEnd &&
                !isAutoRangeStart(day) &&
                !(isBetween(day) && rootProps.weekPicker) &&
                !isRangeEnd,
            dp__cell_highlight_active:
                !disableHighlight(day) && (highlighted(day) || highlightedWeekDay(day)) && isActive(day),
            dp__today: !rootProps.noToday && isDateEqual(day.value, today) && day.current,
            'dp--past': isDateBefore(day.value, today),
            'dp--future': isDateAfter(day.value, today),
        };
    };

    // Get set of classes for the single date picker
    const singleDateClasses = (day: CalendarDay): Record<string, boolean> => {
        return {
            dp__active_date: isActive(day),
            dp__date_hover: dateHover(day),
        };
    };

    // Get set of classes for the single week picker
    const weekPickerSingleClasses = (day: CalendarDay): Record<string, boolean> => {
        if (modelValue.value && !Array.isArray(modelValue.value)) {
            const week = getWeekFromDate(modelValue.value, rootProps.weekStart);
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
    const weekPickerRangeClasses = (day: CalendarDay) => {
        if (modelValue.value && Array.isArray(modelValue.value)) {
            const startWeek = getWeekFromDate(modelValue.value[0]!, rootProps.weekStart);
            const endWeek = modelValue.value[1] ? getWeekFromDate(modelValue.value[1], rootProps.weekStart) : [];

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

    const rangeStartEnd = (day: CalendarDay) => {
        const isRangeStart =
            multiCalendars.value.count > 0
                ? day.current && rangeActiveStartEnd(day) && isModelAutoActive()
                : rangeActiveStartEnd(day) && isModelAutoActive();

        const isRangeEnd =
            multiCalendars.value.count > 0
                ? day.current && rangeActiveStartEnd(day, false) && isModelAutoActive()
                : rangeActiveStartEnd(day, false) && isModelAutoActive();
        return { isRangeStart, isRangeEnd };
    };

    // Get set of classes for the range
    const rangeDateClasses = (day: CalendarDay): Record<string, boolean> => {
        const { isRangeStart, isRangeEnd } = rangeStartEnd(day);
        return {
            dp__range_start: isRangeStart,
            dp__range_end: isRangeEnd,
            dp__range_between: isBetween(day),
            dp__date_hover:
                isDateEqual(day.value, hoveredDate.value) && !isRangeStart && !isRangeEnd && !rootProps.weekPicker,
            dp__date_hover_start: isHoverDateStartEnd(day, true),
            dp__date_hover_end: isHoverDateStartEnd(day, false),
        };
    };

    // Get set of classes for auto range
    const autoRangeClasses = (day: CalendarDay): Record<string, boolean> => {
        return {
            ...rangeDateClasses(day),
            dp__cell_auto_range: isAutoRangeInBetween(day),
            dp__cell_auto_range_start: isAutoRangeStart(day),
            dp__cell_auto_range_end: isHoverRangeEnd(day),
        };
    };

    // Return specific set of classes depending on the config, since we don't need to check for all
    const getModeClasses = (day: CalendarDay) => {
        if (range.value.enabled) {
            if (range.value.autoRange) return autoRangeClasses(day);
            if (rootProps.modelAuto) return { ...singleDateClasses(day), ...rangeDateClasses(day) };
            if (rootProps.weekPicker) return weekPickerRangeClasses(day);
            return rangeDateClasses(day);
        }
        if (rootProps.weekPicker) {
            return weekPickerSingleClasses(day);
        }

        return singleDateClasses(day);
    };

    // Get needed classes
    const getDayClassData = (day: CalendarDay): Record<string, boolean> => {
        if (rootProps.hideOffsetDates && !day.current) return {};
        return {
            ...sharedClasses(day),
            ...getModeClasses(day),
            [ui.value.dayClass ? ui.value.dayClass(day.value, modelValue.value) : '']: true,
            ...ui.value.calendarCell,
        };
    };

    return {
        setHoverDate,
        clearHoverDate,
        getDayClassData,
    };
};
