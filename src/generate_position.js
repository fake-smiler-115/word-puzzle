import { isValidPattern } from "./valid_positions.js";

export const getRandomPoint = (min, max, fn = Math.random) =>
  Math.round(fn() * (max - min) + min);

export const getRandomPattern = (fn = Math.random) => {
  const patterns = [1, -1, 10, -10];
  return patterns[getRandomPoint(0, 3, fn)];
};

export const generatePattern = (size, point, pattern) => {
  const wordPositions = [];

  for (let index = 0; index < size; index++) {
    wordPositions.push(point);
    point += pattern;
  }

  return wordPositions;
};

export const generatePositions = (size, fn = Math.random) => {
  const point = getRandomPoint(0, 100, fn);
  const randomPattern = getRandomPattern(fn);
  const positions = generatePattern(size, point, randomPattern);
  if (!isValidPattern(positions, randomPattern)) {
    return generatePositions(size);
  }

  return positions;
};

// generatePositions(9);
