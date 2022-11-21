import { beforeEach, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import DatepickerInput from '@/components/DatepickerInput.vue';
import { useState } from '@/components/composables';

import type { AllPropsType } from '@/utils/props';
import { format, set } from 'date-fns';

describe('Datepicker input component', () => {
    const { setProps } = useState();
    const props = { isMenuOpen: false, inputValue: '' };
    const patternFormat = format(new Date(), 'MM/dd/yyyy');

    beforeEach(() => {
        setProps({} as AllPropsType);
    });

    it('Should open datepicker menu', async () => {
        const wrapper = mount(DatepickerInput, { props });

        await wrapper.find('input').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('toggle');
    });

    it('Should native focus the input', async () => {
        const wrapper = mount(DatepickerInput, { props });

        await wrapper.find('input').trigger('focus');

        expect(wrapper.emitted()).toHaveProperty('focus');
    });

    it('Should clear the input', async () => {
        setProps({ clearable: true } as AllPropsType);
        const wrapper = mount(DatepickerInput, {
            props: { ...props, inputValue: patternFormat },
        });
        await wrapper.find('[data-test="clear-icon"]').trigger('click');
        expect(wrapper.emitted()).toHaveProperty('clear');
    });

    it('Should select single date on text-input', async () => {
        setProps({ textInput: true } as AllPropsType);
        const wrapper = mount(DatepickerInput, { props });
        const el = wrapper.find('input');
        await el.setValue(patternFormat);
        await el.trigger('keydown.enter');

        expect(wrapper.emitted()['set-input-date'][0]).toEqual([
            set(new Date(), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }),
        ]);
    });

    it('Should select range on text-input', async () => {
        setProps({ textInput: true, format: 'MM/dd/yyyy', range: true } as AllPropsType);

        const wrapper = mount(DatepickerInput, { props });
        const el = wrapper.find('input');
        await el.setValue(`${patternFormat} - ${patternFormat}`);
        await el.trigger('keydown.enter');

        expect((wrapper.emitted()['set-input-date'][0] as Array<any>)[0]).toEqual([
            set(new Date(), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }),
            set(new Date(), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }),
        ]);
    });

    it('Should clear the selected value on clearing input with text-input', async () => {
        setProps({ textInput: true, format: 'MM/dd/yyyy' } as AllPropsType);
        const wrapper = mount(DatepickerInput, { props });
        const el = wrapper.find('input');
        await el.setValue('');
        await el.trigger('keydown.enter');

        expect((wrapper.emitted()['set-input-date'][0] as Array<any>)[0]).toBeNull();
    });

    it('Should submit date with tab key', async () => {
        setProps({ textInput: true, format: 'MM/dd/yyyy', textInputOptions: { tabSubmit: true } } as AllPropsType);
        const wrapper = mount(DatepickerInput, { props });

        const el = wrapper.find('input');
        await el.setValue(patternFormat);

        await wrapper.find('input').trigger('keydown.tab');

        expect(wrapper.emitted()['set-input-date'][0]).toEqual([
            set(new Date(), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }),
        ]);
    });

    it('Should clear date with tab key', async () => {
        setProps({ textInput: true, format: 'MM/dd/yyyy', textInputOptions: { tabSubmit: true } } as AllPropsType);
        const wrapper = mount(DatepickerInput, { props });

        await wrapper.find('input').trigger('keydown.tab');

        expect(Object.keys(wrapper.emitted())).to.not.include('set-input-date');
    });
});
