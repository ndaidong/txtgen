/**
 * Check built-file to ensure it has been regenated
 * @ndaidong
 */

var fs = require('fs');
var test = require('tape');

var pkgFake = require('../../package.json');
var proFile = './dist/txtgen.min.js';


test('Testing minified result', (assert) => {
  assert.ok(fs.existsSync(proFile), 'Production file must be generated');

  let s = fs.readFileSync(proFile, 'utf8');
  let a = s.split('\n');
  assert.ok(s.length > 0 && a.length > 5, 'Production file must be not empty');

  assert.ok(a[1] === ` * ${pkgFake.name}`, 'Package name must be correct');
  assert.ok(a[2] === ` * v${pkgFake.version}`, 'Package version must be correct');
  assert.ok(a[3].startsWith(' * built:'), 'Package built time must be showed');
  assert.ok(a[4] === ` * git: ${pkgFake.repository.url}`, 'Package repository must be correct');
  assert.ok(a[5] === ` * author: ${pkgFake.author}`, 'Package author must be correct');
  assert.ok(a[6] === ` * License: ${pkgFake.license}`, 'Package license must be correct');

  assert.end();
});
