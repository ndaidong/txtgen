/**
 * Testing
 * @ndaidong
 */

var path = require('path');
var test = require('tape');
var bella = require('bellajs');

var rootDir = '../../src/';
var txtgen = require(path.join(rootDir, 'main'));

var hasMethods = (o) => {
  var structure = [
    'sentence',
    'paragraph',
    'article'
  ];

  return structure.every((k) => {
    return bella.hasProperty(o, k) && bella.isFunction(o[k]);
  });
};


test('Testing txtgen object:', (assert) => {
  assert.ok(bella.isObject(txtgen), 'txtgen must be an object.');
  assert.ok(hasMethods(txtgen), 'txtgen must have required methods.');
  assert.end();
});

test('txtgen.sentence():', (assert) => {
  let sentence = txtgen.sentence();
  assert.ok(bella.isString(sentence) && sentence.length > 0, 'A sentence must be created');
  assert.end();
});

test('txtgen.paragraph():', (assert) => {
  let paragraph = txtgen.paragraph();
  assert.ok(bella.isString(paragraph) && paragraph.length > 0, 'A paragraph must be created');
  assert.end();
});

test('txtgen.article():', (assert) => {
  let article = txtgen.article();
  assert.ok(bella.isString(article) && article.length > 0, 'An article must be created');
  assert.end();
});
