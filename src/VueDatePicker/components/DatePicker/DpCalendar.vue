<template>
    <div :class="calendarParentClass">
        <div ref="calendar-wrap" :class="calendarWrapClass" role="grid">
            <div class="dp__calendar_header" role="row">
                <div v-if="rootProps.weekNumbers" class="dp__calendar_header_item" role="gridcell">
                    {{ rootProps.weekNumName }}
                </div>
                <div
                    v-for="(dayVal, i) in weekDays"
                    :key="i"
                    class="dp__calendar_header_item"
                    role="gridcell"
                    data-test-id="calendar-header"
                    :aria-label="ariaLabels?.weekDay?.(i)"
                >
                    <slot v-if="$slots['calendar-header']" name="calendar-header" :day="dayVal" :index="i" />
                    <template v-if="!$slots['calendar-header']">
                        {{ dayVal }}
                    </template>
                </div>
            </div>
            <div class="dp__calendar_header_separator"></div>
            <transition :name="transitionName" :css="!!transitions">
                <div v-if="showCalendar" class="dp__calendar" role="rowgroup" @mouseleave="isMouseDown = false">
                    <div v-for="(week, weekInd) in calendarWeeks" :key="weekInd" class="dp__calendar_row" role="row">
                        <div v-if="rootProps.weekNumbers" class="dp__calendar_item dp__week_num" role="gridcell">
                            <div class="dp__cell_inner">
                                {{ getWeekNum(week.days) }}
                            </div>
                        </div>
                        <div
                            v-for="(dayVal, dayInd) in week.days"
                            :id="getCellId(dayVal.value)"
                            :ref="(el) => assignDayRef(el, weekInd, dayInd)"
                            :key="dayInd + weekInd"
                            role="gridcell"
                            class="dp__calendar_item"
                            :aria-selected="
                                (dayVal.classData.dp__active_date ||
                                    dayVal.classData.dp__range_start ||
                                    dayVal.classData.dp__range_start) ??
                                undefined
                            "
                            :aria-disabled="dayVal.classData.dp__cell_disabled || undefined"
                            :aria-label="ariaLabels?.day?.(dayVal)"
                            :tabindex="!dayVal.current && rootProps.hideOffsetDates ? undefined : 0"
                            :data-test-id="getCellId(dayVal.value)"
                            @click.prevent="onDateSelect($event, dayVal)"
                            @touchend="onDateSelect($event, dayVal, false)"
                            @keydown="checkKeyDown($event, () => $emit('select-date', dayVal))"
                            @mouseenter="onMouseOver(dayVal, weekInd, dayInd)"
                            @mouseleave="onMouseLeave(dayVal)"
                            @mousedown="onMouseDown(dayVal)"
                            @mouseup="isMouseDown = false"
                        >
                            <div class="dp__cell_inner" :class="dayVal.classData">
                                <slot
                                    v-if="$slots.day && showDay(dayVal)"
                                    name="day"
                                    :day="+dayVal.text"
                                    :date="dayVal.value"
                                ></slot>
                                <template v-if="!$slots.day"> {{ dayVal.text }} </template>
                                <template v-if="dayVal.marker && showDay(dayVal)">
                                    <slot
                                        v-if="$slots.marker"
                                        name="marker"
                                        :marker="dayVal.marker"
                                        :day="+dayVal.text"
                                        :date="dayVal.value"
                                    ></slot>
                                    <div
                                        v-else
                                        :class="markerClass(dayVal.marker)"
                                        :style="dayVal.marker.color ? { backgroundColor: dayVal.marker.color } : {}"
                                    ></div>
                                </template>
                                <div
                                    v-if="dateMatch(dayVal.value)"
                                    ref="active-tooltip"
                                    class="dp__marker_tooltip"
                                    :style="markerTooltipStyle"
                                >
                                    <div v-if="dayVal.marker?.tooltip" class="dp__tooltip_content" @click="onTpClick">
                                        <div
                                            v-for="(tooltip, i) in dayVal.marker.tooltip"
                                            :key="i"
                                            class="dp__tooltip_text"
                                        >
                                            <slot
                                                v-if="$slots['marker-tooltip']"
                                                name="marker-tooltip"
                                                :tooltip="tooltip"
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
                                        <div class="dp__arrow_bottom_tp" :style="tpArrowStyle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, nextTick, onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
    import { unrefElement } from '@vueuse/core';
    import { getISOWeek, getWeek, set, type Day } from 'date-fns';

    import { useArrowNavigation, useUtils, useDateUtils, useContext, useFormatter } from '@/composables';

    import type { UnwrapRef } from 'vue';
    import type { CalendarDay, CalendarWeek, DynamicClass, Marker } from '@/types';

    interface DPCalendarEmits {
        mount: [component: { cmp: string; dayRefs: HTMLElement[][] }];
        'select-date': [day: CalendarDay];
        'set-hover-date': [day: CalendarDay];
        'handle-scroll': [event: WheelEvent];
        'handle-swipe': [direction: 'left' | 'right'];
    }

    interface DpCalendarProps {
        instance: number;
        mappedDates: CalendarWeek[];
        month: number;
        year: number;
    }

    const emit = defineEmits<DPCalendarEmits>();

    const props = defineProps<DpCalendarProps>();

    const {
        rootEmit,
        rootProps,
        defaults: { transitions, config, ariaLabels, multiCalendars, weekNumbers, multiDates, ui },
    } = useContext();
    const { buildMultiLevelMatrix } = useArrowNavigation();
    const { getDate, isDateAfter, isDateEqual, resetDateTime, getCellId } = useDateUtils();
    const { checkKeyDown, checkStopPropagation, isTouchDevice } = useUtils();
    const { formatWeekDay } = useFormatter();

    const calendarWrapRef = useTemplateRef('calendar-wrap');
    const activeTooltip = useTemplateRef('active-tooltip');
    const dayRefs = ref<HTMLElement[][]>([]);

    const showMakerTooltip = ref<Date | null>(null);
    const showCalendar = ref(true);
    const isMouseDown = ref(false);
    const transitionName = ref('');
    const markerTooltipStyle = ref<Record<string, string>>({
        bottom: '',
        left: '',
        transform: '',
    });
    const touch = ref({ startX: 0, endX: 0, startY: 0, endY: 0 });
    const tpArrowStyle = ref<{ left?: string; right?: string }>({ left: '50%' });

    const calendarWeeks = computed(() => {
        if (rootProps.calendar) return rootProps.calendar(props.mappedDates);
        return props.mappedDates;
    });

    const weekDays = computed(() => {
        if (rootProps.dayNames) {
            return Array.isArray(rootProps.dayNames) ? rootProps.dayNames : rootProps.dayNames();
        }
        return getDayNames();
    });

    onMounted(() => {
        emit('mount', { cmp: 'calendar', dayRefs: dayRefs.value });
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

    onUnmounted(() => {
        if (!config.value.noSwipe) {
            if (calendarWrapRef.value) {
                calendarWrapRef.value.removeEventListener('touchstart', onTouchStart);
                calendarWrapRef.value.removeEventListener('touchend', onTouchEnd);
                calendarWrapRef.value.removeEventListener('touchmove', onTouchMove);
            }
        }
        if (config.value.monthChangeOnScroll && calendarWrapRef.value) {
            calendarWrapRef.value.removeEventListener('wheel', onScroll);
        }
    });

    const getTransitionName = (isNext: boolean) => {
        if (isNext) return rootProps.vertical ? 'vNext' : 'next';
        return rootProps.vertical ? 'vPrevious' : 'previous';
    };

    const triggerTransition = (month: number, year: number): void => {
        if (rootProps.transitions) {
            const newDate = resetDateTime(set(getDate(), { month: props.month, year: props.year }));
            transitionName.value = isDateAfter(resetDateTime(set(getDate(), { month, year })), newDate)
                ? transitions.value[getTransitionName(true)]
                : transitions.value[getTransitionName(false)];
            showCalendar.value = false;
            nextTick(() => {
                showCalendar.value = true;
            });
        }
    };

    // Class object for calendar wrapper
    const calendarWrapClass = computed(
        (): DynamicClass => ({
            ...(ui.value.calendar ?? {}),
        }),
    );

    const getDefaultMarker = (marker: Marker): Marker => ({ type: 'dot', ...(marker ?? {}) });

    const markerClass = computed((): ((marker: Marker) => DynamicClass) => (marker) => {
        const defaultMarker = getDefaultMarker(marker);
        return {
            dp__marker_dot: defaultMarker.type === 'dot',
            dp__marker_line: defaultMarker.type === 'line',
        };
    });

    const dateMatch = computed((): ((day: Date) => boolean) => (day) => isDateEqual(day, showMakerTooltip.value));

    const calendarParentClass = computed(() => ({
        dp__calendar: true,
        dp__calendar_next: multiCalendars.value.count > 0 && props.instance !== 0,
    }));

    const showDay = computed(() => (day: CalendarDay) => (rootProps.hideOffsetDates ? day.current : true));

    const positionTooltip = async (el: HTMLElement, day: CalendarDay) => {
        const { width, height } = el.getBoundingClientRect();
        showMakerTooltip.value = day.value;
        let defaultPosition: { left?: string; right?: string } = { left: `${width / 2}px` };
        let transform = -50;
        await nextTick();

        if (activeTooltip.value?.[0]) {
            const { left, width: tpWidth } = activeTooltip.value[0].getBoundingClientRect();
            if (left < 0) {
                defaultPosition = { left: `0` };
                transform = 0;
                tpArrowStyle.value.left = `${width / 2}px`;
            }

            if (window.innerWidth < left + tpWidth) {
                defaultPosition = { right: `0` };
                transform = 0;
                tpArrowStyle.value.left = `${tpWidth - width / 2}px`;
            }
        }

        markerTooltipStyle.value = {
            bottom: `${height}px`,
            ...defaultPosition,
            transform: `translateX(${transform}%)`,
        };
    };

    const handleTooltip = async (day: UnwrapRef<CalendarDay>, weekInd: number, dayInd: number) => {
        const el = unrefElement(dayRefs.value?.[weekInd]?.[dayInd]);
        if (el) {
            if (day.marker?.customPosition && day.marker?.tooltip?.length) {
                markerTooltipStyle.value = day.marker.customPosition(el);
            } else {
                await positionTooltip(el, day);
            }

            rootEmit('tooltip-open', day.marker!);
        }
    };

    const onMouseOver = async (day: UnwrapRef<CalendarDay>, weekInd: number, dayInd: number): Promise<void> => {
        if (isMouseDown.value && multiDates.value.enabled && multiDates.value.dragSelect) {
            return emit('select-date', day);
        }
        emit('set-hover-date', day);
        if (day.marker?.tooltip?.length) {
            if (rootProps.hideOffsetDates && !day.current) return;
            await handleTooltip(day, weekInd, dayInd);
        }
    };

    const onMouseLeave = (day: UnwrapRef<CalendarDay>): void => {
        if (showMakerTooltip.value) {
            showMakerTooltip.value = null;
            markerTooltipStyle.value = JSON.parse(JSON.stringify({ bottom: '', left: '', transform: '' }));
            rootEmit('tooltip-close', day.marker!);
        }
    };

    const onTouchStart = (ev: TouchEvent): void => {
        touch.value.startX = ev.changedTouches[0]!.screenX;
        touch.value.startY = ev.changedTouches[0]!.screenY;
    };

    const onTouchEnd = (ev: TouchEvent): void => {
        touch.value.endX = ev.changedTouches[0]!.screenX;
        touch.value.endY = ev.changedTouches[0]!.screenY;
        handleTouch();
    };

    const onTouchMove = (ev: TouchEvent): void => {
        if (rootProps.vertical && !rootProps.inline) {
            ev.preventDefault();
        }
    };

    const handleTouch = () => {
        const property = rootProps.vertical ? 'Y' : 'X';
        if (Math.abs(touch.value[`start${property}`] - touch.value[`end${property}`]) > 10) {
            emit('handle-swipe', touch.value[`start${property}`] > touch.value[`end${property}`] ? 'right' : 'left');
        }
    };

    const assignDayRef = (el: any, weekInd: number, dayInd: number) => {
        if (el) {
            if (Array.isArray(dayRefs.value[weekInd])) {
                dayRefs.value[weekInd][dayInd] = el;
            } else {
                dayRefs.value[weekInd] = [el];
            }
        }
        if (rootProps.arrowNavigation) {
            buildMultiLevelMatrix(dayRefs.value, 'calendar');
        }
    };

    const onScroll = (ev: WheelEvent) => {
        if (config.value.monthChangeOnScroll) {
            ev.preventDefault();
            emit('handle-scroll', ev);
        }
    };

    const getWeekNumber = (firstCurrentDate: CalendarDay) => {
        if (weekNumbers.value.type === 'local')
            return getWeek(firstCurrentDate.value, { weekStartsOn: +rootProps.weekStart as Day });
        if (weekNumbers.value.type === 'iso') return getISOWeek(firstCurrentDate.value);
        if (typeof weekNumbers.value.type === 'function') return weekNumbers.value.type(firstCurrentDate.value);
        return '';
    };

    // Get week number if enabled
    const getWeekNum = (days: UnwrapRef<CalendarDay[]>): string | number => {
        const firstCurrentDate = days[0];
        if (weekNumbers.value.hideOnOffsetDates) {
            return days.some((day) => day.current) ? getWeekNumber(firstCurrentDate!) : '';
        }
        return getWeekNumber(firstCurrentDate!);
    };

    const onDateSelect = (ev: Event, dayVal: CalendarDay, isClick = true) => {
        if (!isClick && isTouchDevice()) return;
        if (!multiDates.value.enabled || config.value.allowPreventDefault) {
            checkStopPropagation(ev, config.value);
            emit('select-date', dayVal);
        }
    };

    const onTpClick = (ev: Event) => {
        checkStopPropagation(ev, config.value);
    };

    const onMouseDown = (day: UnwrapRef<CalendarDay>) => {
        if (multiDates.value.enabled && multiDates.value.dragSelect) {
            isMouseDown.value = true;
            emit('select-date', day);
        } else if (multiDates.value.enabled) {
            emit('select-date', day);
        }
    };

    const getDayNames = (): string[] => {
        const daysArray = [1, 2, 3, 4, 5, 6, 7];

        const days = daysArray.map((day) => formatWeekDay(day));

        const beforeWeekStart = days.slice(0, +rootProps.weekStart);
        const afterWeekStart = days.slice(+rootProps.weekStart + 1, days.length);

        return [days[+rootProps.weekStart]!].concat(...afterWeekStart).concat(...beforeWeekStart);
    };

    defineExpose({ triggerTransition });
</script>
