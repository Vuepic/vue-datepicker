import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { DpCalendarCell } from '@packages/components/Calendar';
import { addDays } from 'date-fns';

const mountComponent = (day: Date) => {
    return mount(DpCalendarCell, {
        props: { day },
        slots: {
            default: `
                <template #default="{isToday}">
                    <span v-if="isToday" data-test-id="today-marker"></span>
                </template>
           `,
        },
    });
};

describe('DpCalendarCell', () => {
    it('Should render component', () => {
        const wrapper = mount(DpCalendarCell, { props: { day: new Date() } });

        expect(wrapper.html()).toContain('td');
    });

    it('Should render component as custom HTML tag', () => {
        const wrapper = mount(DpCalendarCell, { props: { as: 'div', day: new Date() } });

        expect(wrapper.html()).toContain('div');
    });

    it('Should properly mark today', () => {
        const wrapper = mountComponent(new Date());

        const todayMark = wrapper.find(`[data-test-id="today-marker"]`);
        expect(todayMark.html()).toBeTruthy();

        const wrapper2 = mountComponent(addDays(new Date(), 1));
        const todayMark2 = wrapper2.find(`[data-test-id="today-marker"]`);
        expect(() => todayMark2.html()).toThrowError();
    });
});
