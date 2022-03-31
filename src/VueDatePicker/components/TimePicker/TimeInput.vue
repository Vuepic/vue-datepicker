<template>
    <div class="dp__time_input" v-if="!disabled">
        <div v-for="(timeInput, i) in timeInputs" :key="i" :class="timeColClass">
            <template v-if="timeInput === 'separator'"> : </template>
            <template v-else>
                <div
                    class="dp__inc_dec_button"
                    role="button"
                    :aria-label="ariaLabels.incrementValue(timeInput.type)"
                    tabindex="0"
                    @keydown.enter="handleTimeValue(timeInput.type)"
                    @click="handleTimeValue(timeInput.type)"
                >
                    <slot name="arrow-up" v-if="$slots['arrow-up']" />
                    <ChevronUpIcon v-if="!$slots['arrow-up']" />
                </div>
                <div
                    role="button"
                    :aria-label="ariaLabels.openTpOverlay(timeInput.type)"
                    :class="checkOverlayDisabled(timeInput.type) ? '' : 'dp__time_display'"
                    tabindex="0"
                    @keydown.enter="toggleOverlay(timeInput.type)"
                    @click="toggleOverlay(timeInput.type)"
                >
                    <slot
                        v-if="$slots[timeInput.type]"
                        :name="timeInput.type"
                        :text="timeValueDisplay(timeInput.type).text"
                        :value="timeValueDisplay(timeInput.type).value"
                    />
                    <template v-if="!$slots[timeInput.type]">{{ timeValueDisplay(timeInput.type).text }}</template>
                </div>
                <div
                    class="dp__inc_dec_button"
                    role="button"
                    :aria-label="ariaLabels.decrementValue(timeInput.type)"
                    tabindex="0"
                    @keydown.enter="handleTimeValue(timeInput.type, false)"
                    @click="handleTimeValue(timeInput.type, false)"
                >
                    <slot name="arrow-down" v-if="$slots['arrow-down']" />
                    <ChevronDownIcon v-if="!$slots['arrow-down']" />
                </div>
            </template>
        </div>
        <div v-if="!is24">
            <slot name="am-pm-button" v-if="$slots['am-pm-button']" :toggle="setAmPm" :value="amPm"></slot>
            <button
                v-if="!$slots['am-pm-button']"
                class="dp__pm_am_button"
                role="button"
                :aria-label="ariaLabels.amPmButton"
                tabindex="0"
                @click="setAmPm"
                @keydown.enter="setAmPm"
            >
                {{ amPm }}
            </button>
        </div>
        <transition
            v-for="(timeInput, i) in timeInputOverlays"
            :key="i"
            :name="transitionName(overlays[timeInput.type])"
            :css="showTransition"
        >
            <SelectionGrid
                v-if="overlays[timeInput.type]"
                :items="getGridItems(timeInput.type)"
                :disabled-values="filters.times[timeInput.type]"
                @update:model-value="$emit(`update:${timeInput.type}`, $event)"
                @selected="toggleOverlay(timeInput.type)"
                @toggle="toggleOverlay(timeInput.type)"
                @reset-flow="$emit('reset-flow')"
            >
                <template #button-icon>
                    <slot name="clock-icon" v-if="$slots['clock-icon']" />
                    <ClockIcon v-if="!$slots['clock-icon']" />
                </template>
                <template v-if="$slots[`${timeInput.type}-overlay`]" #item="{ item }">
                    <slot :name="`${timeInput.type}-overlay`" :text="item.text" :value="item.value" />
                </template>
            </SelectionGrid>
        </transition>
    </div>
</template>

<script lang="ts" setup>
    import { computed, inject, reactive, ref } from 'vue';
    import type { PropType, ComputedRef } from 'vue';
    import { getHours, getMinutes, getSeconds } from 'date-fns';

    import { ChevronUpIcon, ChevronDownIcon, ClockIcon } from '@/components/Icons';
    import SelectionGrid from '@/components/SelectionGrid.vue';
    import { useTransitions } from '@/components/composition/transition';

    import type {
        DynamicClass,
        IDateFilter,
        IDefaultSelect,
        ITimeType,
        TimeOverlayCheck,
        AreaLabels,
    } from '@/interfaces';

    import { getArrayInArray, hoursToAmPmHours } from '@/utils/util';
    import { addTime, subTime } from '@/utils/date-utils';
    import { ariaLabelsKey, TimeInputProps } from '@/utils/props';

    const emit = defineEmits([
        'setHours',
        'setMinutes',
        'update:hours',
        'update:minutes',
        'update:seconds',
        'reset-flow',
    ]);
    const props = defineProps({
        ...TimeInputProps,
        hours: { type: Number as PropType<number>, default: 0 },
        minutes: { type: Number as PropType<number>, default: 0 },
        seconds: { type: Number as PropType<number>, default: 0 },
        filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
        disabled: { type: Boolean as PropType<boolean>, default: false },
    });

    const overlays = reactive({
        hours: false,
        minutes: false,
        seconds: false,
    });
    const amPm = ref('AM');
    const ariaLabels = inject<ComputedRef<AreaLabels>>(ariaLabelsKey);
    const { transitionName, showTransition } = useTransitions();

    const timeColClass = computed(
        (): DynamicClass => ({
            dp__time_col: true,
            dp__time_col_reg: !props.enableSeconds && props.is24,
            dp__time_col_reg_with_button: !props.enableSeconds && !props.is24,
            dp__time_col_sec: props.enableSeconds && props.is24,
            dp__time_col_sec_with_button: props.enableSeconds && !props.is24,
        }),
    );

    const timeInputs = computed(() => {
        const inputs = [{ type: 'hours' }, 'separator', { type: 'minutes' }];
        return props.enableSeconds ? inputs.concat(['separator', { type: 'seconds' }]) : inputs;
    });

    const timeInputOverlays = computed(() => timeInputs.value.filter((input) => typeof input !== 'string'));

    const timeValueDisplay = computed(() => (type: ITimeType) => {
        if (type === 'hours') {
            const hour = convert24ToAmPm(props.hours);
            return { text: hour < 10 ? `0${hour}` : `${hour}`, value: hour };
        }
        return { text: props[type] < 10 ? `0${props[type]}` : `${props[type]}`, value: props[type] };
    });

    const getGridItems = (type: ITimeType): IDefaultSelect[][] => {
        const max = type === 'hours' ? (props.is24 ? 24 : 12) : 60;
        const increment = +props[`${type}Increment`];

        const generatedArray: IDefaultSelect[] = [];

        for (let i = 0; i < max; i += increment) {
            generatedArray.push({ value: i, text: i < 10 ? `0${i}` : `${i}` });
        }

        return getArrayInArray(generatedArray);
    };

    const checkOverlayDisabled = (type: ITimeType): boolean => {
        return props[`no${type[0].toUpperCase() + type.slice(1)}Overlay` as TimeOverlayCheck];
    };

    const toggleOverlay = (type: ITimeType): void => {
        if (!checkOverlayDisabled(type)) {
            overlays[type] = !overlays[type];
        }
    };

    const handleTimeValue = (type: ITimeType, inc = true): void => {
        const method = type === 'hours' ? getHours : type === 'minutes' ? getMinutes : getSeconds;
        const addOrSub = inc ? addTime : subTime;
        emit(`update:${type}`, method(addOrSub({ [type]: +props[type] }, { [type]: +props[`${type}Increment`] })));
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
    };

    const openChildCmp = (child: ITimeType): void => {
        overlays[child] = true;
    };

    defineExpose({ openChildCmp });
</script>
