// @flow strict-local

import path from 'path';

import testExportedPaths from './testExportedPaths';

testExportedPaths(path.join(__dirname, '..', 'fixtures-tester.js'), [
  ['src/fixtures-tester/src/index.js', 'src/index.js'],
  ['src/fixtures-tester/package.json', 'package.json'],

  // invalid cases:
  ['src/packages/monorepo/outsideScope.js', undefined], // correctly deleted
  ['src/fixtures-tester/BUILD.bazel', undefined], // correctly deleted
  ['src/fixtures-tester/BUILD', undefined], // correctly deleted
  ['src/fixtures-tester/WORKSPACE.bazel', undefined], // correctly deleted
  ['src/fixtures-tester/WORKSPACE', undefined], // correctly deleted
  ['package.json', undefined], // correctly deleted
]);
