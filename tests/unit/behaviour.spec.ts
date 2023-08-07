import { describe, expect, it } from 'vitest';
import { set } from 'date-fns';

import { flushPromises, mount } from '@vue/test-utils';

import VueDatePicker from '@/VueDatePicker.vue';

describe('It should validate various picker scenarios', () => {
    it('Should dynamically disable times', async () => {
        const modelValue = set(new Date(), { hours: 12, minutes: 0, seconds: 0, milliseconds: 0 });
        const disabledTimes = [
            { hours: 14, minutes: 15 },
            { hours: 14, minutes: 20 },
            { hours: 15, minutes: '*' },
        ];
        const dp = mount(VueDatePicker, { props: { modelValue, disabledTimes } });

        dp.vm.openMenu();
        await flushPromises();

        await dp.vm.$nextTick();

        const setHours = async (val: number) => {
            await dp.find(`[data-test="open-time-picker-btn"]`).trigger('click');

            await dp.find(`[data-test="hours-toggle-overlay-btn"]`).trigger('click');
            await dp.find(`[data-test="${val}"]`).trigger('click');
        };

        await setHours(14);

        await dp.find(`[data-test="minutes-toggle-overlay-btn"]`).trigger('click');

        await dp.vm.$nextTick();
        const el = dp.find(`[data-test="15"]`);

        expect(el.attributes()['aria-disabled']).toEqual('true');

        for (let i = 0; i < 20; i++) {
            await dp.find(`[data-test="minutes-time-inc-btn"]`).trigger('click');
        }

        const minutesOverlayBtn = dp.find(`[data-test="minutes-toggle-overlay-btn"]`);
        expect(minutesOverlayBtn.classes()).toContain('dp--time-invalid');

        await setHours(15);
        const hoursOverlayBtn = dp.find(`[data-test="hours-toggle-overlay-btn"]`);
        expect(hoursOverlayBtn.classes()).toContain('dp--time-invalid');
    });
});
