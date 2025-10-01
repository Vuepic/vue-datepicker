import {
    provide,
    ref,
    reactive,
    readonly,
    computed,
    type Ref,
    type InjectionKey,
    type WritableComputedRef,
    type EmitFn,
    type Reactive,
    type ComputedRef,
} from 'vue';
import { useDateUtils, useDefaults } from '@/composables';

import type { CalendarMonthYear, InternalModelValue, RootEmits, RootPropsWithDefaults } from '@/types';
import { getMonth, getYear } from 'date-fns';

interface State {
    menuFocused: boolean;
    shiftKeyInMenu: boolean;
    isInputFocused: boolean;
}

export const ContextKey = Symbol('ContextKey') as InjectionKey<{
    rootProps: RootPropsWithDefaults;
    defaults: ReturnType<typeof useDefaults>;
    setState: <T extends keyof State>(key: T, value: State[T]) => void;
    state: Readonly<State>;
    modelValue: WritableComputedRef<InternalModelValue>;
    rootEmit: EmitFn<RootEmits>;
    calendars: Ref<CalendarMonthYear[]>;
    time: Reactive<any>;
    month: ComputedRef<(instance: number) => number>;
    year: ComputedRef<(instance: number) => number>;
    today: Date;
    inputValue: Ref<string>;
    isMobile: ComputedRef<boolean>;
    isTextInputDate: Ref<boolean>;
}>;

export const useInjector = (props: RootPropsWithDefaults, emit: EmitFn<RootEmits>) => {
    const { timeGetter } = useDateUtils();
    const defaults = useDefaults(props);
    const internalModelValue = ref<InternalModelValue>(null);

    const state = reactive<State>({
        menuFocused: false,
        shiftKeyInMenu: false,
        isInputFocused: false,
    });

    const today = new Date();
    const inputValue = ref('');
    const isTextInputDate = ref(false);

    const calendars = ref<CalendarMonthYear[]>([{ month: getMonth(today), year: getYear(today) }]);

    const time = reactive({
        hours: timeGetter('hours', today, defaults.range.value.enabled),
        minutes: timeGetter('minutes', today, defaults.range.value.enabled),
        seconds: timeGetter('seconds', today, defaults.range.value.enabled),
    });

    const modelValue = computed({
        get: (): InternalModelValue => {
            return internalModelValue.value;
        },
        set: (value: InternalModelValue): void => {
            if (!props.readonly && !props.disabled) {
                internalModelValue.value = value;
            }
        },
    });

    const month = computed(
        () =>
            (instance: number): number =>
                calendars.value[instance] ? calendars.value[instance].month : 0,
    );

    const year = computed(
        () =>
            (instance: number): number =>
                calendars.value[instance] ? calendars.value[instance].year : 0,
    );

    const isMobile = computed(() => false);

    const setState = <T extends keyof State>(key: T, value: State[T]) => {
        state[key] = value;
    };

    provide(ContextKey, {
        rootProps: props,
        defaults,
        modelValue,
        state: readonly(state),
        rootEmit: emit,
        calendars,
        month,
        year,
        time,
        today,
        inputValue,
        setState,
        isMobile,
        isTextInputDate,
    });
};
