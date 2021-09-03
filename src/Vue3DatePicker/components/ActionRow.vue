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
    import { defineComponent, onMounted, PropType, ref, toRef, watch } from 'vue';
    import { ActionRowProps, FormatOptions, IModelValueMonthPicker } from '../interfaces';
    import { formatSingleDate, formatRangeDate, formatMonthValue } from '../utils/util';

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
                type: [Object, Function] as PropType<FormatOptions | ((date: Date | Date[]) => string)>,
                default: () => ({}),
            },
            locale: { type: String as PropType<string>, default: 'en-US' },
            is24: { type: Boolean as PropType<boolean>, default: true },
            enableTimePicker: { type: Boolean as PropType<boolean>, default: true },
            inline: { type: Boolean as PropType<boolean>, default: false },
            monthPicker: { type: Boolean as PropType<boolean>, default: false },
            monthPickerValue: { type: Object as PropType<IModelValueMonthPicker>, default: null },
        },
        setup(props: ActionRowProps) {
            const previewValue = ref<string | string[]>('');
            const singleModelValue = toRef(props, 'singleModelValue');
            const rangeModelValue = toRef(props, 'rangeModelValue');
            const monthModelValue = toRef(props, 'monthPickerValue');

            watch(singleModelValue, (): void => {
                formatSinglePreview();
            });

            watch(rangeModelValue, (): void => {
                formatRangePreview();
            });

            watch(monthModelValue, (): void => {
                formatMonthValValue();
            });

            onMounted((): void => {
                if (props.singleModelValue || props.rangeModelValue || props.monthPickerValue) {
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
                    if (typeof props.previewFormat === 'object') {
                        previewValue.value = formatSingleDate(
                            props.singleModelValue,
                            props.locale,
                            props.previewFormat,
                            props.is24,
                            props.enableTimePicker,
                        );
                    } else {
                        previewValue.value = props.previewFormat(props.singleModelValue);
                    }
                }
            };

            const formatRangePreview = (): void => {
                if (props.rangeModelValue && props.rangeModelValue.length === 2) {
                    if (typeof props.previewFormat === 'object') {
                        previewValue.value = formatRangeDate(
                            props.rangeModelValue,
                            props.locale,
                            props.previewFormat,
                            props.is24,
                            props.enableTimePicker,
                            true,
                        );
                    } else {
                        previewValue.value = props.previewFormat(props.rangeModelValue);
                    }
                }
            };

            const formatMonthValValue = (): void => {
                if (props.monthPicker && props.monthPickerValue) {
                    previewValue.value = formatMonthValue(props.monthPickerValue);
                }
            };

            return {
                previewValue,
            };
        },
    });
</script>
