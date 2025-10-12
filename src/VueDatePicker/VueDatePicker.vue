<template>
    <div ref="picker-wrapper" :class="wrapperClass" data-datepicker-instance :data-dp-mobile="isMobile">
        <DatepickerInput
            ref="input-cmp"
            :is-menu-open="isOpen"
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
        <div
            ref="dp-menu-wrap"
            :class="{ 'dp--menu-wrapper': !inline.enabled, dp__outer_menu_wrap: true }"
            :style="!inline.enabled ? floatingStyles : undefined"
        >
            <transition :name="menuTransition(placement === 'top')" :css="showTransition && !inline.enabled">
                <DatepickerMenu
                    v-if="isOpen"
                    ref="dp-menu"
                    :class="{ [theme]: true, 'dp--menu-wrapper': rootProps.teleport }"
                    :no-overlay-focus="noOverlayFocus"
                    :collapse="collapse"
                    :get-input-rect="getInputRect"
                    @close-picker="closeMenu"
                    @select-date="selectDate"
                    @auto-apply="autoApplyValue"
                    @time-update="timeUpdate"
                    @menu-blur="rootEmit('blur')"
                >
                    <template v-for="(slot, i) in slotList" #[slot]="args" :key="i">
                        <slot :name="slot" v-bind="{ ...args }" />
                    </template>
                    <template v-if="!inline.enabled && !teleport.center" #arrow>
                        <div
                            ref="menu-arrow"
                            :class="{ dp__arrow_top: placement === 'bottom', dp__arrow_bottom: placement === 'top' }"
                            :style="{
                                left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
                                top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : '',
                            }"
                        ></div>
                    </template>
                </DatepickerMenu>
            </transition>
        </div>
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
        nextTick,
        useTemplateRef,
        type Ref,
        type ComponentPublicInstance,
    } from 'vue';
    import { onClickOutside } from '@vueuse/core';
    import { arrow, autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/vue';

    import DatepickerInput from '@/components/DatePickerInput/DatepickerInput.vue';
    import DatepickerMenu from '@/components/DatepickerMenu.vue';

    import {
        useExternalInternalMapper,
        useSlotsMapper,
        useArrowNavigation,
        useTransitions,
        useValidation,
        useResponsive,
        useUtils,
        useContext,
    } from '@/composables';
    import type { DynamicClass, InputParsedDate, MenuView, ModelValue, MonthModel } from '@/types';

    const {
        rootEmit,
        setState,
        isTextInputDate,
        inputValue,
        modelValue,
        rootProps,
        defaults: { inline, config, textInput, range, multiDates, teleport },
    } = useContext();
    const { clearArrowNav } = useArrowNavigation();
    const { validateDate, isValidTime } = useValidation();
    const { menuTransition, showTransition } = useTransitions();
    const { isMobile } = useResponsive(config);
    const { mapSlots } = useSlotsMapper();
    const { findNextFocusableElement, getNumVal } = useUtils();

    const slots = useSlots();
    const isOpen = ref(false);
    const modelValueRef = toRef(rootProps, 'modelValue');
    const timezoneRef = toRef(rootProps, 'timezone');

    const dpWrapMenuRef = useTemplateRef('dp-menu-wrap');
    const dpMenuRef = useTemplateRef('dp-menu');
    const inputRef = useTemplateRef('input-cmp');
    const pickerWrapperRef = useTemplateRef('picker-wrapper');
    const menuArrowRef = useTemplateRef('menu-arrow');

    const isInputFocused = ref(false);
    const shouldFocusNext = ref(false);
    const shiftKeyActive = ref(false);
    const collapse = ref(false);

    const { floatingStyles, middlewareData, placement } = useFloating(
        inputRef as Ref<ComponentPublicInstance>,
        dpWrapMenuRef,
        {
            middleware: [offset(10), flip(), shift(), arrow({ element: menuArrowRef })],
            whileElementsMounted(...args) {
                return autoUpdate(...args, { animationFrame: true });
            },
        },
    );

    onMounted(() => {
        parseExternalModelValue(rootProps.modelValue);
        nextTick().then(() => {
            if (!inline.value.enabled) {
                globalThis.addEventListener('resize', onResize);
            }
        });

        if (inline.value.enabled) {
            isOpen.value = true;
        }

        globalThis.addEventListener('keyup', onKeyUp);
        globalThis.addEventListener('keydown', onKeyDown);
    });

    onUnmounted(() => {
        if (!inline.value.enabled) {
            globalThis.removeEventListener('resize', onResize);
        }
        globalThis.removeEventListener('keyup', onKeyUp);
        globalThis.removeEventListener('keydown', onKeyDown);
    });

    const slotList = mapSlots(slots, 'all', rootProps.presetDates);
    const inputSlots = mapSlots(slots, 'input');

    watch(
        [modelValueRef, timezoneRef],
        () => {
            parseExternalModelValue(modelValueRef.value);
        },
        { deep: true },
    );

    const { parseExternalModelValue, emitModelValue, formatInputValue, checkBeforeEmit } = useExternalInternalMapper();

    const wrapperClass = computed(
        (): DynamicClass => ({
            dp__main: true,
            dp__theme_dark: rootProps.dark,
            dp__theme_light: !rootProps.dark,
            dp__flex_display: inline.value.enabled,
            'dp--flex-display-collapsed': collapse.value,
            dp__flex_display_with_input: inline.value.input,
        }),
    );

    const theme = computed(() => (rootProps.dark ? 'dp__theme_dark' : 'dp__theme_light'));

    const noOverlayFocus = computed(() => {
        return (
            inline.value.enabled &&
            (rootProps.timePicker || rootProps.monthPicker || rootProps.yearPicker || rootProps.quarterPicker)
        );
    });

    const getInputRect = () => {
        return inputRef.value?.$el?.getBoundingClientRect() ?? ({ width: 0, left: 0, right: 0 } as DOMRect);
    };

    const onScroll = (): void => {
        if (isOpen.value) {
            if (config.value.closeOnScroll) {
                closeMenu();
            }
        }
    };

    const onResize = (): void => {
        const width = dpMenuRef.value?.$el.getBoundingClientRect().width ?? 0;
        collapse.value = document.body.offsetWidth <= width;
    };

    const onKeyUp = (event: KeyboardEvent) => {
        if (event.key === 'Tab' && !inline.value.enabled && !rootProps.teleport && config.value.tabOutClosesMenu) {
            if (!pickerWrapperRef.value!.contains(document.activeElement)) {
                closeMenu();
            }
        }

        shiftKeyActive.value = event.shiftKey;
    };

    const onKeyDown = (event: KeyboardEvent) => {
        shiftKeyActive.value = event.shiftKey;
    };

    const openMenu = () => {
        if (!rootProps.disabled && !rootProps.readonly) {
            isOpen.value = true;

            if (isOpen.value) {
                rootEmit('open');
            }

            if (!isOpen.value) {
                clearInternalValues();
            }

            parseExternalModelValue(rootProps.modelValue);
        }
    };

    const clearValue = (): void => {
        inputValue.value = '';
        clearInternalValues();
        dpMenuRef.value?.onValueCleared();
        inputRef.value?.setParsedDate(null);
        rootEmit('update:model-value', null);
        rootEmit('cleared');
        if (config.value.closeOnClearValue) {
            closeMenu();
        }
    };

    const validateBeforeEmit = () => {
        const date = modelValue.value;
        if (!date) return true;
        if (!Array.isArray(date) && validateDate(date)) return true;
        if (Array.isArray(date)) {
            if (multiDates.value.enabled) return true;

            if (date.length === 2 && validateDate(date[0]) && validateDate(date[1])) {
                return true;
            }
            if (range.value.partialRange && !rootProps.timePicker) return validateDate(date[0]);
            return false;
        }
        return false;
    };

    const selectDate = (): void => {
        if (checkBeforeEmit() && validateBeforeEmit()) {
            emitModelValue();
            closeMenu();
        } else {
            rootEmit('invalid-select');
        }
    };

    const emitOnAutoApply = (ignoreClose: boolean): void => {
        updateTextInputWithDateTimeValue();
        emitModelValue();
        if (config.value.closeOnAutoApply && !ignoreClose) {
            closeMenu();
        }
    };

    const updateTextInputWithDateTimeValue = () => {
        if (inputRef.value && textInput.value.enabled) {
            inputRef.value.setParsedDate(modelValue.value as Date);
        }
    };

    const autoApplyValue = (ignoreClose = false): void => {
        if (rootProps.autoApply) {
            const isTimeValid = isValidTime(modelValue.value);

            if (isTimeValid && validateBeforeEmit()) {
                if (range.value.enabled && Array.isArray(modelValue.value)) {
                    if (range.value.partialRange || modelValue.value.length === 2) {
                        emitOnAutoApply(ignoreClose);
                    }
                } else {
                    emitOnAutoApply(ignoreClose);
                }
            }
        }
    };

    const clearInternalValues = (): void => {
        if (!textInput.value.enabled) {
            modelValue.value = null;
        }
    };

    const closeMenu = (fromClickAway = false): void => {
        if (fromClickAway && modelValue.value && config.value.setDateOnMenuClose) {
            selectDate();
        }
        if (!inline.value.enabled) {
            if (isOpen.value) {
                isOpen.value = false;
                setState('menuFocused', false);
                setState('shiftKeyInMenu', false);
                clearArrowNav();
                rootEmit('closed');
                if (inputValue.value) {
                    parseExternalModelValue(modelValueRef.value);
                }
            }
            clearInternalValues();
            rootEmit('blur');
        }
    };

    const setInputDate = (date: InputParsedDate, submit?: boolean, tabbed = false): void => {
        if (!date) {
            modelValue.value = null;
            return;
        }
        const validDate = Array.isArray(date) ? !date.some((d) => !validateDate(d)) : validateDate(date);
        const validTime = isValidTime(date as Date[]);
        if (validDate && validTime) {
            isTextInputDate.value = true;
            modelValue.value = date as Date[];
            if (submit) {
                shouldFocusNext.value = tabbed;
                selectDate();
                rootEmit('text-submit');
            } else if (rootProps.autoApply) {
                autoApplyValue();
            }
            nextTick().then(() => {
                isTextInputDate.value = false;
            });
        } else {
            rootEmit('invalid-date', date as Date);
        }
    };

    const timeUpdate = (): void => {
        if (rootProps.autoApply && isValidTime(modelValue.value)) {
            emitModelValue();
        }
        updateTextInputWithDateTimeValue();
    };

    const toggleMenu = () => {
        if (isOpen.value) return closeMenu();
        return openMenu();
    };

    const updateInternalModelValue = (value: Date | Date[]): void => {
        modelValue.value = value;
    };

    const handleInputFocus = () => {
        if (textInput.value.enabled) {
            isInputFocused.value = true;
            formatInputValue();
        }

        rootEmit('focus');
    };

    const handleBlur = () => {
        if (textInput.value.enabled) {
            isInputFocused.value = false;
            parseExternalModelValue(rootProps.modelValue);
            if (shouldFocusNext.value) {
                const el = findNextFocusableElement(pickerWrapperRef.value!, shiftKeyActive.value);
                el?.focus();
            }
        }
        rootEmit('blur');
    };

    const setMonthYear = (value: Partial<MonthModel>) => {
        if (dpMenuRef.value) {
            dpMenuRef.value.updateMonthYear(0, {
                month: getNumVal(value.month) as number,
                year: getNumVal(value.year) as number,
            });
        }
    };

    const parseModel = (value?: ModelValue) => {
        parseExternalModelValue(value ?? rootProps.modelValue);
    };

    const switchView = (view: MenuView, instance?: number) => {
        dpMenuRef.value?.switchView(view, instance);
    };

    const clickOutside = (validateBeforeEmit: () => boolean, evt: PointerEvent) => {
        if (config.value.onClickOutside) return config.value.onClickOutside(validateBeforeEmit, evt);
        return closeMenu(true);
    };

    const handleFlow = (skipStep = 0) => {
        dpMenuRef.value?.handleFlow(skipStep);
    };

    const getDpWrapMenuRef = () => dpWrapMenuRef;

    onClickOutside(dpWrapMenuRef, (evt: PointerEvent) => clickOutside(validateBeforeEmit, evt), {
        ignore: [inputRef as any],
    });

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
        toggleMenu,
        handleFlow,
        getDpWrapMenuRef,
    });
</script>
