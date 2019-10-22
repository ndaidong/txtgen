const path = require('path');

/**
 * Import specs
 */
const dir = '../tests/specs/';
[
  'main', 'builtTest',
].forEach((script) => {
  require(path.join(dir, script));
});
