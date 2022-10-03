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
    let N = parseInt(input[0].split(" ")[0]);
    let k = parseInt(input[0].split(" ")[1]);
    let scoreList = input[1].split(" ").map((el) => parseInt(el));
    solution(N, k, scoreList);
    process.exit();
  });

const solution = (N, k, scoreList) => {
  console.log(scoreList.sort((a, b) => b - a)[k - 1]);
};
