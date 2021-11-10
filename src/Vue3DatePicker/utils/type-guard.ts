import { IMonthValue, ITimeValue, ModelValue } from '../interfaces';

/**
 * =========================================================================================================================
 * Provide type checks when there is a parameter with multiple types, since ts doesn't know on which type we are working on
 * =========================================================================================================================
 */

export const isTime = (value: ModelValue): value is ITimeValue => {
    return typeof value === 'object';
};

export const isTimeArray = (value: ModelValue): value is ITimeValue[] => {
    return Array.isArray(value) && value.length === 2;
};

export const isMonth = (value: ModelValue): value is IMonthValue => {
    return typeof value === 'object';
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

export const isRangeArray = (value: ModelValue, partialRange: boolean): value is Date[] => {
    if (partialRange) return Array.isArray(value);
    return isRange(value);
};

export const isTimeArr = (value: ITimeValue | ITimeValue[]): value is ITimeValue[] => {
    return Array.isArray(value);
};

export const isSingle = (value: ModelValue): value is Date => {
    return typeof value === 'string' || typeof value === 'object';
};

export const isString = (value: unknown): value is string => {
    return typeof value === 'string';
};
