import { describe, it, beforeEach, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ActionRow from '@/components/ActionRow.vue';
import { useArrowNavigation, useState } from '@/components/composables';
import type { AllPropsType } from '@/utils/props';
import { addMonths, subMonths } from 'date-fns';

describe('ActionRow component', () => {
    const { setProps, internalModelValue } = useState();
    const props = { menuMount: true, calendarWidth: 400 };

    beforeEach(() => {
        setProps({} as AllPropsType);
    });

    it('Should set proper row width', () => {
        const wrapper = mount(ActionRow, { props });

        expect(wrapper.html()).to.include('width: 400px');
    });

    it('Should build arrow navigation matrix', async () => {
        const { refSets } = useArrowNavigation();
        setProps({ arrowNavigation: true } as AllPropsType);
        mount(ActionRow, { props });

        // const selectBtn = wrapper.find('[data-test="select-button"]');
        // expect(selectBtn).toBe(document.activeElement);
        expect(refSets.actionRow).toHaveLength(2);
    });

    it('Should not check time', () => {
        setProps({ ignoreTimeValidation: true } as AllPropsType);
        const wrapper = mount(ActionRow, { props });

        expect(wrapper.vm.isTimeValid).toBe(true);
    });

    it('Should check if month is within range on maxDate', () => {
        setProps({ maxDate: addMonths(new Date(), 1), monthPicker: true } as AllPropsType);
        internalModelValue.value = new Date();

        const wrapper = mount(ActionRow, { props });

        expect(wrapper.vm.isMonthValid).toBe(true);
    });

    it('Should check if month is within range on minDate', () => {
        setProps({ minDate: subMonths(new Date(), 1), monthPicker: true } as AllPropsType);
        internalModelValue.value = new Date();

        const wrapper = mount(ActionRow, { props });

        expect(wrapper.vm.isMonthValid).toBe(true);
    });

    it('Should check if month is within range on minDate and maxDate', () => {
        setProps({
            minDate: subMonths(new Date(), 1),
            maxDate: addMonths(new Date(), 1),
            monthPicker: true,
        } as AllPropsType);

        internalModelValue.value = subMonths(new Date(), 3);

        const wrapper = mount(ActionRow, { props });

        expect(wrapper.vm.isMonthValid).toBe(false);
    });

    it('Should format month picker with custom format fn', () => {
        const formatter = (date: Date) => `${date.getMonth()}`;
        setProps({ previewFormat: formatter } as AllPropsType);

        internalModelValue.value = new Date();

        const wrapper = mount(ActionRow, { props });

        expect(wrapper.vm.previewValue).toEqual(formatter(new Date()));
    });

    it('Should format year picker with custom format fn', () => {
        const formatter = (date: Date) => `${date.getFullYear()}`;
        setProps({ previewFormat: formatter } as AllPropsType);

        internalModelValue.value = new Date();

        const wrapper = mount(ActionRow, { props });

        expect(wrapper.vm.previewValue).toEqual(formatter(new Date()));
    });

    it('Should format date in a single row when multi-calendars is enabled', () => {
        setProps({ multiCalendars: true, range: true } as AllPropsType);
        internalModelValue.value = [new Date(), addMonths(new Date(), 1)];

        const wrapper = mount(ActionRow, { props });

        expect(wrapper.vm.previewValue).toBeTypeOf('string');
    });

    // todo - fix the logic in code
    it('Should properly format model-auto', () => {
        setProps({ modelAuto: true, range: true, partialRange: true } as AllPropsType);
        internalModelValue.value = new Date();
    });

    it('Should select date', async () => {
        const wrapper = mount(ActionRow, { props });

        await wrapper.find('[data-test="select-button"]').trigger('click');
        expect(wrapper.emitted()).toHaveProperty('select-date');
    });
});
