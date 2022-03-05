/* eslint-disable @typescript-eslint/no-explicit-any */
import { mount, VueWrapper } from '@vue/test-utils';
import addDays from 'date-fns/addDays';
import { ja } from 'date-fns/locale';

import Datepicker from '../../src/Vue3DatePicker/Vue3DatePicker.vue';
import DatepickerMenu from '../../src/Vue3DatePicker/components/DatepickerMenu.vue';
import Calendar from '../../src/Vue3DatePicker/components/Calendar.vue';
import TimePicker from '../../src/Vue3DatePicker/components/TimePicker/TimePicker.vue';
import MonthYearInput from '../../src/Vue3DatePicker/components/MonthYearInput.vue';
import ActionRow from '../../src/Vue3DatePicker/components/ActionRow.vue';

import { setMilliseconds, setSeconds } from 'date-fns';
import { getWeekFromDate } from '../../src/Vue3DatePicker/utils/date-utils';

const format = (date: Date): string => {
    return `Selected year is ${date.getFullYear()}`;
};

const mountDatepicker = async (props: any = {}): Promise<{ dp: VueWrapper<any>; menu: VueWrapper<any> }> => {
    const dp = mount(Datepicker, { props });

    dp.vm.openMenu();

    await dp.vm.$nextTick();

    const menu = dp.findComponent(DatepickerMenu);

    return { dp, menu };
};

