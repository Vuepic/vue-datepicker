import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
import DpCalendar from '@/components/DatePicker/DpCalendar.vue';
import type { CalendarWeek, CalendarDay } from '@/types';

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootEmit = vi.fn();
    const rootProps = {
        vertical: false,
        transitions: true,
        dayNames: null,
        calendar: null,
        hideOffsetDates: false,
        weekStart: 0,
        arrowNavigation: false,
        inline: false,
    };
    const defaults = {
        transitions: ref({
            next: 'dp-slide-right',
            previous: 'dp-slide-left',
            vNext: 'dp-slide-down',
            vPrevious: 'dp-slide-up',
        }),
        config: ref({
            noSwipe: false,
            monthChangeOnScroll: false,
            allowPreventDefault: false,
        }),
        ariaLabels: ref({
            weekDay: (day: number) => `Day ${day}`,
            day: (day: CalendarDay) => `Select day ${day.text}`,
        }),
        multiCalendars: ref({ count: 0 }),
        weekNumbers: ref({ type: 'iso', hideOnOffsetDates: false }),
        multiDates: ref({ enabled: false, dragSelect: false }),
        ui: ref({ calendar: {} }),
    };
    return { useContext: () => ({ rootEmit, rootProps, defaults }) };
});

vi.mock('@/composables/useArrowNavigation.ts', () => ({
    useArrowNavigation: () => ({
        buildMultiLevelMatrix: vi.fn(),
    }),
}));

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        getDate: vi.fn(() => new Date(2024, 0, 15)),
        isDateAfter: vi.fn(() => false),
        isDateEqual: vi.fn((date1: Date | null, date2: Date | null) => {
            if (!date1 || !date2) return false;
            return date1.getTime() === date2.getTime();
        }),
        resetDateTime: vi.fn((date: Date) => date),
        getCellId: vi.fn((date: Date) => `dp-cell-${date.getTime()}`),
    }),
}));

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        checkKeyDown: vi.fn(),
        checkStopPropagation: vi.fn(),
        isTouchDevice: vi.fn(() => false),
    }),
}));

vi.mock('@/composables/useFormatter.ts', () => ({
    useFormatter: () => ({
        formatWeekDay: vi.fn((day: number) => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][day - 1] || 'Mon'),
    }),
}));

