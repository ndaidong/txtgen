import { assertEquals } from "assert";

import { adjectives, nouns } from "../utils/sample.ts";

import { generator, normalize } from "../utils/helper.ts";

Deno.test("check if normalize() works correctly", () => {
  assertEquals(normalize("dog"), "a dog");
  assertEquals(normalize("car"), "a car");
  assertEquals(normalize("hour"), "an hour");
  assertEquals(normalize("egg"), "an egg");
});

Deno.test("check if generator() works correctly", () => {
  assertEquals(nouns.includes(generator.noun()), true);
  assertEquals(generator.a_noun().startsWith("a"), true);
  assertEquals(adjectives.includes(generator.adjective()), true);
  assertEquals(generator.an_adjective().startsWith("a"), true);
});
