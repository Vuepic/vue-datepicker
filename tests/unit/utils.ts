/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */
import { mount } from '@vue/test-utils';
import Datepicker from '../../src/Vue3DatePicker/Vue3DatePicker.vue';
import { FormatOptions } from '../../src/Vue3DatePicker/interfaces';
import { VueWrapper } from '@vue/test-utils/dist/vueWrapper';

export const getDateValues = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
    };
};

export const getLongDateValues = (date: Date, options: FormatOptions, locale = 'en-US'): string => {
    return new Intl.DateTimeFormat(locale, options).format(date);
};

export const formatFunction = (date: Date | Date[]): string => {
    if (Array.isArray(date)) {
        const dateOne = getDateValues(date[0]);
        const dateTwo = getDateValues(date[1]);
        return `${dateOne.day}.${dateOne.year}.${dateOne.month}, ${dateOne.hours}:${dateOne.minutes} - ${dateTwo.day}.${dateTwo.month}.${dateTwo.year}, ${dateTwo.hours}:${dateTwo.minutes}`;
    }
    const { month, day, year, hours, minutes } = getDateValues(date);
    return `${day}.${month}.${year}, ${hours}:${minutes}`;
};

const defaultProps = {
    range: false,
    format: {},
    is24: true,
    enableTimePicker: true,
    locale: 'en-US',
    placeholder: '',
    weekNumbers: false,
    dark: false,
    hoursIncrement: 1,
    minutesIncrement: 1,
    hoursGridIncrement: 1,
    minutesGridIncrement: 5,
    minDate: null,
    maxDate: null,
    minTime: {},
    maxTime: {},
    weekStart: 1,
    disabled: false,
    readonly: false,
    weekNumName: 'W',
    state: null,
    clearable: true,
    filters: {},
    yearRange: [1970, 2100],
    disabledDates: [],
    selectText: 'Select',
    cancelText: 'Cancel',
    inline: false,
    autoApply: true,
    closeOnScroll: true,
    hideInputIcon: false,
};

// Prepare parent component to not repeat in each test case
export const createParentAndGetChild = (
    date: Date | Date[] | string | string[] | null,
    additionalProps?: any,
): VueWrapper<any> => {
    const props = Object.assign({}, defaultProps, additionalProps);
    const Parent = mount({
        data: () => ({
            date,
            ...props,
        }),
        components: { Datepicker },
        template: `
                <Datepicker
                  v-model="date"
                  :range="range"
                  :format="format"
                  :is24="is24"
                  :enableTimePicker="enableTimePicker"
                  :locale="locale"
                  :placeholder="placeholder"
                  :weekNumbers="weekNumbers"
                  :dark="dark"
                  :hoursIncrement="hoursIncrement"
                  :minutesIncrement="minutesIncrement"
                  :hoursGridIncrement="hoursGridIncrement"
                  :minutesGridIncrement="minutesGridIncrement"
                  :minDate="minDate"
                  :maxDate="maxDate"
                  :maxTime="maxTime"
                  :minTime="minTime"
                  :weekStart="weekStart"
                  :disabled="disabled"
                  :readonly="readonly"
                  :weekNumName="weekNumName"
                  :state="state"
                  :clearable="clearable"
                  :filters="filters"
                  :yearRange="yearRange"
                  :disabledDates="disabledDates"
                  :selectText="selectText"
                  :cancelText="cancelText"
                  :inline="inline"
                  :autoApply="autoApply"
                  :closeOnScroll="closeOnScroll"
                  :hideInputIcon="hideInputIcon"
                />
              `,
    });

    return Parent.findComponent(Datepicker);
};

export const getDateFormat = (valueOne: Date, valueTwo?: Date): string => {
    if (valueTwo) {
        const dateOne = getDateValues(valueOne);
        const dateTwo = getDateValues(valueTwo);
        return `${dateOne.month}/${dateOne.day}/${dateOne.year}, ${dateOne.hours}:${dateOne.minutes} - ${dateTwo.month}/${dateTwo.day}/${dateTwo.year}, ${dateTwo.hours}:${dateTwo.minutes}`;
    }
    const { month, day, year, hours, minutes } = getDateValues(valueOne);
    return `${month}/${day}/${year}, ${hours}:${minutes}`;
};
