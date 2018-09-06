const withTM = require('next-plugin-transpile-modules');

module.exports = withTM({
  transpileModules: ['grommet', 'grommet-controls', 'grommet-icons'],
});
