/* eslint-disable @typescript-eslint/no-explicit-any */
import { mount, VueWrapper } from '@vue/test-utils';
import addDays from 'date-fns/addDays';

import Datepicker from '../../src/Vue3DatePicker/Vue3DatePicker.vue';
import DatepickerMenu from '../../src/Vue3DatePicker/components/DatepickerMenu.vue';
import Calendar from '../../src/Vue3DatePicker/components/Calendar.vue';
import ActionRow from '../../src/Vue3DatePicker/components/ActionRow.vue';

import { getNextMonthYear } from '../../src/Vue3DatePicker/utils/date-utils';
import { setSeconds, addMonths } from 'date-fns';

const format = (date: Date): string => {
    return `Selected year is ${date.getFullYear()}`;
};

describe('Logic connection', () => {
    it('Should properly define initial values', async () => {
        const date = new Date();
        const dp = mount(Datepicker, { props: { modelValue: date } });

        dp.vm.openMenu();

        await dp.vm.$nextTick();

        const menu: VueWrapper<any> = dp.findComponent(DatepickerMenu);

        expect(menu.vm.month).toEqual(date.getMonth());
        expect(menu.vm.year).toEqual(date.getFullYear());
        expect(menu.vm.monthNext).toEqual(getNextMonthYear(date).month);
        expect(menu.vm.yearNext).toEqual(getNextMonthYear(date).year);
        expect(menu.vm.hours).toEqual(date.getHours());
        expect(menu.vm.minutes).toEqual(date.getMinutes());
    });

    it('Should properly map initial values for range picker', async () => {
        const start = new Date();
        const end = addDays(start, 7);
        const dp = mount(Datepicker, { props: { modelValue: [start, end], range: true } });

        dp.vm.openMenu();

        await dp.vm.$nextTick();

        const menu: VueWrapper<any> = dp.findComponent(DatepickerMenu);

        expect(menu.vm.hours).toHaveLength(2);
        expect(menu.vm.minutes).toHaveLength(2);
        expect(menu.vm.hours[0]).toEqual(start.getHours());
    });

    it('Should select date', async () => {
        const tomorrow = setSeconds(addDays(new Date(), 1), 0);
        const dp = mount(Datepicker, { props: { modelValue: null } });

        dp.vm.openMenu();

        await dp.vm.$nextTick();

        const menu = dp.findComponent(DatepickerMenu);

        const calendar = menu.findComponent(Calendar);

        calendar.vm.$emit('selectDate', { value: tomorrow, current: true });
        await calendar.vm.$nextTick();

        expect(dp.vm.internalModelValue).toEqual(tomorrow);
    });

    it('Should select range', async () => {
        const start = setSeconds(addDays(new Date(), 1), 0);
        const end = setSeconds(addDays(start, 7), 0);
        const dp = mount(Datepicker, { props: { modelValue: null, range: true } });

        dp.vm.openMenu();

        await dp.vm.$nextTick();

        const menu: VueWrapper<any> = dp.findComponent(DatepickerMenu);
        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('selectDate', { value: start, current: true });
        await calendar.vm.$nextTick();

        expect(menu.vm.internalModelValue).toHaveLength(1);

        calendar.vm.$emit('selectDate', { value: end, current: true });
        await calendar.vm.$nextTick();

        expect(menu.vm.internalModelValue).toHaveLength(2);
        expect(menu.vm.internalModelValue[0]).toEqual(start);
        expect(menu.vm.internalModelValue[1]).toEqual(end);
    });

    it('Should select range from 2 calendars', async () => {
        const start = setSeconds(addDays(new Date(), 1), 0);
        const end = setSeconds(addMonths(start, 1), 0);
        const dp = mount(Datepicker, { props: { modelValue: null, range: true, twoCalendars: true } });

        dp.vm.openMenu();

        await dp.vm.$nextTick();

        const menu: VueWrapper<any> = dp.findComponent(DatepickerMenu);
        const calendar = menu.findComponent(Calendar);

        calendar.vm.$emit('selectDate', { value: start, current: true });
        await calendar.vm.$nextTick();
        calendar.vm.$emit('selectDate', { value: end, current: true }, true);
        await calendar.vm.$nextTick();

        expect(menu.vm.internalModelValue).toHaveLength(2);
        expect(menu.vm.internalModelValue[0]).toEqual(start);
        expect(menu.vm.internalModelValue[1]).toEqual(end);
    });

    it('Should select auto range', async () => {
        const start = setSeconds(new Date(), 0);
        const end = setSeconds(addDays(start, 7), 0);
        const dp = mount(Datepicker, { props: { modelValue: null, range: true, autoRange: 7 } });

        dp.vm.openMenu();

        await dp.vm.$nextTick();

        const menu: VueWrapper<any> = dp.findComponent(DatepickerMenu);
        const calendar = menu.findComponent(Calendar);

        calendar.vm.$emit('selectDate', { value: start, current: true });
        await calendar.vm.$nextTick();

        expect(menu.vm.internalModelValue).toHaveLength(2);
        expect(menu.vm.internalModelValue[0]).toEqual(start);
        expect(menu.vm.internalModelValue[1]).toEqual(end);
    });

    it('Should update time', async () => {
        const val = 15;
        const date = new Date();
        const dp = mount(Datepicker, { props: { modelValue: date } });

        dp.vm.openMenu();

        await dp.vm.$nextTick();

        const menu: VueWrapper<any> = dp.findComponent(DatepickerMenu);
        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('update:hours', val);
        await calendar.vm.$nextTick();
        calendar.vm.$emit('update:minutes', val);
        await calendar.vm.$nextTick();

        expect(menu.vm.internalModelValue.getHours()).toEqual(val);
        expect(menu.vm.internalModelValue.getMinutes()).toEqual(val);
    });

    it('Should update range time', async () => {
        const val = 15;
        const start = new Date();
        const end = addDays(new Date(), 7);
        const dp = mount(Datepicker, { props: { modelValue: [start, end], range: true } });

        dp.vm.openMenu();

        await dp.vm.$nextTick();

        const menu: VueWrapper<any> = dp.findComponent(DatepickerMenu);
        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('update:hours', [start.getHours(), val]);
        await calendar.vm.$nextTick();
        calendar.vm.$emit('update:minutes', [val, end.getMinutes()]);
        await calendar.vm.$nextTick();

        expect(menu.vm.internalModelValue[1].getHours()).toEqual(val);
        expect(menu.vm.internalModelValue[0].getMinutes()).toEqual(val);
    });

    it('Should set month', async () => {
        const month = 0;
        const dp = mount(Datepicker, { props: { modelValue: null, range: true } });

        dp.vm.openMenu();

        await dp.vm.$nextTick();

        const menu: VueWrapper<any> = dp.findComponent(DatepickerMenu);
        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('update:month', month);

        expect(menu.vm.month).toEqual(month);
    });

    it('Should set year', async () => {
        const year = 2022;
        const dp = mount(Datepicker, { props: { modelValue: null, range: true } });

        dp.vm.openMenu();

        await dp.vm.$nextTick();

        const menu: VueWrapper<any> = dp.findComponent(DatepickerMenu);
        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('update:year', year);

        expect(menu.vm.year).toEqual(year);
    });

    it('Should format with custom function', async () => {
        const selected = new Date();

        const dp = mount(Datepicker, { props: { modelValue: null, format } });

        dp.vm.openMenu();

        await dp.vm.$nextTick();

        const menu: VueWrapper<any> = dp.findComponent(DatepickerMenu);
        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('selectDate', { value: selected, current: true });
        await calendar.vm.$nextTick();
        dp.vm.selectDate();
        await dp.vm.$nextTick();

        expect(dp.vm.inputValue).toEqual(format(selected));
    });

    it('Should display preview format from function', async () => {
        const selected = new Date();

        const dp = mount(Datepicker, { props: { modelValue: null, previewFormat: format } });

        dp.vm.openMenu();

        await dp.vm.$nextTick();

        const menu: VueWrapper<any> = dp.findComponent(DatepickerMenu);
        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('selectDate', { value: selected, current: true });
        await calendar.vm.$nextTick();

        const actionRow = menu.findComponent(ActionRow);
        expect(actionRow.text().includes(format(selected))).toBeTruthy();
    });

    it('Should format with locale', async () => {
        const selected = new Date(0);
        // The day of the week (E) is locale-sensitive in Japanese.
        // Since epoch time zero (1970/1/1) was a Thursday, the 'Thu' must be localized to '木'.
        const dp = mount(Datepicker, { props: { modelValue: null, format: 'E', locale: 'ja-JP' } });

        dp.vm.openMenu();

        await dp.vm.$nextTick();

        const menu: VueWrapper<any> = dp.findComponent(DatepickerMenu);
        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('selectDate', { value: selected, current: true });
        await calendar.vm.$nextTick();
        dp.vm.selectDate();
        await dp.vm.$nextTick();

        expect(dp.vm.inputValue).toEqual('木');
    });
});
