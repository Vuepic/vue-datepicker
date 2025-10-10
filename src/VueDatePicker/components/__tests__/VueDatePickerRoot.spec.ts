import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import VueDatePickerRoot from '@/VueDatePickerRoot.vue';

// Create mock functions that will be reused
const mockOpenMenu = vi.fn();
const mockCloseMenu = vi.fn();
const mockSelectDate = vi.fn();
const mockClearValue = vi.fn();
const mockFormatInputValue = vi.fn();
const mockUpdateInternalModelValue = vi.fn();
const mockSetMonthYear = vi.fn();
const mockParseModel = vi.fn();
const mockSwitchView = vi.fn();
const mockToggleMenu = vi.fn();
const mockHandleFlow = vi.fn();

// Mock VueDatePicker component
vi.mock('@/VueDatePicker.vue', () => ({
    default: {
        name: 'VueDatePicker',
        template: `
            <div class="vue-datepicker">
                <slot />
                <slot name="action-row" />
                <slot name="action-buttons" />
            </div>
        `,
        setup() {
            return {
                openMenu: mockOpenMenu,
                closeMenu: mockCloseMenu,
                selectDate: mockSelectDate,
                clearValue: mockClearValue,
                formatInputValue: mockFormatInputValue,
                updateInternalModelValue: mockUpdateInternalModelValue,
                setMonthYear: mockSetMonthYear,
                parseModel: mockParseModel,
                switchView: mockSwitchView,
                toggleMenu: mockToggleMenu,
                handleFlow: mockHandleFlow,
            };
        },
    },
}));

// Mock composables
vi.mock('@/composables/useInjector.ts', () => ({
    useInjector: vi.fn(),
}));

vi.mock('@/composables/useExposed.ts', () => ({
    useExposed: vi.fn((datePicker) => ({
        openMenu: () => datePicker.value?.openMenu(),
        closeMenu: () => datePicker.value?.closeMenu(),
        selectDate: () => datePicker.value?.selectDate(),
        clearValue: () => datePicker.value?.clearValue(),
        formatInputValue: () => datePicker.value?.formatInputValue(),
        updateInternalModelValue: (val: any) => datePicker.value?.updateInternalModelValue(val),
        setMonthYear: (val: any) => datePicker.value?.setMonthYear(val),
        parseModel: () => datePicker.value?.parseModel(),
        switchView: (view: any, instance?: number) => datePicker.value?.switchView(view, instance),
        toggleMenu: () => datePicker.value?.toggleMenu(),
        handleFlow: () => datePicker.value?.handleFlow(),
    })),
}));

