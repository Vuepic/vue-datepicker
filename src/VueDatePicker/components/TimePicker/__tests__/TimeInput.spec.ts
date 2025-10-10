import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
import TimeInput from '@/components/TimePicker/TimeInput.vue';

// Mock child components
vi.mock('@/components/Common/SelectionOverlay.vue', () => ({
    default: {
        name: 'SelectionOverlay',
        template: '<div class="selection-overlay-mock"><slot name="button-icon"></slot></div>',
        props: {
            items: Array,
            isLast: Boolean,
            type: String,
            ariaLabels: Object,
            overlayLabel: String,
        },
        emits: ['selected', 'toggle', 'reset-flow'],
    },
}));

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootEmit = vi.fn();
    const rootProps = {
        disabled: false,
        arrowNavigation: false,
        minTime: null,
        maxTime: null,
        autoApply: false,
    };
    const defaults = {
        ariaLabels: ref({
            incrementValue: (type: string) => `Increment ${type}`,
            decrementValue: (type: string) => `Decrement ${type}`,
            openTpOverlay: (type: string) => `Open ${type} overlay`,
            amPmButton: 'AM/PM',
            timeOverlay: (type: string) => `${type} overlay`,
        }),
        filters: ref({
            times: {
                hours: [],
                minutes: [],
                seconds: [],
            },
        }),
        config: ref({
            timeArrowHoldThreshold: 0,
            keepActionRow: false,
        }),
        range: ref({
            enabled: false,
            disableTimeRangeValidation: false,
        }),
        multiCalendars: ref({
            count: 0,
        }),
        timeConfig: ref({
            enableMinutes: true,
            enableSeconds: false,
            is24: true,
            timePickerInline: false,
            hoursIncrement: 1,
            minutesIncrement: 1,
            secondsIncrement: 1,
            hoursGridIncrement: 1,
            minutesGridIncrement: 5,
            secondsGridIncrement: 5,
            noHoursOverlay: false,
            noMinutesOverlay: false,
            noSecondsOverlay: false,
        }),
        transitions: ref({
            open: 'dp-slide-down',
            close: 'dp-slide-up',
            menuAppearTop: 'dp-menu-appear-top',
            menuAppearBottom: 'dp-menu-appear-bottom',
        }),
    };
    return {
        useContext: () => ({
            rootEmit,
            rootProps,
            defaults,
        }),
    };
});

vi.mock('@/composables/useTransitions.ts', () => ({
    useTransitions: () => ({
        transitionName: vi.fn(() => 'dp-fade'),
        showTransition: true,
    }),
}));

vi.mock('@/composables/useArrowNavigation.ts', () => ({
    useArrowNavigation: () => ({
        setTimePickerElements: vi.fn(),
        setTimePickerBackRef: vi.fn(),
    }),
}));

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        checkKeyDown: vi.fn((event, callback) => callback()),
        groupListAndMap: vi.fn((list, mapper) => {
            const result = [];
            for (let i = 0; i < list.length; i += 3) {
                result.push(list.slice(i, i + 3).map((item: any) => ({ ...item, ...mapper(item) })));
            }
            return result;
        }),
        hoursToAmPmHours: vi.fn((hours) => {
            if (hours === 0) return 12;
            if (hours > 12) return hours - 12;
            return hours;
        }),
    }),
}));

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        getDate: vi.fn(() => new Date('2024-01-15T12:00:00')),
        sanitizeTime: vi.fn((time, type, val) => {
            if (type && val !== undefined) {
                return { ...time, [type]: val };
            }
            return time;
        }),
    }),
}));

