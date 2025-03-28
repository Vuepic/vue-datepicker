import { computed } from 'vue';
import { addDays, type Day, getMonth, startOfWeek } from 'date-fns';
import { useContext } from '@packages/composables/useContext.ts';
import { DpCalendarKey } from '@packages/components/Calendar/DpCalendar';
import { getDate, isDateEqual, resetDateTime } from '@packages/utils/date.ts';
import type { CalendarDay } from '@packages/types';
import type { DpCalendarGridBodyProps } from '@packages/components/Calendar/CalendarGrid/DpCalendarGridBody';

interface CalendarWeek {
    days: CalendarDay[];
}

export const useCalendarGridBody = (props: DpCalendarGridBodyProps) => {
    const { month, year, weekStart } = useContext(DpCalendarKey, 'DpCalendar');

    const getSixWeeksMode = (firstWeekday: number, gapToEnd: number) => {
        switch (props.sixWeeks === true ? 'append' : props.sixWeeks) {
            case 'prepend':
                return [true, false];
            case 'center':
                return [firstWeekday == 0, true];
            case 'fair':
                return [firstWeekday == 0 || gapToEnd > firstWeekday, true];
            case 'append':
                return [false, false];
            default:
                return [false, false];
        }
    };

    const handleSixWeeks = (weeks: CalendarWeek[], firstDate: Date, lastDate: Date, weekStart: Day) => {
        if (props.sixWeeks && weeks.length < 6) {
            const diff = 6 - weeks.length;

            const firstWeekday = (firstDate.getDay() + 7 - weekStart) % 7;
            const lastWeekday = (lastDate.getDay() + 7 - weekStart) % 7;
            const gapToEnd = 6 - lastWeekday;
            const [requiresLeadingWeek, doesAlternate] = getSixWeeksMode(firstWeekday, gapToEnd);

            for (let i = 1; i <= diff; i++) {
                const addLeadingWeek = doesAlternate ? !!(i % 2) == requiresLeadingWeek : requiresLeadingWeek;
                if (addLeadingWeek) {
                    const first = weeks[0].days[0];
                    const days = getWeekDays(addDays(first.value, -7), getMonth(firstDate));
                    weeks.unshift({ days });
                } else {
                    const lastWeek = weeks[weeks.length - 1];
                    const last = lastWeek.days[lastWeek.days.length - 1];
                    const days = getWeekDays(addDays(last.value, 1), getMonth(firstDate));
                    weeks.push({ days });
                }
            }
        }
        return weeks;
    };

    const getWeekDays = (startDay: Date, month: number): CalendarDay[] => {
        const startDate = getDate(startDay);
        const dates = [];
        for (let i = 0; i < 7; i++) {
            const next = addDays(startDate, i);
            const isNext = getMonth(next) !== month;
            dates.push({
                label: next.getDate(),
                value: next,
                current: !isNext,
            });
        }
        return dates;
    };

    const addDaysToWeek = (date: Date, weeks: CalendarWeek[], lastDate: Date) => {
        const days = getWeekDays(date, month.value);
        weeks.push({ days });
        if (
            !weeks[weeks.length - 1].days.some((day) => isDateEqual(resetDateTime(day.value), resetDateTime(lastDate)))
        ) {
            const nextDate = addDays(date, 7);
            addDaysToWeek(nextDate, weeks, lastDate);
        }
    };

    const getCalendarDays = () => {
        const weeks: CalendarWeek[] = [];
        const firstDate = new Date(year.value, month.value);
        const lastDate = new Date(year.value, month.value + 1, 0);

        const firstDateInCalendar = startOfWeek(firstDate, { weekStartsOn: +weekStart.value as Day });

        addDaysToWeek(firstDateInCalendar, weeks, lastDate);

        return handleSixWeeks(weeks, firstDate, lastDate, +weekStart.value as Day);
    };

    const weeks = computed(() => getCalendarDays());

    return {
        weeks,
    };
};
