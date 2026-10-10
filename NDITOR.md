# Nyaitter Paper.js fork

This fork contains the Paper.js distribution used by Nditor's collaborative costume editor.
The entry point is `dist/paper-full.js`. It includes edit gesture notifications,
remote previews and selections, stable artwork IDs, and SVG export handling which
excludes previews and preserves artwork temporarily hidden by collaborators.

The upstream source and MIT license are preserved. Nditor's changes to the full
bundle are maintained in `patches/nditor-paper-full.patch`. `npm run build` and
`npm run dist` apply that patch after the upstream build. Patch mismatches fail
the build rather than silently dropping collaboration support. Other upstream
bundles, including minified/core variants, do not include this patch.

Upstream: https://github.com/TurboWarp/paper.js
Nyaitter fork: https://github.com/Nyaitter/paper.js
