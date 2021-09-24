<template>
    <div @click="handleOpen">
        <slot v-if="$slots.trigger && !inline" name="trigger" />
        <div v-if="!$slots.trigger && !inline" class="dp__input_wrap">
            <input
                ref="el"
                :class="inputClass"
                :placeholder="placeholder"
                :disabled="disabled"
                :readonly="!textInput"
                :value="inputValue"
                @input="handleInput"
                @keydown.enter="handleEnter"
            />
            <span class="dp__input_icon" v-if="$slots['input-icon'] && !hideInputIcon"><slot name="input-icon" /></span>
            <CalendarIcon v-if="!$slots['input-icon'] && !hideInputIcon" class="dp__input_icon dp__input_icons" />
            <span
                class="dp__clear_icon"
                v-if="$slots['clear-icon'] && clearable && !disabled && !readonly"
                @click.stop.prevent="onClear"
                ><slot name="clear-icon"
            /></span>
            <CancelIcon
                v-if="clearable && !$slots['clear-icon'] && inputValue && !disabled && !readonly"
                class="dp__clear_icon dp__input_icons"
                @click.prevent="onClear"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, PropType, ref, onMounted } from 'vue';
    import Inputmask from 'inputmask';
    import { DynamicClass, IMaskProps, ITextInputOptions } from '../interfaces';
    import { CalendarIcon, CancelIcon } from './Icons';
    import { getMaskedDate, isValidDate, parseFreeInput } from '../utils/date-utils';

    const emit = defineEmits(['clear', 'open', 'update:inputValue', 'setInputDate']);

    const props = defineProps({
        inputValue: { type: String as PropType<string>, default: '' },
        placeholder: { type: String as PropType<string>, default: '' },
        hideInputIcon: { type: Boolean as PropType<boolean>, default: false },
        disabled: { type: Boolean as PropType<boolean>, default: true },
        readonly: { type: Boolean as PropType<boolean>, default: true },
        clearable: { type: Boolean as PropType<boolean>, default: true },
        range: { type: Boolean as PropType<boolean>, default: false },
        state: { type: Boolean as PropType<boolean>, default: null },
        inputClassName: { type: String as PropType<string>, default: null },
        inline: { type: Boolean as PropType<boolean>, default: false },
        textInput: { type: Boolean as PropType<boolean>, default: false },
        maskProps: { type: Object as PropType<IMaskProps>, default: () => ({ pattern: '', mask: '' }) },
        textInputOptions: { type: Object as PropType<ITextInputOptions>, default: () => null },
        isMenuOpen: { type: Boolean as PropType<boolean>, default: false },
    });

    const rawValue = ref('');
    const parsedDate = ref();
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
        const { freeInput, placeholder } = props.textInputOptions;
        if (props.textInput && !freeInput) {
            const mask = new Inputmask({
                mask: props.maskProps?.pattern,
                placeholder: placeholder || props.maskProps?.mask,
            });
            mask.mask(el.value);
        }
    });

    const handleInput = (event: Event): void => {
        const { value } = event.target as HTMLInputElement;
        rawValue.value = value;

        const { freeInput } = props.textInputOptions;
        const { format } = props.maskProps;
        if (props.range) {
            const [dateOne, dateTwo] = value.split(' - ');
            const parsedDateOne = freeInput ? parseFreeInput(dateOne, format) : getMaskedDate(dateOne, format);
            const parsedDateTwo = freeInput ? parseFreeInput(dateTwo, format) : getMaskedDate(dateTwo, format);
            parsedDate.value = parsedDateOne && parsedDateTwo ? [parsedDateOne, parsedDateTwo] : null;
        } else {
            parsedDate.value = freeInput ? parseFreeInput(value, format) : getMaskedDate(value, format);
        }

        emit('setInputDate', parsedDate.value);
        emit('update:inputValue', value);
    };

    const handleEnter = (): void => {
        if (props.textInputOptions?.enterSubmit && isValidDate(parsedDate.value)) {
            emit('setInputDate', parsedDate.value, true);
        }
    };

    const handleOpen = () => {
        if (props.textInput && props.textInputOptions?.openMenu && !props.isMenuOpen) {
            emit('open');
        } else if (!props.textInput) {
            emit('open');
        }
    };

    const onClear = () => {
        rawValue.value = '';
        emit('clear');
    };
</script>
