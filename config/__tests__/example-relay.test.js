// @flow strict-local

import path from 'path';

import testExportedPaths from './testExportedPaths';

testExportedPaths(path.join(__dirname, '..', 'example-relay.js'), [
  ['src/example-relay/package.json', 'package.json'],
  ['src/example-relay/pages/index.js', 'pages/index.js'],
  ['src/example-relay/src/locations/CountryFlag.js', 'src/locations/CountryFlag.js'],
  ['src/example-relay/__generated__/AppQuery.graphql.js', '__generated__/AppQuery.graphql.js'],
  ['src/example-relay/__github__/.flowconfig', '.flowconfig'],
  ['src/example-relay/__github__/babel.config.js', 'babel.config.js'],
  ['src/example-relay/__github__/flow-typed/globals.js', 'flow-typed/globals.js'],
  [
    'src/example-relay/__github__/.github/workflows/continuous-integration.yml',
    '.github/workflows/continuous-integration.yml',
  ],

  // invalid cases:
  ['src/example-relay/.babelrc.js', undefined], // correctly deleted
  ['src/example-relay/jest.config.js', undefined], // correctly deleted
  ['src/example-relay/__github__/unknown.js', undefined], // correctly deleted
  ['src/packages/monorepo/outsideScope.js', undefined], // correctly deleted
  ['package.json', undefined], // correctly deleted
]);
