import { input } from '@inquirer/prompts';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import semver from 'semver';

const dirs = ['docs', 'playground', 'lib', ''];

/**
 * @param {string} path
 * @returns {{version: string, [p: string]: any}}
 */
const readPackageJson = (path) => {
  const json = readFileSync(resolve(import.meta.dirname, `../${path}`, 'package.json'), 'utf-8');
  return JSON.parse(json);
};

/**
 * @param {string} path
 * @param {{version: string, [p: string]: any}} packageJson
 */
const writePackageJson = (path, packageJson) => {
  const json = JSON.stringify(packageJson, null, 2);
  writeFileSync(resolve(import.meta.dirname, `../${path}`, 'package.json'), json);
};

/**
 * @param {string} path
 * @param {string} version
 */
const updatePackageJson = (path, version) => {
  const packageJson = readPackageJson(path);
  packageJson.version = version;
  writePackageJson(path, packageJson);
};

// Simple script to update the version in all package.json files
(async () => {
  const rootPackageJson = readPackageJson('');

  const currentVersion = rootPackageJson.version;

  const version = await input({
    message: `Enter new version (current: ${currentVersion})`,
    validate: (value) => {
      const v = value.trim();
      if (!semver.valid(v)) return 'Must be a valid semver version';
      if (!semver.gt(v, currentVersion)) return 'Must be greater than current version';
      return true;
    },
  });

  for (const dir of dirs) {
    updatePackageJson(`${dir === '' ? '' : 'packages'}/${dir}`, version);
  }
})();
