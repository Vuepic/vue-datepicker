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
        >
            <template v-for="(slot, i) in inputSlots" #[slot]="args" :key="i">
                <slot :name="slot" v-bind="args" />
            </template>
        </DatepickerInput>
        <component v-if="isOpen" :is="teleport ? TeleportCmp : 'div'" v-bind="menuWrapProps">
            <DatepickerMenu
                v-if="isOpen"
                ref="dpMenuRef"
                :class="theme"
                :style="menuPosition"
                :open-on-top="openOnTop"
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
            >
                <template v-for="(slot, i) in slotList" #[slot]="args" :key="i">
                    <slot :name="slot" v-bind="{ ...args }" />
                </template>
            </DatepickerMenu>
        </component>
    </div>
</template>

<script lang="ts" setup>
    import {
        computed,
        nextTick,
        onMounted,
        onUnmounted,
        ref,
        toRef,
        useSlots,
        watch,
        Teleport as TeleportCmp,
    } from 'vue';

    import DatepickerInput from '@/components/DatepickerInput.vue';
    import DatepickerMenu from '@/components/DatepickerMenu.vue';

    import {
        useExternalInternalMapper,
        usePosition,
        mapSlots,
        useArrowNavigation,
        useState,
        useUtils,
    } from '@/components/composables';
    import { onClickOutside } from '@/directives/clickOutside';
    import { AllProps } from '@/utils/props';
    import { getNumVal } from '@/utils/util';

    import type { DynamicClass, MonthYearOpt, DatepickerMenuRef, DatepickerInputRef } from '@/interfaces';

    const emit = defineEmits([
        'update:model-value',
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
    ]);
    const props = defineProps({
        ...AllProps,
    });
    const slots = useSlots();
    const isOpen = ref(false);
    const modelValueRef = toRef(props, 'modelValue');
    const timezoneRef = toRef(props, 'timezone');
    const dpMenuRef = ref<DatepickerMenuRef | null>(null);
    const inputRef = ref<DatepickerInputRef | null>(null);
    const isInputFocused = ref(false);
    const pickerWrapperRef = ref<HTMLElement | null>(null);

    const { setMenuFocused, setShiftKey } = useState();
    const { clearArrowNav } = useArrowNavigation();
    const { validateDate, isValidTime, defaults } = useUtils(props);

    onMounted(() => {
        parseExternalModelValue(props.modelValue);
        if (!props.inline) {
            const el = getScrollableParent(pickerWrapperRef.value);
            el.addEventListener('scroll', onScroll);

            window.addEventListener('resize', onResize);
        }

        if (props.inline) {
            isOpen.value = true;
        }
    });

    onUnmounted(() => {
        if (!props.inline) {
            const el = getScrollableParent(pickerWrapperRef.value);
            if (el) {
                el.removeEventListener('scroll', onScroll);
            }
            window.removeEventListener('resize', onResize);
        }
    });

    const slotList = mapSlots(slots, 'all', props.presetRanges);
    const inputSlots = mapSlots(slots, 'input');

    watch(
        [modelValueRef, timezoneRef],
        () => {
            parseExternalModelValue(modelValueRef.value);
        },
        { deep: true },
    );

    const { openOnTop, menuPosition, setMenuPosition, setInitialPosition, getScrollableParent } = usePosition(
        dpMenuRef,
        inputRef,
        emit,
        props,
    );

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
            dp__flex_display: props.inline,
            dp__flex_display_with_input: props.inlineWithInput,
        }),
    );

    const theme = computed(() => (props.dark ? 'dp__theme_dark' : 'dp__theme_light'));
    const menuWrapProps = computed(() => {
        if (props.teleport) {
            return {
                to: typeof props.teleport === 'boolean' ? 'body' : props.teleport,
                disabled: props.inline,
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
            if (props.closeOnScroll) {
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

    const openMenu = (): void => {
        if (!props.disabled && !props.readonly) {
            setInitialPosition();
            isOpen.value = true;
            nextTick().then(() => {
                setMenuPosition();
                if (isOpen.value) {
                    emit('open');
                }
            });

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
        emit('cleared');
        closeMenu();
    };

    const validateBeforeEmit = () => {
        const date = internalModelValue.value;
        if (!date) return true;
        if (!Array.isArray(date) && validateDate(date)) return true;
        if (Array.isArray(date)) {
            if (date.length === 2 && validateDate(date[0]) && validateDate(date[1])) {
                return true;
            }
            return validateDate(date[0]);
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
        if (props.closeOnAutoApply && !ignoreClose) {
            closeMenu();
        }
    };

    const updateTextInputWithDateTimeValue = () => {
        if (inputRef.value && props.textInput) {
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
        if (!props.textInput) {
            internalModelValue.value = null;
        }
    };

    /**
     * Closes the menu and clears the internal data
     */
    const closeMenu = (): void => {
        if (!props.inline) {
            if (isOpen.value) {
                isOpen.value = false;
                setMenuFocused(false);
                setShiftKey(false);
                clearArrowNav();
                emit('closed');
                setInitialPosition();
                if (inputValue.value) {
                    parseExternalModelValue(modelValueRef.value);
                }
            }
            clearInternalValues();
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

    const toggleMenu = (): void => {
        if (isOpen.value) return closeMenu();
        return openMenu();
    };

    const updateInternalModelValue = (value: Date | Date[]): void => {
        internalModelValue.value = value;
    };

    const shouldFormatInputValue = computed(() => props.textInput && defaults.value.textInputOptions.format);

    const handleInputFocus = () => {
        if (shouldFormatInputValue.value) {
            isInputFocused.value = true;
            formatInputValue();
        }

        emit('focus');
    };

    const handleBlur = () => {
        if (shouldFormatInputValue.value) {
            isInputFocused.value = false;
            formatInputValue();
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

    onClickOutside(
        dpMenuRef,
        inputRef,
        props.onClickOutside ? () => props.onClickOutside(validateBeforeEmit) : closeMenu,
    );

    defineExpose({
        closeMenu,
        selectDate,
        clearValue,
        openMenu,
        onScroll,
        formatInputValue, // exposed for testing purposes
        updateInternalModelValue, // modify internal modelValue
        setMonthYear,
    });
</script>
