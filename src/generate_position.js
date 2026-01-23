import { isValidPattern } from "./valid_positions.js";

export const getRandomPoint = (min, max, fn = Math.random) =>
  Math.round(fn() * (max - min) + min);

export const getRandomPattern = (fn = Math.random) => {
  const patterns = [1, -1, 10, -10];
  return patterns[getRandomPoint(0, 3, fn)];
};

export const generatePattern = (size, point, pattern, previousPositions = []) => {
  const wordPositions = [];

  for (let index = 0; index < size; index++) {
    if (previousPositions.includes(point)) {
      return generatePositions(size , previousPositions);
    }
    wordPositions.push(point);
    point += pattern;
  }

  return wordPositions;
};

export const generatePositions = (size,previousPositions, fn = Math.random) => {
  const point = getRandomPoint(0, 100, fn);
  const randomPattern = getRandomPattern(fn);
  const positions = generatePattern(size, point, randomPattern, previousPositions);
  if (!isValidPattern(positions, randomPattern)) {
    return generatePositions(size, previousPositions);
  }

  return positions;
};

export const generatePositionsForWOrds = (words) => {
  const allPositions = [];
  const previousPositions = [];
  for (const word of words) {
    const positions = generatePositions(word.length , previousPositions);
    allPositions.push(positions);
    previousPositions.push(...positions);
  }

  return allPositions;
};

// generatePositions(9);
