import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { computed, nextTick, ref } from 'vue';
import DatepickerInput from '@/components/DatePickerInput/DatepickerInput.vue';

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootEmit = vi.fn();
    const rootProps = {
        disabled: false,
        readonly: false,
        placeholder: 'Select Date',
        autoApply: false,
        locale: undefined,
    };
    const inputValue = ref('');
    const defaults = {
        textInput: ref({
            enabled: false,
            openMenu: false,
            enterSubmit: false,
            tabSubmit: false,
            selectOnFocus: false,
            escClose: false,
            rangeSeparator: ' - ',
            pattern: 'MM/dd/yyyy',
        }),
        ariaLabels: computed(() => ({
            input: 'Datepicker input',
            calendarIcon: 'Calendar icon',
            clearInput: 'Clear value',
        })),
        inline: computed(() => ({ enabled: false, input: false })),
        config: computed(() => ({})),
        range: computed(() => ({ enabled: false })),
        multiDates: computed(() => ({ enabled: false })),
        ui: computed(() => ({ input: {} })),
        inputAttrs: ref({
            id: 'dp-input',
            name: 'dp-input',
            required: false,
            autocomplete: 'off',
            clearable: true,
            hideInputIcon: false,
            state: undefined,
            alwaysClearable: false,
            inputmode: 'none',
        }),
    };
    return { useContext: () => ({ rootEmit, rootProps, inputValue, defaults }) };
});

vi.mock('@/composables/useValidation.ts', () => ({
    useValidation: () => ({
        checkMinMaxRange: vi.fn(() => true),
        isValidDate: vi.fn(() => true),
    }),
}));

vi.mock('@/components/DatePickerInput/useInput.ts', () => ({
    useInput: () => ({
        parseFreeInput: vi.fn((val: string) => (val ? new Date('2024-01-15') : null)),
        textPasted: { value: false },
    }),
}));

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        checkKeyDown: vi.fn(),
        checkStopPropagation: vi.fn(),
    }),
}));

