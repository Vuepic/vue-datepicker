import { type EmitFn, h, type SetupContext } from 'vue';

import { emitDef } from '@packages/utils/generic.ts';
import { useTrigger } from '@packages/components/DpTrigger';

const emits = {
    click: emitDef<MouseEvent>,
};

export type DpTriggerEmits = EmitFn<typeof emits>;

export const DpTrigger = {
    emits,
    setup(props: any, { slots, emit, attrs }: SetupContext) {
        const { triggerRef, clearValue, inputValue, openMenu } = useTrigger();

        const onClick = (ev: MouseEvent) => {
            emit('click', ev);
            openMenu();
        };

        return () =>
            h('div', { ...attrs, ref: triggerRef, onClick }, [
                slots.default?.({ clearValue, inputValue: inputValue.value, openMenu }),
            ]);
    },
};
