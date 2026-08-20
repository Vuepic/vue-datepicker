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
import { enGB } from 'date-fns/locale';
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

  describe('DOM', () => {
    it('Should render menu wrap only while menu is open', async () => {
      const dpOpenedMenu = await openMenu({});
      expect(dpOpenedMenu.vm.dpWrapMenuRef()?.value).toBeTruthy();

      const dpClosedMenu = await closeMenu({});
      expect(dpClosedMenu.vm.dpWrapMenuRef()?.value).toBeNull();
    });
  });

  describe('Keyboard navigation - Tab key', () => {
    it('Should keep the menu open when Tab is pressed on an empty input and text input is disabled', async () => {
      const dp = await openMenu({});
      expect(dp.vm.dpWrapMenuRef()?.value).toBeTruthy();

      const input = dp.find('[data-test-id="dp-input"]');
      await input.trigger('keydown', { key: 'Tab', code: 'Tab' });
      await nextTick();

      expect(dp.vm.dpWrapMenuRef()?.value).toBeTruthy();
      expect(dp.emitted('cleared')).toBeUndefined();
    });

    it('Should keep the menu element rendered in the DOM after Tab on an empty input', async () => {
      const dp = await openMenu({});
      expect(dp.find('.dp--menu').exists()).toBe(true);

      const input = dp.find('[data-test-id="dp-input"]');
      await input.trigger('keydown', { key: 'Tab', code: 'Tab' });
      await nextTick();

      expect(dp.find('.dp--menu').exists()).toBe(true);
    });

    it('Should still submit a valid typed date on Tab when text input is enabled', async () => {
      const dp = await openMenu({ textInput: { format: 'MM/dd/yyyy' } });

      const input = dp.find('[data-test-id="dp-input"]');
      await input.setValue('01/15/2026');
      await input.trigger('keydown', { key: 'Tab', code: 'Tab' });
      await nextTick();

      expect(dp.emitted('text-submit')).toBeTruthy();
    });

    it('Should still clear parsed date and emit clear on Tab with empty input when text input is enabled', async () => {
      const dp = await openMenu({ textInput: true, modelValue: new Date(2026, 2, 15) });

      const input = dp.find('[data-test-id="dp-input"]');
      await input.setValue('');
      await input.trigger('keydown', { key: 'Tab', code: 'Tab' });
      await nextTick();

      expect(dp.emitted('cleared')).toBeTruthy();
    });
  });

  describe('Year picker', () => {
    it('Should render the year overlay cell for start-date with a matching focus-value data attribute when model value is empty', async () => {
      const startDate = new Date(2023, 0, 1);
      const dp = await openMenu({ yearPicker: true, autoApply: true, modelValue: null, startDate });

      const focusCell = dp.find('[data-dp-focus-value="2023"]');
      expect(focusCell.exists()).toBe(true);
    });

    it('Should scroll the year overlay towards start-date year, not the first item in year-range, when model value is empty', async () => {
      const originalDescriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetTop');
      // jsdom always reports 0 for offsetTop, so every candidate cell would produce an identical
      // scrollTop regardless of which one was picked. Faking a distinct offsetTop per cell (based
      // on its focus-value data attribute) lets us prove the *correct* cell was the one used.
      Object.defineProperty(HTMLElement.prototype, 'offsetTop', {
        configurable: true,
        get(this: HTMLElement) {
          const focusValue = this.dataset?.dpFocusValue;
          return focusValue ? Number(focusValue) * 10 : 0;
        },
      });

      try {
        const startDate = new Date(2023, 0, 1);
        const dp = await openMenu({ yearPicker: true, autoApply: true, modelValue: null, startDate });

        const container = dp.find('.dp--overlay-container').element as HTMLElement;
        const firstYearInRange = 1900; // default yearRange start

        expect(container.scrollTop).not.toBe(firstYearInRange * 10);
        expect(container.scrollTop).toBe(2023 * 10 - 127.5);
      } finally {
        if (originalDescriptor) {
          Object.defineProperty(HTMLElement.prototype, 'offsetTop', originalDescriptor);
        }
      }
    });

    it('Should focus the year cell matching start-date when the overlay opens', async () => {
      const focusSpy = vi.spyOn(HTMLElement.prototype, 'focus');

      try {
        const startDate = new Date(2023, 0, 1);
        const dp = await openMenu({ yearPicker: true, autoApply: true, modelValue: null, startDate });

        const focusCell = dp.find('[data-dp-focus-value="2023"]').element as HTMLElement;
        expect(focusSpy.mock.instances).toContain(focusCell);
      } finally {
        focusSpy.mockRestore();
      }
    });

    it('Should not focus the year cell when no-overlay-focus is effectively enabled (text input mode)', async () => {
      const focusSpy = vi.spyOn(HTMLElement.prototype, 'focus');

      try {
        const startDate = new Date(2023, 0, 1);
        const dp = await openMenu({
          yearPicker: true,
          autoApply: true,
          modelValue: null,
          startDate,
          textInput: true,
        });

        const focusCell = dp.find('[data-dp-focus-value="2023"]').element as HTMLElement;
        expect(focusSpy.mock.instances).not.toContain(focusCell);
      } finally {
        focusSpy.mockRestore();
      }
    });

    it('Should keep focus on the start-date year cell, not the first year in range, after the arrow-navigation focus watcher runs', async () => {
      const focusSpy = vi.spyOn(HTMLElement.prototype, 'focus');
      // useArrowNavigation.ts uses document.querySelector internally, which can only see elements
      // that are actually attached to `document` - the shared `openMenu` helper mounts detached,
      // so this test needs its own attachTo: document.body mount to exercise that code path.
      const dp = mount(VueDatePickerRoot, {
        props: { yearPicker: true, autoApply: true, modelValue: null, startDate: new Date(2023, 0, 1) },
        attachTo: document.body,
      });

      try {
        dp.vm.openMenu();
        await flushPromises();
        await dp.vm.$nextTick();

        // useArrowNavigation's focus watcher runs on requestAnimationFrame (x2), scheduled after
        // SelectionOverlay's own mount-time focus call. Flush both frames to let it settle.
        await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
        await nextTick();

        const focusCell = dp.find('[data-dp-focus-value="2023"]').element as HTMLElement;
        const firstCell = dp.find('[data-dp-focus-value="1900"]').element as HTMLElement;

        expect(focusSpy.mock.instances).toContain(focusCell);
        expect(focusSpy.mock.instances).not.toContain(firstCell);
      } finally {
        focusSpy.mockRestore();
        dp.unmount();
      }
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
});
