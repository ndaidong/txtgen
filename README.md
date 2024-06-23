# txtgen

Lightweight util for generating random sentences, paragraphs and articles in
English. Inspired by [Sentencer](https://github.com/kylestetz/Sentencer) and
[metaphorpsum.com](http://metaphorpsum.com/).

[![NPM](https://badge.fury.io/js/txtgen.svg)](https://badge.fury.io/js/txtgen)
[![CI test](https://github.com/ndaidong/txtgen/workflows/ci-test/badge.svg)](https://github.com/ndaidong/txtgen/actions)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/txtgen/badge.svg)](https://coveralls.io/github/ndaidong/txtgen)
![CodeQL](https://github.com/ndaidong/txtgen/workflows/CodeQL/badge.svg)

# Demo

- [Want to see how it works?](https://ndaidong.github.io/txtgen/)

## Setup & Usage

### Deno

```sh
deno add @ndaidong/txtgen

# npm (use any of npx, yarn dlx, pnpm dlx, or bunx)
npx jsr add @ndaidong/txtgen
```

```ts
import { sentence } from "@ndaidong/txtgen";

for (let i = 0; i < 5; i++) {
  console.log(sentence());
}
```

You can use JSR packages without an install step using `jsr:` specifiers:

```ts
import { sentence } from "jsr:@ndaidong/txtgen";

for (let i = 0; i < 5; i++) {
  console.log(sentence());
}
```

You can also use `npm:` specifiers as before:

```ts
import { sentence } from "npm:@ndaidong/txtgen";

for (let i = 0; i < 5; i++) {
  console.log(sentence());
}
```

Or import from esm.sh

```ts
import { sentence } from "https://esm.sh/@ndaidong/txtgen";

for (let i = 0; i < 5; i++) {
  console.log(sentence());
}
```

### Node.js & Bun

```bash
npm i @ndaidong/txtgen
# pnpm
pnpm i @ndaidong/txtgen
# yarn
yarn add @ndaidong/txtgen
# bun
bun add @ndaidong/txtgen
```

```js
import { sentence } from "@ndaidong/txtgen";

for (let i = 0; i < 5; i++) {
  console.log(sentence());
}
```

You can also use CJS style:

```js
const { sentence } = require("@ndaidong/txtgen");

for (let i = 0; i < 5; i++) {
  console.log(sentence());
}
```

### Browsers:

```html
<script type="module">
import { sentence } from "https://esm.sh/@ndaidong/txtgen";
// import { sentence } from 'https://unpkg.com/@ndaidong/txtgen/esm/mod.js';

for (let i = 0; i < 5; i++) {
  console.log(sentence());
}
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
- `.lorem([Number min [, Number max]])`

As their name suggests, we have 4 groups of methods:

- `sentence()`, `paragraph()`, `article()`: generate text by given grammatical
  unit
- `addNouns()`, `addAdjectives()`, `addTemplates()`: add more samples to current
  sample set
- `setNouns()`, `setAdjectives()`, `setTemplates()`: replace current sample set
  with new ones
- `getNouns()`, `getAdjectives()`, `getTemplates()`: get current sample set

The `set*` and `get*` methods were added in v2.2.3 to help you customize your
sample data.

In addition, we've added `lorem()` method since v3.0.5 to generate lorem ipsum
text.

### Template

If you want to add more kinds of sentences, just use the `.addTemplates()`
method; it expects a list of sentence templates. Each sentence template is an
English sentence, containing placeholders that can be replaced with any
alternative word.

For example:

```js
import { addTemplates } from "@ndaidong/txtgen";

const templates = [
  "{{a_noun}} is {{a_noun}} from the right perspective",
  "the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}",
];

addTemplates(templates);
```

Here are the available placeholders:

- `noun`
- `nouns`
- `a_noun`
- `adjective`
- `an_adjective`

### Lorem ipsum

Syntax:

```js
lorem() // generate a random phrase with length from 2 to 24 words of lorem ipsum
lorem(Number min) // set the minimum number of words
lorem(Number min, Number max)// set the minimum/maximum number of words
```

Example:

```js
import { lorem } from "@ndaidong/txtgen";

const phrase = lorem();
console.log(phrase); // => nisi blandit feugiat tempus imperdiet etiam eu mus augue
```

## Development

Since v4.x.x, we switched to [Deno](https://docs.deno.com/runtime/manual/)
platform, and use [DNT](https://github.com/denoland/dnt) to build Node.js
packages.

```bash
git clone https://github.com/ndaidong/txtgen.git
cd txtgen

# test
deno test

# build npm packages
deno task build

cd npm
node test_runner.js
```

# License

The MIT License (MIT)

---
