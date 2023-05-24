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
    let list = input[1].split(" ").map((el) => parseInt(el));
    solution(N, list);
    process.exit();
  });

const solution = (N, list) => {
  let left = 0;
  let leftResult = 0;
  let right = N - 1;
  let rightResult = N - 1;
  let min = Number.MAX_SAFE_INTEGER;

  while (left < right) {
    let current = list[left] + list[right];

    if (Math.abs(current) < min) {
      min = Math.abs(current);
      leftResult = left;
      rightResult = right;
    }

    if (current < 0) {
      left += 1;
    } else if (current > 0) {
      right -= 1;
    } else {
      break;
    }
  }

  console.log(list[leftResult] + " " + list[rightResult]);
};
