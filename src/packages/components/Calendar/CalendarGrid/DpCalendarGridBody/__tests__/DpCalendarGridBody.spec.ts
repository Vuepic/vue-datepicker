import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { DpCalendarGridBody } from '@packages/components/Calendar';
import { DpCalendarKey } from '@packages/components/Calendar/DpCalendar';
import {
    endOfMonth,
    endOfWeek,
    getDate,
    getMonth,
    getWeeksInMonth,
    getYear,
    set,
    startOfMonth,
    startOfWeek,
} from 'date-fns';
import type { DpCalendarGridBodyProps } from '@packages/components/Calendar/CalendarGrid/DpCalendarGridBody';

const props = {
    month: { value: getMonth(new Date()) },
    year: { value: getYear(new Date()) },
    weekStart: { value: 1 },
};

const getMonthYear = (date: Date) => {
    return {
        month: { value: getMonth(date) },
        year: { value: getYear(date) },
    };
};

const getContext = (overrideProps?: Partial<typeof props>) => {
    return {
        provide: {
            [DpCalendarKey]: {
                ...props,
                ...(overrideProps ?? {}),
            },
        },
    };
};

const mountComponent = (overrideProps?: Partial<typeof props>, componentProps?: Partial<DpCalendarGridBodyProps>) => {
    return mount(DpCalendarGridBody, {
        global: getContext(overrideProps),
        props: { as: 'div', ...(componentProps ?? {}) },
        slots: {
            default: `
                <template #default="{week}">
                    <div v-for="(week, i) in weeks" :key="i" :data-test-id="i + '-week'" data-week="true">
                        <div v-for="(day, j) in week.days" :key="i" :data-test-id="j + '-day' + '-week-' + i">
                            <span :data-current="day.current"></span>
                            {{day.label}}
                        </div>
                    </div>
                </template>`,
        },
    });
};

describe('DpCalendarGridBody', () => {
    it('Should render component', () => {
        const wrapper = mount(DpCalendarGridBody, { global: getContext() });

        expect(wrapper.html()).toContain('<tbody>');
    });

    it('Should render component as custom HTML tag', () => {
        const wrapper = mount(DpCalendarGridBody, { global: getContext(), props: { as: 'div' } });

        expect(wrapper.html()).toContain('<div>');
    });

    it('Should fail to mount without calendar context', () => {
        expect(() => mount(DpCalendarGridBody)).toThrowError();
    });

    it('Should provide weeks', () => {
        const wrapper = mountComponent();
        const weeksInMonth = getWeeksInMonth(new Date(), { weekStartsOn: 1 });
        const weeks = wrapper.findAll('[data-week="true"]');
        expect(weeks).toHaveLength(weeksInMonth);
    });

    it('Should start a month with a valid date', () => {
        const wrapper = mountComponent();
        const first = startOfWeek(startOfMonth(new Date()), { weekStartsOn: 1 });

        const firstEl = wrapper.find(`[data-test-id="${0 + '-day' + '-week-' + 0}"]`);

        expect(firstEl.text()).toEqual(`${getDate(first)}`);
    });

    it('Should end a month with a valid date', () => {
        const today = new Date();
        const wrapper = mountComponent();
        const last = endOfWeek(endOfMonth(today), { weekStartsOn: 1 });
        const weeksInMonth = getWeeksInMonth(today, { weekStartsOn: 1 });

        const lastEl = wrapper.find(`[data-test-id="${6 + '-day' + '-week-' + (weeksInMonth - 1)}"]`);

        expect(lastEl.text()).toEqual(`${getDate(last)}`);
    });

    it('Should only display weeks that are withing the given month', () => {});

    it('Should display six weeks by appending a week', () => {
        const globalProps = getMonthYear(set(new Date(), { month: 1, year: 2025 }));
        const wrapper = mountComponent(globalProps, { sixWeeks: true });

        const weeks = wrapper.findAll('[data-week="true"]');

        const lastWeek = wrapper.find('[data-test-id="5-week"]');
        const offsetDays = lastWeek.findAll('[data-current="false"]');

        expect(weeks).toHaveLength(6);
        expect(offsetDays).toHaveLength(7);
    });

    it('Should display six weeks by prepending a week', () => {
        const globalProps = getMonthYear(set(new Date(), { month: 1, year: 2025 }));
        const wrapper = mountComponent(globalProps, { sixWeeks: 'prepend' });

        const weeks = wrapper.findAll('[data-week="true"]');

        const firstWeek = wrapper.find('[data-test-id="0-week"]');
        const offsetDays = firstWeek.findAll('[data-current="false"]');

        expect(weeks).toHaveLength(6);
        expect(offsetDays).toHaveLength(7);
    });

    it('Should display six weeks by adding a leading week if month starts without offset days', () => {
        let globalProps = getMonthYear(set(new Date(), { month: 8, year: 2025 }));
        let wrapper = mountComponent(globalProps, { sixWeeks: 'center' });

        const weeks = wrapper.findAll('[data-week="true"]');

        const firstWeek = wrapper.find('[data-test-id="0-week"]');
        const offsetDays = firstWeek.findAll('[data-current="false"]');

        expect(weeks).toHaveLength(6);
        expect(offsetDays).toHaveLength(7);

        globalProps = getMonthYear(set(new Date(), { month: 3, year: 2025 }));
        wrapper = mountComponent(globalProps, { sixWeeks: 'center' });

        const lastWeek = wrapper.find('[data-test-id="5-week"]');
        const lastOffsetDays = lastWeek.findAll('[data-current="false"]');

        expect(weeks).toHaveLength(6);
        expect(lastOffsetDays).toHaveLength(7);
    });

    it('Should display six weeks by appending or prepending based on which has the smaller offset in the partial week', () => {
        let globalProps = getMonthYear(set(new Date(), { month: 1, year: 2025 }));
        let wrapper = mountComponent(globalProps, { sixWeeks: 'fair' });

        const weeks = wrapper.findAll('[data-week="true"]');

        const lastWeek = wrapper.find('[data-test-id="5-week"]');
        const offsetDaysLast = lastWeek.findAll('[data-current="false"]');

        expect(weeks).toHaveLength(6);
        expect(offsetDaysLast).toHaveLength(7);

        wrapper.unmount();

        globalProps = getMonthYear(set(new Date(), { month: 3, year: 2025 }));
        wrapper = mountComponent(globalProps, { sixWeeks: 'fair' });

        const firstWeek = wrapper.find('[data-test-id="0-week"]');

        const offsetDaysFirst = firstWeek.findAll('[data-current="false"]');

        expect(weeks).toHaveLength(6);
        expect(offsetDaysFirst).toHaveLength(7);
    });
});
