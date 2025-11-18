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
import { useDefaults, useHelperFns } from '@/composables';
import { getMonth, getYear } from 'date-fns';
import type { CalendarMonthYear, DateGetter, InternalModelValue, RootEmits, RootPropsWithDefaults } from '@/types';

export interface State {
    menuFocused: boolean;
    shiftKeyInMenu: boolean;
    isInputFocused: boolean;
    isTextInputDate: boolean;
    arrowNavigationLevel: number;
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
    updateTime: () => void;
    getDate: DateGetter;
}>;

export const useInjector = (props: RootPropsWithDefaults, emit: EmitFn<RootEmits>) => {
    const { setTimeModelValue } = useHelperFns();
    const defaults = useDefaults(props);
    const internalModelValue = ref<InternalModelValue>(null);

    const state = reactive<State>({
        menuFocused: false,
        shiftKeyInMenu: false,
        isInputFocused: false,
        isTextInputDate: false,
        arrowNavigationLevel: 0,
    });

    const today = defaults.getDate(new Date());
    const inputValue = ref('');

    const calendars = ref<CalendarMonthYear[]>([{ month: getMonth(today), year: getYear(today) }]);

    const time = reactive({ hours: 0, minutes: 0, seconds: 0 });
    setTimeModelValue(time, null, today, defaults.range.value.enabled);

    const modelValue = computed({
        get: (): InternalModelValue => {
            return internalModelValue.value;
        },
        set: (value: InternalModelValue): void => {
            internalModelValue.value = value;
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

    const setState = <T extends keyof State>(key: T, value: State[T]) => {
        state[key] = value;
    };

    const updateTime = () => {
        setTimeModelValue(time, modelValue.value, today, defaults.range.value.enabled);
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
        updateTime,
        getDate: defaults.getDate,
    });
};
