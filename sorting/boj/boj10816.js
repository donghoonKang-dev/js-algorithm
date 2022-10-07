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
    let N = parseInt(input[0]);
    let cardNums = input[1].split(" ").map((el) => parseInt(el));
    let M = parseInt(input[2]);
    let questionNums = input[3].split(" ").map((el) => parseInt(el));
    solution(N, cardNums, M, questionNums);
    process.exit();
  });

const solution = (N, cardNums, M, questionNums) => {
  let result = [];

  let cardMap = new Map();

  for (num of cardNums) {
    if (cardMap.has(num)) cardMap.set(num, cardMap.get(num) + 1);
    else cardMap.set(num, 1);
  }

  for (num of questionNums) {
    if (cardMap.has(num)) result.push(cardMap.get(num));
    else result.push(0);
  }

  console.log(result.join(" "));
};
