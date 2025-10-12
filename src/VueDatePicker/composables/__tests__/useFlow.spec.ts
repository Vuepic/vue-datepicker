import { describe, it, expect, vi } from 'vitest';
import { ref, computed } from 'vue';
import { useFlow } from '@/composables/useFlow';
import { FlowStep } from '@/constants';

// Mock useContext for flow and timeConfig
vi.mock('@/composables/useContext.ts', () => {
    const rootEmit = vi.fn();
    const rootProps = { monthPicker: false, timePicker: false } as any;
    const defaults = {
        timeConfig: computed(() => ({ enableTimePicker: true })),
        flow: computed(() => ({
            steps: [FlowStep.month, FlowStep.year, FlowStep.calendar, FlowStep.time],
            partial: false,
        })),
    } as any;
    return { useContext: () => ({ rootEmit, rootProps, defaults }) };
});

const buildDynCmp = () => {
    return {
        toggleMonthPicker: vi.fn(),
        toggleYearPicker: vi.fn(),
        toggleTimePicker: vi.fn(),
    };
};

describe('useFlow', () => {
    it('should trigger appropriate component toggles following the flow', () => {
        const dyn = buildDynCmp();
        const dynRef = ref<any>(dyn);
        const { handleFlow, updateFlowStep } = useFlow(dynRef);

        // Step 0 -> month
        handleFlow();
        expect(dyn.toggleMonthPicker).toHaveBeenCalledExactlyOnceWith(true);

        // Step 1 -> year
        updateFlowStep();
        expect(dyn.toggleYearPicker).toHaveBeenCalledExactlyOnceWith(true);

        // Step 2 -> calendar (open time picker overlay false)
        updateFlowStep();
        expect(dyn.toggleTimePicker).toHaveBeenCalledExactlyOnceWith(false, true);

        // Clear the mock so we can check the next call independently
        dyn.toggleTimePicker.mockClear();

        // Step 3 -> time (open time picker overlay true)
        updateFlowStep();
        expect(dyn.toggleTimePicker).toHaveBeenCalledExactlyOnceWith(true, true);
    });

    it('should advance flow step and emit events via updateFlowStep, and reset after last step', async () => {
        const dyn = buildDynCmp();
        const dynRef = ref<any>(dyn);
        const { updateFlowStep, flowStep, resetFlow } = useFlow(dynRef);

        // initial
        expect(flowStep.value).toBe(0);

        updateFlowStep();
        expect(flowStep.value).toBe(1);

        updateFlowStep();
        expect(flowStep.value).toBe(2);

        // Reset should set to -1
        resetFlow();
        expect(flowStep.value).toBe(-1);
    });

    it('should skip steps when handleFlow is called with skipStep', () => {
        const dyn = buildDynCmp();
        const dynRef = ref<any>(dyn);
        const { handleFlow, flowStep } = useFlow(dynRef);

        handleFlow(2);
        expect(flowStep.value).toBe(2);
    });
});
