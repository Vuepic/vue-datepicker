---
lang: en-US
title: Props - Timezone
description: Datepicker timezone configuration
---

# Timezone

Configure the timezone of the datepicker

Under the hood, the datepicker uses the `TZDate` object, which is timezone-aware `Date` object from the `@date-fns/tz` library

## timezone

Display the dates in a given timezone

- Type: `string`
- Default: `undefined`

Given a different timezone than the local one, a date object in the browser will always display as the value is in the local timezone (aside from changing the timezone browser configuration)

In the given example, printing the `Date` object will display the date value with GMT offset and the timezone

```ts
console.log(new Date());
// Sat Oct 25 2025 19:28:21 GMT+0200 (Central European Summer Time)
```

Now, let's see what happens when we provide a timezone to the datepicker

```vue
<template>
  <VueDatepicker v-model="date" timezone="utc" />
</template>

<script lang="ts" setup>
  import { VueDatepicker } from '@vuepic/vue-datepicker';
  import { ref } from "vue";
  
  const date = ref(new Date('Sat Oct 25 2025 19:28:21 GMT+0200 (Central European Summer Time)'));
</script>
```

> The datepicker will display 25th of October 2025 with the time 17:28 as that is the time in UTC

:::tip
 If the date value is provided in the datepicker as a `Date` object, it will be converted to the given timezone.
:::


Datepicker exports a `TZDate` object, which is timezone-aware `Date` object from the `@date-fns/tz` library. When you select a value, the `v-model` value will be a `TZDate` object

To see it in action, let's set the `timezone` to `utc` and select a date:

```vue
<template>
  <VueDatepicker v-model="date" timezone="utc" />
</template>

<script lang="ts" setup>
  import { VueDatepicker, TZDate } from '@vuepic/vue-datepicker';
  import { ref } from "vue";
  
  const date = ref(new TZDate('Sat Oct 25 2025 19:28:21 GMT+0200 (Central European Summer Time)', 'utc'));
</script>
```

> Contrary to the first example, the picker will match the `Date` with the same `timezone` and the time value will remain the same as it was provided

:::tip
If the date value is provided in the datepicker as a `TZDate` object, it will be retained as is as long as it is in the same timezone as the datepicker.
:::

:::warning
`console.log(date)` and `date.toString()` will not display same value
:::

Let's observe the `v-model` value when it is changed by adding a `watch` method and selecting a different date

```ts
  import { ref, watch } from "vue";

  const date = ref(new TZDate('Sat Oct 25 2025 19:28:21 GMT+0200 (Central European Summer Time)', 'utc'));

  watch(date, (value) => {
      console.log(value); // Mon Oct 27 2025 19:00:00 GMT+0200 (Central European Summer Time)
      console.log(value.toString()); // Mon Oct 27 2025 17:00:00 GMT+0000 (Coordinated Universal Time)
  })
```

> You can see that printing the value gives us two different results, where the value itself is a `Date` object in the local timezone, while the `toString()` method returns the value in the provided `timezone`

**To retrieve the date value in a given timezone, you need to call `date.toString()`**

:::tip
Providing props that rely on the `Date` object such as `min-date`, `max-date`, `disabled-dates` and so on, will be converted to a provided timezone unless they are provided as a `TZDate` object that matches the timezone of the datepicker.
:::

<TimeZoneDemo></TimeZoneDemo>

> Open the console to see the output

::: details Code Example
```vue
<template>
  <div>
    <VueDatePicker v-model="modelBind" placeholder="Select Date" timezone="utc" />
    <div>
      <button class="theme-btn" type="button" @click="getDate">Get date</button>
      <button class="theme-btn" type="button" @click="getDateInTimeZone">Get date in the timezone</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';;
  import { ref, useSlots } from 'vue';
  
  const modelBind = ref();

  const getDate = () => {
    console.log(modelBind.value ? modelBind.value : 'No date selected');
  };

  const getDateInTimeZone = () => {
    console.log(modelBind.value ? modelBind.value.toString() : 'No date selected');
  };
</script>
```
:::