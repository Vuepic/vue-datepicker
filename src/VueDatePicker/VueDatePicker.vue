<template>
    <div :class="wrapperClass" ref="pickerWrapperRef">
        <DatepickerInput
            ref="inputRef"
            :is-menu-open="isOpen"
            v-model:input-value="inputValue"
            v-bind="$props"
            @clear="clearValue"
            @open="openMenu"
            @set-input-date="setInputDate"
            @set-empty-date="emitModelValue"
            @select-date="selectDate"
            @toggle="toggleMenu"
            @close="closeMenu"
            @focus="handleInputFocus"
            @blur="handleBlur"
            @real-blur="isInputFocused = false"
        >
            <template v-for="(slot, i) in inputSlots" #[slot]="args" :key="i">
                <slot :name="slot" v-bind="args" />
            </template>
        </DatepickerInput>
        <transition :name="menuTransition(openOnTop)" :css="showTransition && !defaultedInline.enabled">
            <component
                ref="dpWrapMenuRef"
                v-if="isOpen"
                :is="teleport ? TeleportCmp : 'div'"
                v-bind="menuWrapProps"
                :class="{ 'dp--menu-wrapper': !defaultedInline.enabled }"
                :style="!defaultedInline.enabled ? menuStyle : undefined"
            >
                <DatepickerMenu
                    ref="dpMenuRef"
                    :class="{ [theme]: true, 'dp--menu-wrapper': teleport }"
                    :style="teleport ? menuStyle : undefined"
                    :open-on-top="openOnTop"
                    :arr-map-values="arrMapValues"
                    v-bind="$props"
                    v-model:internal-model-value="internalModelValue"
                    @close-picker="closeMenu"
                    @select-date="selectDate"
                    @auto-apply="autoApplyValue"
                    @time-update="timeUpdate"
                    @flow-step="$emit('flow-step', $event)"
                    @update-month-year="$emit('update-month-year', $event)"
                    @invalid-select="$emit('invalid-select', internalModelValue)"
                    @invalid-fixed-range="$emit('invalid-fixed-range', $event)"
                    @recalculate-position="setMenuPosition"
                    @tooltip-open="$emit('tooltip-open', $event)"
                    @tooltip-close="$emit('tooltip-close', $event)"
                    @time-picker-open="$emit('time-picker-open', $event)"
                    @time-picker-close="$emit('time-picker-close', $event)"
                    @am-pm-change="$emit('am-pm-change', $event)"
                    @range-start="$emit('range-start', $event)"
                    @range-end="$emit('range-end', $event)"
                >
                    <template v-for="(slot, i) in slotList" #[slot]="args" :key="i">
                        <slot :name="slot" v-bind="{ ...args }" />
                    </template>
                </DatepickerMenu>
            </component>
        </transition>
    </div>
</template>

