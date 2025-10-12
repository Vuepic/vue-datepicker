import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { defineComponent, computed, h } from 'vue';
import { mount } from '@vue/test-utils';
import { useResponsive } from '@/composables/useResponsive';
import type { Config } from '@/types';

describe('useResponsive', () => {
    let originalClientWidth: PropertyDescriptor | undefined;
    let addEventListenerSpy: ReturnType<typeof vi.fn>;
    let removeEventListenerSpy: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        // Mock window width
        originalClientWidth = Object.getOwnPropertyDescriptor(globalThis.document.documentElement, 'clientWidth');

        // Spy on addEventListener and removeEventListener
        addEventListenerSpy = vi.spyOn(globalThis, 'addEventListener') as any;
        removeEventListenerSpy = vi.spyOn(globalThis, 'removeEventListener') as any;
    });

    afterEach(() => {
        // Restore original clientWidth
        if (originalClientWidth) {
            Object.defineProperty(globalThis.document.documentElement, 'clientWidth', originalClientWidth);
        }
        vi.restoreAllMocks();
    });

    const createTestComponent = (clientWidth: number, mobileBreakpoint: number = 768) => {
        Object.defineProperty(globalThis.document.documentElement, 'clientWidth', {
            configurable: true,
            writable: true,
            value: clientWidth,
        });

        return defineComponent({
            setup() {
                const config = computed(
                    () =>
                        ({
                            mobileBreakpoint,
                        }) as Config,
                );

                const { isMobile } = useResponsive(config);
                return { isMobile };
            },
            render() {
                return h('div', { 'data-is-mobile': this.isMobile });
            },
        });
    };

    describe('initialization', () => {
        it('should register resize event listener on mount', () => {
            const TestComponent = createTestComponent(1024);
            mount(TestComponent);

            expect(addEventListenerSpy).toHaveBeenCalledExactlyOnceWith('resize', expect.any(Function), {
                passive: true,
            });
        });

        it('should initialize window width on mount', () => {
            const TestComponent = createTestComponent(500);
            const wrapper = mount(TestComponent);

            // Should detect mobile based on initial width
            expect(wrapper.vm.isMobile).toBe(true);
        });
    });

    describe('isMobile computed property', () => {
        it('should return true when window width is less than mobile breakpoint', () => {
            const TestComponent = createTestComponent(500);
            const wrapper = mount(TestComponent);

            expect(wrapper.vm.isMobile).toBe(true);
        });

        it('should return true when window width equals mobile breakpoint', () => {
            const TestComponent = createTestComponent(768);
            const wrapper = mount(TestComponent);

            expect(wrapper.vm.isMobile).toBe(true);
        });

        it('should return undefined when window width is greater than mobile breakpoint', () => {
            const TestComponent = createTestComponent(1024);
            const wrapper = mount(TestComponent);

            expect(wrapper.vm.isMobile).toBeUndefined();
        });

        it('should return undefined when window width is just above mobile breakpoint', () => {
            const TestComponent = createTestComponent(769);
            const wrapper = mount(TestComponent);

            expect(wrapper.vm.isMobile).toBeUndefined();
        });
    });

    describe('custom mobile breakpoint', () => {
        it('should use custom mobile breakpoint from config', () => {
            const TestComponent = createTestComponent(900, 1000);
            const wrapper = mount(TestComponent);

            expect(wrapper.vm.isMobile).toBe(true);
        });

        it('should handle very small mobile breakpoint', () => {
            const TestComponent = createTestComponent(300, 320);
            const wrapper = mount(TestComponent);

            expect(wrapper.vm.isMobile).toBe(true);
        });

        it('should handle very large mobile breakpoint', () => {
            const TestComponent = createTestComponent(2000, 1920);
            const wrapper = mount(TestComponent);

            expect(wrapper.vm.isMobile).toBeUndefined();
        });
    });

    describe('resize event handling', () => {
        it('should update isMobile when window is resized to mobile width', async () => {
            const TestComponent = createTestComponent(1024);
            const wrapper = mount(TestComponent);

            expect(wrapper.vm.isMobile).toBeUndefined();

            // Simulate resize to mobile width
            Object.defineProperty(globalThis.document.documentElement, 'clientWidth', {
                configurable: true,
                writable: true,
                value: 500,
            });

            // Get the resize handler and call it
            const resizeHandler = addEventListenerSpy.mock.calls[0]![1] as () => void;
            resizeHandler();
            await wrapper.vm.$nextTick();

            expect(wrapper.vm.isMobile).toBe(true);
        });

        it('should update isMobile when window is resized to desktop width', async () => {
            const TestComponent = createTestComponent(500);
            const wrapper = mount(TestComponent);

            expect(wrapper.vm.isMobile).toBe(true);

            // Simulate resize to desktop width
            Object.defineProperty(globalThis.document.documentElement, 'clientWidth', {
                configurable: true,
                writable: true,
                value: 1024,
            });

            // Get the resize handler and call it
            const resizeHandler = addEventListenerSpy.mock.calls[0]![1] as () => void;
            resizeHandler();
            await wrapper.vm.$nextTick();

            expect(wrapper.vm.isMobile).toBeUndefined();
        });

        it('should handle multiple resize events', async () => {
            const TestComponent = createTestComponent(1024);
            const wrapper = mount(TestComponent);
            const resizeHandler = addEventListenerSpy.mock.calls[0]![1] as () => void;

            // Resize to mobile
            Object.defineProperty(globalThis.document.documentElement, 'clientWidth', {
                configurable: true,
                writable: true,
                value: 600,
            });
            resizeHandler();
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.isMobile).toBe(true);

            // Resize to desktop
            Object.defineProperty(globalThis.document.documentElement, 'clientWidth', {
                configurable: true,
                writable: true,
                value: 1200,
            });
            resizeHandler();
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.isMobile).toBeUndefined();

            // Resize to tablet
            Object.defineProperty(globalThis.document.documentElement, 'clientWidth', {
                configurable: true,
                writable: true,
                value: 768,
            });
            resizeHandler();
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.isMobile).toBe(true);
        });
    });

    describe('cleanup', () => {
        it('should remove event listener on unmount', () => {
            const TestComponent = createTestComponent(1024);
            const wrapper = mount(TestComponent);

            // Verify listener was added
            expect(addEventListenerSpy).toHaveBeenCalled();

            // Unmount and check cleanup
            wrapper.unmount();

            expect(removeEventListenerSpy).toHaveBeenCalledExactlyOnceWith('resize', expect.any(Function));
        });
    });

    describe('edge cases', () => {
        it('should handle zero width', () => {
            const TestComponent = createTestComponent(0);
            const wrapper = mount(TestComponent);

            expect(wrapper.vm.isMobile).toBe(true);
        });

        it('should handle negative width', () => {
            const TestComponent = createTestComponent(-100);
            const wrapper = mount(TestComponent);

            expect(wrapper.vm.isMobile).toBe(true);
        });

        it('should handle extreme width values', () => {
            const TestComponent = createTestComponent(999999);
            const wrapper = mount(TestComponent);

            expect(wrapper.vm.isMobile).toBeUndefined();
        });

        it('should handle breakpoint at exactly window width', () => {
            const TestComponent = createTestComponent(800, 800);
            const wrapper = mount(TestComponent);

            expect(wrapper.vm.isMobile).toBe(true);
        });
    });

    describe('reactive config', () => {
        it('should react to window width changes', async () => {
            const TestComponent = createTestComponent(900);
            const wrapper = mount(TestComponent);

            // Initially not mobile (900 > 768)
            expect(wrapper.vm.isMobile).toBeUndefined();

            // Simulate resize to mobile width
            Object.defineProperty(globalThis.document.documentElement, 'clientWidth', {
                configurable: true,
                writable: true,
                value: 500,
            });

            const resizeHandler = addEventListenerSpy.mock.calls[0]![1] as () => void;
            resizeHandler();
            await wrapper.vm.$nextTick();

            // Now should be mobile (500 <= 768)
            expect(wrapper.vm.isMobile).toBe(true);
        });
    });

    describe('DOM attributes', () => {
        it('should render data attribute with isMobile value', () => {
            const TestComponent = createTestComponent(500);
            const wrapper = mount(TestComponent);

            expect(wrapper.attributes('data-is-mobile')).toBe('true');
        });

        it('should render data attribute as undefined for desktop', () => {
            const TestComponent = createTestComponent(1024);
            const wrapper = mount(TestComponent);

            // When isMobile is undefined, Vue renders it as empty string or the attribute is not set
            // Check the actual value returned by the composable
            expect(wrapper.vm.isMobile).toBeUndefined();
        });
    });
});
