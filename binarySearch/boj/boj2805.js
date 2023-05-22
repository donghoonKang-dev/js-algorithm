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
    let list = input.shift().split(" ").map(Number);
    solution(N, M, list);
    process.exit();
  });

const solution = (N, M, list) => {
  let min = 1;
  let max = Math.max(...list);

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);

    let sum = list
      .map((el) => (el - mid > 0 ? el - mid : 0))
      .reduce((acc, curr) => acc + curr, 0);

    if (sum >= M) {
      min = mid + 1;
    } else if (sum < M) {
      max = mid - 1;
    }
  }

  console.log(max);
};
