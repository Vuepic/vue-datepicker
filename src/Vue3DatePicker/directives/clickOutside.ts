import { DirectiveBinding } from 'vue';

interface CustomHTMLElement extends Partial<HTMLElement> {
    clickOutsideEvent: (ev: MouseEvent) => void;
    contains: (param: unknown) => boolean;
}

export const clickOutsideDirective = {
    beforeMount(el: CustomHTMLElement, binding: DirectiveBinding): void {
        const em = binding.instance;
        const sameEl = Object.keys(binding.modifiers);

        el.clickOutsideEvent = (event: MouseEvent) => {
            const path = event.composedPath ? event.composedPath() : undefined;

            if (em && path && !path.includes(em.$el)) {
                if (sameEl.length > 0) {
                    if (
                        !sameEl.some((className) =>
                            path.some((elm) => {
                                if ((elm as Element).className && typeof (elm as Element)?.className === 'string') {
                                    return (elm as Element).className.includes(className);
                                }
                            }),
                        )
                    ) {
                        binding.value(event, el);
                    }
                } else {
                    if (!em.$el.contains(event.target as HTMLElement)) {
                        binding.value(event, el);
                    }
                }
            }
        };

        document.body.addEventListener('click', el.clickOutsideEvent, false);
    },
    unmounted(el: CustomHTMLElement): void {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    },
};
