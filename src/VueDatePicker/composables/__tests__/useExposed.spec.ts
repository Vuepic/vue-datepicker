import { describe, it, expect, vi, beforeEach } from 'vitest';
import { shallowRef } from 'vue';
import { useExposed } from '@/composables/useExposed';
import type VueDatePicker from '@/VueDatePicker.vue';

describe('useExposed', () => {
    let mockDatePicker: any;
    let datePicker: ReturnType<typeof shallowRef<InstanceType<typeof VueDatePicker>>>;

    beforeEach(() => {
        // Create mock datepicker instance with all methods
        mockDatePicker = {
            openMenu: vi.fn(),
            closeMenu: vi.fn(),
            selectDate: vi.fn(),
            clearValue: vi.fn(),
            formatInputValue: vi.fn(),
            updateInternalModelValue: vi.fn(),
            setMonthYear: vi.fn(),
            parseModel: vi.fn(),
            switchView: vi.fn(),
            handleFlow: vi.fn(),
            toggleMenu: vi.fn(),
        };

        datePicker = shallowRef(mockDatePicker);
    });

    describe('openMenu', () => {
        it('should call openMenu on datepicker instance', () => {
            const exposed = useExposed(datePicker as any);

            exposed.openMenu();

            expect(mockDatePicker.openMenu).toHaveBeenCalledExactlyOnceWith();
        });

        it('should not throw when datepicker is null', () => {
            const nullDatePicker = shallowRef(null);
            const exposed = useExposed(nullDatePicker as any);

            expect(() => exposed.openMenu()).not.toThrow();
        });

        it('should not throw when datepicker is undefined', () => {
            const undefinedDatePicker = shallowRef(undefined);
            const exposed = useExposed(undefinedDatePicker as any);

            expect(() => exposed.openMenu()).not.toThrow();
        });
    });

    describe('closeMenu', () => {
        it('should call closeMenu on datepicker instance', () => {
            const exposed = useExposed(datePicker as any);

            exposed.closeMenu();

            expect(mockDatePicker.closeMenu).toHaveBeenCalledExactlyOnceWith();
        });

        it('should not throw when datepicker is null', () => {
            const nullDatePicker = shallowRef(null);
            const exposed = useExposed(nullDatePicker as any);

            expect(() => exposed.closeMenu()).not.toThrow();
        });
    });

    describe('selectDate', () => {
        it('should call selectDate on datepicker instance', () => {
            const exposed = useExposed(datePicker as any);

            exposed.selectDate();

            expect(mockDatePicker.selectDate).toHaveBeenCalledExactlyOnceWith();
        });

        it('should not throw when datepicker is null', () => {
            const nullDatePicker = shallowRef(null);
            const exposed = useExposed(nullDatePicker as any);

            expect(() => exposed.selectDate()).not.toThrow();
        });
    });

    describe('clearValue', () => {
        it('should call clearValue on datepicker instance', () => {
            const exposed = useExposed(datePicker as any);

            exposed.clearValue();

            expect(mockDatePicker.clearValue).toHaveBeenCalledExactlyOnceWith();
        });

        it('should not throw when datepicker is null', () => {
            const nullDatePicker = shallowRef(null);
            const exposed = useExposed(nullDatePicker as any);

            expect(() => exposed.clearValue()).not.toThrow();
        });
    });

    describe('formatInputValue', () => {
        it('should call formatInputValue on datepicker instance', () => {
            const exposed = useExposed(datePicker as any);

            exposed.formatInputValue();

            expect(mockDatePicker.formatInputValue).toHaveBeenCalledExactlyOnceWith();
        });

        it('should not throw when datepicker is null', () => {
            const nullDatePicker = shallowRef(null);
            const exposed = useExposed(nullDatePicker as any);

            expect(() => exposed.formatInputValue()).not.toThrow();
        });
    });

    describe('updateInternalModelValue', () => {
        it('should call updateInternalModelValue with single date', () => {
            const exposed = useExposed(datePicker as any);
            const date = new Date('2024-06-15');

            exposed.updateInternalModelValue(date);

            expect(mockDatePicker.updateInternalModelValue).toHaveBeenCalledExactlyOnceWith(date);
        });

        it('should call updateInternalModelValue with date array', () => {
            const exposed = useExposed(datePicker as any);
            const dateRange = [new Date('2024-01-01'), new Date('2024-01-15')];

            exposed.updateInternalModelValue(dateRange);

            expect(mockDatePicker.updateInternalModelValue).toHaveBeenCalledExactlyOnceWith(dateRange);
        });

        it('should not throw when datepicker is null', () => {
            const nullDatePicker = shallowRef(null);
            const exposed = useExposed(nullDatePicker as any);
            const date = new Date('2024-06-15');

            expect(() => exposed.updateInternalModelValue(date)).not.toThrow();
        });
    });

    describe('setMonthYear', () => {
        it('should call setMonthYear with month only', () => {
            const exposed = useExposed(datePicker as any);
            const value = { month: 5 };

            exposed.setMonthYear(value);

            expect(mockDatePicker.setMonthYear).toHaveBeenCalledExactlyOnceWith(value);
        });

        it('should call setMonthYear with year only', () => {
            const exposed = useExposed(datePicker as any);
            const value = { year: 2024 };

            exposed.setMonthYear(value);

            expect(mockDatePicker.setMonthYear).toHaveBeenCalledExactlyOnceWith(value);
        });

        it('should call setMonthYear with both month and year', () => {
            const exposed = useExposed(datePicker as any);
            const value = { month: 11, year: 2025 };

            exposed.setMonthYear(value);

            expect(mockDatePicker.setMonthYear).toHaveBeenCalledExactlyOnceWith(value);
        });

        it('should call setMonthYear with empty object', () => {
            const exposed = useExposed(datePicker as any);
            const value = {};

            exposed.setMonthYear(value);

            expect(mockDatePicker.setMonthYear).toHaveBeenCalledExactlyOnceWith(value);
        });

        it('should not throw when datepicker is null', () => {
            const nullDatePicker = shallowRef(null);
            const exposed = useExposed(nullDatePicker as any);
            const value = { month: 5, year: 2024 };

            expect(() => exposed.setMonthYear(value)).not.toThrow();
        });
    });

    describe('parseModel', () => {
        it('should call parseModel on datepicker instance', () => {
            const exposed = useExposed(datePicker as any);

            exposed.parseModel();

            expect(mockDatePicker.parseModel).toHaveBeenCalledExactlyOnceWith();
        });

        it('should not throw when datepicker is null', () => {
            const nullDatePicker = shallowRef(null);
            const exposed = useExposed(nullDatePicker as any);

            expect(() => exposed.parseModel()).not.toThrow();
        });
    });

    describe('switchView', () => {
        it('should call switchView with view only', () => {
            const exposed = useExposed(datePicker as any);
            const view = 'month' as const;

            exposed.switchView(view);

            expect(mockDatePicker.switchView).toHaveBeenCalledExactlyOnceWith(view, undefined);
        });

        it('should call switchView with view and instance', () => {
            const exposed = useExposed(datePicker as any);
            const view = 'year' as const;
            const instance = 1;

            exposed.switchView(view, instance);

            expect(mockDatePicker.switchView).toHaveBeenCalledExactlyOnceWith(view, instance);
        });

        it('should call switchView with instance 0', () => {
            const exposed = useExposed(datePicker as any);
            const view = 'day' as const;

            exposed.switchView(view as any, 0);

            expect(mockDatePicker.switchView).toHaveBeenCalledExactlyOnceWith(view, 0);
        });

        it('should not throw when datepicker is null', () => {
            const nullDatePicker = shallowRef(null);
            const exposed = useExposed(nullDatePicker as any);
            const view = 'month' as const;

            expect(() => exposed.switchView(view)).not.toThrow();
        });
    });

    describe('toggleMenu', () => {
        it('should call toggleMenu on datepicker instance', () => {
            const exposed = useExposed(datePicker as any);

            exposed.toggleMenu();

            expect(mockDatePicker.toggleMenu).toHaveBeenCalledExactlyOnceWith();
        });

        it('should not throw when datepicker is null', () => {
            const nullDatePicker = shallowRef(null);
            const exposed = useExposed(nullDatePicker as any);

            expect(() => exposed.toggleMenu()).not.toThrow();
        });
    });

    describe('handleFlow', () => {
        it('should call handleFlow on datepicker instance', () => {
            const exposed = useExposed(datePicker as any);

            exposed.handleFlow();

            expect(mockDatePicker.handleFlow).toHaveBeenCalledExactlyOnceWith();
        });

        it('should not throw when datepicker is null', () => {
            const nullDatePicker = shallowRef(null);
            const exposed = useExposed(nullDatePicker as any);

            expect(() => exposed.handleFlow()).not.toThrow();
        });
    });

    describe('return value', () => {
        it('should return object with all exposed methods', () => {
            const exposed = useExposed(datePicker as any);

            expect(exposed).toHaveProperty('openMenu');
            expect(exposed).toHaveProperty('closeMenu');
            expect(exposed).toHaveProperty('selectDate');
            expect(exposed).toHaveProperty('clearValue');
            expect(exposed).toHaveProperty('formatInputValue');
            expect(exposed).toHaveProperty('updateInternalModelValue');
            expect(exposed).toHaveProperty('setMonthYear');
            expect(exposed).toHaveProperty('parseModel');
            expect(exposed).toHaveProperty('switchView');
            expect(exposed).toHaveProperty('handleFlow');
            expect(exposed).toHaveProperty('toggleMenu');
        });

        it('should return functions for all methods', () => {
            const exposed = useExposed(datePicker as any);

            expect(typeof exposed.openMenu).toBe('function');
            expect(typeof exposed.closeMenu).toBe('function');
            expect(typeof exposed.selectDate).toBe('function');
            expect(typeof exposed.clearValue).toBe('function');
            expect(typeof exposed.formatInputValue).toBe('function');
            expect(typeof exposed.updateInternalModelValue).toBe('function');
            expect(typeof exposed.setMonthYear).toBe('function');
            expect(typeof exposed.parseModel).toBe('function');
            expect(typeof exposed.switchView).toBe('function');
            expect(typeof exposed.handleFlow).toBe('function');
            expect(typeof exposed.toggleMenu).toBe('function');
        });
    });

    describe('multiple calls', () => {
        it('should allow calling same method multiple times', () => {
            const exposed = useExposed(datePicker as any);

            exposed.openMenu();
            exposed.openMenu();
            exposed.openMenu();

            expect(mockDatePicker.openMenu).toHaveBeenCalledTimes(3);
        });

        it('should allow calling different methods in sequence', () => {
            const exposed = useExposed(datePicker as any);

            exposed.openMenu();
            exposed.selectDate();
            exposed.closeMenu();

            expect(mockDatePicker.openMenu).toHaveBeenCalledExactlyOnceWith();
            expect(mockDatePicker.selectDate).toHaveBeenCalledExactlyOnceWith();
            expect(mockDatePicker.closeMenu).toHaveBeenCalledExactlyOnceWith();
        });

        it('should maintain call order', () => {
            const callOrder: string[] = [];

            mockDatePicker.openMenu.mockImplementation(() => callOrder.push('open'));
            mockDatePicker.selectDate.mockImplementation(() => callOrder.push('select'));
            mockDatePicker.closeMenu.mockImplementation(() => callOrder.push('close'));

            const exposed = useExposed(datePicker as any);

            exposed.openMenu();
            exposed.selectDate();
            exposed.closeMenu();

            expect(callOrder).toEqual(['open', 'select', 'close']);
        });
    });

    describe('ref reactivity', () => {
        it('should work with updated ref value', () => {
            const exposed = useExposed(datePicker as any);

            // Create new mock instance
            const newMockDatePicker = {
                ...mockDatePicker,
                openMenu: vi.fn(),
            };

            // Update ref
            datePicker.value = newMockDatePicker;

            exposed.openMenu();

            expect(newMockDatePicker.openMenu).toHaveBeenCalledExactlyOnceWith();
            expect(mockDatePicker.openMenu).not.toHaveBeenCalled();
        });

        it('should handle transition from null to value', () => {
            const nullDatePicker = shallowRef(null);
            const exposed = useExposed(nullDatePicker as any);

            // Call when null (should not throw)
            exposed.openMenu();

            // Update to valid instance
            nullDatePicker.value = mockDatePicker;

            // Call again (should work now)
            exposed.openMenu();

            expect(mockDatePicker.openMenu).toHaveBeenCalledExactlyOnceWith();
        });

        it('should handle transition from value to null', () => {
            const exposed = useExposed(datePicker as any);

            // Call with valid instance
            exposed.openMenu();
            expect(mockDatePicker.openMenu).toHaveBeenCalledExactlyOnceWith();

            // Update to null
            datePicker.value = null as any;

            // Call when null (should not throw)
            expect(() => exposed.openMenu()).not.toThrow();
        });
    });

    describe('edge cases', () => {
        it('should throw when datepicker has missing methods', () => {
            const incompleteDatePicker = shallowRef({} as any);
            const exposed = useExposed(incompleteDatePicker);

            // Optional chaining prevents errors only when object is null/undefined
            // When object exists but method is missing, TypeError is thrown
            expect(() => exposed.openMenu()).toThrow(TypeError);
            expect(() => exposed.selectDate()).toThrow(TypeError);
        });

        it('should not call methods when datepicker is undefined', () => {
            const undefinedDatePicker = shallowRef(undefined);
            const exposed = useExposed(undefinedDatePicker as any);

            exposed.openMenu();
            exposed.closeMenu();
            exposed.selectDate();

            // No calls should be made
            expect(mockDatePicker.openMenu).not.toHaveBeenCalled();
        });

        it('should work with readonly shallowRef', () => {
            const readonlyDatePicker = shallowRef(mockDatePicker) as any;
            const exposed = useExposed(readonlyDatePicker);

            exposed.openMenu();

            expect(mockDatePicker.openMenu).toHaveBeenCalledExactlyOnceWith();
        });
    });
});
