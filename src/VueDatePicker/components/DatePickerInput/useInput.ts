import { computed, ref } from 'vue';
import { isDate, isValid, parse, set } from 'date-fns';
import { useContext, useDateUtils } from '@/composables';

export const useInput = () => {
    const {
        rootProps,
        defaults: { textInput, startTime, timeConfig },
    } = useContext();
    const { getTimeObjFromCurrent } = useDateUtils();

    const textPasted = ref(false);

    const assignTimeTextInput = computed(() =>
        Array.isArray(startTime.value)
            ? startTime.value[0]
            : (startTime.value ?? getTimeObjFromCurrent({}, timeConfig.value.enableSeconds)),
    );

    const parseStringToDate = (value: string, pattern: string, inputVal?: string): Date | null => {
        const parsedDate = parse(value, pattern.slice(0, value.length), new Date(), { locale: rootProps.locale });

        if (isValid(parsedDate) && isDate(parsedDate)) {
            if (inputVal || textPasted.value) return parsedDate;
            return set(parsedDate, {
                hours: +assignTimeTextInput.value!.hours,
                minutes: +assignTimeTextInput.value!.minutes,
                seconds: +(assignTimeTextInput.value!.seconds ?? 0),
                milliseconds: 0,
            });
        }
        return null;
    };

    const parseFreeInput = (value: string, inputVal?: string): Date | null => {
        if (typeof textInput.value.pattern === 'string') {
            return parseStringToDate(value, textInput.value.pattern, inputVal);
        }

        if (Array.isArray(textInput.value.pattern)) {
            let parsedDate = null;
            for (const textVal of textInput.value.pattern) {
                parsedDate = parseStringToDate(value, textVal, inputVal);
                if (parsedDate) {
                    break;
                }
            }
            return parsedDate;
        }

        if (typeof textInput.value.pattern === 'function') {
            return textInput.value.pattern(value);
        }

        return null;
    };

    return {
        textPasted,
        parseFreeInput,
    };
};
