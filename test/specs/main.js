/**
 * Testing
 * @ndaidong
 */

var path = require('path');
var test = require('tape');
var bella = require('bellajs');

var rootDir = '../../src/';
var txtgen = require(path.join(rootDir, 'main'));

const LIMIT = 30;

var hasContent = (s) => {
  return bella.isString(s) && s.length > 0;
};

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
  for (let i = 0; i < LIMIT; i++) {
    let sentence = txtgen.sentence();
    assert.ok(hasContent(sentence), 'A sentence must be created');
  }
  assert.end();
});

test('txtgen.paragraph():', (assert) => {
  for (let i = 0; i < LIMIT; i++) {
    let paragraph = txtgen.paragraph();
    assert.ok(hasContent(paragraph), 'A paragraph must be created');
  }
  assert.end();
});

test('txtgen.article():', (assert) => {
  for (let i = 0; i < LIMIT; i++) {
    let article = txtgen.article();
    assert.ok(hasContent(article), 'An article must be created');
  }
  assert.end();
});

test('txtgen.addNouns():', (assert) => {
  let count = txtgen.addNouns([
    bella.createId(),
    bella.createId(),
    bella.createId(),
    'file',
    'class',
    'family',
    'profile',
    'glass',
    'smile'
  ]);
  assert.equals(count, 91, 'After adding 9 items => 91 nouns');
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
