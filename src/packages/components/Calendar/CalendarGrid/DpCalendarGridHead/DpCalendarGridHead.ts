import { defineComponent, type ExtractPropTypes, h, type PropType } from 'vue';

const props = {
    as: { type: String as PropType<string>, default: 'thead' },
};

export type DpCalendarHeadProps = ExtractPropTypes<typeof props>;

export const DpCalendarGridHead = defineComponent({
    props,
    setup(props: DpCalendarHeadProps, { attrs, slots }) {
        return () => h(props.as, { ...attrs }, [slots.default?.()]);
    },
});
