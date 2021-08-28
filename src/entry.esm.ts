import { App, Plugin } from 'vue';
import component from './Vue3DatePicker/Vue3DatePicker.vue';

type InstallableComponent = typeof component & { install: Exclude<Plugin['install'], undefined> };

export default /*#__PURE__*/ ((): InstallableComponent => {
    const installable = component as unknown as InstallableComponent;

    installable.install = (app: App) => {
        app.component('Vue3DatePicker', installable);
    };
    return installable;
})();
