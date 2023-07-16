import { createElementBlock, createElementVNode, openBlock } from 'vue';

function render() {
    return (
        openBlock(),
        createElementBlock(
            'svg',
            {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                fill: 'currentColor',
                'aria-hidden': 'true',
                class: 'dp__icon',
            },
            [
                createElementVNode('path', {
                    d: 'M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z',
                }),
                createElementVNode('path', {
                    d: 'M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z',
                }),
            ],
        )
    );
}

render.compatConfig = {
    MODE: 3,
};

export default render;
