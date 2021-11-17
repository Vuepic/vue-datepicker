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
                textInput,
                textInputOptions: inputDefaultOptions,
                range,
                isMenuOpen: isOpen,
                pattern: defaultPattern,
                autoApply,
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
                    twoCalendars,
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
                    twoCalendarsSolo,
                    disabledWeekDays,
                    allowedDates,
                    showNowButton,
                    nowButtonLabel,
                    monthChangeOnScroll,
                }"
                v-model:internalModelValue="internalModelValue"
                @close-picker="closeMenu"
                @select-date="selectDate"
                @dp-open="recalculatePosition"
                @auto-apply="autoApplyValue"
                @time-update="timeUpdate"
            >
                <template v-for="(slot, i) in slotList" #[slot]="args" :key="i">
                    <slot :name="slot" v-bind="{ ...args }" />
                </template>
            </DatepickerMenu>
        </teleport>
    </div>
</template>

<script lang="ts" setup>
    import { computed, DefineComponent, onMounted, onUnmounted, PropType, ref, toRef, useSlots, watch } from 'vue';

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
        WeekStartNum,
        WeekStartStr,
    } from './interfaces';
    import { getDateHours, getDateMinutes, getDefaultPattern } from './utils/date-utils';
    import { getDefaultTextInputOptions, getDefaultFilters } from './utils/util';
    import { usePosition } from './components/composition/position';
    import { useExternalInternalMapper } from './components/composition/external-internal-mapper';
    import { isString } from './utils/type-guard';
    import { mapSlots } from './components/composition/slots';
    import { onClickOutside } from './directives/clickOutside';

    const emit = defineEmits(['update:modelValue', 'textSubmit', 'closed', 'cleared', 'open']);
    const props = defineProps({
        is24: { type: Boolean as PropType<boolean>, default: true },
        enableTimePicker: { type: Boolean as PropType<boolean>, default: true },
        locale: { type: String as PropType<string>, default: 'en-US' },
        range: { type: Boolean as PropType<boolean>, default: false },
        twoCalendars: { type: Boolean as PropType<boolean>, default: false },
        twoCalendarsSolo: { type: Boolean as PropType<boolean>, default: false },
        modelValue: { type: [String, Date, Array, Object] as PropType<ModelValue>, default: null },
        position: { type: String as PropType<OpenPosition>, default: 'center' },
        placeholder: { type: String as PropType<string>, default: null },
        weekNumbers: { type: Boolean as PropType<boolean>, default: false },
        dark: { type: Boolean as PropType<boolean>, default: false },
        hoursIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
        minutesIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
        hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
        minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
        minDate: { type: [Date, String] as PropType<Date | string>, default: null },
        maxDate: { type: [Date, String] as PropType<Date | string>, default: null },
        minTime: { type: Object as PropType<ITimeValue>, default: () => ({}) },
        maxTime: { type: Object as PropType<ITimeValue>, default: () => ({}) },
        weekStart: { type: [String, Number] as PropType<WeekStartNum | WeekStartStr>, default: 1 },
        disabled: { type: Boolean as PropType<boolean>, default: false },
        readonly: { type: Boolean as PropType<boolean>, default: false },
        monthNameFormat: { type: String as PropType<'long' | 'short'>, default: 'short' },
        weekNumName: { type: String as PropType<string>, default: 'W' },
        format: {
            type: [String, Function] as PropType<IFormat>,
            default: () => null,
        },
        previewFormat: {
            type: [String, Function] as PropType<IFormat>,
            default: () => null,
        },
        inputClassName: { type: String as PropType<string>, default: null },
        menuClassName: { type: String as PropType<string>, default: null },
        calendarClassName: { type: String as PropType<string>, default: null },
        calendarCellClassName: { type: String as PropType<string>, default: null },
        hideInputIcon: { type: Boolean as PropType<boolean>, default: false },
        state: { type: Boolean as PropType<boolean>, default: null },
        clearable: { type: Boolean as PropType<boolean>, default: true },
        closeOnScroll: { type: Boolean as PropType<boolean>, default: false },
        autoApply: { type: Boolean as PropType<boolean>, default: false },
        filters: { type: Object as PropType<IDateFilter>, default: () => ({}) },
        disableMonthYearSelect: { type: Boolean as PropType<boolean>, default: false },
        yearRange: { type: Array as PropType<number[]>, default: () => [1970, 2100] },
        disabledDates: { type: Array as PropType<Date[] | string[]>, default: () => [] },
        disabledWeekDays: { type: Array as PropType<string[] | number[]>, default: () => [] },
        inline: { type: Boolean as PropType<boolean>, default: false },
        selectText: { type: String as PropType<string>, default: 'Select' },
        cancelText: { type: String as PropType<string>, default: 'Cancel' },
        autoPosition: { type: Boolean as PropType<boolean>, default: true },
        monthPicker: { type: Boolean as PropType<boolean>, default: false },
        timePicker: { type: Boolean as PropType<boolean>, default: false },
        closeOnAutoApply: { type: Boolean as PropType<boolean>, default: true },
        textInput: { type: Boolean as PropType<boolean>, default: false },
        textInputOptions: { type: Object as PropType<ITextInputOptions>, default: () => ({}) },
        teleport: { type: String as PropType<string>, default: 'body' },
        startDate: { type: [Date, String] as PropType<string | Date>, default: null },
        startTime: { type: [Object, Array] as PropType<ITimeValue | ITimeValue[]>, default: null },
        monthYearComponent: { type: Object as PropType<DefineComponent>, default: null },
        timePickerComponent: { type: Object as PropType<DefineComponent>, default: null },
        actionRowComponent: { type: Object as PropType<DefineComponent>, default: null },
        customProps: { type: Object as PropType<Record<string, unknown>>, default: null },
        hideOffsetDates: { type: Boolean as PropType<boolean>, default: false },
        autoRange: { type: [Number, String] as PropType<number | string>, default: null },
        noToday: { type: Boolean as PropType<boolean>, default: false },
        noHoursOverlay: { type: Boolean as PropType<boolean>, default: false },
        noMinutesOverlay: { type: Boolean as PropType<boolean>, default: false },
        altPosition: { type: Boolean as PropType<boolean>, default: false },
        allowedDates: { type: Array as PropType<string[] | Date[]>, default: () => [] },
        showNowButton: { type: Boolean as PropType<boolean>, default: false },
        nowButtonLabel: { type: String as PropType<string>, default: 'Now' },
        partialRange: { type: Boolean as PropType<boolean>, default: true },
        monthChangeOnScroll: { type: Boolean as PropType<boolean>, default: true },
    });
    const slots = useSlots();
    const isOpen = ref(false);
    const modelValueMap = toRef(props, 'modelValue');
    const dpMenuRef = ref(null);
    const inputRef = ref(null);

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

    const { openOnTop, menuPosition, setMenuPosition, recalculatePosition } = usePosition(
        props.position,
        props.altPosition,
        dpMenuRef,
        inputRef,
    );

    const { internalModelValue, inputValue, parseExternalModelValue, emitModelValue, checkBeforeEmit } =
        useExternalInternalMapper(
            props.format,
            props.timePicker,
            props.monthPicker,
            props.range,
            props.partialRange,
            props.is24,
            props.enableTimePicker,
            emit,
        );

    const wrapperClass = computed(
        (): DynamicClass => ({
            dp__main: true,
            dp__theme_dark: props.dark,
            dp__theme_light: !props.dark,
            dp__flex_display: props.inline,
        }),
    );

    const defaultPattern = computed((): string => {
        return isString(props.format)
            ? props.format
            : getDefaultPattern(null, props.is24, props.monthPicker, props.timePicker, props.enableTimePicker);
    });

    const previewFormatDefault = computed(() => {
        if (!props.previewFormat) {
            return isString(defaultPattern.value) ? defaultPattern.value : props.format;
        }
        return props.previewFormat;
    });

    const theme = computed(() => (props.dark ? 'dp__theme_dark' : 'dp__theme_light'));

    const inputDefaultOptions = computed((): ITextInputOptions => {
        return Object.assign(getDefaultTextInputOptions(), props.textInputOptions);
    });

    const defaultFilters = computed(() => getDefaultFilters(props.filters));

    const defaultStartTime = computed((): ITimeValue | ITimeValue[] | null => {
        const assignDefaultTime = (obj: ITimeValue): ITimeValue => {
            const defaultTime = { hours: getDateHours(), minutes: getDateMinutes() };
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
            emitModelValue();
            if (props.closeOnAutoApply && !ignoreClose) {
                closeMenu();
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
            emit('textSubmit');
        }
    };

    const timeUpdate = (): void => {
        if (props.autoApply) {
            emitModelValue();
        }
    };

    onClickOutside(dpMenuRef, inputRef, closeMenu);

    defineExpose({
        closeMenu,
        selectDate,
        clearValue,
        openMenu,
    });
</script>
