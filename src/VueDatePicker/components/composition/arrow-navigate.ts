import { computed, reactive, ref } from 'vue';

const refSets = reactive({
    monthYear: [] as HTMLElement[],
    calendar: [] as HTMLElement[][],
    time: [] as HTMLElement[],
    actionRow: [] as HTMLElement[],
    selectionGrid: [] as HTMLElement[][],
    timePicker: {
        '0': [] as HTMLElement[][],
        '1': [] as HTMLElement[][],
    },
    monthPicker: [] as HTMLElement[][],
});
const timePickerBackRef = ref<HTMLElement | null>(null);
const isSelectionGrid = ref(false);
const isTimePicker = ref(false);
const isMonthPicker = ref(false);
const isTimePickerMode = ref(false);

const selectedIndex = ref(0);
const activeRow = ref(0);

export const useArrowNavigation = () => {
    const matrix = computed((): HTMLElement[][] => {
        return isSelectionGrid.value
            ? [...refSets.selectionGrid, refSets.actionRow].filter((set) => set.length)
            : isTimePicker.value
            ? [
                  ...refSets.timePicker[0],
                  ...refSets.timePicker[1],
                  isTimePickerMode.value ? [] : [timePickerBackRef.value as HTMLElement],
                  refSets.actionRow,
              ].filter((set) => set.length)
            : isMonthPicker.value
            ? [...refSets.monthPicker, refSets.actionRow]
            : [refSets.monthYear, ...refSets.calendar, refSets.time, refSets.actionRow].filter((set) => set.length);
    });

    // Handles left and right arrow
    const handleSelectionIndexX = (increment?: boolean): void => {
        selectedIndex.value = increment ? selectedIndex.value + 1 : selectedIndex.value - 1;
        let el = null;
        if (matrix.value[activeRow.value]) {
            el = matrix.value[activeRow.value][selectedIndex.value];
        }

        if (!el) {
            selectedIndex.value = increment ? selectedIndex.value - 1 : selectedIndex.value + 1;
        }
    };

    // Handles up and down arrow
    const handleSelectionIndexY = (increment?: boolean): void => {
        if ((activeRow.value === 0 && !increment) || (activeRow.value === matrix.value.length && increment)) return;
        activeRow.value = increment ? activeRow.value + 1 : activeRow.value - 1;
        const el = matrix.value[activeRow.value];

        if (!el) {
            activeRow.value = increment ? activeRow.value - 1 : activeRow.value + 1;
        } else {
            if (
                matrix.value[activeRow.value] &&
                !matrix.value[activeRow.value][selectedIndex.value] &&
                selectedIndex.value !== 0
            ) {
                selectedIndex.value = matrix.value[activeRow.value].length - 1;
            }
        }
    };

    const handleElFocus = (increment: boolean): void => {
        let el = null;
        if (matrix.value[activeRow.value]) {
            el = matrix.value[activeRow.value][selectedIndex.value];
        }
        if (el) {
            el.focus({ preventScroll: !isSelectionGrid.value });
        } else {
            selectedIndex.value = increment ? selectedIndex.value - 1 : selectedIndex.value + 1;
        }
    };

    const arrowRight = (): void => {
        handleSelectionIndexX(true);
        handleElFocus(true);
    };

    const arrowLeft = (): void => {
        handleSelectionIndexX(false);
        handleElFocus(false);
    };

    const arrowUp = (): void => {
        handleSelectionIndexY(false);
        handleElFocus(true);
    };

    const arrowDown = (): void => {
        handleSelectionIndexY(true);
        handleElFocus(true);
    };

    /**
     * Add values per page, holds the ref values of the focusable elements
     * Build top to bottom
     */
    const buildMatrix = (elements: HTMLElement[], set: 'monthYear' | 'time' | 'actionRow'): void => {
        refSets[set] = elements;
    };

    const buildMultiLevelMatrix = (
        elements: HTMLElement[][],
        set: 'calendar' | 'selectionGrid' | 'monthPicker',
    ): void => {
        refSets[set] = elements;
    };

    const resetNavigation = (): void => {
        selectedIndex.value = 0;
        activeRow.value = 0;
    };

    const setMonthPicker = (value: boolean): void => {
        isMonthPicker.value = value;
        resetNavigation();
    };

    /**
     * For selection grid, things are handled per grid
     */
    const setSelectionGrid = (value: boolean): void => {
        isSelectionGrid.value = value;
        resetNavigation();
        if (!value) {
            refSets.selectionGrid = [];
        }
    };

    const setTimePicker = (value: boolean, mode = false) => {
        isTimePicker.value = value;
        isTimePickerMode.value = mode;
        resetNavigation();
        if (!value) {
            refSets.timePicker[0] = [];
            refSets.timePicker[1] = [];
        }
    };

    const setTimePickerElements = (elements: HTMLElement[][], order: 0 | 1 = 0): void => {
        refSets.timePicker[order] = elements;
    };

    const setTimePickerBackRef = (el: HTMLElement): void => {
        timePickerBackRef.value = el;
    };

    const clearArrowNav = (): void => {
        refSets.monthYear = [];
        refSets.calendar = [];
        refSets.time = [];
        refSets.actionRow = [];
        refSets.selectionGrid = [];
        refSets.timePicker[0] = [];
        refSets.timePicker[1] = [];
        isSelectionGrid.value = false;
        isTimePicker.value = false;
        isTimePickerMode.value = false;
        isMonthPicker.value = false;
        resetNavigation();
        timePickerBackRef.value = null;
    };

    return {
        buildMatrix,
        buildMultiLevelMatrix,
        setTimePickerBackRef,
        setSelectionGrid,
        setTimePicker,
        setTimePickerElements,
        arrowRight,
        arrowLeft,
        arrowUp,
        arrowDown,
        clearArrowNav,
        setMonthPicker,
    };
};
