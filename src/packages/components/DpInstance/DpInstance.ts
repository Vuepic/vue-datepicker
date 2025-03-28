import { defineComponent, type ExtractPropTypes, h, type PropType } from 'vue';
import { useInstance } from '@packages/components/DpInstance';

const props = {
    as: { type: String as PropType<string>, default: 'div' },
};

export type DpInstanceProps = ExtractPropTypes<typeof props>;

export const DpInstance = defineComponent({
    props,
    setup(props: DpInstanceProps, { attrs, slots }) {
        useInstance();

        return () => h(props.as, { ...attrs }, [slots.default?.()]);
    },
});
