import { shallowMount } from '@vue/test-utils';
import { getYear, addDays, getMonth, addMonths, addYears, format, parse, getHours } from 'date-fns';
import { describe, it, expect } from 'vitest';

import VueDatepicker from '@/VueDatePicker.vue';
import { resetDateTime } from '@/components/composables';

describe('v-model mapping', () => {
    it('Should accept null value v-model', () => {
        const wrapper = shallowMount(VueDatepicker, { props: { modelValue: null } });
        expect(wrapper.vm.internalModelValue).toBeNull();
    });

    it('Should map internal modelValue on change', () => {
        const modelValue = new Date();
        const wrapper = shallowMount(VueDatepicker, { props: { modelValue } });
        expect(wrapper.vm.internalModelValue).toEqual(modelValue);
    });

    it('Should detect external modelValue change', () => {
        const date = new Date();
        const wrapper = shallowMount(VueDatepicker, { props: { modelValue: null } });

        wrapper.setProps({ modelValue: date });
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.internalModelValue).toEqual(date);
        });
    });

    it('Should map range modelValue', () => {
        const start = new Date();
        const end = addDays(start, 7);
        const modelValue = [start, end];

        const wrapper = shallowMount(VueDatepicker, { props: { modelValue, range: true } });

        expect(wrapper.vm.internalModelValue).toHaveLength(2);
        expect(wrapper.vm.internalModelValue[0]).toEqual(start);
        expect(wrapper.vm.internalModelValue[1]).toEqual(end);
    });

    it('Should map string value to date object', () => {
        const stringModelValue = '2021-10-17';
        const wrapper = shallowMount(VueDatepicker, { props: { modelValue: stringModelValue } });
        expect(resetDateTime(wrapper.vm.internalModelValue)).toEqual(resetDateTime(stringModelValue));
    });

    it('Should map month-picker modelValue to date object', () => {
        const modelValue = { month: 0, year: 2021 };
        const wrapper = shallowMount(VueDatepicker, { props: { modelValue, monthPicker: true } });

        expect(wrapper.vm.internalModelValue.getMonth()).toEqual(modelValue.month);
        expect(wrapper.vm.internalModelValue.getFullYear()).toEqual(modelValue.year);
    });

    it('Should map time-picker modelValue to date object', () => {
        const modelValue = { hours: 10, minutes: 15 };
        const wrapper = shallowMount(VueDatepicker, { props: { modelValue, timePicker: true } });

        expect(wrapper.vm.internalModelValue.getHours()).toEqual(modelValue.hours);
        expect(wrapper.vm.internalModelValue.getMinutes()).toEqual(modelValue.minutes);
    });

    it('Should map year-picker to date object', () => {
        const modelValue = 2050;
        const wrapper = shallowMount(VueDatepicker, { props: { modelValue, yearPicker: true } });
        expect(getYear(wrapper.vm.internalModelValue)).toEqual(modelValue);
    });

    it('Should map month-picker range to array of dates with proper months', () => {
        const today = new Date();
        const modelValue = [
            { month: getMonth(today), year: getYear(today) },
            { month: getMonth(addMonths(today, 1)), year: getYear(today) },
        ];

        const wrapper = shallowMount(VueDatepicker, { props: { modelValue, monthPicker: true, range: true } });
        expect(getMonth(wrapper.vm.internalModelValue[0])).toEqual(modelValue[0].month);
        expect(getMonth(wrapper.vm.internalModelValue[1])).toEqual(modelValue[1].month);
    });

    it('Should map year-picker range to array of dates with proper years', () => {
        const today = new Date();

        const modelValue = [getYear(today), getYear(addYears(today, 1))];
        const wrapper = shallowMount(VueDatepicker, { props: { modelValue, yearPicker: true, range: true } });

        expect(getYear(wrapper.vm.internalModelValue[0])).toEqual(modelValue[0]);
        expect(getYear(wrapper.vm.internalModelValue[1])).toEqual(modelValue[1]);
    });

    it('Should map custom timestamp v-model', () => {
        const today = new Date();

        const wrapper = shallowMount(VueDatepicker, { props: { modelValue: today.getTime(), modelType: 'timestamp' } });
        expect(wrapper.vm.internalModelValue).toEqual(today);
    });

    it('Should map custom format v-model', () => {
        const today = new Date();
        const pattern = 'dd.MM.yyyy';
        const modelValue = format(today, pattern);

        const wrapper = shallowMount(VueDatepicker, { props: { modelValue, modelType: pattern } });
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

        const wrapper = shallowMount(VueDatepicker, { props: { modelValue, utc: 'preserve' } });
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

        const wrapper = shallowMount(VueDatepicker, { props: { modelValue, utc: true } });
        expect(getHours(wrapper.vm.internalModelValue)).toEqual(getHours(today));
    });
});
