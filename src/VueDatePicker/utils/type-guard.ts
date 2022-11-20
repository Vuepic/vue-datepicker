import type { ModelValue } from '@/interfaces';

/**
 * =========================================================================================================================
 * Provide type checks when there is a parameter with multiple types, since ts doesn't know on which type we are working on
 * =========================================================================================================================
 */

export const modelValueIsRange = (modelValue: ModelValue, range: boolean): modelValue is Date[] => {
    return range;
};

export const isModelValueRange = (value: ModelValue): value is Date[] => {
    return Array.isArray(value);
};

export const isNumberArray = (value: number | number[]): value is number[] => {
    return Array.isArray(value);
};

export const isRange = (value: ModelValue): value is Date[] => {
    return Array.isArray(value) && value.length === 2;
};

export const isString = (value: unknown): value is string => {
    return typeof value === 'string';
};

export const convertType = <T>(val: any): T => {
    return val as unknown as T;
};
