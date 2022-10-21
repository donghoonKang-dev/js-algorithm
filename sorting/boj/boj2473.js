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
  let min = Number.MAX_SAFE_INTEGER;
  let result = [];

  for (let i = 0; i < N - 2; i++) {
    let start = i + 1;
    let end = N - 1;

    while (start < end) {
      let sum = liquids[i] + liquids[start] + liquids[end];

      if (Math.abs(sum) < min) {
        min = Math.abs(sum);
        result[0] = liquids[i];
        result[1] = liquids[start];
        result[2] = liquids[end];

        if (sum === 0) break;
      }

      if (sum > 0) end -= 1;
      else start += 1;
    }
  }

  console.log(result.join(" "));
};
