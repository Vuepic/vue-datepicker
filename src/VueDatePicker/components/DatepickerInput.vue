<template>
    <div
        @click="handleOpen"
        :aria-label="ariaLabels.input"
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
                :on-input="handleInput"
                :on-enter="handleEnter"
                :on-tab="handleTab"
                :on-clear="onClear"
            />
            <input
                v-if="!$slots['dp-input']"
                ref="inputRef"
                :id="uid ? `dp-input-${uid}` : undefined"
                :name="name"
                :class="inputClass"
                :inputmode="textInput ? 'text' : 'none'"
                :placeholder="placeholder"
                :disabled="disabled"
                :readonly="readonly"
                :required="required"
                :value="inputValue"
                :autocomplete="autocomplete"
                @input="handleInput"
                @keydown.enter="handleOpen"
                @keydown.tab="handleTab"
                @blur="handleBlur"
                @focus="handleFocus"
                @keypress="handleKeyPress"
            />
            <span class="dp__input_icon" v-if="$slots['input-icon'] && !hideInputIcon"><slot name="input-icon" /></span>
            <CalendarIcon
                v-if="!$slots['input-icon'] && !hideInputIcon && !$slots['dp-input']"
                class="dp__input_icon dp__input_icons"
            />
            <span
                class="dp__clear_icon"
                v-if="$slots['clear-icon'] && inputValue && clearable && !disabled && !readonly"
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
    import { computed, inject, ref } from 'vue';
    import type { PropType, ComputedRef } from 'vue';

    import { CalendarIcon, CancelIcon } from '@/components/Icons';

    import type { DynamicClass, AreaLabels } from '@/interfaces';

    import { isValidDate, parseFreeInput } from '@/utils/date-utils';
    import { ariaLabelsKey, ControlProps, InputProps, SharedProps } from '@/utils/props';

    const emit = defineEmits([
        'clear',
        'open',
        'update:inputValue',
        'setInputDate',
        'close',
        'selectDate',
        'setEmptyDate',
        'toggle',
        'focus-prev',
        'focus',
        'blur',
    ]);

    const props = defineProps({
        ...InputProps,
        ...ControlProps,
        ...SharedProps,
        inputValue: { type: String as PropType<string>, default: '' },
        inline: { type: Boolean as PropType<boolean>, default: false },
        isMenuOpen: { type: Boolean as PropType<boolean>, default: false },
        pattern: { type: String as PropType<string>, default: '' },
    });
    const parsedDate = ref();
    const inputRef = ref<HTMLElement | null>(null);
    const isFocused = ref(false);
    const ariaLabels = inject<ComputedRef<AreaLabels>>(ariaLabelsKey);

    const inputClass = computed(
        (): DynamicClass => ({
            dp__pointer: !props.disabled && !props.readonly && !props.textInput,
            dp__disabled: props.disabled,
            dp__input_readonly: !props.textInput,
            dp__input: true,
            dp__input_icon_pad: !props.hideInputIcon,
            dp__input_valid: props.state,
            dp__input_invalid: props.state === false,
            dp__input_focus: isFocused.value || props.isMenuOpen,
            dp__input_reg: !props.textInput,
            [props.inputClassName]: !!props.inputClassName,
        }),
    );

    const handleInput = (event: Event): void => {
        const { value } = event.target as HTMLInputElement;
        const { format, rangeSeparator } = props.textInputOptions;
        if (value !== '') {
            if (props.textInputOptions?.openMenu && !props.isMenuOpen) {
                emit('open');
            }
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
    };

    const handleFocus = (): void => {
        isFocused.value = true;
        emit('focus');
    };

    const handleOpen = (ev: KeyboardEvent) => {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        if (props.textInput && props.textInputOptions?.openMenu) {
            if (!props.isMenuOpen) {
                emit('open');
            } else if (props.textInputOptions.enterSubmit) {
                emit('selectDate');
            }
        } else if (!props.textInput) {
            emit('toggle');
        }
    };

    const handleBlur = (): void => {
        isFocused.value = false;
        if (!props.isMenuOpen) {
            emit('blur');
        }
        if (props.autoApply && props.textInput && parsedDate.value) {
            emit('setInputDate', parsedDate.value);
            emit('selectDate');
            parsedDate.value = null;
        }
    };

    const onClear = () => {
        emit('clear');
    };

    const handleKeyPress = (ev: KeyboardEvent): boolean | void => {
        if (!props.textInput) {
            ev.preventDefault();
        }
    };

    const focusInput = () => {
        if (inputRef.value) {
            inputRef.value.focus({ preventScroll: true });
        }
    };

    defineExpose({
        focusInput,
    });
</script>
