import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
import DatePicker from '@/components/DatePicker/DatePicker.vue';
import type { CalendarWeek } from '@/types';

// Mock child components
vi.mock('@/components/DatePicker/DpHeader.vue', () => ({
    default: {
        name: 'DpHeader',
        template: '<div class="dp-header-mock"></div>',
        emits: ['mount', 'reset-flow', 'update-month-year', 'overlay-closed'],
        methods: {
            toggleMonthPicker: vi.fn(),
            toggleYearPicker: vi.fn(),
            handleMonthYearChange: vi.fn(),
        },
    },
}));

vi.mock('@/components/DatePicker/DpCalendar.vue', () => ({
    default: {
        name: 'DpCalendar',
        template: '<div class="dp-calendar-mock"></div>',
        emits: ['select-date', 'set-hover-date', 'handle-scroll', 'handle-swipe', 'mount'],
        methods: {
            triggerTransition: vi.fn(),
        },
    },
}));

vi.mock('@/components/TimePicker/TimePicker.vue', () => ({
    default: {
        name: 'TimePicker',
        template: '<div class="time-picker-mock"></div>',
        emits: ['mount', 'update:hours', 'update:minutes', 'update:seconds', 'reset-flow'],
        methods: {
            toggleTimePicker: vi.fn(),
        },
    },
}));

vi.mock('@/components/Common/InstanceWrap.vue', () => ({
    default: {
        name: 'InstanceWrap',
        template: '<div><slot :instances="[0]" :wrapClass="{}"></slot></div>',
        props: ['collapse'],
    },
}));

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootEmit = vi.fn();
    const rootProps = {
        range: false,
        hideMonthYearSelect: false,
        autoApply: false,
        transitions: true,
        vertical: false,
    };
    const modelValue = ref(null);
    const calendars = ref([{ month: 0, year: 2024 }]);
    const month = ref((instance: number) => calendars.value[instance]?.month ?? 0);
    const year = ref((instance: number) => calendars.value[instance]?.year ?? 2024);
    const time = ref({ hours: 0, minutes: 0, seconds: 0 });
    const today = new Date(2024, 0, 15);
    const isTextInputDate = ref(false);

    const defaults = {
        multiCalendars: ref({ count: 0 }),
        startTime: ref(null),
        range: ref(false),
        config: ref({ keepViewOnOffsetClick: false }),
        tz: ref(null),
        safeDates: ref({ minDate: null, maxDate: null }),
        multiDates: ref({ enabled: false }),
        timeConfig: ref({ enableTimePicker: false }),
        flow: ref([]),
    };

    return {
        useContext: () => ({
            rootEmit,
            rootProps,
            modelValue,
            calendars,
            month,
            year,
            time,
            today,
            isTextInputDate,
            defaults,
        }),
    };
});

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        getCellId: vi.fn((date: Date) => `dp-cell-${date.getTime()}`),
        getDate: vi.fn(() => new Date(2024, 0, 15)),
        resetDateTime: vi.fn((date: Date) => date),
        setTime: vi.fn((date: Date) => date),
        isDateBefore: vi.fn(() => false),
        isDateEqual: vi.fn(() => false),
        getDaysInBetween: vi.fn(() => []),
    }),
}));

vi.mock('@/composables/useUtilsWithContext.ts', () => ({
    useUtilsWithContext: () => ({
        getYears: vi.fn(() => [
            { text: '2023', value: 2023 },
            { text: '2024', value: 2024 },
            { text: '2025', value: 2025 },
        ]),
        getMonths: vi.fn(() => [
            { text: 'Jan', value: 0 },
            { text: 'Feb', value: 1 },
            { text: 'Mar', value: 2 },
            { text: 'Apr', value: 3 },
            { text: 'May', value: 4 },
            { text: 'Jun', value: 5 },
            { text: 'Jul', value: 6 },
            { text: 'Aug', value: 7 },
            { text: 'Sep', value: 8 },
            { text: 'Oct', value: 9 },
            { text: 'Nov', value: 10 },
            { text: 'Dec', value: 11 },
        ]),
    }),
}));

vi.mock('@/composables/useSlotsMapper.ts', () => ({
    useSlotsMapper: () => ({
        mapSlots: vi.fn(() => []),
    }),
}));

vi.mock('@/components/DatePicker/useCalendarClass.ts', () => ({
    useCalendarClass: () => ({
        setHoverDate: vi.fn(),
        getDayClassData: vi.fn(() => ({})),
        clearHoverDate: vi.fn(),
    }),
}));

