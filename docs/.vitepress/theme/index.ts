import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import StartAndSponsor from './components/Layout/StartAndSponsor.vue';
import './style.css';
import '../theme/lib/dist/main.css';

import GlobalDemo from './components/GlobalDemo.vue';
import TimeZoneDemo from './components/TimeZoneDemo.vue';

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {});
    },
    enhanceApp({ app }) {
        app.component('StarAndSponsor', StartAndSponsor);
        app.component('GlobalDemo', GlobalDemo);
        app.component('TimeZoneDemo', TimeZoneDemo);
    },
} satisfies Theme;
