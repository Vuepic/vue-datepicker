import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { DPCalendarCellTrigger } from '@packages/components/Calendar';

describe('DPCalendarCellTrigger', () => {
    it('Should render component', () => {
        const wrapper = mount(DPCalendarCellTrigger);

        expect(wrapper.html()).toContain('button');
    });

    it('Should render component as custom HTML tag', () => {
        const wrapper = mount(DPCalendarCellTrigger, { props: { as: 'div' } });

        expect(wrapper.html()).toContain('<div>');
    });
});
