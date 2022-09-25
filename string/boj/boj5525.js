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
    let n = parseInt(input[0]);
    let m = parseInt(input[1]);
    let s = input[2];
    solution(n, m, s);
    process.exit();
  });

const solution = (N, M, S) => {
  let result = 0;
  let count = 0;

  let i = 0;
  while (i < M - 1) {
    if (S.substring(i, i + 3) === "IOI") {
      i += 2;
      count += 1;
      if (count === N) {
        result += 1;
        count -= 1;
      }
    } else {
      i += 1;
      count = 0;
    }
  }

  console.log(result);
};
