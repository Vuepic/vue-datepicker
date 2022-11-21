<template>
    <div
        @click="handleOpen"
        :aria-label="config.ariaLabels?.input"
        role="textbox"
        aria-multiline="false"
        :aria-disabled="config.disabled"
        :aria-readonly="config.readonly"
    >
        <slot v-if="$slots.trigger && !$slots['dp-input'] && !config.inline" name="trigger" />
        <div v-if="!$slots.trigger && (!config.inline || config.inlineWithInput)" class="dp__input_wrap">
            <slot
                v-if="$slots['dp-input'] && !$slots.trigger && !config.inline"
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
                :id="config.uid ? `dp-input-${config.uid}` : undefined"
                :name="config.name"
                :class="inputClass"
                :inputmode="config.textInput ? 'text' : 'none'"
                :placeholder="config.placeholder"
                :disabled="config.disabled"
                :readonly="config.readonly"
                :required="config.required"
                :value="inputValue"
                :autocomplete="config.autocomplete"
                @input="handleInput"
                @keydown.enter="handleOpen"
                @keydown.tab="handleTab"
                @blur="handleBlur"
                @focus="handleFocus"
                @keypress="handleKeyPress"
            />
            <span class="dp__input_icon" v-if="$slots['input-icon'] && !config.hideInputIcon"
                ><slot name="input-icon"
            /></span>
            <CalendarIcon
                v-if="!$slots['input-icon'] && !config.hideInputIcon && !$slots['dp-input']"
                class="dp__input_icon dp__input_icons"
            />
            <span
                class="dp__clear_icon"
                v-if="$slots['clear-icon'] && inputValue && config.clearable && !config.disabled && !config.readonly"
                ><slot name="clear-icon" :clear="onClear"
            /></span>
            <CancelIcon
                v-if="config.clearable && !$slots['clear-icon'] && inputValue && !config.disabled && !config.readonly"
                class="dp__clear_icon dp__input_icons"
                data-test="clear-icon"
                @click.stop.prevent="onClear"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, ref } from 'vue';

    import { CalendarIcon, CancelIcon } from '@/components/Icons';

    import { parseFreeInput } from '@/utils/date-utils';
    import { useState, useUtils } from '@/components/composables';

    import type { PropType } from 'vue';
    import type { DynamicClass } from '@/interfaces';

    const { config } = useState();
    const { getDefaultPattern, isValidDate } = useUtils();

    const emit = defineEmits([
        'clear',
        'open',
        'update:input-value',
        'set-input-date',
        'close',
        'select-date',
        'set-empty-date',
        'toggle',
        'focus-prev',
        'focus',
        'blur',
    ]);

    const props = defineProps({
        isMenuOpen: { type: Boolean as PropType<boolean>, default: false },
        inputValue: { type: String as PropType<string>, default: '' },
    });
    const parsedDate = ref();
    const inputRef = ref<HTMLElement | null>(null);
    const isFocused = ref(false);

    const inputClass = computed(
        (): DynamicClass => ({
            dp__pointer: !config.value.disabled && !config.value.readonly && !config.value.textInput,
            dp__disabled: config.value.disabled,
            dp__input_readonly: !config.value.textInput,
            dp__input: true,
            dp__input_icon_pad: !config.value.hideInputIcon,
            dp__input_valid: config.value.state,
            dp__input_invalid: config.value.state === false,
            dp__input_focus: isFocused.value || props.isMenuOpen,
            dp__input_reg: !config.value.textInput,
            [config.value.inputClassName]: !!config.value.inputClassName,
        }),
    );

    const handleOnEmptyInput = () => {
        emit('set-input-date', null);
        if (config.value.autoApply) {
            emit('set-empty-date');
            parsedDate.value = null;
        }
    };

    const parser = (value: string): Date | null => {
        return parseFreeInput(value, config.value.textInputOptions?.format || getDefaultPattern());
    };

    const parseInput = (value: string) => {
        const { rangeSeparator } = config.value.textInputOptions;

        if (config.value.range) {
            const [dateOne, dateTwo] = value.split(`${rangeSeparator}`);

            if (dateOne && dateTwo) {
                const parsedDateOne = parser(dateOne.trim());
                const parsedDateTwo = parser(dateTwo.trim());
                parsedDate.value = parsedDateOne && parsedDateTwo ? [parsedDateOne, parsedDateTwo] : null;
            }
        } else {
            parsedDate.value = parser(value);
        }
    };

    const handleInput = (event: Event): void => {
        const { value } = event.target as HTMLInputElement;

        if (value !== '') {
            if (config.value.textInputOptions?.openMenu && !props.isMenuOpen) {
                emit('open');
            }
            parseInput(value);

            emit('set-input-date', parsedDate.value);
        } else {
            handleOnEmptyInput();
        }
        emit('update:input-value', value);
    };

    const handleEnter = (): void => {
        if (config.value.textInputOptions?.enterSubmit && isValidDate(parsedDate.value) && props.inputValue !== '') {
            emit('set-input-date', parsedDate.value, true);
            parsedDate.value = null;
        } else if (config.value.textInputOptions?.enterSubmit && props.inputValue === '') {
            parsedDate.value = null;
            emit('clear');
        }
    };

    const handleTab = (): void => {
        if (config.value.textInputOptions?.tabSubmit && isValidDate(parsedDate.value) && props.inputValue !== '') {
            emit('set-input-date', parsedDate.value, true);
            parsedDate.value = null;
        } else if (config.value.textInputOptions?.tabSubmit && props.inputValue === '') {
            parsedDate.value = null;
            emit('clear');
        }
    };

    const handleFocus = (): void => {
        isFocused.value = true;
        emit('focus');
    };

    const handleOpen = (ev: KeyboardEvent | MouseEvent) => {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        if (config.value.textInput && config.value.textInputOptions?.openMenu) {
            if (!props.isMenuOpen) {
                emit('open');
            } else if (config.value.textInputOptions.enterSubmit) {
                emit('select-date');
            }
        } else if (!config.value.textInput) {
            emit('toggle');
        }
    };

    const handleBlur = (): void => {
        isFocused.value = false;
        if (!props.isMenuOpen) {
            emit('blur');
        }
        if (config.value.autoApply && config.value.textInput && parsedDate.value) {
            emit('set-input-date', parsedDate.value);
            emit('select-date');
            parsedDate.value = null;
        }
    };

    const onClear = () => {
        emit('clear');
    };

    const handleKeyPress = (ev: KeyboardEvent): boolean | void => {
        if (!config.value.textInput) {
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
