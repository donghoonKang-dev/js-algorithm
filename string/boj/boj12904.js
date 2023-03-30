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
    let S = input[0];
    let T = input[1];
    solution(S, T);
    process.exit();
  });

const solution = (S, T) => {
  let start = S.split("");
  let finish = T.split("");

  let result = 0;

  while (start.length !== finish.length) {
    if (finish[finish.length - 1] === "A") finish.pop();
    else {
      finish.pop();
      finish.reverse();
    }
  }

  if (JSON.stringify(start) === JSON.stringify(finish)) result = 1;

  console.log(result);
};
