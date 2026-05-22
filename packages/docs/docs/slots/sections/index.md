---
lang: en-US
title: Slots - Sections
description: Replace the built-in components with custom implementation
---

# Section slots

Replace the built-in components with custom implementation

## month-year

Create and use a custom component implementation in the header for month/year select

:::warning  
- When using this slot, the overlays will not be available; it is up to you to create them if you want
- Depending on the used mode, slot will provide a different set of props
:::

<GlobalDemo>
    <template #month-year="{ month, year, months, years, updateMonthYear, handleMonthYearChange }">
        <div class="w-full flex gapped">
          <select 
              class="w-full"
              :value="month" 
              @change="(ev) => updateMonthYear(+ev.target.value, year)">
            <option v-for="m in months" :key="m.value" :value="m.value">{{ m.text }}</option>
          </select>
          <select 
              class="w-full"
              :value="year"
              @change="(ev) => updateMonthYear(month, +ev.target.value)">
            <option v-for="y in years" :key="y.value" :value="y.value">{{ y.text }}</option>
          </select>
        </div>
    </template>
</GlobalDemo>


**Date picker**

- Exposed props:
```ts
interface DatePickerMonthYearSlotProps {
  month: number;
  year: number;
  months: SelectItem[];
  years: SelectItem[];
  updateMonthYear: (month: number, year: number, fromNav?: boolean) => void;
  handleMonthYearChange: (isNext: boolean, fromNav?: boolean) => void;
  instance: number;
  isDisabled: (next: boolean) => boolean;
}
```

:::info
- `month` - Selected month value
- `year` - Selected year value
- `months` - Generated array of months
- `years` - Generated array of years
- `updateMonthYear` - Exposed function to update month and year
- `handleMonthYearChange` - Exposed function to auto handle next/previous month
- `instance` - In case of multi-calendars, instance is the order of the calendar
- `isDisabled` - Internal computed logic that determens if next or previous month is allowed
:::

**Month picker**

- Exposed props:
```ts
export interface MonthPickerMonthYearSlotProps {
  year: (instance: number) => number;
  months: OverlayGridItem[][];
  years: OverlayGridItem[][];
  instance: number;
  selectMonth: (month: number, instance: number) => void;
  selectYear: (year: number, instance: number) => void;
}
```

:::info
 - `year` - Selected year on a given instance
 - `months` - Generated array of months
 - `years` - Generated array of years
 - `selectMonth` - Exposed function to update month value
 - `selectYear` - Exposed function to update year value
 - `instance` - In case of multi-calendars, instance is the order of the calendar`
:::

**Year picker**

- Exposed props:
```ts
export interface YearPickerMonthYearSlotProps {
  years: OverlayGridItem[][];
  selectYear: (year: number, instance: number) => void;
}
```

:::info
- `years` - Generated array of years
- `selectYear` - Exposed function to update year value
:::

```ts
interface OverlayGridItem {
  value: number;
  text: string;
  active: boolean;
  disabled: boolean;
  className: Record<string, boolean | undefined>;
}

