var path = require('path');

/**
 * Import specs
 */
var dir = '../tests/specs/';
[
  'main', 'builtTest'
].forEach((script) => {
  require(path.join(dir, script));
});
