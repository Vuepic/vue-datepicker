<template>
    <div
        @click="handleOpen"
        aria-label="Datepicker input"
        role="textbox"
        aria-multiline="false"
        :aria-disabled="disabled"
        :aria-readonly="readonly"
    >
        <slot v-if="$slots.trigger && !$slots['dp-input'] && !inline" name="trigger" />
        <slot
            v-if="$slots['dp-input'] && !$slots.trigger && !inline"
            name="dp-input"
            :value="inputValue"
            :onInput="handleInput"
            :onEnter="handleEnter"
            :onTab="handleTab"
        />
        <div v-if="!$slots.trigger && !$slots['dp-input'] && !inline" class="dp__input_wrap">
            <input
                :class="inputClass"
                :placeholder="placeholder"
                :disabled="disabled"
                :readonly="!textInput"
                :value="inputValue"
                @input="handleInput"
                @keydown.enter="handleEnter"
                @keydown.tab="handleTab"
                @focus="handleFocus"
                @blur="handleBlur"
            />
            <span class="dp__input_icon" v-if="$slots['input-icon'] && !hideInputIcon" @click="stopPropagation"
                ><slot name="input-icon"
            /></span>
            <CalendarIcon
                v-if="!$slots['input-icon'] && !hideInputIcon"
                class="dp__input_icon dp__input_icons"
                @click="stopPropagation"
            />
            <span
                class="dp__clear_icon"
                v-if="$slots['clear-icon'] && clearable && !disabled && !readonly"
                @click.stop.prevent="onClear"
                ><slot name="clear-icon"
            /></span>
            <CancelIcon
                v-if="clearable && !$slots['clear-icon'] && inputValue && !disabled && !readonly"
                class="dp__clear_icon dp__input_icons"
                @click.stop.prevent="onClear"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, PropType, ref } from 'vue';
    import { DynamicClass, ITextInputOptions } from '../interfaces';
    import { CalendarIcon, CancelIcon } from './Icons';
    import { isValidDate, parseFreeInput } from '../utils/date-utils';

    const emit = defineEmits([
        'clear',
        'open',
        'update:inputValue',
        'setInputDate',
        'close',
        'selectDate',
        'setEmptyDate',
    ]);

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
        textInputOptions: { type: Object as PropType<ITextInputOptions>, default: () => null },
        isMenuOpen: { type: Boolean as PropType<boolean>, default: false },
        autoApply: { type: Boolean as PropType<boolean>, default: false },
        pattern: { type: String as PropType<string>, default: '' },
    });
    const parsedDate = ref();

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

    const handleInput = (event: Event): void => {
        const { value } = event.target as HTMLInputElement;
        const { format, rangeSeparator } = props.textInputOptions;
        if (value !== '') {
            if (props.range) {
                const [dateOne, dateTwo] = value.split(`${rangeSeparator}`);

                if (dateOne && dateTwo) {
                    const parsedDateOne = parseFreeInput(dateOne.trim(), format || props.pattern);
                    const parsedDateTwo = parseFreeInput(dateTwo.trim(), format || props.pattern);
                    parsedDate.value = parsedDateOne && parsedDateTwo ? [parsedDateOne, parsedDateTwo] : null;
                }
            } else {
                parsedDate.value = parseFreeInput(value, format || props.pattern);
            }

            emit('setInputDate', parsedDate.value);
        } else {
            emit('setInputDate', null);
            if (props.autoApply) {
                emit('setEmptyDate');
                parsedDate.value = null;
            }
        }
        emit('update:inputValue', value);
    };

    const handleEnter = (): void => {
        if (props.textInputOptions?.enterSubmit && isValidDate(parsedDate.value) && props.inputValue !== '') {
            emit('setInputDate', parsedDate.value, true);
            parsedDate.value = null;
        } else if (props.textInputOptions?.enterSubmit && props.inputValue === '') {
            parsedDate.value = null;
            emit('clear');
        }
    };

    const handleTab = (): void => {
        if (props.textInputOptions?.tabSubmit && isValidDate(parsedDate.value) && props.inputValue !== '') {
            emit('setInputDate', parsedDate.value, true);
            parsedDate.value = null;
        } else if (props.textInputOptions?.tabSubmit && props.inputValue === '') {
            parsedDate.value = null;
            emit('clear');
        }
        emit('close');
    };

    const handleFocus = (): void => {
        if (props.textInput && props.textInputOptions?.openMenuOnFocus && !props.isMenuOpen) {
            emit('open');
        }
    };

    const handleOpen = () => {
        if (props.textInput && props.textInputOptions?.openMenu && !props.isMenuOpen) {
            emit('open');
        } else if (!props.textInput) {
            emit('open');
        }
    };

    const handleBlur = (): void => {
        if (props.autoApply && props.textInput && parsedDate.value) {
            emit('setInputDate', parsedDate.value);
            emit('selectDate');
            parsedDate.value = null;
        }
    };

    const stopPropagation = (e: Event) => {
        e.stopImmediatePropagation();
    };

    const onClear = () => {
        emit('clear');
    };
</script>
