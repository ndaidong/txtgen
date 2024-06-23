import { assertEquals, assertNotEquals } from "assert";

import {
  addAdjectives,
  addNouns,
  addTemplates,
  adjectives,
  getAdjectives,
  getNouns,
  getTemplates,
  nouns,
  sentenceTemplates,
  setAdjectives,
  setNouns,
  setTemplates,
} from "../utils/sample.ts";

Deno.test("check if getNouns() return same as pre-defined nouns", () => {
  const val = getNouns();
  const lastIndex = val.length - 1;
  assertEquals(val.length, nouns.length);
  assertEquals(val[0], nouns[0]);
  assertEquals(val[9], nouns[9]);
  assertEquals(val[lastIndex], nouns[lastIndex]);
});

Deno.test("check if addNouns()/setNouns() affects to pre-defined nouns", () => {
  const preDefined = getNouns();
  setNouns(["one", "two", "three"]);
  const valAfterSetCall = getNouns();
  assertNotEquals(valAfterSetCall.length, preDefined.length);
  assertEquals(valAfterSetCall.length, 3);
  assertEquals(valAfterSetCall[1], "two");

  addNouns(["four", "five", "six"]);
  const valAfterAddCall = getNouns();
  assertEquals(valAfterAddCall.length > valAfterSetCall.length, true);
  assertEquals(valAfterAddCall.includes("four"), true);
  assertEquals(valAfterAddCall.includes("six"), true);
});

Deno.test("check if getAdjectives() return same as pre-defined adjectives", () => {
  const val = getAdjectives();
  const lastIndex = val.length - 1;
  assertEquals(val.length, adjectives.length);
  assertEquals(val[0], adjectives[0]);
  assertEquals(val[9], adjectives[9]);
  assertEquals(val[lastIndex], adjectives[lastIndex]);
});

Deno.test("check if addAdjectives()/setAdjectives() affects to pre-defined adjectives", () => {
  const preDefined = getAdjectives();
  setAdjectives(["black", "white", "yellow"]);
  const valAfterSetCall = getAdjectives();
  assertNotEquals(valAfterSetCall.length, preDefined.length);
  assertEquals(valAfterSetCall.length, 3);
  assertEquals(valAfterSetCall[1], "white");

  addAdjectives(["blue", "red", "green"]);
  const valAfterAddCall = getAdjectives();
  assertEquals(valAfterAddCall.length > valAfterSetCall.length, true);
  assertEquals(valAfterAddCall.includes("blue"), true);
  assertEquals(valAfterAddCall.includes("green"), true);
});

Deno.test("check if getTemplates() return same as pre-defined sentenceTemplates", () => {
  const val = getTemplates();
  const lastIndex = val.length - 1;
  assertEquals(val.length, sentenceTemplates.length);
  assertEquals(val[0], sentenceTemplates[0]);
  assertEquals(val[9], sentenceTemplates[9]);
  assertEquals(val[lastIndex], sentenceTemplates[lastIndex]);
});

Deno.test("check if addTemplates()/setTemplates() affects to pre-defined sentenceTemplates", () => {
  const preDefined = getTemplates();
  setTemplates([
    "first sentence template",
    "second sentence template",
    "third sentence template",
  ]);
  const valAfterSetCall = getTemplates();
  assertNotEquals(valAfterSetCall.length, preDefined.length);
  assertEquals(valAfterSetCall.length, 3);
  assertEquals(valAfterSetCall[1], "second sentence template");

  addTemplates([
    "fourth sentence template",
    "fifth sentence template",
    "sixth sentence template",
  ]);
  const valAfterAddCall = getTemplates();
  assertEquals(valAfterAddCall.length > valAfterSetCall.length, true);
  assertEquals(valAfterAddCall.includes("fourth sentence template"), true);
  assertEquals(valAfterAddCall.includes("sixth sentence template"), true);
});
