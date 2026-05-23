import { useContext } from '@/composables/useContext.ts';
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { EventKey } from '@/constants';

export const useArrowNavigation = () => {
    const { rootProps, state, defaults: { textInput } } = useContext();

    const level = computed(() => state.arrowNavigationLevel);
    const rowIndex = ref(-1);
    const colIndex = ref(-1);

    watch(level, (newVal, oldVal) => {
        let ignoreActive = newVal === 0 && oldVal > 0;
        if (textInput.value.enabled && textInput.value.selectOnFocus) {
            ignoreActive = true;
        }

        focusInitial(ignoreActive);
    });

    const gridMatrix = ref<HTMLElement[][]>([]);
    const elementPositions = ref(new Map<HTMLElement, { row: number; col: number }>());

    const buildMatrix = () => {
        const elements = Array.from(
            document.querySelectorAll<HTMLElement>(`[data-dp-action-element="${level.value}"]`),
        );

        const positionMap = new Map<number, HTMLElement[]>();
        const positions = new Map<HTMLElement, { row: number; col: number }>();

        for (const el of elements) {
            const rect = el.getBoundingClientRect();
            const row = rect.top;
            const col = rect.left;

            if (!positionMap.has(row)) {
                positionMap.set(row, []);
            }
            positionMap.get(row)!.push(el);
            positions.set(el, { row, col });
        }

        gridMatrix.value = Array.from(positionMap.entries())
            .sort((a, b) => a[0] - b[0])
            .map(([_, rowElements]) => sortRow(rowElements, positions));
        elementPositions.value = positions;
    };

    const sortRow = (rowElements: HTMLElement[], positions: Map<HTMLElement, { row: number; col: number }>) => {
        return rowElements.sort((a, b) => {
            const posA = positions.get(a)!;
            const posB = positions.get(b)!;
            return posA.col - posB.col;
        });
    };

    const setIndex = (row: number, col: number) => {
        if (level.value === 0) {
            rowIndex.value = row;
            colIndex.value = col;
        }
    };

    const handleKeyDown = (ev: KeyboardEvent) => {
        if (
            ![EventKey.arrowUp, EventKey.arrowDown, EventKey.arrowLeft, EventKey.arrowRight].includes(ev.key as never)
        ) {
            return;
        }
        buildMatrix();

        ev.preventDefault();

        const currentElement = document.activeElement as HTMLElement;

        if (!currentElement?.hasAttribute('data-dp-action-element')) {
            return;
        }

        let currentRowIndex = -1;
        let currentColIndex = -1;

        for (let i = 0; i < gridMatrix.value.length; i++) {
            const colIndex = gridMatrix.value[i]!.indexOf(currentElement);
            if (colIndex !== -1) {
                currentRowIndex = i;
                currentColIndex = colIndex;
                break;
            }
        }

        if (currentRowIndex === -1) return;

        switch (ev.key) {
            case EventKey.arrowLeft:
                return handleArrowLeft(currentRowIndex, currentColIndex);
            case EventKey.arrowRight:
                return handleArrowRight(currentRowIndex, currentColIndex);
            case EventKey.arrowUp:
                return handleArrowUp(currentRowIndex, currentColIndex);
            case EventKey.arrowDown:
                return handleArrowDown(currentRowIndex, currentColIndex);
            default:
                return;
        }
    };

    const handleArrowLeft = (currentRowIndex: number, currentColIndex: number) => {
        if (currentColIndex > 0) {
            const targetElement = gridMatrix.value[currentRowIndex]![currentColIndex - 1];
            setIndex(currentRowIndex, currentColIndex - 1);
            if (targetElement) targetElement.focus();
        }
    };

    const handleArrowRight = (currentRowIndex: number, currentColIndex: number) => {
        if (currentColIndex < gridMatrix.value[currentRowIndex]!.length - 1) {
            const targetElement = gridMatrix.value[currentRowIndex]![currentColIndex + 1];
            setIndex(currentRowIndex, currentColIndex + 1);
            if (targetElement) targetElement.focus();
        }
    };

    const handleArrowUp = (currentRowIndex: number, currentColIndex: number) => {
        if (currentRowIndex > 0) {
            const targetRow = gridMatrix.value[currentRowIndex - 1];
            const targetColIndex = Math.min(currentColIndex, targetRow!.length - 1);
            const targetElement = targetRow![targetColIndex];
            setIndex(currentRowIndex - 1, targetColIndex);
            if (targetElement) targetElement.focus();
        }
    };

    const handleArrowDown = (currentRowIndex: number, currentColIndex: number) => {
        if (currentRowIndex < gridMatrix.value.length - 1) {
            const targetRow = gridMatrix.value[currentRowIndex + 1];
            const targetColIndex = Math.min(currentColIndex, targetRow!.length - 1);
            const targetElement = targetRow![targetColIndex];
            setIndex(currentRowIndex + 1, targetColIndex);
            if (targetElement) targetElement.focus();
        }
    };

    const focusPreviousActive = () => {
        nextTick().then(() => {
            buildMatrix();

            const el = gridMatrix.value[rowIndex.value]?.[colIndex.value];
            if (el) {
                focusEl(el);
            }
        });
    };

    const focusEl = (el: HTMLElement) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.focus({ preventScroll: true });
            });
        });
    };

    const focusInitial = (ignoreActive: boolean) => {
        if (ignoreActive) {
            return focusPreviousActive();
        }
        const active = document.querySelector<HTMLElement>(`[data-dp-element-active="${level.value}"]`);
        if (active && !ignoreActive) {
            focusEl(active);
        } else {
            const el = document.querySelector<HTMLElement>(`[data-dp-action-element="${level.value}"]`);
            if (el) {
                focusEl(el);
            }
        }
    };

    onMounted(() => {
        if (rootProps.arrowNavigation) {
            focusInitial(false);
            document.addEventListener('keydown', handleKeyDown);
        }
    });

    onUnmounted(() => {
        if (rootProps.arrowNavigation) {
            document.removeEventListener('keydown', handleKeyDown);
        }
    });
};
