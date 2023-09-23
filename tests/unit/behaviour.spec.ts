import { describe, expect, it } from 'vitest';
import {
    add,
    addDays,
    addHours,
    addMinutes,
    addMonths,
    format,
    getHours,
    getMinutes,
    getMonth,
    getYear,
    set,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz/esm';

import { resetDateTime } from '@/utils/date-utils';

import { getMonthName, openMenu, reOpenMenu } from '../utils';
import { FlowStep } from '@/constants';
import type { TimeModel, TimeType } from '@/interfaces';
import type { VueWrapper } from '@vue/test-utils';

describe('It should validate various picker scenarios', () => {
    it('Should dynamically disable times', async () => {
        const modelValue = set(new Date(), { hours: 12, minutes: 0, seconds: 0, milliseconds: 0 });
        const disabledTimes = [
            { hours: 14, minutes: 15 },
            { hours: 14, minutes: 20 },
            { hours: 15, minutes: '*' },
        ];
        const dp = await openMenu({ modelValue, disabledTimes });

        const setHours = async (val: number) => {
            await dp.find(`[data-test="open-time-picker-btn"]`).trigger('click');

            await dp.find(`[data-test="hours-toggle-overlay-btn-0"]`).trigger('click');
            await dp.find(`[data-test="${val}"]`).trigger('click');
        };

        await setHours(14);

        await dp.find(`[data-test="minutes-toggle-overlay-btn-0"]`).trigger('click');

        await dp.vm.$nextTick();
        const el = dp.find(`[data-test="15"]`);

        expect(el.attributes()['aria-disabled']).toEqual('true');

        for (let i = 0; i < 20; i++) {
            await dp.find(`[data-test="minutes-time-inc-btn-0"]`).trigger('click');
        }

        const minutesOverlayBtn = dp.find(`[data-test="minutes-toggle-overlay-btn-0"]`);
        expect(minutesOverlayBtn.classes()).toContain('dp--time-invalid');

        await setHours(15);
        const hoursOverlayBtn = dp.find(`[data-test="hours-toggle-overlay-btn-0"]`);
        expect(hoursOverlayBtn.text()).toEqual('14');
        dp.unmount();
    });

    it('Should auto apply date in the flow mode (#465)', async () => {
        const dp = await openMenu({ flow: ['month', 'year', 'calendar'], autoApply: true });
        const date = add(new Date(), { months: 1, years: 1 });

        const year = getYear(date);

        const monthName = getMonthName(date);

        await dp.find(`[data-test="${monthName}"]`).trigger('click');
        await dp.find(`[data-test="${year}"]`).trigger('click');
        const dateVal = resetDateTime(date);
        await dp.find(`[data-test="${dateVal}"]`).trigger('click');
        const emitted = dp.emitted();
        expect(emitted).toHaveProperty('update:model-value', [[set(date, { seconds: 0, milliseconds: 0 })]]);
    });

    it('Should not switch calendars in 1 month range with multi-calendars enabled (#472)', async () => {
        const dp = await openMenu({ multiCalendars: true, range: true });
        const firstDate = resetDateTime(new Date());
        const secondDate = resetDateTime(set(firstDate, { month: getMonth(addMonths(firstDate, 1)), date: 15 }));

        const firstDateEl = dp.find(`[data-test="${firstDate}"]`);
        const secondDateEl = dp.find(`[data-test="${secondDate}"]`);

        await firstDateEl.trigger('click');
        await secondDateEl.trigger('click');

        const innerStartCell = firstDateEl.find('.dp__cell_inner');

        const innerEndCell = secondDateEl.find('.dp__cell_inner');

        expect(innerStartCell.classes()).toContain('dp__range_start');
        expect(innerEndCell.classes()).toContain('dp__range_end');
    });

    it('Should not enable partial range with text-input on time-picker (#505)', async () => {
        const dp = await openMenu({ textInput: true, timePicker: true, range: true });
        const today = new Date();
        const hours = getHours(today);
        const minutes = getMinutes(today);

        const singleTime = `${hours}:${minutes}`;

        const input = dp.find('input');
        await input.setValue(singleTime);

        expect(input.element.value).toBe(singleTime);

        await input.trigger('keydown.enter');

        expect(dp.emitted()).toHaveProperty('invalid-select', [
            [[set(new Date(), { hours, minutes, seconds: 0, milliseconds: 0 })]],
        ]);
    });

    it('Should emit regular and zoned date value', async () => {
        const timezone = 'UTC';
        const dp = await openMenu({ emitTimezone: timezone });
        const today = new Date();
        const value = set(today, { seconds: 0, milliseconds: 0 });

        await dp.find(`[data-test="${resetDateTime(today)}"]`).trigger('click');
        await dp.find(`[data-test="select-button"]`).trigger('click');

        const emitted = dp.emitted();

        expect(emitted).toHaveProperty('update:model-value', [[value]]);
        expect(emitted).toHaveProperty('update:model-timezone-value', [[utcToZonedTime(value, timezone)]]);
    });

    it('Should set predefined value in the time-picker and emit updated value', async () => {
        const today = new Date();
        const modelValue = { hours: getHours(today), minutes: getMinutes(today), seconds: 0 };
        const dp = await openMenu({ timePicker: true, modelValue });

        const hours = dp.find(`[data-test="hours-toggle-overlay-btn-0"]`);
        const minutes = dp.find(`[data-test="minutes-toggle-overlay-btn-0"]`);
        const padZero = (val: number) => (val < 10 ? `0${val}` : val);

        expect(hours.text()).toEqual(`${padZero(modelValue.hours)}`);
        expect(minutes.text()).toEqual(`${padZero(modelValue.minutes)}`);

        await dp.find(`[data-test="hours-time-inc-btn-0"]`).trigger('click');
        await dp.find(`[data-test="minutes-time-inc-btn-0"]`).trigger('click');
        await dp.find(`[data-test="select-button"]`).trigger('click');

        const emitted = dp.emitted();
        expect(emitted).toHaveProperty('update:model-value', [
            [{ hours: getHours(addHours(today, 1)), minutes: getMinutes(addMinutes(today, 1)), seconds: 0 }],
        ]);
        dp.unmount();
    });

    it('Should dynamically update disabled dates when the prop is updated (#528)', async () => {
        const today = new Date();
        const disabledDates = [addDays(today, 1)];
        const dp = await openMenu({ disabledDates });

        const getCellClasses = (date: Date) => {
            const el = dp.find(`[data-test="${date}"]`);
            const innerCell = el.find('.dp__cell_inner');

            return innerCell.classes();
        };

        expect(getCellClasses(resetDateTime(disabledDates[0]))).toContain('dp__cell_disabled');

        const updatedDisabledDates = [...disabledDates, addDays(today, 2)];

        await dp.setProps({ disabledDates: updatedDisabledDates });
        expect(getCellClasses(resetDateTime(updatedDisabledDates[1]))).toContain('dp__cell_disabled');
        dp.unmount();
    });

    it('Should auto-apply values in year-picker (#529)', async () => {
        const dp = await openMenu({ yearPicker: true, autoApply: true });

        const year = getYear(new Date());

        await dp.find(`[data-test="${year}"]`).trigger('click');

        expect(dp.emitted()).toHaveProperty('update:model-value', [[year]]);

        dp.unmount();
    });

    it('Should disable date select on invalid times in range mode with different start/end sets', async () => {
        const disabledTimes = [[{ hours: 12, minutes: '*' }], [{ hours: 15, minutes: 20 }]];
        const modelValue = [set(new Date(), { hours: 11 }), set(new Date(), { hours: 15, minutes: 19 })];
        const dp = await openMenu({ disabledTimes, range: true, modelValue });

        await dp.find(`[data-test="open-time-picker-btn"]`).trigger('click');
        await dp.find(`[data-test="hours-time-inc-btn-0"]`).trigger('click');

        const selectBtn = dp.find(`[data-test="select-button"]`);
        expect(selectBtn.attributes()).toHaveProperty('disabled');

        await dp.find(`[data-test="hours-time-inc-btn-0"]`).trigger('click');
        expect(selectBtn.attributes().disabled).toBeFalsy();

        await dp.find(`[data-test="minutes-time-inc-btn-1"]`).trigger('click');
        expect(selectBtn.attributes()).toHaveProperty('disabled');

        await dp.find(`[data-test="minutes-time-inc-btn-1"]`).trigger('click');
        expect(selectBtn.attributes().disabled).toBeFalsy();
        dp.unmount();
    });

    it('Should properly set start time value on internal model value in time-picker mode (#535)', async () => {
        const startTime = { hours: 0, minutes: 0, seconds: 0 };
        const dp = await openMenu({ timePicker: true, startTime });

        const validate = async (time: TimeModel | TimeModel[], instance: VueWrapper) => {
            await instance.find(`[data-test="select-button"]`).trigger('click');
            expect(instance.emitted()).toHaveProperty('update:model-value', [[time]]);
            instance.unmount();
        };

        await validate(startTime, dp);

        const startTimes = [startTime, { ...startTime, hours: 1 }];
        const dpRange = await openMenu({ timePicker: true, range: true, startTime: startTimes });

        await validate(startTimes, dpRange);
        dp.unmount();
    });

    it('Should correctly display months in multi-calendars based on the given range (#540)', async () => {
        const today = new Date();
        const sameViewRange = [today, addMonths(today, 1)];
        const diffViewRange = [today, addMonths(today, 3)];

        const dp = await openMenu({ modelValue: sameViewRange, multiCalendars: true, range: true });

        const validateMonthAndYearValues = (index: number, date: Date) => {
            const month = dp.find(`[data-test="month-toggle-overlay-${index}"]`);
            const year = dp.find(`[data-test="year-toggle-overlay-${index}"]`);
            expect(month.text()).toEqual(getMonthName(date));
            expect(+year.text()).toEqual(getYear(date));
        };

        validateMonthAndYearValues(0, sameViewRange[0]);
        validateMonthAndYearValues(1, sameViewRange[1]);

        await reOpenMenu(dp, { modelValue: diffViewRange });

        validateMonthAndYearValues(0, diffViewRange[1]);

        await reOpenMenu(dp, { modelValue: diffViewRange, multiCalendars: { solo: true } });

        validateMonthAndYearValues(0, diffViewRange[0]);
        validateMonthAndYearValues(1, diffViewRange[1]);
        dp.unmount();
    });

    it('Should not break flow on changing months and years when calendar is first step (#553)', async () => {
        const flow = [FlowStep.calendar, FlowStep.time];
        const dp = await openMenu({ flow });
        const today = resetDateTime(new Date());
        const nextMonth = addMonths(today, 1);

        await dp.find(`[data-test="${today}"]`).trigger('click');

        expect(dp.html()).toContain('dp__overlay');

        await reOpenMenu(dp);

        await dp.find(`[data-test="month-toggle-overlay-0"]`).trigger('click');
        await dp.find(`[data-test="${getMonthName(nextMonth)}"]`).trigger('click');

        const cell = dp.find(`[data-test="${nextMonth}"]`);

        expect(cell.html()).toBeTruthy();
        dp.unmount();
    });

    it('Should enable or disable auto range selecting with no-disabled-range prop (#555)', async () => {
        const today = set(new Date(), { seconds: 0, milliseconds: 0 });
        const disabledDates = [addDays(today, 1), addDays(today, 2)];
        const dp = await openMenu({ disabledDates, noDisabledRange: true, range: true, autoRange: 5 });

        const selectAutoRange = async () => {
            await dp.find(`[data-test="${resetDateTime(today)}"]`).trigger('click');
            await dp.find(`[data-test="select-button"]`).trigger('click');
        };

        await selectAutoRange();

        expect(dp.emitted()).toHaveProperty('invalid-select');

        await reOpenMenu(dp, { noDisabledRange: false });

        await selectAutoRange();

        expect(dp.emitted()).toHaveProperty('update:model-value', [[[today, addDays(today, 5)]]]);
        dp.unmount();
    });

    it('Should emit invalid-select when auto-apply is enabled and min/max range is validated (#563)', async () => {
        const today = resetDateTime(set(new Date(), { date: 1 }));
        const secondDate = addDays(today, 15);

        const dp = await openMenu({ maxRange: 10, range: true, autoApply: true });

        const selectRange = async () => {
            await dp.find(`[data-test="${today}"]`).trigger('click');
            await dp.find(`[data-test="${secondDate}"]`).trigger('click');
        };

        await selectRange();

        expect(dp.emitted()).toHaveProperty('invalid-select', [[secondDate]]);
        dp.unmount();
    });

    it('Should emit update-month-year in month-picker mode (#564)', async () => {
        const today = new Date();
        const dp = await openMenu({ monthPicker: true });

        await dp.find(`[data-test="${getMonthName(today)}"]`).trigger('click');

        expect(dp.emitted()).toHaveProperty('update-month-year', [
            [{ instance: 0, year: getYear(today), month: getMonth(today) }],
        ]);
        dp.unmount();
    });

    it('Should ignore format function for custom model-type (#582)', async () => {
        const today = resetDateTime(new Date());
        const formatFn = (date: Date | Date[]) => {
            return format(date as Date, 'dd.MM.yyyy');
        };

        const dp = await openMenu({ modelType: 'dd-MM-yyyy', format: formatFn });
        await dp.find(`[data-test="${today}"]`).trigger('click');
        await dp.find(`[data-test="select-button"]`).trigger('click');

        expect(dp.emitted()).toHaveProperty('update:model-value', [[format(today, 'dd-MM-yyyy')]]);
        dp.unmount();
    });

    it('Should display disabled values for time range validation', async () => {
        const dp = await openMenu({ timePicker: true, range: true });

        const verifyArrow = async (type: TimeType, order: number, btn: string) => {
            const arrowBtn = dp.find(`[data-test="${type}-time-${btn}-btn-${order}"]`);
            await arrowBtn.trigger('mouseover');
            expect(arrowBtn.classes()).toContain('dp__inc_dec_button_disabled');
        };

        await verifyArrow('hours', 0, 'inc');
        await verifyArrow('minutes', 0, 'inc');
        await verifyArrow('hours', 1, 'dec');
        await verifyArrow('minutes', 1, 'dec');

        dp.unmount();
    });
});
