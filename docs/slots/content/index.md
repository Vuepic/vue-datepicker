---
lang: en-US
title: Slots - Content
description: Datepicker content slots to customize parts in the menu
---

# Content

Customize parts in the datepicker menu

## calendar-header

Replace the content in the calendar header cells

- Exposed props:
```ts
{
  day: string;
  index: number;
}
```

:::info
- `day` is the displayed value in the header cell
- `index` is the column index it is rendered by
:::

<GlobalDemo>
    <template #calendar-header="{ index, day }">
        <div :style="index === 5 || index === 6 ? 'color: red' : ''">
          {{ day }}
        </div>
    </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #calendar-header="{ index, day }">
      <div :style="index === 5 || index === 6 ? 'color: red' : ''">
        {{ day }}
      </div>
    </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::


## day

This slot allows you to place custom content in the calendar

- Exposed props:
```ts
{
  day: number;
  date: Date
}
```

:::info
- `day`: This is the day number displayed in the calendar
- `date`: This is the date value from that day
:::


<GlobalDemo>
    <template #day="{ day, date }">
        <template v-if="day === new Date().getDate() + 1">
            <img src="/logo.png"/>
        </template>
        <template v-else>
            {{ day }}
        </template>
        </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #day="{ day, date }">
      <template v-if="day === tomorrow">
        <img src="/logo.png"/>
      </template>
      <template v-else>
        {{ day }}
      </template>
    </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';}
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## action-buttons

This slot replaces the buttons section in the action row

- Exposed props:
```ts
{
  value: Date | Date[] | null
}
```

:::info
- `value` - Current selection in the picker
:::

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" ref="datepicker">
    <template #action-buttons>
      <p @click="selectDate">Select</p>
    </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref, useTemplateRef } from 'vue';

  const date = ref();
  const dp = useTemplateRef('datepicker')

  const selectDate = () => {
    dp.value?.selectDate();
  }
