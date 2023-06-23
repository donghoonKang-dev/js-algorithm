const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    let N = parseInt(input.shift());
    solution(N, input);
    process.exit();
  });

const solution = (N, input) => {
  const board = input.map((line) => line.split(" ").map(Number));

  const boardDFS = (x, y) => {
    const value = board[x][y];

    if (value === -1) return true;
    if (!value) return false;

    if (x + value < N) {
      const next = boardDFS(x + value, y);
      if (next) return true;
    }

    if (y + value < N) {
      const next = boardDFS(x, y + value);
      if (next) return true;
    }

    return false;
  };

  console.log(boardDFS(0, 0) ? "HaruHaru" : "Hing");
};
