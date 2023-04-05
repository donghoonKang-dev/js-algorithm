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
    let N = parseInt(input.shift());
    let list = input.map((el) => parseInt(el));
    solution(N, list);
    process.exit();
  });

const solution = (N, list) => {
  let result = 0;

  while (true) {
    let max = 0;

    for (let i = 0; i < N; i++) {
      if (list[i] >= list[max]) max = i;
    }

    if (max === 0) break;

    list[0] += 1;
    list[max] -= 1;
    result += 1;
  }

  console.log(result);
};
