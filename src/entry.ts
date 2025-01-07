import component, * as namedExports from './entry.esm';

Object.entries(namedExports).forEach(([exportName, exported]) => {
    if (exportName !== 'default') component[exportName] = exported;
});

export default component;
