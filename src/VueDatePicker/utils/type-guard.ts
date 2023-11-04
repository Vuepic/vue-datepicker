export const isNumberArray = (value: number | number[]): value is number[] => {
    return Array.isArray(value);
};
