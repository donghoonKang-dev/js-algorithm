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
    let list = input
      .shift()
      .split(" ")
      .map((el) => parseInt(el));
    let M = parseInt(input.shift());
    solution(N, list, M);
    process.exit();
  });

const solution = (N, list, M) => {
  list.sort((a, b) => a - b);

  const totalSum = list.reduce((acc, curr) => acc + curr, 0);

  if (totalSum <= M) {
    console.log(Math.max(...list));
  } else {
    let max = 0;

    for (let i = 1; i <= N - 1; i++) {
      let leftSum = list.slice(0, N - i).reduce((acc, curr) => acc + curr, 0);
      let rightAvg = Math.floor((M - leftSum) / i);

      if (rightAvg > max) max = rightAvg;
    }

    if (Math.min(...list) > max) max = Math.floor(M / N);

    console.log(max);
  }
};
