const { Script } = require("vm");

module.exports = {
  default: {
    require: [
      'tests/stepdefinitions/*.ts',
      'support/hooks.ts',
      'support/world.ts'
    ],
    format: ['progress', 'html:reports/report.html'],
    paths: ['tests/featurefiles/*.feature'],
    parallel: 1,
    requireModule: ['ts-node/register'],
    tags: '@login',
    timeout: 20000,
  }
};