module.exports = {
  default: {
    require: [
      'tests/stepdefinitions/*.ts',
      'support/hooks.ts',
      'support/world.ts'
    ],
    format: ['progress', 'html:reports/report.html'],
    paths: ['tests/featurefiles/*.feature'],
    parallel: 0,
    publishQuiet: true,
    requireModule: ['ts-node/register'],
    tags: '@registration'
  }
};