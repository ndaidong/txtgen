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
    'article',
    'addNouns',
    'addAdjectives',
    'addTemplates'
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

test('txtgen.addNouns():', (assert) => {
  let count = txtgen.addNouns([
    bella.createId(),
    bella.createId(),
    bella.createId(),
    'file',
    'class',
    'family'
  ]);
  assert.equals(count, 88, 'After adding 6 items => 88 nouns');
  assert.end();
});

test('txtgen.addAdjectives():', (assert) => {
  let count = txtgen.addAdjectives([bella.createId(), bella.createId(), bella.createId(), bella.createId()]);
  assert.equals(count, 195, 'After adding 4 items => 195 adjectives');
  assert.end();
});

test('txtgen.addTemplates():', (assert) => {
  let count = txtgen.addTemplates([bella.createId(), bella.createId(), bella.createId()]);
  assert.equals(count, 32, 'After adding 3 items => 32 adjectives');
  assert.end();
});
