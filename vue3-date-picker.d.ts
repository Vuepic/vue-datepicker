import { DefineComponent, Plugin } from 'vue';
import { RDatepickerProps } from './src/Vue3DatePicker/interfaces';

declare const Vue3DatePicker: DefineComponent<RDatepickerProps, {}, any> & {
    install: Exclude<Plugin['install'], undefined>;
};
export default Vue3DatePicker;
