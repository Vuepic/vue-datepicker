---
lang: en-US
title: Migration from v13
description: Migration guide for migrating from v13 to v14 and notifying of breaking changes
outline: [2, 4]
---

# Migrating from v13

## Breaking changes

- Exposed flow method `handleFlow` now accepts a step value instead of an index and has been renamed to `executeFlow`
- `partial` in `flow` prop is removed, since it has no effect on the behaviour. Prop remains an object in case of potential updates
- `@flow-step` emitted event will provide the step value instead of the step index

### Change

- `partial` property from the flow prop is removed, since it was used only in a specific scenario with `auto-apply`, which is now handled automatically
- `handleFlow` is an exposed method to trigger flow again programmatically, and accepts an optional parameter to start from a specific step. Previously
it used steps index to start from a specific step, which is now replaced with the step value

```vue
<template>
  <VueDatePicker
    ref="dpRef"
    :flow="{
      steps: ['year', 'month', 'calendar'],
      // [!code --]
      partial: true, 
    }"
    @flow-step="onFlowStep"
  />
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { VueDatePicker, type PickerSection } from '@vuepic/vue-datepicker';

  const dpRef = ref();

  dpRef.value?.handleFlow(1); // [!code --]
  dpRef.value?.executeFlow('month'); // [!code ++]

  function onFlowStep(stepIndex: number) {} // [!code --]
  function onFlowStep(step: PickerSection) {} // [!code ++]
</script> 
```