export interface SelectItem<T = number> {
  value: T;
  text: string;
}
```


::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #month-year="{
        month,
        year,
        months, 
        years, 
        updateMonthYear, 
        handleMonthYearChange
    }">
      <div style="display: flex; width: 100%; gap: 5px;">
        <select 
          style="display flex;"
          :value="month" 
          @change="(ev) => updateMonthYear(+ev.target.value, year)">
            <option v-for="m in months" :key="m.value" :value="m.value">{{ m.text }}</option>
        </select>
        <select 
          style="display flex;"
          :value="year"
          @change="(ev) => updateMonthYear(month, +ev.target.value)">
            <option v-for="y in years" :key="y.value" :value="y.value">{{ y.text }}</option>
        </select>
      </div>
    </template>
  </VueDatePicker>
</template>

<script lang="ts" setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## time-picker

Create and use a custom component for the time picker

<script setup>
import { computed } from 'vue';
import { format } from "date-fns";


const hoursArray = computed(() => {
  const arr = [];
  for (let i = 0; i < 24; i++) {
    arr.push({ text: i < 10 ? `0${i}` : i, value: i });
  }
  return arr;
});

const minutesArray = computed(() => {
  const arr = [];
  for (let i = 0; i < 60; i++) {
    arr.push({ text: i < 10 ? `0${i}` : i, value: i });
  }
  return arr;
});


const formatDate = (date) => {
  return date ? format(date, 'dd.MM.yyyy, HH:mm') : '';
}
</script>

<GlobalDemo>
    <template #time-picker="{ time, updateTime }">
       <div class="w-full flex gapped">
          <select 
            class="w-full" 
            :value="time.hours"
            @change="updateTime({...time, hours: +$event.target.value,})"
          >
            <option 
              v-for="h in hoursArray"
              :key="h.value"
              :value="h.value">{{ h.text }}</option>
          </select>
          <select
            class="w-full"
            :value="time.minutes"
            @change="updateTime({...time, minutes: $event.target.value})"
          >
            <option 
              v-for="m in minutesArray"
              :key="m.value"
              :value="m.value">{{ m.text }}</option>
          </select>
        </div>
    </template>
</GlobalDemo>


- Exposed props:
```ts
{
  time: {
    hours: number | number[];
    minutes: number | number[];
    seconds: number | number[];
  };
  updateTime: (time: { 
      hours: number | number[];
      minutes: number | number[];
      seconds?: number | number[];
  }) => void;
}
```

:::info
- `time` - Reactive time object with hours, minutes and seconds
- `updateTime` - Exposed function to update time
:::

:::tip
Keep in mind that when you are using the range picker, both values for the time must be emitted.
For example, if you want to update the second date hours, you will call a function something like this `updateTime(...time, hours: [12, time.hours[1]])`
:::


::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #time-picker="{ time, updateTime }">
      <div style="display: flex; width: 100%; gap: 5px;">
        <select 
          style="width: 100%" 
          :value="time.hours"
          @change="updateTime({ ...time, hours: +$event.target.value })"
        >
          <option 
            v-for="h in hoursArray"
            :key="h.value"
            :value="h.value">{{ h.text }}</option>
        </select>
        <select
          style="width: 100%"
          :value="time.minutes"
          @change="updateTime({...time, minutes: +$event.target.value })"
        >
          <option 
            v-for="m in minutesArray"
            :key="m.value"
            :value="m.value">{{ m.text }}</option>
          </select>
      </div>
     </template>
  </VueDatePicker>
</template>

<script lang="ts" setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref, computed } from 'vue';

  const date = ref(new Date());
  
  const hoursArray = computed(() => {
    const arr = [];
    for (let i = 0; i < 24; i++) {
      arr.push({ text: i < 10 ? `0${i}` : i, value: i });
    }
    return arr;
});

  const minutesArray = computed(() => {
    const arr = [];
    for (let i = 0; i < 60; i++) {
      arr.push({ text: i < 10 ? `0${i}` : i, value: i });
    }
    return arr;
  });
</script>
```
:::

## action-row

Create and use a custom component for the action row

<GlobalDemo>
    <template #action-row="{ modelValue, selectDate }">
        <div class="action-row">
          <p style="margin:0">{{ formatDate(modelValue) }}</p>
          <button class="select-button" @click="selectDate">Select Date</button>
        </div>
    </template>
</GlobalDemo>

- Exposed props:
```ts
{
  modelValue: Date | Date[] | null;
  selectDate: () => void;
  closePicker: () => void;
  disabled: boolean;
}
```

:::info
 - `modelValue` - Current selected value in the datepicker
 - `selectDate` - Function to select the current `internalModelValue` value
 - `closePicker` - Function to close the datepicker menu
 - `disabled` - If the value is invalid based on the provided configuration
:::

<style>
    .action-row {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
</style>   

::: details Code Example
```vue
<template>
    <VueDatePicker v-model="date">
      <template #action-row="{ internalModelValue, selectDate }">
        <div class="action-row">
          <p style="width: 100%">{{ formatDate(internalModelValue) }}</p>
          <button style="width: 100%" @click="selectDate">Select Date</button>
        </div>
      </template>
    </VueDatePicker>
</template>

<script lang="ts" setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';
  import { format } from 'date-fns'

  const date = ref();

  const formatDate = (date: Date) => {
    return format(date, 'dd.MM.yyyy, HH:mm');
  };
</script>

<style lang="scss">
.action-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
```
:::