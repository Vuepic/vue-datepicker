import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { addMonths, subMonths } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { addDays, addMonths, format, subMonths } from 'date-fns';
import {
  clearInput,
  closeMenu,
  getMonthToggleBtn,
  getMonthToggleText,
  openMenu,
  openMenuWithFocusedInput,
  selectDate,
} from '@/__tests__/tests-utils.ts';
import { nextTick } from 'vue';
import { flushPromises } from '@vue/test-utils';
import { enGB } from 'date-fns/locale';
import { de } from 'date-fns/locale';
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

  describe('Flow with auto-apply', () => {
    const frozenSystemDate = new Date(2026, 7, 21, 12, 30, 30);
    beforeEach(() => {
      vi.setSystemTime(frozenSystemDate);
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('Should emit update:model-value exactly once when selecting a date with a single-step flow', async () => {
      const dp = await openMenu({ autoApply: true, flow: { steps: ['calendar'] } });

      const dateToSelect = new Date(2026, 7, 21);
      await selectDate(dp, dateToSelect);
      await flushPromises();
      await nextTick();

      const emitted = dp.emitted('update:model-value');
      expect(emitted).toHaveLength(1);
      expect(emitted![0][0]).not.toBeNull();
    });

    it('Should not clear the internal model value after selecting a date with a single-step flow', async () => {
      const dp = await openMenu({ autoApply: true, flow: { steps: ['calendar'] } });

      const dateToSelect = new Date(2026, 7, 21);
      await selectDate(dp, dateToSelect);
      await flushPromises();
      await nextTick();

      const input = dp.find('[data-test-id="dp-input"]');
      expect((input.element as HTMLInputElement).value).not.toEqual('');
    });

    it('Should emit update:model-value exactly once when completing a range with a single-step flow', async () => {
      const dp = await openMenu({
        autoApply: true,
        range: { partialRange: false },
        flow: { steps: ['calendar'] },
      });

      const startDate = new Date(2026, 7, 21);
      const endDate = new Date(2026, 7, 23);
      await selectDate(dp, startDate);
      await flushPromises();
      await selectDate(dp, endDate);
      await flushPromises();
      await nextTick();

      const emitted = dp.emitted('update:model-value');
      expect(emitted).toHaveLength(1);
      expect(emitted![0][0]).not.toBeNull();
    });

    it('Should close the menu after reselecting the currently displayed month at the month flow step, then picking a day', async () => {
      const dp = await openMenu({ autoApply: true, flow: { steps: ['month', 'calendar'] } });
      const activeMonthCell = dp.find('[data-dp-element-active="1"]');
      expect(activeMonthCell.exists()).toBe(true);
      await activeMonthCell.trigger('click');
      await flushPromises();
      await nextTick();

      await selectDate(dp, frozenSystemDate);
      await flushPromises();
      await nextTick();

      expect(dp.emitted('closed')).toBeTruthy();
      expect(dp.emitted('update:model-value')).toBeTruthy();
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

  describe('Markers', () => {
    it('Should not throw when clicking a date whose marker is defined via a reactive array (ref/reactive regression)', async () => {
      const today = new Date();
      // Mirrors a real-world consumer defining `const markers = ref([...])`: once Vue unwraps the
      // ref, `.value` is a deeply reactive array, so building it with reactive() here reproduces
      // that exact shape without needing a ref() unwrap step.
      const reactiveMarkers = reactive([{ date: today, type: 'dot' as const }]);
      const dp = await openMenu({ markers: reactiveMarkers, modelValue: null });

      await expect(selectDate(dp, today)).resolves.not.toThrow();
      expect(dp.emitted('date-click')).toBeTruthy();
    });

    it('Should still allow selecting a date whose marker is defined via a plain (non-reactive) array', async () => {
      const today = new Date();
      const dp = await openMenu({ markers: [{ date: today, type: 'dot' as const }], modelValue: null });

      await expect(selectDate(dp, today)).resolves.not.toThrow();
      expect(dp.emitted('date-click')).toBeTruthy();
    });

    it('Should still allow selecting a date whose marker uses a customPosition callback', async () => {
      const today = new Date();
      const dp = await openMenu({
        markers: [{ date: today, type: 'dot' as const, customPosition: () => ({ top: '0px' }) }],
        modelValue: null,
      });

      await expect(selectDate(dp, today)).resolves.not.toThrow();
      expect(dp.emitted('date-click')).toBeTruthy();
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

  describe('Arrow navigation', () => {
    it('Should keep focus on the text input when the menu opens while typing', async () => {
      const dp = await openMenuWithFocusedInput({ textInput: true, arrowNavigation: true });
      const input = dp.find('[data-test-id="dp-input"]');

      expect(document.activeElement).toBe(input.element);

      dp.unmount();
    });
  });

  describe('Text input format (AM/PM)', () => {
    const props = {
      locale: enUS,
      timeConfig: { enableTimePicker: true, is24: false },
      textInput: { format: 'MM/dd/yyyy hh:mm aa' },
    };

    const typeAndSubmit = async (dp: Awaited<ReturnType<typeof openMenu>>, value: string) => {
      const input = dp.find<HTMLInputElement>('[data-test-id="dp-input"]');
      await input.setValue(value);
      await input.trigger('keydown', { key: 'Enter' });
      const emitted = dp.emitted('update:model-value');
      return emitted?.[emitted.length - 1]?.[0] as Date | undefined;
    };

    it('[control] Should parse a plain 24h date+time with no AM/PM token', async () => {
      const dp = await openMenu({ textInput: { format: 'MM/dd/yyyy HH:mm' } });
      const value = await typeAndSubmit(dp, '07/01/2026 14:00');

      expect(value?.getHours()).toBe(14);
    });

    it('Should parse a PM time as 24h hours (12:00 PM -> 12)', async () => {
      const dp = await openMenu(props);
      const value = await typeAndSubmit(dp, '07/01/2026 12:00 PM');

      expect(value?.getHours()).toBe(12);
    });

    it('Should parse a 12 AM time as midnight (12:00 AM -> 0)', async () => {
      const dp = await openMenu(props);
      const value = await typeAndSubmit(dp, '07/01/2026 12:00 AM');

      expect(value?.getHours()).toBe(0);
    });

    it('Should parse an afternoon PM time correctly (01:30 PM -> 13)', async () => {
      const dp = await openMenu(props);
      const value = await typeAndSubmit(dp, '07/01/2026 01:30 PM');

      expect(value?.getHours()).toBe(13);
      expect(value?.getMinutes()).toBe(30);
  describe('minDate/maxDate with a time component', () => {
    beforeEach(() => {
      vi.setSystemTime(new Date(2026, 1, 5, 9, 0));
  describe('Multi-select month & year pickers', () => {
    const frozenSystemDate = new Date(2026, 0, 15, 12, 0, 0);

    beforeEach(() => {
      vi.setSystemTime(frozenSystemDate);
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('Should disable hours before minDate on the minDate day itself', async () => {
      const dp = await openMenu({
        minDate: new Date(2026, 1, 10, 11, 0),
        timeConfig: { timePickerInline: true },
      });

      await selectDate(dp, new Date(2026, 1, 10));
      await dp.find('[data-test-id="hours-toggle-overlay-btn-0"]').trigger('click');

      expect(dp.find('[data-test-id="10"]').attributes('aria-disabled')).toEqual('true');
      expect(dp.find('[data-test-id="11"]').attributes('aria-disabled')).toBeUndefined();
    });

    it('Should not disable any hours on a day after minDate', async () => {
      const dp = await openMenu({
        minDate: new Date(2026, 1, 10, 11, 0),
        timeConfig: { timePickerInline: true },
      });

      await selectDate(dp, new Date(2026, 1, 11));
      await dp.find('[data-test-id="hours-toggle-overlay-btn-0"]').trigger('click');

      expect(dp.find('[data-test-id="10"]').attributes('aria-disabled')).toBeUndefined();
      expect(dp.find('[data-test-id="11"]').attributes('aria-disabled')).toBeUndefined();
    });

    it('Should disable minutes before minDate on the boundary hour', async () => {
      const dp = await openMenu({
        minDate: new Date(2026, 1, 10, 11, 30),
        timeConfig: { timePickerInline: true },
      });

      await selectDate(dp, new Date(2026, 1, 10));
      await dp.find('[data-test-id="hours-toggle-overlay-btn-0"]').trigger('click');
      await dp.find('[data-test-id="11"]').trigger('click');
      await dp.find('[data-test-id="minutes-toggle-overlay-btn-0"]').trigger('click');

      expect(dp.find('[data-test-id="15"]').attributes('aria-disabled')).toEqual('true');
      expect(dp.find('[data-test-id="35"]').attributes('aria-disabled')).toBeUndefined();
    });

    it('Should disable hours after maxDate on the maxDate day itself', async () => {
      const dp = await openMenu({
        maxDate: new Date(2026, 1, 10, 11, 0),
        timeConfig: { timePickerInline: true },
      });

      await selectDate(dp, new Date(2026, 1, 10));
      await dp.find('[data-test-id="hours-toggle-overlay-btn-0"]').trigger('click');

      expect(dp.find('[data-test-id="12"]').attributes('aria-disabled')).toEqual('true');
      expect(dp.find('[data-test-id="11"]').attributes('aria-disabled')).toBeUndefined();
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
