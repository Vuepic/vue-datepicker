import { flushPromises, mount } from '@vue/test-utils';

import VueDatePicker from '@/VueDatePicker.vue';

import type { AllPropsType } from '@/props';

export const openMenu = async (props: Partial<AllPropsType>) => {
    const dp = mount(VueDatePicker, { props });

    dp.vm.openMenu();
    await flushPromises();

    await dp.vm.$nextTick();
    return dp;
};
