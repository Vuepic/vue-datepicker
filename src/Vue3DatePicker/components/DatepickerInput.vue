<template>
    <div @click="$emit('open')">
        <slot v-if="$slots.trigger" name="trigger"></slot>
        <div v-if="!$slots.trigger" class="dp__input_wrap">
            <input :class="datepickerInputClass" :placeholder="placeholder" readonly :value="internalValue" />
            <span class="dp__input_icon" v-if="$slots['input-icon'] && !hideInputIcon"
                ><slot name="input-icon"></slot
            ></span>
            <CalendarIcon v-if="!$slots['input-icon'] && !hideInputIcon" class="dp__input_icon dp__input_icons" />
            <span class="dp__clear_icon" v-if="$slots['clear-icon'] && clearable" @click.stop.prevent="$emit('clear')"
                ><slot name="clear-icon"></slot
            ></span>
            <CancelIcon
                v-if="clearable && !$slots['clear-icon'] && internalValue"
                class="dp__clear_icon dp__input_icons"
                @click.prevent="$emit('clear')"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType } from 'vue';
    import { DatepickerInputProps, DynamicClass } from '../interfaces';
    import { CalendarIcon, CancelIcon } from './Icons';

    export default defineComponent({
        name: 'DatepickerInput',
        emits: ['clear', 'open'],
        components: { CalendarIcon, CancelIcon },
        props: {
            internalValue: { type: String as PropType<string>, default: '' },
            placeholder: { type: String as PropType<string>, default: '' },
            hideInputIcon: { type: Boolean as PropType<boolean>, default: false },
            disabled: { type: Boolean as PropType<boolean>, default: true },
            readonly: { type: Boolean as PropType<boolean>, default: true },
            clearable: { type: Boolean as PropType<boolean>, default: true },
            error: { type: Boolean as PropType<boolean>, default: true },
            inputClassName: { type: String as PropType<string>, default: null },
        },
        setup(props: DatepickerInputProps) {
            const datepickerInputClass = computed(
                (): DynamicClass => ({
                    ['dp__pointer']: !props.disabled && !props.readonly,
                    ['dp__input']: true,
                    ['dp__input_icon_pad']: !props.hideInputIcon,
                    [props.inputClassName]: !!props.inputClassName,
                }),
            );

            return {
                datepickerInputClass,
            };
        },
    });
</script>
