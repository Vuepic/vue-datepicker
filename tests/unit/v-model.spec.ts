import { shallowMount, VueWrapper } from '@vue/test-utils';
import { getYear, addDays, getMonth, addMonths, addYears, format, parse, getHours, getMinutes } from 'date-fns';
import { describe, it, expect } from 'vitest';

import VueDatepicker from '@/VueDatePicker.vue';
import { resetDateTime } from '@/utils/date-utils';
import type { AllPropsType } from '@/props';

const shallowMountDp = (props: Partial<AllPropsType>): VueWrapper<any> => {
    return shallowMount(VueDatepicker, { props });
};

const mountModelAuto = () => {
    const date = new Date();
    const wrapper = shallowMountDp({ modelAuto: true, range: true });

    return { date, wrapper };
};

describe('v-model mapping', () => {
    it('Should accept null value v-model', () => {
        const wrapper = shallowMountDp({ modelValue: null });
        expect(wrapper.vm.internalModelValue).toBeNull();
    });

    it('Should map internal modelValue on change', () => {
        const modelValue = new Date();
        const wrapper = shallowMountDp({ modelValue });
        expect(wrapper.vm.internalModelValue).toEqual(modelValue);
    });

    it('Should detect external modelValue change', () => {
        const date = new Date();
        const wrapper = shallowMountDp({ modelValue: null });

        wrapper.setProps({ modelValue: date });
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.internalModelValue).toEqual(date);
        });
    });

    it('Should map range modelValue', () => {
        const start = new Date();
        const end = addDays(start, 7);
        const modelValue = [start, end];

        const wrapper = shallowMountDp({ modelValue, range: true });

        expect(wrapper.vm.internalModelValue).toHaveLength(2);
        expect(wrapper.vm.internalModelValue[0]).toEqual(start);
        expect(wrapper.vm.internalModelValue[1]).toEqual(end);
    });

    it('Should map string value to date object', () => {
        const stringModelValue = '2021-10-17';
        const wrapper = shallowMountDp({ modelValue: stringModelValue });
        expect(resetDateTime(wrapper.vm.internalModelValue)).toEqual(resetDateTime(stringModelValue));
    });

    it('Should map month-picker modelValue to date object', () => {
        const modelValue = { month: 0, year: 2021 };
        const wrapper = shallowMountDp({ modelValue, monthPicker: true });

        expect(wrapper.vm.internalModelValue.getMonth()).toEqual(modelValue.month);
        expect(wrapper.vm.internalModelValue.getFullYear()).toEqual(modelValue.year);
    });

    it('Should map time-picker modelValue to date object', () => {
        const modelValue = { hours: 10, minutes: 15, seconds: 0 };
        const wrapper = shallowMountDp({ modelValue, timePicker: true });

        expect(wrapper.vm.internalModelValue.getHours()).toEqual(modelValue.hours);
        expect(wrapper.vm.internalModelValue.getMinutes()).toEqual(modelValue.minutes);
    });

    it('Should map year-picker to date object', () => {
        const modelValue = 2050;
        const wrapper = shallowMountDp({ modelValue, yearPicker: true });
        expect(getYear(wrapper.vm.internalModelValue)).toEqual(modelValue);
    });

    it('Should map month-picker range to array of dates with proper months', () => {
        const today = new Date();
        const modelValue = [
            { month: getMonth(today), year: getYear(today) },
            { month: getMonth(addMonths(today, 1)), year: getYear(today) },
        ];

        const wrapper = shallowMountDp({ modelValue, monthPicker: true, range: true });
        expect(getMonth(wrapper.vm.internalModelValue[0])).toEqual(modelValue[0].month);
        expect(getMonth(wrapper.vm.internalModelValue[1])).toEqual(modelValue[1].month);
    });

    it('Should map year-picker range to array of dates with proper years', () => {
        const today = new Date();

        const modelValue = [getYear(today), getYear(addYears(today, 1))];
        const wrapper = shallowMountDp({ modelValue, yearPicker: true, range: true });

        expect(getYear(wrapper.vm.internalModelValue[0])).toEqual(modelValue[0]);
        expect(getYear(wrapper.vm.internalModelValue[1])).toEqual(modelValue[1]);
    });

    it('Should map custom timestamp v-model', () => {
        const today = new Date();

        const wrapper = shallowMountDp({ modelValue: today.getTime(), modelType: 'timestamp' });
        expect(wrapper.vm.internalModelValue).toEqual(today);
    });

    it('Should map custom format v-model', () => {
        const today = new Date();
        const pattern = 'dd.MM.yyyy';
        const modelValue = format(today, pattern);

        const wrapper = shallowMountDp({ modelValue, modelType: pattern });
        expect(wrapper.vm.internalModelValue).toEqual(parse(modelValue, pattern, new Date()));
    });

    it('Should map UTC date with preserve', () => {
        const today = new Date();

        const utcDate = Date.UTC(
            today.getUTCFullYear(),
            today.getUTCMonth(),
            today.getUTCDate(),
            today.getUTCHours(),
            today.getUTCMinutes(),
            today.getUTCSeconds(),
        );

        const modelValue = new Date(utcDate).toISOString();

        const wrapper = shallowMountDp({ modelValue, utc: 'preserve' });
        const mappedValue = new Date(new Date(utcDate).getTime() + new Date(utcDate).getTimezoneOffset() * 60000);

        expect(wrapper.vm.internalModelValue).toEqual(mappedValue);
    });

    it('Should map UTC to local timezone', () => {
        const today = new Date();

        const utcDate = Date.UTC(
            today.getUTCFullYear(),
            today.getUTCMonth(),
            today.getUTCDate(),
            today.getUTCHours(),
            today.getUTCMinutes(),
            today.getUTCSeconds(),
        );

        const modelValue = new Date(utcDate).toISOString();

        const wrapper = shallowMountDp({ modelValue, utc: true });
        expect(getHours(wrapper.vm.internalModelValue)).toEqual(getHours(today));
    });

    it('Should emit month-picker values', () => {
        const wrapper = shallowMountDp({ monthPicker: true });
        wrapper.vm.internalModelValue = new Date();

        wrapper.vm.emitModelValue();

        expect(wrapper.emitted()).toHaveProperty('update:model-value');
        expect((wrapper.emitted()['update:model-value'][0] as any)[0]).toEqual({
            month: getMonth(new Date()),
            year: getYear(new Date()),
        });
    });

    it('Should emit year-picker values', () => {
        const wrapper = shallowMountDp({ yearPicker: true });
        wrapper.vm.internalModelValue = new Date();

        wrapper.vm.emitModelValue();

        expect(wrapper.emitted()).toHaveProperty('update:model-value');
        expect((wrapper.emitted()['update:model-value'][0] as any)[0]).toEqual(getYear(new Date()));
    });

    it('Should emit time-picker values', () => {
        const date = new Date();
        const wrapper = shallowMountDp({ timePicker: true });
        wrapper.vm.internalModelValue = date;

        wrapper.vm.emitModelValue();

        expect(wrapper.emitted()).toHaveProperty('update:model-value');
        expect((wrapper.emitted()['update:model-value'][0] as any)[0]).toEqual({
            hours: getHours(date),
            minutes: getMinutes(date),
            seconds: 0,
        });
    });

    it('Should emit date-picker values', () => {
        const date = new Date();
        const wrapper = shallowMountDp({});
        wrapper.vm.internalModelValue = date;

        wrapper.vm.emitModelValue();
        expect(wrapper.emitted()).toHaveProperty('update:model-value');
        expect((wrapper.emitted()['update:model-value'][0] as any)[0]).toEqual(date);
    });

    it('Should emit multi-dates value', () => {
        const dates = [new Date(), addDays(new Date(), 1), addDays(new Date(), 2), addDays(new Date(), 3)];
        const wrapper = shallowMountDp({ multiDates: true });
        wrapper.vm.internalModelValue = dates;

        wrapper.vm.emitModelValue();
        expect(wrapper.emitted()).toHaveProperty('update:model-value');
        expect((wrapper.emitted()['update:model-value'][0] as any)[0]).toEqual(dates);
    });

    it('Should emit empty array if no multi-dates are selected', () => {
        const wrapper = shallowMountDp({ multiDates: true });
        wrapper.vm.internalModelValue = null;

        wrapper.vm.emitModelValue();
        expect(wrapper.emitted()).toHaveProperty('update:model-value');
        expect((wrapper.emitted()['update:model-value'][0] as any)[0]).toEqual([]);
    });

    it('Should emit custom model-type', () => {
        const date = new Date();
        const wrapper = shallowMountDp({ modelType: 'timestamp' });
        wrapper.vm.internalModelValue = date;

        wrapper.vm.emitModelValue();
        expect(wrapper.emitted()).toHaveProperty('update:model-value');
        expect((wrapper.emitted()['update:model-value'][0] as any)[0]).toEqual(+date);

        const secondWrapper = shallowMountDp({ modelType: 'format', format: 'dd.mm.yyyy' });
        secondWrapper.vm.internalModelValue = date;

        secondWrapper.vm.emitModelValue();
        expect(secondWrapper.emitted()).toHaveProperty('update:model-value');
        expect((secondWrapper.emitted()['update:model-value'][0] as any)[0]).toEqual(format(date, 'dd.mm.yyyy'));
    });

    it('Should emit single date on model-auto 1 selection', () => {
        const { wrapper, date } = mountModelAuto();
        wrapper.vm.internalModelValue = [date, null];

        wrapper.vm.emitModelValue();
        expect(wrapper.emitted()).toHaveProperty('update:model-value');
        expect((wrapper.emitted()['update:model-value'][0] as any)[0]).toEqual(date);
    });

    it('Should emit range date on model-auto 2 selections', () => {
        const { wrapper, date } = mountModelAuto();

        wrapper.vm.internalModelValue = [date, addDays(date, 1)];
        wrapper.vm.emitModelValue();
        expect((wrapper.emitted()['update:model-value'][0] as any)[0]).toEqual([date, addDays(date, 1)]);
    });

    it('Should properly map month-picker multi dates', async () => {
        const setMonthItem = (toAdd: number) => addMonths(new Date(), toAdd);
        const dates = [setMonthItem(1), setMonthItem(2), setMonthItem(3)];
        const modelValue = dates.map((date) => ({ month: getMonth(date), year: getYear(date) }));
        const wrapper = shallowMountDp({ multiDates: true, monthPicker: true, modelValue });

        expect(wrapper.vm.internalModelValue).toHaveLength(3);
        expect((wrapper.vm.internalModelValue as Date[]).map((date) => resetDateTime(date))).toEqual(
            dates.map((date) => resetDateTime(date)),
        );
    });
});
