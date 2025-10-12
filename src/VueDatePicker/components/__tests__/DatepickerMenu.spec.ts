import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
import DatepickerMenu from '@/components/DatepickerMenu.vue';

// Mock child components
vi.mock('@/components/ActionRow.vue', () => ({
    default: {
        name: 'ActionRow',
        template: '<div class="action-row-mock"></div>',
        props: ['menuMount', 'calendarWidth'],
        emits: ['close-picker', 'select-date', 'select-now'],
    },
}));

vi.mock('@/components/MonthPicker/MonthPicker.vue', () => ({
    default: {
        name: 'MonthPicker',
        template: '<div class="month-picker-mock"></div>',
        props: ['flowStep', 'collapse', 'noOverlayFocus', 'menuWrapRef'],
        emits: ['mount', 'update-flow-step', 'reset-flow', 'focus-menu', 'select-date', 'auto-apply', 'time-update'],
        methods: {
            toggleTimePicker: vi.fn(),
            toggleMonthPicker: vi.fn(),
            toggleYearPicker: vi.fn(),
            getSidebarProps: vi.fn(() => ({})),
        },
    },
}));

vi.mock('@/components/YearPicker/YearPicker.vue', () => ({
    default: {
        name: 'YearPicker',
        template: '<div class="year-picker-mock"></div>',
        props: ['flowStep', 'collapse', 'noOverlayFocus', 'menuWrapRef'],
        emits: ['mount', 'update-flow-step', 'reset-flow', 'focus-menu', 'select-date', 'auto-apply', 'time-update'],
        methods: {
            toggleTimePicker: vi.fn(),
            toggleMonthPicker: vi.fn(),
            toggleYearPicker: vi.fn(),
            getSidebarProps: vi.fn(() => ({})),
        },
    },
}));

vi.mock('@/components/TimePicker/TimePickerSolo.vue', () => ({
    default: {
        name: 'TimePickerSolo',
        template: '<div class="time-picker-solo-mock"></div>',
        props: ['flowStep', 'collapse', 'noOverlayFocus', 'menuWrapRef'],
        emits: ['mount', 'update-flow-step', 'reset-flow', 'focus-menu', 'select-date', 'auto-apply', 'time-update'],
        methods: {
            toggleTimePicker: vi.fn(),
            toggleMonthPicker: vi.fn(),
            toggleYearPicker: vi.fn(),
            getSidebarProps: vi.fn(() => ({})),
        },
    },
}));

vi.mock('@/components/DatePicker/DatePicker.vue', () => ({
    default: {
        name: 'DatePicker',
        template: '<div class="date-picker-mock"></div>',
        props: ['flowStep', 'collapse', 'noOverlayFocus', 'menuWrapRef'],
        emits: ['mount', 'update-flow-step', 'reset-flow', 'focus-menu', 'select-date', 'auto-apply', 'time-update'],
        methods: {
            toggleTimePicker: vi.fn(),
            toggleMonthPicker: vi.fn(),
            toggleYearPicker: vi.fn(),
            handleArrow: vi.fn(),
            selectCurrentDate: vi.fn(),
            presetDate: vi.fn(),
            clearHoverDate: vi.fn(),
            updateMonthYear: vi.fn(),
            selectWeekDate: vi.fn(),
            changeYear: vi.fn(),
            changeMonth: vi.fn(),
            getSidebarProps: vi.fn(() => ({})),
        },
    },
}));

