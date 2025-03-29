import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { DpCalendarGridHeadRow } from '@packages/components/Calendar';
import { DpRootKey } from '@packages/components/DpRoot';

const props = { locale: 'en-US', weekStart: 1 };

const getMockContext = (overrideProps?: Partial<typeof props>) => {
    return {
        provide: {
            [DpRootKey]: {
                props: { ...props, ...(overrideProps ?? {}) },
            },
        },
    };
};

const getRowElements = (overrideProps?: Partial<typeof props>, renderKey = 'day.name') => {
    const wrapper = mount(DpCalendarGridHeadRow, {
        global: getMockContext(overrideProps),
        slots: {
            default: `
                    <template #default="{ days }">
                        <td v-for="day in days" :key="day.name">{{${renderKey}}}</td>
                   </template>
                `,
        },
    });

    return wrapper.findAll('td');
};

describe('DpCalendarGridHeadRow', () => {
    it('Should render properly', () => {
        const wrapper = mount(DpCalendarGridHeadRow, { global: getMockContext() });
        expect(wrapper.html()).toContain('<tr>');
    });

    it('Should fail to mount without context', () => {
        expect(() => mount(DpCalendarGridHeadRow)).toThrowError();
    });

    it('Should render as custom HTML tag', () => {
        const wrapper = mount(DpCalendarGridHeadRow, {
            props: { as: 'div' },
            global: getMockContext(),
        });
        expect(wrapper.html()).toContain('<div>');
    });

    it('Should expose week days with Monday first', () => {
        const cells = getRowElements();

        expect(cells).toHaveLength(7);
        expect(cells[0].text()).toEqual('Monday');
    });

    it('Should expose week days with Sunday first', () => {
        const cells = getRowElements({ weekStart: 0 });

        expect(cells).toHaveLength(7);
        expect(cells[0].text()).toEqual('Sunday');
    });

    it('Should localize week days', () => {
        const cells = getRowElements({ locale: 'ja-JP' });
        expect(cells).toHaveLength(7);
        expect(cells[0].text()).toEqual('月曜日');
    });

    it('Should display proper short name for Arabic locale', () => {
        const cells = getRowElements({ locale: 'ar' }, 'day.label');
        expect(cells[0].text()).toEqual('اثن');
    });
});
