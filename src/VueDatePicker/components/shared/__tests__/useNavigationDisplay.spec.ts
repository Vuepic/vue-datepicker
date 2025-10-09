import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ref, computed } from 'vue';
import { useNavigationDisplay } from '../useNavigationDisplay';

vi.mock('@/composables/useContext.ts', () => {
    const rootProps: any = {
        hideNavigation: [],
    };

    const multiCalendarsRef = ref({ count: 0, solo: false });

    const defaults: any = {
        multiCalendars: computed(() => multiCalendarsRef.value),
    };

    return {
        useContext: () => ({
            rootProps,
            defaults,
            __mocks: { multiCalendarsRef },
        }),
    };
});

describe('useNavigationDisplay', () => {
    let ctx: any;

    beforeEach(async () => {
        vi.clearAllMocks();
        const { useContext } = await import('@/composables/useContext.ts');
        ctx = useContext();
        ctx.rootProps.hideNavigation = [];
        ctx.__mocks.multiCalendarsRef.value = { count: 0, solo: false };
    });

    it('should initialize with default values', () => {
        const navigation = useNavigationDisplay();

        expect(navigation.hideNavigationButtons).toBeDefined();
        expect(navigation.showLeftIcon).toBeDefined();
        expect(navigation.showRightIcon).toBeDefined();
    });

    it('should return false when hideNavigation does not include key', () => {
        ctx.rootProps.hideNavigation = [];
        const navigation = useNavigationDisplay();

        expect(navigation.hideNavigationButtons.value('month')).toBe(false);
        expect(navigation.hideNavigationButtons.value('year')).toBe(false);
    });

    it('should return true when hideNavigation includes key', () => {
        ctx.rootProps.hideNavigation = ['month'];
        const navigation = useNavigationDisplay();

        expect(navigation.hideNavigationButtons.value('month')).toBe(true);
        expect(navigation.hideNavigationButtons.value('year')).toBe(false);
    });

    it('should return true when hideNavigation includes multiple keys', () => {
        ctx.rootProps.hideNavigation = ['month', 'year'];
        const navigation = useNavigationDisplay();

        expect(navigation.hideNavigationButtons.value('month')).toBe(true);
        expect(navigation.hideNavigationButtons.value('year')).toBe(true);
    });

    it('should show left icon when multiCalendars count is 0', () => {
        const navigation = useNavigationDisplay();

        expect(navigation.showLeftIcon.value(0)).toBe(true);
    });

    it('should show right icon when multiCalendars count is 0', () => {
        const navigation = useNavigationDisplay();

        expect(navigation.showRightIcon.value(0)).toBe(true);
    });

    it('should show left icon only on first instance when multiCalendars count is set', () => {
        ctx.__mocks.multiCalendarsRef.value = { count: 3, solo: false };
        const navigation = useNavigationDisplay();

        expect(navigation.showLeftIcon.value(0)).toBe(true);
        expect(navigation.showLeftIcon.value(1)).toBe(false);
        expect(navigation.showLeftIcon.value(2)).toBe(false);
    });

    it('should show right icon only on last instance when multiCalendars count is set', () => {
        ctx.__mocks.multiCalendarsRef.value = { count: 3, solo: false };
        const navigation = useNavigationDisplay();

        expect(navigation.showRightIcon.value(0)).toBe(false);
        expect(navigation.showRightIcon.value(1)).toBe(false);
        expect(navigation.showRightIcon.value(2)).toBe(true);
    });

    it('should show both icons on all instances when solo mode is true', () => {
        ctx.__mocks.multiCalendarsRef.value = { count: 3, solo: true };
        const navigation = useNavigationDisplay();

        expect(navigation.showLeftIcon.value(0)).toBe(true);
        expect(navigation.showLeftIcon.value(1)).toBe(true);
        expect(navigation.showLeftIcon.value(2)).toBe(true);

        expect(navigation.showRightIcon.value(0)).toBe(true);
        expect(navigation.showRightIcon.value(1)).toBe(true);
        expect(navigation.showRightIcon.value(2)).toBe(true);
    });

    it('should handle single calendar with count = 1', () => {
        ctx.__mocks.multiCalendarsRef.value = { count: 1, solo: false };
        const navigation = useNavigationDisplay();

        expect(navigation.showLeftIcon.value(0)).toBe(true);
        expect(navigation.showRightIcon.value(0)).toBe(true);
    });

    it('should handle two calendars', () => {
        ctx.__mocks.multiCalendarsRef.value = { count: 2, solo: false };
        const navigation = useNavigationDisplay();

        expect(navigation.showLeftIcon.value(0)).toBe(true);
        expect(navigation.showLeftIcon.value(1)).toBe(false);

        expect(navigation.showRightIcon.value(0)).toBe(false);
        expect(navigation.showRightIcon.value(1)).toBe(true);
    });

    it('should return computed properties that are reactive', () => {
        const navigation = useNavigationDisplay();

        expect(typeof navigation.hideNavigationButtons.value).toBe('function');
        expect(typeof navigation.showLeftIcon.value).toBe('function');
        expect(typeof navigation.showRightIcon.value).toBe('function');
    });

    it('should handle hideNavigation with calendar key', () => {
        ctx.rootProps.hideNavigation = ['calendar'];
        const navigation = useNavigationDisplay();

        expect(navigation.hideNavigationButtons.value('calendar')).toBe(true);
    });

    it('should handle hideNavigation with time key', () => {
        ctx.rootProps.hideNavigation = ['time'];
        const navigation = useNavigationDisplay();

        expect(navigation.hideNavigationButtons.value('time')).toBe(true);
    });
});
