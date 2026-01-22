const generateRandomChar = () =>
  Array.from(
    { length: 10 },
    () => String.fromCharCode(97 + Math.floor(Math.random() * 26)),
  );

export const createPuzzle = (words, positions) => {
  const puzzle = Array.from({ length: 10 }).map(generateRandomChar);

  for (let i =0; i < words.length; i++) {
    for (let j =0 ; j< words[i].length; j++ ) {
      const col = positions[i][j] % 10;
      const row = Math.floor(positions[i][j] / 10);
      puzzle[row][col] = words[i][j];
    }
  }

  return puzzle;
};

export const printPuzzle = (puzzle) => {
  const str = puzzle.map(arr => arr.join('\t')).join('\n\n\n');
  console.log(str);
}