---
lang: en-US
title: Methods
description: List of exposed datepicker methods
---

# Methods

List of available methods that you can call on the datepicker from the external code

Add a `ref` to the component, and call the method on that ref

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" ref="datepicker" />
</template>

<script lang="ts" setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"}
  import { ref, useTemplateRef } from 'vue';

  const date = ref();
  const dpRef = useTemplateRef<InstanceType<typeof VueDatePicker>>('datepicker');

  const yourCustomMethod = () => {
    dpRef.value?.closeMenu()
  }
</script>
```
:::

## selectDate

When called and there is an active selection, it will select that date

- Type: `() => void`

## closeMenu

Closes the datepicker menu

- Type: `() => void`

## openMenu

Opens the datepicker menu

- Type: `() => void`

## clearValue

Clears the selected value

- Type: `() => void`

## updateInternalModelValue

Modify the internal `model-value` while the picker is in the open state.

- Type: `(value: Date | Date[]) => void`

## setMonthYear

Set calendar month and year programmatically

- Type: `(value: { month?: number | string; year?: number | string; }) => void`


## parseModel

Calls internal `parseExternalModelValue` that will replace or reformat text input value and internal model value


- Type: `(value: ModelValue) => void`

:::info
For `ModelValue` type, see [ModelValue](/props/general-configuration/#model-value)
:::


## switchView

Manually show overlay

Type: `(view: 'month' | 'year' | 'calendar' | 'time', instance?: number) => void;`

:::tip
To close overlay pass `'calendar'` as parameter
:::

:::info
- `instance` - instance number in case of multiple calendars, first calendar is `0`
:::

## toggleMenu

Manually toggle picker menu

- Type: `() => void`

## handleFlow

By default, flow will only trigger on initial picker menu `mount`. This method triggers flow again, even if the picker is 
in the open state

Type: `(flowStep?: number) => void`

:::tip
Function supports `flowStep` parameter to trigger flow from a given step again
:::

## dpMenuRef

Access internal `dpMenuRef`

This is the actual floating menu component

Type: `() => Ref<ComponentPublicInstance | null>`

## dpWrapMenuRef

Access internal `dpWrapMenuRef`

This is the `div` element that wraps the menu

Type: `() => Ref<HTMLElement | null>`

## inputRef

Access internal `inputRef`

This is the input component (not the input field)

Type: `() => Ref<ComponentPublicInstance | null>`