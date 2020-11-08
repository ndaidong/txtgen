# txtgen
Lightweight util for generating random sentences, paragraphs and articles in English. Inspired by [Sentencer](https://github.com/kylestetz/Sentencer) and [metaphorpsum.com](http://metaphorpsum.com/).

[![NPM](https://badge.fury.io/js/txtgen.svg)](https://badge.fury.io/js/txtgen)
[![CI test](https://github.com/ndaidong/txtgen/workflows/ci-test/badge.svg)](https://github.com/ndaidong/txtgen/actions)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/txtgen/badge.svg)](https://coveralls.io/github/ndaidong/txtgen)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ndaidong_txtgen&metric=alert_status)](https://sonarcloud.io/dashboard?id=ndaidong_txtgen)


# Demo

[See how it works?](http://ndaidong.github.io/txtgen/)


## Setup

- Node.js

  ```bash
  npm i txtgen
  ```

- CDN

  - [txtgen.js](https://unpkg.com/txtgen/dist/txtgen.js)
  - [txtgen.min.js](https://unpkg.com/txtgen/dist/txtgen.min.js)
  - [txtgen.min.map](https://unpkg.com/txtgen/dist/txtgen.min.map)


- Also supports ES6 Module, CommonJS, AMD and UMD style.


### Usage

```js
const txtgen = require('txtgen');

const sentence = txtgen.sentence();
console.log(sentence);

const paragraph = txtgen.paragraph();
console.log(paragraph);

const article = txtgen.article();
console.log(article);
```

## APIs

 - .sentence()
 - .paragraph([Number totalSentences])
 - .article([Number totalParagraphs])
 - .addNouns(Array nouns)
 - .addAdjectives(Array adjectives)
 - .addTemplates(Array sentenceTemplates)
 - .setNouns(Array nouns)
 - .setAdjectives(Array adjectives)
 - .setTemplates(Array sentenceTemplates)
 - .getNouns()
 - .getAdjectives()
 - .getTemplates()


As their name means, we have 4 groups of methods:

- `sentence()`, `paragraph()`, `article()`: generate text by given grammatical unit
- `addNouns()`, `addAdjectives()`, `addTemplates()`: add more samples to current sample set
- `setNouns()`, `setAdjectives()`, `setTemplates()`: replace current sample set with new ones
- `getNouns()`, `getAdjectives()`, `getTemplates()`: get current sample set


The `set*` and `get*` methods were added since v2.2.3 to help you customize your sample data.


### Template

If you want to add more kinds of sentence, just use `.addTemplates()` method. It expects a list of sentence templates.
Each of sentence template is an English sentence, with the placeholders that can be replaced with any alternative word.


For example:

```js
import {
  addTemplates
} from 'txtgen';

let templates = [
  '{{a_noun}} is {{a_noun}} from the right perspective',
  'the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}'
];

addTemplates(templates);
```

Here are the available placeholders:

- noun
- nouns
- a_noun
- adjective
- an_adjective


## Test

```bash
git clone https://github.com/ndaidong/txtgen.git
cd txtgen
npm install
npm test
```

# License

The MIT License (MIT)
