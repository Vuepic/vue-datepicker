<template>
    <div @click="$emit('open')">
        <slot v-if="$slots.trigger && !inline" name="trigger"></slot>
        <div v-if="!$slots.trigger && !inline" class="dp__input_wrap">
            <input
                :class="datepickerInputClass"
                :placeholder="placeholder"
                :disabled="disabled"
                readonly
                :value="internalValue"
            />
            <span class="dp__input_icon" v-if="$slots['input-icon'] && !hideInputIcon"
                ><slot name="input-icon"></slot
            ></span>
            <CalendarIcon v-if="!$slots['input-icon'] && !hideInputIcon" class="dp__input_icon dp__input_icons" />
            <span
                class="dp__clear_icon"
                v-if="$slots['clear-icon'] && clearable && !disabled && !readonly"
                @click.stop.prevent="$emit('clear')"
                ><slot name="clear-icon"></slot
            ></span>
            <CancelIcon
                v-if="clearable && !$slots['clear-icon'] && internalValue && !disabled && !readonly"
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
            state: { type: Boolean as PropType<boolean>, default: null },
            inputClassName: { type: String as PropType<string>, default: null },
            inline: { type: Boolean as PropType<boolean>, default: false },
        },
        setup(props: DatepickerInputProps) {
            const datepickerInputClass = computed(
                (): DynamicClass => ({
                    ['dp__pointer']: !props.disabled && !props.readonly,
                    ['dp__disabled']: props.disabled,
                    ['dp__input']: true,
                    ['dp__input_icon_pad']: !props.hideInputIcon,
                    ['dp__input_valid']: props.state,
                    ['dp__input_invalid']: props.state === false,
                    [props.inputClassName]: !!props.inputClassName,
                }),
            );

            return {
                datepickerInputClass,
            };
        },
    });
</script>
