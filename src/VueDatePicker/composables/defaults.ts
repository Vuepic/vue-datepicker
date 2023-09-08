import { computed } from 'vue';

import {
    defaultAriaLabels,
    defaultMultiCalendars,
    defaultPreviewFormat,
    defaultTransitions,
    getDefaultActionRowData,
    getDefaultConfig,
    getDefaultFilters,
    getDefaultInlineOptions,
    getDefaultTextInputOptions,
} from '@/utils/defaults';
import { assignDefaultTime } from '@/utils/date-utils';

import type { TimeModel } from '@/interfaces';
import type { AllPropsType, PickerBasePropsType } from '@/props';

export const useDefaults = (props: AllPropsType | PickerBasePropsType) => {
    // Shared method for time format
    const getTimeFormat = (): string => {
        const seconds = props.enableSeconds ? ':ss' : '';
        return props.is24 ? `HH:mm${seconds}` : `hh:mm${seconds} aa`;
    };

    // Get default format pattern, returns user specified if defined first
    const getDefaultPattern = (): string => {
        if (props.format) return props.format as string;
        if (props.monthPicker) return 'MM/yyyy';
        if (props.timePicker) return getTimeFormat();
        if (props.weekPicker) return 'MM/dd/yyyy';
        if (props.yearPicker) return 'yyyy';
        return props.enableTimePicker ? `MM/dd/yyyy, ${getTimeFormat()}` : 'MM/dd/yyyy';
    };
    const assignTime = (date: TimeModel) => assignDefaultTime(date, props.enableSeconds);
    const getDefaultStartTime = (): TimeModel | TimeModel[] | null => {
        if (props.range) {
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
        getDefaultPattern,
        getDefaultStartTime,
    };
};
