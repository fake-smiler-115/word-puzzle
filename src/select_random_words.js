export const readFile = async (file, fnToRead = Deno.readTextFile) => {
  const data = await fnToRead(file);
  return data.split("\n");
};

export const random = (start, end, fn = Math.random) =>
  Math.ceil(fn() * (end - start)) + start;

export const selectRandomFromFile = async (start, end, file, n) => {
  const words = [];
  const listOfWords = await readFile(file);

  for (let i = 0; i < n; i++) {
    words.push(listOfWords[random(start, end)]);
  }
  return words;
};

export const selectWords = async () => {
  const words = [];
  const fileNames = ["small_words.txt"];
  for (const file of fileNames) {
    const result = await selectRandomFromFile(0, 84, file, 3);
    words.push(...result);
  }

  return words;
};

// selectWords();
