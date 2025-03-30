import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { DpRoot } from '@packages/components/DpRoot';

describe('DpRoot', () => {
    it('Should render component', () => {
        const wrapper = mount(DpRoot);

        expect(wrapper.html()).toContain('<div>');
    });

    it('Should render component as custom HTML tag', () => {
        const wrapper = mount(DpRoot, { props: { as: 'section' } });

        expect(wrapper.html()).toContain('<section>');
    });
});
