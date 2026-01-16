import { generatePositions } from "./src/generate_position.js";
import { print_words } from "./src/print_words.js";
import { selectWords } from "./src/select_random_words.js";

const main = async () => {
  const words = await selectWords();
  const positions = words.map(word => generatePositions(word.length));
  console.log(words, positions);
  
  await print_words(words,positions);
}

main()