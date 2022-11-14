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
    let [N, P] = input[0].split(" ").map((el) => parseInt(el));
    let list = input
      .slice(1)
      .map((row) => row.split(" ").map((el) => parseInt(el)));
    solution(N, P, list);
    process.exit();
  });

const solution = (N, P, list) => {
  let count = 0;
  let stacks = Array.from({ length: 6 }, () => []);

  for (let i = 0; i < N; i++) {
    let nNum = list[i][0];
    let pNum = list[i][1];

    if (stacks[nNum - 1].length === 0) {
      stacks[nNum - 1].push(pNum);
      count += 1;
    } else if (stacks[nNum - 1][stacks[nNum - 1].length - 1] < pNum) {
      stacks[nNum - 1].push(pNum);
      count += 1;
    } else if (stacks[nNum - 1][stacks[nNum - 1].length - 1] > pNum) {
      while (true) {
        stacks[nNum - 1].pop();
        count += 1;
        if (stacks[nNum - 1].length === 0) {
          stacks[nNum - 1].push(pNum);
          count += 1;
          break;
        } else if (stacks[nNum - 1][stacks[nNum - 1].length - 1] < pNum) {
          stacks[nNum - 1].push(pNum);
          count += 1;
          break;
        } else if (stacks[nNum - 1][stacks[nNum - 1].length - 1] === pNum) {
          break;
        }
      }
    }
  }

  console.log(count);
};
