import { computed, ref } from 'vue';
import { isAfter, isDate, isValid, parse, set } from 'date-fns';
import { useContext } from '@packages/composables/useContext.ts';
import { useDefaults } from '@packages/composables/useDefaults.ts';
import { isValidDate } from '@packages/utils/date.ts';
import { DpTriggerKey } from '@packages/components/DpTrigger';
import type { MaybeValue } from '@packages/types';
import type { DpInputProps, DpInputEmits } from '@packages/components/DpInput';

export const useInput = (props: DpInputProps, emit: DpInputEmits) => {
    const {
        inputRef,
        inputValue,
        isMenuOpen,
        rangeEnabled,
        multiDatesEnabled,
        openMenu,
        closeMenu,
        // setEmptyDate,
        // mode,
        props: injectedProps,
    } = useContext(DpTriggerKey, 'DatePickerTrigger');

    const { getDefaultTextInputOptions, getDefaultPattern, getDefaultStartTime } = useDefaults();

    const textInputOptions = computed(() => getDefaultTextInputOptions(props.textInput));

    const parsedDate = ref<MaybeValue<Date> | MaybeValue<Date>[]>(null);
    const textPasted = ref(false);

    const propagateEvent = (emitFn: () => void) => {
        if (props.propagateEvents) {
            emitFn();
        }
    };

    const parseTextToDate = (value: string, pattern: string): Date | null => {
        const parsedDate = parse(value, pattern.slice(0, value.length), new Date(), {
            locale: textInputOptions.value.locale,
        });
        if (isValid(parsedDate) && isDate(parsedDate)) {
            if (inputValue.value || textPasted.value) return parsedDate;
            const defaultTime = getDefaultStartTime(rangeEnabled.value, injectedProps.time);
            const time = Array.isArray(defaultTime) ? defaultTime[0] : defaultTime;

            return set(parsedDate, {
                hours: +time.hours,
                minutes: +time?.minutes,
                seconds: +time?.seconds,
                milliseconds: 0,
            });
        }
        return null;
    };

    const parseFreeInput = (value: string): MaybeValue<Date> => {
        const pattern =
            textInputOptions.value.format ??
            getDefaultPattern(injectedProps.mode, injectedProps.format, injectedProps.time, injectedProps.weekNumbers);

        if (typeof pattern === 'string') {
            return parseTextToDate(value, pattern);
        }

        if (Array.isArray(pattern)) {
            let parsedDate = null;
            for (const textVal of pattern) {
                parsedDate = parseTextToDate(value, textVal);
                if (parsedDate) {
                    break;
                }
            }
            return parsedDate;
        }

        if (typeof pattern === 'function') {
            return pattern(value);
        }

        return null;
    };

    const handleRangeTextInput = (value: string) => {
        const { rangeSeparator } = textInputOptions.value;

        const [dateOne, dateTwo] = value.split(`${rangeSeparator}`);

        if (dateOne) {
            const parsedDateOne = parseFreeInput(dateOne.trim());
            const parsedDateTwo = dateTwo ? parseFreeInput(dateTwo.trim()) : undefined;
            if (isAfter(parsedDateOne as Date, parsedDateTwo as Date)) return;

            // todo
            // const parsedArr = parsedDateOne && parsedDateTwo ? [parsedDateOne, parsedDateTwo] : [parsedDateOne];
            // if (checkMinMaxRange(parsedDateTwo as Date, parsedArr as InternalModuleValue, 0)) {
            //     parsedDate.value = parsedDateOne ? parsedArr : null;
            // }
        }
    };

    const parseInput = (value: string) => {
        if (rangeEnabled.value) {
            handleRangeTextInput(value);
        } else if (multiDatesEnabled.value) {
            const dates = value.split(`;`);
            parsedDate.value = dates.map((val) => parseFreeInput(val.trim())).filter((val) => val);
        } else {
            parsedDate.value = parseFreeInput(value);
        }
    };

    const setInputDate = (val: MaybeValue<Date> | MaybeValue<Date>[], submit?: boolean) => {
        console.log(val, submit);
    };

    const handleOnEmptyInput = () => {
        setInputDate(null);
        if (textInputOptions.value.clearable) {
            if (injectedProps.autoApply) {
                // todo
                // emit('set-empty-date');
                parsedDate.value = null;
            }
        }
    };

    const toggleMenu = () => {
        return isMenuOpen.value ? closeMenu() : openMenu();
    };

    const handleOpen = () => {
        // todo  - condition included && !defaultedInline.value.input
        if (textInputOptions.value.enabled && textInputOptions.value.openMenu) {
            if (textInputOptions.value.openMenu === 'open' && !isMenuOpen.value) return openMenu();
            if (textInputOptions.value.openMenu === 'toggle') return toggleMenu();
        } else if (!textInputOptions.value.enabled) {
            toggleMenu();
        }
    };

    const onInput = (ev: InputEvent | string) => {
        if (typeof ev !== 'string') {
            propagateEvent(() => emit('input', ev));
        }

        const value = typeof ev === 'string' ? ev : (ev.target as HTMLInputElement)?.value;

        if (value !== '') {
            if (textInputOptions.value.openMenu && !isMenuOpen.value) {
                openMenu();
            }
            parseInput(value);

            setInputDate(parsedDate.value);
        } else {
            handleOnEmptyInput();
        }
        textPasted.value = false;
        inputValue.value = value;
        emit('text-input', parsedDate.value);
    };

    const onBlur = (ev: FocusEvent) => {
        propagateEvent(() => emit('blur', ev));
    };

    const onFocus = (ev: FocusEvent) => {
        propagateEvent(() => emit('focus', ev));
    };

    const onTab = (ev: KeyboardEvent) => {
        // todo - condition has  && !noParse
        if (textInputOptions.value.enabled && textInputOptions.value.tabSubmit) {
            parseInput((ev.target as HTMLInputElement).value);
        }

        if (textInputOptions.value.tabSubmit && isValidDate(parsedDate.value) && inputValue.value !== '') {
            setInputDate(parsedDate.value, true);
            parsedDate.value = null;
        } else if (textInputOptions.value.tabSubmit && inputValue.value === '') {
            parsedDate.value = null;
            // todo
            // emit('clear', true);
        }
    };

    const onEnter = (ev: KeyboardEvent) => {
        if (textInputOptions.value.enabled) {
            parseInput((ev.target as HTMLInputElement).value);
            if (textInputOptions.value.enterSubmit && isValidDate(parsedDate.value) && inputValue.value !== '') {
                setInputDate(parsedDate.value, true);
                parsedDate.value = null;
            } else if (textInputOptions.value.enterSubmit && inputValue.value === '') {
                parsedDate.value = null;
                // todo
                // emit('clear');
            }
        } else {
            handleOpen();
        }
    };

    const onEsc = () => {
        closeMenu();
    };

    const onKeyDown = (ev: KeyboardEvent) => {
        propagateEvent(() => emit('keydown', ev));

        if (ev.key === 'Tab') {
            onTab(ev);
        }
        if (ev.key === 'Enter') {
            onEnter(ev);
        }
        if (ev.key === 'Escape' && textInputOptions.value.escClose) {
            onEsc();
        }
    };

    const onPaste = (ev: InputEvent) => {
        propagateEvent(() => emit('paste', ev));
        textPasted.value = true;
    };

    return {
        inputValue,
        inputRef,
        onInput,
        onBlur,
        onFocus,
        onKeyDown,
        onPaste,
    };
};
