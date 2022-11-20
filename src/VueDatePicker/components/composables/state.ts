import { computed, reactive } from 'vue';

import { getDefaultFilters } from '@/utils/util';
import {
    defaultAriaLabels,
    defaultMultiCalendars,
    defaultPreviewFormat,
    defaultTransitions,
    getDefaultTextInputOptions,
} from '@/utils/defaults';

import type { AllPropsType } from '@/utils/props';

interface State {
    internalModelValue: Date | Date[] | null;
    props: AllPropsType;
    menuFocused: boolean;
    shiftKeyInMenu: boolean;
}

const state = reactive<State>({
    internalModelValue: null as unknown as Date,
    props: {} as AllPropsType,
    menuFocused: false,
    shiftKeyInMenu: false,
});

const internalModelValue = computed({
    get: () => state.internalModelValue,
    set: (value: Date | Date[] | null) => {
        state.internalModelValue = value;
    },
});

// Populate default values for prop objects that are passed partially
const getDefaults = (props: AllPropsType): Partial<AllPropsType> => {
    return {
        ariaLabels: defaultAriaLabels(props.ariaLabels),
        textInputOptions: Object.assign(getDefaultTextInputOptions(), props.textInputOptions),
        multiCalendars: defaultMultiCalendars(props.multiCalendars),
        previewFormat: defaultPreviewFormat(props.previewFormat, props.format, ''),
        filters: getDefaultFilters(props.filters),
        transitions: defaultTransitions(props.transitions),
    };
};

// Set all props to a shared state to be accessed across the app
const setProps = (props: AllPropsType): void => {
    state.props = { ...props, ...getDefaults(props) };
};

const config = computed(() => state.props);

const setMenuFocused = (value: boolean): void => {
    state.menuFocused = value;
};

const setShiftKey = (value: boolean): void => {
    if (state.shiftKeyInMenu === value) return;
    state.shiftKeyInMenu = value;
};

const control = computed(() => ({ shiftKeyInMenu: state.shiftKeyInMenu, menuFocused: state.menuFocused }));

export const useState = () => ({
    internalModelValue,
    config,
    control,
    setProps,
    setMenuFocused,
    setShiftKey,
});
