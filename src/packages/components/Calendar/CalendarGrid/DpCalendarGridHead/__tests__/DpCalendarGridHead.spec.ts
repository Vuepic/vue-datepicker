import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { DpCalendarGridHead } from '@packages/components/Calendar';

describe('DpCalendarGridHead', () => {
    it('Should render properly', () => {
        const wrapper = mount(DpCalendarGridHead);
        expect(wrapper.html()).toContain('<thead>');
    });

    it('Should render as custom HTML tag', () => {
        const wrapper = mount(DpCalendarGridHead, { props: { as: 'div' } });
        expect(wrapper.html()).toContain('<div>');
    });
});