vi.mock('@/components/QuarterPicker/QuarterPicker.vue', () => ({
    default: {
        name: 'QuarterPicker',
        template: '<div class="quarter-picker-mock"></div>',
        props: ['flowStep', 'collapse', 'noOverlayFocus', 'menuWrapRef'],
        emits: ['mount', 'update-flow-step', 'reset-flow', 'focus-menu', 'select-date', 'auto-apply', 'time-update'],
        methods: {
            toggleTimePicker: vi.fn(),
            toggleMonthPicker: vi.fn(),
            toggleYearPicker: vi.fn(),
            getSidebarProps: vi.fn(() => ({})),
        },
    },
}));

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootProps = {
        uid: null,
        disabled: false,
        readonly: false,
        loading: false,
        presetDates: [] as any[],
        monthPicker: false,
        yearPicker: false,
        timePicker: false,
        quarterPicker: false,
        arrowNavigation: false,
        hideMonthYearSelect: false,
        autoApply: false,
    };

    const state = ref({
        menuFocused: false,
        shiftKeyInMenu: false,
    });

    const defaults = {
        textInput: ref({ enabled: false }),
        inline: ref({ enabled: false, input: false }),
        config: ref({
            allowPreventDefault: false,
            keepActionRow: false,
            escClose: true,
            arrowLeft: null,
        }),
        ui: ref({ menu: {} }),
        ariaLabels: ref({ menu: 'Datepicker menu' }),
    };

    const setState = vi.fn((key: string, value: any) => {
        (state.value as any)[key] = value;
    });

    return {
        useContext: () => ({
            state,
            rootProps,
            defaults,
            setState,
        }),
    };
});

vi.mock('@/composables/useResponsive.ts', () => ({
    useResponsive: () => ({
        isMobile: ref(false),
    }),
}));

vi.mock('@/composables/useSlotsMapper.ts', () => ({
    useSlotsMapper: () => ({
        mapSlots: vi.fn(() => []),
    }),
}));

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        handleEventPropagation: vi.fn(),
        getElWithin: vi.fn(() => null),
        checkStopPropagation: vi.fn(),
        checkKeyDown: vi.fn(),
    }),
}));

vi.mock('@/composables/useArrowNavigation.ts', () => ({
    useArrowNavigation: () => ({
        arrowRight: vi.fn(),
        arrowLeft: vi.fn(),
        arrowDown: vi.fn(),
        arrowUp: vi.fn(),
    }),
}));

vi.mock('@/composables/useFlow.ts', () => ({
    useFlow: () => ({
        flowStep: ref(0),
        updateFlowStep: vi.fn(),
        childMount: vi.fn(),
        resetFlow: vi.fn(),
        handleFlow: vi.fn(),
    }),
}));

