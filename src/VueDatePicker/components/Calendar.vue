<template>
    <div :class="calendarParentClass">
        <div :style="contentWrapStyle">
            <div
                ref="calendarWrapRef"
                v-if="!specificMode"
                :class="calendarWrapClass"
                role="grid"
                :aria-label="config.ariaLabels?.calendarWrap"
            >
                <div class="dp__calendar_header" role="row">
                    <div class="dp__calendar_header_item" role="gridcell" v-if="config.weekNumbers">
                        {{ config.weekNumName }}
                    </div>
                    <div class="dp__calendar_header_item" role="gridcell" v-for="(dayVal, i) in weekDays" :key="i">
                        <slot v-if="$slots['calendar-header']" name="calendar-header" :day="dayVal" :index="i" />
                        <template v-if="!$slots['calendar-header']">
                            {{ dayVal }}
                        </template>
                    </div>
                </div>
                <div class="dp__calendar_header_separator"></div>
                <transition :name="transitionName" :css="!!config.transitions">
                    <div
                        class="dp__calendar"
                        role="grid"
                        :aria-label="config.ariaLabels?.calendarDays"
                        v-if="showCalendar"
                    >
                        <div class="dp__calendar_row" role="row" v-for="(week, weekInd) in mappedDates" :key="weekInd">
                            <div role="gridcell" v-if="config.weekNumbers" class="dp__calendar_item dp__week_num">
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
                                :aria-label="config.ariaLabels?.day?.(dayVal)"
                                tabindex="0"
                                @click.stop.prevent="$emit('select-date', dayVal)"
                                @keydown.enter="$emit('select-date', dayVal)"
                                @keydown.space="$emit('handle-space', dayVal)"
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
    import { computed, nextTick, onMounted, ref } from 'vue';

    import { getDayNames, getDefaultMarker, unrefElement } from '@/utils/util';
    import { isDateAfter, isDateEqual, resetDateTime, setDateMonthOrYear } from '@/utils/date-utils';
    import { useArrowNavigation, useState, useUtils } from '@/components/composables';

    import type { PropType, UnwrapRef } from 'vue';
    import type { DynamicClass, ICalendarDate, ICalendarDay, IMarker, ITransition } from '@/interfaces';

    const { config } = useState();
    const { buildMultiLevelMatrix } = useArrowNavigation();
    const { getDate } = useUtils();

    const emit = defineEmits([
        'select-date',
        'set-hover-date',
        'handle-scroll',
        'mount',
        'handle-swipe',
        'handle-space',
    ]);

    const props = defineProps({
        mappedDates: { type: Array as PropType<ICalendarDate[]>, default: () => [] },
        getWeekNum: {
            type: Function as PropType<(dates: UnwrapRef<ICalendarDay[]>) => string | number>,
            default: () => '',
        },
        specificMode: { type: Boolean as PropType<boolean>, default: false },
        instance: { type: Number as PropType<number>, default: 0 },
        month: { type: Number as PropType<number>, default: 0 },
        year: { type: Number as PropType<number>, default: 0 },
    });

    const showMakerTooltip = ref<Date | null>(null);
    const markerTooltipStyle = ref({ bottom: '', left: '', transform: '' });
    const dayRefs = ref<HTMLElement[][]>([]);
    const calendarWrapRef = ref<HTMLElement | null>(null);
    const showCalendar = ref(true);
    const transitionName = ref('');
    const touch = ref({ startX: 0, endX: 0, startY: 0, endY: 0 });

    const weekDays = computed(() => {
        if (config.value.dayNames) {
            return Array.isArray(config.value.dayNames)
                ? config.value.dayNames
                : config.value.dayNames(config.value.locale, +config.value.weekStart);
        }
        return getDayNames(config.value.locale, +config.value.weekStart);
    });

    onMounted(() => {
        emit('mount', { cmp: 'calendar', refs: dayRefs });
        if (!config.value.noSwipe) {
            if (calendarWrapRef.value) {
                calendarWrapRef.value.addEventListener('touchstart', onTouchStart, { passive: false });
                calendarWrapRef.value.addEventListener('touchend', onTouchEnd, { passive: false });
                calendarWrapRef.value.addEventListener('touchmove', onTouchMove, { passive: false });
            }
        }
        if (config.value.monthChangeOnScroll && calendarWrapRef.value) {
            calendarWrapRef.value.addEventListener('wheel', onScroll, { passive: false });
        }
    });

    const getTransitionName = (isNext: boolean) => {
        if (isNext) return config.value.vertical ? 'vNext' : 'next';
        return config.value.vertical ? 'vPrevious' : 'previous';
    };

    const triggerTransition = (month: number, year: number): void => {
        if (config.value.transitions) {
            const newDate = resetDateTime(setDateMonthOrYear(getDate(), props.month, props.year));
            transitionName.value = isDateAfter(resetDateTime(setDateMonthOrYear(getDate(), month, year)), newDate)
                ? (config.value.transitions as ITransition)[getTransitionName(true)]
                : (config.value.transitions as ITransition)[getTransitionName(false)];
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
            [config.value.calendarClassName]: !!config.value.calendarClassName,
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
        dp__calendar_next: config.value.multiCalendars > 0 && props.instance !== 0,
    }));

    const contentWrapStyle = computed(() => (props.specificMode ? { height: `${config.value.modeHeight}px` } : null));

    const onMouseOver = (day: UnwrapRef<ICalendarDay>, weekInd: number, dayInd: number): void => {
        emit('set-hover-date', day);
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
        const property = config.value.vertical ? 'Y' : 'X';
        if (Math.abs(touch.value[`start${property}`] - touch.value[`end${property}`]) > 10) {
            emit('handle-swipe', touch.value[`start${property}`] > touch.value[`end${property}`] ? 'right' : 'left');
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
        if (config.value.arrowNavigation) {
            buildMultiLevelMatrix(dayRefs.value, 'calendar');
        }
    };

    const onScroll = (ev: WheelEvent) => {
        if (config.value.monthChangeOnScroll) {
            ev.preventDefault();
            emit('handle-scroll', ev);
        }
    };

    defineExpose({ triggerTransition });
</script>
