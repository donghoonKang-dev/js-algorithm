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
  let stack = [];
  let result = "";

  for(let i = 0 ; i < input.length ; i++) {
    const token = input[i];
    if (token >= "A" && token <= "Z") result += token;
    else if (token === "(") stack.push(token);
    else if (token === ")") {
      while(stack.length > 0 && stack[stack.length - 1] !== "(") {
        result += stack.pop();
      }
      stack.pop();
    } else if (token === "+" || token === "-") {
      while(stack.length > 0 && stack[stack.length - 1] !== "(") {
        result += stack.pop();
      }
      stack.push(token);
    } else if (token === "*" || token === "/") {
      while(stack.length > 0 && stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/") {
        result += stack.pop();
      }
      stack.push(token)
    }
  }

  while(stack.length > 0) {
    result += stack.pop();
  }

  console.log(result)
};
