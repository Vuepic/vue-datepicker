---
lang: en-US
title: Migration from v11
description: Migration guide for migrating from v11 to v12 and notifying of breaking changes
outline: [2, 4]
---

# Migrating from v11

## Breaking changes

- **Library now requires** `vue >= v3.5`
- **`Compat` mode is removed**
- **`umd` and `iife` bundles are removed**
  - `iife`: Browser bundle, importing the component in `html` `script` tag
  - `umd`: Mostly used in older webpack bundles
- `import` statement is changed to named instead of default
- Removed `onScroll` and `dpWrapMenuRef` exposed methods
- In `action-row` slot, param `internalModelValue` is renamed to `modelValue`
- In `time-picker` slot, exposed function `updateTime` parameters are changed
- `noTz` property from `preset-dates` config array is removed
- Removed props:
  - `position`
  - `auto-position`
  - `alt-position`
  - `utc`
  - `format-locale`
  - `month-name-format`
  - `uid`
  - `week-num-name`
- Renamed props:
  - `disable-month-year-select`
  - `teleport-center`
- Moved props (prop behavior is retained, just moved under appropriate prop group):
  - `select-text` (and renamed)
  - `cancel-text` (and renamed)
  - `now-button-label` (and renamed)
  - `format` (and renamed)
  - `preview-format`(and renamed)
  - `name`
  - `required`
  - `autocomplete`
  - `state`
  - `clearable`
  - `always-clearable`
  - `hide-input-icon`
  - `disabled-week-days` (and renamed)
  - `enable-time-picker`
  - `ignore-time-validation`
  - `enable-seconds`
  - `enable-minutes`
  - `is-24`
  - `no-hours-overlay`
  - `no-minutes-overlay`
  - `no-seconds-overlay`
  - `hours-grid-increment`
  - `minutes-grid-increment`
  - `seconds-grid-increment`
  - `time-picker-inline`
  - `day-class`
  - `esc-close`
  - `space-confirm`
  - `month-change-on-arrows`
  - `month-change-on-scroll`
  - `partial-flow` (renamed)
  - `start-time`
- Removed emits:
  - `recalculate-position`
  - `update:model-timezone-value`
  - `time-picker-open`
  - `time-picker-close`
- Altered props:
  - `timezone`
  - `day-names`
  - `locale`
  - `flow`
  - `week-numbers`
- Timezone behavior is changed, please check the [`timezone`](/props/timezone/) prop info
- All locale-based formatting is now done via Unicode tokens
- Type definition is now auto-generated, there might be some misalignment between types from previous version and the new one

## Importing the component

Importing the component is now done via named import:

```ts
import VueDatePicker from '@vuepic/vue-datepicker'; // [!code --]
import { VueDatePicker } from '@vuepic/vue-datepicker'; // [!code ++]
```

## Props changes

### `position`, `auto-position`, `alt-position`

Since the position logic is now done via `@floating-ui/vue` library and custom positioning logic is removed,
there is no need to keep these props.

