export type MaybeValue<T> = T | null | undefined;

export type Numeric = number | string;

export interface Time {
    hours: Numeric;
    minutes: Numeric;
    seconds: Numeric;
}

export type MaybeDate = MaybeValue<Date | string | number>;

export type InternalModuleValue = Date | Date[] | null;

export interface CalendarDay {
    label: number | string;
    value: Date;
    current: boolean;
}