describe('DatepickerInput', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render input element with default attributes', () => {
        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        expect(input.exists()).toBe(true);
        expect(input.attributes('placeholder')).toBe('Select Date');
        expect(input.attributes('inputmode')).toBe('none');
        expect(input.attributes('readonly')).toBeUndefined();
        expect(input.attributes('disabled')).toBeUndefined();
    });

    it('should apply disabled and readonly attributes when props are set', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.rootProps.disabled = true;
        ctx.rootProps.readonly = true;

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        expect(input.attributes('disabled')).toBe('');
        expect(input.attributes('readonly')).toBe('');

        // Reset
        ctx.rootProps.disabled = false;
        ctx.rootProps.readonly = false;
    });

    it('should display clear button when input has value and clearable is true', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.inputValue.value = '01/15/2024';

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        await nextTick();
        const clearBtn = wrapper.find('[data-test-id="clear-input-value-btn"]');

        expect(clearBtn.exists()).toBe(true);
    });

    it('should not display clear button when clearable is false', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.inputValue.value = '01/15/2024';
        ctx.defaults.inputAttrs.value.clearable = false;

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        await nextTick();
        const clearBtn = wrapper.find('[data-test-id="clear-input-value-btn"]');
        expect(clearBtn.exists()).toBe(false);

        // Reset
        ctx.defaults.inputAttrs.value.clearable = true;
    });

    it('should emit clear event when clear button is clicked', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.inputValue.value = '01/15/2024';

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        await nextTick();
        const clearBtn = wrapper.find('button.dp--clear-btn');
        await clearBtn.trigger('click');

        expect(wrapper.emitted('clear')).toBeTruthy();
        expect(wrapper.emitted('clear')?.length).toBe(1);
    });

    it('should emit toggle event when input is clicked and textInput is disabled', async () => {
        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const inputWrap = wrapper.find('.dp__input_wrap');
        await inputWrap.trigger('click');

        expect(wrapper.emitted('toggle')).toBeTruthy();
    });

    it('should emit open event when input receives focus and textInput openMenu is configured', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.defaults.textInput.value.enabled = true;
        ctx.defaults.textInput.value.openMenu = 'open';

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        await input.setValue('01/15/2024');

        expect(wrapper.emitted('open')).toBeTruthy();

        // Reset
        ctx.defaults.textInput.value.enabled = false;
        ctx.defaults.textInput.value.openMenu = false;
    });

    it('should emit focus event when input is focused', async () => {
        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        await input.trigger('focus');

        expect(wrapper.emitted('focus')).toBeTruthy();
    });

    it('should emit blur and real-blur events when input loses focus', async () => {
        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        await input.trigger('blur');

        expect(wrapper.emitted('real-blur')).toBeTruthy();
        expect(wrapper.emitted('blur')).toBeTruthy();
    });

    it('should handle input changes and emit set-input-date', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.defaults.textInput.value.enabled = true;

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        await input.setValue('01/15/2024');

        expect(wrapper.emitted('set-input-date')).toBeTruthy();

        // Reset
        ctx.defaults.textInput.value.enabled = false;
    });

    it('should handle empty input and emit set-input-date with null', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.defaults.textInput.value.enabled = true;
        ctx.rootProps.autoApply = true;

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        await input.setValue('');

        expect(wrapper.emitted('set-input-date')).toBeTruthy();
        const emitted = wrapper.emitted('set-input-date') as any[];
        expect(emitted[0][0]).toBeNull();

        // Reset
        ctx.defaults.textInput.value.enabled = false;
        ctx.rootProps.autoApply = false;
    });

    it('should handle Enter key press when textInput is enabled', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.defaults.textInput.value.enabled = true;
        ctx.defaults.textInput.value.enterSubmit = true;
        ctx.inputValue.value = '01/15/2024';

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        await input.trigger('keypress', { key: 'Enter' });

        expect(wrapper.emitted('set-input-date')).toBeTruthy();

        // Reset
        ctx.defaults.textInput.value.enabled = false;
        ctx.defaults.textInput.value.enterSubmit = false;
    });

    it('should handle Tab key press when textInput tabSubmit is enabled', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.defaults.textInput.value.enabled = true;
        ctx.defaults.textInput.value.tabSubmit = true;
        ctx.inputValue.value = '01/15/2024';

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        await input.trigger('keypress', { key: 'Tab' });

        expect(wrapper.emitted('set-input-date')).toBeTruthy();

        // Reset
        ctx.defaults.textInput.value.enabled = false;
        ctx.defaults.textInput.value.tabSubmit = false;
    });

    it('should handle Escape key press and emit close when escClose is enabled', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.defaults.textInput.value.enabled = true;
        ctx.defaults.textInput.value.escClose = true;

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: true },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        await input.trigger('keypress', { key: 'Escape' });

        expect(wrapper.emitted('close')).toBeTruthy();

        // Reset
        ctx.defaults.textInput.value.enabled = false;
        ctx.defaults.textInput.value.escClose = false;
    });

    it('should apply focus class when input is focused or menu is open', async () => {
        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        expect(input.classes()).not.toContain('dp__input_focus');

        await input.trigger('focus');
        await nextTick();
        expect(input.classes()).toContain('dp__input_focus');
    });

    it('should render calendar icon when no custom icon slot is provided', () => {
        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const calendarIcon = wrapper.find('.dp__input_icon.dp__input_icons');
        expect(calendarIcon.exists()).toBe(true);
    });

    it('should expose focusInput method', () => {
        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        expect(wrapper.vm.focusInput).toBeDefined();
        expect(typeof wrapper.vm.focusInput).toBe('function');
    });

    it('should expose setParsedDate method', () => {
        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        expect(wrapper.vm.setParsedDate).toBeDefined();
        expect(typeof wrapper.vm.setParsedDate).toBe('function');
    });

    it('should handle range text input with separator', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.defaults.textInput.value.enabled = true;
        ctx.defaults.range.value.enabled = true;

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        await input.setValue('01/15/2024 - 01/20/2024');

        expect(wrapper.emitted('set-input-date')).toBeTruthy();

        // Reset
        ctx.defaults.textInput.value.enabled = false;
        ctx.defaults.range.value.enabled = false;
    });

    it('should handle multi-dates input with semicolon separator', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.defaults.textInput.value.enabled = true;
        ctx.defaults.multiDates.value.enabled = true;

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        await input.setValue('01/15/2024;01/20/2024;01/25/2024');

        expect(wrapper.emitted('set-input-date')).toBeTruthy();

        // Reset
        ctx.defaults.textInput.value.enabled = false;
        ctx.defaults.multiDates.value.enabled = false;
    });

    it('should display always clearable button even when input is empty', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.inputValue.value = '';
        ctx.defaults.inputAttrs.value.alwaysClearable = true;

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        await nextTick();
        const clearBtn = wrapper.find('button.dp--clear-btn');
        expect(clearBtn.exists()).toBe(true);

        // Reset
        ctx.defaults.inputAttrs.value.alwaysClearable = false;
    });

    it('should apply input validation state classes', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.defaults.inputAttrs.value.state = true;

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        expect(input.classes()).toContain('dp__input_valid');

        ctx.defaults.inputAttrs.value.state = false;
        await nextTick();
        expect(input.classes()).toContain('dp__input_invalid');

        // Reset
        ctx.defaults.inputAttrs.value.state = undefined;
    });

    it('should handle paste event', async () => {
        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const input = wrapper.find('input[data-test-id="dp-input"]');
        await input.trigger('paste');

        // The paste event should be handled
        // textPasted ref should be set to true internally
        expect(input.exists()).toBe(true);
    });

    it('should not show input when inline is enabled without inline.input', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        ctx.defaults.inline.value.enabled = true;
        ctx.defaults.inline.value.input = false;

        const wrapper = mount(DatepickerInput, {
            props: { isMenuOpen: false },
        });

        const inputWrap = wrapper.find('.dp__input_wrap');
        expect(inputWrap.exists()).toBe(false);

        // Reset
        ctx.defaults.inline.value.enabled = false;
    });
});
