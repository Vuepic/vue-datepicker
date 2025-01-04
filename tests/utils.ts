import { flushPromises, mount, VueWrapper } from '@vue/test-utils';
import { format } from 'date-fns';

import VueDatePicker from '@/VueDatePicker.vue';

import type { AllPropsType } from '@/props';

export const openMenu = async (
    props: Partial<AllPropsType>,
): Promise<VueWrapper<InstanceType<typeof VueDatePicker>>> => {
    const dp = mount(VueDatePicker, { props });

    dp.vm.openMenu();
    await flushPromises();

    await dp.vm.$nextTick();
    return dp;
};

export const reOpenMenu = async (dp: VueWrapper<any>, newProps?: Partial<AllPropsType>) => {
    dp.vm.closeMenu();
    if (newProps) {
        await dp.setProps(newProps);
    }
    await dp.vm.$nextTick();
    dp.vm.openMenu();
    await dp.vm.$nextTick();
};

export const getMonthName = (date: Date) => {
    const month = new Intl.DateTimeFormat('en-Us', { month: 'short', timeZone: 'UTC' }).format(date);
    return month.charAt(0).toUpperCase() + month.substring(1);
};

export const clickCalendarDate = async (dp: VueWrapper<any>, date: Date) => {
    await getCalendarCell(dp, date).trigger('click');
};

export const hoverCalendarDate = async (dp: VueWrapper<any>, date: Date) => {
    await getCalendarCell(dp, date).trigger('mouseenter');
};

export const clickSelectBtn = async (dp: VueWrapper<any>) => {
    await dp.find(`[data-test-id="select-button"]`).trigger('click');
};

export const padZero = (val: number) => (val < 10 ? `0${val}` : val);
// `dp-${format(date, 'yyyy-MM-dd')}`
export const getCalendarCell = (dp: VueWrapper<any>, date: Date) => {
    return dp.find(`[data-test-id="dp-${format(date, 'yyyy-MM-dd')}"]`);
};

export const getCellClasses = (dp: VueWrapper<any>, date: Date) => {
    const el = getCalendarCell(dp, date);
    const innerCell = el.find('.dp__cell_inner');

    return innerCell.classes();
};
