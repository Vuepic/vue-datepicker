import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
import YearModePicker from '@/components/shared/YearModePicker.vue';
import type { OverlayGridItem } from '@/types';

// Mock child components
vi.mock('@/components/Common/SelectionOverlay.vue', () => ({
    default: {
        name: 'SelectionOverlay',
        template:
            '<div class="selection-overlay-mock"><slot name="button-icon"></slot><slot name="item" :item="{ text: \'2024\', value: 2024 }"></slot></div>',
        props: {
            items: Array,
            config: Object,
            isLast: Boolean,
            overlayLabel: String,
            type: String,
        },
        emits: ['toggle', 'selected'],
    },
}));

vi.mock('@/components/Common/ArrowBtn.vue', () => ({
    default: {
        name: 'ArrowBtn',
        template: '<button class="arrow-btn-mock" :disabled="disabled" @click="$emit(\'activate\')"><slot /></button>',
        props: {
            ariaLabel: String,
            disabled: Boolean,
            class: String,
        },
        emits: ['activate'],
    },
}));

vi.mock('@/components/Icons', () => ({
    CalendarIcon: {
        name: 'CalendarIcon',
        template: '<span class="calendar-icon-mock">📅</span>',
    },
    ChevronLeftIcon: {
        name: 'ChevronLeftIcon',
        template: '<span class="chevron-left-icon-mock">‹</span>',
    },
    ChevronRightIcon: {
        name: 'ChevronRightIcon',
        template: '<span class="chevron-right-icon-mock">›</span>',
    },
}));

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootProps = {
        autoApply: false,
    };

    const defaults = {
        config: ref({ keepActionRow: false }),
        ariaLabels: ref({
            prevYear: 'Previous year',
            nextYear: 'Next year',
            openYearsOverlay: 'Open years overlay',
            yearPicker: (open: boolean) => (open ? 'Year picker' : 'Close year picker'),
        }),
        formats: ref({ year: 'yyyy' }),
        ui: ref({ navBtnPrev: '', navBtnNext: '' }),
    };

    return {
        useContext: () => ({
            rootProps,
            defaults,
        }),
    };
});

vi.mock('@/composables/useTransition.ts', () => ({
    useTransitions: () => ({
        showTransition: true,
        transitionName: vi.fn(() => 'dp-slide-down'),
        menuTransition: vi.fn(() => 'dp-menu-appear-bottom'),
    }),
}));

vi.mock('@/components/shared/useNavigationDisplay.ts', () => ({
    useNavigationDisplay: () => ({
        showRightIcon: vi.fn(() => true),
        showLeftIcon: vi.fn(() => true),
    }),
}));

