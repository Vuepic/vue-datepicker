import { defineComponent, type EmitFn, type ExtractPropTypes, h, type PropType } from 'vue';
import { useInput } from './useInput.ts';
import { emitDef } from '@packages/utils/generic.ts';
import type { MaybeValue, TextInputOptionsProp } from '@packages/types';

const props = {
    textInput: { type: [Boolean, Object] as PropType<boolean | Partial<TextInputOptionsProp>>, default: false },
    propagateEvents: { type: Boolean as PropType<boolean>, default: true },
};

const emits = {
    input: emitDef<InputEvent>,
    focus: emitDef<FocusEvent>,
    blur: emitDef<FocusEvent>,
    keydown: emitDef<KeyboardEvent>,
    paste: emitDef<InputEvent>,
    'text-input': emitDef<MaybeValue<Date> | MaybeValue<Date>[]>,
};

export type DpInputProps = ExtractPropTypes<typeof props>;
export type DpInputEmits = EmitFn<typeof emits>;

export const DpInput = defineComponent({
    props,
    emits,
    setup(props: DpInputProps, { emit, attrs }) {
        const { inputRef, inputValue, onInput, onBlur, onFocus } = useInput(props, emit);

        return () =>
            h('input', {
                'data-test-id': 'dp-input',
                ...attrs,
                type: 'text',
                ref: inputRef,
                readonly: Boolean(!props.textInput),
                value: inputValue.value,
                onInput,
                onBlur,
                onFocus,
            });
    },
});
