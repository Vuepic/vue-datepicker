<template>
    <div :class="wrapperClass">
        <DatepickerInput
            ref="inputRef"
            v-bind="{
                placeholder,
                hideInputIcon,
                readonly,
                disabled,
                inputClassName,
                clearable,
                state,
                inline,
                inlineWithInput,
                textInput,
                textInputOptions: inputDefaultOptions,
                range,
                isMenuOpen: isOpen,
                pattern: defaultPattern,
                autoApply,
                uid,
                openMenuOnFocus,
                required,
                name,
                autocomplete,
            }"
            v-model:input-value="inputValue"
            @clear="clearValue"
            @open="openMenu"
            @set-input-date="setInputDate"
            @set-empty-date="emitModelValue"
            @select-date="selectDate"
            @close="closeMenu"
        >
            <template v-for="(slot, i) in inputSlots" #[slot]="args" :key="i">
                <slot :name="slot" v-bind="args" />
            </template>
        </DatepickerInput>
        <span tabindex="-1" ref="focusRef"></span>
        <teleport :to="teleport" :disabled="inline" v-if="isOpen">
            <DatepickerMenu
                v-if="isOpen"
                ref="dpMenuRef"
                :class="theme"
                :style="menuPosition"
                v-bind="{
                    ...passCommonProps($props),
                    multiCalendars: multiCalendarDefault,
                    previewFormat: previewFormatDefault,
                    filters: defaultFilters,
                    openOnTop,
                    startTime: defaultStartTime,
                }"
                v-model:internalModelValue="internalModelValue"
                @close-picker="closeMenu"
                @select-date="selectDate"
                @dp-open="recalculatePosition"
                @auto-apply="autoApplyValue"
                @time-update="timeUpdate"
                @flow-step="$emit('flow-step', $event)"
                @update-month-year="$emit('updateMonthYear', $event)"
            >
                <template v-for="(slot, i) in slotList" #[slot]="args" :key="i">
                    <slot :name="slot" v-bind="{ ...args }" />
                </template>
            </DatepickerMenu>
        </teleport>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, onUnmounted, PropType, provide, ref, toRef, useSlots, watch } from 'vue';
    import { getHours, getMinutes, getSeconds, Locale } from 'date-fns';

    import DatepickerInput from './components/DatepickerInput.vue';
    import DatepickerMenu from './components/DatepickerMenu.vue';

    import {
        IDateFilter,
        OpenPosition,
        DynamicClass,
        IFormat,
        ITextInputOptions,
        ModelValue,
        ITimeValue,
        ITransition,
        AltPosition,
    } from './interfaces';
    import { getDefaultPattern, isValidTime } from './utils/date-utils';
    import { getDefaultTextInputOptions, getDefaultFilters, mergeDefaultTransitions } from './utils/util';
    import { usePosition } from './components/composition/position';
    import { useExternalInternalMapper } from './components/composition/external-internal-mapper';
    import { isString } from './utils/type-guard';
    import { mapSlots } from './components/composition/slots';
    import { onClickOutside } from './directives/clickOutside';
    import { CommonProps, passCommonProps } from './utils/props';

    const emit = defineEmits([
        'update:modelValue',
        'textSubmit',
        'closed',
        'cleared',
        'open',
        'focus',
        'blur',
        'internalModelChange',
        'recalculatePosition',
        'flow-step',
        'updateMonthYear',
    ]);
    const props = defineProps({
        ...CommonProps,
        name: { type: String as PropType<string>, default: null },
        multiCalendars: { type: [Boolean, Number, String] as PropType<boolean | number | string>, default: null },
        modelValue: { type: [String, Date, Array, Object] as PropType<ModelValue>, default: null },
        position: { type: String as PropType<OpenPosition>, default: 'center' },
        placeholder: { type: String as PropType<string>, default: null },
        dark: { type: Boolean as PropType<boolean>, default: false },
        required: { type: Boolean as PropType<boolean>, default: false },
        format: {
            type: [String, Function] as PropType<IFormat>,
            default: () => null,
        },
        previewFormat: {
            type: [String, Function] as PropType<IFormat>,
            default: () => null,
        },
        inputClassName: { type: String as PropType<string>, default: null },
        hideInputIcon: { type: Boolean as PropType<boolean>, default: false },
        state: { type: Boolean as PropType<boolean>, default: null },
        clearable: { type: Boolean as PropType<boolean>, default: true },
        closeOnScroll: { type: Boolean as PropType<boolean>, default: false },
        filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
        inlineWithInput: { type: Boolean as PropType<boolean>, default: false },
        autoPosition: { type: Boolean as PropType<boolean>, default: true },
        closeOnAutoApply: { type: Boolean as PropType<boolean>, default: true },
        textInputOptions: { type: Object as PropType<ITextInputOptions>, default: () => ({}) },
        teleport: { type: String as PropType<string>, default: 'body' },
        altPosition: { type: [Boolean, Function] as PropType<AltPosition>, default: false },
        partialRange: { type: Boolean as PropType<boolean>, default: true },
        transitions: { type: Boolean as PropType<boolean | ITransition>, default: true },
        openMenuOnFocus: { type: Boolean as PropType<boolean>, default: true },
        formatLocale: { type: Object as PropType<Locale>, default: null },
        autocomplete: { type: String as PropType<string>, default: null },
        utc: { type: Boolean as PropType<boolean>, default: false },
    });
    const slots = useSlots();
    const isOpen = ref(false);
    const modelValueMap = toRef(props, 'modelValue');
    const dpMenuRef = ref(null);
    const inputRef = ref(null);
    const focusRef = ref<HTMLElement | null>(null);
    provide('autoApply', props.autoApply);
    const formatLocaleRef = computed(() => props.formatLocale);
    provide('formatLocale', formatLocaleRef);
    provide('textInput', toRef(props, 'textInput'));

    onMounted(() => {
        // store.setTimezone(props.timezone);
        parseExternalModelValue(props.modelValue);
        if (!props.inline) {
            window.addEventListener('scroll', onScroll);
            window.addEventListener('resize', onResize);
        }

        if (props.inline) {
            isOpen.value = true;
        }
    });

    onUnmounted(() => {
        if (!props.inline) {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        }
    });

    const slotList = mapSlots(slots, 'all');
    const inputSlots = mapSlots(slots, 'input');

    watch(
        modelValueMap,
        () => {
            parseExternalModelValue(modelValueMap.value);
        },
        { deep: true },
    );

    const { openOnTop, menuPosition, setMenuPosition, recalculatePosition } = usePosition(
        props.position,
        props.altPosition,
        props.autoPosition,
        dpMenuRef,
        inputRef,
        emit,
    );

    const {
        internalModelValue,
        inputValue,
        parseExternalModelValue,
        emitModelValue,
        checkBeforeEmit,
        formatInputValue,
    } = useExternalInternalMapper(
        props.format,
        props.timePicker,
        props.monthPicker,
        props.range,
        props.partialRange,
        props.is24,
        props.enableTimePicker,
        props.enableSeconds,
        formatLocaleRef,
        props.multiDates,
        props.utc,
        props.weekPicker,
        props.textInputOptions,
        emit,
    );

    const wrapperClass = computed(
        (): DynamicClass => ({
            dp__main: true,
            dp__theme_dark: props.dark,
            dp__theme_light: !props.dark,
            dp__flex_display: props.inline,
            dp__flex_display_with_input: props.inlineWithInput,
        }),
    );

    const defaultPattern = computed((): string => {
        return isString(props.format)
            ? props.format
            : getDefaultPattern(
                  null,
                  props.is24,
                  props.enableSeconds,
                  props.monthPicker,
                  props.timePicker,
                  props.weekPicker,
                  props.enableTimePicker,
              );
    });

    const previewFormatDefault = computed(() => {
        if (!props.previewFormat) {
            return isString(defaultPattern.value) ? defaultPattern.value : props.format;
        }
        return props.previewFormat;
    });

    const defaultTransitions = computed((): ITransition | boolean => {
        if (typeof props.transitions === 'boolean') {
            return props.transitions ? mergeDefaultTransitions({}) : false;
        }
        return mergeDefaultTransitions(props.transitions);
    });
    provide('transitions', defaultTransitions);

    const theme = computed(() => (props.dark ? 'dp__theme_dark' : 'dp__theme_light'));

    const inputDefaultOptions = computed((): ITextInputOptions => {
        return Object.assign(getDefaultTextInputOptions(), props.textInputOptions);
    });

    const defaultFilters = computed(() => getDefaultFilters(props.filters));

    const defaultStartTime = computed((): ITimeValue | ITimeValue[] | null => {
        const assignDefaultTime = (obj: ITimeValue): ITimeValue => {
            const defaultTime = {
                hours: getHours(new Date()),
                minutes: getMinutes(new Date()),
                seconds: getSeconds(new Date()),
            };
            return Object.assign(defaultTime, obj);
        };
        if (props.range) {
            if (props.startTime && Array.isArray(props.startTime)) {
                return [assignDefaultTime(props.startTime[0]), assignDefaultTime(props.startTime[1])];
            }
            return null;
        }
        return props.startTime && !Array.isArray(props.startTime) ? assignDefaultTime(props.startTime) : null;
    });

    const multiCalendarDefault = computed((): number => {
        if (props.multiCalendars === null) return 0;
        if (typeof props.multiCalendars === 'boolean') return props.multiCalendars ? 2 : 0;
        return +props.multiCalendars >= 2 ? +props.multiCalendars : 2;
    });

    /**
     * Event listener for 'scroll'
     * Depending on the props, it can close the menu or set correct position
     */
    const onScroll = (): void => {
        if (isOpen.value) {
            if (props.closeOnScroll) {
                closeMenu();
            } else if (props.autoPosition) {
                setMenuPosition();
            } else {
                window.removeEventListener('scroll', onScroll);
            }
        }
    };

    /**
     * Event listener for 'resize'
     * Since the menu is absolutely positioned, on window resize, correct positioning
     */
    const onResize = (): void => {
        if (isOpen.value) {
            setMenuPosition();
        }
    };

    const openMenu = (): void => {
        if (!props.disabled && !props.readonly) {
            setMenuPosition();
            isOpen.value = !isOpen.value;

            if (!isOpen.value) {
                clearInternalValues();
            }
            if (isOpen.value) {
                emit('open');
                emit('focus');
            }
            parseExternalModelValue(props.modelValue);
        }
    };

    /**
     * When x button is pressed on input, it will call this function that will emit null
     * for the modelValue and clear internally stored data
     */
    const clearValue = (): void => {
        inputValue.value = '';
        clearInternalValues();
        emit('update:modelValue', null);
        emit('cleared');
        closeMenu();
    };

    /**
     * Called when select button is clicked, emit update for the modelValue
     */
    const selectDate = (): void => {
        if (checkBeforeEmit()) {
            emitModelValue();
            closeMenu();
        }
    };

    /**
     * When value is selected it will emit an event that will call this function
     * ignoreClose is passed when time is picked or month and year, since they update the value and for
     * the user experience it should not close the menu
     */
    const autoApplyValue = (ignoreClose = false): void => {
        if (props.autoApply) {
            const isTimeValid = !props.enableTimePicker
                ? true
                : isValidTime(internalModelValue.value, props.maxTime, props.minTime);
            if (isTimeValid) {
                emitModelValue();
                if (props.closeOnAutoApply && !ignoreClose) {
                    closeMenu();
                }
            }
        }
    };

    /**
     * Clears the internally stored values. This is different from clearValue since it does not emit v-model
     * update, just clears internal data
     */
    const clearInternalValues = (): void => {
        internalModelValue.value = null;
    };

    /**
     * Closes the menu and clears the internal data
     */
    const closeMenu = (): void => {
        if (!props.inline) {
            if (isOpen.value) {
                isOpen.value = false;
                emit('closed');
                emit('blur');
                if (inputValue.value) {
                    parseExternalModelValue(modelValueMap.value);
                }
            }
            clearInternalValues();
            if (inputRef.value) {
                (inputRef.value as { unFocus: () => void }).unFocus();
            }
            setSoftFocus();
        }
    };

    const setInputDate = (date: Date | Date[] | null, submit?: boolean): void => {
        if (!date) {
            internalModelValue.value = null;
            return;
        }
        internalModelValue.value = date;
        if (submit) {
            selectDate();
            emit('textSubmit');
        }
    };

    const timeUpdate = (): void => {
        if (props.autoApply && isValidTime(internalModelValue.value, props.maxTime, props.minTime)) {
            emitModelValue();
        }
    };

    // When menu is close, allows user interaction via keyboard down the DOM tree, focus the span el after dp
    const setSoftFocus = (): void => {
        if (focusRef.value) {
            focusRef.value.focus({ preventScroll: true });
        }
    };

    onClickOutside(dpMenuRef, inputRef, closeMenu);

    defineExpose({
        closeMenu,
        selectDate,
        clearValue,
        openMenu,
        onScroll,
        formatInputValue, // exposed for testing purposes
    });
</script>
