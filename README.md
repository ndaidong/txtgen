# txtgen
Lightweight util for generating random sentences, paragraphs and articles in English. Inspired by [Sentencer](https://github.com/kylestetz/Sentencer) and [metaphorpsum.com](http://metaphorpsum.com/).

[![NPM](https://badge.fury.io/js/txtgen.svg)](https://badge.fury.io/js/txtgen)
![Travis](https://travis-ci.org/ndaidong/txtgen.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/txtgen/badge.svg?branch=master&noop)](https://coveralls.io/github/ndaidong/txtgen?branch=master)
![devDependency Status](https://david-dm.org/ndaidong/txtgen.svg)
[![Known Vulnerabilities](https://snyk.io/test/npm/txtgen/badge.svg)](https://snyk.io/test/npm/txtgen)


# Demo

[See how it works?](http://ndaidong.github.io/txtgen/)


## Setup

- Node.js

  ```
  npm install txtgen --save
  ```

- CDN

  [txtgen.min.js](https://cdn.rawgit.com/ndaidong/txtgen/master/dist/txtgen.min.js)

  ```
  <script type="text/javascript" src="https://cdn.rawgit.com/ndaidong/txtgen/master/dist/txtgen.min.js"></script>
  ```

- This library also supports ES6 Module, AMD and UMD style.


# Usage

```
var txtgen = require('txtgen');

let sentence = txtgen.sentence();
console.log(sentence);

let paragraph = txtgen.paragraph();
console.log(paragraph);

let article = txtgen.article();
console.log(article);
```

# APIs

 - .sentence()
 - .paragraph([Number totalSentences])
 - .article([Number totalParagraphs])
 - .addNouns([Array nouns])
 - .addAdjectives([Array adjectives])
 - .addTemplates([Array sentenceTemplates])

# Test

```
git clone https://github.com/ndaidong/txtgen.git
cd txtgen
npm install
npm test
```

# License

The MIT License (MIT)
