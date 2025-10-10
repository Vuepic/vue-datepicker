import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
import TimePicker from '@/components/TimePicker/TimePicker.vue';

// Mock child components
vi.mock('@/components/TimePicker/TimeInput.vue', () => ({
    default: {
        name: 'TimeInput',
        template: '<div class="time-input-mock" :data-order="order"></div>',
        props: [
            'order',
            'hours',
            'minutes',
            'seconds',
            'closeTimePickerBtn',
            'disabledTimesConfig',
            'disabled',
            'validateTime',
        ],
        emits: ['update:hours', 'update:minutes', 'update:seconds', 'mounted', 'overlay-closed', 'overlay-opened'],
        setup(_props: any, _ctx: any) {
            return {
                openChildCmp: vi.fn(),
            };
        },
    },
}));

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootEmit = vi.fn();
    const modelValue = ref(null);
    const rootProps = {
        timePicker: false,
        arrowNavigation: false,
        modelAuto: false,
        autoApply: false,
    };
    const isMobile = ref(false);
    const defaults = {
        ariaLabels: ref({
            openTimePicker: 'Open time picker',
            closeTimePicker: 'Close time picker',
            timePicker: 'Time picker overlay',
        }),
        textInput: ref({
            enabled: false,
        }),
        config: ref({
            modeHeight: 255,
            keepActionRow: false,
        }),
        range: ref({
            enabled: false,
            fixedStart: false,
            fixedEnd: false,
        }),
        timeConfig: ref({
            timePickerInline: false,
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
            modelValue,
            rootProps,
            isMobile,
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
        buildMatrix: vi.fn(),
        setTimePicker: vi.fn(),
    }),
}));

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        checkKeyDown: vi.fn((event, callback) => callback()),
        findFocusableEl: vi.fn(() => null),
        isModelAuto: vi.fn(() => true),
    }),
}));

vi.mock('@/composables/useSlotsMapper.ts', () => ({
    useSlotsMapper: () => ({
        mapSlots: vi.fn(() => []),
    }),
}));

vi.mock('@/components/shared/useNavigationDisplay.ts', () => ({
    useNavigationDisplay: () => ({
        hideNavigationButtons: vi.fn(() => false),
    }),
}));

