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
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        [
            'meta',
            {
                name: 'description',
                content:
                    'Vue 3 datepicker component. Lightweight and powerful with support for the timepicker, range picker, month-year picker, text input, week numbers and many more. Options to customize the datepicker from the ground up with props, slots and custom components. Dark and light mode available',
            },
        ],
        [
            'script',
            {
                async: 'true',
                src: 'https://media.bitterbrains.com/main.js?from=JASKAR&type=top',
            },
        ],
    ],
    metaChunk: true,
    cleanUrls: true,
    lastUpdated: true,
    themeConfig: {
        logo: '/logo.png',
        search: {
            provider: 'algolia',
            options: {
                appId: process.env.ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_API_KEY,
                indexName: 'vue3-date-time-picker',
            },
        },
        carbonAds: {
            code: process.env.CARBON_CODE,
            placement: 'vue3datepickercom',
        },
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
                    {
                        text: 'Localization',
                        link: '/props/localization/',
                    },
                    {
                        text: 'Timezone',
                        link: '/props/timezone/',
                    },
                ],
            },
            {
                text: 'Slots',
                collapsed: true,
                items: [
                    {
                        text: 'Sections',
                        link: '/slots/sections/',
                    },
                    {
                        text: 'Content',
                        link: '/slots/content/',
                    },
                    {
                        text: 'Trigger and input',
                        link: '/slots/trigger-and-input/',
                    },
                    {
                        text: 'Icons',
                        link: '/slots/icons/',
                    },
                    {
                        text: 'Overlay',
                        link: '/slots/overlay/',
                    },
                ],
            },
            {
                text: 'Methods and events',
                collapsed: true,
                items: [
                    {
                        text: 'Methods',
                        link: '/methods-and-events/methods/',
                    },
                    {
                        text: 'Events',
                        link: '/methods-and-events/events/',
                    },
                ],
            },
            {
                text: 'Customization',
                collapsed: true,
                items: [
                    {
                        text: 'Theming',
                        link: '/customization/theming/',
                    },
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
