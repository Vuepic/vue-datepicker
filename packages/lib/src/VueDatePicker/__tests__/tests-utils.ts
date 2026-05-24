import VueDatePickerRoot from '@/VueDatePickerRoot.vue';
import { format } from 'date-fns';
import { flushPromises, mount, VueWrapper } from '@vue/test-utils';
import type { RootProps } from '@/types';

export type DPInstance = VueWrapper<InstanceType<typeof VueDatePickerRoot>>;

export const openMenu = async (props: Partial<RootProps>): Promise<DPInstance> => {
  const dp = mount(VueDatePickerRoot, { props });

  dp.vm.openMenu();
  await flushPromises();

  await dp.vm.$nextTick();
  return dp;
};

export const closeMenu = async (props: Partial<RootProps>): Promise<DPInstance> => {
    const dp = mount(VueDatePickerRoot, { props });

    dp.vm.closeMenu();
    await flushPromises();

    await dp.vm.$nextTick();
    return dp;
};

export const getMonthToggleBtn = (dp: DPInstance, index = 0) => {
  return dp.find(`[data-test-id="month-toggle-overlay-${index}"]`);
};

export const selectDate = async (dp: DPInstance, date: Date) => {
  await dp.find(`[data-test-id="dp-${format(date, 'yyyy-MM-dd')}"]`).trigger('click');
};

export const getMonthToggleText = (date: Date) => {
  return format(date, 'LLL');
};

export const clearInput = (dp: DPInstance) => {
  return dp.find(`[data-test-id="clear-input-value-btn"]`).trigger('click');
};

export const closeMenu = async (props: Partial<RootProps>): Promise<DPInstance> => {
  const dp = mount(VueDatePickerRoot, { props });

  dp.vm.closeMenu();
  await flushPromises();

  await dp.vm.$nextTick();
  return dp;
};
