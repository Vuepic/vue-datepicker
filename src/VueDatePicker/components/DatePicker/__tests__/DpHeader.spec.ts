import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref, computed } from 'vue';
import DpHeader from '@/components/DatePicker/DpHeader.vue';
import type { SelectItem } from '@/types';

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootEmit = vi.fn();
    const rootProps = {
        arrowNavigation: false,
        vertical: false,
        disableYearSelect: false,
        yearFirst: false,
        autoApply: false,
    };
    const modelValue = ref(null);
    const defaults = {
        ariaLabels: computed(() => ({
            prevMonth: 'Previous month',
            nextMonth: 'Next month',
            openMonthsOverlay: 'Open months overlay',
            openYearsOverlay: 'Open years overlay',
            monthPicker: (open: boolean) => (open ? 'Month picker' : 'Close month picker'),
            yearPicker: (open: boolean) => (open ? 'Year picker' : 'Close year picker'),
        })),
        filters: ref({ months: [], years: [] }),
        config: ref({ keepActionRow: false, escClose: true, modeHeight: 255 }),
        highlight: ref({}),
        safeDates: ref({ minDate: null, maxDate: null }),
        ui: ref({ navBtnPrev: '', navBtnNext: '' }),
        transitions: ref({
            open: 'dp-slide-down',
            close: 'dp-slide-up',
            menuAppearTop: 'dp-menu-appear-top',
            menuAppearBottom: 'dp-menu-appear-bottom',
        }),
        textInput: ref({ enabled: false }),
    };
    return { useContext: () => ({ rootEmit, rootProps, modelValue, defaults }) };
});

vi.mock('@/components/shared/useNavigationDisplay.ts', () => ({
    useNavigationDisplay: () => ({
        showLeftIcon: vi.fn((instance) => instance === 0),
        showRightIcon: vi.fn((instance) => instance === 0),
        hideNavigationButtons: vi.fn(() => false),
    }),
}));

vi.mock('@/composables/useArrowNavigation.ts', () => ({
    useArrowNavigation: () => ({
        buildMatrix: vi.fn(),
    }),
}));

vi.mock('@/components/shared/useMonthYearPick.ts', () => ({
    useMonthYearPick: () => ({
        handleMonthYearChange: vi.fn(),
        isDisabled: vi.fn(() => false),
        updateMonthYear: vi.fn(),
    }),
}));

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        checkHighlightYear: vi.fn(() => false),
        checkHighlightMonth: vi.fn(() => false),
        checkKeyDown: vi.fn(),
        groupListAndMap: vi.fn((items, mapper) => {
            const result = [];
            for (let i = 0; i < items.length; i += 3) {
                const row = items.slice(i, i + 3).map((item: SelectItem) => ({
                    text: item.text,
                    value: item.value,
                    ...mapper(item),
                    className: {},
                }));
                result.push(row);
            }
            return result;
        }),
        checkMinMaxValue: vi.fn(() => false),
    }),
}));

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        getMaxMonth: vi.fn(() => 11),
        getMinMonth: vi.fn(() => 0),
        getYearFromDate: vi.fn(() => null),
    }),
}));

vi.mock('@/composables/useFormatter.ts', () => ({
    useFormatter: () => ({
        formatYear: vi.fn((year) => String(year)),
    }),
}));