</script>
```
:::

## action-preview

This slot replaces the date preview section in the action row

- Exposed props:
```ts
{
  value: Date | Date[] | null;
  ormatValue: string;
}
```

:::info
- `value` - Current selection in the picker
- `formatValue` - Formatted value of the selected date(s)
:::

<GlobalDemo>
    <template #action-preview="{ value }">
        {{ value ? `Selected ${value.getDate()}` : '' }}
    </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
    <VueDatePicker v-model="date" ref="dp">
      <template #action-preview="{ value }">
        {{ getDate(value) }}
      </template>
    </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## action-extra

This slot provides extra space in the action row

- Exposed props:
```ts
{
  selectCurrentDate: () => void
}
```

:::info
- `selectCurrentDate` - Function to call to select the date (same one as now button calls)
:::

<GlobalDemo>
    <template #action-extra="{ selectCurrentDate }">
        <div style="display: flex; justify-content: center; align-items: center">
            <span @click="selectCurrentDate" title="Select current date">
                <img style="height: 20px; width: auto; cursor: pointer" src="/logo.png" />
            </span>
        </div>
      </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
   <template #action-extra="{ selectCurrentDate }">
     <span @click="selectCurrentDate()" title="Select current date">
       <img src="/logo.png" />
     </span>
   </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## am-pm-button

This slot replaces the am-pm button in the time picker when the [`timeConfig.is24`](/props/time-picker-configuration/#is24) prop is set to `false`

- Exposed props:
```ts
{
  toggle: () => void
  value: 'AM' | 'PM'
}
```

:::info
- `toggle` - Function to call to switch AM/PM
- `value` - Currently active mode, AM or PM
:::

<GlobalDemo :timeConfig="{ is24: false }">
    <template #am-pm-button="{ toggle, value }">
        <button @click="toggle">{{ value }}</button>
    </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ is24: false }">
    <template #am-pm-button="{ toggle, value }">
      <button @click="toggle">{{ value }}</button>
    </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## left-sidebar

This slot will allow you to add custom content on the left side of the menu.

:::info
If you use [`preset-dates`](/props/general-configuration/#preset-dates) prop, the sidebar will be added before the list placement

On exposed props, `instance` is the calendar index, single calendar will have instance 0, next 1 and so on
:::

:::warning
Depending on the mode used, different set of props will be exposed
:::

**Date pickers**

- Exposed props:
```ts
{
  modelValue: Date | Date[] | null;
  month: ComputedRef<(instance: number) => number>;
  year: ComputedRef<(instance: number) => number>;
  time: { hours: number | number[]; minutes: number | number[]; seconds: number | number[] };
  updateTime: (value: number | number[], isHours?: boolean, isSeconds?: boolean) => void;
  updateMonthYear: (instance: number, val: { month: number; year: number; fromNav?: boolean }) => void;
  selectDate: (day: { value: Date }, isNext?: boolean) => void;
  presetDate: (value: Date[] | string[] | Date | string) => void;
}
```

:::info
- `modelValue` - Internal model value
- `month`- Access to a selected month for a given instance
- `year` - Access to a selected year for a given instance
- `time` - Currently set time values
- `updateMonthYear` - Method to update month and year to a specific value
- `selectDate` - Method to select a date in the calendar
    - day parameter is an object with the following data
        - `value` - Date object
        - `current` - boolean, depending if the given date is in the current month or not based on calendar view
- `presetDate` - Set date or date range
:::

**Month picker**

- Exposed props:
```ts
{
  modelValue: Date | Date[] | null;
  year: ComputedRef<(instance: number) => number>;
  selectMonth: (month: number, instance: number) => void;
  selectYear: (year: number, instance: number) => void;
  handleYear: (instance: number, increment?: boolean) => void;
  getModelMonthYear: () => { month: number | null; year: number | null }[];
}
```

:::info
- `modelValue` - Internal model value
- `year` - Access to a selected year for a given instance
- `getModelMonthYear` - Function to call to extract month and year from `internalModelValue`
- `selectYear` - Function that sets year
- `handleYear` - Handles auto year increment/decrement
:::

**Year picker**

- Exposed props:
```ts
{
  modelValue: Date | Date[] | null;
  selectYear: (year: number) => void;
}
```

:::info
- `modelValue` - Internal model value
- `selectYear` - Function that sets year
:::

**Quarter picker**

- Exposed props:
```ts
{
  modelValue:  Date | Date[] | null;
  year: ComputedRef<(instance: number) => number>;
  handleYear?: (instance: number, increment?: boolean) => void;
  selectQuarter?: (date: Date, instance: number, disabled: boolean) => void;
  handleYearSelect?: (year: number, instance: number) => void;
}
```

:::info
- `modelValue` - Internal model value
- `year` - Access to a selected year for a given instance
- `selectQuarter` - Function that selects quarter
- `handleYearSelect` - Function that selects year
- `handleYear` - Handles auto year increment/decrement
:::

**Time picker**

- Exposed props:
```ts
{
  modelValue: Date | Date[] | null;
  time: InternalTime;
  updateTime: (value: number | number[], isHours?: boolean, isSeconds?: boolean) => void;
}
```

:::info
- `modelValue` - Internal model value
- `time` - Reactive object containing time, may be different that the v-model set time
- `updateTime` - Function that updates time
:::

<GlobalDemo>
    <template #left-sidebar>
        <div>Custom content</div>
    </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #left-sidebar="props">
      <div>Custom content</div>
      </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';}
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## right-sidebar

This slot will allow you to add custom content on the right side of the menu.

:::info
- Same prop specification as `left-sidebar` slot
:::

<GlobalDemo>
    <template #right-sidebar>
        <div>Custom content</div>
    </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #right-sidebar="props">
      <div>Custom content</div>
      </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';}
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## marker-tooltip

This slot replaces the content inside the `marker` tooltip

- Exposed props:
```ts
{
  tooltip: { text: string; color?: string };
  day: Date;
}
```

:::info
- `tooltip` - The tooltip data provided in the array
- `day` - The date marker is displayed on
:::

<GlobalDemo :markers="true">
    <template #marker-tooltip="{ tooltip, day }">
        <div v-if="tooltip.color === 'green'">Hello from slot</div>
        <span v-else>{{ tooltip.text }}</span>
    </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :markers="markers">
    <template #marker-tooltip="{ tooltip, day }">
      <div v-if="tooltip.color === 'green'">Hello from slot</div>
      <span v-else>{{ tooltip.text }}</span>
    </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';}
  import { ref } from 'vue';
  import addDays from 'date-fns/addDays';

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
  ]
</script>
```
:::

