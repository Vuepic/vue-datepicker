import { ref, reactive, computed, type Ref, provide, type InjectionKey, readonly, type EmitFn, nextTick } from 'vue';

import { CMP, FlowStep } from '@/constants';
import { useContext } from '@/composables/useContext.ts';

import type { PickerSection } from '@/types';

export const FlowKey = Symbol('FlowKey') as InjectionKey<{
  updateFlowStep: (step: PickerSection, skipAutoApplyEmit?: boolean) => void;
  childMount: (child?: CMP) => void;
  flowStep: Readonly<Ref<PickerSection | undefined>>;
}>;

export const useFlow = (dynCmpRef: Ref, emit: EmitFn<{ 'auto-apply': [ignoreClose?: boolean] }>) => {
  const {
    rootEmit,
    rootProps,
    defaults: { timeConfig, flow },
  } = useContext();
  const flowStep = ref<PickerSection | undefined>();

  const childrenMounted = reactive({
    [CMP.timePicker]:
      !timeConfig.value.enableTimePicker || rootProps.timePicker || rootProps.monthPicker || rootProps.quarterPicker,
    [CMP.calendar]: false,
    [CMP.header]: false,
  });

  const specificMode = computed(() => rootProps.monthPicker || rootProps.timePicker || rootProps.quarterPicker);

  const childMount = (cmp?: CMP): void => {
    const firstStep = flow.value?.steps.at(0);
    if (flow.value?.steps?.length) {
      if (!cmp && specificMode.value) return executeFlow(firstStep);
      if (cmp) childrenMounted[cmp] = true;

      if (!Object.keys(childrenMounted).filter((key) => !childrenMounted[key as CMP]).length) {
        executeFlow(firstStep);
      }
    }
  };

  /**
   * Advance the flow to the next configured step.
   *
   * When there is no next step (the current step is the last one in the flow),
   * this schedules its own `auto-apply` emission on `nextTick` - this is required for
   * steps whose callers (e.g. time steps in `useTimePickerUtils`) don't emit `auto-apply`
   * themselves.
   *
   * Some callers (e.g. calendar day selection, range selection, month selection) already
   * schedule their own `auto-apply` emission independently of the flow. For those, pass
   * `skipAutoApplyEmit = true` to avoid a duplicate `auto-apply` emission - which, on the
   * last flow step, would fire once with the selected value and then a second time with a
   * stale/cleared value after the menu has already closed.
   */
  const updateFlowStep = (step: PickerSection, skipAutoApplyEmit = false): void => {
    if (flow.value?.steps?.length) {
      if (flowStep.value === step) {
        const nextStep = flow.value.steps.at(flow.value.steps.indexOf(flowStep.value) + 1);
        if (nextStep) {
          flowStep.value = nextStep;
          rootEmit('flow-step', flowStep.value);
          executeFlow();
        } else if (rootProps.autoApply && !skipAutoApplyEmit) {
          nextTick().then(() => emit('auto-apply'));
        }
      }
    }
  };

  const handleFlowStep = (step: PickerSection, fn: string, ...args: Array<boolean | string>) => {
    if (flowStep.value === step) {
      if (dynCmpRef.value) {
        dynCmpRef.value[fn]?.(...args);
      }
    }
  };

  const executeFlow = (step?: PickerSection): void => {
    if (step) {
      flowStep.value = step;
    }
    handleFlowStep(FlowStep.month, 'toggleMonthPicker', true);
    handleFlowStep(FlowStep.year, 'toggleYearPicker', true);
    handleFlowStep(FlowStep.calendar, 'toggleTimePicker', false);
    handleFlowStep(FlowStep.time, 'toggleTimePicker', true);

    if (
      flowStep.value === FlowStep.hours ||
      flowStep.value === FlowStep.minutes ||
      flowStep.value === FlowStep.seconds
    ) {
      handleFlowStep(flowStep.value, 'toggleTimePicker', true, flowStep.value);
    }
  };

  provide(FlowKey, { childMount, updateFlowStep, flowStep: readonly(flowStep) });

  return {
    executeFlow,
  };
};
