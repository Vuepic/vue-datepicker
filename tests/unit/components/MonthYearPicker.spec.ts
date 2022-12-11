import { describe, expect, it, vi } from 'vitest';
import { addMonths, addYears, getMonth, getYear, subMonths, subYears } from 'date-fns';
import { mount, VueWrapper } from '@vue/test-utils';

import MonthYearPicker from '@/components/MonthYearPicker/MonthYearPicker.vue';

import { getMonths, getYears } from '@/utils/util';
import { useArrowNavigation } from '@/components/composables';
import { getDefaultFilters } from '@/utils/defaults';

describe('MonthYearPicker component', () => {
    let wrapper: VueWrapper<any>;
    const props = {
        month: getMonth(new Date()),
        year: getYear(new Date()),
        instance: 0,
        months: getMonths('en-Us', 'short'),
        years: getYears([2020, 2030]),
        filters: getDefaultFilters({}),
    };

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
        const filters = { months: [getMonth(addMonths(new Date(), 1))], years: [] };
        wrapper = mount(MonthYearPicker, { props: { ...props, filters } });
        const afterSkip = addMonths(new Date(), 2);
        wrapper.vm.handleMonthYearChange(true);
        const emitted = (wrapper.emitted()['update-month-year'][0] as any)[0];
        expect(emitted).toHaveProperty('month', getMonth(afterSkip));
    });

    it('Should skip year from filter', () => {
        const filters = { years: [getYear(addYears(new Date(), 1))], months: [] };
        wrapper = mount(MonthYearPicker, { props: { ...props, month: 11, filters } });

        const afterSkip = addYears(new Date(), 2);
        wrapper.vm.handleMonthYearChange(true);
        const emitted = (wrapper.emitted()['update-month-year'][0] as any)[0];
        expect(emitted).toHaveProperty('year', getYear(afterSkip));
    });

    it('Should return true for disabled month with maxDate', () => {
        wrapper = mount(MonthYearPicker, { props: { ...props, maxDate: subMonths(new Date(), 1) } });

        wrapper.vm.handleMonthYearChange(true);

        expect(wrapper.vm.isDisabled).toBeTruthy();
    });

    it('Should return true for disabled month with minDate', () => {
        wrapper = mount(MonthYearPicker, { props: { ...props, minDate: addMonths(new Date(), 1) } });
        wrapper.vm.handleMonthYearChange(false);

        expect(wrapper.vm.isDisabled).toBeTruthy();
    });

    it('Should disable navigation with prevent-min-max-navigation', () => {
        wrapper = mount(MonthYearPicker, { props: { ...props, maxDate: new Date(), preventMinMaxNavigation: true } });

        expect(wrapper.vm.isDisabled).toBeTruthy();
    });

    it('Should toggle year-picker when month-picker mode is used', () => {
        wrapper = mount(MonthYearPicker, { props: { ...props, monthPicker: true } });

        wrapper.vm.toggleYearPicker(false);
        expect(wrapper.vm.showYearPicker).toEqual(true);
    });

    it('Should properly show left-right icons on multi-calendars', () => {
        wrapper = mount(MonthYearPicker, { props: { ...props, multiCalendars: 2 } });

        expect(wrapper.vm.showLeftIcon).toEqual(true);
        expect(wrapper.vm.showRightIcon).toEqual(false);

        const secondInstance = mount(MonthYearPicker, { props: { ...props, multiCalendars: 2, instance: 1 } });
        expect(secondInstance.vm.showLeftIcon).toEqual(false);
        expect(secondInstance.vm.showRightIcon).toEqual(true);
    });

    it('Should build matrix', () => {
        const { refSets } = useArrowNavigation();

        mount(MonthYearPicker, { props: { ...props, arrowNavigation: true } });

        expect(refSets.monthYear).toHaveLength(4);
    });

    it('Should handle year update', async () => {
        const wrapper = mount(MonthYearPicker, { props });
        wrapper.vm.handleYear();
        await wrapper.vm.$nextTick();

        const emitted = wrapper.emitted();

        expect(emitted).toHaveProperty('update-month-year');

        const value = (emitted['update-month-year'][0] as any)[0];

        expect(value).toHaveProperty('year', getYear(subYears(new Date(), 1)));
        expect(value).toHaveProperty('month', props.month);
    });

    it('Should get proper overlay slot props for month-overlay', async () => {
        const wrapper = mount(MonthYearPicker, { props });

        const spy = vi.spyOn(wrapper.vm.overlaySlotProps('month'), 'toggle');

        const slotProps = wrapper.vm.overlaySlotProps('month');
        expect(slotProps).toHaveProperty('items');
        expect(slotProps.items).toHaveLength(12);
        expect(spy.getMockName()).toEqual('toggleMonthPicker');
    });

    it('Should get proper overlay slot props for year-overlay', async () => {
        const wrapper = mount(MonthYearPicker, { props: { ...props, years: getYears([2000, 2100]) } });

        const spy = vi.spyOn(wrapper.vm.overlaySlotProps('year'), 'toggle');

        const slotProps = wrapper.vm.overlaySlotProps('year');
        expect(slotProps).toHaveProperty('items');
        expect(slotProps.items).toHaveLength(101);
        expect(spy.getMockName()).toEqual('toggleYearPicker');
    });
});
