import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import SelectionOverlay from '@/components/Common/SelectionOverlay.vue';
import type { OverlayGridItem } from '@/types';

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootProps = {
        arrowNavigation: false,
    };
    const defaults = {
        ariaLabels: { value: { toggleOverlay: 'Toggle overlay' } },
        textInput: { value: { enabled: false } },
        config: { value: { escClose: true, modeHeight: 255 } },
    };
    return { useContext: () => ({ rootProps, defaults }) };
});

vi.mock('@/composables/useArrowNavigation.ts', () => ({
    useArrowNavigation: () => ({
        setSelectionGrid: vi.fn(),
        buildMultiLevelMatrix: vi.fn(),
        setMonthPicker: vi.fn(),
    }),
}));

vi.mock('@/components/shared/useNavigationDisplay.ts', () => ({
    useNavigationDisplay: () => ({
        hideNavigationButtons: vi.fn(() => false),
    }),
}));

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        handleEventPropagation: vi.fn(),
        convertType: vi.fn((val) => val),
        checkKeyDown: vi.fn(),
        checkStopPropagation: vi.fn(),
        getElWithin: vi.fn(() => null),
        findFocusableEl: vi.fn(() => null),
    }),
}));

describe('SelectionOverlay', () => {
    const createMockItems = (): OverlayGridItem[][] => [
        [
            { text: 'Jan', value: 0, active: false, disabled: false, className: {} },
            { text: 'Feb', value: 1, active: false, disabled: false, className: {} },
            { text: 'Mar', value: 2, active: true, disabled: false, className: {} },
        ],
        [
            { text: 'Apr', value: 3, active: false, disabled: false, className: {} },
            { text: 'May', value: 4, active: false, disabled: false, className: {} },
            { text: 'Jun', value: 5, active: false, disabled: true, className: {} },
        ],
    ];

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render overlay with grid items', () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        const overlay = wrapper.find('.dp__overlay');
        expect(overlay.exists()).toBe(true);

        const rows = wrapper.findAll('.dp__overlay_row');
        expect(rows.length).toBe(2);

        const cells = wrapper.findAll('.dp__overlay_col');
        expect(cells.length).toBe(6);
    });

    it('should render cell text correctly', () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        const firstCell = wrapper.find('[data-test-id="Jan"]');
        expect(firstCell.text()).toBe('Jan');

        const lastCell = wrapper.find('[data-test-id="Jun"]');
        expect(lastCell.text()).toBe('Jun');
    });

    it('should apply active and disabled attributes to cells', () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        const activeCell = wrapper.find('[data-test-id="Mar"]');
        expect(activeCell.attributes('aria-selected')).toBe('true');

        const disabledCell = wrapper.find('[data-test-id="Jun"]');
        expect(disabledCell.attributes('aria-disabled')).toBe('true');
    });

    it('should emit selected event when enabled cell is clicked', async () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        const cell = wrapper.find('[data-test-id="Jan"]');
        await cell.trigger('click');

        expect(wrapper.emitted('selected')).toBeTruthy();
        expect(wrapper.emitted('selected')?.[0]).toEqual([0]);
    });

    it('should not emit selected event when disabled cell is clicked', async () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        const disabledCell = wrapper.find('[data-test-id="Jun"]');
        await disabledCell.trigger('click');

        expect(wrapper.emitted('selected')).toBeFalsy();
    });

    it('should emit hover-value event on cell mouseover', async () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        const cell = wrapper.find('[data-test-id="Feb"]');
        await cell.trigger('mouseover');

        expect(wrapper.emitted('hover-value')).toBeTruthy();
        expect(wrapper.emitted('hover-value')?.[0]).toEqual([1]);
    });

    it('should emit toggle and reset-flow when toggle button is clicked', async () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
            slots: {
                'button-icon': '<span>Toggle</span>',
            },
        });

        const toggleBtn = wrapper.find('button.dp__overlay_action');
        await toggleBtn.trigger('click');

        expect(wrapper.emitted('toggle')).toBeTruthy();
        expect(wrapper.emitted('reset-flow')).toBeTruthy();
    });

    it('should apply absolute overlay class by default', () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        const overlay = wrapper.find('.dp__overlay');
        expect(overlay.classes()).toContain('dp--overlay-absolute');
        expect(overlay.classes()).not.toContain('dp--overlay-relative');
    });

    it('should apply relative overlay class when useRelative is true', () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
                useRelative: true,
                height: 300,
            },
        });

        const overlay = wrapper.find('.dp__overlay');
        expect(overlay.classes()).toContain('dp--overlay-relative');
        expect(overlay.classes()).not.toContain('dp--overlay-absolute');
    });

    it('should set role and aria-label when not using relative positioning', () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
                overlayLabel: 'Month picker',
            },
        });

        const overlay = wrapper.find('.dp__overlay');
        expect(overlay.attributes('role')).toBe('dialog');
        expect(overlay.attributes('aria-label')).toBe('Month picker');
    });

    it('should not set role and tabindex when using relative positioning', () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
                useRelative: true,
                height: 300,
            },
        });

        const overlay = wrapper.find('.dp__overlay');
        expect(overlay.attributes('role')).toBeUndefined();
        expect(overlay.attributes('tabindex')).toBeUndefined();
    });

    it('should apply bottom button class when isLast is true', () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: true,
            },
            slots: {
                'button-icon': '<span>Toggle</span>',
            },
        });

        const toggleBtn = wrapper.find('button.dp__overlay_action');
        expect(toggleBtn.classes()).toContain('dp__button_bottom');
    });

    it('should apply flex container class when items length is 6 or less', () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        const container = wrapper.find('.dp__overlay_container');
        expect(container.classes()).toContain('dp__container_flex');
        expect(container.classes()).not.toContain('dp__container_block');
    });

    it('should apply block container class when items length is more than 6', () => {
        const items: OverlayGridItem[][] = Array.from({ length: 7 }, (_, i) => [
            { text: `Item ${i}`, value: i, active: false, disabled: false, className: {} },
        ]);

        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'year',
                isLast: false,
            },
        });

        const container = wrapper.find('.dp__overlay_container');
        expect(container.classes()).toContain('dp__container_block');
        expect(container.classes()).not.toContain('dp__container_flex');
    });

    it('should render custom header slot when provided', () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
            slots: {
                header: '<div class="custom-header">Custom Header</div>',
            },
        });

        const header = wrapper.find('.custom-header');
        expect(header.exists()).toBe(true);
        expect(header.text()).toBe('Custom Header');
    });

    it('should render custom item slot when provided', () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
            slots: {
                item: '<div class="custom-item">{{ item.text }}</div>',
            },
        });

        const customItems = wrapper.findAll('.custom-item');
        expect(customItems.length).toBeGreaterThan(0);
    });

    it('should render custom overlay slot when provided', () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
            slots: {
                overlay: '<div class="custom-overlay">Custom Overlay Content</div>',
            },
        });

        const customOverlay = wrapper.find('.custom-overlay');
        expect(customOverlay.exists()).toBe(true);
    });

    it('should handle Escape key press and emit toggle/reset-flow', async () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        const overlay = wrapper.find('.dp__overlay');
        await overlay.trigger('keydown', { key: 'Escape' });

        await nextTick();
        expect(wrapper.emitted('toggle')).toBeTruthy();
        expect(wrapper.emitted('reset-flow')).toBeTruthy();
    });

    it('should handle Enter key on toggle button', async () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
            slots: {
                'button-icon': '<span>Toggle</span>',
            },
        });

        const toggleBtn = wrapper.find('button.dp__overlay_action');
        await toggleBtn.trigger('keydown', { key: 'Enter' });

        expect(wrapper.emitted('toggle')).toBeTruthy();
        expect(wrapper.emitted('reset-flow')).toBeTruthy();
    });

    it('should expose focusGrid method', () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        expect(wrapper.vm.focusGrid).toBeDefined();
        expect(typeof wrapper.vm.focusGrid).toBe('function');
    });

    it('should apply flex_row class when items length is 3 or more', () => {
        const items = createMockItems().concat([
            [
                { text: 'Aug', value: 7, active: false, disabled: false, className: {} },
                { text: 'Sep', value: 8, active: false, disabled: false, className: {} },
                { text: 'Oct', value: 9, active: false, disabled: false, className: {} },
            ],
        ]);
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        const rows = wrapper.findAll('.dp__overlay_row');
        rows.forEach((row) => {
            expect(row.classes()).toContain('dp__flex_row');
        });
    });

    it('should not render toggle button when no button-icon slot is provided', () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        const toggleBtn = wrapper.find('button.dp__overlay_action');
        expect(toggleBtn.exists()).toBe(false);
    });

    it('should handle arrow key navigation when arrowNavigation is disabled', async () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        const overlay = wrapper.find('.dp__overlay');
        await overlay.trigger('keydown', { key: 'ArrowLeft' });
        await overlay.trigger('keydown', { key: 'ArrowRight' });
        await overlay.trigger('keydown', { key: 'ArrowUp' });
        await overlay.trigger('keydown', { key: 'ArrowDown' });

        // Should handle arrow keys without errors
        expect(overlay.exists()).toBe(true);
    });

    it('should set container height style variable', async () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        await nextTick();
        const container = wrapper.find('.dp__overlay_container');
        const style = container.attributes('style');
        expect(style).toContain('--dp-overlay-height');
    });

    it('should call setSelectionGrid on mount when arrowNavigation is enabled', async () => {
        // Temporarily override the mock with arrowNavigation enabled
        vi.doMock('@/composables/useContext.ts', () => {
            const rootProps = {
                arrowNavigation: true,
            };
            const defaults = {
                ariaLabels: { value: { toggleOverlay: 'Toggle overlay' } },
                textInput: { value: { enabled: false } },
                config: { value: { escClose: true, modeHeight: 255 } },
            };
            return { useContext: () => ({ rootProps, defaults }) };
        });

        const mockSetSelectionGrid = vi.fn();
        vi.doMock('@/composables/useArrowNavigation.ts', () => ({
            useArrowNavigation: () => ({
                setSelectionGrid: mockSetSelectionGrid,
                buildMultiLevelMatrix: vi.fn(),
                setMonthPicker: vi.fn(),
            }),
        }));

        // Clear module cache and reimport component
        vi.resetModules();
        const { default: SelectionOverlayComponent } = await import('@/components/Common/SelectionOverlay.vue');

        const items = createMockItems();
        mount(SelectionOverlayComponent, {
            props: {
                items,
                type: 'month',
                isLast: false,
            },
        });

        await nextTick();
        expect(mockSetSelectionGrid).toHaveBeenCalledExactlyOnceWith(true);

        // Reset mocks to original state
        vi.resetModules();
    });

    it('should handle focusValue prop and set correct active ref', async () => {
        const items = createMockItems();
        const wrapper = mount(SelectionOverlay, {
            props: {
                items,
                type: 'month',
                isLast: false,
                focusValue: 1,
            },
        });

        await nextTick();
        const focusedCell = wrapper.find('[data-test-id="Feb"]');
        expect(focusedCell.exists()).toBe(true);
    });
});
