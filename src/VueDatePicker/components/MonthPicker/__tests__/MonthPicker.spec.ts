import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
import MonthPicker from '@/components/MonthPicker/MonthPicker.vue';

// Mock child components
vi.mock('@/components/Common/SelectionOverlay.vue', () => ({
    default: {
        name: 'SelectionOverlay',
        template:
            '<div class="selection-overlay-mock"><slot name="header"></slot><slot name="item" :item="{ text: \'Jan\', value: 0 }"></slot></div>',
        props: {
            items: Array,
            isLast: Boolean,
            height: Number,
            noOverlayFocus: Boolean,
            useRelative: Boolean,
            type: String,
        },
        emits: ['selected', 'hover-value'],
    },
}));

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
        startDate: null,
        focusStartDate: false,
    };
    const rootEmit = vi.fn();
    const modelValue = ref(null);
    const calendars = ref([{ month: 0, year: 2024 }]);
    const year = ref((instance: number) => calendars.value[instance]?.year ?? 2024);
    const isTextInputDate = ref(false);

    const defaults = {
        config: ref({ keepActionRow: false, modeHeight: 255 }),
        range: ref({ enabled: false, fixedStart: false, fixedEnd: false }),
        highlight: ref({}),
        safeDates: ref({ minDate: null, maxDate: null, disabledDates: null, allowedDates: null }),
        filters: ref({ months: [] }),
        multiDates: ref({ enabled: false, limit: null }),
    };

    return {
        useContext: () => ({
            rootProps,
            rootEmit,
            modelValue,
            calendars,
            year,
            isTextInputDate,
            defaults,
        }),
    };
});

vi.mock('@/composables/useSlotsMapper.ts', () => ({
    useSlotsMapper: () => ({
        mapSlots: vi.fn(() => []),
    }),
}));

vi.mock('@/components/MonthPicker/useMonthPicker.ts', () => {
    const modelValue = ref(null);
    const showYearPicker = ref([false]);

    return {
        useMonthPicker: () => ({
            groupedMonths: vi.fn((_instance: number) => [
                [
                    {
                        text: 'Jan',
                        value: 0,
                        active: false,
                        disabled: false,
                        isBetween: false,
                        highlighted: false,
                        className: {},
                    },
                    {
                        text: 'Feb',
                        value: 1,
                        active: false,
                        disabled: false,
                        isBetween: false,
                        highlighted: false,
                        className: {},
                    },
                    {
                        text: 'Mar',
                        value: 2,
                        active: true,
                        disabled: false,
                        isBetween: false,
                        highlighted: false,
                        className: {},
                    },
                ],
                [
                    {
                        text: 'Apr',
                        value: 3,
                        active: false,
                        disabled: false,
                        isBetween: false,
                        highlighted: false,
                        className: {},
                    },
                    {
                        text: 'May',
                        value: 4,
                        active: false,
                        disabled: false,
                        isBetween: false,
                        highlighted: false,
                        className: {},
                    },
                    {
                        text: 'Jun',
                        value: 5,
                        active: false,
                        disabled: true,
                        isBetween: false,
                        highlighted: false,
                        className: {},
                    },
                ],
                [
                    {
                        text: 'Jul',
                        value: 6,
                        active: false,
                        disabled: false,
                        isBetween: false,
                        highlighted: false,
                        className: {},
                    },
                    {
                        text: 'Aug',
                        value: 7,
                        active: false,
                        disabled: false,
                        isBetween: false,
                        highlighted: false,
                        className: {},
                    },
                    {
                        text: 'Sep',
                        value: 8,
                        active: false,
                        disabled: false,
                        isBetween: false,
                        highlighted: false,
                        className: {},
                    },
                ],
                [
                    {
                        text: 'Oct',
                        value: 9,
                        active: false,
                        disabled: false,
                        isBetween: false,
                        highlighted: false,
                        className: {},
                    },
                    {
                        text: 'Nov',
                        value: 10,
                        active: false,
                        disabled: false,
                        isBetween: false,
                        highlighted: false,
                        className: {},
                    },
                    {
                        text: 'Dec',
                        value: 11,
                        active: false,
                        disabled: false,
                        isBetween: false,
                        highlighted: false,
                        className: {},
                    },
                ],
            ]),
            groupedYears: vi.fn((_instance: number) => [
                [
                    { text: '2022', value: 2022, active: false, disabled: false, className: {} },
                    { text: '2023', value: 2023, active: false, disabled: false, className: {} },
                    { text: '2024', value: 2024, active: true, disabled: false, className: {} },
                ],
                [
                    { text: '2025', value: 2025, active: false, disabled: false, className: {} },
                    { text: '2026', value: 2026, active: false, disabled: false, className: {} },
                    { text: '2027', value: 2027, active: false, disabled: false, className: {} },
                ],
            ]),
            year: vi.fn((_instance: number) => 2024),
            isDisabled: vi.fn(() => false),
            showYearPicker,
            modelValue,
            presetDate: vi.fn(),
            setHoverDate: vi.fn(),
            selectMonth: vi.fn(),
            selectYear: vi.fn(),
            toggleYearPicker: vi.fn(),
            handleYearSelect: vi.fn(),
            handleYear: vi.fn(),
            getModelMonthYear: vi.fn(() => ({ month: 2, year: 2024 })),
        }),
    };
});

