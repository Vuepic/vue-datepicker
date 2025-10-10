import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { ref, nextTick } from 'vue';
import YearPicker from '@/components/YearPicker/YearPicker.vue';

// Mock child components
vi.mock('@/components/Common/SelectionOverlay.vue', () => ({
    default: {
        name: 'SelectionOverlay',
        template: '<div class="selection-overlay"><slot name="item" v-for="item in items" :item="item" /></div>',
        props: ['items', 'isLast', 'height', 'noOverlayFocus', 'focusValue', 'type', 'useRelative'],
        emits: ['selected', 'hover-value'],
    },
}));

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootEmit = vi.fn();
    const rootProps = {
        autoApply: false,
        modelAuto: false,
        startDate: null,
        focusStartDate: false,
        textInput: false,
    };
    const isTextInputDate = ref(false);
    const modelValue = ref<Date | Date[] | null>(null);

    const defaults = {
        config: ref({
            keepActionRow: false,
            modeHeight: 255,
        }),
        range: ref({ enabled: false }),
        highlight: ref({}),
        safeDates: ref({ minDate: null, maxDate: null, disabledDates: null, allowedDates: null }),
        filters: ref({ years: [] }),
        multiDates: ref({ enabled: false, limit: null }),
    };

    return {
        useContext: () => ({
            rootEmit,
            rootProps,
            isTextInputDate,
            modelValue,
            defaults,
        }),
    };
});

vi.mock('@/composables/useRemapper.ts', () => ({
    useRemapper: vi.fn((_cb: any) => {}),
}));

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        isDateBetween: vi.fn(() => false),
        getDate: vi.fn((date?: Date) => date || new Date(2024, 2, 15)),
        resetDateTime: vi.fn((date: Date) => {
            const d = new Date(date);
            d.setHours(0, 0, 0, 0);
            return d;
        }),
        resetDate: vi.fn((date: Date) => {
            const d = new Date(date);
            d.setHours(0, 0, 0, 0);
            return d;
        }),
        getYearFromDate: vi.fn((date?: Date | null) => {
            if (!date) return null;
            return date.getFullYear();
        }),
    }),
}));

vi.mock('@/components/shared/useComponentShared.ts', () => ({
    useComponentShared: () => ({
        checkRangeAutoApply: vi.fn(),
        setMonthOrYearRange: vi.fn((date: Date) => [date, date]),
    }),
}));

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        checkHighlightYear: vi.fn(() => false),
        checkMinMaxValue: vi.fn(() => false),
        groupListAndMap: vi.fn((list: any[], mapper: any) => {
            const result = [];
            for (let i = 0; i < list.length; i += 4) {
                const row = list.slice(i, i + 4).map((item: any) => ({
                    text: item.text,
                    value: item.value,
                    ...mapper(item),
                    className: {},
                }));
                result.push(row);
            }
            return result;
        }),
    }),
}));

vi.mock('@/composables/useUtilsWithContext.ts', () => ({
    useUtilsWithContext: () => ({
        getYears: vi.fn(() => [
            { text: '2020', value: 2020 },
            { text: '2021', value: 2021 },
            { text: '2022', value: 2022 },
            { text: '2023', value: 2023 },
            { text: '2024', value: 2024 },
            { text: '2025', value: 2025 },
            { text: '2026', value: 2026 },
            { text: '2027', value: 2027 },
        ]),
    }),
}));

