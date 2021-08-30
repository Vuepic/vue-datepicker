import { createParentAndGetChild, formatFunction, getLongDateValues } from './utils';

describe('Custom value format test', () => {
    const formatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    } as unknown as Intl.DateTimeFormatOptions;

    test('Single value format object', () => {
        const date = new Date();

        const Dp = createParentAndGetChild(date, { format: formatOptions });

        const formattedDate = getLongDateValues(date, formatOptions);

        expect(Dp.vm.internalValue).toEqual(formattedDate);
    });

    test('Single value format function', () => {
        const date = new Date();
        const Dp = createParentAndGetChild(date, { format: formatFunction });
        const formattedDate = formatFunction(date);

        expect(Dp.vm.internalValue).toEqual(formattedDate);
    });

    test('Range value format object', () => {
        const startDate = new Date();
        const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
        const value = [startDate, endDate];

        const Dp = createParentAndGetChild(value, { format: formatOptions, range: true });

        const formattedDateOne = getLongDateValues(value[0], formatOptions);
        const formattedDateTwo = getLongDateValues(value[1], formatOptions);

        expect(Dp.vm.internalValue).toEqual(`${formattedDateOne} - ${formattedDateTwo}`);
    });

    test('Range value format function', () => {
        const startDate = new Date();
        const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
        const value = [startDate, endDate];
        const Dp = createParentAndGetChild(value, { format: formatFunction, range: true });

        const formattedDate = formatFunction([value[0], value[1]]);

        expect(Dp.vm.internalValue).toEqual(formattedDate);
    });
});
