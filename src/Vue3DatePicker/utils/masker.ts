import { IMaskProps } from '../interfaces';

export const maskValue = (
    value: string,
    pattern: string,
    mask: string,
    isDelete: boolean,
): { masked: string; position: number } => {
    const strippedValue = `${value}`.replace(/[^0-9]/g, '');
    const chars = strippedValue.split('');
    let count = 0;
    let position = 0;

    let formatted = '';
    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i];
        if (chars[count]) {
            if (/\*/.test(c)) {
                formatted += chars[count];
                count++;
            } else {
                formatted += c;
            }
            position++;
        } else if (mask) {
            if (mask.split('')[i]) formatted += mask.split('')[i];
        }
    }
    const skipPosition = ['-', '.', ',', '/', ' ', '', ':'];
    if (skipPosition.includes(formatted[position]) || !formatted) {
        if (!isDelete) {
            position++;
        }
    }
    return { masked: formatted, position };
};

export const unmask = (value: string): string => {
    return `${value}`.replace(/[^0-9]/g, '');
};

export const getPatternAndMask = (format: string): IMaskProps => {
    const pattern = format.replace(/[0-9]/g, '*');

    return { pattern, mask: format };
};
