<template>
    <div class="dp__action_row">
        <div class="dp__selection_preview">
            <template v-if="!Array.isArray(previewValue)">{{ previewValue }}</template>
            <template v-if="Array.isArray(previewValue)">
                <div>{{ previewValue[0] }}</div>
                <div>{{ previewValue[1] }}</div>
            </template>
        </div>
        <div class="dp__action_buttons">
            <span v-if="!inline" class="dp__action dp__cancel" @click="$emit('closePicker')">{{ cancelText }}</span>
            <span class="dp__action dp__select" @click="$emit('selectDate')">{{ selectText }}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, PropType, ref, toRef, watch } from 'vue';
    import { ActionRowProps, IFormat, IModelValueMonthPicker, IModelValueTimePicker } from '../interfaces';
    import { getDefaultPattern, useDateUtils } from '../utils/date-utils';
    import { useInternalFormat } from '../utils/util';

    export default defineComponent({
        name: 'ActionRow',
        emits: ['closePicker', 'selectDate'],
        props: {
            selectText: { type: String as PropType<string>, default: 'Select' },
            cancelText: { type: String as PropType<string>, default: 'Cancel' },
            singleModelValue: { type: Date as PropType<Date>, default: null },
            range: { type: Boolean as PropType<boolean>, default: false },
            rangeModelValue: { type: Array as unknown as PropType<Date[]>, default: null },
            previewFormat: {
                type: [String, Function] as PropType<IFormat>,
                default: () => null,
            },
            is24: { type: Boolean as PropType<boolean>, default: true },
            enableTimePicker: { type: Boolean as PropType<boolean>, default: true },
            inline: { type: Boolean as PropType<boolean>, default: false },
            monthPicker: { type: Boolean as PropType<boolean>, default: false },
            monthPickerValue: { type: Object as PropType<IModelValueMonthPicker>, default: null },
            timePicker: { type: Boolean as PropType<boolean>, default: false },
            timePickerValue: {
                type: [Object, Array] as PropType<IModelValueTimePicker | IModelValueTimePicker[]>,
                default: null,
            },
        },
        setup(props: ActionRowProps) {
            const previewValue = ref<string | string[]>('');
            const singleModelValue = toRef(props, 'singleModelValue');
            const rangeModelValue = toRef(props, 'rangeModelValue');
            const monthModelValue = toRef(props, 'monthPickerValue');
            const timePickerValue = toRef(props, 'timePickerValue');

            watch(singleModelValue, (): void => {
                formatSinglePreview();
            });

            watch(rangeModelValue, (): void => {
                formatRangePreview();
            });

            watch(monthModelValue, (): void => {
                formatMonthValValue();
            });

            watch(timePickerValue, (): void => {
                formatTimePickerValue();
            });

            const defaultPattern = computed((): string => {
                return props.previewFormat && typeof props.previewFormat === 'string'
                    ? props.previewFormat
                    : getDefaultPattern(props.is24, props.monthPicker, props.timePicker);
            });

            const { formatDate, formatMonth, formatTime } = useDateUtils(defaultPattern.value);

            onMounted((): void => {
                if (
                    props.singleModelValue ||
                    props.rangeModelValue ||
                    props.monthPickerValue ||
                    props.timePickerValue
                ) {
                    formatPreview();
                }
            });

            const formatPreview = (): void => {
                if (props.monthPicker) {
                    formatMonthValValue();
                } else {
                    if (!props.range) {
                        formatSinglePreview();
                    } else {
                        formatRangePreview();
                    }
                }
            };

            const formatSinglePreview = (): void => {
                if (props.singleModelValue) {
                    if (useInternalFormat(props.previewFormat)) {
                        previewValue.value = formatDate(props.singleModelValue);
                    } else {
                        previewValue.value = props.previewFormat(props.singleModelValue);
                    }
                }
            };

            const formatRangePreview = (): void => {
                if (props.rangeModelValue && props.rangeModelValue.length === 2) {
                    if (useInternalFormat(props.previewFormat)) {
                        previewValue.value = [
                            formatDate(props.rangeModelValue[0]),
                            formatDate(props.rangeModelValue[1]),
                        ];
                    } else {
                        previewValue.value = props.previewFormat(props.rangeModelValue);
                    }
                }
            };

            const formatMonthValValue = (): void => {
                if (props.monthPicker && props.monthPickerValue) {
                    if (useInternalFormat(props.previewFormat)) {
                        previewValue.value = formatMonth(props.monthPickerValue);
                    } else {
                        previewValue.value = props.previewFormat(props.monthPickerValue);
                    }
                }
            };

            const formatTimePickerValue = (): void => {
                if (props.timePicker && props.timePickerValue) {
                    if (useInternalFormat(props.previewFormat)) {
                        previewValue.value = formatTime(props.timePickerValue);
                    } else {
                        previewValue.value = props.previewFormat(props.timePickerValue);
                    }
                }
            };

            return {
                previewValue,
            };
        },
    });
</script>
