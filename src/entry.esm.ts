import component from './VueDatePicker/VueDatePicker.vue';
import type { App, Plugin } from 'vue';

type InstallableComponent = typeof component & { install: Exclude<Plugin['install'], undefined> };

export default /*#__PURE__*/ ((): InstallableComponent => {
    const installable = component as unknown as InstallableComponent;

    installable.install = (app: App) => {
        app.component('Vue3DatePicker', installable);
    };
    return installable;
})();
