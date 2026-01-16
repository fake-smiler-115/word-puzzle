import { assertEquals } from "@std/assert";
import { random, readFile } from "../src/select_random_words.js";

Deno.test("random number between the limit", () => {
  assertEquals(random(5, 10, () => 0.5), 8);
});

Deno.test("return minimum number", () => {
  assertEquals(random(5, 10, () => 0), 5);
});

Deno.test("testing read text file", async () => {
  const fakeReader = (file) => {
    return file;
  };
  const file = "file Data";
  const actual = await readFile(file, fakeReader);
  assertEquals(actual, ["file Data"]);
});

Deno.test("testing read text file using the ", async () => {
  const fakeReader = (_file) => {
    return "apple\nball\ncat";
  };
  const file = ".txt";
  const actual = await readFile(file, fakeReader);
  assertEquals(actual, ["apple", "ball", "cat"]);
});

Deno.test("returns max number", () => {
  assertEquals(random(5, 10, () => 1), 10);
});
