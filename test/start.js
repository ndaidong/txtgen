const path = require('path');

/**
 * Import specs
 */
const dir = '../test/specs/';
[
  'main', 'builtTest',
].forEach((script) => {
  require(path.join(dir, script));
});
