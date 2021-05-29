import { DefineComponent, Plugin } from 'vue';

declare const Vue3DatePicker: DefineComponent<{}, {}, any> & { install: Exclude<Plugin['install'], undefined> };
export default Vue3DatePicker;
