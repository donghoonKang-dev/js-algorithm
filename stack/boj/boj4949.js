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
    let endFlag = false;
    let index = 0;
    while (!endFlag) {
      if (input[index] === "." || input[index] === ".\n") {
        endFlag = true;
      } else {
        solution(input[index]);
      }
      index += 1;
    }
  });

const solution = (line) => {
  const filteredLine = line
    .split("")
    .filter((char) => ["[", "]", "(", ")"].includes(char));

  let stack = [];
  let errorFlag = false;

  if (filteredLine.length !== 0) {
    for (const char of filteredLine) {
      if (char === "[") stack.push("[");
      else if (char === "(") stack.push("(");
      else if (char === "]") {
        if (stack.length === 0) {
          errorFlag = true;
          break;
        } else {
          if (stack.pop() !== "[") {
            errorFlag = true;
            break;
          }
        }
      } else if (char === ")") {
        if (stack.length === 0) {
          errorFlag = true;
          break;
        } else {
          if (stack.pop() !== "(") {
            errorFlag = true;
            break;
          }
        }
      }
    }
  }

  if (errorFlag || stack.length !== 0) console.log("no");
  else console.log("yes");
};
