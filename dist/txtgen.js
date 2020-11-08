/**
 * txtgen@2.2.8
 * built on: Sun, 08 Nov 2020 08:54:01 GMT
 * repository: https://github.com/ndaidong/txtgen
 * maintainer: @ndaidong
 * License: MIT
**/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.txtgen = {}));
}(this, (function (exports) {
  const now = () => {
    return new Date();
  };
  const tzone = now().getTimezoneOffset();
  const tz = (() => {
    const z = Math.abs(tzone / 60);
    const sign = tzone < 0 ? '+' : '-';
    return ['GMT', sign, String(z).padStart(4, '0')].join('');
  })();

  const unique = (arr = []) => {
    return [...new Set(arr)];
  };

  var nouns = [ 'alligator', 'ant', 'bear', 'bee', 'bird', 'camel', 'cat', 'cheetah', 'chicken', 'chimpanzee', 'cow', 'crocodile', 'deer', 'dog', 'dolphin', 'duck', 'eagle', 'elephant', 'fish', 'fly', 'fox', 'frog', 'giraffe', 'goat', 'goldfish', 'hamster', 'hippopotamus', 'horse', 'kangaroo', 'kitten', 'lion', 'lobster', 'monkey', 'octopus', 'owl', 'panda', 'pig', 'puppy', 'rabbit', 'rat', 'scorpion', 'seal', 'shark', 'sheep', 'snail', 'snake', 'spider', 'squirrel', 'tiger', 'turtle', 'wolf', 'zebra', 'apple', 'apricot', 'banana', 'blackberry', 'blueberry', 'cherry', 'cranberry', 'currant', 'fig', 'grape', 'grapefruit', 'grapes', 'kiwi', 'kumquat', 'lemon', 'lime', 'melon', 'nectarine', 'orange', 'peach', 'pear', 'persimmon', 'pineapple', 'plum', 'pomegranate', 'prune', 'raspberry', 'strawberry', 'tangerine', 'watermelon' ];
  var adjectives = [ 'adaptable', 'adventurous', 'affable', 'affectionate', 'agreeable', 'alert', 'alluring', 'ambitious', 'ambitious', 'amiable', 'amicable', 'amused', 'amusing', 'boundless', 'brave', 'brave', 'bright', 'bright', 'broad-minded', 'calm', 'calm', 'capable', 'careful', 'charming', 'charming', 'cheerful', 'coherent', 'comfortable', 'communicative', 'compassionate', 'confident', 'conscientious', 'considerate', 'convivial', 'cooperative', 'courageous', 'courageous', 'courteous', 'creative', 'credible', 'cultured', 'dashing', 'dazzling', 'debonair', 'decisive', 'decisive', 'decorous', 'delightful', 'detailed', 'determined', 'determined', 'diligent', 'diligent', 'diplomatic', 'discreet', 'discreet', 'dynamic', 'dynamic', 'eager', 'easygoing', 'efficient', 'elated', 'eminent', 'emotional', 'enchanting', 'encouraging', 'endurable', 'energetic', 'energetic', 'entertaining', 'enthusiastic', 'enthusiastic', 'excellent', 'excited', 'exclusive', 'exuberant', 'exuberant', 'fabulous', 'fair', 'fair-minded', 'faithful', 'faithful', 'fantastic', 'fearless', 'fearless', 'fine', 'forceful', 'frank', 'frank', 'friendly', 'friendly', 'funny', 'funny', 'generous', 'generous', 'gentle', 'gentle', 'glorious', 'good', 'good', 'gregarious', 'happy', 'hard-working', 'harmonious', 'helpful', 'helpful', 'hilarious', 'honest', 'honorable', 'humorous', 'imaginative', 'impartial', 'impartial', 'independent', 'industrious', 'instinctive', 'intellectual', 'intelligent', 'intuitive', 'inventive', 'jolly', 'joyous', 'kind', 'kind', 'kind-hearted', 'knowledgeable', 'level', 'likeable', 'lively', 'lovely', 'loving', 'loving', 'loyal', 'lucky', 'mature', 'modern', 'modest', 'neat', 'nice', 'nice', 'obedient', 'optimistic', 'painstaking', 'passionate', 'patient', 'peaceful', 'perfect', 'persistent', 'philosophical', 'pioneering', 'placid', 'placid', 'plausible', 'pleasant', 'plucky', 'plucky', 'polite', 'powerful', 'practical', 'pro-active', 'productive', 'protective', 'proud', 'punctual', 'quick-witted', 'quiet', 'quiet', 'rational', 'receptive', 'reflective', 'reliable', 'relieved', 'reserved', 'resolute', 'resourceful', 'responsible', 'rhetorical', 'righteous', 'romantic', 'romantic', 'sedate', 'seemly', 'selective', 'self-assured', 'self-confident', 'self-disciplined', 'sensible', 'sensitive', 'sensitive', 'shrewd', 'shy', 'silly', 'sincere', 'sincere', 'skillful', 'smiling', 'sociable', 'splendid', 'steadfast', 'stimulating', 'straightforward', 'successful', 'succinct', 'sympathetic', 'talented', 'thoughtful', 'thoughtful', 'thrifty', 'tidy', 'tough', 'tough', 'trustworthy', 'unassuming', 'unbiased', 'understanding', 'unusual', 'upbeat', 'versatile', 'vigorous', 'vivacious', 'warm', 'warmhearted', 'willing', 'willing', 'wise', 'witty', 'witty', 'wonderful' ];
  var vowels = [
    'a', 'e', 'i', 'o', 'u', 'y'
  ];
  var sentenceTemplates = [
    'the {{noun}} is {{a_noun}}',
    '{{a_noun}} is {{an_adjective}} {{noun}}',
    'the first {{adjective}} {{noun}} is, in its own way, {{a_noun}}',
    'their {{noun}} was, in this moment, {{an_adjective}} {{noun}}',
    '{{a_noun}} is {{a_noun}} from the right perspective',
    'the literature would have us believe that {{an_adjective}} {{noun}} is not but {{a_noun}}',
    '{{an_adjective}} {{noun}} is {{a_noun}} of the mind',
    'the {{adjective}} {{noun}} reveals itself as {{an_adjective}} {{noun}} to those who look',
    'authors often misinterpret the {{noun}} as {{an_adjective}} {{noun}}, when in actuality it feels more like {{an_adjective}} {{noun}}',
    'we can assume that any instance of {{a_noun}} can be construed as {{an_adjective}} {{noun}}',
    'they were lost without the {{adjective}} {{noun}} that composed their {{noun}}',
    'the {{adjective}} {{noun}} comes from {{an_adjective}} {{noun}}',
    '{{a_noun}} can hardly be considered {{an_adjective}} {{noun}} without also being {{a_noun}}',
    'few can name {{an_adjective}} {{noun}} that isn\'t {{an_adjective}} {{noun}}',
    'some posit the {{adjective}} {{noun}} to be less than {{adjective}}',
    '{{a_noun}} of the {{noun}} is assumed to be {{an_adjective}} {{noun}}',
    '{{a_noun}} sees {{a_noun}} as {{an_adjective}} {{noun}}',
    'the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}',
    '{{a_noun}} is {{a_noun}}\'s {{noun}}',
    '{{a_noun}} is the {{noun}} of {{a_noun}}',
    '{{an_adjective}} {{noun}}\'s {{noun}} comes with it the thought that the {{adjective}} {{noun}} is {{a_noun}}',
    '{{nouns}} are {{adjective}} {{nouns}}',
    '{{adjective}} {{nouns}} show us how {{nouns}} can be {{nouns}}',
    'before {{nouns}}, {{nouns}} were only {{nouns}}',
    'those {{nouns}} are nothing more than {{nouns}}',
    'some {{adjective}} {{nouns}} are thought of simply as {{nouns}}',
    'one cannot separate {{nouns}} from {{adjective}} {{nouns}}',
    'the {{nouns}} could be said to resemble {{adjective}} {{nouns}}',
    '{{an_adjective}} {{noun}} without {{nouns}} is truly a {{noun}} of {{adjective}} {{nouns}}'
  ];
  var phrases = [
    'to be more specific, ',
    'in recent years, ',
    'however, ',
    'by the way',
    'of course, ',
    'some assert that ',
    'if this was somewhat unclear, ',
    'unfortunately, that is wrong; on the contrary, ',
    'it\'s very tricky, if not impossible, ',
    'this could be, or perhaps ',
    'this is not to discredit the idea that ',
    'we know that ',
    'it\'s an undeniable fact, really; ',
    'framed in a different way, ',
    'what we don\'t know for sure is whether or not ',
    'as far as we can estimate, ',
    'as far as he is concerned, ',
    'the zeitgeist contends that ',
    'though we assume the latter, ',
    'far from the truth, ',
    'extending this logic, ',
    'nowhere is it disputed that ',
    'in modern times ',
    'in ancient times ',
    'recent controversy aside, ',
    'washing and polishing the car,',
    'having been a gymnast, ',
    'after a long day at school and work, ',
    'waking to the buzz of the alarm clock, ',
    'draped neatly on a hanger, ',
    'shouting with happiness, '
  ];
  const addNouns = (ls = []) => {
    const a = nouns.concat(ls);
    nouns = unique(a);
    return nouns.length;
  };
  const addAdjectives = (ls = []) => {
    const a = adjectives.concat(ls);
    adjectives = unique(a);
    return adjectives.length;
  };
  const addTemplates = (ls = []) => {
    const a = sentenceTemplates.concat(ls);
    sentenceTemplates = unique(a);
    return sentenceTemplates.length;
  };
  const setNouns = (ls = []) => {
    nouns = unique(ls);
    return nouns.length;
  };
  const setAdjectives = (ls = []) => {
    adjectives = unique(ls);
    return adjectives.length;
  };
  const setTemplates = (ls = []) => {
    sentenceTemplates = unique(ls);
    return sentenceTemplates.length;
  };
  const getNouns = () => {
    return [...nouns];
  };
  const getAdjectives = () => {
    return [...adjectives];
  };
  const getTemplates = () => {
    return [...sentenceTemplates];
  };

  let random;
  const setRandom = (newRandom) => {
    random = newRandom;
  };
  setRandom(Math.random);
  const randfloat = () => random();
  const randint = (min, max) => {
    const offset = min;
    const range = max - min + 1;
    return Math.floor(randfloat() * range) + offset;
  };
  const rand = (a) => {
    let w;
    while (!w) {
      w = a[randint(0, a.length - 1)];
    }
    return w;
  };
  const pickLastPunc = () => {
    const a = '.......!?!?;...'.split('');
    return rand(a);
  };
  const pluralize = (word) => {
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
  const normalize = (word) => {
    let a = 'a';
    if (word.match(/^(a|e|i|o)/)) {
      a = 'an';
    }
    return `${a} ${word}`;
  };

  const actions = [
    'noun', 'a_noun', 'nouns',
    'adjective', 'an_adjective',
  ];
  const generator = {
    noun: () => {
      return rand(nouns);
    },
    a_noun: () => {
      return normalize(rand(nouns));
    },
    nouns: () => {
      return pluralize(rand(nouns));
    },
    adjective: () => {
      return rand(adjectives);
    },
    an_adjective: () => {
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
    const occurrences = template.match(/\{\{(.+?)\}\}/g);
    if (occurrences && occurrences.length) {
      for (let i = 0; i < occurrences.length; i++) {
        const action = trim(occurrences[i].replace('{{', '').replace('}}', ''));
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
    if (randfloat() < 0.33) {
      return rand(phrases);
    }
    return '';
  };
  const makeSentenceFromTemplate = () => {
    return make(rand(sentenceTemplates));
  };
  const sentence = () => {
    const phrase = randomStartingPhrase();
    let s = phrase + makeSentenceFromTemplate();
    s = s.charAt(0).toUpperCase() + s.slice(1);
    s += pickLastPunc();
    return s;
  };
  const paragraph = (len = 0) => {
    if (!len) {
      len = randint(3, 10);
    }
    const t = Math.min(len, 15);
    const a = [];
    while (a.length < t) {
      const s = sentence();
      a.push(s);
    }
    return a.join(' ');
  };
  const article = (len = 0) => {
    if (!len) {
      len = randint(3, 10);
    }
    const t = Math.min(len, 15);
    const a = [];
    while (a.length < t) {
      const s = paragraph();
      a.push(s);
    }
    return a.join('\n\n');
  };

  exports.addAdjectives = addAdjectives;
  exports.addNouns = addNouns;
  exports.addTemplates = addTemplates;
  exports.article = article;
  exports.getAdjectives = getAdjectives;
  exports.getNouns = getNouns;
  exports.getTemplates = getTemplates;
  exports.paragraph = paragraph;
  exports.sentence = sentence;
  exports.setAdjectives = setAdjectives;
  exports.setNouns = setNouns;
  exports.setRandom = setRandom;
  exports.setTemplates = setTemplates;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
