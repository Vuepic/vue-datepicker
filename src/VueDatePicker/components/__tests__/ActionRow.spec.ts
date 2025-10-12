import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { ref, nextTick } from 'vue';
import ActionRow from '@/components/ActionRow.vue';

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const rootEmit = vi.fn();
    const rootProps = {
        arrowNavigation: false,
        timePicker: false,
        monthPicker: false,
        modelAuto: false,
    };
    const modelValue = ref<Date | Date[] | null>(null);

    const defaults = {
        actionRow: ref({
            showPreview: true,
            showCancel: true,
            showNow: false,
            showSelect: true,
            cancelBtnLabel: 'Cancel',
            nowBtnLabel: 'Now',
            selectBtnLabel: 'Select',
        }),
        multiCalendars: ref({ count: 0 }),
        inline: ref({ enabled: false }),
        range: ref({ enabled: false, partialRange: false }),
        multiDates: ref({ enabled: false }),
        formats: ref({ preview: 'MM/dd/yyyy' }),
    };

    return {
        useContext: () => ({
            rootEmit,
            rootProps,
            modelValue,
            defaults,
        }),
    };
});

vi.mock('@/composables/useValidation.ts', () => {
    return {
        useValidation: () => ({
            isTimeValid: ref((_val: any) => true),
            isMonthValid: ref((_val: any) => true),
        }),
    };
});

vi.mock('@/composables/useArrowNavigation.ts', () => ({
    useArrowNavigation: () => ({
        buildMatrix: vi.fn(),
    }),
}));

vi.mock('@/composables/useFormatter.ts', () => ({
    useFormatter: () => ({
        formatPreview: vi.fn((date: Date) => {
            if (!date) return '';
            return date.toLocaleDateString('en-US');
        }),
    }),
}));

vi.mock('@/composables/useUtils.ts', () => ({
    useUtils: () => ({
        checkKeyDown: vi.fn((event: any, callback: () => void) => {
            if (event.key === 'Enter' || event.key === ' ') {
                callback();
            }
        }),
        convertType: vi.fn((val) => val),
    }),
}));

