import component, * as namedExports from './entry.esm';
import { AllProps } from '@/props.ts';

Object.entries(namedExports).forEach(([exportName, exported]) => {
    if (exportName !== 'default') component[exportName] = exported;
});

export default component;

export { AllProps };
