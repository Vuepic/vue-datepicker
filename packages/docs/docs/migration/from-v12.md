---
lang: en-US
title: Migration from v12
description: Migration guide for migrating from v12 to v13 and notifying of breaking changes
outline: [2, 4]
---

# Migrating from v12

## Breaking changes

- **All** class names are renamed from `underscore` to `dash`
- The following class words are changed:
  - `dp__date_hover` is renamed to `dp--date-hoverable`
  - `dp__active_date` is renamed to `dp--active` 
  - `dp__date_hover_start` renamed to `dp--date-hoverable-start` 
  - `dp__date_hover_end` renamed to `dp--date-hoverable-end`
- Removed classes: `dp__range_end`, `dp__range_start`, `dp--extended-fixed-start`, `dp--extended-fixed-end`
- `week-start` will now default to `locale` prop instead of Monday.

### Change

In case you modified the classes or overridden the built-in styles,
you need to update the class names.

Replace all underscores with dashes. The wording of the class name is the same.

```css
.dp__calendar_row { /* [!code --] */
  /* Custom overrides */
}

.dp--calendar-row { /* [!code ++] */
  /* Custom overrides */
}

.dp__calendar_header_cell { /* [!code --] */
  /* Custom overrides */
}

.dp--calendar-header-cell { /* [!code ++] */
  /* Custom overrides */
}
```

### `week-start`

Since default locale is `enUS`, the default `week-start` will be Sunday. To retain previous behavior, override `week-start` to Monday

```vue
<template>
  <!--[!code --]-->
  <VueDatePicker />
  <!-- [!code ++]-->
  <VueDatePicker :week-start="WeekStart.Monday" /> 
</template>

<script lang="ts" setup>
  import { WeekStart } from "@vuepic/vue-datepicker"
</script> 
```