import { assertEquals } from "@std/assert";
import {
  generatePattern,
  generatePositions,
  getRandomPattern,
  getRandomPoint,
} from "../src/generate_position.js";

Deno.test("testing random position in the grid", () => {
  assertEquals(getRandomPoint(5, 10, () => 0.5), 8);
});

Deno.test("random number is zero", () => {
  assertEquals(getRandomPoint(5, 10, () => 0), 5);
});

Deno.test("random number is one", () => {
  assertEquals(getRandomPoint(5, 10, () => 1), 10);
});

Deno.test("getting the pattern from the random generate pattern", () => {
  assertEquals(getRandomPattern(() => 0.15), 1);
});

Deno.test("getting the pattern -1", () => {
  assertEquals(getRandomPattern(() => 0.4), -1);
});

Deno.test("getting the pattern 10", () => {
  assertEquals(getRandomPattern(() => 0.5), 10);
});

Deno.test("getting the pattern -10", () => {
  assertEquals(getRandomPattern(() => 0.9), -10);
});

Deno.test("generate the pattern or sequence of the pattern", () => {
  assertEquals(generatePattern(5, 10, 10), [10, 20, 30, 40, 50]);
});

Deno.test("generate the pattern or sequence of the pattern", () => {
  assertEquals(generatePattern(5, 10, 10), [10, 20, 30, 40, 50]);
});

Deno.test("generate the pattern using the pattern -10", () => {
  assertEquals(generatePattern(6, 50, -10), [50, 40, 30, 20, 10, 0]);
});

Deno.test("pattern exceeds the boundary less than 0", () => {
  assertEquals(generatePattern(7, 45, -10), [45, 35, 25, 15, 5, -5, -15]);
});

Deno.test("pattern exceeds the boundary greater than 100", () => {
  assertEquals(generatePattern(7, 99, 1), [99, 100, 101, 102, 103, 104, 105]);
});

Deno.test("generate positions for size 5", () => {
  assertEquals(generatePositions(5,[],() => 0.5), [50,60,70,80,90]);
});

Deno.test("generate positions for size 2", () => {
  assertEquals(generatePositions(2,[],() => 0.5), [50,60]);
});
