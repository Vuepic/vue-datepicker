import { roundToNearestMinutes } from 'date-fns';
import { useContext } from '@/composables/useContext.ts';
import { useDateUtils } from '@/composables/useDateUtils.ts';
import type { EmitFn } from 'vue';

export const useModel = (emit?: EmitFn<{ 'select-date': [] }>) => {
  const {
    rootProps,
    modelValue,
    getDate,
    defaults: { range, multiDates },
  } = useContext();
  const { isDateBefore } = useDateUtils();

  const getCurrentDate = () => {
    let date = getDate();
    if (rootProps.actionRow?.nowBtnRound) {
      date = roundToNearestMinutes(date, {
        roundingMethod: rootProps.actionRow.nowBtnRound.rounding ?? 'ceil',
        nearestTo: rootProps.actionRow.nowBtnRound.roundTo ?? 15,
      });
    }

    return date;
  };

  const selectCurrentDate = (): void => {
    const date = getCurrentDate();
    if (!range.value.enabled && !multiDates.value.enabled) {
      modelValue.value = date;
    } else if (modelValue.value && Array.isArray(modelValue.value) && modelValue.value[0]) {
      if (multiDates.value.enabled) {
        modelValue.value = [...modelValue.value, date];
      } else {
        modelValue.value = isDateBefore(date, modelValue.value[0])
          ? [date, modelValue.value[0]]
          : [modelValue.value[0], date];
      }
    } else {
      modelValue.value = [date];
    }

    selectOnAutoApply();
  };

  const selectOnAutoApply = () => {
    if (rootProps.autoApply && emit) {
      emit('select-date');
    }
  };

  return {
    selectCurrentDate,
    selectOnAutoApply,
  };
};
