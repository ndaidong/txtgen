# txtgen
Lightweight util for generating random sentences, paragraphs and articles in English. Inspired by [Sentencer](https://github.com/kylestetz/Sentencer) and [metaphorpsum.com](http://metaphorpsum.com/).

[![NPM](https://badge.fury.io/js/txtgen.svg)](https://badge.fury.io/js/txtgen)
[![CI test](https://github.com/ndaidong/txtgen/workflows/ci-test/badge.svg)](https://github.com/ndaidong/txtgen/actions)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/txtgen/badge.svg)](https://coveralls.io/github/ndaidong/txtgen)
![CodeQL](https://github.com/ndaidong/txtgen/workflows/CodeQL/badge.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


# Demo

[Want to see how it works?](https://ndaidong.github.io/txtgen/)


## Setup

- Node.js

  ```bash
  npm i txtgen

  # pnpm
  pnpm i txtgen

  # yarn
  yarn add txtgen
  ```

- CDN

  - ES6 Module: [txtgen.esm.js](https://unpkg.com/txtgen/dist/txtgen.esm.js)
  - CommonJS: [txtgen.js](https://unpkg.com/txtgen/dist/cjs/txtgen.js)
  - For old browsers: [txtgen.min.js](https://unpkg.com/txtgen/dist/txtgen.min.js)


## Usage

### Node.js:

```js
import {
  sentence
} from 'txtgen'

// with CommonJS environment
// const { sentence } = require('txtgen/dist/cjs/txtgen.js')

sentence()
```

### Browsers:

Currently, ECMAScript modules work fine on almost all browsers:

```html
<script type="module">
import { sentence } from 'https://unpkg.com/txtgen/dist/txtgen.esm.js'
console.log(sentence())
</script>
```

With outdated browsers, we can use the traditional method:

```html
<script type="text/javascript" src="https://unpkg.com/txtgen/dist/txtgen.min.js"></script>

<script>
console.log(window.txtgen.sentence())
</script>
```

## APIs

 - `.sentence()`
 - `.paragraph([Number totalSentences])`
 - `.article([Number totalParagraphs])`
 - `.addNouns(Array nouns)`
 - `.addAdjectives(Array adjectives)`
 - `.addTemplates(Array sentenceTemplates)`
 - `.setNouns(Array nouns)`
 - `.setAdjectives(Array adjectives)`
 - `.setTemplates(Array sentenceTemplates)`
 - `.getNouns()`
 - `.getAdjectives()`
 - `.getTemplates()`


As their name suggests, we have 4 groups of methods:

- `sentence()`, `paragraph()`, `article()`: generate text by given grammatical unit
- `addNouns()`, `addAdjectives()`, `addTemplates()`: add more samples to current sample set
- `setNouns()`, `setAdjectives()`, `setTemplates()`: replace current sample set with new ones
- `getNouns()`, `getAdjectives()`, `getTemplates()`: get current sample set


The `set*` and `get*` methods were added in v2.2.3 to help you customize your sample data.


### Template

If you want to add more kinds of sentences, just use the `.addTemplates()` method; it expects a list of sentence templates.
Each sentence template is an English sentence, containing placeholders that can be replaced with any alternative word.


For example:

```js
import {
  addTemplates
} from 'txtgen'

const templates = [
  '{{a_noun}} is {{a_noun}} from the right perspective',
  'the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}'
]

addTemplates(templates)
```

Here are the available placeholders:

- `noun`
- `nouns`
- `a_noun`
- `adjective`
- `an_adjective`


## Test

```bash
git clone https://github.com/ndaidong/txtgen.git
cd txtgen
npm install
npm test
```

# License

The MIT License (MIT)
