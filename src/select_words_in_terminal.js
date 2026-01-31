const readMousePoints = async (writer, reader) => {
  const row = [];
  const col = [];
  while (true) {
    const { value } = await reader.read();
    row.push(Math.floor((value[4] - 32) / 8));
    col.push(Math.floor((value[5] - 32) / 3));
    if (value[3] === 35) {
      reader.releaseLock();
      writer.releaseLock();
      return { col, row };
    }
  }
};

const takeCoordinates = async () => {
  Deno.stdin.setRaw(true, { cbreak: true });
  const reader = Deno.stdin.readable.getReader();
  const writer = Deno.stdout.writable.getWriter();
  await writer.write(new TextEncoder().encode("\x1b[?1000h"));
  return await readMousePoints(writer, reader);
};

const convertToPoints = (col, row) => {
  const point1 = (col[0] * 10 + row[0]) - 11;
  const point2 = (col[1] * 10 + row[1]) - 11;
  return { point1, point2 };
};

const colorPositionsInTerminal = async (position, word) => {
  const writer = Deno.stdout.writable.getWriter();
  const encoder = new TextEncoder();

  for (let index = 0; index < position.length; index++) {
    const point = position[index];
    const col = Math.floor(point / 10) * 3 + 3;
    const row = Math.floor(point % 10) * 8 + 7;
    await writer.write(
      encoder.encode(`\x1b[H\x1b[${col};${row}H\x1b[31m ${word[index]}\x1b[0m`),
    );
  }
  writer.releaseLock();
};

const checkPoints = async (col, row, positions, count, words) => {
  const { point1, point2 } = convertToPoints(col, row);

  for (let index = 0; index < positions.length; index++) {
    if (
      positions[index][0] === point1 && positions[index].slice(-1)[0] === point2
    ) {
      count[0]++;
      return await colorPositionsInTerminal(positions[index], words[index]);
    }
  }
};

export const validateInput = async (positions, words) => {
  const count = [0];
  while (count[0] < positions.length) {
    const { col, row } = await takeCoordinates();
    await checkPoints(col, row, positions, count, words);
  }
};
