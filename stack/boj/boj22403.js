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

const solution = (n, list) => {
  const checkIsRight = (arr) => {
    let stack = [];

    for (const item of arr) {
      if (item === "A") stack.push(item);
      else if (item === "Un") {
        if (stack.length !== 0 && stack[stack.length - 1] === "A") stack.pop();
        else return false;
      }
    }

    if (stack.length !== 0) return false;

    return true;
  };

  if (checkIsRight(list)) console.log("YES");
  else console.log("NO");
};
