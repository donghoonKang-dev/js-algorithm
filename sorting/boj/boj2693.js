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
    let T = parseInt(input[0]);
    let As = input.slice(1).map((A) => A.split(" ").map((el) => parseInt(el)));
    solution(T, As);
    process.exit();
  });

const solution = (T, As) => {
  As.forEach((A) => console.log(A.sort((a, b) => b - a)[2]));
};