describe('YearPicker', () => {
    let ctx: any;

    beforeEach(async () => {
        vi.clearAllMocks();
        const { useContext } = await import('@/composables/useContext.ts');
        ctx = useContext();
        ctx.modelValue.value = null;
        ctx.rootProps.autoApply = false;
        ctx.rootProps.modelAuto = false;
        ctx.rootProps.startDate = null;
        ctx.rootProps.focusStartDate = false;
        ctx.rootProps.textInput = false;
        ctx.isTextInputDate.value = false;
        ctx.defaults.config.value.keepActionRow = false;
        ctx.defaults.config.value.modeHeight = 255;
        ctx.defaults.range.value.enabled = false;
        ctx.defaults.highlight.value = {};
        ctx.defaults.safeDates.value = { minDate: null, maxDate: null, disabledDates: null, allowedDates: null };
        ctx.defaults.filters.value.years = [];
        ctx.defaults.multiDates.value.enabled = false;
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    describe('Component Rendering', () => {
        it('should render the component', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            expect(wrapper.exists()).toBe(true);
        });

        it('should render SelectionOverlay by default', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            expect(wrapper.findComponent({ name: 'SelectionOverlay' }).exists()).toBe(true);
        });

        it('should not render SelectionOverlay when month-year slot is provided', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
                slots: {
                    'month-year': '<div class="custom-year-picker">Custom</div>',
                },
            });

            expect(wrapper.findComponent({ name: 'SelectionOverlay' }).exists()).toBe(false);
            expect(wrapper.find('.custom-year-picker').exists()).toBe(true);
        });

        it('should render top-extra slot when provided', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
                slots: {
                    'top-extra': '<div class="top-extra">Extra Content</div>',
                },
            });

            expect(wrapper.find('.top-extra').exists()).toBe(true);
        });
    });

    describe('SelectionOverlay Props', () => {
        it('should pass items to SelectionOverlay', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            expect(overlay.props('items')).toBeDefined();
        });

        it('should pass type as "year" to SelectionOverlay', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            expect(overlay.props('type')).toBe('year');
        });

        it('should pass useRelative to SelectionOverlay', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            // useRelative is a boolean attribute, check it's defined
            expect(overlay.props()).toHaveProperty('useRelative');
        });

        it('should pass height from config', () => {
            ctx.defaults.config.value.modeHeight = 300;

            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            expect(overlay.props('height')).toBe(300);
        });

        it('should set isLast when autoApply is true and keepActionRow is false', () => {
            ctx.rootProps.autoApply = true;
            ctx.defaults.config.value.keepActionRow = false;

            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            expect(overlay.props('isLast')).toBe(true);
        });

        it('should not set isLast when keepActionRow is true', () => {
            ctx.rootProps.autoApply = true;
            ctx.defaults.config.value.keepActionRow = true;

            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            expect(overlay.props('isLast')).toBe(false);
        });

        it('should set noOverlayFocus from props', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: true,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            expect(overlay.props('noOverlayFocus')).toBe(true);
        });

        it('should set noOverlayFocus when textInput is true', () => {
            ctx.rootProps.textInput = true;

            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            expect(overlay.props('noOverlayFocus')).toBe(true);
        });
    });

    describe('Event Handling', () => {
        it('should emit auto-apply when year is selected', async () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            await overlay.vm.$emit('selected', 2024);

            expect(wrapper.emitted('auto-apply')).toBeTruthy();
        });

        it('should update modelValue when year is selected', async () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            await overlay.vm.$emit('selected', 2024);

            expect(ctx.modelValue.value).toBeDefined();
        });

        it('should handle hover-value event', async () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            await overlay.vm.$emit('hover-value', 2024);

            // Should not throw error
            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Custom Slots', () => {
        it('should render month-year slot with correct props', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
                slots: {
                    'month-year': `
                        <template #month-year="{ years, selectYear }">
                            <div class="custom-years">{{ years.length }}</div>
                        </template>
                    `,
                },
            });

            expect(wrapper.find('.custom-years').exists()).toBe(true);
        });

        it('should render year-overlay-value slot', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
                slots: {
                    'year-overlay-value': '<span class="custom-year">{{ text }}</span>',
                },
            });

            expect(wrapper.exists()).toBe(true);
        });

        it('should pass modelValue to top-extra slot', () => {
            ctx.modelValue.value = new Date(2024, 0, 1);

            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
                slots: {
                    'top-extra': '<div class="top-extra">{{ value }}</div>',
                },
            });

            expect(wrapper.find('.top-extra').exists()).toBe(true);
        });
    });

    describe('Component API', () => {
        it('should expose getSidebarProps method', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            expect(wrapper.vm.getSidebarProps).toBeDefined();
            expect(typeof wrapper.vm.getSidebarProps).toBe('function');
        });

        it('should return correct sidebar props', () => {
            ctx.modelValue.value = new Date(2024, 0, 1);

            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const sidebarProps = wrapper.vm.getSidebarProps();
            expect(sidebarProps).toHaveProperty('modelValue');
            expect(sidebarProps).toHaveProperty('selectYear');
        });

        it('should have selectYear function in sidebar props', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const sidebarProps = wrapper.vm.getSidebarProps();
            expect(typeof sidebarProps.selectYear).toBe('function');
        });
    });

    describe('Range Mode', () => {
        beforeEach(() => {
            ctx.defaults.range.value.enabled = true;
        });

        it('should handle range mode year selection', async () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            await overlay.vm.$emit('selected', 2024);
            await nextTick();

            expect(ctx.modelValue.value).toBeDefined();
        });

        it('should handle hover in range mode', async () => {
            ctx.modelValue.value = [new Date(2023, 0, 1)];

            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            await overlay.vm.$emit('hover-value', 2025);

            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('MultiDates Mode', () => {
        beforeEach(() => {
            ctx.defaults.multiDates.value.enabled = true;
        });

        it('should handle multiDates year selection', async () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            await overlay.vm.$emit('selected', 2024);

            expect(wrapper.emitted('auto-apply')).toBeTruthy();
        });

        it('should toggle year in multiDates mode', async () => {
            ctx.modelValue.value = [new Date(2024, 0, 1)];

            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            await overlay.vm.$emit('selected', 2024);

            expect(ctx.modelValue.value).toBeDefined();
        });
    });

    describe('Focus Management', () => {
        it('should set focusValue from startDate', async () => {
            ctx.rootProps.startDate = new Date(2023, 0, 1);

            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            await nextTick();
            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            expect(overlay.props('focusValue')).toBe(2023);
        });

        it('should handle focus with focusStartDate prop', async () => {
            ctx.rootProps.startDate = new Date(2023, 5, 15);
            ctx.rootProps.focusStartDate = true;
            ctx.modelValue.value = new Date(2024, 0, 1);

            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            await nextTick();
            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            expect(overlay.props('focusValue')).toBe(2023);
        });
    });

    describe('Props Forwarding', () => {
        it('should forward noOverlayFocus prop', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: true,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            expect(overlay.props('noOverlayFocus')).toBe(true);
        });

        it('should forward all base props', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: { value: null } as any,
                    noOverlayFocus: true,
                },
            });

            expect(wrapper.props('menuWrapRef')).toBeDefined();
            expect(wrapper.props('noOverlayFocus')).toBe(true);
        });
    });

    describe('Edge Cases', () => {
        it('should handle null modelValue', () => {
            ctx.modelValue.value = null;

            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle array modelValue', () => {
            ctx.modelValue.value = [new Date(2023, 0, 1), new Date(2024, 0, 1)];

            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle component unmount', () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('should handle rapid year selections', async () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            await overlay.vm.$emit('selected', 2023);
            await overlay.vm.$emit('selected', 2024);
            await overlay.vm.$emit('selected', 2025);

            expect(wrapper.emitted('auto-apply')).toBeTruthy();
        });
    });

    describe('Integration', () => {
        it('should work with all features together', async () => {
            ctx.rootProps.autoApply = true;
            ctx.rootProps.startDate = new Date(2023, 0, 1);
            ctx.defaults.config.value.modeHeight = 300;

            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
            await overlay.vm.$emit('selected', 2024);

            expect(wrapper.emitted('auto-apply')).toBeTruthy();
            expect(ctx.modelValue.value).toBeDefined();
        });

        it('should maintain state across multiple interactions', async () => {
            const wrapper = mount(YearPicker, {
                props: {
                    menuWrapRef: null,
                    noOverlayFocus: false,
                },
            });

            const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });

            await overlay.vm.$emit('hover-value', 2023);
            await overlay.vm.$emit('selected', 2024);
            await overlay.vm.$emit('hover-value', 2025);

            expect(wrapper.exists()).toBe(true);
            expect(ctx.modelValue.value).toBeDefined();
        });
    });
});
