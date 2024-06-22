// mod.ts

import { phrases, sentenceTemplates } from "./utils/sample.ts";

import {
  generator,
  pickLastPunc,
  rand,
  randfloat,
  randint,
} from "./utils/helper.ts";

export { generate as lorem } from "./utils/lorem.ts";

export {
  addAdjectives,
  addNouns,
  addTemplates,
  getAdjectives,
  getNouns,
  getTemplates,
  setAdjectives,
  setNouns,
  setTemplates,
} from "./utils/sample.ts";

const actions: string[] = [
  "noun",
  "a_noun",
  "nouns",
  "adjective",
  "an_adjective",
];

const trim = (s: string): string => {
  return s.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    .replace(/\r?\n|\r/g, " ")
    .replace(/\s\s+|\r/g, " ");
};

const runGenerator = (action: string) => {
  return generator[action as keyof typeof generator]();
};

const make = (template: string): string => {
  let sentence = String(template);
  const occurrences = template.match(/\{\{(.+?)\}\}/g);

  if (occurrences && occurrences.length) {
    for (let i = 0; i < occurrences.length; i++) {
      const action = trim(occurrences[i].replace("{{", "").replace("}}", ""));
      let result = actions.includes(action) ? runGenerator(action) : "";
      sentence = sentence.replace(occurrences[i], result);
    }
  }
  return sentence;
};

const randomStartingPhrase = (): string => {
  if (randfloat() < 0.33) {
    return rand(phrases);
  }
  return "";
};

const makeSentenceFromTemplate = (): string => {
  return make(rand(sentenceTemplates));
};

export const sentence = (ignoreStartingPhrase: boolean = false): string => {
  const phrase = ignoreStartingPhrase ? "" : randomStartingPhrase();
  let s = phrase + makeSentenceFromTemplate();
  s = s.charAt(0).toUpperCase() + s.slice(1);
  s += pickLastPunc();
  return s;
};

export const paragraph = (len: number = 0): string => {
  if (!len) {
    len = randint(3, 10);
  }
  const t = Math.min(len, 15);
  const a = [];
  while (a.length < t) {
    const s = sentence();
    a.push(s);
  }
  return a.join(" ");
};

export const article = (len: number = 0): string => {
  if (!len) {
    len = randint(3, 10);
  }
  const t = Math.min(len, 15);
  const a = [];
  while (a.length < t) {
    const s = paragraph();
    a.push(s);
  }
  return a.join("\n\n");
};