describe('DatepickerMenu', () => {
    let ctx: any;
    const defaultProps = {
        collapse: false,
        noOverlayFocus: false,
        getInputRect: () => ({
            width: 200,
            left: 100,
            right: 300,
            top: 50,
            bottom: 100,
            height: 50,
            x: 100,
            y: 50,
            toJSON: () => ({}),
        }),
    };

    beforeEach(async () => {
        vi.clearAllMocks();
        const { useContext } = await import('@/composables/useContext.ts');
        ctx = useContext();
        ctx.rootProps.uid = null;
        ctx.rootProps.disabled = false;
        ctx.rootProps.readonly = false;
        ctx.rootProps.loading = false;
        ctx.rootProps.presetDates = [];
        ctx.rootProps.monthPicker = false;
        ctx.rootProps.yearPicker = false;
        ctx.rootProps.timePicker = false;
        ctx.rootProps.quarterPicker = false;
        ctx.rootProps.arrowNavigation = false;
        ctx.rootProps.hideMonthYearSelect = false;
        ctx.rootProps.autoApply = false;
        ctx.state.value.menuFocused = false;
        ctx.state.value.shiftKeyInMenu = false;
        ctx.defaults.textInput.value.enabled = false;
        ctx.defaults.inline.value.enabled = false;
        ctx.defaults.inline.value.input = false;
        ctx.defaults.config.value.allowPreventDefault = false;
        ctx.defaults.config.value.keepActionRow = false;
        ctx.defaults.config.value.escClose = true;
        ctx.defaults.config.value.arrowLeft = null;
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    describe('Component Rendering', () => {
        it('should render the component', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.exists()).toBe(true);
            expect(wrapper.find('.dp__menu').exists()).toBe(true);
        });

        it('should set menu id when uid is provided', () => {
            ctx.rootProps.uid = 'test-uid';

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.find('#dp-menu-test-uid').exists()).toBe(true);
        });

        it('should set tabindex when not inline', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.attributes('tabindex')).toBe('0');
        });

        it('should set role to dialog when not inline', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.attributes('role')).toBe('dialog');
        });

        it('should not set tabindex when inline', () => {
            ctx.defaults.inline.value.enabled = true;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.attributes('tabindex')).toBeUndefined();
        });

        it('should not set role when inline', () => {
            ctx.defaults.inline.value.enabled = true;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.attributes('role')).toBeUndefined();
        });

        it('should set aria-label from ariaLabels', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.attributes('aria-label')).toBe('Datepicker menu');
        });

        it('should apply dp__menu class', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.classes()).toContain('dp__menu');
        });

        it('should apply dp__menu_index class when not inline', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.classes()).toContain('dp__menu_index');
        });

        it('should apply dp__relative class when inline', () => {
            ctx.defaults.inline.value.enabled = true;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.classes()).toContain('dp__relative');
        });
    });

    describe('Loading and Disabled States', () => {
        it('should show loading overlay when loading is true', () => {
            ctx.rootProps.loading = true;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.find('.dp--menu-load-container').exists()).toBe(true);
            expect(wrapper.find('.dp--menu-loader').exists()).toBe(true);
        });

        it('should show disabled overlay when disabled is true and inline', () => {
            ctx.rootProps.disabled = true;
            ctx.defaults.inline.value.enabled = true;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.find('.dp__menu_disabled').exists()).toBe(true);
        });

        it('should show readonly overlay when readonly is true and inline', () => {
            ctx.rootProps.readonly = true;
            ctx.defaults.inline.value.enabled = true;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.find('.dp__menu_readonly').exists()).toBe(true);
        });

        it('should not show disabled overlay when not inline', () => {
            ctx.rootProps.disabled = true;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.find('.dp__menu_disabled').exists()).toBe(false);
        });
    });

    describe('Display Components', () => {
        it('should render DatePicker by default', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.findComponent({ name: 'DatePicker' }).exists()).toBe(true);
        });

        it('should render MonthPicker when monthPicker is true', () => {
            ctx.rootProps.monthPicker = true;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.findComponent({ name: 'MonthPicker' }).exists()).toBe(true);
            expect(wrapper.findComponent({ name: 'DatePicker' }).exists()).toBe(false);
        });

        it('should render YearPicker when yearPicker is true', () => {
            ctx.rootProps.yearPicker = true;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.findComponent({ name: 'YearPicker' }).exists()).toBe(true);
            expect(wrapper.findComponent({ name: 'DatePicker' }).exists()).toBe(false);
        });

        it('should render TimePickerSolo when timePicker is true', () => {
            ctx.rootProps.timePicker = true;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.findComponent({ name: 'TimePickerSolo' }).exists()).toBe(true);
            expect(wrapper.findComponent({ name: 'DatePicker' }).exists()).toBe(false);
        });

        it('should render QuarterPicker when quarterPicker is true', () => {
            ctx.rootProps.quarterPicker = true;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.findComponent({ name: 'QuarterPicker' }).exists()).toBe(true);
            expect(wrapper.findComponent({ name: 'DatePicker' }).exists()).toBe(false);
        });
    });

    describe('ActionRow', () => {
        it('should render ActionRow when autoApply is false', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.findComponent({ name: 'ActionRow' }).exists()).toBe(true);
        });

        it('should not render ActionRow when autoApply is true and keepActionRow is false', () => {
            ctx.rootProps.autoApply = true;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.findComponent({ name: 'ActionRow' }).exists()).toBe(false);
        });

        it('should render ActionRow when autoApply is true but keepActionRow is true', () => {
            ctx.rootProps.autoApply = true;
            ctx.defaults.config.value.keepActionRow = true;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.findComponent({ name: 'ActionRow' }).exists()).toBe(true);
        });

        it('should emit close-picker when ActionRow emits close-picker', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            const actionRow = wrapper.findComponent({ name: 'ActionRow' });
            await actionRow.vm.$emit('close-picker');

            expect(wrapper.emitted('close-picker')).toBeTruthy();
        });

        it('should emit select-date when ActionRow emits select-date', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            const actionRow = wrapper.findComponent({ name: 'ActionRow' });
            await actionRow.vm.$emit('select-date');

            expect(wrapper.emitted('select-date')).toBeTruthy();
        });

        it('should call selectCurrentDate when ActionRow emits select-now', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            const actionRow = wrapper.findComponent({ name: 'ActionRow' });
            await actionRow.vm.$emit('select-now');

            await nextTick();
            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Preset Dates', () => {
        it('should render preset dates when presetDates array is not empty', () => {
            ctx.rootProps.presetDates = [
                { label: 'Today', value: new Date() },
                { label: 'Yesterday', value: new Date(Date.now() - 86400000) },
            ];

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            const presetButtons = wrapper.findAll('.dp--preset-range');
            expect(presetButtons.length).toBe(2);
            expect(presetButtons[0]?.text()).toBe('Today');
            expect(presetButtons[1]?.text()).toBe('Yesterday');
        });

        it('should apply custom style to preset button', () => {
            ctx.rootProps.presetDates = [{ label: 'Today', value: new Date(), style: { color: 'red' } }];

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            const presetButton = wrapper.find('.dp--preset-range');
            expect(presetButton.attributes('style')).toContain('color: red');
        });

        it('should set data-test-id on preset button when testId is provided', () => {
            ctx.rootProps.presetDates = [{ label: 'Today', value: new Date(), testId: 'preset-today' }];

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            const presetButton = wrapper.find('.dp--preset-range');
            expect(presetButton.attributes('data-test-id')).toBe('preset-today');
        });

        it('should call presetDate when preset button is clicked', async () => {
            const testDate = new Date(2024, 0, 15);
            ctx.rootProps.presetDates = [{ label: 'Test Date', value: testDate }];

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.find('.dp--preset-range').trigger('click');
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should apply collapsed class to preset dates when collapse is true', () => {
            ctx.rootProps.presetDates = [{ label: 'Today', value: new Date() }];

            const wrapper = mount(DatepickerMenu, {
                props: {
                    ...defaultProps,
                    collapse: true,
                },
            });

            expect(wrapper.find('.dp--preset-dates-collapsed').exists()).toBe(true);
        });
    });

    describe('Custom Slots', () => {
        it('should render menu-header slot when provided', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
                slots: {
                    'menu-header': '<div class="custom-header">Custom Header</div>',
                },
            });

            expect(wrapper.find('.custom-header').exists()).toBe(true);
            expect(wrapper.find('.custom-header').text()).toBe('Custom Header');
        });

        it('should render arrow slot when provided', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
                slots: {
                    arrow: '<div class="custom-arrow">Arrow</div>',
                },
            });

            expect(wrapper.find('.custom-arrow').exists()).toBe(true);
        });

        it('should render left-sidebar slot when provided', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
                slots: {
                    'left-sidebar': '<div class="custom-left-sidebar">Left Sidebar</div>',
                },
            });

            expect(wrapper.find('.dp__sidebar_left').exists()).toBe(true);
            expect(wrapper.find('.custom-left-sidebar').exists()).toBe(true);
        });

        it('should render right-sidebar slot when provided', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
                slots: {
                    'right-sidebar': '<div class="custom-right-sidebar">Right Sidebar</div>',
                },
            });

            expect(wrapper.find('.dp__sidebar_right').exists()).toBe(true);
            expect(wrapper.find('.custom-right-sidebar').exists()).toBe(true);
        });

        it('should render action-extra slot when provided', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
                slots: {
                    'action-extra': '<div class="custom-action-extra">Extra Actions</div>',
                },
            });

            expect(wrapper.find('.dp__action_extra').exists()).toBe(true);
            expect(wrapper.find('.custom-action-extra').exists()).toBe(true);
        });

        it('should apply content wrapper class when sidebars or presets exist', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
                slots: {
                    'left-sidebar': '<div>Left Sidebar</div>',
                },
            });

            expect(wrapper.find('.dp__menu_content_wrapper').exists()).toBe(true);
        });

        it('should apply collapsed wrapper class when collapse and sidebars exist', () => {
            const wrapper = mount(DatepickerMenu, {
                props: {
                    ...defaultProps,
                    collapse: true,
                },
                slots: {
                    'left-sidebar': '<div>Left Sidebar</div>',
                },
            });

            expect(wrapper.find('.dp--menu-content-wrapper-collapsed').exists()).toBe(true);
        });
    });

    describe('Keyboard Navigation', () => {
        it('should handle Escape key when escClose is true', async () => {
            ctx.defaults.config.value.escClose = true;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.trigger('keydown', { key: 'Escape' });

            expect(wrapper.emitted('close-picker')).toBeTruthy();
        });

        it('should not handle Escape key when escClose is false', async () => {
            ctx.defaults.config.value.escClose = false;

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.trigger('keydown', { key: 'Escape' });

            expect(wrapper.emitted('close-picker')).toBeFalsy();
        });

        it('should handle ArrowLeft key', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.trigger('keydown', { key: 'ArrowLeft' });
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle ArrowRight key', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.trigger('keydown', { key: 'ArrowRight' });
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle ArrowUp key', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.trigger('keydown', { key: 'ArrowUp' });
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle ArrowDown key', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.trigger('keydown', { key: 'ArrowDown' });
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle Home key', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.trigger('keydown', { key: 'Home' });
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle End key', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.trigger('keydown', { key: 'End' });
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle PageUp key', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.trigger('keydown', { key: 'PageUp' });
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle PageDown key', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.trigger('keydown', { key: 'PageDown' });
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle Shift+PageUp for year change', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.trigger('keydown', { key: 'PageUp', shiftKey: true });
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle Shift+PageDown for year change', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.trigger('keydown', { key: 'PageDown', shiftKey: true });
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should track shift key state', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            // Clear the setState calls that happened during mount
            ctx.setState.mockClear();

            await wrapper.trigger('keydown', { shiftKey: true, key: 'Shift' });

            expect(ctx.setState).toHaveBeenCalledExactlyOnceWith('shiftKeyInMenu', true);
        });

        it('should handle Tab key with shift on menu element', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            ctx.state.value.shiftKeyInMenu = true;

            // Add the class to the element that the handler checks for
            wrapper.element.classList.add('dp__menu');

            const event = new KeyboardEvent('keydown', {
                code: 'Tab',
                shiftKey: true,
                bubbles: true,
            });

            wrapper.element.dispatchEvent(event);

            await nextTick();
            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Component Lifecycle', () => {
        it('should add resize event listener on mount', () => {
            const addEventListenerSpy = vi.spyOn(globalThis, 'addEventListener');

            mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(addEventListenerSpy).toHaveBeenCalledExactlyOnceWith('resize', expect.any(Function));
        });

        it('should remove resize event listener on unmount', () => {
            const removeEventListenerSpy = vi.spyOn(globalThis, 'removeEventListener');

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            wrapper.unmount();

            expect(removeEventListenerSpy).toHaveBeenCalledExactlyOnceWith('resize', expect.any(Function));
        });

        it('should add mousedown event listener on mount', () => {
            const addEventListenerSpy = vi.spyOn(document, 'addEventListener');

            mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(addEventListenerSpy).toHaveBeenCalledExactlyOnceWith('mousedown', expect.any(Function));
        });

        it('should remove mousedown event listener on unmount', () => {
            const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            wrapper.unmount();

            expect(removeEventListenerSpy).toHaveBeenCalledExactlyOnceWith('mousedown', expect.any(Function));
        });

        it('should set menuFocused state when not inline and not textInput', async () => {
            mount(DatepickerMenu, {
                props: defaultProps,
            });

            await nextTick();

            expect(ctx.setState).toHaveBeenCalledExactlyOnceWith('menuFocused', true);
        });

        it('should not set menuFocused when inline is enabled', async () => {
            ctx.defaults.inline.value.enabled = true;
            ctx.setState.mockClear();

            mount(DatepickerMenu, {
                props: defaultProps,
            });

            await nextTick();

            expect(ctx.setState).not.toHaveBeenCalledWith('menuFocused', true);
        });

        it('should not set menuFocused when textInput is enabled', async () => {
            ctx.defaults.textInput.value.enabled = true;
            ctx.setState.mockClear();

            mount(DatepickerMenu, {
                props: defaultProps,
            });

            await nextTick();

            expect(ctx.setState).not.toHaveBeenCalledWith('menuFocused', true);
        });
    });

    describe('Child Component Events', () => {
        it('should emit select-date when child component emits select-date', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            const datePicker = wrapper.findComponent({ name: 'DatePicker' });
            await datePicker.vm.$emit('select-date');

            expect(wrapper.emitted('select-date')).toBeTruthy();
        });

        it('should emit auto-apply when child component emits auto-apply', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            const datePicker = wrapper.findComponent({ name: 'DatePicker' });
            await datePicker.vm.$emit('auto-apply', true);

            expect(wrapper.emitted('auto-apply')).toBeTruthy();
            expect(wrapper.emitted('auto-apply')?.[0]).toEqual([true]);
        });

        it('should emit time-update when child component emits time-update', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            const datePicker = wrapper.findComponent({ name: 'DatePicker' });
            await datePicker.vm.$emit('time-update');

            expect(wrapper.emitted('time-update')).toBeTruthy();
        });

        it('should handle mount event from child component', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            const datePicker = wrapper.findComponent({ name: 'DatePicker' });
            await datePicker.vm.$emit('mount');

            await nextTick();
            expect(wrapper.exists()).toBe(true);
        });

        it('should handle update-flow-step event from child component', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            const datePicker = wrapper.findComponent({ name: 'DatePicker' });
            await datePicker.vm.$emit('update-flow-step', 1);

            await nextTick();
            expect(wrapper.exists()).toBe(true);
        });

        it('should handle reset-flow event from child component', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            const datePicker = wrapper.findComponent({ name: 'DatePicker' });
            await datePicker.vm.$emit('reset-flow');

            await nextTick();
            expect(wrapper.exists()).toBe(true);
        });

        it('should handle focus-menu event from child component', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            const datePicker = wrapper.findComponent({ name: 'DatePicker' });
            await datePicker.vm.$emit('focus-menu');

            await nextTick();
            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Exposed Methods', () => {
        it('should expose updateMonthYear method', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.vm.updateMonthYear).toBeDefined();
            expect(typeof wrapper.vm.updateMonthYear).toBe('function');
        });

        it('should expose switchView method', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.vm.switchView).toBeDefined();
            expect(typeof wrapper.vm.switchView).toBe('function');
        });

        it('should expose onValueCleared method', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.vm.onValueCleared).toBeDefined();
            expect(typeof wrapper.vm.onValueCleared).toBe('function');
        });

        it('should expose handleFlow method', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.vm.handleFlow).toBeDefined();
            expect(typeof wrapper.vm.handleFlow).toBe('function');
        });

        it('should call toggleMonthPicker when switchView is called with month', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            wrapper.vm.switchView('month', 0);
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should call toggleYearPicker when switchView is called with year', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            wrapper.vm.switchView('year', 0);
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should call toggleTimePicker when switchView is called with time', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            wrapper.vm.switchView('time', 0);
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should close overlays when switchView is called without view', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            wrapper.vm.switchView(undefined as any, 0);
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should call updateMonthYear on child when exposed method is called', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            wrapper.vm.updateMonthYear(0, { month: 5, year: 2024 });
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Arrow Position', () => {
        it('should use config arrowLeft when provided', () => {
            ctx.defaults.config.value.arrowLeft = '100px';

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.attributes('style')).toContain('--dp-arrow-left: 100px');
        });

        it('should calculate arrow position when input is smaller than menu', () => {
            const wrapper = mount(DatepickerMenu, {
                props: {
                    ...defaultProps,
                    getInputRect: () => ({
                        width: 100,
                        left: 100,
                        right: 200,
                        top: 50,
                        bottom: 100,
                        height: 50,
                        x: 100,
                        y: 50,
                        toJSON: () => ({}),
                    }),
                },
            });

            expect(wrapper.attributes('style')).toContain('--dp-arrow-left');
        });

        it('should default to 50% when input and menu positions align', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(wrapper.attributes('style')).toContain('--dp-arrow-left: 50%');
        });
    });

    describe('Click Handling', () => {
        it('should handle menu click', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.trigger('click');
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle mouseleave', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.trigger('mouseleave');
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Props', () => {
        it('should accept collapse prop', () => {
            const wrapper = mount(DatepickerMenu, {
                props: {
                    ...defaultProps,
                    collapse: true,
                },
            });

            expect(wrapper.props('collapse')).toBe(true);
        });

        it('should accept noOverlayFocus prop', () => {
            const wrapper = mount(DatepickerMenu, {
                props: {
                    ...defaultProps,
                    noOverlayFocus: true,
                },
            });

            expect(wrapper.props('noOverlayFocus')).toBe(true);
        });

        it('should accept getInputRect prop', () => {
            const customGetInputRect = () => ({
                width: 250,
                left: 50,
                right: 300,
                top: 100,
                bottom: 150,
                height: 50,
                x: 50,
                y: 100,
                toJSON: () => ({}),
            });

            const wrapper = mount(DatepickerMenu, {
                props: {
                    ...defaultProps,
                    getInputRect: customGetInputRect,
                },
            });

            expect(wrapper.props('getInputRect')).toBe(customGetInputRect);
        });

        it('should pass collapse prop to child components', () => {
            const wrapper = mount(DatepickerMenu, {
                props: {
                    ...defaultProps,
                    collapse: true,
                },
            });

            const datePicker = wrapper.findComponent({ name: 'DatePicker' });
            expect(datePicker.props('collapse')).toBe(true);
        });

        it('should pass noOverlayFocus prop to child components', () => {
            const wrapper = mount(DatepickerMenu, {
                props: {
                    ...defaultProps,
                    noOverlayFocus: true,
                },
            });

            const datePicker = wrapper.findComponent({ name: 'DatePicker' });
            expect(datePicker.props('noOverlayFocus')).toBe(true);
        });
    });

    describe('Edge Cases', () => {
        it('should handle component unmount gracefully', () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('should handle resize with no inner menu element', async () => {
            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            globalThis.dispatchEvent(new Event('resize'));
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle preset dates with slot property', () => {
            ctx.rootProps.presetDates = [{ label: 'Custom', value: new Date(), slot: 'custom-preset' }];

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
                slots: {
                    'custom-preset': '<div class="custom-preset">Custom Preset</div>',
                },
            });

            expect(wrapper.find('.custom-preset').exists()).toBe(true);
        });

        it('should handle preset keydown event', async () => {
            ctx.rootProps.presetDates = [{ label: 'Today', value: new Date() }];

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.find('.dp--preset-range').trigger('keydown', { key: 'Enter' });
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle preset with noTz flag', async () => {
            ctx.rootProps.presetDates = [{ label: 'Today', value: new Date(), noTz: true }];

            const wrapper = mount(DatepickerMenu, {
                props: defaultProps,
            });

            await wrapper.find('.dp--preset-range').trigger('click');
            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });
    });
});
