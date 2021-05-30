<template>
    <div class="dp__action_row">
        <div class="dp__selection_preview">{{ previewValue }}</div>
        <div class="dp__action_buttons">
            <span class="dp__action dp__cancel" @click="$emit('closePicker')">{{ cancelText }}</span>
            <span class="dp__action dp__select" @click="$emit('selectDate')">{{ selectText }}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted, PropType, ref, toRef, watch } from 'vue';
    import { ActionRowProps, FormatOptions } from '../interfaces';
    import { formatSingleDate, formatRangeDate } from '../utils/util';

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
        },
        setup(props: ActionRowProps) {
            const previewValue = ref('');
            const singleModelValue = toRef(props, 'singleModelValue');
            const rangeModelValue = toRef(props, 'rangeModelValue');

            watch(singleModelValue, (): void => {
                formatSinglePreview();
            });

            watch(rangeModelValue, (): void => {
                formatRangePreview();
            });

            onMounted((): void => {
                if (props.singleModelValue || props.rangeModelValue) {
                    formatPreview();
                }
            });

            const formatPreview = (): void => {
                if (!props.range) {
                    formatSinglePreview();
                } else {
                    formatRangePreview();
                }
            };

            const formatSinglePreview = (): void => {
                if (props.singleModelValue) {
                    if (typeof props.previewFormat === 'object') {
                        previewValue.value = formatSingleDate(
                            props.singleModelValue,
                            props.locale,
                            props.previewFormat,
                        );
                    } else {
                        previewValue.value = props.previewFormat(props.singleModelValue);
                    }
                }
            };

            const formatRangePreview = (): void => {
                if (props.rangeModelValue && props.rangeModelValue.length === 2) {
                    if (typeof props.previewFormat === 'object') {
                        previewValue.value = formatRangeDate(props.rangeModelValue, props.locale, props.previewFormat);
                    } else {
                        previewValue.value = props.previewFormat(props.rangeModelValue);
                    }
                }
            };

            return {
                previewValue,
            };
        },
    });
</script>
