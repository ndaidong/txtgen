/**
 * Testing
 * @ndaidong
 */

const test = require('tap').test;
const {
  isString,
  isFunction,
  isObject,
  hasProperty,
  createId,
} = require('bellajs');

const full = require('../../dist/txtgen');
const min = require('../../dist/txtgen.min');

const LIMIT = 30;

const hasContent = (s) => {
  return isString(s) && s.length > 0;
};

const hasMethods = (o) => {
  let structure = [
    'sentence',
    'paragraph',
    'article',
    'addNouns',
    'addAdjectives',
    'addTemplates',
  ];

  return structure.every((k) => {
    return hasProperty(o, k) && isFunction(o[k]);
  });
};

const checkAllVariants = (txtgen) => {
  test('Testing txtgen object:', (assert) => {
    assert.ok(isObject(txtgen), 'txtgen must be an object.');
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
      createId(),
      createId(),
      createId(),
      'file',
      'class',
      'family',
      'profile',
      'glass',
      'smile',
    ]);
    assert.equals(count, 91, 'After adding 9 items => 91 nouns');
    assert.end();
  });

  test('txtgen.addAdjectives():', (assert) => {
    let count = txtgen.addAdjectives([createId(), createId(), createId(), createId()]);
    assert.equals(count, 195, 'After adding 4 items => 195 adjectives');
    assert.end();
  });

  test('txtgen.addTemplates():', (assert) => {
    let count = txtgen.addTemplates([createId(), createId(), createId()]);
    assert.equals(count, 32, 'After adding 3 items => 32 adjectives');
    assert.end();
  });
};

[full, min].map(checkAllVariants);

