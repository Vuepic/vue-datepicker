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
        <div v-if="!$slots.trigger && (!inline || inlineWithInput)" class="dp__input_wrap">
            <slot
                v-if="$slots['dp-input'] && !$slots.trigger && !inline"
                name="dp-input"
                :value="inputValue"
                :onInput="handleInput"
                :onEnter="handleEnter"
                :onTab="handleTab"
                :onClear="onClear"
            />
            <input
                v-if="!$slots['dp-input']"
                ref="inputRef"
                :id="uid ? `dp-input-${uid}` : undefined"
                :name="name"
                :class="inputClass"
                :placeholder="placeholder"
                :disabled="disabled"
                :readonly="readonly"
                :required="required"
                :value="inputValue"
                :autocomplete="autocomplete"
                @input="handleInput"
                @keydown.enter="handleEnter"
                @keydown.tab="handleTab"
                @blur="handleBlur"
                @focus="handleFocus"
            />
            <span class="dp__input_icon" v-if="$slots['input-icon'] && !hideInputIcon" @click="stopPropagation"
                ><slot name="input-icon"
            /></span>
            <CalendarIcon
                v-if="!$slots['input-icon'] && !hideInputIcon && !$slots['dp-input']"
                class="dp__input_icon dp__input_icons"
                @click="stopPropagation"
            />
            <span class="dp__clear_icon" v-if="$slots['clear-icon'] && clearable && !disabled && !readonly"
                ><slot name="clear-icon" :clear="onClear"
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
    import { computed, PropType, ref, useSlots } from 'vue';
    import { DynamicClass, ITextInputOptions } from '../interfaces';
    import { CalendarIcon, CancelIcon } from './Icons';
    import { isValidDate, parseFreeInput } from '../utils/date-utils';
    import { unrefElement } from '../utils/util';

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
        name: { type: String as PropType<string>, default: null },
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
        inlineWithInput: { type: Boolean as PropType<boolean>, default: false },
        textInput: { type: Boolean as PropType<boolean>, default: false },
        textInputOptions: { type: Object as PropType<ITextInputOptions>, default: () => null },
        isMenuOpen: { type: Boolean as PropType<boolean>, default: false },
        autoApply: { type: Boolean as PropType<boolean>, default: false },
        pattern: { type: String as PropType<string>, default: '' },
        uid: { type: String as PropType<string>, default: null },
        openMenuOnFocus: { type: Boolean as PropType<boolean>, default: true },
        required: { type: Boolean as PropType<boolean>, default: false },
        autocomplete: { type: String as PropType<string>, default: 'off' },
    });
    const parsedDate = ref();
    const inputRef = ref(null);
    const isFocused = ref(false);
    const slots = useSlots();

    const inputClass = computed(
        (): DynamicClass => ({
            dp__pointer: !props.disabled && !props.readonly && !props.textInput,
            dp__disabled: props.disabled,
            dp__input: true,
            dp__input_icon_pad: !props.hideInputIcon,
            dp__input_valid: props.state,
            dp__input_invalid: props.state === false,
            dp__input_focus: isFocused.value || props.isMenuOpen,
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
        if (!props.inline) {
            isFocused.value = true;
            if (props.openMenuOnFocus && !props.isMenuOpen) {
                emit('open');
            } else if (props.isMenuOpen) {
                unFocus();
                emit('close');
            }
        }
    };

    const handleOpen = () => {
        if (!props.openMenuOnFocus || slots['dp-input'] || slots['trigger']) {
            if (props.textInput && props.textInputOptions?.openMenu && !props.isMenuOpen) {
                emit('open');
            } else if (!props.textInput) {
                emit('open');
            }
        }
    };

    const handleBlur = (): void => {
        isFocused.value = false;
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

    const unFocus = (): void => {
        isFocused.value = false;
        const el = unrefElement(inputRef);
        if (el) {
            el.blur();
        }
    };

    defineExpose({
        unFocus,
    });
</script>
