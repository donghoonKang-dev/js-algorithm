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
    solution(input);
    process.exit();
  });

const solution = (input) => {
  let result = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "END") break;

    let flag = true;
    let alphabets = new Set();

    for (const char of input[i].split("")) {
      if (char === " ") continue;
      if (alphabets.has(char)) {
        flag = false;
        break;
      } else {
        alphabets.add(char);
      }
    }

    if (flag) {
      result += input[i];
      if (i !== input.length - 1) result += "\n";
    }
  }

  console.log(result);
};