describe('Logic connection', () => {
    it('Should properly define initial values', async () => {
        const date = new Date();
        const { dp, menu } = await mountDatepicker({ modelValue: date });

        expect(menu.vm.month(0)).toEqual(date.getMonth());
        expect(menu.vm.year(0)).toEqual(date.getFullYear());
        expect(menu.vm.hours).toEqual(date.getHours());
        expect(menu.vm.minutes).toEqual(date.getMinutes());
        dp.unmount();
    });

    it('Should properly map initial values for range picker', async () => {
        const start = new Date();
        const end = addDays(start, 7);
        const { dp, menu } = await mountDatepicker({ modelValue: [start, end], range: true });

        expect(menu.vm.hours).toHaveLength(2);
        expect(menu.vm.minutes).toHaveLength(2);
        expect(menu.vm.hours[0]).toEqual(start.getHours());
        dp.unmount();
    });

    it('Should select date', async () => {
        const tomorrow = setMilliseconds(setSeconds(addDays(new Date(), 1), 0), 0);
        const { dp, menu } = await mountDatepicker({ modelValue: null });

        const calendar = menu.findComponent(Calendar);

        calendar.vm.$emit('selectDate', { value: tomorrow, current: true });
        await calendar.vm.$nextTick();

        expect(dp.vm.internalModelValue).toEqual(tomorrow);
        dp.unmount();
    });

    it('Should select range', async () => {
        const start = setMilliseconds(setSeconds(addDays(new Date(), 1), 0), 0);
        const end = setMilliseconds(setSeconds(addDays(start, 7), 0), 0);
        const { dp, menu } = await mountDatepicker({ modelValue: null, range: true });

        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('selectDate', { value: start, current: true });
        await calendar.vm.$nextTick();

        expect(menu.vm.internalModelValue).toHaveLength(1);

        calendar.vm.$emit('selectDate', { value: end, current: true });
        await calendar.vm.$nextTick();

        expect(menu.vm.internalModelValue).toHaveLength(2);
        expect(menu.vm.internalModelValue[0]).toEqual(start);
        expect(menu.vm.internalModelValue[1]).toEqual(end);
        dp.unmount();
    });

    it('Should select auto range', async () => {
        const start = setMilliseconds(setSeconds(new Date(), 0), 0);
        const end = setMilliseconds(setSeconds(addDays(start, 7), 0), 0);
        const { dp, menu } = await mountDatepicker({ modelValue: null, range: true, autoRange: 7 });

        const calendar = menu.findComponent(Calendar);

        calendar.vm.$emit('selectDate', { value: start, current: true });
        await calendar.vm.$nextTick();

        expect(menu.vm.internalModelValue).toHaveLength(2);
        expect(menu.vm.internalModelValue[0]).toEqual(start);
        expect(menu.vm.internalModelValue[1]).toEqual(end);
        dp.unmount();
    });

    it('Should update time', async () => {
        const val = 15;
        const date = new Date();
        const { dp, menu } = await mountDatepicker({ modelValue: date });

        const timePicker = menu.findComponent(TimePicker);
        timePicker.vm.$emit('update:hours', val);
        await timePicker.vm.$nextTick();
        timePicker.vm.$emit('update:minutes', val);
        await timePicker.vm.$nextTick();

        expect(menu.vm.internalModelValue.getHours()).toEqual(val);
        expect(menu.vm.internalModelValue.getMinutes()).toEqual(val);
        dp.unmount();
    });

    it('Should update range time', async () => {
        const val = 15;
        const start = new Date();
        const end = addDays(new Date(), 7);
        const { dp, menu } = await mountDatepicker({ modelValue: [start, end], range: true });

        const timePicker = menu.findComponent(TimePicker);
        timePicker.vm.$emit('update:hours', [start.getHours(), val]);
        await timePicker.vm.$nextTick();
        timePicker.vm.$emit('update:minutes', [val, end.getMinutes()]);
        await timePicker.vm.$nextTick();

        expect(menu.vm.internalModelValue[1].getHours()).toEqual(val);
        expect(menu.vm.internalModelValue[0].getMinutes()).toEqual(val);
        dp.unmount();
    });

    it('Should set month', async () => {
        const month = 0;
        const { dp, menu } = await mountDatepicker({ modelValue: null, range: true });

        const monthYearInput = menu.findComponent(MonthYearInput);
        monthYearInput.vm.$emit('update:month', month);

        expect(menu.vm.month(0)).toEqual(month);
        dp.unmount();
    });

    it('Should set year', async () => {
        const year = 2022;
        const { dp, menu } = await mountDatepicker({ modelValue: null, range: true });

        const monthYearInput = menu.findComponent(MonthYearInput);
        monthYearInput.vm.$emit('update:year', year);

        expect(menu.vm.year(0)).toEqual(year);
        dp.unmount();
    });

    it('Should format with custom function', async () => {
        const selected = new Date();

        const { dp, menu } = await mountDatepicker({ modelValue: null, format });

        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('selectDate', { value: selected, current: true });
        await calendar.vm.$nextTick();
        dp.vm.selectDate();
        await dp.vm.$nextTick();

        expect(dp.vm.inputValue).toEqual(format(selected));
        dp.unmount();
    });

    it('Should display preview format from function', async () => {
        const selected = new Date();

        const { dp, menu } = await mountDatepicker({ modelValue: null, previewFormat: format });

        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('selectDate', { value: selected, current: true });
        await calendar.vm.$nextTick();

        const actionRow = menu.findComponent(ActionRow);
        expect(actionRow.text().includes(format(selected))).toBeTruthy();
        dp.unmount();
    });

    it('Should format with locale', async () => {
        const selected = new Date(0);
        // The day of the week (E) is locale-sensitive in Japanese.
        // Since epoch time zero (1970/1/1) was a Thursday, the 'Thu' must be localized to '木'.
        const { dp, menu } = await mountDatepicker({
            modelValue: null,
            format: 'E',
            locale: 'ja-JP',
            formatLocale: ja,
        });

        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('selectDate', { value: selected, current: true });
        await calendar.vm.$nextTick();
        dp.vm.selectDate();
        await dp.vm.$nextTick();

        expect(dp.vm.inputValue).toEqual('木');
        dp.unmount();
    });

    it('Should select multiple dates', async () => {
        const dates = [new Date(), addDays(new Date(), 1), addDays(new Date(), 2), addDays(new Date(), 3)];
        const { dp, menu } = await mountDatepicker({ modeValue: null, multiDates: true });

        const selectDates = async (): Promise<void> => {
            for (const date of dates) {
                calendar.vm.$emit('selectDate', { value: setSeconds(date, 0), current: true });
                await calendar.vm.$nextTick();
            }
        };

        const calendar = menu.findComponent(Calendar);
        // select all dates
        await selectDates();
        expect(dp.vm.internalModelValue).toHaveLength(4);
        expect(dp.vm.internalModelValue[0]).toEqual(setMilliseconds(setSeconds(dates[0], 0), 0));

        // deselect all dates
        await selectDates();
        expect(dp.vm.internalModelValue).toBeNull();
        dp.unmount();
    });

    it('Should preset range from preset-dates', async () => {
        const range = [new Date(), new Date()];
        const { dp, menu } = await mountDatepicker({
            modeValue: null,
            range: true,
            presetDates: [{ label: 'Today', range }],
        });

        menu.vm.presetDateRange(range);

        expect(dp.vm.internalModelValue).toHaveLength(2);
        expect(dp.vm.internalModelValue).toEqual(range);
        dp.unmount();
    });

    it('Should select week', async () => {
        const today = new Date();
        const weekRange = getWeekFromDate(today, 1);
        const { dp, menu } = await mountDatepicker({ modelValue: null, weekPicker: true });

        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('selectDate', { value: today, current: true });

        expect(dp.vm.internalModelValue).toHaveLength(2);
        expect(dp.vm.internalModelValue).toEqual(weekRange);
    });
});
