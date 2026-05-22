---
lang: en-US
title: Slots - Icons
description: Customize the icons in the datepicker
---

# Icons

Change datepicker icons

## input-icon

This slot replaces the calendar icon in the input element with your custom element

<GlobalDemo>
     <template #input-icon>
        <img style="height: 20px; width: auto; margin-left: 5px" src="/logo.png"/>
     </template>
</GlobalDemo>


::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #input-icon>
      <img src="/logo.png"/>
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

## clear-icon

This slot replaces the clear icon in the input element with your custom element

- Exposed props:
```ts
{
  clear: () => void;
}
```

:::info
- `clear` - Remove selected value
:::

<GlobalDemo>
     <template #clear-icon="{ clear }">
        <img style="height: 20px; width: auto; margin-right: 5px" src="/logo.png" @click="clear" />
     </template>
</GlobalDemo>


::: details Code Example
```vue
<template>
    <VueDatePicker v-model="date">
        <template #clear-icon="{ clear }">
            <img src="/logo.png" @click="clear" />
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

## clock-icon

This slot replaces the default clock icon used to select the time

<GlobalDemo>
     <template #clock-icon>
        <img style="height: 20px; width: auto" src="/logo.png" />
     </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #clock-icon>
      <img src="/logo.png"/>
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

## arrow-left

This slot replaces the arrow left icon on the month/year select row

<GlobalDemo>
     <template #arrow-left>
        <img style="height: 20px; width: auto" src="/logo.png" />
     </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #arrow-left>
      <img src="/logo.png"/>
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


## arrow-right

This slot replaces the arrow right icon on the month/year select row

<GlobalDemo>
     <template #arrow-right>
        <img style="height: 20px; width: auto" src="/logo.png" />
     </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" vertical>
    <template #arrow-right>
      <img src="/logo.png"/>
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

## arrow-up

This slot replaces the arrow up icon in the time picker or header if [`vertical`](/props/modes/#vertical) mode is enabled

<GlobalDemo :vertical="true">
     <template #arrow-up>
        <img style="height: 20px; width: auto" src="/logo.png" />
     </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" vertical>
    <template #arrow-up>
      <img src="/logo.png"/>
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

## arrow-down

This slot replaces the arrow down icon in the time picker or header if [`vertical`](/props/modes/#vertical) mode is enabled

<GlobalDemo :vertical="true">
     <template #arrow-down>
        <img style="height: 20px; width: auto" src="/logo.png" />
     </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #arrow-down>
      <img src="/logo.png"/>
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

## calendar-icon

This slot replaces the back to calendar icon

<GlobalDemo>
     <template #calendar-icon>
        <img style="height: 20px; width: auto" src="/logo.png" />
     </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #calendar-icon>
      <img src="/logo.png"/>
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

<style>
  .arrow-icon {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

## tp-inline-arrow-up

This slot replaces the arrow-up icon in the [`timeConfig.timePickerInline`](/props/time-picker-configuration/#timepickerinline)

<GlobalDemo :timeConfig="{ timePickerInline: true }">
     <template #tp-inline-arrow-up>
            <span class="arrow-icon">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
            </svg>
            </span>
        </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ timePickerInline: true }">
    <template #tp-inline-arrow-up>
      <span class="arrow-icon">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </span>
    </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker'}
  import { ref } from 'vue';

  const date = ref();
</script>

<style>
  .arrow-icon {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
```
:::

## tp-inline-arrow-down

This slot replaces the arrow-down icon in the [`timeConfig.timePickerInline`](/props/time-picker-configuration/#timepickerinline)

<GlobalDemo :timeConfig="{ timePickerInline: true }">
     <template #tp-inline-arrow-down>
            <span class="arrow-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </span>
        </template>
</GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :time-config="{ timePickerInline: true }">
    <template #tp-inline-arrow-down>
      <span class="arrow-icon">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </span>
    </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import { ref } from 'vue';

  const date = ref();
</script>

<style>
  .arrow-icon {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
```
:::