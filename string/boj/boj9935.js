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
    let firstString = input[0];
    let secondString = input[1];
    solution(firstString, secondString);
    process.exit();
  });

const solution = (inputString, bomb) => {
  const pivot = bomb.charAt(bomb.length - 1);

  let stack = [];

  for (let i = 0; i < inputString.length; i++) {
    stack.push(inputString.charAt(i));

    if (inputString.charAt(i) === pivot) {
      let haveToExtract = true;

      for (let j = 0; j < bomb.length; j++) {
        if (bomb.charAt(bomb.length - 1 - j) !== stack[stack.length - 1 - j])
          haveToExtract = false;
      }

      if (haveToExtract) {
        for (let k = 0; k < bomb.length; k++) {
          stack.pop();
        }
      }
    }
  }

  if (stack.length === 0) {
    console.log("FRULA");
  } else {
    console.log(stack.join(""));
  }
};