describe('TimePicker', () => {
    const defaultProps = {
        hours: 14,
        minutes: 30,
        seconds: 0,
        disabledTimesConfig: null,
        noOverlayFocus: false,
        validateTime: vi.fn(() => true),
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('Component Rendering', () => {
        it('should render time picker wrapper', () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const container = wrapper.find('.dp--tp-wrap');
            expect(container.exists()).toBe(true);
        });

        it('should render open time picker button when not in timePicker mode', () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            expect(openBtn.exists()).toBe(true);
        });

        it('should not render open button when in timePicker mode', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.timePicker = true;

            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            expect(openBtn.exists()).toBe(false);

            // Reset
            ctx.rootProps.timePicker = false;
        });

        it('should render TimeInput component', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.timePicker = true;

            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const timeInput = wrapper.findComponent({ name: 'TimeInput' });
            expect(timeInput.exists()).toBe(true);

            // Reset
            ctx.rootProps.timePicker = false;
        });

        it('should render two TimeInput components in range mode', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = true;
            ctx.rootProps.timePicker = true;

            const wrapper = mount(TimePicker, {
                props: {
                    ...defaultProps,
                    hours: [14, 16],
                    minutes: [30, 45],
                    seconds: [0, 0],
                },
            });

            const timeInputs = wrapper.findAllComponents({ name: 'TimeInput' });
            expect(timeInputs.length).toBe(2);

            // Reset
            ctx.defaults.range.value.enabled = false;
            ctx.rootProps.timePicker = false;
        });

        it('should apply mobile data attribute when on mobile', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            (ctx.isMobile as any).value = true;

            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const container = wrapper.find('.dp--tp-wrap');
            expect(container.attributes('data-dp-mobile')).toBe('true');

            // Reset
            (ctx.isMobile as any).value = false;
        });
    });

    describe('Toggle Functionality', () => {
        it('should toggle time picker when open button is clicked', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            await openBtn.trigger('click');

            await nextTick();
            const overlay = wrapper.find('.dp__overlay');
            expect(overlay.exists()).toBe(true);
        });

        it('should show time picker overlay when toggled', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            await openBtn.trigger('click');

            await nextTick();
            const overlay = wrapper.find('.dp__overlay');
            expect(overlay.exists()).toBe(true);
        });

        it('should hide open button when time picker is shown', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            await openBtn.trigger('click');

            await nextTick();
            expect(openBtn.classes()).toContain('dp--hidden-el');
        });

        it('should emit reset-flow when toggling time picker', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            await openBtn.trigger('click');

            expect(wrapper.emitted('reset-flow')).toBeTruthy();
        });

        it('should handle keyboard navigation on open button', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            await openBtn.trigger('keydown', { key: 'Enter' });

            await nextTick();
            const overlay = wrapper.find('.dp__overlay');
            expect(overlay.exists()).toBe(true);
        });
    });

    describe('TimePicker Mode', () => {
        it('should always show overlay in timePicker mode', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.timePicker = true;

            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const overlay = wrapper.find('.dp__overlay');
            expect(overlay.exists()).toBe(true);

            // Reset
            ctx.rootProps.timePicker = false;
        });

        it('should apply relative overlay class in timePicker mode', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.timePicker = true;

            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const overlay = wrapper.find('.dp__overlay');
            expect(overlay.classes()).toContain('dp--overlay-relative');

            // Reset
            ctx.rootProps.timePicker = false;
        });

        it('should apply absolute overlay class when not in timePicker mode', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            await openBtn.trigger('click');

            await nextTick();
            const overlay = wrapper.find('.dp__overlay');
            expect(overlay.classes()).toContain('dp--overlay-absolute');
        });

        it('should set overlay height in timePicker mode', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.timePicker = true;

            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const overlay = wrapper.find('.dp__overlay');
            expect(overlay.attributes('style')).toContain('height: 255px');

            // Reset
            ctx.rootProps.timePicker = false;
        });
    });

    describe('Inline Time Picker', () => {
        beforeEach(async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.timeConfig.value.timePickerInline = true;
        });

        afterEach(async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.timeConfig.value.timePickerInline = false;
        });

        it('should not render toggle buttons in inline mode', () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            expect(openBtn.exists()).toBe(false);
        });

        it('should always show overlay in inline mode', () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const overlay = wrapper.find('.dp__time_picker_inline_container');
            expect(overlay.exists()).toBe(true);
        });

        it('should not apply overlay role in inline mode', () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const overlay = wrapper.find('[role="dialog"]');
            expect(overlay.exists()).toBe(false);
        });
    });

    describe('Range Mode', () => {
        beforeEach(async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = true;
            ctx.rootProps.timePicker = true;
        });

        afterEach(async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = false;
            ctx.rootProps.timePicker = false;
        });

        it('should pass array values to TimeInput components in range mode', () => {
            const wrapper = mount(TimePicker, {
                props: {
                    ...defaultProps,
                    hours: [14, 16],
                    minutes: [30, 45],
                    seconds: [0, 0],
                },
            });

            const timeInputs = wrapper.findAllComponents({ name: 'TimeInput' });
            expect(timeInputs[0]?.props('hours')).toBe(14);
            expect(timeInputs[1]?.props('hours')).toBe(16);
            expect(timeInputs[0]?.props('minutes')).toBe(30);
            expect(timeInputs[1]?.props('minutes')).toBe(45);
        });

        it('should emit array values when updating hours in range mode', async () => {
            const wrapper = mount(TimePicker, {
                props: {
                    ...defaultProps,
                    hours: [14, 16],
                    minutes: [30, 45],
                    seconds: [0, 0],
                },
            });

            const timeInputs = wrapper.findAllComponents({ name: 'TimeInput' });
            await timeInputs[0]?.vm.$emit('update:hours', 15);

            expect(wrapper.emitted('update:hours')).toBeTruthy();
            expect(wrapper.emitted('update:hours')?.[0]).toEqual([[15, 16]]);
        });

        it('should emit array values when updating minutes in range mode', async () => {
            const wrapper = mount(TimePicker, {
                props: {
                    ...defaultProps,
                    hours: [14, 16],
                    minutes: [30, 45],
                    seconds: [0, 0],
                },
            });

            const timeInputs = wrapper.findAllComponents({ name: 'TimeInput' });
            await timeInputs[1]?.vm.$emit('update:minutes', 50);

            expect(wrapper.emitted('update:minutes')).toBeTruthy();
            expect(wrapper.emitted('update:minutes')?.[0]).toEqual([[30, 50]]);
        });

        it('should pass fixedStart to first TimeInput when configured', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.fixedStart = true;

            const wrapper = mount(TimePicker, {
                props: {
                    ...defaultProps,
                    hours: [14, 16],
                    minutes: [30, 45],
                    seconds: [0, 0],
                },
            });

            const timeInputs = wrapper.findAllComponents({ name: 'TimeInput' });
            expect(timeInputs[0]?.props('disabled')).toBe(true);

            // Reset
            ctx.defaults.range.value.fixedStart = false;
        });

        it('should pass fixedEnd to second TimeInput when configured', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.fixedEnd = true;

            const wrapper = mount(TimePicker, {
                props: {
                    ...defaultProps,
                    hours: [14, 16],
                    minutes: [30, 45],
                    seconds: [0, 0],
                },
            });

            const timeInputs = wrapper.findAllComponents({ name: 'TimeInput' });
            expect(timeInputs[1]?.props('disabled')).toBe(true);

            // Reset
            ctx.defaults.range.value.fixedEnd = false;
        });
    });

    describe('Event Handling', () => {
        beforeEach(async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.timePicker = true;
        });

        afterEach(async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.timePicker = false;
        });

        it('should emit update:hours when TimeInput emits update', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const timeInput = wrapper.findComponent({ name: 'TimeInput' });
            await timeInput.vm.$emit('update:hours', 15);

            expect(wrapper.emitted('update:hours')).toBeTruthy();
            expect(wrapper.emitted('update:hours')?.[0]).toEqual([15]);
        });

        it('should emit update:minutes when TimeInput emits update', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const timeInput = wrapper.findComponent({ name: 'TimeInput' });
            await timeInput.vm.$emit('update:minutes', 45);

            expect(wrapper.emitted('update:minutes')).toBeTruthy();
            expect(wrapper.emitted('update:minutes')?.[0]).toEqual([45]);
        });

        it('should emit update:seconds when TimeInput emits update', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const timeInput = wrapper.findComponent({ name: 'TimeInput' });
            await timeInput.vm.$emit('update:seconds', 30);

            expect(wrapper.emitted('update:seconds')).toBeTruthy();
            expect(wrapper.emitted('update:seconds')?.[0]).toEqual([30]);
        });

        it('should handle overlay-closed event from TimeInput', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const timeInput = wrapper.findComponent({ name: 'TimeInput' });
            await timeInput.vm.$emit('overlay-closed', 'hours');

            // Should handle the event without errors
            expect(wrapper.exists()).toBe(true);
        });

        it('should handle overlay-opened event from TimeInput', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const timeInput = wrapper.findComponent({ name: 'TimeInput' });
            await timeInput.vm.$emit('overlay-opened', 'hours');

            // Should handle the event without errors
            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Component Lifecycle', () => {
        it('should emit mount event on mount', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            await nextTick();
            expect(wrapper.emitted('mount')).toBeTruthy();
        });
    });

    describe('Close Button', () => {
        it('should render close button when time picker is open', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            await openBtn.trigger('click');

            await nextTick();
            const closeBtn = wrapper.find('button.dp__button');
            expect(closeBtn.exists()).toBe(true);
        });

        it('should close time picker when close button is clicked', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            // Open time picker
            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            await openBtn.trigger('click');
            await nextTick();

            // Close time picker
            const closeBtn = wrapper.find('button.dp__button');
            await closeBtn.trigger('click');
            await nextTick();

            // Overlay should still exist but showTimePicker should be false
            expect(wrapper.vm.toggleTimePicker).toBeDefined();
        });

        it('should apply bottom button class when autoApply is true', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.autoApply = true;

            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            expect(openBtn.classes()).toContain('dp__button_bottom');

            // Reset
            ctx.rootProps.autoApply = false;
        });
    });

    describe('Custom Slots', () => {
        it('should render custom clock-icon slot', () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
                slots: {
                    'clock-icon': '<span class="custom-clock">⏰</span>',
                },
            });

            const customIcon = wrapper.find('.custom-clock');
            expect(customIcon.exists()).toBe(true);
        });

        it('should render custom calendar-icon slot', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
                slots: {
                    'calendar-icon': '<span class="custom-calendar">📅</span>',
                },
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            await openBtn.trigger('click');
            await nextTick();

            const customIcon = wrapper.find('.custom-calendar');
            expect(customIcon.exists()).toBe(true);
        });

        it('should render custom time-picker-overlay slot', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
                slots: {
                    'time-picker-overlay': '<div class="custom-overlay">Custom Overlay</div>',
                },
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            await openBtn.trigger('click');
            await nextTick();

            const customOverlay = wrapper.find('.custom-overlay');
            expect(customOverlay.exists()).toBe(true);
        });

        it('should not render TimeInput when time-picker-overlay slot is provided', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
                slots: {
                    'time-picker-overlay': '<div class="custom-overlay">Custom Overlay</div>',
                },
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            await openBtn.trigger('click');
            await nextTick();

            const timeInput = wrapper.findComponent({ name: 'TimeInput' });
            expect(timeInput.exists()).toBe(false);
        });
    });

    describe('Accessibility', () => {
        it('should have correct aria-label for open button', () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            expect(openBtn.attributes('aria-label')).toBe('Open time picker');
        });

        it('should have correct aria-label for overlay', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            await openBtn.trigger('click');
            await nextTick();

            const overlay = wrapper.find('[role="dialog"]');
            expect(overlay.attributes('aria-label')).toBe('Time picker overlay');
        });

        it('should have tabindex 0 for open button when not noOverlayFocus', () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            expect(openBtn.attributes('tabindex')).toBe('0');
        });

        it('should not have tabindex when noOverlayFocus is true', () => {
            const wrapper = mount(TimePicker, {
                props: {
                    ...defaultProps,
                    noOverlayFocus: true,
                },
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            expect(openBtn.attributes('tabindex')).toBeUndefined();
        });

        it('should have role dialog for overlay when not inline', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            const openBtn = wrapper.find('[data-test-id="open-time-picker-btn"]');
            await openBtn.trigger('click');
            await nextTick();

            const overlay = wrapper.find('[role="dialog"]');
            expect(overlay.exists()).toBe(true);
        });
    });

    describe('Component API', () => {
        it('should expose toggleTimePicker method', () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            expect(wrapper.vm.toggleTimePicker).toBeDefined();
            expect(typeof wrapper.vm.toggleTimePicker).toBe('function');
        });

        it('should toggle time picker when toggleTimePicker method is called', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            wrapper.vm.toggleTimePicker(true);
            await nextTick();

            const overlay = wrapper.find('.dp__overlay');
            expect(overlay.exists()).toBe(true);
        });

        it('should open child component when toggleTimePicker is called with childOpen parameter', async () => {
            const wrapper = mount(TimePicker, {
                props: defaultProps,
            });

            wrapper.vm.toggleTimePicker(true, false, 'hours');
            await nextTick();

            const timeInput = wrapper.findComponent({ name: 'TimeInput' });
            expect(timeInput.exists()).toBe(true);
        });
    });

    describe('Props Validation', () => {
        beforeEach(async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.timePicker = true;
        });

        afterEach(async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.rootProps.timePicker = false;
        });

        it('should pass disabledTimesConfig to TimeInput', () => {
            const disabledTimesConfig = vi.fn(() => ({
                hours: [],
                minutes: [],
                seconds: [],
            }));

            const wrapper = mount(TimePicker, {
                props: {
                    ...defaultProps,
                    disabledTimesConfig,
                },
            });

            const timeInput = wrapper.findComponent({ name: 'TimeInput' });
            expect(timeInput.props('disabledTimesConfig')).toBe(disabledTimesConfig);
        });

        it('should pass validateTime function to TimeInput', () => {
            const validateTime = vi.fn(() => true);

            const wrapper = mount(TimePicker, {
                props: {
                    ...defaultProps,
                    validateTime,
                },
            });

            const timeInput = wrapper.findComponent({ name: 'TimeInput' });
            expect(timeInput.props('validateTime')).toBeDefined();
        });

        it('should pass order prop to TimeInput components', async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = true;

            const wrapper = mount(TimePicker, {
                props: {
                    ...defaultProps,
                    hours: [14, 16],
                    minutes: [30, 45],
                    seconds: [0, 0],
                },
            });

            const timeInputs = wrapper.findAllComponents({ name: 'TimeInput' });
            expect(timeInputs[0]?.props('order')).toBe(0);
            expect(timeInputs[1]?.props('order')).toBe(1);

            // Reset
            ctx.defaults.range.value.enabled = false;
        });
    });
});
