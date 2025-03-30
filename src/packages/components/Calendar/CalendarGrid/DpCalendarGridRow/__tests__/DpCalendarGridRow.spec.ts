import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { DpCalendarGridRow } from '@packages/components/Calendar';

describe('DpCalendarGridRow', () => {
    it('Should render component', () => {
        const wrapper = mount(DpCalendarGridRow);

        expect(wrapper.html()).toContain('<tr>');
    });

    it('Should render component as custom HTML tag', () => {
        const wrapper = mount(DpCalendarGridRow, { props: { as: 'div' } });

        expect(wrapper.html()).toContain('<div>');
    });
});
