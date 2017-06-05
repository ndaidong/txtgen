# txtgen
Lightweight util for generating random sentences, paragraphs and articles in English. Inspired by [Sentencer](https://github.com/kylestetz/Sentencer) and [metaphorpsum.com](http://metaphorpsum.com/).

[![NPM](https://badge.fury.io/js/txtgen.svg)](https://badge.fury.io/js/txtgen)
[![Build Status](https://travis-ci.org/ndaidong/txtgen.svg?branch=master)](https://travis-ci.org/ndaidong/txtgen)
[![codecov](https://codecov.io/gh/ndaidong/txtgen/branch/master/graph/badge.svg)](https://codecov.io/gh/ndaidong/txtgen)
[![Dependency Status](https://gemnasium.com/badges/github.com/ndaidong/txtgen.svg)](https://gemnasium.com/github.com/ndaidong/txtgen)
[![NSP Status](https://nodesecurity.io/orgs/techpush/projects/1b2672cb-6712-436d-bd2c-c122892775bb/badge)](https://nodesecurity.io/orgs/techpush/projects/1b2672cb-6712-436d-bd2c-c122892775bb)


# Demo

[See how it works?](http://ndaidong.github.io/txtgen/)


## Setup

- Node.js

  ```
  npm install txtgen --save
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
 - .addNouns([Array nouns])
 - .addAdjectives([Array adjectives])
 - .addTemplates([Array sentenceTemplates])

## Test

```
git clone https://github.com/ndaidong/txtgen.git
cd txtgen
npm install
npm test
```

# License

The MIT License (MIT)
