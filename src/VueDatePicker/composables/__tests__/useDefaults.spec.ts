import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useDefaults } from '@/composables/useDefaults';
import { defaultTransitions, defaultInputAttrs } from '@/constants/defaults.ts';
// Helper to build a minimal props object with overrides
const buildProps = (overrides: Record<string, any> = {}): any => ({
    // defaults aligned with propDefaults in constants but only what's needed
    multiCalendars: undefined,
    transitions: true,
    textInput: false,
    inline: false,
    config: undefined,
    highlight: undefined,
    weekNumbers: 'local',
    timezone: undefined,
    multiDates: false,
    minDate: undefined,
    maxDate: undefined,
    disabledDates: [],
    allowedDates: [],
    markers: [],
    range: false,
    ui: {},
    formats: undefined,
    teleport: undefined,
    timeConfig: {},
    flow: undefined,
    inputAttrs: undefined,
    startTime: undefined,
    monthPicker: false,
    yearPicker: false,
    quarterPicker: false,
    weekPicker: false,
    timePicker: false,
    ...overrides,
});

describe('useDefaults', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date('2030-01-02T03:04:05'));
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should compute default input/preview formats with time by default', () => {
        const d = useDefaults(buildProps());
        expect(d.formats.value.input).toBe('MM/dd/yyyy, HH:mm');
        expect(d.formats.value.preview).toBe('MM/dd/yyyy, HH:mm');
    });

    it('should compute time-only pattern when timePicker is enabled', () => {
        const d = useDefaults(buildProps({ timePicker: true }));
        expect(d.formats.value.input).toBe('HH:mm');
        expect(d.textInput.value.format).toBe('HH:mm');
    });

    it('should include seconds and use 12h when configured', () => {
        const d = useDefaults(buildProps({ timePicker: true, timeConfig: { enableSeconds: true, is24: false } }));
        expect(d.formats.value.input).toBe('hh:mm:ss aa');
    });

    it('should compute startTime for single and range modes honoring seconds flag', () => {
        // Single start time with seconds disabled -> seconds should be 0
        const single = useDefaults(
            buildProps({ timeConfig: { enableSeconds: false, startTime: { hours: 8, minutes: 9 } } }),
        );
        expect(single.startTime.value).toEqual({ hours: 8, minutes: 9, seconds: 0 });

        // Range start time with seconds enabled -> seconds from current time (fake clock = 5)
        const range = useDefaults(
            buildProps({
                range: true,

                timeConfig: {
                    enableSeconds: true,
                    startTime: [
                        { hours: 1, minutes: 2 },
                        { hours: 3, minutes: 4 },
                    ],
                },
            }),
        );
        expect(Array.isArray(range.startTime.value)).toBe(true);
        const arr = range.startTime.value as any[];
        expect(arr[0]).toEqual({ hours: 1, minutes: 2, seconds: 5 });
        expect(arr[1]).toEqual({ hours: 3, minutes: 4, seconds: 5 });
    });

    it('should compute multiCalendars count for boolean, number and object', () => {
        expect(useDefaults(buildProps({ multiCalendars: true })).multiCalendars.value.count).toBe(2);
        expect(useDefaults(buildProps({ multiCalendars: 3 })).multiCalendars.value.count).toBe(3);
        const mc = useDefaults(buildProps({ multiCalendars: { count: 5, solo: true } })).multiCalendars.value;
        expect(mc.count).toBe(5);
        expect(mc.solo).toBe(true);
    });

    it('should merge transitions for boolean and object', () => {
        expect(useDefaults(buildProps({ transitions: false })).transitions.value).toBe(false);
        expect(useDefaults(buildProps({ transitions: true })).transitions.value).toEqual(defaultTransitions);
        const custom = useDefaults(buildProps({ transitions: { open: 'x-open' } })).transitions.value as any;
        expect(custom.open).toBe('x-open');
        // keeps default keys
        expect(Object.keys(custom)).toEqual(Object.keys(defaultTransitions));
    });

    it('should configure textInput for boolean and object inputs', () => {
        const t1 = useDefaults(buildProps({ textInput: true })).textInput.value as any;
        expect(t1.enabled).toBe(true);
        expect(t1.format).toBe('MM/dd/yyyy, HH:mm');
        expect(t1.pattern).toBe('MM/dd/yyyy, HH:mm');

        const t2 = useDefaults(buildProps({ textInput: { openMenu: 'always' } })).textInput.value as any;
        expect(t2.enabled).toBe(true);
        expect(t2.openMenu).toBe('always');
    });

    it('should set weekNumbers based on primitive and object', () => {
        const w1 = useDefaults(buildProps({ weekNumbers: 'iso' })).weekNumbers.value;
        expect(w1.type).toBe('iso');
        expect(w1.hideOnOffsetDates).toBe(false);

        const w2 = useDefaults(buildProps({ weekNumbers: { type: 'local', hideOnOffsetDates: true } })).weekNumbers
            .value;
        expect(w2.type).toBe('local');
        expect(w2.hideOnOffsetDates).toBe(true);
    });

    it('should compute timezone config for undefined, string and object forms', () => {
        const tz1 = useDefaults(buildProps()).tz.value as any;
        expect(tz1.timezone).toBeUndefined();
        expect(tz1.exactMatch).toBe(false);

        const tz2 = useDefaults(buildProps({ timezone: 'UTC' })).tz.value as any;
        expect(tz2.timezone).toBe('UTC');
        expect(tz2.convertModel).toBe(true);
        expect(tz2.exactMatch).toBe(false);

        const tz3 = useDefaults(
            buildProps({ timezone: { timezone: 'Europe/Rome', exactMatch: true, convertModel: false } }),
        ).tz.value as any;
        expect(tz3.timezone).toBe('Europe/Rome');
        expect(tz3.exactMatch).toBe(true);
        expect(tz3.convertModel).toBe(false);
    });

    it('should compute multiDates options for boolean and object', () => {
        const m1 = useDefaults(buildProps({ multiDates: true })).multiDates.value as any;
        expect(m1.enabled).toBe(true);
        expect(m1.dragSelect).toBe(true);
        expect(m1.limit).toBeNull();

        const m2 = useDefaults(buildProps({ multiDates: { limit: '2', dragSelect: false } })).multiDates.value as any;
        expect(m2.enabled).toBe(true);
        expect(m2.dragSelect).toBe(false);
        expect(m2.limit).toBe(2);
    });

    it('should map safeDates arrays to Maps and keep objects intact', () => {
        const d1 = new Date('2024-01-01');
        const d2 = new Date('2024-02-02');
        const allowed = [new Date('2024-03-03')];

        const sd = useDefaults(
            buildProps({ disabledDates: [d1, d2], allowedDates: allowed, markers: [{ date: d1, type: 'dot' }] }),
        ).safeDates.value as any;

        expect(sd.minDate).toBeNull();
        expect(sd.maxDate).toBeNull();
        // disabledDates should become a Map
        expect(sd.disabledDates instanceof Map).toBe(true);
        expect(sd.disabledDates.size).toBe(2);
        // allowedDates should become a Map
        expect(sd.allowedDates instanceof Map).toBe(true);
        expect(sd.allowedDates.size).toBe(1);
        // markers should become a Map
        expect(sd.markers instanceof Map).toBe(true);
        expect(sd.markers.size).toBe(1);
    });

    it('should compute teleport for boolean and object', () => {
        const t1 = useDefaults(buildProps({ teleport: false })).teleport.value as any;
        expect(t1.enabled).toBe(false);
        expect(t1.target).toBe('body');

        const t2 = useDefaults(buildProps({ teleport: true })).teleport.value as any;
        expect(t2.enabled).toBe(true);
        expect(t2.target).toBe('body');

        const t3 = useDefaults(buildProps({ teleport: { target: '#modals', center: true } })).teleport.value as any;
        expect(t3.enabled).toBe(true);
        expect(t3.target).toBe('#modals');
        expect(t3.center).toBe(true);
    });

    it('should merge inputAttrs with defaults', () => {
        const i1 = useDefaults(buildProps()).inputAttrs.value as any;
        expect(i1).toEqual(defaultInputAttrs);
        const i2 = useDefaults(buildProps({ inputAttrs: { name: 'dp', clearable: false } })).inputAttrs.value as any;
        expect(i2.name).toBe('dp');
        expect(i2.clearable).toBe(false);
    });
});
