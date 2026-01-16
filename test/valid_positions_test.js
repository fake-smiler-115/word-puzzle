import { assertEquals } from "@std/assert";
import { isValidHorizontal, isValidPattern, isValidVertical } from "../src/valid_positions.js";

Deno.test('random horizontal positions', () => {
  const positions = [1,2,3,4,5,6,7];
  assertEquals(isValidHorizontal(positions),true);
});

Deno.test('horizontal position is less than 0', () => {
  const positions = [4,3,2,1,0,-1,-2];
  assertEquals(isValidHorizontal(positions),false);
});

Deno.test('horizontal position is greater than 100', () => {
  const positions = [99,100,101,102];
  assertEquals(isValidHorizontal(positions),false);
});

Deno.test('horizontal position is less than 0', () => {
  const positions = [60,70,80,90];
  assertEquals(isValidHorizontal(positions),true);
});

Deno.test('random vertical positions', () => {
  const positions = [1,2,3,4,5,6,7];
  assertEquals(isValidVertical(positions),true);
});

Deno.test('positions are not in vertical range (increasing)', () => {
  const positions = [8,9,10,11];
  assertEquals(isValidVertical(positions),false);
});

Deno.test('positions are not in vertical range (decreasing)', () => {
  const positions = [81,80,79,78];
  assertEquals(isValidVertical(positions),false);
});

Deno.test('at the boundary end', () => {
  const positions = [87,88,89,90];
  assertEquals(isValidVertical(positions),false);
});

Deno.test('positions with horizontal pattern', () => {
  const positions = [1,2,3,4,5,6,7];
  assertEquals(isValidPattern(positions,-1),true);
});

Deno.test(' positions with vertical pattern', () => {
  const positions = [10,30,50,70];
  assertEquals(isValidPattern(positions,10),true);
});