import {
  assertEquals,
  assertGreaterOrEqual,
} from "https://deno.land/std@0.224.0/assert/mod.ts";

import { article, lorem, paragraph, sentence } from "../mod.ts";

const LIMIT = 30;

Deno.test("check if lorem() works correctly", () => {
  for (let i = 0; i < LIMIT; i++) {
    const val = lorem(4, 10);
    assertGreaterOrEqual(val.split(" ").length, 3);
  }
});

Deno.test("check if article() works correctly", () => {
  for (let i = 0; i < LIMIT; i++) {
    const val = article(5);
    assertGreaterOrEqual(val.split("\n\n").length, 3);
  }
});

Deno.test("check if paragraph() works correctly", () => {
  for (let i = 0; i < LIMIT; i++) {
    const val = paragraph(5);
    assertGreaterOrEqual(val.split(".").length, 1);
  }
});

Deno.test("check if sentence() works correctly", () => {
  for (let i = 0; i < LIMIT; i++) {
    const val = sentence();
    assertGreaterOrEqual(val.split(" ").length, 3);
  }
});

Deno.test("check if sentence() with ignoreStartingPhrase flag", () => {
  for (let i = 0; i < LIMIT; i++) {
    const val = sentence(true);
    assertGreaterOrEqual(val.split(" ").length, 3);
  }
});
