---
lang: en-US
title: Slots - Trigger and input
description: Change the datepicker trigger or input
---

# Trigger and input

Use custom input or trigger element

## trigger

This slot replaces the input element with your custom element

<style>
    .inline-block {
        display: inline-block;
     }
    .clickable-text {
        color: #1976d2;
        cursor: pointer;
    }
</style>

<div class="inline-block">
<GlobalDemo>
    <template #trigger>
        <p style="margin: 0;" class="clickable-text">This is some custom clickable text that will open the datepicker</p>
     </template>
</GlobalDemo>
</div>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
    <template #trigger>
      <p class="clickable-text">This is some custom clickable text that will open the datepicker</p>
    </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';

  const date = ref()
</script>

<style>
  .clickable-text {
    color: #1976d2;
    cursor: pointer;
  }
</style>
```
:::

## dp-input

This slot replaces the input field. The difference from the `trigger slot` is that you will have access to the input field properties


:::tip 
**Connecting text input with date picker**

If you want to connect `text-input` with a custom input element, a [`text-input`](/props/modes/#text-input) prop must be provided.

If using auto-apply, you should connect at least the `on-focus` and `on-blur` methods. Connecting all methods is recommended.

When calling `onInput` function, make sure to pass the `input event` as an argument
:::


- Exposed props:
```ts
{
  value: string;
  isMenuOpen: boolean;
  onInput: (ev: string | Event) => void;
  onEnter: (ev: KeyboardEvent) => void;
  onTab: (ev: KeyboardEvent) => void;
  onClear: (ev?: Event | undefined) => void;
  onBlur: () => void;
  onFocus: () => void;
  onKeypress: (ev: KeyboardEvent) => void;
  onPaste: () => void;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
}
```

:::info
- `value` - Value displayed in the input field
- `isMenuOpen` - Get info if the menu is in the open state
- `onInput` - Function called on the `@input` event
- `onEnter` - Function called on the `@keydown.enter` event
- `onTab` - Function called on the `@keydown.tab` event
- `onClear` - Function to call if you want to clear date
- `onFocus` - Function to call on input focus
- `onBlur` - Function to call on input blur
- `onKeypress` - Function to call on key press
- `onPaste` - Function to call on paste
- `openMenu` - Open menu
- `closeMenu` - Close menu
- `toggleMenu` - Toggle menu
:::


<div class="inline-block">
<GlobalDemo>
    <template #dp-input="{ value }">
        <input style="border: 1px solid gray;" type="text" readonly :value="value" />
    </template>
</GlobalDemo>
</div>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date">
     <template #dp-input="{ value }">
       <input type="text" :value="value" />
     </template>
  </VueDatePicker>
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { ref } from 'vue';

  const date = ref();
</script>
```
:::
