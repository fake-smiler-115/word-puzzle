export const isValidPattern = (positions, randomPattern) => {
  if (randomPattern === 1 || randomPattern === -1) {
    return isValidVertical(positions);
  }

  return isValidHorizontal(positions);
};

export const isValidHorizontal = (positions) => {
  const lastValue = positions[positions.length - 1];
  return (lastValue > 0 && lastValue < 100);
};

export const isValidVertical = (positions) => {
  const firstValue = positions[0];
  const lastValue = positions[positions.length - 1];
  return Math.floor(firstValue / 10) === Math.floor(lastValue / 10);
};
