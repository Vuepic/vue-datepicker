<template>
    <div class="dp__main" :class="theme">
        <DatepickerInput
            v-if="!inline"
            :internal-value="internalValue"
            :placeholder="placeholder"
            :hide-input-icon="hideInputIcon"
            :readonly="readonly"
            :disabled="disabled"
            :input-class-name="inputClassName"
            :clearable="clearable"
            :state="state"
            @clear="clearValue"
            @open="openMenu"
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
        <teleport to="body">
            <DatepickerMenu
                :class="theme"
                :uid="uid"
                v-click-outside-directive.dp__menu="closeMenu"
                :enable-time-picker="enableTimePicker"
                :week-numbers="weekNumbers"
                :week-start="weekStart"
                :disable-month-year-select="disableMonthYearSelect"
                :hours-increment="hoursIncrement"
                :minutes-incrementt="minutesIncrement"
                :menu-class-name="menuClassName"
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
                :preview-format="previewFormat"
                :disabled-dates="disabledDates"
                :filters="filters"
                :min-time="minTime"
                :max-time="maxTime"
                :select-text="selectText"
                :cancel-text="cancelText"
                v-model:singleModelValue="singleModelValue"
                v-model:rangeModelValue="rangeModelValue"
                @closePicker="closeMenu"
                @selectDate="selectDate"
                @openToTop="recalculatePosition"
                v-if="isOpen"
            />
        </teleport>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, onUnmounted, PropType, ref, toRef, watch } from 'vue';
    import { FormatOptions, IDateFilter, ITimeRange, OpenPosition, RDatepickerProps } from './interfaces';
    import DatepickerInput from './components/DatepickerInput.vue';
    import DatepickerMenu from './components/DatepickerMenu.vue';
    import { formatRangeDate, formatSingleDate } from './utils/util';
    import { clickOutsideDirective } from './directives/clickOutside';

    export default /*#__PURE__*/ defineComponent({
        name: 'Vue3DatePicker',
        emits: ['update:modelValue'],
        directives: { clickOutsideDirective },
        components: {
            DatepickerInput,
            DatepickerMenu,
        },
        props: {
            uid: { type: String as PropType<string>, default: 'dp' }, // connected
            is24: { type: Boolean as PropType<boolean>, default: true }, // connected
            enableTimePicker: { type: Boolean as PropType<boolean>, default: true }, // connected
            locale: { type: String as PropType<string>, default: 'en-US' }, // partially connected
            range: { type: Boolean as PropType<boolean>, default: false }, // connected
            modelValue: { type: [String, Date, Array] as PropType<string | Date>, default: null }, // connected
            position: { type: String as PropType<OpenPosition>, default: OpenPosition.center }, // connected
            placeholder: { type: String as PropType<string>, default: null }, // connected
            weekNumbers: { type: Boolean as PropType<boolean>, default: false }, // connected
            dark: { type: Boolean as PropType<boolean>, default: false }, // connected
            hoursIncrement: { type: [String, Number] as PropType<string | number>, default: 1 }, // connected
            minutesIncrement: { type: [String, Number] as PropType<string | number>, default: 1 }, // connected
            hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 }, // connected
            minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 }, // connected
            minDate: { type: [Date, String] as PropType<Date | string>, default: null }, // connected
            maxDate: { type: [Date, String] as PropType<Date | string>, default: null }, // connected
            minTime: { type: Object as PropType<ITimeRange>, default: () => ({}) }, // connected
            maxTime: { type: Object as PropType<ITimeRange>, default: () => ({}) }, // connected
            weekStart: { type: [String, Number] as PropType<string | number>, default: 1 }, // connected
            disabled: { type: Boolean as PropType<boolean>, default: false }, // connected
            readonly: { type: Boolean as PropType<boolean>, default: false }, // connected
            weekNumName: { type: String as PropType<string>, default: 'W' }, // connected
            format: {
                type: [Object, Function] as PropType<FormatOptions | ((date: Date | Date[]) => string)>,
                default: () => ({}),
            }, // connected
            previewFormat: {
                type: [Object, Function] as PropType<FormatOptions | ((date: Date | Date[]) => string)>,
                default: () => ({}),
            }, // connected
            inputClassName: { type: String as PropType<string>, default: null }, // connected
            menuClassName: { type: String as PropType<string>, default: null }, // connected
            calendarClassName: { type: String as PropType<string>, default: null }, // connected
            calendarCellClassName: { type: String as PropType<string>, default: null }, // connected
            hideInputIcon: { type: Boolean as PropType<boolean>, default: false }, // connected
            state: { type: Boolean as PropType<boolean>, default: null }, // connected
            clearable: { type: Boolean as PropType<boolean>, default: true }, // connected
            calendarBorder: { type: Boolean as PropType<boolean>, default: false },
            closeOnScroll: { type: Boolean as PropType<boolean>, default: true }, // connected
            autoApply: { type: Boolean as PropType<boolean>, default: false }, // connected
            filters: { type: Object as PropType<IDateFilter>, default: () => ({}) }, // connected
            disableMonthYearSelect: { type: Boolean as PropType<boolean>, default: false }, // connected
            yearRange: { type: Array as PropType<number[]>, default: () => [2000, 2050] }, // connected, todo - at the end increase range
            disabledDates: { type: Array as PropType<Date[] | string[]>, default: () => [] }, // connected
            inline: { type: Boolean as PropType<boolean>, default: false }, // connected
            selectText: { type: String as PropType<string>, default: 'Select' }, // connected
            cancelText: { type: String as PropType<string>, default: 'Cancel' }, // connected
        },
        setup(props: RDatepickerProps, { emit }) {
            const isOpen = ref(false);
            const menuPosition = ref({ top: '0', left: '0', transform: 'none' });
            const internalValue = ref<string | string[]>('');
            const singleModelValue = ref();
            const rangeModelValue = ref();
            const valueCleared = ref(false);
            const modelValue = toRef(props, 'modelValue');

            watch(singleModelValue, () => {
                formatSingleDateValue(props.autoApply);
            });

            watch(rangeModelValue, () => {
                formatRangeDateValue(props.autoApply);
            });

            watch(modelValue, () => {
                if (externalInternalValueDiff.value) {
                    mapExternalToInternalValue();
                }
            });

            onMounted(() => {
                mapExternalToInternalValue();
                if (props.closeOnScroll) {
                    window.addEventListener('scroll', closeMenu);
                }
                window.addEventListener('resize', setMenuPosition);
            });

            onUnmounted(() => {
                if (props.closeOnScroll) {
                    window.removeEventListener('scroll', closeMenu);
                }
                window.removeEventListener('resize', setMenuPosition);
            });

            const theme = computed(() => (props.dark ? 'dp__theme_dark' : 'dp__theme_light'));

            const isSingle = computed((): boolean => !props.range);

            const externalInternalValueDiff = computed((): boolean => {
                const dateValue = props.range
                    ? JSON.stringify(rangeModelValue.value)
                    : JSON.stringify(singleModelValue.value);
                return JSON.stringify(modelValue.value) !== dateValue;
            });

            const clearValue = (): void => {
                valueCleared.value = true;
                internalValue.value = '';
                clearInternalValues();
                emit('update:modelValue', null);
            };

            const formatSingleDateValue = (formatInternal = false): void => {
                if (singleModelValue.value) {
                    if (formatInternal) {
                        const dateValue = new Date(singleModelValue.value);
                        if (typeof props.format === 'object') {
                            internalValue.value = formatSingleDate(
                                dateValue,
                                props.locale,
                                props.format,
                                props.is24,
                                props.enableTimePicker,
                            );
                        } else {
                            internalValue.value = props.format(dateValue);
                        }
                    }
                }

                if (props.autoApply) {
                    emit('update:modelValue', singleModelValue.value);
                    closeMenu();
                }
            };

            const formatRangeDateValue = (formatInternal = false): void => {
                if (rangeModelValue.value && rangeModelValue.value.length === 2) {
                    const dateValue = [new Date(rangeModelValue.value[0]), new Date(rangeModelValue.value[1])];
                    if (formatInternal) {
                        if (typeof props.format === 'object') {
                            internalValue.value = formatRangeDate(
                                dateValue,
                                props.locale,
                                props.format,
                                props.is24,
                                props.enableTimePicker,
                            );
                        } else {
                            internalValue.value = props.format(dateValue);
                        }
                    }

                    if (props.autoApply) {
                        emit('update:modelValue', rangeModelValue.value);
                        closeMenu();
                    }
                }
            };

            const mapExternalToInternalValue = () => {
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
            };

            const selectDate = (): void => {
                if (props.range) {
                    formatRangeDateValue(true);
                    emit('update:modelValue', rangeModelValue.value);
                } else {
                    formatSingleDateValue(true);
                    emit('update:modelValue', singleModelValue.value);
                }
                closeMenu();
            };

            const setMenuPosition = (): void => {
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
                }
            };

            const recalculatePosition = (height: number) => {
                const el = document.getElementById(`dp__input_${props.uid}`);
                if (el) {
                    menuPosition.value.top = `${el.offsetTop - height - 12}px`;
                }
            };

            const openMenu = (): void => {
                if (!valueCleared.value) {
                    setMenuPosition();
                    isOpen.value = !isOpen.value;

                    if (!isOpen.value) {
                        clearInternalValues();
                    }
                }
                valueCleared.value = false;
                mapExternalToInternalValue();
            };

            const clearInternalValues = (): void => {
                singleModelValue.value = null;
                rangeModelValue.value = [];
            };

            const closeMenu = (): void => {
                if (isOpen.value) {
                    isOpen.value = false;
                }
                clearInternalValues();
            };

            return {
                singleModelValue,
                rangeModelValue,
                menuPosition,
                internalValue,
                isOpen,
                isSingle,
                clearValue,
                openMenu,
                closeMenu,
                selectDate,
                theme,
                recalculatePosition,
            };
        },
    });
</script>
