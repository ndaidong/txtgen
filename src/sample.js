// samples

import {
  unique,
} from './util';

/* eslint-disable */
export var nouns = [ 'alligator', 'ant', 'bear', 'bee', 'bird', 'camel', 'cat', 'cheetah', 'chicken', 'chimpanzee', 'cow', 'crocodile', 'deer', 'dog', 'dolphin', 'duck', 'eagle', 'elephant', 'fish', 'fly', 'fox', 'frog', 'giraffe', 'goat', 'goldfish', 'hamster', 'hippopotamus', 'horse', 'kangaroo', 'kitten', 'lion', 'lobster', 'monkey', 'octopus', 'owl', 'panda', 'pig', 'puppy', 'rabbit', 'rat', 'scorpion', 'seal', 'shark', 'sheep', 'snail', 'snake', 'spider', 'squirrel', 'tiger', 'turtle', 'wolf', 'zebra', 'apple', 'apricot', 'banana', 'blackberry', 'blueberry', 'cherry', 'cranberry', 'currant', 'fig', 'grape', 'grapefruit', 'grapes', 'kiwi', 'kumquat', 'lemon', 'lime', 'melon', 'nectarine', 'orange', 'peach', 'pear', 'persimmon', 'pineapple', 'plum', 'pomegranate', 'prune', 'raspberry', 'strawberry', 'tangerine', 'watermelon' ];
export var adjectives = [ 'adaptable', 'adventurous', 'affable', 'affectionate', 'agreeable', 'alert', 'alluring', 'ambitious', 'ambitious', 'amiable', 'amicable', 'amused', 'amusing', 'boundless', 'brave', 'brave', 'bright', 'bright', 'broad-minded', 'calm', 'calm', 'capable', 'careful', 'charming', 'charming', 'cheerful', 'coherent', 'comfortable', 'communicative', 'compassionate', 'confident', 'conscientious', 'considerate', 'convivial', 'cooperative', 'courageous', 'courageous', 'courteous', 'creative', 'credible', 'cultured', 'dashing', 'dazzling', 'debonair', 'decisive', 'decisive', 'decorous', 'delightful', 'detailed', 'determined', 'determined', 'diligent', 'diligent', 'diplomatic', 'discreet', 'discreet', 'dynamic', 'dynamic', 'eager', 'easygoing', 'efficient', 'elated', 'eminent', 'emotional', 'enchanting', 'encouraging', 'endurable', 'energetic', 'energetic', 'entertaining', 'enthusiastic', 'enthusiastic', 'excellent', 'excited', 'exclusive', 'exuberant', 'exuberant', 'fabulous', 'fair', 'fair-minded', 'faithful', 'faithful', 'fantastic', 'fearless', 'fearless', 'fine', 'forceful', 'frank', 'frank', 'friendly', 'friendly', 'funny', 'funny', 'generous', 'generous', 'gentle', 'gentle', 'glorious', 'good', 'good', 'gregarious', 'happy', 'hard-working', 'harmonious', 'helpful', 'helpful', 'hilarious', 'honest', 'honorable', 'humorous', 'imaginative', 'impartial', 'impartial', 'independent', 'industrious', 'instinctive', 'intellectual', 'intelligent', 'intuitive', 'inventive', 'jolly', 'joyous', 'kind', 'kind', 'kind-hearted', 'knowledgeable', 'level', 'likeable', 'lively', 'lovely', 'loving', 'loving', 'loyal', 'lucky', 'mature', 'modern', 'modest', 'neat', 'nice', 'nice', 'obedient', 'optimistic', 'painstaking', 'passionate', 'patient', 'peaceful', 'perfect', 'persistent', 'philosophical', 'pioneering', 'placid', 'placid', 'plausible', 'pleasant', 'plucky', 'plucky', 'polite', 'powerful', 'practical', 'pro-active', 'productive', 'protective', 'proud', 'punctual', 'quick-witted', 'quiet', 'quiet', 'rational', 'receptive', 'reflective', 'reliable', 'relieved', 'reserved', 'resolute', 'resourceful', 'responsible', 'rhetorical', 'righteous', 'romantic', 'romantic', 'sedate', 'seemly', 'selective', 'self-assured', 'self-confident', 'self-disciplined', 'sensible', 'sensitive', 'sensitive', 'shrewd', 'shy', 'silly', 'sincere', 'sincere', 'skillful', 'smiling', 'sociable', 'splendid', 'steadfast', 'stimulating', 'straightforward', 'successful', 'succinct', 'sympathetic', 'talented', 'thoughtful', 'thoughtful', 'thrifty', 'tidy', 'tough', 'tough', 'trustworthy', 'unassuming', 'unbiased', 'understanding', 'unusual', 'upbeat', 'versatile', 'vigorous', 'vivacious', 'warm', 'warmhearted', 'willing', 'willing', 'wise', 'witty', 'witty', 'wonderful' ];

export var vowels = [
  'a', 'e', 'i', 'o', 'u', 'y'
];

export var sentenceTemplates = [
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

export var phrases = [
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
/* eslint-enable */

export const addNouns = (ls = []) => {
  let a = nouns.concat(ls);
  nouns = unique(a);
  return nouns.length;
};

export const addAdjectives = (ls) => {
  let a = adjectives.concat(ls);
  adjectives = unique(a);
  return adjectives.length;
};

export const addTemplates = (ls) => {
  let a = sentenceTemplates.concat(ls);
  sentenceTemplates = unique(a);
  return sentenceTemplates.length;
};

