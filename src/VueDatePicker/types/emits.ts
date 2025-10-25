import type { Marker } from '@/types/picker.ts';
import type { Hour12, InputParsedDate, InternalModelValue, PickerSection } from '@/types/generic.ts';

export interface RootEmits {
    'update:model-value': [value: any]; // explicit any, better DX when using v-model
    'internal-model-change': [value: InternalModelValue];
    'text-submit': [];
    'text-input': [event: Event | string, parsedDate: InputParsedDate];
    open: [];
    closed: [];
    focus: [];
    blur: [];
    cleared: [];
    'flow-step': [step: number];
    'update-month-year': [value: { instance: number; month: number; year: number }];
    'invalid-select': [];
    'invalid-fixed-range': [date: Date];
    'invalid-date': [date: Date];
    'tooltip-open': [marker: Marker];
    'tooltip-close': [marker: Marker];
    'am-pm-change': [value: Hour12];
    'range-start': [date: Date];
    'range-end': [date: Date];
    'date-click': [date: Date];
    'overlay-toggle': [toggle: { open: boolean; overlay: PickerSection }];
    invalid: [event: Event];
}
