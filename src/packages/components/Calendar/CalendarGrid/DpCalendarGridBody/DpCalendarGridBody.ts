import { defineComponent, type ExtractPropTypes, h, type PropType } from 'vue';
import type { SixWeeksProp } from '@packages/types';
import { useCalendarGridBody } from '@packages/components/Calendar/CalendarGrid/DpCalendarGridBody';

const props = {
    as: { type: String as PropType<string>, default: 'tbody' },
    sixWeeks: { type: [Boolean, String] as PropType<boolean | SixWeeksProp>, default: false },
};

export type DpCalendarGridBodyProps = ExtractPropTypes<typeof props>;

export const DpCalendarGridBody = defineComponent({
    props,
    setup(props: DpCalendarGridBodyProps, { attrs, slots }) {
        const { weeks } = useCalendarGridBody(props);
        return () => h(props.as, { ...attrs }, [slots.default?.({ weeks: weeks.value })]);
    },
});
