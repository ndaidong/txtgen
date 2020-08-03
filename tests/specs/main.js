/**
 * Testing
 * @ndaidong
 */

const test = require('tap').test;
const {
  isString,
  isFunction,
  hasProperty,
  genid,
  equals,
} = require('bellajs');

const {
  variants,
} = require('../config');

const LIMIT = 30;

const hasContent = (s) => {
  return isString(s) && s.length > 0;
};

const hasMethods = (o) => {
  const structure = [
    'sentence',
    'paragraph',
    'article',
    'addNouns',
    'addAdjectives',
    'addTemplates',
    'setNouns',
    'setAdjectives',
    'setTemplates',
    'getNouns',
    'getAdjectives',
    'getTemplates',
  ];

  return structure.every((k) => {
    return hasProperty(o, k) && isFunction(o[k]);
  });
};

const checkAllVariants = (txtgen) => {
  test('Testing txtgen object:', (assert) => {
    assert.ok(hasMethods(txtgen), 'txtgen must have required methods.');
    assert.end();
  });

  test('txtgen.sentence():', (assert) => {
    for (let i = 0; i < LIMIT; i++) {
      const sentence = txtgen.sentence();
      assert.ok(hasContent(sentence), 'A sentence must be created');
    }
    assert.end();
  });

  test('txtgen.paragraph():', (assert) => {
    for (let i = 0; i < LIMIT; i++) {
      const paragraph = txtgen.paragraph();
      assert.ok(hasContent(paragraph), 'A paragraph must be created');
    }
    assert.end();
  });

  test('txtgen.article():', (assert) => {
    for (let i = 0; i < LIMIT; i++) {
      const article = txtgen.article();
      assert.ok(hasContent(article), 'An article must be created');
    }
    assert.end();
  });

  test('txtgen.addNouns():', (assert) => {
    const count = txtgen.addNouns([
      genid(),
      genid(),
      genid(),
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
    const count = txtgen.addAdjectives([genid(), genid(), genid(), genid()]);
    assert.equals(count, 195, 'After adding 4 items => 195 adjectives');
    assert.end();
  });

  test('txtgen.addTemplates():', (assert) => {
    const count = txtgen.addTemplates([genid(), genid(), genid()]);
    assert.equals(count, 32, 'After adding 3 items => 32 adjectives');
    assert.end();
  });

  test('txtgen.getNouns() and txtgen.setNouns():', (assert) => {
    const samples = [
      genid(),
      genid(),
      genid(),
    ];
    const count = txtgen.setNouns(samples);
    const nouns = txtgen.getNouns();
    assert.equals(count, 3, 'After set 3 items => 3 nouns');
    assert.ok(equals(nouns, samples), 'Now only just added nouns exist');
    assert.end();
  });

  test('txtgen.getAdjectives() and txtgen.setAdjectives():', (assert) => {
    const samples = [
      genid(),
      genid(),
      genid(),
    ];
    const count = txtgen.setAdjectives(samples);
    const adjectives = txtgen.getAdjectives();
    assert.equals(count, 3, 'After set 3 items => 3 adjectives');
    assert.ok(equals(adjectives, samples), 'Now only just added adjectives exist');
    assert.end();
  });

  test('txtgen.getTemplates() and txtgen.setTemplates():', (assert) => {
    const samples = [
      genid(),
      genid(),
      genid(),
    ];
    const count = txtgen.setTemplates(samples);
    const templates = txtgen.getTemplates();
    assert.equals(count, 3, 'After set 3 items => 3 templates');
    assert.ok(equals(templates, samples), 'Now only just added templates exist');
    assert.end();
  });
};

variants.map(checkAllVariants);
