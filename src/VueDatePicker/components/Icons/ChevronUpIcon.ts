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
                    d: 'M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z',
                }),
            ],
        )
    );
}

render.compatConfig = {
    MODE: 3,
};

export default render;
