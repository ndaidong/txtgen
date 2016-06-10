# txtgen
Util for generating random sentences, paragraphs and articles in English. Inspired by [Sentencer](https://github.com/kylestetz/Sentencer) and [metaphorpsum.com](http://metaphorpsum.com/).

This library is very lightweight to use at client side. Just about 160B gzip or 7KB minified!

[![NPM](https://badge.fury.io/js/txtgen.svg)](https://badge.fury.io/js/txtgen)
![Travis](https://travis-ci.org/ndaidong/txtgen.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/txtgen/badge.svg?branch=master&noop)](https://coveralls.io/github/ndaidong/txtgen?branch=master)
![devDependency Status](https://david-dm.org/ndaidong/txtgen.svg)
[![Known Vulnerabilities](https://snyk.io/test/npm/txtgen/badge.svg)](https://snyk.io/test/npm/txtgen)


# Demo

[How does it work?](http://ndaidong.github.io/txtgen/).


# Setup

##### Node.js

```
npm install txtgen --save
```

##### SystemJS

```
System.config({
  baseUrl: '/path/to/js/folder',
  map: {
    txtgen: 'txtgen.min'
  }
});

System.import('txtgen').then((txtgen) => {
  // use txtgen here
});
```

##### RequireJS

```
require.config({
  baseUrl: '/path/to/js/folder',
  paths: {
    txtgen: 'txtgen.min'
  }
});

requirejs('txtgen', (txtgen) => {
  // use txtgen here
});

```


##### CDN

```
<script type="text/javascript" src="https://cdn.rawgit.com/ndaidong/txtgen/master/dist/txtgen.min.js"></script>
```

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

# Test

```
git clone https://github.com/ndaidong/txtgen.git
cd txtgen
npm install
npm test
```

# License

The MIT License (MIT)
