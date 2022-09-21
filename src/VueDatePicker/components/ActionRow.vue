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
                    v-if="!inline"
                    class="dp__action dp__cancel"
                    ref="cancelButtonRef"
                    tabindex="0"
                    @click="$emit('closePicker')"
                    @keydown.enter="$emit('closePicker')"
                    @keydown.space="$emit('closePicker')"
                    >{{ cancelText }}</span
                >
                <span
                    :class="selectClass"
                    tabindex="0"
                    @keydown.enter="selectDate"
                    @keydown.space="selectDate"
                    @click="selectDate"
                    ref="selectButtonRef"
                    >{{ selectText }}</span
                >
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, inject, onMounted, ref } from 'vue';
    import type { PropType, ComputedRef, Ref } from 'vue';
    import type { Locale } from 'date-fns';

    import { formatDate, getMonthVal, getTImeForExternal, isMonthWithinRange, isValidTime } from '@/utils/date-utils';
    import { isModelValueRange } from '@/utils/type-guard';
    import {
        ActionRowProps,
        arrowNavigationKey,
        DateValidationProps,
        formatLocaleKey,
        MenuNestedDownProps,
        NestedInternalSharedProps,
        TimeValidationProps,
    } from '@/utils/props';
    import { useArrowNavigation } from '@/components/composition/arrow-navigate';
    import { unrefElement } from '@/utils/util';

    const emit = defineEmits(['closePicker', 'selectDate', 'invalid-select']);

    const props = defineProps({
        ...ActionRowProps,
        ...DateValidationProps,
        ...TimeValidationProps,
        ...MenuNestedDownProps,
        ...NestedInternalSharedProps,
        inline: { type: Boolean as PropType<boolean>, default: false },
        timePicker: { type: Boolean as PropType<boolean>, default: false },
        calendarWidth: { type: Number as PropType<number>, default: 0 },
        menuMount: { type: Boolean as PropType<boolean>, default: false },
        enableTimePicker: { type: Boolean as PropType<boolean>, default: true },
    });

    const { buildMatrix } = useArrowNavigation();

    const formatLocale = inject<ComputedRef<Locale>>(formatLocaleKey);
    const arrowNavigation = inject<Ref<boolean>>(arrowNavigationKey);
    const cancelButtonRef = ref(null);
    const selectButtonRef = ref(null);

    onMounted(() => {
        if (arrowNavigation?.value) {
            buildMatrix([unrefElement(cancelButtonRef), unrefElement(selectButtonRef)] as HTMLElement[], 'actionRow');
        }
    });

    const validDateRange = computed(() => {
        return props.range && !props.partialRange && props.internalModelValue
            ? (props.internalModelValue as Date[]).length === 2
            : true;
    });

    const selectClass = computed(() => ({
        dp__action: true,
        dp__select: true,
        dp__action_disabled: !isTimeValid.value || !isMonthValid.value || !validDateRange.value,
    }));

    const isTimeValid = computed((): boolean => {
        if (!props.enableTimePicker || props.ignoreTimeValidation) return true;
        return isValidTime(props.internalModelValue, props.maxTime, props.minTime, props.maxDate, props.minDate);
    });

    const isMonthValid = computed((): boolean => {
        if (!props.monthPicker) return true;
        return isMonthWithinRange(props.internalModelValue as Date, props.minDate, props.maxDate);
    });

    const formatWrap = (date: Date | Date[]): string => {
        return formatDate(date, props.previewFormat as string, formatLocale?.value);
    };

    const previewValue = computed((): string | string[] => {
        if (!props.internalModelValue || !props.menuMount) return '';
        if (typeof props.previewFormat === 'string') {
            if (isModelValueRange(props.internalModelValue)) {
                if (props.internalModelValue.length === 2 && props.internalModelValue[1]) {
                    if (props.multiCalendars > 0) {
                        return `${formatWrap(props.internalModelValue[0])} - ${formatWrap(
                            props.internalModelValue[1],
                        )}`;
                    }
                    return [formatWrap(props.internalModelValue[0]), formatWrap(props.internalModelValue[1])];
                }
                if (props.multiDates) {
                    return props.internalModelValue.map((date) => `${formatWrap(date)}`);
                }
                if (props.modelAuto) {
                    return `${formatWrap(props.internalModelValue[0])}`;
                }
                return `${formatWrap(props.internalModelValue[0])} -`;
            }
            return formatDate(props.internalModelValue, props.previewFormat, formatLocale?.value);
        }
        if (props.timePicker) {
            return props.previewFormat(getTImeForExternal(props.internalModelValue));
        }
        if (props.monthPicker) {
            return props.previewFormat(getMonthVal(props.internalModelValue as Date));
        }
        return props.previewFormat(props.internalModelValue);
    });

    const selectDate = (): void => {
        if (isTimeValid.value && isMonthValid.value && validDateRange.value) {
            emit('selectDate');
        } else {
            emit('invalid-select');
        }
    };
</script>
