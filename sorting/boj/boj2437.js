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
    let list = input[1]
      .split(" ")
      .map((el) => parseInt(el))
      .sort((a, b) => a - b);
    solution(n, list);
    process.exit();
  });

const solution = (n, list) => {
  let max = 0;

  for (let i = 0; i < n; i++) {
    if (list[i] > max + 1) break;
    max += list[i];
  }

  console.log(max + 1);
};