<script lang="ts" setup>
    import {
        computed,
        onMounted,
        onUnmounted,
        ref,
        toRef,
        useSlots,
        watch,
        Teleport as TeleportCmp,
        nextTick,
    } from 'vue';

    import DatepickerInput from '@/components/DatepickerInput.vue';
    import DatepickerMenu from '@/components/DatepickerMenu.vue';

    import {
        useExternalInternalMapper,
        usePosition,
        mapSlots,
        useArrowNavigation,
        useState,
        useTransitions,
        useValidation,
    } from '@/composables';
    import { onClickOutside } from '@/directives/clickOutside';
    import { AllProps } from '@/props';
    import { getNumVal } from '@/utils/util';

    import type {
        DynamicClass,
        MonthYearOpt,
        DatepickerMenuRef,
        DatepickerInputRef,
        ModelValue,
        MenuView,
    } from '@/interfaces';
    import { useDefaults } from '@/composables/defaults';

    const emit = defineEmits([
        'update:model-value',
        'update:model-timezone-value',
        'text-submit',
        'closed',
        'cleared',
        'open',
        'focus',
        'blur',
        'internal-model-change',
        'recalculate-position',
        'flow-step',
        'update-month-year',
        'invalid-select',
        'invalid-fixed-range',
        'tooltip-open',
        'tooltip-close',
        'time-picker-open',
        'time-picker-close',
        'am-pm-change',
        'range-start',
        'range-end',
    ]);

    defineOptions({
        compatConfig: {
            MODE: 3,
        },
    });

    const props = defineProps({
        ...AllProps,
    });
    const slots = useSlots();
    const isOpen = ref(false);
    const modelValueRef = toRef(props, 'modelValue');
    const timezoneRef = toRef(props, 'timezone');
    const dpWrapMenuRef = ref<HTMLElement | null>(null);
    const dpMenuRef = ref<DatepickerMenuRef | null>(null);
    const inputRef = ref<DatepickerInputRef | null>(null);
    const isInputFocused = ref(false);
    const pickerWrapperRef = ref<HTMLElement | null>(null);

    const { setMenuFocused, setShiftKey } = useState();
    const { clearArrowNav } = useArrowNavigation();
    const { mapDatesArrToMap, validateDate, isValidTime } = useValidation(props);
    const { defaultedTransitions, defaultedTextInput, defaultedInline, defaultedConfig } = useDefaults(props);
    const { menuTransition, showTransition } = useTransitions(defaultedTransitions);

    onMounted(() => {
        parseExternalModelValue(props.modelValue);
        nextTick().then(() => {
            if (!defaultedInline.value.enabled) {
                const el = getScrollableParent(pickerWrapperRef.value);
                el.addEventListener('scroll', onScroll);

                window.addEventListener('resize', onResize);
            }
        });

        if (defaultedInline.value.enabled) {
            isOpen.value = true;
        }
    });

    const arrMapValues = computed(() => mapDatesArrToMap());

    onUnmounted(() => {
        if (!defaultedInline.value.enabled) {
            const el = getScrollableParent(pickerWrapperRef.value);
            if (el) {
                el.removeEventListener('scroll', onScroll);
            }
            window.removeEventListener('resize', onResize);
        }
    });

    const slotList = mapSlots(slots, 'all', props.presetDates);
    const inputSlots = mapSlots(slots, 'input');

    watch(
        [modelValueRef, timezoneRef],
        () => {
            parseExternalModelValue(modelValueRef.value);
        },
        { deep: true },
    );

    const { openOnTop, menuStyle, xCorrect, setMenuPosition, getScrollableParent, shadowRender } = usePosition({
        menuRef: dpWrapMenuRef,
        menuRefInner: dpMenuRef,
        inputRef,
        pickerWrapperRef,
        inline: defaultedInline,
        emit,
        props,
        slots,
    });

    const {
        inputValue,
        internalModelValue,
        parseExternalModelValue,
        emitModelValue,
        formatInputValue,
        checkBeforeEmit,
    } = useExternalInternalMapper(emit, props, isInputFocused);

    const wrapperClass = computed(
        (): DynamicClass => ({
            dp__main: true,
            dp__theme_dark: props.dark,
            dp__theme_light: !props.dark,
            dp__flex_display: defaultedInline.value.enabled,
            dp__flex_display_with_input: defaultedInline.value.input,
        }),
    );

    const theme = computed(() => (props.dark ? 'dp__theme_dark' : 'dp__theme_light'));
    const menuWrapProps = computed(() => {
        if (props.teleport) {
            return {
                to: typeof props.teleport === 'boolean' ? 'body' : props.teleport,
                disabled: defaultedInline.value.enabled,
            };
        }
        return { class: 'dp__outer_menu_wrap' };
    });

    /**
     * Event listener for 'scroll'
     * Depending on the props, it can close the menu or set correct position
     */
    const onScroll = (): void => {
        if (isOpen.value) {
            if (props.closeOnScroll || defaultedConfig.value.closeOnScroll) {
                closeMenu();
            } else {
                setMenuPosition();
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

    const openMenu = () => {
        if (!props.disabled && !props.readonly) {
            shadowRender(DatepickerMenu, props);
            setMenuPosition(false);
            isOpen.value = true;

            if (isOpen.value) {
                emit('open');
            }

            if (!isOpen.value) {
                clearInternalValues();
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
        emit('update:model-value', null);
        emit('update:model-timezone-value', null);
        emit('cleared');
        if (props.closeOnClearValue || defaultedConfig.value.closeOnClearValue) {
            closeMenu();
        }
    };

    const validateBeforeEmit = () => {
        const date = internalModelValue.value;
        if (!date) return true;
        if (!Array.isArray(date) && validateDate(date)) return true;
        if (Array.isArray(date)) {
            if (date.length === 2 && validateDate(date[0]) && validateDate(date[1])) {
                return true;
            }
            if (props.partialRange && !props.timePicker) return validateDate(date[0]);
            return false;
        }
        return false;
    };

    /**
     * Called when select button is clicked, emit update for the modelValue
     */
    const selectDate = (): void => {
        if (checkBeforeEmit() && validateBeforeEmit()) {
            emitModelValue();
            closeMenu();
        } else {
            emit('invalid-select', internalModelValue.value);
        }
    };

    const emitOnAutoApply = (ignoreClose: boolean): void => {
        updateTextInputWithDateTimeValue();
        emitModelValue();
        if ((props.closeOnAutoApply || defaultedConfig.value.closeOnAutoApply) && !ignoreClose) {
            closeMenu();
        }
    };

    const updateTextInputWithDateTimeValue = () => {
        if (inputRef.value && defaultedTextInput.value.enabled) {
            inputRef.value.setParsedDate(internalModelValue.value);
        }
    };

    /**
     * When value is selected it will emit an event that will call this function
     * ignoreClose is passed when time is picked or month and year, since they update the value and for
     * the user experience it should not close the menu
     */
    const autoApplyValue = (ignoreClose = false): void => {
        if (props.autoApply) {
            const isTimeValid = isValidTime(internalModelValue.value);

            if (isTimeValid && validateBeforeEmit()) {
                if (props.range && Array.isArray(internalModelValue.value)) {
                    if (props.partialRange || internalModelValue.value.length === 2) {
                        emitOnAutoApply(ignoreClose);
                    }
                } else {
                    emitOnAutoApply(ignoreClose);
                }
            }
        }
    };

    /**
     * Clears the internally stored values. This is different from clearValue since it does not emit v-model
     * update, just clears internal data
     */
    const clearInternalValues = (): void => {
        if (!defaultedTextInput.value.enabled) {
            internalModelValue.value = null;
        }
    };

    /**
     * Closes the menu and clears the internal data
     */
    const closeMenu = (): void => {
        if (!defaultedInline.value.enabled) {
            if (isOpen.value) {
                isOpen.value = false;
                xCorrect.value = false;
                setMenuFocused(false);
                setShiftKey(false);
                clearArrowNav();
                emit('closed');
                if (inputValue.value) {
                    parseExternalModelValue(modelValueRef.value);
                }
            }
            clearInternalValues();
            emit('blur');
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
            emit('text-submit');
        }
    };

    const timeUpdate = (): void => {
        if (props.autoApply && isValidTime(internalModelValue.value)) {
            emitModelValue();
        }
        updateTextInputWithDateTimeValue();
    };

    const toggleMenu = () => {
        if (isOpen.value) return closeMenu();
        return openMenu();
    };

    const updateInternalModelValue = (value: Date | Date[]): void => {
        internalModelValue.value = value;
    };

    const handleInputFocus = () => {
        if (defaultedTextInput.value.enabled) {
            isInputFocused.value = true;
            formatInputValue();
        }

        emit('focus');
    };

    const handleBlur = () => {
        if (defaultedTextInput.value.enabled) {
            isInputFocused.value = false;
            parseExternalModelValue(props.modelValue);
        }
        emit('blur');
    };

    const setMonthYear = (value: MonthYearOpt) => {
        if (dpMenuRef.value) {
            dpMenuRef.value.updateMonthYear(0, {
                month: getNumVal(value.month),
                year: getNumVal(value.year),
            });
        }
    };

    const parseModel = (value?: ModelValue) => {
        parseExternalModelValue(value ?? props.modelValue);
    };

    const switchView = (view: MenuView, instance?: number) => {
        dpMenuRef.value?.switchView(view, instance);
    };

    const clickOutside = (validateBeforeEmit: () => boolean) => {
        if (props.onClickOutside) return props.onClickOutside(validateBeforeEmit);
        if (defaultedConfig.value.onClickOutside) return defaultedConfig.value.onClickOutside(validateBeforeEmit);
        return closeMenu();
    };

    onClickOutside(dpWrapMenuRef, inputRef, () => clickOutside(validateBeforeEmit));

    defineExpose({
        closeMenu,
        selectDate,
        clearValue,
        openMenu,
        onScroll,
        formatInputValue, // exposed for testing purposes
        updateInternalModelValue, // modify internal modelValue
        setMonthYear,
        parseModel,
        switchView,
    });
</script>
