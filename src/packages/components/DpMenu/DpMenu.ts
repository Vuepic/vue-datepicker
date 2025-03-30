import { defineComponent, type ExtractPropTypes, h, type PropType } from 'vue';
import { useDpMenu } from '@packages/components/DpMenu';
import type { Placement } from '@floating-ui/vue';

interface FloatingOptions {
    placement: Placement;
    offset: number;
}

// todo - provide full floating config?
const props = {
    as: { type: String as PropType<string>, default: 'div' },
    floating: { type: Object as PropType<FloatingOptions>, default: () => ({ placement: 'bottom', offset: 10 }) },
    onClickOutside: { type: Function as PropType<() => void>, default: undefined },
};

export type DpMenuProps = ExtractPropTypes<typeof props>;

export const DpMenu = defineComponent({
    props,
    setup(props: DpMenuProps, { slots }) {
        const { menuRef, floatingStyles, menuDisplay } = useDpMenu(props);

        return () =>
            h(props.as, { ref: menuRef, style: { display: menuDisplay.value, ...floatingStyles.value } }, [
                slots.default?.(),
            ]);
    },
});
