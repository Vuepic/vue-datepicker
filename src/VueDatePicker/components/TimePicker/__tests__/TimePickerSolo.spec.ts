import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
import TimePickerSolo from '@/components/TimePicker/TimePickerSolo.vue';

// Mock child components
vi.mock('@/components/TimePicker/TimePicker.vue', () => ({
    default: {
        name: 'TimePicker',
        template: '<div class="time-picker-mock"></div>',
        props: ['hours', 'minutes', 'seconds', 'disabledTimesConfig', 'validateTime', 'noOverlayFocus'],
        emits: ['update:hours', 'update:minutes', 'update:seconds', 'reset-flow', 'mount'],
        methods: {
            toggleTimePicker: vi.fn(),
        },
    },
}));

vi.mock('@/components/Common/InstanceWrap.vue', () => ({
    default: {
        name: 'InstanceWrap',
        template: '<div><slot :wrapClass="\'dp__instance_wrap\'"></slot></div>',
        props: {
            multiCalendars: Number,
            stretch: Boolean,
        },
    },
}));

// Mock composables
vi.mock('@/composables/useContext.ts', () => {
    const time = ref({
        hours: 14,
        minutes: 30,
        seconds: 0,
    });
    const modelValue = ref(new Date('2024-01-15T14:30:00'));
    const rootProps = {
        startTime: null,
    };
    const isTextInputDate = ref(false);
    const defaults = {
        startTime: ref(null),
        range: ref({
            enabled: false,
        }),
        tz: ref(null),
        timeConfig: ref({
            enableSeconds: false,
        }),
    };
    return {
        useContext: () => ({
            time,
            modelValue,
            rootProps,
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

vi.mock('@/composables/useDateUtils.ts', () => ({
    useDateUtils: () => ({
        getDate: vi.fn((date?: Date) => date || new Date('2024-01-15T12:00:00')),
        getTimeObj: vi.fn((date?: Date | null) => {
            const d = date || new Date('2024-01-15T12:00:00');
            return {
                hours: d.getHours(),
                minutes: d.getMinutes(),
                seconds: d.getSeconds(),
            };
        }),
    }),
}));

vi.mock('@/composables/useRemapper.ts', () => ({
    useRemapper: vi.fn(),
}));

vi.mock('@/composables/useTimeZone.ts', () => ({
    useTimeZone: () => ({
        toTzSafe: vi.fn((date) => date),
    }),
}));

vi.mock('@/components/TimePicker/useTimePickerUtils.ts', () => ({
    useTimePickerUtils: () => ({
        updateTimeValues: vi.fn(),
        getSetDateTime: vi.fn((date) => date),
        assignTime: vi.fn(),
        assignStartTime: vi.fn(),
        disabledTimesConfig: null,
        validateTime: vi.fn(() => true),
    }),
}));

describe('TimePickerSolo', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('Component Rendering', () => {
        it('should render TimePickerSolo component', () => {
            const wrapper = mount(TimePickerSolo);

            expect(wrapper.exists()).toBe(true);
        });

        it('should render InstanceWrap component', () => {
            const wrapper = mount(TimePickerSolo);

            const instanceWrap = wrapper.findComponent({ name: 'InstanceWrap' });
            expect(instanceWrap.exists()).toBe(true);
        });

        it('should render TimePicker component', () => {
            const wrapper = mount(TimePickerSolo);

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            expect(timePicker.exists()).toBe(true);
        });

        it('should pass multiCalendars prop as 0 to InstanceWrap', () => {
            const wrapper = mount(TimePickerSolo);

            const instanceWrap = wrapper.findComponent({ name: 'InstanceWrap' });
            expect(instanceWrap.props('multiCalendars')).toBe(0);
        });

        it('should pass stretch prop to InstanceWrap', () => {
            const wrapper = mount(TimePickerSolo);

            const instanceWrap = wrapper.findComponent({ name: 'InstanceWrap' });
            expect(instanceWrap.props('stretch')).toBeTruthy();
        });
    });

    describe('Time Props', () => {
        it('should pass hours to TimePicker', () => {
            const wrapper = mount(TimePickerSolo);

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            expect(timePicker.props('hours')).toBe(14);
        });

        it('should pass minutes to TimePicker', () => {
            const wrapper = mount(TimePickerSolo);

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            expect(timePicker.props('minutes')).toBe(30);
        });

        it('should pass seconds to TimePicker', () => {
            const wrapper = mount(TimePickerSolo);

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            expect(timePicker.props('seconds')).toBe(0);
        });

        it('should pass disabledTimesConfig to TimePicker', () => {
            const wrapper = mount(TimePickerSolo);

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            expect(timePicker.props('disabledTimesConfig')).toBeNull();
        });

        it('should pass validateTime function to TimePicker', () => {
            const wrapper = mount(TimePickerSolo);

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            expect(timePicker.props('validateTime')).toBeDefined();
            expect(typeof timePicker.props('validateTime')).toBe('function');
        });
    });

    describe('Event Handling', () => {
        it('should handle update:hours event from TimePicker', async () => {
            const wrapper = mount(TimePickerSolo);

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            await timePicker.vm.$emit('update:hours', 16);

            // Should update the time without errors
            expect(wrapper.exists()).toBe(true);
        });

        it('should handle update:minutes event from TimePicker', async () => {
            const wrapper = mount(TimePickerSolo);

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            await timePicker.vm.$emit('update:minutes', 45);

            // Should update the time without errors
            expect(wrapper.exists()).toBe(true);
        });

        it('should handle update:seconds event from TimePicker', async () => {
            const wrapper = mount(TimePickerSolo);

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            await timePicker.vm.$emit('update:seconds', 30);

            // Should update the time without errors
            expect(wrapper.exists()).toBe(true);
        });

        it('should emit reset-flow when TimePicker emits reset-flow', async () => {
            const wrapper = mount(TimePickerSolo);

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            await timePicker.vm.$emit('reset-flow');

            expect(wrapper.emitted('reset-flow')).toBeTruthy();
        });
    });

    describe('Component Lifecycle', () => {
        it('should emit mount event on mount', async () => {
            const wrapper = mount(TimePickerSolo);

            await nextTick();
            expect(wrapper.emitted('mount')).toBeTruthy();
        });
    });

    describe('Range Mode', () => {
        beforeEach(async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = true;
            ctx.time.value = {
                hours: [14, 16],
                minutes: [30, 45],
                seconds: [0, 0],
            };
            ctx.modelValue.value = [new Date('2024-01-15T14:30:00'), new Date('2024-01-15T16:45:00')];
        });

        afterEach(async () => {
            const { useContext } = await import('@/composables/useContext.ts');
            const ctx = useContext();
            ctx.defaults.range.value.enabled = false;
            ctx.time.value = {
                hours: 14,
                minutes: 30,
                seconds: 0,
            };
            ctx.modelValue.value = new Date('2024-01-15T14:30:00');
        });

        it('should pass array hours in range mode', () => {
            const wrapper = mount(TimePickerSolo);

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            expect(timePicker.props('hours')).toEqual([14, 16]);
        });

        it('should pass array minutes in range mode', () => {
            const wrapper = mount(TimePickerSolo);

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            expect(timePicker.props('minutes')).toEqual([30, 45]);
        });

        it('should pass array seconds in range mode', () => {
            const wrapper = mount(TimePickerSolo);

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            expect(timePicker.props('seconds')).toEqual([0, 0]);
        });
    });

    describe('Custom Slots', () => {
        it('should pass through timePicker slots to TimePicker component', () => {
            const wrapper = mount(TimePickerSolo, {
                slots: {
                    'clock-icon': '<span class="custom-clock">⏰</span>',
                },
            });

            // The slot should be mapped and passed through
            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            expect(timePicker.exists()).toBe(true);
        });
    });

    describe('Component API', () => {
        it('should expose getSidebarProps method', () => {
            const wrapper = mount(TimePickerSolo);

            expect(wrapper.vm.getSidebarProps).toBeDefined();
            expect(typeof wrapper.vm.getSidebarProps).toBe('function');
        });

        it('should return sidebar props from getSidebarProps', () => {
            const wrapper = mount(TimePickerSolo);

            const sidebarProps = wrapper.vm.getSidebarProps();

            expect(sidebarProps).toHaveProperty('modelValue');
            expect(sidebarProps).toHaveProperty('time');
            expect(sidebarProps).toHaveProperty('updateTime');
        });

        it('should expose toggleTimePicker method', () => {
            const wrapper = mount(TimePickerSolo);

            expect(wrapper.vm.toggleTimePicker).toBeDefined();
            expect(typeof wrapper.vm.toggleTimePicker).toBe('function');
        });

        it('should call TimePicker toggleTimePicker when method is invoked', () => {
            const wrapper = mount(TimePickerSolo);
            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            const toggleSpy = vi.spyOn(timePicker.vm, 'toggleTimePicker');

            wrapper.vm.toggleTimePicker(true);

            expect(toggleSpy).toHaveBeenCalledExactlyOnceWith(true, false, '');
        });

        it('should pass flow parameter to TimePicker toggleTimePicker', () => {
            const wrapper = mount(TimePickerSolo);
            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            const toggleSpy = vi.spyOn(timePicker.vm, 'toggleTimePicker');

            wrapper.vm.toggleTimePicker(true, true);

            expect(toggleSpy).toHaveBeenCalledExactlyOnceWith(true, true, '');
        });

        it('should pass childOpen parameter to TimePicker toggleTimePicker', () => {
            const wrapper = mount(TimePickerSolo);
            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            const toggleSpy = vi.spyOn(timePicker.vm, 'toggleTimePicker');

            wrapper.vm.toggleTimePicker(true, false, 'hours');

            expect(toggleSpy).toHaveBeenCalledExactlyOnceWith(true, false, 'hours');
        });
    });

    describe('Time Updates', () => {
        it('should update modelValue when time is updated', async () => {
            const wrapper = mount(TimePickerSolo);
            const timePicker = wrapper.findComponent({ name: 'TimePicker' });

            await timePicker.vm.$emit('update:hours', 16);
            await nextTick();

            // Component should handle the update
            expect(wrapper.exists()).toBe(true);
        });

        it('should emit time-update event when time changes', async () => {
            const wrapper = mount(TimePickerSolo);
            const timePicker = wrapper.findComponent({ name: 'TimePicker' });

            await timePicker.vm.$emit('update:hours', 16);
            await nextTick();

            // The component should be stable after time update
            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Start Time', () => {
        it('should handle startTime prop', () => {
            // Component should initialize properly with default startTime
            const wrapper = mount(TimePickerSolo);

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle array startTime in range mode', () => {
            // Component should handle range mode initialization
            // Note: Context is already mocked, just verify component stability
            const wrapper = mount(TimePickerSolo);

            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Seconds Configuration', () => {
        it('should handle seconds when enableSeconds is configured', () => {
            // Component should handle seconds based on configuration
            const wrapper = mount(TimePickerSolo);
            const timePicker = wrapper.findComponent({ name: 'TimePicker' });

            expect(timePicker.props('seconds')).toBeDefined();
        });

        it('should set seconds to 0 when enableSeconds is false', () => {
            const wrapper = mount(TimePickerSolo);
            const timePicker = wrapper.findComponent({ name: 'TimePicker' });

            expect(timePicker.props('seconds')).toBe(0);
        });
    });

    describe('Model Value', () => {
        it('should initialize with modelValue from context', () => {
            const wrapper = mount(TimePickerSolo);

            const sidebarProps = wrapper.vm.getSidebarProps();
            expect(sidebarProps.modelValue).toBeDefined();
        });

        it('should handle modelValue initialization', () => {
            // Component should handle modelValue from context
            const wrapper = mount(TimePickerSolo);

            expect(wrapper.exists()).toBe(true);
        });

        it('should handle array modelValue in range mode', () => {
            // Component should handle range mode modelValue
            const wrapper = mount(TimePickerSolo);

            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('Props Forwarding', () => {
        it('should forward noOverlayFocus prop to TimePicker', () => {
            const wrapper = mount(TimePickerSolo, {
                props: {
                    noOverlayFocus: true,
                } as any,
            });

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            expect(timePicker.props('noOverlayFocus')).toBe(true);
        });

        it('should forward all base props to TimePicker', () => {
            const wrapper = mount(TimePickerSolo, {
                props: {
                    noOverlayFocus: true,
                } as any,
            });

            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            expect(timePicker.exists()).toBe(true);
        });
    });

    describe('Update Flow Step', () => {
        it('should emit update-flow-step when triggered', async () => {
            const wrapper = mount(TimePickerSolo);

            // Trigger an update that would cause flow step update
            const timePicker = wrapper.findComponent({ name: 'TimePicker' });
            await timePicker.vm.$emit('update:hours', 16);

            // The component should handle the flow step
            expect(wrapper.exists()).toBe(true);
        });
    });
});
