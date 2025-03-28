import { defineComponent, type ExtractPropTypes, h, type PropType } from 'vue';
import { useCalendarCell } from '@packages/components/Calendar/CalendarGrid/DpCalendarCell';

const props = {
    as: { type: String as PropType<string>, default: 'td' },
    day: { type: Date as PropType<Date>, default: undefined, required: true },
};

export type DpCalendarCellProps = ExtractPropTypes<typeof props>;

export const DpCalendarCell = defineComponent({
    props,
    setup(props: DpCalendarCellProps, { attrs, slots }) {
        const { isToday } = useCalendarCell(props);

        return () => h(props.as, { role: 'gridcell', ...attrs }, [slots.default?.({ isToday: isToday.value })]);
    },
});
