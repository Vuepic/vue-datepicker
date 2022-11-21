import { beforeEach, describe, expect, it } from 'vitest';
import { addMonths, addYears, getMonth, getYear, subMonths } from 'date-fns';

import { useState } from '@/components/composables';
import { mount, VueWrapper } from '@vue/test-utils';
import MonthYearPicker from '@/components/MonthYearPicker/MonthYearPicker.vue';
import { getMonths, getYears } from '@/utils/util';

import type { AllPropsType } from '@/utils/props';

describe('MonthYearPicker component', () => {
    const { setProps } = useState();
    let wrapper: VueWrapper<any>;
    const props = {
        month: getMonth(new Date()),
        year: getYear(new Date()),
        instance: 0,
        months: getMonths('en-Us', 'short'),
        years: getYears([2020, 2030]),
    };

    beforeEach(() => {
        setProps({} as AllPropsType);
    });

    it('Should select next month', () => {
        wrapper = mount(MonthYearPicker, { props });

        wrapper.vm.handleMonthYearChange(true);
        const emitted = (wrapper.emitted()['update-month-year'][0] as any)[0];
        expect(emitted).toHaveProperty('month', getMonth(addMonths(new Date(), 1)));
    });

    it('Should select previous month', () => {
        wrapper = mount(MonthYearPicker, { props });

        wrapper.vm.handleMonthYearChange(false);
        const emitted = (wrapper.emitted()['update-month-year'][0] as any)[0];
        expect(emitted).toHaveProperty('month', getMonth(subMonths(new Date(), 1)));
    });

    it('Should switch year', () => {
        wrapper = mount(MonthYearPicker, { props: { ...props, month: 11 } });
        wrapper.vm.handleMonthYearChange(true);
        const emitted = (wrapper.emitted()['update-month-year'][0] as any)[0];
        expect(emitted).toHaveProperty('year', getYear(addYears(new Date(), 1)));
    });

    it('Should skip month from filter', () => {
        const filters = { months: [addMonths(new Date(), 1)] };
        setProps({ filters } as unknown as AllPropsType);
        const afterSkip = addMonths(new Date(), 2);
        wrapper.vm.handleMonthYearChange(true);
        const emitted = (wrapper.emitted()['update-month-year'][0] as any)[0];
        expect(emitted).toHaveProperty('month', getMonth(afterSkip));
    });

    it('Should skip year from filter', () => {
        const filters = { years: [addYears(new Date(), 1)] };
        setProps({ filters } as unknown as AllPropsType);

        const afterSkip = addYears(new Date(), 1);
        wrapper.vm.handleMonthYearChange(true);
        const emitted = (wrapper.emitted()['update-month-year'][0] as any)[0];
        expect(emitted).toHaveProperty('year', getYear(afterSkip));
    });

    it('Should return true for disabled month with maxDate', () => {
        setProps({ maxDate: subMonths(new Date(), 1) } as AllPropsType);
        wrapper.vm.handleMonthYearChange(true);

        expect(wrapper.vm.isDisabled).toBeTruthy();
    });

    it('Should return true for disabled month with minDate', () => {
        setProps({ minDate: addMonths(new Date(), 1) } as AllPropsType);
        wrapper.vm.handleMonthYearChange(false);

        expect(wrapper.vm.isDisabled).toBeTruthy();
    });

    it('Should disable navigation with prevent-min-max-navigation', () => {
        setProps({ maxDate: new Date(), preventMinMaxNavigation: true } as AllPropsType);

        expect(wrapper.vm.isDisabled).toBeTruthy();
    });

    it('Should toggle year-picker when month-picker mode is used', () => {
        setProps({ monthPicker: true } as AllPropsType);
        wrapper = mount(MonthYearPicker, { props });

        wrapper.vm.toggleYearPicker(false);
        expect(wrapper.vm.showYearPicker).toEqual(true);
    });

    it('Should properly show left-right icons on multi-calendars', () => {
        setProps({ multiCalendars: true } as AllPropsType);
        wrapper = mount(MonthYearPicker, { props });

        expect(wrapper.vm.showLeftIcon).toEqual(true);
        expect(wrapper.vm.showRightIcon).toEqual(false);

        const secondInstance = mount(MonthYearPicker, { props: { ...props, instance: 1 } });
        expect(secondInstance.vm.showLeftIcon).toEqual(false);
        expect(secondInstance.vm.showRightIcon).toEqual(true);
    });

    it('Should build matrix', () => {});
});
