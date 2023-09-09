<template>
    <div class="dp__time_input" v-if="!disabled">
        <div v-for="(timeInput, i) in timeInputs" :key="i" :class="timeColClass">
            <template v-if="timeInput.separator"> : </template>
            <template v-else>
                <button
                    type="button"
                    :class="{
                        dp__btn: true,
                        dp__inc_dec_button: !props.timePickerInline,
                        dp__inc_dec_button_inline: props.timePickerInline,
                        dp__tp_inline_btn_top: props.timePickerInline,
                        dp__inc_dec_button_disabled: disabledArrowUpBtn(timeInput.type),
                    }"
                    :data-test="`${timeInput.type}-time-inc-btn-${props.order}`"
                    :aria-label="defaultedAriaLabels?.incrementValue(timeInput.type)"
                    tabindex="0"
                    @keydown.enter.prevent="handleTimeValue(timeInput.type)"
                    @keydown.space.prevent="handleTimeValue(timeInput.type)"
                    @click="handleTimeValue(timeInput.type)"
                    :ref="(el) => assignRefs(el, i, 0)"
                >
                    <template v-if="!props.timePickerInline">
                        <slot name="arrow-up" v-if="$slots['arrow-up']" />
                        <ChevronUpIcon v-if="!$slots['arrow-up']" />
                    </template>
                    <template v-else>
                        <span class="dp__tp_inline_btn_bar dp__tp_btn_in_l"></span>
                        <span class="dp__tp_inline_btn_bar dp__tp_btn_in_r"></span>
                    </template>
                </button>
                <button
                    type="button"
                    :aria-label="defaultedAriaLabels?.openTpOverlay(timeInput.type)"
                    :class="{
                        dp__time_display: true,
                        dp__time_display_block: !props.timePickerInline,
                        dp__time_display_inline: props.timePickerInline,
                        'dp--time-invalid': disabledBox(timeInput.type),
                        'dp--time-overlay-btn': !disabledBox(timeInput.type),
                    }"
                    :disabled="checkOverlayDisabled(timeInput.type)"
                    tabindex="0"
                    :data-test="`${timeInput.type}-toggle-overlay-btn-${props.order}`"
                    @keydown.enter.prevent="toggleOverlay(timeInput.type)"
                    @keydown.space.prevent="toggleOverlay(timeInput.type)"
                    @click="toggleOverlay(timeInput.type)"
                    :ref="(el) => assignRefs(el, i, 1)"
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
                    type="button"
                    :class="{
                        dp__btn: true,
                        dp__inc_dec_button: !props.timePickerInline,
                        dp__inc_dec_button_inline: props.timePickerInline,
                        dp__tp_inline_btn_bottom: props.timePickerInline,
                        dp__inc_dec_button_disabled: disabledArrowDownBtn(timeInput.type),
                    }"
                    :data-test="`${timeInput.type}-time-dec-btn-${props.order}`"
                    :aria-label="defaultedAriaLabels?.decrementValue(timeInput.type)"
                    tabindex="0"
                    @keydown.enter.prevent="handleTimeValue(timeInput.type, false)"
                    @keydown.space.prevent="handleTimeValue(timeInput.type, false)"
                    @click="handleTimeValue(timeInput.type, false)"
                    :ref="(el) => assignRefs(el, i, 2)"
                >
                    <template v-if="!props.timePickerInline">
                        <slot name="arrow-down" v-if="$slots['arrow-down']" />
                        <ChevronDownIcon v-if="!$slots['arrow-down']" />
                    </template>
                    <template v-else>
                        <span class="dp__tp_inline_btn_bar dp__tp_btn_in_l"></span>
                        <span class="dp__tp_inline_btn_bar dp__tp_btn_in_r"></span>
                    </template>
                </button>
            </template>
        </div>
        <div v-if="!is24">
            <slot name="am-pm-button" v-if="$slots['am-pm-button']" :toggle="setAmPm" :value="amPm"></slot>
            <button
                ref="amPmButton"
                type="button"
                v-if="!$slots['am-pm-button']"
                class="dp__pm_am_button"
                role="button"
                :aria-label="defaultedAriaLabels?.amPmButton"
                tabindex="0"
                @click="setAmPm"
                @keydown.enter.prevent="setAmPm"
                @keydown.space.prevent="setAmPm"
            >
                {{ amPm }}
            </button>
        </div>
        <template v-for="(timeInput, i) in timeInputOverlays" :key="i">
            <transition :name="transitionName(overlays[timeInput.type])" :css="showTransition">
                <SelectionOverlay
                    v-if="overlays[timeInput.type]"
                    :items="getGridItems(timeInput.type)"
                    :is-last="autoApply && !keepActionRow && !defaultedConfig.keepActionRow"
                    :esc-close="escClose"
                    :type="timeInput.type"
                    :text-input="textInput"
                    :config="config"
                    :arrow-navigation="arrowNavigation"
                    @selected="handleTimeFromOverlay(timeInput.type, $event)"
                    @toggle="toggleOverlay(timeInput.type)"
                    @reset-flow="$emit('reset-flow')"
                >
                    <template #button-icon>
                        <slot name="clock-icon" v-if="$slots['clock-icon']" />
                        <ClockIcon v-if="!$slots['clock-icon']" />
                    </template>
                    <template v-if="$slots[`${timeInput.type}-overlay-value`]" #item="{ item }">
                        <slot :name="`${timeInput.type}-overlay-value`" :text="item.text" :value="item.value" />
                    </template>
                </SelectionOverlay>
            </transition>
        </template>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, reactive, ref } from 'vue';
    import { add, getHours, getMinutes, getSeconds, isAfter, isBefore, isEqual, set, sub } from 'date-fns';

    import { ChevronUpIcon, ChevronDownIcon, ClockIcon } from '@/components/Icons';
    import SelectionOverlay from '@/components/Common/SelectionOverlay.vue';

    import { useTransitions, useArrowNavigation, useDefaults } from '@/composables';
    import { PickerBaseProps } from '@/props';
    import { groupListAndMap, hoursToAmPmHours } from '@/utils/util';
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
        'am-pm-change',
    ]);
    const props = defineProps({
        hours: { type: Number as PropType<number>, default: 0 },
        minutes: { type: Number as PropType<number>, default: 0 },
        seconds: { type: Number as PropType<number>, default: 0 },
        closeTimePickerBtn: { type: Object as PropType<HTMLElement | null>, default: null },
        order: { type: Number as PropType<number>, default: 0 },
        disabledTimesConfig: { type: Function as PropType<DisabledTimesArrProp>, default: null },
        ...PickerBaseProps,
    });

    const { setTimePickerElements, setTimePickerBackRef } = useArrowNavigation();
    const { defaultedAriaLabels, defaultedTransitions, defaultedFilters, defaultedConfig } = useDefaults(props);

    const { transitionName, showTransition } = useTransitions(defaultedTransitions);

    const overlays = reactive({
        hours: false,
        minutes: false,
        seconds: false,
    });
    const amPm = ref('AM');
    const amPmButton = ref<HTMLElement | null>(null);
    const elementRefs = ref<HTMLElement[][]>([]);

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

    const disabledBox = computed(() => (type: TimeType) => isValueDisabled(type, props[type]));

    const timeValues = computed(() => ({ hours: props.hours, minutes: props.minutes, seconds: props.seconds }));

    const disabledArrowUpBtn = computed(() => (type: TimeType) => {
        return !isDateInRange(+props[type] + +props[`${type}Increment`], type);
    });

    const disabledArrowDownBtn = computed(() => (type: TimeType) => {
        return !isDateInRange(+props[type] - +props[`${type}Increment`], type);
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

    const timeInputs = computed((): { type: TimeType; separator?: boolean }[] => {
        const inputs = [{ type: 'hours' }, { type: '', separator: true }, { type: 'minutes' }];
        return (props.enableSeconds ? inputs.concat([{ type: '', separator: true }, { type: 'seconds' }]) : inputs) as {
            type: TimeType;
        }[];
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

    const getGridItems = (type: TimeType): OverlayGridItem[][] => {
        const timeRange = props.is24 ? 24 : 12;
        const max = type === 'hours' ? timeRange : 60;
        const increment = +props[`${type}GridIncrement`];
        const min = type === 'hours' && !props.is24 ? increment : 0;

        const generatedArray: IDefaultSelect[] = [];

        for (let i = min; i < max; i += increment) {
            generatedArray.push({ value: i, text: i < 10 ? `0${i}` : `${i}` });
        }

        if (type === 'hours' && !props.is24) {
            generatedArray.push({ value: 0, text: '12' });
        }

        return groupListAndMap(generatedArray, (value: IDefaultSelect) => {
            const active = false;
            const disabled =
                defaultedFilters.value.times[type].includes(value.value) ||
                !isDateInRange(value.value, type) ||
                isValueDisabled(type, value.value);

            return { active, disabled };
        });
    };

    const isDateInRange = (val: number, type: TimeType): boolean => {
        const minTime = props.minTime ? setTime(sanitizeTime(props.minTime)) : null;
        const maxTime = props.maxTime ? setTime(sanitizeTime(props.maxTime)) : null;
        const selectedDate = setTime(sanitizeTime(timeValues.value, type, val));

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
                emit('overlay-closed');
            }
        }
    };

    const getTimeGetter = (type: TimeType) => {
        if (type === 'hours') return getHours;
        if (type === 'minutes') return getMinutes;
        return getSeconds;
    };

    const handleTimeValue = (type: TimeType, inc = true): void => {
        const addOrSub = inc ? addTime : subTime;
        const inVal = inc ? +props[`${type}Increment`] : -+props[`${type}Increment`];
        const isInRange = isDateInRange(+props[type] + inVal, type);
        if (isInRange) {
            emit(
                `update:${type}`,
                getTimeGetter(type)(addOrSub({ [type]: +props[type] }, { [type]: +props[`${type}Increment`] })),
            );
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
        if (type === 'hours' && !props.is24) {
            return emit(`update:${type}`, amPm.value === 'PM' ? value + 12 : value);
        }
        return emit(`update:${type}`, value);
    };

    defineExpose({ openChildCmp });
</script>
