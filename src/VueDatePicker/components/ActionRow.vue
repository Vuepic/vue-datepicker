<template>
    <div class="dp__action_row" :style="calendarWidth ? { width: `${calendarWidth}px` } : {}">
        <div class="dp__selection_preview">
            <slot name="action-preview" v-if="$slots['action-preview']" :value="internalModelValue" />
            <template v-if="!$slots['action-preview']">
                <template v-if="!Array.isArray(previewValue)">{{ previewValue }}</template>
                <template v-if="Array.isArray(previewValue)">
                    <div v-for="(preview, i) in previewValue" :key="i">{{ preview }}</div>
                </template>
            </template>
        </div>
        <div class="dp__action_buttons">
            <slot name="action-select" v-if="$slots['action-select']" :value="internalModelValue" />
            <template v-if="!$slots['action-select']">
                <span
                    v-if="!config.inline"
                    class="dp__action dp__cancel"
                    ref="cancelButtonRef"
                    tabindex="0"
                    @click="$emit('close-picker')"
                    @keydown.enter="$emit('close-picker')"
                    @keydown.space="$emit('close-picker')"
                    >{{ config.cancelText }}</span
                >
                <span
                    :class="selectClass"
                    tabindex="0"
                    @keydown.enter="selectDate"
                    @keydown.space="selectDate"
                    @click="selectDate"
                    ref="selectButtonRef"
                    >{{ config.selectText }}</span
                >
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, ref } from 'vue';

    import { isMonthWithinRange, isValidTime } from '@/utils/date-utils';
    import { convertType, isModelValueRange } from '@/utils/type-guard';
    import { useArrowNavigation, useState, useUtils } from '@/components/composables';
    import { unrefElement } from '@/utils/util';

    import type { PropType } from 'vue';

    const { config, internalModelValue } = useState();
    const { formatDate } = useUtils();
    const { buildMatrix } = useArrowNavigation();

    const emit = defineEmits(['close-picker', 'select-date', 'invalid-select']);

    const props = defineProps({
        calendarWidth: { type: Number as PropType<number>, default: 0 },
        menuMount: { type: Boolean as PropType<boolean>, default: false },
    });
    const cancelButtonRef = ref(null);
    const selectButtonRef = ref(null);

    onMounted(() => {
        if (config.value.arrowNavigation) {
            buildMatrix([unrefElement(cancelButtonRef), unrefElement(selectButtonRef)] as HTMLElement[], 'actionRow');
        }
    });

    const validDateRange = computed(() => {
        return config.value.range && !config.value.partialRange && internalModelValue.value
            ? (internalModelValue.value as Date[]).length === 2
            : true;
    });

    const selectClass = computed(() => ({
        dp__action: true,
        dp__select: true,
        dp__action_disabled: !isTimeValid.value || !isMonthValid.value || !validDateRange.value,
    }));

    // todo - refactor
    const isTimeValid = computed((): boolean => {
        if (!config.value.enableTimePicker || config.value.ignoreTimeValidation) return true;
        return isValidTime(
            internalModelValue.value,
            config.value.maxTime,
            config.value.minTime,
            config.value.maxDate,
            config.value.minDate,
        );
    });

    const isMonthValid = computed((): boolean => {
        if (!config.value.monthPicker) return true;
        return isMonthWithinRange(internalModelValue.value as Date, config.value.minDate, config.value.maxDate);
    });

    const handleCustomPreviewFormat = () => {
        const formatFn = config.value.previewFormat as (val: Date | Date[]) => string | string[];

        if (config.value.timePicker) return formatFn(convertType(internalModelValue.value));

        if (config.value.monthPicker) return formatFn(convertType(internalModelValue.value as Date));

        return formatFn(convertType(internalModelValue.value));
    };

    const previewValue = computed((): string | string[] => {
        if (!internalModelValue.value || !props.menuMount) return '';
        if (typeof config.value.previewFormat === 'string') {
            if (isModelValueRange(internalModelValue.value)) {
                if (internalModelValue.value.length === 2 && internalModelValue.value[1]) {
                    if (config.value.multiCalendars > 0) {
                        return `${formatDate(internalModelValue.value[0])} - ${formatDate(
                            internalModelValue.value[1],
                        )}`;
                    }
                    return [formatDate(internalModelValue.value[0]), formatDate(internalModelValue.value[1])];
                }
                if (config.value.multiDates) {
                    return internalModelValue.value.map((date) => `${formatDate(date)}`);
                }
                if (config.value.modelAuto) {
                    return `${formatDate(internalModelValue.value[0])}`;
                }
                return `${formatDate(internalModelValue.value[0])} -`;
            }
            return formatDate(internalModelValue.value);
        }
        return handleCustomPreviewFormat();
    });

    const selectDate = (): void => {
        if (isTimeValid.value && isMonthValid.value && validDateRange.value) {
            emit('select-date');
        } else {
            emit('invalid-select');
        }
    };
</script>