`position` and `auto-position` props can be replaced with appropriate options in the [`floating`](/props/general-configuration/#floating) prop

### `uid`

The `uid` prop is now removed. Previously, it was using the same value and appending `'dp-menu'` or `'dp-input'` to it.
Now, you can pass two separate values via `menu-id` prop for the menu, or `inputAttrs.id` for the input id.

### `utc`

This prop is kind of a leftover since the initial versions before timezones. You should use the timezone prop instead.

```vue
<template>
  <!--[!code --]-->
  <VueDatePicker utc />
  <!--[!code ++]-->
  <VueDatePicker timezone="utc"  />
</template>
```

### `format-locale`

Prop type for locale is changed, making this prop redundant, use `locale` prop instead

```vue
<template>
  <!--[!code --]-->
  <VueDatePicker locale="ja-JP" :format-locale="ja" />
  <!--[!code ++]-->
  <VueDatePicker :locale="ja" />
</template>

<script setup>
  import { ja } from "date-fns/locale"
</script>
```

### `month-name-format`

To change the month name format, you should use [`formats`](/props/formatting/#formats) prop and unicode tokens

```vue
<template>
  <!--[!code --]-->
  <VueDatePicker  month-name-format="long" />
  <!--[!code ++]-->
  <VueDatePicker :formats="{ month: 'MMMM' }" />
</template>
```

### `teleport-center`

The prop is renamed to `centered`

```vue
<template>
  <!--[!code --]-->
  <VueDatePicker  teleport-center />
  <!--[!code ++]-->
  <VueDatePicker centered />
</template>
```

### `select-text`, `cancel-text` and `now-button-label`

These props are now grouped under [`action-row`](/props/general-configuration/#action-row) prop and renamed to unify the labels:

- `select-text` -> `selectBtnLabel`
- `cancel-text` -> `cancelBtnLabel`
- `now-button-label` -> `nowBtnLabel`

```vue
<template>
  <!--[!code --:5]-->
  <VueDatePicker 
    select-text="Pick" 
    now-button-label="Current" 
    cancel-text="Close"
  />

  <!--[!code ++:7]-->
  <VueDatePicker 
    :action-row="{
      selectBtnLabel: 'Pick', 
      cancelBtnLabel: 'Close',
      nowBtnLabel: 'Current' 
    }" 
  />
</template>
```

### `format` and `preview-format`

These props are now grouped under [`formats`](/props/formatting/#formats) prop and renamed:

- `format` -> `input`
- `preview-format` -> `preview`

```vue
<template>
  <!--[!code --]-->
  <VueDatePicker format="dd.MM.yyyy"  preview-format="dd.MM.yyyy" />
  <!--[!code ++]-->
  <VueDatePicker :formats="{ input: 'dd.MM.yyyy', preview: 'dd.MM.yyyy' }" />
</template>
```

### `name`, `required`, `autocomplete`, `state`, `clearable`, `always-clearable` and `hide-input-icon`

These props are now grouped under [`input-attrs`](/props/general-configuration/#input-attrs) prop. Prop types and names are unchanged.

Use camel case for naming multi-word props. e.g. `always-clearable` -> `alwaysClearable`

```vue
<template>
  <!--[!code --]-->
  <VueDatePicker :always-clearable="true" />
  <!--[!code ++]-->
  <VueDatePicker :input-attrs="{ alwaysClearable: true }" />
</template>
```

### `day-names`

Prop type is changed, and no longer provides arguments if a function is provided:

- From: `((lang: string, weekStart: number) => string[]) | string[];`
- To: `(() => string[]) | string[]`

### `locale`

Locale prop type is changed, and will now only accept `date-fns` `Locale` object.

If you don't have it in the project, you can install it via `npm install date-fns`

and then import it:

```ts
import { zhCn } from 'date-fns/locale';
```

### `disable-month-year-select`

This prop is renamed to `hide-month-year-select`

### `disabled-week-days`

This prop is now moved under [`filters`](/props/validation/#filters) prop and renamed to `weekDays`.

```vue
<template>
  <!--[!code --]-->
  <VueDatePicker :disabled-week-days="[3, 4]" />
  <!--[!code ++]-->
  <VueDatePicker :filters="{ weekDays: [3, 4] }" />
</template>
```

### `enable-time-picker`, `ignore-time-validation`, `enable-seconds`, `enable-minutes`, `is-24`, `no-hours-overlay`, `no-minutes-overlay`, `no-seconds-overlay`, `hours-grid-increment`, `minutes-grid-increment`, `seconds-grid-increment`, `time-picker-inline`, `start-time`

These props are now grouped under [`time-config`](/props/time-picker-configuration/#time-config) prop. Prop types and names are unchanged.

Use camel case for naming multi-word props. e.g. `enable-time-picker` -> `enableTimePicker`

```vue
<template>
  <!--[!code --]-->
  <VueDatePicker :enable-time-picker="false" />
  <!--[!code ++]-->
  <VueDatePicker :time-config="{ enableTimePicker: false }" />
</template>
```

### `time-picker` slot `updateTime`

Function parameters for `updateTime` in [`time-picker`](/slots/sections/#time-picker) slot are changed
and now accept a full time object instead of determining the value to update via `boolean` flags.

To update time, pass back the exposed time object and override the properties you want to update.

```vue
<template>
  <VueDatePicker>
    <template #time-picker="{ time, updateTime }">
      <!--[!code --]-->
      <button @click="updateTime(0, false)">Reset minutes</button>
      <!--[!code ++]-->
      <button @click="updateTime({ ...time, minutes: 0 })">Reset minutes</button>
    </template>
  </VueDatePicker>
</template>
```

### `day-class`

This prop is now moved under [`ui`](/props/look-and-feel/#ui) prop.

```vue
<template>
  <!--[!code --]-->
  <VueDatePicker :day-class="(day, internalModel) => 'my-class'" />
  <!--[!code ++]-->
  <VueDatePicker :ui="{ dayClass: (day, internalModel) => 'my-class' }" />
</template>
```

### `esc-close`, `space-confirm`, `month-change-on-arrows`, `month-change-on-scroll`

These props are now grouped under [`config`](/props/general-configuration/#config) prop. Prop types and names are unchanged.

Use camel case for naming multi-word props. e.g. `esc-close` -> `escClose`

```vue
<template>
  <!--[!code --]-->
  <VueDatePicker :esc-close="false"  />
  <!--[!code ++]-->
  <VueDatePicker :config="{ escClose: false }" />
</template>
```

### `flow` and `partial-flow`

These two props are now part of the `FlowConfig` prop object:

- Instead of an array of steps, the `flow` props accepts an `object` with `steps` property
- `partial-flow` is moved under `flow` config as `partial`

```vue
<template>
  <!--[!code --]-->
  <VueDatePicker :flow="['year', 'month', 'calendar']" :partial-flow="true"  />
  <!--[!code ++]-->
  <VueDatePicker :flow="{ steps: ['year', 'month', 'calendar'], partial: true }" />
</template>
```

### `timezone`

Timezone prop type is changed, and will now only accept `string` value

### `week-numbers` and `week-num-name`

- `week-numbers` prop now accepts only boolean or config object
- `week-num-name` prop is now moved under `week-numbers` as `label` property

```vue
<template>
  <!--[!code --]-->
  <VueDatePicker week-numbers="iso" week-num-name="ww"  />
  <!--[!code ++]-->
  <VueDatePicker :week-numbers="{ type: 'iso', label: 'ww' }" />
</template>
```
