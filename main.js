import { generatePositionsForWOrds } from "./src/generate_position.js";
import { createPuzzle } from "./src/print_words.js";
import { printWords } from "./src/print_words_in_terminal.js";
import { selectWords } from "./src/select_random_words.js";
import { randomCharacters, validateInputInArr } from "./src/select_words.js";
import { validateInput } from "./src/select_words_in_terminal.js";

const main = async () => {
  const words = await selectWords();
  const positions = generatePositionsForWOrds(words);
  const [characters, charPositions] = randomCharacters();
  console.clear();
  await printWords(characters, charPositions);
  await printWords(words, positions);

  await validateInput(positions, words);
  console.log("Hurrah won! 🏆");
};
// console.log(words, positions);
// const puzzle = createPuzzle(words, positions);
// await validateInputInArr(puzzle, positions);

main();
