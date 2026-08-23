---
lang: en-US
title: Props - Modes configuration
description: Configure behaviour of the specific datepicker mode
---

# Modes configuration

Props for configuring and extending the datepicker when using a specific mode

## `range` configuration

Providing a configuration object will automatically enable the `range` picker

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
    autoSwitchStartEnd?: boolean;
    requireEndTime?: boolean;
}
```

### `autoRange`

Predefine a range to select

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

This option is enabled by default, meaning two dates are not required for range input. If no second date is selected, the value will be `null`

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

When using disabled dates with `minRange` or `maxRange`, the disabled dates are not counted within the range; setting this option to `true` will validate all dates

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

### `autoSwitchStartEnd`

By default, when selecting the second date in the range, if the second selected date is before the first date, the range will be auto-switched so that the second date becomes the first one.

Disabling this behavior, in the same scenario, will result in the range being reset, where the first date becomes the newly selected date and the second date must be selected again manually. This can be useful if you want to do 
some custom validation logic

- Default: `true`

<GlobalDemo :range="{ autoSwitchStartEnd: false }" overridePlaceholder="Try selecting end date before start date..." :emptyModel="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :range="{ autoSwitchStartEnd: false }"  />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

### `requireEndTime`

Used together with [`model-auto`](/props/modes/#model-auto). By default, the end-time input in the time picker only appears once a full 2-day range has been selected (either by clicking two different days, or by double-clicking the same day) - a single click only shows the start time.

Enabling this option shows the end-time input immediately after a single click, seeding the end date to the same day as the start, so a 1-day event can be given its own start and end time without the double-click workaround.

::: warning
Only has an effect when `model-auto` is also enabled. When combined with `auto-apply`, a single click will immediately produce a complete `[start, end]` pair and close the menu - you may want to leave `auto-apply` off so the user can adjust the end time before confirming.
:::

- Default: `false`

<GlobalDemo :range="{ requireEndTime: true }" :modelAuto="true" placeholder="Select single date or range"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" model-auto :range="{ requireEndTime: true }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## `multi-calendars` configuration

The `multi-calendars` prop can be extended with a configuration object. Instead of passing a `boolean` or `number` value,
you can provide an object. When the object is provided, the prop will be auto enabled.

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

The default calendar view when using [`multi-calendars`](/props/modes/#multi-calendars) is to keep it on the month selected by the user. When this prop is disabled, it will auto-update the first calendar when the range starts and adjust the rest based on the first month

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
  applyOnBlur?: boolean;
  separators?: string[];
}
```
- Default: `{ enterSubmit: true, tabSubmit: true, openMenu: 'open', rangeSeparator: '-' }`

:::info
- `enterSubmit`: When enabled, pressing enter will select a date if the input value is a valid date object
- `tabSubmit`: When enabled, pressing tab will select a date if the input value is a valid date object
- `openMenu`: `open` will keep the menu in the open state when the input field is clicked, `toggle` will toggle the menu, `false` prevents the menu from opening
- `format`: Override the default parsing format. Default is the string value from [`format.input`](/props/formatting/#input). You can also pass multiple parser patterns or a custom parser function and parse the input yourself. When the input is focused, the date will be shown in this format.
- `rangeSeparator`: If you use `range` mode, the default separator is `-`, you can change it here
- `selectOnFocus`: Selects the input text when input is focused
- `escClose`: Closes calendar on `esc` key press
- `maskFormat`: Check [here](#maskformat)
- `applyOnBlur`: Tries to select a typed date when the input loses focus (has no effect if `auto-apply` is enabled)
- `separators`: In case of a range picker, you can define custom separators to be used between the two dates 
:::

:::info
- When custom `format` is provided, focusing on the input will auto format the value to a given format if there is a selected date
- If custom `format` is of type `string[]` or a `function`, it defaults to the `formats.input`
:::

:::warning
When using custom `separators`, make sure to exclude the characters that are used in the `format` string. 
For example, if you use `MM.dd.yyyy HH:mm` as `format`, **DO NOT USE** `'.'` and `':'` as separators
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
- This is still in an early stage of development and will be improved in the future. Currently, the only supported mode is a single date picker
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

Use an input with the inline mode, useful if you enable [`text-input`](/props/modes/#text-input). When the configuration object is provided, the `inline` prop is auto enabled

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
