import { describe, it, expect } from 'vitest';
import { defineComponent, h } from 'vue';
import { mount } from '@vue/test-utils';
import { useContext } from '@/composables/useContext';
import { useInjector } from '@/composables/useInjector';
import type { RootPropsWithDefaults } from '@/types';

describe('useContext', () => {
    const createTestComponents = (withProvider = true) => {
        // eslint-disable-next-line vue/one-component-per-file
        const ChildComponent = defineComponent({
            setup() {
                try {
                    const context = useContext();
                    return { context, error: null };
                } catch (e) {
                    return { context: null, error: (e as Error).message };
                }
            },
            render() {
                return h('div', { 'data-testid': 'child' });
            },
        });

        // eslint-disable-next-line vue/one-component-per-file
        const ParentComponent = defineComponent({
            components: { ChildComponent },
            setup() {
                if (withProvider) {
                    const mockProps = {
                        modelValue: null,
                        readonly: false,
                        disabled: false,
                    } as RootPropsWithDefaults;

                    const mockEmit = (() => {}) as any;

                    useInjector(mockProps, mockEmit);
                }
            },
            render() {
                return h('div', [h(ChildComponent)]);
            },
        });

        return { ParentComponent, ChildComponent };
    };

    describe('with provider', () => {
        it('should return context when ContextKey is provided', () => {
            const { ParentComponent, ChildComponent } = createTestComponents(true);
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);

            expect(child.vm.context).toBeDefined();
            expect(child.vm.context).not.toBeNull();
            expect(child.vm.error).toBeNull();
        });

        it('should return context with all required properties', () => {
            const { ParentComponent, ChildComponent } = createTestComponents(true);
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

        it('should return readonly state', () => {
            const { ParentComponent, ChildComponent } = createTestComponents(true);
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const { state } = child.vm.context as any;

            expect(state).toBeDefined();
            expect(state).toHaveProperty('menuFocused');
            expect(state).toHaveProperty('shiftKeyInMenu');
            expect(state).toHaveProperty('isInputFocused');
        });

        it('should return time object', () => {
            const { ParentComponent, ChildComponent } = createTestComponents(true);
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const { time } = child.vm.context as any;

            expect(time).toBeDefined();
            expect(time).toHaveProperty('hours');
            expect(time).toHaveProperty('minutes');
            expect(time).toHaveProperty('seconds');
        });

        it('should return today as Date', () => {
            const { ParentComponent, ChildComponent } = createTestComponents(true);
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const { today } = child.vm.context as any;

            expect(today).toBeInstanceOf(Date);
        });

        it('should return calendars ref', () => {
            const { ParentComponent, ChildComponent } = createTestComponents(true);
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const { calendars } = child.vm.context as any;

            expect(calendars.value).toBeDefined();
            expect(Array.isArray(calendars.value)).toBe(true);
            expect(calendars.value.length).toBeGreaterThan(0);
            expect(calendars.value[0]).toHaveProperty('month');
            expect(calendars.value[0]).toHaveProperty('year');
        });

        it('should return month computed function', () => {
            const { ParentComponent, ChildComponent } = createTestComponents(true);
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const { month } = child.vm.context as any;

            expect(month.value).toBeInstanceOf(Function);
            expect(typeof month.value(0)).toBe('number');
        });

        it('should return year computed function', () => {
            const { ParentComponent, ChildComponent } = createTestComponents(true);
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const { year } = child.vm.context as any;

            expect(year.value).toBeInstanceOf(Function);
            expect(typeof year.value(0)).toBe('number');
        });

        it('should return setState function', () => {
            const { ParentComponent, ChildComponent } = createTestComponents(true);
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const { setState } = child.vm.context as any;

            expect(setState).toBeInstanceOf(Function);
        });

        it('should return modelValue computed ref', () => {
            const { ParentComponent, ChildComponent } = createTestComponents(true);
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const { modelValue } = child.vm.context as any;

            expect(modelValue).toBeDefined();
            expect(modelValue.value).toBeDefined();
        });

        it('should return inputValue ref', () => {
            const { ParentComponent, ChildComponent } = createTestComponents(true);
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const { inputValue } = child.vm.context as any;

            expect(inputValue).toBeDefined();
            expect(inputValue.value).toBe('');
        });

        it('should return isMobile computed', () => {
            const { ParentComponent, ChildComponent } = createTestComponents(true);
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const { isMobile } = child.vm.context as any;

            expect(isMobile.value).toBeDefined();
            expect(typeof isMobile.value).toBe('boolean');
        });

        it('should return isTextInputDate ref', () => {
            const { ParentComponent, ChildComponent } = createTestComponents(true);
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);
            const { isTextInputDate } = child.vm.context as any;

            expect(isTextInputDate.value).toBeDefined();
            expect(typeof isTextInputDate.value).toBe('boolean');
        });
    });

    describe('without provider', () => {
        it('should throw error when ContextKey is not provided', () => {
            const { ParentComponent, ChildComponent } = createTestComponents(false);
            const wrapper = mount(ParentComponent);
            const child = wrapper.findComponent(ChildComponent);

            expect(child.vm.context).toBeNull();
            expect(child.vm.error).toBe("Can't use context");
        });

        it('should throw Error with specific message', () => {
            // eslint-disable-next-line vue/one-component-per-file
            const TestComponent = defineComponent({
                setup() {
                    try {
                        useContext();
                        return { threw: false };
                    } catch (e) {
                        return {
                            threw: true,
                            errorMessage: (e as Error).message,
                            isError: e instanceof Error,
                        };
                    }
                },
                render() {
                    return h('div');
                },
            });

            const wrapper = mount(TestComponent);

            expect(wrapper.vm.threw).toBe(true);
            expect(wrapper.vm.errorMessage).toBe("Can't use context");
            expect(wrapper.vm.isError).toBe(true);
        });
    });
});
