import { describe, it, expect } from 'vitest';
import { addQuarters, format, getYear, startOfQuarter, startOfYear } from 'date-fns';

import { openMenu, reOpenMenu } from '../../utils';

import type { VueWrapper } from '@vue/test-utils';

const validateActiveQuarters = async (dp: VueWrapper<any>, quarters: Date[], click = true) => {
    for (const quarter of quarters) {
        const btn = dp.find(`[data-test="${quarter}"]`);
        if (click) {
            await btn.trigger('click');
        }
        expect(btn.classes()).toContain('dp--qr-btn-active');
    }
};

describe('Quarter picker component', () => {
    it('Should select single quarter', async () => {
        const quarter = startOfQuarter(new Date());
        const dp = await openMenu({ quarterPicker: true });

        await dp.find(`[data-test="${quarter}"]`).trigger('click');
        await dp.find(`[data-test="select-button"]`).trigger('click');

        expect(dp.emitted()).toHaveProperty('update:model-value', [[quarter]]);
        dp.unmount();
    });

    it('Should select range quarter', async () => {
        const start = startOfQuarter(new Date());
        const end = addQuarters(start, 1);
        const dp = await openMenu({ quarterPicker: true, range: true });

        await dp.find(`[data-test="${start}"]`).trigger('click');
        await dp.find(`[data-test="${end}"]`).trigger('click');
        await dp.find(`[data-test="select-button"]`).trigger('click');

        expect(dp.emitted()).toHaveProperty('update:model-value', [[[start, end]]]);
        dp.unmount();
    });

    it('Should properly display multi calendars mode', async () => {
        const year = getYear(new Date());
        const dp = await openMenu({ quarterPicker: true, multiCalendars: true });

        const firstYearBtn = dp.find(`[data-test="year-mode-btn-0"]`);
        const secondYearBtn = dp.find(`[data-test="year-mode-btn-1"]`);

        expect(firstYearBtn.text()).toEqual(`${year}`);
        expect(secondYearBtn.text()).toEqual(`${year + 1}`);
        dp.unmount();
    });

    it('Should properly disable quarters', async () => {
        const quarter = startOfQuarter(new Date());
        const dp = await openMenu({ quarterPicker: true, disabledDates: [quarter] });

        const btn = dp.find(`[data-test="${quarter}"]`);

        expect(btn.classes()).toContain('dp--qr-btn-disabled');
        dp.unmount();
    });

    it('Should select multiple quarters', async () => {
        const start = startOfQuarter(startOfYear(new Date()));

        const quarters = [start, addQuarters(start, 1), addQuarters(start, 2)];

        const dp = await openMenu({ quarterPicker: true, multiDates: true });

        await validateActiveQuarters(dp, quarters);

        await dp.find(`[data-test="select-button"]`).trigger('click');

        expect(dp.emitted()).toHaveProperty('update:model-value', [[quarters]]);

        dp.unmount();
    });

    it('Should properly display data from v-model', async () => {
        const start = startOfQuarter(startOfYear(new Date()));

        const range = [start, addQuarters(start, 1)];
        const multi = [start, addQuarters(start, 1), addQuarters(start, 2)];

        const dp = await openMenu({ quarterPicker: true, modelValue: start });
        await validateActiveQuarters(dp, [start], false);

        await reOpenMenu(dp, { range: true, modelValue: range });
        await validateActiveQuarters(dp, range, false);

        await reOpenMenu(dp, { range: false, multiDates: true, modelValue: multi });
        await validateActiveQuarters(dp, multi, false);
    });

    it('Should properly format input value', async () => {
        const start = startOfQuarter(new Date());
        const dp = await openMenu({ quarterPicker: true, modelValue: start });

        const value = dp.find('input').element.value;

        expect(value).toEqual(format(start, 'QQQ/yyyy'));
    });
});
