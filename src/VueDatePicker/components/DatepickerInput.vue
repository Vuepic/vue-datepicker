<template>
    <div @click="handleOpen">
        <slot v-if="$slots.trigger && !$slots['dp-input'] && !defaultedInline.enabled" name="trigger" />
        <div v-if="!$slots.trigger && (!defaultedInline.enabled || defaultedInline.input)" class="dp__input_wrap">
            <slot
                v-if="
                    $slots['dp-input'] &&
                    !$slots.trigger &&
                    (!defaultedInline.enabled || (defaultedInline.enabled && defaultedInline.input))
                "
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
                :id="uid ? `dp-input-${uid}` : undefined"
                ref="inputRef"
                data-test="dp-input"
                :name="name"
                :class="inputClass"
                :inputmode="defaultedTextInput.enabled ? 'text' : 'none'"
                :placeholder="placeholder"
                :disabled="disabled"
                :readonly="readonly"
                :required="required"
                :value="inputValue"
                :autocomplete="autocomplete"
                :aria-disabled="disabled || undefined"
                :aria-invalid="state === false ? true : undefined"
                @input="handleInput"
                @blur="handleBlur"
                @focus="handleFocus"
                @keypress="handleKeyPress"
                @keydown="handleKeyPress($event, true)"
                @paste="handlePaste"
            />
            <div @click="emit('toggle')">
                <span v-if="$slots['input-icon'] && !hideInputIcon" class="dp__input_icon" @click="emit('toggle')"
                    ><slot name="input-icon"
                /></span>
                <CalendarIcon
                    v-if="!$slots['input-icon'] && !hideInputIcon && !$slots['dp-input']"
                    :aria-label="defaultedAriaLabels?.calendarIcon"
                    class="dp__input_icon dp__input_icons"
                    @click="emit('toggle')"
                />
            </div>
            <span v-if="$slots['clear-icon'] && inputValue && clearable && !disabled && !readonly" class="dp--clear-btn"
                ><slot name="clear-icon" :clear="onClear"
            /></span>
            <button
                v-if="clearable && !$slots['clear-icon'] && inputValue && !disabled && !readonly"
                ref="clearBtnRef"
                :aria-label="defaultedAriaLabels?.clearInput"
                class="dp--clear-btn"
                type="button"
                @blur="clearBtnFocused = false"
                @keydown="checkKeyDown($event, () => onClear($event), true, onClearKeydown)"
                @click.prevent="onClear($event)"
            >
                <CancelIcon class="dp__input_icons" data-test="clear-icon" />
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, nextTick, ref } from 'vue';

    import { CalendarIcon, CancelIcon } from '@/components/Icons';

    import { assignDefaultTime, isValidDate, parseFreeInput } from '@/utils/date-utils';
    import { useDefaults, useValidation } from '@/composables';
    import { AllProps } from '@/props';

    import type { PropType } from 'vue';
    import type { DynamicClass, InternalModuleValue } from '@/interfaces';
    import { checkKeyDown, checkStopPropagation } from '@/utils/util';
    import { isAfter } from 'date-fns';
    import { EventKey } from '@/constants';

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
        'text-input',
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
        defaultedRange,
        defaultedMultiDates,
        defaultedUI,
        getDefaultPattern,
        getDefaultStartTime,
    } = useDefaults(props);

    const { checkMinMaxRange } = useValidation(props);

    const parsedDate = ref();
    const inputRef = ref<HTMLInputElement | null>(null);
    const isFocused = ref(false);
    const clearBtnFocused = ref(false);
    const textPasted = ref(false);
    const clearBtnRef = ref<HTMLElement | null>(null);

    const inputClass = computed(
        (): DynamicClass => ({
            dp__pointer: !props.disabled && !props.readonly && !defaultedTextInput.value.enabled,
            dp__disabled: props.disabled,
            dp__input_readonly: !defaultedTextInput.value.enabled,
            dp__input: true,
            dp__input_icon_pad: !props.hideInputIcon,
            dp__input_valid: typeof props.state === 'boolean' ? props.state : false,
            dp__input_invalid: typeof props.state === 'boolean' ? !props.state : false,
            dp__input_focus: isFocused.value || props.isMenuOpen,
            dp__input_reg: !defaultedTextInput.value.enabled,
            ...(defaultedUI.value.input ?? {}),
        }),
    );

    const handleOnEmptyInput = () => {
        emit('set-input-date', null);
        if (props.clearable) {
            if (props.autoApply) {
                emit('set-empty-date');
                parsedDate.value = null;
            }
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
            props.formatLocale,
        );
    };

    const handleRangeTextInput = (value: string) => {
        const { rangeSeparator } = defaultedTextInput.value;
        const [dateOne, dateTwo] = value.split(`${rangeSeparator}`);

        if (dateOne) {
            const parsedDateOne = parser(dateOne.trim());
            const parsedDateTwo = dateTwo ? parser(dateTwo.trim()) : null;
            if (isAfter(parsedDateOne as Date, parsedDateTwo as Date)) return;

            const parsedArr = parsedDateOne && parsedDateTwo ? [parsedDateOne, parsedDateTwo] : [parsedDateOne];
            if (checkMinMaxRange(parsedDateTwo as Date, parsedArr as InternalModuleValue, 0)) {
                parsedDate.value = parsedDateOne ? parsedArr : null;
            }
        }
    };

    const handlePaste = () => {
        textPasted.value = true;
    };

    const parseInput = (value: string) => {
        if (defaultedRange.value.enabled) {
            handleRangeTextInput(value);
        } else if (defaultedMultiDates.value.enabled) {
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
        emit('text-input', event, parsedDate.value);
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

    const handleTab = (ev: KeyboardEvent, fromInput?: boolean): void => {
        if (clearBtnRef.value && fromInput && !clearBtnFocused.value) {
            ev.preventDefault();
            clearBtnFocused.value = true;
            clearBtnRef.value?.focus();
        }
        if (defaultedTextInput.value.enabled && defaultedTextInput.value.tabSubmit) {
            parseInput((ev.target as HTMLInputElement).value);
        }

        if (defaultedTextInput.value.tabSubmit && isValidDate(parsedDate.value) && props.inputValue !== '') {
            emit('set-input-date', parsedDate.value, true, true);
            parsedDate.value = null;
        } else if (defaultedTextInput.value.tabSubmit && props.inputValue === '') {
            parsedDate.value = null;
            emit('clear', true);
        }
    };

    const handleFocus = (): void => {
        isFocused.value = true;
        emit('focus');
        nextTick().then(() => {
            if (defaultedTextInput.value.enabled && defaultedTextInput.value.selectOnFocus) {
                inputRef.value?.select();
            }
        });
    };

    const handleOpen = (ev: KeyboardEvent | MouseEvent) => {
        ev.preventDefault();
        checkStopPropagation(ev, defaultedConfig.value, true);
        if (defaultedTextInput.value.enabled && defaultedTextInput.value.openMenu && !defaultedInline.value.input) {
            if (defaultedTextInput.value.openMenu === 'open' && !props.isMenuOpen) return emit('open');
            if (defaultedTextInput.value.openMenu === 'toggle') return emit('toggle');
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

    const handleKeyPress = (ev: KeyboardEvent, fromInput?: boolean): void => {
        if (ev.key === 'Tab') {
            handleTab(ev, fromInput);
        }
        if (ev.key === 'Enter') {
            handleEnter(ev);
        }
        if (!defaultedTextInput.value.enabled) {
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
            clearBtnFocused.value = false;
            handleTab(event);
        }
    };

    defineExpose({
        focusInput,
        setParsedDate,
    });
</script>
