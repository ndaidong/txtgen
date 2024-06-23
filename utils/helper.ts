// utils -> helper.ts

import { adjectives, nouns, vowels } from "./sample.ts";

const crypto = globalThis.crypto;

export const randint = (min: number = 0, max: number = 1e6): number => {
  const byteArray = new Uint8Array(1);
  crypto.getRandomValues(byteArray);
  const floatNum = Number("0." + byteArray[0].toString());
  return Math.floor(floatNum * (max - min + 1)) + min;
};

export const randfloat = (): number => {
  return randint(1, 999) / 1000;
};

export const rand = (a: string[]): string => {
  let w;
  while (!w) {
    w = a[randint(0, a.length - 1)];
  }
  return w;
};

export const pickLastPunc = () => {
  const a = ".......!?!?;...".split("");
  return rand(a);
};

export const pluralize = (word: string): string => {
  if (word.endsWith("s")) {
    return word;
  }
  if (word.match(/(ss|ish|ch|x|us)$/)) {
    word += "e";
  } else if (
    word.endsWith("y") && !vowels.includes(word.charAt(word.length - 2))
  ) {
    word = word.slice(0, word.length - 1);
    word += "ie";
  }
  return word + "s";
};

export const normalize = (word: string): string => {
  let a = "a";
  if (word.match(/^(a|e|heir|herb|hour|i|o)/)) {
    a = "an";
  }
  return `${a} ${word}`;
};

export const generator = {
  noun: (): string => {
    return rand(nouns);
  },
  a_noun: (): string => {
    return normalize(rand(nouns));
  },
  nouns: (): string => {
    return pluralize(rand(nouns));
  },
  adjective: (): string => {
    return rand(adjectives);
  },
  an_adjective: (): string => {
    return normalize(rand(adjectives));
  },
};
