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
    let T = parseInt(input.shift());
    let index = 0;
    for (let i = 0; i < T; i++) {
      let [M, N, K] = input[index].split(" ").map(Number);
      index += 1;
      let cabbages = input
        .slice(index, index + K)
        .map((line) => line.split(" ").map(Number));
      solution(M, N, K, cabbages);
      index += K;
    }
    process.exit();
  });

const solution = (M, N, K, cabbages) => {
  const field = Array.from(Array(N), () => Array(M).fill(0));

  for (const cabbage of cabbages) {
    field[cabbage[1]][cabbage[0]] = 1;
  }

  let count = 0;

  const dfs = (startX, startY) => {
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];

    for (let i = 0; i < 4; i++) {
      let nextX = startX + dx[i];
      let nextY = startY + dy[i];

      if (nextX < M && nextX >= 0 && nextY < N && nextY >= 0) {
        if (field[nextY][nextX] === 1) {
          field[nextY][nextX] = 0;
          dfs(nextX, nextY);
        }
      }
    }
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (field[j][i] === 1) {
        dfs(i, j);
        count += 1;
      }
    }
  }

  console.log(count);
};
