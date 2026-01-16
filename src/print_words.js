export const print_words = async (words, positions) => {
  const writer = Deno.stdout.writable.getWriter();
  const encoder = new TextEncoder();
  await writer.write(encoder.encode("\x1b[2J"));
  console.log(words,positions);
  
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      const position = positions[i][j];
      const row = Math.floor(position / 10) + 1;
      const col = (position % 10) + 1;
      await writer.write(
        encoder.encode(`\x1b[${row + 10};${col + 50}H${words[i][j]}`)
      );
    }
  }

  await writer.write(encoder.encode("\x1b[0m"));
  writer.releaseLock();
};
