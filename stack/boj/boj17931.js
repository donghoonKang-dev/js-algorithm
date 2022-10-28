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
    let list = input[1].split(" ").map((el) => parseInt(el));
    solution(n, list);
    process.exit();
  });

const solution = (n, list) => {
  let stack = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) stack.push(list[i]);
    else {
      if (list[i] > stack[stack.length - 1]) stack.push(list[i]);
    }
  }

  console.log(stack.length);
  console.log(stack.join(" "));
};
