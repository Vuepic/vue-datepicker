import { describe, expect, it } from 'vitest';
import { addMonths, subMonths } from 'date-fns';
import { getMonthToggleBtn, getMonthToggleText, openMenu, selectDate } from '@/__tests__/tests-utils.ts';

describe('Test Suite 1', () => {
    describe('multi-calendars', () => {
        it('Should render 2 calendars', async () => {
            const dp = await openMenu({ multiCalendars: true });
            const today = new Date();

            const monthToggleFirst = getMonthToggleBtn(dp);
            const monthToggleSecond = getMonthToggleBtn(dp, 1);
            expect(monthToggleFirst.text()).toEqual(getMonthToggleText(today));
            expect(monthToggleSecond.text()).toEqual(getMonthToggleText(addMonths(today, 1)));
        });

        it('Should update both calendars when month is changed', async () => {
            const dp = await openMenu({ multiCalendars: true });
            const today = new Date();

            await dp.find(`[data-dp-element="action-next"]`).trigger('click');

            expect(getMonthToggleBtn(dp).text()).toEqual(getMonthToggleText(addMonths(today, 1)));
            expect(getMonthToggleBtn(dp, 1).text()).toEqual(getMonthToggleText(addMonths(today, 2)));
        });

        it('Should set proper months and years when model-value is provided', async () => {
            const date = subMonths(new Date(), 3);
            const dp = await openMenu({
                multiCalendars: true,
                modelValue: date,
            });

            expect(getMonthToggleBtn(dp).text()).toEqual(getMonthToggleText(date));
        });

        it("Should render 5 calendars when 'count' property is provided", async () => {
            const dp = await openMenu({ multiCalendars: { count: 5 } });
            expect(getMonthToggleBtn(dp, 4).text()).toEqual(getMonthToggleText(addMonths(new Date(), 4)));
        });

        it('Should render calendars in solo mode', async () => {
            const dp = await openMenu({ multiCalendars: { solo: true } });
            const navs = dp.findAll(`[data-dp-element="action-next"]`);
            expect(navs).toHaveLength(2);
        });

        it('Should update solo calendars independently', async () => {
            const dp = await openMenu({ multiCalendars: { solo: true } });
            await dp.find(`[data-dp-element="action-next"]`).trigger('click');

            expect(getMonthToggleBtn(dp).text()).toEqual(getMonthToggleText(addMonths(new Date(), 1)));
            expect(getMonthToggleBtn(dp, 1).text()).toEqual(getMonthToggleText(addMonths(new Date(), 1)));
        });

        it('Should move the selection to the first calendar when static is disabled', async () => {
            const nextMonth = addMonths(new Date(), 1);
            const dp = await openMenu({ multiCalendars: { static: false } });
            await selectDate(dp, nextMonth);
            expect(getMonthToggleBtn(dp).text()).toEqual(getMonthToggleText(nextMonth));
        });
    });
});
