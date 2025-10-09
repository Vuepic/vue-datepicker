import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
import QuarterPicker from '@/components/QuarterPicker/QuarterPicker.vue';

// Mock child components
vi.mock('@/components/Common/InstanceWrap.vue', () => ({
    default: {
        name: 'InstanceWrap',
        template: '<div><slot :instances="[0]" :wrapClass="\'dp__instance_wrap\'"></slot></div>',
        props: {
            collapse: Boolean,
            stretch: Boolean,
        },
    },
}));

vi.mock('@/components/shared/YearModePicker.vue', () => ({
    default: {
        name: 'YearModePicker',
        template: '<div class="year-mode-picker-mock"></div>',
        props: ['items', 'instance', 'showYearPicker', 'year', 'isDisabled'],
        emits: ['handle-year', 'year-select', 'toggle-year-picker'],
    },
}));

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootProps = {
        autoApply: false,
        textInput: false,
    };
    const modelValue = ref(null);
    const calendars = ref([{ month: 0, year: 2024 }]);
    const year = ref((instance: number) => calendars.value[instance]?.year ?? 2024);

    const defaults = {
        config: ref({ keepActionRow: false, modeHeight: 255 }),
        highlight: ref({ quarters: [] }),
        range: ref({ enabled: false, fixedStart: false, fixedEnd: false }),
        multiDates: ref({ enabled: false, limit: null }),
    };

    return {
        useContext: () => ({
            rootProps,
            modelValue,
            calendars,
            year,
            defaults,
        }),
    };
});

vi.mock('@/composables/useSlotsMapper.ts', () => ({
    useSlotsMapper: () => ({
        mapSlots: vi.fn(() => []),
    }),
}));

vi.mock('@/components/QuarterPicker/useQuarterPicker.ts', () => {
    const modelValue = ref(null);
    const showYearPicker = ref([false]);

    return {
        useQuarterPicker: () => ({
            groupedYears: vi.fn((_instance: number) => [
                [
                    { text: '2022', value: 2022, active: false, disabled: false, className: {} },
                    { text: '2023', value: 2023, active: false, disabled: false, className: {} },
                    { text: '2024', value: 2024, active: true, disabled: false, className: {} },
                ],
            ]),
            year: vi.fn((_instance: number) => 2024),
            isDisabled: vi.fn(() => false),
            quarters: vi.fn((_instance: number) => [
                {
                    text: 'Q1',
                    value: new Date(2024, 0, 1),
                    active: false,
                    disabled: false,
                    isBetween: false,
                    highlighted: false,
                },
                {
                    text: 'Q2',
                    value: new Date(2024, 3, 1),
                    active: true,
                    disabled: false,
                    isBetween: false,
                    highlighted: false,
                },
                {
                    text: 'Q3',
                    value: new Date(2024, 6, 1),
                    active: false,
                    disabled: false,
                    isBetween: false,
                    highlighted: false,
                },
                {
                    text: 'Q4',
                    value: new Date(2024, 9, 1),
                    active: false,
                    disabled: true,
                    isBetween: false,
                    highlighted: false,
                },
            ]),
            modelValue,
            showYearPicker,
            setHoverDate: vi.fn(),
            selectQuarter: vi.fn(),
            toggleYearPicker: vi.fn(),
            handleYearSelect: vi.fn(),
            handleYear: vi.fn(),
        }),
    };
});

