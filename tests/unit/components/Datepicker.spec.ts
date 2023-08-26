import { flushPromises, mount, VueWrapper } from '@vue/test-utils';
import { describe, it, expect, afterEach } from 'vitest';
import { nextTick } from 'vue';
import {
    addMonths,
    getMonth,
    getYear,
    set,
    setMilliseconds,
    setSeconds,
    startOfYear,
    addDays,
    getHours,
} from 'date-fns';
import { ja } from 'date-fns/locale';

import MainComponent from '@/VueDatePicker.vue';
import DatepickerMenu from '@/components/DatepickerMenu.vue';
import DpCalendar from '@/components/DatePicker/DpCalendar.vue';
import DatePicker from '@/components/DatePicker/DatePicker.vue';
import TimePicker from '@/components/TimePicker/TimePicker.vue';
import ActionRow from '@/components/ActionRow.vue';
import SelectionOverlay from '@/components/Common/SelectionOverlay.vue';
import TimeInput from '@/components/TimePicker/TimeInput.vue';
import DpHeader from '@/components/DatePicker/DpHeader.vue';
import TimePickerSolo from '@/components/TimePicker/TimePickerSolo.vue';

import { getWeekFromDate, resetDateTime } from '@/utils/date-utils';

import type { TimeObj, ICalendarDate, SixWeekMode } from '@/interfaces';
import MonthPicker from '@/components/MonthPicker/MonthPicker.vue';

const format = (date: Date): string => {
    return `Selected year is ${date.getFullYear()}`;
};

const mountDatepicker = async (
    props: any = {},
): Promise<{ dp: VueWrapper<any>; menu: VueWrapper<any>; datePicker: VueWrapper<any> }> => {
    const dp = mount(MainComponent, { props });

    dp.vm.openMenu();
    await flushPromises();

    await dp.vm.$nextTick();

    const menu = dp.findComponent(DatepickerMenu);
    const datePicker = menu.findComponent(DatePicker);

    return { dp, menu, datePicker };
};

const checkRange = async (calendar: VueWrapper, picker: VueWrapper<any>, start: Date, end: Date) => {
    await calendar.vm.$nextTick();
    await flushPromises();

    expect(picker.vm.modelValue).toHaveLength(2);
    expect(picker.vm.modelValue[0]).toEqual(start);
    expect(picker.vm.modelValue[1]).toEqual(end);
};

const openAndGetMonthOverlay = async (picker: VueWrapper<any>) => {
    const monthYearInput = picker.findComponent(DpHeader);
    monthYearInput.vm.toggleMonthPicker();

    await monthYearInput.vm.$nextTick();

    return picker.find('.dp__overlay');
};

const selectRange = async (picker: VueWrapper<any>, start: Date, end: Date) => {
    picker.vm.selectDate({ value: start, current: true });
    await nextTick();
    await flushPromises();
    picker.vm.selectDate({ value: end, current: true });
    await nextTick();
    await flushPromises();
};

const validateSelectedTime = async (picker: VueWrapper<any>, hours: number, minutes: number) => {
    const timePicker = picker.findComponent(TimePicker);
    timePicker.vm.$emit('update:hours', hours);
    timePicker.vm.$emit('update:minutes', minutes);
    await timePicker.vm.$nextTick();
    await flushPromises();

    expect(picker.vm.modelValue.getHours()).toEqual(hours);
    expect(picker.vm.modelValue.getMinutes()).toEqual(minutes);
};

