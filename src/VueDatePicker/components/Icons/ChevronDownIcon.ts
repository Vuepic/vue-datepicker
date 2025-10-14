import { h } from 'vue';

export function ChevronDownIcon() {
    return h(
        'svg',
        {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 32 32',
            fill: 'currentColor',
            'aria-hidden': 'true',
            class: 'dp__icon',
            role: 'img',
        },
        [
            h('path', {
                d: 'M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z',
            }),
        ],
    );
}
