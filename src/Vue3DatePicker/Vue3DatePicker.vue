<template>
    <div :class="wrapperClass">
        <DatepickerInput
            v-model:internal-value="internalValue"
            :placeholder="placeholder"
            :hide-input-icon="hideInputIcon"
            :readonly="readonly"
            :disabled="disabled"
            :input-class-name="inputClassName"
            :clearable="clearable"
            :state="state"
            :inline="inline"
            :text-input="textInput"
            :uid="uid"
            :mask-props="maskProps"
            :text-input-options="inputDefaultOptions"
            :range="range"
            @enter="selectDate"
            @clear="clearValue"
            @open="openMenu"
            @setInputDate="setInputDate"
            :id="`dp__input_${uid}`"
        >
            <template #trigger v-if="$slots.trigger">
                <slot name="trigger"></slot>
            </template>
            <template #input-icon v-if="$slots['input-icon']">
                <slot name="input-icon"></slot>
            </template>
            <template #clear-icon v-if="$slots['clear-icon']">
                <slot name="clear-icon"></slot>
            </template>
        </DatepickerInput>
        <teleport to="body" :disabled="inline">
            <DatepickerMenu
                :class="theme"
                :uid="uid"
                v-click-outside-directive.dp__menu="closeMenu"
                :open-on-top="openOnTop"
                :enable-time-picker="enableTimePicker"
                :week-numbers="weekNumbers"
                :week-start="weekStart"
                :disable-month-year-select="disableMonthYearSelect"
                :hours-increment="hoursIncrement"
                :minutes-increment="minutesIncrement"
                :menu-class-name="menuClassName"
                :calendar-class-name="calendarClassName"
                :year-range="yearRange"
                :is24="is24"
                :calendar-cell-class-name="calendarCellClassName"
                :hours-grid-increment="hoursGridIncrement"
                :minutes-grid-increment="minutesGridIncrement"
                :min-date="minDate"
                :max-date="maxDate"
                :style="menuPosition"
                :range="range"
                :auto-apply="autoApply"
                :locale="locale"
                :week-num-name="weekNumName"
                :preview-format="previewFormatDefault"
                :disabled-dates="disabledDates"
                :filters="filters"
                :min-time="minTime"
                :max-time="maxTime"
                :select-text="selectText"
                :cancel-text="cancelText"
                :inline="inline"
                :month-picker="monthPicker"
                :time-picker="timePicker"
                v-model:singleModelValue="singleModelValue"
                v-model:rangeModelValue="rangeModelValue"
                v-model:monthPickerValue="monthPickerValue"
                v-model:timePickerValue="timePickerValue"
                @closePicker="closeMenu"
                @selectDate="selectDate"
                @dpOpen="recalculatePosition"
                @autoApply="autoApplyValue"
                v-if="isOpen"
            />
        </teleport>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, onUnmounted, PropType, ref, toRef, watch } from 'vue';
    import {
        IDateFilter,
        ITimeRange,
        OpenPosition,
        DynamicClass,
        IModelValueTimePicker,
        IMaskProps,
        IDatepickerProps,
        IFormat,
        ITextInputOptions,
    } from './interfaces';
    import DatepickerInput from './components/DatepickerInput.vue';
    import DatepickerMenu from './components/DatepickerMenu.vue';
    import { clickOutsideDirective } from './directives/clickOutside';
    import { getDefaultPattern, useDateUtils } from './utils/date-utils';
    import { isFormatValidString, useInternalFormat, getPatternAndMask } from './utils/util';

    export default /*#__PURE__*/ defineComponent({
        name: 'Vue3DatePicker',
        emits: ['update:modelValue'],
        directives: { clickOutsideDirective },
        components: {
            DatepickerInput,
            DatepickerMenu,
        },
        props: {
            uid: { type: String as PropType<string>, default: 'dp' },
            is24: { type: Boolean as PropType<boolean>, default: true },
            enableTimePicker: { type: Boolean as PropType<boolean>, default: true },
            locale: { type: String as PropType<string>, default: 'en-US' },
            range: { type: Boolean as PropType<boolean>, default: false },
            modelValue: { type: [String, Date, Array, Object], default: null },
            position: { type: String as PropType<OpenPosition>, default: OpenPosition.center },
            placeholder: { type: String as PropType<string>, default: null },
            weekNumbers: { type: Boolean as PropType<boolean>, default: false },
            dark: { type: Boolean as PropType<boolean>, default: false },
            hoursIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            minutesIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 },
            minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 },
            minDate: { type: [Date, String] as PropType<Date | string>, default: null },
            maxDate: { type: [Date, String] as PropType<Date | string>, default: null },
            minTime: { type: Object as PropType<ITimeRange>, default: () => ({}) },
            maxTime: { type: Object as PropType<ITimeRange>, default: () => ({}) },
            weekStart: { type: [String, Number] as PropType<string | number>, default: 1 },
            disabled: { type: Boolean as PropType<boolean>, default: false },
            readonly: { type: Boolean as PropType<boolean>, default: false },
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
            inline: { type: Boolean as PropType<boolean>, default: false },
            selectText: { type: String as PropType<string>, default: 'Select' },
            cancelText: { type: String as PropType<string>, default: 'Cancel' },
            autoPosition: { type: Boolean as PropType<boolean>, default: true },
            monthPicker: { type: Boolean as PropType<boolean>, default: false },
            timePicker: { type: Boolean as PropType<boolean>, default: false },
            closeOnAutoApply: { type: Boolean as PropType<boolean>, default: true },
            textInput: { type: Boolean as PropType<boolean>, default: false },
            textInputOptions: { type: Object as PropType<ITextInputOptions>, default: () => null },
        },
        setup(props: IDatepickerProps, { emit }) {
            const isOpen = ref(false);
            const menuPosition = ref({ top: '0', left: '0', transform: 'none' });
            const internalValue = ref<string | string[]>('');
            const singleModelValue = ref();
            const rangeModelValue = ref();
            const openOnTop = ref(false);
            const valueCleared = ref(false);
            const modelValue = toRef(props, 'modelValue');
            const monthPickerValue = ref();
            const timePickerValue = ref();

            watch(modelValue, () => {
                if (externalInternalValueDiff.value) {
                    mapExternalToInternalValue();
                }
            });

            onMounted(() => {
                mapExternalToInternalValue();
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

            const wrapperClass = computed(
                (): DynamicClass => ({
                    dp__main: true,
                    dp__theme_dark: props.dark,
                    dp__theme_light: !props.dark,
                    dp__flex_display: props.inline,
                }),
            );

            const defaultPattern = computed((): string => {
                return isFormatValidString(props.format)
                    ? props.format
                    : getDefaultPattern(props.is24, props.monthPicker, props.timePicker);
            });

            const previewFormatDefault = computed(() => {
                if (!props.previewFormat) {
                    return isFormatValidString(props.format) ? defaultPattern.value : props.format;
                }
                return props.previewFormat;
            });

            const theme = computed(() => (props.dark ? 'dp__theme_dark' : 'dp__theme_light'));

            const specificMode = computed((): boolean => props.monthPicker || props.timePicker);

            const isSingle = computed((): boolean => !props.range);

            const maskProps = computed((): IMaskProps => getPatternAndMask(defaultPattern.value, props.range));

            const inputDefaultOptions = computed((): ITextInputOptions => {
                return Object.assign(
                    {
                        enterSubmit: true,
                        openMenu: true,
                        freeInput: false,
                    },
                    props.textInputOptions || {},
                );
            });

            const { formatDate, formatDateRange, formatMonth, formatTime } = useDateUtils(defaultPattern.value);

            const externalInternalValueDiff = computed((): boolean => {
                let dateValue;
                if (props.monthPicker) {
                    dateValue = JSON.stringify(monthPickerValue.value);
                } else if (props.timePicker) {
                    dateValue = JSON.stringify(timePickerValue.value);
                } else {
                    dateValue = props.range
                        ? JSON.stringify(rangeModelValue.value)
                        : JSON.stringify(singleModelValue.value);
                }
                return JSON.stringify(modelValue.value) !== dateValue;
            });

            const clearValue = (): void => {
                valueCleared.value = true;
                internalValue.value = '';
                clearInternalValues();
                emit('update:modelValue', null);
                closeMenu();
            };

            const formatSingleDateValue = (formatInternal = false): void => {
                if (!specificMode.value) {
                    if (singleModelValue.value) {
                        if (formatInternal) {
                            const dateValue = new Date(singleModelValue.value);
                            if (useInternalFormat(props.format)) {
                                internalValue.value = formatDate(dateValue);
                            } else {
                                internalValue.value = props.format(dateValue);
                            }
                        }
                    }
                }
            };

            const formatRangeDateValue = (formatInternal = false): void => {
                if (rangeModelValue.value && rangeModelValue.value.length === 2 && !specificMode.value) {
                    const dateValue = [new Date(rangeModelValue.value[0]), new Date(rangeModelValue.value[1])];
                    if (formatInternal) {
                        if (useInternalFormat(props.format)) {
                            internalValue.value = formatDateRange(dateValue);
                        } else {
                            internalValue.value = props.format(dateValue);
                        }
                    }
                }
            };

            const formatMonthPickerValue = (formatInternal = false): void => {
                if (monthPickerValue.value) {
                    if (formatInternal) {
                        if (useInternalFormat(props.format)) {
                            internalValue.value = formatMonth(monthPickerValue.value);
                        } else {
                            internalValue.value = props.format(monthPickerValue.value);
                        }
                    }
                }
            };

            const formatTimePickerValue = (formatInternal = false): void => {
                if (timePickerValue.value) {
                    if (formatInternal) {
                        if (useInternalFormat(props.format)) {
                            internalValue.value = formatTime(timePickerValue.value);
                        } else {
                            internalValue.value = props.format(timePickerValue.value);
                        }
                    }
                }
            };

            const mapExternalToInternalValue = () => {
                if (!specificMode.value) {
                    if (props.modelValue) {
                        if (props.range) {
                            if (Array.isArray(props.modelValue)) {
                                rangeModelValue.value = JSON.parse(JSON.stringify(props.modelValue)).map(
                                    (date: string) => new Date(date),
                                );
                                formatRangeDateValue(true);
                            } else {
                                rangeModelValue.value = [];
                            }
                        } else {
                            singleModelValue.value = new Date(props.modelValue);
                            formatSingleDateValue(true);
                        }
                    } else {
                        rangeModelValue.value = [];
                        singleModelValue.value = null;
                    }
                } else {
                    if (props.monthPicker) {
                        if (props.modelValue) {
                            monthPickerValue.value = { month: +props.modelValue.month, year: +props.modelValue.year };
                            formatMonthPickerValue(true);
                        } else {
                            monthPickerValue.value = null;
                        }
                    }
                    if (props.timePicker) {
                        if (props.modelValue) {
                            if (props.range) {
                                timePickerValue.value = props.modelValue.map((val: IModelValueTimePicker) => {
                                    const mapped: IModelValueTimePicker = { hours: +val.hours, minutes: +val.minutes };
                                    return mapped;
                                });
                            } else {
                                timePickerValue.value = {
                                    hours: +props.modelValue.hours,
                                    minutes: +props.modelValue.minutes,
                                };
                            }
                            formatTimePickerValue(true);
                        } else {
                            timePickerValue.value = null;
                        }
                    }
                }
            };

            const emitModelValue = (): void => {
                if (props.monthPicker) {
                    formatMonthPickerValue(true);
                    emit('update:modelValue', monthPickerValue.value);
                } else if (props.timePicker) {
                    formatTimePickerValue(true);
                    emit('update:modelValue', timePickerValue.value);
                } else if (props.range) {
                    formatRangeDateValue(true);
                    emit('update:modelValue', rangeModelValue.value);
                } else {
                    formatSingleDateValue(true);
                    emit('update:modelValue', singleModelValue.value);
                }
            };

            const selectDate = (): void => {
                emitModelValue();
                closeMenu();
            };

            const onScroll = (): void => {
                if (props.closeOnScroll) {
                    closeMenu();
                } else if (props.autoPosition) {
                    setMenuPosition();
                } else {
                    window.removeEventListener('scroll', onScroll);
                }
            };

            const onResize = (): void => {
                setMenuPosition();
            };

            const setMenuPosition = (recalculate = true): void => {
                const el = document.getElementById(`dp__input_${props.uid}`);
                if (el) {
                    const { left, width, height } = el.getBoundingClientRect();
                    const position = { top: `${height + el.offsetTop + 10}px`, left: '', transform: 'none' };
                    if (props.position === OpenPosition.left) {
                        position.left = `${left}px`;
                    }

                    if (props.position === OpenPosition.right) {
                        position.left = `${left + width}px`;
                        position.transform = `translateX(-100%)`;
                    }

                    if (props.position === OpenPosition.center) {
                        position.left = `${left + width / 2}px`;
                        position.transform = `translateX(-50%)`;
                    }
                    menuPosition.value = position;
                    if (recalculate) {
                        recalculatePosition();
                    }
                }
            };

            const recalculatePosition = (): void => {
                const el = document.getElementById(`dp__input_${props.uid}`);
                if (el) {
                    const { height: inputHeight, top } = el.getBoundingClientRect();
                    const fullHeight = window.innerHeight;
                    const freeSpaceBottom = fullHeight - top - inputHeight;

                    const menuEl = document.getElementById(`dp__menu_${props.uid}`);

                    if (menuEl) {
                        const { height } = menuEl.getBoundingClientRect();
                        const menuHeight = height + inputHeight;
                        if (menuHeight > top && menuHeight > freeSpaceBottom) {
                            if (top > freeSpaceBottom) {
                                openOnTop.value = true;
                            } else {
                                setMenuPosition(false);
                                openOnTop.value = false;
                            }
                        } else {
                            if (menuHeight > freeSpaceBottom) {
                                menuPosition.value.top = `${el.offsetTop - height - 12}px`;
                                openOnTop.value = true;
                            } else {
                                setMenuPosition(false);
                                openOnTop.value = false;
                            }
                        }
                    }
                }
            };

            const autoApplyValue = (ignoreClose = false): void => {
                if (props.autoApply) {
                    emitModelValue();
                    if (props.closeOnAutoApply && !ignoreClose) {
                        closeMenu();
                    }
                }
            };

            const openMenu = (): void => {
                if (!props.disabled && !props.readonly) {
                    if (!valueCleared.value) {
                        setMenuPosition();
                        isOpen.value = !isOpen.value;

                        if (!isOpen.value) {
                            clearInternalValues();
                        }
                    }
                    valueCleared.value = false;
                    mapExternalToInternalValue();
                }
            };

            const clearInternalValues = (): void => {
                singleModelValue.value = null;
                rangeModelValue.value = [];
                monthPickerValue.value = null;
                timePickerValue.value = null;
            };

            const closeMenu = (): void => {
                if (!props.inline) {
                    if (isOpen.value) {
                        isOpen.value = false;
                    }
                    clearInternalValues();
                }
            };

            const setInputDate = (date: Date | Date[] | null): void => {
                if (!date) {
                    rangeModelValue.value = [];
                    singleModelValue.value = null;
                }
                if (Array.isArray(date)) {
                    rangeModelValue.value = date;
                } else {
                    singleModelValue.value = date;
                }
            };

            return {
                singleModelValue,
                rangeModelValue,
                menuPosition,
                internalValue,
                isOpen,
                isSingle,
                theme,
                wrapperClass,
                openOnTop,
                monthPickerValue,
                timePickerValue,
                maskProps,
                previewFormatDefault,
                inputDefaultOptions,
                setInputDate,
                clearValue,
                openMenu,
                closeMenu,
                selectDate,
                recalculatePosition,
                autoApplyValue,
            };
        },
    });
</script>
