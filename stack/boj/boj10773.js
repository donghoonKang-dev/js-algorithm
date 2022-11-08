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
    let K = parseInt(input[0]);
    let list = input.slice(1).map((el) => parseInt(el));
    solution(K, list);
    process.exit();
  });

const solution = (K, list) => {
  let stack = [];

  for (let i = 0; i < K; i++) {
    if (list[i] === 0) stack.pop();
    else stack.push(list[i]);
  }

  console.log(stack.reduce((prev, curr) => prev + curr, 0));
};
