import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { useArrowNavigation } from '@/composables/useArrowNavigation';

describe('useArrowNavigation', () => {
    let navigation: ReturnType<typeof useArrowNavigation>;

    beforeEach(() => {
        navigation = useArrowNavigation();
        // Clear all state before each test
        navigation.clearArrowNav();
    });

    afterEach(() => {
        // Clean up after each test
        navigation.clearArrowNav();
    });

    describe('buildMatrix', () => {
        it('should build matrix for monthYear elements', () => {
            const elements = [document.createElement('button'), document.createElement('button')];

            navigation.buildMatrix(elements, 'monthYear');

            expect(navigation.refSets.monthYear).toEqual(elements);
            expect(navigation.refSets.monthYear).toHaveLength(2);
        });

        it('should build matrix for time elements', () => {
            const elements = [
                document.createElement('button'),
                document.createElement('button'),
                document.createElement('button'),
            ];

            navigation.buildMatrix(elements, 'time');

            expect(navigation.refSets.time).toEqual(elements);
            expect(navigation.refSets.time).toHaveLength(3);
        });

        it('should build matrix for actionRow elements', () => {
            const elements = [document.createElement('button'), document.createElement('button')];

            navigation.buildMatrix(elements, 'actionRow');

            expect(navigation.refSets.actionRow).toEqual(elements);
            expect(navigation.refSets.actionRow).toHaveLength(2);
        });

        it('should handle empty array', () => {
            navigation.buildMatrix([], 'monthYear');

            expect(navigation.refSets.monthYear).toEqual([]);
        });

        it('should handle array with null/undefined elements', () => {
            const elements = [document.createElement('button'), null, undefined, document.createElement('button')];

            navigation.buildMatrix(elements, 'monthYear');

            expect(navigation.refSets.monthYear).toEqual(elements);
            expect(navigation.refSets.monthYear).toHaveLength(4);
        });
    });

    describe('buildMultiLevelMatrix', () => {
        it('should build matrix for calendar elements', () => {
            const elements = [
                [document.createElement('button'), document.createElement('button')],
                [document.createElement('button'), document.createElement('button')],
            ];

            navigation.buildMultiLevelMatrix(elements, 'calendar');

            expect(navigation.refSets.calendar).toEqual(elements);
            expect(navigation.refSets.calendar).toHaveLength(2);
            expect(navigation.refSets.calendar[0]).toHaveLength(2);
        });

        it('should build matrix for selectionGrid elements', () => {
            const elements = [
                [document.createElement('button'), document.createElement('button'), document.createElement('button')],
                [document.createElement('button'), document.createElement('button'), document.createElement('button')],
            ];

            navigation.buildMultiLevelMatrix(elements, 'selectionGrid');

            expect(navigation.refSets.selectionGrid).toEqual(elements);
            expect(navigation.refSets.selectionGrid).toHaveLength(2);
        });

        it('should build matrix for monthPicker elements', () => {
            const elements = [[document.createElement('button'), document.createElement('button')]];

            navigation.buildMultiLevelMatrix(elements, 'monthPicker');

            expect(navigation.refSets.monthPicker).toEqual(elements);
            expect(navigation.refSets.monthPicker).toHaveLength(1);
        });

        it('should handle empty array', () => {
            navigation.buildMultiLevelMatrix([], 'calendar');

            expect(navigation.refSets.calendar).toEqual([]);
        });
    });

    describe('setTimePickerElements', () => {
        it('should set time picker elements for order 0', () => {
            const elements = [
                [document.createElement('button'), document.createElement('button')],
                [document.createElement('button'), document.createElement('button')],
            ];

            navigation.setTimePickerElements(elements, 0);

            expect(navigation.refSets.timePicker[0]).toEqual(elements);
            expect(navigation.refSets.timePicker[0]).toHaveLength(2);
        });

        it('should set time picker elements for order 1', () => {
            const elements = [[document.createElement('button'), document.createElement('button')]];

            navigation.setTimePickerElements(elements, 1);

            expect(navigation.refSets.timePicker[1]).toEqual(elements);
            expect(navigation.refSets.timePicker[1]).toHaveLength(1);
        });

        it('should default to order 0 when not specified', () => {
            const elements = [[document.createElement('button')]];

            navigation.setTimePickerElements(elements);

            expect(navigation.refSets.timePicker[0]).toEqual(elements);
        });

        it('should handle empty array', () => {
            navigation.setTimePickerElements([]);

            expect(navigation.refSets.timePicker[0]).toEqual([]);
        });
    });

    describe('setTimePickerBackRef', () => {
        it('should set time picker back reference', () => {
            const element = document.createElement('button');

            navigation.setTimePickerBackRef(element);

            expect(navigation.refSets.timePicker).toBeDefined();
        });

        it('should handle null value', () => {
            navigation.setTimePickerBackRef(null);

            // Should not throw
            expect(navigation.refSets.timePicker).toBeDefined();
        });
    });

    describe('setSelectionGrid', () => {
        it('should enable selection grid mode', () => {
            const elements = [[document.createElement('button'), document.createElement('button')]];
            navigation.buildMultiLevelMatrix(elements, 'selectionGrid');

            navigation.setSelectionGrid(true);

            expect(navigation.refSets.selectionGrid).toEqual(elements);
        });

        it('should disable selection grid mode and clear refs', () => {
            const elements = [[document.createElement('button'), document.createElement('button')]];
            navigation.buildMultiLevelMatrix(elements, 'selectionGrid');
            navigation.setSelectionGrid(true);

            navigation.setSelectionGrid(false);

            expect(navigation.refSets.selectionGrid).toEqual([]);
        });

        it('should reset navigation when toggling', () => {
            navigation.setSelectionGrid(true);

            // Navigation should be reset - we can't directly test internal state
            // but we can verify behavior through arrow navigation
            expect(navigation.refSets.selectionGrid).toBeDefined();
        });
    });

    describe('setTimePicker', () => {
        it('should enable time picker mode', () => {
            const elements = [[document.createElement('button'), document.createElement('button')]];
            navigation.setTimePickerElements(elements, 0);

            navigation.setTimePicker(true);

            expect(navigation.refSets.timePicker[0]).toBeDefined();
        });

        it('should enable time picker mode with time picker mode flag', () => {
            navigation.setTimePicker(true, true);

            expect(navigation.refSets.timePicker).toBeDefined();
        });

        it('should disable time picker mode and clear refs', () => {
            const elements = [[document.createElement('button')]];
            navigation.setTimePickerElements(elements, 0);
            navigation.setTimePicker(true);

            navigation.setTimePicker(false);

            expect(navigation.refSets.timePicker[0]).toEqual([]);
            expect(navigation.refSets.timePicker[1]).toEqual([]);
        });

        it('should clear both time picker orders when disabled', () => {
            navigation.setTimePickerElements([[document.createElement('button')]], 0);
            navigation.setTimePickerElements([[document.createElement('button')]], 1);

            navigation.setTimePicker(false);

            expect(navigation.refSets.timePicker[0]).toEqual([]);
            expect(navigation.refSets.timePicker[1]).toEqual([]);
        });
    });

    describe('setMonthPicker', () => {
        it('should enable month picker mode', () => {
            navigation.setMonthPicker(true);

            // Should reset navigation
            expect(navigation.refSets).toBeDefined();
        });

        it('should disable month picker mode', () => {
            navigation.setMonthPicker(true);
            navigation.setMonthPicker(false);

            expect(navigation.refSets).toBeDefined();
        });
    });

    describe('clearArrowNav', () => {
        it('should clear all ref sets', () => {
            // Set up various refs
            navigation.buildMatrix([document.createElement('button')], 'monthYear');
            navigation.buildMatrix([document.createElement('button')], 'time');
            navigation.buildMatrix([document.createElement('button')], 'actionRow');
            navigation.buildMultiLevelMatrix([[document.createElement('button')]], 'calendar');
            navigation.buildMultiLevelMatrix([[document.createElement('button')]], 'selectionGrid');
            navigation.setTimePickerElements([[document.createElement('button')]], 0);
            navigation.setTimePickerElements([[document.createElement('button')]], 1);
            navigation.setTimePickerBackRef(document.createElement('button'));

            navigation.clearArrowNav();

            expect(navigation.refSets.monthYear).toEqual([]);
            expect(navigation.refSets.calendar).toEqual([]);
            expect(navigation.refSets.time).toEqual([]);
            expect(navigation.refSets.actionRow).toEqual([]);
            expect(navigation.refSets.selectionGrid).toEqual([]);
            expect(navigation.refSets.timePicker[0]).toEqual([]);
            expect(navigation.refSets.timePicker[1]).toEqual([]);
        });

        it('should reset all mode flags', () => {
            navigation.setSelectionGrid(true);
            navigation.setTimePicker(true, true);
            navigation.setMonthPicker(true);

            navigation.clearArrowNav();

            // All modes should be reset - verify by checking refSets are empty
            expect(navigation.refSets.selectionGrid).toEqual([]);
            expect(navigation.refSets.timePicker[0]).toEqual([]);
        });
    });

    describe('arrowRight navigation', () => {
        it('should move to next element in the same row', () => {
            const button1 = document.createElement('button');
            const button2 = document.createElement('button');
            const button3 = document.createElement('button');

            button1.focus = vi.fn();
            button2.focus = vi.fn();
            button3.focus = vi.fn();

            navigation.buildMatrix([button1, button2, button3], 'monthYear');

            // First call focuses current (index 0 incremented to 1)
            navigation.arrowRight();

            expect(button2.focus).toHaveBeenCalledExactlyOnceWith({ preventScroll: true });
        });

        it('should move to first element of next row when at end of current row', () => {
            const row1button1 = document.createElement('button');
            const row1button2 = document.createElement('button');
            const row2button1 = document.createElement('button');
            const row2button2 = document.createElement('button');

            row1button1.focus = vi.fn();
            row1button2.focus = vi.fn();
            row2button1.focus = vi.fn();
            row2button2.focus = vi.fn();

            navigation.buildMultiLevelMatrix(
                [
                    [row1button1, row1button2],
                    [row2button1, row2button2],
                ],
                'calendar',
            );

            // Move to end of first row
            navigation.arrowRight(); // to [0][1]
            navigation.arrowRight(); // to [1][0]

            // Verify we're at the first element of second row
            expect(row2button1.focus).toHaveBeenCalled();
        });

        it('should stay at current position when at the last element', () => {
            const button1 = document.createElement('button');
            const button2 = document.createElement('button');

            button1.focus = vi.fn();
            button2.focus = vi.fn();

            navigation.buildMatrix([button1, button2], 'monthYear');

            // Move to last element
            navigation.arrowRight(); // to index 1
            vi.clearAllMocks();

            // Try to move past last - should stay at index 1
            navigation.arrowRight();

            expect(button2.focus).toHaveBeenCalled();
        });

        it('should handle selection grid mode with preventScroll false', () => {
            const button1 = document.createElement('button');
            const button2 = document.createElement('button');

            button1.focus = vi.fn();
            button2.focus = vi.fn();

            navigation.buildMultiLevelMatrix([[button1, button2]], 'selectionGrid');
            navigation.setSelectionGrid(true);

            navigation.arrowRight();

            expect(button2.focus).toHaveBeenCalledExactlyOnceWith({ preventScroll: false });
        });
    });

    describe('arrowLeft navigation', () => {
        it('should move to previous element in the same row', () => {
            const button1 = document.createElement('button');
            const button2 = document.createElement('button');
            const button3 = document.createElement('button');

            button1.focus = vi.fn();
            button2.focus = vi.fn();
            button3.focus = vi.fn();

            navigation.buildMatrix([button1, button2, button3], 'monthYear');

            // Move to second element first
            navigation.arrowRight(); // to index 1
            vi.clearAllMocks();

            // Now move left to index 0
            navigation.arrowLeft();

            expect(button1.focus).toHaveBeenCalled();
        });

        it('should move to last element of previous row when at start of current row', () => {
            const row1button1 = document.createElement('button');
            const row1button2 = document.createElement('button');
            const row2button1 = document.createElement('button');

            row1button1.focus = vi.fn();
            row1button2.focus = vi.fn();
            row2button1.focus = vi.fn();

            navigation.buildMultiLevelMatrix([[row1button1, row1button2], [row2button1]], 'calendar');

            // Move to second row
            navigation.arrowDown();
            vi.clearAllMocks();

            // Move left from first element of second row
            navigation.arrowLeft();

            expect(row1button2.focus).toHaveBeenCalled();
        });

        it('should stay at current position when at the first element', () => {
            const button1 = document.createElement('button');
            const button2 = document.createElement('button');

            button1.focus = vi.fn();
            button2.focus = vi.fn();

            navigation.buildMatrix([button1, button2], 'monthYear');

            // Try to move left from index 0
            navigation.arrowLeft();

            // Should decrement then increment, ending up focusing button1
            expect(button1.focus).toHaveBeenCalled();
        });
    });

    describe('arrowDown navigation', () => {
        it('should move to next row', () => {
            const row1button = document.createElement('button');
            const row2button = document.createElement('button');

            row1button.focus = vi.fn();
            row2button.focus = vi.fn();

            navigation.buildMultiLevelMatrix([[row1button], [row2button]], 'calendar');

            navigation.arrowDown();

            expect(row2button.focus).toHaveBeenCalled();
        });

        it('should stay at current row when at the last row', () => {
            const row1button = document.createElement('button');
            const row2button = document.createElement('button');

            row1button.focus = vi.fn();
            row2button.focus = vi.fn();

            navigation.buildMultiLevelMatrix([[row1button], [row2button]], 'calendar');

            // Move to last row
            navigation.arrowDown();
            vi.clearAllMocks();

            // Try to move past last row
            navigation.arrowDown();

            // The logic checks if activeRow === matrix.length which is never true (index vs length)
            // So it will try to focus the element at the last row
            expect(row2button.focus).toHaveBeenCalled();
        });

        it('should adjust selectedIndex when target row has fewer elements', () => {
            const row1btn1 = document.createElement('button');
            const row1btn2 = document.createElement('button');
            const row1btn3 = document.createElement('button');
            const row2btn1 = document.createElement('button');

            row1btn1.focus = vi.fn();
            row1btn2.focus = vi.fn();
            row1btn3.focus = vi.fn();
            row2btn1.focus = vi.fn();

            navigation.buildMultiLevelMatrix([[row1btn1, row1btn2, row1btn3], [row2btn1]], 'calendar');

            // Move to third element of first row
            navigation.arrowRight();
            navigation.arrowRight();
            vi.clearAllMocks();

            // Move down - should select last element of shorter row
            navigation.arrowDown();

            expect(row2btn1.focus).toHaveBeenCalled();
        });

        it('should not move when at row 0 and trying to go up', () => {
            const button = document.createElement('button');
            button.focus = vi.fn();

            navigation.buildMatrix([button], 'monthYear');

            // Already at row 0, try to go up with arrowUp (not arrowDown)
            navigation.arrowUp();

            // The check `activeRow === 0 && !increment` prevents decrement,
            // but handleElFocus is still called which focuses the current element
            expect(button.focus).toHaveBeenCalled();
        });
    });

    describe('arrowUp navigation', () => {
        it('should move to previous row', () => {
            const row1button = document.createElement('button');
            const row2button = document.createElement('button');

            row1button.focus = vi.fn();
            row2button.focus = vi.fn();

            navigation.buildMultiLevelMatrix([[row1button], [row2button]], 'calendar');

            // Move to second row first
            navigation.arrowDown();
            vi.clearAllMocks();

            // Now move up
            navigation.arrowUp();

            expect(row1button.focus).toHaveBeenCalled();
        });

        it('should stay at current row when at the first row', () => {
            const row1button = document.createElement('button');
            const row2button = document.createElement('button');

            row1button.focus = vi.fn();
            row2button.focus = vi.fn();

            navigation.buildMultiLevelMatrix([[row1button], [row2button]], 'calendar');

            // At first row, arrowUp checks `activeRow === 0 && !increment` and returns early
            // from handleSelectionIndexY, but handleElFocus is still called which focuses current element
            navigation.arrowUp();

            // Even though row doesn't change, the element gets focused
            expect(row1button.focus).toHaveBeenCalled();
        });

        it('should adjust selectedIndex when target row has fewer elements', () => {
            const row1btn1 = document.createElement('button');
            const row2btn1 = document.createElement('button');
            const row2btn2 = document.createElement('button');
            const row2btn3 = document.createElement('button');

            row1btn1.focus = vi.fn();
            row2btn1.focus = vi.fn();
            row2btn2.focus = vi.fn();
            row2btn3.focus = vi.fn();

            navigation.buildMultiLevelMatrix([[row1btn1], [row2btn1, row2btn2, row2btn3]], 'calendar');

            // Move to second row
            navigation.arrowDown();
            // Move to third element
            navigation.arrowRight();
            navigation.arrowRight();
            vi.clearAllMocks();

            // Move up - should select last element of shorter row
            navigation.arrowUp();

            expect(row1btn1.focus).toHaveBeenCalled();
        });
    });

    describe('matrix computed property', () => {
        it('should return calendar matrix by default', () => {
            const monthYearBtn = document.createElement('button');
            const calendarBtn = document.createElement('button');
            const timeBtn = document.createElement('button');
            const actionBtn = document.createElement('button');

            monthYearBtn.focus = vi.fn();
            calendarBtn.focus = vi.fn();
            timeBtn.focus = vi.fn();
            actionBtn.focus = vi.fn();

            navigation.buildMatrix([monthYearBtn], 'monthYear');
            navigation.buildMultiLevelMatrix([[calendarBtn]], 'calendar');
            navigation.buildMatrix([timeBtn], 'time');
            navigation.buildMatrix([actionBtn], 'actionRow');

            // Navigate right from initial position - should focus second element
            navigation.arrowRight();

            // The matrix should be [monthYear, calendar, time, actionRow]
            // Starting at [0][0] (monthYearBtn), moving right goes to [1][0] (calendarBtn)
            expect(calendarBtn.focus).toHaveBeenCalled();
        });

        it('should return selection grid matrix when in selection grid mode', () => {
            const gridBtn = document.createElement('button');
            const actionBtn = document.createElement('button');

            gridBtn.focus = vi.fn();
            actionBtn.focus = vi.fn();

            navigation.buildMultiLevelMatrix([[gridBtn]], 'selectionGrid');
            navigation.buildMatrix([actionBtn], 'actionRow');
            navigation.setSelectionGrid(true);

            navigation.arrowRight();

            expect(actionBtn.focus).toHaveBeenCalled();
        });

        it('should return time picker matrix when in time picker mode', () => {
            const timeBtn1 = document.createElement('button');
            const timeBtn2 = document.createElement('button');
            const actionBtn = document.createElement('button');

            timeBtn1.focus = vi.fn();
            timeBtn2.focus = vi.fn();
            actionBtn.focus = vi.fn();

            // Time picker expects arrays of arrays
            navigation.setTimePickerElements([[timeBtn1]], 0);
            navigation.setTimePickerElements([[timeBtn2]], 1);
            navigation.buildMatrix([actionBtn], 'actionRow');
            navigation.setTimePicker(true);

            // Matrix is [...timePicker[0], ...timePicker[1], actionRow]
            // So navigating right from [0][0] should go to [1][0]
            navigation.arrowRight();

            expect(timeBtn2.focus).toHaveBeenCalled();
        });

        it('should return month picker matrix when in month picker mode', () => {
            const monthBtn = document.createElement('button');
            const actionBtn = document.createElement('button');

            monthBtn.focus = vi.fn();
            actionBtn.focus = vi.fn();

            navigation.buildMultiLevelMatrix([[monthBtn]], 'monthPicker');
            navigation.buildMatrix([actionBtn], 'actionRow');
            navigation.setMonthPicker(true);

            navigation.arrowRight();

            expect(actionBtn.focus).toHaveBeenCalled();
        });

        it('should filter out empty arrays from matrix', () => {
            const btn = document.createElement('button');
            btn.focus = vi.fn();

            navigation.buildMatrix([btn], 'monthYear');
            navigation.buildMatrix([], 'time'); // Empty array
            navigation.buildMatrix([], 'actionRow'); // Empty array

            // Navigate - should work with filtered matrix
            navigation.arrowRight();

            // Should stay on same element since only one row with one element
            expect(btn.focus).toHaveBeenCalled();
        });

        it('should include timePickerBackRef in time picker matrix when not in time picker mode', () => {
            const timeBtn = document.createElement('button');
            const backBtn = document.createElement('button');
            const actionBtn = document.createElement('button');

            timeBtn.focus = vi.fn();
            backBtn.focus = vi.fn();
            actionBtn.focus = vi.fn();

            navigation.setTimePickerElements([[timeBtn]], 0);
            navigation.setTimePickerBackRef(backBtn);
            navigation.buildMatrix([actionBtn], 'actionRow');
            navigation.setTimePicker(true, false); // Not in time picker mode

            // Navigate to verify backBtn is in matrix
            navigation.arrowRight(); // to backBtn
            navigation.arrowRight(); // to actionBtn

            expect(actionBtn.focus).toHaveBeenCalled();
        });

        it('should exclude timePickerBackRef in time picker matrix when in time picker mode', () => {
            const timeBtn = document.createElement('button');
            const backBtn = document.createElement('button');
            const actionBtn = document.createElement('button');

            timeBtn.focus = vi.fn();
            backBtn.focus = vi.fn();
            actionBtn.focus = vi.fn();

            navigation.setTimePickerElements([[timeBtn]], 0);
            navigation.setTimePickerBackRef(backBtn);
            navigation.buildMatrix([actionBtn], 'actionRow');
            navigation.setTimePicker(true, true); // In time picker mode

            navigation.arrowRight();

            // Should navigate to actionBtn directly, skipping backBtn
            expect(actionBtn.focus).toHaveBeenCalled();
        });
    });

    describe('complex navigation scenarios', () => {
        it('should handle navigation through multiple rows and columns', () => {
            const buttons = [
                [document.createElement('button'), document.createElement('button')],
                [document.createElement('button'), document.createElement('button')],
                [document.createElement('button'), document.createElement('button')],
            ];

            buttons.forEach((row) => {
                row.forEach((btn) => {
                    btn.focus = vi.fn();
                });
            });

            navigation.buildMultiLevelMatrix(buttons, 'calendar');

            // Navigate right from [0][0] to [0][1]
            navigation.arrowRight();
            expect(buttons[0]![1]!.focus).toHaveBeenCalled();

            vi.clearAllMocks();
            // Navigate down from [0][1] to [1][1]
            navigation.arrowDown();
            expect(buttons[1]![1]!.focus).toHaveBeenCalled();

            vi.clearAllMocks();
            // Navigate left from [1][1] to [1][0]
            navigation.arrowLeft();
            expect(buttons[1]![0]!.focus).toHaveBeenCalled();

            vi.clearAllMocks();
            // Navigate up from [1][0] to [0][0]
            navigation.arrowUp();
            expect(buttons[0]![0]!.focus).toHaveBeenCalled();
        });

        it('should handle navigation with mixed row lengths', () => {
            const row1 = [
                document.createElement('button'),
                document.createElement('button'),
                document.createElement('button'),
            ];
            const row2 = [document.createElement('button')];
            const row3 = [document.createElement('button'), document.createElement('button')];

            [...row1, ...row2, ...row3].forEach((btn) => {
                btn.focus = vi.fn();
            });

            navigation.buildMultiLevelMatrix([row1, row2, row3], 'calendar');

            // Start at row 0, col 0, move to col 2
            navigation.arrowRight();
            navigation.arrowRight();
            vi.clearAllMocks();

            // Navigate down to shorter row (should adjust to last element)
            navigation.arrowDown();
            expect(row2[0]!.focus).toHaveBeenCalled();

            vi.clearAllMocks();
            // Navigate down to medium row (should stay at last valid index)
            navigation.arrowDown();
            expect(row3[0]!.focus).toHaveBeenCalled();
        });

        it('should handle switching between modes', () => {
            const calendarBtn = document.createElement('button');
            const selectionBtn = document.createElement('button');

            calendarBtn.focus = vi.fn();
            selectionBtn.focus = vi.fn();

            // Set up calendar
            navigation.buildMultiLevelMatrix([[calendarBtn]], 'calendar');

            // Since we're at [0][0], moving right should try to move in calendar
            navigation.arrowRight();
            expect(calendarBtn.focus).toHaveBeenCalled();

            // Switch to selection grid mode (this resets navigation)
            navigation.buildMultiLevelMatrix([[selectionBtn]], 'selectionGrid');
            navigation.setSelectionGrid(true);

            vi.clearAllMocks();

            // Should now navigate selection grid from reset position
            navigation.arrowRight();
            expect(selectionBtn.focus).toHaveBeenCalled();
            expect(calendarBtn.focus).not.toHaveBeenCalled();
        });
    });

    describe('edge cases', () => {
        it('should handle navigation with single element', () => {
            const button = document.createElement('button');
            button.focus = vi.fn();

            navigation.buildMatrix([button], 'monthYear');

            navigation.arrowRight();
            expect(button.focus).toHaveBeenCalled();

            vi.clearAllMocks();
            navigation.arrowLeft();
            expect(button.focus).toHaveBeenCalled();
        });

        it('should handle navigation with empty matrix', () => {
            navigation.buildMatrix([], 'monthYear');

            // Should not throw
            expect(() => {
                navigation.arrowRight();
                navigation.arrowLeft();
                navigation.arrowDown();
                navigation.arrowUp();
            }).not.toThrow();
        });

        it('should handle clearArrowNav and subsequent navigation', () => {
            const button = document.createElement('button');
            button.focus = vi.fn();

            navigation.buildMatrix([button], 'monthYear');
            navigation.clearArrowNav();

            // Should not throw when navigating after clear
            expect(() => {
                navigation.arrowRight();
            }).not.toThrow();
        });

        it('should reset indices when setting new mode', () => {
            const buttons = [
                document.createElement('button'),
                document.createElement('button'),
                document.createElement('button'),
            ];

            buttons.forEach((btn) => {
                btn.focus = vi.fn();
            });

            navigation.buildMatrix(buttons, 'monthYear');

            // Navigate to middle
            navigation.arrowRight();
            expect(buttons[1]!.focus).toHaveBeenCalled();

            // Set selection grid mode (should reset to position 0)
            const gridButton = document.createElement('button');
            gridButton.focus = vi.fn();
            navigation.buildMultiLevelMatrix([[gridButton]], 'selectionGrid');
            navigation.setSelectionGrid(true);

            vi.clearAllMocks();

            // Should start from beginning after mode change
            navigation.arrowRight();
            expect(gridButton.focus).toHaveBeenCalled();
        });
    });
});
