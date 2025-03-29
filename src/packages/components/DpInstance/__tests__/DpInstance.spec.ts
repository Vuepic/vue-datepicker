import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { DpInstance } from '@packages/components/DpInstance';

// Logic in this component is covered by other tests
describe('DpInstance', () => {
    it('Should render component', () => {
        const wrapper = mount(DpInstance);

        expect(wrapper.html()).toContain('<div>');
    });

    it('Should render component as custom HTML tag', () => {
        const wrapper = mount(DpInstance, { props: { as: 'section' } });

        expect(wrapper.html()).toContain('<section>');
    });
});
