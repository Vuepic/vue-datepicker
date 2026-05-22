---
lang: en-US
title: Slots - Overlay
description: Customize the overlays in the datepicker menu
---

# Overlay

Customize overlay and overlay triggers

<script setup>
import { computed } from 'vue';

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

<style>
.select-input {
    width: 100%;
}

.overlay {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  gap: 10px;
}
</style>   

## time-picker-overlay

This slot replaces the full overlay in the timepicker

- Exposed props:
```ts
{
  hours: number | number[];
  minutes: number | number[];
  seconds: number | number[];
  setHours: (hours: number | number[]) => void;
  setMinutes: (minutes: number | number[]) => void;
  setSeconds: (seconds: number | number[]) => void;
}
```

:::info
- `hours` - Selected hours value
- `minutes` - Selected minutes value
- `seconds` - Selected seconds value
- `setHours` - Function to call to set hours, `(hours: number | number[]) => void`
- `setMinutes` - Function to call to set minutes, `(minutes: number | number[]) => void`
- `setSeconds` - Function to call to set seconds, `(seconds: number | number[]) => void`
:::

:::tip
If you are using [`range`](/props/modes/#range) mode, make sure to pass number arrays in functions
:::

<GlobalDemo>
    <template #time-picker-overlay="{ hours, minutes, setHours, setMinutes }">
        <div class="overlay">
          <select class="select-input" :value="hours" @change="setHours(+$event.target.value)">
            <option v-for="h in hoursArray" :key="h.value" :value="h.value">{{ h.text }}</option>
          </select>
          <select class="select-input" :value="minutes" @change="setMinutes(+$event.target.value)">
            <option v-for="m in minutesArray" :key="m.value" :value="m.value">{{ m.text }}</option>
          </select>
        </div>
      </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #time-picker-overlay="{ hours, minutes, setHours, setMinutes }">
      <div class="overlay">
        <select class="select-input" :value="hours" @change="setHours(+$event.target.value)">
          <option v-for="h in hoursArray" :key="h.value" :value="h.value">{{ h.text }}</option>
        </select>
        <select class="select-input" :value="minutes" @change="setMinutes(+$event.target.value)">
          <option v-for="m in minutesArray" :key="m.value" :value="m.value">{{ m.text }}</option>
        </select>
      </div>
    </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();

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

<style>
  .select-input {
    width: 100%;
  }

  .overlay {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    gap: 10px;
  }
</style>
```
:::

## hours

This slot replaces the hours text between the arrows in the time picker

- Exposed props:
```ts
{
  text: string;
  value: number;
} 
```

:::info
- `text` - Text displayed in element
- `value` - Hours value
:::

<GlobalDemo>
    <template #hours="{ text, value }">
        h: {{ value }}
      </template>
</GlobalDemo>


::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #hours="{ text, value }">
      h: {{ value }}
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

## minutes

This slot replaces the minutes text between the arrows in the time picker

- Exposed props:
```ts
{
  text: string;
  value: number;
} 
```

:::info
- `text` - Text displayed in element
- `value` - Minutes value
:::

<GlobalDemo>
    <template #minutes="{ text, value }">
        m: {{ value }}
      </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #minutes="{ text, value }">
      m: {{ value }}
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

## hours-overlay-value

This slot replaces the content in the single button in the hours overlay

- Exposed props:
```ts
{
  text: string;
  value: number;
} 
```

:::info
- `text` - Text displayed in element
- `value` - Hours value
:::

<GlobalDemo>
    <template #hours-overlay-value="{ text, value }">
        h: {{ value }}
      </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #hours-overlay-value="{ text, value }">
      h: {{ value }}
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

## minutes-overlay-value

This slot replaces the content in the single button in the minutes overlay

- Exposed props:
```ts
{
  text: string;
  value: number;
} 
```

:::info
- `text` - Text displayed in element
- `value` - Minutes value
:::

<GlobalDemo>
    <template #minutes-overlay-value="{ text, value }">
        m: {{ value }}
      </template>
</GlobalDemo>


::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #minutes-overlay-value="{ text, value }">
     m:  {{ value }}
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

## month

This slot replaces the content in the month picker button

- Exposed props:
```ts
{
  text: string;
  value: number;
} 
```

:::info
- `text` - Text displayed in element
- `value` - Month value
:::

<GlobalDemo>
    <template #month="{ text, value }">
        M: {{ value }}
      </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #month="{ text, value }">
      M: {{ value }}
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

## year

This slot replaces the content in the year picker button

- Exposed props:
```ts
{
  value: number;
} 
```

:::info
- `value` - Year value
:::

<GlobalDemo>
    <template #year="{ text, value }">
        Y: {{ value }}
    </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #year="{ value }">
      Y: {{ value }}
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

## month-overlay-value

This slot replaces the content in the single button in the month picker overlay

- Exposed props:
```ts
{
  text: string;
  value: number;
} 
```

:::info
- `text` - Text displayed in element
- `value` - Month value
:::


<GlobalDemo>
    <template #month-overlay-value="{ text, value }">
        M: {{ value }}
    </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #month-overlay-value="{ text, value }">
      M: {{ value }}
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

## year-overlay-value

This slot replaces the content in the single button in the year picker overlay

- Exposed props:
```ts
{
  text: string;
  value: number;
} 
```

:::info
- `text` - Text displayed in element
- `value` - Year value
:::


<GlobalDemo>
    <template #year-overlay-value="{ text, value }">
        Y: {{ value }}
    </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #year-overlay-value="{ text, value }">
      Y: {{ value }}
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

## month-overlay

Replace the content in the month picker overlay

- Exposed props:
```ts
{
  month: number;
  year: number;
  items: { text: string; value: number }[];
  updateMonthYear: (month: number, year: number) => void;
  instance: number;
  toggle: () => void;
} 
```

:::info
 - `month` - Selected month value
 - `year` - Selected year value
 - `items` - Generated array of months
 - `updateMonthYear` - Exposed function to update month and year
 - `instance` - In case of multi-calendars, instance is the order of the calendar
 - `toggle` -  Toggle overlay
:::

<GlobalDemo>
  <template 
    #month-overlay="{
        month,
        year,
        items,
        updateMonthYear,
        toggle
    }">
        <div>
          <select 
            class="select-input"
            :value="month" 
            @change="(ev) => {
                      updateMonthYear(+ev.target.value, year),
                      toggle()
                  }">>
                <option v-for="m in items" :key="m.value" :value="m.value">{{ m.text }}</option>
            </select>
        </div>
    </template>
</GlobalDemo>


::: details Code Example
```vue
<template>
    <VueDatePicker v-model="date">
      <template 
          #month-overlay="{
              month,
              year,
              items,
              updateMonthYear,
              toggle
           }">
            <div>
              <select 
                  class="select-input"
                  :value="month" 
                  @change="(ev) => {
                      updateMonthYear(+ev.target.value, year),
                      toggle()
                  }">
                <option v-for="m in items" :key="m.value" :value="m.value">{{ m.text }}</option>
              </select>
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

