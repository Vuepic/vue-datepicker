import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { addDays, addMonths, format, subMonths } from 'date-fns';
import { de, enGB, enUS } from 'date-fns/locale';
import { DOMWrapper, mount, flushPromises } from '@vue/test-utils';
import { nextTick, reactive } from 'vue';
import VueDatePickerRoot from '@/VueDatePickerRoot.vue';
import {
  clearInput,
  closeMenu,
  getMonthToggleBtn,
  getMonthToggleText,
  getYearToggleBtn,
  openMenu,
  openMenuWithFocusedInput,
  selectDate,
} from '@/__tests__/tests-utils.ts';
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

  describe('floating.autoUpdate', () => {
    // jsdom has no layout and no ResizeObserver, so give the input a movable position, the menu a
    // height that only exists once its content is rendered, and notify size changes by hand
    const offset = 10;
    let menuHeight: number;
    let inputTop: number;
    let observers: FakeResizeObserver[];
    let dp: ReturnType<typeof mount<typeof VueDatePickerRoot>>;

    class FakeResizeObserver {
      targets = new Set<Element>();
      constructor(public callback: ResizeObserverCallback) {
        observers.push(this);
      }
      observe(target: Element) {
        this.targets.add(target);
      }
      unobserve(target: Element) {
        this.targets.delete(target);
      }
      disconnect() {
        this.targets.clear();
      }
    }

    beforeEach(() => {
      menuHeight = 300;
      inputTop = 500;
      observers = [];
      vi.stubGlobal('ResizeObserver', FakeResizeObserver);
      vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (this: HTMLElement) {
        const isInput = this.firstElementChild?.matches('.dp--input-wrap') ?? false;
        return new DOMRect(0, isInput ? inputTop : 0, 0, 0);
      });
      vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockImplementation(function (this: HTMLElement) {
        return this.matches('.dp--menu-wrapper') && this.querySelector('.dp--menu') ? menuHeight : 0;
      });
    });

    afterEach(() => {
      dp.unmount();
      vi.restoreAllMocks();
      vi.unstubAllGlobals();
    });

    const settle = async () => {
      for (let i = 0; i < 5; i++) {
        await flushPromises();
        await nextTick();
      }
    };

    const menuWrap = () => dp.find<HTMLElement>('.dp--menu-wrapper').element;

    const resizeMenu = async () => {
      const target = menuWrap();
      for (const observer of observers.filter((item) => item.targets.has(target))) {
        observer.callback([{ target } as unknown as ResizeObserverEntry], observer as unknown as ResizeObserver);
      }
      await settle();
    };

    const openAndResize = async () => {
      dp.vm.openMenu();
      await settle();
      // the browser reports the new size once the content is rendered
      await resizeMenu();
    };

    const open = async (autoUpdate?: boolean) => {
      const floating = { placement: 'top' as const, offset, arrow: false, flip: false, shift: false, autoUpdate };
      dp = mount(VueDatePickerRoot, { props: { floating }, attachTo: document.body });
      await openAndResize();
    };

    const menuTop = () => Number(/translate\(.+px, (.+)px\)/.exec(menuWrap().style.transform)?.[1]);

    const topAbove = (top: number) => top - offset - menuHeight;

    it.each(['scroll', 'resize'])('Should reposition the open menu on %s by default', async (event) => {
      await open();
      expect(menuTop()).toBe(topAbove(500));

      inputTop = 400;
      globalThis.dispatchEvent(new Event(event));
      await settle();

      expect(menuTop()).toBe(topAbove(400));
    });

    it.each(['scroll', 'resize'])('Should not reposition the open menu on %s when disabled', async (event) => {
      await open(false);
      expect(menuTop()).toBe(topAbove(500));

      inputTop = 400;
      globalThis.dispatchEvent(new Event(event));
      await settle();

      expect(menuTop()).toBe(topAbove(500));
    });

    it.each([true, false])('Should follow a menu size change when autoUpdate is %s', async (autoUpdate) => {
      await open(autoUpdate);

      menuHeight = 340;
      await resizeMenu();

      expect(menuTop()).toBe(topAbove(500));
    });

    it('Should position the menu again on every open when disabled', async () => {
      await open(false);

      dp.vm.closeMenu();
      await settle();
      inputTop = 700;
      await openAndResize();

      expect(menuTop()).toBe(topAbove(700));
    });
  });

  describe('locking an open popup', () => {
    it.each(['disabled', 'readonly'] as const)('Should close the menu when %s becomes true', async (prop) => {
      const date = new Date(2026, 10, 10);
      const dp = await openMenu({ modelValue: date, autoApply: true });
      expect(dp.find('.dp--menu').exists()).toBe(true);

      await dp.setProps({ [prop]: true });

      expect(dp.find('.dp--menu').exists()).toBe(false);
      expect(dp.emitted('update:model-value')).toBeUndefined();
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

  describe('Events', () => {
    it('Should emit update-month-year when navigating to January', async () => {
      const dp = await openMenu({ modelValue: new Date(2025, 1, 15) }); // February 2025
      await nextTick();

      await dp.find(`[data-dp-element="action-prev"]`).trigger('click');
      await nextTick();

      const emitted = dp.emitted('update-month-year');

      expect(emitted).toBeTruthy();
      expect(emitted![emitted!.length - 1][0]).toEqual({ month: 0, year: 2025, instance: 0 });
    });
  });

  describe('text input', () => {
    it('Should allow deleting a date separator with mask and auto apply enabled', async () => {
      const minYr = 2013;
      const maxYr = 3026;
      const minDate = new Date(minYr, 0, 1);
      const maxDate = new Date();
      maxDate.setFullYear(maxYr);

      const dp = await openMenu({
        modelValue: minDate,
        autoApply: true,
        minDate,
        maxDate,
        yearRange: [minYr, maxYr],
        textInput: {
          format: 'dd/MM/yyyy',
          maskFormat: 'DD/MM/YYYY',
          applyOnBlur: true,
        },
        timeConfig: {
          enableTimePicker: false,
        },
      });

      const input = dp.find(`[data-test-id="dp-input"]`);
      await input.trigger('focus');
      await nextTick();

      await input.setValue('01/01/');
      await input.setValue('01/01');

      expect((input.element as HTMLInputElement).value).toEqual('01/01');
    });
  });

  describe('Input icon', () => {
    it.each([false, true])(
      'Should toggle the menu exactly once per calendar icon click (textInput: %s)',
      async (textInput) => {
        const dp = mount(VueDatePickerRoot, { props: { textInput }, attachTo: document.body });
        await flushPromises();
        const icon = dp.find('.dp--input-icon');

        await icon.trigger('click');
        await flushPromises();

        expect(dp.emitted('open')).toHaveLength(1);
        expect(dp.emitted('closed')).toBeUndefined();
        expect(dp.find('.dp--menu').exists()).toBe(true);

        await icon.trigger('click');
        await flushPromises();

        expect(dp.emitted('open')).toHaveLength(1);
        expect(dp.emitted('closed')).toHaveLength(1);

        dp.unmount();
      },
    );
  });

  describe('Trigger slot keyboard support', () => {
    it('Should open the menu when Enter is pressed on focusable custom trigger content', async () => {
      const dp = mount(VueDatePickerRoot, {
        slots: { trigger: '<div class="custom-trigger" tabindex="0">Pick a date</div>' },
      });
      await flushPromises();

      await dp.find('.custom-trigger').trigger('keydown', { key: 'Enter', code: 'Enter' });
      await flushPromises();

      expect(dp.emitted('open')).toHaveLength(1);
      expect(dp.find('.dp--menu').exists()).toBe(true);
    });

    it('Should leave Enter on a native button trigger to the browser-generated click', async () => {
      const dp = mount(VueDatePickerRoot, {
        slots: { trigger: '<button class="custom-trigger" type="button">Pick a date</button>' },
      });
      await flushPromises();

      await dp.find('.custom-trigger').trigger('keydown', { key: 'Enter', code: 'Enter' });
      await flushPromises();

      expect(dp.emitted('open')).toBeUndefined();
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

  describe('Time picker', () => {
    it('Should not disable the decrement arrow when noMinutesOverlay is enabled', async () => {
      const dp = await openMenu({ timePicker: true, timeConfig: { noMinutesOverlay: true } });

      expect(dp.find('[data-test-id="minutes-time-dec-btn-0"]').attributes('disabled')).toBeUndefined();
      expect(dp.find('[data-test-id="minutes-time-inc-btn-0"]').attributes('disabled')).toBeUndefined();
    });

    it('Should not disable the decrement arrow when noHoursOverlay is enabled', async () => {
      const dp = await openMenu({ timePicker: true, timeConfig: { noHoursOverlay: true } });

      expect(dp.find('[data-test-id="hours-time-dec-btn-0"]').attributes('disabled')).toBeUndefined();
      expect(dp.find('[data-test-id="hours-time-inc-btn-0"]').attributes('disabled')).toBeUndefined();
    });
  });

  describe('time picker overlay', () => {
    it('Should not leave the calendar inert when the menu is closed while the overlay is open', async () => {
      const dp = await openMenu({ autoApply: true });

      await dp.find('[data-test-id="open-time-picker-btn"]').trigger('click');
      expect(dp.find('.dp--calendar').attributes('inert')).toBeDefined();

      dp.vm.closeMenu();
      await nextTick();
      dp.vm.openMenu();
      await nextTick();

      expect(dp.find('.dp--calendar').attributes('inert')).toBeUndefined();
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

    it('Should not select the date when a key is pressed on interactive marker tooltip content', async () => {
      const today = new Date();
      const dp = mount(VueDatePickerRoot, {
        props: { markers: [{ date: today, type: 'dot' as const, tooltip: [{ text: 'Event' }] }], autoApply: true },
        slots: { 'marker-tooltip': '<button class="tooltip-action" type="button">Details</button>' },
      });
      dp.vm.openMenu();
      await flushPromises();

      const cell = dp.find(`[data-test-id="dp-${format(today, 'yyyy-MM-dd')}"]`);
      await cell.trigger('mouseenter');
      await flushPromises();

      const tooltipAction = dp.find('.tooltip-action');
      expect(tooltipAction.exists()).toBe(true);

      await tooltipAction.trigger('keydown', { key: 'Enter', code: 'Enter' });
      await flushPromises();

      expect(dp.emitted('date-click')).toBeUndefined();
      expect(dp.emitted('update:model-value')).toBeUndefined();
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

  describe('showLastInRange', () => {
    it('Should focus the end date when the range spans exactly one year', async () => {
      const startDate = new Date(2026, 0, 1);
      const endDate = new Date(2027, 0, 1);

      const dp = await openMenu({
        multiCalendars: true,
        range: { showLastInRange: true },
        modelValue: [startDate, endDate],
      });

      expect(getMonthToggleBtn(dp).text()).toEqual(getMonthToggleText(endDate));
      expect(getYearToggleBtn(dp).text()).toEqual('2027');
    });

    it('Should focus the start date when showLastInRange is disabled', async () => {
      const startDate = new Date(2026, 0, 1);
      const endDate = new Date(2027, 0, 1);

      const dp = await openMenu({
        multiCalendars: true,
        range: { showLastInRange: false },
        modelValue: [startDate, endDate],
      });

      expect(getMonthToggleBtn(dp).text()).toEqual(getMonthToggleText(startDate));
      expect(getYearToggleBtn(dp).text()).toEqual('2026');
    });

    it('Should keep the start date focused when the range fits within the multi-calendar view', async () => {
      const startDate = new Date(2026, 0, 1);
      const endDate = new Date(2026, 1, 28);

      const dp = await openMenu({
        multiCalendars: true,
        range: { showLastInRange: true },
        modelValue: [startDate, endDate],
      });

      // January and February fit into the two-calendar view.
      expect(getMonthToggleBtn(dp).text()).toEqual(getMonthToggleText(startDate));
      expect(getYearToggleBtn(dp).text()).toEqual('2026');

      expect(getMonthToggleBtn(dp, 1).text()).toEqual(getMonthToggleText(endDate));
      expect(getYearToggleBtn(dp, 1).text()).toEqual('2026');
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
    });
  });

  describe('minDate/maxDate with a time component', () => {
    beforeEach(() => {
      vi.setSystemTime(new Date(2026, 1, 5, 9, 0));
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
    // openMenu mounts detached from `document`, where jsdom's getComputedStyle ignores inline styles,
    // so VTU's isVisible() always reports true. Read the `display: none` that v-show sets instead.
    const isShown = (el: DOMWrapper<Element>) => !/display:\s*none/.test(el.attributes('style') ?? '');

    it('Should hide the end-time input for a single-day modelAuto selection by default', async () => {
      const dp = await openMenu({
        range: true,
        modelAuto: true,
        timeConfig: { timePickerInline: true },
      });

      await selectDate(dp, new Date());

      const timeInputs = dp.findAll('.dp--time-input');
      expect(timeInputs).toHaveLength(2);
      expect(isShown(timeInputs[0]!)).toBe(true);
      expect(isShown(timeInputs[1]!)).toBe(false);
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
      expect(isShown(timeInputs[0]!)).toBe(true);
      expect(isShown(timeInputs[1]!)).toBe(true);
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
      expect(isShown(timeInputs[0]!)).toBe(true);
      expect(isShown(timeInputs[1]!)).toBe(true);
    });

    it('Should default requireEndTime to false when range is passed as a plain boolean', async () => {
      const dp = await openMenu({
        range: true,
        modelAuto: true,
        timeConfig: { timePickerInline: true },
      });

      await selectDate(dp, new Date());

      expect(isShown(dp.findAll('.dp--time-input')[1]!)).toBe(false);
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
      expect(isShown(timeInputs[0]!)).toBe(true);
      expect(isShown(timeInputs[1]!)).toBe(true);

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
      expect(isShown(timeInputs[0]!)).toBe(true);
      expect(isShown(timeInputs[1]!)).toBe(true);

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
        // fixedStart requires both dates in v-model (see docs), so seed a full range.
        modelValue: [fixedStart, addDays(today, 1)],
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
