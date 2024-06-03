import { computed } from 'vue';

import {
    defaultAriaLabels,
    defaultMultiCalendars,
    defaultPreviewFormat,
    defaultTransitions,
    getDefaultActionRowData,
    getDefaultConfig,
    getDefaultFilters,
    getDefaultHighlight,
    getDefaultInlineOptions,
    getDefaultMultiDates,
    getDefaultRangeOptions,
    getDefaultTextInputOptions,
    getDefaultTimeZone,
    getDefaultUI,
    getDefaultWeekNumbers,
    mapPropDates,
} from '@/utils/defaults';
import { assignDefaultTime } from '@/utils/date-utils';

import type { TimeModel } from '@/interfaces';
import type { AllPropsType, PickerBasePropsType } from '@/props';

export const useDefaults = (props: AllPropsType | PickerBasePropsType) => {
    // Shared method for time format
    const getTimeFormat = (): string => {
        const seconds = props.enableSeconds ? ':ss' : '';
        const minutes = props.enableMinutes ? ':mm' : '';
        return props.is24 ? `HH${minutes}${seconds}` : `hh${minutes}${seconds} aa`;
    };

    // Get default format pattern, returns user specified if defined first
    const getDefaultPattern = (): string => {
        if (props.format) return props.format as string;
        if (props.monthPicker) return 'MM/yyyy';
        if (props.timePicker) return getTimeFormat();
        if (props.weekPicker) return `${defaultedWeekNumbers.value?.type === 'iso' ? 'RR' : 'ww'}-yyyy`;
        if (props.yearPicker) return 'yyyy';
        if (props.quarterPicker) return 'QQQ/yyyy';
        return props.enableTimePicker ? `MM/dd/yyyy, ${getTimeFormat()}` : 'MM/dd/yyyy';
    };
    const assignTime = (date: TimeModel) => assignDefaultTime(date, props.enableSeconds);
    const getDefaultStartTime = (): TimeModel | TimeModel[] | null => {
        if (defaultedRange.value.enabled) {
            if (props.startTime && Array.isArray(props.startTime)) {
                return [assignTime(props.startTime[0]), assignTime(props.startTime[1])];
            }
            return null;
        }
        return props.startTime && !Array.isArray(props.startTime) ? assignTime(props.startTime) : null;
    };

    const defaultedMultiCalendars = computed(() => defaultMultiCalendars(props.multiCalendars));

    const defaultedStartTime = computed(() => getDefaultStartTime());

    const defaultedAriaLabels = computed(() => defaultAriaLabels(props.ariaLabels));

    const defaultedFilters = computed(() => getDefaultFilters(props.filters));

    const defaultedTransitions = computed(() => defaultTransitions(props.transitions));

    const defaultedActionRow = computed(() => getDefaultActionRowData(props.actionRow));

    const defaultedPreviewFormat = computed(() =>
        defaultPreviewFormat(props.previewFormat, props.format, getDefaultPattern()),
    );

    const defaultedTextInput = computed(() => getDefaultTextInputOptions(props.textInput));

    const defaultedInline = computed(() => getDefaultInlineOptions(props.inline));

    const defaultedConfig = computed(() => getDefaultConfig(props.config));

    const defaultedHighlight = computed(() => getDefaultHighlight(props.highlight));

    const defaultedWeekNumbers = computed(() => getDefaultWeekNumbers(props.weekNumbers));

    const defaultedTz = computed(() => getDefaultTimeZone(props.timezone, props.emitTimezone));

    const defaultedMultiDates = computed(() => getDefaultMultiDates(props.multiDates, props.multiDatesLimit));

    const propDates = computed(() =>
        mapPropDates({
            minDate: props.minDate,
            maxDate: props.maxDate,
            disabledDates: props.disabledDates,
            allowedDates: props.allowedDates,
            highlight: defaultedHighlight.value,
            markers: props.markers,
            timezone: defaultedTz.value,
            isSpecific: props.monthPicker || props.yearPicker || props.quarterPicker,
        }),
    );

    const defaultedRange = computed(() =>
        getDefaultRangeOptions(props.range, {
            minMaxRawRange: false,
            maxRange: props.maxRange,
            minRange: props.minRange,
            noDisabledRange: props.noDisabledRange,
            showLastInRange: props.showLastInRange,
            partialRange: props.partialRange,
            disableTimeRangeValidation: props.disableTimeRangeValidation,
            autoRange: props.autoRange,
            fixedStart: props.fixedStart,
            fixedEnd: props.fixedEnd,
        }),
    );

    const defaultedUI = computed(() => getDefaultUI(props.ui));

    return {
        defaultedTransitions,
        defaultedMultiCalendars,
        defaultedStartTime,
        defaultedAriaLabels,
        defaultedFilters,
        defaultedActionRow,
        defaultedPreviewFormat,
        defaultedTextInput,
        defaultedInline,
        defaultedConfig,
        defaultedHighlight,
        defaultedWeekNumbers,
        defaultedRange,
        propDates,
        defaultedTz,
        defaultedMultiDates,
        defaultedUI,
        getDefaultPattern,
        getDefaultStartTime,
    };
};
