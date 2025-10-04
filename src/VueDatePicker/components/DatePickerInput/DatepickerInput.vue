<template>
    <div @click="handleOpen">
        <slot v-if="$slots.trigger && !$slots['dp-input'] && !inline.enabled" name="trigger" />
        <div v-if="!$slots.trigger && (!inline.enabled || inline.input)" class="dp__input_wrap">
            <slot
                v-if="$slots['dp-input'] && !$slots.trigger && (!inline.enabled || (inline.enabled && inline.input))"
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
                :on-focus="handleFocus"
                :open-menu="() => $emit('open')"
                :close-menu="() => $emit('close')"
                :toggle-menu="() => $emit('toggle')"
            />
            <input
                v-if="!$slots['dp-input']"
                :id="inputAttrs.id"
                ref="dp-input"
                data-test-id="dp-input"
                :name="inputAttrs.name"
                :class="inputClass"
                :inputmode="textInput.enabled ? 'text' : 'none'"
                :placeholder="rootProps.placeholder"
                :disabled="rootProps.disabled"
                :readonly="rootProps.readonly"
                :required="inputAttrs.required"
                :value="inputValue"
                :autocomplete="inputAttrs.autocomplete"
                :aria-label="ariaLabels.input"
                :aria-disabled="rootProps.disabled || undefined"
                :aria-invalid="inputAttrs.state === false ? true : undefined"
                @input="handleInput"
                @blur="handleBlur"
                @focus="handleFocus"
                @keypress="handleKeyPress"
                @keydown="handleKeyPress($event)"
                @paste="handlePaste"
            />
            <div @click="emit('toggle')">
                <span
                    v-if="$slots['input-icon'] && !inputAttrs.hideInputIcon"
                    class="dp__input_icon"
                    @click="emit('toggle')"
                    ><slot name="input-icon"
                /></span>
                <CalendarIcon
                    v-if="!$slots['input-icon'] && !inputAttrs.hideInputIcon && !$slots['dp-input']"
                    :aria-label="ariaLabels?.calendarIcon"
                    class="dp__input_icon dp__input_icons"
                    @click="emit('toggle')"
                />
            </div>
            <span
                v-if="
                    $slots['clear-icon'] &&
                    (inputAttrs.alwaysClearable ||
                        (inputValue && inputAttrs.clearable && !rootProps.disabled && !rootProps.readonly))
                "
                class="dp--clear-btn"
                ><slot name="clear-icon" :clear="onClear"
            /></span>
            <button
                v-if="
                    !$slots['clear-icon'] &&
                    (inputAttrs.alwaysClearable ||
                        (inputAttrs.clearable && inputValue && !rootProps.disabled && !rootProps.readonly))
                "
                :aria-label="ariaLabels?.clearInput"
                class="dp--clear-btn"
                type="button"
                @keydown="checkKeyDown($event, () => onClear($event), true, onClearKeydown)"
                @click.prevent="onClear($event)"
            >
                <CancelIcon class="dp__input_icons" data-test-id="clear-icon" />
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, nextTick, ref, useTemplateRef } from 'vue';
    import { isAfter } from 'date-fns';

    import { CalendarIcon, CancelIcon } from '@/components/Icons';

    import { useContext, useUtils, useValidation } from '@/composables';
    import { useInput } from '@/components/DatePickerInput/useInput.ts';

    import { EventKey } from '@/constants';
    import type { DynamicClass, InputParsedDate, InternalModelValue } from '@/types';

    const emit = defineEmits<{
        clear: [];
        open: [];
        'set-input-date': [date: InputParsedDate, submit?: boolean, tabbed?: boolean];
        close: [];
        'select-date': [];
        'set-empty-date': [];
        toggle: [];
        'focus-pref': [];
        focus: [];
        blur: [];
        'real-blur': [];
    }>();

    const props = withDefaults(defineProps<{ isMenuOpen?: boolean }>(), {
        isMenuOpen: false,
    });

    const {
        rootEmit,
        inputValue,
        rootProps,
        defaults: { textInput, ariaLabels, inline, config, range, multiDates, ui, inputAttrs },
    } = useContext();
    const { checkMinMaxRange, isValidDate } = useValidation();
    const { parseFreeInput, textPasted } = useInput();
    const { checkKeyDown, checkStopPropagation } = useUtils();

    const inputRef = useTemplateRef('dp-input');
    const parsedDate = ref<InputParsedDate>(null);
    const isFocused = ref(false);

    const inputClass = computed(
        (): DynamicClass => ({
            dp__pointer: !rootProps.disabled && !rootProps.readonly && !textInput.value.enabled,
            dp__disabled: rootProps.disabled,
            dp__input_readonly: !textInput.value.enabled,
            dp__input: true,
            dp__input_icon_pad: !inputAttrs.value.hideInputIcon,
            dp__input_valid: typeof inputAttrs.value.state === 'boolean' ? inputAttrs.value.state : false,
            dp__input_invalid: typeof inputAttrs.value.state === 'boolean' ? !inputAttrs.value.state : false,
            dp__input_focus: isFocused.value || props.isMenuOpen,
            dp__input_reg: !textInput.value.enabled,
            ...ui.value.input,
        }),
    );

    const handleOnEmptyInput = () => {
        emit('set-input-date', null);
        if (inputAttrs) {
            if (rootProps.autoApply) {
                emit('set-empty-date');
                parsedDate.value = null;
            }
        }
    };

    const handleRangeTextInput = (value: string) => {
        const { rangeSeparator } = textInput.value;
        const [dateOne, dateTwo] = value.split(`${rangeSeparator}`);

        if (dateOne) {
            const parsedDateOne = parseFreeInput(dateOne.trim(), inputValue.value);
            const parsedDateTwo = dateTwo ? parseFreeInput(dateTwo.trim(), inputValue.value) : undefined;
            if (isAfter(parsedDateOne as Date, parsedDateTwo as Date)) return;

            const parsedArr = parsedDateOne && parsedDateTwo ? [parsedDateOne, parsedDateTwo] : [parsedDateOne];
            if (checkMinMaxRange(parsedDateTwo as Date, parsedArr as InternalModelValue, 0)) {
                parsedDate.value = parsedDateOne ? parsedArr : null;
            }
        }
    };

    const handlePaste = () => {
        textPasted.value = true;
    };

    const parseInput = (value: string) => {
        if (range.value.enabled) {
            handleRangeTextInput(value);
        } else if (multiDates.value.enabled) {
            const dates = value.split(`;`);
            parsedDate.value = dates.map((val) => parseFreeInput(val.trim())).filter((val) => !!val, inputValue.value);
        } else {
            parsedDate.value = parseFreeInput(value, inputValue.value);
        }
    };

    const handleInput = (event: Event | string): void => {
        const value = typeof event === 'string' ? event : (event.target as HTMLInputElement)?.value;

        if (value === '') {
            handleOnEmptyInput();
        } else {
            if (textInput.value.openMenu && !props.isMenuOpen) {
                emit('open');
            }
            parseInput(value);

            emit('set-input-date', parsedDate.value);
        }
        textPasted.value = false;
        inputValue.value = value;
        rootEmit('text-input', event, parsedDate.value);
    };

    const handleEnter = (ev: KeyboardEvent): void => {
        if (textInput.value.enabled) {
            parseInput((ev.target as HTMLInputElement).value);
            if (textInput.value.enterSubmit && isValidDate(parsedDate.value) && inputValue.value !== '') {
                emit('set-input-date', parsedDate.value, true);
                parsedDate.value = null;
            } else if (textInput.value.enterSubmit && inputValue.value === '') {
                parsedDate.value = null;
                emit('clear');
            }
        } else {
            handleOpen(ev);
        }
    };

    const handleTab = (ev: KeyboardEvent, noParse?: boolean): void => {
        if (textInput.value.enabled && textInput.value.tabSubmit && !noParse) {
            parseInput((ev.target as HTMLInputElement).value);
        }

        if (textInput.value.tabSubmit && isValidDate(parsedDate.value) && inputValue.value !== '') {
            emit('set-input-date', parsedDate.value, true, true);
            parsedDate.value = null;
        } else if (textInput.value.tabSubmit && inputValue.value === '') {
            parsedDate.value = null;
            emit('clear');
        }
    };

    const handleFocus = (): void => {
        isFocused.value = true;
        emit('focus');
        nextTick().then(() => {
            if (textInput.value.enabled && textInput.value.selectOnFocus) {
                inputRef.value?.select();
            }
        });
    };

    const handleOpen = (ev: KeyboardEvent | MouseEvent) => {
        checkStopPropagation(ev, config.value, true);
        if (textInput.value.enabled && textInput.value.openMenu && !inline.value.input) {
            if (textInput.value.openMenu === 'open' && !props.isMenuOpen) return emit('open');
            if (textInput.value.openMenu === 'toggle') return emit('toggle');
        } else if (!textInput.value.enabled) {
            emit('toggle');
        }
    };

    const handleBlur = (): void => {
        emit('real-blur');
        isFocused.value = false;
        if (!props.isMenuOpen || (inline.value.enabled && inline.value.input)) {
            emit('blur');
        }
        if (rootProps.autoApply && textInput.value.enabled && parsedDate.value && !props.isMenuOpen) {
            emit('set-input-date', parsedDate.value);
            emit('select-date');
            parsedDate.value = null;
        }
    };

    const onClear = (ev?: Event) => {
        checkStopPropagation(ev, config.value, true);
        emit('clear');
    };

    const handleEsc = () => {
        emit('close');
    };

    const handleKeyPress = (ev: KeyboardEvent): void => {
        if (ev.key === 'Tab') {
            handleTab(ev);
        }
        if (ev.key === 'Enter') {
            handleEnter(ev);
        }
        if (ev.key === 'Escape' && textInput.value.escClose) {
            handleEsc();
        }
        if (!textInput.value.enabled) {
            if (ev.code === 'Tab') return;
            ev.preventDefault();
        }
    };

    const focusInput = () => {
        inputRef.value?.focus({ preventScroll: true });
    };

    const setParsedDate = (date: Date | null) => {
        parsedDate.value = date;
    };

    const onClearKeydown = (event: KeyboardEvent) => {
        if (event.key === EventKey.tab) {
            handleTab(event, true);
        }
    };

    defineExpose({
        focusInput,
        setParsedDate,
    });
</script>
