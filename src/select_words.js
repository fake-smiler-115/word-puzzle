import { printPuzzle } from "./print_words.js";

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
  const point1 = col[0] * 10 + row[0];
  const point2 = col[1] * 10 + row[1];
  return { point1, point2 };
};

const color = (char) => "\x1B[31m" + char + "\x1B[0m";

const colorPositionsInPuzzle = (position, puzzle) => {
  for (const point of position) {
    const col = Math.floor(point / 10);
    const row = point % 10;
    puzzle[col][row] = color(puzzle[col][row]);
  }
};

const checkPoints = (col, row, positions, puzzle, count) => {
  const { point1, point2 } = convertToPoints(col, row);

  for (const position of positions) {
    if (position[0] === point1 && position.slice(-1)[0] === point2) {
      count[0]++;
      return colorPositionsInPuzzle(position, puzzle);
    }
  }
};

export const validateInput = async (puzzle, positions) => {
  const count = [0];
  while (count[0] < positions.length) {
    printPuzzle(puzzle);
    console.log(positions);
    const { col, row } = await takeCoordinates();
    checkPoints(col, row, positions, puzzle, count);
  }
    printPuzzle(puzzle);
};
