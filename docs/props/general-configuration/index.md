---
lang: en-US
title: Props - General configuration
description: General behavior props configuration
---

# General configuration

General behavior props configuration

## model-value <Badge type="tip" text="v-model"  />

v-model binding

- Type:
    - Single picker: `Date | string`
        - In case of `multiDates` it will be `Date[] | string[]`
    - Month picker: `{ month: number | string; year: number | string }`
    - Time picker: `{ hours: number | string; minutes: number | string; seconds?: number | string }`
    - Week picker: `[Date, Date] | [string, string]`
    - Range picker: `[Date, Date] | [string | string]`
        - If you use `time-picker`, it will be `{ hours: number | string; minutes: number | string; seconds?: number | string }[]`
        - If you use `month-picker`, it will be `{ month: number | string; year: number | string }[]`
        - If you use `week-picker`, it will be `[[Date, Date], [Date, Date]]`
    - Year picker: `number | string`
    - Quarter picker: Same as single or range pickers
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

<GlobalDemo :markers="true" placeholder="Select Date"></GlobalDemo>

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

<GlobalDemo :highlight="true" placeholder="Select Date"></GlobalDemo>

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
interface ActionRow {
 selectBtnLabel?: string;
 cancelBtnLabel?: string;
 nowBtnLabel?: string;
 showSelect?: boolean;
 showCancel?: boolean;
 showNow?: boolean;
 showPreview?: boolean;
}
```

- Default: `{ showSelect: true, showCancel: true, showNow: false, showPreview: true }`

```ts
{
  selectBtnLabel: 'Select',
  cancelBtnLabel: 'Cancel',
  nowBtnLabel: 'Now',
  showSelect: true,
  showCancel: true,
  showNow: false,
  showPreview: true;
}
```

:::info
- `showNow` - Places another button in the action row, where click on it results in selecting the current date and time
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
  }
}
```
<GlobalDemo :calendar="true"></GlobalDemo>

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

interface FloatingConfig {
    offset?: number;
    arrow?: Readonly<ShallowRef<HTMLDivElement | null>> | boolean;
}
```

- Default: `{ offset: 10, arrow: true }`

:::info
- `offset` - Offset from the input field
- `arrow` - Show/hide floating menu arrow. If you use `arrow` slot, you should pass the `template ref` for proper arrow positioning
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

## week-numbers

## day-names

## config

## start-date

## focus-start-date

## week-num-name

## centered

## arrow-navigation

## prevent-min-max-navigation

## preset-dates

## hide-month-year-select