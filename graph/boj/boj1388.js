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
    let [N, M] = input.shift().split(" ").map(Number);
    solution(N, M, input);
    process.exit();
  });

const solution = (N, M, input) => {
  let floor = input.map((line) => line.split(""));

  let result = 0;

  for (let i = 0; i < N; i++) {
    let flag = true;
    for (let j = 0; j < M; j++) {
      if (flag && floor[i][j] === "-") {
        result += 1;
        flag = false;
      } else if (floor[i][j] === "|") {
        flag = true;
      }
    }
  }

  for (let i = 0; i < M; i++) {
    let flag = true;
    for (let j = 0; j < N; j++) {
      if (flag && floor[j][i] === "|") {
        result += 1;
        flag = false;
      } else if (floor[j][i] === "-") {
        flag = true;
      }
    }
  }

  console.log(result);
};
