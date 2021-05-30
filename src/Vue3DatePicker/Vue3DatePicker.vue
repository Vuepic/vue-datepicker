<template>
    <div class="dp__main">
        <DatepickerInput
            v-if="!inline"
            :internal-value="internalValue"
            :placeholder="placeholder"
            :hide-input-icon="hideInputIcon"
            :readonly="readonly"
            :disabled="disabled"
            :input-class-name="inputClassName"
            :clearable="clearable"
            @clear="clearValue"
            @open="openMenu"
            id="dp__input"
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
                :enable-time-picker="enableTimePicker"
                :language="language"
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
                :style="menuPosition"
                :range="range"
                :auto-apply="autoApply"
                v-model:singleModelValue="singleModelValue"
                v-model:rangeModelValue="rangeModelValue"
                @closePicker="closeMenu"
                @selectDate="selectDate"
                v-if="isOpen"
            />
        </teleport>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, onUnmounted, PropType, ref, toRef, watch } from 'vue';
    import { FormatOptions, IDateFilter, ILanguage, OpenPosition, RDatepickerProps } from './interfaces';
    import { language } from './utils/language';
    import DatepickerInput from './components/DatepickerInput.vue';
    import DatepickerMenu from './components/DatepickerMenu.vue';
    import { formatRangeDate, formatSingleDate } from './utils/util';

    export default /*#__PURE__*/ defineComponent({
        name: 'Vue3DatePicker',
        emits: ['update:modelValue'],
        components: {
            DatepickerInput,
            DatepickerMenu,
        },
        props: {
            id: { type: String as PropType<string>, default: null }, // connected
            is24: { type: Boolean as PropType<boolean>, default: true }, // connected
            enableTimePicker: { type: Boolean as PropType<boolean>, default: true }, // connected
            locale: { type: String as PropType<string>, default: 'en-US' }, // partially connected
            range: { type: Boolean as PropType<boolean>, default: false }, // connected
            modelValue: { type: [String, Date, Array] as PropType<string | Date>, default: null }, // connected
            position: { type: String as PropType<OpenPosition>, default: OpenPosition.center }, // connected
            placeholder: { type: String as PropType<string>, default: null }, // connected
            weekNumbers: { type: Boolean as PropType<boolean>, default: false }, // connected
            hoursIncrement: { type: [String, Number] as PropType<string | number>, default: 1 }, // connected
            minutesIncrement: { type: [String, Number] as PropType<string | number>, default: 1 }, // connected
            hoursGridIncrement: { type: [String, Number] as PropType<string | number>, default: 1 }, // connected
            minutesGridIncrement: { type: [String, Number] as PropType<string | number>, default: 5 }, // connected
            minDate: { type: [Date, String] as PropType<Date | string>, default: null },
            maxDate: { type: [Date, String] as PropType<Date | string>, default: null },
            timeRange: { type: Array as PropType<number[]>, default: null },
            weekStart: { type: [String, Number] as PropType<string | number>, default: 1 }, // connected
            disabled: { type: Boolean as PropType<boolean>, default: false }, // connected
            readonly: { type: Boolean as PropType<boolean>, default: false }, // connected
            format: {
                type: [Object, Function] as PropType<FormatOptions | ((date: Date | Date[]) => string)>,
                default: () => ({}),
            }, // connected
            language: {
                type: Object as PropType<ILanguage>,
                default: () => language,
            }, // connected
            inputClassName: { type: String as PropType<string>, default: null }, // connected
            menuClassName: { type: String as PropType<string>, default: null }, // connected
            calendarClassName: { type: String as PropType<string>, default: null }, // connected
            calendarCellClassName: { type: String as PropType<string>, default: null }, // connected
            dayClass: { type: Object as PropType<{ day: Date; className: string }>, default: null },
            hideInputIcon: { type: Boolean as PropType<boolean>, default: false }, // connected
            error: { type: Boolean as PropType<boolean>, default: null },
            clearable: { type: Boolean as PropType<boolean>, default: true }, // connected
            calendarBorder: { type: Boolean as PropType<boolean>, default: false },
            closeOnScroll: { type: Boolean as PropType<boolean>, default: true }, // connected
            autoApply: { type: Boolean as PropType<boolean>, default: false }, // connected
            filters: { type: Object as PropType<IDateFilter>, default: null },
            disableMonthYearSelect: { type: Boolean as PropType<boolean>, default: false }, // connected
            yearRange: { type: Array as PropType<number[]>, default: () => [2000, 2050] }, // connected, todo - at the end increase range
            disabledDaysOfTheWeek: { type: Array as PropType<number[]>, default: null },
            inline: { type: Boolean as PropType<boolean>, default: false }, // connected
            selectText: { type: String as PropType<string>, default: 'Select' }, // connected
            cancelText: { type: String as PropType<string>, default: 'Cancel' }, // connected
            previewFormat: {
                type: [Object, Function] as PropType<FormatOptions | ((date: Date | Date[]) => string)>,
                default: () => ({}),
            }, // connected
        },
        setup(props: RDatepickerProps, { emit }) {
            const isOpen = ref(false);
            const menuPosition = ref({ top: '0', left: '0', transform: 'none' });
            const internalValue = ref('');
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
                singleModelValue.value = null;
                rangeModelValue.value = null;
            };

            const formatSingleDateValue = (formatInternal = false): void => {
                if (singleModelValue.value) {
                    if (formatInternal) {
                        const dateValue = new Date(singleModelValue.value);
                        if (typeof props.format === 'object') {
                            internalValue.value = formatSingleDate(dateValue, props.locale, props.format);
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
                            internalValue.value = formatRangeDate(dateValue, props.locale, props.format);
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
                    if (Array.isArray(props.modelValue)) {
                        rangeModelValue.value = props.modelValue.slice();
                    } else {
                        singleModelValue.value = new Date(props.modelValue);
                        formatSingleDateValue(true);
                    }
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
                const el = document.getElementById('dp__input');
                if (el) {
                    const { top, left, width, height } = el.getBoundingClientRect();
                    const position = { top: `${height + top + 10}px`, left: '', transform: 'none' };
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

            const openMenu = (): void => {
                if (!valueCleared.value) {
                    setMenuPosition();
                    isOpen.value = !isOpen.value;
                }
                valueCleared.value = false;
            };

            const closeMenu = (): void => {
                if (isOpen.value) {
                    isOpen.value = false;
                }
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
            };
        },
    });
</script>
