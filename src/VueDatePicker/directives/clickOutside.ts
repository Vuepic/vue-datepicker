// Following code is a port of @vueuse/core clickOutside hook
import { unref, watch, getCurrentScope, onScopeDispose } from 'vue';

import type { Fn, MaybeElementRef, MaybeRef, OnClickOutsideEvents, OnClickOutsideOptions } from '@/interfaces';
import { unrefElement } from '@/utils/util';

const defaultWindow = typeof window !== 'undefined' ? window : undefined;

const noop = () => {
    return;
};

const tryOnScopeDispose = (fn: Fn): boolean => {
    if (getCurrentScope()) {
        onScopeDispose(fn);
        return true;
    }
    return false;
};

const useEventListener = (
    target: MaybeRef<EventTarget> | undefined,
    event: string,
    listener: EventListener,
    options: Record<string, boolean>,
): (() => void) => {
    if (!target) return noop;

    let cleanup = noop;

    const stopWatch = watch(
        () => unref(target),
        (el) => {
            cleanup();
            if (!el) return;

            el.addEventListener(event, listener, options);

            cleanup = () => {
                el.removeEventListener(event, listener, options);
                cleanup = noop;
            };
        },
        { immediate: true, flush: 'post' },
    );

    const stop = () => {
        stopWatch();
        cleanup();
    };

    tryOnScopeDispose(stop);

    return stop;
};

export const onClickOutside = <E extends keyof OnClickOutsideEvents = 'pointerdown'>(
    target: MaybeElementRef,
    inputRef: MaybeElementRef,
    handler: (evt: OnClickOutsideEvents[E]) => void,
    options: OnClickOutsideOptions<E> = {},
): (() => void) | undefined => {
    const { window = defaultWindow, event = 'pointerdown' } = options;

    if (!window) return;

    const listener = (event: OnClickOutsideEvents[E]) => {
        const el = unrefElement(target);
        const inputEl = unrefElement(inputRef);

        if (!el || !inputEl) return;

        if (el === event.target || event.composedPath().includes(el) || event.composedPath().includes(inputEl)) return;

        handler(event);
    };

    return useEventListener(window, event, listener as EventListener, { passive: true });
};
