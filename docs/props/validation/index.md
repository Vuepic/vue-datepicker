---
lang: en-US
title: Props - Validation
description: Configure date validation
outline: [2, 4]
---

# Validation

Props to define datepicker validation

:::info
- Props with type `Date | string | number` assumes that both `string` or `number` represent a date string or timestamp
- When using time values, always use `24h` values even if the `timeConfig.is24` is set to `false`
:::

## min-date

All dates before the given date will be disabled

- Type: `Date | string | number`
- Default: `undefined`

<GlobalDemo :minDate="new Date()" :emptyModel="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :min-date="new Date()" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## max-date

All dates after the given date will be disabled

- Type: `Date | string | number`
- Default: `undefined`

<GlobalDemo :maxDate="new Date()" :emptyModel="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :max-date="new Date()" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## min-time

Sets the minimal available time to pick

- Type: `{ hours: number; minutes: number; seconds?: number }`
- Default: `undefined`

<GlobalDemo :minTime="{ hours: 11, minutes: 30 }" :emptyModel="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :min-time="{ hours: 11, minutes: 30 }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## max-time

Sets the maximal available time to pick

- Type: `{ hours: number; minutes: number; seconds?: number }`
- Default: `undefined`

<GlobalDemo :maxTime="{ hours: 11, minutes: 30 }" :emptyModel="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :max-time="{ hours: 11, minutes: 30 }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## disabled-times

Disable specific times in the time-picker

- Type:
```ts 
type TimeObj = { hours: number; minutes: number; seconds?: number };

type DisabledTimesProp = 
        | ((time: TimeObj) => boolean) 
        | ((time: TimeObj[]) => boolean)  // range mode
        | ((time: (TimeObj | undefined)[]) => boolean) // range mode
        | TimeObj[] // supported in range mode too
        | [TimeObj[], TimeObj[]] // range mode
```
- Default: `undefined`

:::tip
Dynamic disabling of times in the time-picker overlay only works with the `Array` value provided

Prop can be used either in `time-picker` or regular date picker modes

To disable full hour you can pass an object for example: `{ hours: 15, minutes: "*" }` with the `*` wildcard

To have a better control of the `range` validation, you can provide an array containing 2 arrays.
- The first array will be used to validate start time
- The second array will be used to validate end time
:::

<GlobalDemo :disabledTimes="[{ hours: 15, minutes: '*' }, { hours: 16, minutes: 15 }, { hours: 16, minutes: 20 }, { hours: 17, minutes: 30 }]" :emptyModel="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :max-time="{ hours: 11, minutes: 30 }" :disabled-times="disabledTimes" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();

  const disabledTimes = [
    { hours: 15, minutes: '*' }, // disable full hour
    { hours: 16, minutes: 15 },
    { hours: 16, minutes: 20 },
    { hours: 17, minutes: 30 },
  ];
</script>
```
:::

## disabled-dates

Disable specific dates

- Type: `Date[] | string[] | number[] | (date: Date) => boolean`
- Default: `[]`

:::info
If you use a custom function, make sure to return `true` for a disabled date and `false` for enabled
:::

<GlobalDemo :dates="[new Date()]" :emptyModel="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :max-time="{ hours: 11, minutes: 30 }" :disabled-times="disabledTimes" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();

  const disabledDates = [
    { hours: 15, minutes: '*' }, // disable full hour
    { hours: 16, minutes: 15 },
    { hours: 16, minutes: 20 },
    { hours: 17, minutes: 30 },
  ];
</script>
```
:::

## allowed-dates

Allow only specific dates

- Type: `string[] | Date[] | number[]`
- Default: `[]`

<GlobalDemo :dates="[new Date()]" :emptyModel="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :max-time="{ hours: 11, minutes: 30 }" :disabled-times="disabledTimes" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();

  const disabledDates = [
    { hours: 15, minutes: '*' }, // disable full hour
    { hours: 16, minutes: 15 },
    { hours: 16, minutes: 20 },
    { hours: 17, minutes: 30 },
  ];
</script>
```
:::

## filters

Disable specific values from being selected in the month, year, calendar and time picker overlays

- Type: 
```ts
interface Filters {
  weekDays?: number[] // 0-6, 0 - Sunday, 6 - Saturday
  months?: number[]; // 0 = Jan, 11 - Dec
  years?: number[]; // Array of years to disable
  times?: {
    hours?: number[]; // disable specific hours
    minutes?: number[]; // disable sepcific minutes
    seconds?: number[] // disable specific seconds
  }
}
```
- Default: `undefined`

<GlobalDemo :filters="{ weekDays: [1, 2] }" :emptyModel="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :filters="{ weekDays: [1, 2] }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::
