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
    let [N, K] = input[0].split(" ").map((el) => parseInt(el));
    let numberArr = input[1].split("").map((el) => parseInt(el));
    solution(N, K, numberArr);
    process.exit();
  });

const solution = (N, K, numberArr) => {
  let stack = [];
  let count = K;

  for (let i = 0; i < N; i++) {
    if (i === 0) stack.push(numberArr[i]);
    else {
      while (stack[stack.length - 1] < numberArr[i] && count > 0) {
        stack.pop();
        count -= 1;
      }
      stack.push(numberArr[i]);
    }
  }

  while (count > 0) {
    stack.pop();
    count -= 1;
  }

  console.log(stack.join(""));
};
