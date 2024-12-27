import { createApp } from 'vue';
import Dev from './serve.vue';

import '../src/VueDatePicker/style/main.scss';

const app = createApp(Dev);
app.mount('#app');
