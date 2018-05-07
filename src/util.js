// utils

import {
  vowels,
} from './sample';

export const unique = (a) => {
  let r = [];
  for (let i = 0; i < a.length; i++) {
    if (r.indexOf(a[i]) === -1) {
      r.push(a[i]);
    }
  }
  return r;
};

export const random = (min, max) => {
  let offset = min;
  let range = max - min + 1;
  let rd = Math.floor(Math.random() * range) + offset;
  return rd;
};

export const rand = (a) => {
  let w;
  while (!w) {
    w = a[random(0, a.length - 1)];
  }
  return w;
};

export const pickLastPunc = () => {
  let a = '.......!?!?;...'.split('');
  return rand(a);
};

export const pluralize = (word) => {
  if (word.endsWith('s')) {
    return word;
  }
  if (word.match(/(ss|ish|ch|x|us)$/)) {
    word += 'e';
  } else if (word.endsWith('y') && !vowels.includes(word.charAt(word.length - 2))) {
    word = word.slice(0, word.length - 1);
    word += 'ie';
  }
  return word + 's';
};

export const normalize = (word) => {
  let a = 'a';
  if (word.match(/^(a|e|i|o)/)) {
    a = 'an';
  }
  return `${a} ${word}`;
};
