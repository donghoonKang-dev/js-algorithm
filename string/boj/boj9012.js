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
    let list = input.slice(1);
    solution(n, list);
    process.exit();
  });

const solution = (T, inputList) => {
  for (let i = 0; i < T; i++) {
    const inputString = inputList[i];

    let stack = [];
    let result = "YES";

    for (let j = 0; j < inputString.length; j++) {
      const token = inputString.charAt(j);

      if (token === "(") stack.push(token);
      else {
        if (stack.length === 0) {
          result = "NO";
          break;
        } else if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          result = "NO";
          break;
        }
      }
    }

    if (stack.length !== 0) result = "NO";
    console.log(result);
  }
};
