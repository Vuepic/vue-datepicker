import { defineComponent, type EmitFn, type ExtractPropTypes, h, type PropType } from 'vue';

import { emitDef } from '@packages/utils/generic.ts';
import { useTrigger } from '@packages/components/DpTrigger';

const props = {
    as: { type: String as PropType<string>, default: 'div' },
};

const emits = {
    click: emitDef<MouseEvent>,
};

export type DpTriggerEmits = EmitFn<typeof emits>;
export type DpTriggerProps = ExtractPropTypes<typeof props>;

export const DpTrigger = defineComponent({
    props,
    emits,
    setup(props: DpTriggerProps, { slots, emit, attrs }) {
        const { triggerRef, clearValue, inputValue, openMenu } = useTrigger();

        const onClick = (ev: MouseEvent) => {
            emit('click', ev);
            openMenu();
        };

        // todo - needs to exposed close, toggle?
        return () =>
            h(props.as, { ...attrs, ref: triggerRef, onClick }, [
                slots.default?.({ clearValue, value: inputValue.value, openMenu }),
            ]);
    },
});
