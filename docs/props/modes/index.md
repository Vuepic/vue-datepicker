---
lang: en-US
title: Props - Modes
description: Use datepicker in specific mode
---

# Modes

Set the default mode for the datepicker

::: tip Info
Depending on the mode, [`v-model`](/props/general-configuration/#model-value) might be different, so make sure to use the proper configuration
:::

## range

Enable selecting a range of two dates

- Type: `boolean | RangeConfig`
- Default: `false`

:::tip Info
If the `RangeConfig` object is provided, `range` is auto enabled.

For more info about `range` configuration properties, please refer to [`range` configuration section](/props/modes-configuration/#range-configuration)
:::

<GlobalDemo :range="true" placeholder="Select Range"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="dates" range />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';

  const dates = ref();
</script>
```
:::

## multi-calendars

Enabling this prop will show multiple calendars side by side


:::tip Info
If the `MultiCalendarsOptions` object is provided, `multi-calendars` are auto enabled.
For more info take a look at [`multi-calendars` configuration section](/props/modes-configuration/#multi-calendars-configuration).

This mode is not supported with [`year-picker`](#year-picker) and [`time-picker`](#time-picker)

On mobile devices, they will be shown in a column layout.

- Passing `true`, auto-enables 2 calendars
- `string` prop value must be a numeric string, e.g. `'3'`
:::

- Type: `boolean | number | string | MultiCalendarsOptions`
- Default: `false`


<GlobalDemo :range="true" :multiCalendars="true" placeholder="Select Range"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" range multi-calendars />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref, onMounted } from 'vue';

  const dates = ref();
</script>
```
:::

## month-picker

Change datepicker mode to select only month and year

- Type: `boolean`
- Default: `false`

<GlobalDemo :monthPicker="true" placeholder="Select Time"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="month" month-picker />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';

  const month = ref({
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  });
</script>
```
:::

## time-picker

Change datepicker mode to select only time

- Type: `boolean`
- Default: `false`

<GlobalDemo :timePicker="true" placeholder="Select Time"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="time" time-picker />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';

  const time = ref({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes()
  });
</script>
```
:::

## year-picker

Change datepicker mode to select only year

- Type: `boolean`
- Default: `false`

<GlobalDemo :yearPicker="true" placeholder="Select Year"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="year" year-picker />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';

  const year = ref(new Date().getFullYear());
</script>
```
:::

## week-picker

Enables selecting of a specific week range

- Type: `boolean`
- Default: `false`

<GlobalDemo :weekPicker="true" placeholder="Select Week"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" week-picker />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## quarter-picker

Change datepicker mode to select a quarter

:::warning Warning
When working with the `quarter-picker`, you will receive date(s) in the `v-model`. Each date will be 
the first date of the quarter. When using validation for min or max dates, disabled dates and so on, use the first date of the
targeted quarter
:::

- Type: `boolean`
- Default: `false`

<GlobalDemo :quarterPicker="true" placeholder="Select Quarter"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="quarter" quarter-picker />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';
  import { startOfQuarter } from "date-fns";

  const quarter = ref(startOfQuarter(new Date()));
</script>
```
:::

## text-input

When enabled, will try to parse the date from the user input.

:::tip Info
Text input works with all picker modes.

If the `TextInputOptions` object is provided, `text-input` is auto enabled.
For more info take a look at [`text-input` configuration section](/props/modes-configuration/#text-input-configuration).
:::

- Type: `boolean | TextInputOptions`
- Default: `false`

<GlobalDemo placeholder="Start Typing ..." :textInput="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" placeholder="Start Typing ..." text-input />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## inline

Removes the input field and places the calendar in your parent component

:::tip Info
Text input works with all picker modes.

If the `InlineOptions` object is provided, `inline` is auto enabled.
For more info take a look at [`inline` configuration section](/props/modes-configuration/#inline-configuration).
:::

- Type: `boolean | InlineOptions`
- Default: `false`

<GlobalDemo :inline="true" :autoApply="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" inline auto-apply />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';

  const date = ref(new Date());
</script>
```
:::

## multi-dates

Allow selecting multiple dates. When changing time, the latest selected date is affected.
To deselect the date, click on the selected value

- Type: `boolean | MultiDatesConfig`
- Default: `false`

:::tip Info
- When the `MultiDatesConfig` object is provided, prop is auto enabled
- For additional `multi-dates` configuration properties, please refer to [`multi-dates` configuration section](/props/modes-configuration/#multi-dates-configuration)
:::

<GlobalDemo :multi-dates="true" placeholder="Select Multiple Dates"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" multiDates />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## flow

Define the selecting order. Position in the array will specify the execution step. When you overwrite the execution step, the flow is reset

When `partial` is set to `true` and combined with the auto-apply prop, it will set the date as soon as the date is selected without waiting for last flow step to execute

- Type: 
```ts
  interface FlowConfig { 
    steps: ('month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds')[];
    partial?: boolean;
  }

```
- Default: `undefined`

::: warning Warning
`flow` is not supported with [`multi-calendars`](#multi-calendars) mode
:::


<GlobalDemo :flow="{ steps: ['month', 'year', 'calendar'] }" placeholder="Month > Year > Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :flow="{ steps: flow }"  />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';

  const date = ref();
  const flow = ['month', 'year', 'calendar'];
</script>
```
:::

## vertical

Sets the datepicker orientation in the vertical mode. This mode will change the arrow action from left/right to the top/bottom, transitions will also be vertical

- Type: `boolean`
- Default: `false`

<GlobalDemo :vertical="true" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" vertical />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';

  const date = ref(new Date());
</script>
```
:::


## model-auto

Automatically switch between range and single picker modes

- Type: `Boolean`
- Default: `false`

::: warning Note
Since this prop in the background uses a [`range.partialRange`](/props/modes-configuration/#partialrange) make sure that [`range`](#range) prop is provided and keep [`range.partialRange`](/props/modes-configuration/#partialrange) to `true`

This is only compatible with date pickers, specific modes are not supported
:::

<GlobalDemo :modelAuto="true" :range="true" placeholder="Select single date or range"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" model-auto range />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::
