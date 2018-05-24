# txtgen
Lightweight util for generating random sentences, paragraphs and articles in English. Inspired by [Sentencer](https://github.com/kylestetz/Sentencer) and [metaphorpsum.com](http://metaphorpsum.com/).

[![NPM](https://badge.fury.io/js/txtgen.svg)](https://badge.fury.io/js/txtgen)
[![Build Status](https://travis-ci.org/ndaidong/txtgen.svg?branch=master)](https://travis-ci.org/ndaidong/txtgen)


# Demo

[See how it works?](http://ndaidong.github.io/txtgen/)


## Setup

- Node.js

  ```
  npm install txtgen
  ```

- CDN

  - [txtgen.js](https://cdn.rawgit.com/ndaidong/txtgen/master/dist/txtgen.js)
  - [txtgen.min.js](https://cdn.rawgit.com/ndaidong/txtgen/master/dist/txtgen.min.js)
  - [txtgen.min.map](https://cdn.rawgit.com/ndaidong/txtgen/master/dist/txtgen.min.map)

- Also supports ES6 Module, CommonJS, AMD and UMD style.


### Usage

```
var txtgen = require('txtgen');

let sentence = txtgen.sentence();
console.log(sentence);

let paragraph = txtgen.paragraph();
console.log(paragraph);

let article = txtgen.article();
console.log(article);
```

## APIs

 - .sentence()
 - .paragraph([Number totalSentences])
 - .article([Number totalParagraphs])
 - .addNouns(Array nouns)
 - .addAdjectives(Array adjectives)
 - .addTemplates(Array sentenceTemplates)

### Template

If you want to add more kinds of sentence, just use `.addTemplates()` method. It expects a list of sentence templates.
Each of sentence template is an English sentence, with the placeholders that can be replaced with any alternative word.


For example:

```
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

```
git clone https://github.com/ndaidong/txtgen.git
cd txtgen
npm install
npm test
```

# License

The MIT License (MIT)
