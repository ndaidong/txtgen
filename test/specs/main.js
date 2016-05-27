/**
 * Testing
 * @ndaidong
 */

/* eslint no-undefined: 0*/
/* eslint no-array-constructor: 0*/
/* eslint no-new-func: 0*/
/* eslint no-console: 0*/

var path = require('path');
var test = require('tape');
var bella = require('bellajs');

var rootDir = '../../src/';
var main = require(path.join(rootDir, 'main'));

var hasMethods = (o) => {
  var structure = [
    'make'
  ];

  return structure.every((k) => {
    return bella.hasProperty(o, k) && bella.isFunction(o[k]);
  });
};


test('Testing the core methods:', (assert) => {

  assert.ok(bella.isObject(main), 'main must be an object.');
  assert.ok(hasMethods(main), 'main must have required methods.');
  assert.end();
});
