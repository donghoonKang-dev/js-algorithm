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
  const inputArr = input.split("");

  let result = 0;
  let stack = [];
  let lasers = [];
  let sticks = [];

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === "(") {
      stack.push(["(", i]);
    } else if (inputArr[i] === ")") {
      if (stack[stack.length - 1][0] === "(") {
        let temp = stack.pop();
        if (temp[1] === i - 1) {
          lasers.push(i);
        } else {
          sticks.push([temp[1], i]);
        }
      }
    }
  }

  for (const stick of sticks) {
    let count = 0;
    for (const laser of lasers) {
      if (laser - 0.5 > stick[0] && laser - 0.5 < stick[1]) count += 1;
    }
    result += count + 1;
  }

  console.log(result);
};
