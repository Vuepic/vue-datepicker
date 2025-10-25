import { computed } from 'vue';

import { useHelperFns } from '@/composables';
import {
    defaultActionRow,
    defaultConfig,
    defaultHighlightOptions,
    defaultRangeOptions,
    defaultTextInputOptions,
    defaultAriaLabels,
    defaultTransitions,
    defaultFilters,
    defaultFormats,
    defaultTime,
    defaultInputAttrs,
} from '@/constants/defaults.ts';
import { MAP_KEY_FORMAT } from '@/constants';

import type {
    Config,
    FloatingConfig,
    HighlightFn,
    InputAttributesConfig,
    MaybeDate,
    MultiCalendarsConfig,
    RootPropsWithDefaults,
    TimeModel,
    TransitionsConfig,
    UIConfig,
    UIParsed,
} from '@/types';
import { TZDate } from '@date-fns/tz';
import { set } from 'date-fns';

export const useDefaults = (props: RootPropsWithDefaults) => {
    const { getMapKey, getMapKeyType, getTimeObjFromCurrent } = useHelperFns();

    function getDate(date?: MaybeDate, reset?: boolean) {
        let newDate;
        if (props.timezone) {
            newDate = new TZDate((date as Date) ?? new Date(), props.timezone);
        } else {
            newDate = date ? new Date(date) : new Date();
        }

        return reset ? set(newDate, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }) : newDate;
    }

    const getTimeFormat = (): string => {
        const seconds = timeConfig.value.enableSeconds ? ':ss' : '';
        const minutes = timeConfig.value.enableMinutes ? ':mm' : '';
        return timeConfig.value.is24 ? `HH${minutes}${seconds}` : `hh${minutes}${seconds} aa`;
    };

    const getDefaultPattern = (): string => {
        if (props.monthPicker) return 'MM/yyyy';
        if (props.timePicker) return getTimeFormat();
        if (props.weekPicker) return `${weekNumbers.value?.type === 'iso' ? 'II' : 'ww'}-RR`;
        if (props.yearPicker) return 'yyyy';
        if (props.quarterPicker) return 'QQQ/yyyy';
        return timeConfig.value.enableTimePicker ? `MM/dd/yyyy, ${getTimeFormat()}` : 'MM/dd/yyyy';
    };

    const assignTime = (time: TimeModel) => getTimeObjFromCurrent(getDate(), time, timeConfig.value.enableSeconds);

    const getDefaultStartTime = (): TimeModel | TimeModel[] | null => {
        if (range.value.enabled) {
            if (timeConfig.value.startTime && Array.isArray(timeConfig.value.startTime)) {
                return [assignTime(timeConfig.value.startTime[0]!), assignTime(timeConfig.value.startTime[1]!)];
            }
            return null;
        }
        return timeConfig.value.startTime && !Array.isArray(timeConfig.value.startTime)
            ? assignTime(timeConfig.value.startTime)
            : null;
    };

    const getMultiCalendarsCount = (option?: boolean | number | string) => {
        if (!option) return 0;
        if (typeof option === 'boolean') return option ? 2 : 0;
        return Math.max(+option, 2);
    };

    const datesArrToMap = (datesArr: (Date | string | number)[]): Map<string, Date | null> => {
        const format = getMapKeyType(props.monthPicker, props.yearPicker);
        return new Map(
            datesArr.map((date) => {
                const d = getDate(date, isSpecificMode.value);
                return [getMapKey(d!, format), d];
            }),
        );
    };

    const isSpecificMode = computed(() => props.monthPicker || props.yearPicker || props.quarterPicker);

    const multiCalendars = computed(() => {
        const isConfig = typeof props.multiCalendars === 'object' && props.multiCalendars;
        const defaultOptions = {
            static: true,
            solo: false,
        };
        if (!props.multiCalendars) return { ...defaultOptions, count: getMultiCalendarsCount(false) };
        const addOptions = isConfig ? props.multiCalendars : ({} as MultiCalendarsConfig);
        const option = isConfig
            ? ((addOptions as MultiCalendarsConfig).count ?? true)
            : (props.multiCalendars as string | number | boolean);
        const count = getMultiCalendarsCount(option);

        return Object.assign(defaultOptions, addOptions, { count });
    });

    const startTime = computed(() => getDefaultStartTime());

    const ariaLabels = computed(() => {
        return { ...defaultAriaLabels, ...props.ariaLabels };
    });

    const filters = computed(() => {
        return { ...defaultFilters, ...props.filters };
    });

    const transitions = computed(() => {
        if (typeof props.transitions === 'boolean') {
            return props.transitions ? defaultTransitions : (false as unknown as TransitionsConfig);
        }
        return { ...defaultTransitions, ...props.transitions };
    });

    const actionRow = computed(() => {
        return { ...defaultActionRow, ...props.actionRow };
    });

    const textInput = computed(() => {
        if (typeof props.textInput === 'object') {
            return {
                ...defaultTextInputOptions,
                format: getDefaultPattern(),
                pattern: getDefaultPattern(),
                ...props.textInput,
                enabled: true,
            };
        }
        return {
            ...defaultTextInputOptions,
            format: getDefaultPattern(),
            pattern: getDefaultPattern() as string | string[] | ((value: string) => Date),
            enabled: props.textInput,
        };
    });

    const inline = computed(() => {
        const defaultOptions = { input: false };
        if (typeof props.inline === 'object') {
            return { ...defaultOptions, ...props.inline, enabled: true };
        }
        return {
            enabled: props.inline,
            ...defaultOptions,
        };
    });

    const config = computed((): Config => {
        return { ...defaultConfig, ...props.config };
    });

    const highlight = computed(() => {
        if (typeof props.highlight === 'function') return props.highlight;
        return {
            ...defaultHighlightOptions,
            ...props.highlight,
        };
    });

    const weekNumbers = computed(() => {
        if (typeof props.weekNumbers === 'object') {
            return {
                type: props.weekNumbers?.type ?? 'local',
                hideOnOffsetDates: props.weekNumbers?.hideOnOffsetDates ?? false,
            };
        }
        return {
            type: props.weekNumbers!,
            hideOnOffsetDates: false,
        };
    });

    const multiDates = computed(() => {
        if (typeof props.multiDates === 'boolean') {
            return { enabled: props.multiDates, dragSelect: true, limit: null };
        }
        return {
            enabled: !!props.multiDates,
            limit: props.multiDates?.limit ? +props.multiDates.limit : null,
            dragSelect: props.multiDates?.dragSelect ?? true,
        };
    });

    const safeDates = computed(() => {
        return {
            minDate: props.minDate ? getDate(props.minDate) : null,
            maxDate: props.maxDate ? getDate(props.maxDate) : null,
            disabledDates: Array.isArray(props.disabledDates)
                ? datesArrToMap(props.disabledDates)
                : props.disabledDates,
            allowedDates: Array.isArray(props.allowedDates) ? datesArrToMap(props.allowedDates) : null,
            highlight:
                typeof highlight.value === 'object' && Array.isArray(highlight.value.dates)
                    ? datesArrToMap(highlight.value.dates)
                    : (highlight.value as HighlightFn),
            markers: props.markers?.length
                ? new Map(
                      props.markers.map((marker) => {
                          const date = getDate(marker.date);
                          return [getMapKey(date!, MAP_KEY_FORMAT.DATE), marker];
                      }),
                  )
                : null,
        };
    });

    const range = computed(() => {
        if (typeof props.range === 'object') {
            return { enabled: true, ...defaultRangeOptions, ...props.range };
        }
        return {
            enabled: props.range,
            ...defaultRangeOptions,
        };
    });

    const ui = computed((): UIParsed => {
        const defaulted = {
            ...Object.fromEntries(
                Object.keys(props.ui).map((item) => {
                    const key = item as keyof UIConfig;
                    const value = props.ui[key];
                    if (key === 'dayClass') return [key, props.ui[key]];
                    const val = (
                        typeof props.ui[key] === 'string'
                            ? { [value as string]: true }
                            : Object.fromEntries((value as string[]).map((k) => [k, true]))
                    ) as Record<string, boolean>;
                    return [item, val];
                }),
            ),
        };

        return defaulted as UIParsed;
    });

    const formats = computed(() => {
        return {
            ...defaultFormats,
            ...props.formats,
            input: props.formats?.input ?? getDefaultPattern(),
            preview: props.formats?.preview ?? getDefaultPattern(),
        };
    });

    const teleport = computed(() => {
        if (!props.teleport) return undefined;
        if (typeof props.teleport === 'string') return props.teleport;
        if (typeof props.teleport === 'boolean') return 'body';
        return props.teleport;
    });

    const timeConfig = computed(() => {
        return { ...defaultTime, ...props.timeConfig };
    });

    const flow = computed(() => {
        if (props.flow) {
            return { steps: [], partial: false, ...props.flow };
        }
        return undefined;
    });

    const inputAttrs = computed((): InputAttributesConfig => {
        const inputmode = textInput.value.enabled ? 'text' : 'none';
        if (props.inputAttrs) return { ...defaultInputAttrs, inputmode, ...props.inputAttrs };
        return { ...defaultInputAttrs, inputmode };
    });

    const floatingConfig = computed((): FloatingConfig => {
        return {
            offset: props.floating?.offset ?? 10,
            arrow: props.floating?.arrow ?? true,
            strategy: props.floating?.strategy ?? undefined,
            placement: props.floating?.placement ?? undefined,
        };
    });

    return {
        transitions,
        multiCalendars,
        startTime,
        ariaLabels,
        filters,
        actionRow,
        textInput,
        inline,
        config,
        highlight,
        weekNumbers,
        range,
        safeDates,
        multiDates,
        ui,
        formats,
        teleport,
        timeConfig,
        flow,
        inputAttrs,
        floatingConfig,
        getDate,
    };
};
