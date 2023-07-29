import { describe, it, expect } from 'vitest';
import { addMonths, subMonths } from 'date-fns';

import ActionRow from '@/components/ActionRow.vue';

import { mount, VueWrapper } from '@vue/test-utils';
import { useArrowNavigation } from '@/composables';

import type { AllPropsType } from '@/props';
import type { IFormat, InternalModuleValue } from '@/interfaces';
import type { ComponentPublicInstance } from 'vue';

const mountActionRow = (
    props: Partial<AllPropsType> & { internalModelValue?: InternalModuleValue },
): VueWrapper<ComponentPublicInstance<{ isTimeValid: boolean; isMonthValid: boolean; previewValue: string }>> => {
    return mount(ActionRow, { props }) as any;
};

describe('ActionRow component', () => {
    const props = { menuMount: true, internalModelValue: null };

    it('Should build arrow navigation matrix', async () => {
        const { refSets } = useArrowNavigation();

        mountActionRow({ ...props, arrowNavigation: true });

        expect(refSets.actionRow).toHaveLength(2);
    });

    it('Should not check time', () => {
        const wrapper = mountActionRow({ ...props, ignoreTimeValidation: true });

        expect(wrapper.vm.isTimeValid).toBe(true);
    });

    it('Should check if month is within range on maxDate', () => {
        const wrapper = mountActionRow({
            ...props,
            maxDate: addMonths(new Date(), 1),
            monthPicker: true,
            internalModelValue: new Date(),
        });

        expect(wrapper.vm.isMonthValid).toBe(true);
    });

    it('Should check if month is within range on minDate', () => {
        const wrapper = mountActionRow({
            ...props,
            minDate: subMonths(new Date(), 1),
            monthPicker: true,
            internalModelValue: new Date(),
        });

        expect(wrapper.vm.isMonthValid).toBe(true);
    });

    it('Should check if month is within range on minDate and maxDate', () => {
        const wrapper = mountActionRow({
            ...props,
            minDate: subMonths(new Date(), 1),
            maxDate: addMonths(new Date(), 1),
            monthPicker: true,
            internalModelValue: subMonths(new Date(), 3),
        });

        expect(wrapper.vm.isMonthValid).toBe(false);
    });

    it('Should format month picker with custom format fn', () => {
        const formatter = (date: Date) => `${date.getMonth()}`;

        const wrapper = mountActionRow({
            ...props,
            previewFormat: formatter as IFormat,
            monthPicker: true,
            internalModelValue: new Date(),
        });

        expect(wrapper.vm.previewValue).toEqual(formatter(new Date()));
    });

    it('Should format year picker with custom format fn', () => {
        const formatter = (date: Date) => `${date.getFullYear()}`;

        const wrapper = mountActionRow({
            ...props,
            previewFormat: formatter as IFormat,
            yearPicker: true,
            internalModelValue: new Date(),
        });

        expect(wrapper.vm.previewValue).toEqual(formatter(new Date()));
    });

    it('Should format date in a single row when multi-calendars is enabled', () => {
        const wrapper = mountActionRow({
            ...props,
            multiCalendars: 2,
            range: true,
            internalModelValue: [new Date(), addMonths(new Date(), 1)],
        });

        expect(wrapper.vm.previewValue).toBeTypeOf('string');
    });

    it('Should select date', async () => {
        const wrapper = mountActionRow(props);

        await wrapper.find('[data-test="select-button"]').trigger('click');
        expect(wrapper.emitted()).toHaveProperty('select-date');
    });
});
