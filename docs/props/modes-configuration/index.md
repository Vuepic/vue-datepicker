---
lang: en-US
title: Props - Modes configuration
description: Configure behaviour of the specific datepicker mode
---

# Modes configuration

Props for configuring and extending the datepicker when using a specific mode

## `range` configuration

Providing configuration object will automatically enable `range` picker

```ts
interface RangeConfig {
    noDisabledRange?: boolean;
    showLastInRange?: boolean;
    minMaxRawRange?: boolean;
    partialRange?: boolean;
    disableTimeRangeValidation?: boolean;
    fixedStart?: boolean;
    fixedEnd?: boolean;
    maxRange?: string | number;
    minRange?: string | number;
    autoRange?: string | number;
}
```

### `autoRange`

Predefine range to select

- Default: `false`

<GlobalDemo :range="{autoRange: 5}" placeholder="Select Range"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :range="{ autoRange: 5 }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

### `partialRange`

This option is enabled by default, meaning, two dates are not required for range input. If no second date is selected, the value will be `null`

- Default: `true`

<GlobalDemo :range="{ partialRange: false }" placeholder="Select Range"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :range="{ partialRange: false }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

### `minRange`

Set minimal range available for selection. This is the number of days between the selected start and end date

- Default: `undefined`

<GlobalDemo :range="{ minRange: 3 }" placeholder="At least 3 days in between"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :range="{ minRange: 3 }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

### `maxRange`

Set maximal range available for selection. This is the number of days between the selected start and end date

- Default: `undefined`

<GlobalDemo :range="{ maxRange: 7 }" placeholder="Can't have more than 7 days in between"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :range="{ maxRange: 7 }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';
  
  const date = ref();
</script>
```
:::

### `fixedStart`

Allows only adjustment of the second date in the defined range

::: warning
**`v-model` must be provided with both dates.**

**Should not be used in combination with `fixedEnd`**
:::

- Default: `false`

<GlobalDemo :range="{ fixedStart: true }" :clearable="false"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :range="{ fixedStart: true }" :clearable="false" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref, onMounted } from 'vue';

  const date = ref();
</script>
```
:::

### `fixedEnd`

Allows only adjustment of the first date in the defined range

::: warning
**`v-model` must be provided with both dates.**

**Should not be used in combination with `fixedStart`**
:::

- Default: `false`

<GlobalDemo :range="{ fixedEnd: true }" :clearable="false"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :range="{ fixedEnd: true }" :clearable="false" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref, onMounted } from 'vue';

  const date = ref();
</script>
```
:::

### `showLastInRange`

By default, when the range is selected, calendar view will remain on the last selection, to return to the first selected date, disable this option

- Default: `true`

<GlobalDemo :range="{ showLastInRange: false }" placeholder="Select Range"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :range="{ showLastInRange: false }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

### `noDisabledRange`

Prevents range selection if the range includes disabled dates

- Default: `false`

<GlobalDemo placeholder="Select Range"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker 
    v-model="date" 
    :range="{ noDisabledRange: true }"
    :disabled-dates="disabledDates"
  />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';
  import { addDays, subDays } from 'date-fns';

  const date = ref(new Date());
  const disabledDates = [subDays(new Date(), 1), new Date(), addDays(new Date(), 1)];
</script>
``` 
:::

### `disableTimeRangeValidation`

Explicitly allow end time in range mode to be before the start time

- Default: `false`

<GlobalDemo :timePicker="true" :range="{ disableTimeRangeValidation: true }" placeholder="Select Time"></GlobalDemo>

::: details Code Example

```vue
<template>
  <VueDatePicker 
    v-model="time" 
    time-picker
    :range="{ disableTimeRangeValidation: true }"
    placeholder="Select Time"
  />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const time = ref();
</script>
```
:::

### `minMaxRawRange`

When using disabled dates with `minRange` or `mixRange`, disabled dates are not calculated within, setting this option to `true` will validate all dates

- Default: `false`

<GlobalDemo :range="{ maxRange: 14, minMaxRawRange: true }" :filters="{ weekDays: [1,2,3,4,5] }" placeholder="Select Range"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :range="{ maxRange: 14, minMaxRawRange: true }" :filters="{ weekDays: [1,2,3,4,5] }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