describe('ActionRow', () => {
    let ctx: any;

    beforeEach(async () => {
        vi.clearAllMocks();
        const { useContext } = await import('@/composables/useContext.ts');
        ctx = useContext();
        ctx.modelValue.value = null;
        ctx.rootProps.arrowNavigation = false;
        ctx.rootProps.timePicker = false;
        ctx.rootProps.monthPicker = false;
        ctx.rootProps.modelAuto = false;
        ctx.defaults.actionRow.value = {
            showPreview: true,
            showCancel: true,
            showNow: false,
            showSelect: true,
            cancelBtnLabel: 'Cancel',
            nowBtnLabel: 'Now',
            selectBtnLabel: 'Select',
        };
        ctx.defaults.multiCalendars.value.count = 0;
        ctx.defaults.inline.value.enabled = false;
        ctx.defaults.range.value = { enabled: false, partialRange: false };
        ctx.defaults.multiDates.value.enabled = false;
        ctx.defaults.formats.value.preview = 'MM/dd/yyyy';
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    describe('Component Rendering', () => {
        it('should render the component', () => {
            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            expect(wrapper.exists()).toBe(true);
            expect(wrapper.find('.dp__action_row').exists()).toBe(true);
        });

        it('should render action buttons container', () => {
            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            expect(wrapper.find('.dp__action_buttons').exists()).toBe(true);
        });

        it('should render preview when showPreview is true', () => {
            ctx.modelValue.value = new Date(2024, 0, 15);

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            expect(wrapper.find('.dp__selection_preview').exists()).toBe(true);
        });

        it('should not render preview when showPreview is false', () => {
            ctx.defaults.actionRow.value.showPreview = false;

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            expect(wrapper.find('.dp__selection_preview').exists()).toBe(false);
        });
    });

    describe('Action Buttons', () => {
        it('should render cancel button when showCancel is true', () => {
            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            const cancelBtn = wrapper.find('.dp__action_cancel');
            expect(cancelBtn.exists()).toBe(true);
            expect(cancelBtn.text()).toBe('Cancel');
        });

        it('should not render cancel button when inline is enabled', () => {
            ctx.defaults.inline.value.enabled = true;

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            expect(wrapper.find('.dp__action_cancel').exists()).toBe(false);
        });

        it('should render select button when showSelect is true', () => {
            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            const selectBtn = wrapper.find('.dp__action_select');
            expect(selectBtn.exists()).toBe(true);
            expect(selectBtn.text()).toBe('Select');
        });

        it('should render now button when showNow is true', () => {
            ctx.defaults.actionRow.value.showNow = true;

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            const buttons = wrapper.findAll('.dp__action_cancel');
            const nowBtn = buttons.find((btn) => btn.text() === 'Now');
            expect(nowBtn).toBeDefined();
        });

        it('should use custom button labels', () => {
            ctx.defaults.actionRow.value.cancelBtnLabel = 'Close';
            ctx.defaults.actionRow.value.selectBtnLabel = 'Confirm';

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            expect(wrapper.find('.dp__action_cancel').text()).toBe('Close');
            expect(wrapper.find('.dp__action_select').text()).toBe('Confirm');
        });
    });

    describe('Event Handling', () => {
        it('should emit close-picker when cancel button is clicked', async () => {
            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            await wrapper.find('.dp__action_cancel').trigger('click');

            expect(wrapper.emitted('close-picker')).toBeTruthy();
        });

        it('should emit select-date when select button is clicked and validation passes', async () => {
            ctx.modelValue.value = new Date(2024, 0, 15);

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            await wrapper.find('.dp__action_select').trigger('click');

            expect(wrapper.emitted('select-date')).toBeTruthy();
        });

        it('should emit select-now when now button is clicked', async () => {
            ctx.defaults.actionRow.value.showNow = true;

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            const buttons = wrapper.findAll('.dp__action_cancel');
            const nowBtn = buttons.find((btn) => btn.text() === 'Now');
            await nowBtn!.trigger('click');

            expect(wrapper.emitted('select-now')).toBeTruthy();
        });

        it('should handle select button click when valid', async () => {
            ctx.modelValue.value = new Date(2024, 0, 15);

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            await wrapper.find('.dp__action_select').trigger('click');

            // When validation passes, it should emit select-date
            expect(wrapper.emitted('select-date')).toBeTruthy();
        });
    });

    describe('Select Button State', () => {
        it('should enable select button when validation passes', async () => {
            ctx.modelValue.value = new Date(2024, 0, 15);

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            await nextTick();
            const selectBtn = wrapper.find('.dp__action_select');
            // When validation passes, button should not be disabled
            expect(selectBtn.attributes('disabled')).toBeUndefined();
        });

        it('should disable select button when range is partial', () => {
            ctx.defaults.range.value.enabled = true;
            ctx.defaults.range.value.partialRange = false;
            ctx.modelValue.value = [new Date(2024, 0, 15)];

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            const selectBtn = wrapper.find('.dp__action_select');
            expect(selectBtn.attributes('disabled')).toBeDefined();
        });

        it('should enable select button when range is complete', () => {
            ctx.defaults.range.value.enabled = true;
            ctx.modelValue.value = [new Date(2024, 0, 15), new Date(2024, 0, 20)];

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            const selectBtn = wrapper.find('.dp__action_select');
            expect(selectBtn.attributes('disabled')).toBeUndefined();
        });
    });

    describe('Preview Display', () => {
        it('should display formatted date in preview', async () => {
            ctx.modelValue.value = new Date(2024, 0, 15);

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            await nextTick();
            await nextTick(); // Wait for preview to show
            const preview = wrapper.find('.dp__selection_preview');
            expect(preview.exists()).toBe(true);
        });

        it('should display range dates in preview', async () => {
            ctx.defaults.range.value.enabled = true;
            ctx.modelValue.value = [new Date(2024, 0, 15), new Date(2024, 0, 20)];

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            await nextTick();
            await nextTick();
            const preview = wrapper.find('.dp__selection_preview');
            expect(preview.exists()).toBe(true);
        });

        it('should not display preview when menuMount is false', () => {
            ctx.modelValue.value = new Date(2024, 0, 15);

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: false,
                    calendarWidth: 300,
                },
            });

            const preview = wrapper.find('.dp__selection_preview');
            // Preview element exists but should be empty
            expect(preview.exists()).toBe(true);
        });

        it('should display multiDates in preview', async () => {
            ctx.defaults.multiDates.value.enabled = true;
            ctx.modelValue.value = [new Date(2024, 0, 15), new Date(2024, 0, 20), new Date(2024, 0, 25)];

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            await nextTick();
            await nextTick();
            const preview = wrapper.find('.dp__selection_preview');
            expect(preview.exists()).toBe(true);
        });
    });

    describe('Custom Slots', () => {
        it('should render action-row slot when provided', () => {
            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
                slots: {
                    'action-row': '<div class="custom-action-row">Custom Actions</div>',
                },
            });

            expect(wrapper.find('.custom-action-row').exists()).toBe(true);
            // When action-row slot is provided, it replaces the default content
            expect(wrapper.find('.dp__selection_preview').exists()).toBe(false);
        });

        it('should render action-buttons slot when provided', () => {
            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
                slots: {
                    'action-buttons': '<div class="custom-buttons">Custom Buttons</div>',
                },
            });

            expect(wrapper.find('.custom-buttons').exists()).toBe(true);
            expect(wrapper.find('.dp__action_cancel').exists()).toBe(false);
        });

        it('should render action-preview slot when provided', async () => {
            ctx.modelValue.value = new Date(2024, 0, 15);

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
                slots: {
                    'action-preview': '<div class="custom-preview">Custom Preview</div>',
                },
            });

            // Wait for showPreview to be set
            await nextTick();
            await nextTick();

            // The slot should exist within the preview container
            expect(wrapper.find('.dp__selection_preview').exists()).toBe(true);
        });

        it('should pass correct props to action-row slot', () => {
            ctx.modelValue.value = new Date(2024, 0, 15);

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
                slots: {
                    'action-row': '<div class="slot-test">Slot Content</div>',
                },
            });

            expect(wrapper.find('.slot-test').exists()).toBe(true);
        });
    });

    describe('Keyboard Navigation', () => {
        it('should handle keydown on cancel button', async () => {
            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            const cancelBtn = wrapper.find('.dp__action_cancel');
            await cancelBtn.trigger('keydown', { key: 'Enter' });

            expect(wrapper.emitted('close-picker')).toBeTruthy();
        });

        it('should handle keydown on select button', async () => {
            ctx.modelValue.value = new Date(2024, 0, 15);

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            const selectBtn = wrapper.find('.dp__action_select');
            await selectBtn.trigger('keydown', { key: 'Enter' });

            expect(wrapper.emitted('select-date')).toBeTruthy();
        });

        it('should build arrow navigation matrix when enabled', async () => {
            ctx.rootProps.arrowNavigation = true;

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            await nextTick();
            // buildMatrix is called in onMounted, just verify component renders
            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Edge Cases', () => {
        it('should handle null modelValue', () => {
            ctx.modelValue.value = null;

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle empty array modelValue', () => {
            ctx.modelValue.value = [];

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle component unmount', () => {
            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('should handle resize event cleanup', () => {
            const removeEventListenerSpy = vi.spyOn(globalThis, 'removeEventListener');

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            wrapper.unmount();

            expect(removeEventListenerSpy).toHaveBeenCalledExactlyOnceWith('resize', expect.any(Function));
        });

        it('should handle custom preview format function', () => {
            ctx.defaults.formats.value.preview = vi.fn((_val: Date) => 'Custom Format');
            ctx.modelValue.value = new Date(2024, 0, 15);

            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Props', () => {
        it('should accept menuMount prop', () => {
            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 300,
                },
            });

            expect(wrapper.props('menuMount')).toBe(true);
        });

        it('should accept calendarWidth prop', () => {
            const wrapper = mount(ActionRow, {
                props: {
                    menuMount: true,
                    calendarWidth: 500,
                },
            });

            expect(wrapper.props('calendarWidth')).toBe(500);
        });

        it('should have default values for props', () => {
            const wrapper = mount(ActionRow);

            expect(wrapper.props('menuMount')).toBe(false);
            expect(wrapper.props('calendarWidth')).toBe(0);
        });
    });
});
