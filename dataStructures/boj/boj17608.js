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
    let N = parseInt(input[0]);
    let heights = input.slice(1).map((val) => parseInt(val));
    solution(N, heights);
    process.exit();
  });

const solution = (N, heights) => {
  let result = 1;
  let currentTopHeight = heights[N - 1];

  for (let i = N - 2; i >= 0; i--) {
    let current = heights[i];

    if (current > currentTopHeight) {
      result += 1;
      currentTopHeight = current;
    }
  }

  console.log(result);
};
