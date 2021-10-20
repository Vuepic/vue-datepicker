import { shallowMount } from '@vue/test-utils';
import addDays from 'date-fns/addDays';

import Vue3Datepicker from '../../src/Vue3DatePicker/Vue3DatePicker.vue';

import { resetDateTime } from '../../src/Vue3DatePicker/utils/date-utils';

describe('v-model mapping', () => {
    it('Should accept null value v-model', () => {
        const wrapper = shallowMount(Vue3Datepicker, { props: { modelValue: null } });
        expect(wrapper.vm.internalModelValue).toBeNull();
    });

    it('Should map internal modelValue on change', () => {
        const modelValue = new Date();
        const wrapper = shallowMount(Vue3Datepicker, { props: { modelValue } });
        expect(wrapper.vm.internalModelValue).toEqual(modelValue);
    });

    it('Should detect external modelValue change', () => {
        const date = new Date();
        const wrapper = shallowMount(Vue3Datepicker, { props: { modelValue: null } });

        wrapper.setProps({ modelValue: date });
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.internalModelValue).toEqual(date);
        });
    });

    it('Should map range modelValue', () => {
        const start = new Date();
        const end = addDays(start, 7);
        const modelValue = [start, end];

        const wrapper = shallowMount(Vue3Datepicker, { props: { modelValue, range: true } });

        expect(wrapper.vm.internalModelValue).toHaveLength(2);
        expect(wrapper.vm.internalModelValue[0]).toEqual(start);
        expect(wrapper.vm.internalModelValue[1]).toEqual(end);
    });

    it('Should map string value to date object', () => {
        const stringModelValue = '2021-10-17';
        const wrapper = shallowMount(Vue3Datepicker, { props: { modelValue: stringModelValue } });
        expect(resetDateTime(wrapper.vm.internalModelValue)).toEqual(resetDateTime(stringModelValue));
    });

    it('Should map month-picker modelValue to date object', () => {
        const modelValue = { month: 0, year: 2021 };
        const wrapper = shallowMount(Vue3Datepicker, { props: { modelValue, monthPicker: true } });

        expect(wrapper.vm.internalModelValue.getMonth()).toEqual(modelValue.month);
        expect(wrapper.vm.internalModelValue.getFullYear()).toEqual(modelValue.year);
    });

    it('Should map time-picker modelValue to date object', () => {
        const modelValue = { hours: 10, minutes: 15 };
        const wrapper = shallowMount(Vue3Datepicker, { props: { modelValue, timePicker: true } });

        expect(wrapper.vm.internalModelValue.getHours()).toEqual(modelValue.hours);
        expect(wrapper.vm.internalModelValue.getMinutes()).toEqual(modelValue.minutes);
    });
});
