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
    let liquids = input[1]
      .split(" ")
      .map((el) => parseInt(el))
      .sort((a, b) => a - b);
    solution(N, liquids);
    process.exit();
  });

const solution = (N, liquids) => {
  let sum = Number.MAX_SAFE_INTEGER;
  let start = 0;
  let end = N - 1;

  let first;
  let second;

  while (start < end) {
    let tempSum = liquids[start] + liquids[end];

    if (Math.abs(tempSum) < Math.abs(sum)) {
      sum = tempSum;
      first = liquids[start];
      second = liquids[end];

      if (tempSum === 0) break;
    }

    if (tempSum > 0) {
      end -= 1;
      continue;
    } else {
      start += 1;
      continue;
    }
  }

  console.log(first + " " + second);
};
