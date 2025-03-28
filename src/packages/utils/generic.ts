export const emitDef = <T>(value: T) => !!value;

export const isBool = (value: Record<string, unknown> | boolean): value is boolean => typeof value === 'boolean';
