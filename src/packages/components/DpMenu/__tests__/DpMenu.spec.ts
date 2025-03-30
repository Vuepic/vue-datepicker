import { describe, expect, it } from 'vitest';
import { nextTick, ref } from 'vue';
import { mount } from '@vue/test-utils';
import { DpMenu } from '@packages/components/DpMenu';
import { EventBus } from '@packages/utils/EventBus.ts';
import { DpRootKey } from '@packages/components/DpRoot';

const eventBus = new EventBus();

const useRootContext = () => {
    const isMenuOpen = ref(false);
    const triggerRef = ref();
    const menuRef = ref();

    return {
        triggerRef,
        menuRef,
        isMenuOpen,
        eventBus,
    };
};

const getContext = () => {
    return {
        provide: {
            [DpRootKey]: useRootContext(),
        },
    };
};

describe('DpMenu', () => {
    it('Should render component', () => {
        const wrapper = mount(DpMenu, { global: getContext() });

        expect(wrapper.html()).toContain('div');
    });

    it('Should render component as custom HTML tag', () => {
        const wrapper = mount(DpMenu, { global: getContext(), props: { as: 'section' } });

        expect(wrapper.html()).toContain('section');
    });

    it('Should fail to mount without root context', () => {
        expect(() => mount(DpMenu)).toThrowError();
    });

    it('Should open and close menu', async () => {
        const wrapper = mount(DpMenu, {
            global: getContext(),
            slots: { default: `<div data-test-id="menu-item"></div>` },
        });

        eventBus.publish('openMenu');
        await nextTick();

        expect(wrapper.element.style.display).toEqual('block');

        eventBus.publish('closeMenu');
        await nextTick();

        expect(wrapper.element.style.display).toEqual('none');
    });
});