describe('Logic connection', () => {
    afterEach(async () => {
        await flushPromises();
    });

    it('Should properly define initial values', async () => {
        const date = new Date();
        const { dp, datePicker } = await mountDatepicker({ modelValue: date });

        expect(datePicker.vm.month(0)).toEqual(date.getMonth());
        expect(datePicker.vm.year(0)).toEqual(date.getFullYear());
        expect(datePicker.vm.time.hours).toEqual(date.getHours());
        expect(datePicker.vm.time.minutes).toEqual(date.getMinutes());
        dp.unmount();
    });

    it('Should properly map initial values for range picker', async () => {
        const start = new Date();
        const end = addDays(start, 7);
        const { dp, datePicker } = await mountDatepicker({ modelValue: [start, end], range: true });

        expect(datePicker.vm.time.hours).toHaveLength(2);
        expect(datePicker.vm.time.minutes).toHaveLength(2);
        expect(datePicker.vm.time.hours[0]).toEqual(start.getHours());
        dp.unmount();
    });

    it('Should select date', async () => {
        const tomorrow = setMilliseconds(setSeconds(addDays(new Date(), 1), 0), 0);
        const { dp, datePicker } = await mountDatepicker({ modelValue: null });

        const calendar = datePicker.findComponent(DpCalendar);

        calendar.vm.$emit('select-date', { value: tomorrow, current: true });
        await calendar.vm.$nextTick();

        expect(dp.vm.internalModelValue).toEqual(tomorrow);
        dp.unmount();
    });

    it('Should select range', async () => {
        const start = setMilliseconds(setSeconds(addDays(new Date(), 1), 0), 0);
        const end = setMilliseconds(setSeconds(addDays(start, 3), 0), 0);
        const { dp, datePicker } = await mountDatepicker({ modelValue: null, range: true });

        const calendar = datePicker.findComponent(DpCalendar);

        await selectRange(datePicker, start, end);

        await checkRange(calendar, datePicker, start, end);

        dp.unmount();
    });

    it('Should select auto range', async () => {
        const start = setMilliseconds(setSeconds(new Date(), 0), 0);
        const end = setMilliseconds(setSeconds(addDays(start, 7), 0), 0);
        const { dp, datePicker } = await mountDatepicker({ modelValue: null, range: true, autoRange: 7 });

        const calendar = datePicker.findComponent(DpCalendar);

        calendar.vm.$emit('select-date', { value: start, current: true });
        await checkRange(calendar, datePicker, start, end);

        dp.unmount();
    });

    it('Should update time', async () => {
        const val = 15;
        const date = new Date();
        const { dp, datePicker } = await mountDatepicker({ modelValue: date });

        await validateSelectedTime(datePicker, val, val);

        dp.unmount();
    });

    it('Should update range time', async () => {
        const val = 15;
        const start = new Date();
        const end = addDays(new Date(), 7);
        const { dp, datePicker } = await mountDatepicker({ modelValue: [start, end], range: true });

        const timePicker = datePicker.findComponent(TimePicker);
        timePicker.vm.$emit('update:hours', [start.getHours(), val]);
        await timePicker.vm.$nextTick();
        timePicker.vm.$emit('update:minutes', [val, end.getMinutes()]);
        await timePicker.vm.$nextTick();

        expect(datePicker.vm.modelValue[1].getHours()).toEqual(val);
        expect(datePicker.vm.modelValue[0].getMinutes()).toEqual(val);
        dp.unmount();
    });

    it('Should set month', async () => {
        const month = 0;
        const { dp, datePicker } = await mountDatepicker({ modelValue: null, range: true });

        const monthYearInput = datePicker.findComponent(DpHeader);
        monthYearInput.vm.$emit('update-month-year', { month, year: getYear(new Date()) });

        expect(datePicker.vm.month(0)).toEqual(month);
        dp.unmount();
    });

    it('Should set year', async () => {
        const year = getYear(new Date());
        const { dp, datePicker } = await mountDatepicker({ modelValue: null, range: true });

        const monthYearInput = datePicker.findComponent(DpHeader);
        monthYearInput.vm.$emit('update-month-year', { month: getMonth(new Date()), year });

        expect(datePicker.vm.year(0)).toEqual(year);
        dp.unmount();
    });

    it('Should format with custom function', async () => {
        const selected = new Date();

        const { dp, datePicker } = await mountDatepicker({ modelValue: null, format });

        const calendar = datePicker.findComponent(DpCalendar);
        calendar.vm.$emit('select-date', { value: selected, current: true });
        await calendar.vm.$nextTick();
        await dp.vm.formatInputValue();

        expect(dp.vm.inputValue).toEqual(format(selected));
        dp.unmount();
    });

    it('Should display preview format from function', async () => {
        const selected = new Date();

        const { dp, menu, datePicker } = await mountDatepicker({ modelValue: null, previewFormat: format });

        const calendar = datePicker.findComponent(DpCalendar);
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
        const { dp, datePicker } = await mountDatepicker({
            modelValue: null,
            format: 'E',
            locale: 'ja-JP',
            formatLocale: ja,
        });

        const calendar = datePicker.findComponent(DpCalendar);
        calendar.vm.$emit('select-date', { value: selected, current: true });
        await calendar.vm.$nextTick();
        await dp.vm.formatInputValue();

        expect(dp.vm.inputValue).toEqual('木');
        dp.unmount();
    });

    it('Should select multiple dates', async () => {
        const dates = [new Date(), addDays(new Date(), 1), addDays(new Date(), 2), addDays(new Date(), 3)];
        const { datePicker } = await mountDatepicker({ modeValue: null, multiDates: true });
        const calendar = datePicker.findComponent(DpCalendar);

        const selectDates = async (): Promise<void> => {
            dates.forEach((date) => {
                calendar.vm.$emit('select-date', { value: setSeconds(date, 0), current: true });
            });
        };

        await selectDates();
        expect(calendar.emitted()['select-date']).toHaveLength(4);
    });

    it('Should preset range from preset-dates', async () => {
        const range = [new Date(), new Date()];
        const { dp, menu } = await mountDatepicker({
            modeValue: null,
            range: true,
            presetDates: [{ label: 'Today', range }],
        });

        menu.vm.presetDate(range);

        expect(dp.vm.internalModelValue).toHaveLength(2);
        expect(dp.vm.internalModelValue).toEqual(range);
        dp.unmount();
    });

    it('Should select week', async () => {
        const today = new Date();

        const { dp, datePicker } = await mountDatepicker({ modelValue: null, weekPicker: true });
        const weekRange = getWeekFromDate(today, '', 1);

        const calendar = datePicker.findComponent(DpCalendar);
        calendar.vm.$emit('select-date', { value: today, current: true });

        expect(dp.vm.internalModelValue).toHaveLength(2);
        expect(dp.vm.internalModelValue).toEqual(weekRange);
    });

    it('Should close month overlay on pressing keyboard Esc when escClose = true', async () => {
        const { datePicker } = await mountDatepicker({ inline: true, escClose: true });

        // trigger keypress Esc
        const overlayBefore = await openAndGetMonthOverlay(datePicker);
        await overlayBefore.trigger('keydown.esc');
        await datePicker.vm.$nextTick();

        const overlayAfter = datePicker.findAll('.dp__overlay');
        expect(overlayAfter).toHaveLength(0);
    });

    it('Should not close month overlay on pressing keyboard Esc when escClose = false', async () => {
        const { datePicker } = await mountDatepicker({ inline: true, escClose: false });

        // trigger keypress Esc
        const overlayBefore = await openAndGetMonthOverlay(datePicker);
        await overlayBefore.trigger('keydown.esc');

        const overlayAfter = datePicker.findAll('.dp__overlay');
        expect(overlayAfter).toHaveLength(1);
    });

    it('It should assign start date', async () => {
        const { datePicker } = await mountDatepicker({ startDate: startOfYear(new Date()) });

        expect(datePicker.vm.month(0)).toEqual(0);
    });

    it('It should assign start time', async () => {
        const { datePicker } = await mountDatepicker({ startTime: { hours: 10 } });
        expect(datePicker.vm.time.hours).toEqual(10);
    });

    it('Should assign empty time picker', async () => {
        const hours = getHours(new Date());
        const { menu } = await mountDatepicker({ timePicker: true });
        const timePicker = menu.findComponent(TimePickerSolo) as unknown as VueWrapper<{ time: { hours: number } }>;
        expect(timePicker.vm.time.hours).toEqual(hours);
    });

    it('Should get seconds value depending on the mode', async () => {
        const { datePicker } = await mountDatepicker({ enableSeconds: true });
        expect(datePicker.vm.time.seconds).toBeDefined();
    });

    it('Should handle next month/year on multi-calendars', async () => {
        const { datePicker } = await mountDatepicker({ multiCalendars: true, range: true });
        expect(datePicker.vm.month(0)).toEqual(getMonth(new Date()));
        expect(datePicker.vm.month(1)).toEqual(getMonth(addMonths(new Date(), 1)));
    });

    it('Should check min/max-range', async () => {
        const start = setMilliseconds(setSeconds(addDays(new Date(), 1), 0), 0);
        const end = addDays(setMilliseconds(setSeconds(addDays(start, 7), 0), 0), 5);
        const { dp, datePicker } = await mountDatepicker({ modelValue: null, range: true, maxRange: 3 });

        datePicker.vm.selectDate({ value: start, current: true });
        datePicker.vm.selectDate({ value: end, current: true });

        expect(dp.vm.internalModelValue).toHaveLength(1);

        dp.unmount();
    });

    it('Should get range with fixed date', async () => {
        const modelValue = [new Date(), addDays(new Date(), 3)];
        const { datePicker } = await mountDatepicker({ fixedStart: true, modelValue, range: true });

        const calendar = datePicker.findComponent(DpCalendar);
        calendar.vm.$emit('select-date', { value: addDays(new Date(), 5), current: true });
        await calendar.vm.$nextTick();

        expect(datePicker.vm.modelValue).toHaveLength(2);
    });

    it('Should auto change multi calendars', async () => {
        const modelValue = [addMonths(new Date(), 1), addMonths(new Date(), 2)];
        const { datePicker } = await mountDatepicker({ multiCalendars: true, modelValue, range: true });
        expect(datePicker.vm.month(0)).toEqual(getMonth(modelValue[0]));
        expect(datePicker.vm.month(1)).toEqual(getMonth(modelValue[1]));
    });

    it('Should handle flow', async () => {
        const flow = ['month', 'year', 'calendar'];
        const { menu, datePicker } = await mountDatepicker({ flow });
        await menu.vm.$nextTick();
        const monthPickerGrid = menu.findComponent(SelectionOverlay);

        await monthPickerGrid.find(`[data-test="Jan"]`).trigger('click');
        await nextTick();
        const yearPickerGrid = menu.findComponent(SelectionOverlay);

        await yearPickerGrid.find(`[data-test="${getYear(new Date())}"]`).trigger('click');
        await nextTick();

        expect(datePicker.vm.month(0)).toEqual(0);
        expect(datePicker.vm.year(0)).toEqual(getYear(new Date()));
    });

    it('Should do a proper map on auto-apply and model-auto', async () => {
        const date = resetDateTime(new Date());
        const { datePicker, dp } = await mountDatepicker({ autoApply: true, range: true, modelAuto: true });

        datePicker.vm.selectDate({ value: new Date(), current: true });
        await datePicker.vm.$nextTick();

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

        const { datePicker } = await mountDatepicker({ noDisabledRange: true, range: true, disabledDates });

        await selectRange(datePicker, start, end);

        expect(datePicker.vm.internalModelValue).toHaveLength(1);
        expect(resetDateTime(datePicker.vm.internalModelValue[0])).toEqual(resetDateTime(start));
    });

    it('Should not select date', async () => {
        const date = new Date();

        const { datePicker } = await mountDatepicker({ disabledDates: [date] });
        datePicker.vm.selectDate({ value: date, current: true });
        await datePicker.vm.$nextTick();

        expect(datePicker.vm.internalModelValue).toEqual(null);
    });

    it('Should programmatically change month year view', async () => {
        const { dp, datePicker } = await mountDatepicker();
        const month = 5;
        const year = 2040;
        dp.vm.setMonthYear({ month, year });
        await dp.vm.$nextTick();
        await datePicker.vm.$nextTick();

        expect(datePicker.vm.month(0)).toEqual(month);
        expect(datePicker.vm.year(0)).toEqual(year);
    });

    it('Should not change month year view on invalid value call', async () => {
        const { dp, datePicker } = await mountDatepicker();
        const date = new Date();

        dp.vm.setMonthYear({ month: undefined, year: 'rand' });
        await dp.vm.$nextTick();
        await datePicker.vm.$nextTick();

        expect(datePicker.vm.month(0)).toEqual(getMonth(date));
        expect(datePicker.vm.year(0)).toEqual(getYear(date));
    });

    it('Should disable times that are out of max time validation', async () => {
        const date = set(new Date(), { hours: 21 });
        const { menu } = await mountDatepicker({ maxTime: { hours: 21 }, modelValue: date });
        await menu.find(`[data-test="open-time-picker-btn"]`).trigger('click');
        await menu.vm.$nextTick();
        const timeInput = menu.findComponent(TimeInput);

        const incBtn = timeInput.find(`[data-test="hours-time-inc-btn-0"]`);

        expect(incBtn.classes()).toContain('dp__inc_dec_button_disabled');
    });

    it('Should disable times that are out of min time validation', async () => {
        const date = set(new Date(), { hours: 7 });
        const { menu } = await mountDatepicker({ minTime: { hours: 7 }, modelValue: date });
        await menu.find(`[data-test="open-time-picker-btn"]`).trigger('click');
        await menu.vm.$nextTick();
        const timeInput = menu.findComponent(TimeInput);

        const incBtn = timeInput.find(`[data-test="hours-time-dec-btn-0"]`);

        expect(incBtn.classes()).toContain('dp__inc_dec_button_disabled');
    });

    it('Should select multi dates with month picker mode', async () => {
        const { menu, dp } = await mountDatepicker({ modelValue: null, multiDates: true, monthPicker: true });
        const today = new Date();
        const months = [addMonths(today, 1), addMonths(today, 2), addMonths(today, 3)];
        const monthPicker = menu.findComponent(MonthPicker) as unknown as VueWrapper<{
            selectMonth: (month: number, instance: number) => void;
        }>;
        for (const date of months) {
            monthPicker.vm.selectMonth(getMonth(date), 0);
            await monthPicker.vm.$nextTick();
        }
        await dp.vm.$nextTick();
        dp.vm.selectDate();
        await dp.vm.$nextTick();

        const emitted = (dp.emitted()['update:model-value'][0] as any)[0];
        expect(emitted).toHaveLength(3);
        const lastSelection = emitted[2];
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
        const { datePicker, menu, dp } = await mountDatepicker({ modelValue: new Date(), disabledTimes });
        await datePicker.find(`[data-test="open-time-picker-btn"]`).trigger('click');
        await datePicker.vm.$nextTick();

        await validateSelectedTime(datePicker, hours, minutes);

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
        const { datePicker } = await mountDatepicker({ calendar: mapDates });

        const calendar = datePicker.findComponent(DpCalendar) as unknown as VueWrapper<{ calendarWeeks: any }>;

        expect(calendar.vm.calendarWeeks).toHaveLength(1);
        expect(calendar.html().includes('custom-class')).toBeTruthy();
    });

    it('Should get calendar days', async () => {
        // const { getCalendarDays } = useUtils({ weekStart: 1, hideOffsetDates: false } as AllPropsType);
        const { datePicker } = await mountDatepicker({
            weekStart: 1,
        });

        const days = datePicker.vm.getCalendarDays(0, 2021);

        expect(days).toHaveLength(5);
        expect(days[0].days).toHaveLength(7);
        expect(days[0].days[0].text).toEqual(28);
    });

    it('Should get calendar days starting from sunday', async () => {
        const { datePicker } = await mountDatepicker({
            weekStart: 0,
            hideOffsetDates: false,
        });

        const days = datePicker.vm.getCalendarDays(0, 2021);
        expect(days).toHaveLength(6);
        expect(days[0].days[0].text).toEqual(27);
    });

    it('Should get calendar days with hidden offset dats', async () => {
        const { datePicker } = await mountDatepicker({
            weekStart: 1,
            hideOffsetDates: true,
        });

        const days = datePicker.vm.getCalendarDays(0, 2021);

        expect(days).toHaveLength(5);
        expect(days[0].days[0].text).toEqual('');
    });

    describe('getCalendar should get the correct weeks depending on six week mode', () => {
        const getCalendarDaysWithSixWeekMode = async (sixWeeks: boolean | SixWeekMode) => {
            const { datePicker } = await mountDatepicker({
                weekStart: 1,
                hideOffsetDates: false,
                sixWeeks,
            });

            const getCalendarDays = datePicker.vm.getCalendarDays;

            const jan = getCalendarDays(0, 2021); // ends on a sunday
            const feb = getCalendarDays(1, 2021); // spans exactly 4 weeks from monday to sunday
            const mar = getCalendarDays(2, 2021); // starts on a monday
            const apr = getCalendarDays(3, 2021); // has five weeks with more days in the end week
            const may = getCalendarDays(4, 2021); // has six weeks
            const jun = getCalendarDays(5, 2021); // has five weeks with more days in the start week
            return { jan, feb, mar, apr, may, jun };
        };

        const ValidateAprToJun = (apr: ICalendarDate[], may: ICalendarDate[], jun: ICalendarDate[]) => {
            expect(apr[0].days[0].text).toEqual(29);
            expect(apr[5].days[6].text).toEqual(9);
            expect(may).toHaveLength(6);
            expect(may[0].days[0].text).toEqual(26);
            expect(may[5].days[6].text).toEqual(6);
            expect(jun).toHaveLength(6);
        };

        const validateFairAndCenter = (months: { [key: string]: ICalendarDate[] }) => {
            const { jan, feb, mar, apr, may, jun } = months;
            expect(jan).toHaveLength(6);
            expect(jan[0].days[0].text).toEqual(28);
            expect(jan[5].days[6].text).toEqual(7);
            expect(feb).toHaveLength(6);
            expect(feb[0].days[0].text).toEqual(25);
            expect(feb[5].days[6].text).toEqual(7);
            expect(mar).toHaveLength(6);
            expect(mar[0].days[0].text).toEqual(22);
            expect(mar[5].days[6].text).toEqual(4);
            expect(apr).toHaveLength(6);
            ValidateAprToJun(apr, may, jun);
        };

        it('In `false` mode, it should get only weeks that contain dates of the queried month', async () => {
            const { jan, feb, mar, apr, may, jun } = await getCalendarDaysWithSixWeekMode(false);

            expect(jan).toHaveLength(5);
            expect(jan[0].days[0].text).toEqual(28);
            expect(jan[4].days[6].text).toEqual(31);
            expect(feb).toHaveLength(4);
            expect(feb[0].days[0].text).toEqual(1);
            expect(feb[3].days[6].text).toEqual(28);
            expect(mar).toHaveLength(5);
            expect(mar[0].days[0].text).toEqual(1);
            expect(mar[4].days[6].text).toEqual(4);
            expect(apr).toHaveLength(5);
            expect(apr[0].days[0].text).toEqual(29);
            expect(apr[4].days[6].text).toEqual(2);
            expect(may).toHaveLength(6);
            expect(may[0].days[0].text).toEqual(26);
            expect(may[5].days[6].text).toEqual(6);
            expect(jun).toHaveLength(5);
            expect(jun[0].days[0].text).toEqual(31);
            expect(jun[4].days[6].text).toEqual(4);
        });

        it('In `true` or `append` mode, it should return six weeks, padded to the end of the calendar', async () => {
            const appendResult = await getCalendarDaysWithSixWeekMode('append');

            expect(await getCalendarDaysWithSixWeekMode(true)).toEqual(appendResult);

            const { jan, feb, mar, apr, may, jun } = appendResult;

            expect(jan).toHaveLength(6);
            expect(jan[0].days[0].text).toEqual(28);
            expect(jan[5].days[6].text).toEqual(7);
            expect(feb).toHaveLength(6);
            expect(feb[0].days[0].text).toEqual(1);
            expect(feb[5].days[6].text).toEqual(14);
            expect(mar).toHaveLength(6);
            expect(mar[0].days[0].text).toEqual(1);
            expect(mar[5].days[6].text).toEqual(11);
            ValidateAprToJun(apr, may, jun);
            expect(jun[0].days[0].text).toEqual(31);
            expect(jun[5].days[6].text).toEqual(11);
        });

        it('In `prepend` mode, it should return six weeks, padded to the start of the calendar', async () => {
            const { jan, feb, mar, apr, may, jun } = await getCalendarDaysWithSixWeekMode('prepend');

            expect(jan).toHaveLength(6);
            expect(jan[0].days[0].text).toEqual(21);
            expect(jan[5].days[6].text).toEqual(31);
            expect(feb).toHaveLength(6);
            expect(feb[0].days[0].text).toEqual(18);
            expect(feb[5].days[6].text).toEqual(28);
            expect(mar).toHaveLength(6);
            expect(mar[0].days[0].text).toEqual(22);
            expect(mar[5].days[6].text).toEqual(4);
            expect(apr).toHaveLength(6);
            expect(apr[0].days[0].text).toEqual(22);
            expect(apr[5].days[6].text).toEqual(2);
            expect(may).toHaveLength(6);
            expect(may[0].days[0].text).toEqual(26);
            expect(may[5].days[6].text).toEqual(6);
            expect(jun).toHaveLength(6);
            expect(jun[0].days[0].text).toEqual(24);
            expect(jun[5].days[6].text).toEqual(4);
        });

        it('In `center` mode, it should return six weeks, padded so that months that start with a full week get a week of leading offset', async () => {
            const months = await getCalendarDaysWithSixWeekMode('center');

            validateFairAndCenter(months);
            expect(months.jun[0].days[0].text).toEqual(31);
            expect(months.jun[5].days[6].text).toEqual(11);
        });

        it('In `fair` mode, it should return six weeks, padded to start and end of the month depending on which has the smaller offset in the partial week', async () => {
            const months = await getCalendarDaysWithSixWeekMode('fair');

            validateFairAndCenter(months);
            expect(months.jun[0].days[0].text).toEqual(24);
            expect(months.jun[5].days[6].text).toEqual(4);
        });
    });
});