describe('TimeInput', () => {
    const defaultProps = {
        hours: 14,
        minutes: 30,
        seconds: 0,
        order: 0,
        closeTimePickerBtn: null,
        disabledTimesConfig: null,
        validateTime: vi.fn(() => true),
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    afterEach(() => {
        vi.clearAllTimers();
    });

    describe('Component Rendering', () => {
        it('should render time input container', () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const container = wrapper.find('.dp__time_input');
            expect(container.exists()).toBe(true);
        });

        it('should render hours and minutes inputs by default', () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const hourDisplay = wrapper.find('[data-test-id="hours-toggle-overlay-btn-0"]');
            const minuteDisplay = wrapper.find('[data-test-id="minutes-toggle-overlay-btn-0"]');

            expect(hourDisplay.exists()).toBe(true);
            expect(minuteDisplay.exists()).toBe(true);
        });

        it('should render increment and decrement buttons for each time unit', () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const hourIncBtn = wrapper.find('[data-test-id="hours-time-inc-btn-0"]');
            const hourDecBtn = wrapper.find('[data-test-id="hours-time-dec-btn-0"]');
            const minuteIncBtn = wrapper.find('[data-test-id="minutes-time-inc-btn-0"]');
            const minuteDecBtn = wrapper.find('[data-test-id="minutes-time-dec-btn-0"]');

            expect(hourIncBtn.exists()).toBe(true);
            expect(hourDecBtn.exists()).toBe(true);
            expect(minuteIncBtn.exists()).toBe(true);
            expect(minuteDecBtn.exists()).toBe(true);
        });
    });

    describe('12-hour Format (AM/PM)', () => {
        beforeEach(async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.timeConfig.value.is24 = false;
        });

        afterEach(async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.timeConfig.value.is24 = true;
        });

        it('should render AM/PM button in 12-hour format', () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const amPmButton = wrapper.find('.dp__pm_am_button');
            expect(amPmButton.exists()).toBe(true);
        });

        it('should display PM for hours >= 12', () => {
            const wrapper = mount(TimeInput, {
                props: { ...defaultProps, hours: 14 },
            });

            const amPmButton = wrapper.find('.dp__pm_am_button');
            expect(amPmButton.text()).toBe('PM');
        });

        it('should display AM for hours < 12', () => {
            const wrapper = mount(TimeInput, {
                props: { ...defaultProps, hours: 8 },
            });

            const amPmButton = wrapper.find('.dp__pm_am_button');
            expect(amPmButton.text()).toBe('AM');
        });

        it('should toggle AM/PM when button is clicked', async () => {
            const wrapper = mount(TimeInput, {
                props: { ...defaultProps, hours: 14 },
            });

            const amPmButton = wrapper.find('.dp__pm_am_button');
            expect(amPmButton.text()).toBe('PM');

            await amPmButton.trigger('click');

            expect(wrapper.emitted('update:hours')).toBeTruthy();
            expect(wrapper.emitted('update:hours')?.[0]).toEqual([2]);
        });

        it('should display hours in 12-hour format', () => {
            const wrapper = mount(TimeInput, {
                props: { ...defaultProps, hours: 14 },
            });

            const hourDisplay = wrapper.find('[data-test-id="hours-toggle-overlay-btn-0"]');
            expect(hourDisplay.text()).toBe('02');
        });
    });

    describe('Time Display', () => {
        it('should display hours with leading zero when less than 10', () => {
            const wrapper = mount(TimeInput, {
                props: { ...defaultProps, hours: 5 },
            });

            const hourDisplay = wrapper.find('[data-test-id="hours-toggle-overlay-btn-0"]');
            expect(hourDisplay.text()).toBe('05');
        });

        it('should display minutes with leading zero when less than 10', () => {
            const wrapper = mount(TimeInput, {
                props: { ...defaultProps, minutes: 5 },
            });

            const minuteDisplay = wrapper.find('[data-test-id="minutes-toggle-overlay-btn-0"]');
            expect(minuteDisplay.text()).toBe('05');
        });

        it('should display time without leading zeros when >= 10', () => {
            const wrapper = mount(TimeInput, {
                props: { ...defaultProps, hours: 14, minutes: 30 },
            });

            const hourDisplay = wrapper.find('[data-test-id="hours-toggle-overlay-btn-0"]');
            const minuteDisplay = wrapper.find('[data-test-id="minutes-toggle-overlay-btn-0"]');

            expect(hourDisplay.text()).toBe('14');
            expect(minuteDisplay.text()).toBe('30');
        });
    });

    describe('Increment/Decrement Functionality', () => {
        it('should increment hours when increment button is clicked', async () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const incBtn = wrapper.find('[data-test-id="hours-time-inc-btn-0"]');
            await incBtn.trigger('click');

            expect(wrapper.emitted('update:hours')).toBeTruthy();
            expect(wrapper.emitted('update:hours')?.[0]).toEqual([15]);
        });

        it('should decrement hours when decrement button is clicked', async () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const decBtn = wrapper.find('[data-test-id="hours-time-dec-btn-0"]');
            await decBtn.trigger('click');

            expect(wrapper.emitted('update:hours')).toBeTruthy();
            expect(wrapper.emitted('update:hours')?.[0]).toEqual([13]);
        });

        it('should increment minutes when increment button is clicked', async () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const incBtn = wrapper.find('[data-test-id="minutes-time-inc-btn-0"]');
            await incBtn.trigger('click');

            expect(wrapper.emitted('update:minutes')).toBeTruthy();
            expect(wrapper.emitted('update:minutes')?.[0]).toEqual([31]);
        });

        it('should decrement minutes when decrement button is clicked', async () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const decBtn = wrapper.find('[data-test-id="minutes-time-dec-btn-0"]');
            await decBtn.trigger('click');

            expect(wrapper.emitted('update:minutes')).toBeTruthy();
            expect(wrapper.emitted('update:minutes')?.[0]).toEqual([29]);
        });

        it('should use custom increment value for hours', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.timeConfig.value.hoursIncrement = 2;

            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const incBtn = wrapper.find('[data-test-id="hours-time-inc-btn-0"]');
            await incBtn.trigger('click');

            expect(wrapper.emitted('update:hours')?.[0]).toEqual([16]);

            ctx.defaults.timeConfig.value.hoursIncrement = 1;
        });
    });

    describe('Time Overlay', () => {
        it('should toggle hours overlay when display is clicked', async () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const display = wrapper.find('[data-test-id="hours-toggle-overlay-btn-0"]');
            await display.trigger('click');

            expect(wrapper.emitted('overlay-opened')).toBeTruthy();
            expect(wrapper.emitted('overlay-opened')?.[0]).toEqual(['hours']);
        });

        it('should emit overlay-closed when overlay is toggled off', async () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const display = wrapper.find('[data-test-id="hours-toggle-overlay-btn-0"]');

            await display.trigger('click');
            expect(wrapper.emitted('overlay-opened')).toBeTruthy();

            await display.trigger('click');
            expect(wrapper.emitted('overlay-closed')).toBeTruthy();
            expect(wrapper.emitted('overlay-closed')?.[0]).toEqual(['hours']);
        });

        it('should emit update event when overlay value is selected', async () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const display = wrapper.find('[data-test-id="hours-toggle-overlay-btn-0"]');
            await display.trigger('click');

            const selectionOverlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            await selectionOverlay.vm.$emit('selected', 10);

            expect(wrapper.emitted('update:hours')).toBeTruthy();
            expect(wrapper.emitted('update:hours')?.[0]).toEqual([10]);
        });
    });

    describe('Component Lifecycle', () => {
        it('should emit mounted event on mount', async () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            await nextTick();
            expect(wrapper.emitted('mounted')).toBeTruthy();
        });
    });

    describe('Accessibility', () => {
        it('should have correct aria-labels for increment buttons', () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const hourIncBtn = wrapper.find('[data-test-id="hours-time-inc-btn-0"]');
            expect(hourIncBtn.attributes('aria-label')).toBe('Increment hours');
        });

        it('should have correct aria-labels for decrement buttons', () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const hourDecBtn = wrapper.find('[data-test-id="hours-time-dec-btn-0"]');
            expect(hourDecBtn.attributes('aria-label')).toBe('Decrement hours');
        });

        it('should have tabindex 0 for all interactive buttons', () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            const buttons = wrapper.findAll('button');
            buttons.forEach((button) => {
                expect(button.attributes('tabindex')).toBe('0');
            });
        });
    });

    describe('Component API', () => {
        it('should expose openChildCmp method', () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            expect(wrapper.vm.openChildCmp).toBeDefined();
            expect(typeof wrapper.vm.openChildCmp).toBe('function');
        });

        it('should open overlay when openChildCmp is called', async () => {
            const wrapper = mount(TimeInput, {
                props: defaultProps,
            });

            wrapper.vm.openChildCmp('hours');
            await nextTick();

            // openChildCmp sets the overlay state directly without emitting events
            // The overlay should be visible after calling this method
            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            expect(overlay.exists()).toBe(true);
        });
    });
});
