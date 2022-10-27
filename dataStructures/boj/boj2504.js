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
    solution(input.split(""));
    process.exit();
  });

const solution = (input) => {
  const checkIsRight = (arr) => {
    let stack = [];

    for (const item of arr) {
      if (item === "(" || item === "[") stack.push(item);
      else if (item === ")" && stack.pop() !== "(") return false;
      else if (item === "]" && stack.pop() !== "[") return false;
    }

    if (stack.length !== 0) return false;

    return true;
  };

  const arrToExp = (arr) => {
    let result = "";

    for (let i = 0; i < arr.length; i++) {
      const token = arr[i];

      if (token === "(") {
        if (arr[i + 1] === "(" || arr[i + 1] === "[") result += "2*(";
        else if (arr[i + 1] === ")") result += "2";
      } else if (token === "[") {
        if (arr[i + 1] === "(" || arr[i + 1] === "[") result += "3*(";
        else if (arr[i + 1] === "]") result += "3";
      } else if (token === ")") {
        if (arr[i + 1] === "(" || arr[i + 1] === "[") result += "+";
        else if (arr[i + 1] === ")" || arr[i + 1] === "]") result += ")";
      } else if (token === "]") {
        if (arr[i + 1] === "(" || arr[i + 1] === "[") result += "+";
        else if (arr[i + 1] === ")" || arr[i + 1] === "]") result += ")";
      }
    }

    return result;
  };

  if (checkIsRight(input)) {
    console.log(eval(arrToExp(input)));
  } else {
    console.log(0);
  }
};
