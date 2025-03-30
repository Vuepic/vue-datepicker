import { describe, expect, it, vi, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { DpTrigger } from '@packages/components/DpTrigger';
import { ref } from 'vue';
import { DpRootKey } from '@packages/components/DpRoot';

const useRootContext = () => {
    const triggerRef = ref(null);
    const inputValue = ref('value-text');
    const openMenu = () => {
        return true;
    };

    const clearValue = () => {
        inputValue.value = '';
    };

    return {
        triggerRef,
        inputValue,
        openMenu,
        clearValue,
    };
};

const getContext = () => {
    return {
        provide: {
            [DpRootKey]: useRootContext(),
        },
    };
};

describe('DpTrigger', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('Should render component', () => {
        const wrapper = mount(DpTrigger, { global: getContext() });

        expect(wrapper.html()).toContain('<div>');
    });

    it('Should render component as custom HTML tag', () => {
        const wrapper = mount(DpTrigger, { global: getContext(), props: { as: 'section' } });

        expect(wrapper.html()).toContain('<section>');
    });

    it('Should fail to mount without root context', () => {
        expect(() => mount(DpTrigger)).toThrowError();
    });

    it('Should render value', () => {
        const wrapper = mount(DpTrigger, {
            global: getContext(),
            slots: {
                default: `
                    <template #default="{value}">
                        <button type="button" data-test-id="value">{{value}}</button>
                    </template>
                `,
            },
        });

        const valueEl = wrapper.find(`[data-test-id="value"]`);

        expect(valueEl.text()).toEqual('value-text');
    });

    it('Should trigger open menu function', async () => {
        const context = getContext();
        const spy = vi.spyOn(context.provide[DpRootKey], 'openMenu');

        const wrapper = mount(DpTrigger, {
            global: context,
            slots: {
                default: `
                    <template #default="{value}">
                        <button type="button" data-test-id="value">{{value}}</button>
                    </template>
                `,
            },
        });

        await wrapper.find(`[data-test-id="value"]`).trigger('click');
        const emits = wrapper.emitted();

        expect(emits).toHaveProperty('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Should update render value based on value change', async () => {
        const wrapper = mount(DpTrigger, {
            global: getContext(),
            slots: {
                default: `
                    <template #default="{value, clearValue}">
                        <button type="button" data-test-id="value" @click.stop="clearValue">{{value}}</button>
                    </template>
                `,
            },
        });
        await wrapper.find(`[data-test-id="value"]`).trigger('click');
        const valueEl = wrapper.find(`[data-test-id="value"]`);

        expect(valueEl.text()).toEqual('');
    });
});
