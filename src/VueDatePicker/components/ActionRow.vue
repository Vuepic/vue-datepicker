<template>
    <div ref="action-row" class="dp__action_row">
        <template v-if="$slots['action-row']">
            <slot
                name="action-row"
                v-bind="{
                    modelValue,
                    disabled,
                    selectDate: () => $emit('select-date'),
                    closePicker: () => $emit('close-picker'),
                }"
            />
        </template>
        <template v-else>
            <div
                v-if="actionRow.showPreview"
                class="dp__selection_preview"
                :title="formatValue || undefined"
                :style="previewStyle"
            >
                <slot v-if="$slots['action-preview'] && showPreview" name="action-preview" :value="modelValue" />
                <template v-if="!$slots['action-preview'] && showPreview">
                    {{ formatValue }}
                </template>
            </div>
            <div ref="action-buttons-container" class="dp__action_buttons" data-dp-element="action-row">
                <slot v-if="$slots['action-buttons']" name="action-buttons" :value="modelValue" />
                <template v-if="!$slots['action-buttons']">
                    <button
                        v-if="!inline.enabled && actionRow.showCancel"
                        ref="cancel-btn"
                        type="button"
                        data-dp-action-element="0"
                        class="dp__action_button dp__action_cancel"
                        @click="$emit('close-picker')"
                        @keydown="checkKeyDown($event, () => $emit('close-picker'))"
                    >
                        {{ actionRow.cancelBtnLabel }}
                    </button>
                    <button
                        v-if="actionRow.showNow"
                        type="button"
                        data-dp-action-element="0"
                        class="dp__action_button dp__action_cancel"
                        @click="$emit('select-now')"
                        @keydown="checkKeyDown($event, () => $emit('select-now'))"
                    >
                        {{ actionRow.nowBtnLabel }}
                    </button>
                    <button
                        v-if="actionRow.showSelect"
                        ref="select-btn"
                        type="button"
                        data-dp-action-element="0"
                        class="dp__action_button dp__action_select"
                        :disabled="boolHtmlAttribute(disabled)"
                        data-test-id="select-button"
                        @keydown="checkKeyDown($event, () => selectDate())"
                        @click="selectDate"
                    >
                        {{ actionRow.selectBtnLabel }}
                    </button>
                </template>
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onUnmounted, onMounted, ref, useTemplateRef } from 'vue';

    import { useContext, useFormatter, useHelperFns, useValidation, useUtils } from '@/composables';

    interface ActionRowEmits {
        'close-picker': [];
        'select-date': [];
        'select-now': [];
    }

    interface ActionRowProps {
        menuMount?: boolean;
        calendarWidth?: number;
    }

    const emit = defineEmits<ActionRowEmits>();

    const props = withDefaults(defineProps<ActionRowProps>(), {
        menuMount: false,
        calendarWidth: 0,
    });

    const {
        rootEmit,
        rootProps,
        modelValue,
        defaults: { actionRow, multiCalendars, inline, range, multiDates, formats },
    } = useContext();

    const { isTimeValid, isMonthValid } = useValidation();
    const { formatPreview } = useFormatter();
    const { checkKeyDown, convertType } = useHelperFns();
    const { boolHtmlAttribute } = useUtils();

    const actionBtnContainer = useTemplateRef('action-buttons-container');
    const actionRowRef = useTemplateRef('action-row');

    const showPreview = ref(false);
    const previewStyle = ref<any>({});

    onMounted(() => {
        getPreviewAvailableSpace();
        globalThis.addEventListener('resize', getPreviewAvailableSpace);
    });

    onUnmounted(() => {
        globalThis.removeEventListener('resize', getPreviewAvailableSpace);
    });

    const getPreviewAvailableSpace = () => {
        showPreview.value = false;
        setTimeout(() => {
            const rect = actionBtnContainer.value?.getBoundingClientRect();
            const rowRect = actionRowRef.value?.getBoundingClientRect();
            if (rect && rowRect) {
                previewStyle.value.maxWidth = `${rowRect.width - rect.width - 20}px`;
            }
            showPreview.value = true;
        }, 0);
    };

    const validDateRange = computed(() => {
        return range.value.enabled && !range.value.partialRange && modelValue.value
            ? (modelValue.value as Date[]).length === 2
            : true;
    });

    const disabled = computed(
        () => !isTimeValid.value(modelValue.value) || !isMonthValid.value(modelValue.value) || !validDateRange.value,
    );

    const handleCustomPreviewFormat = () => {
        const formatFn = formats.value.preview as (val: Date | Date[]) => string | string[];

        if (rootProps.timePicker) return formatFn(convertType(modelValue.value));

        if (rootProps.monthPicker) return formatFn(convertType(modelValue.value as Date));

        return formatFn(convertType(modelValue.value));
    };

    const formatRangeDate = () => {
        const dates = modelValue.value as Date[];
        if (multiCalendars.value.count > 0) {
            return `${formatPreview(dates[0]!)} - ${formatPreview(dates[1]!)}`;
        }
        return [formatPreview(dates[0]!), formatPreview(dates[1]!)];
    };

    const previewValue = computed((): string | string[] => {
        if (!modelValue.value || !props.menuMount) return '';
        if (typeof formats.value.preview === 'string') {
            if (Array.isArray(modelValue.value)) {
                if (modelValue.value.length === 2 && modelValue.value[1]) {
                    return formatRangeDate();
                }
                if (multiDates.value.enabled) {
                    return modelValue.value.map((date) => `${formatPreview(date)}`);
                }
                if (rootProps.modelAuto) {
                    return `${formatPreview(modelValue.value[0]!)}`;
                }
                return `${formatPreview(modelValue.value[0]!)} -`;
            }
            return formatPreview(modelValue.value);
        }
        return handleCustomPreviewFormat();
    });

    const dateSeparator = () => (multiDates.value.enabled ? '; ' : ' - ');

    const formatValue = computed(() =>
        Array.isArray(previewValue.value) ? previewValue.value.join(dateSeparator()) : previewValue.value,
    );

    const selectDate = (): void => {
        if (isTimeValid.value(modelValue.value) && isMonthValid.value(modelValue.value) && validDateRange.value) {
            emit('select-date');
        } else {
            rootEmit('invalid-select');
        }
    };
</script>
