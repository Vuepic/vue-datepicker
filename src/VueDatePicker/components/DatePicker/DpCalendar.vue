<template>
    <div :class="calendarParentClass">
        <div ref="calendarWrapRef" :class="calendarWrapClass" role="grid">
            <div class="dp__calendar_header" role="row">
                <div v-if="weekNumbers" class="dp__calendar_header_item" role="gridcell">
                    {{ weekNumName }}
                </div>
                <div
                    v-for="(dayVal, i) in weekDays"
                    :key="i"
                    class="dp__calendar_header_item"
                    role="gridcell"
                    data-test-id="calendar-header"
                    :aria-label="defaultedAriaLabels?.weekDay?.(i)"
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
                        <div v-if="weekNumbers" class="dp__calendar_item dp__week_num" role="gridcell">
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
                            :aria-label="defaultedAriaLabels?.day?.(dayVal)"
                            :tabindex="!dayVal.current && hideOffsetDates ? undefined : 0"
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
                                    ref="activeTooltip"
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
    import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue';
    import { getISOWeek, getWeek } from 'date-fns';

    import {
        checkKeyDown,
        checkStopPropagation,
        getDayNames,
        getDefaultMarker,
        isTouchDevice,
        unrefElement,
    } from '@/utils/util';
    import { useArrowNavigation, useDefaults } from '@/composables';
    import { PickerBaseProps } from '@/props';
    import {
        getCellId,
        getDate,
        isDateAfter,
        isDateEqual,
        resetDateTime,
        setDateMonthOrYear,
    } from '@/utils/date-utils';

    import type { PropType, UnwrapRef } from 'vue';
    import type { DynamicClass, ICalendarDate, ICalendarDay, IMarker, WeekStartNum } from '@/interfaces';

    defineOptions({
        compatConfig: {
            MODE: 3,
        },
    });

    const emit = defineEmits([
        'select-date',
        'set-hover-date',
        'handle-scroll',
        'mount',
        'handle-swipe',
        'handle-space',
        'tooltip-open',
        'tooltip-close',
    ]);

    const props = defineProps({
        mappedDates: { type: Array as PropType<ICalendarDate[]>, default: () => [] },
        instance: { type: Number as PropType<number>, default: 0 },
        month: { type: Number as PropType<number>, default: 0 },
        year: { type: Number as PropType<number>, default: 0 },
        ...PickerBaseProps,
    });

    const { buildMultiLevelMatrix } = useArrowNavigation();
    const {
        defaultedTransitions,
        defaultedConfig,
        defaultedAriaLabels,
        defaultedMultiCalendars,
        defaultedWeekNumbers,
        defaultedMultiDates,
        defaultedUI,
    } = useDefaults(props);

    const showMakerTooltip = ref<Date | null>(null);
    const markerTooltipStyle = ref<Record<string, string>>({
        bottom: '',
        left: '',
        transform: '',
    });
    const dayRefs = ref<HTMLElement[][]>([]);
    const calendarWrapRef = ref<HTMLElement | null>(null);
    const showCalendar = ref(true);
    const transitionName = ref('');
    const touch = ref({ startX: 0, endX: 0, startY: 0, endY: 0 });
    const activeTooltip = ref<HTMLElement[]>([]);
    const tpArrowStyle = ref<{ left?: string; right?: string }>({ left: '50%' });
    const isMouseDown = ref(false);

    const calendarWeeks = computed(() => {
        if (props.calendar) return props.calendar(props.mappedDates);
        return props.mappedDates;
    });

    const weekDays = computed(() => {
        if (props.dayNames) {
            return Array.isArray(props.dayNames) ? props.dayNames : props.dayNames(props.locale, +props.weekStart);
        }
        return getDayNames(props.formatLocale, props.locale, +props.weekStart);
    });

    onMounted(() => {
        emit('mount', { cmp: 'calendar', refs: dayRefs });
        if (!defaultedConfig.value.noSwipe) {
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

    onUnmounted(() => {
        if (!defaultedConfig.value.noSwipe) {
            if (calendarWrapRef.value) {
                calendarWrapRef.value.removeEventListener('touchstart', onTouchStart);
                calendarWrapRef.value.removeEventListener('touchend', onTouchEnd);
                calendarWrapRef.value.removeEventListener('touchmove', onTouchMove);
            }
        }
        if (props.monthChangeOnScroll && calendarWrapRef.value) {
            calendarWrapRef.value.removeEventListener('wheel', onScroll);
        }
    });

    const getTransitionName = (isNext: boolean) => {
        if (isNext) return props.vertical ? 'vNext' : 'next';
        return props.vertical ? 'vPrevious' : 'previous';
    };

    const triggerTransition = (month: number, year: number): void => {
        if (props.transitions) {
            const newDate = resetDateTime(setDateMonthOrYear(getDate(), props.month, props.year));
            transitionName.value = isDateAfter(resetDateTime(setDateMonthOrYear(getDate(), month, year)), newDate)
                ? defaultedTransitions.value[getTransitionName(true)]
                : defaultedTransitions.value[getTransitionName(false)];
            showCalendar.value = false;
            nextTick(() => {
                showCalendar.value = true;
            });
        }
    };

    // Class object for calendar wrapper
    const calendarWrapClass = computed(
        (): DynamicClass => ({
            ...(defaultedUI.value.calendar ?? {}),
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
        dp__calendar_next: defaultedMultiCalendars.value.count > 0 && props.instance !== 0,
    }));

    const showDay = computed(() => (day: ICalendarDay) => (props.hideOffsetDates ? day.current : true));

    const positionTooltip = async (el: HTMLElement, day: ICalendarDay) => {
        const { width, height } = el.getBoundingClientRect();
        showMakerTooltip.value = day.value;
        let defaultPosition: { left?: string; right?: string } = { left: `${width / 2}px` };
        let transform = -50;
        await nextTick();

        if (activeTooltip.value[0]) {
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

    const handleTooltip = async (day: UnwrapRef<ICalendarDay>, weekInd: number, dayInd: number) => {
        const el = unrefElement(dayRefs.value[weekInd][dayInd]);
        if (el) {
            if (day.marker?.customPosition && day.marker?.tooltip?.length) {
                markerTooltipStyle.value = day.marker.customPosition(el);
            } else {
                await positionTooltip(el, day);
            }

            emit('tooltip-open', day.marker);
        }
    };

    const onMouseOver = async (day: UnwrapRef<ICalendarDay>, weekInd: number, dayInd: number): Promise<void> => {
        if (isMouseDown.value && defaultedMultiDates.value.enabled && defaultedMultiDates.value.dragSelect) {
            return emit('select-date', day);
        }
        emit('set-hover-date', day);
        if (day.marker?.tooltip?.length) {
            if (props.hideOffsetDates && !day.current) return;
            await handleTooltip(day, weekInd, dayInd);
        }
    };

    const onMouseLeave = (day: UnwrapRef<ICalendarDay>): void => {
        if (showMakerTooltip.value) {
            showMakerTooltip.value = null;
            markerTooltipStyle.value = JSON.parse(JSON.stringify({ bottom: '', left: '', transform: '' }));
            emit('tooltip-close', day.marker);
        }
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
        if (props.vertical && !props.inline) {
            ev.preventDefault();
        }
    };

    const handleTouch = () => {
        const property = props.vertical ? 'Y' : 'X';
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
        if (props.arrowNavigation) {
            buildMultiLevelMatrix(dayRefs.value, 'calendar');
        }
    };

    const onScroll = (ev: WheelEvent) => {
        if (props.monthChangeOnScroll) {
            ev.preventDefault();
            emit('handle-scroll', ev);
        }
    };

    const getWeekNumber = (firstCurrentDate: ICalendarDay) => {
        if (defaultedWeekNumbers.value.type === 'local')
            return getWeek(firstCurrentDate.value, { weekStartsOn: +props.weekStart as WeekStartNum });
        if (defaultedWeekNumbers.value.type === 'iso') return getISOWeek(firstCurrentDate.value);
        if (typeof defaultedWeekNumbers.value.type === 'function')
            return defaultedWeekNumbers.value.type(firstCurrentDate.value);
        return '';
    };

    // Get week number if enabled
    const getWeekNum = (days: UnwrapRef<ICalendarDay[]>): string | number => {
        const firstCurrentDate = days[0];
        if (defaultedWeekNumbers.value.hideOnOffsetDates) {
            return days.some((day) => day.current) ? getWeekNumber(firstCurrentDate) : '';
        }
        return getWeekNumber(firstCurrentDate);
    };

    const onDateSelect = (ev: Event, dayVal: ICalendarDay, isClick = true) => {
        if (!isClick && isTouchDevice()) return;
        if (!defaultedMultiDates.value.enabled || defaultedConfig.value.allowPreventDefault) {
            checkStopPropagation(ev, defaultedConfig.value);
            emit('select-date', dayVal);
        }
    };

    const onTpClick = (ev: Event) => {
        checkStopPropagation(ev, defaultedConfig.value);
    };

    const onMouseDown = (day: UnwrapRef<ICalendarDay>) => {
        if (defaultedMultiDates.value.enabled && defaultedMultiDates.value.dragSelect) {
            isMouseDown.value = true;
            emit('select-date', day);
        } else if (defaultedMultiDates.value.enabled) {
            emit('select-date', day);
        }
    };

    defineExpose({ triggerTransition });
</script>
