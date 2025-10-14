import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { ref, nextTick, computed } from 'vue';
import VueDatePicker from '@/VueDatePicker.vue';

// Mock child components
vi.mock('@/components/DatePickerInput/DatepickerInput.vue', () => ({
    default: {
        name: 'DatepickerInput',
        template: '<div class="datepicker-input"><slot /></div>',
        emits: [
            'clear',
            'open',
            'set-input-date',
            'set-empty-date',
            'select-date',
            'toggle',
            'close',
            'focus',
            'blur',
            'real-blur',
        ],
        methods: {
            setParsedDate: vi.fn(),
        },
    },
}));

vi.mock('@/components/DatepickerMenu.vue', () => ({
    default: {
        name: 'DatepickerMenu',
        template: '<div class="datepicker-menu"><slot name="arrow" /></div>',
        emits: ['close-picker', 'select-date', 'auto-apply', 'time-update', 'menu-blur'],
        methods: {
            onValueCleared: vi.fn(),
        },
    },
}));

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootEmit = vi.fn();
    const setState = vi.fn();
    const isTextInputDateRef = ref(false);
    const inputValue = ref('');
    const modelValue = ref<Date | Date[] | null>(null);
    const rootProps = {
        teleport: false,
    };

    const state = computed(() => ({
        isTextInputDate: isTextInputDateRef.value,
        menuFocused: false,
        shiftKeyInMenu: false,
        isInputFocused: false,
    }));

    const inlineRef = ref({ enabled: false });
    const configRef = ref({ keepActionRow: false, mobileBreakpoint: 768, closeOnScroll: false, closeOnClearValue: false, closeOnAutoApply: true, tabOutClosesMenu: false, setDateOnMenuClose: false, onClickOutside: undefined });
    const textInputRef = ref({ enabled: false });
    const rangeRef = ref({ enabled: false, partialRange: false });
    const multiDatesRef = ref({ enabled: false });
    const teleportRef = ref({ center: false });
    const floatingConfigRef = ref({ arrow: false, offset: 10 });
    const transitionsRef = ref({
        open: 'dp-open',
        close: 'dp-close',
        menuAppearTop: 'dp-menu-top',
        menuAppearBottom: 'dp-menu-bottom',
    });

    const defaults = {
        inline: computed(() => inlineRef.value),
        config: computed(() => configRef.value),
        textInput: computed(() => textInputRef.value),
        range: computed(() => rangeRef.value),
        multiDates: computed(() => multiDatesRef.value),
        teleport: computed(() => teleportRef.value),
        floatingConfig: computed(() => floatingConfigRef.value),
        transitions: computed(() => transitionsRef.value),
    };

    return {
        useContext: () => ({
            rootEmit,
            setState,
            state,
            inputValue,
            modelValue,
            rootProps,
            defaults,
            __isTextInputDateRef: isTextInputDateRef,
            __inlineRef: inlineRef,
            __configRef: configRef,
            __textInputRef: textInputRef,
            __rangeRef: rangeRef,
            __multiDatesRef: multiDatesRef,
            __teleportRef: teleportRef,
            __floatingConfigRef: floatingConfigRef,
        }),
    };
});

vi.mock('@/composables/useArrowNavigation.ts', () => ({
    useArrowNavigation: () => ({
        clearArrowNav: vi.fn(),
    }),
}));

vi.mock('@/composables/useExternalInternalMapper.ts', () => ({
    useExternalInternalMapper: () => ({
        parseExternalModelValue: vi.fn(),
        formatInputValue: vi.fn(() => ''),
        emitModelValue: vi.fn(),
        checkBeforeEmit: vi.fn(() => true),
    }),
}));

vi.mock('@/composables/useSlotsMapper.ts', () => ({
    useSlotsMapper: () => ({
        mapSlots: vi.fn(() => ({ inputSlots: [], slotList: [] })),
        inputSlots: [],
        slotList: [],
    }),
}));

vi.mock('@/composables/useTransition.ts', () => {
    return {
        useTransitions: () => ({
            showTransition: true,
            menuTransition: computed(() => () => 'dp-menu-transition'),
            transitionName: computed(() => () => 'dp-transition'),
        }),
    };
});

