import { flushPromises, mount, VueWrapper } from '@vue/test-utils';
import { describe, it, expect, afterEach } from 'vitest';
import { nextTick } from 'vue';
import {
    addMonths,
    getHours,
    getMonth,
    getYear,
    set,
    setMilliseconds,
    setSeconds,
    startOfYear,
    addDays,
} from 'date-fns';
import { ja } from 'date-fns/locale';

import Datepicker from '@/VueDatePicker.vue';
import DatepickerMenu from '@/components/DatepickerMenu.vue';
import Calendar from '@/components/Calendar.vue';
import TimePicker from '@/components/TimePicker/TimePicker.vue';
import MonthYearInput from '@/components/MonthYearPicker/MonthYearPicker.vue';
import ActionRow from '@/components/ActionRow.vue';
import SelectionGrid from '@/components/SelectionGrid.vue';
import TimeInput from '@/components/TimePicker/TimeInput.vue';

import { useUtils } from '@/composables';
import { resetDateTime } from '@/utils/date-utils';

import type { AllPropsType } from '@/props';
import type { TimeObj, ICalendarDate } from '@/interfaces';

const format = (date: Date): string => {
    return `Selected year is ${date.getFullYear()}`;
};

const mountDatepicker = async (props: any = {}): Promise<{ dp: VueWrapper<any>; menu: VueWrapper<any> }> => {
    const dp = mount<{ openMenu: () => void }>(Datepicker, { props });

    dp.vm.openMenu();
    await flushPromises();

    await dp.vm.$nextTick();

    const menu = dp.findComponent(DatepickerMenu);

    return { dp, menu };
};

const checkRange = async (calendar: VueWrapper, menu: VueWrapper<any>, start: Date, end: Date) => {
    await calendar.vm.$nextTick();
    await flushPromises();

    expect(menu.vm.modelValue).toHaveLength(2);
    expect(menu.vm.modelValue[0]).toEqual(start);
    expect(menu.vm.modelValue[1]).toEqual(end);
};

const openAndGetMonthOverlay = async (menu: VueWrapper<any>) => {
    const monthYearInput = menu.findComponent(MonthYearInput);
    monthYearInput.vm.toggleMonthPicker();

    await monthYearInput.vm.$nextTick();

    return menu.find('.dp__overlay');
};

const selectRange = async (menu: VueWrapper<any>, start: Date, end: Date) => {
    menu.vm.selectDate({ value: start, current: true });
    await nextTick();
    await flushPromises();
    menu.vm.selectDate({ value: end, current: true });
    await nextTick();
    await flushPromises();
};

const validateSelectedTime = async (menu: VueWrapper<any>, hours: number, minutes: number) => {
    const timePicker = menu.findComponent(TimePicker);
    timePicker.vm.$emit('update:hours', hours);
    timePicker.vm.$emit('update:minutes', minutes);
    await timePicker.vm.$nextTick();
    await flushPromises();

    expect(menu.vm.modelValue.getHours()).toEqual(hours);
    expect(menu.vm.modelValue.getMinutes()).toEqual(minutes);
};

