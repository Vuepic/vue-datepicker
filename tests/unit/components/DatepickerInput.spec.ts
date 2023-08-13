import { describe, expect, it } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import { addDays, format, getHours, getMinutes, set } from 'date-fns';

import DatepickerInput from '@/components/DatepickerInput.vue';
import DatePicker from '@/VueDatePicker.vue';

import type { ComponentPublicInstance } from 'vue';

const getCurrentTime = () => {
    return {
        hours: getHours(new Date()),
        minutes: getMinutes(new Date()),
        seconds: 0,
        milliseconds: 0,
    };
};

const resetSeconds = (date: Date) => set(date, { seconds: 0, milliseconds: 0 });
describe('Datepicker input component', () => {
    const props = { isMenuOpen: false, inputValue: '' };
    const patternFormat = format(new Date(), 'MM/dd/yyyy');

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
        const wrapper = mount(DatepickerInput, {
            props: { ...props, inputValue: patternFormat, clearable: true },
        }) as unknown as VueWrapper<ComponentPublicInstance<{ onClear: () => void }>>;

        wrapper.vm.onClear();
        expect(wrapper.emitted()).toHaveProperty('clear');
    });

    it('Should select single date on text-input', async () => {
        const wrapper = mount(DatepickerInput, { props: { ...props, textInput: true } });
        const el = wrapper.find('input');
        await el.setValue(patternFormat);
        await el.trigger('keydown.enter');

        expect(wrapper.emitted()['set-input-date'][0]).toEqual([set(new Date(), getCurrentTime())]);
    });

    it('Should select range on text-input', async () => {
        const wrapper = mount(DatepickerInput, {
            props: {
                ...props,
                textInput: true,
                format: 'MM/dd/yyyy',
                range: true,
            },
        });
        const el = wrapper.find('input');
        await el.setValue(`${patternFormat} - ${patternFormat}`);
        await el.trigger('keydown.enter');

        expect((wrapper.emitted()['set-input-date'][0] as Array<any>)[0]).toEqual([
            set(new Date(), getCurrentTime()),
            set(new Date(), getCurrentTime()),
        ]);
    });

    it('Should clear the selected value on clearing input with text-input', async () => {
        const wrapper = mount(DatepickerInput, { props: { ...props, textInput: true, format: 'MM/dd/yyyy' } });
        const el = wrapper.find('input');
        await el.setValue('');
        await el.trigger('keydown.enter');

        expect((wrapper.emitted()['set-input-date'][0] as Array<any>)[0]).toBeNull();
    });

    it('Should submit date with tab key', async () => {
        const wrapper = mount(DatepickerInput, {
            props: { ...props, textInput: true, format: 'MM/dd/yyyy' },
        });

        const el = wrapper.find('input');
        await el.setValue(patternFormat);

        await wrapper.find('input').trigger('keydown.tab');

        expect(wrapper.emitted()['set-input-date'][0]).toEqual([set(new Date(), getCurrentTime())]);
    });

    it('Should clear date with tab key', async () => {
        const wrapper = mount(DatepickerInput, {
            props: { ...props, textInput: true, format: 'MM/dd/yyyy' },
        });

        await wrapper.find('input').trigger('keydown.tab');

        expect(Object.keys(wrapper.emitted())).to.not.include('set-input-date');
    });

    it('Should switch format on text-input-options-format and general format', async () => {
        const inputPattern = 'dd-MM-yyyy';
        const formatPattern = 'MM/dd/yyyy';
        const patternDate = format(new Date(), inputPattern);

        const wrapper = mount(DatePicker, {
            props: {
                textInput: { format: inputPattern },
                format: formatPattern,
                modelValue: new Date(),
            },
        });
        const inputCmp = wrapper.findComponent(DatepickerInput);
        await inputCmp.vm.$nextTick();

        await inputCmp.find('input').trigger('focus');
        await inputCmp.vm.$nextTick();
        await wrapper.vm.$nextTick();

        expect(inputCmp.find('input').element.value).toEqual(patternDate);

        await inputCmp.find('input').trigger('blur');
        await inputCmp.vm.$nextTick();
        await wrapper.vm.$nextTick();

        expect(inputCmp.find('input').element.value).toEqual(format(new Date(), formatPattern));
    });

    it('Should properly select multi dates from text-input', async () => {
        const wrapper = mount(DatepickerInput, { props: { ...props, textInput: true, multiDates: true } });
        const dates = [
            resetSeconds(new Date()),
            resetSeconds(addDays(new Date(), 1)),
            resetSeconds(addDays(new Date(), 2)),
        ];
        const formatPattern = 'MM/dd/yyyy, HH:mm';
        const textValue = [
            format(dates[0], formatPattern),
            format(dates[1], formatPattern),
            format(dates[2], formatPattern),
        ];
        const el = wrapper.find('input');
        await el.setValue(textValue.join('; '));
        await el.trigger('keydown.enter');

        await wrapper.vm.$nextTick();

        expect(wrapper.emitted()['set-input-date'][0]).toEqual([dates]);
    });
});
