import { defineComponent, type ExtractPropTypes, h, type PropType } from 'vue';

const props = {
    as: { type: String as PropType<string>, default: 'tr' },
};

export type DpCalendarGridRowProps = ExtractPropTypes<typeof props>;

export const DpCalendarGridRow = defineComponent({
    props,
    setup(props: DpCalendarGridRowProps, { slots, attrs }) {
        return () => h(props.as, { ...attrs }, [slots.default?.()]);
    },
});
