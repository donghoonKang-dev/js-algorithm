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
    let [N, C] = input.shift().split(" ").map(Number);
    let list = input.map(Number);
    solution(N, C, list);
    process.exit();
  });

const solution = (N, C, list) => {
  list.sort((a, b) => a - b);

  let start = 1;
  let end = list[N - 1] - list[0];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    let arr = [];
    for (let i = 0; i < N; i++) {
      if (arr.length === 0) {
        arr.push(list[i]);
      } else {
        if (list[i] - arr[arr.length - 1] >= mid) {
          arr.push(list[i]);
        }
      }
    }

    if (arr.length < C) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  console.log(end);
};
