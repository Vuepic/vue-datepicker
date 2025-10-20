import { defineConfig } from 'vitepress';

// @ts-expect-error Leave it as is
import packageJson from '../../package.json';

export default defineConfig({
    title: 'Vue Datepicker',
    description:
        'Vue 3 datepicker component. Lightweight and powerful with support for the timepicker, range picker, month-year picker, text input, week numbers and many more. Options to customize the datepicker from the ground up with props, slots and custom components. Dark and light mode available',
    sitemap: {
        hostname: 'https://vue3datepicker.com',
    },
    metaChunk: true,
    cleanUrls: true,
    lastUpdated: true,
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/Vuepic/vue-datepicker/tree/main/docs/:path',
        },
        nav: [
            { text: 'Home', link: '/' },
            {
                text: `v${packageJson.version}`,
                items: [
                    { text: 'v11', link: 'https://v11.vue3datepicker.com/' },
                    { text: 'v10', link: 'https://v10.vue3datepicker.com/' },
                    { text: 'v9', link: 'https://v9.vue3datepicker.com/' },
                    { text: 'v8', link: 'https://v8-8.vue3datepicker.com/' },
                    { text: 'v7', link: 'https://v7-4.vue3datepicker.com/' },
                    { text: 'v6', link: 'https://v6.vue3datepicker.com/' },
                    { text: 'v5', link: 'https://v5.vue3datepicker.com/' },
                ],
            },
            { text: 'Changelog', link: 'https://github.com/Vuepic/vue-datepicker/releases' },
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2021-present Vuepic',
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Vuepic/vue-datepicker' },
            { icon: 'npm', link: 'https://www.npmjs.com/package/@vuepic/vue-datepicker' },
        ],
        sidebar: [
            {
                text: 'Getting Started',
                collapsed: false,
                items: [
                    {
                        text: 'Installation',
                        link: '/installation/',
                    },
                ],
            },
            {
                text: 'Props',
                collapsed: false,
                items: [
                    {
                        text: 'Modes',
                        link: '/props/modes/',
                    },
                    {
                        text: 'Formatting',
                        link: '/props/formatting/',
                    },

                    {
                        text: 'Validation',
                        link: '/props/validation/',
                    },
                    {
                        text: 'Modes configuration',
                        link: '/props/modes-configuration/',
                    },
                    {
                        text: 'Time picker configuration',
                        link: '/props/time-picker-configuration/',
                    },
                    {
                        text: 'General configuration',
                        link: '/props/general-configuration/',
                    },
                    {
                        text: 'Look and feel',
                        link: '/props/look-and-feel/',
                    },
                    // {
                    //     text: 'Calendar configuration',
                    //     link: '/props/calendar-configuration/',
                    // },

                    // {
                    //     text: 'Localization',
                    //     link: '/props/localization/',
                    // },
                    // {
                    //     text: 'Positioning',
                    //     link: '/props/positioning/',
                    // },
                    // {
                    //     text: 'Keyboard',
                    //     link: '/props/keyboard/',
                    // },
                    // {
                    //     text: 'Look and feel',
                    //     link: '/props/look-and-feel/',
                    // },
                ],
            },
            {
                text: 'Migration guides',
                collapsed: true,
                items: [
                    {
                        text: 'Migrating from v11',
                        link: '/migration/from-v11',
                    },
                ],
            },
        ],
    },
});
