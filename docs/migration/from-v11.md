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
  - `iife`: Browser bundle, importing the component in `html` `<script>` tag
  - `umd`: Mostly used in older webpack bundles
- `import` statement is changed to named instead of default
- Removed `onScroll` and `dpWrapMenuRef` exposed methods
- In `action-row` slot, param `internalModelValue` is renamed to `modelValue`
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
  - `minutes-grid-ncrement`
  - `seconds-grid-ncrement`
  - `time-picker-inline`
  - `day-class`
  - `esc-close`
  - `space-confirm`
  - `month-change-on-arrows`
  - `month-change-on-scroll`
  - `partial-flow` (renamed)
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
- Timezone behavior is chained, places check the [`timezone`](/props/timezone/) prop info
- All locale-based formating is now done via Unicode tokens
- Type definition is now auto-generated, there might be some misalignment between types from previous version and the new one

## Importing the component

Importing the component is now done via named import:

```js
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

```js
<template>
  <VueDatePicker
    utc // [!code --]
    timezone="utc" // [!code ++]
  />
</template>
```

### `format-locale`

Prop type for locale is changed, making this prop redundant, use `locale` prop instead

```js
<template>
  <VueDatePicker
    locale="ja-JP" // [!code --]
    :format-locale="ja" // [!code --]
    :locale="ja" // [!code ++]
  />
</template>

<script setup>
    import { ja } from "date-fns/locale"
</script>
```

### `month-name-format`

To change the month name format, you should use [`formats`](/props/formatting/#formats) prop and unicode tokens

```js
<template>
  <VueDatePicker
    month-name-format="long" // [!code --]
    :formats="{ month: 'MMMM' }" // [!code ++]
  />
</template>
```

### `teleport-center`

The prop is renamed to `centered`

```js
<template>
  <VueDatePicker
    teleport-center // [!code --]
    centered // [!code ++]
  />
</template>
```

### `select-text`, `cancel-text` and `now-button-label`

These props are now grouped under [`action-row`](/props/general-configuration/#action-row) prop and renamed to unify the labels:

- `select-text` -> `selectBtnLabel`
- `cancel-text` -> `cancelBtnLabel`
- `now-button-label` -> `nowBtnLabel`

```js
<template>
  <VueDatePicker
    select-text="Pick" // [!code --]
    cancel-text="Close" // [!code --]
    now-button-label="Current" // [!code --]
    :action-row="{  // [!code ++]
      selectBtnLabel: 'Pick', // [!code ++]
      cancelBtnLabel: 'Close', // [!code ++]
      nowBtnLabel: 'Current' // [!code ++]
    }" // [!code ++]
  />
</template>
```

### `format` and `preview-format`

These props are now grouped under [`formats`](/props/formatting/#formats) prop and renamed:

- `format` -> `input`
- `preview-format` -> `preview`

```js
<template>
  <VueDatePicker
    format="dd.MM.yyyy" // [!code --]
    preview-format="dd.MM.yyyy" // [!code --]
    :formats="{ input: 'dd.MM.yyyy', preview: 'dd.MM.yyyy' }" // [!code ++]
  />
</template>
```

### `name`, `required`, `autocomplete`, `state`, `clearable`, `always-clearable` and `hide-input-icon`

These props are now grouped under [`input-attrs`](/props/general-configuration/#input-attrs) prop. Prop types and names are unchanged.

Use camel case for naming multi-word props. e.g. `always-clearable` -> `alwaysClearable`

```js
<template>
  <VueDatePicker
    :always-cleable="true" // [!code --]
    :input-attrs="{ alwaysClearable: true }" // [!code ++]
  />
</template>
```

### `day-names`

Prop type is changed, and no longer provides arguments if a function is provided:

- From: `((lang: string, weekStart: number) => string[]) | string[];`
- To: `(() => string[]) | string[]`

### `locale`

Locale prop type is changed, and will now only accept `date-fns` `Locale` object.

### `disable-month-year-select`

This prop is renamed to `hide-month-year-select`

### `disabled-week-days`

This prop is now moved under [`filters`](/props/validation/#filters) prop and renamed to `weekDays`.

```js
<template>
  <VueDatePicker
    :disabled-week-days="[3, 4]" // [!code --]
    :filters="{ weekDays: [3, 4] }" // [!code ++]
  />
</template>
```

### `enable-time-picker`, `ignore-time-validation`, `enable-seconds`, `enable-minutes`, `is-24`, `no-hours-overlay`, `no-minutes-overlay`, `no-seconds-overlay`, `hours-grid-increment`, `minutes-grid-ncrement`, `seconds-grid-ncrement`, `time-picker-inline`

These props are now grouped under [`time-config`](/props/time-picker-configuration/#time-config) prop. Prop types and names are unchanged.

Use camel case for naming multi-word props. e.g. `enable-time-picker` -> `enableTimePicker`

```js
<template>
  <VueDatePicker
    :enable-time-picker="false" // [!code --]
    :time-config="{ enableTimePicker: false }" // [!code ++]
  />
</template>
```


### `day-class`

This prop is now moved under [`ui`](/props/look-and-feel/#ui) prop.

```js
<template>
  <VueDatePicker
    :day-class="(day, internalModel) => 'my-class'" // [!code --]
    :ui="{ dayClass: (day, internalModel) => 'my-class' }" // [!code ++]
  />
</template>
```

### `esc-close`, `space-confirm`, `month-change-on-arrows`, `month-change-on-scroll`

These props are now grouped under [`config`](/props/general-configuration/#config) prop. Prop types and names are unchanged.

Use camel case for naming multi-word props. e.g. `esc-close` -> `escClose`

```js
<template>
  <VueDatePicker
    :esc-close="false" // [!code --]
    :config="{ escClose: false }" // [!code ++]
  />
</template>
```

### `flow` and `partial-flow`

These two props are now part of the `FlowConfig` prop object:

- Instead of an array of steps, the `flow` props accepts an `object` with `steps` property
- `partial-flow` is moved under `flow` config as `partial`

```js
<template>
  <VueDatePicker
    :flow="['year', 'month', 'calendar']" // [!code --]
    :partial-flow="true" // [!code --]
    :flow="{ steps: ['year', 'month', 'calendar'], partial: true }" // [!code ++]
  />
</template>
```

### `timezone`

Timezone prop type is changed, and will now only accept `string` value

### `week-numbers` and `week-num-name`

- `week-numbers` prop now accepts only boolean or config object
- `week-num-name` prop is now moved under `week-numbers` as `label` property

```js
<template>
  <VueDatePicker
    week-numbers="iso" // [!code --]
    week-num-name="ww" // [!code --]
    :week-numbers="{ type: 'iso', label: 'ww' }" // [!code ++]
  />
</template>
```