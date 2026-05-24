import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { addMonths, subMonths } from 'date-fns';
import {
  clearInput,
  closeMenu,
  getMonthToggleBtn,
  getMonthToggleText,
  openMenu,
  selectDate,
} from '@/__tests__/tests-utils.ts';
import { nextTick } from 'vue';

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

  describe('centered option', () => {
    it('Should open menu when centered is enabled', async () => {
      const dp = await openMenu({ centered: true });
      expect(dp.find('.dp--menu').exists()).toBe(true);
    });
  });

  describe('range toggle', () => {
    const frozenSystemDate = new Date(2026, 2, 15, 12, 30, 30);
    beforeEach(() => {
      vi.setSystemTime(frozenSystemDate);
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('Should allow selecting single date after disabling range while menu is closed.', async () => {
      const startDate = new Date(2026, 2, 1);
      const endDate = new Date(2026, 2, 15);
      const dp = await openMenu({ range: true, modelValue: [startDate, endDate] });

      dp.vm.closeMenu();
      await nextTick();
      clearInput(dp);
      await nextTick();

      await dp.setProps({ range: false, modelValue: null });

      dp.vm.openMenu();
      await nextTick();

      const dateToSelect = new Date(2026, 2, 18);
      const expectedModelDate = new Date(
        dateToSelect.getFullYear(),
        dateToSelect.getMonth(),
        dateToSelect.getDate(),
        frozenSystemDate.getHours(),
        frozenSystemDate.getMinutes(),
        0,
      );
      await selectDate(dp, dateToSelect);
      await nextTick();

      expect(dp.emitted('date-click')![0]![0]).toEqual(expectedModelDate);
    });
  });

  describe('DOM', () => {
    it('Should render menu wrap only while menu is open', async () => {
      const dpOpenedMenu = await openMenu({});
      expect(dpOpenedMenu.vm.dpWrapMenuRef()?.value).toBeTruthy();

      const dpClosedMenu = await closeMenu({});
      expect(dpClosedMenu.vm.dpWrapMenuRef()?.value).toBeNull();
    });
  });
});
