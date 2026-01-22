import { generatePositions } from "./src/generate_position.js";
import { createPuzzle, printPuzzle } from "./src/print_words.js";
import { selectWords } from "./src/select_random_words.js";

const main = async () => {
  const words = await selectWords();
  const positions = words.map(word => generatePositions(word.length));
  console.log(words, positions);
  
  const puzzle = createPuzzle(words,positions);
  printPuzzle(puzzle);
}

main()