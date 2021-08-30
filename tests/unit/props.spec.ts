import { createParentAndGetChild, getDateValues } from './utils';
import DatePicker from '../../src/Vue3DatePicker/Vue3DatePicker.vue';
import { mount } from '@vue/test-utils';

describe('Props test', () => {
    test('24 Hour mode', () => {
        const date = new Date();
        const Dp = createParentAndGetChild(date, { is24: false });

        expect(Dp.vm.internalValue.includes('AM') || Dp.vm.internalValue.includes('PM')).toBeTruthy();
    });

    test('No time picker', () => {
        const date = new Date();
        const Dp = mount(DatePicker, { props: { enableTimePicker: false, modelValue: date } });

        const { day, month, year } = getDateValues(date);

        expect(Dp.vm.internalValue).toEqual(`${month}/${day}/${year}`);
        expect(Dp.vm.enableTimePicker).toBeFalsy();
    });

    test('Locale input value', () => {
        const date = new Date();
        const Dp = createParentAndGetChild(date, { locale: 'de' });

        const { day, month, year, hours, minutes } = getDateValues(date);

        expect(Dp.vm.internalValue).toEqual(`${day}.${month}.${year}, ${hours}:${minutes}`);
    });

    test('Placeholder value', () => {
        const placeholder = 'Select Date';
        const Dp = createParentAndGetChild(null, { placeholder });

        expect(Dp.vm.placeholder).toEqual(placeholder);
    });

    test('Week numbers', () => {
        const Dp = createParentAndGetChild(null, { weekNumbers: true });

        expect(Dp.vm.weekNumbers).toBeTruthy();
    });

    test('Dark mode', () => {
        const Dp = createParentAndGetChild(null, { dark: true });

        expect(Dp.vm.dark).toBeTruthy();
    });

    test('Hours increment', () => {
        const Dp = createParentAndGetChild(null, { hoursIncrement: 3 });

        expect(Dp.vm.hoursIncrement).toEqual(3);
    });

    test('Minutes increment', () => {
        const Dp = createParentAndGetChild(null, { minutesIncrement: 10 });

        expect(Dp.vm.minutesIncrement).toEqual(10);
    });

    test('Hours grid increment', () => {
        const Dp = createParentAndGetChild(null, { hoursGridIncrement: 2 });

        expect(Dp.vm.hoursGridIncrement).toEqual(2);
    });

    test('Minutes grid increment', () => {
        const Dp = createParentAndGetChild(null, { minutesGridIncrement: 2 });

        expect(Dp.vm.minutesGridIncrement).toEqual(2);
    });

    test('Min date', () => {
        const minDate = new Date();
        const Dp = createParentAndGetChild(null, { minDate });

        expect(Dp.vm.minDate).toEqual(minDate);
    });

    test('Max date', () => {
        const maxDate = new Date();
        const Dp = createParentAndGetChild(null, { maxDate });

        expect(Dp.vm.maxDate).toEqual(maxDate);
    });

    test('Min time', () => {
        const minTime = { hours: 4 };
        const Dp = createParentAndGetChild(null, { minTime });

        expect(Dp.vm.minTime.hours).toEqual(minTime.hours);
    });

    test('Max time', () => {
        const maxTime = { hours: 4 };
        const Dp = createParentAndGetChild(null, { maxTime });

        expect(Dp.vm.maxTime.hours).toEqual(maxTime.hours);
    });

    test('Week start day', () => {
        const Dp = createParentAndGetChild(null, { weekStart: 0 });

        expect(Dp.vm.weekStart).toEqual(0);
    });

    test('Disabled input', () => {
        const Dp = createParentAndGetChild(null, { disabled: true });

        expect(Dp.vm.disabled).toBeTruthy();
    });

    test('Readonly input', () => {
        const Dp = createParentAndGetChild(null, { readonly: true });

        expect(Dp.vm.readonly).toBeTruthy();
    });

    test('Input state', () => {
        const Dp = createParentAndGetChild(null, { state: true });

        expect(Dp.vm.state).toBeTruthy();
    });

    test('Clearable', () => {
        const Dp = createParentAndGetChild(null, { clearable: false });

        expect(Dp.vm.clearable).toBeFalsy();
    });

    test('Filters', () => {
        const Dp = createParentAndGetChild(null, { filters: { years: [2019] } });

        expect(Dp.vm.filters.years).toHaveLength(1);
    });

    test('Year range', () => {
        const Dp = createParentAndGetChild(null, { yearRange: [2010, 2020] });

        expect(Dp.vm.yearRange[0]).toEqual(2010);
        expect(Dp.vm.yearRange[1]).toEqual(2020);
    });

    test('Disabled dates', () => {
        const date = new Date();
        const Dp = createParentAndGetChild(null, { disabledDates: [date] });

        expect(Dp.vm.disabledDates[0]).toEqual(date);
    });

    test('Select text', () => {
        const selectText = 'selection';
        const Dp = createParentAndGetChild(null, { selectText });

        expect(Dp.vm.selectText).toEqual(selectText);
    });

    test('Cancel text', () => {
        const cancelText = 'close';
        const Dp = createParentAndGetChild(null, { cancelText });

        expect(Dp.vm.cancelText).toEqual(cancelText);
    });

    test('Inline date picker', () => {
        const Dp = createParentAndGetChild(null, { inline: true });

        expect(Dp.vm.inline).toBeTruthy();
    });

    test('Close on scroll', () => {
        const Dp = createParentAndGetChild(null, { closeOnScroll: false });

        expect(Dp.vm.closeOnScroll).toBeFalsy();
    });

    test('Hide input icon', () => {
        const Dp = createParentAndGetChild(null, { hideInputIcon: true });

        expect(Dp.vm.hideInputIcon).toBeTruthy();
    });

    test('Auto apply selection', () => {
        const Dp = createParentAndGetChild(null, { autoApply: true });

        expect(Dp.vm.autoApply).toBeTruthy();
    });
});