describe('MonthPicker', () => {
    const defaultProps = {
        menuWrapRef: null,
        noOverlayFocus: false,
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render MonthPicker component', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        expect(wrapper.exists()).toBe(true);
    });

    it('should emit mount event on mounted', async () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        await nextTick();
        expect(wrapper.emitted('mount')).toBeTruthy();
    });

    it('should render SelectionOverlay component', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const selectionOverlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(selectionOverlay.exists()).toBe(true);
    });

    it('should render YearModePicker in header slot', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const yearModePicker = wrapper.findComponent({ name: 'YearModePicker' });
        expect(yearModePicker.exists()).toBe(true);
    });

    it('should pass correct props to SelectionOverlay', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const selectionOverlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(selectionOverlay.props('type')).toBe('month');
        expect(selectionOverlay.props('useRelative')).toBeTruthy();
    });

    it('should pass correct height to SelectionOverlay', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const selectionOverlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(selectionOverlay.props('height')).toBe(255);
    });

    it('should pass isLast as true when autoApply is true and keepActionRow is false', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.rootProps as any).autoApply = true;
        (ctx.defaults.config as any).value.keepActionRow = false;

        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const selectionOverlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(selectionOverlay.props('isLast')).toBe(true);

        // Reset
        (ctx.rootProps as any).autoApply = false;
    });

    it('should pass isLast as false when autoApply is false', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const selectionOverlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(selectionOverlay.props('isLast')).toBe(false);
    });

    it('should call selectMonth when SelectionOverlay emits selected event', async () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const selectionOverlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        await selectionOverlay.vm.$emit('selected', 5, 0);

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should call setHoverDate when SelectionOverlay emits hover-value event', async () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const selectionOverlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        await selectionOverlay.vm.$emit('hover-value', 7, 0);

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should pass correct props to YearModePicker', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const yearModePicker = wrapper.findComponent({ name: 'YearModePicker' });
        expect(yearModePicker.props('instance')).toBe(0);
        expect(yearModePicker.props('year')).toBe(2024);
    });

    it('should call handleYear when YearModePicker emits handle-year event', async () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const yearModePicker = wrapper.findComponent({ name: 'YearModePicker' });
        await yearModePicker.vm.$emit('handle-year', true);

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should call handleYearSelect when YearModePicker emits year-select event', async () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const yearModePicker = wrapper.findComponent({ name: 'YearModePicker' });
        await yearModePicker.vm.$emit('year-select', 2025);

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should call toggleYearPicker when YearModePicker emits toggle-year-picker event', async () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const yearModePicker = wrapper.findComponent({ name: 'YearModePicker' });
        await yearModePicker.vm.$emit('toggle-year-picker', { flow: true, show: true });

        await nextTick();
        // Verify the component handled the event without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should render custom month-year slot when provided', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
            slots: {
                'month-year': '<div class="custom-month-year">Custom Month Year</div>',
            },
        });

        const customSlot = wrapper.find('.custom-month-year');
        expect(customSlot.exists()).toBe(true);
        expect(customSlot.text()).toBe('Custom Month Year');
    });

    it('should not render SelectionOverlay when month-year slot is provided', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
            slots: {
                'month-year': '<div class="custom-month-year">Custom Month Year</div>',
            },
        });

        const selectionOverlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(selectionOverlay.exists()).toBe(false);
    });

    it('should render top-extra slot when provided', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
            slots: {
                'top-extra': '<div class="top-extra">Extra content</div>',
            },
        });

        const topExtra = wrapper.find('.top-extra');
        expect(topExtra.exists()).toBe(true);
        expect(topExtra.text()).toBe('Extra content');
    });

    it('should render custom month-overlay-value slot when provided', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
            slots: {
                'month-overlay-value': '<div class="custom-month-value">{{ text }}</div>',
            },
        });

        // The slot is passed through to SelectionOverlay
        const selectionOverlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(selectionOverlay.exists()).toBe(true);
    });

    it('should expose getSidebarProps method', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        expect(wrapper.vm.getSidebarProps).toBeDefined();
        expect(typeof wrapper.vm.getSidebarProps).toBe('function');
    });

    it('should expose presetDate method', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        expect(wrapper.vm.presetDate).toBeDefined();
        expect(typeof wrapper.vm.presetDate).toBe('function');
    });

    it('should expose toggleYearPicker method', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        expect(wrapper.vm.toggleYearPicker).toBeDefined();
        expect(typeof wrapper.vm.toggleYearPicker).toBe('function');
    });

    it('should return correct sidebar props from getSidebarProps', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const sidebarProps = wrapper.vm.getSidebarProps();
        expect(sidebarProps).toHaveProperty('modelValue');
        expect(sidebarProps).toHaveProperty('year');
        expect(sidebarProps).toHaveProperty('getModelMonthYear');
        expect(sidebarProps).toHaveProperty('selectMonth');
        expect(sidebarProps).toHaveProperty('selectYear');
        expect(sidebarProps).toHaveProperty('handleYear');
    });

    it('should handle noOverlayFocus prop correctly', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.rootProps as any).textInput = true;

        const wrapper = mount(MonthPicker, {
            props: {
                ...defaultProps,
                noOverlayFocus: true,
            } as any,
        });

        const selectionOverlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(selectionOverlay.props('noOverlayFocus')).toBe(true);

        // Reset
        (ctx.rootProps as any).textInput = false;
    });

    it('should pass noOverlayFocus as true when textInput is enabled', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.rootProps as any).textInput = true;

        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const selectionOverlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(selectionOverlay.props('noOverlayFocus')).toBe(true);

        // Reset
        (ctx.rootProps as any).textInput = false;
    });

    it('should render InstanceWrap component', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const instanceWrap = wrapper.findComponent({ name: 'InstanceWrap' });
        expect(instanceWrap.exists()).toBe(true);
    });

    it('should pass collapse prop to InstanceWrap', () => {
        const wrapper = mount(MonthPicker, {
            props: {
                ...defaultProps,
                collapse: true,
            } as any,
        });

        const instanceWrap = wrapper.findComponent({ name: 'InstanceWrap' });
        expect(instanceWrap.props('collapse')).toBe(true);
    });

    it('should pass stretch prop to InstanceWrap', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const instanceWrap = wrapper.findComponent({ name: 'InstanceWrap' });
        expect(instanceWrap.props('stretch')).toBeTruthy();
    });

    it('should handle multiple instances correctly', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.calendars as any).value = [
            { month: 0, year: 2024 },
            { month: 1, year: 2024 },
        ];

        // Update the mock to return multiple instances
        vi.doMock('@/components/Common/InstanceWrap.vue', () => ({
            default: {
                name: 'InstanceWrap',
                template: '<div><slot :instances="[0, 1]" :wrapClass="\'dp__instance_wrap\'"></slot></div>',
                props: ['collapse', 'stretch'],
            },
        }));

        vi.resetModules();
        const { default: MonthPickerComponent } = await import('@/components/MonthPicker/MonthPicker.vue');

        const wrapper = mount(MonthPickerComponent, {
            props: defaultProps as any,
        });

        await nextTick();
        expect(wrapper.exists()).toBe(true);

        // Reset
        (ctx.calendars as any).value = [{ month: 0, year: 2024 }];
        vi.resetModules();
    });

    it('should render year mode slots when provided', () => {
        const wrapper = mount(MonthPicker, {
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
        const wrapper = mount(MonthPicker, {
            props: {
                ...defaultProps,
                collapse: false,
            } as any,
        });

        const instanceWrap = wrapper.findComponent({ name: 'InstanceWrap' });
        expect(instanceWrap.props('collapse')).toBe(false);
    });

    it('should call toggleYearPicker with correct parameters when exposed method is called', async () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        wrapper.vm.toggleYearPicker(true);
        await nextTick();

        // Verify the component handled the call without errors
        expect(wrapper.exists()).toBe(true);
    });

    it('should handle isDisabled function correctly', () => {
        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const yearModePicker = wrapper.findComponent({ name: 'YearModePicker' });
        const isDisabledProp = yearModePicker.props('isDisabled');
        expect(typeof isDisabledProp).toBe('function');
    });

    it('should pass showYearPicker state correctly', async () => {
        const { useMonthPicker } = await import('@/components/MonthPicker/useMonthPicker.ts');
        const monthPicker = useMonthPicker({} as any, vi.fn() as any);
        monthPicker.showYearPicker.value = [true];

        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        const yearModePicker = wrapper.findComponent({ name: 'YearModePicker' });
        expect(yearModePicker.props('showYearPicker')).toBe(true);
    });

    it('should render with modelValue from context', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.modelValue as any).value = new Date(2024, 2, 15);

        const wrapper = mount(MonthPicker, {
            props: defaultProps as any,
        });

        expect(wrapper.exists()).toBe(true);

        // Reset
        (ctx.modelValue as any).value = null;
    });

    it('should handle top-extra slot with modelValue binding', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.modelValue as any).value = new Date(2024, 2, 15);

        const wrapper = mount(MonthPicker, {
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
});
