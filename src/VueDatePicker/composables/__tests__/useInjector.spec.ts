import { beforeEach, describe, expect, it, vi } from 'vitest';
import { defineComponent, h, inject } from 'vue';
import { mount } from '@vue/test-utils';
import { ContextKey, useInjector } from '@/composables/useInjector';
import type { RootPropsWithDefaults } from '@/types';

describe('useInjector', () => {
    let mockProps: RootPropsWithDefaults;
    let mockEmit: any;

    beforeEach(() => {
        mockProps = {
            modelValue: null,
            readonly: false,
            disabled: false,
            range: { enabled: false },
        } as any;

        mockEmit = vi.fn();
    });

    const createTestComponents = (props?: Partial<RootPropsWithDefaults>) => {
        // eslint-disable-next-line vue/one-component-per-file
        const ChildComponent = defineComponent({
            setup() {
                const context = inject(ContextKey);
                return { context };
            },
            render() {
                return h('div', { 'data-testid': 'child' });
            },
        });

        // eslint-disable-next-line vue/one-component-per-file
        const ParentComponent = defineComponent({
            components: { ChildComponent },
            setup() {
                const testProps = { ...mockProps, ...props };
                useInjector(testProps, mockEmit);
            },
            render() {
                return h('div', [h(ChildComponent)]);
            },
        });

        return { ParentComponent, ChildComponent };
    };

    describe('initialization', () => {
        it('should provide context via ContextKey', () => {
            const { ParentComponent, ChildComponent } = createTestComponents();
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);

            expect(child.vm.context).toBeDefined();
            expect(child.vm.context).not.toBeNull();
        });

        it('should provide all required context properties', () => {
            const { ParentComponent, ChildComponent } = createTestComponents();
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const context = child.vm.context;

            expect(context).toHaveProperty('rootProps');
            expect(context).toHaveProperty('defaults');
            expect(context).toHaveProperty('modelValue');
            expect(context).toHaveProperty('state');
            expect(context).toHaveProperty('rootEmit');
            expect(context).toHaveProperty('calendars');
            expect(context).toHaveProperty('month');
            expect(context).toHaveProperty('year');
            expect(context).toHaveProperty('time');
            expect(context).toHaveProperty('today');
            expect(context).toHaveProperty('inputValue');
            expect(context).toHaveProperty('setState');
            expect(context).toHaveProperty('isMobile');
            expect(context).toHaveProperty('isTextInputDate');
        });

        it('should initialize with provided props', () => {
            const customProps = { readonly: true };
            const { ParentComponent, ChildComponent } = createTestComponents(customProps);
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);

            expect(child.vm.context?.rootProps.readonly).toBe(true);
        });
    });

    describe('state management', () => {
        it('should allow updating state via setState', async () => {
            const { ParentComponent, ChildComponent } = createTestComponents();
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const { setState, state } = child.vm.context!;

            setState('menuFocused', true);
            await wrapper.vm.$nextTick();

            expect(state.menuFocused).toBe(true);
        });
    });

    describe('modelValue computed', () => {
        it('should allow setting modelValue when not readonly or disabled', async () => {
            const { ParentComponent, ChildComponent } = createTestComponents();
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const { modelValue } = child.vm.context!;
            const newDate = new Date('2024-06-15');

            modelValue.value = newDate;
            await wrapper.vm.$nextTick();

            expect(modelValue.value).toBe(newDate);
        });

        it('should not set modelValue when readonly', async () => {
            const { ParentComponent, ChildComponent } = createTestComponents({ readonly: true });
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const { modelValue } = child.vm.context!;

            modelValue.value = new Date('2024-06-15');
            await wrapper.vm.$nextTick();

            expect(modelValue.value).toBeNull();
        });
    });
});