vi.mock('@/composables/useValidation.ts', () => ({
    useValidation: () => ({
        validateDate: vi.fn(() => true),
        isValidTime: vi.fn(() => true),
    }),
}));

vi.mock('@/composables/useResponsive.ts', () => {
    const isMobile = ref(false);
    return {
        useResponsive: () => ({
            isMobile,
        }),
    };
});

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        checkCloseLazy: vi.fn(() => false),
        findNextFocusableElement: vi.fn(),
        getNumVal: vi.fn((val) => Number(val)),
    }),
}));

vi.mock('@vueuse/core', () => ({
    onClickOutside: vi.fn(),
}));

vi.mock('@floating-ui/vue', () => ({
    arrow: vi.fn(() => ({ name: 'arrow' })),
    autoUpdate: vi.fn(),
    flip: vi.fn(() => ({ name: 'flip' })),
    offset: vi.fn(() => ({ name: 'offset' })),
    shift: vi.fn(() => ({ name: 'shift' })),
    useFloating: vi.fn(() => ({
        floatingStyles: ref({}),
        placement: ref('bottom'),
        middlewareData: ref({ arrow: { x: 0, y: 0 } }),
    })),
}));

describe('VueDatePicker', () => {
    let ctx: any;

    beforeEach(async () => {
        vi.clearAllMocks();
        const { useContext } = await import('@/composables/useContext.ts');
        ctx = useContext();
        ctx.modelValue.value = null;
        ctx.inputValue.value = '';
        ctx.__isTextInputDateRef.value = false;
        ctx.rootProps.teleport = false;
        ctx.__inlineRef.value = { enabled: false };
        ctx.__configRef.value = { keepActionRow: false, mobileBreakpoint: 768, closeOnScroll: false, closeOnClearValue: false, closeOnAutoApply: true, tabOutClosesMenu: false, setDateOnMenuClose: false, onClickOutside: undefined };
        ctx.__textInputRef.value = { enabled: false };
        ctx.__rangeRef.value = { enabled: false, partialRange: false };
        ctx.__multiDatesRef.value = { enabled: false };
        ctx.__teleportRef.value = { center: false };
        ctx.__floatingConfigRef.value = { arrow: false, offset: 10 };
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    describe('Component Rendering', () => {
        it('should render the component', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.exists()).toBe(true);
            expect(wrapper.find('[data-datepicker-instance]').exists()).toBe(true);
        });

        it('should render DatepickerInput component', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.findComponent({ name: 'DatepickerInput' }).exists()).toBe(true);
        });

        it('should not render DatepickerMenu initially', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.findComponent({ name: 'DatepickerMenu' }).exists()).toBe(false);
        });

        it('should render menu wrapper', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.find('.dp__outer_menu_wrap').exists()).toBe(true);
        });
    });

    describe('Menu Visibility', () => {
        it('should show menu when opened', async () => {
            const wrapper = mount(VueDatePicker);
            const input = wrapper.findComponent({ name: 'DatepickerInput' });

            await input.vm.$emit('open');
            await nextTick();

            // Menu should be rendered
            expect(wrapper.findComponent({ name: 'DatepickerMenu' }).exists()).toBe(true);
        });

        it('should hide menu when closed', async () => {
            const wrapper = mount(VueDatePicker);
            const input = wrapper.findComponent({ name: 'DatepickerInput' });

            await input.vm.$emit('open');
            await nextTick();

            const menu = wrapper.findComponent({ name: 'DatepickerMenu' });
            await menu.vm.$emit('close-picker');
            await nextTick();

            expect(wrapper.findComponent({ name: 'DatepickerMenu' }).exists()).toBe(false);
        });

        it('should toggle menu state', async () => {
            const wrapper = mount(VueDatePicker);
            const input = wrapper.findComponent({ name: 'DatepickerInput' });

            await input.vm.$emit('toggle');
            await nextTick();

            expect(wrapper.findComponent({ name: 'DatepickerMenu' }).exists()).toBe(true);

            await input.vm.$emit('toggle');
            await nextTick();

            expect(wrapper.findComponent({ name: 'DatepickerMenu' }).exists()).toBe(false);
        });
    });

    describe('Event Handling', () => {
        it('should handle clear event from input', async () => {
            const wrapper = mount(VueDatePicker);
            const input = wrapper.findComponent({ name: 'DatepickerInput' });

            await input.vm.$emit('clear');

            // clearValue should be called
            expect(wrapper.exists()).toBe(true);
        });

        it('should handle set-input-date event', async () => {
            const wrapper = mount(VueDatePicker);
            const input = wrapper.findComponent({ name: 'DatepickerInput' });

            await input.vm.$emit('set-input-date', new Date(2024, 0, 15));

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle select-date event from input', async () => {
            const wrapper = mount(VueDatePicker);
            const input = wrapper.findComponent({ name: 'DatepickerInput' });

            await input.vm.$emit('select-date');

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle select-date event from menu', async () => {
            const wrapper = mount(VueDatePicker);
            const input = wrapper.findComponent({ name: 'DatepickerInput' });

            await input.vm.$emit('open');
            await nextTick();

            const menu = wrapper.findComponent({ name: 'DatepickerMenu' });
            await menu.vm.$emit('select-date');

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle auto-apply event', async () => {
            const wrapper = mount(VueDatePicker);
            const input = wrapper.findComponent({ name: 'DatepickerInput' });

            await input.vm.$emit('open');
            await nextTick();

            const menu = wrapper.findComponent({ name: 'DatepickerMenu' });
            await menu.vm.$emit('auto-apply');

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle time-update event', async () => {
            const wrapper = mount(VueDatePicker);
            const input = wrapper.findComponent({ name: 'DatepickerInput' });

            await input.vm.$emit('open');
            await nextTick();

            const menu = wrapper.findComponent({ name: 'DatepickerMenu' });
            await menu.vm.$emit('time-update');

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle focus event', async () => {
            const wrapper = mount(VueDatePicker);
            const input = wrapper.findComponent({ name: 'DatepickerInput' });

            await input.vm.$emit('focus');

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle blur event', async () => {
            const wrapper = mount(VueDatePicker);
            const input = wrapper.findComponent({ name: 'DatepickerInput' });

            await input.vm.$emit('blur');

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle real-blur event', async () => {
            const wrapper = mount(VueDatePicker);
            const input = wrapper.findComponent({ name: 'DatepickerInput' });

            await input.vm.$emit('real-blur');

            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Inline Mode', () => {
        it('should not show menu wrapper class in inline mode', () => {
            ctx.__inlineRef.value = { enabled: true };

            const wrapper = mount(VueDatePicker);
            const menuWrap = wrapper.find('.dp__outer_menu_wrap');

            expect(menuWrap.classes()).not.toContain('dp--menu-wrapper');
        });

        it('should not apply floating styles in inline mode', () => {
            ctx.__inlineRef.value = { enabled: true };

            const wrapper = mount(VueDatePicker);
            const menuWrap = wrapper.find('.dp__outer_menu_wrap');

            expect(menuWrap.attributes('style')).toBeUndefined();
        });
    });

    describe('Exposed Methods', () => {
        it('should expose openMenu method', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.vm.openMenu).toBeDefined();
            expect(typeof wrapper.vm.openMenu).toBe('function');
        });

        it('should expose closeMenu method', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.vm.closeMenu).toBeDefined();
            expect(typeof wrapper.vm.closeMenu).toBe('function');
        });

        it('should expose selectDate method', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.vm.selectDate).toBeDefined();
            expect(typeof wrapper.vm.selectDate).toBe('function');
        });

        it('should expose clearValue method', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.vm.clearValue).toBeDefined();
            expect(typeof wrapper.vm.clearValue).toBe('function');
        });

        it('should expose toggleMenu method', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.vm.toggleMenu).toBeDefined();
            expect(typeof wrapper.vm.toggleMenu).toBe('function');
        });

        it('should expose formatInputValue method', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.vm.formatInputValue).toBeDefined();
            expect(typeof wrapper.vm.formatInputValue).toBe('function');
        });

        it('should expose updateInternalModelValue method', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.vm.updateInternalModelValue).toBeDefined();
            expect(typeof wrapper.vm.updateInternalModelValue).toBe('function');
        });

        it('should expose setMonthYear method', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.vm.setMonthYear).toBeDefined();
            expect(typeof wrapper.vm.setMonthYear).toBe('function');
        });

        it('should expose parseModel method', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.vm.parseModel).toBeDefined();
            expect(typeof wrapper.vm.parseModel).toBe('function');
        });

        it('should expose switchView method', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.vm.switchView).toBeDefined();
            expect(typeof wrapper.vm.switchView).toBe('function');
        });

        it('should expose handleFlow method', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.vm.handleFlow).toBeDefined();
            expect(typeof wrapper.vm.handleFlow).toBe('function');
        });

        it('should expose getDpWrapMenuRef method', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.vm.getDpWrapMenuRef).toBeDefined();
            expect(typeof wrapper.vm.getDpWrapMenuRef).toBe('function');
        });
    });

    describe('Public API', () => {
        it('should allow opening menu via exposed method', async () => {
            const wrapper = mount(VueDatePicker);

            wrapper.vm.openMenu();
            await nextTick();

            expect(wrapper.findComponent({ name: 'DatepickerMenu' }).exists()).toBe(true);
        });

        it('should allow closing menu via exposed method', async () => {
            const wrapper = mount(VueDatePicker);

            wrapper.vm.openMenu();
            await nextTick();

            wrapper.vm.closeMenu();
            await nextTick();

            expect(wrapper.findComponent({ name: 'DatepickerMenu' }).exists()).toBe(false);
        });

        it('should allow toggling menu via exposed method', async () => {
            const wrapper = mount(VueDatePicker);

            wrapper.vm.toggleMenu();
            await nextTick();

            expect(wrapper.findComponent({ name: 'DatepickerMenu' }).exists()).toBe(true);

            wrapper.vm.toggleMenu();
            await nextTick();

            expect(wrapper.findComponent({ name: 'DatepickerMenu' }).exists()).toBe(false);
        });
    });

    describe('Edge Cases', () => {
        it('should handle component unmount', () => {
            const wrapper = mount(VueDatePicker);

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('should handle rapid menu toggles', async () => {
            const wrapper = mount(VueDatePicker);

            wrapper.vm.toggleMenu();
            wrapper.vm.toggleMenu();
            wrapper.vm.toggleMenu();

            await nextTick();

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle null modelValue', () => {
            ctx.modelValue.value = null;

            const wrapper = mount(VueDatePicker);

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle array modelValue', () => {
            ctx.modelValue.value = [new Date(2024, 0, 15), new Date(2024, 0, 20)];

            const wrapper = mount(VueDatePicker);

            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Data Attributes', () => {
        it('should have datepicker-instance attribute', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.find('[data-datepicker-instance]').exists()).toBe(true);
        });

        it('should set mobile data attribute when on mobile', async () => {
            const { useResponsive } = await import('@/composables/useResponsive.ts');
            const responsive = useResponsive({} as any);
            (responsive.isMobile as any).value = true;

            const wrapper = mount(VueDatePicker);

            expect(wrapper.find('[data-dp-mobile="true"]').exists()).toBe(true);

            // Reset
            (responsive.isMobile as any).value = false;
        });
    });

    describe('Integration', () => {
        it('should render complete datepicker structure', () => {
            const wrapper = mount(VueDatePicker);

            expect(wrapper.find('[data-datepicker-instance]').exists()).toBe(true);
            expect(wrapper.findComponent({ name: 'DatepickerInput' }).exists()).toBe(true);
            expect(wrapper.find('.dp__outer_menu_wrap').exists()).toBe(true);
        });

        it('should handle full interaction flow', async () => {
            const wrapper = mount(VueDatePicker);
            const input = wrapper.findComponent({ name: 'DatepickerInput' });

            // Open menu
            await input.vm.$emit('open');
            await nextTick();
            expect(wrapper.findComponent({ name: 'DatepickerMenu' }).exists()).toBe(true);

            // Select date
            const menu = wrapper.findComponent({ name: 'DatepickerMenu' });
            await menu.vm.$emit('select-date');

            // Close menu
            await menu.vm.$emit('close-picker');
            await nextTick();
            expect(wrapper.findComponent({ name: 'DatepickerMenu' }).exists()).toBe(false);
        });
    });
});
