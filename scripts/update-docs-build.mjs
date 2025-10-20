import { cpSync, copyFileSync, existsSync, rmSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const packageJson = resolve(import.meta.dirname, '..', 'package.json');
const dist = resolve(import.meta.dirname, '..', 'dist');

const lib = resolve(import.meta.dirname, '..', 'docs', '.vitepress', 'theme', 'lib');
const targetBuild = resolve(lib, 'dist');

const cleanLib = () => {
    if (existsSync(lib)) {
        rmSync(lib, { recursive: true });
    }
    mkdirSync(lib);
};

if (existsSync(dist)) {
    cleanLib();
    cpSync(dist, targetBuild, { recursive: true });
    copyFileSync(packageJson, resolve(lib, 'package.json'));
}
