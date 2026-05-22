---
lang: en-US
title: Props - Look and feel
description: Look and feel customization options
---

# Look and feel

Customization options


## transitions

Control transitions inside the menu. You can define your own or disable them. Datepicker uses a Vue built-in
[transitions](https://v3.vuejs.org/guide/transitions-overview.html) component for transition control. To configure you own,
please check the Vue documentation and provide a transition name in the prop

- Type: `Transitions | boolean`
- Default: `true`

```ts
interface Transitions {
  open?: string; 
  close?: string; 
  next?: string; 
  previous?: string;
  menuAppearTop?: string; 
  menuAppearBottom?: string; 
  vNext?: string; 
  vPrevious?: string; 
}
```

:::info
- `open` and `close` are added on overlays show/hide
- `next` and `previous` added when switching months in the calendar
- `menuAppearTop` is added when the menu is open above the input filed
- `menuAppearBottom` is added when the menu is open bellow the input field
- `vNext` and `vPrevious` are added when switching months in the calendar in the [`vertical`](/props/modes/#vertical) mode
:::

<GlobalDemo :transitions="false"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :transitions="false" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import {ref } from 'vue';

  const date = ref();
</script>
```
:::

## dark

Theme switches between the dark and light mode

- Type: `boolean`
- Default: `false`

<GlobalDemo :dark="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" dark />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::


## ui

Configure custom classes for a specific element

- Type: 

```ts
interface UIConfig {
  navBtnNext?: string | string[];
  navBtnPrev?: string | string[];
  calendar?: string | string[];
  calendarCell?: string | string[];
  menu?: string | string[];
  input?: string | string[];
  dayClass?: (date: Date, internalModelValue: Date | Date[] | null) => string;
}
```

- Default: `{}`

:::info
- `input` - Add a custom class to the input field
- `menu` - Add a custom class to the datepicker menu wrapper
- `calendar` - Add a custom class to the calendar wrapper
- `calendarCell` - Add a custom class to the calendar cell wrapper
- `navBtnNext` - Add a custom class on navigation button 'next'
- `navBtnPrev` - Add a custom class on navigation button 'previous'
- `dayClass` - Add a custom class to the calendar cell depending on the date
:::

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :ui="{ input: 'my-input-class' }" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker";
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::
