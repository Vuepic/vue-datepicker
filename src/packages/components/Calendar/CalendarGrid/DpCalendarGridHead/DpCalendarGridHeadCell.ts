import { defineComponent, type ExtractPropTypes, h, type PropType } from 'vue';

const props = {
    as: { type: String as PropType<string>, default: 'th' },
};

export type DpCalendarHeadCellProps = ExtractPropTypes<typeof props>;

export const DpCalendarGridHeadCell = defineComponent({
    props,
    setup(props: DpCalendarHeadCellProps, { attrs, slots }) {
        return () => h(props.as, { ...attrs }, [slots.default?.()]);
    },
});
