const encoder = new TextEncoder();

const writeToTerminal = async (writer, row, col, char) => {
  await writer.write(
    encoder.encode(`\x1b[${row * 3};${col * 8}H${char}`),
  );
};

export const printWords = async (words, positions) => {
  const writer = Deno.stdout.writable.getWriter();

  await writer.write(
    encoder.encode("\x1b[H\x1b[?7l\x1b[?25l"),
  );

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      const position = positions[i][j];
      const row = Math.floor(position / 10) + 1;
      const col = (position % 10) + 1;
      await writeToTerminal(writer, row, col, words[i][j]);
    }
  }

  await writer.write(encoder.encode("\x1b[?25h\x1b[?7h\x1b[0m"));

  writer.releaseLock();
};

