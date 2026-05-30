import { inject } from 'vue';
import { ContextKey } from '@/composables/useInjector.ts';
import { FlowKey } from '@/composables/useFlow.ts';

export const useContext = () => {
  const ctx = inject(ContextKey);

  if (!ctx) {
    throw new Error("Can't use context");
  }

  return ctx;
};

export const useFlowContext = () => {
  const flow = inject(FlowKey);

  if (!flow) {
    throw new Error("Can't use flow");
  }

  return flow;
};
