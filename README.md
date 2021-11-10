## vue3-date-time-picker


### The most complete datepicker solution for Vue 3

[![License](https://img.shields.io/github/license/vuepic/vue3-date-time-picker)](https://github.com/Vuepic/vue3-date-time-picker/blob/master/LICENSE) ![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat) [![npm](https://img.shields.io/npm/v/vue3-date-time-picker.svg)](https://www.npmjs.com/package/vue3-date-time-picker) ![Downloads](https://img.shields.io/npm/dm/vue3-date-time-picker) [![Open issues](https://img.shields.io/github/issues-raw/vuepic/vue3-date-time-picker)](https://github.com/Vuepic/vue3-date-time-picker/issues) ![CI](https://github.com/Vuepic/vue3-date-time-picker/actions/workflows/node.js.yml/badge.svg) ![Release date](https://img.shields.io/github/release-date/vuepic/vue3-date-time-picker)

[DOCUMENTATION](https://vue3datepicker.com/)


[CodeSandbox Playground](https://codesandbox.io/s/vue3-date-time-picker-demo-5scsr?file=/src/components/Demo.vue)

## Features

- Single date picker
- Range date picker
- Time picker
- Month picker
- Text input
- Locale support
- Week numbers
- Dark and light theme
- Zero dependencies
- SSR support
- Highly configurable
- Accessible
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
import { createApp } from "vue";
import App from './App.vue';

import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';

const app = createApp(App);
app.component('Datepicker', Datepicker);
```

**Local**

```vue
<script>
    import Datepicker from 'vue3-date-time-picker';
    import 'vue3-date-time-picker/dist/main.css';
    
    export default {
        components: { Datepicker }
    }
</script>
```

## Supporting the project

As you may know, maintaining an open-source project is a very time-consuming job. Your support is very appreciated ❤️

Please ⭐️ this repository if you like the component!

You can also make a financial contribution via sponsoring this project or one time donation. [Become a sponsor](https://github.com/sponsors/Vuepic)

## License

Copyright © 2021 [Vuepic](https://github.com/Vuepic)

[MIT](https://github.com/Vuepic/vue3-date-time-picker/blob/master/LICENSE)
