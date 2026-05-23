---
lang: en-US
title: Migration from v12
description: Migration guide for migrating from v12 to v13 and notifying of breaking changes
outline: [2, 4]
---

# Migrating from v12

## Breaking changes

- All class names are renamed from `underscore` to `dash`.

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
