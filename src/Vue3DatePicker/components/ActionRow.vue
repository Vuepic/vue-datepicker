<template>
    <div class="dp__action_row">
        <div class="dp__selection_preview">
            <slot name="action-preview" v-if="$slots['action-preview']" :value="internalModelValue" />
            <template v-if="!$slots['action-preview']">
                <template v-if="!Array.isArray(previewValue)">{{ previewValue }}</template>
                <template v-if="Array.isArray(previewValue)">
                    <div>{{ previewValue[0] }}</div>
                    <div>{{ previewValue[1] }}</div>
                </template>
            </template>
        </div>
        <div class="dp__action_buttons">
            <slot name="action-preview" v-if="$slots['action-select']" :value="internalModelValue" />
            <template v-if="!$slots['action-select']">
                <span v-if="!inline" class="dp__action dp__cancel" @click="$emit('closePicker')">{{ cancelText }}</span>
                <span class="dp__action dp__select" @click="$emit('selectDate')">{{ selectText }}</span>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType } from 'vue';
    import { ActionRowProps, IFormat, InternalModuleValue } from '../interfaces';
    import { formatDate, getMonthForExternal, getTImeForExternal } from '../utils/date-utils';
    import { isModelValueRange } from '../utils/type-guard';

    export default defineComponent({
        name: 'ActionRow',
        emits: ['closePicker', 'selectDate'],
        props: {
            selectText: { type: String as PropType<string>, default: 'Select' },
            cancelText: { type: String as PropType<string>, default: 'Cancel' },
            internalModelValue: { type: [Date, Array, Object] as PropType<InternalModuleValue>, default: null },
            range: { type: Boolean as PropType<boolean>, default: false },
            previewFormat: {
                type: [String, Function] as PropType<IFormat>,
                default: () => '',
            },
            inline: { type: Boolean as PropType<boolean>, default: false },
            monthPicker: { type: Boolean as PropType<boolean>, default: false },
            timePicker: { type: Boolean as PropType<boolean>, default: false },
        },
        setup(props: ActionRowProps) {
            const previewValue = computed((): string | string[] => {
                if (!props.internalModelValue) return '';
                if (typeof props.previewFormat === 'string') {
                    if (isModelValueRange(props.internalModelValue)) {
                        if (props.internalModelValue.length === 2) {
                            return [
                                formatDate(props.internalModelValue[0], props.previewFormat),
                                formatDate(props.internalModelValue[1], props.previewFormat),
                            ];
                        }
                        return `${formatDate(props.internalModelValue[0], props.previewFormat)} -`;
                    }
                    return formatDate(props.internalModelValue, props.previewFormat);
                }
                if (props.timePicker) {
                    return props.previewFormat(getTImeForExternal(props.internalModelValue));
                }
                if (props.monthPicker) {
                    return props.previewFormat(getMonthForExternal(props.internalModelValue as Date));
                }
                return props.previewFormat(props.internalModelValue);
            });

            return {
                previewValue,
            };
        },
    });
</script>