## marker

This slot replaces the default `marker` shape (line or dot)

:::warning
When slot is provided, you will have to do a custom styling to position it in the right place
:::

- Exposed props:
```ts
{
  marker: Marker;
  day: string;
  date: Date;
}
```

:::info
- `marker` - Provided marker configuration, see [`markers`](/props/general-configuration/#markers) for `Marker` tyoe
- `day` - The text value displayed in the calendar cell
- `date` - The date marker is displayed on
:::

<style>
.custom-marker {
  position: absolute;
  top: 0;
  right: 0;
  height: 8px;
  width: 8px;
  border-radius: 100%;
  background-color: green;
}

  .my-header {
    padding: 5px;
    border: 1px solid red;
    width: 100%;
    text-align: center;
  }
</style>


<GlobalDemo :markers="true">
    <template #marker="{ marker, day, date }">
        <span class="custom-marker"></span>
      </template>
</GlobalDemo>

::: details Code Example

```vue
<template>
  <VueDatePicker v-model="date" :markers="markers">
    <template #marker="{ marker, day, date }">
      <span class="custom-marker"></span>
    </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';}
  import { ref } from 'vue';
  import addDays from 'date-fns/addDays';

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
  ]
</script>

<style scoped>
  .custom-marker {
    position: absolute;
    top: 0;
    right: 0;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    background-color: green;
  }
</style>
```
:::

## quarter

This slot replaces the default quarter item

- Exposed props:
```ts
{
  value: Date;
  text: string;
}
```

:::info 
- `value` - First date for a given quarter
- `text` - The text value displayed in the quarter button
:::

<script setup>
  import {  format } from "date-fns";

  
  const formatQuarter = (quarter) => {
      return format(quarter, 'QQQ')
  }
</script>

<GlobalDemo :quarterPicker="true">
    <template #quarter="{ value }">
        <span>{{ formatQuarter(value) }}</span>
    </template>
</GlobalDemo>

::: details Code Example

```vue
<template>
  <VueDatePicker v-model="quarter">
    <template #quarter="{ value }">
      <span>{{ formatQuarter(value) }}</span>
    </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();
  
  const formatQuarter = (quarter) => {
    return format(quarter, 'QQQ')
  }
</script>
```
:::

## top-extra

This slot provides extra space above the month and year selection area

- Exposed props:
```ts
{
    value: Date | Date[] | null
}
```

:::info
`value` - Currently selected date(s) in the picker
:::

<GlobalDemo>
    <template #top-extra="{ value }">
        <span v-if="value">Selected date: {{ value.getDate() }}</span>
        <span v-else>No date selected</span>
      </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #top-extra="{ value }">
      <span v-if="value">Selected date: {{ value.getDate() }}</span>
      <span v-else>No date selected</span>
    </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## menu-header

Similar to the `top-extra`, however, not wrapped per calendar instance and spans across full menu width

<GlobalDemo>
    <template #menu-header>
        <div class="my-header">My custom header</div>
    </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #menu-header>
      <div class="my-header">My custom header</div>
    </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();
</script>

<style scoped>
  .my-header {
    padding: 5px;
    border: 1px solid red;
    width: 100%; 
    text-align: center;
  }
</style>
```
:::