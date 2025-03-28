import { defineComponent, type ExtractPropTypes, h, type PropType } from 'vue';
import { useDpMenu } from '@packages/components/DpMenu';
import type { Placement } from '@floating-ui/vue';

interface FloatingOptions {
    placement: Placement;
    offset: number;
}

const props = {
    floating: { type: Object as PropType<FloatingOptions>, default: () => ({ placement: 'bottom', offset: 10 }) },
};

export type DpMenuProps = ExtractPropTypes<typeof props>;

export const DpMenu = defineComponent({
    props,
    setup(props: DpMenuProps, { slots }) {
        const { menuRef, floatingStyles, menuDisplay } = useDpMenu(props);

        return () =>
            h('div', { ref: menuRef, style: { display: menuDisplay.value, ...floatingStyles.value } }, [
                slots.default?.(),
            ]);
    },
});