## year-overlay

Replace the content in the year picker overlay

- Exposed props:
```ts
{
  month: number;
  year: number;
  items: { text: string; value: number }[];
  updateMonthYear: (month: number, year: number) => void;
  instance: number;
  toggle: () => void;
} 
```

:::info
- `month` - Selected month value
- `year` - Selected year value
- `items` - Generated array of months
- `updateMonthYear` - Exposed function to update month and year
- `instance` - In case of multi-calendars, instance is the order of the calendar
- `toggle` -  Toggle overlay
:::

<GlobalDemo>
  <template 
    #year-overlay="{
        month,
        year,
        items,
        updateMonthYear,
        toggle
    }">
        <div>
          <select 
            class="select-input"
            :value="year" 
            @change="(ev) => {
                      updateMonthYear(month, +ev.target.value),
                      toggle()
                  }">
                <option v-for="y in items" :key="y.value" :value="y.value">{{ y.text }}</option>
            </select>
        </div>
    </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template 
      #year-overlay="{
        month,
        year,
        items,
        updateMonthYear,
        toggle
      }">
        <div>
          <select
            class="select-input"
            :value="year"
            @change="(ev) => {
              updateMonthYear(month, +ev.target.value),
              toggle()
            }">
              <option v-for="y in items" :key="y.value" :value="y.value">{{ y.text }}</option>
          </select>
        </div>
    </template>
  </VueDatePicker>
</template>

<script lang="ts" setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();
</script>

```
:::

## month-overlay-header

Add a custom content in the overlay header

- Exposed props:
```ts
{
  toggle: () => void;
}
```

:::info
- `toggle` - Toggle overlay
:::

<GlobalDemo>
    <template #month-overlay-header="{ toggle }">
            <div style="text-align: center;">
                <span @click="toggle" style="cursor: pointer">
                    < Go back
                </span>
            </div>
      </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #month-overlay-header="{ toggle }">
      <div>
        <span @click="toggle">
           '< Go back' 
        </span>
      </div>
    </template>
  </VueDatePicker>
</template>

<script lang="ts" setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## year-overlay-header

Add a custom content in the overlay header

- Exposed props:
```ts
{
  toggle: () => void;
}
```

:::info
- `toggle` - Toggle overlay
:::

<GlobalDemo>
    <template #year-overlay-header="{ toggle }">
            <div style="text-align: center;">
                <span @click="toggle" style="cursor: pointer">
                    < Go back
                </span>
            </div>
      </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #year-overlay-header="{ toggle }">
      <div>
        <span @click="toggle" >
            < Go back
        </span>
      </div>
    </template>
  </VueDatePicker>
</template>

<script lang="ts" setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## hours-overlay-header

Add a custom content in the overlay header

- Exposed props:
```ts
{
  toggle: () => void;
}
```

:::info
- `toggle` - Toggle overlay
:::

<GlobalDemo>
    <template #hours-overlay-header>
            <div style="text-align: center;">
                <span>
                    Hours
                </span>
            </div>
      </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #hours-overlay-header="{ toggle }">
      <div class="overlay-header">
        <span>Hours</span>
      </div>
    </template>
  </VueDatePicker>
</template>

<script lang="ts" setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## minutes-overlay-header

Add a custom content in the overlay header

- Exposed props:
```ts
{
  toggle: () => void;
}
```

:::info
- `toggle` - Toggle overlay
  :::

<GlobalDemo>
    <template #minutes-overlay-header>
            <div style="text-align: center;">
                <span>
                    Minutes
                </span>
            </div>
      </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #minutes-overlay-header="{ toggle }">
      <div>
        <span>Minutes</span>
      </div>
    </template>
  </VueDatePicker>
</template>

<script lang="ts" setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::

## seconds-overlay-header

Add a custom content in the overlay header

- Exposed props:
```ts
{
  toggle: () => void;
}
```

:::info
- `toggle` - Toggle overlay
:::

<GlobalDemo :timeConfig="{ enableSeconds: true }">
    <template #seconds-overlay-header>
            <div style="text-align: center;">
                <span>
                    Seconds
                </span>
            </div>
      </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ enableSeconds: true }">
    <template #seconds-overlay-header="{ toggle }">
      <div>
        <span>Seconds</span>
      </div>
    </template>
  </VueDatePicker>
</template>

<script lang="ts" setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::