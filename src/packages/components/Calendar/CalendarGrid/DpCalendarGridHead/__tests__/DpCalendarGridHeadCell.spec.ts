import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { DpCalendarGridHeadCell } from '@packages/components/Calendar';

describe('DpCalendarGridHeadCell', () => {
    it('Should render properly', () => {
        const wrapper = mount(DpCalendarGridHeadCell);
        expect(wrapper.html()).toContain('<th>');
    });

    it('Should render as custom HTML tag', () => {
        const wrapper = mount(DpCalendarGridHeadCell, { props: { as: 'div' } });
        expect(wrapper.html()).toContain('<div>');
    });
});
