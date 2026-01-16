import { generatePositions } from "./src/generate_position.js";
import { selectWords } from "./src/select_random_words.js";

const main = async () => {
  const words = await selectWords();
  const positions = words.map(word => generatePositions(word.length));
  for (let i= 0; i< words.length ; i++) {
    console.log(words[i], '   \t' , positions[i]);
    
  }
}

main()