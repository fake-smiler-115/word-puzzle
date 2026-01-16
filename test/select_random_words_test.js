import { assertEquals } from "@std/assert";
import { random } from "../src/select_random_words.js";

Deno.test("random number between the limit", () => {
  assertEquals(random(5, 10, () => 0.5), 8);
});

Deno.test("return minimum number", () => {
  assertEquals(random(5, 10, () => 0), 5);
});

Deno.test("returns max number", () => {
  assertEquals(random(5, 10, () => 1), 10);
});