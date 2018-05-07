/**
 * txtgen
 * @ndaidong
**/

import {
  nouns,
  adjectives,
  sentenceTemplates,
  phrases,
} from './sample';

import {
  random,
  rand,
  pickLastPunc,
  pluralize,
  normalize,
} from './util';

export {
  addNouns,
  addAdjectives,
  addTemplates,
} from './sample';

let actions = [
  'noun', 'a_noun', 'nouns',
  'adjective', 'an_adjective',
];

const generator = {
  noun: () => {
    return rand(nouns);
  },
  a_noun: () => { // eslint-disable-line camelcase
    return normalize(rand(nouns));
  },
  nouns: () => {
    return pluralize(rand(nouns));
  },
  adjective: () => {
    return rand(adjectives);
  },
  an_adjective: () => { // eslint-disable-line camelcase
    return normalize(rand(adjectives));
  },
};

const trim = (s) => {
  return s.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '')
    .replace(/\r?\n|\r/g, ' ')
    .replace(/\s\s+|\r/g, ' ');
};

const make = (template) => {
  let sentence = template;
  let occurrences = template.match(/\{\{(.+?)\}\}/g);

  if (occurrences && occurrences.length) {
    for (let i = 0; i < occurrences.length; i++) {
      let action = trim(occurrences[i].replace('{{', '').replace('}}', ''));
      let result;
      if (actions.includes(action)) {
        result = generator[action]();
      }
      sentence = sentence.replace(occurrences[i], result);
    }
  }
  return sentence;
};

const randomStartingPhrase = () => {
  if (Math.random() < 0.33) {
    return rand(phrases);
  }
  return '';
};

const makeSentenceFromTemplate = () => {
  return make(rand(sentenceTemplates));
};

export const sentence = () => {
  let phrase = randomStartingPhrase();
  let s = phrase + makeSentenceFromTemplate();
  s = s.charAt(0).toUpperCase() + s.slice(1);
  s += pickLastPunc();
  return s;
};

export const paragraph = (len = 0) => {
  if (!len) {
    len = random(3, 10);
  }
  let t = Math.min(len, 15);
  let a = [];
  while (a.length < t) {
    let s = sentence();
    a.push(s);
  }
  return a.join(' ');
};

export const article = (len = 0) => {
  if (!len) {
    len = random(3, 10);
  }
  let t = Math.min(len, 15);
  let a = [];
  while (a.length < t) {
    let s = paragraph();
    a.push(s);
  }
  return a.join('\n\n');
};