describe('DpHeader', () => {
    const createMonths = (): SelectItem[] => [
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
    ];

    const createYears = (): SelectItem[] => [
        { text: '2020', value: 2020 },
        { text: '2021', value: 2021 },
        { text: '2022', value: 2022 },
        { text: '2023', value: 2023 },
        { text: '2024', value: 2024 },
        { text: '2025', value: 2025 },
    ];

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render header wrap', () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        const headerWrap = wrapper.find('.dp--header-wrap');
        expect(headerWrap.exists()).toBe(true);
    });

    it('should emit mount event on mounted', async () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        await nextTick();
        expect(wrapper.emitted('mount')).toBeTruthy();
    });

    it('should render month and year selection buttons', () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        const monthBtn = wrapper.find('[data-test-id="month-toggle-overlay-0"]');
        const yearBtn = wrapper.find('[data-test-id="year-toggle-overlay-0"]');

        expect(monthBtn.exists()).toBe(true);
        expect(yearBtn.exists()).toBe(true);
    });

    it('should display correct month text', () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        const monthBtn = wrapper.find('[data-test-id="month-toggle-overlay-0"]');
        expect(monthBtn.text()).toBe('Jan');
    });

    it('should display correct year text', () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        const yearBtn = wrapper.find('[data-test-id="year-toggle-overlay-0"]');
        expect(yearBtn.text()).toBe('2024');
    });

    it('should render month year wrap', async () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        const monthYearWrap = wrapper.find('.dp__month_year_wrap');
        expect(monthYearWrap.exists()).toBe(true);
    });

    it('should open month picker overlay when month button is clicked', async () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        const monthBtn = wrapper.find('[data-test-id="month-toggle-overlay-0"]');
        await monthBtn.trigger('click');

        await nextTick();
        expect(wrapper.emitted('overlay-opened')).toBeTruthy();
        expect(wrapper.emitted('overlay-opened')?.[0]).toEqual(['month']);
    });

    it('should open year picker overlay when year button is clicked', async () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        const yearBtn = wrapper.find('[data-test-id="year-toggle-overlay-0"]');
        await yearBtn.trigger('click');

        await nextTick();
        expect(wrapper.emitted('overlay-opened')).toBeTruthy();
        expect(wrapper.emitted('overlay-opened')?.[0]).toEqual(['year']);
    });

    it('should emit update-month-year when month is selected', async () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        const monthBtn = wrapper.find('[data-test-id="month-toggle-overlay-0"]');
        await monthBtn.trigger('click');
        await nextTick();

        const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        await overlay.vm.$emit('selected', 5);

        expect(wrapper.emitted('update-month-year')).toBeTruthy();
        expect(wrapper.emitted('update-month-year')?.[0]).toEqual([{ month: 5, year: 2024 }]);
    });

    it('should emit update-month-year when year is selected', async () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        const yearBtn = wrapper.find('[data-test-id="year-toggle-overlay-0"]');
        await yearBtn.trigger('click');
        await nextTick();

        const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        await overlay.vm.$emit('selected', 2023);

        expect(wrapper.emitted('update-month-year')).toBeTruthy();
        expect(wrapper.emitted('update-month-year')?.[0]).toEqual([{ month: 0, year: 2023 }]);
    });

    it('should close overlay when toggle is emitted', async () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        const monthBtn = wrapper.find('[data-test-id="month-toggle-overlay-0"]');
        await monthBtn.trigger('click');
        await nextTick();

        let overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(overlay.exists()).toBe(true);

        await overlay.vm.$emit('toggle');
        await nextTick();

        overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(overlay.exists()).toBe(false);
    });

    it('should emit reset-flow when picker is toggled', async () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        const monthBtn = wrapper.find('[data-test-id="month-toggle-overlay-0"]');
        await monthBtn.trigger('click');

        expect(wrapper.emitted('reset-flow')).toBeTruthy();
    });

    it('should render only month button when disableYearSelect is true', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.rootProps as any).disableYearSelect = true;

        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        const monthBtn = wrapper.find('[data-test-id="month-toggle-overlay-0"]');
        const yearBtn = wrapper.find('[data-test-id="year-toggle-overlay-0"]');

        expect(monthBtn.exists()).toBe(true);
        expect(yearBtn.exists()).toBe(false);

        // Reset
        (ctx.rootProps as any).disableYearSelect = false;
    });

    it('should render year first when yearFirst is true', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.rootProps as any).yearFirst = true;

        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        const buttons = wrapper.findAll('.dp__month_year_select');
        expect(buttons[0]?.attributes('data-test-id')).toBe('year-toggle-overlay-0');
        expect(buttons[1]?.attributes('data-test-id')).toBe('month-toggle-overlay-0');

        // Reset
        (ctx.rootProps as any).yearFirst = false;
    });

    it('should render custom month-year slot when provided', () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
            slots: {
                'month-year': '<div class="custom-month-year">Custom Header</div>',
            },
        });

        const customSlot = wrapper.find('.custom-month-year');
        expect(customSlot.exists()).toBe(true);
        expect(customSlot.text()).toBe('Custom Header');
    });

    it('should render custom arrow-left slot when provided', () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
            slots: {
                'arrow-left': '<span class="custom-arrow-left">←</span>',
            },
        });

        const customArrow = wrapper.find('.custom-arrow-left');
        expect(customArrow.exists()).toBe(true);
    });

    it('should render custom arrow-right slot when provided', () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
            slots: {
                'arrow-right': '<span class="custom-arrow-right">→</span>',
            },
        });

        const customArrow = wrapper.find('.custom-arrow-right');
        expect(customArrow.exists()).toBe(true);
    });

    it('should render top-extra slot when provided', () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
            slots: {
                'top-extra': '<div class="top-extra">Extra content</div>',
            },
        });

        const topExtra = wrapper.find('.top-extra');
        expect(topExtra.exists()).toBe(true);
    });

    it('should expose toggleMonthPicker method', () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        expect(wrapper.vm.toggleMonthPicker).toBeDefined();
        expect(typeof wrapper.vm.toggleMonthPicker).toBe('function');
    });

    it('should expose toggleYearPicker method', () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        expect(wrapper.vm.toggleYearPicker).toBeDefined();
        expect(typeof wrapper.vm.toggleYearPicker).toBe('function');
    });

    it('should expose handleMonthYearChange method', () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        expect(wrapper.vm.handleMonthYearChange).toBeDefined();
        expect(typeof wrapper.vm.handleMonthYearChange).toBe('function');
    });

    it('should hide selection buttons when overlay is open', async () => {
        const wrapper = mount(DpHeader, {
            props: {
                month: 0,
                year: 2024,
                instance: 0,
                years: createYears(),
                months: createMonths(),
                menuWrapRef: null,
            },
        });

        const monthBtn = wrapper.find('[data-test-id="month-toggle-overlay-0"]');
        await monthBtn.trigger('click');
        await nextTick();

        expect(monthBtn.classes()).toContain('dp--hidden-el');
    });
});
