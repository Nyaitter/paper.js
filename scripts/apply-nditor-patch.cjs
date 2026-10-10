'use strict';

const path = require('node:path');
const {spawnSync} = require('node:child_process');
const root = path.resolve(__dirname, '..');
const patch = path.join(root, 'patches', 'nditor-paper-full.patch');
const git = args => spawnSync('git', ['apply', '--ignore-whitespace', ...args, patch], {
  cwd: root, encoding: 'utf8'
});

if (git(['--reverse', '--check']).status === 0) {
  process.stdout.write('Nditor Paper.js patch is already applied.\n');
} else {
  const check = git(['--check']);
  if (check.status !== 0) {
    throw new Error(`The upstream bundle no longer matches the Nditor patch.\n${check.stderr || check.error?.message || ''}`);
  }
  const applied = git([]);
  if (applied.status !== 0) throw new Error(applied.stderr || applied.error?.message || 'Unable to apply Nditor patch');
}
