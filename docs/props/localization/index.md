---
lang: en-US
title: Props - Localization
description: Customize the localization of the datepicker
---

# Localization

Localization options

## locale

Set the datepicker language

- Type: `Locale`
- Default: `enUs`

:::info
- This prop uses `Locale` object from `date-fns` library
- For more info about supported locales or adding a custom locale object, please visit [`date-fns documentation`](https://date-fns.org/v2.27.0/docs/I18n)

Based on specified formats in [`formats`](/props/formatting/#formats) prop, the datepicker will automatically format the values to the given language
:::

<GlobalDemo :localized="true"></GlobalDemo>

::: details Code Example
```vue
<template>
  <VueDatePicker v-model="date" :locale="znCh" />
</template>

<script setup>
  import { VueDatePicker } from "@vuepic/vue-datepicker"
  import { zhCn } from "@vuepic/vue-datepicker/locale"
  import { ref } from 'vue';

  const date = ref(new Date());
</script>
```
:::


## Translating other elements

In the following list, you can find all the elements that can be translated via corresponding props:

:::info
- In the action row, you can set button text values via [`action-row`](/props/general-configuration/#action-row) prop
- Aria labels for the datepicker elements can be set via [`aria-labels`](/props/general-configuration/#aria-labels) prop
- To display different labels in formatted values, you can refer to [`formats`](/props/formatting/#formats) prop
- To change calendar day names, refer to [`day-names`](/props/general-configuration/#day-names) prop
- To change the label for week number column in the calendar, refer to [`week-numbers`](/props/general-configuration/#week-numbers) prop
:::