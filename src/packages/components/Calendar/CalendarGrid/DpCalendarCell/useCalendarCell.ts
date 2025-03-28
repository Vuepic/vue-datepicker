import { computed } from 'vue';
import { isDateEqual } from '@packages/utils/date.ts';
import type { DpCalendarCellProps } from '@packages/components/Calendar/CalendarGrid/DpCalendarCell';

export const useCalendarCell = (props: DpCalendarCellProps) => {
    const isToday = computed(() => isDateEqual(props.day, new Date()));

    return {
        isToday,
    };
};
