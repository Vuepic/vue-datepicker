---
lang: en-US
title: Props - Time picker configuration
description: Configure time-picker behavior
outline: [2, 4]
---

# Time picker configuration

Configuration properties for the time picker, applicable whether it is used standalone or with the datepicker.


## time-config

Time config provides a configuration object to fine tune the time picker

- Type:
```ts
interface TimeConfig {
  enableTimePicker?: boolean;
  ignoreTimeValidation?: boolean;
  enableSeconds?: boolean;
  enableMinutes?: boolean;
  is24?: boolean;
  noHoursOverlay?: boolean;
  noMinutesOverlay?: boolean;
  noSecondsOverlay?: boolean;
  hoursGridIncrement?: number | string;
  minutesGridIncrement?: number | string;
  secondsGridIncrement?: number | string;
  timePickerInline?: boolean;
  startTime?: { hours: number; minutes: number; seconds?: number };
}
```

- Default: 
```ts
{
  enableTimePicker: true,
  ignoreTimeValidation: false, 
  enableSeconds: false,
  enableMinutes: true,
  is24: true,
  noHoursOverlay: false,
  noMinutesOverlay: false,
  noSecondsOverlay: false,
  hoursGridIncrement: 1,
  minutesGridIncrement: 5,
  secondsGridIncrement: 5,
  hoursIncrement: 1,
  minutesIncrement: 1,
  secondsIncrement: 1,
  timePickerInline: false,
  startTime: undefined;
}
```


### `enableTimePicker`

Enable or disable time picker

:::tip
Does not have effect when using `time-picker` mode
:::

- Default: `true`

<GlobalDemo :time-config="{ enableTimePicker: false }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ enableTimePicker: false }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::

### `ignoreTimeValidation`

By default, when using [`min-date`](/props/validation/#min-date) or [`max-date`](/props/validation/#max-date) the time set on those dates will be included in validation. If you want to just check dates, pass this option to disable time check

- Default: `false`

<GlobalDemo :time-config="{ ignoreTimeValidation: true }" :minDate="new Date()" placeholder="Select Range"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker 
    v-model="dates" 
    :time-config="{ ignoreTimeValidation: true }"
    :min-date="new Date()"
  />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const dates = ref();
</script>
``` 
:::

### `enableSeconds`

Enable seconds in the time picker

- Default: `false`

<GlobalDemo :time-config="{ enableSeconds: true }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ enableSeconds: true }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::

### `enableMinutes`

Enable minutes in the time picker

- Default: `true`

<GlobalDemo :time-config="{ enableMinutes: false }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ enableMinutes: false }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::

### `is24`

Whether to use 24H or 12H mode

- Default: `true`

<GlobalDemo :time-config="{ is24: false }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ is24: false }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::


### `noHoursOverlay`

Disable overlay for the hours, only arrow selection will be available

- Default: `false`

<GlobalDemo :time-config="{ noHoursOverlay: true }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ noHoursOverlay: true }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::


### `noMinutesOverlay`

Disable overlay for the minutes, only arrow selection will be available

- Default: `false`

<GlobalDemo :time-config="{ noMinutesOverlay: true }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ noMinutesOverlay: true }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::

### `noSecondsOverlay`

Disable overlay for the minutes, only arrow selection will be available

- Default: `false`

<GlobalDemo :time-config="{ noSecondsOverlay: true, enableSeconds: true }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker 
    v-model="date"
    :time-config="{ noSecondsOverlay: true, enableSeconds: true }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::

### `hoursGridIncrement`

The value which is used to increment hours when showing hours overlay

It will always start from 0 until it reaches 24 or 12 depending on the [`timeConfig.is24`](#is24) prop

- Default: `1`

<GlobalDemo :time-config="{ hoursGridIncrement: 2 }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ hoursGridIncrement: 2 }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::

### `minutesGridIncrement`

The value which is used to increment minutes when showing minutes overlay

It will always start from 0 to 60 minutes

- Default: `5`

<GlobalDemo :time-config="{ minutesGridIncrement: 2 }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ minutesGridIncrement: 2 }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::


### `secondsGridIncrement`

The value which is used to increment seconds when showing seconds overlay

It will always start from 0 to 60 seconds

- Default: `5`

<GlobalDemo :time-config="{ secondsGridIncrement: 2, enableSeconds: true }"  placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker 
    v-model="date"
    :time-config="{ secondsGridIncrement: 2, enableSeconds: true }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::

### `hoursIncrement`

The value which is used to increment hours via arrows in the time picker

- Default: `1`

<GlobalDemo :time-config="{ hoursIncrement: 2 }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ hoursIncrement: 2 }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::

### `minutesIncrement`

The value which is used to increment minutes via arrows in the time picker

- Default: `1`

<GlobalDemo :time-config="{ minutesIncrement: 5 }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ minutesIncrement: 5 }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::

### `secondsIncrement`

The value which is used to increment seconds via arrows in the time picker

- Default: `1`

<GlobalDemo :time-config="{ secondsIncrement: 5, enableSeconds: true }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker 
    v-model="date"
    :time-config="{ secondsIncrement: 5, enableSeconds: true }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::

### `timePickerInline`

Configures the time picker to display under the calendar rather than opening it as an overlay.

- Default: `false`

<GlobalDemo :time-config="{ timePickerInline: true }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ timePickerInline: true }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::

### `startTime`

Set a default starting time. If not provided, default start time will be the current time

- Type:
    - Single picker: `{ hours?: number; minutes?: number; seconds?: number }`
    - Range picker: `{ hours?: number; minutes?: number; seconds?: number }[]`

- Default: `undefined`

<GlobalDemo :time-config="{ startTime: { hours: 0, minutes: 0 } }" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ startTime: { hours: 0, minutes: 0 } }"/>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
``` 
:::