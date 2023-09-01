import { ref, reactive } from 'vue';

import { CMP, FlowStep } from '@/constants';

import type { Ref } from 'vue';
import type { Flow, VueEmit } from '@/interfaces';
import type { AllPropsType } from '@/props';

export const useFlow = (props: AllPropsType, emit: VueEmit, dynCmpRef: Ref<any>) => {
    const flowStep = ref(0);

    const childrenMounted = reactive({
        // monthYearInput: !!props.timePicker,
        [CMP.timePicker]: !props.enableTimePicker || props.timePicker || props.monthPicker,
        [CMP.calendar]: false,
        [CMP.header]: false,
    });

    const childMount = (cmp: CMP): void => {
        if (props.flow?.length) {
            childrenMounted[cmp] = true;

            if (!Object.keys(childrenMounted).filter((key) => !childrenMounted[key as CMP]).length) {
                handleFlow();
            }
        }
    };

    const updateFlowStep = (): void => {
        if (props.flow?.length && flowStep.value !== -1) {
            flowStep.value += 1;
            emit('flow-step', flowStep.value);
            handleFlow();
        }
    };

    const resetFlow = (): void => {
        flowStep.value = -1;
    };

    const handleFlowStep = (step: Flow, fn: string, ...args: Array<boolean | string>) => {
        if (props.flow[flowStep.value] === step) {
            if (dynCmpRef.value) {
                dynCmpRef.value[fn](...args);
            }
        }
    };

    const handleFlow = (): void => {
        handleFlowStep(FlowStep.month, 'toggleMonthPicker', true);
        handleFlowStep(FlowStep.year, 'toggleYearPicker', true);
        handleFlowStep(FlowStep.calendar, 'toggleTimePicker', false, true);
        handleFlowStep(FlowStep.time, 'toggleTimePicker', true, true);

        const flowValue = props.flow[flowStep.value];
        if (flowValue === FlowStep.hours || flowValue === FlowStep.minutes || flowValue === FlowStep.seconds) {
            handleFlowStep(flowValue, 'toggleTimePicker', true, true, flowValue);
        }
    };

    return { childMount, updateFlowStep, resetFlow, flowStep };
};