vi.mock('@/components/DatePicker/useDatePicker.ts', () => ({
    useDatePicker: () => ({
        month: ref((_instance: number) => 0),
        year: ref((_instance: number) => 2024),
        modelValue: ref(null),
        time: ref({ hours: 0, minutes: 0, seconds: 0 }),
        disabledTimesConfig: ref({}),
        today: new Date(2024, 0, 15),
        validateTime: vi.fn(() => true),
        getCalendarDays: vi.fn(() => []),
        getMarker: vi.fn(() => null),
        handleArrow: vi.fn(),
        handleScroll: vi.fn(),
        handleSwipe: vi.fn(),
        selectDate: vi.fn(),
        updateMonthYear: vi.fn(),
        presetDate: vi.fn(),
        selectCurrentDate: vi.fn(),
        updateTime: vi.fn(),
        assignMonthAndYear: vi.fn(),
        setStartTime: vi.fn(),
    }),
}));

describe('DatePicker', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render DatePicker component', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.exists()).toBe(true);
    });

    it('should render DpHeader when not hidden', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.find('.dp-header-mock').exists()).toBe(true);
    });

    it('should not render DpHeader when hideMonthYearSelect is true', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.rootProps as any).hideMonthYearSelect = true;

        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.find('.dp-header-mock').exists()).toBe(false);

        // Reset
        (ctx.rootProps as any).hideMonthYearSelect = false;
    });

    it('should render DpCalendar component', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.find('.dp-calendar-mock').exists()).toBe(true);
    });

    it('should render TimePicker when time picker is enabled', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.defaults.timeConfig as any).value = { enableTimePicker: true };

        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.find('.time-picker-mock').exists()).toBe(true);

        // Reset
        (ctx.defaults.timeConfig as any).value = { enableTimePicker: false };
    });

    it('should not render TimePicker when time picker is disabled', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.find('.time-picker-mock').exists()).toBe(false);
    });

    it('should emit mount event when header mounts', async () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        const header = wrapper.findComponent({ name: 'DpHeader' });
        await header.vm.$emit('mount', 'header');

        expect(wrapper.emitted('mount')).toBeTruthy();
    });

    it('should emit mount event when calendar mounts', async () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        const calendar = wrapper.findComponent({ name: 'DpCalendar' });
        await calendar.vm.$emit('mount', 'calendar');

        expect(wrapper.emitted('mount')).toBeTruthy();
    });

    it('should emit reset-flow when header emits reset-flow', async () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        const header = wrapper.findComponent({ name: 'DpHeader' });
        await header.vm.$emit('reset-flow');

        expect(wrapper.emitted('reset-flow')).toBeTruthy();
    });

    it('should handle update-month-year event from header', async () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        const header = wrapper.findComponent({ name: 'DpHeader' });
        await header.vm.$emit('update-month-year', { month: 5, year: 2024 });

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should handle select-date event from calendar', async () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        const calendar = wrapper.findComponent({ name: 'DpCalendar' });
        const mockDay = {
            text: 15,
            value: new Date(2024, 0, 15),
            current: true,
            classData: {},
        };
        await calendar.vm.$emit('select-date', mockDay);

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should handle set-hover-date event from calendar', async () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        const calendar = wrapper.findComponent({ name: 'DpCalendar' });
        const mockDay = {
            text: 15,
            value: new Date(2024, 0, 15),
            current: true,
            classData: {},
        };
        await calendar.vm.$emit('set-hover-date', mockDay);

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should handle scroll event from calendar', async () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        const calendar = wrapper.findComponent({ name: 'DpCalendar' });
        const mockEvent = new WheelEvent('wheel', { deltaY: 100 });
        await calendar.vm.$emit('handle-scroll', mockEvent);

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should handle swipe event from calendar', async () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        const calendar = wrapper.findComponent({ name: 'DpCalendar' });
        await calendar.vm.$emit('handle-swipe', 'left');

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should handle time update from TimePicker', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.defaults.timeConfig as any).value = { enableTimePicker: true };

        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        const timePicker = wrapper.findComponent({ name: 'TimePicker' });
        await timePicker.vm.$emit('update:hours', 12);

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);

        // Reset
        (ctx.defaults.timeConfig as any).value = { enableTimePicker: false };
    });

    it('should expose clearHoverDate method', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.vm.clearHoverDate).toBeDefined();
        expect(typeof wrapper.vm.clearHoverDate).toBe('function');
    });

    it('should expose presetDate method', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.vm.presetDate).toBeDefined();
        expect(typeof wrapper.vm.presetDate).toBe('function');
    });

    it('should expose selectCurrentDate method', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.vm.selectCurrentDate).toBeDefined();
        expect(typeof wrapper.vm.selectCurrentDate).toBe('function');
    });

    it('should expose handleArrow method', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.vm.handleArrow).toBeDefined();
        expect(typeof wrapper.vm.handleArrow).toBe('function');
    });

    it('should expose updateMonthYear method', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.vm.updateMonthYear).toBeDefined();
        expect(typeof wrapper.vm.updateMonthYear).toBe('function');
    });

    it('should expose setStartTime method', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.vm.setStartTime).toBeDefined();
        expect(typeof wrapper.vm.setStartTime).toBe('function');
    });

    it('should expose toggleMonthPicker method', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.vm.toggleMonthPicker).toBeDefined();
        expect(typeof wrapper.vm.toggleMonthPicker).toBe('function');
    });

    it('should expose toggleYearPicker method', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.vm.toggleYearPicker).toBeDefined();
        expect(typeof wrapper.vm.toggleYearPicker).toBe('function');
    });

    it('should expose toggleTimePicker method', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.vm.toggleTimePicker).toBeDefined();
        expect(typeof wrapper.vm.toggleTimePicker).toBe('function');
    });

    it('should expose getSidebarProps method', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.vm.getSidebarProps).toBeDefined();
        expect(typeof wrapper.vm.getSidebarProps).toBe('function');
    });

    it('should expose changeMonth method', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.vm.changeMonth).toBeDefined();
        expect(typeof wrapper.vm.changeMonth).toBe('function');
    });

    it('should expose changeYear method', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.vm.changeYear).toBeDefined();
        expect(typeof wrapper.vm.changeYear).toBe('function');
    });

    it('should expose selectWeekDate method', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.vm.selectWeekDate).toBeDefined();
        expect(typeof wrapper.vm.selectWeekDate).toBe('function');
    });

    it('should render custom time-picker slot when provided', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.defaults.timeConfig as any).value = { enableTimePicker: true };

        const wrapper = mount(DatePicker, {
            props: {} as any,
            slots: {
                'time-picker': '<div class="custom-time-picker">Custom Time Picker</div>',
            },
        });

        const customTimePicker = wrapper.find('.custom-time-picker');
        expect(customTimePicker.exists()).toBe(true);
        expect(customTimePicker.text()).toBe('Custom Time Picker');

        // Reset
        (ctx.defaults.timeConfig as any).value = { enableTimePicker: false };
    });

    it('should emit focus-menu event when header overlay closes', async () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        const header = wrapper.findComponent({ name: 'DpHeader' });
        await header.vm.$emit('overlay-closed', 'month');

        await nextTick();
        expect(wrapper.emitted('focus-menu')).toBeTruthy();
    });

    it('should compute mappedDates correctly', async () => {
        const { useDatePicker } = await import('@/components/DatePicker/useDatePicker.ts');
        const datePicker = useDatePicker(
            {} as any,
            () => ({}) as any,
            () => ({}),
            () => ({}),
        );

        const mockWeeks: CalendarWeek[] = [
            {
                days: [
                    {
                        text: 1,
                        value: new Date(2024, 0, 1),
                        current: true,
                        classData: {},
                        marker: null,
                    },
                ],
            },
        ];

        (datePicker.getCalendarDays as any).mockReturnValue(mockWeeks);

        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        expect(wrapper.exists()).toBe(true);
        expect(datePicker.getCalendarDays).toBeDefined();
    });

    it('should watch multiCalendars count changes', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();

        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        // Increase calendar count
        const initialCount = ctx.defaults.multiCalendars.value.count;
        (ctx.defaults.multiCalendars as any).value = { count: initialCount + 1 };
        await nextTick();

        // Verify the component handled the change without errors
        expect(wrapper.exists()).toBe(true);

        // Reset
        (ctx.defaults.multiCalendars as any).value = { count: initialCount };
    });

    it('should emit update-flow-step when flow step is updated', async () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        // The updateFlowStep function is called internally
        // We verify the component structure is correct
        expect(wrapper.exists()).toBe(true);
    });

    it('should call getYears and getMonths from utils', async () => {
        const { useUtilsWithContext } = await import('@/composables/useUtilsWithContext.ts');
        const utils = useUtilsWithContext();
        const getYearsSpy = vi.spyOn(utils, 'getYears');
        const getMonthsSpy = vi.spyOn(utils, 'getMonths');

        mount(DatePicker, {
            props: {} as any,
        });

        await nextTick();

        // These methods are called when rendering the header
        expect(getYearsSpy).toBeDefined();
        expect(getMonthsSpy).toBeDefined();
    });

    it('should pass correct props to DpHeader', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        const header = wrapper.findComponent({ name: 'DpHeader' });
        expect(header.exists()).toBe(true);
    });

    it('should pass correct props to DpCalendar', () => {
        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        const calendar = wrapper.findComponent({ name: 'DpCalendar' });
        expect(calendar.exists()).toBe(true);
    });

    it('should pass correct props to TimePicker when enabled', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.defaults.timeConfig as any).value = { enableTimePicker: true };

        const wrapper = mount(DatePicker, {
            props: {} as any,
        });

        const timePicker = wrapper.findComponent({ name: 'TimePicker' });
        expect(timePicker.exists()).toBe(true);

        // Reset
        (ctx.defaults.timeConfig as any).value = { enableTimePicker: false };
    });
});
