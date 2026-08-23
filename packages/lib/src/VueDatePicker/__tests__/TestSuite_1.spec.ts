import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { addDays, addMonths, format, subMonths } from 'date-fns';
import {
  clearInput,
  closeMenu,
  getMonthToggleBtn,
  getMonthToggleText,
  openMenu,
  selectDate,
} from '@/__tests__/tests-utils.ts';
import { nextTick } from 'vue';
import { enGB } from 'date-fns/locale';
import { WeekStart } from '@/constants';
import type { MonthModel } from '@/types';

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
      await clearInput(dp);
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

  describe('Localization', () => {
    describe('Week start day', () => {
      it('Should set Sunday as first day of the week', async () => {
        const dp = await openMenu({});
        const headers = dp.findAll('[data-test-id="calendar-header"]');

        expect(headers[0].text()).toEqual('Su');
      });

      it('Should set Monday as first day of the week', async () => {
        const dp = await openMenu({ locale: enGB });
        const headers = dp.findAll('[data-test-id="calendar-header"]');

        expect(headers[0].text()).toEqual('Mo');
      });

      it('Should use provided week start day', async () => {
        const dp = await openMenu({ weekStart: WeekStart.Monday });
        const headers = dp.findAll('[data-test-id="calendar-header"]');

        expect(headers[0].text()).toEqual('Mo');
      });
    });
  });

  describe('Multi-select month & year pickers', () => {
    const frozenSystemDate = new Date(2026, 0, 15, 12, 0, 0);

    beforeEach(() => {
      vi.setSystemTime(frozenSystemDate);
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    describe('Month picker', () => {
      it('Should select multiple months when auto-apply is enabled', async () => {
        const dp = await openMenu({ monthPicker: true, multiDates: true, autoApply: true });

        await dp.find('[data-test-id="Jan"]').trigger('click');
        await dp.find('[data-test-id="Mar"]').trigger('click');

        const emitted = dp.emitted('update:model-value')!;
        const lastValue = emitted[emitted.length - 1]![0] as MonthModel[];

        expect(lastValue).toHaveLength(2);
        expect(lastValue[0]).toEqual({ month: 0, year: 2026 });
        expect(lastValue[1]).toEqual({ month: 2, year: 2026 });
      });

      it('Should deselect a month when it is clicked again', async () => {
        const dp = await openMenu({ monthPicker: true, multiDates: true, autoApply: true });

        await dp.find('[data-test-id="Jan"]').trigger('click');
        await dp.find('[data-test-id="Mar"]').trigger('click');
        await dp.find('[data-test-id="Jan"]').trigger('click');

        const emitted = dp.emitted('update:model-value')!;
        const lastValue = emitted[emitted.length - 1]![0] as MonthModel[];

        expect(lastValue).toHaveLength(1);
        expect(lastValue[0]).toEqual({ month: 2, year: 2026 });
      });

      it('Should respect the multi-dates limit', async () => {
        const dp = await openMenu({ monthPicker: true, multiDates: { limit: 2 }, autoApply: true });

        await dp.find('[data-test-id="Jan"]').trigger('click');
        await dp.find('[data-test-id="Feb"]').trigger('click');
        await dp.find('[data-test-id="Mar"]').trigger('click');

        const emitted = dp.emitted('update:model-value')!;
        const lastValue = emitted[emitted.length - 1]![0] as MonthModel[];

        expect(lastValue).toHaveLength(2);
        expect(lastValue.map((v) => v.month)).toEqual([0, 1]);
      });

      it('Should mark previously selected months as active', async () => {
        const dp = await openMenu({
          monthPicker: true,
          multiDates: true,
          modelValue: [
            { month: 0, year: 2026 },
            { month: 2, year: 2026 },
          ],
        });

        expect(dp.find('[data-test-id="Jan"]').attributes('aria-selected')).toBe('true');
        expect(dp.find('[data-test-id="Mar"]').attributes('aria-selected')).toBe('true');
        expect(dp.find('[data-test-id="Feb"]').attributes('aria-selected')).toBeUndefined();
      });

      it('Should not emit a value until the selection is confirmed (default autoApply)', async () => {
        const dp = await openMenu({ monthPicker: true, multiDates: true });

        await dp.find('[data-test-id="Jan"]').trigger('click');
        await dp.find('[data-test-id="Mar"]').trigger('click');

        expect(dp.emitted('update:model-value')).toBeUndefined();

        await dp.find('[data-test-id="select-button"]').trigger('click');

        const emitted = dp.emitted('update:model-value')!;
        const lastValue = emitted[emitted.length - 1]![0] as MonthModel[];
        expect(lastValue).toHaveLength(2);
        expect(lastValue.map((v) => v.month)).toEqual([0, 2]);
      });
    });

    describe('Year picker', () => {
      it('Should select multiple years when auto-apply is enabled', async () => {
        const dp = await openMenu({ yearPicker: true, multiDates: true, autoApply: true });

        await dp.find('[data-test-id="2025"]').trigger('click');
        await dp.find('[data-test-id="2026"]').trigger('click');

        const emitted = dp.emitted('update:model-value')!;
        const lastValue = emitted[emitted.length - 1]![0] as number[];

        expect(lastValue).toEqual([2025, 2026]);
      });

      it('Should deselect a year when it is clicked again', async () => {
        const dp = await openMenu({ yearPicker: true, multiDates: true, autoApply: true });

        await dp.find('[data-test-id="2025"]').trigger('click');
        await dp.find('[data-test-id="2026"]').trigger('click');
        await dp.find('[data-test-id="2025"]').trigger('click');

        const emitted = dp.emitted('update:model-value')!;
        const lastValue = emitted[emitted.length - 1]![0] as number[];

        expect(lastValue).toEqual([2026]);
      });

      it('Should mark previously selected years as active', async () => {
        const dp = await openMenu({
          yearPicker: true,
          multiDates: true,
          modelValue: [2025, 2026],
        });

        expect(dp.find('[data-test-id="2025"]').attributes('aria-selected')).toBe('true');
        expect(dp.find('[data-test-id="2026"]').attributes('aria-selected')).toBe('true');
        expect(dp.find('[data-test-id="2027"]').attributes('aria-selected')).toBeUndefined();
      });

      it('Should not emit a value until the selection is confirmed (default autoApply)', async () => {
        const dp = await openMenu({ yearPicker: true, multiDates: true });

        await dp.find('[data-test-id="2025"]').trigger('click');
        await dp.find('[data-test-id="2026"]').trigger('click');

        expect(dp.emitted('update:model-value')).toBeUndefined();

        await dp.find('[data-test-id="select-button"]').trigger('click');

        const emitted = dp.emitted('update:model-value')!;
        const lastValue = emitted[emitted.length - 1]![0] as number[];
        expect(lastValue).toEqual([2025, 2026]);
      });
    });
  });

  describe('range picker - requireEndTime', () => {
    it('Should hide the end-time input for a single-day modelAuto selection by default', async () => {
      const dp = await openMenu({
        range: true,
        modelAuto: true,
        timeConfig: { timePickerInline: true },
      });

      await selectDate(dp, new Date());

      const timeInputs = dp.findAll('.dp--time-input');
      expect(timeInputs).toHaveLength(2);
      expect(timeInputs[0]!.isVisible()).toBe(true);
      expect(timeInputs[1]!.isVisible()).toBe(false);
    });

    it('Should show the end-time input for a single-day modelAuto selection when requireEndTime is true', async () => {
      const dp = await openMenu({
        range: { requireEndTime: true },
        modelAuto: true,
        timeConfig: { timePickerInline: true },
      });

      await selectDate(dp, new Date());

      const timeInputs = dp.findAll('.dp--time-input');
      expect(timeInputs).toHaveLength(2);
      expect(timeInputs[0]!.isVisible()).toBe(true);
      expect(timeInputs[1]!.isVisible()).toBe(true);
    });

    it('Should keep showing both time inputs once a full range is selected, regardless of requireEndTime', async () => {
      const dp = await openMenu({
        range: true,
        modelAuto: true,
        timeConfig: { timePickerInline: true },
      });

      const today = new Date();
      await selectDate(dp, today);
      await selectDate(dp, today);

      const timeInputs = dp.findAll('.dp--time-input');
      expect(timeInputs).toHaveLength(2);
      expect(timeInputs[0]!.isVisible()).toBe(true);
      expect(timeInputs[1]!.isVisible()).toBe(true);
    });

    it('Should default requireEndTime to false when range is passed as a plain boolean', async () => {
      const dp = await openMenu({
        range: true,
        modelAuto: true,
        timeConfig: { timePickerInline: true },
      });

      await selectDate(dp, new Date());

      expect(dp.findAll('.dp--time-input')[1]!.isVisible()).toBe(false);
    });

    it('Should seed a real, independent end date on a single-day click so the end-time input persists its own value', async () => {
      const dp = await openMenu({
        range: { requireEndTime: true },
        modelAuto: true,
        timeConfig: { timePickerInline: true },
      });

      const today = new Date();
      await selectDate(dp, today);
      await dp.find('[data-test-id="minutes-time-inc-btn-1"]').trigger('click');
      await dp.find('[data-test-id="select-button"]').trigger('click');

      const emitted = dp.emitted('update:model-value')!;
      const lastValue = emitted[emitted.length - 1]![0] as Date[];

      expect(lastValue).toHaveLength(2);
      expect(lastValue[0]).toBeInstanceOf(Date);
      expect(lastValue[1]).toBeInstanceOf(Date);

      // Single-day event: same calendar day for start and end.
      expect(lastValue[1].getDate()).toBe(lastValue[0].getDate());
      expect(lastValue[1].getMonth()).toBe(lastValue[0].getMonth());
      expect(lastValue[1].getFullYear()).toBe(lastValue[0].getFullYear());
      expect(lastValue[1].getMinutes()).not.toBe(lastValue[0].getMinutes());
    });

    it('Should keep the start and end times independent after closing and reopening the menu', async () => {
      const today = new Date();
      const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0, 0);
      const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 45, 0);

      const dp = await openMenu({
        range: { requireEndTime: true },
        modelAuto: true,
        timeConfig: { timePickerInline: true },
        modelValue: [startDate, endDate],
      });

      const timeInputs = dp.findAll('.dp--time-input');
      expect(timeInputs).toHaveLength(2);
      expect(timeInputs[0]!.isVisible()).toBe(true);
      expect(timeInputs[1]!.isVisible()).toBe(true);

      const startMinutesText = dp.find('[data-test-id="minutes-toggle-overlay-btn-0"]').text();
      const endMinutesText = dp.find('[data-test-id="minutes-toggle-overlay-btn-1"]').text();

      expect(startMinutesText).not.toBe(endMinutesText);
      expect(endMinutesText).toContain('45');
    });

    it('Should let a second click on a different day extend an auto-seeded single-day range, not restart it', async () => {
      const dp = await openMenu({
        range: { requireEndTime: true },
        modelAuto: true,
        timeConfig: { timePickerInline: true },
      });

      const today = new Date();
      const tomorrow = addDays(today, 1);

      await selectDate(dp, today);
      await selectDate(dp, tomorrow);

      await dp.find('[data-test-id="select-button"]').trigger('click');

      const emitted = dp.emitted('update:model-value')!;
      const lastValue = emitted[emitted.length - 1]![0] as Date[];

      expect(lastValue).toHaveLength(2);
      expect(format(lastValue[0]!, 'yyyy-MM-dd')).toBe(format(today, 'yyyy-MM-dd'));
      expect(format(lastValue[1]!, 'yyyy-MM-dd')).toBe(format(tomorrow, 'yyyy-MM-dd'));
    });

    it('Should let a second click on an EARLIER day extend an auto-seeded single-day range correctly', async () => {
      const dp = await openMenu({
        range: { requireEndTime: true },
        modelAuto: true,
        timeConfig: { timePickerInline: true },
      });

      const today = new Date();
      const threeDaysAgo = addDays(today, -3);

      await selectDate(dp, today);
      await selectDate(dp, threeDaysAgo);

      await dp.find('[data-test-id="select-button"]').trigger('click');

      const emitted = dp.emitted('update:model-value')!;
      const lastValue = emitted[emitted.length - 1]![0] as Date[];

      expect(lastValue).toHaveLength(2);
      expect(format(lastValue[0]!, 'yyyy-MM-dd')).toBe(format(threeDaysAgo, 'yyyy-MM-dd'));
      expect(format(lastValue[1]!, 'yyyy-MM-dd')).toBe(format(today, 'yyyy-MM-dd'));
    });

    it('Should start a fresh auto-seeded range after a genuine 2-day range was already completed', async () => {
      const dp = await openMenu({
        range: { requireEndTime: true },
        modelAuto: true,
        timeConfig: { timePickerInline: true },
      });

      const today = new Date();
      const tomorrow = addDays(today, 1);
      const inThreeDays = addDays(today, 3);

      await selectDate(dp, today);
      await selectDate(dp, tomorrow);
      await selectDate(dp, inThreeDays);

      const timeInputs = dp.findAll('.dp--time-input');
      expect(timeInputs[0]!.isVisible()).toBe(true);
      expect(timeInputs[1]!.isVisible()).toBe(true);

      await dp.find('[data-test-id="select-button"]').trigger('click');

      const emitted = dp.emitted('update:model-value')!;
      const lastValue = emitted[emitted.length - 1]![0] as Date[];

      expect(lastValue).toHaveLength(2);
      expect(format(lastValue[0]!, 'yyyy-MM-dd')).toBe(format(inThreeDays, 'yyyy-MM-dd'));
      expect(format(lastValue[1]!, 'yyyy-MM-dd')).toBe(format(inThreeDays, 'yyyy-MM-dd'));
    });
  });

  describe('range picker - multi-day selection', () => {
    it('Should select a plain multi-day range from two distinct clicks', async () => {
      const dp = await openMenu({ range: true });

      const today = new Date();
      const inFiveDays = addDays(today, 5);

      await selectDate(dp, today);
      await selectDate(dp, inFiveDays);

      await dp.find('[data-test-id="select-button"]').trigger('click');

      const emitted = dp.emitted('update:model-value')!;
      const lastValue = emitted[emitted.length - 1]![0] as Date[];

      expect(lastValue).toHaveLength(2);
      expect(format(lastValue[0]!, 'yyyy-MM-dd')).toBe(format(today, 'yyyy-MM-dd'));
      expect(format(lastValue[1]!, 'yyyy-MM-dd')).toBe(format(inFiveDays, 'yyyy-MM-dd'));
    });

    it('Should let both start and end times be edited independently on a real multi-day requireEndTime range', async () => {
      const dp = await openMenu({
        range: { requireEndTime: true },
        modelAuto: true,
        timeConfig: { timePickerInline: true },
      });

      const today = new Date();
      const inTwoDays = addDays(today, 2);

      await selectDate(dp, today);
      await selectDate(dp, inTwoDays);

      // Bump start hours and end minutes independently.
      await dp.find('[data-test-id="hours-time-inc-btn-0"]').trigger('click');
      await dp.find('[data-test-id="minutes-time-inc-btn-1"]').trigger('click');
      await dp.find('[data-test-id="select-button"]').trigger('click');

      const emitted = dp.emitted('update:model-value')!;
      const lastValue = emitted[emitted.length - 1]![0] as Date[];

      expect(lastValue).toHaveLength(2);
      expect(format(lastValue[0]!, 'yyyy-MM-dd')).toBe(format(today, 'yyyy-MM-dd'));
      expect(format(lastValue[1]!, 'yyyy-MM-dd')).toBe(format(inTwoDays, 'yyyy-MM-dd'));
      expect(lastValue[1]!.getMinutes()).not.toBe(lastValue[0]!.getMinutes());
    });
  });

  describe('range picker - requireEndTime side-effect safety', () => {
    it('Should NOT auto-seed an end date when requireEndTime is set but modelAuto is off', async () => {
      const dp = await openMenu({
        range: { requireEndTime: true },
        timeConfig: { timePickerInline: true },
      });

      const today = new Date();
      await selectDate(dp, today);

      const timeInputs = dp.findAll('.dp--time-input');
      expect(timeInputs).toHaveLength(2);

      await dp.find('[data-test-id="select-button"]').trigger('click');
      const emitted = dp.emitted('update:model-value')!;
      const lastValue = emitted[emitted.length - 1]![0];
      expect(Array.isArray(lastValue) ? lastValue.filter(Boolean).length : 0).toBeLessThan(2);
    });

    it('Should leave plain range selection (no requireEndTime, no modelAuto) completely unaffected', async () => {
      const dp = await openMenu({ range: true, timeConfig: { timePickerInline: true } });

      const today = new Date();
      const inFiveDays = addDays(today, 5);

      await selectDate(dp, today);
      await selectDate(dp, inFiveDays);
      await dp.find('[data-test-id="select-button"]').trigger('click');

      const emitted = dp.emitted('update:model-value')!;
      const lastValue = emitted[emitted.length - 1]![0] as Date[];

      expect(lastValue).toHaveLength(2);
      expect(format(lastValue[0]!, 'yyyy-MM-dd')).toBe(format(today, 'yyyy-MM-dd'));
      expect(format(lastValue[1]!, 'yyyy-MM-dd')).toBe(format(inFiveDays, 'yyyy-MM-dd'));
    });

    it('Should leave fixedStart range selection unaffected even when requireEndTime is also set', async () => {
      const today = new Date();
      const fixedStart = today;

      const dp = await openMenu({
        range: { fixedStart: true, requireEndTime: true },
        modelAuto: true,
        modelValue: [fixedStart, null],
        timeConfig: { timePickerInline: true },
      });

      const inFiveDays = addDays(today, 5);
      await selectDate(dp, inFiveDays);
      await dp.find('[data-test-id="select-button"]').trigger('click');

      const emitted = dp.emitted('update:model-value')!;
      const lastValue = emitted[emitted.length - 1]![0] as Date[];

      expect(lastValue).toHaveLength(2);
      expect(format(lastValue[0]!, 'yyyy-MM-dd')).toBe(format(fixedStart, 'yyyy-MM-dd'));
      expect(format(lastValue[1]!, 'yyyy-MM-dd')).toBe(format(inFiveDays, 'yyyy-MM-dd'));
    });

    it('Should immediately auto-apply and close on a single click when requireEndTime is combined with autoApply', async () => {
      const dp = await openMenu({
        range: { requireEndTime: true },
        modelAuto: true,
        autoApply: true,
        timeConfig: { timePickerInline: true },
      });

      const today = new Date();
      await selectDate(dp, today);

      const emitted = dp.emitted('update:model-value')!;
      const lastValue = emitted[emitted.length - 1]![0] as Date[];

      expect(lastValue).toHaveLength(2);
      expect(format(lastValue[0]!, 'yyyy-MM-dd')).toBe(format(today, 'yyyy-MM-dd'));
      expect(format(lastValue[1]!, 'yyyy-MM-dd')).toBe(format(today, 'yyyy-MM-dd'));
    });
  });
});
