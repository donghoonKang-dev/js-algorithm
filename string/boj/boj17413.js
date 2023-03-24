const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

readline
  .on("line", function (line) {
    input = line;
    readline.close();
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  let result = "";
  let isReverse = true;
  let stack = [];

  input.split("").forEach((char) => {
    if (char === "<") {
      while (stack.length > 0) {
        result += stack.pop();
      }
      isReverse = false;
      result += char;
    } else if (char === ">") {
      isReverse = true;
      result += char;
    } else if (char === " ") {
      while (stack.length > 0) {
        result += stack.pop();
      }
      result += char;
    } else {
      if (isReverse) {
        stack.push(char);
      } else {
        result += char;
      }
    }
  });

  while (stack.length > 0) {
    result += stack.pop();
  }

  console.log(result);
};

