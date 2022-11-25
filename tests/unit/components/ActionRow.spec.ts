import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ActionRow from '@/components/ActionRow.vue';
import { useArrowNavigation } from '@/components/composables';
import { addMonths, subMonths } from 'date-fns';

describe('ActionRow component', () => {
    const props = { menuMount: true, calendarWidth: 400, internalModelValue: null };

    it('Should set proper row width', () => {
        const wrapper = mount(ActionRow, { props });

        expect(wrapper.html()).to.include('width: 400px');
    });

    it('Should build arrow navigation matrix', async () => {
        const { refSets } = useArrowNavigation();

        mount(ActionRow, { props: { ...props, arrowNavigation: true } });

        expect(refSets.actionRow).toHaveLength(2);
    });

    it('Should not check time', () => {
        const wrapper = mount(ActionRow, { props: { ...props, ignoreTimeValidation: true } });

        expect(wrapper.vm.isTimeValid).toBe(true);
    });

    it('Should check if month is within range on maxDate', () => {
        const wrapper = mount(ActionRow, {
            props: { ...props, maxDate: addMonths(new Date(), 1), monthPicker: true, internalModelValue: new Date() },
        });

        expect(wrapper.vm.isMonthValid).toBe(true);
    });

    it('Should check if month is within range on minDate', () => {
        const wrapper = mount(ActionRow, {
            props: { ...props, minDate: subMonths(new Date(), 1), monthPicker: true, internalModelValue: new Date() },
        });

        expect(wrapper.vm.isMonthValid).toBe(true);
    });

    it('Should check if month is within range on minDate and maxDate', () => {
        const wrapper = mount(ActionRow, {
            props: {
                ...props,
                minDate: subMonths(new Date(), 1),
                maxDate: addMonths(new Date(), 1),
                monthPicker: true,
                internalModelValue: subMonths(new Date(), 3),
            },
        });

        expect(wrapper.vm.isMonthValid).toBe(false);
    });

    it('Should format month picker with custom format fn', () => {
        const formatter = (date: Date) => `${date.getMonth()}`;

        const wrapper = mount(ActionRow, {
            props: {
                ...props,
                previewFormat: formatter,
                monthPicker: true,
                internalModelValue: new Date(),
            },
        });

        expect(wrapper.vm.previewValue).toEqual(formatter(new Date()));
    });

    it('Should format year picker with custom format fn', () => {
        const formatter = (date: Date) => `${date.getFullYear()}`;

        const wrapper = mount(ActionRow, {
            props: {
                ...props,
                previewFormat: formatter,
                yearPicker: true,
                internalModelValue: new Date(),
            },
        });

        expect(wrapper.vm.previewValue).toEqual(formatter(new Date()));
    });

    it('Should format date in a single row when multi-calendars is enabled', () => {
        const wrapper = mount(ActionRow, {
            props: {
                ...props,
                multiCalendars: 2,
                range: true,
                internalModelValue: [new Date(), addMonths(new Date(), 1)],
            },
        });

        expect(wrapper.vm.previewValue).toBeTypeOf('string');
    });

    it('Should select date', async () => {
        const wrapper = mount(ActionRow, { props });

        await wrapper.find('[data-test="select-button"]').trigger('click');
        expect(wrapper.emitted()).toHaveProperty('select-date');
    });
});
