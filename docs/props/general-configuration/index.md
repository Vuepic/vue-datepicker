---
lang: en-US
title: Props - General configuration
description: General behavior props configuration
---

# General configuration

General behavior props configuration

## model-value <Badge type="tip" text="v-model"  />

v-model binding

:::danger
Different modes require different types for `model-value`

- Exception to this rule is if you use [`model-type`](#model-type)
:::

:::info Date Picker
- Single - `Date`
- Range - `[Date, Date]` or `[Date, null]` in case of partial range 
:::

:::info Time Picker
- Single - `{ hours: number; minutes: number; seconds?: number }`
- Range - `{ hours: number; minutes: number; seconds?: number }[]`
:::

:::info Week Picker
- Single - `[Date, Date]`
- Range - `[[Date, Date], [Date, Date]]`
:::

:::info Month Picker
- Single - `{ month: number; year: number }`
- Range - `{ month: number; year: number }[]`
:::

:::info Year Picker
- Single - `number`
- Range - `[number, number]`
:::

:::info Quarter Picker
- Single - `Date`
- Range - `[Date, Date]`
:::

:::tip
 - `Date` values can also be `string` or `number`, as long as `new Date(value)` returns a valid date
 - `number` values can also be `string` values, as long as `Number(value)` returns a valid number
:::


- Default: `undefined`

::: details Code Example
```vue
<template>
  <VueDatePicker :model-value="date" @update:model-value="(value) => date = value" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## model-type

Specify a custom format for `v-model`

- Type: `'timestamp' | 'format' | string`
- Default: `undefined`

:::info
- `timestamp` - uses timestamp for binding
- `format` - uses provided format or fallbacks to the default one. Must be a **string**
- `iso` - date that will be returned will be in iso string format
- `string` - use custom format by providing a custom pattern with [unicode tokens](https://date-fns.org/v2.16.1/docs/format)

This is only compatible with date pickers, [`time-picker`](/props/modes/#time-picker) and [`month-picker`](/props/modes/#month-picker), other modes are not supported
:::

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" model-type="dd.MM.yyyy" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## auto-apply

If set to `true`, clicking on a date value will automatically select the value

- Type: `boolean`
- Default: `false`

:::tip
When `auto-apply` is used in combination with [`flow`](/props/modes/#flow), to select date if flow is broken, you need to set [`flow.partial`](/props/modes/#flow) to `true`
:::

<GlobalDemo :autoApply="true" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" auto-apply />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## no-today

Hide today mark from the calendar

- Type: `boolean`
- Default: `false`

<GlobalDemo :noToday="true" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" no-today />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## markers

Add markers to the specified dates with (optional) tooltips. For color options, you can use any
`css` valid color.

- Type: `Markers[]`

```ts
interface Marker {
    date: Date | string | number;
    type?: 'dot' | 'line';
    tooltip?: { text: string; color?: string; slot?: string }[];
    color?: string;
    // el is an HTML element of a calendar cell
    customPosition?: (el: HTMLElement) => Record<string, string | number>;
}
```

- Default: `[]`

:::tip
 - You can provide a `slot` name in the tooltip object to use a custom slot for the tooltip
:::

<GlobalDemo :markers="markers" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :markers="markers" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';
  import { addDays } from 'date-fns';

  const date = ref();
  const markers = [
    {
      date: addDays(new Date(), 1),
      type: 'dot',
      tooltip: [{ text: 'Dot with tooltip', color: 'green' }],
    },
    {
      date: addDays(new Date(), 2),
      type: 'line',
      tooltip: [
        { text: 'First tooltip', color: 'blue' },
        { text: 'Second tooltip', color: 'yellow' },
      ],
    },
    {
      date: addDays(new Date(), 3),
      type: 'dot',
      color: 'yellow',
    },
  ];
</script>
```
:::

## highlight

Specify highlighted dates

- Type: `HighlightFn | Partial<Highlight>;`

```ts
interface Highlight {
    dates: Date[];
    years: number[];
    months: { month: number; year: number }[];
    quarters: { quarter: number; year: number }[];
    weekdays: number[];
    options: { highlightDisabled: boolean };
}

type HighlightFn = ((date: Date) => boolean)
    | ((month: { month: number; year: number }) => boolean)
    | ((yearOrWeekDay: number) => boolean)
    | ((quarter: { quarter: number; year: number }) => boolean);
```

- Default: `undefined`

<GlobalDemo :highlight="highlight" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :highlight="{ dates: highlighted }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';
  import { addDays } from 'date-fns';

  const date = ref();
  const highlighted = [
    addDays(new Date(), 1),
    addDays(new Date(), 2),
    addDays(new Date(), 3),
  ];
</script>
```
:::

## disabled

Disables the input

- Type: `boolean`
- Default: `false`

<GlobalDemo :disabled="true" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" disabled />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## readonly

Sets the input in readonly state

- Type: `boolean`
- Default: `false`

<GlobalDemo :readonly="true" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" readonly />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## hide-navigation

Hide navigation buttons from the overlays

- Type: `('month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds')[]`
- Default: `[]`

<GlobalDemo :hideNavigation="['month', 'year']" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :hide-navigation="['month', 'year']" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## action-row

Control which buttons are shown in the action row

- Type: 

```ts
import type { RoundingMethod, NearestMinutes } from 'date-fns';

interface ActionRow {
 selectBtnLabel?: string;
 cancelBtnLabel?: string;
 nowBtnLabel?: string;
 showSelect?: boolean;
 showCancel?: boolean;
 showNow?: boolean;
 showPreview?: boolean;
 nowBtnRound?: { rounding?: RoundingMethod; roundTo?: NearestMinutes }
}
```

- Default: 

```ts
{
  selectBtnLabel: 'Select',
  cancelBtnLabel: 'Cancel',
  nowBtnLabel: 'Now',
  showSelect: true,
  showCancel: true,
  showNow: false,
  showPreview: true, 
  nowBtnRound: undefined,
}
```

:::info
- `showNow` - Places another button in the action row, where click on it results in selecting the current date and time
- `nowBtnRound` - When `showNow` is enabled, you can configure `now` button to round the selected time to the nearest minute. 
It supports two properties:
  - `rounding` - A round method:  `"ceil" | "floor" | "round" | "trunc"`
  - `roundTo` - Value of minutes to round to: values from `1` to `30`
:::


<GlobalDemo :actionRow="{ showPreview: false, showNow: true }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :action-row="{ showPreview: false, showNow: true }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## loading

Adds a loading overlay in the menu

- Type: `boolean`
- Default: `false`

<GlobalDemo :loading="true" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" loading />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## year-first

Reverse button order in the calendar header

- Type: `boolean`
- Default: `false`

<GlobalDemo :yearFirst="true" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" year-first />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## disable-year-select

Removes the year button from the menu and cycles trough the current or provided year

- Type: `boolean`
- Default: `false`

<GlobalDemo :disableYearSelect="true" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" disable-year-select />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## input-attrs

Configure input attributes

- Type:

```ts
interface InputAttrs {
  name?: string;
  required?: boolean;
  autocomplete?: string;
  state?: boolean;
  clearable?: boolean;
  alwaysClearable?: boolean;
  hideInputIcon?: boolean;
  id?: string;
  inputmode?: 'search' | 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | undefined;
}
```
- Default:

```ts
{
  name: undefined, 
  required: false, 
  autocomplete: 'off',
  state: undefined,
  clearable: true,
  alwaysClearable: false,
  hideInputIcon: false,
  id: undefined,
  inputmode: 'none',
}
```

:::info
- `name` - `HTMLInputElement` name attribute
- `required` - `HTMLInputElement` required attribute
- `state` - Validation state of the calendar value. Sets the green/red border depending on the value
- `clearable` - Add a clear icon to the input field where you can set the value to null
- `alwaysClearable` - Keeps the clear icon even if there is no value in the calendar
- `hideInputIcon` - Hide calendar icon in the input field
- `id` - Sets the `id` attribute on the input field
- `inputmode` - `HTMLInputElement` inputmode attribute
:::

<GlobalDemo :inputAttrs="{ hideInputIcon: true }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :input-attrs="{ hideInputIcon: true }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## six-weeks

Always display six weeks on the calendar. This will prevent dynamic calendar height change depending on the month

- Type: `boolean | 'append' | 'prepend' | 'center' | 'fair'`
- Default: `false`

:::info
- `boolean` - Legacy enable, same as append
- `'append'` - Always add new row(s) at the bottom of the calendar
- `'prepend'` - Always add new row(s) at the beginning of the calendar
- `'center'` - If the month that needs padding starts with the beginning of a week, add a week at the start. If a second week needs to be added, add it in the end. This way, every month will have offset days on each end, and months like Feb. 2021 will not have that huge tail. This mode does not add a week before if the month already starts with a partial week
- `'fair'` - The first extra week is added to either start or end of the month, depending on which partial week has fewer offset days. This solves the same problems as center, but aims to distribute the padding more evenly. Since it leads to more months having a leading offset week, which is not necessarily desirable. The difference is visible e.g. in June 2021
:::

<GlobalDemo :sixWeeks="'center'" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" six-weeks="center" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::


## calendar

Customize the calendar view, filter out weeks, add or remove custom classes

:::danger
Do not modify date values
:::

- Type: `(weeks: CalendarWeek[]) => CalendarWeek[];`
- Default: `undefined`

```ts
interface CalendarWeek {
  days: {
    text: number | string; // Value displayed in the calendar day box
    value: Date; // Date that is going to be selected, do not modify
    current: boolean; // If the date belongs to the currenct month
    classData: Record<string, boolean>; // All classes for a specific date
  }[]
}
```

<GlobalDemo :calendar="calendarFn"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :calendar="calendarFn" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();

  const calendarFn = (weeks) => {
    return weeks
        .filter((week) => week.days.some((day) => day.text === 15))
        .map((week) => ({
          ...week,
          days: week.days.map((day) => {
            day.classData['custom-class'] = true;
            return day;
          }),
        }));
  }
</script>
```
:::

## hide-offset-dates

Hide dates from the previous/next month in the calendar

- Type: `boolean`
- Default: `false`

<GlobalDemo :hideOffsetDates="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" hide-offset-dates />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## week-start

Day from which the week starts. 0-6, 0 is Sunday, 6 is Saturday

- Type: `number | string`
- Default: `1`

<GlobalDemo weekStart="0"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :week-start="0" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## year-range

Specify start and end year for years to generate

- Type: `[number, number]`
- Default: `[1900, 2100]`

<GlobalDemo :yearRange="[2020, 2040]"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :year-range="[2020, 2040]" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## reverse-years

Reverse the order of the years in years overlay

- Type: `boolean`
- Default: `false`

<GlobalDemo :reverseYears="true" :yearRange="[2020, 2040]"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :year-range="[2020, 2040]" reverse-years />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## floating

Configure floating menu

- Type: 

```ts
import { type ShallowRef } from 'vue';
import type { Placement, Strategy } from '@floating-ui/vue';

interface FloatingConfig {
  offset?: number;
  arrow?: Readonly<ShallowRef<HTMLDivElement | null>> | boolean;
  strategy?: Strategy;
  placement?: Placement;
}
```

- Default: `{ offset: 10, arrow: true, strategy: undeifned, placement: undefined }`

:::info
- `offset` - Offset from the input field
- `arrow` - Show/hide floating menu arrow. If you use `arrow` slot, you should pass the `template ref` for proper arrow positioning
- `strategy` - Use `absolute` or `fixed` positioning strategy
- `placement` - Position of the floating menu
:::

<GlobalDemo :floating="{ arrow: false, offset: 0 }"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :floating="{ arrow: false, offset: 0 }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## aria-labels

Customize the language of the HTML `aria-labels` for localized accessibility

- Type
```ts 
interface AriaLabelsConfig {
  toggleOverlay?: string;
  menu?: string;
  input?: string;
  openTimePicker?: string;
  closeTimePicker?: string;
  incrementValue?: (type: 'hours' | 'minutes' | 'seconds') => string;
  decrementValue?: (type: 'hours' | 'minutes' | 'seconds') => string;
  openTpOverlay?: (type: 'hours' | 'minutes' | 'seconds') => string;
  amPmButton?: string;
  openYearsOverlay?: string;
  openMonthsOverlay?: string;
  nextMonth?: string;
  prevMonth?: string;
  nextYear: string;
  prevYear: string;
  day?: ({value}: {value: Date}) => string;
  weekDay?: (day: number) => string;
  clearInput?: string;
  calendarIcon?: string;
  timePicker?: string;
  monthPicker: (overlay: boolean) => string;
  yearPicker: (overlay: boolean) => string;
  timeOverlay: (type: 'hours' | 'minutes' | 'seconds') => string;
}
```

- Default: `{}`

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :aria-labels="ariaLabels" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
  const ariaLabels = { menu: 'Some custom menu label' }
</script>
```
:::

## week-numbers

Display week numbers in the calendar. You can switch between local index, ISO numbering and custom function

- Type: `boolean | WeekNumbersConfig`
```ts
interface WeekNumbersConfig {
  type?: 'iso' | 'local' | ((date: Date) => string | number);
  hideOnOffsetDates?: boolean;
  label?: string
}
```
- Default: `false`

<GlobalDemo :weekNumbers="{ type: 'local' }"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :week-numbers="{ type: 'local' }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## day-names

Provide custom labels for day names in the calendar header

:::warning
- The array order will be rendered as is, make sure to sync it with [`week-start`](#week-start) prop
- Make sure that a provided array has a **length of 7**
:::

- Type: `(() => string[]) | string[]`
- Default: `null`;

<GlobalDemo :dayNames="['1', '2', '3', '4', '5', '6', '7']"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :day-names="['1', '2', '3', '4', '5', '6', '7']" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## config

General configuration for customizing specific date picker behaviour

- Type:
```ts
interface Config {
  allowStopPropagation: boolean;
  closeOnScroll: boolean;
  modeHeight: number;
  allowPreventDefault: boolean;
  closeOnClearValue: boolean;
  closeOnAutoApply: boolean;
  noSwipe: boolean;
  keepActionRow: boolean;
  onClickOutside?: (validate: () => boolean, evt: PointerEvent) => void;
  tabOutClosesMenu: boolean;
  arrowLeft?: string;
  keepViewOnOffsetClick?: boolean;
  timeArrowHoldThreshold: number;
  shadowDom?: boolean;
  mobileBreakpoint: number;
  setDateOnMenuClose?: boolean;
  escClose?: boolean;
  spaceConfirm?: boolean;
  monthChangeOnArrows?: boolean;
  monthChangeOnScroll?: boolean | string;
}
```
- Default:
```ts
 {
  allowStopPropagation: true, 
  closeOnScroll: false,
  modeHeight: 255, 
  allowPreventDefault: false,
  closeOnClearValue: true,
  closeOnAutoApply: true,
  noSwipe: false,
  keepActionRow: false,
  onClickOutside: undefined,
  tabOutClosesMenu: true,
  arrowLeft: undefined,
  keepViewOnOffsetClick: false,
  timeArrowHoldThreshold: 0,
  shadowDom: false,
  mobileBreakpoint: 600,
  setDateOnMenuClose: false,
  escClose: true,
  spaceConfirm: true;
  monthChangeOnArrows: true
  monthChangeOnScroll: true;
}
```

:::info
- `allowStopPropagation` - Enable `event.sportPropagation` on click events
- `closeOnScroll` - Close datepicker menu on page scroll
- `modeHeight` - If you use [`month-picker`](/props/modes/#month-picker), [`time-picker`](/props/modes/#time-picker) or [`year-picker`](/props/modes/#year-picker), set custom height of the picker in `px`
- `allowPreventDefault` - Due to the different implementations of how click outside listeners are implemented, you might encounter issues where the menu closes if the picker is used in dialogs when `teleport` prop is enabled. To prevent this issue, you need to set this option to `true`
- `closeOnClearValue` - Prevent closing the menu on value clear from the input field
- `closeOnAutoApply` - If set to `false`, clicking on a date value will automatically select the value but will not close the datepicker menu. Closing will be available on a click-away or clicking on the input again
- `noSwipe` - Disable touch events on the calendar
- `keepActionRow` - When enabled, it will keep the action row even if the [`auto-apply`](#auto-apply) prop is enabled
- `onClickOutside` - Provide custom click outside handler. Exposed validation function that will return `true` or `false` depending on the selected value and pointer event
- `tabOutClosesMenu` - When tabbing out of the picker menu it will close the picker menu (not compatible when using `teleport`)
- `arrowLeft` - Overrides default arrow position from left side of the menu. To keep it always in the center, set it to `50%`. Accepts valid `CSS` value
- `keepViewOnOffsetClick` - When enabled, clicking on the offset date will not change the month that is currently in the view
- `timeArrowHoldThreshold` - When provided with a value `> 0`, clicking and holding the arrow button in the `time-picker` will increment/decrement the value. This value represents the `setTimeout` value, meaning the larger the number, the change will be slower.`0` disables the hold event
- `shadowDom` - Set to `true` if you are using the component with web components
- `mobileBreakpoint` - Mobile breakpoint in pixels
- `setDateOnMenuClose` - When enabled, clicking away from the menu will set the selected date if some date is selected. Behaves similar to `auto-apply`, but it only applies the date on click-away
- `escClose` - `Esc` key closes the menu
- `spaceConfirm` - `space` key selects the date (like you pressed the select button)
- `monthChangeOnArrows` - Change months via arrow keys
- `monthChangeOnScroll` - Scrolling the mouse wheel over the calendar will change the month. Scroll down for next month and vice versa. You can set the value to `inverse` to reverse scrolling up and down.
:::

## start-date

Open the datepicker to some preselected month and year

- Type: `Date | string | number`
- Default: `undefined`

<GlobalDemo :startDate="new Date(2020, 1)"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :start-date="new Date(2020, 1)" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## focus-start-date

Open the datepicker to provided `start-date` ignoring the `v-model` value

- Type: `boolean`
- Default: `false`

<GlobalDemo :startDate="new Date(2020, 1)" :focusStartDate="true" :bindSingle="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :start-date="new Date(2020, 1)" focus-start-date />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## teleport

Use teleport to position the datepicker menu. This is useful if you have hidden overflow on the parent HTML element where the menu is not showing in full.

:::tip
- Setting the prop to `true`, the menu will be placed on the `body` tag
- If you use `string` value, provide `id` of the element
:::

- Type: `string | boolean | HTMLElement`
- Default: `false`

<GlobalDemo :teleport="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :teleport="true" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## centered

Sets the menu position on the page center, useful for smaller screens where there is no space available above or below the input field

- Type: `boolean`
- Default: `false`

<GlobalDemo :centered="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" centered />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## arrow-navigation

Navigate the menu via arrow keys

:::tip
If you wish to integrate arrow navigation within slots, you can set the following attributes:

- `:data-dp-action-element="{level}"` - Set on the element that can receive focus
- `:data-dp-element-active="{level}"` - (optional) Set on the element that can have active state. If present, focus starts from the active element

Available levels: `0 | 1 | 2`

Levels indicate level in the menu hierarchy. On the initial menu level, you are on level `0`. If you open an overlay, you are on level `1`. If overlay has another overlay (e.g. hours/minutes), you are on level `2`.
:::

<GlobalDemo :arrow-navigation="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" arrow-navigation />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## preset-dates

When configured, it will provide a sidebar with a configured range / date that the user can select

- Type: `PresetDate[]`
```ts
import type { MaybeRefOrGetter } from "vue";

interface PresetDate {
  label: string;
  value: MaybeRefOrGetter<Date[] | string[] | Date | string>;
  style?: Record<string, string>;
  slot?: string;
  testId?: string;
}
```
- Default: `[]`

:::tip
- You can provide a custom `slot` name for a specific preset date and use it as standard slot
:::

<GlobalDemo :presetDates="presetDates" :range="true">
    <template #preset-date-range-button="{ label, value, presetDate }">
        <span 
            role="button"
            :tabindex="0"
            @click="presetDate(value)">
            {{ label }}
        </span>
    </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #preset-date-range-button="{ label, value, presetDate }">
      <span 
        role="button"
        :tabindex="0"
        @click="presetDate(value)">
        {{ label }}
      </span>
    </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';
  import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths } from 'date-fns';

  const date = ref();
  const presetDates = ref([
    {
      label: 'Today (Slot)',
      value: [new Date(), new Date()],
      slot: 'preset-date-range-button'
    },
    { label: 'Today', value: [new Date(), new Date()] },
    { label: 'This month', value: [startOfMonth(new Date()), endOfMonth(new Date())] },
    {
      label: 'Last month',
      value: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
    },
    { label: 'This year', value: [startOfYear(new Date()), endOfYear(new Date())] },
  ]);
</script>
```
:::

## hide-month-year-select

Removes the month and year picker

- Type: `boolean`
- Default: `false`

<GlobalDemo :hideMonthYearSelect="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" hide-month-year-select />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::


<script setup>
    import { ref } from 'vue';
    import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths, addDays } from 'date-fns';
    
    const presetDates = ref([
        {
            label: 'Today (Slot)',
            value: [new Date(), new Date()],
            slot: 'preset-date-range-button'
        },
        { label: 'Today', value: [new Date(), new Date()] },
        { label: 'This month', value: [startOfMonth(new Date()), endOfMonth(new Date())] },
        {
            label: 'Last month',
            value: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
        },
        { label: 'This year', value: [startOfYear(new Date()), endOfYear(new Date())] },
    ]);

    const markers = [
        {
            date: addDays(new Date(), 1),
            type: 'dot',
            tooltip: [{ text: 'Dot with tooltip', color: 'green' }],
        },
        {
            date: addDays(new Date(), 2),
            type: 'line',
            tooltip: [
                { text: 'First tooltip', color: 'blue' },
                { text: 'Second tooltip', color: 'yellow' },
            ],
        },
        {
            date: addDays(new Date(), 3),
            type: 'dot',
            color: 'yellow',
        },
    ];
    
    const highlight = { dates: [addDays(new Date(), 1), addDays(new Date(), 2), addDays(new Date(), 3)] };
    
    const calendarFn = (weeks) => {
        return weeks
            .filter((week) => week.days.some((day) => day.text === 15))
            .map((week) => ({
                ...week,
                days: week.days.map((day) => {
                     day.classData['custom-class'] = true;
                    return day;
                    }),
                }));
         };
</script>