describe('Logic connection', () => {
    afterEach(async () => {
        await flushPromises();
    });

    it('Should properly define initial values', async () => {
        const date = new Date();
        const { dp, menu } = await mountDatepicker({ modelValue: date });

        expect(menu.vm.month(0)).toEqual(date.getMonth());
        expect(menu.vm.year(0)).toEqual(date.getFullYear());
        expect(menu.vm.time.hours).toEqual(date.getHours());
        expect(menu.vm.time.minutes).toEqual(date.getMinutes());
        dp.unmount();
    });

    it('Should properly map initial values for range picker', async () => {
        const start = new Date();
        const end = addDays(start, 7);
        const { dp, menu } = await mountDatepicker({ modelValue: [start, end], range: true });

        expect(menu.vm.time.hours).toHaveLength(2);
        expect(menu.vm.time.minutes).toHaveLength(2);
        expect(menu.vm.time.hours[0]).toEqual(start.getHours());
        dp.unmount();
    });

    it('Should select date', async () => {
        const tomorrow = setMilliseconds(setSeconds(addDays(new Date(), 1), 0), 0);
        const { dp, menu } = await mountDatepicker({ modelValue: null });

        const calendar = menu.findComponent(Calendar);

        calendar.vm.$emit('select-date', { value: tomorrow, current: true });
        await calendar.vm.$nextTick();

        expect(dp.vm.internalModelValue).toEqual(tomorrow);
        dp.unmount();
    });

    it('Should select range', async () => {
        const start = setMilliseconds(setSeconds(addDays(new Date(), 1), 0), 0);
        const end = setMilliseconds(setSeconds(addDays(start, 3), 0), 0);
        const { dp, menu } = await mountDatepicker({ modelValue: null, range: true });

        const calendar = menu.findComponent(Calendar);

        await selectRange(menu, start, end);

        await checkRange(calendar, menu, start, end);

        dp.unmount();
    });

    it('Should select auto range', async () => {
        const start = setMilliseconds(setSeconds(new Date(), 0), 0);
        const end = setMilliseconds(setSeconds(addDays(start, 7), 0), 0);
        const { dp, menu } = await mountDatepicker({ modelValue: null, range: true, autoRange: 7 });

        const calendar = menu.findComponent(Calendar);

        calendar.vm.$emit('select-date', { value: start, current: true });
        await checkRange(calendar, menu, start, end);

        dp.unmount();
    });

    it('Should update time', async () => {
        const val = 15;
        const date = new Date();
        const { dp, menu } = await mountDatepicker({ modelValue: date });

        await validateSelectedTime(menu, val, val);

        dp.unmount();
    });

    it('Should update range time', async () => {
        const val = 15;
        const start = new Date();
        const end = addDays(new Date(), 7);
        const { dp, menu } = await mountDatepicker({ modelValue: [start, end], range: true });

        const timePicker = menu.findComponent(TimePicker);
        timePicker.vm.$emit('update:hours', [start.getHours(), val]);
        await timePicker.vm.$nextTick();
        timePicker.vm.$emit('update:minutes', [val, end.getMinutes()]);
        await timePicker.vm.$nextTick();

        expect(menu.vm.modelValue[1].getHours()).toEqual(val);
        expect(menu.vm.modelValue[0].getMinutes()).toEqual(val);
        dp.unmount();
    });

    it('Should set month', async () => {
        const month = 0;
        const { dp, menu } = await mountDatepicker({ modelValue: null, range: true });

        const monthYearInput = menu.findComponent(MonthYearInput);
        monthYearInput.vm.$emit('update-month-year', { month, year: getYear(new Date()) });

        expect(menu.vm.month(0)).toEqual(month);
        dp.unmount();
    });

    it('Should set year', async () => {
        const year = 2022;
        const { dp, menu } = await mountDatepicker({ modelValue: null, range: true });

        const monthYearInput = menu.findComponent(MonthYearInput);
        monthYearInput.vm.$emit('update-month-year', { month: getMonth(new Date()), year });

        expect(menu.vm.year(0)).toEqual(year);
        dp.unmount();
    });

    it('Should format with custom function', async () => {
        const selected = new Date();

        const { dp, menu } = await mountDatepicker({ modelValue: null, format });

        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('select-date', { value: selected, current: true });
        await calendar.vm.$nextTick();
        await dp.vm.formatInputValue();

        expect(dp.vm.inputValue).toEqual(format(selected));
        dp.unmount();
    });

    it('Should display preview format from function', async () => {
        const selected = new Date();

        const { dp, menu } = await mountDatepicker({ modelValue: null, previewFormat: format });

        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('select-date', { value: selected, current: true });
        await calendar.vm.$nextTick();

        const actionRow = menu.findComponent(ActionRow);
        expect(actionRow.text().includes(format(selected))).toBeTruthy();
        dp.unmount();
    });

    it('Should format with locale', async () => {
        const selected = new Date(1970, 0, 1);
        // The day of the week (E) is locale-sensitive in Japanese.
        // Since epoch time zero (1970/1/1) was a Thursday, the 'Thu' must be localized to '木'.
        const { dp, menu } = await mountDatepicker({
            modelValue: null,
            format: 'E',
            locale: 'ja-JP',
            formatLocale: ja,
        });

        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('select-date', { value: selected, current: true });
        await calendar.vm.$nextTick();
        await dp.vm.formatInputValue();

        expect(dp.vm.inputValue).toEqual('木');
        dp.unmount();
    });

    it('Should select multiple dates', async () => {
        const dates = [new Date(), addDays(new Date(), 1), addDays(new Date(), 2), addDays(new Date(), 3)];
        const { menu } = await mountDatepicker({ modeValue: null, multiDates: true });
        const calendar = menu.findComponent(Calendar);

        const selectDates = async (): Promise<void> => {
            dates.forEach((date) => {
                calendar.vm.emit('select-date', { value: setSeconds(date, 0), current: true });
            });
        };

        await selectDates();
        expect(calendar.emitted()['select-date']).toHaveLength(4);
    });

    it('Should preset range from preset-ranges', async () => {
        const range = [new Date(), new Date()];
        const { dp, menu } = await mountDatepicker({
            modeValue: null,
            range: true,
            presetRanges: [{ label: 'Today', range }],
        });

        await menu.find('.dp__preset_range span[role="button"]').trigger('click');

        expect(dp.vm.internalModelValue).toHaveLength(2);
        expect(dp.vm.internalModelValue).toEqual(range);
        dp.unmount();
    });

    it('Should preset date from preset-dates', async () => {
        const date = new Date();
        const { dp, menu } = await mountDatepicker({
            modeValue: null,
            presetDates: [{ label: 'Today', date }],
        });

        await menu.find('.dp__preset_date span[role="button"]').trigger('click');

        expect(dp.vm.internalModelValue).toEqual(date);
        dp.unmount();
    });

    it('Should select week', async () => {
        const today = new Date();

        const { dp, menu } = await mountDatepicker({ modelValue: null, weekPicker: true });
        const { getWeekFromDate } = useUtils({ weekStart: 1 } as AllPropsType);
        const weekRange = getWeekFromDate(today);

        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('select-date', { value: today, current: true });

        expect(dp.vm.internalModelValue).toHaveLength(2);
        expect(dp.vm.internalModelValue).toEqual(weekRange);
    });

    it('Should close month overlay on pressing keyboard Esc when escClose = true', async () => {
        const { menu } = await mountDatepicker({ inline: true, escClose: true });

        // trigger keypress Esc
        const overlayBefore = await openAndGetMonthOverlay(menu);
        await overlayBefore.trigger('keydown.esc');

        const overlayAfter = menu.findAll('.dp__overlay');
        expect(overlayAfter).toHaveLength(0);
    });

    it('Should not close month overlay on pressing keyboard Esc when escClose = false', async () => {
        const { menu } = await mountDatepicker({ inline: true, escClose: false });

        // trigger keypress Esc
        const overlayBefore = await openAndGetMonthOverlay(menu);
        await overlayBefore.trigger('keydown.esc');

        const overlayAfter = menu.findAll('.dp__overlay');
        expect(overlayAfter).toHaveLength(1);
    });

    it('It should assign start date', async () => {
        const { menu } = await mountDatepicker({ startDate: startOfYear(new Date()) });

        expect(menu.vm.month(0)).toEqual(0);
    });

    it('It should assign start time', async () => {
        const { menu } = await mountDatepicker({ startTime: { hours: 10 } });
        expect(menu.vm.time.hours).toEqual(10);
    });

    it('Should assign empty time picker', async () => {
        const hours = getHours(new Date());
        const { menu } = await mountDatepicker({ timePicker: true });
        expect(menu.vm.time.hours).toEqual(hours);
    });

    it('Should assign empty month picker', async () => {
        const month = getMonth(new Date());
        const { menu } = await mountDatepicker({ monthPicker: true });
        expect(menu.vm.month(0)).toEqual(month);
    });

    it('Should assign empty year picker', async () => {
        const year = getMonth(new Date());
        const { menu } = await mountDatepicker({ yearPicker: true });
        expect(menu.vm.month(0)).toEqual(year);
    });

    it('Should get seconds value depending on the mode', async () => {
        const { menu } = await mountDatepicker({ enableSeconds: true });
        expect(menu.vm.time.seconds).toBeDefined();
    });

    it('Should handle next month/year on multi-calendars', async () => {
        const { menu } = await mountDatepicker({ multiCalendars: true, range: true });
        expect(menu.vm.month(0)).toEqual(getMonth(new Date()));
        expect(menu.vm.month(1)).toEqual(getMonth(addMonths(new Date(), 1)));
    });

    it('Should check min/max-range', async () => {
        const start = setMilliseconds(setSeconds(addDays(new Date(), 1), 0), 0);
        const end = addDays(setMilliseconds(setSeconds(addDays(start, 7), 0), 0), 5);
        const { dp, menu } = await mountDatepicker({ modelValue: null, range: true, maxRange: 3 });

        menu.vm.selectDate({ value: start, current: true });
        menu.vm.selectDate({ value: end, current: true });

        expect(dp.vm.internalModelValue).toHaveLength(1);

        dp.unmount();
    });

    it('Should get range with fixed date', async () => {
        const modelValue = [new Date(), addDays(new Date(), 3)];
        const { menu } = await mountDatepicker({ fixedStart: true, modelValue, range: true });

        const calendar = menu.findComponent(Calendar);
        calendar.vm.$emit('select-date', { value: addDays(new Date(), 5), current: true });
        await calendar.vm.$nextTick();

        expect(menu.vm.modelValue).toHaveLength(2);
    });

    it('Should auto change multi calendars', async () => {
        const modelValue = [addMonths(new Date(), 1), addMonths(new Date(), 2)];
        const { menu } = await mountDatepicker({ multiCalendars: true, modelValue, range: true });
        expect(menu.vm.month(0)).toEqual(getMonth(modelValue[1]));
        expect(menu.vm.month(1)).toEqual(getMonth(addMonths(modelValue[1], 1)));
    });

    it('Should handle flow', async () => {
        const flow = ['month', 'year', 'calendar'];
        const { menu } = await mountDatepicker({ flow });
        await menu.vm.$nextTick();
        const monthPickerGrid = menu.findComponent(SelectionGrid);

        await monthPickerGrid.find(`[data-test="Jan"]`).trigger('click');
        await nextTick();
        const yearPickerGrid = menu.findComponent(SelectionGrid);

        await yearPickerGrid.find(`[data-test="${getYear(new Date())}"]`).trigger('click');
        await nextTick();

        expect(menu.vm.month(0)).toEqual(0);
        expect(menu.vm.year(0)).toEqual(getYear(new Date()));
    });

    it('Should do a proper map on auto-apply and model-auto', async () => {
        const date = resetDateTime(new Date());
        const { menu, dp } = await mountDatepicker({ autoApply: true, range: true, modelAuto: true });

        menu.vm.selectDate({ value: new Date(), current: true });
        await menu.vm.$nextTick();

        const emittedDate = resetDateTime((dp.emitted()['update:model-value'][0] as any)[0]);

        expect(emittedDate).toEqual(date);

        await dp.setProps({ modelValue: emittedDate });
        await dp.vm.$nextTick();

        expect(dp.vm.internalModelValue).toEqual([emittedDate]);
    });

    it('Should not select range when no-disabled-range is provided', async () => {
        const start = new Date();
        const end = addDays(start, 7);
        const disabledDates = [addDays(start, 1), addDays(start, 2)];

        const { menu } = await mountDatepicker({ noDisabledRange: true, range: true, disabledDates });

        await selectRange(menu, start, end);

        expect(menu.vm.internalModelValue).toHaveLength(1);
        expect(resetDateTime(menu.vm.internalModelValue[0])).toEqual(resetDateTime(start));
    });

    it('Should not select date', async () => {
        const date = new Date();

        const { menu } = await mountDatepicker({ disabledDates: [date] });
        menu.vm.selectDate({ value: date, current: true });
        await menu.vm.$nextTick();

        expect(menu.vm.internalModelValue).toEqual(null);
    });

    it('Should programmatically change month year view', async () => {
        const { dp, menu } = await mountDatepicker();
        const month = 5;
        const year = 2040;
        dp.vm.setMonthYear({ month, year });
        await dp.vm.$nextTick();
        await menu.vm.$nextTick();

        expect(menu.vm.month(0)).toEqual(month);
        expect(menu.vm.year(0)).toEqual(year);
    });

    it('Should not change month year view on invalid value call', async () => {
        const { dp, menu } = await mountDatepicker();
        const date = new Date();

        dp.vm.setMonthYear({ month: undefined, year: 'rand' });
        await dp.vm.$nextTick();
        await menu.vm.$nextTick();

        expect(menu.vm.month(0)).toEqual(getMonth(date));
        expect(menu.vm.year(0)).toEqual(getYear(date));
    });

    it('Should disable times that are out of max time validation', async () => {
        const date = set(new Date(), { hours: 21 });
        const { menu } = await mountDatepicker({ maxTime: { hours: 21 }, modelValue: date });
        await menu.find(`[data-test="open-time-picker-btn"]`).trigger('click');
        await menu.vm.$nextTick();
        const timeInput = menu.findComponent(TimeInput);

        const incBtn = timeInput.find(`[data-test="time-inc-btn"]`);

        expect(incBtn.classes()).toContain('dp__inc_dec_button_disabled');

        expect(timeInput.vm.disabledInGrid('hours')).toEqual([22, 23]);
    });

    it('Should disable times that are out of min time validation', async () => {
        const date = set(new Date(), { hours: 7 });
        const { menu } = await mountDatepicker({ minTime: { hours: 7 }, modelValue: date });
        await menu.find(`[data-test="open-time-picker-btn"]`).trigger('click');
        await menu.vm.$nextTick();
        const timeInput = menu.findComponent(TimeInput);

        const incBtn = timeInput.find(`[data-test="time-dec-btn"]`);

        expect(incBtn.classes()).toContain('dp__inc_dec_button_disabled');

        expect(timeInput.vm.disabledInGrid('hours')).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });

    it('Should select multi dates with month picker mode', async () => {
        const { menu, dp } = await mountDatepicker({ modelValue: null, multiDates: true, monthPicker: true });
        const today = new Date();
        const months = [addMonths(today, 1), addMonths(today, 2), addMonths(today, 3)];

        await Promise.all(
            months.map(async (date) => {
                menu.vm.updateMonthYear(0, { month: getMonth(date), year: getYear(date) });
                await menu.vm.$nextTick();
            }),
        );
        await dp.vm.$nextTick();
        dp.vm.selectDate();
        await dp.vm.$nextTick();

        const emitted = (dp.emitted()['update:model-value'][0] as any)[0];
        expect(emitted).toHaveLength(4);
        const lastSelection = emitted[3];
        expect({ month: lastSelection.month, year: lastSelection.year }).toEqual({
            month: getMonth(months[2]),
            year: getYear(months[2]),
        });
    });

    it('Should validate the time based on the disabled times option', async () => {
        const hours = 10;
        const minutes = 15;
        const disabledTimes = (time: TimeObj) => {
            return time.hours === hours && time.minutes === minutes;
        };
        const { menu, dp } = await mountDatepicker({ modelValue: new Date(), disabledTimes });
        await menu.find(`[data-test="open-time-picker-btn"]`).trigger('click');
        await menu.vm.$nextTick();

        await validateSelectedTime(menu, hours, minutes);

        const actionRow = menu.findComponent(ActionRow);
        const button = actionRow.find('[data-test="select-button"]');

        expect(button.attributes().disabled).toBeDefined();

        dp.unmount();
    });

    it('Should display modified calendar', async () => {
        const mapDates = (dates: ICalendarDate[]) => {
            return dates
                .filter((week) => week.days.some((day) => day.text === 15))
                .map((week) => ({
                    ...week,
                    days: week.days.map((day) => {
                        day.classData['custom-class'] = true;
                        return day;
                    }),
                }));
        };
        const { menu } = await mountDatepicker({ calendar: mapDates });

        const calendar = menu.findComponent(Calendar);

        expect(calendar.vm.calendarWeeks).toHaveLength(1);
        expect(calendar.html().includes('custom-class')).toBeTruthy();
    });
});
