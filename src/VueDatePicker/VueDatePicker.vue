<template>
    <div :class="wrapperClass">
        <span tabindex="-1" ref="focusRefBefore"></span>
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
            @toggle="toggleMenu"
            @close="closeMenu"
            @focus-prev="$emit('focus-prev')"
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
                    weekNumbers,
                    weekStart,
                    disableMonthYearSelect,
                    menuClassName,
                    calendarClassName,
                    yearRange,
                    range,
                    multiCalendars: multiCalendarDefault,
                    multiCalendarsSolo,
                    calendarCellClassName,
                    enableTimePicker,
                    is24,
                    hoursIncrement,
                    minutesIncrement,
                    hoursGridIncrement,
                    minutesGridIncrement,
                    minDate,
                    maxDate,
                    autoApply,
                    selectText,
                    cancelText,
                    previewFormat: previewFormatDefault,
                    locale,
                    weekNumName,
                    disabledDates,
                    filters: defaultFilters,
                    minTime,
                    maxTime,
                    inline,
                    openOnTop,
                    monthPicker,
                    timePicker,
                    monthNameFormat,
                    startDate,
                    startTime: defaultStartTime,
                    monthYearComponent,
                    timePickerComponent,
                    actionRowComponent,
                    customProps,
                    hideOffsetDates,
                    autoRange,
                    noToday,
                    noHoursOverlay,
                    noMinutesOverlay,
                    disabledWeekDays,
                    allowedDates,
                    showNowButton,
                    nowButtonLabel,
                    monthChangeOnScroll,
                    markers,
                    uid,
                    modeHeight,
                    enableSeconds,
                    secondsIncrement,
                    secondsGridIncrement,
                    noSecondsOverlay,
                    escClose,
                    spaceConfirm,
                    monthChangeOnArrows,
                    textInput,
                    disabled,
                    readonly,
                    multiDates,
                    presetRanges,
                    flow,
                    preventMinMaxNavigation,
                    minRange,
                    maxRange,
                    fixedStart,
                    fixedEnd,
                    multiDatesLimit,
                    reverseYears,
                    keepActionRow,
                    weekPicker,
                    noSwipe,
                    vertical,
                    arrowNavigation,
                    yearPicker,
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
    import { computed, nextTick, onMounted, onUnmounted, provide, ref, toRef, useSlots, watch } from 'vue';
    import { getHours, getMinutes, getSeconds } from 'date-fns';

    import DatepickerInput from './components/DatepickerInput.vue';
    import DatepickerMenu from './components/DatepickerMenu.vue';

    import { usePosition } from '@/components/composition/position';
    import { useExternalInternalMapper } from '@/components/composition/external-internal-mapper';
    import { mapSlots } from '@/components/composition/slots';

    import type { AreaLabels, DynamicClass, ITextInputOptions, ITimeValue, ITransition } from './interfaces';

    import { dateValidator, getDefaultPattern, isValidTime } from './utils/date-utils';
    import {
        getDefaultTextInputOptions,
        getDefaultFilters,
        mergeDefaultTransitions,
        defaultAriaLabels,
    } from './utils/util';
    import { isString } from './utils/type-guard';
    import { onClickOutside } from './directives/clickOutside';
    import {
        AllProps,
        ariaLabelsKey,
        arrowNavigationKey,
        autoApplyKey,
        formatLocaleKey,
        textInputKey,
        transitionsKey,
    } from './utils/props';
    import { useArrowNavigation } from '@/components/composition/arrow-navigate';
    import { useStore } from '@/components/composition/store';

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
        'focus-prev',
        'updateMonthYear',
    ]);
    const props = defineProps({
        ...AllProps,
    });
    const slots = useSlots();
    const isOpen = ref(false);
    const modelValueMap = toRef(props, 'modelValue');
    const dpMenuRef = ref(null);
    const inputRef = ref(null);
    const focusRef = ref<HTMLElement | null>(null);
    const focusRefBefore = ref<HTMLElement | null>(null);
    provide(autoApplyKey, props.autoApply);
    const formatLocaleRef = computed(() => props.formatLocale);
    provide(formatLocaleKey, formatLocaleRef);
    provide(textInputKey, toRef(props, 'textInput'));
    provide(arrowNavigationKey, toRef(props, 'arrowNavigation'));

    onMounted(() => {
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

    const { openOnTop, menuPosition, setMenuPosition, recalculatePosition, setInitialPosition } = usePosition(
        props.position,
        props.altPosition,
        props.autoPosition,
        dpMenuRef,
        inputRef,
        props.inline,
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
        props.yearPicker,
        props.textInputOptions,
        emit,
    );

    const { clearArrowNav } = useArrowNavigation();
    const { setMenuFocused, setShiftKey } = useStore();

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
                  props.yearPicker,
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
    provide(transitionsKey, defaultTransitions);

    const theme = computed(() => (props.dark ? 'dp__theme_dark' : 'dp__theme_light'));

    const inputDefaultOptions = computed((): ITextInputOptions => {
        return Object.assign(getDefaultTextInputOptions(), props.textInputOptions);
    });

    const areaLabelsDefault = computed((): AreaLabels => defaultAriaLabels(props.ariaLabels));
    provide(ariaLabelsKey, areaLabelsDefault);

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
            setInitialPosition();
            isOpen.value = true;
            nextTick().then(() => {
                setMenuPosition();
                if (isOpen.value) {
                    emit('open');
                    emit('focus');
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
        emit('update:modelValue', null);
        emit('cleared');
        closeMenu();
    };

    const validateBeforeEmit = () => {
        const { validate } = dateValidator(
            props.minDate,
            props.maxDate,
            props.disabledDates,
            props.allowedDates,
            defaultFilters.value,
            props.disabledWeekDays,
            props.yearRange,
        );
        const date = internalModelValue.value;
        if (!Array.isArray(date) && validate(date)) {
            return true;
        }
        if (Array.isArray(date)) {
            if (date.length === 2 && validate(date[0]) && validate(date[1])) {
                return true;
            } else if (validate(date[0])) {
                return true;
            }
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
        }
    };

    const emitOnAutoApply = (ignoreClose: boolean): void => {
        emitModelValue();
        if (props.closeOnAutoApply && !ignoreClose) {
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
            const isTimeValid =
                !props.enableTimePicker || props.monthPicker || props.yearPicker
                    ? true
                    : isValidTime(internalModelValue.value, props.maxTime, props.minTime);
            if (isTimeValid && validateBeforeEmit()) {
                if (props.range && Array.isArray(internalModelValue.value)) {
                    if (props.partialRange) {
                        emitOnAutoApply(ignoreClose);
                    } else if (internalModelValue.value.length === 2) {
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
        internalModelValue.value = null;
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
                emit('blur');
                setInitialPosition();
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

    const toggleMenu = (): void => {
        if (isOpen.value) return closeMenu();
        return openMenu();
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
