import { type EmitFn, type ExtractPropTypes, h, type PropType, type SetupContext } from 'vue';
import { PICKER_MODE } from '@packages/constants';
import { emitDef } from '@packages/utils/generic.ts';
import { useRoot } from '@packages/components/DpRoot';
import type {
    RangeProp,
    MultiDatesProp,
    FormatProp,
    TimeProp,
    WeekNumbersProp,
    ModelValueProp,
    FilterProp,
} from '@packages/types';

const props = {
    as: { type: String as PropType<string>, default: 'div' },
    modelValue: { type: [String, Date, Array, Object, Number] as PropType<ModelValueProp>, default: undefined },
    range: { type: [Boolean, Object] as PropType<RangeProp>, default: false },
    multiDates: { type: [Object, Boolean] as PropType<MultiDatesProp>, default: false },
    mode: { type: String as PropType<PICKER_MODE>, default: PICKER_MODE.DATE_PICKER },
    format: {
        type: [String, Function] as PropType<FormatProp>,
        default: () => undefined,
    },
    time: { type: [Boolean, Object] as PropType<TimeProp>, default: true },
    weekNumbers: { type: [String, Function, Object] as PropType<WeekNumbersProp>, default: undefined },
    autoApply: { type: Boolean as PropType<boolean>, default: false },
    weekStart: { type: [Number, String] as PropType<number | string>, default: 1 },
    locale: { type: String as PropType<string>, default: 'en-Us' },
    filters: { type: Object as PropType<Partial<FilterProp>>, default: undefined },
};

export type DpRootProps = ExtractPropTypes<typeof props>;

const emits = {
    'update:model-value': emitDef<any>,
};

export type DpRootEmits = EmitFn<typeof emits>;

export const DpRoot = {
    props,
    emits,
    setup(props: DpRootProps, { slots, attrs, emit }: SetupContext) {
        useRoot(props, emit);

        // todo - expose global functions
        return () => h(props.as, { ...attrs }, slots.default?.());
    },
};
