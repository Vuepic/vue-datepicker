<template>
    <div v-if="!rootProps.disabled" class="dp__time_input">
        <div
            v-for="(timeInput, i) in timeInputs"
            :key="i"
            :class="timeColClass"
            :data-compact="isCompact && !timeConfig.enableSeconds"
            :data-collapsed="isCompact && timeConfig.enableSeconds"
        >
            <template v-if="timeInput.separator"> <template v-if="!timeOverlayOpen">:</template> </template>
            <template v-else>
                <button
                    :ref="(el) => assignRefs(el, i, 0)"
                    type="button"
                    :class="{
                        dp__btn: true,
                        dp__inc_dec_button: !timeConfig.timePickerInline,
                        dp__inc_dec_button_inline: timeConfig.timePickerInline,
                        dp__tp_inline_btn_top: timeConfig.timePickerInline,
                        dp__inc_dec_button_disabled: disabledArrowUpBtn(timeInput.type),
                        'dp--hidden-el': timeOverlayOpen,
                    }"
                    :data-test-id="`${timeInput.type}-time-inc-btn-${props.order}`"
                    :aria-label="ariaLabels?.incrementValue(timeInput.type)"
                    tabindex="0"
                    @keydown="
                        checkKeyDown($event, () => handleTimeValue(timeInput.type, true, { keyboard: true }), true)
                    "
                    @click="config.timeArrowHoldThreshold ? undefined : handleTimeValue(timeInput.type, true)"
                    @mousedown="config.timeArrowHoldThreshold ? handleTimeValue(timeInput.type, true) : undefined"
                    @mouseup="clearHold"
                >
                    <template v-if="!timeConfig.timePickerInline">
                        <slot v-if="$slots['arrow-up']" name="arrow-up" />
                        <ChevronUpIcon v-if="!$slots['arrow-up']" />
                    </template>
                    <template v-else>
                        <template v-if="$slots['tp-inline-arrow-up']">
                            <slot name="tp-inline-arrow-up" />
                        </template>
                        <template v-else>
                            <span class="dp__tp_inline_btn_bar dp__tp_btn_in_l"></span>
                            <span class="dp__tp_inline_btn_bar dp__tp_btn_in_r"></span>
                        </template>
                    </template>
                </button>
                <button
                    :ref="(el) => assignRefs(el, i, 1)"
                    type="button"
                    :aria-label="`${timeValueDisplay(timeInput.type).text}-${ariaLabels?.openTpOverlay(timeInput.type)}`"
                    :class="{
                        dp__time_display: true,
                        dp__time_display_block: !timeConfig.timePickerInline,
                        dp__time_display_inline: timeConfig.timePickerInline,
                        'dp--time-invalid': disabledBox(timeInput.type),
                        'dp--time-overlay-btn': !disabledBox(timeInput.type),
                        'dp--hidden-el': timeOverlayOpen,
                    }"
                    :disabled="boolHtmlAttribute(checkOverlayDisabled(timeInput.type))"
                    tabindex="0"
                    :data-test-id="`${timeInput.type}-toggle-overlay-btn-${props.order}`"
                    @keydown="checkKeyDown($event, () => toggleOverlay(timeInput.type), true)"
                    @click="toggleOverlay(timeInput.type)"
                >
                    <slot
                        v-if="$slots[timeInput.type]"
                        :name="timeInput.type"
                        :text="timeValueDisplay(timeInput.type).text"
                        :value="timeValueDisplay(timeInput.type).value"
                    />
                    <template v-if="!$slots[timeInput.type]">{{ timeValueDisplay(timeInput.type).text }}</template>
                </button>
                <button
                    :ref="(el) => assignRefs(el, i, 2)"
                    type="button"
                    :class="{
                        dp__btn: true,
                        dp__inc_dec_button: !timeConfig.timePickerInline,
                        dp__inc_dec_button_inline: timeConfig.timePickerInline,
                        dp__tp_inline_btn_bottom: timeConfig.timePickerInline,
                        dp__inc_dec_button_disabled: disabledArrowDownBtn(timeInput.type),
                        'dp--hidden-el': timeOverlayOpen,
                    }"
                    :data-test-id="`${timeInput.type}-time-dec-btn-${props.order}`"
                    :aria-label="ariaLabels?.decrementValue(timeInput.type)"
                    tabindex="0"
                    @keydown="
                        checkKeyDown($event, () => handleTimeValue(timeInput.type, false, { keyboard: true }), true)
                    "
                    @click="config.timeArrowHoldThreshold ? undefined : handleTimeValue(timeInput.type, false)"
                    @mousedown="config.timeArrowHoldThreshold ? handleTimeValue(timeInput.type, false) : undefined"
                    @mouseup="clearHold"
                >
                    <template v-if="!timeConfig.timePickerInline">
                        <slot v-if="$slots['arrow-down']" name="arrow-down" />
                        <ChevronDownIcon v-if="!$slots['arrow-down']" />
                    </template>
                    <template v-else>
                        <template v-if="$slots['tp-inline-arrow-down']">
                            <slot name="tp-inline-arrow-down" />
                        </template>
                        <template v-else>
                            <span class="dp__tp_inline_btn_bar dp__tp_btn_in_l"></span>
                            <span class="dp__tp_inline_btn_bar dp__tp_btn_in_r"></span>
                        </template>
                    </template>
                </button>
            </template>
        </div>
        <div v-if="!timeConfig.is24">
            <slot v-if="$slots['am-pm-button']" name="am-pm-button" :toggle="setAmPm" :value="amPm"></slot>
            <button
                v-if="!$slots['am-pm-button']"
                ref="amPmButton"
                type="button"
                class="dp__pm_am_button"
                role="button"
                :aria-label="ariaLabels?.amPmButton"
                tabindex="0"
                :data-compact="isCompact"
                @click="setAmPm"
                @keydown="checkKeyDown($event, () => setAmPm(), true)"
            >
                {{ amPm }}
            </button>
        </div>
        <template v-for="(timeInput, i) in timeInputOverlays" :key="i">
            <transition :name="transitionName(overlays[timeInput.type])" :css="showTransition">
                <SelectionOverlay
                    v-if="overlays[timeInput.type]"
                    :items="getGridItems(timeInput.type)"
                    :is-last="rootProps.autoApply && !config.keepActionRow"
                    :type="timeInput.type"
                    :aria-labels="ariaLabels"
                    :overlay-label="ariaLabels.timeOverlay?.(timeInput.type)"
                    @selected="handleTimeFromOverlay(timeInput.type, $event)"
                    @toggle="toggleOverlay(timeInput.type)"
                    @reset-flow="$emit('reset-flow')"
                >
                    <template #button-icon>
                        <slot v-if="$slots['clock-icon']" name="clock-icon" />
                        <component
                            :is="timeConfig.timePickerInline ? CalendarIcon : ClockIcon"
                            v-if="!$slots['clock-icon']"
                        />
                    </template>
                    <template v-if="$slots[`${timeInput.type}-overlay-value`]" #item="{ item }">
                        <slot :name="`${timeInput.type}-overlay-value`" :text="item.text" :value="item.value" />
                    </template>
                    <template v-if="$slots[`${timeInput.type}-overlay-header`]" #header>
                        <slot
                            :name="`${timeInput.type}-overlay-header`"
                            :toggle="() => toggleOverlay(timeInput.type)"
                        />
                    </template>
                </SelectionOverlay>
            </transition>
        </template>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, reactive, ref } from 'vue';
    import {
        add,
        getHours,
        getMinutes,
        getSeconds,
        isAfter,
        isBefore,
        isEqual,
        set,
        sub,
        type Duration,
    } from 'date-fns';

    import { ChevronUpIcon, ChevronDownIcon, ClockIcon, CalendarIcon } from '@/components/Icons';
    import SelectionOverlay from '@/components/Common/SelectionOverlay.vue';

    import {
        useTransitions,
        useArrowNavigation,
        useContext,
        useHelperFns,
        useDateUtils,
        useUtils,
    } from '@/composables';
    import type {
        DynamicClass,
        Hour12,
        InvalidTimesConfig,
        OverlayGridItem,
        SelectItem,
        TimeInputSection,
        TimeKey,
        TimeModel,
    } from '@/types';

    type TimeOverlayCheck = 'noHoursOverlay' | 'noMinutesOverlay' | 'noSecondsOverlay';

    interface TimeInputEmits {
        'update:hours': [hours: number];
        'update:minutes': [minutes: number];
        'update:seconds': [seconds: number];
        'overlay-opened': [type: TimeKey];
        'overlay-closed': [type: TimeKey];
        'set-hours': [];
        'set-minutes': [];
        'reset-flow': [];
        mounted: [];
    }

    interface TimeInputProps {
        hours: number;
        minutes: number;
        seconds: number;
        order: number;
        closeTimePickerBtn: HTMLElement | null;
        disabledTimesConfig: ((ind: number, hours?: number) => InvalidTimesConfig) | null;
        validateTime: any;
    }

    const emit = defineEmits<TimeInputEmits>();
    const props = withDefaults(defineProps<TimeInputProps>(), {});

    const { setTimePickerElements, setTimePickerBackRef } = useArrowNavigation();
    const {
        getDate,
        rootEmit,
        rootProps,
        defaults: { ariaLabels, filters, config, range, multiCalendars, timeConfig },
    } = useContext();
    const { checkKeyDown, hoursToAmPmHours } = useHelperFns();
    const { boolHtmlAttribute } = useUtils();

    const { sanitizeTime, groupListAndMap } = useDateUtils();
    const { transitionName, showTransition } = useTransitions();

    const overlays = reactive({
        hours: false,
        minutes: false,
        seconds: false,
    });
    const amPm = ref<Hour12>('AM');
    const amPmButton = ref<HTMLElement | null>(null);
    const elementRefs = ref<HTMLElement[][]>([]);
    const holdTimeout = ref();
    const timeOverlayOpen = ref(false);

    onMounted(() => {
        emit('mounted');
    });

    const setTime = (time: Duration) => {
        return set(getDate(), {
            hours: time.hours,
            minutes: time.minutes,
            seconds: timeConfig.value.enableSeconds ? time.seconds : 0,
            milliseconds: 0,
        });
    };

    const disabledBox = computed(
        () => (type: TimeKey) => isValueDisabled(type, props[type]) || isOverlayValueDisabled(type, props[type]),
    );

    const timeValues = computed(() => ({ hours: props.hours, minutes: props.minutes, seconds: props.seconds }));

    const isOverlayValueDisabled = (type: TimeKey, val: number) => {
        if (range.value.enabled && !range.value.disableTimeRangeValidation) {
            return !props.validateTime(type, val);
        }
        return false;
    };

    const disabledRangedArrows = (type: TimeKey, inc: boolean) => {
        if (range.value.enabled && !range.value.disableTimeRangeValidation) {
            const inVal = inc ? +timeConfig.value[`${type}Increment`] : -+timeConfig.value[`${type}Increment`];
            const val = props[type] + inVal;
            return !props.validateTime(type, val);
        }
        return false;
    };

    const disabledArrowUpBtn = computed(() => (type: TimeKey) => {
        return (
            !isDateInRange(+props[type] + +timeConfig.value[`${type}Increment`], type) ||
            disabledRangedArrows(type, true)
        );
    });

    const disabledArrowDownBtn = computed(() => (type: TimeKey) => {
        return (
            !isDateInRange(+props[type] - +timeConfig.value[`${type}Increment`], type) ||
            disabledRangedArrows(type, false)
        );
    });

    const addTime = (initial: Duration, toAdd: Duration) => add(set(getDate(), initial), toAdd);

    const subTime = (initial: Duration, toSub: Duration) => sub(set(getDate(), initial), toSub);

    const timeColClass = computed(
        (): DynamicClass => ({
            dp__time_col: true,
            dp__time_col_block: !timeConfig.value.timePickerInline,
            dp__time_col_reg_block:
                !timeConfig.value.enableSeconds && timeConfig.value.is24 && !timeConfig.value.timePickerInline,
            dp__time_col_reg_inline:
                !timeConfig.value.enableSeconds && timeConfig.value.is24 && timeConfig.value.timePickerInline,
            dp__time_col_reg_with_button: !timeConfig.value.enableSeconds && !timeConfig.value.is24,
            dp__time_col_sec: timeConfig.value.enableSeconds && timeConfig.value.is24,
            dp__time_col_sec_with_button: timeConfig.value.enableSeconds && !timeConfig.value.is24,
        }),
    );

    const isCompact = computed(
        () => timeConfig.value.timePickerInline && range.value.enabled && !multiCalendars.value.count,
    );

    const timeInputs = computed((): TimeInputSection[] => {
        const inputs = [{ type: 'hours' }];
        if (timeConfig.value.enableMinutes) {
            inputs.push({ type: '', separator: true } as unknown as TimeInputSection, {
                type: 'minutes',
            });
        }
        if (timeConfig.value.enableSeconds) {
            inputs.push({ type: '', separator: true } as unknown as TimeInputSection, {
                type: 'seconds',
            });
        }
        return inputs as TimeInputSection[];
    });

    const timeInputOverlays = computed(() => timeInputs.value.filter((input) => !input.separator));

    const timeValueDisplay = computed(() => (type: TimeKey) => {
        if (type === 'hours') {
            const hour = convert24ToAmPm(+props.hours);
            return { text: hour < 10 ? `0${hour}` : `${hour}`, value: hour };
        }
        return { text: props[type] < 10 ? `0${props[type]}` : `${props[type]}`, value: props[type] };
    });

    const isValueDisabled = (type: TimeKey, value: number): boolean => {
        if (!props.disabledTimesConfig) return false;
        const disabledTimes = props.disabledTimesConfig(props.order, type === 'hours' ? value : undefined);
        if (!disabledTimes[type]) return true;
        return Boolean(disabledTimes[type]?.includes(value));
    };

    const getAmPmDiff = (val: number, type: TimeKey): number => {
        if (type !== 'hours') return val;
        return amPm.value === 'AM' ? val : val + 12;
    };

    const getGridItems = (type: TimeKey): OverlayGridItem[][] => {
        const timeRange = timeConfig.value.is24 ? 24 : 12;
        const max = type === 'hours' ? timeRange : 60;
        const increment = +timeConfig.value[`${type}GridIncrement`];
        const min = type === 'hours' && !timeConfig.value.is24 ? increment : 0;

        const generatedArray: SelectItem[] = [];

        for (let i = min; i < max; i += increment) {
            generatedArray.push({
                value: timeConfig.value.is24 ? i : getAmPmDiff(i, type),
                text: i < 10 ? `0${i}` : `${i}`,
            });
        }

        if (type === 'hours' && !timeConfig.value.is24) {
            generatedArray.unshift({ value: amPm.value === 'PM' ? 12 : 0, text: '12' });
        }

        return groupListAndMap(generatedArray, (value: SelectItem) => {
            const active = false;
            const disabled =
                filters.value.times[type].includes(value.value) ||
                !isDateInRange(value.value, type) ||
                isValueDisabled(type, value.value) ||
                isOverlayValueDisabled(type, value.value);

            return { active, disabled };
        });
    };

    const sanitizeMinutesAndSeconds = (val: number) => (val >= 0 ? val : 59);

    const sanitizeHours = (val: number) => (val >= 0 ? val : 23);

    const isDateInRange = (val: number, type: TimeKey): boolean => {
        const minTime = rootProps.minTime ? setTime(sanitizeTime(rootProps.minTime as TimeModel)) : null;
        const maxTime = rootProps.maxTime ? setTime(sanitizeTime(rootProps.maxTime as TimeModel)) : null;
        const selectedDate = setTime(
            sanitizeTime(
                timeValues.value,
                type,
                type === 'minutes' || type === 'seconds' ? sanitizeMinutesAndSeconds(val) : sanitizeHours(val),
            ),
        );
        if (minTime && maxTime)
            return (
                (isBefore(selectedDate, maxTime) || isEqual(selectedDate, maxTime)) &&
                (isAfter(selectedDate, minTime) || isEqual(selectedDate, minTime))
            );
        if (minTime) return isAfter(selectedDate, minTime) || isEqual(selectedDate, minTime);
        if (maxTime) return isBefore(selectedDate, maxTime) || isEqual(selectedDate, maxTime);
        return true;
    };

    const checkOverlayDisabled = (type: TimeKey): boolean => {
        return timeConfig.value[`no${type[0]!.toUpperCase() + type.slice(1)}Overlay` as TimeOverlayCheck];
    };

    const toggleOverlay = (type: TimeKey): void => {
        if (!checkOverlayDisabled(type)) {
            overlays[type] = !overlays[type];
            if (overlays[type]) {
                timeOverlayOpen.value = true;
                emit('overlay-opened', type);
            } else {
                timeOverlayOpen.value = false;
                emit('overlay-closed', type);
            }
        }
    };

    const getTimeGetter = (type: TimeKey) => {
        if (type === 'hours') return getHours;
        if (type === 'minutes') return getMinutes;
        return getSeconds;
    };

    const clearHold = () => {
        if (holdTimeout.value) {
            clearTimeout(holdTimeout.value);
        }
    };

    const handleTimeValue = (type: TimeKey, inc = true, opts?: { keyboard?: boolean }): void => {
        const addOrSub = inc ? addTime : subTime;
        const inVal = inc ? +timeConfig.value[`${type}Increment`] : -+timeConfig.value[`${type}Increment`];
        const isInRange = isDateInRange(+props[type] + inVal, type);
        if (isInRange) {
            emit(
                `update:${type}` as never,
                getTimeGetter(type)(
                    addOrSub({ [type]: +props[type] }, { [type]: +timeConfig.value[`${type}Increment`] }),
                ),
            );
        }
        if (!opts?.keyboard && config.value.timeArrowHoldThreshold) {
            holdTimeout.value = setTimeout(() => {
                handleTimeValue(type, inc);
            }, config.value.timeArrowHoldThreshold);
        }
    };

    const convert24ToAmPm = (time: number): number => {
        if (timeConfig.value.is24) {
            return time;
        }
        if (time >= 12) {
            amPm.value = 'PM';
        } else {
            amPm.value = 'AM';
        }
        return hoursToAmPmHours(time);
    };

    const setAmPm = () => {
        if (amPm.value === 'PM') {
            amPm.value = 'AM';
            emit('update:hours', props.hours - 12);
        } else {
            amPm.value = 'PM';
            emit('update:hours', props.hours + 12);
        }
        rootEmit('am-pm-change', amPm.value);
    };

    const openChildCmp = (child: TimeKey): void => {
        overlays[child] = true;
    };

    const assignRefs = (el: any, col: number, pos: number): void => {
        if (el && rootProps.arrowNavigation) {
            if (Array.isArray(elementRefs.value[col])) {
                elementRefs.value[col][pos] = el;
            } else {
                elementRefs.value[col] = [el];
            }
            const matrix = elementRefs.value.reduce(
                (col, row) => row.map((_, i) => [...(col[i]! || []), row[i]!]),
                [] as HTMLElement[][],
            );
            setTimePickerBackRef(props.closeTimePickerBtn);
            if (amPmButton.value) {
                matrix[1] = matrix[1]!.concat(amPmButton.value);
            }
            setTimePickerElements(matrix, props.order as 0 | 1);
        }
    };

    const handleTimeFromOverlay = (type: TimeKey, value: number): void => {
        toggleOverlay(type);

        return emit(`update:${type}` as never, value);
    };

    defineExpose({ openChildCmp });
</script>