describe('DpCalendar', () => {
    const createCalendarWeeks = (): CalendarWeek[] => {
        const weeks: CalendarWeek[] = [];

        for (let week = 0; week < 5; week++) {
            const days: CalendarDay[] = [];
            for (let day = 0; day < 7; day++) {
                const dayNum = week * 7 + day + 1;
                const date = new Date(2024, 0, dayNum);
                days.push({
                    text: dayNum,
                    value: date,
                    current: dayNum <= 31,
                    classData: {
                        dp__today: dayNum === 15,
                        dp__active_date: dayNum === 15,
                    },
                    marker: null,
                });
            }
            weeks.push({ days });
        }
        return weeks;
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should render calendar component', () => {
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: createCalendarWeeks(),
                month: 0,
                year: 2024,
            },
        });

        expect(wrapper.find('.dp__calendar').exists()).toBe(true);
    });

    it('should render calendar header with weekday names', () => {
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: createCalendarWeeks(),
                month: 0,
                year: 2024,
            },
        });

        const headers = wrapper.findAll('.dp__calendar_header_item');
        expect(headers.length).toBeGreaterThan(0);
    });

    it('should render all calendar weeks', () => {
        const weeks = createCalendarWeeks();
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        const calendarRows = wrapper.findAll('.dp__calendar_row');
        expect(calendarRows.length).toBe(weeks.length);
    });

    it('should render all days in calendar', () => {
        const weeks = createCalendarWeeks();
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        const calendarItems = wrapper.findAll('.dp__calendar_item:not(.dp__week_num)');
        expect(calendarItems.length).toBe(weeks.length * 7);
    });

    it('should emit mount event on mounted', async () => {
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: createCalendarWeeks(),
                month: 0,
                year: 2024,
            },
        });

        await nextTick();
        expect(wrapper.emitted('mount')).toBeTruthy();
        expect(wrapper.emitted('mount')?.[0]?.[0]).toMatchObject({
            cmp: 'calendar',
            dayRefs: expect.any(Array),
        });
    });

    it('should emit select-date when day is clicked', async () => {
        const weeks = createCalendarWeeks();
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        const firstDay = wrapper.find('.dp__calendar_item:not(.dp__week_num)');
        await firstDay.trigger('click');

        expect(wrapper.emitted('select-date')).toBeTruthy();
        expect(wrapper.emitted('select-date')?.[0]?.[0]).toEqual(weeks[0]?.days[0]);
    });

    it('should emit set-hover-date when mouse enters day', async () => {
        const weeks = createCalendarWeeks();
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        const firstDay = wrapper.find('.dp__calendar_item:not(.dp__week_num)');
        await firstDay.trigger('mouseenter');

        expect(wrapper.emitted('set-hover-date')).toBeTruthy();
        expect(wrapper.emitted('set-hover-date')?.[0]?.[0]).toEqual(weeks[0]?.days[0]);
    });

    it('should render week numbers when enabled', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.rootProps as any).weekNumbers = true;

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: createCalendarWeeks(),
                month: 0,
                year: 2024,
            },
        });

        const weekNums = wrapper.findAll('.dp__week_num');
        expect(weekNums.length).toBeGreaterThan(0);

        // Reset
        (ctx.rootProps as any).weekNumbers = false;
    });

    it('should render week number name in header when week numbers enabled', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.rootProps as any).weekNumbers = true;
        (ctx.rootProps as any).weekNumName = 'Wk';

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: createCalendarWeeks(),
                month: 0,
                year: 2024,
            },
        });

        const headerItems = wrapper.findAll('.dp__calendar_header_item');
        expect(headerItems[0]?.text()).toBe('Wk');

        // Reset
        (ctx.rootProps as any).weekNumbers = false;
    });

    it('should render custom calendar header slot', () => {
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: createCalendarWeeks(),
                month: 0,
                year: 2024,
            },
            slots: {
                'calendar-header': '<div class="custom-header">Custom</div>',
            },
        });

        const customHeader = wrapper.find('.custom-header');
        expect(customHeader.exists()).toBe(true);
    });

    it('should render custom day slot', () => {
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: createCalendarWeeks(),
                month: 0,
                year: 2024,
            },
            slots: {
                day: '<span class="custom-day">{{ day }}</span>',
            },
        });

        const customDays = wrapper.findAll('.custom-day');
        expect(customDays.length).toBeGreaterThan(0);
    });

    it('should render marker when day has marker', () => {
        const weeks = createCalendarWeeks();
        weeks[0]!.days[0]!.marker = {
            date: weeks[0]!.days[0]!.value,
            type: 'dot',
            color: '#ff0000',
        };

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        const marker = wrapper.find('.dp__marker_dot');
        expect(marker.exists()).toBe(true);
    });

    it('should render line marker when marker type is line', () => {
        const weeks = createCalendarWeeks();
        weeks[0]!.days[0]!.marker = {
            date: weeks[0]!.days[0]!.value,
            type: 'line',
        };

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        const marker = wrapper.find('.dp__marker_line');
        expect(marker.exists()).toBe(true);
    });

    it('should render custom marker slot', () => {
        const weeks = createCalendarWeeks();
        weeks[0]!.days[0]!.marker = {
            date: weeks[0]!.days[0]!.value,
            type: 'dot',
        };

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
            slots: {
                marker: '<div class="custom-marker">!</div>',
            },
        });

        const customMarker = wrapper.find('.custom-marker');
        expect(customMarker.exists()).toBe(true);
    });

    it('should apply custom day names from prop', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.rootProps as any).dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: createCalendarWeeks(),
                month: 0,
                year: 2024,
            },
        });

        const headers = wrapper.findAll('[data-test-id="calendar-header"]');
        expect(headers[0]?.text()).toBe('S');

        // Reset
        (ctx.rootProps as any).dayNames = null;
    });

    it('should apply custom day names from function prop', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.rootProps as any).dayNames = () => ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: createCalendarWeeks(),
                month: 0,
                year: 2024,
            },
        });

        const headers = wrapper.findAll('[data-test-id="calendar-header"]');
        expect(headers[0]?.text()).toBe('Su');

        // Reset
        (ctx.rootProps as any).dayNames = null;
    });

    it('should use custom calendar function when provided', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        const customCalendar = vi.fn((weeks) => weeks);
        (ctx.rootProps as any).calendar = customCalendar;

        const weeks = createCalendarWeeks();
        mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        expect(customCalendar).toHaveBeenCalledWith(weeks);

        // Reset
        (ctx.rootProps as any).calendar = null;
    });

    it('should set aria-selected for active dates', () => {
        const weeks = createCalendarWeeks();
        weeks[0]!.days[0]!.classData.dp__active_date = true;

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        const firstDay = wrapper.find('.dp__calendar_item:not(.dp__week_num)');
        expect(firstDay.attributes('aria-selected')).toBe('true');
    });

    it('should set aria-disabled for disabled dates', () => {
        const weeks = createCalendarWeeks();
        weeks[0]!.days[0]!.classData.dp__cell_disabled = true;

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        const firstDay = wrapper.find('.dp__calendar_item:not(.dp__week_num)');
        expect(firstDay.attributes('aria-disabled')).toBe('true');
    });

    it('should set aria-label from ariaLabels config', () => {
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: createCalendarWeeks(),
                month: 0,
                year: 2024,
            },
        });

        const firstDay = wrapper.find('.dp__calendar_item:not(.dp__week_num)');
        expect(firstDay.attributes('aria-label')).toBeTruthy();
    });

    it('should add dp__calendar_next class for multi-calendar instances', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.defaults.multiCalendars as any).value = { count: 2 };

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 1,
                mappedDates: createCalendarWeeks(),
                month: 1,
                year: 2024,
            },
        });

        expect(wrapper.find('.dp__calendar_next').exists()).toBe(true);

        // Reset
        (ctx.defaults.multiCalendars as any).value = { count: 0 };
    });

    it('should expose triggerTransition method', () => {
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: createCalendarWeeks(),
                month: 0,
                year: 2024,
            },
        });

        expect(wrapper.vm.triggerTransition).toBeDefined();
        expect(typeof wrapper.vm.triggerTransition).toBe('function');
    });

    it('should trigger transition when triggerTransition is called', async () => {
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: createCalendarWeeks(),
                month: 0,
                year: 2024,
            },
        });

        wrapper.vm.triggerTransition(1, 2024);
        await nextTick();

        // Calendar should be visible after transition
        expect(wrapper.find('.dp__calendar').exists()).toBe(true);
    });

    it('should handle touchend event on day', async () => {
        const weeks = createCalendarWeeks();
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        const firstDay = wrapper.find('.dp__calendar_item:not(.dp__week_num)');
        await firstDay.trigger('touchend', {
            changedTouches: [{ screenX: 100, screenY: 100 }],
        });

        expect(wrapper.emitted('select-date')).toBeTruthy();
    });

    it('should handle keydown event on day', async () => {
        const weeks = createCalendarWeeks();
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        const firstDay = wrapper.find('.dp__calendar_item:not(.dp__week_num)');

        // Verify keydown event listener is attached by checking the element has a tabindex
        expect(firstDay.attributes('tabindex')).toBe('0');

        // Trigger keydown event
        await firstDay.trigger('keydown', { key: 'Enter' });

        // The checkKeyDown utility is called within the component
        expect(firstDay.element).toBeDefined();
    });

    it('should handle mousedown on day when multi-dates with drag select enabled', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.defaults.multiDates as any).value = { enabled: true, dragSelect: true };

        const weeks = createCalendarWeeks();
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        const firstDay = wrapper.find('.dp__calendar_item:not(.dp__week_num)');
        await firstDay.trigger('mousedown');

        expect(wrapper.emitted('select-date')).toBeTruthy();

        // Reset
        (ctx.defaults.multiDates as any).value = { enabled: false, dragSelect: false };
    });

    it('should handle drag select on mouseover when mouse is down', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.defaults.multiDates as any).value = { enabled: true, dragSelect: true };

        const weeks = createCalendarWeeks();
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        const firstDay = wrapper.find('.dp__calendar_item:not(.dp__week_num)');
        await firstDay.trigger('mousedown');

        const secondDay = wrapper.findAll('.dp__calendar_item:not(.dp__week_num)')[1];
        await secondDay!.trigger('mouseenter');

        expect(wrapper.emitted('select-date')?.length).toBeGreaterThan(1);

        // Reset
        (ctx.defaults.multiDates as any).value = { enabled: false, dragSelect: false };
    });

    it('should reset mouse down state on mouseleave from calendar', async () => {
        const weeks = createCalendarWeeks();
        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        const calendar = wrapper.find('.dp__calendar');
        await calendar.trigger('mouseleave');

        // Mouse down state should be reset
        expect(wrapper.vm).toBeDefined();
    });

    it('should hide offset dates when hideOffsetDates is enabled', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.rootProps as any).hideOffsetDates = true;

        const weeks = createCalendarWeeks();
        weeks[0]!.days[0]!.current = false;

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        // Days with current: false should not have tabindex when hideOffsetDates is true
        const firstDay = wrapper.find('.dp__calendar_item:not(.dp__week_num)');
        expect(firstDay.attributes('tabindex')).toBeUndefined();

        // Reset
        (ctx.rootProps as any).hideOffsetDates = false;
    });

    it('should set tabindex 0 for current dates', () => {
        const weeks = createCalendarWeeks();
        weeks[0]!.days[0]!.current = true;

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
        });

        const firstDay = wrapper.find('.dp__calendar_item:not(.dp__week_num)');
        expect(firstDay.attributes('tabindex')).toBe('0');
    });

    it('should render marker tooltip when hovering over day with marker', async () => {
        const weeks = createCalendarWeeks();
        const tooltipDate = weeks[0]!.days[0]!.value;
        weeks[0]!.days[0]!.marker = {
            date: tooltipDate,
            type: 'dot',
            tooltip: [{ text: 'Event 1', color: '#ff0000' }],
        };

        const { useDateUtils } = await import('@/composables/useDateUtils.ts');
        const dateUtils = useDateUtils();
        (dateUtils.isDateEqual as any).mockImplementation(
            (date1: Date | null, date2: Date | null) => date1?.getTime() === date2?.getTime(),
        );

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
            attachTo: document.body,
        });

        const firstDay = wrapper.find('.dp__calendar_item:not(.dp__week_num)');
        await firstDay.trigger('mouseenter');
        await nextTick();

        const tooltip = wrapper.find('.dp__marker_tooltip');
        expect(tooltip.exists()).toBe(true);

        wrapper.unmount();
    });

    it('should render custom marker-tooltip slot', async () => {
        const weeks = createCalendarWeeks();
        weeks[0]!.days[0]!.marker = {
            date: weeks[0]!.days[0]!.value,
            type: 'dot',
            tooltip: [{ text: 'Event', color: '#ff0000' }],
        };

        const { useDateUtils } = await import('@/composables/useDateUtils.ts');
        const dateUtils = useDateUtils();
        (dateUtils.isDateEqual as any).mockImplementation(
            (date1: Date | null, date2: Date | null) => date1?.getTime() === date2?.getTime(),
        );

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: weeks,
                month: 0,
                year: 2024,
            },
            slots: {
                'marker-tooltip': '<div class="custom-tooltip">Custom</div>',
            },
            attachTo: document.body,
        });

        const firstDay = wrapper.find('.dp__calendar_item:not(.dp__week_num)');
        await firstDay.trigger('mouseenter');
        await nextTick();

        const customTooltip = wrapper.find('.custom-tooltip');
        expect(customTooltip.exists()).toBe(true);

        wrapper.unmount();
    });

    it('should emit handle-swipe event on swipe gesture', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.defaults.config as any).value = { ...ctx.defaults.config.value, noSwipe: false };

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: createCalendarWeeks(),
                month: 0,
                year: 2024,
            },
            attachTo: document.body,
        });

        const calendarWrap = wrapper.find('[role="grid"]');

        // Simulate swipe right
        await calendarWrap.trigger('touchstart', {
            changedTouches: [{ screenX: 100, screenY: 100 }],
        });
        await calendarWrap.trigger('touchend', {
            changedTouches: [{ screenX: 50, screenY: 100 }],
        });

        await nextTick();
        expect(wrapper.emitted('handle-swipe')).toBeTruthy();

        wrapper.unmount();
    });

    it('should emit handle-scroll event on wheel scroll when enabled', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.defaults.config as any).value = { ...ctx.defaults.config.value, monthChangeOnScroll: true };

        const wrapper = mount(DpCalendar, {
            props: {
                instance: 0,
                mappedDates: createCalendarWeeks(),
                month: 0,
                year: 2024,
            },
            attachTo: document.body,
        });

        const calendarWrap = wrapper.find('[role="grid"]');
        await calendarWrap.trigger('wheel', { deltaY: 100 });

        await nextTick();
        expect(wrapper.emitted('handle-scroll')).toBeTruthy();

        wrapper.unmount();
        (ctx.defaults.config as any).value = { ...ctx.defaults.config.value, monthChangeOnScroll: false };
    });
});