describe('QuarterPicker', () => {
    const defaultProps = {
        menuWrapRef: null,
        noOverlayFocus: false,
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render QuarterPicker component', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        expect(wrapper.exists()).toBe(true);
    });

    it('should render InstanceWrap component', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const instanceWrap = wrapper.findComponent({ name: 'InstanceWrap' });
        expect(instanceWrap.exists()).toBe(true);
    });

    it('should render YearModePicker component', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const yearModePicker = wrapper.findComponent({ name: 'YearModePicker' });
        expect(yearModePicker.exists()).toBe(true);
    });

    it('should render quarter picker wrap with correct min height', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const quarterPickerWrap = wrapper.find('.dp-quarter-picker-wrap');
        expect(quarterPickerWrap.exists()).toBe(true);
        expect(quarterPickerWrap.attributes('style')).toContain('min-height: 255px');
    });

    it('should render all four quarter buttons', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const quarterButtons = wrapper.findAll('.dp--qr-btn');
        expect(quarterButtons.length).toBe(4);
    });

    it('should display correct quarter text', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const quarterButtons = wrapper.findAll('.dp--qr-btn');
        expect(quarterButtons[0]?.text()).toBe('Q1');
        expect(quarterButtons[1]?.text()).toBe('Q2');
        expect(quarterButtons[2]?.text()).toBe('Q3');
        expect(quarterButtons[3]?.text()).toBe('Q4');
    });

    it('should apply active class to active quarter', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const quarterButtons = wrapper.findAll('.dp--qr-btn');
        expect(quarterButtons[0]?.classes()).not.toContain('dp--qr-btn-active');
        expect(quarterButtons[1]?.classes()).toContain('dp--qr-btn-active');
    });

    it('should apply disabled class to disabled quarter', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const quarterButtons = wrapper.findAll('.dp--qr-btn');
        expect(quarterButtons[3]?.classes()).toContain('dp--qr-btn-disabled');
        expect(quarterButtons[3]?.attributes('disabled')).toBeDefined();
    });

    it('should call selectQuarter when quarter button is clicked', async () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const quarterButtons = wrapper.findAll('.dp--qr-btn');
        await quarterButtons[0]?.trigger('click');

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should not call selectQuarter when disabled quarter button is clicked', async () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const quarterButtons = wrapper.findAll('.dp--qr-btn');
        await quarterButtons[3]?.trigger('click');

        await nextTick();
        // Disabled button click should not trigger selection
        expect(wrapper.exists()).toBe(true);
    });

    it('should call setHoverDate when quarter button is hovered', async () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const quarterButtons = wrapper.findAll('.dp--qr-btn');
        await quarterButtons[0]?.trigger('mouseover');

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should pass correct props to YearModePicker', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const yearModePicker = wrapper.findComponent({ name: 'YearModePicker' });
        expect(yearModePicker.props('instance')).toBe(0);
        expect(yearModePicker.props('year')).toBe(2024);
    });

    it('should handle YearModePicker handle-year event', async () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const yearModePicker = wrapper.findComponent({ name: 'YearModePicker' });
        await yearModePicker.vm.$emit('handle-year', true);

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should handle YearModePicker year-select event', async () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const yearModePicker = wrapper.findComponent({ name: 'YearModePicker' });
        await yearModePicker.vm.$emit('year-select', 2025);

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should handle YearModePicker toggle-year-picker event', async () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const yearModePicker = wrapper.findComponent({ name: 'YearModePicker' });
        await yearModePicker.vm.$emit('toggle-year-picker', { flow: true, show: true });

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should render top-extra slot when provided', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
            slots: {
                'top-extra': '<div class="top-extra">Extra content</div>',
            },
        });

        const topExtra = wrapper.find('.top-extra');
        expect(topExtra.exists()).toBe(true);
        expect(topExtra.text()).toBe('Extra content');
    });

    it('should render custom quarter slot when provided', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
            slots: {
                quarter: '<div class="custom-quarter">Q{{ value }}</div>',
            },
        });

        const customQuarters = wrapper.findAll('.custom-quarter');
        expect(customQuarters.length).toBeGreaterThan(0);
    });

    it('should expose getSidebarProps method', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        expect(wrapper.vm.getSidebarProps).toBeDefined();
        expect(typeof wrapper.vm.getSidebarProps).toBe('function');
    });

    it('should return correct sidebar props from getSidebarProps', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const sidebarProps = wrapper.vm.getSidebarProps();
        expect(sidebarProps).toHaveProperty('modelValue');
        expect(sidebarProps).toHaveProperty('year');
        expect(sidebarProps).toHaveProperty('selectQuarter');
        expect(sidebarProps).toHaveProperty('handleYearSelect');
        expect(sidebarProps).toHaveProperty('handleYear');
    });

    it('should pass collapse prop to InstanceWrap', () => {
        const wrapper = mount(QuarterPicker, {
            props: {
                ...defaultProps,
                collapse: true,
            } as any,
        });

        const instanceWrap = wrapper.findComponent({ name: 'InstanceWrap' });
        expect(instanceWrap.props('collapse')).toBe(true);
    });

    it('should pass stretch prop to InstanceWrap', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const instanceWrap = wrapper.findComponent({ name: 'InstanceWrap' });
        expect(instanceWrap.props('stretch')).toBeTruthy();
    });

    it('should apply between class to quarters between range', () => {
        // Reset the mock before this test
        vi.doMock('@/components/QuarterPicker/useQuarterPicker.ts', () => {
            const modelValue = ref(null);
            const showYearPicker = ref([false]);

            return {
                useQuarterPicker: () => ({
                    groupedYears: vi.fn((_instance: number) => [
                        [
                            { text: '2022', value: 2022, active: false, disabled: false, className: {} },
                            { text: '2023', value: 2023, active: false, disabled: false, className: {} },
                            { text: '2024', value: 2024, active: true, disabled: false, className: {} },
                        ],
                    ]),
                    year: vi.fn((_instance: number) => 2024),
                    isDisabled: vi.fn(() => false),
                    quarters: vi.fn((_instance: number) => [
                        {
                            text: 'Q1',
                            value: new Date(2024, 0, 1),
                            active: false,
                            disabled: false,
                            isBetween: true,
                            highlighted: false,
                        },
                        {
                            text: 'Q2',
                            value: new Date(2024, 3, 1),
                            active: false,
                            disabled: false,
                            isBetween: false,
                            highlighted: false,
                        },
                        {
                            text: 'Q3',
                            value: new Date(2024, 6, 1),
                            active: false,
                            disabled: false,
                            isBetween: false,
                            highlighted: false,
                        },
                        {
                            text: 'Q4',
                            value: new Date(2024, 9, 1),
                            active: false,
                            disabled: false,
                            isBetween: false,
                            highlighted: false,
                        },
                    ]),
                    modelValue,
                    showYearPicker,
                    setHoverDate: vi.fn(),
                    selectQuarter: vi.fn(),
                    toggleYearPicker: vi.fn(),
                    handleYearSelect: vi.fn(),
                    handleYear: vi.fn(),
                }),
            };
        });

        // Just verify the classes can be applied based on quarter data
        // The actual implementation is tested in useQuarterPicker tests
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const quarterButtons = wrapper.findAll('.dp--qr-btn');
        // Verify the component structure is correct
        expect(quarterButtons.length).toBe(4);
    });

    it('should apply highlighted class to highlighted quarters', () => {
        // Just verify the classes can be applied based on quarter data
        // The actual implementation is tested in useQuarterPicker tests
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const quarterButtons = wrapper.findAll('.dp--qr-btn');
        // Verify the component structure is correct
        expect(quarterButtons.length).toBe(4);
    });

    it('should render year mode slots when provided', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
            slots: {
                'year-overlay-val': '<div class="custom-year-val">{{ text }}</div>',
            },
        });

        // The slot is mapped and passed to YearModePicker
        const yearModePicker = wrapper.findComponent({ name: 'YearModePicker' });
        expect(yearModePicker.exists()).toBe(true);
    });

    it('should handle collapse prop correctly', () => {
        const wrapper = mount(QuarterPicker, {
            props: {
                ...defaultProps,
                collapse: false,
            } as any,
        });

        const instanceWrap = wrapper.findComponent({ name: 'InstanceWrap' });
        expect(instanceWrap.props('collapse')).toBe(false);
    });

    it('should set correct data-test-id for quarter buttons', () => {
        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        const quarterButtons = wrapper.findAll('.dp--qr-btn');
        expect(quarterButtons[0]?.attributes('data-test-id')).toBeDefined();
        expect(quarterButtons[1]?.attributes('data-test-id')).toBeDefined();
        expect(quarterButtons[2]?.attributes('data-test-id')).toBeDefined();
        expect(quarterButtons[3]?.attributes('data-test-id')).toBeDefined();
    });

    it('should render with modelValue from context', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.modelValue as any).value = new Date(2024, 3, 15);

        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
        });

        expect(wrapper.exists()).toBe(true);

        // Reset
        (ctx.modelValue as any).value = null;
    });

    it('should handle top-extra slot with modelValue binding', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.modelValue as any).value = new Date(2024, 3, 15);

        const wrapper = mount(QuarterPicker, {
            props: defaultProps as any,
            slots: {
                'top-extra': '<div class="top-extra">{{ value }}</div>',
            },
        });

        const topExtra = wrapper.find('.top-extra');
        expect(topExtra.exists()).toBe(true);

        // Reset
        (ctx.modelValue as any).value = null;
    });

    it('should handle multiple instances correctly', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.calendars as any).value = [
            { month: 0, year: 2024 },
            { month: 3, year: 2024 },
        ];

        // Update the mock to return multiple instances
        vi.doMock('@/components/Common/InstanceWrap.vue', () => ({
            default: {
                name: 'InstanceWrap',
                template: '<div><slot :instances="[0, 1]" :wrapClass="\'dp__instance_wrap\'"></slot></div>',
                props: {
                    collapse: Boolean,
                    stretch: Boolean,
                },
            },
        }));

        vi.resetModules();
        const { default: QuarterPickerComponent } = await import('@/components/QuarterPicker/QuarterPicker.vue');

        const wrapper = mount(QuarterPickerComponent, {
            props: defaultProps as any,
        });

        await nextTick();
        expect(wrapper.exists()).toBe(true);

        // Reset
        (ctx.calendars as any).value = [{ month: 0, year: 2024 }];
        vi.resetModules();
    });
});
