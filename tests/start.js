var path = require('path');

/**
 * Import specs
 */
var dir = '../test/specs/';
[
  'main', 'builtTest'
].forEach((script) => {
  require(path.join(dir, script));
});
