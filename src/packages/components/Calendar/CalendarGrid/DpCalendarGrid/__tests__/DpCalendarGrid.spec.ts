import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { DpCalendarGrid } from '@packages/components/Calendar';

describe('DpCalendarGrid', () => {
    it('Should render component', () => {
        const wrapper = mount(DpCalendarGrid);

        expect(wrapper.html()).toContain('<table>');
    });

    it('Should render component as custom HTML tag', () => {
        const wrapper = mount(DpCalendarGrid, { props: { as: 'div' } });

        expect(wrapper.html()).toContain('<div>');
    });
});
