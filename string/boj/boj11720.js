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
    let inputString = input[1];
    solution(n, inputString);
    process.exit();
  });

const solution = (N, inputString) => {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum = sum + parseInt(inputString.charAt(i));
  }
  console.log(sum);
};
