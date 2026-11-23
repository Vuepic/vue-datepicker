import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { addMonths, subMonths } from 'date-fns';
import { mount, flushPromises } from '@vue/test-utils';
import VueDatePickerRoot from '@/VueDatePickerRoot.vue';
import {
  clearInput,
  closeMenu,
  getMonthToggleBtn,
  getMonthToggleText,
  openMenu,
  selectDate,
} from '@/__tests__/tests-utils.ts';
import { nextTick } from 'vue';
import { flushPromises } from '@vue/test-utils';
import { enGB } from 'date-fns/locale';
import { de } from 'date-fns/locale';
import { WeekStart } from '@/constants';

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

  describe('Text input', () => {
    it('Should keep the provided locale when formatting the text input on focus', async () => {
      const dp = await openMenu({
        modelValue: new Date(2026, 6, 15, 10, 30),
        locale: de,
        textInput: { format: 'dd LLLL yyyy HH:mm' },
        formats: { input: 'dd LLLL yyyy HH:mm' },
      });

      const input = dp.find('[data-test-id="dp-input"]');
      await input.trigger('focus');
      await nextTick();

      expect((input.element as HTMLInputElement).value).toEqual('15 Juli 2026 10:30');
    });

    it('Should update the formatted text input immediately when locale changes, without requiring focus', async () => {
      const dp = await openMenu({
        modelValue: new Date(2026, 5, 21, 10, 30),
        locale: enGB,
        formats: { input: 'dd LLLL yyyy HH:mm' },
      });

      const input = dp.find('[data-test-id="dp-input"]');
      expect((input.element as HTMLInputElement).value).toEqual('21 June 2026 10:30');

      await dp.setProps({ locale: de });
      await nextTick();

      expect((input.element as HTMLInputElement).value).toEqual('21 Juni 2026 10:30');
    });
  });
});
