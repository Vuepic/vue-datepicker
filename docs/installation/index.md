---
title: Installation
description: Install guide for @vuepic/vue-datepicker for global installation, Options and Composition API
---
---


# Installation

:::warning Before Installing
- Min supported version of `vue` is `3.5`
- The library only provides `es` bundle.
- `compat` mode, `umd` and `iife` builds are not included in the library, nor they will be. If there is a need for such requirements, feel free to compile from source or use version `< 12.0`
:::

Install the component using the preferred package manager

::: code-group

```shell [npm]
npm install @vuepic/vue-datepicker
```

```shell [yarn]
yarn add @vuepic/vue-datepicker
```

```shell [pnpm]
pnpm add @vuepic/vue-datepicker
```

```shell [bun]
bun add @vuepic/vue-datepicker
```
:::

Then import and register component

**Note**: `css` file is imported separately

```js
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
```

## **Global**

In the main file

```js
import { createApp } from "vue";
import App from './App.vue';

import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App);

app.component('VueDatePicker', VueDatePicker);

app.mount('#app');
```

## **Local**

In the `component` files

::: code-group

```vue [script setup]
<template>
  <VueDatePicker v-model="date"></VueDatePicker>
</template>

<script setup>
  import { ref } from 'vue';
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'

  const date = ref();
</script>
```

```vue [Composition API]
<template>
  <VueDatePicker v-model="date"></VueDatePicker>
</template>

<script>
  import { ref } from 'vue';
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'

  export default {
    components: { VueDatePicker },
    setup() {
      const date = ref();

      return {
        date
      }
    }
  };
</script>
```

```vue [Options API]
<template>
  <VueDatePicker v-model="date"></VueDatePicker>
</template>

<script>
  import { VueDatePicker } from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'

  export default {
    components: { VueDatePicker },
    data() {
      return {
        date: null,
      };
    }
  }
</script>
```

:::
 
## **Nuxt**

If you use `nuxt`, make sure to also include the component under `build.transpile` in `nuxt.config`

```ts
export default defineNuxtConfig({
  build: {
    transpile: ['@vuepic/vue-datepicker']
  }
})
```

That's it, you are ready to go
