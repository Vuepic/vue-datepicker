import { defineComponent, type ExtractPropTypes, h, type PropType } from 'vue';

const props = {
    as: { type: String as PropType<string>, default: 'button' },
};

export type DPCalendarCellTriggerProps = ExtractPropTypes<typeof props>;

export const DPCalendarCellTrigger = defineComponent({
    props,
    setup(props: DPCalendarCellTriggerProps, { attrs, slots }) {
        return () =>
            h(props.as, { ...(props.as === 'button' ? { type: 'button' } : {}), ...attrs }, [slots.default?.()]);
    },
});
