var path = require('path');

/**
 * Import specs
 */
var dir = '../test/specs/';
[
  'main'
].forEach((script) => {
  require(path.join(dir, script));
});
