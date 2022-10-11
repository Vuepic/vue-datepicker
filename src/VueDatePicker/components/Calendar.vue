<template>
    <div :class="calendarParentClass">
        <div :style="contentWrapStyle">
            <div
                ref="calendarWrapRef"
                v-if="!specificMode"
                :class="calendarWrapClass"
                role="grid"
                :aria-label="ariaLabels.calendarWrap"
            >
                <div class="dp__calendar_header" role="row">
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
                    <div class="dp__calendar" role="grid" :aria-label="ariaLabels.calendarDays" v-if="showCalendar">
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
                                :ref="(el) => assignDayRef(el, weekInd, dayInd)"
                                :key="dayInd + weekInd"
                                :aria-selected="
                                    dayVal.classData.dp__active_date ||
                                    dayVal.classData.dp__range_start ||
                                    dayVal.classData.dp__range_start
                                "
                                :aria-disabled="dayVal.classData.dp__cell_disabled"
                                :aria-label="ariaLabels.day?.(dayVal)"
                                tabindex="0"
                                @click.stop.prevent="$emit('selectDate', dayVal)"
                                @keydown.enter="$emit('selectDate', dayVal)"
                                @keydown.space="$emit('handleSpace', dayVal)"
                                @mouseover="onMouseOver(dayVal, weekInd, dayInd)"
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
                                                    <div v-if="tooltip.html" v-html="tooltip.html"></div>
                                                    <div v-else>{{ tooltip.text }}</div>
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
    import { computed, inject, nextTick, onMounted, ref } from 'vue';
    import type { PropType, UnwrapRef, ComputedRef, Ref } from 'vue';

    import type { DynamicClass, ICalendarDate, ICalendarDay, IMarker, ITransition, AreaLabels } from '@/interfaces';

    import { getDayNames, getDefaultMarker, unrefElement } from '@/utils/util';
    import { isDateAfter, isDateEqual, resetDateTime, setDateMonthOrYear } from '@/utils/date-utils';
    import {
        ariaLabelsKey,
        arrowNavigationKey,
        CalendarProps,
        MonthCalendarSharedProps,
        transitionsKey,
    } from '@/utils/props';
    import { useArrowNavigation } from '@/components/composition/arrow-navigate';

    const emit = defineEmits(['selectDate', 'setHoverDate', 'handleScroll', 'mount', 'handleSwipe', 'handleSpace']);

    const props = defineProps({
        ...MonthCalendarSharedProps,
        ...CalendarProps,
        mappedDates: { type: Array as PropType<ICalendarDate[]>, default: () => [] },
        getWeekNum: {
            type: Function as PropType<(dates: UnwrapRef<ICalendarDay[]>) => string | number>,
            default: () => '',
        },
        modeHeight: { type: [Number, String] as PropType<number | string>, default: 255 },
        specificMode: { type: Boolean as PropType<boolean>, default: false },
    });

    const showMakerTooltip = ref<Date | null>(null);
    const markerTooltipStyle = ref({ bottom: '', left: '', transform: '' });
    const dayRefs = ref<HTMLElement[][]>([]);
    const calendarWrapRef = ref<HTMLElement | null>(null);
    const showCalendar = ref(true);
    const transitions = inject<ComputedRef<ITransition>>(transitionsKey);
    const ariaLabels = inject<ComputedRef<AreaLabels>>(ariaLabelsKey);
    const arrowNavigation = inject<Ref<boolean>>(arrowNavigationKey);
    const transitionName = ref('');
    const touch = ref({ startX: 0, endX: 0, startY: 0, endY: 0 });

    const weekDays = computed(() => {
        return props.dayNames
            ? Array.isArray(props.dayNames)
                ? props.dayNames
                : props.dayNames(props.locale, +props.weekStart)
            : getDayNames(props.locale, +props.weekStart);
    });

    const { buildMultiLevelMatrix } = useArrowNavigation();

    onMounted(() => {
        emit('mount', { cmp: 'calendar', refs: dayRefs });
        if (!props.noSwipe) {
            if (calendarWrapRef.value) {
                calendarWrapRef.value.addEventListener('touchstart', onTouchStart, { passive: false });
                calendarWrapRef.value.addEventListener('touchend', onTouchEnd, { passive: false });
                calendarWrapRef.value.addEventListener('touchmove', onTouchMove, { passive: false });
            }
        }
        if (props.monthChangeOnScroll && calendarWrapRef.value) {
            calendarWrapRef.value.addEventListener('wheel', onScroll, { passive: false });
        }
    });

    const triggerTransition = (month: number, year: number): void => {
        if (transitions?.value) {
            const newDate = resetDateTime(setDateMonthOrYear(new Date(), props.month, props.year));
            transitionName.value = isDateAfter(resetDateTime(setDateMonthOrYear(new Date(), month, year)), newDate)
                ? transitions.value[props.vertical ? 'vNext' : 'next']
                : transitions.value[props.vertical ? 'vPrevious' : 'previous'];
            showCalendar.value = false;
            nextTick(() => {
                showCalendar.value = true;
            });
        }
    };

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

    const contentWrapStyle = computed(() => (props.specificMode ? { height: `${props.modeHeight}px` } : null));

    const onMouseOver = (day: UnwrapRef<ICalendarDay>, weekInd: number, dayInd: number): void => {
        emit('setHoverDate', day);
        if (day.marker?.tooltip?.length) {
            const el = unrefElement(dayRefs.value[weekInd][dayInd]);
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

    const onTouchStart = (ev: TouchEvent): void => {
        touch.value.startX = ev.changedTouches[0].screenX;
        touch.value.startY = ev.changedTouches[0].screenY;
    };

    const onTouchEnd = (ev: TouchEvent): void => {
        touch.value.endX = ev.changedTouches[0].screenX;
        touch.value.endY = ev.changedTouches[0].screenY;
        handleTouch();
    };

    const onTouchMove = (ev: TouchEvent): void => {
        ev.preventDefault();
    };

    const handleTouch = () => {
        const property = props.vertical ? 'Y' : 'X';
        if (Math.abs(touch.value[`start${property}`] - touch.value[`end${property}`]) > 10) {
            emit('handleSwipe', touch.value[`start${property}`] > touch.value[`end${property}`] ? 'right' : 'left');
        }
    };

    const assignDayRef = (el: HTMLElement, weekInd: number, dayInd: number) => {
        if (el) {
            if (Array.isArray(dayRefs.value[weekInd])) {
                dayRefs.value[weekInd][dayInd] = el;
            } else {
                dayRefs.value[weekInd] = [el];
            }
        }
        if (arrowNavigation?.value) {
            buildMultiLevelMatrix(dayRefs.value, 'calendar');
        }
    };

    const onScroll = (ev: WheelEvent) => {
        if (props.monthChangeOnScroll) {
            ev.preventDefault();
            emit('handleScroll', ev);
        }
    };

    defineExpose({ triggerTransition });
</script>
