import { createParentAndGetChild, getDateFormat } from './utils';

describe('v-model test', () => {
    test('Null value v-model', () => {
        const Dp = createParentAndGetChild(null);

        expect(Dp.vm.internalValue).toEqual('');

        expect(Dp.vm.modelValue).toBeNull();
    });

    test('Single date value as v-model', () => {
        const date = new Date();

        const Dp = createParentAndGetChild(date);

        const formatDate = getDateFormat(date);

        expect(Dp.vm.internalValue).toEqual(formatDate);

        expect(typeof Dp.vm.modelValue).toEqual('object');
    });

    test('Single string value as v-model', () => {
        const date = new Date();
        const stingDate = JSON.parse(JSON.stringify(date));

        const Dp = createParentAndGetChild(stingDate);

        const formatDate = getDateFormat(date);

        expect(Dp.vm.internalValue).toEqual(formatDate);

        expect(typeof Dp.vm.modelValue).toEqual('string');
    });

    test('Range date value as v-model', () => {
        const startDate = new Date();
        const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
        const value = [startDate, endDate];

        const Dp = createParentAndGetChild(value, { range: true });

        expect(Dp.vm.modelValue).toHaveLength(2);

        expect(typeof Dp.vm.modelValue[0]).toEqual('object');

        expect(typeof Dp.vm.modelValue[1]).toEqual('object');

        const formatDate = getDateFormat(value[0], value[1]);

        expect(Dp.vm.internalValue).toEqual(formatDate);
    });

    test('Range string value as v-model', () => {
        const startDate = new Date();
        const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
        const value = [startDate, endDate].map((date) => JSON.parse(JSON.stringify(date)));

        const Dp = createParentAndGetChild(value, { range: true });

        expect(Dp.vm.modelValue).toHaveLength(2);

        expect(typeof Dp.vm.modelValue[0]).toEqual('string');

        expect(typeof Dp.vm.modelValue[1]).toEqual('string');

        const formatDate = getDateFormat(startDate, endDate);

        expect(Dp.vm.internalValue).toEqual(formatDate);
    });
});
