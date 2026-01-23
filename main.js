import { generatePositionsForWOrds } from "./src/generate_position.js";
import { createPuzzle } from "./src/print_words.js";
import { selectWords } from "./src/select_random_words.js";
import { validateInput } from "./src/select_words.js";

const main = async () => {
  const words = await selectWords();
  const positions = generatePositionsForWOrds(words);
  console.log(words, positions);
  const puzzle = createPuzzle(words, positions);
  await validateInput(puzzle, positions);
  console.log('Hurry won! 🏆');
};

main();
