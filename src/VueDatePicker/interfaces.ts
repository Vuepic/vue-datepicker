// import type { ComponentPublicInstance, Ref, MaybeRefOrGetter } from 'vue';
// import type { HeaderPicker } from '@/constants';
// import DatepickerMenu from '@/components/DatepickerMenu.vue';
// import type DatepickerInput from '@/components/DatePickerInput/DatepickerInput.vue';
//
// export type DynamicClass = Record<string, boolean | undefined>;
//
// export interface IDefaultSelect<T = number> {
//     value: T;
//     text: string;
//     className?: DynamicClass;
// }
//
// export interface SelectItem<T = number> {
//     value: T;
//     text: string;
// }
//
// export type VueEmit = (event: any, ...args: any[]) => void;
//
// export enum OpenPosition {
//     center = 'center',
//     left = 'left',
//     right = 'right',
// }
//
// export type Format = string | ((date: Date | Date[]) => string);
//
// export type InternalModelValue = Date | Date[] | null;
//
// export interface CalendarDay {
//     text: number | string;
//     value: Date;
//     current: boolean;
//     classData: DynamicClass;
//     marker?: Marker | null;
// }
//
// export interface CalendarDate {
//     days: CalendarDay[];
// }
//
// export type TextInputConfig = TextInputOptions & { enabled: boolean };
//
// export interface MonthModel {
//     month: number | string;
//     year: number | string;
// }
//
// export interface TimeModel {
//     hours: number | string;
//     minutes: number | string;
//     seconds: number | string;
// }
//
// export type ModelValue =
//     | Date
//     | Date[]
//     | string
//     | string[]
//     | TimeModel
//     | TimeModel[]
//     | MonthModel
//     | MonthModel[]
//     | number
//     | number[]
//     | null;
//
// export type WeekStartNum = 0 | 1 | 2 | 3 | 4 | 5 | 6;
// export type WeekStartStr = '0' | '1' | '2' | '3' | '4' | '5' | '6';
//
// export type SixWeekMode = 'append' | 'prepend' | 'center' | 'fair';
//
// export type MaybeRef<T> = T | Ref<T>;
// export type Fn = () => void;
//
// export interface ConfigurableWindow {
//     window?: Window;
// }
//
// export type MaybeElementRef = MaybeRef<HTMLElement | SVGElement | ComponentPublicInstance | undefined | null | Element>;
// export type OnClickOutsideEvents = Pick<
//     WindowEventMap,
//     'click' | 'mousedown' | 'mouseup' | 'touchstart' | 'touchend' | 'pointerdown' | 'pointerup'
// >;
//
// export interface OnClickOutsideOptions<E extends keyof OnClickOutsideEvents> extends ConfigurableWindow {
//     event?: E;
// }
//
// export interface Marker {
//     date: Date | string;
//     type?: 'dot' | 'line';
//     tooltip?: { text?: string; slot?: string; color?: string }[];
//     color?: string;
//     customPosition?: (el: HTMLElement) => Record<string, string>;
// }
//
// export type DisabledDatesFn = (date: Date) => boolean;
// export type TimeType = keyof Time;
//
// export type DisabledDatesProp = Date[] | string[] | DisabledDatesFn;
//
// export type PresetDate = {
//     label: string;
//     value: MaybeRefOrGetter<Date[] | string[] | Date | string>;
//     style?: Record<string, string>;
//     slot?: string;
//     noTz?: boolean;
//     testId?: string;
// };
//
// export type Flow = 'month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds';
//
// export interface Time {
//     hours: number | number[];
//     minutes: number | number[];
//     seconds: number | number[];
// }
//
// export interface TimeInputRef extends Element {
//     openChildCmp: (child: string) => void;
// }
//
// export interface ICalendarData {
//     month: number;
//     year: number;
// }
//
// export type TimeOverlayCheck = 'noHoursOverlay' | 'noMinutesOverlay' | 'noSecondsOverlay';
//
// export type DateValue = Date | string | null;
//
// export type ModelTypeConverted = string | number | Date;
//
// export type MaybeDate = Date | string | number | null | undefined;
//
// export interface MonthYearOpt {
//     month?: number | string;
//     year?: number | string;
// }
//
// export type DatepickerMenuRef = InstanceType<typeof DatepickerMenu>;
//
// export type DatepickerInputRef = InstanceType<typeof DatepickerInput>;
//
// export type TimeObj = { hours: number; minutes: number; seconds: number };
//
// export type DisabledTimesFn = (time: TimeObj | TimeObj[] | (TimeObj | undefined)[]) => boolean;
//
// export type MenuView = 'month' | 'year' | 'calendar' | 'time';
//
// export interface OverlayGridItem {
//     value: number;
//     text: string;
//     active: boolean;
//     disabled: boolean;
//     className: DynamicClass;
// }
//
// export interface HeaderSelectionBtn {
//     type: HeaderPicker;
//     index: 1 | 2;
//     toggle: () => void;
//     modelValue: number;
//     updateModelValue: (val: number) => void;
//     text: string | number;
//     showSelectionGrid: boolean;
//     items: OverlayGridItem[][];
//     ariaLabel: string;
//     overlayLabel?: string;
// }
//
// export type MenuExposedFn =
//     | 'selectCurrentDate'
//     | 'presetDate'
//     | 'clearHoverDate'
//     | 'handleArrow'
//     | 'updateMonthYear'
//     | 'selectWeekDate'
//     | 'changeYear'
//     | 'changeMonth';
//
// export type OptionEnabled = boolean | number | string;
//
// export type MultiCalendarsProp = OptionEnabled | Partial<MultiCalendarsConfig>;
//
// export interface DisabledTime {
//     hours: number | string;
//     minutes: number | string;
//     seconds?: number | string;
// }
//
// export type DisabledTimeArrProp = DisabledTimesFn | DisabledTime[] | DisabledTime[][];
//
// export interface TimeValuesInv {
//     hours: number[];
//     minutes?: number[];
//     seconds?: (number | undefined)[];
// }
//
// export type TextInputProp = boolean | Partial<TextInputOptions>;
//
// export interface InlineConfig {
//     enabled: boolean;
//     input: boolean;
// }
//
// export type InlineProp = boolean | { input?: boolean };
//
// export type DisabledTimesArrProp = (ind: number, hours?: number) => TimeValuesInv;
//
// export type HighlightFn = (
//     date: Date | MonthModel | number | { quarter: number; year: number },
//     disabled?: boolean,
// ) => boolean;
//
// export type HighlightConfig = Highlight | HighlightFn;
//
// export type HighlightProp = HighlightFn | Partial<Highlight>;
//
// export type WeekNumbersProp = 'iso' | 'local' | ((date: Date) => string | number) | WeekNumbersConfig; // todo
//
// export type DPElements = 'action-row' | 'action-prev' | 'action-next' | 'overlay-month' | 'overlay-year';
//
// export interface RangeConfig extends RangeOpts {
//     enabled: boolean;
// }
//
// export type RangeProp = boolean | Partial<RangeOpts>;
//
// export type TimeZoneProp = string | Partial<TimeZoneConfig>;
//
// export interface PropDates {
//     maxDate: Date | null;
//     minDate: Date | null;
//     disabledDates: Map<string, Date | null> | ((date: Date) => boolean) | null;
//     allowedDates: Map<string, Date | null> | null;
//     highlight: Map<string, Date | null> | ((date: Date) => boolean) | null;
//     markers: Map<string, Marker> | null;
// }
//
// export interface MultiDatesConfig {
//     limit: number | string;
//     dragSelect: boolean;
// }
//
// export interface MultiDatesConfig {
//     limit: number | null;
//     dragSelect: boolean;
//     enabled: boolean;
// }
//
// export type MultiDatesProp = boolean | Partial<MultiDatesOpts>;
//
// export interface TimeInput {
//     type: TimeType;
//     separator?: boolean;
// }
//
// export type CustomClass = string | string[];
//
// export type UIParsed = {
//     [K in keyof UIOpts]: Record<string, boolean>;
// };
//
// export type Numeric = number | string | null;
//
// export type FormatsProp = Partial<FormatsConfig> | null;
//
// export interface BaseProps {
//     flowStep?: number;
//     isTextInputDate?: boolean;
//     collapse?: boolean;
//     isMobile?: boolean;
//     menuWrapRef: null;
//     noOverlayFocus: boolean;
// }
