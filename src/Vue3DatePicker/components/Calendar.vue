<template>
    <div :class="calendarParentClass">
        <div :style="contentWrapStyle">
            <div
                v-if="!specificMode"
                :class="calendarWrapClass"
                role="grid"
                aria-label="Calendar wrapper"
                @wheel.prevent="$emit('handleScroll', $event)"
            >
                <div class="db__calendar_header" role="row">
                    <div class="dp__calendar_header_item" role="gridcell" v-if="weekNumbers">{{ weekNumName }}</div>
                    <div class="dp__calendar_header_item" role="gridcell" v-for="(dayVal, i) in weekDays" :key="i">
                        <slot v-if="$slots['calendar-header']" name="calendar-header" :day="dayVal" :index="i" />
                        <template v-if="!$slots['calendar-header']">
                            {{ dayVal }}
                        </template>
                    </div>
                </div>
                <div class="dp__calendar_header_separator"></div>
                <transition :name="transitionName" :css="!!transitions">
                    <div class="dp__calendar" role="grid" aria-label="Calendar days" v-if="showCalendar">
                        <div class="dp__calendar_row" role="row" v-for="(week, weekInd) in mappedDates" :key="weekInd">
                            <div role="gridcell" v-if="weekNumbers" class="dp__calendar_item dp__week_num">
                                <div class="dp__cell_inner">
                                    {{ getWeekNum(week.days) }}
                                </div>
                            </div>
                            <div
                                v-for="(dayVal, dayInd) in week.days"
                                role="gridcell"
                                class="dp__calendar_item"
                                :ref="
                                    (el) => {
                                        if (el) dayRefs[dayInd + weekInd] = el;
                                    }
                                "
                                :key="dayInd + weekInd"
                                :aria-selected="
                                    dayVal.classData.dp__active_date ||
                                    dayVal.classData.dp__range_start ||
                                    dayVal.classData.dp__range_start
                                "
                                :aria-disabled="dayVal.classData.dp__cell_disabled"
                                tabindex="0"
                                @click="$emit('selectDate', dayVal)"
                                @keydown.enter="$emit('selectDate', dayVal)"
                                @mouseover="onMouseOver(dayVal, dayInd + weekInd)"
                                @mouseleave="onMouseLeave"
                            >
                                <div class="dp__cell_inner" :class="dayVal.classData">
                                    <slot name="day" v-if="$slots.day" :day="+dayVal.text" :date="dayVal.value"></slot>
                                    <template v-if="!$slots.day"> {{ dayVal.text }} </template>
                                    <div
                                        v-if="dayVal.marker"
                                        :class="markerClass(dayVal.marker)"
                                        :style="dayVal.marker.color ? { backgroundColor: dayVal.marker.color } : {}"
                                    ></div>
                                    <div
                                        class="dp__marker_tooltip"
                                        v-if="dateMatch(dayVal.value)"
                                        :style="markerTooltipStyle"
                                    >
                                        <div class="dp__tooltip_content" @click.stop>
                                            <div
                                                v-for="(tooltip, i) in dayVal.marker.tooltip"
                                                :key="i"
                                                class="dp__tooltip_text"
                                            >
                                                <slot
                                                    name="marker-tooltip"
                                                    v-if="$slots['marker-tooltip']"
                                                    :tooltop="tooltip"
                                                    :day="dayVal.value"
                                                ></slot>
                                                <template v-if="!$slots['marker-tooltip']">
                                                    <div
                                                        class="dp__tooltip_mark"
                                                        :style="tooltip.color ? { backgroundColor: tooltip.color } : {}"
                                                    ></div>
                                                    <div>{{ tooltip.text }}</div>
                                                </template>
                                            </div>
                                            <div class="dp__arrow_bottom_tp"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import {
        computed,
        ComputedRef,
        DefineComponent,
        inject,
        nextTick,
        onMounted,
        PropType,
        ref,
        toRef,
        UnwrapRef,
        watch,
    } from 'vue';

    import { DynamicClass, ICalendarDate, ICalendarDay, IMarker, ITransition } from '../interfaces';
    import { getDayNames, getDefaultMarker, unrefElement } from '../utils/util';
    import { isDateAfter, isDateEqual, setDateMonthOrYear } from '../utils/date-utils';
    import { MonthCalendarSharedProps } from '../utils/props';

    const emit = defineEmits(['selectDate', 'setHoverDate', 'handleScroll', 'mount']);

    const props = defineProps({
        ...MonthCalendarSharedProps,
        locale: { type: String as PropType<string>, default: 'en-Us' },
        weekNumName: { type: String as PropType<string>, default: 'W' },
        weekStart: { type: [Number, String] as PropType<number | string>, default: 1 },
        weekNumbers: { type: Boolean as PropType<boolean>, default: false },
        mappedDates: { type: Array as PropType<ICalendarDate[]>, default: () => [] },
        monthYearComponent: { type: Object as PropType<DefineComponent>, default: null },
        calendarClassName: { type: String as PropType<string>, default: null },
        timePicker: { type: Boolean as PropType<boolean>, default: false },
        disableMonthYearSelect: { type: Boolean as PropType<boolean>, default: false },
        getWeekNum: {
            type: Function as PropType<(dates: UnwrapRef<ICalendarDay[]>) => string | number>,
            default: () => '',
        },
        modeHeight: { type: [Number, String] as PropType<number | string>, default: 255 },
    });

    const showMakerTooltip = ref<Date | null>(null);
    const markerTooltipStyle = ref({ bottom: '', left: '', transform: '' });
    const dayRefs = ref([]);
    const showCalendar = ref(true);
    const transitions = inject<ComputedRef<ITransition>>('transitions');
    const transitionName = ref('');
    const monthProp = toRef(props, 'month');
    const yearProp = toRef(props, 'year');
    const prevDate = ref();
    const startTransitions = ref(false);

    const weekDays = computed(() => {
        return getDayNames(props.locale, +props.weekStart);
    });

    onMounted(() => {
        if (!props.internalModelValue) {
            startTransitions.value = true;
        }
        prevDate.value = setDateMonthOrYear(new Date(), props.month, props.year);
        emit('mount');
    });

    const specificMode = computed(() => props.monthPicker || props.timePicker);

    watch([monthProp, yearProp], () => {
        if (transitions?.value) {
            const newDate = setDateMonthOrYear(new Date(), props.month, props.year);
            transitionName.value = isDateAfter(setDateMonthOrYear(new Date(), props.month, props.year), prevDate.value)
                ? transitions.value.next
                : transitions.value.previous;
            prevDate.value = newDate;
            if (startTransitions.value) {
                showCalendar.value = false;
                nextTick(() => {
                    showCalendar.value = true;
                });
            }
        }
        if (!startTransitions.value) {
            startTransitions.value = true;
        }
    });

    // Class object for calendar wrapper
    const calendarWrapClass = computed(
        (): DynamicClass => ({
            dp__calendar_wrap: true,
            [props.calendarClassName]: !!props.calendarClassName,
        }),
    );

    const markerClass = computed((): ((marker: IMarker) => DynamicClass) => (marker) => {
        const defaultMarker = getDefaultMarker(marker);
        return {
            dp__marker_dot: defaultMarker.type === 'dot',
            dp__marker_line: defaultMarker.type === 'line',
        };
    });

    const dateMatch = computed((): ((day: Date) => boolean) => (day) => isDateEqual(day, showMakerTooltip.value));

    const calendarParentClass = computed(() => ({
        dp__calendar: true,
        dp__calendar_next: props.multiCalendars > 0 && props.instance !== 0,
    }));

    const contentWrapStyle = computed(() => (specificMode.value ? { height: `${props.modeHeight}px` } : null));

    const onMouseOver = (day: UnwrapRef<ICalendarDay>, refIndex: number): void => {
        emit('setHoverDate', day);
        if (day.marker?.tooltip?.length) {
            const el = unrefElement(dayRefs.value[refIndex]);
            if (el) {
                const { width, height } = el.getBoundingClientRect();

                markerTooltipStyle.value = {
                    bottom: `${height}px`,
                    left: `${width / 2}px`,
                    transform: `translateX(-50%)`,
                };
                showMakerTooltip.value = day.value;
            }
        }
    };

    const onMouseLeave = (): void => {
        showMakerTooltip.value = null;
    };
</script>
