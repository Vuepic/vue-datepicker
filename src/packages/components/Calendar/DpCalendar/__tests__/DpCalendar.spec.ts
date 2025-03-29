import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { addMonths, addYears, getMonth, getYear, startOfYear, subMonths } from 'date-fns';
import { DpRootKey } from '@packages/components/DpRoot';
import { DpInstanceKey, useInstance } from '@packages/components/DpInstance';
import { DpCalendar } from '@packages/components/Calendar';
import type { DpCalendarProps } from '@packages/components/Calendar/DpCalendar';

const props = { locale: 'en-US', filters: {}, weekStart: 0 };

const getContext = (overrideProps?: Partial<typeof props>) => {
    return {
        provide: {
            [DpRootKey]: {
                props: { ...props, ...(overrideProps ?? {}) },
            },
            [DpInstanceKey]: useInstance(false),
        },
    };
};

const mountComponent = (
    overrideProps?: Partial<typeof props>,
    calendarProps?: Partial<DpCalendarProps>,
    monthKey = 'month.value',
) => {
    return mount(DpCalendar, {
        global: getContext(overrideProps),
        slots: {
            default: `
                <template #default="{month, year, nextMonth, prevMonth}">
                    <span data-test-id="active-month">{{${monthKey}}}</span> 
                    <span data-test-id="active-year">{{year}}</span> 
                    <button type="button" data-test-id="next-month" @click="nextMonth">Previous</button>
                    <button type="button" data-test-id="prev-month" @click="prevMonth">Next</button>
                </template>`,
        },
        props: calendarProps,
    });
};

const validateMonthAndYear = (wrapper: ReturnType<typeof mountComponent>, monthValue: string, yearValue: string) => {
    const monthEl = wrapper.find(`[data-test-id="active-month"]`);
    const yearEl = wrapper.find(`[data-test-id="active-year"]`);

    expect(monthEl.text()).toEqual(monthValue);
    expect(yearEl.text()).toEqual(yearValue);
};

const getMonthYear = (date: Date) => {
    return { month: getMonth(date), year: getYear(date) };
};

describe('DpCalendar', () => {
    it('Should render component', () => {
        const wrapper = mount(DpCalendar, { global: getContext() });
        expect(wrapper.html()).toContain('<div>');
    });

    it('Should fail to render without root context', () => {
        expect(() => mount(DpCalendar, { global: { [DpInstanceKey]: {} } })).toThrowError();
    });

    it('Should fail to render without instance context', () => {
        expect(() => mount(DpCalendar, { global: { [DpRootKey]: {} } })).toThrowError();
    });

    it('Should render component as custom HTML tag', () => {
        const wrapper = mount(DpCalendar, { global: getContext(), props: { as: 'section' } });
        expect(wrapper.html()).toContain('<section>');
    });

    it('Should display current month and year', () => {
        const today = new Date();
        const month = getMonth(today);
        const year = getYear(today);

        const wrapper = mountComponent();

        validateMonthAndYear(wrapper, `${month}`, `${year}`);
    });

    it('Should change to next month', async () => {
        const today = new Date();
        const nextMonth = addMonths(today, 1);
        const { month, year } = getMonthYear(nextMonth);

        const wrapper = mountComponent();

        await wrapper.find(`[data-test-id="next-month"]`).trigger('click');

        validateMonthAndYear(wrapper, `${month}`, `${year}`);
    });

    it('Should change to previous month', async () => {
        const today = new Date();
        const prevMonth = subMonths(today, 1);
        const { month, year } = getMonthYear(prevMonth);

        const wrapper = mountComponent();

        await wrapper.find(`[data-test-id="prev-month"]`).trigger('click');

        validateMonthAndYear(wrapper, `${month}`, `${year}`);
    });

    it('Should skip month from filters prop', async () => {
        const today = new Date();
        const nextMonth = addMonths(today, 1);
        const afterSkipMonth = addMonths(today, 2);
        const filters = { months: [getMonth(nextMonth)] };

        const { month, year } = getMonthYear(afterSkipMonth);

        const wrapper = mountComponent({ filters });

        await wrapper.find(`[data-test-id="next-month"]`).trigger('click');

        validateMonthAndYear(wrapper, `${month}`, `${year}`);
    });

    it('Should skip year from filters prop', async () => {
        const today = new Date();
        const toEoY = 11 - getMonth(today);
        const afterYearSkip = addYears(today, 2);
        const { month, year } = getMonthYear(startOfYear(afterYearSkip));

        const filters = { years: [getYear(addYears(today, 1))] };

        const wrapper = mountComponent({ filters });

        if (toEoY) {
            for (let i = 0; i <= toEoY; i++) {
                await wrapper.find(`[data-test-id="next-month"]`).trigger('click');
            }
        }

        validateMonthAndYear(wrapper, `${month}`, `${year}`);
    });

    it('Should not change year', async () => {
        const today = new Date();
        const toEoY = 11 - getMonth(today);
        const { month, year } = getMonthYear(startOfYear(today));

        const wrapper = mountComponent({}, { disableYearSelect: true });

        if (toEoY) {
            for (let i = 0; i <= toEoY; i++) {
                await wrapper.find(`[data-test-id="next-month"]`).trigger('click');
            }
        }

        validateMonthAndYear(wrapper, `${month}`, `${year}`);
    });

    it('Should localize month name', () => {
        const locale = 'de-DE';
        const today = new Date();
        const wrapper = mountComponent({ locale }, {}, 'month.label');
        const formatter = new Intl.DateTimeFormat(locale, { month: 'short' });

        const monthEl = wrapper.find(`[data-test-id="active-month"]`);
        expect(monthEl.text()).toEqual(formatter.format(today));
    });

    it('Should display long month name', async () => {
        const today = new Date();
        const wrapper = mountComponent({}, { monthFormat: 'long' }, 'month.label');
        const formatter = new Intl.DateTimeFormat(props.locale, { month: 'long' });

        const monthEl = wrapper.find(`[data-test-id="active-month"]`);
        expect(monthEl.text()).toEqual(formatter.format(today));
    });
});
