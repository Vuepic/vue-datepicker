## vue3-date-time-picker


### The most complete date picker solution for Vue 3

<a href="https://github.com/roll-ui/roll-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/apm/l/atomic-design-ui.svg" alt="License" />
</a>

<img src="https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat" alt="No Dependencies" data-canonical-src="https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat" style="max-width: 100%;">

[**DOCUMENTATION**](https://vuepic.github.io/vue3-date-time-picker/)

## Features

- Single date picker
- Range date picker
- Time picker
- Locale support
- Week numbers
- Dark and light theme
- Zero dependencies
- SSR support
- Highly configurable
- Type support

## Install

```shell
yarn add vue3-date-time-picker

# or

npm install vue3-date-time-picker
```

Import and register component

**Global**

```js
import Vue from "vue";
import Datepicker from "vue3-date-time-picker";
import 'vue3-date-time-picker/dist/main.css'

Vue.component("Datepicker", Datepicker);
```

**Local**

```vue
<script>
    import Datepicker from "vue3-date-time-picker";
    import 'vue3-date-time-picker/dist/main.css'
    
    export default {
        components: { Datepicker }
    }
</script>
```

## License

[MIT](https://github.com/Vuepic/vue3-date-time-picker/blob/master/LICENSE)