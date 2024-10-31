<template>
    <div ref="actionRowRef" class="dp__action_row">
        <template v-if="$slots['action-row']">
            <slot
                name="action-row"
                v-bind="{
                    internalModelValue,
                    disabled,
                    selectDate: () => $emit('select-date'),
                    closePicker: () => $emit('close-picker'),
                }"
            />
        </template>
        <template v-else>
            <div
                v-if="defaultedActionRow.showPreview"
                class="dp__selection_preview"
                :title="formatValue"
                :style="previewStyle"
            >
                <slot
                    v-if="$slots['action-preview'] && showPreview"
                    name="action-preview"
                    :value="internalModelValue"
                />
                <template v-if="!$slots['action-preview'] && showPreview">
                    {{ formatValue }}
                </template>
            </div>
            <div ref="actionBtnContainer" class="dp__action_buttons" data-dp-element="action-row">
                <slot v-if="$slots['action-buttons']" name="action-buttons" :value="internalModelValue" />
                <template v-if="!$slots['action-buttons']">
                    <button
                        v-if="!defaultedInline.enabled && defaultedActionRow.showCancel"
                        ref="cancelButtonRef"
                        type="button"
                        class="dp__action_button dp__action_cancel"
                        @click="$emit('close-picker')"
                        @keydown="checkKeyDown($event, () => $emit('close-picker'))"
                    >
                        {{ cancelText }}
                    </button>
                    <button
                        v-if="defaultedActionRow.showNow"
                        type="button"
                        class="dp__action_button dp__action_cancel"
                        @click="$emit('select-now')"
                        @keydown="checkKeyDown($event, () => $emit('select-now'))"
                    >
                        {{ nowButtonLabel }}
                    </button>
                    <button
                        v-if="defaultedActionRow.showSelect"
                        ref="selectButtonRef"
                        type="button"
                        class="dp__action_button dp__action_select"
                        :disabled="disabled"
                        data-test-id="select-button"
                        @keydown="checkKeyDown($event, () => selectDate())"
                        @click="selectDate"
                    >
                        {{ selectText }}
                    </button>
                </template>
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, onUnmounted, ref } from 'vue';

    import { checkKeyDown, convertType, unrefElement } from '@/utils/util';
    import { useArrowNavigation, useDefaults, useValidation } from '@/composables';
    import { PickerBaseProps } from '@/props';
    import { formatDate } from '@/utils/date-utils';

    import type { PropType } from 'vue';

    defineOptions({
        compatConfig: {
            MODE: 3,
        },
    });

    const emit = defineEmits(['close-picker', 'select-date', 'select-now', 'invalid-select']);

    const props = defineProps({
        menuMount: { type: Boolean as PropType<boolean>, default: false },
        calendarWidth: { type: Number as PropType<number>, default: 0 },
        ...PickerBaseProps,
    });

    const {
        defaultedActionRow,
        defaultedPreviewFormat,
        defaultedMultiCalendars,
        defaultedTextInput,
        defaultedInline,
        defaultedRange,
        defaultedMultiDates,
    } = useDefaults(props);
    const { isTimeValid, isMonthValid } = useValidation(props);
    const { buildMatrix } = useArrowNavigation();

    const cancelButtonRef = ref(null);
    const selectButtonRef = ref(null);
    const showPreview = ref(false);
    const previewStyle = ref<any>({});
    const actionBtnContainer = ref<HTMLElement | null>(null);
    const actionRowRef = ref<HTMLElement | null>(null);

    onMounted(() => {
        if (props.arrowNavigation) {
            buildMatrix([unrefElement(cancelButtonRef), unrefElement(selectButtonRef)] as HTMLElement[], 'actionRow');
        }
        getPreviewAvailableSpace();
        window.addEventListener('resize', getPreviewAvailableSpace);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', getPreviewAvailableSpace);
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
        return defaultedRange.value.enabled && !defaultedRange.value.partialRange && props.internalModelValue
            ? (props.internalModelValue as Date[]).length === 2
            : true;
    });

    const disabled = computed(
        () =>
            !isTimeValid.value(props.internalModelValue) ||
            !isMonthValid.value(props.internalModelValue) ||
            !validDateRange.value,
    );

    const handleCustomPreviewFormat = () => {
        const formatFn = defaultedPreviewFormat.value as (val: Date | Date[]) => string | string[];

        if (props.timePicker) return formatFn(convertType(props.internalModelValue));

        if (props.monthPicker) return formatFn(convertType(props.internalModelValue as Date));

        return formatFn(convertType(props.internalModelValue));
    };

    const formatRangeDate = () => {
        const dates = props.internalModelValue as Date[];
        if (defaultedMultiCalendars.value.count > 0) {
            return `${formatDatePreview(dates[0])} - ${formatDatePreview(dates[1])}`;
        }
        return [formatDatePreview(dates[0]), formatDatePreview(dates[1])];
    };

    const formatDatePreview = (date: Date) => {
        return formatDate(
            date,
            defaultedPreviewFormat.value as string,
            props.formatLocale,
            defaultedTextInput.value.rangeSeparator,
            props.modelAuto,
            defaultedPreviewFormat.value as string,
        );
    };

    const previewValue = computed((): string | string[] => {
        if (!props.internalModelValue || !props.menuMount) return '';
        if (typeof defaultedPreviewFormat.value === 'string') {
            if (Array.isArray(props.internalModelValue)) {
                if (props.internalModelValue.length === 2 && props.internalModelValue[1]) {
                    return formatRangeDate();
                }
                if (defaultedMultiDates.value.enabled) {
                    return props.internalModelValue.map((date) => `${formatDatePreview(date)}`);
                }
                if (props.modelAuto) {
                    return `${formatDatePreview(props.internalModelValue[0])}`;
                }
                return `${formatDatePreview(props.internalModelValue[0])} -`;
            }
            return formatDatePreview(props.internalModelValue);
        }
        return handleCustomPreviewFormat();
    });

    const dateSeparator = () => (defaultedMultiDates.value.enabled ? '; ' : ' - ');

    const formatValue = computed(() =>
        !Array.isArray(previewValue.value) ? previewValue.value : previewValue.value.join(dateSeparator()),
    );

    const selectDate = (): void => {
        if (
            isTimeValid.value(props.internalModelValue) &&
            isMonthValid.value(props.internalModelValue) &&
            validDateRange.value
        ) {
            emit('select-date');
        } else {
            emit('invalid-select');
        }
    };
</script>
