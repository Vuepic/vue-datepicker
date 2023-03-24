<template>
    <div
        @click="handleOpen"
        :aria-label="defaults.ariaLabels?.input"
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
                @keydown="handleKeyPress"
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
    import { useUtils } from '@/components/composables';
    import { AllProps } from '@/utils/props';

    import type { PropType } from 'vue';
    import type { DynamicClass } from '@/interfaces';

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
        ...AllProps,
    });

    const { getDefaultPattern, isValidDate, defaults, getDefaultStartTime, assignDefaultTime } = useUtils(props);

    const parsedDate = ref();
    const inputRef = ref<HTMLElement | null>(null);
    const isFocused = ref(false);

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

    const handleOnEmptyInput = () => {
        emit('set-input-date', null);
        if (props.autoApply) {
            emit('set-empty-date');
            parsedDate.value = null;
        }
    };

    const parser = (value: string): Date | null => {
        const defaultTime = getDefaultStartTime();
        return parseFreeInput(
            value,
            defaults.value.textInputOptions?.format || getDefaultPattern(),
            defaultTime || assignDefaultTime({}),
            props.inputValue,
        );
    };

    const handleRangeTextInput = (value: string) => {
        const { rangeSeparator } = defaults.value.textInputOptions;
        const [dateOne, dateTwo] = value.split(`${rangeSeparator}`);

        if (dateOne) {
            const parsedDateOne = parser(dateOne.trim());
            const parsedDateTwo = dateTwo ? parser(dateTwo.trim()) : null;
            const parsedArr = parsedDateOne && parsedDateTwo ? [parsedDateOne, parsedDateTwo] : [parsedDateOne];
            parsedDate.value = parsedDateOne ? parsedArr : null;
        }
    };

    const parseInput = (value: string) => {
        if (props.range) {
            handleRangeTextInput(value);
        } else {
            if (props.multiDates) {
                const dates = value.split(`;`);
                parsedDate.value = dates.map((val) => parser(val.trim())).filter((val) => val);
            } else {
                parsedDate.value = parser(value);
            }
        }
    };

    const handleInput = (event: Event): void => {
        const { value } = event.target as HTMLInputElement;

        if (value !== '') {
            if (defaults.value.textInputOptions?.openMenu && !props.isMenuOpen) {
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
        if (defaults.value.textInputOptions?.enterSubmit && isValidDate(parsedDate.value) && props.inputValue !== '') {
            emit('set-input-date', parsedDate.value, true);
            parsedDate.value = null;
        } else if (defaults.value.textInputOptions?.enterSubmit && props.inputValue === '') {
            parsedDate.value = null;
            emit('clear');
        }
    };

    const handleTab = (): void => {
        if (defaults.value.textInputOptions?.tabSubmit && isValidDate(parsedDate.value) && props.inputValue !== '') {
            emit('set-input-date', parsedDate.value, true);
            parsedDate.value = null;
        } else if (defaults.value.textInputOptions?.tabSubmit && props.inputValue === '') {
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
        if (props.textInput && defaults.value.textInputOptions?.openMenu && !props.inlineWithInput) {
            if (!props.isMenuOpen) {
                emit('open');
            } else if (defaults.value.textInputOptions.enterSubmit) {
                emit('select-date');
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
            emit('set-input-date', parsedDate.value);
            emit('select-date');
            parsedDate.value = null;
        }
    };

    const onClear = () => {
        emit('clear');
    };

    const handleKeyPress = (ev: KeyboardEvent): void => {
        if (!props.textInput) {
            if (ev.code === 'Tab') return;
            ev.preventDefault();
        }
    };

    const focusInput = () => {
        if (inputRef.value) {
            inputRef.value.focus({ preventScroll: true });
        }
    };

    const setParsedDate = (date: Date) => {
        parsedDate.value = date;
    };

    defineExpose({
        focusInput,
        setParsedDate,
    });
</script>
