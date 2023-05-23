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
    let [N, M] = input.shift().split(" ").map(Number);
    let list = input.shift().split(" ").map(Number);
    solution(N, M, list);
    process.exit();
  });

const solution = (N, M, list) => {
  let min = Math.max(...list);
  let max = list.reduce((acc, curr) => acc + curr, 0);

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    let acc = 0;
    let count = 1;

    for (const lecture of list) {
      if (acc + lecture <= mid) {
        acc += lecture;
      } else {
        count += 1;
        acc = lecture;
      }
    }

    if (count > M) {
      min = mid + 1;
    } else if (count <= M) {
      max = mid - 1;
    }
  }

  console.log(min);
};
