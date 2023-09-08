<template>
    <div @click="handleOpen">
        <slot v-if="$slots.trigger && !$slots['dp-input'] && !defaultedInline.enabled" name="trigger" />
        <div v-if="!$slots.trigger && (!defaultedInline.enabled || defaultedInline.input)" class="dp__input_wrap">
            <slot
                v-if="$slots['dp-input'] && !$slots.trigger && !defaultedInline.enabled"
                name="dp-input"
                :value="inputValue"
                :is-menu-open="isMenuOpen"
                :on-input="handleInput"
                :on-enter="handleEnter"
                :on-tab="handleTab"
                :on-clear="onClear"
                :on-blur="handleBlur"
                :on-keypress="handleKeyPress"
                :on-paste="handlePaste"
            />
            <input
                v-if="!$slots['dp-input']"
                ref="inputRef"
                :id="uid ? `dp-input-${uid}` : undefined"
                :name="name"
                :class="inputClass"
                :inputmode="defaultedTextInput.enabled ? 'text' : 'none'"
                :placeholder="placeholder"
                :disabled="disabled"
                :readonly="readonly"
                :required="required"
                :value="inputValue"
                :autocomplete="autocomplete"
                :aria-label="defaultedAriaLabels?.input"
                :aria-disabled="disabled || undefined"
                :aria-invalid="state === false ? true : undefined"
                @input="handleInput"
                @keydown.enter="handleEnter"
                @keydown.tab="handleTab"
                @blur="handleBlur"
                @focus="handleFocus"
                @keypress="handleKeyPress"
                @keydown="handleKeyPress"
                @paste="handlePaste"
            />
            <div @click="emit('toggle')">
                <span class="dp__input_icon" @click="emit('toggle')" v-if="$slots['input-icon'] && !hideInputIcon"
                    ><slot name="input-icon"
                /></span>
                <CalendarIcon
                    @click="emit('toggle')"
                    v-if="!$slots['input-icon'] && !hideInputIcon && !$slots['dp-input']"
                    class="dp__input_icon dp__input_icons"
                />
            </div>
            <span
                class="dp__clear_icon"
                v-if="$slots['clear-icon'] && inputValue && clearable && !disabled && !readonly"
                ><slot name="clear-icon" :clear="onClear"
            /></span>
            <CancelIcon
                v-if="clearable && !$slots['clear-icon'] && inputValue && !disabled && !readonly"
                class="dp__clear_icon dp__input_icons"
                data-test="clear-icon"
                @click.prevent="onClear($event)"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, ref } from 'vue';

    import { CalendarIcon, CancelIcon } from '@/components/Icons';

    import { assignDefaultTime, isValidDate, parseFreeInput } from '@/utils/date-utils';
    import { useDefaults } from '@/composables';
    import { AllProps } from '@/props';

    import type { PropType } from 'vue';
    import type { DynamicClass } from '@/interfaces';
    import { checkStopPropagation } from '@/utils/util';

    defineOptions({
        compatConfig: {
            MODE: 3,
        },
    });

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
        'real-blur',
    ]);

    const props = defineProps({
        isMenuOpen: { type: Boolean as PropType<boolean>, default: false },
        inputValue: { type: String as PropType<string>, default: '' },
        ...AllProps,
    });

    const {
        defaultedTextInput,
        defaultedAriaLabels,
        defaultedInline,
        defaultedConfig,
        getDefaultPattern,
        getDefaultStartTime,
    } = useDefaults(props);

    const parsedDate = ref();
    const inputRef = ref<HTMLElement | null>(null);
    const isFocused = ref(false);
    const textPasted = ref(false);

    const inputClass = computed(
        (): DynamicClass => ({
            dp__pointer: !props.disabled && !props.readonly && !defaultedTextInput.value.enabled,
            dp__disabled: props.disabled,
            dp__input_readonly: !defaultedTextInput.value.enabled,
            dp__input: true,
            dp__input_icon_pad: !props.hideInputIcon,
            dp__input_valid: Boolean(props.state),
            dp__input_invalid: props.state === false,
            dp__input_focus: isFocused.value || props.isMenuOpen,
            dp__input_reg: !defaultedTextInput.value.enabled,
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
            defaultedTextInput.value.format ?? getDefaultPattern(),
            defaultTime ?? assignDefaultTime({}, props.enableSeconds),
            props.inputValue,
            textPasted.value,
        );
    };

    const handleRangeTextInput = (value: string) => {
        const { rangeSeparator } = defaultedTextInput.value;
        const [dateOne, dateTwo] = value.split(`${rangeSeparator}`);

        if (dateOne) {
            const parsedDateOne = parser(dateOne.trim());
            const parsedDateTwo = dateTwo ? parser(dateTwo.trim()) : null;
            const parsedArr = parsedDateOne && parsedDateTwo ? [parsedDateOne, parsedDateTwo] : [parsedDateOne];
            parsedDate.value = parsedDateOne ? parsedArr : null;
        }
    };

    const handlePaste = () => {
        textPasted.value = true;
    };

    const parseInput = (value: string) => {
        if (props.range) {
            handleRangeTextInput(value);
        } else if (props.multiDates) {
            const dates = value.split(`;`);
            parsedDate.value = dates.map((val) => parser(val.trim())).filter((val) => val);
        } else {
            parsedDate.value = parser(value);
        }
    };

    const handleInput = (event: Event | string): void => {
        const value = typeof event === 'string' ? event : (event.target as HTMLInputElement)?.value;

        if (value !== '') {
            if (defaultedTextInput.value.openMenu && !props.isMenuOpen) {
                emit('open');
            }
            parseInput(value);

            emit('set-input-date', parsedDate.value);
        } else {
            handleOnEmptyInput();
        }
        textPasted.value = false;
        emit('update:input-value', value);
    };

    const handleEnter = (ev: KeyboardEvent): void => {
        if (defaultedTextInput.value.enabled) {
            parseInput((ev.target as HTMLInputElement).value);
            if (defaultedTextInput.value.enterSubmit && isValidDate(parsedDate.value) && props.inputValue !== '') {
                emit('set-input-date', parsedDate.value, true);
                parsedDate.value = null;
            } else if (defaultedTextInput.value.enterSubmit && props.inputValue === '') {
                parsedDate.value = null;
                emit('clear');
            }
        } else {
            handleOpen(ev);
        }
    };

    const handleTab = (ev: KeyboardEvent): void => {
        if (defaultedTextInput.value.enabled && defaultedTextInput.value.tabSubmit) {
            parseInput((ev.target as HTMLInputElement).value);
        }

        if (defaultedTextInput.value.tabSubmit && isValidDate(parsedDate.value) && props.inputValue !== '') {
            emit('set-input-date', parsedDate.value, true);
            parsedDate.value = null;
        } else if (defaultedTextInput.value.tabSubmit && props.inputValue === '') {
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
        checkStopPropagation(ev, defaultedConfig.value, true);
        if (
            defaultedTextInput.value.enabled &&
            defaultedTextInput.value.openMenu &&
            !defaultedInline.value.input &&
            !props.isMenuOpen
        ) {
            emit('open');
        } else if (!defaultedTextInput.value.enabled) {
            emit('toggle');
        }
    };

    const handleBlur = (): void => {
        emit('real-blur');
        isFocused.value = false;
        if (!props.isMenuOpen || (defaultedInline.value.enabled && defaultedInline.value.input)) {
            emit('blur');
        }
        if (props.autoApply && defaultedTextInput.value.enabled && parsedDate.value && !props.isMenuOpen) {
            emit('set-input-date', parsedDate.value);
            emit('select-date');
            parsedDate.value = null;
        }
    };

    const onClear = (ev?: Event) => {
        checkStopPropagation(ev, defaultedConfig.value, true);
        emit('clear');
    };

    const handleKeyPress = (ev: KeyboardEvent): void => {
        if (!defaultedTextInput.value.enabled) {
            if (ev.code === 'Tab') return;
            ev.preventDefault();
        }
    };

    const focusInput = () => {
        inputRef.value?.focus({ preventScroll: true });
    };

    const setParsedDate = (date: Date) => {
        parsedDate.value = date;
    };

    defineExpose({
        focusInput,
        setParsedDate,
    });
</script>