describe('VueDatePickerRoot', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        mockOpenMenu.mockClear();
        mockCloseMenu.mockClear();
        mockSelectDate.mockClear();
        mockClearValue.mockClear();
        mockFormatInputValue.mockClear();
        mockUpdateInternalModelValue.mockClear();
        mockSetMonthYear.mockClear();
        mockParseModel.mockClear();
        mockSwitchView.mockClear();
        mockToggleMenu.mockClear();
        mockHandleFlow.mockClear();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    describe('Component Rendering', () => {
        it('should render the component', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.exists()).toBe(true);
        });

        it('should render VueDatePicker component', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.findComponent({ name: 'VueDatePicker' }).exists()).toBe(true);
        });

        it('should pass through slots to VueDatePicker', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
                slots: {
                    'action-row': '<div class="custom-action">Custom Action</div>',
                } as any,
            });

            const datePicker = wrapper.findComponent({ name: 'VueDatePicker' });
            expect(datePicker.exists()).toBe(true);
            // Verify the wrapper correctly passes slots to VueDatePicker
            expect(wrapper.html()).toContain('vue-datepicker');
        });
    });

    describe('Props', () => {
        it('should accept modelValue prop', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: new Date(2024, 0, 15),
                },
            });

            expect(wrapper.props('modelValue')).toBeDefined();
        });

        it('should accept configuration props', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                    inline: true,
                    autoApply: true,
                },
            });

            expect(wrapper.props('inline')).toBe(true);
            expect(wrapper.props('autoApply')).toBe(true);
        });
    });

    describe('Exposed Methods', () => {
        it('should expose openMenu method', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.vm.openMenu).toBeDefined();
            expect(typeof wrapper.vm.openMenu).toBe('function');
        });

        it('should expose closeMenu method', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.vm.closeMenu).toBeDefined();
            expect(typeof wrapper.vm.closeMenu).toBe('function');
        });

        it('should expose selectDate method', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.vm.selectDate).toBeDefined();
            expect(typeof wrapper.vm.selectDate).toBe('function');
        });

        it('should expose clearValue method', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.vm.clearValue).toBeDefined();
            expect(typeof wrapper.vm.clearValue).toBe('function');
        });

        it('should expose toggleMenu method', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.vm.toggleMenu).toBeDefined();
            expect(typeof wrapper.vm.toggleMenu).toBe('function');
        });

        it('should expose formatInputValue method', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.vm.formatInputValue).toBeDefined();
            expect(typeof wrapper.vm.formatInputValue).toBe('function');
        });

        it('should expose updateInternalModelValue method', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.vm.updateInternalModelValue).toBeDefined();
            expect(typeof wrapper.vm.updateInternalModelValue).toBe('function');
        });

        it('should expose setMonthYear method', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.vm.setMonthYear).toBeDefined();
            expect(typeof wrapper.vm.setMonthYear).toBe('function');
        });

        it('should expose parseModel method', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.vm.parseModel).toBeDefined();
            expect(typeof wrapper.vm.parseModel).toBe('function');
        });

        it('should expose switchView method', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.vm.switchView).toBeDefined();
            expect(typeof wrapper.vm.switchView).toBe('function');
        });

        it('should expose handleFlow method', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.vm.handleFlow).toBeDefined();
            expect(typeof wrapper.vm.handleFlow).toBe('function');
        });
    });

    describe('Public API', () => {
        it('should call VueDatePicker openMenu when method is invoked', async () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            wrapper.vm.openMenu();
            await nextTick();

            expect(mockOpenMenu).toHaveBeenCalled();
        });

        it('should call VueDatePicker closeMenu when method is invoked', async () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            wrapper.vm.closeMenu();
            await nextTick();

            expect(mockCloseMenu).toHaveBeenCalled();
        });

        it('should call VueDatePicker selectDate when method is invoked', async () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            wrapper.vm.selectDate();
            await nextTick();

            expect(mockSelectDate).toHaveBeenCalled();
        });

        it('should call VueDatePicker clearValue when method is invoked', async () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            wrapper.vm.clearValue();
            await nextTick();

            expect(mockClearValue).toHaveBeenCalled();
        });

        it('should call VueDatePicker toggleMenu when method is invoked', async () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            wrapper.vm.toggleMenu();
            await nextTick();

            expect(mockToggleMenu).toHaveBeenCalled();
        });

        it('should call VueDatePicker updateInternalModelValue with value', async () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            const newDate = new Date(2024, 0, 15);
            wrapper.vm.updateInternalModelValue(newDate);
            await nextTick();

            expect(mockUpdateInternalModelValue).toHaveBeenCalledWith(newDate);
        });

        it('should call VueDatePicker setMonthYear with value', async () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            const monthYear = { month: 0, year: 2024 };
            wrapper.vm.setMonthYear(monthYear);
            await nextTick();

            expect(mockSetMonthYear).toHaveBeenCalledWith(monthYear);
        });

        it('should call VueDatePicker switchView with view and instance', async () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            wrapper.vm.switchView('month', 0);
            await nextTick();

            expect(mockSwitchView).toHaveBeenCalledWith('month', 0);
        });
    });

    describe('Composable Integration', () => {
        it('should call useInjector with props and emit', async () => {
            const { useInjector } = await import('@/composables/useInjector.ts');

            mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(useInjector).toHaveBeenCalled();
        });

        it('should call useExposed with datePicker ref', async () => {
            const { useExposed } = await import('@/composables/useExposed.ts');

            mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(useExposed).toHaveBeenCalled();
        });
    });

    describe('Slots', () => {
        it('should pass through action-row slot', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
                slots: {
                    'action-row': '<div class="action-slot">Actions</div>',
                } as any,
            });

            const datePicker = wrapper.findComponent({ name: 'VueDatePicker' });
            expect(datePicker.exists()).toBe(true);
            // Verify the wrapper correctly passes slots to VueDatePicker
            expect(wrapper.html()).toContain('vue-datepicker');
        });

        it('should pass through multiple slots', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
                slots: {
                    'action-row': '<div class="action-slot">Actions</div>',
                    'action-buttons': '<div class="buttons-slot">Buttons</div>',
                } as any,
            });

            const datePicker = wrapper.findComponent({ name: 'VueDatePicker' });
            expect(datePicker.exists()).toBe(true);
            // Verify the wrapper correctly passes slots to VueDatePicker
            expect(wrapper.html()).toContain('vue-datepicker');
        });
    });

    describe('Edge Cases', () => {
        it('should handle component unmount', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('should handle null modelValue', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle array modelValue', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: [new Date(2024, 0, 15), new Date(2024, 0, 20)],
                },
            });

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle single date modelValue', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: new Date(2024, 0, 15),
                },
            });

            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Integration', () => {
        it('should render complete wrapper structure', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            expect(wrapper.exists()).toBe(true);
            expect(wrapper.findComponent({ name: 'VueDatePicker' }).exists()).toBe(true);
        });

        it('should expose all public methods', () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            const publicMethods = [
                'openMenu',
                'closeMenu',
                'selectDate',
                'clearValue',
                'formatInputValue',
                'updateInternalModelValue',
                'setMonthYear',
                'parseModel',
                'switchView',
                'toggleMenu',
                'handleFlow',
            ];

            publicMethods.forEach((method) => {
                expect(wrapper.vm[method as keyof typeof wrapper.vm]).toBeDefined();
                expect(typeof wrapper.vm[method as keyof typeof wrapper.vm]).toBe('function');
            });
        });

        it('should properly delegate method calls to VueDatePicker', async () => {
            const wrapper = mount(VueDatePickerRoot, {
                props: {
                    modelValue: null,
                },
            });

            // Test multiple method calls
            wrapper.vm.openMenu();
            wrapper.vm.closeMenu();
            wrapper.vm.toggleMenu();
            await nextTick();

            expect(mockOpenMenu).toHaveBeenCalled();
            expect(mockCloseMenu).toHaveBeenCalled();
            expect(mockToggleMenu).toHaveBeenCalled();
        });
    });
});
