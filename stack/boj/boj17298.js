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
    let list = input[1].split(" ").map((el) => parseInt(el));
    solution(N, list);
    process.exit();
  });

const solution = (N, list) => {
  let stack = [];
  let result = new Array(N).fill(-1);

  for (let i = 0; i < N; i++) {
    while (stack.length > 0 && list[stack[stack.length - 1]] < list[i]) {
      result[stack.pop()] = list[i];
    }
    stack.push(i);
  }

  console.log(result.join(" "));
};
