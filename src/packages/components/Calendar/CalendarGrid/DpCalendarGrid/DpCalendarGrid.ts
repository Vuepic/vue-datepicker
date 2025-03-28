import { defineComponent, type ExtractPropTypes, h, type PropType } from 'vue';

const props = {
    as: { type: String as PropType<string>, default: 'table' },
};

export type DpCalendarGridProps = ExtractPropTypes<typeof props>;

export const DpCalendarGrid = defineComponent({
    props,
    setup(props: DpCalendarGridProps, { attrs, slots }) {
        return () => h(props.as, { ...attrs }, [slots.default?.()]);
    },
});
