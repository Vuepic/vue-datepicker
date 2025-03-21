<template>
    <div v-if="!disabled" class="dp__time_input">
        <div
            v-for="(timeInput, i) in timeInputs"
            :key="i"
            :class="timeColClass"
            :data-compact="isCompact && !enableSeconds"
            :data-collapsed="isCompact && enableSeconds"
        >
            <template v-if="timeInput.separator"> <template v-if="!timeOverlayOpen">:</template> </template>
            <template v-else>
                <button
                    :ref="(el) => assignRefs(el, i, 0)"
                    type="button"
                    :class="{
                        dp__btn: true,
                        dp__inc_dec_button: !timePickerInline,
                        dp__inc_dec_button_inline: timePickerInline,
                        dp__tp_inline_btn_top: timePickerInline,
                        dp__inc_dec_button_disabled: disabledArrowUpBtn(timeInput.type),
                        'dp--hidden-el': timeOverlayOpen,
                    }"
                    :data-test-id="`${timeInput.type}-time-inc-btn-${props.order}`"
                    :aria-label="defaultedAriaLabels?.incrementValue(timeInput.type)"
                    tabindex="0"
                    @keydown="
                        checkKeyDown($event, () => handleTimeValue(timeInput.type, true, { keyboard: true }), true)
                    "
                    @click="defaultedConfig.timeArrowHoldThreshold ? undefined : handleTimeValue(timeInput.type, true)"
                    @mousedown="
                        defaultedConfig.timeArrowHoldThreshold ? handleTimeValue(timeInput.type, true) : undefined
                    "
                    @mouseup="clearHold"
                >
                    <template v-if="!props.timePickerInline">
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
                    :aria-label="`${timeValueDisplay(timeInput.type).text}-${defaultedAriaLabels?.openTpOverlay(timeInput.type)}`"
                    :class="{
                        dp__time_display: true,
                        dp__time_display_block: !timePickerInline,
                        dp__time_display_inline: timePickerInline,
                        'dp--time-invalid': disabledBox(timeInput.type),
                        'dp--time-overlay-btn': !disabledBox(timeInput.type),
                        'dp--hidden-el': timeOverlayOpen,
                    }"
                    :disabled="checkOverlayDisabled(timeInput.type)"
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
                        dp__inc_dec_button: !timePickerInline,
                        dp__inc_dec_button_inline: timePickerInline,
                        dp__tp_inline_btn_bottom: timePickerInline,
                        dp__inc_dec_button_disabled: disabledArrowDownBtn(timeInput.type),
                        'dp--hidden-el': timeOverlayOpen,
                    }"
                    :data-test-id="`${timeInput.type}-time-dec-btn-${props.order}`"
                    :aria-label="defaultedAriaLabels?.decrementValue(timeInput.type)"
                    tabindex="0"
                    @keydown="
                        checkKeyDown($event, () => handleTimeValue(timeInput.type, false, { keyboard: true }), true)
                    "
                    @click="defaultedConfig.timeArrowHoldThreshold ? undefined : handleTimeValue(timeInput.type, false)"
                    @mousedown="
                        defaultedConfig.timeArrowHoldThreshold ? handleTimeValue(timeInput.type, false) : undefined
                    "
                    @mouseup="clearHold"
                >
                    <template v-if="!props.timePickerInline">
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
        <div v-if="!is24">
            <slot v-if="$slots['am-pm-button']" name="am-pm-button" :toggle="setAmPm" :value="amPm"></slot>
            <button
                v-if="!$slots['am-pm-button']"
                ref="amPmButton"
                type="button"
                class="dp__pm_am_button"
                role="button"
                :aria-label="defaultedAriaLabels?.amPmButton"
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
                    :is-last="autoApply && !defaultedConfig.keepActionRow"
                    :esc-close="escClose"
                    :type="timeInput.type"
                    :text-input="textInput"
                    :config="config"
                    :arrow-navigation="arrowNavigation"
                    :aria-labels="ariaLabels"
                    :overlay-label="defaultedAriaLabels.timeOverlay?.(timeInput.type)"
                    @selected="handleTimeFromOverlay(timeInput.type, $event)"
                    @toggle="toggleOverlay(timeInput.type)"
                    @reset-flow="$emit('reset-flow')"
                >
                    <template #button-icon>
                        <slot v-if="$slots['clock-icon']" name="clock-icon" />
                        <component :is="timePickerInline ? CalendarIcon : ClockIcon" v-if="!$slots['clock-icon']" />
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
    import { add, getHours, getMinutes, getSeconds, isAfter, isBefore, isEqual, set, sub } from 'date-fns';

    import { ChevronUpIcon, ChevronDownIcon, ClockIcon, CalendarIcon } from '@/components/Icons';
    import SelectionOverlay from '@/components/Common/SelectionOverlay.vue';

    import { useTransitions, useArrowNavigation, useDefaults } from '@/composables';
    import { PickerBaseProps } from '@/props';
    import { checkKeyDown, groupListAndMap, hoursToAmPmHours } from '@/utils/util';
    import { getDate, sanitizeTime } from '@/utils/date-utils';

    import type { PropType } from 'vue';
    import type { Duration } from 'date-fns';
    import type {
        DynamicClass,
        IDefaultSelect,
        TimeType,
        TimeOverlayCheck,
        OverlayGridItem,
        DisabledTimesArrProp,
        TimeModel,
        TimeInput,
    } from '@/interfaces';

    defineOptions({
        compatConfig: {
            MODE: 3,
        },
    });

    const emit = defineEmits([
        'set-hours',
        'set-minutes',
        'update:hours',
        'update:minutes',
        'update:seconds',
        'reset-flow',
        'mounted',
        'overlay-closed',
        'overlay-opened',
        'am-pm-change',
    ]);
    const props = defineProps({
        hours: { type: Number as PropType<number>, default: 0 },
        minutes: { type: Number as PropType<number>, default: 0 },
        seconds: { type: Number as PropType<number>, default: 0 },
        closeTimePickerBtn: { type: Object as PropType<HTMLElement | null>, default: null },
        order: { type: Number as PropType<number>, default: 0 },
        disabledTimesConfig: { type: Function as PropType<DisabledTimesArrProp>, default: null },
        validateTime: { type: Function as PropType<(type: TimeType, value: number) => boolean>, default: () => false },
        ...PickerBaseProps,
    });

    const { setTimePickerElements, setTimePickerBackRef } = useArrowNavigation();
    const {
        defaultedAriaLabels,
        defaultedTransitions,
        defaultedFilters,
        defaultedConfig,
        defaultedRange,
        defaultedMultiCalendars,
    } = useDefaults(props);

    const { transitionName, showTransition } = useTransitions(defaultedTransitions);

    const overlays = reactive({
        hours: false,
        minutes: false,
        seconds: false,
    });
    const amPm = ref('AM');
    const amPmButton = ref<HTMLElement | null>(null);
    const elementRefs = ref<HTMLElement[][]>([]);
    const holdTimeout = ref();
    const timeOverlayOpen = ref(false);

    onMounted(() => {
        emit('mounted');
    });

    const setTime = (time: Duration) => {
        return set(new Date(), {
            hours: time.hours,
            minutes: time.minutes,
            seconds: props.enableSeconds ? time.seconds : 0,
            milliseconds: 0,
        });
    };

    const disabledBox = computed(
        () => (type: TimeType) => isValueDisabled(type, props[type]) || isOverlayValueDisabled(type, props[type]),
    );

    const timeValues = computed(() => ({ hours: props.hours, minutes: props.minutes, seconds: props.seconds }));

    const isOverlayValueDisabled = (type: TimeType, val: number) => {
        if (defaultedRange.value.enabled && !defaultedRange.value.disableTimeRangeValidation) {
            return !props.validateTime(type, val);
        }
        return false;
    };

    const disabledRangedArrows = (type: TimeType, inc: boolean) => {
        if (defaultedRange.value.enabled && !defaultedRange.value.disableTimeRangeValidation) {
            const inVal = inc ? +props[`${type}Increment`] : -+props[`${type}Increment`];
            const val = props[type] + inVal;
            return !props.validateTime(type, val);
        }
        return false;
    };

    const disabledArrowUpBtn = computed(() => (type: TimeType) => {
        return !isDateInRange(+props[type] + +props[`${type}Increment`], type) || disabledRangedArrows(type, true);
    });

    const disabledArrowDownBtn = computed(() => (type: TimeType) => {
        return !isDateInRange(+props[type] - +props[`${type}Increment`], type) || disabledRangedArrows(type, false);
    });

    const addTime = (initial: Duration, toAdd: Duration) => add(set(getDate(), initial), toAdd);

    const subTime = (initial: Duration, toSub: Duration) => sub(set(getDate(), initial), toSub);

    const timeColClass = computed(
        (): DynamicClass => ({
            dp__time_col: true,
            dp__time_col_block: !props.timePickerInline,
            dp__time_col_reg_block: !props.enableSeconds && props.is24 && !props.timePickerInline,
            dp__time_col_reg_inline: !props.enableSeconds && props.is24 && props.timePickerInline,
            dp__time_col_reg_with_button: !props.enableSeconds && !props.is24,
            dp__time_col_sec: props.enableSeconds && props.is24,
            dp__time_col_sec_with_button: props.enableSeconds && !props.is24,
        }),
    );

    const isCompact = computed(
        () => props.timePickerInline && defaultedRange.value.enabled && !defaultedMultiCalendars.value.count,
    );

    const timeInputs = computed((): TimeInput[] => {
        const inputs = [{ type: 'hours' }];
        if (props.enableMinutes) {
            inputs.push({ type: '', separator: true } as unknown as TimeInput, {
                type: 'minutes',
            });
        }
        if (props.enableSeconds) {
            inputs.push({ type: '', separator: true } as unknown as TimeInput, {
                type: 'seconds',
            });
        }
        return inputs as TimeInput[];
    });

    const timeInputOverlays = computed(() => timeInputs.value.filter((input) => !input.separator));

    const timeValueDisplay = computed(() => (type: TimeType) => {
        if (type === 'hours') {
            const hour = convert24ToAmPm(+props.hours);
            return { text: hour < 10 ? `0${hour}` : `${hour}`, value: hour };
        }
        return { text: props[type] < 10 ? `0${props[type]}` : `${props[type]}`, value: props[type] };
    });

    const isValueDisabled = (type: TimeType, value: number): boolean => {
        if (!props.disabledTimesConfig) return false;
        const disabledTimes = props.disabledTimesConfig(props.order, type === 'hours' ? value : undefined);
        if (!disabledTimes[type]) return true;
        return Boolean(disabledTimes[type]?.includes(value));
    };

    const getAmPmDiff = (val: number, type: TimeType): number => {
        if (type !== 'hours') return val;
        return amPm.value === 'AM' ? val : val + 12;
    };

    const getGridItems = (type: TimeType): OverlayGridItem[][] => {
        const timeRange = props.is24 ? 24 : 12;
        const max = type === 'hours' ? timeRange : 60;
        const increment = +props[`${type}GridIncrement`];
        const min = type === 'hours' && !props.is24 ? increment : 0;

        const generatedArray: IDefaultSelect[] = [];

        for (let i = min; i < max; i += increment) {
            generatedArray.push({ value: props.is24 ? i : getAmPmDiff(i, type), text: i < 10 ? `0${i}` : `${i}` });
        }

        if (type === 'hours' && !props.is24) {
            generatedArray.unshift({ value: amPm.value === 'PM' ? 12 : 0, text: '12' });
        }

        return groupListAndMap(generatedArray, (value: IDefaultSelect) => {
            const active = false;
            const disabled =
                defaultedFilters.value.times[type].includes(value.value) ||
                !isDateInRange(value.value, type) ||
                isValueDisabled(type, value.value) ||
                isOverlayValueDisabled(type, value.value);

            return { active, disabled };
        });
    };

    const sanitizeMinutesAndSeconds = (val: number) => (val >= 0 ? val : 59);

    const sanitizeHours = (val: number) => (val >= 0 ? val : 23);

    const isDateInRange = (val: number, type: TimeType): boolean => {
        const minTime = props.minTime ? setTime(sanitizeTime(props.minTime as TimeModel)) : null;
        const maxTime = props.maxTime ? setTime(sanitizeTime(props.maxTime as TimeModel)) : null;
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

    const checkOverlayDisabled = (type: TimeType): boolean => {
        return props[`no${type[0].toUpperCase() + type.slice(1)}Overlay` as TimeOverlayCheck];
    };

    const toggleOverlay = (type: TimeType): void => {
        if (!checkOverlayDisabled(type)) {
            overlays[type] = !overlays[type];
            if (!overlays[type]) {
                timeOverlayOpen.value = false;
                emit('overlay-closed', type);
            } else {
                timeOverlayOpen.value = true;
                emit('overlay-opened', type);
            }
        }
    };

    const getTimeGetter = (type: TimeType) => {
        if (type === 'hours') return getHours;
        if (type === 'minutes') return getMinutes;
        return getSeconds;
    };

    const clearHold = () => {
        if (holdTimeout.value) {
            clearTimeout(holdTimeout.value);
        }
    };

    const handleTimeValue = (type: TimeType, inc = true, opts?: { keyboard?: boolean }): void => {
        const addOrSub = inc ? addTime : subTime;
        const inVal = inc ? +props[`${type}Increment`] : -+props[`${type}Increment`];
        const isInRange = isDateInRange(+props[type] + inVal, type);
        if (isInRange) {
            emit(
                `update:${type}`,
                getTimeGetter(type)(addOrSub({ [type]: +props[type] }, { [type]: +props[`${type}Increment`] })),
            );
        }
        if (!opts?.keyboard && defaultedConfig.value.timeArrowHoldThreshold) {
            holdTimeout.value = setTimeout(() => {
                handleTimeValue(type, inc);
            }, defaultedConfig.value.timeArrowHoldThreshold);
        }
    };

    const convert24ToAmPm = (time: number): number => {
        if (props.is24) {
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
        emit('am-pm-change', amPm.value);
    };

    const openChildCmp = (child: TimeType): void => {
        overlays[child] = true;
    };

    const assignRefs = (el: any, col: number, pos: number): void => {
        if (el && props.arrowNavigation) {
            if (Array.isArray(elementRefs.value[col])) {
                elementRefs.value[col][pos] = el;
            } else {
                elementRefs.value[col] = [el];
            }
            const matrix = elementRefs.value.reduce(
                (col, row) => row.map((_, i) => [...(col[i] || []), row[i]]),
                [] as HTMLElement[][],
            );
            setTimePickerBackRef(props.closeTimePickerBtn);
            if (amPmButton.value) {
                matrix[1] = matrix[1].concat(amPmButton.value);
            }
            setTimePickerElements(matrix, props.order as 0 | 1);
        }
    };

    const handleTimeFromOverlay = (type: TimeType, value: number): void => {
        toggleOverlay(type);
        return emit(`update:${type}`, value);
    };

    defineExpose({ openChildCmp });
</script>
