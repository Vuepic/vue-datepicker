import { defineComponent, type ExtractPropTypes, h, type PropType } from 'vue';
import { useCalendar } from '@packages/components/Calendar/DpCalendar/useCalendar.ts';

const props = {
    as: { type: String as PropType<string>, default: 'div' },
    instance: { type: [String, Number] as PropType<string | number>, default: 0 },
    monthFormat: { type: String as PropType<'long' | 'short'>, default: 'short' },
    preventMinMaxNavigation: { type: Boolean as PropType<boolean>, default: false },
    disableYearSelect: { type: Boolean as PropType<boolean>, default: false },
};

export type DpCalendarProps = ExtractPropTypes<typeof props>;

export const DpCalendar = defineComponent({
    props,
    setup(props: DpCalendarProps, { attrs, slots }) {
        const { nextMonth, prevMonth, activeYear, activeMonth } = useCalendar(props);

        return () =>
            h(props.as, { ...attrs }, [
                slots.default?.({ nextMonth, prevMonth, year: activeYear.value, month: activeMonth.value }),
            ]);
    },
});