describe('YearModePicker', () => {
    const createMockItems = (): OverlayGridItem[][] => [
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
    ];

    const defaultProps = {
        items: createMockItems(),
        instance: 0,
        year: 2024,
        isDisabled: vi.fn(() => false),
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render YearModePicker component', () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
        });

        expect(wrapper.exists()).toBe(true);
    });

    it('should render year mode picker container', () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
        });

        const container = wrapper.find('.dp--year-mode-picker');
        expect(container.exists()).toBe(true);
    });

    it('should display year button with correct year', () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
        });

        const yearButton = wrapper.find('.dp--year-select');
        expect(yearButton.exists()).toBe(true);
        expect(yearButton.text()).toBe('2024');
    });

    it('should render left arrow button', () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
        });

        const arrowButtons = wrapper.findAllComponents({ name: 'ArrowBtn' });
        expect(arrowButtons.length).toBeGreaterThanOrEqual(1);
    });

    it('should render right arrow button', () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
        });

        const arrowButtons = wrapper.findAllComponents({ name: 'ArrowBtn' });
        expect(arrowButtons.length).toBeGreaterThanOrEqual(1);
    });

    it('should emit toggle-year-picker when year button is clicked', async () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
        });

        const yearButton = wrapper.find('.dp--year-select');
        await yearButton.trigger('click');

        expect(wrapper.emitted('toggle-year-picker')).toBeTruthy();
        expect(wrapper.emitted('toggle-year-picker')?.[0]).toEqual([{ flow: false, show: undefined }]);
    });

    it('should emit toggle-year-picker when year button receives Enter key', async () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
        });

        const yearButton = wrapper.find('.dp--year-select');
        await yearButton.trigger('keydown.enter');

        expect(wrapper.emitted('toggle-year-picker')).toBeTruthy();
    });

    it('should emit handle-year when left arrow is clicked', async () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
        });

        const arrowButtons = wrapper.findAllComponents({ name: 'ArrowBtn' });
        await arrowButtons[0]?.vm.$emit('activate');

        expect(wrapper.emitted('handle-year')).toBeTruthy();
        expect(wrapper.emitted('handle-year')?.[0]).toEqual([false]);
    });

    it('should emit handle-year when right arrow is clicked', async () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
        });

        const arrowButtons = wrapper.findAllComponents({ name: 'ArrowBtn' });
        await arrowButtons[arrowButtons.length - 1]?.vm.$emit('activate');

        expect(wrapper.emitted('handle-year')).toBeTruthy();
        expect(wrapper.emitted('handle-year')?.[0]).toEqual([true]);
    });

    it('should show SelectionOverlay when showYearPicker is true', () => {
        const wrapper = mount(YearModePicker, {
            props: {
                ...defaultProps,
                showYearPicker: true,
            },
        });

        const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(overlay.exists()).toBe(true);
    });

    it('should not show SelectionOverlay when showYearPicker is false', () => {
        const wrapper = mount(YearModePicker, {
            props: {
                ...defaultProps,
                showYearPicker: false,
            },
        });

        const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(overlay.exists()).toBe(false);
    });

    it('should emit year-select when year is selected from overlay', async () => {
        const wrapper = mount(YearModePicker, {
            props: {
                ...defaultProps,
                showYearPicker: true,
            },
        });

        const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        await overlay.vm.$emit('selected', 2025);

        expect(wrapper.emitted('year-select')).toBeTruthy();
        expect(wrapper.emitted('year-select')?.[0]).toEqual([2025]);
    });

    it('should pass correct props to SelectionOverlay', () => {
        const wrapper = mount(YearModePicker, {
            props: {
                ...defaultProps,
                showYearPicker: true,
            },
        });

        const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(overlay.props('items')).toEqual(defaultProps.items);
        expect(overlay.props('type')).toBe('year');
    });

    it('should disable left arrow when isDisabled returns true', () => {
        const wrapper = mount(YearModePicker, {
            props: {
                ...defaultProps,
                isDisabled: vi.fn((next: boolean) => !next), // Disable previous
            },
        });

        const arrowButtons = wrapper.findAllComponents({ name: 'ArrowBtn' });
        expect(arrowButtons[0]?.props('disabled')).toBe(true);
    });

    it('should disable right arrow when isDisabled returns true', () => {
        const wrapper = mount(YearModePicker, {
            props: {
                ...defaultProps,
                isDisabled: vi.fn((next: boolean) => next), // Disable next
            },
        });

        const arrowButtons = wrapper.findAllComponents({ name: 'ArrowBtn' });
        expect(arrowButtons[arrowButtons.length - 1]?.props('disabled')).toBe(true);
    });

    it('should render custom year slot when provided', () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
            slots: {
                year: '<span class="custom-year">Year {{ year }}</span>',
            },
        });

        const customYear = wrapper.find('.custom-year');
        expect(customYear.exists()).toBe(true);
    });

    it('should render custom arrow-left slot when provided', () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
            slots: {
                'arrow-left': '<span class="custom-arrow-left">←</span>',
            },
        });

        const customArrow = wrapper.find('.custom-arrow-left');
        expect(customArrow.exists()).toBe(true);
    });

    it('should render custom arrow-right slot when provided', () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
            slots: {
                'arrow-right': '<span class="custom-arrow-right">→</span>',
            },
        });

        const customArrow = wrapper.find('.custom-arrow-right');
        expect(customArrow.exists()).toBe(true);
    });

    it('should render custom calendar-icon slot when provided', () => {
        const wrapper = mount(YearModePicker, {
            props: {
                ...defaultProps,
                showYearPicker: true,
            },
            slots: {
                'calendar-icon': '<span class="custom-calendar-icon">📆</span>',
            },
        });

        const customIcon = wrapper.find('.custom-calendar-icon');
        expect(customIcon.exists()).toBe(true);
    });

    it('should render custom year-overlay-value slot when provided', () => {
        const wrapper = mount(YearModePicker, {
            props: {
                ...defaultProps,
                showYearPicker: true,
            },
            slots: {
                'year-overlay-value': '<div class="custom-year-value">{{ text }}</div>',
            },
        });

        const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(overlay.exists()).toBe(true);
    });

    it('should set correct data-test-id on year button', () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
        });

        const yearButton = wrapper.find('.dp--year-select');
        expect(yearButton.attributes('data-test-id')).toBe('year-mode-btn-0');
    });

    it('should set correct data-test-id for different instances', () => {
        const wrapper = mount(YearModePicker, {
            props: {
                ...defaultProps,
                instance: 2,
            },
        });

        const yearButton = wrapper.find('.dp--year-select');
        expect(yearButton.attributes('data-test-id')).toBe('year-mode-btn-2');
    });

    it('should apply hidden class when overlay is open', async () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
        });

        const yearButton = wrapper.find('.dp--year-select');
        await yearButton.trigger('click');
        await nextTick();

        const container = wrapper.find('.dp--year-mode-picker');
        expect(container.classes()).toContain('dp--hidden-el');
    });

    it('should not show left arrow when showLeftIcon returns false', async () => {
        vi.doMock('@/components/shared/useNavigationDisplay.ts', () => ({
            useNavigationDisplay: () => ({
                showRightIcon: vi.fn(() => true),
                showLeftIcon: vi.fn(() => false),
            }),
        }));

        vi.resetModules();
        const { default: YearModePickerComponent } = await import('@/components/shared/YearModePicker.vue');

        const wrapper = mount(YearModePickerComponent, {
            props: defaultProps,
        });

        const arrowButtons = wrapper.findAllComponents({ name: 'ArrowBtn' });
        // Should only have right arrow
        expect(arrowButtons.length).toBeLessThan(2);

        vi.resetModules();
    });

    it('should not show right arrow when showRightIcon returns false', async () => {
        vi.doMock('@/components/shared/useNavigationDisplay.ts', () => ({
            useNavigationDisplay: () => ({
                showRightIcon: vi.fn(() => false),
                showLeftIcon: vi.fn(() => true),
            }),
        }));

        vi.resetModules();
        const { default: YearModePickerComponent } = await import('@/components/shared/YearModePicker.vue');

        const wrapper = mount(YearModePickerComponent, {
            props: defaultProps,
        });

        const arrowButtons = wrapper.findAllComponents({ name: 'ArrowBtn' });
        // Should only have left arrow
        expect(arrowButtons.length).toBeLessThan(2);

        vi.resetModules();
    });

    it('should set aria-label on year button', () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
        });

        const yearButton = wrapper.find('.dp--year-select');
        expect(yearButton.attributes('aria-label')).toContain('2024');
        expect(yearButton.attributes('aria-label')).toContain('Open years overlay');
    });

    it('should render ChevronLeftIcon by default', () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
        });

        const leftIcon = wrapper.find('.chevron-left-icon-mock');
        expect(leftIcon.exists()).toBe(true);
    });

    it('should render ChevronRightIcon by default', () => {
        const wrapper = mount(YearModePicker, {
            props: defaultProps,
        });

        const rightIcon = wrapper.find('.chevron-right-icon-mock');
        expect(rightIcon.exists()).toBe(true);
    });

    it('should render CalendarIcon by default in overlay', () => {
        const wrapper = mount(YearModePicker, {
            props: {
                ...defaultProps,
                showYearPicker: true,
            },
        });

        const calendarIcon = wrapper.find('.calendar-icon-mock');
        expect(calendarIcon.exists()).toBe(true);
    });

    it('should pass isLast prop to SelectionOverlay based on autoApply', async () => {
        const { useContext } = await import('@/composables/useContext.ts');
        const ctx = useContext();
        (ctx.rootProps as any).autoApply = true;
        (ctx.defaults.config as any).value.keepActionRow = false;

        const wrapper = mount(YearModePicker, {
            props: {
                ...defaultProps,
                showYearPicker: true,
            },
        });

        const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        expect(overlay.props('isLast')).toBe(true);

        // Reset
        (ctx.rootProps as any).autoApply = false;
    });

    it('should emit toggle event from SelectionOverlay', async () => {
        const wrapper = mount(YearModePicker, {
            props: {
                ...defaultProps,
                showYearPicker: true,
            },
        });

        const overlay = wrapper.findComponent({ name: 'SelectionOverlay' });
        await overlay.vm.$emit('toggle');

        expect(wrapper.emitted('toggle-year-picker')).toBeTruthy();
    });
});
