<template>
    <div @click="handleOpen">
        <slot v-if="$slots.trigger && !inline" name="trigger"></slot>
        <div v-if="!$slots.trigger && !inline" class="dp__input_wrap">
            <input
                ref="el"
                :class="inputClass"
                :placeholder="placeholder"
                :disabled="disabled"
                :readonly="!textInput"
                :value="internalValue"
                @input="handleInput"
            />
            <span class="dp__input_icon" v-if="$slots['input-icon'] && !hideInputIcon"
                ><slot name="input-icon"></slot
            ></span>
            <CalendarIcon v-if="!$slots['input-icon'] && !hideInputIcon" class="dp__input_icon dp__input_icons" />
            <span
                class="dp__clear_icon"
                v-if="$slots['clear-icon'] && clearable && !disabled && !readonly"
                @click.stop.prevent="onClear"
                ><slot name="clear-icon"></slot
            ></span>
            <CancelIcon
                v-if="clearable && !$slots['clear-icon'] && internalValue && !disabled && !readonly"
                class="dp__clear_icon dp__input_icons"
                @click.prevent="onClear"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, nextTick, PropType, ref, watch, defineComponent, onMounted } from 'vue';
    import { DynamicClass, DatepickerInputProps, IMaskProps } from '../interfaces';
    import { CalendarIcon, CancelIcon } from './Icons';
    import { maskValue, unmask } from '../utils/masker';
    import parse from 'date-fns/parse';

    export default defineComponent({
        name: 'DatepickerInput',
        emits: ['clear', 'open', 'update:internalValue'],
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
            textInput: { type: Boolean as PropType<boolean>, default: false },
            maskProps: { type: Object as PropType<IMaskProps>, default: () => ({ pattern: '', mask: '' }) },
        },
        setup(props: DatepickerInputProps, { emit }) {
            const rawValue = ref('');
            const prevMaskedValue = ref('');
            const el = ref();

            const inputClass = computed(
                (): DynamicClass => ({
                    dp__pointer: !props.disabled && !props.readonly && !props.textInput,
                    dp__disabled: props.disabled,
                    dp__input: true,
                    dp__input_icon_pad: !props.hideInputIcon,
                    dp__input_valid: props.state,
                    dp__input_invalid: props.state === false,
                    [props.inputClassName]: !!props.inputClassName,
                }),
            );

            onMounted(() => {
                // if (props.textInput) {
                //     const date = new Date();
                // }
            });

            watch(rawValue, (newVal: string, oldVal: string): void => {
                handleTextMask(newVal.length < oldVal.length);
            });

            const handleInput = (event: InputEvent): void => {
                const { value } = event.target as HTMLInputElement;
                rawValue.value = unmask(value);
            };
            // todo - work in progress
            const handleTextMask = (isDelete: boolean): void => {
                const { masked, position } = maskValue(
                    rawValue.value,
                    props.maskProps?.pattern,
                    props.maskProps?.mask,
                    isDelete,
                );
                if (prevMaskedValue.value === masked) {
                    console.log(masked);
                    console.log(parse(masked, 'dd.MM.yyyy, hh:mm', new Date()));
                }
                emit('update:internalValue', masked);
                prevMaskedValue.value = masked;
                nextTick(() => {
                    el.value.focus();
                    el.value.setSelectionRange(
                        isDelete ? position - 1 : position,
                        isDelete ? position : position + 1,
                        isDelete ? 'backward' : 'forward',
                    );
                });
            };

            const handleOpen = () => {
                if (rawValue.value.length) {
                    return;
                }
                emit('open');
            };

            const onClear = () => {
                rawValue.value = '';
                prevMaskedValue.value = '';
                emit('clear');
            };

            return {
                inputClass,
                handleOpen,
                handleInput,
                onClear,
                el,
                rawValue,
            };
        },
    });
</script>
