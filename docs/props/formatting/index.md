---
lang: en-US
title: Props - Formatting
description: Customize the default formatting of the datepicker
outline: [2, 4]
---

# Formatting

Format options for the value displayed across the picker components


## formats

Formats prop allows configuring the format of various picker elements

:::tip 
- To find out supported unicode tokens, please refer to [`Unicode tokens`](https://date-fns.org/docs/format) documentation
- All formating is based on the provided [`locale`](/props/localization/#locale) prop
:::

:::tip
For convenience, the library provides re-export from `date-fns` for all supported locales`
:::

- Type:
```ts
interface FormatsConfig {
  month?: string;
  year?: string;
  weekDay?: string;
  quarter?: string;
  day?: string;
  input?: string | ((date: Date) => string) | ((dates: Date[]) => string);
  preview?: string | ((date: Date) => string) | ((dates: Date[]) => string);
}
```

- Default:
```ts
{
  month: 'LLL', 
  year: 'yyyy', 
  weekDay: 'EEEEEE',
  quarter: 'MMMM',
  day: 'd',
  input: undefined,
  preview: undefined,
}
```

### `month`

Changes the format of the month name in the month picker overlay

- Default: `'LLL'`

<GlobalDemo :monthPicker="true" :formats="{ month: 'LLLL' }"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="month" month-picker :formats="{ month: 'LLLL' }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const month = ref();
</script>
```
:::

### `year`

Changes the format of the year text in the year picker overlay

- Default: `'yyyy'`

<GlobalDemo :yearPicker="true" :formats="{ year: 'yo' }"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="year" year-picker :formats="{ year: 'yo' }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const year = ref();
</script>
```
:::

### `weekDay`

Changes the format week day name in the calendar

- Default: `'EEEEEE'`

<GlobalDemo :formats="{ weekDay: 'EEEEE' }"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :formats="{ weekDay: 'EEEEE' }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

### `quarter`

Changes the format quarter name in the quarter picker

- Default: `'MMMM'`

<GlobalDemo :quarterPicker="true" :formats="{ quarter: 'qqqq' }"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="quarter" quarter-picker :formats="{ quarter: 'qqqq' }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const quarter = ref();
</script>
```
:::

### `day`

Changes the format of the day value in the calendar

- Default: `'d'`

<GlobalDemo :formats="{ day: 'dd' }"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :formats="{ day: 'dd' }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

### `input`

Changes the format of the selected value in the input field

:::info
Default values are composed dynamically based on the picker mode

- Date picker: `'MM/dd/yyyy HH:mm'`
- Month picker: `'MM/yyyy'`
- Year picker: `'yyyy'`
- Quarter picker: `'QQQ/yyyy'`
- Time picker: `'HH:mm'`
- Week picker `'RR-yyyy' | 'ww-yyyy'` *(depends on week numbering)*

If [`timeConfig.is24`](/props/time-picker-configuration/#is24) prop is set to `false`, hours format will be changed to `'hh:mm aa'`

When `range` is enabled, the format is repeated for the single value with `-` in between
:::

:::tip 
If unicode tokes do not meet your requirement, you can pass a function that returns a string.

The function argument is the internal selected date value(s). 
:::

- Default: `undefined`

<GlobalDemo :formats="{ input: 'dd.MM.yyyy - HH:mm' }"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :formats="{ input: 'dd.MM.yyyy - HH:mm' }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

### `preview`

Changes the format of the selected value in the preview date section

:::info
- If no value is provided, it will be the same as the `input`.
- If `input` property value is provided, preview format will use the same one
:::

:::tip
If unicode tokes do not meet your requirement, you can pass a function that returns a string.

The function argument is the internal selected date value(s).
:::

- Default: `undefined`

<GlobalDemo :formats="{ preview: 'dd.MM.yyyy - HH:mm' }"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :formats="{ preview: 'dd.MM.yyyy - HH:mm' }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::
