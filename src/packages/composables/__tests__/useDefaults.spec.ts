import { describe, expect, it } from 'vitest';
import { getHours } from 'date-fns';
import { useDefaults } from '@packages/composables/useDefaults';
import { PICKER_MODE } from '@packages/constants';
import type { Time } from '@packages/types';

describe('useDefaults', () => {
    it('Should get default text input option', () => {
        const { getDefaultTextInputOptions } = useDefaults();

        const disabledOptions = getDefaultTextInputOptions(false);
        expect(disabledOptions).toHaveProperty('enabled', false);

        const enabledOptions = getDefaultTextInputOptions(true);
        expect(enabledOptions).toHaveProperty('enabled', true);

        const mergedOptions = getDefaultTextInputOptions({ enterSubmit: false, tabSubmit: false });
        expect(mergedOptions).toHaveProperty('enterSubmit', false);
        expect(mergedOptions).toHaveProperty('tabSubmit', false);
    });

    it('Should get default pattern', () => {
        const { getDefaultPattern } = useDefaults();

        const pattern = getDefaultPattern(PICKER_MODE.DATE_PICKER, undefined, { is24: true }, undefined);
        expect(pattern).toEqual('MM/dd/yyyy, HH:mm');

        const withoutTimePattern = getDefaultPattern(PICKER_MODE.DATE_PICKER, undefined, false, undefined);
        expect(withoutTimePattern).toEqual('MM/dd/yyyy');

        const customPattern = getDefaultPattern(PICKER_MODE.DATE_PICKER, 'dd/yyyy', { is24: true }, undefined);
        expect(customPattern).toEqual('dd/yyyy');

        const defaultedPattern = getDefaultPattern(PICKER_MODE.DATE_PICKER, () => '', { is24: true }, undefined);
        expect(defaultedPattern).toEqual('MM/dd/yyyy, HH:mm');

        const monthPickerFormat = getDefaultPattern(PICKER_MODE.MONTH_PICKER, undefined, true, undefined);
        expect(monthPickerFormat).toEqual('MM/yyyy');

        const yearPickerFormat = getDefaultPattern(PICKER_MODE.YEAR_PICKER, undefined, true, undefined);
        expect(yearPickerFormat).toEqual('yyyy');

        const weekPickerFormat = getDefaultPattern(PICKER_MODE.WEEK_PICKER, undefined, true, undefined);
        expect(weekPickerFormat).toEqual('ww-RR');

        const weekPickerFormatIso = getDefaultPattern(PICKER_MODE.WEEK_PICKER, undefined, true, { type: 'iso' });
        expect(weekPickerFormatIso).toEqual('II-RR');

        const quarterPickerFormat = getDefaultPattern(PICKER_MODE.QUARTER_PICKER, undefined, true, undefined);
        expect(quarterPickerFormat).toEqual('QQQ/yyyy');

        const timePickerFormat = getDefaultPattern(PICKER_MODE.TIME_PICKER, undefined, true, undefined);
        expect(timePickerFormat).toEqual('HH:mm');

        const timePickerSeconds = getDefaultPattern(
            PICKER_MODE.TIME_PICKER,
            undefined,
            { enableSeconds: true },
            undefined,
        );
        expect(timePickerSeconds).toEqual('HH:mm:ss');

        const timePickerAmPm = getDefaultPattern(PICKER_MODE.TIME_PICKER, undefined, { is24: false }, undefined);
        expect(timePickerAmPm).toEqual('hh:mm aa');

        const timePickerNoMin = getDefaultPattern(
            PICKER_MODE.TIME_PICKER,
            undefined,
            { enableMinutes: false },
            undefined,
        );

        expect(timePickerNoMin).toEqual('HH');
    });

    it('Should get default start time', () => {
        const { getDefaultStartTime } = useDefaults();

        const time = getDefaultStartTime(false, { startTime: { hours: 1, minutes: 2 } });

        const currentHours = getHours(new Date());

        expect(time).toHaveProperty('hours', 1);
        expect(time).toHaveProperty('minutes', 2);

        const minutesOnly = getDefaultStartTime(false, { startTime: { minutes: 15 } });

        expect(minutesOnly).toHaveProperty('hours', currentHours);
        expect(minutesOnly).toHaveProperty('minutes', 15);

        const rangedStartTime = getDefaultStartTime(true, { startTime: [{ hours: 1 }, { hours: 2 }] });
        expect(rangedStartTime).toHaveLength(2);
        expect((rangedStartTime as Array<Time>)[0]).toHaveProperty('hours', 1);
        expect((rangedStartTime as Array<Time>)[1]).toHaveProperty('hours', 2);
    });

    it('Should get default filters', () => {
        const { getDefaultFilters } = useDefaults();

        const filters = getDefaultFilters(undefined);

        expect(filters).toHaveProperty('months', []);
        expect(filters).toHaveProperty('years', []);

        const filterMonths = getDefaultFilters({ months: [0, 1] });
        expect(filterMonths).toHaveProperty('months', [0, 1]);
    });
});