[//]: # (## preset-dates)

[//]: # ()
[//]: # (When configured, it will provide a sidebar with configured range/date that user can select)

[//]: # ()
[//]: # (::: tip Info)

[//]: # (- If the `timezone` prop is provided, values from preset dates will be converted to the provided timezone. If you don't want that, pass `noTz: true` to all presets)

[//]: # (- `testId` &#40;if provided&#41; will add `data-test` attribute on the preset button)

[//]: # (:::)

[//]: # ()
[//]: # (- Type: `PresetDate[]`)

[//]: # (- Default: `[]`)

[//]: # ()
[//]: # (```ts)

[//]: # (import type { MaybeRefOrGetter } from "vue";)

[//]: # ()
[//]: # (interface PresetDate {)

[//]: # (  label: string;)

[//]: # (  value: MaybeRefOrGetter<Date[] | string[] | Date | string>;)

[//]: # (  style?: Record<string, string>;)

[//]: # (  slot?: string;)

[//]: # (  noTz?: boolean;)

[//]: # (  testId?: string;)

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (<PresetRange></PresetRange>)

[//]: # ()
[//]: # (::: details Code Example)

[//]: # (```vue)

[//]: # (<template>)

[//]: # (    <VueDatePicker v-model="date" range :preset-dates="presetDates">)

[//]: # (      <template #preset-date-range-button="{ label, value, presetDate }">)

[//]: # (        <span )

[//]: # (            role="button")

[//]: # (            :tabindex="0")

[//]: # (            @click="presetDate&#40;value&#41;")

[//]: # (            @keyup.enter.prevent="presetDate&#40;value&#41;")

[//]: # (            @keyup.space.prevent="presetDate&#40;value&#41;">)

[//]: # (          {{ label }})

[//]: # (        </span>)

[//]: # (      </template>)

[//]: # (    </VueDatePicker>)

[//]: # (</template>)

[//]: # ()
[//]: # (<script setup>)

[//]: # (import { ref } from 'vue';)

[//]: # (import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths } from 'date-fns';)

[//]: # ()
[//]: # (const date = ref&#40;&#41;;)

[//]: # ()
[//]: # (const presetDates = ref&#40;[)

[//]: # (  { label: 'Today', value: [new Date&#40;&#41;, new Date&#40;&#41;] },)

[//]: # (  {)

[//]: # (    label: 'Today &#40;Slot&#41;',)

[//]: # (    value: [new Date&#40;&#41;, new Date&#40;&#41;],)

[//]: # (    slot: 'preset-date-range-button')

[//]: # (  },)

[//]: # (  { label: 'This month', value: [startOfMonth&#40;new Date&#40;&#41;&#41;, endOfMonth&#40;new Date&#40;&#41;&#41;] },)

[//]: # (  {)

[//]: # (    label: 'Last month',)

[//]: # (    value: [startOfMonth&#40;subMonths&#40;new Date&#40;&#41;, 1&#41;&#41;, endOfMonth&#40;subMonths&#40;new Date&#40;&#41;, 1&#41;&#41;],)

[//]: # (  },)

[//]: # (  { label: 'This year', value: [startOfYear&#40;new Date&#40;&#41;&#41;, endOfYear&#40;new Date&#40;&#41;&#41;] },)

[//]: # (]&#41;;)

[//]: # (</script>)

[//]: # (```)

[//]: # (:::)

## `multi-calendars` configuration

`multi-calendars` prop can be extended with the configuration object, instead of passing a `boolean` or `number` values,
you can provide an object. When the object is provided, prop will be auto enabled.

- Type:
```ts
interface MultiCalendarsOptions {
  solo?: boolean;
  static?: boolean;
  count?: string | number;
} 
```
- Default: `{ solo: false, static: true, count: 2 }`

### `solo`

When enabled, both calendars will be independent of each other

<GlobalDemo :multi-calendars="{ solo: true }" placeholder="Select Range"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" range :multi-calendars="{ solo: true }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref, onMounted } from 'vue';

  const date = ref();
</script>
```
:::

### `static`

The default calendar view when using [`multi-calendars`](/props/modes/#multi-calendars) is to keep it on the month selected by the user. When this prop is disabled, it will auto-update the first calendar when the range starts and adjust the rest of them based on the first month

<GlobalDemo :multi-calendars="{ static: false }" placeholder="Select Range"></GlobalDemo>

::: details Code Example
```vue
<template>
    <VueDatePicker v-model="date" range :multi-calendars="{ static: false }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref, onMounted } from 'vue';

  const date = ref();
</script>
```
:::

## `text-input` configuration

Configuration for [`text-input`](/props/modes/#text-input) prop. When the configuration object is provided, `text-input` is auto enabled

- Type:
```ts
interface TextInputOptions {
  enterSubmit?: boolean;
  tabSubmit?: boolean;
  openMenu?: 'open' | 'toggle' | boolean;
  rangeSeparator?: string;
  selectOnFocus?: boolean;
  format?: string | string[] | ((value: string) => Date | null);
  escClose?: boolean;
  maskFormat?: string;
}
```
- Default: `{ enterSubmit: true, tabSubmit: true, openMenu: 'open', rangeSeparator: '-' }`

:::info
- `enterSubmit`: When enabled, pressing enter will select a date if the input value is a valid date object
- `tabSubmit`: When enabled, pressing tab will select a date if the input value is a valid date object
- `openMenu`: `open` value will keep the menu in the open state when the input field is clicked, `toggle` will toggle the menu, `false` disables menu from opening
- `format`: Override the default parsing format. Default is the string value from [`format.input`](/props/formatting/#input). You can also pass multiple parser patterns or a custom parser function and parse the input yourself. When the input is focused, the date will be shown in this format.
- `rangeSeparator`: If you use `range` mode, the default separator is `-`, you can change it here
- `selectOnFocus`: Selects the input text when input is focused
- `escClose`: Closes calendar on `esc` key press
- `maskFormat`: Check [here](#maskformat)
:::

<GlobalDemo :text-input="{ format: 'MM.dd.yyyy HH:mm' }" placeholder="Start Typing ..."></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker 
    v-model="date"
    placeholder="Start Typing ..."
    :text-input="{ format: 'MM.dd.yyyy HH:mm' }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

###  `maskFormat` <Badge type="warning" text="Alpha"  />

This property provides a way to mask the input value. When typing, it will automatically insert the mask characters

:::warning
- This is still an early stage of development and will be improved in the future. Currently, the only supported mode is a single date picker
- Tokens are used explicitly for masking the input, and hold no value, to set the parsing format, use `format` property
- Currently, can mask a default format only, using `/` and `,` as separators
:::

:::info
Supported tokens:
- `'YYYY'` - Years
- `'MM'` - Months
- `'DD'` - Days
- `'hh'` - Hours
- `'mm'` - Minutes
- `'ss'` - Seconds
:::

<GlobalDemo :text-input="{ maskFormat: 'MM/DD/YYYY, hh:mm' }" placeholder="Start Typing ..."></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker 
    v-model="date"
    placeholder="Start Typing ..."
    :text-input="{ maskFormat: 'MM.DD.YYYY, hh:mm' }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## inline configuration

Use input with the inline mode, useful if you enable [`text-input`](/props/modes/#text-input). When the configuration object is provided, `inline` prop is auto enabled

- Type: 
```ts
interface InlineOptions {
  input?: boolean;
}
```
- Default: `{ input: false }`

<GlobalDemo :inline="{ input: true }" :auto-apply="true" :text-input="true" placeholder="Select Date"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :inline="{ input: true }" text-input auto-apply />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## `multi-dates` configuration

Configure additional behaviour for [`multi-dates`](/props/modes/#multi-dates) mode

```ts
interface MultiDatesConfig {
  limit?: number | string;
  dragSelect?: boolean;
} 
```

### `limit`

Limit the number of dates to select

- Default: `null`

<GlobalDemo :multi-dates="{ limit: 3 }" placeholder="Select Multiple Dates"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :multi-dates="{ limit: 3 }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

### `dragSelect`

Allows selecting multiple dates by dragging the mouse over the calendar cells

- Default: `true`

<GlobalDemo :multi-dates="{ dragSelect: false }" placeholder="Select Multiple Dates"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :multi-dates="{ dragSelect: false }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::
