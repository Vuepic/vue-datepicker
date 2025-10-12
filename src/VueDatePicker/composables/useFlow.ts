import { ref, reactive, computed, nextTick, type Ref } from 'vue';

import { CMP, FlowStep } from '@/constants';
import { useContext } from '@/composables/useContext.ts';

import type { PickerSection } from '@/types';

export const useFlow = (dynCmpRef: Ref) => {
    const {
        rootEmit,
        rootProps,
        defaults: { timeConfig, flow },
    } = useContext();
    const flowStep = ref(0);

    const childrenMounted = reactive({
        [CMP.timePicker]: !timeConfig.value.enableTimePicker || rootProps.timePicker || rootProps.monthPicker,
        [CMP.calendar]: false,
        [CMP.header]: false,
    });

    const specificMode = computed(() => rootProps.monthPicker || rootProps.timePicker);

    const childMount = (cmp: unknown): void => {
        if (flow.value?.steps?.length) {
            if (!cmp && specificMode.value) return handleFlow();
            childrenMounted[cmp as CMP] = true;

            if (!Object.keys(childrenMounted).filter((key) => !childrenMounted[key as CMP]).length) {
                handleFlow();
            }
        }
    };

    const updateFlowStep = (): void => {
        if (flow.value?.steps?.length && flowStep.value !== -1) {
            flowStep.value += 1;
            rootEmit('flow-step', flowStep.value);
            handleFlow();
        }
        if (flow.value?.steps?.length === flowStep.value) {
            nextTick().then(() => resetFlow());
        }
    };

    const resetFlow = (): void => {
        flowStep.value = -1;
    };

    const handleFlowStep = (step: PickerSection, fn: string, ...args: Array<boolean | string>) => {
        if (flow.value?.steps[flowStep.value] === step) {
            if (dynCmpRef.value) {
                dynCmpRef.value[fn]?.(...args);
            }
        }
    };

    const handleFlow = (skipStep = 0): void => {
        if (skipStep) {
            flowStep.value += skipStep;
        }
        handleFlowStep(FlowStep.month, 'toggleMonthPicker', true);
        handleFlowStep(FlowStep.year, 'toggleYearPicker', true);
        handleFlowStep(FlowStep.calendar, 'toggleTimePicker', false, true);
        handleFlowStep(FlowStep.time, 'toggleTimePicker', true, true);

        const flowValue = flow.value?.steps[flowStep.value];
        if (flowValue === FlowStep.hours || flowValue === FlowStep.minutes || flowValue === FlowStep.seconds) {
            handleFlowStep(flowValue, 'toggleTimePicker', true, true, flowValue);
        }
    };

    return { childMount, updateFlowStep, resetFlow, handleFlow, flowStep };
};
